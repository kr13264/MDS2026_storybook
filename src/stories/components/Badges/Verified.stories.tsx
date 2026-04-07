import type { Meta, StoryObj } from '@storybook/react';
import { BadgeVerified } from '@/components/Badges/Verified';
import type { BadgeVerifiedType } from '@/components/Badges/Verified';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 20 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: 'Pretendard, sans-serif', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.07em', textTransform: 'uppercase', color: '#9999B8', margin: '0 0 4px',
    }}>{label}</p>
    {desc && <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: '#55557A', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<typeof BadgeVerified> = {
  title: 'Components/Badges/Verified',
  component: BadgeVerified,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
인증/검증 아이콘 뱃지 컴포넌트입니다.
프로필, 채널명 옆에 인증 상태를 표시합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Size | Color | Description |
|------|------|-------|-------------|
| \`official\` | 19×15px | Blue (#3283FD) | 공식 인증 뱃지 |
| \`local\` | 19×15px | Green (#03A94D) | 지역 인증 뱃지 |
| \`verifiedSm\` | 14×14px | Blue (#3283FD) | 소형 인증 체크 |
| \`verifiedLg\` | 22×22px | Blue (#3283FD) | 대형 인증 체크 |

\`\`\`tsx
import { BadgeVerified } from '@/components/Badges/Verified';

<BadgeVerified type="official" />
<BadgeVerified type="local" />
<BadgeVerified type="verifiedSm" />
<BadgeVerified type="verifiedLg" />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['official', 'local', 'verifiedSm', 'verifiedLg'] satisfies BadgeVerifiedType[], description: '인증 뱃지 타입' },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeVerified>;

// ── Playground ───────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: { type: 'official' },
};

// ── Size ─────────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Measurement">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ background: 'var(--color-neutral-background-raised-1)', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                {['Attribute', 'official', 'local', 'verifiedSm', 'verifiedLg'].map(h => (
                  <th key={h} style={{ padding: '8px 16px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-foreground-subtle-1)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Width', '19px', '19px', '14px', '22px'],
                ['Height', '15px', '15px', '14px', '22px'],
                ['Color', '#3283FD', '#03A94D', '#3283FD', '#3283FD'],
              ].map(row => (
                <tr key={row[0]} style={{ background: 'var(--color-neutral-background-default)', borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '8px 16px', textAlign: 'center', color: i === 0 ? 'var(--color-neutral-foreground-subtle-1)' : 'var(--color-neutral-foreground-default)', fontWeight: i === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>
      <Block label="Usage">
        <Row>
          {(['official', 'local', 'verifiedSm', 'verifiedLg'] as BadgeVerifiedType[]).map(t => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <BadgeVerified type={t} />
              <Caption>{t}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Contents ─────────────────────────────────────────────────────────────────
export const Contents: Story = {
  name: 'Contents',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="With text" desc="프로필/채널명 옆에 인증 뱃지를 배치하는 예시.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'Pretendard, sans-serif' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-neutral-foreground-default)' }}>공식 채널</span>
            <BadgeVerified type="official" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-neutral-foreground-default)' }}>지역 채널</span>
            <BadgeVerified type="local" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-neutral-foreground-default)' }}>인증 사용자</span>
            <BadgeVerified type="verifiedSm" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-neutral-foreground-default)' }}>인증 사용자</span>
            <BadgeVerified type="verifiedLg" />
          </div>
        </div>
      </Block>
    </div>
  ),
};

// ── Matrix ───────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const types: BadgeVerifiedType[] = ['official', 'local', 'verifiedSm', 'verifiedLg'];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Type</th>
              <th style={{ padding: '8px 24px', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', textAlign: 'center' }}>Preview</th>
            </tr>
          </thead>
          <tbody>
            {types.map(t => (
              <tr key={t} style={{ background: 'var(--color-neutral-background-default)', borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
                <td style={{ padding: '12px 16px', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>{t}</td>
                <td style={{ padding: '12px 24px', verticalAlign: 'middle', textAlign: 'center' }}>
                  <BadgeVerified type={t} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
