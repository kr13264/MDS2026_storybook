# SKILL.md — MDS 공통 원칙 & AI 생성 기준

> AI 코드 생성 시 항상 참조해야 할 **제약사항과 기준**입니다.

---

## 1. 프로젝트 스택

| 항목 | 내용 |
|------|------|
| UI 프레임워크 | React 18 + TypeScript |
| 문서화 도구 | Storybook 8.x |
| 스타일링 | **Tailwind CSS v4** + `@bonui/styles 1.55.0` |
| 패키지 매니저 | pnpm |
| 컴포넌트 경로 | `src/components/` |
| Story 경로 | `src/stories/` |
| 글로벌 CSS | `src/index.css` |

---

## 2. BON UI 토큰 사용 원칙

`@bonui/styles`가 설치되어 있으며 `src/index.css`에서 `@import "@bonui/styles"`로 연결되어 있습니다.
모든 토큰은 **Tailwind 클래스** 또는 **CSS 변수(`var(--color-*)`)**로 사용합니다.

### 컬러 — Tailwind 클래스

| 용도 | Tailwind 클래스 |
|------|----------------|
| 기본 배경 | `bg-neutral-background-default` |
| 카드/패널 배경 | `bg-neutral-background-base-basic` |
| Raised 배경 | `bg-neutral-background-raised-1` |
| Disabled 배경 | `bg-neutral-background-disabled` |
| 기본 텍스트 | `text-neutral-foreground-default` |
| 보조 텍스트 | `text-neutral-foreground-subtle-1` |
| 비활성 텍스트 | `text-neutral-foreground-disabled` |
| 반전 텍스트 | `text-neutral-foreground-inverted-default` |
| 기본 테두리 | `border-neutral-stroke-default` |
| 구분선 | `border-neutral-stroke-divider` |
| Primary 배경 | `bg-primary-background-default` |
| Primary 텍스트 | `text-primary-foreground-default` |
| Primary 반전 | `text-primary-foreground-inverted` |
| Primary 테두리 | `border-primary-stroke-default` |
| Secondary 배경 | `bg-secondary-background-default` |
| Secondary 텍스트 | `text-secondary-foreground-default` |
| 성공 | `text-function-positive-default` / `bg-function-positive-subtle` |
| 오류 | `text-function-negative-default` / `bg-function-negative-subtle` |
| 경고 | `text-function-attention-default` / `bg-function-attention-subtle` |
| 정보 | `text-function-informative-default` / `bg-function-informative-subtle` |

### 컬러 — inline style 사용 시 CSS 변수

> Tailwind 클래스로 표현 불가한 경우에만 허용

```tsx
// ✅ CSS 변수는 반드시 --color-* 접두사 사용
style={{ backgroundColor: 'var(--color-neutral-background-raised-1)' }}
style={{ color: 'var(--color-neutral-foreground-default)' }}
style={{ borderColor: 'var(--color-neutral-stroke-divider)' }}

// ❌ 구버전 변수명 사용 금지
style={{ backgroundColor: 'var(--neutral-background-raised-1)' }}  // ❌
```

### 컬러 — inline style 하드코딩 허용값 (스토리/문서용만)

| 용도 | 값 |
|------|-----|
| 기본 텍스트 | `#111122` |
| 보조 텍스트 | `#55557A` |
| 비활성 레이블 | `#9999B8` |
| disabled | `#BBBBCC` |
| 구분선 | `#E4E4EE` |
| 배경 | `#F5F5F8` |
| Primary (green) | `#03A94D` |
| Primary 배경 (연두) | `#E6F9EE` |
| Secondary (blue) | `#3283FD` |

### 타이포그래피

```tsx
// font-size: text-10 ~ text-40
<p className="text-14 leading-20 font-normal" />
<h1 className="text-24 leading-32 font-bold tracking-bon-tighter" />

// 사용 가능한 font-size: 10 11 12 13 14 15 16 17 18 19 20 22 24 26 28 32 40
// 사용 가능한 leading:   12 13 15 16 17 18 19 20 21 22 23 24 25 26 27 28 32 34 36 40 48
// letter-spacing: tracking-bon-tight(-0.3px) · tracking-bon-tighter(-0.4px) · tracking-bon-tightest(-1px)
```

### 스페이싱

