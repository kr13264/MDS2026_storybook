import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@/components/Pagination';
import type { PaginationVariant } from '@/components/Pagination';

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
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }}>{children}</div>
);

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', margin: '4px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Interactive Demo ─────────────────────────────────────────────────────────
const PaginationDemo = ({ totalPages, variant }: { totalPages: number; variant: PaginationVariant }) => {
  const [page, setPage] = React.useState(1);
  const isGhost = variant === 'ghost';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      padding: '20px 32px',
      borderRadius: 12,
      backgroundColor: isGhost ? '#111122' : 'var(--color-neutral-background-default)',
      border: isGhost ? 'none' : '1px solid var(--color-neutral-stroke-divider)',
    }}>
      <Pagination totalPages={totalPages} currentPage={page} variant={variant} onChange={setPage} />
      <p style={{
        fontFamily: 'Pretendard, sans-serif',
        fontSize: 12,
        color: isGhost ? 'rgba(255,255,255,0.6)' : 'var(--color-neutral-foreground-subtle-1)',
        margin: 0,
      }}>
        {page} / {totalPages}
      </p>
    </div>
  );
};

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  // docs page는 Pagination.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
도트 기반 페이지 인디케이터 컴포넌트입니다.
현재 페이지 위치를 시각적으로 표시합니다.

---

<div style="margin-bottom:30px"></div>

### Variant

| Variant | Description |
|---------|-------------|
| \`solid\` | 밝은 배경용 — 활성 도트: 초록색, 비활성: 회색 |
| \`ghost\` | 어두운 배경용 — 활성 도트: 흰색, 비활성: 반투명 흰색 |

### Dots (totalPages)

| Pages | Description |
|-------|-------------|
| 2–5 | 모든 도트를 동일 크기(6px)로 표시 |
| 6+ | 최대 5개 도트 표시, 먼 도트는 축소 (4px → 3px) |

\`\`\`tsx
import { Pagination } from '@/components/Pagination';

<Pagination totalPages={5} currentPage={1} variant="solid" />
<Pagination totalPages={8} currentPage={3} variant="ghost" onChange={setPage} />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    totalPages: {
      control: { type: 'number', min: 2, max: 20 },
      description: '전체 페이지 수',
    },
    currentPage: {
      control: { type: 'number', min: 1, max: 20 },
      description: '현재 페이지 (1부터 시작)',
    },
    variant: {
      control: 'select',
      options: ['solid', 'ghost'] satisfies PaginationVariant[],
      description: '스타일 변형',
      table: { defaultValue: { summary: 'solid' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// ── Playground ──────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    totalPages: 5,
    currentPage: 1,
    variant: 'solid',
  },
};

// ── Variant ─────────────────────────────────────────────────────────────────
export const Variant: Story = {
  name: 'Variant',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Block label="Solid" desc="밝은 배경에서 사용합니다. 활성 도트는 초록색입니다.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[2, 3, 4, 5].map((pages) => (
            <Row key={pages} gap={16}>
              <Caption>{pages}p</Caption>
              <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'var(--color-neutral-background-default)', border: '1px solid var(--color-neutral-stroke-divider)' }}>
                <Pagination totalPages={pages} currentPage={1} variant="solid" />
              </div>
            </Row>
          ))}
        </div>
      </Block>
      <Block label="Ghost" desc="어두운 배경에서 사용합니다. 활성 도트는 흰색입니다.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[2, 3, 4, 5].map((pages) => (
            <Row key={pages} gap={16}>
              <Caption>{pages}p</Caption>
              <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: '#111122' }}>
                <Pagination totalPages={pages} currentPage={1} variant="ghost" />
              </div>
            </Row>
          ))}
        </div>
      </Block>
    </div>
  ),
};

// ── Selection ───────────────────────────────────────────────────────────────
export const Selection: Story = {
  name: 'Selection',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Block label="5 Pages — All Selections" desc="5개 페이지에서 각 선택 상태를 보여줍니다.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[1, 2, 3, 4, 5].map((page) => (
            <Row key={page} gap={16}>
              <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', width: 8, textAlign: 'right' }}>{page}</span>
              <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'var(--color-neutral-background-default)', border: '1px solid var(--color-neutral-stroke-divider)' }}>
                <Pagination totalPages={5} currentPage={page} variant="solid" />
              </div>
            </Row>
          ))}
        </div>
      </Block>
      <Block label="8 Pages (5+) — Dot Scaling" desc="6개 이상일 때 먼 도트가 축소됩니다.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
            <Row key={page} gap={16}>
              <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', width: 8, textAlign: 'right' }}>{page}</span>
              <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'var(--color-neutral-background-default)', border: '1px solid var(--color-neutral-stroke-divider)' }}>
                <Pagination totalPages={8} currentPage={page} variant="solid" />
              </div>
            </Row>
          ))}
        </div>
      </Block>
    </div>
  ),
};

// ── Interactive ─────────────────────────────────────────────────────────────
export const Interactive: Story = {
  name: 'Interactive',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Block label="Solid — Click to Navigate" desc="도트를 클릭하여 페이지를 이동합니다.">
        <Row gap={32}>
          <PaginationDemo totalPages={5} variant="solid" />
          <PaginationDemo totalPages={10} variant="solid" />
        </Row>
      </Block>
      <Block label="Ghost — Click to Navigate">
        <Row gap={32}>
          <PaginationDemo totalPages={5} variant="ghost" />
          <PaginationDemo totalPages={10} variant="ghost" />
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ──────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const variants: PaginationVariant[] = ['solid', 'ghost'];
    const pageCounts = [2, 3, 4, 5, 8];

    return (
      <table style={{
        borderCollapse: 'collapse',
        fontFamily: 'Pretendard, sans-serif',
        fontSize: 13,
      }}>
        <thead>
          <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
            <th style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '8px 12px', textAlign: 'left', fontWeight: 600 }}>Pages</th>
            {variants.map((v) => (
              <th key={v} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '8px 12px', textAlign: 'center', fontWeight: 600 }}>{v}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageCounts.map((pages) => (
            <tr key={pages} style={{ background: 'var(--color-neutral-background-default)' }}>
              <td style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '8px 12px', color: 'var(--color-neutral-foreground-subtle-1)' }}>{pages}{pages > 5 ? ' (5+)' : ''}</td>
              {variants.map((v) => (
                <td key={v} style={{ border: '1px solid var(--color-neutral-stroke-divider)', padding: '12px 24px', textAlign: 'center' }}>
                  <div style={{
                    display: 'inline-flex',
                    padding: '8px 16px',
                    borderRadius: 8,
                    backgroundColor: v === 'ghost' ? '#111122' : 'transparent',
                  }}>
                    <Pagination totalPages={pages} currentPage={1} variant={v} />
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
