export type BadgeAdType = 'best' | 'couponBig' | 'couponSmall' | 'official' | 'purchase' | 'rating' | 'review' | 'wish';

export interface BadgeAdProps {
  /** 뱃지 타입 */
  type?: BadgeAdType;
  /** 텍스트 (best, couponBig, couponSmall, official, purchase, review, wish) */
  text?: string;
  /** 별점 (rating 전용) */
  rating?: number;
  /** 리뷰 수 (rating 전용) */
  reviewCount?: number;
}