```tsx
// p-{token}, m-{token}, gap-{token}, w-{token}, h-{token} 모두 동작
<div className="p-m gap-xs" />   // p-m = 12px, gap-xs = 8px

// 토큰: none(0) 4xs(2px) 3xs(4px) 2xs(6px) xs(8px) s(10px) m(12px)
//        l(16px) xl(20px) 2xl(24px) 3xl(28px) 4xl(32px) 5xl(36px)
```

### Border Radius

```tsx
rounded-sm    // 4px  (--radius-2xs)
rounded       // 6px  (--radius-xs)
rounded-md    // 8px  (--radius-s)
rounded-lg    // 12px (--radius-m)
rounded-xl    // 20px (--radius-xl)
rounded-2xl   // 24px (--radius-2xl)
rounded-3xl   // 28px (--radius-3xl)
rounded-full  // 999px
```

### Shadow

```tsx
<div className="shadow" />   // --shadow-light-neutral-default
```

### Gradient

```tsx
// from-* / via-* / to-* 로 사용
<div className="bg-gradient-to-br from-gradient-ai-1 to-gradient-ai-3" />

// 사용 가능한 gradient 토큰:
// gradient-ai-{1,2,3}
// gradient-green-dot-{1,2,3}
// gradient-n-logo-{1,2}
// gradient-placeholder-{1,2}
```

### 다크 모드

```tsx
// .dark 클래스를 html/body에 적용하면 자동 전환
<div className="bg-neutral-background-default dark:bg-neutral-background-inverted-1" />
```

---

## 3. AI 생성 제약사항

### ✅ 필수

- **TypeScript** 사용 필수. `any` 타입 금지
- **Tailwind CSS v4** 클래스 우선 사용
- BON UI 토큰 우선 — 하드코딩 HEX 금지 (스토리/문서용 제외)
- 컴포넌트는 `src/components/` 하위
- Story는 `src/stories/` 하위
- **아이콘은 `src/components/Icon/`(Assets)에 있는 MDS 아이콘을 참조하여 구현한다** — 인라인 SVG를 직접 그리지 않고 MDS Icon 컴포넌트(`<Icon name="..." />`)를 우선 사용

### ❌ 금지

- `style={{ }}` inline 스타일 (동적 값 필요 시에만 예외)
- 구버전 CSS 변수 `var(--neutral-*)` `var(--primary-*)` → `var(--color-*)` 사용
- `@tailwind base/components/utilities` 지시어 (v3 문법, v4에서 사용 불가)
- `tailwind.config.js` 생성 (v4는 `@theme` in CSS 방식)
- `any`, `unknown` 무분별 사용
- `!important` CSS

### 📐 반응형 브레이크포인트

```
sm:  640px  — 모바일 (가로)
md:  768px  — 태블릿
lg:  1024px — 데스크탑 소형
xl:  1280px — 데스크탑
2xl: 1536px — 와이드
```

---

## 4. Story 파일 템플릿

> **autodocs 사용 금지** — `tags: ['autodocs']` 제거하고, 반드시 **MDX Docs 파일**을 함께 생성한다.

### Story 파일 (`{Name}.stories.tsx`)

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from '@/components/ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  // docs page는 {Name}.mdx에서 관리 — tags: ['autodocs'] 사용 금지
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Playground: Story = {
  args: { /* default props */ },
};
```

### MDX Docs 파일 (`{Name}.mdx`)

컴포넌트 스토리와 같은 폴더에 MDX 파일을 생성한다. 아래 구조를 그대로 따른다.

```mdx
import { Meta, Canvas, Controls, Stories } from '@storybook/blocks';
import * as ComponentStories from './ComponentName.stories';

<Meta of={ComponentStories} />

# ComponentName

컴포넌트 설명 한 줄.

---

<div style={{marginBottom: '40px'}} />

## Preview

<Canvas of={ComponentStories.Playground} sourceState="hidden" />

## Properties

<Controls of={ComponentStories.Playground} />

---

<div style={{marginBottom: '40px'}} />

<Stories includePrimary={false} />
```

### MDX Docs 레이아웃 규칙

| 순서 | 내용 | 비고 |
|------|------|------|
| 1 | `# 타이틀` | 36px / 800 weight |
| 2 | 설명 텍스트 | 13px / #55557A |
| 3 | `---` + 40px 여백 | 구분선 |
| 4 | `## Preview` | 20px / 700 weight |
| 5 | `<Canvas sourceState="hidden" />` | 소스코드 기본 닫힘 |
| 6 | `## Properties` | 20px / 700 weight |
| 7 | `<Controls />` | 프로퍼티 컨트롤 테이블 |
| 8 | `---` + 40px 여백 | 구분선 |
| 9 | `<Stories />` | 나머지 스토리 (Playground 제외) |

