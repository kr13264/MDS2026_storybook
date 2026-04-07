import type { Meta, StoryObj } from '@storybook/react';
import { Thumbnail } from '@/components/Thumbnail';
import type { ThumbnailType, ThumbnailRadius, ThumbnailRatio } from '@/components/Thumbnail';

// ── 레이아웃 헬퍼 ───────────────────────────────────────────────────────────
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

// ── 테이블 헬퍼 스타일 ────────────────────────────────────────────────────────
const TABLE_S: React.CSSProperties = {
  borderCollapse: 'collapse',
  fontFamily: 'Pretendard, sans-serif',
  fontSize: 12,
  whiteSpace: 'nowrap',
  width: '100%',
  border: '1px solid var(--color-neutral-stroke-divider)',
  marginBottom: 48,
};
const TH_S: React.CSSProperties = {
  padding: '8px 16px',
  textAlign: 'left',
  fontWeight: 700,
  color: 'var(--color-neutral-foreground-subtle-1)',
  background: 'var(--color-neutral-background-raised-1)',
  borderBottom: '1px solid var(--color-neutral-stroke-divider)',
};
const TD_S: React.CSSProperties = {
  padding: '10px 16px',
  color: 'var(--color-neutral-foreground-default)',
  background: 'var(--color-neutral-background-default)',
  borderBottom: '1px solid var(--color-neutral-stroke-divider)',
};
const TD_LABEL_S: React.CSSProperties = {
  ...TD_S,
  fontWeight: 600,
  color: 'var(--color-neutral-foreground-subtle-1)',
};

// ── 샘플 이미지 ──────────────────────────────────────────────────────────────
const IMG = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=400&auto=format&fit=crop';

