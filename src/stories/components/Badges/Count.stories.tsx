import type { Meta, StoryObj } from '@storybook/react';
import { BadgeCount } from '@/components/Badges/Count';
import type { BadgeCountType } from '@/components/Badges/Count';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 16 }: { children: React.ReactNode; gap?: number }) => (
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
const meta: Meta<typeof BadgeCount> = {
  title: 'Assets/Badges/Count',
  component: BadgeCount,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
알림 카운트 뱃지 컴포넌트입니다.
아이콘, 탭, 메뉴 항목에 알림 상태를 표시합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Size | Description |
|------|------|-------------|
| \`default\` | 5×5px | 기본 알림 점 |
| \`number\` | 15×15px | 숫자 카운트 표시 |
| \`max\` | auto×15px | 최대값 (99+) 표시 |
| \`new\` | 15×15px | 새 알림 표시 (큰 점) |

\`\`\`tsx
import { BadgeCount } from '@/components/Badges/Count';

<BadgeCount type="default" />
<BadgeCount type="number" count={2} />
<BadgeCount type="max" />
<BadgeCount type="new" />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['default', 'number', 'max', 'new'] satisfies BadgeCountType[], description: '뱃지 타입' },
    count: { control: 'number', description: '숫자 (number, max 전용)' },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeCount>;

// ── Playground ───────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: { type: 'number', count: 2 },
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
                {['Attribute', 'default', 'number', 'max', 'new'].map(h => (
                  <th key={h} style={{ padding: '8px 16px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-foreground-subtle-1)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Size', '5×5px', '15×15px', 'auto×15px', '15×15px'],
                ['Font size', '—', '11px', '11px', '—'],
                ['Background', '#F4361E', '#F4361E', '#F4361E', '#F4361E'],
                ['Border radius', '999px', '999px', '999px', '999px'],
              ].map(row => (
                <tr key={row[0]} style={{ background: 'var(--color-neutral-background-default)', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '8px 16px', textAlign: 'center', color: i === 0 ? 'var(--color-neutral-foreground-subtle-1)' : 'var(--color-neutral-foreground-default)', fontWeight: i === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>
      <Block label="Usage">
        <Row>
          {(['default', 'number', 'max', 'new'] as BadgeCountType[]).map(t => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <BadgeCount type={t} count={2} />
              <Caption>{t}</Caption>
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
      <Block label="Number variants" desc="다양한 숫자 표시.">
        <Row>
          {[1, 2, 5, 9, 15, 42, 99].map(n => (
            <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <BadgeCount type="number" count={n} />
              <Caption>{n}</Caption>
            </div>
          ))}
        </Row>
      </Block>
      <Block label="Max overflow" desc="99를 초과하면 자동으로 99+로 표시됩니다.">
        <Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeCount type="number" count={100} />
            <Caption>100</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <BadgeCount type="max" />
            <Caption>max</Caption>
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
    const types: BadgeCountType[] = ['default', 'number', 'max', 'new'];

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
                  <BadgeCount type={t} count={2} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
