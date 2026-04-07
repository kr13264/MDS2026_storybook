import type { Meta, StoryObj } from '@storybook/react';
import { BadgeTooltip } from '@/components/Badges/Tooltip';
import type { BadgeTooltipSize, BadgeTooltipArrowLocation } from '@/components/Badges/Tooltip';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 20 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
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
const meta: Meta<typeof BadgeTooltip> = {
  title: 'Assets/Badges/Tooltip',
  component: BadgeTooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
툴팁형 뱃지 컴포넌트입니다.
신규 기능 안내, 구독 알림 등에 사용합니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | Height | Font | Weight | Background |
|------|--------|------|--------|------------|
| \`md\` | 24px | 11px | Bold (700) | Black (#000) |
| \`sm\` | 18px | 10px | SemiBold (600) | Red (#F4361E) |

### Arrow Location

| Location | Description |
|----------|-------------|
| \`left\` | 좌측 하단 화살표 |
| \`right\` | 우측 하단 화살표 |

\`\`\`tsx
import { BadgeTooltip } from '@/components/Badges/Tooltip';

<BadgeTooltip size="md" arrowLocation="left" text="일이삼사오육칠팔" />
<BadgeTooltip size="sm" arrowLocation="right" text="방금 구독했어요!" />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] satisfies BadgeTooltipSize[], description: '사이즈' },
    arrowLocation: { control: 'select', options: ['left', 'right'] satisfies BadgeTooltipArrowLocation[], description: '화살표 위치' },
    text: { control: 'text', description: '텍스트' },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeTooltip>;

// ── Playground ───────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: { size: 'md', arrowLocation: 'left', text: '일이삼사오육칠팔' },
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
                {['Attribute', 'md', 'sm'].map(h => (
                  <th key={h} style={{ padding: '8px 24px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-foreground-subtle-1)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Height', '24px', '18px'],
                ['Font size', '11px', '10px'],
                ['Font weight', '700', '600'],
                ['Background', '#000000', '#F4361E'],
                ['Padding', '5.5px 10px', '3px 6px'],
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
      <Block label="Usage">
        <Row>
          {(['md', 'sm'] as BadgeTooltipSize[]).map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <BadgeTooltip size={s} arrowLocation="left" />
              <Caption>{s}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Contents ─────────────────────────────────────────────────────────────────
export const Contents: Story = {
  name: 'Contents',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Arrow Left" desc="좌측 하단 화살표 위치.">
        <Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <BadgeTooltip size="md" arrowLocation="left" />
            <Caption>Md</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <BadgeTooltip size="sm" arrowLocation="left" />
            <Caption>Sm</Caption>
          </div>
        </Row>
      </Block>
      <Block label="Arrow Right" desc="우측 하단 화살표 위치.">
        <Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <BadgeTooltip size="md" arrowLocation="right" />
            <Caption>Md</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <BadgeTooltip size="sm" arrowLocation="right" />
            <Caption>Sm</Caption>
          </div>
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ───────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const sizes: BadgeTooltipSize[] = ['md', 'sm'];
    const arrows: BadgeTooltipArrowLocation[] = ['left', 'right'];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                Arrow \ Size
              </th>
              {sizes.map(s => (
                <th key={s} style={{ padding: '8px 24px', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', textAlign: 'center' }}>{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {arrows.map(a => (
              <tr key={a} style={{ background: 'var(--color-neutral-background-default)', borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
                <td style={{ padding: '16px 16px 16px 0', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>{a}</td>
                {sizes.map(s => (
                  <td key={s} style={{ padding: '16px 24px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <BadgeTooltip size={s} arrowLocation={a} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
