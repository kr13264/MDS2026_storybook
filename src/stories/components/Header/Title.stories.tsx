import type { Meta, StoryObj } from '@storybook/react';
import { HeaderTitle } from '@/components/Header';
import type { HeaderTitleLayout } from '@/components/Header';

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

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    width: 375,
    padding: '0 16px',
    backgroundColor: 'var(--color-neutral-background-default)',
    border: '1px solid var(--color-neutral-stroke-divider)',
    borderRadius: 8,
  }}>
    {children}
  </div>
);

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<typeof HeaderTitle> = {
  title: 'Components/Header/Title',
  component: HeaderTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
네비게이션 헤더 타이틀 바 컴포넌트입니다.
좌측 정렬(Left)과 중앙 정렬(Center) 두 가지 레이아웃을 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Layout

| Layout | Description |
|--------|-------------|
| \`Left\` | 타이틀이 좌측 정렬됩니다 (기본) |
| \`Center\` | 타이틀이 중앙 정렬됩니다 |

### Slots

| Slot | Description |
|------|-------------|
| \`front\` | Leading 영역 (기본: ← 뒤로가기) |
| \`back\` | Trailing 영역 (기본: × 닫기) |
| \`titlePrefixIcon\` | 타이틀 앞 아이콘 |
| \`titleSuffixIcon\` | 타이틀 뒤 아이콘 |

\`\`\`tsx
import { HeaderTitle } from '@/components/Header';

<HeaderTitle title="페이지 제목" layout="Left" />
<HeaderTitle title="페이지 제목" layout="Center" />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['Left', 'Center'] satisfies HeaderTitleLayout[],
      description: '레이아웃',
      table: { type: { summary: 'HeaderTitleLayout' }, defaultValue: { summary: 'Left' } },
    },
    title: {
      control: 'text',
      description: '타이틀 텍스트',
      table: { defaultValue: { summary: '타이틀' } },
    },
    leadingSlot: {
      control: 'boolean',
      description: 'Leading 슬롯 표시',
      table: { defaultValue: { summary: 'true' } },
    },
    trailingSlot: {
      control: 'boolean',
      description: 'Trailing 슬롯 표시',
      table: { defaultValue: { summary: 'true' } },
    },
    titlePrefix: {
      control: 'boolean',
      description: '타이틀 앞 아이콘 표시',
      table: { defaultValue: { summary: 'false' } },
    },
    titleSuffix: {
      control: 'boolean',
      description: '타이틀 뒤 아이콘 표시',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderTitle>;

// ── Playground ──────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    title: '타이틀',
    layout: 'Left',
    leadingSlot: true,
    trailingSlot: true,
    titlePrefix: false,
    titleSuffix: false,
  },
  render: (args) => (
    <Phone>
      <HeaderTitle {...args} />
    </Phone>
  ),
};

// ── Layout ──────────────────────────────────────────────────────────────────
export const Layout: Story = {
  name: 'Layout',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Block label="Left" desc="타이틀이 좌측에 정렬되며, Leading 아이콘 옆에 위치합니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" />
        </Phone>
      </Block>
      <Block label="Center" desc="타이틀이 중앙에 정렬되며, Leading/Trailing 아이콘이 양 끝에 위치합니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Center" />
        </Phone>
      </Block>
    </div>
  ),
};

// ── Slots ───────────────────────────────────────────────────────────────────
export const Slots: Story = {
  name: 'Slots',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Block label="All Slots" desc="모든 슬롯이 활성화된 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" titlePrefix titleSuffix />
        </Phone>
      </Block>
      <Block label="Leading Only" desc="Trailing 슬롯을 숨긴 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" trailingSlot={false} />
        </Phone>
      </Block>
      <Block label="Trailing Only" desc="Leading 슬롯을 숨긴 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" leadingSlot={false} />
        </Phone>
      </Block>
      <Block label="Title Only" desc="양쪽 슬롯을 모두 숨긴 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" leadingSlot={false} trailingSlot={false} />
        </Phone>
      </Block>
    </div>
  ),
};

// ── Matrix ──────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const layouts: HeaderTitleLayout[] = ['Left', 'Center'];
    const configs = [
      { label: 'Default', props: {} },
      { label: 'Prefix', props: { titlePrefix: true } },
      { label: 'Suffix', props: { titleSuffix: true } },
      { label: 'Prefix + Suffix', props: { titlePrefix: true, titleSuffix: true } },
      { label: 'No Leading', props: { leadingSlot: false } },
      { label: 'No Trailing', props: { trailingSlot: false } },
    ];

    return (
      <table style={{
        borderCollapse: 'collapse',
        fontFamily: 'Pretendard, sans-serif',
        fontSize: 13,
        width: '100%',
      }}>
        <thead>
          <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
            <th style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '8px 12px', textAlign: 'left', fontWeight: 600 }}>Variant</th>
            {layouts.map((l) => (
              <th key={l} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '8px 12px', textAlign: 'center', fontWeight: 600 }}>{l}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {configs.map(({ label, props }) => (
            <tr key={label} style={{ background: 'var(--color-neutral-background-default)' }}>
              <td style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '8px 12px', color: 'var(--color-neutral-foreground-subtle-1)' }}>{label}</td>
              {layouts.map((l) => (
                <td key={l} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '12px 16px' }}>
                  <div style={{ width: 280 }}>
                    <HeaderTitle title="타이틀" layout={l} {...props} />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};
