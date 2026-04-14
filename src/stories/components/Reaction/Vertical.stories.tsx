import type { Meta, StoryObj } from '@storybook/react';
import { ReactionVertical } from '@/components/Reaction';
import type { ReactionType, ReactionVerticalSize } from '@/components/Reaction';

// ── 레이아웃 헬퍼 ─────────────────────────────────────────────────────────────
const Row = ({ children, gap = 16 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }}>{children}</div>
);

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
const meta: Meta<typeof ReactionVertical> = {
  title: 'Components/Reaction/Vertical',
  component: ReactionVertical,
  // docs page는 Vertical.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
수직 리액션 버튼 컴포넌트입니다.
아이콘 아래에 레이블 또는 숫자가 표시됩니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | Icon | Text | Content |
|------|------|------|---------|
| \`large\` | 30px | 11px | 레이블 (좋아요, 댓글...) |
| \`medium\` | 24px | 12px | 레이블 (좋아요, 댓글...) |
| \`small\` | 18px | 12px | 숫자 (count) |

### Type

| Type | Label |
|------|-------|
| \`like\` | 좋아요 |
| \`comment\` | 댓글 |
| \`share\` | 공유 |
| \`bookmark\` | 저장 |

\`\`\`tsx
import { ReactionVertical } from '@/components/Reaction';

<ReactionVertical type="like" size="large" />
<ReactionVertical type="comment" size="small" count={15} selected />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['like', 'comment', 'share', 'bookmark'] satisfies ReactionType[],
      description: '리액션 타입',
      table: { type: { summary: 'ReactionType' }, defaultValue: { summary: 'like' } },
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'] satisfies ReactionVerticalSize[],
      description: '사이즈',
      table: { type: { summary: 'ReactionVerticalSize' }, defaultValue: { summary: 'large' } },
    },
    selected: { control: 'boolean', description: '선택 상태', table: { defaultValue: { summary: 'false' } } },
    showLabel: { control: 'boolean', description: '레이블/숫자 표시', table: { defaultValue: { summary: 'true' } } },
    count: { control: 'number', description: '카운트 값 (small 사이즈)', table: { defaultValue: { summary: '0' } } },
  },
};

export default meta;
type Story = StoryObj<typeof ReactionVertical>;

// ── Playground ──────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    type: 'like',
    size: 'large',
    selected: false,
    showLabel: true,
    count: 15,
  },
};

// ── Size ─────────────────────────────────────────────────────────────────────
export const Size: Story = {
  name: 'Size',
  render: () => {
    const types: ReactionType[] = ['like', 'comment', 'share', 'bookmark'];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <Block label="Large (30px)" desc="큰 아이콘 + 레이블 (11px). gap=4px.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Row>{types.map(t => <ReactionVertical key={t} type={t} size="large" />)}</Row>
            <Row>{types.map(t => <ReactionVertical key={`${t}-sel`} type={t} size="large" selected />)}</Row>
          </div>
        </Block>
        <Block label="Medium (24px)" desc="기본 아이콘 + 레이블 (12px). gap=2px.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Row>{types.map(t => <ReactionVertical key={t} type={t} size="medium" />)}</Row>
            <Row>{types.map(t => <ReactionVertical key={`${t}-sel`} type={t} size="medium" selected />)}</Row>
          </div>
        </Block>
        <Block label="Small (18px)" desc="작은 아이콘 + 숫자 (12px). gap=2px.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Row>{types.map(t => <ReactionVertical key={t} type={t} size="small" count={15} />)}</Row>
            <Row>{types.map(t => <ReactionVertical key={`${t}-sel`} type={t} size="small" count={15} selected />)}</Row>
          </div>
        </Block>
      </div>
    );
  },
};

// ── State ────────────────────────────────────────────────────────────────────
export const State: Story = {
  name: 'State',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Default" desc="기본 상태. 아웃라인 아이콘이 표시됩니다.">
        <Row>
          <ReactionVertical type="like" />
          <ReactionVertical type="comment" />
          <ReactionVertical type="share" />
          <ReactionVertical type="bookmark" />
        </Row>
      </Block>
      <Block label="Selected" desc="선택 상태. 채워진 아이콘이 표시됩니다.">
        <Row>
          <ReactionVertical type="like" selected />
          <ReactionVertical type="comment" selected />
          <ReactionVertical type="share" selected />
          <ReactionVertical type="bookmark" selected />
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ───────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const types: ReactionType[] = ['like', 'comment', 'share', 'bookmark'];
    const sizes: ReactionVerticalSize[] = ['large', 'medium', 'small'];

    return (
      <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif' }}>
        <thead>
          <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
            <th style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '8px 12px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Size</th>
            {types.map(t => (
              <th key={t} colSpan={2} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '8px 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', textAlign: 'center' }}>{t}</th>
            ))}
          </tr>
          <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
            <th style={{ border: '1px solid var(--color-neutral-stroke-divider)' }} />
            {types.map(t => [
              <th key={`${t}-d`} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '4px 8px', fontSize: 10, fontWeight: 400, textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-3)' }}>default</th>,
              <th key={`${t}-s`} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '4px 8px', fontSize: 10, fontWeight: 400, textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-3)' }}>selected</th>,
            ])}
          </tr>
        </thead>
        <tbody>
          {sizes.map(sz => (
            <tr key={sz} style={{ background: 'var(--color-neutral-background-default)' }}>
              <td style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '12px 16px', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', whiteSpace: 'nowrap' }}>{sz}</td>
              {types.map(t => [
                <td key={`${t}-d`} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '12px 16px', textAlign: 'center', verticalAlign: 'middle' }}>
                  <ReactionVertical type={t} size={sz} count={15} />
                </td>,
                <td key={`${t}-s`} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '12px 16px', textAlign: 'center', verticalAlign: 'middle' }}>
                  <ReactionVertical type={t} size={sz} count={15} selected />
                </td>,
              ])}
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};
