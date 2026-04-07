import type { IconName } from './iconPaths';

export type IconStyle = 'filled' | 'outlined';
export type IconSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs' | '3xs';

export interface IconProps {
  /** 아이콘 이름 */
  name: IconName;
  /** 아이콘 스타일 */
  variant?: IconStyle;
  /** 아이콘 사이즈 */
  size?: IconSize;
  /** 색상 (CSS color) */
  color?: string;
  className?: string;
}

export type { IconName };
