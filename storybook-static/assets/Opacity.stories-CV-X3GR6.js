import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{a as m}from"./ImageThumbnail-D8tMuG9b.js";import"./index-Bc2G9s8g.js";const d="https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop",u=({children:t,gap:a=8})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:a},children:t}),g=({label:t,desc:a,children:y})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:t}),a&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:a}),y]}),f=({children:t})=>e.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:t}),v={title:"Components/Images/Opacity",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
이미지 위에 검정 딤(dim) 레이어를 적용하는 Opacity 컴포넌트. 이미지 위 텍스트 가독성 확보에 활용합니다.

---

<div style="margin-bottom:30px"></div>

### Opacity Level

| Opacity | 불투명도 | Description |
|---------|---------|-------------|
| \`none\` | 0% | 딤 레이어 없음 |
| \`3%\` | 3% | 미세한 딤. 이미지 색상 변화 없이 텍스트 가독성 보조 |
| \`40%\` | 40% | 중간 딤. 이미지 위 텍스트·아이콘 명확하게 노출 |

\`\`\`tsx
import { ImageOpacity } from '@/components/Images';

<ImageOpacity src={imgSrc} opacity="40%" width={200} height={150} />
\`\`\`
        `.trim()}}},argTypes:{opacity:{control:"select",options:["none","3%","40%"],description:"딤 레이어 불투명도",table:{type:{summary:"ImageOpacityLevel"},defaultValue:{summary:"none"}}},width:{control:"number",description:"컴포넌트 너비 (px)",table:{type:{summary:"number"},defaultValue:{summary:"150"}}},height:{control:"number",description:"컴포넌트 높이 (px)",table:{type:{summary:"number"},defaultValue:{summary:"150"}}},src:{control:"text",description:"이미지 URL",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"비활성 상태 (opacity 0.35)",table:{defaultValue:{summary:"false"}}}}},r={args:{src:d,opacity:"none",width:148,height:148}},o={name:"Opacity",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(g,{label:"Opacity",desc:"딤 레이어 불투명도 수준 비교",children:e.jsx(u,{gap:12,children:["none","3%","40%"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(m,{src:d,opacity:t,width:148,height:148}),e.jsx(f,{children:t})]},t))})})})};var s,i,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    src: IMG_SRC,
    opacity: 'none',
    width: 148,
    height: 148
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Opacity',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Opacity" desc="딤 레이어 불투명도 수준 비교">
        <Row gap={12}>
          {(['none', '3%', '40%'] as ImageOpacityLevel[]).map(opacity => <div key={opacity} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ImageOpacity src={IMG_SRC} opacity={opacity} width={148} height={148} />
              <Caption>{opacity}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const O=["Playground","Levels"];export{o as Levels,r as Playground,O as __namedExportsOrder,v as default};