// ── Meta ─────────────────────────────────────────────────────────────────────
const meta: Meta<typeof Thumbnail> = {
  title: 'Components/Thumbnail',
  component: Thumbnail,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
콘텐츠 목록에서 사용하는 **썸네일** 컴포넌트입니다.
타입·반경·비율과 4개의 오버레이 슬롯(badge · showMore · rank · duration)을 조합할 수 있습니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Dim | Shadow | Duration Slot | Description |
|------|-----|--------|--------------|-------------|
| \`image\` | 3% | none | — | 기본 이미지 썸네일 |
| \`media\` | 0% | 8% (bottom) | ✓ | 동영상 콘텐츠 썸네일 |
| \`gallery\` | 0% | 8% (top + bottom) | ✓ | 갤러리(다중) 콘텐츠 썸네일 |

### Ratio

| Ratio | 비율 | Usage |
|-------|------|-------|
| \`1:1\`   | 정사각형 | 프로필·앨범 썸네일 |
| \`3:2\`   | 가로형 | 일반 이미지 카드 |
| \`3:4\`   | 세로형 | 세로 이미지 카드 |
| \`3:4.5\` | 세로형 (길게) | 세로 이미지·숏폼 |
| \`3:5\`   | 세로형 (더 길게) | 쇼츠·릴스 썸네일 |
| \`16:9\`  | 와이드 | 동영상·뉴스 썸네일 |

### Radius

| Radius | Value | Usage |
|--------|-------|-------|
| \`0\` | 0px | 기본, 테두리 없음 |
| \`8\` | 8px | 소형 카드 |
| \`12\` | 12px | 중형 카드 |
| \`16\` | 16px | 대형 카드 |
| \`20\` | 20px | 대형 카드 (라운드) |

### Slots (Overlay)

4개의 고정 슬롯이 각 **36×36** 영역으로 코너에 배치됩니다.

| 위치 | Prop | 슬롯 크기 | 내용 | 사용 타입 |
|------|------|----------|------|----------|
| 좌상단 (topLeft) | \`badge\` | 36×36 | 텍스트 뱃지 (예: "LIVE", "NEW") | 모든 타입 |
| 우상단 (topRight) | \`showMore\` | 36×36 | \`icon.more\` 24×24 | 모든 타입 |
| 좌하단 (bottomLeft) | \`rank\` | 36×36 | 랭킹 숫자 | 모든 타입 |
| 우하단 (bottomRight) | \`duration\` | 36×36 | \`light.icon.video\` 14×14 + 시간 텍스트 (12px / 700 / white) | media · gallery |

\`\`\`tsx
import { Thumbnail } from '@/components/Thumbnail';

<Thumbnail src={img} type="image" ratio="1:1" radius={12} />
<Thumbnail src={img} type="media" ratio="3:2" radius={8} duration="03:25" badge="LIVE" showMore />
<Thumbnail src={img} type="gallery" ratio="3:4" radius={12} duration="12:00" rank={1} />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['image', 'media', 'gallery'] satisfies ThumbnailType[],
      description: '썸네일 타입',
      table: { type: { summary: 'ThumbnailType' }, defaultValue: { summary: 'image' } },
    },
    ratio: {
      control: 'select',
      options: ['1:1', '3:2', '3:4', '3:4.5', '3:5', '16:9'] satisfies ThumbnailRatio[],
      description: '이미지 비율 — 설정 시 width 기준으로 height 자동 계산',
      table: { type: { summary: 'ThumbnailRatio' } },
    },
    radius: {
      control: 'select',
      options: [0, 8, 12, 16, 20] satisfies ThumbnailRadius[],
      description: '모서리 반경',
      table: { type: { summary: 'ThumbnailRadius' }, defaultValue: { summary: 'none' } },
    },
    src:      { control: 'text',    description: '이미지 URL' },
    width:    { control: 'number',  description: '너비 (px)', table: { defaultValue: { summary: '150' } } },
    height:   { control: 'number',  description: '높이 (px) — ratio 미설정 시 사용', table: { defaultValue: { summary: '150' } } },
    duration: { control: 'text',    description: '재생시간 (media·gallery) — light.icon.video 14×14 + 텍스트로 구성' },
    badge:    { control: 'text',    description: '좌상단 코너 뱃지 텍스트' },
    rank:     { control: 'number',  description: '좌하단 랭킹 번호' },
    showMore: { control: 'boolean', description: '우상단 icon.more (24×24) 표시', table: { defaultValue: { summary: 'false' } } },
  },
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

// ── Playground ────────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    type: 'media',
    ratio: '1:1',
    radius: 12,
    src: IMG,
    width: 150,
    duration: '03:25',
    badge: 'LIVE',
    showMore: true,
  },
};

// ── Type ──────────────────────────────────────────────────────────────────────
export const Types: Story = {
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4, fontFamily: 'Pretendard, sans-serif' }}>
      <Block label="Measurement" desc="타입에 따라 딤·쉐도우·duration 슬롯 사용 여부가 달라집니다.">
        <div style={{ overflowX: 'auto' }}>
          <table style={TABLE_S}>
            <thead>
              <tr>
                {['Type', 'Dim', 'Shadow', 'Duration Slot', 'Description'].map(h => (
                  <th key={h} style={TH_S}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {([
                ['image',   '3%', 'none',              '—', '기본 이미지 썸네일'],
                ['media',   '0%', '8%  (bottom)',       '✓', '동영상 콘텐츠 썸네일'],
                ['gallery', '0%', '8%  (top + bottom)', '✓', '갤러리(다중) 콘텐츠 썸네일'],
              ] as const).map(row => (
                <tr key={row[0]}>
                  <td style={TD_LABEL_S}>{row[0]}</td>
                  <td style={TD_S}>{row[1]}</td>
                  <td style={TD_S}>{row[2]}</td>
                  <td style={{ ...TD_S, textAlign: 'center' }}>{row[3]}</td>
                  <td style={TD_S}>{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="Usage">
        <Row gap={16}>
          {(['image', 'media', 'gallery'] as ThumbnailType[]).map(t => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type={t} radius={8} width={150} height={150} duration="03:25" />
              <Caption>type="{t}"</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Ratio ─────────────────────────────────────────────────────────────────────
export const Ratios: Story = {
  name: 'Ratio',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="Usage" desc="width 기준으로 height가 자동 계산됩니다.">
        <Row gap={16}>
          {(['1:1', '3:2', '3:4', '3:4.5', '3:5', '16:9'] as ThumbnailRatio[]).map(r => (
            <div key={r} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type="image" radius={8} width={120} ratio={r} />
              <Caption>{r}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Radius ────────────────────────────────────────────────────────────────────
export const Radiuses: Story = {
  name: 'Radius',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="Usage" desc="모서리 반경 옵션입니다.">
        <Row gap={16}>
          {([0, 8, 12, 16, 20] as ThumbnailRadius[]).map(r => (
            <div key={String(r)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type="image" radius={r} width={150} height={150} />
              <Caption>radius={r}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Slots ─────────────────────────────────────────────────────────────────────
export const Slots: Story = {
  name: 'Slots',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4, fontFamily: 'Pretendard, sans-serif' }}>

      <Block label="Slot Layout" desc="4개의 오버레이 슬롯이 36×36 영역으로 각 코너에 고정 배치됩니다.">
        <div style={{ overflowX: 'auto' }}>
          <table style={TABLE_S}>
            <thead>
              <tr>
                {['위치', 'Prop', '슬롯 크기', '내용', '사용 타입'].map(h => (
                  <th key={h} style={TH_S}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {([
                ['좌상단  (topLeft)',     'badge',    '36×36', '텍스트 뱃지  (예: "LIVE", "NEW")',                              '모든 타입'],
                ['우상단  (topRight)',    'showMore', '36×36', 'icon.more  24×24',                                             '모든 타입'],
                ['좌하단  (bottomLeft)', 'rank',     '36×36', '랭킹 숫자',                                                    '모든 타입'],
                ['우하단  (bottomRight)','duration', '36×36', 'light.icon.video  14×14  +  시간 텍스트  (12px / 700 / white)', 'media · gallery'],
              ] as const).map(row => (
                <tr key={row[0]}>
                  <td style={TD_LABEL_S}>{row[0]}</td>
                  <td style={TD_S}><code>{row[1]}</code></td>
                  <td style={{ ...TD_S, textAlign: 'center' }}>{row[2]}</td>
                  <td style={TD_S}>{row[3]}</td>
                  <td style={TD_S}>{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="badge" desc="좌상단 코너 뱃지. LIVE, NEW 등 상태 표시에 사용합니다.">
        <Row gap={16}>
          {['LIVE', 'NEW'].map(b => (
            <div key={b} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type="image" radius={8} width={150} height={150} badge={b} />
              <Caption>badge="{b}"</Caption>
            </div>
          ))}
        </Row>
      </Block>

      <Block label="showMore" desc="우상단 icon.more (24×24)를 표시합니다.">
        <Row gap={16}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Thumbnail src={IMG} type="image" radius={8} width={150} height={150} showMore />
            <Caption>showMore</Caption>
          </div>
        </Row>
      </Block>

      <Block label="duration" desc="우하단 재생시간. light.icon.video (14×14) + 시간 텍스트로 구성됩니다. media·gallery 타입에서만 표시됩니다.">
        <Row gap={16}>
          {(['media', 'gallery'] as ThumbnailType[]).map(t => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type={t} radius={8} width={150} height={150} duration="03:25" />
              <Caption>type="{t}"</Caption>
            </div>
          ))}
        </Row>
      </Block>

      <Block label="Combination" desc="badge · showMore · rank · duration을 함께 사용하는 예시입니다.">
        <Row gap={16}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Thumbnail src={IMG} type="media" radius={12} width={150} height={150}
              badge="LIVE" showMore duration="03:25" />
            <Caption>media + badge + more + duration</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Thumbnail src={IMG} type="gallery" radius={12} width={150} height={150}
              rank={1} showMore duration="12:00" />
            <Caption>gallery + rank + more + duration</Caption>
          </div>
        </Row>
      </Block>

    </div>
  ),
};

// ── Matrix ────────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const types: ThumbnailType[] = ['image', 'media', 'gallery'];
    const radiuses: ThumbnailRadius[] = [0, 8, 12, 16, 20];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse', border: '1px solid var(--color-neutral-stroke-divider)' }}>
          <thead>
            <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
              <th style={{
                padding: '8px 16px', textAlign: 'left', fontSize: 11,
                color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700,
                letterSpacing: '0.07em', textTransform: 'uppercase',
                borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              }}>
                type \ radius
              </th>
              {radiuses.map(r => (
                <th key={String(r)} style={{
                  padding: '8px 16px', fontSize: 11,
                  color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700,
                  letterSpacing: '0.07em', textAlign: 'center',
                  borderBottom: '1px solid var(--color-neutral-stroke-divider)',
                }}>
                  {r}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {types.map(t => (
              <tr key={t} style={{ background: 'var(--color-neutral-background-default)', borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
                <td style={{
                  padding: '16px', fontSize: 12, fontWeight: 600,
                  color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle',
                  background: 'var(--color-neutral-background-default)',
                }}>
                  {t}
                </td>
                {radiuses.map(r => (
                  <td key={String(r)} style={{
                    padding: '12px 16px', verticalAlign: 'middle', textAlign: 'center',
                    background: 'var(--color-neutral-background-default)',
                  }}>
                    <Thumbnail
                      src={IMG} type={t} radius={r}
                      width={100} height={100}
                      duration={t !== 'image' ? '03:25' : undefined}
                    />
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
