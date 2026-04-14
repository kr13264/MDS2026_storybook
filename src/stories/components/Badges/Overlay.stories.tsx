import type { Meta, StoryObj } from '@storybook/react';
import { BadgeOverlay } from '@/components/Badges/Overlay';
import type { BadgeOverlayColor, BadgeOverlayWeight } from '@/components/Badges/Overlay';

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
  title: 'Assets/Badges/Overlay',
  component: BadgeOverlay,
  // docs page는 Overlay.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
이미지/썸네일 위에 오버레이되는 뱃지 컴포넌트입니다.
Basic(Alpha/Solid × Regular/Bold), Live, Live Label 타입을 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`basic\` | 텍스트 레이블 뱃지 (기본) |
| \`live\` | 라이브 표시 뱃지 (빨간 배경) |
| \`liveLabel\` | 라이브 + 시청자 수 뱃지 |

### Color (Basic 전용)

| Color | Description |
|-------|-------------|
| \`alpha\` | 반투명 검정 배경 (rgba 0,0,0,0.5) |
| \`solid\` | 파란색 배경 (#3283FD) |

### Weight (Basic 전용)

| Weight | Description |
|--------|-------------|
| \`regular\` | 기본 굵기 (400) |
| \`bold\` | 굵은 글씨 (700) |

\`\`\`tsx
import { BadgeOverlay } from '@/components/Badges/Overlay';

<BadgeOverlay type="basic" color="alpha" weight="regular" text="배지" />
<BadgeOverlay type="live" />
<BadgeOverlay type="liveLabel" viewCount="1.6만 시청" />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['basic', 'live', 'liveLabel'], description: '뱃지 타입' },
    color: { control: 'select', options: ['alpha', 'solid'], description: '배경 색상 (basic 전용)' },
    weight: { control: 'select', options: ['regular', 'bold'], description: '폰트 굵기 (basic 전용)' },
    text: { control: 'text', description: '텍스트' },
    viewCount: { control: 'text', description: '시청자 수 (liveLabel 전용)' },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeOverlay>;

// ── Playground ───────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    type: 'basic',
    color: 'alpha',
    weight: 'regular',
    text: '배지',
    viewCount: '1.6만 시청',
  },
};

// ── Size ─────────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  tags: ['!autodocs'],
  name: 'Size',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Measurement">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ background: 'var(--color-neutral-background-raised-1)', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                {['Attribute', 'Value'].map(h => (
                  <th key={h} style={{ padding: '8px 24px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-foreground-subtle-1)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Height', '26px'],
                ['Border radius', '999px (pill)'],
                ['Font size', '12px'],
                ['Line height', '16px'],
                ['Letter spacing', '-0.3px'],
                ['Padding', '5px 8px'],
              ].map(row => (
                <tr key={row[0]} style={{ background: 'var(--color-neutral-background-default)', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '8px 24px', textAlign: 'center', color: i === 0 ? 'var(--color-neutral-foreground-subtle-1)' : 'var(--color-neutral-foreground-default)', fontWeight: i === 0 ? 600 : 400 }}>{cell}</td>
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
  tags: ['!autodocs'],
  name: 'Contents',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Basic — Alpha" desc="반투명 검정 배경의 기본 뱃지.">
        <Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeOverlay color="alpha" weight="regular" />
            <Caption>Regular</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeOverlay color="alpha" weight="bold" />
            <Caption>Bold</Caption>
          </div>
        </Row>
      </Block>
      <Block label="Basic — Solid" desc="파란색 배경의 기본 뱃지.">
        <Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeOverlay color="solid" weight="regular" />
            <Caption>Regular</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeOverlay color="solid" weight="bold" />
            <Caption>Bold</Caption>
          </div>
        </Row>
      </Block>
      <Block label="Live" desc="라이브 방송 표시 뱃지.">
        <Row>
          <BadgeOverlay type="live" />
        </Row>
      </Block>
      <Block label="Live Label" desc="라이브 + 시청자 수를 함께 표시하는 뱃지.">
        <Row>
          <BadgeOverlay type="liveLabel" viewCount="1.6만 시청" />
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ───────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  tags: ['!autodocs'],
  name: 'Matrix',
  render: () => {
    const colors: BadgeOverlayColor[] = ['alpha', 'solid'];
    const weights: BadgeOverlayWeight[] = ['regular', 'bold'];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                Color \ Weight
              </th>
              {weights.map(w => (
                <th key={w} style={{ padding: '8px 24px', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', textAlign: 'center' }}>{w}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {colors.map(c => (
              <tr key={c} style={{ background: 'var(--color-neutral-background-default)', borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
                <td style={{ padding: '12px 16px 12px 0', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>{c}</td>
                {weights.map(w => (
                  <td key={w} style={{ padding: '12px 24px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <BadgeOverlay color={c} weight={w} />
                  </td>
                ))}
              </tr>
            ))}
            <tr style={{ background: 'var(--color-neutral-background-default)', borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
              <td style={{ padding: '12px 16px 12px 0', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>live</td>
              <td style={{ padding: '12px 24px', verticalAlign: 'middle', textAlign: 'center' }}><BadgeOverlay type="live" /></td>
              <td />
            </tr>
            <tr style={{ background: 'var(--color-neutral-background-default)', borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
              <td style={{ padding: '12px 16px 12px 0', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>liveLabel</td>
              <td colSpan={2} style={{ padding: '12px 24px', verticalAlign: 'middle', textAlign: 'center' }}><BadgeOverlay type="liveLabel" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};
