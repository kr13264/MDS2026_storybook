export type TooltipDirection = 'top' | 'bottom' | 'left' | 'right';
export type TooltipAlign = 'start' | 'center' | 'end';

export interface PopoverTooltipProps {
  /** 말풍선 텍스트 */
  text?: string;
  /** 말풍선 방향 */
  direction?: TooltipDirection;
  /** 꼬리 정렬 */
  align?: TooltipAlign;
  /** 추가 className */
  className?: string;
}
