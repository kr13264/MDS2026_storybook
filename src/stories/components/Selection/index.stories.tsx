import type { Meta, StoryObj } from '@storybook/react';
import { Selection } from '@/components/Selection';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 24 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
      textTransform: 'uppercase', color: 'var(--color-neutral-foreground-subtle-3)', margin: '0 0 4px',
    }}>{label}</p>
    {desc && <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: 'var(--color-neutral-foreground-subtle-1)', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof Selection> = {
  title: 'Components/Selection',
  component: Selection,
  // docs page는 index.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
선택 컨트롤 컴포넌트. Check / Add / Radio 3가지 타입과 Circle / Square 형태를 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description | Usage |
|------|-------------|-------|
| \`check\` | 체크마크 선택 | 다중 선택 항목에 사용 |
| \`add\` | + 아이콘 선택 | 추가 동작이 포함된 선택에 사용 |
| \`radio\` | 라디오 (dot) | 단일 선택 항목에 사용 (circle만 지원) |

### Shape

| Shape | Description |
|-------|-------------|
| \`circle\` | 원형 (20px) |
| \`square\` | 사각형 (20px, 6px radius) |

### State

| Prop | Description |
|------|-------------|
| \`selected\` | 선택 상태 (true/false) |
| \`enabled\` | 활성 상태 (false = disabled 외관) |

\`\`\`tsx
import { Selection } from '@/components/Selection';

<Selection type="check" shape="circle" selected />
<Selection type="add" shape="square" />
<Selection type="radio" selected />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['check', 'add', 'radio'] },
    shape: { control: 'select', options: ['circle', 'square'] },
    selected: { control: 'boolean' },
    enabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Selection>;

// ── Playground ────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    type: 'check',
    shape: 'circle',
    selected: true,
    enabled: true,
  },
};

// ── Type ──────────────────────────────────────────────────────────────────
export const Type: Story = {
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="Check" desc="체크마크 선택 컨트롤.">
        <Row gap={16}>
          <Selection type="check" shape="circle" selected />
          <Selection type="check" shape="circle" />
          <Selection type="check" shape="circle" enabled={false} />
        </Row>
      </Block>
      <Block label="Add" desc="+ 아이콘 선택 컨트롤.">
        <Row gap={16}>
          <Selection type="add" shape="circle" selected />
          <Selection type="add" shape="circle" />
          <Selection type="add" shape="circle" enabled={false} />
        </Row>
      </Block>
      <Block label="Radio" desc="라디오 선택 컨트롤 (circle만 지원).">
        <Row gap={16}>
          <Selection type="radio" selected />
          <Selection type="radio" />
          <Selection type="radio" enabled={false} />
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => (
    <div style={{ padding: 4 }}>
      <Block label="All Combinations" desc="Type × Shape × State 전체 조합.">
        <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 13 }}>
          <thead>
            <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
              {['Type', 'Shape', 'Selected', 'Unselected', 'Disabled'].map((h) => (
                <th key={h} style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(['check', 'add', 'radio'] as const).map((t) =>
              (t === 'radio' ? ['circle'] as const : ['circle', 'square'] as const).map((s) => (
                <tr key={`${t}-${s}`} style={{ background: 'var(--color-neutral-background-default)' }}>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', color: 'var(--color-neutral-foreground-default)' }}>{t}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', color: 'var(--color-neutral-foreground-default)', textAlign: 'center' }}>{s}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center' }}>
                    <Selection type={t} shape={s} selected />
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center' }}>
                    <Selection type={t} shape={s} />
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center' }}>
                    <Selection type={t} shape={s} enabled={false} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Block>
    </div>
  ),
};
