import type { Meta, StoryObj } from '@storybook/react';

// ── Styles ───────────────────────────────────────────────────────────────────
const sectionGap = 120;
const h1Style: React.CSSProperties = { fontSize: 26, fontWeight: 700, margin: 0, letterSpacing: -0.3, color: 'black' };
const h2Style: React.CSSProperties = { fontSize: 20, fontWeight: 700, margin: 0, letterSpacing: -0.3, color: 'black' };
const bodyStyle: React.CSSProperties = { fontSize: 16, lineHeight: 1.7, margin: 0, color: '#222225', letterSpacing: -0.3 };
const descStyle: React.CSSProperties = { fontSize: 14, lineHeight: 1.7, margin: 0, color: '#444447', letterSpacing: -0.3 };

const Divider = () => (
  <div style={{ width: '100%', height: 1, background: '#e5e5e5' }} />
);

const NumberItem = ({ num, text }: { num: number; text: string }) => (
  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
    <div style={{
      width: 17, height: 17, borderRadius: 100, border: '1.4px solid #222225',
      background: '#f0f0f3', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 10, fontWeight: 600, color: '#222225', flexShrink: 0,
    }}>{num}</div>
    <span style={{ fontSize: 16, color: '#222225', letterSpacing: -0.3 }}>{text}</span>
  </div>
);

// ── Structure Diagram ────────────────────────────────────────────────────────
const compRadius = 6;

const CompChip = ({ label }: { label: string }) => (
  <div style={{
    background: '#6dc993', borderRadius: compRadius, height: 48, width: 200,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: "'SF Mono', 'Menlo', monospace", fontSize: 15, fontWeight: 700, color: 'black',
  }}>{label}</div>
);

const ItemLabel = ({ label }: { label: string }) => (
  <div style={{
    height: 48, width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: "'SF Mono', 'Menlo', monospace", fontSize: 15, fontWeight: 700, color: 'black',
  }}>{label}</div>
);

const StructureDiagram = () => (
  <div style={{
    background: '#f7f7f7', display: 'flex', gap: 80, alignItems: 'center',
    justifyContent: 'center', padding: '80px 100px', borderRadius: 8, overflow: 'hidden',
  }}>
    {/* 1. comp 단독 */}
    <CompChip label="comp" />

    {/* 2. item = label + comp + comp */}
    <div style={{
      background: '#a3ddb8', border: '6px solid #a3ddb8', borderRadius: compRadius,
      display: 'flex', flexDirection: 'column', gap: 2,
    }}>
      <ItemLabel label="item" />
      <CompChip label="comp" />
      <CompChip label="comp" />
    </div>

    {/* 3. itemsVert = label + item(label + comp + comp) */}
    <div style={{
      background: '#d4f0df', border: '12px solid #d4f0df', borderRadius: compRadius,
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      <ItemLabel label="itemsVert" />
      <div style={{
        background: '#a3ddb8', border: '6px solid #a3ddb8', borderRadius: compRadius,
        display: 'flex', flexDirection: 'column', gap: 2,
      }}>
        <ItemLabel label="item" />
        <CompChip label="comp" />
        <CompChip label="comp" />
      </div>
    </div>
  </div>
);

// ── Placeholder Component ────────────────────────────────────────────────────
const PlaceholderBox = ({ w = 120, h = 80, radius = 8 }: { w?: number; h?: number; radius?: number }) => (
  <div style={{ width: w, height: h, borderRadius: radius, background: '#e5e5e8', flexShrink: 0 }} />
);

const PlaceholderLine = ({ w = 100, h = 10 }: { w?: number | string; h?: number }) => (
  <div style={{ width: w, height: h, borderRadius: 4, background: '#e5e5e8' }} />
);

// ── Component Preview Cards ──────────────────────────────────────────────────
const c = '#e0e0e4';
const captionStyle: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: '#222225', margin: 0 };
const CompCard = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <p style={{ ...captionStyle, textAlign: 'center' }}>{label}</p>
    <div style={{
      background: 'white', borderRadius: 10, padding: 20, width: 180, minHeight: 80,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
      boxShadow: '0 0 0 1px #f0f0f3',
    }}>
      {children}
    </div>
  </div>
);

const ButtonPreview = () => (
  <CompCard label="Button">
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
      <div style={{ width: 80, height: 28, borderRadius: 6, background: c }} />
      <div style={{ width: 64, height: 28, borderRadius: 6, background: c }} />
      <div style={{ width: 52, height: 24, borderRadius: 6, background: c }} />
    </div>
  </CompCard>
);

