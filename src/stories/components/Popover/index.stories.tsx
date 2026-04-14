import type { Meta, StoryObj } from '@storybook/react';
import { PopoverTooltip } from '@/components/Popover/Tooltip';
import { PopoverInfo } from '@/components/Popover/Info';
import { PopoverMore } from '@/components/Popover/More';
import type { TooltipDirection, TooltipAlign } from '@/components/Popover/Tooltip';
import type { IconName } from '@/components/Icon';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 24 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
      textTransform: 'uppercase', color: '#9999B8', margin: '0 0 4px',
    }}>{label}</p>
    {desc && <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: '#55557A', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);

// ── 샘플 데이터 ─────────────────────────────────────────────────────────────
const moreItems: { icon: IconName; label: string }[] = [
  { icon: 'check', label: '구독해지' },
  { icon: 'like', label: '좋아요' },
  { icon: 'placeBookmark', label: '저장하기' },
  { icon: 'notification', label: '알림받기' },
  { icon: 'shareType1', label: '공유하기' },
];

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta = {
  title: 'Components/Popover',
  // docs page는 index.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
팝오버 컴포넌트. **Tooltip**, **Info**, **More** 세 가지 서브 컴포넌트를 제공합니다.

---

<div style="margin-bottom:30px"></div>

### Tooltip

| Prop | Description |
|------|-------------|
| \`direction\` | 말풍선 방향: top / bottom / left / right |
| \`align\` | 꼬리 정렬: start / center / end |

### Info

| Prop | Description |
|------|-------------|
| \`type\` | default: 일반 / titled: 제목 포함 |
| \`line\` | single: 한 줄 / multi: 여러 줄 |
| \`button\` | 버튼 표시 여부 |

### More

| Prop | Description |
|------|-------------|
| \`items\` | 메뉴 아이템 배열 (icon + label) |

\`\`\`tsx
import { PopoverTooltip, PopoverInfo, PopoverMore } from '@/components/Popover';

<PopoverTooltip direction="top" align="start" text="안내 문구" />
<PopoverInfo type="default" line="single" text="설명 문구" />
<PopoverMore items={[{ icon: 'check', label: '구독해지' }]} />
\`\`\`
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// ── Tooltip ──────────────────────────────────────────────────────────────
export const Tooltip: Story = {
  name: 'Tooltip',
  render: () => {
    const directions: TooltipDirection[] = ['top', 'bottom', 'left', 'right'];
    const aligns: TooltipAlign[] = ['start', 'center', 'end'];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 4 }}>
        <Block label="Direction × Align" desc="말풍선 방향과 꼬리 정렬 조합.">
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
                <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'left', color: 'var(--color-neutral-foreground-subtle-1)' }}>Direction</th>
                {aligns.map((a) => (
                  <th key={a} style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>{a}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {directions.map((dir) => (
                <tr key={dir} style={{ background: 'var(--color-neutral-background-default)' }}>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', color: 'var(--color-neutral-foreground-default)' }}>{dir}</td>
                  {aligns.map((align) => (
                    <td key={align} style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                      {(dir === 'left' || dir === 'right') && align !== 'center' ? (
                        <span style={{ fontSize: 11, color: '#9999B8' }}>—</span>
                      ) : (
                        <PopoverTooltip direction={dir} align={align} />
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

// ── Info ──────────────────────────────────────────────────────────────────
export const Info: Story = {
  name: 'Info',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 4 }}>
      <Block label="Default — Single" desc="한 줄 텍스트 기본형.">
        <Row>
          <PopoverInfo type="default" line="single" />
          <PopoverInfo type="default" line="single" button />
        </Row>
      </Block>
      <Block label="Default — Multi" desc="여러 줄 텍스트.">
        <Row>
          <PopoverInfo type="default" line="multi" />
          <PopoverInfo type="default" line="multi" button />
        </Row>
      </Block>
      <Block label="Titled — Multi" desc="제목이 있는 여러 줄 팝오버.">
        <Row>
          <PopoverInfo type="titled" line="multi" />
          <PopoverInfo type="titled" line="multi" button />
        </Row>
      </Block>
    </div>
  ),
};

// ── More ─────────────────────────────────────────────────────────────────
export const More: Story = {
  name: 'More',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 4 }}>
      <Block label="Item Count" desc="메뉴 아이템 개수별 변형.">
        <Row gap={16}>
          {[1, 2, 3, 4, 5].map((count) => (
            <PopoverMore key={count} items={moreItems.slice(0, count)} />
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, padding: 4 }}>
      <Block label="Info — Type × Line × Button" desc="Info 팝오버 전체 조합.">
        <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 13 }}>
          <thead>
            <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'left', color: 'var(--color-neutral-foreground-subtle-1)' }}>Type</th>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>Single</th>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>Single + Button</th>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>Multi</th>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>Multi + Button</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: 'var(--color-neutral-background-default)' }}>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', color: 'var(--color-neutral-foreground-default)' }}>default</td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}><PopoverInfo type="default" line="single" /></td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}><PopoverInfo type="default" line="single" button /></td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}><PopoverInfo type="default" line="multi" /></td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}><PopoverInfo type="default" line="multi" button /></td>
            </tr>
            <tr style={{ background: 'var(--color-neutral-background-default)' }}>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', color: 'var(--color-neutral-foreground-default)' }}>titled</td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', color: '#9999B8', fontSize: 11 }}>—</td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', color: '#9999B8', fontSize: 11 }}>—</td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}><PopoverInfo type="titled" line="multi" /></td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}><PopoverInfo type="titled" line="multi" button /></td>
            </tr>
          </tbody>
        </table>
      </Block>

      <Block label="More — Item Count" desc="More 메뉴 아이템 수 비교.">
        <Row gap={16}>
          {[1, 2, 3, 4, 5].map((count) => (
            <PopoverMore key={count} items={moreItems.slice(0, count)} />
          ))}
        </Row>
      </Block>
    </div>
  ),
};
