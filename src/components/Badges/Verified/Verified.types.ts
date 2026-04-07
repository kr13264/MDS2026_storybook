export type BadgeVerifiedType = 'official' | 'local' | 'verifiedSm' | 'verifiedLg';

export interface BadgeVerifiedProps {
  /** 인증 뱃지 타입 */
  type?: BadgeVerifiedType;
}
