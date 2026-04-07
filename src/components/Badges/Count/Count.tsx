import type { BadgeCountProps } from './Count.types';

export const BadgeCount = ({
  type = 'default',
  count = 2,
}: BadgeCountProps) => {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F4361E',
    borderRadius: 999,
    fontFamily: 'Pretendard, -apple-system, sans-serif',
    fontSize: 11,
    lineHeight: '13px',
    letterSpacing: '-0.3px',
    fontWeight: 400,
    color: '#ffffff',
  };

  if (type === 'default') {
    return <span style={{ ...baseStyle, width: 5, height: 5 }} />;
  }

  if (type === 'new') {
    return <span style={{ ...baseStyle, width: 15, height: 15 }} />;
  }

  const displayText = type === 'max' || count > 99 ? '99+' : String(count);

  return (
    <span
      style={{
        ...baseStyle,
        minWidth: 15,
        height: 15,
        padding: '0 4px',
      }}
    >
      {displayText}
    </span>
  );
};

BadgeCount.displayName = 'BadgeCount';
