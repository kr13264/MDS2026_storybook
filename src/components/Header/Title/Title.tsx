import type { HeaderTitleProps } from './Title.types';

/** 뒤로가기 화살표 아이콘 (←) */
const IcArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.25 14.25L6 9L11.25 3.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

/** 기본 prefix/suffix 아이콘 (placeholder) */
const IcDefault = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const HeaderTitle = ({
  title = '타이틀',
  layout = 'Left',
  leadingSlot = true,
  trailingSlot = true,
  front,
  back,
  titlePrefix = false,
  titlePrefixIcon,
  titleSuffix = false,
  titleSuffixIcon,
  className = '',
}: HeaderTitleProps) => {
  const isCenter = layout === 'Center';

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

  const slotStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    flexShrink: 0,
    overflow: 'hidden',
    color: 'var(--color-neutral-foreground-default, #000)',
  };

  const prefixSuffixSlot: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    flexShrink: 0,
    overflow: 'hidden',
    color: 'var(--color-neutral-foreground-default, #000)',
  };

  const renderFront = () => {
    if (!leadingSlot) return null;
    return (
      <div style={slotStyle}>
        {front ?? <IcArrowLeft />}
      </div>
    );
  };

  const renderBack = () => {
    if (!trailingSlot) return null;
    return (
      <div style={slotStyle}>
        {back ?? <IcClose />}
      </div>
    );
  };

  const renderTitleGroup = () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        height: 30,
        flexShrink: 0,
      }}
    >
      {titlePrefix && (
        <div style={prefixSuffixSlot}>
          {titlePrefixIcon ?? <IcDefault />}
        </div>
      )}
      <p style={titleStyle}>{title}</p>
      {titleSuffix && (
        <div style={prefixSuffixSlot}>
          {titleSuffixIcon ?? <IcDefault />}
        </div>
      )}
    </div>
  );

  if (isCenter) {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 30,
          position: 'relative',
        }}
      >
        {/* Leading — 좌측 고정 */}
        <div style={{ width: 30, flexShrink: 0 }}>
          {renderFront()}
        </div>

        {/* Center — 가운데 타이틀 */}
        <div
          style={{
            flex: '1 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            minWidth: 0,
            height: 30,
          }}
        >
          {renderTitleGroup()}
        </div>

        {/* Trailing — 우측 고정 */}
        <div style={{ width: 30, flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
          {renderBack()}
        </div>
      </div>
    );
  }

  // Left layout
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 30,
      }}
    >
      {/* Leading + Title */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flex: '1 0 0',
          minWidth: 0,
        }}
      >
        {renderFront()}
        {renderTitleGroup()}
      </div>

      {/* Trailing */}
      {renderBack()}
    </div>
  );
};

HeaderTitle.displayName = 'HeaderTitle';
