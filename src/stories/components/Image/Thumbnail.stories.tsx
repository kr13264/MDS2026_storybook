import type { Meta, StoryObj } from '@storybook/react';
import { ImageThumbnail } from '@/components/Images';
import type { ImageThumbnailType, ImageThumbnailRadius, ImageThumbnailRatio } from '@/components/Images';

const IMG_SRC = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 8 }: { children: React.ReactNode; gap?: number }) => (
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

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Slot 기본 요소 ────────────────────────────────────────────────────────
const BadgeOverlay = ({ text = '배지' }: { text?: string }) => (
  <span style={{
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: 999,
    background: 'rgba(0,0,0,0.50)',
    color: '#fff',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: -0.3,
  }}>{text}</span>
);

const MoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="5" r="1.5" fill="#fff" />
    <circle cx="12" cy="12" r="1.5" fill="#fff" />
    <circle cx="12" cy="19" r="1.5" fill="#fff" />
  </svg>
);

const DurationLabel = ({ time = '03:25' }: { time?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M4.5 3L11 7L4.5 11V3Z" fill="#fff" />
    </svg>
    <span style={{
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '16px',
      letterSpacing: -0.3,
      color: '#fff',
    }}>{time}</span>
  </div>
);

const ProfileHorizontal = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
    <div style={{
      width: 20, height: 20, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
      background: 'var(--color-neutral-background-separated-1)',
    }}>
      <img src={IMG_SRC} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <span style={{
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 12,
      fontWeight: 600,
      color: '#fff',
      lineHeight: '16px',
      letterSpacing: -0.3,
    }}>프로필</span>
  </div>
);

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof ImageThumbnail> = {
  title: 'Components/Images/Thumbnail',
  component: ImageThumbnail,
  // docs page는 Thumbnail.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
이미지 위에 배지·아이콘·프로필·재생시간 등 슬롯 오버레이를 배치하는 Thumbnail 컴포넌트.
Image, Media, Gallery 타입과 다양한 코너 라디우스 변형을 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`image\` | 기본 이미지. 하단 좌측에 프로필 슬롯 표시 |
| \`media\` | 미디어 콘텐츠. 하단 그림자 + 우하단 재생시간 슬롯 |
| \`gallery\` | 갤러리 콘텐츠. 상하 그림자 + 우하단 재생시간 슬롯 |

### Ratio

| Ratio | Aspect Ratio |
|-------|-------------|
| \`1:1\` | 정사각형 |
| \`3:2\` | 가로형 |
| \`3:4\` | 세로형 |
| \`3:4.5\` | 세로형 (길게) |
| \`3:5\` | 세로형 (더 길게) |
| \`16:9\` | 와이드 |

### Radius

| Radius | Value |
|--------|-------|
| \`0\` | 라디우스 없음 |
| \`8\` | 8px |
| \`12\` | 12px |
| \`16\` | 16px |
| \`20\` | 20px |

### Slots

| Slot | Position | Description |
|------|----------|-------------|
| \`slotTopLeft\` | 좌상단 | 배지 오버레이 등 |
| \`slotTopRight\` | 우상단 | 더보기 아이콘 등 |
| \`slotBottomLeft\` | 좌하단 | 프로필 정보 등 |
| \`slotBottomRight\` | 우하단 | 재생시간 표시 등 |

\`\`\`tsx
import { ImageThumbnail } from '@/components/Images';

<ImageThumbnail
  src={imgSrc}
  type="media"
  ratio="3:2"
  radius={12}
  slotTopLeft={<Badge text="NEW" />}
  slotBottomRight={<Duration time="03:25" />}
/>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['image', 'media', 'gallery'] satisfies ImageThumbnailType[],
      description: '썸네일 타입',
      table: {
        type: { summary: 'ImageThumbnailType' },
        defaultValue: { summary: 'image' },
      },
    },
    ratio: {
      control: 'select',
      options: ['1:1', '3:2', '3:4', '3:4.5', '3:5', '16:9'] satisfies ImageThumbnailRatio[],
      description: '종횡비',
      table: {
        type: { summary: 'ImageThumbnailRatio' },
        defaultValue: { summary: '1:1' },
      },
    },
    radius: {
      control: 'select',
      options: [0, 8, 12, 16, 20] satisfies ImageThumbnailRadius[],
      description: '코너 라디우스',
      table: {
        type: { summary: 'ImageThumbnailRadius' },
        defaultValue: { summary: '0' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '비활성 상태 (opacity 0.35)',
      table: { defaultValue: { summary: 'false' } },
    },
    src: {
      control: 'text',
      description: '이미지 URL',
      table: { type: { summary: 'string' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageThumbnail>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  decorators: [(Story) => <div style={{ width: 200 }}><Story /></div>],
  args: {
    src: IMG_SRC,
    type: 'image',
    ratio: '1:1',
    radius: 12,
  },
};

// ── Type ───────────────────────────────────────────────────────────────────
export const Types: Story = {
  tags: ['!autodocs'],
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Type" desc="Image / Media / Gallery 타입별 비교 (radius=12)">
        <Row gap={16}>
          <div style={{ width: 148 }}>
            <ImageThumbnail
              src={IMG_SRC}
              type="image"
              radius={12}
              slotTopLeft={<BadgeOverlay />}
              slotTopRight={<MoreIcon />}
              slotBottomLeft={<ProfileHorizontal />}
            />
            <Caption>image</Caption>
          </div>
          <div style={{ width: 148 }}>
            <ImageThumbnail
              src={IMG_SRC}
              type="media"
              radius={12}
              slotTopLeft={<BadgeOverlay />}
              slotTopRight={<MoreIcon />}
              slotBottomRight={<DurationLabel />}
            />
            <Caption>media</Caption>
          </div>
          <div style={{ width: 148 }}>
            <ImageThumbnail
              src={IMG_SRC}
              type="gallery"
              radius={12}
              slotTopLeft={<BadgeOverlay />}
              slotTopRight={<MoreIcon />}
              slotBottomRight={<DurationLabel />}
            />
            <Caption>gallery</Caption>
          </div>
        </Row>
      </Block>
    </div>
  ),
};

// ── Ratio ──────────────────────────────────────────────────────────────────
export const Ratio: Story = {
  tags: ['!autodocs'],
  name: 'Ratio',
  render: () => {
    const ratios: ImageThumbnailRatio[] = ['1:1', '3:2', '3:4', '3:4.5', '3:5', '16:9'];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Block label="Ratio" desc="종횡비 변형 비교 (type=media, radius=12)">
          <Row gap={16}>
            {ratios.map(r => (
              <div key={r} style={{ width: 148 }}>
                <ImageThumbnail
                  src={IMG_SRC}
                  type="media"
                  ratio={r}
                  radius={12}
                  slotTopRight={<MoreIcon />}
                  slotBottomRight={<DurationLabel />}
                />
                <Caption>{r}</Caption>
              </div>
            ))}
          </Row>
        </Block>
      </div>
    );
  },
};

// ── Radius ─────────────────────────────────────────────────────────────────
export const Radii: Story = {
  tags: ['!autodocs'],
  name: 'Radius',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Radius" desc="코너 라디우스 변형 비교 (type=image)">
        <Row gap={12}>
          {([0, 8, 12, 16, 20] as ImageThumbnailRadius[]).map(r => (
            <div key={r} style={{ width: 148 }}>
              <ImageThumbnail
                src={IMG_SRC}
                type="image"
                radius={r}
                slotTopLeft={<BadgeOverlay />}
                slotTopRight={<MoreIcon />}
                slotBottomLeft={<ProfileHorizontal />}
              />
              <Caption>{r}px</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix: Ratio × Type ──────────────────────────────────────────────────
export const Matrix: Story = {
  tags: ['!autodocs'],
  name: 'Matrix',
  render: () => {
    const types: ImageThumbnailType[] = ['image', 'media', 'gallery'];
    const ratios: ImageThumbnailRatio[] = ['1:1', '3:2', '3:4', '3:4.5', '3:5', '16:9'];
    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                Ratio \ Type
              </th>
              {types.map(t => (
                <th key={t} style={{ padding: '8px 16px', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ratios.map(r => (
              <tr key={r} style={{ borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
                <td style={{ padding: '12px 16px 12px 0', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>
                  {r}
                </td>
                {types.map(type => (
                  <td key={type} style={{ padding: '12px 8px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <div style={{ width: 148 }}>
                      <ImageThumbnail
                        src={IMG_SRC}
                        type={type}
                        ratio={r}
                        radius={12}
                        slotTopLeft={<BadgeOverlay />}
                        slotTopRight={<MoreIcon />}
                        slotBottomLeft={type === 'image' ? <ProfileHorizontal /> : undefined}
                        slotBottomRight={type !== 'image' ? <DurationLabel /> : undefined}
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

// ── Matrix: Radius × Type ─────────────────────────────────────────────────
export const RadiusMatrix: Story = {
  tags: ['!autodocs'],
  name: 'Radius Matrix',
  render: () => {
    const types: ImageThumbnailType[] = ['image', 'media', 'gallery'];
    const radii: ImageThumbnailRadius[] = [0, 8, 12, 16, 20];
    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                Radius \ Type
              </th>
              {types.map(t => (
                <th key={t} style={{ padding: '8px 16px', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {radii.map(r => (
              <tr key={r} style={{ borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
                <td style={{ padding: '12px 16px 12px 0', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>
                  {r}px
                </td>
                {types.map(type => (
                  <td key={type} style={{ padding: '12px 8px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <div style={{ width: 148 }}>
                      <ImageThumbnail
                        src={IMG_SRC}
                        type={type}
                        radius={r}
                        slotTopLeft={<BadgeOverlay />}
                        slotTopRight={<MoreIcon />}
                        slotBottomLeft={type === 'image' ? <ProfileHorizontal /> : undefined}
                        slotBottomRight={type !== 'image' ? <DurationLabel /> : undefined}
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
