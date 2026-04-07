import type { Meta, StoryObj } from '@storybook/react';

// ── Icons ──────────────────────────────────────────────────────────────────
const IconConsistency = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--color-primary-foreground-default)', userSelect: 'none' }}>
    apps
  </span>
);
const IconProcess = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--color-primary-foreground-default)', userSelect: 'none' }}>
    dataset_linked
  </span>
);
const IconProductivity = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--color-primary-foreground-default)', userSelect: 'none' }}>
    recycling
  </span>
);

// ── 데이터 ─────────────────────────────────────────────────────────────────
const scopeItems = [
  {
    name: 'Foundations (BON UI)',
    desc: [
      '디자인 시스템의 시각적 기반을 구성하는 핵심 요소의 집합입니다.',
      'Color, Typography, Spacing, Elevation 등 모든 Component와 Items에 공통으로 적용되는 디자인 원칙과 토큰을 정의합니다.',
      'Assets을 포함한 모든 레벨의 구성요소는 Foundations 토큰을 기반으로 작동하며, 임의 값 사용은 허용하지 않습니다.',
    ],
    note: 'BON UI에서 제공하는 토큰을 참조하며, 별도 정의 없이 BON UI 가이드라인을 준수합니다.',
  },
  {
    name: 'Assets',
    desc: [
      '시스템 전반에서 참조되는 시각적 리소스의 집합입니다.',
      'Component나 Items처럼 상태(State)나 인터랙션을 갖지 않으며, 독립적으로 의미를 완성하는 정적 자원으로 관리됩니다.',
      '자체 제작 및 유지 관리하며, Foundations 토큰을 준수하여 제작합니다.',
    ],
    subTable: {
      headers: ['유형', '설명'],
      rows: [
        ['Icons', '서비스 전용 아이콘 세트. 기능과 맥락을 기준으로 분류 및 네이밍하여 관리합니다.'],
      ],
    },
  },
  {
    name: 'Components',
    desc: [
      '시스템과 상호 작용하는 가장 작은 단위의 구성요소입니다.',
      '독립적으로 사용되거나 Item 구성의 기본 단위로 활용됩니다.',
      '임의 편집이 불가하며, 규정된 가이드라인을 준수하여 활용합니다.',
    ],
  },
  {
    name: 'Items',
    desc: [
      '하나 이상의 Component가 조합되어 특정 기능 또는 콘텐츠 영역을 구성하는 단위입니다.',
      '서비스의 맥락과 레이아웃 방향에 따라 아래 세 가지 유형으로 구분하며, 각 유형의 구성 방식은 가이드라인 내 허용 범위를 준수합니다.',
      '항목의 내부 구성은 Component의 조합으로 자유롭게 정의되며, 섬네일, 텍스트, 아이콘, 배지, 버튼 등 다양한 요소로 구성될 수 있습니다.',
      'Items 레벨은 항목의 내부 구조가 아닌 배열 방향과 레이아웃 패턴을 정의합니다.',
    ],
    subTable: {
      headers: ['유형', '배열 방향', '설명', '주요 활용 사례'],
      rows: [
        ['ItemsVert', '세로', '항목들이 수직 방향으로 나열되는 단위', '피드, 리스트, 수직 스크롤 영역'],
        ['ItemsHorz', '가로', '항목들이 수평 방향으로 나열되는 단위', '캐러셀, 수평 스크롤 영역, 콘텐츠 탐색·추천'],
        ['ItemsGrid', '격자', '항목들이 격자 구조로 나열되는 단위', '갤러리, 상품 목록'],
      ],
    },
    note: '항목의 내부 구조는 Component 조합 규칙을 따릅니다.',
  },
];