---

## 5. 컴포넌트 디렉토리 구조

```
src/
├── components/
│   └── {Name}/
│       ├── {Sub}/
│       │   ├── {Sub}.tsx
│       │   ├── {Sub}.types.ts
│       │   └── index.ts
│       └── index.ts          ← 서브 컴포넌트 re-export
└── stories/
    ├── foundation/
    ├── icon/                  ← Assets 카테고리 스토리
    ├── components/
    │   └── {Name}/
    │       ├── index.stories.tsx   ← title: 'Components/{Category}/{Name}' (Docs + Overview)
    │       └── {Sub}.stories.tsx   ← title: 'Components/{Category}/{Name}/{Sub}'
    └── templates/
```

---

## 6. Story 가이드

### 사이드바 카테고리 구조

```
Home
Foundation
Assets
├── Icon              ← 아이콘 다운로드 (iframe)
└── container.icon    ← 아이콘 컴포넌트 (Size, Style)
Components
├── Badges            (Docs, Overlay, Ad, Count, Tooltip, Verified)
├── Buttons           (Docs, Basic, Icon, Segment, Group)
├── Chip
├── Controls          (Switch, Search)
├── Dialogs
├── Divider
├── Header
├── Images
├── Pagination
├── Popover
├── Profile
├── Reaction
├── Sheets
├── Snackbar
├── Tabs
└── Thumbnail
Templates
```

### title 네이밍 규칙

스토리 title은 `Components/` 바로 아래에 컴포넌트명을 배치합니다 (중간 카테고리 없음):

```tsx
// ✅ 올바른 title
title: 'Components/Buttons'
title: 'Components/Buttons/Basic'
title: 'Components/Badges'
title: 'Components/Badges/Overlay'
title: 'Components/Dialogs'
title: 'Components/Pagination'
title: 'Assets/Icon'
title: 'Assets/container.icon'

// ❌ 중간 카테고리 금지
title: 'Components/Actions/Buttons'    // Actions 불필요
title: 'Components/Overlay/Dialogs'    // Overlay 불필요
```

### storySort 설정 (.storybook/preview.tsx)

```ts
storySort: {
  order: [
    'Home', 'Foundation',
    'Assets', ['Icon', 'container.icon', '*'],
    'Components',
    [
      'Badges', ['Docs', 'Overlay', 'Ad', 'Count', 'Tooltip', 'Verified', 'Overview', '*'],
      'Buttons', ['Docs', 'Basic', 'Icon', 'Segment', 'Group', 'Overview', '*'],
      'Chip',
      'Controls', ['Docs', 'Switch', 'Search', '*'],
      'Dialogs',
      'Divider',
      'Header',
      'Images',
      'Pagination',
      'Popover',
      'Profile',
      'Reaction',
      'Sheets',
      'Snackbar',
      'Tabs',
      'Thumbnail',
      '*',
    ],
    'Templates', '*',
  ],
},
```

### 스토리 구성 순서

| 순서 | export 명 | 내용 |
|------|-----------|------|
| 1 | `Playground` | 모든 prop 조작 가능 |
| 2 | `Sizes` | 사이즈별 시각화 |
| 3 | `Emphasis` | 강조 상태 비교 (false/true 비교) |
| 4 | `Selected` | 선택 상태 비교 (해당 컴포넌트만) |
| 5 | `Contents` | 슬롯/prop별 케이스 |
| 6 | `Matrix` | Size × 상태 조합 전체 표 |

### Story name 규칙

`name` 속성에서 `—` 뒤 옵션 목록 **제거** — 단독 명사만 사용

```tsx
// ❌ 금지
{ name: 'Size — default · small' }

// ✅ 올바른 형식
{ name: 'Size' }
{ name: 'Emphasis' }
{ name: 'Selected' }
```

### Docs 설명 위치

> 컴포넌트 설명은 **MDX 파일**의 `# 타이틀` 아래에 직접 작성한다.
> `meta.parameters.docs.description`은 더 이상 사용하지 않는다.

