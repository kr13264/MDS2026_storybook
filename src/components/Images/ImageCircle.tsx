export type ImageCircleType = 'default' | 'noImage' | 'noImgPerson' | 'placeHolder';
export type ImageCircleSize = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const sizeMap: Record<ImageCircleSize, number> = {
  '3xs': 16,
  '2xs': 20,
  'xs':  24,
  'sm':  28,
  'md':  36,
  'lg':  40,
  'xl':  48,
  '2xl': 52,
};

const FALLBACK_BG = 'var(--color-neutral-background-separated-2)';
const ICON_FILL = '#CCCED0';

// noImage: 회색 원 + 기하학적 N 로고 (피그마 light.icon.grayLogo)
const NoImageIcon = ({ size }: { size: number }) => {
  const logoW = Math.round(size * 0.38);
  const logoH = Math.round(logoW * (20 / 22));
  return (
    <svg width={logoW} height={logoH} viewBox="0 0 22 20" aria-hidden="true">
      <rect x="0" y="0" width="5.5" height="20" fill={ICON_FILL} />
      <polygon points="5.5,0 11,0 16.5,20 11,20" fill={ICON_FILL} />
      <rect x="16.5" y="0" width="5.5" height="20" fill={ICON_FILL} />
    </svg>
  );
};

// noImgPerson: 회색 원 + 사람 실루엣 (피그마 light.icon.personWhite, 원 하단에 클리핑)
const NoImgPersonIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="18" r="7" fill={ICON_FILL} />
    <ellipse cx="24" cy="44" rx="14" ry="14" fill={ICON_FILL} />
  </svg>
);

export interface ImageCircleProps {
  src?: string;
  alt?: string;
  type?: ImageCircleType;
  size?: ImageCircleSize;
  disabled?: boolean;
  className?: string;
}

export const ImageCircle = ({
  src,
  alt = '',
  type = 'default',
  size = 'md',
  disabled = false,
  className = '',
}: ImageCircleProps) => {
  const px = sizeMap[size];
  const base: React.CSSProperties = {
    width: px,
    height: px,
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    opacity: disabled ? 0.35 : 1,
    pointerEvents: disabled ? 'none' : undefined,
  };

  if (type === 'placeHolder') {
    return (
      <div
        style={{
          ...base,
          background: 'linear-gradient(90deg, var(--color-function-effect-gradation-placeholder-1, #f0f2f4), var(--color-function-effect-gradation-placeholder-2, #f5f8fb))',
        }}
        className={className}
      />
    );
  }

  if (type === 'noImage') {
    return (
      <div style={{ ...base, background: FALLBACK_BG }} className={className}>
        <NoImageIcon size={px} />
      </div>
    );
  }

  if (type === 'noImgPerson') {
    return (
      <div style={{ ...base, background: FALLBACK_BG }} className={className}>
        <NoImgPersonIcon size={px} />
      </div>
    );
  }

  return (
    <div style={base} className={className}>
      <img
        src={src || `https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop`}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* 3% dim overlay */}
      <div
        style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(0,0,0,0.03)' }}
        aria-hidden="true"
      />
    </div>
  );
};

ImageCircle.displayName = 'ImageCircle';
