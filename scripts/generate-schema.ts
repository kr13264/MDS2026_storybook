/**
 * MDS Component Schema Generator
 *
 * .types.ts 파일에서 Props 인터페이스를 파싱하여
 * 플랫폼 독립적인 JSON 스키마를 자동 생성합니다.
 *
 * Usage: npx ts-node --esm scripts/generate-schema.ts
 */

import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

// ── 타입 정의 ──────────────────────────────────────────────────────────────

interface PropDef {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description?: string;
  /** enum 값 목록 (union literal) */
  values?: (string | number)[];
}

interface ComponentSchema {
  /** 컴포넌트 이름 (예: ButtonBasic) */
  component: string;
  /** 카테고리 (예: Buttons) */
  category: string;
  /** 컴포넌트 설명 */
  description: string;
  /** 플랫폼 지원 */
  platform: ('web' | 'app')[];
  /** Props 정의 */
  props: Record<string, {
    type: string;
    required: boolean;
    default?: string | number | boolean;
    description?: string;
    values?: (string | number)[];
  }>;
}

// ── ReactNode/함수 등 빌더에서 제외할 prop 타입 ─────────────────────────────

const EXCLUDED_PROP_TYPES = new Set([
  'ReactNode',
  'React.ReactNode',
  'MouseEventHandler',
  'React.MouseEventHandler',
  'CSSProperties',
  'React.CSSProperties',
]);

/** 이벤트 핸들러/슬롯/className 등 빌더 UI에 불필요한 prop 필터링 */
function isBuilderRelevantProp(prop: PropDef): boolean {
  // className은 빌더에서 직접 제어
  if (prop.name === 'className') return false;
  // ReactNode 슬롯은 빌더에서 children 조합으로 처리
  if (EXCLUDED_PROP_TYPES.has(prop.type)) return false;
  // 이벤트 핸들러 제외
  if (prop.type.includes('=>') || prop.name.startsWith('on')) return false;
  // HTML 속성 상속 (ButtonHTMLAttributes 등)은 개별 파싱 안 함
  return true;
}

// ── AST 파싱 ───────────────────────────────────────────────────────────────