### 레이아웃 헬퍼 (스토리 파일 공통)

```tsx
const Row = ({ children, gap = 24 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#9999B8', margin: '0 0 4px' }}>{label}</p>
    {desc && <p style={{ fontSize: 12, color: '#55557A', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);
```

---

## 7. 스토리 UI 배치 규칙

### 테이블 배경색 (절대 규칙)

| 영역 | 토큰 |
|------|------|
| `<thead>` 헤더 행 | `var(--color-neutral-background-raised-1)` |
| `<tbody>` 내용 행 | `var(--color-neutral-background-default)` |
| 테두리 | `var(--color-neutral-stroke-divider)` |

```tsx
// ✅ 올바른 테이블 스타일
<thead>
  <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
    ...
  </tr>
</thead>
<tbody>
  <tr style={{ background: 'var(--color-neutral-background-default)' }}>
    ...
  </tr>
</tbody>
```

### 카드 / 배너 배경색

| 영역 | 토큰 |
|------|------|
| 정보 배너 (텍스트 박스) | `var(--color-neutral-background-separated-1)` |
| 아이콘 카드, 일반 컨텐츠 카드 | `var(--color-neutral-background-default)` |
| 페이지 전체 배경 | `var(--color-neutral-background-default)` |

> ⚠️ 라이트/다크 모드 모두 대응해야 하므로 **hex 하드코딩 절대 금지**. 반드시 `var(--color-*)` 사용.

### Docs 페이지 타이포그래피 (preview.tsx)

Storybook autodocs 제목(`.sbdocs-title`)은 **Pretendard 36px Bold**로 오버라이드합니다.
`preview.tsx`의 `DOCS_TYPOGRAPHY_CSS`에서 관리합니다.

```css
.sbdocs-title {
  font-family: 'Pretendard', sans-serif !important;
  font-size: 36px !important;
  font-weight: 700 !important;
}
.sbdocs h2, .sbdocs h3, .sbdocs h4 {
  font-family: 'Pretendard', sans-serif !important;
  font-weight: 700 !important;
}
```

---

## 8. Storybook 셋업 주의사항

### 절대 금지

- **`vite.config.ts` 생성 금지** — `@vitejs/plugin-react`는 ESM-only로 Storybook 번들 시 esbuild CJS 오류 발생. `viteFinal` in `.storybook/main.ts`로 모든 설정 처리.
- **`@tailwind base/components/utilities` 지시어 금지** — Tailwind v3 문법, v4 미지원

### 필수 패키지

`package.json` devDependencies에 `"storybook": "^8.x.x"` 포함 필요 — 없으면 `storybook/internal/preview/runtime` 미해결 오류 발생

### 서버 재시작 전 체크

```bash
# 캐시 삭제 (stale 이슈 해결)
rm -rf node_modules/.cache

# 기존 프로세스 종료 (포트 충돌 방지)
lsof -i :6006 -i :6007  # 확인 후 kill
```

### @ alias 설정 (`.storybook/main.ts`)

`viteFinal`에서 `process.cwd()` 사용 (not `__dirname`). `mergeConfig`나 `vite-tsconfig-paths` **사용 금지** — dev 모드에서 적용 불안정.

```ts
viteFinal(config) {
  const src = path.resolve(process.cwd(), 'src');
  config.resolve = config.resolve ?? {};
  const alias = config.resolve.alias;
  if (Array.isArray(alias)) {
    alias.push({ find: '@', replacement: src });
  } else {
    config.resolve.alias = { ...(alias as Record<string, string> ?? {}), '@': src };
  }
  return config;
},
```

---

## 9. Vercel 배포 (정적 배포)

`@bonui/styles`가 사내 npm 레지스트리에 있어 Vercel에서 `pnpm install` 불가. **로컬 빌드 → 정적 파일 배포** 방식 사용.

### Vercel 프로젝트 설정

| 항목 | 값 |
|------|-----|
| Install Command | `exit 0` |
| Build Command | `exit 0` |
| Output Directory | `storybook-static` |

### 배포 순서

```bash
# 1. 로컬에서 Storybook 빌드
pnpm build-storybook

# 2. storybook-static 포함하여 커밋
git add -f storybook-static/
git commit -m "chore: rebuild storybook-static"

# 3. GitHub push → Vercel 자동 배포
git push mystory main
```

