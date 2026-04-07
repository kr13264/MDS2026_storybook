export type ReactionType = 'like' | 'comment' | 'share' | 'bookmark';
export type ReactionVerticalSize = 'large' | 'medium' | 'small';

export interface ReactionVerticalProps {
  /** 리액션 타입 */
  type?: ReactionType;
  /** 사이즈 */
  size?: ReactionVerticalSize;
  /** 선택 상태 */
  selected?: boolean;
  /** 레이블/숫자 표시 여부 */
  showLabel?: boolean;
  /** 카운트 값 (small 사이즈에서 숫자 표시) */
  count?: number;
  /** 클릭 핸들러 */
  onClick?: () => void;
  className?: string;
}
