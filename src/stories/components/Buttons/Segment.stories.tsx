import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSegment } from '@/components/Buttons';
import type { ButtonSegmentShape, ButtonSegmentType } from '@/components/Buttons';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 16 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
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

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Controlled wrapper ──────────────────────────────────────────────────────
const SegmentDemo = (props: Omit<React.ComponentProps<typeof ButtonSegment>, 'value' | 'onChange'> & { defaultValue?: string }) => {
  const [val, setVal] = useState(props.defaultValue ?? props.options[0]?.value ?? '');
  return <ButtonSegment {...props} value={val} onChange={setVal} />;
};

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof ButtonSegment> = {
  title: 'Components/Buttons/Segment',
  component: ButtonSegment,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
동일 위계의 옵션 중 단일 선택이 필요한 경우 사용하는 세그먼트 버튼입니다.
2~4개의 옵션을 지원하며, **half**(텍스트+구분선)와 **full**(균등 분할) 두 가지 너비 유형을 제공합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Height | Description |
|------|--------|-------------|
| \`half\` | 44px | 텍스트 폭 기반. 항목 사이 1px 구분선 |
| \`full\` | 40px | 컨테이너 너비를 항목 수로 균등 분할. 각 항목이 개별 border |

### Shape

| Shape | borderRadius | Description |
|-------|-------------|-------------|
| \`square\` | 8px | 사각형 — 일반 레이아웃 (기본) |
| \`round\`  | 9999px | 원형(Pill) |

### Line (항목 수)

| Line | Description |
|------|-------------|
| 2 | 옵션 2개 |
| 3 | 옵션 3개 |
| 4 | 옵션 4개 |

\`\`\`tsx
import { ButtonSegment } from '@/components/Buttons';

<ButtonSegment
  options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]}
  value={value}
  onChange={setValue}
/>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    shape: {
      control: 'select',
      options: ['square', 'round'] satisfies ButtonSegmentShape[],
      description: '버튼 형태',
      table: { type: { summary: 'ButtonSegmentShape' }, defaultValue: { summary: 'square' } },
    },
    type: {
      control: 'select',
      options: ['half', 'full'] satisfies ButtonSegmentType[],
      description: '너비 유형',
      table: { type: { summary: 'ButtonSegmentType' }, defaultValue: { summary: 'half' } },
    },
    disabled: { control: 'boolean', description: '전체 비활성', table: { defaultValue: { summary: 'false' } } },
    value: { control: false },
    onChange: { control: false },
    options: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonSegment>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
  render: (args) => {
    const [val, setVal] = useState('all');
    return (
      <ButtonSegment
        {...args}
        options={[
          { value: 'all', label: '전체' },
          { value: 'video', label: '동영상' },
          { value: 'image', label: '이미지' },
        ]}
        value={val}
        onChange={setVal}
      />
    );
  },
  args: {
    shape: 'square',
    type: 'half',
    disabled: false,
  },
};

// ── Type ───────────────────────────────────────────────────────────────────
export const Types: Story = {
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="half" desc="텍스트 폭 기반, 항목 사이 1px 구분선. 높이 44px.">
        <Row gap={12}>
          <SegmentDemo
            type="half"
            options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]}
          />
          <SegmentDemo
            type="half"
            options={[{ value: 'a', label: '인기' }, { value: 'b', label: '최신' }, { value: 'c', label: '추천' }]}
          />
          <SegmentDemo
            type="half"
            options={[{ value: 'a', label: '1일' }, { value: 'b', label: '1주' }, { value: 'c', label: '1개월' }, { value: 'd', label: '3개월' }]}
          />
        </Row>
      </Block>
      <Block label="full" desc="컨테이너 너비를 항목 수로 균등 분할. 각 항목이 개별 border. 높이 40px.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
          <SegmentDemo
            type="full"
            options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]}
          />
          <SegmentDemo
            type="full"
            options={[{ value: 'a', label: '인기' }, { value: 'b', label: '최신' }, { value: 'c', label: '추천' }]}
          />
          <SegmentDemo
            type="full"
            options={[{ value: 'a', label: '1일' }, { value: 'b', label: '1주' }, { value: 'c', label: '1개월' }, { value: 'd', label: '3개월' }]}
          />
        </div>
      </Block>
    </div>
  ),
};

// ── Shape ──────────────────────────────────────────────────────────────────
export const Shapes: Story = {
  name: 'Shape',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="square" desc="borderRadius 8px. 일반 레이아웃에 사용합니다.">
        <Row gap={12}>
          <SegmentDemo
            shape="square" type="half"
            options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]}
          />
          <div style={{ width: 240 }}>
            <SegmentDemo
              shape="square" type="full"
              options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]}
            />
          </div>
        </Row>
      </Block>
      <Block label="round" desc="borderRadius 9999px. Pill 형태.">
        <Row gap={12}>
          <SegmentDemo
            shape="round" type="half"
            options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]}
          />
          <div style={{ width: 240 }}>
            <SegmentDemo
              shape="round" type="full"
              options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]}
            />
          </div>
        </Row>
      </Block>
    </div>
  ),
};

// ── Line (Options count) ────────────────────────────────────────────────────
export const Lines: Story = {
  name: 'Line',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="2개">
        <Row gap={24}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SegmentDemo type="half" options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]} />
            <Caption>half</Caption>
          </div>
          <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SegmentDemo type="full" options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]} />
            <Caption>full</Caption>
          </div>
        </Row>
      </Block>
      <Block label="3개">
        <Row gap={24}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SegmentDemo type="half" options={[{ value: 'a', label: '인기' }, { value: 'b', label: '최신' }, { value: 'c', label: '추천' }]} />
            <Caption>half</Caption>
          </div>
          <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SegmentDemo type="full" options={[{ value: 'a', label: '인기' }, { value: 'b', label: '최신' }, { value: 'c', label: '추천' }]} />
            <Caption>full</Caption>
          </div>
        </Row>
      </Block>
      <Block label="4개">
        <Row gap={24}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SegmentDemo type="half" options={[{ value: 'a', label: '1일' }, { value: 'b', label: '1주' }, { value: 'c', label: '1개월' }, { value: 'd', label: '3개월' }]} />
            <Caption>half</Caption>
          </div>
          <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SegmentDemo type="full" options={[{ value: 'a', label: '1일' }, { value: 'b', label: '1주' }, { value: 'c', label: '1개월' }, { value: 'd', label: '3개월' }]} />
            <Caption>full</Caption>
          </div>
        </Row>
      </Block>
    </div>
  ),
};

// ── State ──────────────────────────────────────────────────────────────────
export const States: Story = {
  name: 'State',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="enabled" desc="기본 상태.">
        <Row gap={12}>
          <SegmentDemo type="half" options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]} />
          <div style={{ width: 240 }}>
            <SegmentDemo type="full" options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]} />
          </div>
        </Row>
      </Block>
      <Block label="disabled" desc="전체 비활성 상태. opacity 0.4, pointer-events none.">
        <Row gap={12}>
          <SegmentDemo type="half" options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]} disabled />
          <div style={{ width: 240 }}>
            <SegmentDemo type="full" options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]} disabled />
          </div>
        </Row>
      </Block>
      <Block label="item disabled" desc="특정 항목만 비활성 상태.">
        <Row gap={12}>
          <SegmentDemo
            type="half"
            options={[
              { value: 'a', label: '전체' },
              { value: 'b', label: '구독', disabled: true },
              { value: 'c', label: '최신' },
            ]}
          />
          <div style={{ width: 240 }}>
            <SegmentDemo
              type="full"
              options={[
                { value: 'a', label: '전체' },
                { value: 'b', label: '구독', disabled: true },
                { value: 'c', label: '최신' },
              ]}
            />
          </div>
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ─────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const shapes: ButtonSegmentShape[] = ['square', 'round'];
    const types: ButtonSegmentType[] = ['half', 'full'];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                shape \ type
              </th>
              {types.map(t => (
                <th key={t} style={{ padding: '8px 24px', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shapes.map(sh => (
              <tr key={sh} style={{ borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
                <td style={{ padding: '16px 16px 16px 0', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>
                  {sh}
                </td>
                {types.map(t => (
                  <td key={t} style={{ padding: '16px 24px', verticalAlign: 'middle' }}>
                    <div style={{ width: t === 'full' ? 240 : 'auto' }}>
                      <SegmentDemo
                        shape={sh}
                        type={t}
                        options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
