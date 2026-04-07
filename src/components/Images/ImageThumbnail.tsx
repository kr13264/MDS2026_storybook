import type { ReactNode } from 'react';

export type ImageThumbnailType = 'image' | 'media' | 'gallery';
export type ImageThumbnailRadius = 0 | 8 | 12 | 16 | 20;

export interface ImageThumbnailProps {
  src?: string;
  alt?: string;
  type?: ImageThumbnailType;
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

const shadowGradients = [
  'linear-gradient(to top, rgba(0,0,0,.20) 0%, transparent 60%)',
  'rgba(0,0,0,0.08)',
];

export const ImageThumbnail = ({
  src,
  alt = '',
  type = 'image',
  radius = 0,
  slotTopLeft,
  slotTopRight,
  slotBottomLeft,
  slotBottomRight,
  disabled = false,
  className = '',
}: ImageThumbnailProps) => {
  const hasShadow = type === 'media' || type === 'gallery';

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
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
      {hasShadow && shadowGradients.map((grad, i) => (
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
