import type { ReactionHorizontalProps, ReactionType } from './Horizontal.types';
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

const iconSizeMap = { default: 24, small: 18 } as const;
const pxToIconSize: Record<number, IconSize> = { 24: 'lg', 18: 'sm' };

export const ReactionHorizontal = ({
  type = 'like',
  size = 'default',
  selected = false,
  showCount = true,
  count = 0,
  onClick,
  className = '',
}: ReactionHorizontalProps) => {
  const iconPx = iconSizeMap[size];
  const iconSize = pxToIconSize[iconPx];

  // 텍스트 색상: small=subtle-2, default=subtle-1
  const textColor = size === 'small'
    ? 'var(--color-neutral-foreground-subtle-2, #424242)'
    : 'var(--color-neutral-foreground-subtle-1, #2e2e2e)';

  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
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
      {showCount && (
        <span style={{
          fontFamily: 'var(--typography-font-family-default, Pretendard, -apple-system, sans-serif)',
          fontSize: 'var(--typography-font-size-label-x-small, 14px)',
          fontWeight: 500,
          lineHeight: 'var(--typography-line-height-label-x-small, 19px)',
          letterSpacing: 'var(--typography-letter-spacing-default, -0.3px)',
          color: textColor,
          whiteSpace: 'nowrap',
        }}>
          {count}
        </span>
      )}
    </button>
  );
};

ReactionHorizontal.displayName = 'ReactionHorizontal';
