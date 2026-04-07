import type { ReactionVerticalProps, ReactionType } from './Vertical.types';
import { Icon } from '../../Icon';
import type { IconSize } from '../../Icon/Icon.types';
import type { IconName } from '../../Icon/iconPaths';

// ── 아이콘 매핑 ──────────────────────────────────────────────────────────────
const iconNameMap: Record<ReactionType, IconName> = {
  like: 'like',
  comment: 'comment',
  share: 'shareType1',
  bookmark: 'keep',
};

const labelMap: Record<ReactionType, string> = {
  like: '좋아요',
  comment: '댓글',
  share: '공유',
  bookmark: '저장',
};

const iconSizeMap = { large: 30, medium: 24, small: 18 } as const;
const pxToIconSize: Record<number, IconSize> = { 30: 'xl', 24: 'lg', 18: 'sm' };

export const ReactionVertical = ({
  type = 'like',
  size = 'large',
  selected = false,
  showLabel = true,
  count = 0,
  onClick,
  className = '',
}: ReactionVerticalProps) => {
  const iconPx = iconSizeMap[size];
  const iconSize = pxToIconSize[iconPx];

  // gap: large=4px, medium/small=2px
  const gap = size === 'large' ? 4 : 2;

  // 텍스트 스타일
  let fontSize: string;
  let fontWeight: number;
  let lineHeight: string;
  let textColor: string;

  if (size === 'large') {
    // 11px, default=500/selected=400, 13px, subtle-1
    fontSize = 'var(--typography-font-size-detail-small, 11px)';
    fontWeight = selected ? 400 : 500;
    lineHeight = 'var(--typography-line-height-detail-small, 13px)';
    textColor = 'var(--color-neutral-foreground-subtle-1, #2e2e2e)';
  } else if (size === 'medium') {
    // 12px, 400, 16px, subtle-1
    fontSize = 'var(--typography-font-size-detail-medium, 12px)';
    fontWeight = 400;
    lineHeight = 'var(--typography-line-height-detail-medium, 16px)';
    textColor = 'var(--color-neutral-foreground-subtle-1, #2e2e2e)';
  } else {
    // small: 12px, 500, 16px, subtle-2
    fontSize = 'var(--typography-font-size-detail-medium, 12px)';
    fontWeight = 500;
    lineHeight = 'var(--typography-line-height-detail-medium, 16px)';
    textColor = 'var(--color-neutral-foreground-subtle-2, #424242)';
  }

  const textStyle: React.CSSProperties = {
    fontFamily: 'var(--typography-font-family-default, Pretendard, -apple-system, sans-serif)',
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing: 'var(--typography-letter-spacing-default, -0.3px)',
    color: textColor,
    whiteSpace: 'nowrap',
    textAlign: 'center',
  };

  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap,
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        outline: 'none',
        color: 'var(--color-neutral-foreground-default, #000)',
      }}
    >
      <Icon
        name={iconNameMap[type]}
        variant={selected ? 'filled' : 'outlined'}
        size={iconSize}
      />
      {showLabel && size === 'small' && (
        <span style={textStyle}>{count}</span>
      )}
      {showLabel && (size === 'large' || size === 'medium') && (
        <span style={textStyle}>{labelMap[type]}</span>
      )}
    </button>
  );
};

ReactionVertical.displayName = 'ReactionVertical';
