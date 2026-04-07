export type ButtonSegmentShape = 'square' | 'round';
export type ButtonSegmentType = 'half' | 'full';

export interface ButtonSegmentOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface ButtonSegmentProps {
  /** 선택지 목록 (2~4개) */
  options: ButtonSegmentOption[];
  /** 현재 선택 값 */
  value: string;
  /** 선택 변경 핸들러 */
  onChange: (value: string) => void;
  /** 버튼 형태 — square(사각) · round(원형) */
  shape?: ButtonSegmentShape;
  /**
   * 너비 유형
   * - `half` : 텍스트 폭 기반, 항목 사이 구분선
   * - `full` : 컨테이너 너비를 항목 수로 균등 분할
   */
  type?: ButtonSegmentType;
  /** 전체 비활성 */
  disabled?: boolean;
  className?: string;
}