const usageItems = [
  {
    name: '디자인',
    items: [
      '네이버 메인에서 공통으로 활용 가능한 컴포넌트를 MDS에 정의합니다.',
      '신규 서비스 디자인 진행 시 반드시 정의된 컴포넌트를 사용하고, 원하는 컴포넌트가 없는 경우에만 신규로 디자인합니다.',
      '신규 디자인 중 공통화 가능한 컴포넌트는 MDS에 추가하고 재사용합니다.',
    ],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────
const HomePage = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    color: 'var(--color-neutral-foreground-default)',
    background: 'var(--color-neutral-background-default)',
    padding: '40px',
    minHeight: '100vh',
    boxSizing: 'border-box',
  }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px', lineHeight: 1.2, color: 'var(--color-neutral-foreground-default)' }}>
          Main Design System
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--color-neutral-foreground-subtle-3)', margin: 0 }}>
          NAVER UX · last updated Mar 20, 2026
        </p>
      </div>

      {/* ── Info Banner ── */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: 10,
        padding: '14px 18px', borderRadius: 8,
        background: 'var(--color-neutral-background-raised-1)',
        border: '1px solid var(--color-neutral-stroke-divider)',
        marginBottom: '40px',
        fontSize: 14, color: 'var(--color-neutral-foreground-default)', lineHeight: 1.6,
      }}>
        <span>MDS는 일관되고 효율적인 네이버앱과 메인 서비스 경험을 만들기 위한 통합 디자인 시스템입니다.</span>
      </div>

      {/* ── 3 Value Cards ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 0,
        border: '1px solid var(--color-neutral-stroke-divider)',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: '48px',
      }}>
        {[
          { icon: <IconConsistency />, title: '일관된 사용자 경험 제공', desc: '명확한 사용 기준과 UX 가이드라인' },
          { icon: <IconProcess />,     title: '효율적인 업무 프로세스 구축', desc: '체계적인 관리 및 운영으로' },
          { icon: <IconProductivity />, title: '생산성 극대화', desc: 'AI 기반 도구 활용으로' },
        ].map((card, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'space-between',
            padding: '40px 24px 32px',
            background: 'var(--color-neutral-background-default)',
            borderRight: i < 2 ? '1px solid var(--color-neutral-stroke-divider)' : 'none',
            textAlign: 'center', gap: 24,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 72 }}>
              {card.icon}
            </div>
            <div>
              <p style={{ fontSize: 13, color: 'var(--color-neutral-foreground-subtle-2)', margin: '0 0 4px', lineHeight: 1.5 }}>{card.desc}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-neutral-foreground-default)', margin: 0, lineHeight: 1.4 }}>{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── 범위 ── */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-neutral-foreground-default)', margin: '0 0 16px', letterSpacing: '-0.3px' }}>범위</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {scopeItems.map((item) => (
            <div key={item.name} style={{
              border: '1px solid var(--color-neutral-stroke-divider)',
              borderRadius: 10, overflow: 'hidden',
              background: 'var(--color-neutral-background-default)',
            }}>
              <div style={{
                padding: '14px 20px',
                background: 'var(--color-neutral-background-raised-1)',
                borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              }}>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: 'var(--color-neutral-foreground-default)' }}>{item.name}</h3>
              </div>
              <div style={{ padding: '16px 20px' }}>
                <ul style={{ margin: 0, paddingLeft: 18, listStyle: 'disc' }}>
                  {item.desc.map((d, i) => (
                    <li key={i} style={{ fontSize: 13, color: 'var(--color-neutral-foreground-subtle-1)', lineHeight: 1.7, marginBottom: i < item.desc.length - 1 ? 4 : 0 }}>{d}</li>
                  ))}
                </ul>
                {'note' in item && item.note && (
                  <div style={{
                    marginTop: 12, padding: '10px 14px', borderRadius: 6,
                    background: 'var(--color-neutral-background-raised-1)',
                    fontSize: 12, color: 'var(--color-neutral-foreground-subtle-2)', lineHeight: 1.6,
                    borderLeft: '3px solid var(--color-neutral-stroke-divider)',
                  }}>{item.note}</div>
                )}
                {'subTable' in item && item.subTable && (
                  <table style={{
                    marginTop: 12, borderCollapse: 'collapse', width: '100%', fontSize: 12,
                    border: '1px solid var(--color-neutral-stroke-divider)', borderRadius: 6, overflow: 'hidden',
                  }}>
                    <thead>
                      <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
                        {item.subTable.headers.map((h) => (
                          <th key={h} style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 700, color: 'var(--color-neutral-foreground-default)', borderBottom: '1px solid var(--color-neutral-stroke-divider)', whiteSpace: 'nowrap' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.subTable.rows.map((row, ri) => (
                        <tr key={ri} style={{ borderBottom: ri < item.subTable!.rows.length - 1 ? '1px solid var(--color-neutral-stroke-divider)' : 'none' }}>
                          {row.map((cell, ci) => (
                            <td key={ci} style={{ padding: '8px 12px', color: ci === 0 ? 'var(--color-neutral-foreground-default)' : 'var(--color-neutral-foreground-subtle-1)', fontFamily: ci === 0 ? 'monospace' : 'inherit', fontSize: ci === 0 ? 11 : 12, verticalAlign: 'top' }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 활용 ── */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-neutral-foreground-default)', margin: '0 0 16px', letterSpacing: '-0.3px' }}>활용</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {usageItems.map((section) => (
            <div key={section.name} style={{
              border: '1px solid var(--color-neutral-stroke-divider)',
              borderRadius: 10, overflow: 'hidden',
              background: 'var(--color-neutral-background-default)',
            }}>
              <div style={{
                padding: '14px 20px',
                background: 'var(--color-neutral-background-raised-1)',
                borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              }}>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: 'var(--color-neutral-foreground-default)' }}>{section.name}</h3>
              </div>
              <div style={{ padding: '16px 20px' }}>
                <ul style={{ margin: 0, paddingLeft: 18, listStyle: 'disc' }}>
                  {section.items.map((d, i) => (
                    <li key={i} style={{ fontSize: 13, color: 'var(--color-neutral-foreground-subtle-1)', lineHeight: 1.7, marginBottom: i < section.items.length - 1 ? 4 : 0 }}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{ paddingTop: 24, borderTop: '1px solid var(--color-neutral-stroke-divider)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 12, color: 'var(--color-neutral-foreground-subtle-3)' }}>MDS Design System · NAVER UX · 2026</span>
        <span style={{ fontSize: 12, color: 'var(--color-neutral-foreground-subtle-3)' }}>Storybook 8 · React 18 · Tailwind CSS v4</span>
      </div>

    </div>
  </div>
);

const meta: Meta<typeof HomePage> = {
  title: 'Home',
  component: HomePage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
