export type SwitchTabStyle = 'square' | 'round';

export interface SwitchTabOption {
  value: string;
  label: string;
}

export interface SwitchTabProps {
  /** 스타일 */
  style?: SwitchTabStyle;
  /** 옵션 (2개) */
  options?: [SwitchTabOption, SwitchTabOption];
  /** 선택된 값 */
  value?: string;
  /** 비활성 */
  disabled?: boolean;
  /** 값 변경 핸들러 */
  onChange?: (value: string) => void;
  /** 추가 className */
  className?: string;
}
