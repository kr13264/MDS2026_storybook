import type { BadgeAdProps, BadgeAdType } from './Ad.types';

// ── 별 아이콘 ────────────────────────────────────────────────────────────────
const IcStar = () => (
  <svg width={11} height={11} viewBox="0 0 11 11" fill="#F4361E">
    <path d="M5.5 0l1.4 3.4L10.5 4l-2.6 2.5.6 3.5L5.5 8.2 2.5 10l.6-3.5L.5 4l3.6-.6L5.5 0z" />
  </svg>
);

// ── 점 구분자 ─────────────────────────────────────────────────────────────────
const Dot = () => (
  <span
    style={{
      width: 3,
      height: 3,
      borderRadius: '50%',
      background: 'rgba(0,0,0,0.08)',
      flexShrink: 0,
    }}
  />
);

// ── 스타일 토큰 ──────────────────────────────────────────────────────────────
interface AdToken {
  bg: string;
  color: string;
  border?: string;
  radius: number;
  height: number;
  fontSize: number;
  fontWeight: number;
  lineHeight: string;
  padding: string;
}

const tokens: Record<BadgeAdType, AdToken> = {
  best:        { bg: '#EAF3FF', color: '#3283FD', radius: 4, height: 28, fontSize: 12, fontWeight: 700, lineHeight: '16px', padding: '6px' },
  couponBig:   { bg: '#FEF6F5', color: '#F4361E', radius: 4, height: 28, fontSize: 12, fontWeight: 700, lineHeight: '16px', padding: '6px' },
  official:    { bg: '#EAF3FF', color: '#3283FD', radius: 2, height: 16, fontSize: 11, fontWeight: 600, lineHeight: '13px', padding: '2px 4px' },
  couponSmall: { bg: '#FEF6F5', color: '#F4361E', radius: 2, height: 16, fontSize: 11, fontWeight: 600, lineHeight: '13px', padding: '2px 4px' },
  purchase:    { bg: 'transparent', color: '#03A94D', border: '1px solid #81E3AC', radius: 2, height: 18, fontSize: 12, fontWeight: 400, lineHeight: '16px', padding: '1px 4px' },
  rating:      { bg: 'transparent', color: '#2E2E2E', border: '1px solid #FAB49D', radius: 2, height: 18, fontSize: 12, fontWeight: 700, lineHeight: '16px', padding: '1px 4px' },
  review:      { bg: 'transparent', color: '#F5693B', border: '1px solid #FAB49D', radius: 2, height: 18, fontSize: 12, fontWeight: 400, lineHeight: '16px', padding: '1px 4px' },
  wish:        { bg: 'transparent', color: '#3283FD', border: '1px solid #98C1FE', radius: 2, height: 18, fontSize: 12, fontWeight: 400, lineHeight: '16px', padding: '1px 4px' },
};

const defaultTexts: Record<BadgeAdType, string> = {
  best: 'BEST아이템',
  couponBig: '1500원 할인쿠폰',
  couponSmall: '할인쿠폰',
  official: '공식',
  purchase: '구매 2',
  rating: '',
  review: '리뷰 2',
  wish: '찜 24',
};

export const BadgeAd = ({
  type = 'best',
  text,
  rating = 4.0,
  reviewCount = 87,
}: BadgeAdProps) => {
  const tk = tokens[type];
  const label = text ?? defaultTexts[type];

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    height: tk.height,
    borderRadius: tk.radius,
    background: tk.bg,
    border: tk.border ?? 'none',
    color: tk.color,
    fontSize: tk.fontSize,
    fontWeight: tk.fontWeight,
    fontFamily: 'Pretendard, -apple-system, sans-serif',
    lineHeight: tk.lineHeight,
    letterSpacing: '-0.3px',
    padding: tk.padding,
    whiteSpace: 'nowrap',
  };

  if (type === 'rating') {
    return (
      <span style={baseStyle}>
        <IcStar />
        <span style={{ fontWeight: 700, color: '#2E2E2E' }}>{rating.toFixed(1)}</span>
        <Dot />
        <span style={{ fontWeight: 400, color: '#A3A3A3' }}>{reviewCount}</span>
      </span>
    );
  }

  return <span style={baseStyle}>{label}</span>;
};

BadgeAd.displayName = 'BadgeAd';