### Git 리모트 구성

| 리모트 | URL | 용도 |
|--------|-----|------|
| `origin` | `oss.navercorp.com/nappmain/MDS2026` | 사내 저장소 |
| `mystory` | `github.com/kr13264/MDS2026_storybook` | Vercel 배포용 |

---

## 10. MDS Builder 규칙

MDS Builder는 Storybook 내에서 모바일 앱 화면을 시각적으로 조합하는 도구입니다.

### 파일 구조

| 파일 | 설명 |
|------|------|
| `src/builder/BuilderPlayground.tsx` | 메인 빌더 (Palette, NodeRenderer, PreviewRenderer, 에디터 포함) |
| `src/builder/ComponentRegistry.ts` | JSON 스키마 component 이름 → React 컴포넌트 매핑 |
| `src/builder/schemaData.ts` | Vite glob으로 `mds-schema/components/*.json` 로드 |
| `src/stories/builder/BuilderPlayground.stories.tsx` | Story: `Builder/Playground` |
| `src/stories/templates/LandingPage.stories.tsx` | Story: `Templates/Builder Guide` |

### 계층 구조 (Layer Hierarchy)

```
root
└── section (header / body / footer)
    └── items (L1: vert / horz / grid 방향 설정)
        └── comp (실제 MDS 컴포넌트)
```

- **root** — 페이지 최상위, 3개의 section을 가짐
- **section** — `header`, `body`, `footer`. 각각 gap/padding 설정 가능
- **items** — 컴포넌트 그룹. 방향(vert/horz/grid) 설정 가능
- **comp** — 실제 렌더링되는 MDS 컴포넌트 (Thumbnail, ButtonBasic 등)

### 컴포넌트 추가 규칙

1. **컴포넌트 클릭** → 항상 새 items 그룹 생성 (그 안에 comp 1개)
2. **같은 컴포넌트 다시 클릭** → 마지막 items 그룹에 추가 (vert/horz/grid 방향 설정 가능)
3. **다른 컴포넌트 클릭** → 새 items 그룹 생성
4. **"+ 생성" 버튼** → 빈 items 그룹 수동 생성

### 섹션 제한

| 섹션 | 제한 |
|------|------|
| header | items 그룹 자유 추가 |
| body | items 그룹 10개 이하 |
| footer | items 그룹 자유 추가 |

### Items 방향 (ItemsDirection)

| 값 | 설명 | CSS |
|----|------|-----|
| `vert` | 세로 나열 | `flex-direction: column` |
| `horz` | 가로 캐로셀 | `flex-direction: row` |
| `grid` | 2열 그리드 | `grid-template-columns: repeat(2, 1fr)` |

### 뷰 모드

| 모드 | 설명 |
|------|------|
| **Edit** | 편집 모드 — 점선 테두리, 삭제 버튼, 드래그앤드롭 |
| **Preview** | 미리보기 — 편집 UI 없이 깨끗한 실제 화면 |
| **JSON** | 내보내기용 JSON 구조 확인 |

### Palette 카테고리

| 카테고리 | 컴포넌트 |
|----------|----------|
| Header | Profile, ProfileHorizontal, HeaderTitle, HeaderBlock, Handle, Indicator |
| Body | Thumbnail, ImageRect, TabList, Tab, Chip, Selection, SwitchToggle, SwitchTab, Dialog, Divider |
| Footer | ReactionHorizontal, ReactionVertical, Pagination, ButtonBasic, ButtonIcon, ButtonSegment, ButtonGroup |
| Etc. | PopoverTooltip, PopoverInfo, PopoverMore (Icon, Badge 제외) |

### 기술 제약

- 빌더 내부는 **inline style** 사용 (Tailwind 아님)
- HTML5 Drag and Drop API 사용 (외부 라이브러리 없음)
- Undo/Redo: `Cmd+Z` / `Cmd+Shift+Z` (ref 기반 history stack, 최대 50)
- 캔버스 폰 프레임: width 393px, 높이 hug (콘텐츠 맞춤)
- Thumbnail/ImageRect는 빌더 내에서 `width: '100%'`로 강제 전달

---

## 11. 참고

- Storybook 로컬: `http://localhost:6006/`
- Tailwind CSS v4 docs: https://tailwindcss.com
- Pretendard: https://github.com/orioncactus/pretendard
