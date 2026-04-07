export type BadgeCountType = 'default' | 'number' | 'max' | 'new';

export interface BadgeCountProps {
  /** 뱃지 타입 */
  type?: BadgeCountType;
  /** 숫자 (number, max 전용) */
  count?: number;
}
