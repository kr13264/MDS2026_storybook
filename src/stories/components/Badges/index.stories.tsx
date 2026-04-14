import type { Meta, StoryObj } from '@storybook/react';
import { BadgeOverlay } from '@/components/Badges/Overlay';
import { BadgeAd } from '@/components/Badges/Ad';
import { BadgeCount } from '@/components/Badges/Count';
import { BadgeTooltip } from '@/components/Badges/Tooltip';
import { BadgeVerified } from '@/components/Badges/Verified';

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
const meta: Meta<typeof BadgeOverlay> = {
  title: 'Assets/Badges',
  component: BadgeOverlay,
  // docs page는 index.mdx에서 관리
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
상태, 카운트, 레이블, 인증 등을 표시하는 뱃지 컴포넌트 패밀리입니다.
Overlay, Ad, Count, Tooltip, Verified 5종의 서브 컴포넌트로 구성됩니다.

---

<div style="margin-bottom:30px"></div>

### 컴포넌트 구성

| Component | Description | Usage |
|-----------|-------------|-------|
| \`Overlay\` | 이미지 위 오버레이 뱃지 (Basic·Live·Live Label) | 썸네일 위 라벨, 라이브 표시 |
| \`Ad\` | 커머스/광고 뱃지 (Best·Coupon·Official·Purchase·Rating·Review·Wish) | 상품 카드, 검색 결과 |
| \`Count\` | 알림 카운트 뱃지 (Dot·Number·Max·New) | 탭바, 아이콘 위 알림 |
| \`Tooltip\` | 툴팁형 뱃지 (Md·Sm × Arrow Left·Right) | 신규 기능 안내, 알림 |
| \`Verified\` | 인증 아이콘 뱃지 (Official·Local·Verified) | 프로필, 채널명 옆 |

\`\`\`tsx
import { BadgeOverlay, BadgeAd, BadgeCount, BadgeTooltip, BadgeVerified } from '@/components/Badges';

<BadgeOverlay type="basic" color="alpha" weight="regular" text="배지" />
<BadgeAd type="best" text="BEST아이템" />
<BadgeCount type="number" count={2} />
<BadgeTooltip size="md" arrowLocation="left" text="일이삼사오육칠팔" />
<BadgeVerified type="official" />
\`\`\`
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeOverlay>;

// ── Overview ─────────────────────────────────────────────────────────────────
export const Overview: Story = {
  name: 'Overview',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      {/* Overlay */}
      <Block label="Overlay" desc="이미지 위에 오버레이되는 뱃지. Basic(Alpha/Solid × Regular/Bold), Live, Live Label 타입을 지원합니다.">
        <Row gap={12}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeOverlay type="basic" color="alpha" weight="regular" />
            <Caption>Alpha · Regular</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeOverlay type="basic" color="alpha" weight="bold" />
            <Caption>Alpha · Bold</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeOverlay type="basic" color="solid" weight="regular" />
            <Caption>Solid · Regular</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeOverlay type="basic" color="solid" weight="bold" />
            <Caption>Solid · Bold</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeOverlay type="live" />
            <Caption>Live</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeOverlay type="liveLabel" viewCount="1.6만 시청" />
            <Caption>Live Label</Caption>
          </div>
        </Row>
      </Block>

      {/* Ad */}
      <Block label="Ad" desc="커머스/광고용 뱃지. 상품 카드에서 BEST, 쿠폰, 공식, 구매, 별점, 리뷰, 찜 등을 표시합니다.">
        <Row gap={12}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="best" />
            <Caption>Best</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="couponBig" />
            <Caption>Coupon Big</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="official" />
            <Caption>Official</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="couponSmall" />
            <Caption>Coupon Small</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="purchase" />
            <Caption>Purchase</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeAd type="rating" rating={4.0} reviewCount={87} />
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

      {/* Count */}
      <Block label="Count" desc="알림 카운트 뱃지. 기본 dot, 숫자, 최대(99+), New 타입을 지원합니다.">
        <Row gap={16}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeCount type="default" />
            <Caption>Default</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeCount type="number" count={2} />
            <Caption>Number</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeCount type="max" />
            <Caption>Max (99+)</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeCount type="new" />
            <Caption>New</Caption>
          </div>
        </Row>
      </Block>

      {/* Tooltip */}
      <Block label="Tooltip" desc="툴팁형 뱃지. Md/Sm 사이즈와 Left/Right 화살표 위치를 지원합니다.">
        <Row gap={20}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <BadgeTooltip size="md" arrowLocation="left" />
            <Caption>Md · Left</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <BadgeTooltip size="md" arrowLocation="right" />
            <Caption>Md · Right</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <BadgeTooltip size="sm" arrowLocation="left" />
            <Caption>Sm · Left</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <BadgeTooltip size="sm" arrowLocation="right" />
            <Caption>Sm · Right</Caption>
          </div>
        </Row>
      </Block>

      {/* Verified */}
      <Block label="Verified" desc="인증 아이콘 뱃지. 공식, 지역, 인증(소/대) 타입을 지원합니다.">
        <Row gap={16}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeVerified type="official" />
            <Caption>Official</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeVerified type="local" />
            <Caption>Local</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeVerified type="verifiedSm" />
            <Caption>Verified Sm</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeVerified type="verifiedLg" />
            <Caption>Verified Lg</Caption>
          </div>
        </Row>
      </Block>
    </div>
  ),
};