function getJSDocComment(node: ts.Node): string | undefined {
  const fullText = node.getFullText();
  const commentRanges = ts.getLeadingCommentRanges(fullText, 0);
  if (!commentRanges) return undefined;

  for (const range of commentRanges) {
    const comment = fullText.slice(range.pos, range.end);
    // /** ... */ 형태
    const match = comment.match(/\/\*\*\s*(.*?)\s*\*\//s);
    if (match) return match[1].replace(/\s*\*\s*/g, ' ').trim();
  }
  return undefined;
}

function resolveTypeAliases(
  sourceFile: ts.SourceFile,
): Map<string, { values: (string | number)[]; raw: string }> {
  const aliases = new Map<string, { values: (string | number)[]; raw: string }>();

  ts.forEachChild(sourceFile, (node) => {
    if (ts.isTypeAliasDeclaration(node)) {
      const name = node.name.text;
      const typeNode = node.type;

      if (ts.isUnionTypeNode(typeNode)) {
        const values: (string | number)[] = [];
        for (const member of typeNode.types) {
          if (ts.isLiteralTypeNode(member)) {
            if (ts.isStringLiteral(member.literal)) {
              values.push(member.literal.text);
            } else if (ts.isNumericLiteral(member.literal)) {
              values.push(Number(member.literal.text));
            }
          }
        }
        if (values.length > 0) {
          aliases.set(name, { values, raw: node.type.getText(sourceFile) });
        }
      }
    }
  });

  return aliases;
}

function parsePropsInterface(
  sourceFile: ts.SourceFile,
  typeAliases: Map<string, { values: (string | number)[]; raw: string }>,
): { interfaceName: string; props: PropDef[] } | null {
  let result: { interfaceName: string; props: PropDef[] } | null = null;

  ts.forEachChild(sourceFile, (node) => {
    if (!ts.isInterfaceDeclaration(node)) return;
    if (!node.name.text.endsWith('Props')) return;

    const props: PropDef[] = [];

    for (const member of node.members) {
      if (!ts.isPropertySignature(member)) continue;
      if (!member.name || !ts.isIdentifier(member.name)) continue;

      const name = member.name.text;
      const required = !member.questionToken;
      const typeText = member.type ? member.type.getText(sourceFile) : 'unknown';
      const description = getJSDocComment(member);

      let resolvedType = typeText;
      let values: (string | number)[] | undefined;

      // type alias 확인
      const alias = typeAliases.get(typeText);
      if (alias) {
        resolvedType = 'enum';
        values = alias.values;
      }
      // 인라인 유니온 리터럴 확인
      else if (member.type && ts.isUnionTypeNode(member.type)) {
        const literals: (string | number)[] = [];
        for (const t of member.type.types) {
          if (ts.isLiteralTypeNode(t)) {
            if (ts.isStringLiteral(t.literal)) literals.push(t.literal.text);
            else if (ts.isNumericLiteral(t.literal)) literals.push(Number(t.literal.text));
          }
        }
        if (literals.length > 0) {
          resolvedType = 'enum';
          values = literals;
        }
      }
      // 기본 타입 매핑
      else if (typeText === 'string') resolvedType = 'string';
      else if (typeText === 'number') resolvedType = 'number';
      else if (typeText === 'boolean') resolvedType = 'boolean';

      props.push({ name, type: resolvedType, required, description, values });
    }

    result = { interfaceName: node.name.text, props };
  });

  return result;
}

function extractDefaultsFromComponent(componentDir: string, componentName: string): Map<string, string> {
  const defaults = new Map<string, string>();

  const tsxFiles = fs.readdirSync(componentDir).filter(f => f.endsWith('.tsx'));
  for (const file of tsxFiles) {
    const filePath = path.join(componentDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const sf = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);

    function visit(node: ts.Node) {
      // 함수/화살표 함수의 첫 번째 파라미터가 ObjectBindingPattern인 경우
      if (
        (ts.isFunctionDeclaration(node) || ts.isArrowFunction(node) || ts.isFunctionExpression(node)) &&
        node.parameters.length > 0
      ) {
        const param = node.parameters[0];
        if (param.name && ts.isObjectBindingPattern(param.name)) {
          for (const element of param.name.elements) {
            if (element.initializer && ts.isIdentifier(element.name)) {
              const propName = element.name.text;
              const init = element.initializer;
              if (ts.isStringLiteral(init)) {
                defaults.set(propName, init.text);
              } else if (ts.isNumericLiteral(init) || init.kind === ts.SyntaxKind.FirstLiteralToken) {
                defaults.set(propName, init.getText(sf));
              } else if (init.kind === ts.SyntaxKind.TrueKeyword) {
                defaults.set(propName, 'true');
              } else if (init.kind === ts.SyntaxKind.FalseKeyword) {
                defaults.set(propName, 'false');
              }
            }
          }
        }
      }
      ts.forEachChild(node, visit);
    }

    visit(sf);
  }

  return defaults;
}

// ── 메인 로직 ──────────────────────────────────────────────────────────────

function generateSchemas(): ComponentSchema[] {
  const componentsDir = path.resolve(__dirname, '../src/components');
  const schemas: ComponentSchema[] = [];

  function walkDir(dir: string, category: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // 최상위는 카테고리
        if (dir === componentsDir) {
          walkDir(fullPath, entry.name);
        } else {
          walkDir(fullPath, category);
        }
        continue;
      }

      if (!entry.name.endsWith('.types.ts')) continue;

      const source = fs.readFileSync(fullPath, 'utf-8');
      const sourceFile = ts.createSourceFile(
        fullPath,
        source,
        ts.ScriptTarget.Latest,
        true,
      );

      const typeAliases = resolveTypeAliases(sourceFile);
      const parsed = parsePropsInterface(sourceFile, typeAliases);
      if (!parsed) continue;

      const componentName = parsed.interfaceName.replace(/Props$/, '');
      const componentDir = path.dirname(fullPath);
      const defaults = extractDefaultsFromComponent(componentDir, componentName);

      const props: ComponentSchema['props'] = {};

      for (const prop of parsed.props) {
        if (!isBuilderRelevantProp(prop)) continue;

        const entry: ComponentSchema['props'][string] = {
          type: prop.type,
          required: prop.required,
        };

        if (prop.description) entry.description = prop.description;
        if (prop.values) entry.values = prop.values;

        const defaultVal = defaults.get(prop.name);
        if (defaultVal !== undefined) {
          if (defaultVal === 'true' || defaultVal === 'false') {
            entry.default = defaultVal === 'true';
          } else if (defaultVal !== '' && !isNaN(Number(defaultVal))) {
            entry.default = Number(defaultVal);
          } else {
            entry.default = defaultVal;
          }
        }

        props[prop.name] = entry;
      }

      schemas.push({
        component: componentName,
        category,
        description: `MDS ${componentName} component`,
        platform: ['web', 'app'],
        props,
      });
    }
  }

  walkDir(componentsDir, '');
  return schemas;
}

