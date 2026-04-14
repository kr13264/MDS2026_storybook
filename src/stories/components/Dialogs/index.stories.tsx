import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '@/components/Dialogs';

// ── 샘플 아이콘 ────────────────────────────────────────────────────────────
const IcAlert = () => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={2} width="100%" height="100%">
    <circle cx="20" cy="20" r="18" />
    <path d="M20 14v8" strokeLinecap="round" />
    <circle cx="20" cy="27" r="1" fill="currentColor" stroke="none" />
  </svg>
);

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 24 }: { children: React.ReactNode; gap?: number }) => (
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

const SlotPlaceholder = ({ text }: { text: string }) => (
  <div style={{
    width: '100%', height: '100%', borderRadius: '12px',
    background: 'var(--color-neutral-background-separated-1)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--color-neutral-foreground-subtle-3)', fontSize: '13px',
    fontFamily: 'Pretendard, sans-serif',
  }}>
    {text}
  </div>
);

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialogs',
  component: Dialog,
  // docs page는 index.mdx에서 관리
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
모달 다이얼로그 컴포넌트.
상단 영역 구성 방식에 따라 **4개의 type**으로 구분합니다.
하단에는 취소/확인 버튼 그룹이 배치됩니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description | Usage |
|------|-------------|-------|
| \`default\` | 텍스트만 표시 | 간단한 확인/안내 다이얼로그 |
| \`icon\` | 상단 아이콘 + 텍스트 (가운데 정렬) | 경고, 알림 등 아이콘으로 의미를 강조할 때 |
| \`avatar\` | 상단 프로필 이미지 + 텍스트 (가운데 정렬) | 사용자 관련 확인 다이얼로그 |
| \`custom\` | 상/하단 커스텀 슬롯 + 텍스트 | 이미지, 일러스트 등 자유 구성이 필요할 때 |

### Text

| Prop | Description |
|------|-------------|
| \`headline\` | 제목 (18px Bold) |
| \`subText\` | 보조 텍스트 (16px Regular) |
| \`supportingText\` | 추가 설명 (14px Regular) |

### Footer

| Prop | Description |
|------|-------------|
| \`cancelLabel\` | 취소 버튼 레이블 |
| \`confirmLabel\` | 확인 버튼 레이블 (Primary 컬러) |

\`\`\`tsx
import { Dialog } from '@/components/Dialogs';

<Dialog
  type="default"
  headline="제목"
  subText="보조 설명"
  cancelLabel="취소"
  confirmLabel="확인"
  onCancel={() => {}}
  onConfirm={() => {}}
/>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'icon', 'avatar', 'custom'],
      description: '상단 영역 구성 방식',
    },
    headline: { control: 'text' },
    subText: { control: 'text' },
    supportingText: { control: 'text' },
    cancelLabel: { control: 'text' },
    confirmLabel: { control: 'text' },
    open: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// ── Playground ────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    type: 'default',
    headline: 'Headline',
    subText: 'SubText',
    supportingText: 'SupportingText',
    cancelLabel: '레이블 Label',
    confirmLabel: '레이블 Label',
    open: true,
  },
};

// ── Type ──────────────────────────────────────────────────────────────────
export const Type: Story = {
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="Default" desc="텍스트만으로 구성된 기본 다이얼로그.">
        <Dialog
          type="default"
          headline="Headline"
          subText="SubText"
          supportingText="SupportingText"
        />
      </Block>

      <Block label="Icon" desc="상단에 아이콘을 배치하여 의미를 강조합니다.">
        <Dialog
          type="icon"
          headline="Headline"
          subText="SubText"
          supportingText="SupportingText"
          icon={<IcAlert />}
        />
      </Block>

      <Block label="Avatar" desc="사용자 프로필 이미지를 상단에 배치합니다.">
        <Dialog
          type="avatar"
          headline="Headline"
          subText="SubText"
          supportingText="SupportingText"
          avatarSrc="https://i.pravatar.cc/80?img=12"
        />
      </Block>

      <Block label="Custom" desc="상/하단에 자유로운 콘텐츠를 배치할 수 있습니다.">
        <Dialog
          type="custom"
          headline="Headline"
          subText="SubText"
          supportingText="SupportingText"
          slotTop={<SlotPlaceholder text="Slot.top" />}
          slotBottom={<SlotPlaceholder text="Slot.bottom" />}
        />
      </Block>
    </div>
  ),
};

// ── Contents ──────────────────────────────────────────────────────────────
export const Contents: Story = {
  name: 'Contents',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="Headline Only" desc="제목만 표시합니다.">
        <Dialog type="default" headline="Headline" />
      </Block>

      <Block label="Headline + SubText" desc="제목과 보조 텍스트를 표시합니다.">
        <Dialog type="default" headline="Headline" subText="SubText" />
      </Block>

      <Block label="All Text" desc="제목, 보조 텍스트, 추가 설명을 모두 표시합니다.">
        <Dialog
          type="default"
          headline="Headline"
          subText="SubText"
          supportingText="SupportingText"
        />
      </Block>

      <Block label="Single Button" desc="확인 버튼만 사용합니다.">
        <Dialog
          type="default"
          headline="Headline"
          subText="SubText"
          cancelLabel=""
          confirmLabel="확인"
        />
      </Block>
    </div>
  ),
};

// ── Matrix ────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => (
    <div style={{ padding: 4 }}>
      <Block label="All Types" desc="4가지 타입을 나란히 비교합니다.">
        <Row gap={24}>
          <Dialog
            type="default"
            headline="Headline"
            subText="SubText"
            supportingText="SupportingText"
          />
          <Dialog
            type="icon"
            headline="Headline"
            subText="SubText"
            supportingText="SupportingText"
            icon={<IcAlert />}
          />
          <Dialog
            type="avatar"
            headline="Headline"
            subText="SubText"
            supportingText="SupportingText"
            avatarSrc="https://i.pravatar.cc/80?img=12"
          />
          <Dialog
            type="custom"
            headline="Headline"
            subText="SubText"
            supportingText="SupportingText"
            slotTop={<SlotPlaceholder text="Slot.top" />}
            slotBottom={<SlotPlaceholder text="Slot.bottom" />}
          />
        </Row>
      </Block>
    </div>
  ),
};
