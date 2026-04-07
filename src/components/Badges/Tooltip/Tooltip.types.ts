export type BadgeTooltipSize = 'sm' | 'md';
export type BadgeTooltipArrowLocation = 'left' | 'right';

export interface BadgeTooltipProps {
  /** 사이즈 */
  size?: BadgeTooltipSize;
  /** 화살표 위치 */
  arrowLocation?: BadgeTooltipArrowLocation;
  /** 텍스트 */
  text?: string;
}