const ChipPreview = () => (
  <CompCard label="Chip">
    <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ width: 48, height: 22, borderRadius: 11, background: c }} />
      <div style={{ width: 40, height: 22, borderRadius: 11, background: c }} />
      <div style={{ width: 52, height: 22, borderRadius: 11, background: c }} />
      <div style={{ width: 36, height: 22, borderRadius: 11, background: c }} />
    </div>
  </CompCard>
);

const ImagePreview = () => (
  <CompCard label="Image">
    <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
      <div style={{ width: 56, height: 56, borderRadius: 8, background: c }} />
      <div style={{ width: 44, height: 44, borderRadius: 6, background: c }} />
    </div>
  </CompCard>
);

const ProfilePreview = () => (
  <CompCard label="Profile">
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: c }} />
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: c }} />
      <div style={{ width: 20, height: 20, borderRadius: '50%', background: c }} />
    </div>
  </CompCard>
);

const SheetPreview = () => (
  <CompCard label="Sheet">
    <div style={{ width: 120, borderRadius: 8, padding: '6px 10px', display: 'flex', flexDirection: 'column', gap: 4, background: c }}>
      <div style={{ width: 20, height: 3, borderRadius: 2, background: 'white', margin: '0 auto 2px' }} />
      <div style={{ width: '90%', height: 5, borderRadius: 3, background: 'white' }} />
      <div style={{ width: '70%', height: 5, borderRadius: 3, background: 'white' }} />
      <div style={{ width: '80%', height: 5, borderRadius: 3, background: 'white' }} />
    </div>
  </CompCard>
);

const SwitchPreview = () => (
  <CompCard label="Switch">
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <div style={{ width: 36, height: 20, borderRadius: 10, background: c, position: 'relative' }}>
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'white', position: 'absolute', top: 2, right: 2 }} />
      </div>
      <div style={{ width: 36, height: 20, borderRadius: 10, background: c, position: 'relative' }}>
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'white', position: 'absolute', top: 2, left: 2 }} />
      </div>
    </div>
  </CompCard>
);

const TabPreview = () => (
  <CompCard label="Tab">
    <div style={{ display: 'flex', gap: 0, width: '100%' }}>
      <div style={{ flex: 1, height: 26, borderBottom: `2px solid ${c}` }} />
      <div style={{ flex: 1, height: 26, borderBottom: `2px solid ${c}` }} />
      <div style={{ flex: 1, height: 26, borderBottom: `2px solid ${c}` }} />
    </div>
  </CompCard>
);

const ThumbnailPreview = () => (
  <CompCard label="Thumbnail">
    <div style={{ display: 'flex', gap: 6 }}>
      <div style={{ width: 48, height: 48, borderRadius: 8, background: c }} />
      <div style={{ width: 48, height: 48, borderRadius: 8, background: c }} />
    </div>
  </CompCard>
);

