export type ChipType = 'label' | 'iconOnly' | 'thumbnail';
export type ChipSize = 'sm' | 'md';

export interface ChipProps {
  /** 칩 타입 */
  type?: ChipType;
  /** 사이즈 */
  size?: ChipSize;
  /** 레이블 텍스트 (type=label | thumbnail) */
  label?: string;
  /** 선택 상태 */
  selected?: boolean;
  /** 비활성 상태 */
  disabled?: boolean;
  /** 다중 선택 모드 — 선택 시 우측에 닫기 아이콘 표시 */
  multiSelect?: boolean;
  /** 좌측 아이콘 */
  iconHead?: React.ReactNode;
  /** 우측 아이콘 */
  iconTail?: React.ReactNode;
  /** 썸네일 이미지 URL (type=thumbnail) */
  thumbnail?: string;
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 닫기/제거 핸들러 (multiSelect 모드) */
  onRemove?: () => void;
  className?: string;
}
