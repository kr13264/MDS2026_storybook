export type BadgeOverlayType = 'basic' | 'live' | 'liveLabel';
export type BadgeOverlayColor = 'alpha' | 'solid';
export type BadgeOverlayWeight = 'regular' | 'bold';

export interface BadgeOverlayProps {
  /** 뱃지 타입 */
  type?: BadgeOverlayType;
  /** 배경 색상 (basic 전용) */
  color?: BadgeOverlayColor;
  /** 폰트 굵기 (basic 전용) */
  weight?: BadgeOverlayWeight;
  /** 텍스트 (basic, liveLabel 전용) */
  text?: string;
  /** 시청자 수 (liveLabel 전용) */
  viewCount?: string;
}
