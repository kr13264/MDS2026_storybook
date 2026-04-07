export type ReactionType = 'like' | 'comment' | 'share' | 'bookmark';
export type ReactionHorizontalSize = 'default' | 'small';

export interface ReactionHorizontalProps {
  /** 리액션 타입 */
  type?: ReactionType;
  /** 사이즈 */
  size?: ReactionHorizontalSize;
  /** 선택 상태 */
  selected?: boolean;
  /** 숫자 표시 여부 */
  showCount?: boolean;
  /** 카운트 값 */
  count?: number;
  /** 클릭 핸들러 */
  onClick?: () => void;
  className?: string;
}
