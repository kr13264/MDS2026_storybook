import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./ImageRect-FsrKg4P1.js";import{b as l}from"./ImageThumbnail-CZe9FtFx.js";const n="https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop",x=({children:s,gap:t=8})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:t},children:s}),I=({label:s,desc:t,children:v})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:s}),t&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:t}),v]}),z=({children:s})=>e.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:s}),S={title:"Components/Images/Place",component:l,parameters:{layout:"centered",docs:{description:{component:`
이미지 배치(Place) 상태 컴포넌트. 이미지의 로딩·없음·표시 상태를 시각적으로 구분합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`default\` | src가 있으면 이미지 표시, 없으면 그라디언트 플레이스홀더 |
| \`noImage\` | 이미지가 없는 상태. 아이콘과 회색 배경 표시 |
| \`placeHolder\` | 이미지 로딩 중 shimmer 애니메이션 표시 |

### Size

\`size\` prop (px)으로 너비·높이를 동시에 제어합니다. 기본값은 \`140\`이며 숫자로 자유롭게 지정 가능합니다.

\`\`\`tsx
import { ImagePlace } from '@/components/Images';

<ImagePlace type="default" src={imgSrc} size={120} />
<ImagePlace type="noImage" size={100} />
<ImagePlace type="placeHolder" size={140} />
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["default","noImage","placeHolder"],description:"이미지 배치 타입",table:{type:{summary:"'default' | 'noImage' | 'placeHolder'"},defaultValue:{summary:"default"}}},size:{control:"number",description:"너비·높이 크기 (px)",table:{type:{summary:"number"},defaultValue:{summary:"140"}}},src:{control:"text",description:'이미지 URL (type="default" 일 때 사용)',table:{type:{summary:"string"}}}}},a={args:{type:"default",size:140,src:n}},r={tags:["!autodocs"],name:"Type",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(I,{label:"Types",desc:"이미지 배치 상태에 따른 3가지 타입",children:e.jsx(x,{gap:12,children:[{type:"default",src:n},{type:"noImage",src:void 0},{type:"placeHolder",src:void 0}].map(({type:s,src:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(l,{type:s,src:t,size:120}),e.jsx(z,{children:s})]},s))})})})},o={tags:["!autodocs"],name:"Size",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(I,{label:"Size",desc:"같은 타입(default)을 다양한 크기로 비교",children:e.jsx(x,{gap:12,children:[60,80,100,120,140].map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(l,{type:"default",src:n,size:s}),e.jsxs(z,{children:[s,"px"]})]},s))})})})};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'default',
    size: 140,
    src: IMG_SRC
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Type',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Types" desc="이미지 배치 상태에 따른 3가지 타입">
        <Row gap={12}>
          {[{
          type: 'default' as const,
          src: IMG_SRC
        }, {
          type: 'noImage' as const,
          src: undefined
        }, {
          type: 'placeHolder' as const,
          src: undefined
        }].map(({
          type,
          src
        }) => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ImagePlace type={type} src={src} size={120} />
              <Caption>{type}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,f,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Size',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Size" desc="같은 타입(default)을 다양한 크기로 비교">
        <Row gap={12}>
          {[60, 80, 100, 120, 140].map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ImagePlace type="default" src={IMG_SRC} size={size} />
              <Caption>{size}px</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const j=["Playground","Types","Sizes"],R=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,Sizes:o,Types:r,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{R as P,a};
