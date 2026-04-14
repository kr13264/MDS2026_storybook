export type SelectionType = 'check' | 'add' | 'radio';
export type SelectionShape = 'circle' | 'square';

export interface SelectionProps {
  /** 선택 유형 */
  type?: SelectionType;
  /** 형태 (radio는 circle만 지원) */
  shape?: SelectionShape;
  /** 선택 상태 */
  selected?: boolean;
  /** 활성 상태 (false = disabled) */
  enabled?: boolean;
  /** 비활성 */
  disabled?: boolean;
  /** 상태 변경 핸들러 */
  onChange?: (selected: boolean) => void;
  /** 추가 className */
  className?: string;
}
