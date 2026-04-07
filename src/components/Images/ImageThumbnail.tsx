import type { ReactNode } from 'react';

export type ImageThumbnailType = 'image' | 'media' | 'gallery';
export type ImageThumbnailRadius = 0 | 8 | 12 | 16 | 20;
export type ImageThumbnailRatio = '1:1' | '3:2' | '3:4' | '3:4.5' | '3:5' | '16:9';

export interface ImageThumbnailProps {
  src?: string;
  alt?: string;
  type?: ImageThumbnailType;
  ratio?: ImageThumbnailRatio;
  radius?: ImageThumbnailRadius;
  /** 좌상단 슬롯 (예: 배지) */
  slotTopLeft?: ReactNode;
  /** 우상단 슬롯 (예: 더보기 아이콘) */
  slotTopRight?: ReactNode;
  /** 좌하단 슬롯 (예: 프로필) */
  slotBottomLeft?: ReactNode;
  /** 우하단 슬롯 (예: 재생시간) */
  slotBottomRight?: ReactNode;
  disabled?: boolean;
  className?: string;
}

const ratioMap: Record<ImageThumbnailRatio, string> = {
  '1:1': '1 / 1',
  '3:2': '3 / 2',
  '3:4': '3 / 4',
  '3:4.5': '2 / 3',
  '3:5': '3 / 5',
  '16:9': '16 / 9',
};

// Media: 하단 그림자 + 8% overlay
const mediaShadow = [
  'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.2) 100%)',
  'rgba(0,0,0,0.08)',
];

// Gallery: 상단 + 하단 그림자 + 8% overlay
const galleryShadow = [
  'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 33%, rgba(0,0,0,0) 100%)',
  'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.2) 100%)',
  'rgba(0,0,0,0.08)',
];

export const ImageThumbnail = ({
  src,
  alt = '',
  type = 'image',
  ratio = '1:1',
  radius = 0,
  slotTopLeft,
  slotTopRight,
  slotBottomLeft,
  slotBottomRight,
  disabled = false,
  className = '',
}: ImageThumbnailProps) => {
  const shadows = type === 'gallery' ? galleryShadow : type === 'media' ? mediaShadow : [];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: ratioMap[ratio],
        borderRadius: radius,
        overflow: 'hidden',
        flexShrink: 0,
        opacity: disabled ? 0.35 : 1,
        pointerEvents: disabled ? 'none' : undefined,
      }}
      className={className}
    >
      {/* 이미지 */}
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--color-neutral-background-separated-1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      )}

      {/* 3% dim (image type with radius) */}
      {type === 'image' && radius > 0 && (
        <div
          style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.03)' }}
          aria-hidden="true"
        />
      )}

      {/* Shadow overlay (media / gallery) */}
      {shadows.map((grad, i) => (
        <div
          key={i}
          style={{ position: 'absolute', inset: 0, background: grad }}
          aria-hidden="true"
        />
      ))}

      {/* Top container */}
      {(slotTopLeft || slotTopRight) && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: 10,
        }}>
          <div>{slotTopLeft}</div>
          <div>{slotTopRight}</div>
        </div>
      )}

      {/* Bottom container */}
      {(slotBottomLeft || slotBottomRight) && (
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: 10,
        }}>
          <div>{slotBottomLeft}</div>
          <div>{slotBottomRight}</div>
        </div>
      )}
    </div>
  );
};

ImageThumbnail.displayName = 'ImageThumbnail';
