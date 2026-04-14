import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@/components/Divider';
import type { DividerOrientation } from '@/components/Divider';

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

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  // docs page는 Divider.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
수평/수직 구분선 컴포넌트입니다.
콘텐츠 영역을 시각적으로 분리할 때 사용합니다.

---

<div style="margin-bottom:30px"></div>

### Orientation

| Orientation | Description |
|-------------|-------------|
| \`horizontal\` | 가로 구분선 (기본) |
| \`vertical\` | 세로 구분선 |

\`\`\`tsx
import { Divider } from '@/components/Divider';

<Divider />
<Divider orientation="vertical" length={64} />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'] satisfies DividerOrientation[],
      description: '방향',
      table: { type: { summary: 'DividerOrientation' }, defaultValue: { summary: 'horizontal' } },
    },
    length: {
      control: 'text',
      description: '길이 (horizontal: width, vertical: height)',
      table: { type: { summary: 'number | string' }, defaultValue: { summary: '100%' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// ── Default ──────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    orientation: 'horizontal',
    length: 393,
  },
};

// ── Orientation ──────────────────────────────────────────────────────────────
export const Orientation: Story = {
  name: 'Orientation',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Block label="Horizontal" desc="가로 구분선. 기본 너비는 100%입니다.">
        <div style={{ width: 393 }}>
          <Divider />
        </div>
      </Block>
      <Block label="Vertical" desc="세로 구분선. height를 지정하여 사용합니다.">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 64 }}>
          <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 14, color: 'var(--color-neutral-foreground-default)' }}>항목 A</span>
          <Divider orientation="vertical" length={64} />
          <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 14, color: 'var(--color-neutral-foreground-default)' }}>항목 B</span>
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
      <Block label="List Divider" desc="리스트 항목 사이의 구분선으로 사용합니다.">
        <div style={{ width: 320, fontFamily: 'Pretendard, sans-serif', fontSize: 14, color: 'var(--color-neutral-foreground-default)' }}>
          {['알림 설정', '개인정보 처리방침', '서비스 이용약관'].map((item, i, arr) => (
            <div key={item}>
              <div style={{ padding: '12px 0' }}>{item}</div>
              {i < arr.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </Block>
      <Block label="Inline Divider" desc="인라인 요소 사이의 세로 구분선으로 사용합니다.">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'Pretendard, sans-serif', fontSize: 13, color: 'var(--color-neutral-foreground-subtle-1)' }}>
          <span>좋아요 15</span>
          <Divider orientation="vertical" length={14} />
          <span>댓글 3</span>
          <Divider orientation="vertical" length={14} />
          <span>공유 2</span>
        </div>
      </Block>
    </div>
  ),
};
