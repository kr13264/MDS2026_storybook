import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwitchToggle, SwitchTab } from '@/components/Switch';

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
const meta: Meta<typeof SwitchToggle> = {
  title: 'Components/Controls',
  component: SwitchToggle,
  // docs page는 index.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
스위치 컨트롤 컴포넌트. **Toggle**과 **Tab** 두 가지 서브 컴포넌트로 구성됩니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description | Usage |
|------|-------------|-------|
| \`Toggle\` | ON/OFF 토글 스위치 | 단일 설정의 활성/비활성 전환에 사용 |
| \`Tab\` | 탭형 스위치 (2개 선택지) | 동일 위계의 두 가지 옵션 중 하나를 선택할 때 사용 |

### Toggle — Size

| Size | Dimension | Label |
|------|-----------|-------|
| \`lg\` | 52 × 30 | ON/OFF 라벨 지원 |
| \`md\` | 40 × 24 | 라벨 미지원 |
| \`sm\` | 32 × 18 | 라벨 미지원 |

### Tab — Style

| Style | Description |
|-------|-------------|
| \`square\` | 사각형 모서리 (6px radius) |
| \`round\` | 완전 라운드 (pill) |

\`\`\`tsx
import { SwitchToggle, SwitchTab } from '@/components/Switch';

<SwitchToggle size="lg" selected={true} label onChange={setSelected} />
<SwitchTab
  style="square"
  options={[{ value: 'a', label: '옵션A' }, { value: 'b', label: '옵션B' }]}
  value="a"
  onChange={setValue}
/>
\`\`\`
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchToggle>;

// ── Playground ────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    size: 'lg',
    selected: true,
    label: false,
    disabled: false,
  },
};

// ── Size ──────────────────────────────────────────────────────────────────
export const Size: Story = {
  name: 'Size',
  render: () => {
    const Toggle = ({ size, label: lbl }: { size: 'lg' | 'md' | 'sm'; label?: string }) => {
      const [on, setOn] = useState(true);
      const [off, setOff] = useState(false);
      return (
        <Row gap={16}>
          {lbl && <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: 'var(--color-neutral-foreground-subtle-3)', width: 24 }}>{lbl}</span>}
          <SwitchToggle size={size} selected={on} onChange={setOn} />
          <SwitchToggle size={size} selected={off} onChange={setOff} />
        </Row>
      );
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
        <Block label="Toggle — Size" desc="3가지 사이즈별 selected / unselected 비교.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Toggle size="lg" label="lg" />
            <Toggle size="md" label="md" />
            <Toggle size="sm" label="sm" />
          </div>
        </Block>
      </div>
    );
  },
};

// ── Contents ──────────────────────────────────────────────────────────────
export const Contents: Story = {
  name: 'Contents',
  render: () => {
    const [withLabel, setWithLabel] = useState(true);
    const [withoutLabel, setWithoutLabel] = useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
        <Block label="Toggle — Label" desc="lg 사이즈에서 ON/OFF 라벨을 표시할 수 있습니다.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Row gap={16}>
              <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: 'var(--color-neutral-foreground-subtle-3)', width: 80 }}>label: true</span>
              <SwitchToggle size="lg" selected={withLabel} label onChange={setWithLabel} />
            </Row>
            <Row gap={16}>
              <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: 'var(--color-neutral-foreground-subtle-3)', width: 80 }}>label: false</span>
              <SwitchToggle size="lg" selected={withoutLabel} onChange={setWithoutLabel} />
            </Row>
          </div>
        </Block>

        <Block label="Tab — Style" desc="square와 round 두 가지 스타일을 지원합니다.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Row gap={16}>
              <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: 'var(--color-neutral-foreground-subtle-3)', width: 50 }}>square</span>
              <SwitchTab style="square" options={[{ value: 'l', label: '레이블' }, { value: 'r', label: '레이블' }]} value="l" />
              <SwitchTab style="square" options={[{ value: 'l', label: '레이블' }, { value: 'r', label: '레이블' }]} value="r" />
            </Row>
            <Row gap={16}>
              <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: 'var(--color-neutral-foreground-subtle-3)', width: 50 }}>round</span>
              <SwitchTab style="round" options={[{ value: 'l', label: '레이블' }, { value: 'r', label: '레이블' }]} value="l" />
              <SwitchTab style="round" options={[{ value: 'l', label: '레이블' }, { value: 'r', label: '레이블' }]} value="r" />
            </Row>
          </div>
        </Block>
      </div>
    );
  },
};

// ── Matrix ────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => (
    <div style={{ padding: 4 }}>
      <Block label="Toggle — All Sizes × States" desc="사이즈별 selected / unselected 전체 조합.">
        <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 13 }}>
          <thead>
            <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'left', color: 'var(--color-neutral-foreground-subtle-1)' }}>Size</th>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>Selected</th>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>Unselected</th>
            </tr>
          </thead>
          <tbody>
            {(['lg', 'md', 'sm'] as const).map((s) => (
              <tr key={s} style={{ background: 'var(--color-neutral-background-default)' }}>
                <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', color: 'var(--color-neutral-foreground-default)' }}>{s}</td>
                <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center' }}>
                  <SwitchToggle size={s} selected />
                </td>
                <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center' }}>
                  <SwitchToggle size={s} selected={false} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Block>

      <Block label="Tab — Style × Selection" desc="스타일별 좌/우 선택 조합.">
        <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 13 }}>
          <thead>
            <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'left', color: 'var(--color-neutral-foreground-subtle-1)' }}>Style</th>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>Left</th>
              <th style={{ padding: '8px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center', color: 'var(--color-neutral-foreground-subtle-1)' }}>Right</th>
            </tr>
          </thead>
          <tbody>
            {(['square', 'round'] as const).map((st) => (
              <tr key={st} style={{ background: 'var(--color-neutral-background-default)' }}>
                <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', color: 'var(--color-neutral-foreground-default)' }}>{st}</td>
                <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center' }}>
                  <SwitchTab style={st} options={[{ value: 'l', label: '레이블' }, { value: 'r', label: '레이블' }]} value="l" />
                </td>
                <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-stroke-divider)', textAlign: 'center' }}>
                  <SwitchTab style={st} options={[{ value: 'l', label: '레이블' }, { value: 'r', label: '레이블' }]} value="r" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Block>
    </div>
  ),
};
