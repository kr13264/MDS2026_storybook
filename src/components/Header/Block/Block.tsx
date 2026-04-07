import type { HeaderBlockProps } from './Block.types';
import { Handle } from '../Handle';

/** 닫기 아이콘 (×) */
const IcClose = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 5L5 15M5 5L15 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeaderBlock = ({
  type = 'SheetsTitle',
  title = '타이틀',
  trailingSlot = true,
  back,
  className = '',
}: HeaderBlockProps) => {
  const isSheetsTitle = type === 'SheetsTitle';

  const titleStyle: React.CSSProperties = {
    fontFamily: 'var(--typography-font-family-default, Pretendard, sans-serif)',
    fontSize: 'var(--typography-font-size-heading-x-small, 18px)',
    fontWeight: 700,
    lineHeight: 'var(--typography-line-height-heading-x-small, 24px)',
    letterSpacing: 'var(--typography-letter-spacing-default, -0.3px)',
    color: 'var(--color-neutral-foreground-default, #000)',
    whiteSpace: 'nowrap' as const,
    margin: 0,
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: 'var(--color-neutral-background-default, #fff)',
        overflow: 'hidden',
        ...(isSheetsTitle
          ? {
              borderTopLeftRadius: 'var(--radius-3xl, 28px)',
              borderTopRightRadius: 'var(--radius-3xl, 28px)',
              paddingBottom: 12,
            }
          : {
              height: 62,
              justifyContent: 'center',
            }),
      }}
    >
      {/* Handle — SheetsTitle만 표시 */}
      {isSheetsTitle && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: 27,
            paddingTop: 6,
            paddingBottom: 16,
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 36,
              height: 5,
              borderRadius: 'var(--radius-full, 999px)',
              backgroundColor: 'var(--color-neutral-foreground-decorative-2, #C9C9C9)',
              flexShrink: 0,
            }}
          />
        </div>
      )}

      {/* Title row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: 30,
          paddingLeft: 20,
          paddingRight: 20,
          flexShrink: 0,
        }}
      >
        {/* Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flex: '1 0 0',
            minWidth: 0,
          }}
        >
          <p style={titleStyle}>{title}</p>
        </div>

        {/* Trailing */}
        {trailingSlot && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              height: 30,
              flexShrink: 0,
              overflow: 'hidden',
              color: 'var(--color-neutral-foreground-default, #000)',
            }}
          >
            {back ?? <IcClose />}
          </div>
        )}
      </div>
    </div>
  );
};

HeaderBlock.displayName = 'HeaderBlock';
