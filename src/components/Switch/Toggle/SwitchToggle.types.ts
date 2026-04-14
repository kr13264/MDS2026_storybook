export type SwitchToggleSize = 'lg' | 'md' | 'sm';

export interface SwitchToggleProps {
  /** 토글 크기 */
  size?: SwitchToggleSize;
  /** 선택 상태 */
  selected?: boolean;
  /** ON/OFF 라벨 표시 (lg 사이즈만 지원) */
  label?: boolean;
  /** 비활성 */
  disabled?: boolean;
  /** 상태 변경 핸들러 */
  onChange?: (selected: boolean) => void;
  /** 추가 className */
  className?: string;
}
