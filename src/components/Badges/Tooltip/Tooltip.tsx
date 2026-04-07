import type { BadgeTooltipProps, BadgeTooltipSize } from './Tooltip.types';

interface SizeToken {
  height: number;
  fontSize: number;
  fontWeight: number;
  padding: string;
  bg: string;
  arrowSize: number;
}

const sizeTokens: Record<BadgeTooltipSize, SizeToken> = {
  md: { height: 24, fontSize: 11, fontWeight: 700, padding: '5.5px 10px', bg: '#000000', arrowSize: 6 },
  sm: { height: 18, fontSize: 10, fontWeight: 600, padding: '3px 6px', bg: '#F4361E', arrowSize: 5 },
};

export const BadgeTooltip = ({
  size = 'md',
  arrowLocation = 'left',
  text = '일이삼사오육칠팔',
}: BadgeTooltipProps) => {
  const tk = sizeTokens[size];

  const arrowStyle: React.CSSProperties = {
    width: 0,
    height: 0,
    borderLeft: `${tk.arrowSize}px solid transparent`,
    borderRight: `${tk.arrowSize}px solid transparent`,
    borderTop: `${tk.arrowSize}px solid ${tk.bg}`,
    position: 'absolute',
    bottom: -tk.arrowSize + 1,
    ...(arrowLocation === 'left' ? { left: 6 } : { right: 6 }),
  };

  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: arrowLocation === 'left' ? 'flex-start' : 'flex-end', position: 'relative' }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          height: tk.height,
          borderRadius: 999,
          background: tk.bg,
          color: '#ffffff',
          fontSize: tk.fontSize,
          fontWeight: tk.fontWeight,
          fontFamily: 'Pretendard, -apple-system, sans-serif',
          lineHeight: `${tk.height - (size === 'md' ? 11 : 6)}px`,
          letterSpacing: '-0.3px',
          padding: tk.padding,
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
        {text}
      </span>
      <span style={arrowStyle} />
    </span>
  );
};

BadgeTooltip.displayName = 'BadgeTooltip';
