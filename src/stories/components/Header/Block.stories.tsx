import type { Meta, StoryObj } from '@storybook/react';
import { HeaderBlock } from '@/components/Header';
import type { HeaderBlockType } from '@/components/Header';

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
    border: '1px solid var(--color-neutral-stroke-divider)',
    borderRadius: 8,
    overflow: 'hidden',
  }}>
    {children}
  </div>
);

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<typeof HeaderBlock> = {
  title: 'Components/Header/Block',
  component: HeaderBlock,
  // docs page는 Block.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
블록 헤더 컴포넌트입니다.
SheetsTitle은 바텀시트 상단에, BlockTitle은 일반 콘텐츠 블록 상단에 사용합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`SheetsTitle\` | 바텀시트용 — Handle + 타이틀 + 닫기 (둥근 상단) |
| \`BlockTitle\` | 블록용 — 타이틀 + 닫기 (직각) |

\`\`\`tsx
import { HeaderBlock } from '@/components/Header';

<HeaderBlock type="SheetsTitle" title="시트 타이틀" />
<HeaderBlock type="BlockTitle" title="블록 타이틀" />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['SheetsTitle', 'BlockTitle'] satisfies HeaderBlockType[],
      description: '블록 타입',
      table: { type: { summary: 'HeaderBlockType' }, defaultValue: { summary: 'SheetsTitle' } },
    },
    title: {
      control: 'text',
      description: '타이틀 텍스트',
      table: { defaultValue: { summary: '타이틀' } },
    },
    showTailIcon: {
      control: 'boolean',
      description: 'Trailing 슬롯 표시',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderBlock>;

// ── Playground ──────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    type: 'SheetsTitle',
    title: '타이틀',
    showTailIcon: true,
  },
  render: (args) => (
    <Phone>
      <HeaderBlock {...args} />
    </Phone>
  ),
};

// ── Type ────────────────────────────────────────────────────────────────────
export const Type: Story = {
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Block label="SheetsTitle" desc="바텀시트 상단에 사용합니다. Handle 바와 둥근 상단 모서리를 포함합니다.">
        <Phone>
          <HeaderBlock type="SheetsTitle" title="시트 타이틀" />
        </Phone>
      </Block>
      <Block label="BlockTitle" desc="일반 콘텐츠 블록 상단에 사용합니다. 타이틀과 닫기 버튼만 표시됩니다.">
        <Phone>
          <HeaderBlock type="BlockTitle" title="블록 타이틀" />
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
      <Block label="With Trailing" desc="닫기 버튼이 포함된 기본 상태입니다.">
        <Phone>
          <HeaderBlock type="SheetsTitle" title="타이틀" showTailIcon />
        </Phone>
      </Block>
      <Block label="Without Trailing" desc="닫기 버튼을 숨긴 상태입니다.">
        <Phone>
          <HeaderBlock type="SheetsTitle" title="타이틀" showTailIcon={false} />
        </Phone>
      </Block>
    </div>
  ),
};

// ── Matrix ──────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const types: HeaderBlockType[] = ['SheetsTitle', 'BlockTitle'];
    const configs = [
      { label: 'Default', props: {} },
      { label: 'No Trailing', props: { showTailIcon: false } },
      { label: 'Long Title', props: { title: '매우 긴 타이틀이 들어가는 경우' } },
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
            {types.map((t) => (
              <th key={t} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '8px 12px', textAlign: 'center', fontWeight: 600 }}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {configs.map(({ label, props }) => (
            <tr key={label} style={{ background: 'var(--color-neutral-background-default)' }}>
              <td style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '8px 12px', color: 'var(--color-neutral-foreground-subtle-1)' }}>{label}</td>
              {types.map((t) => (
                <td key={t} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '12px 16px' }}>
                  <div style={{ width: 280, border: '1px solid var(--color-neutral-stroke-divider)', borderRadius: t === 'SheetsTitle' ? '28px 28px 0 0' : 0, overflow: 'hidden' }}>
                    <HeaderBlock type={t} title="타이틀" {...props} />
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