// ── Items Layout Examples ────────────────────────────────────────────────────
const ItemsVertExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div>
      <p style={h2Style}>ItemsVert</p>
      <p style={{ ...descStyle, marginTop: 8 }}>itemsVert는 항목들이 수직으로 나열되며 세로 스크롤 영역에 사용됩니다.</p>
    </div>
    <div style={{ background: '#f7f7f7', borderRadius: 8, padding: '40px 60px', overflow: 'hidden' }}>
      <div style={{ background: 'white', borderRadius: 12, padding: 16, width: 320, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 0 0 1px #f0f0f3' }}>
        {[1, 2, 3].map(i => (
          <div key={i}>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <PlaceholderLine w="50%" h={8} />
                <PlaceholderLine w="100%" h={8} />
                <PlaceholderLine w="70%" h={8} />
              </div>
              <PlaceholderBox w={70} h={70} radius={6} />
            </div>
            {i < 3 && <div style={{ height: 1, background: '#f0f0f3', marginTop: 12 }} />}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ItemsHorzExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div>
      <p style={h2Style}>ItemsHorz</p>
      <p style={{ ...descStyle, marginTop: 8 }}>itemsHorz는 항목들이 수평으로 나열되며 가로 스크롤 영역에 사용됩니다.</p>
    </div>
    <div style={{ background: '#f7f7f7', borderRadius: 8, padding: '40px 60px', overflow: 'hidden' }}>
      <div style={{ background: 'white', borderRadius: 12, padding: 12, width: 320, margin: '0 auto', display: 'flex', gap: 8, overflow: 'hidden', boxShadow: '0 0 0 1px #f0f0f3' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ width: 120, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <PlaceholderBox w={120} h={100} radius={8} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '0 2px' }}>
              <PlaceholderLine w="90%" h={7} />
              <PlaceholderLine w="70%" h={7} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e5e5e8' }} />
                <PlaceholderLine w={40} h={6} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ItemsGridExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div>
      <p style={h2Style}>ItemsGrid</p>
      <p style={{ ...descStyle, marginTop: 8 }}>itemsGrid는 항목들이 격자 구조로 나열되며 갤러리, 상품 목록에 사용됩니다.</p>
    </div>
    <div style={{ background: '#f7f7f7', borderRadius: 8, padding: '40px 60px', overflow: 'hidden' }}>
      <div style={{ background: 'white', borderRadius: 12, padding: 12, width: 320, margin: '0 auto', boxShadow: '0 0 0 1px #f0f0f3' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <PlaceholderBox w={142} h={110} radius={8} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '0 2px' }}>
                <PlaceholderLine w="90%" h={7} />
                <PlaceholderLine w="70%" h={7} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e5e5e8' }} />
                  <PlaceholderLine w={40} h={6} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ── Naming Rule ──────────────────────────────────────────────────────────────
const NamingExample = ({ label, example }: { label: string; example: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <p style={{ fontSize: 16, fontWeight: 700, margin: 0, color: '#222225' }}>{label}</p>
    <div style={{
      background: '#f7f7f7', borderRadius: 8, padding: '24px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <code style={{
        fontFamily: "'SF Mono', 'Menlo', monospace", fontSize: 16, fontWeight: 500,
        color: '#222225', letterSpacing: 0.5,
      }}>{example}</code>
    </div>
  </div>
);

// ── Page ─────────────────────────────────────────────────────────────────────
const BaseGuidelinesPage = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    background: 'white', padding: 120, minHeight: '100vh', boxSizing: 'border-box',
  }}>
    <div style={{ maxWidth: 1000, display: 'flex', flexDirection: 'column', gap: sectionGap }}>

      {/* ── Hero ── */}
      <div>
        <h1 style={{ fontSize: 40, fontWeight: 800, margin: 0, letterSpacing: -1, color: 'black', lineHeight: 1.2 }}>
          Base Guidelines
        </h1>
        <p style={{ fontSize: 17, margin: '20px 0 0', color: '#444447', lineHeight: '28px', letterSpacing: -0.3 }}>
          디자인 시스템의 구성요소를 단계별로 상세 정의하여 일관성 있는 프로덕트로 완성합니다.
        </p>
      </div>

      {/* ── Structure ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <p style={h1Style}>Structure</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <StructureDiagram />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <NumberItem num={1} text="Component: 디자인 시스템 구조에서 가장 단위가 작은 기본 요소" />
              <NumberItem num={2} text="Item: component를 조합하는 최소 단위" />
              <NumberItem num={3} text="Items: item을 조합하는 최소 단위이며, 3가지 방식으로 구분(itemsVert, itemsHorz, itemsGrid)" />
            </div>
          </div>
        </div>

        <Divider />

        {/* ── Layout ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <p style={h1Style}>Layout</p>

          {/* Component */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={h2Style}>Component</p>
            <div style={{
              background: '#f7f7f7', borderRadius: 8,
              padding: '40px 40px',
              display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap',
            }}>
              <ButtonPreview />
              <ChipPreview />
              <ImagePreview />
              <ProfilePreview />
              <SwitchPreview />
              <TabPreview />
              <ThumbnailPreview />
              <SheetPreview />
            </div>
          </div>

          {/* ItemsVert */}
          <ItemsVertExample />

          {/* ItemsHorz */}
          <ItemsHorzExample />

          {/* ItemsGrid */}
          <ItemsGridExample />
        </div>

        <Divider />

        {/* ── Naming Rule ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <p style={h1Style}>Naming Rule</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={bodyStyle}>• 기본 네이밍은 camelCase를 따릅니다.</p>
            <p style={bodyStyle}>• 시작은 소문자로 시작하며, 두 번째 이상의 단어는 대문자로 시작하여 띄어쓰기 없이 연결합니다.</p>
          </div>
          <div style={{
            background: '#f7f7f7', borderRadius: 8, padding: '40px 60px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          }}>
            <code style={{ fontFamily: "'SF Mono', monospace", fontSize: 20, fontWeight: 700, color: '#16a34a' }}>searchGreen</code>
            <code style={{ fontFamily: "'SF Mono', monospace", fontSize: 20, fontWeight: 700, color: '#2563eb' }}>blueLink</code>
          </div>

          <NamingExample label="component" example="comp.imageLeft.image" />
          <NamingExample label="item" example="item.shp.imageLeft" />
          <NamingExample label="block" example="block.shp.review" />
        </div>
      </div>

    </div>
  </div>
);

const meta: Meta<typeof BaseGuidelinesPage> = {
  title: 'Foundation/Base Guidelines',
  component: BaseGuidelinesPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof BaseGuidelinesPage>;

export const Default: Story = {};
