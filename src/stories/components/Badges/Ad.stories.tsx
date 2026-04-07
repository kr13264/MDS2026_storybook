import type { Meta, StoryObj } from '@storybook/react';
import { BadgeAd } from '@/components/Badges/Ad';
import type { BadgeAdType } from '@/components/Badges/Ad';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 12 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: 'Pretendard, sans-serif', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.07em', textTransform: 'uppercase', color: '#9999B8', margin: '0 0 4px',
    }}>{label}</p>
    {desc && <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: '#55557A', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<typeof BadgeAd> = {
  title: 'Assets/Badges/Ad',
  component: BadgeAd,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
커머스/광고용 뱃지 컴포넌트입니다.
상품 카드에서 BEST, 쿠폰, 공식, 구매, 별점, 리뷰, 찜 등을 표시합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Size | Style | Description |
|------|------|-------|-------------|
| \`best\` | Big (28px) | 파란 배경, Bold | BEST아이템 표시 |
| \`couponBig\` | Big (28px) | 빨간 배경, Bold | 할인쿠폰 (금액 포함) |
| \`official\` | Small (16px) | 파란 배경, SemiBold | 공식 스토어 표시 |
| \`couponSmall\` | Small (16px) | 빨간 배경, SemiBold | 할인쿠폰 (텍스트만) |
| \`purchase\` | Outlined (18px) | 초록 테두리, Regular | 구매 수 표시 |
| \`rating\` | Outlined (18px) | 주황 테두리, Bold+Regular | 별점 + 리뷰 수 |
| \`review\` | Outlined (18px) | 주황 테두리, Regular | 리뷰 수 표시 |
| \`wish\` | Outlined (18px) | 파란 테두리, Regular | 찜 수 표시 |

\`\`\`tsx
import { BadgeAd } from '@/components/Badges/Ad';

<BadgeAd type="best" />
<BadgeAd type="couponBig" text="1500원 할인쿠폰" />
<BadgeAd type="rating" rating={4.0} reviewCount={87} />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['best', 'couponBig', 'couponSmall', 'official', 'purchase', 'rating', 'review', 'wish'] satisfies BadgeAdType[], description: '뱃지 타입' },
    text: { control: 'text', description: '텍스트' },
    rating: { control: { type: 'number', min: 0, max: 5, step: 0.1 }, description: '별점 (rating 전용)' },
    reviewCount: { control: 'number', description: '리뷰 수 (rating 전용)' },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeAd>;

// ── Playground ───────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: { type: 'best' },
};

// ── Size ─────────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Measurement">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ background: 'var(--color-neutral-background-raised-1)', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                {['Attribute', 'Big', 'Small', 'Outlined'].map(h => (
                  <th key={h} style={{ padding: '8px 20px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-foreground-subtle-1)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Height', '28px', '16px', '18px'],
                ['Font size', '12px', '11px', '12px'],
                ['Font weight', '700', '600', '400'],
                ['Border radius', '4px', '2px', '2px'],
                ['Border', 'none', 'none', '1px solid'],
              ].map(row => (
                <tr key={row[0]} style={{ background: 'var(--color-neutral-background-default)', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '8px 20px', textAlign: 'center', color: i === 0 ? 'var(--color-neutral-foreground-subtle-1)' : 'var(--color-neutral-foreground-default)', fontWeight: i === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>
    </div>
  ),
};

// ── Contents ─────────────────────────────────────────────────────────────────
export const Contents: Story = {
  name: 'Contents',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Big (28px)" desc="큰 사이즈 뱃지. BEST, 쿠폰 할인 금액 표시에 사용합니다.">
        <Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="best" />
            <Caption>Best</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="couponBig" />
            <Caption>Coupon Big</Caption>
          </div>
        </Row>
      </Block>
      <Block label="Small (16px)" desc="작은 사이즈 뱃지. 공식 스토어, 할인쿠폰 텍스트 표시에 사용합니다.">
        <Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="official" />
            <Caption>Official</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="couponSmall" />
            <Caption>Coupon Small</Caption>
          </div>
        </Row>
      </Block>
      <Block label="Outlined (18px)" desc="테두리 스타일 뱃지. 구매, 별점, 리뷰, 찜 수 표시에 사용합니다.">
        <Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="purchase" />
            <Caption>Purchase</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="rating" />
            <Caption>Rating</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="review" />
            <Caption>Review</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="wish" />
            <Caption>Wish</Caption>
          </div>
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ───────────────────────────────────────────────────────────────────
export const AllTypes: Story = {
  name: 'Matrix',
  render: () => {
    const types: BadgeAdType[] = ['best', 'couponBig', 'official', 'couponSmall', 'purchase', 'rating', 'review', 'wish'];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Type</th>
              <th style={{ padding: '8px 24px', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', textAlign: 'center' }}>Preview</th>
            </tr>
          </thead>
          <tbody>
            {types.map(t => (
              <tr key={t} style={{ background: 'var(--color-neutral-background-default)', borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
                <td style={{ padding: '12px 16px', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>{t}</td>
                <td style={{ padding: '12px 24px', verticalAlign: 'middle', textAlign: 'center' }}>
                  <BadgeAd type={t} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
