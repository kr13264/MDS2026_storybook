import type { BadgeOverlayProps } from './Overlay.types';

const BASE_STYLE: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 26,
  borderRadius: 999,
  fontFamily: 'Pretendard, -apple-system, sans-serif',
  fontSize: 12,
  lineHeight: '16px',
  letterSpacing: '-0.3px',
  color: '#ffffff',
  whiteSpace: 'nowrap',
  padding: '5px 8px',
};

export const BadgeOverlay = ({
  type = 'basic',
  color = 'alpha',
  weight = 'regular',
  text = '배지',
  viewCount = '1.6만 시청',
}: BadgeOverlayProps) => {
  if (type === 'live') {
    return (
      <span style={{ ...BASE_STYLE, background: '#F4361E', fontWeight: 700 }}>
        LIVE
      </span>
    );
  }

  if (type === 'liveLabel') {
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          height: 26,
          borderRadius: 999,
          background: 'rgba(0,0,0,0.5)',
          overflow: 'hidden',
          fontFamily: 'Pretendard, -apple-system, sans-serif',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ ...BASE_STYLE, background: '#F4361E', fontWeight: 700, borderRadius: 999 }}>
          LIVE
        </span>
        <span
          style={{
            fontSize: 12,
            lineHeight: '16px',
            letterSpacing: '-0.3px',
            fontWeight: 400,
            color: '#ffffff',
            padding: '0 8px 0 4px',
          }}
        >
          {viewCount}
        </span>
      </span>
    );
  }

  // basic
  const bg = color === 'alpha' ? 'rgba(0,0,0,0.5)' : '#3283FD';
  return (
    <span style={{ ...BASE_STYLE, background: bg, fontWeight: weight === 'bold' ? 700 : 400 }}>
      {text}
    </span>
  );
};

BadgeOverlay.displayName = 'BadgeOverlay';
