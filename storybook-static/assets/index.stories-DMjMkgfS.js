import{j as e}from"./jsx-runtime-DiklIkkE.js";import{D as t}from"./Dialog-BrA-jWQD.js";const j=()=>e.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",stroke:"currentColor",strokeWidth:2,width:"100%",height:"100%",children:[e.jsx("circle",{cx:"20",cy:"20",r:"18"}),e.jsx("path",{d:"M20 14v8",strokeLinecap:"round"}),e.jsx("circle",{cx:"20",cy:"27",r:"1",fill:"currentColor",stroke:"none"})]}),H=({children:o,gap:s=24})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:s},children:o}),l=({label:o,desc:s,children:v})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:o}),s&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:s}),v]}),p=({text:o})=>e.jsx("div",{style:{width:"100%",height:"100%",borderRadius:"12px",background:"var(--color-neutral-background-separated-1)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-neutral-foreground-subtle-3)",fontSize:"13px",fontFamily:"Pretendard, sans-serif"},children:o}),D={title:"Components/Dialogs",component:t,parameters:{layout:"centered",docs:{description:{component:`
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
        `.trim()}}},argTypes:{type:{control:"select",options:["default","icon","avatar","custom"],description:"상단 영역 구성 방식"},headline:{control:"text"},subText:{control:"text"},supportingText:{control:"text"},cancelLabel:{control:"text"},confirmLabel:{control:"text"},open:{control:"boolean"}}},a={args:{type:"default",headline:"Headline",subText:"SubText",supportingText:"SupportingText",cancelLabel:"레이블 Label",confirmLabel:"레이블 Label",open:!0}},n={name:"Type",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(l,{label:"Default",desc:"텍스트만으로 구성된 기본 다이얼로그.",children:e.jsx(t,{type:"default",headline:"Headline",subText:"SubText",supportingText:"SupportingText"})}),e.jsx(l,{label:"Icon",desc:"상단에 아이콘을 배치하여 의미를 강조합니다.",children:e.jsx(t,{type:"icon",headline:"Headline",subText:"SubText",supportingText:"SupportingText",icon:e.jsx(j,{})})}),e.jsx(l,{label:"Avatar",desc:"사용자 프로필 이미지를 상단에 배치합니다.",children:e.jsx(t,{type:"avatar",headline:"Headline",subText:"SubText",supportingText:"SupportingText",avatarSrc:"https://i.pravatar.cc/80?img=12"})}),e.jsx(l,{label:"Custom",desc:"상/하단에 자유로운 콘텐츠를 배치할 수 있습니다.",children:e.jsx(t,{type:"custom",headline:"Headline",subText:"SubText",supportingText:"SupportingText",slotTop:e.jsx(p,{text:"Slot.top"}),slotBottom:e.jsx(p,{text:"Slot.bottom"})})})]})},r={name:"Contents",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(l,{label:"Headline Only",desc:"제목만 표시합니다.",children:e.jsx(t,{type:"default",headline:"Headline"})}),e.jsx(l,{label:"Headline + SubText",desc:"제목과 보조 텍스트를 표시합니다.",children:e.jsx(t,{type:"default",headline:"Headline",subText:"SubText"})}),e.jsx(l,{label:"All Text",desc:"제목, 보조 텍스트, 추가 설명을 모두 표시합니다.",children:e.jsx(t,{type:"default",headline:"Headline",subText:"SubText",supportingText:"SupportingText"})}),e.jsx(l,{label:"Single Button",desc:"확인 버튼만 사용합니다.",children:e.jsx(t,{type:"default",headline:"Headline",subText:"SubText",cancelLabel:"",confirmLabel:"확인"})})]})},i={name:"Matrix",render:()=>e.jsx("div",{style:{padding:4},children:e.jsx(l,{label:"All Types",desc:"4가지 타입을 나란히 비교합니다.",children:e.jsxs(H,{gap:24,children:[e.jsx(t,{type:"default",headline:"Headline",subText:"SubText",supportingText:"SupportingText"}),e.jsx(t,{type:"icon",headline:"Headline",subText:"SubText",supportingText:"SupportingText",icon:e.jsx(j,{})}),e.jsx(t,{type:"avatar",headline:"Headline",subText:"SubText",supportingText:"SupportingText",avatarSrc:"https://i.pravatar.cc/80?img=12"}),e.jsx(t,{type:"custom",headline:"Headline",subText:"SubText",supportingText:"SupportingText",slotTop:e.jsx(p,{text:"Slot.top"}),slotBottom:e.jsx(p,{text:"Slot.bottom"})})]})})})};var c,d,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'default',
    headline: 'Headline',
    subText: 'SubText',
    supportingText: 'SupportingText',
    cancelLabel: '레이블 Label',
    confirmLabel: '레이블 Label',
    open: true
  }
}`,...(x=(d=a.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var u,T,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Type',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="Default" desc="텍스트만으로 구성된 기본 다이얼로그.">
        <Dialog type="default" headline="Headline" subText="SubText" supportingText="SupportingText" />
      </Block>

      <Block label="Icon" desc="상단에 아이콘을 배치하여 의미를 강조합니다.">
        <Dialog type="icon" headline="Headline" subText="SubText" supportingText="SupportingText" icon={<IcAlert />} />
      </Block>

      <Block label="Avatar" desc="사용자 프로필 이미지를 상단에 배치합니다.">
        <Dialog type="avatar" headline="Headline" subText="SubText" supportingText="SupportingText" avatarSrc="https://i.pravatar.cc/80?img=12" />
      </Block>

      <Block label="Custom" desc="상/하단에 자유로운 콘텐츠를 배치할 수 있습니다.">
        <Dialog type="custom" headline="Headline" subText="SubText" supportingText="SupportingText" slotTop={<SlotPlaceholder text="Slot.top" />} slotBottom={<SlotPlaceholder text="Slot.bottom" />} />
      </Block>
    </div>
}`,...(g=(T=n.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var b,m,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Contents',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="Headline Only" desc="제목만 표시합니다.">
        <Dialog type="default" headline="Headline" />
      </Block>

      <Block label="Headline + SubText" desc="제목과 보조 텍스트를 표시합니다.">
        <Dialog type="default" headline="Headline" subText="SubText" />
      </Block>

      <Block label="All Text" desc="제목, 보조 텍스트, 추가 설명을 모두 표시합니다.">
        <Dialog type="default" headline="Headline" subText="SubText" supportingText="SupportingText" />
      </Block>

      <Block label="Single Button" desc="확인 버튼만 사용합니다.">
        <Dialog type="default" headline="Headline" subText="SubText" cancelLabel="" confirmLabel="확인" />
      </Block>
    </div>
}`,...(S=(m=r.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var y,h,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => <div style={{
    padding: 4
  }}>
      <Block label="All Types" desc="4가지 타입을 나란히 비교합니다.">
        <Row gap={24}>
          <Dialog type="default" headline="Headline" subText="SubText" supportingText="SupportingText" />
          <Dialog type="icon" headline="Headline" subText="SubText" supportingText="SupportingText" icon={<IcAlert />} />
          <Dialog type="avatar" headline="Headline" subText="SubText" supportingText="SupportingText" avatarSrc="https://i.pravatar.cc/80?img=12" />
          <Dialog type="custom" headline="Headline" subText="SubText" supportingText="SupportingText" slotTop={<SlotPlaceholder text="Slot.top" />} slotBottom={<SlotPlaceholder text="Slot.bottom" />} />
        </Row>
      </Block>
    </div>
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const B=["Playground","Type","Contents","Matrix"],P=Object.freeze(Object.defineProperty({__proto__:null,Contents:r,Matrix:i,Playground:a,Type:n,__namedExportsOrder:B,default:D},Symbol.toStringTag,{value:"Module"}));export{P as D,a as P};
