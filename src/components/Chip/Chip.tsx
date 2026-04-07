import type { ChipProps, ChipSize } from './Chip.types';

// ── 닫기 아이콘 ──────────────────────────────────────────────────────────────
const IcClose = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
    <path d="M2 2l6 6M8 2L2 8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round"/>
  </svg>
);

// ── 사이즈 토큰 ──────────────────────────────────────────────────────────────
const sizeToken: Record<ChipSize, {
  height: number;
  fontSize: number;
  paddingH: number;
  paddingV: number;
  iconHeadSize: number;
  iconTailSize: number;
  thumbnailSize: number;
  gap: number;
}> = {
  sm: { height: 32, fontSize: 14, paddingH: 10, paddingV: 6,  iconHeadSize: 14, iconTailSize: 10, thumbnailSize: 24, gap: 4 },
  md: { height: 36, fontSize: 14, paddingH: 12, paddingV: 8, iconHeadSize: 16, iconTailSize: 10, thumbnailSize: 28, gap: 6 },
};

export const Chip = ({
  type = 'label',
  size = 'md',
  label = '레이블',
  selected = false,
  disabled = false,
  multiSelect = false,
  iconHead,
  iconTail,
  thumbnail,
  onClick,
  onRemove,
  className = '',
}: ChipProps) => {
  const tk = sizeToken[size];
  const showClose = multiSelect && selected;

  // ── 색상 ──────────────────────────────────────────────────────────────────
  const bg          = selected ? 'var(--color-primary-background-default)' : 'var(--color-neutral-background-raised-1)';
  const textColor   = selected ? 'var(--color-neutral-background-static-white)' : 'var(--color-neutral-foreground-default)';
  const borderColor = selected ? 'transparent' : 'var(--color-neutral-stroke-default)';
  const opacity     = disabled ? 0.4 : 1;

  const iconColor = selected ? 'var(--color-neutral-background-static-white)' : 'var(--color-neutral-foreground-subtle-1)';

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: tk.gap,
        height: tk.height,
        padding: `${tk.paddingV}px ${tk.paddingH}px`,
        borderRadius: 999,
        border: `1px solid ${borderColor}`,
        background: bg,
        color: textColor,
        fontSize: tk.fontSize,
        fontWeight: 400,
        fontFamily: 'Pretendard, -apple-system, sans-serif',
        letterSpacing: '-0.3px',
        lineHeight: 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity,
        whiteSpace: 'nowrap',
        transition: 'background 0.15s, border-color 0.15s, color 0.15s',
        outline: 'none',
        flexShrink: 0,
      }}
    >
      {/* 썸네일 이미지 */}
      {type === 'thumbnail' && thumbnail && (
        <span style={{
          width: tk.thumbnailSize, height: tk.thumbnailSize,
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
        }}>
          <img
            src={thumbnail}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </span>
      )}

      {/* 좌측 아이콘 (label, thumbnail 타입) */}
      {type !== 'iconOnly' && type !== 'thumbnail' && iconHead && (
        <span style={{
          width: tk.iconHeadSize, height: tk.iconHeadSize,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: iconColor, flexShrink: 0,
        }}>
          {iconHead}
        </span>
      )}

      {/* 아이콘만 (iconOnly) */}
      {type === 'iconOnly' && iconHead && (
        <span style={{
          width: tk.iconHeadSize, height: tk.iconHeadSize,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: iconColor,
        }}>
          {iconHead}
        </span>
      )}

      {/* 레이블 */}
      {(type === 'label' || type === 'thumbnail') && (
        <span>{label}</span>
      )}

      {/* 우측 아이콘 (iconTail) */}
      {iconTail && !showClose && (
        <span style={{
          width: tk.iconTailSize, height: tk.iconTailSize,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: iconColor, flexShrink: 0,
        }}>
          {iconTail}
        </span>
      )}

      {/* 우측 닫기 (multiSelect 선택 시) */}
      {showClose && (
        <span
          onClick={e => { e.stopPropagation(); onRemove?.(); }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: iconColor, flexShrink: 0, cursor: 'pointer',
          }}
        >
          <IcClose size={tk.iconTailSize} />
        </span>
      )}
    </button>
  );
};

Chip.displayName = 'Chip';
