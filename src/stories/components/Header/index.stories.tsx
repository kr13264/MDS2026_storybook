import type { Meta, StoryObj } from '@storybook/react';
import { Handle } from '@/components/Header';
import { Indicator } from '@/components/Header';

// ── 레이아웃 헬퍼 ─────────────────────────────────────────────────────────────
const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: 'Pretendard, sans-serif', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--color-neutral-foreground-subtle-3)', margin: '0 0 4px',
    }}>{label}</p>
    {desc && <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: 'var(--color-neutral-foreground-subtle-1)', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);

const Row = ({ children, gap = 24 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
);

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<typeof Handle> = {
  title: 'Components/Header',
  component: Handle,
  // docs page는 index.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
시트 및 화면 상·하단에 사용되는 핸들러 컴포넌트입니다.
Handle은 바텀시트 상단 드래그 핸들, Indicator는 홈 인디케이터 바입니다.

---

<div style="margin-bottom:30px"></div>

### Handle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`barWidth\` | \`number\` | \`36\` | 핸들 바 너비 (px) |
| \`barHeight\` | \`number\` | \`5\` | 핸들 바 높이 (px) |

### Indicator

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`barWidth\` | \`number\` | \`144\` | 인디케이터 바 너비 (px) |
| \`barHeight\` | \`number\` | \`5\` | 인디케이터 바 높이 (px) |

\`\`\`tsx
import { Handle, Indicator } from '@/components/Header';

<Handle />
<Indicator />
\`\`\`
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Handle>;

// ── Playground ──────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    barWidth: 36,
    barHeight: 5,
  },
  render: (args) => (
    <div style={{ width: 393 }}>
      <Handle {...args} />
    </div>
  ),
};

// ── Components ──────────────────────────────────────────────────────────────
export const Components: Story = {
  name: 'Components',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Block label="Handle" desc="바텀시트 상단에 표시되는 드래그 핸들입니다. 둥근 상단 모서리와 가운데 바로 구성됩니다.">
        <div style={{ width: 393, border: '1px solid var(--color-neutral-stroke-divider)', borderRadius: 'var(--radius-3xl, 28px) var(--radius-3xl, 28px) 0 0', overflow: 'hidden' }}>
          <Handle />
        </div>
      </Block>
      <Block label="Indicator" desc="화면 하단의 홈 인디케이터 바입니다.">
        <div style={{ width: 393, border: '1px solid var(--color-neutral-stroke-divider)', borderRadius: '0 0 8px 8px', overflow: 'hidden', backgroundColor: 'var(--color-neutral-background-default)' }}>
          <Indicator />
        </div>
      </Block>
    </div>
  ),
};

// ── Usage ────────────────────────────────────────────────────────────────────
export const Usage: Story = {
  name: 'Usage',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Block label="Bottom Sheet" desc="Handle과 Indicator를 조합하여 바텀시트를 구성합니다.">
        <div style={{
          width: 393,
          borderRadius: 'var(--radius-3xl, 28px) var(--radius-3xl, 28px) 0 0',
          overflow: 'hidden',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
          backgroundColor: 'var(--color-neutral-background-default)',
        }}>
          <Handle />
          <div style={{
            padding: '0 20px 16px',
            fontFamily: 'Pretendard, sans-serif',
            fontSize: 14,
            color: 'var(--color-neutral-foreground-default)',
          }}>
            <p style={{ fontWeight: 600, fontSize: 16, margin: '0 0 8px' }}>시트 타이틀</p>
            <p style={{ color: 'var(--color-neutral-foreground-subtle-1)', margin: 0, lineHeight: 1.5 }}>
              시트 내용이 여기에 표시됩니다.
            </p>
          </div>
          <Indicator />
        </div>
      </Block>
    </div>
  ),
};

// ── Matrix ──────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const widths = [240, 320, 393];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <Block label="Handle — Width Variants">
          <Row gap={32}>
            {widths.map((w) => (
              <div key={w} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', margin: '0 0 8px' }}>{w}px</p>
                <div style={{ width: w, border: '1px solid var(--color-neutral-stroke-divider)', borderRadius: 'var(--radius-3xl, 28px) var(--radius-3xl, 28px) 0 0', overflow: 'hidden' }}>
                  <Handle />
                </div>
              </div>
            ))}
          </Row>
        </Block>
        <Block label="Indicator — Width Variants">
          <Row gap={32}>
            {widths.map((w) => (
              <div key={w} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', margin: '0 0 8px' }}>{w}px</p>
                <div style={{ width: w, border: '1px solid var(--color-neutral-stroke-divider)', borderRadius: '0 0 8px 8px', overflow: 'hidden', backgroundColor: 'var(--color-neutral-background-default)' }}>
                  <Indicator />
                </div>
              </div>
            ))}
          </Row>
        </Block>
      </div>
    );
  },
};
