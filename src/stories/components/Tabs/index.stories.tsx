import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabList } from '@/components/Tabs';
import type { TabType, TabTone } from '@/components/Tabs';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
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

const DarkBg = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    background: '#1c1c1c',
    borderRadius: 12,
    padding: '16px 20px',
  }}>
    {children}
  </div>
);

const sampleItems = [
  { label: '전체', value: 'all' },
  { label: '추천', value: 'recommend' },
  { label: '인기', value: 'popular' },
  { label: '최신', value: 'recent' },
];

const sampleWithDisabled = [
  { label: '전체', value: 'all' },
  { label: '추천', value: 'recommend' },
  { label: '비활성', value: 'disabled', disabled: true },
  { label: '최신', value: 'recent' },
];

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof TabList> = {
  title: 'Components/Tabs',
  component: TabList,
  // docs page는 index.mdx에서 관리
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
탭 전환 네비게이션 컴포넌트.
**UnderLine**과 **Capsule** 두 가지 타입, **Scrollable**과 **Fixed** 두 가지 레이아웃을 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`underline\` | 하단 라인으로 선택 상태를 표시 |
| \`capsule\` | 캡슐(pill) 배경으로 선택 상태를 표시 |

### Layout

| Layout | Description |
|--------|-------------|
| \`scrollable\` | 콘텐츠에 맞는 가변 너비, 넘치면 스크롤 |
| \`fixed\` | 부모 너비를 균등 분할 (underline만 지원) |

### Tone

| Tone | Description |
|------|-------------|
| \`natural\` | 밝은 배경용 (기본) |
| \`invert\` | 어두운 배경용 |

### State

| State | Description |
|-------|-------------|
| \`default\` | 미선택 |
| \`selected\` | 선택됨 (Bold) |
| \`disabled\` | 비활성 |

\`\`\`tsx
import { TabList } from '@/components/Tabs';

<TabList
  type="underline"
  layout="scrollable"
  tone="natural"
  items={[{ label: '전체', value: 'all' }, { label: '추천', value: 'rec' }]}
  value="all"
  onChange={setValue}
/>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['underline', 'capsule'] },
    layout: { control: 'select', options: ['scrollable', 'fixed'] },
    tone: { control: 'select', options: ['natural', 'invert'] },
  },
};

export default meta;
type Story = StoryObj<typeof TabList>;

// ── Playground ────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    type: 'underline',
    layout: 'scrollable',
    tone: 'natural',
    items: sampleItems,
    value: 'all',
  },
  render: function Render(args) {
    const [val, setVal] = useState(args.value ?? 'all');
    return (
      <TabList {...args} value={val} onChange={setVal} />
    );
  },
};

// ── Type ──────────────────────────────────────────────────────────────────
export const Type: Story = {
  name: 'Type',
  render: () => {
    const [val1, setVal1] = useState('all');
    const [val2, setVal2] = useState('all');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
        <Block label="UnderLine" desc="하단 라인으로 선택 상태를 표시합니다.">
          <TabList type="underline" items={sampleItems} value={val1} onChange={setVal1} />
        </Block>
        <Block label="Capsule" desc="캡슐 배경으로 선택 상태를 표시합니다.">
          <TabList type="capsule" items={sampleItems} value={val2} onChange={setVal2} />
        </Block>
      </div>
    );
  },
};

// ── Layout ────────────────────────────────────────────────────────────────
export const Layout: Story = {
  name: 'Layout',
  render: () => {
    const [val1, setVal1] = useState('all');
    const [val2, setVal2] = useState('all');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
        <Block label="Scrollable" desc="콘텐츠에 맞는 가변 너비. 넘치면 스크롤됩니다.">
          <TabList type="underline" layout="scrollable" items={sampleItems} value={val1} onChange={setVal1} />
        </Block>
        <Block label="Fixed" desc="부모 너비를 균등 분할합니다.">
          <div style={{ width: 375 }}>
            <TabList type="underline" layout="fixed" items={sampleItems} value={val2} onChange={setVal2} />
          </div>
        </Block>
      </div>
    );
  },
};

// ── Tone ──────────────────────────────────────────────────────────────────
export const Tone: Story = {
  name: 'Tone',
  render: () => {
    const [val1, setVal1] = useState('all');
    const [val2, setVal2] = useState('all');
    const [val3, setVal3] = useState('all');
    const [val4, setVal4] = useState('all');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
        <Block label="Natural — UnderLine" desc="밝은 배경용.">
          <TabList type="underline" tone="natural" items={sampleItems} value={val1} onChange={setVal1} />
        </Block>
        <Block label="Invert — UnderLine" desc="어두운 배경용.">
          <DarkBg>
            <TabList type="underline" tone="invert" items={sampleItems} value={val2} onChange={setVal2} />
          </DarkBg>
        </Block>
        <Block label="Natural — Capsule" desc="밝은 배경용.">
          <TabList type="capsule" tone="natural" items={sampleItems} value={val3} onChange={setVal3} />
        </Block>
        <Block label="Invert — Capsule" desc="어두운 배경용.">
          <DarkBg>
            <TabList type="capsule" tone="invert" items={sampleItems} value={val4} onChange={setVal4} />
          </DarkBg>
        </Block>
      </div>
    );
  },
};

// ── Contents ──────────────────────────────────────────────────────────────
export const Contents: Story = {
  name: 'Contents',
  render: () => {
    const [val, setVal] = useState('all');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
        <Block label="Disabled Item" desc="개별 탭 아이템을 비활성화할 수 있습니다.">
          <TabList type="underline" items={sampleWithDisabled} value={val} onChange={setVal} />
        </Block>
      </div>
    );
  },
};

// ── Matrix ────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const types: TabType[] = ['underline', 'capsule'];
    const tones: TabTone[] = ['natural', 'invert'];

    return (
      <div style={{ padding: 4 }}>
        <Block label="Type × Tone" desc="타입과 톤 조합 전체 비교.">
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
                <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'left', color: 'var(--color-neutral-foreground-subtle-1)' }}>Type</th>
                {tones.map((t) => (
                  <th key={t} style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>{t}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {types.map((type) => (
                <tr key={type} style={{ background: 'var(--color-neutral-background-default)' }}>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', color: 'var(--color-neutral-foreground-default)' }}>{type}</td>
                  {tones.map((tone) => (
                    <td key={tone} style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                      {tone === 'invert' ? (
                        <DarkBg>
                          <TabList type={type} tone={tone} items={sampleItems} value="all" />
                        </DarkBg>
                      ) : (
                        <TabList type={type} tone={tone} items={sampleItems} value="all" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Block>
      </div>
    );
  },
};
