import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon, iconNames } from '@/components/Icon';
import type { IconStyle, IconSize } from '@/components/Icon';

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
const meta: Meta<typeof Icon> = {
  title: 'Assets/Icon/container.icon',
  component: Icon,
  // docs page는 Icon.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
MDS 아이콘 라이브러리입니다. 52개의 아이콘과 filled/outlined 스타일을 지원합니다.

\`\`\`tsx
import { Icon } from '@/components/Icon';

<Icon name="like" />
<Icon name="search" variant="filled" size="xl" />
\`\`\`
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// ── All Icons ────────────────────────────────────────────────────────────────
export const AllIcons: Story = {
  name: 'All Icons',
  render: () => {
    const [variant, setVariant] = useState<IconStyle>('outlined');
    const [search, setSearch] = useState('');

    const filtered = iconNames.filter(n =>
      n.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', width: 640 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <input
            type="text"
            placeholder="아이콘 검색..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1, padding: '8px 12px', border: '1px solid var(--color-neutral-stroke-default)',
              borderRadius: 8, fontSize: 14, outline: 'none',
            }}
          />
          <button
            onClick={() => setVariant(v => v === 'outlined' ? 'filled' : 'outlined')}
            style={{
              padding: '8px 16px', border: '1px solid var(--color-neutral-stroke-default)',
              borderRadius: 8, fontSize: 13, cursor: 'pointer', background: 'var(--color-neutral-background-raised-1)',
            }}
          >
            {variant}
          </button>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 4,
        }}>
          {filtered.map(name => (
            <div
              key={name}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                padding: '12px 4px', borderRadius: 8, cursor: 'default',
              }}
              title={name}
            >
              <Icon name={name} variant={variant} size="lg" />
              <span style={{
                fontSize: 10, color: 'var(--color-neutral-foreground-subtle-3)',
                textAlign: 'center', wordBreak: 'break-all', lineHeight: 1.3,
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', marginTop: 12 }}>
          {filtered.length} / {iconNames.length} icons
        </p>
      </div>
    );
  },
};

// ── Sizes ────────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size',
  render: () => {
    const sizes: IconSize[] = ['xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs'];
    return (
      <Block label="Sizes" desc="xl(30px) ~ 3xs(10px)까지 7단계 사이즈를 지원합니다.">
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {sizes.map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Icon name="add" size={s} />
              <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)' }}>{s}</span>
            </div>
          ))}
        </div>
      </Block>
    );
  },
};

// ── Styles ───────────────────────────────────────────────────────────────────
export const Styles: Story = {
  name: 'Style',
  render: () => {
    const samples = ['like', 'comment', 'search', 'notification', 'setting', 'person'] as const;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <Block label="Outlined" desc="기본 아웃라인 스타일.">
          <div style={{ display: 'flex', gap: 16 }}>
            {samples.map(n => <Icon key={n} name={n} variant="outlined" size="lg" />)}
          </div>
        </Block>
        <Block label="Filled" desc="채워진 스타일.">
          <div style={{ display: 'flex', gap: 16 }}>
            {samples.map(n => <Icon key={n} name={n} variant="filled" size="lg" />)}
          </div>
        </Block>
      </div>
    );
  },
};
