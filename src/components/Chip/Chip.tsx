import type { ChipProps, ChipSize } from './Chip.types';
import { Icon } from '../Icon';

// ── 닫기 아이콘 (multiSelect) ────────────────────────────────────────────────
const IcClose = () => (
  <svg width={10} height={10} viewBox="0 0 10 10" fill="none">
    <path d="M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

// ── 드롭다운 화살표 아이콘 ──────────────────────────────────────────────────
const IcChevronDown = () => (
  <svg width={10} height={10} viewBox="0 0 10 10" fill="none">
    <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── 사이즈 토큰 ──────────────────────────────────────────────────────────────
const sizeToken: Record<ChipSize, {
  height: number;
  iconHeadSize: number;
  thumbnailSize: number;
}> = {
  sm: { height: 32, iconHeadSize: 14, thumbnailSize: 24 },
  md: { height: 36, iconHeadSize: 16, thumbnailSize: 28 },
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
  const isMultiSelected = multiSelect && selected;
  const isSingleSelected = selected && !multiSelect;
  const isIconOnly = type === 'iconOnly';
  const isThumbnail = type === 'thumbnail';
  const hasIconHead = !!iconHead && type === 'label';
  const hasIconTail = !!iconTail && type === 'label' && !multiSelect;

  // ── 배경색 ────────────────────────────────────────────────────────────────
  let bg: string;
  if (isSingleSelected) {
    bg = 'var(--color-primary-foreground-default, #03a94d)';
  } else if (isMultiSelected) {
    bg = 'var(--color-primary-background-subtle-1, #e6f9ee)';
  } else {
    bg = 'var(--color-neutral-background-default, #fff)';
  }

  // ── 테두리 ────────────────────────────────────────────────────────────────
  let border: string;
  if (isSingleSelected) {
    border = '1px solid transparent';
  } else if (isMultiSelected) {
    border = '1px solid var(--color-primary-foreground-default, #03a94d)';
  } else {
    border = '1px solid var(--color-neutral-stroke-subtle-1, rgba(0,0,0,0.1))';
  }

  // ── 텍스트 색상 ──────────────────────────────────────────────────────────
  let textColor: string;
  if (disabled) {
    textColor = 'var(--color-neutral-foreground-disabled, rgba(0,0,0,0.2))';
  } else if (isSingleSelected) {
    textColor = 'var(--color-neutral-foreground-static-white, #fff)';
  } else if (isMultiSelected) {
    textColor = 'var(--color-primary-foreground-default, #03a94d)';
  } else {
    textColor = 'var(--color-neutral-foreground-default, #000)';
  }

  // ── 패딩 ─────────────────────────────────────────────────────────────────
  let paddingLeft: number;
  let paddingRight: number;

  if (isIconOnly) {
    paddingLeft = 0;
    paddingRight = 0;
  } else if (isThumbnail) {
    paddingLeft = 4;
    paddingRight = size === 'sm' ? 10 : 12;
  } else if (isMultiSelected) {
    // multiSelect selected: label + close icon
    if (hasIconHead) {
      paddingLeft = size === 'sm' ? 8 : 10;
      paddingRight = size === 'sm' ? 10 : 12;
    } else {
      paddingLeft = size === 'sm' ? 10 : 12;
      paddingRight = size === 'sm' ? 10 : 12;
    }
  } else if (hasIconHead && hasIconTail) {
    paddingLeft = size === 'sm' ? 8 : 10;
    paddingRight = size === 'sm' ? 8 : 10;
  } else if (hasIconHead) {
    paddingLeft = size === 'sm' ? 8 : 10;
    paddingRight = size === 'sm' ? 10 : 12;
  } else if (hasIconTail) {
    paddingLeft = size === 'sm' ? 10 : 12;
    paddingRight = size === 'sm' ? 8 : 10;
  } else {
    paddingLeft = size === 'sm' ? 10 : 12;
    paddingRight = size === 'sm' ? 10 : 12;
  }

  // ── gap ──────────────────────────────────────────────────────────────────
  const gap = isMultiSelected ? 8 : isIconOnly ? 0 : 4;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap,
        height: isIconOnly ? tk.height : tk.height,
        width: isIconOnly ? tk.height : undefined,
        minHeight: tk.height,
        maxHeight: tk.height,
        ...(isIconOnly
          ? { minWidth: tk.height, maxWidth: tk.height }
          : { paddingLeft, paddingRight }),
        borderRadius: 999,
        border,
        background: bg,
        color: textColor,
        fontFamily: 'var(--typography-font-family-default, Pretendard, -apple-system, sans-serif)',
        fontSize: 'var(--typography-font-size-label-x-small, 14px)',
        fontWeight: 400,
        lineHeight: 'var(--typography-line-height-label-x-small, 19px)',
        letterSpacing: 'var(--typography-letter-spacing-default, -0.3px)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        whiteSpace: 'nowrap',
        outline: 'none',
        flexShrink: 0,
      }}
    >
      {/* 썸네일 */}
      {isThumbnail && (
        <span style={{
          width: tk.thumbnailSize, height: tk.thumbnailSize,
          borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
          position: 'relative',
        }}>
          {thumbnail ? (
            <img src={thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <span style={{ width: '100%', height: '100%', display: 'block', backgroundColor: 'var(--color-neutral-background-raised-1, #eee)', borderRadius: '50%' }} />
          )}
          <span style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'var(--color-neutral-background-dimmed-ghost, rgba(0,0,0,0.03))',
            borderRadius: '50%',
          }} />
        </span>
      )}

      {/* 좌측 아이콘 (label 타입) */}
      {hasIconHead && (
        <span style={{
          width: tk.iconHeadSize, height: tk.iconHeadSize,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {iconHead}
        </span>
      )}

      {/* 아이콘만 (iconOnly) */}
      {isIconOnly && (
        <span style={{
          width: tk.iconHeadSize, height: tk.iconHeadSize,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {iconHead ?? <Icon name="refresh" variant="outlined" size={size === 'sm' ? 'sm' : 'xs'} />}
        </span>
      )}

      {/* 레이블 */}
      {(type === 'label' || isThumbnail) && (
        <span style={{ textAlign: 'center' }}>{label}</span>
      )}

      {/* 드롭다운 화살표 (iconTail) */}
      {hasIconTail && (
        <span style={{
          width: 10, height: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {iconTail}
        </span>
      )}

      {/* 닫기 아이콘 (multiSelect + selected) */}
      {isMultiSelected && (
        <span
          onClick={e => { e.stopPropagation(); onRemove?.(); }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, cursor: 'pointer',
          }}
        >
          <IcClose />
        </span>
      )}
    </button>
  );
};

Chip.displayName = 'Chip';
