import type { TabType, TabLayout, TabTone } from '../Tab';

export interface TabItemConfig {
  /** 레이블 텍스트 */
  label: string;
  /** 값 (선택 식별용) */
  value: string;
  /** 비활성 */
  disabled?: boolean;
}

export interface TabListProps {
  /** 탭 스타일 */
  type?: TabType;
  /** 레이아웃 방식 (scrollable: 가변폭 / fixed: 균등 분할) */
  layout?: TabLayout;
  /** 톤 (natural: 기본 / invert: 어두운 배경용) */
  tone?: TabTone;
  /** 탭 항목 목록 */
  items?: TabItemConfig[];
  /** 선택된 값 */
  value?: string;
  /** 값 변경 핸들러 */
  onChange?: (value: string) => void;
  /** 추가 className */
  className?: string;
}
