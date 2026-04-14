/**
 * 빌드 타임에 JSON 스키마를 인라인으로 가져옴
 * (Vite의 import.meta.glob 사용)
 */

export interface PropSchema {
  type: string;
  required: boolean;
  default?: string | number | boolean;
  description?: string;
  values?: (string | number)[];
}

export interface ComponentSchema {
  component: string;
  category: string;
  description: string;
  platform: ('web' | 'app')[];
  props: Record<string, PropSchema>;
}

// Vite glob import — eager 모드로 JSON 로드
const modules = import.meta.glob('../../mds-schema/components/*.json', { eager: true });

export const schemas: ComponentSchema[] = Object.values(modules).map(
  (m) => (m as { default: ComponentSchema }).default ?? (m as ComponentSchema),
);

// 카테고리별 그룹핑
export const schemasByCategory: Record<string, ComponentSchema[]> = {};
for (const s of schemas) {
  if (!schemasByCategory[s.category]) schemasByCategory[s.category] = [];
  schemasByCategory[s.category].push(s);
}