// ── 출력 ────────────────────────────────────────────────────────────────────

const schemas = generateSchemas();

// 개별 파일 출력
const outDir = path.resolve(__dirname, '../mds-schema/components');
fs.mkdirSync(outDir, { recursive: true });

for (const schema of schemas) {
  const filePath = path.join(outDir, `${schema.component}.json`);
  fs.writeFileSync(filePath, JSON.stringify(schema, null, 2) + '\n');
}

// 인덱스 파일 (전체 목록)
const indexPath = path.resolve(__dirname, '../mds-schema/index.json');
const index = {
  version: '1.0.0',
  generatedAt: new Date().toISOString(),
  totalComponents: schemas.length,
  categories: [...new Set(schemas.map(s => s.category))].sort(),
  components: schemas.map(s => ({
    component: s.component,
    category: s.category,
    file: `components/${s.component}.json`,
  })),
};
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n');

// 레이아웃 스키마 (웹 빌더용)
const layoutSchema = {
  version: '1.0.0',
  description: 'MDS Layout Template Schema — 웹 빌더에서 생성되는 레이아웃 JSON 포맷',
  layoutNodeTypes: {
    Layout: {
      description: '레이아웃 컨테이너',
      props: {
        direction: { type: 'enum', values: ['vertical', 'horizontal'], default: 'vertical' },
        gap: { type: 'enum', values: ['none', '4xs', '3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'], default: 'm' },
        padding: { type: 'enum', values: ['none', '4xs', '3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'], default: 'none' },
        align: { type: 'enum', values: ['start', 'center', 'end', 'stretch'], default: 'stretch' },
        justify: { type: 'enum', values: ['start', 'center', 'end', 'between', 'around'], default: 'start' },
        wrap: { type: 'boolean', default: false },
      },
    },
    Grid: {
      description: '그리드 컨테이너',
      props: {
        columns: { type: 'number', default: 2 },
        gap: { type: 'enum', values: ['none', '4xs', '3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'], default: 'm' },
      },
    },
    Spacer: {
      description: '간격 노드',
      props: {
        size: { type: 'enum', values: ['4xs', '3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'], default: 'm' },
      },
    },
  },
  templateFormat: {
    name: { type: 'string', description: '템플릿 이름' },
    platform: { type: 'array', items: 'web | app', description: '지원 플랫폼' },
    root: { type: 'LayoutNode | ComponentNode', description: '루트 노드' },
  },
};

const layoutSchemaPath = path.resolve(__dirname, '../mds-schema/layout-schema.json');
fs.writeFileSync(layoutSchemaPath, JSON.stringify(layoutSchema, null, 2) + '\n');

console.log(`✅ Generated ${schemas.length} component schemas`);
console.log(`📁 Output: mds-schema/`);
console.log(`   ├── index.json`);
console.log(`   ├── layout-schema.json`);
console.log(`   └── components/ (${schemas.length} files)`);

for (const s of schemas) {
  console.log(`       ├── ${s.component}.json (${Object.keys(s.props).length} props)`);
}
