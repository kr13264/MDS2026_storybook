import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./ImageRect-FsrKg4P1.js";import{c as m}from"./ImageThumbnail-CZe9FtFx.js";const p="https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop",w=({children:o,gap:a=8})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:a},children:o}),u=({label:o,desc:a,children:s})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:o}),a&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:a}),s]}),g=({children:o})=>e.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:o}),f={title:"Components/Images/Shadow",component:m,parameters:{layout:"centered",docs:{description:{component:`
이미지 위에 방향성 그라디언트 오버레이를 적용하는 Shadow 컴포넌트. 이미지 엣지 처리 및 UI 요소와의 경계 구분에 활용합니다.

---

<div style="margin-bottom:30px"></div>

### Shadow Direction

| Shadow | Direction | Description |
|--------|-----------|-------------|
| \`none\` | — | 오버레이 없음 |
| \`up\` | 상단 | top → transparent 방향 그라디언트 |
| \`down\` | 하단 | bottom → transparent 방향 그라디언트 |
| \`up&down\` | 상·하단 | 상단과 하단 동시 적용 |

\`\`\`tsx
import { ImageShadow } from '@/components/Images';

<ImageShadow src={imgSrc} showShadow={true} shadow="down" width={148} height={148} />
\`\`\`
        `.trim()}}},argTypes:{shadow:{control:"select",options:["none","up","down","up&down"],description:"그라디언트 방향",table:{type:{summary:"ImageShadowDirection"},defaultValue:{summary:"none"}}},showShadow:{control:"boolean",description:"그라디언트 오버레이 표시 여부",table:{defaultValue:{summary:"false"}}},width:{control:"number",description:"컴포넌트 너비 (px)",table:{type:{summary:"number"},defaultValue:{summary:"150"}}},height:{control:"number",description:"컴포넌트 높이 (px)",table:{type:{summary:"number"},defaultValue:{summary:"150"}}},src:{control:"text",description:"이미지 URL",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"비활성 상태 (opacity 0.35)",table:{defaultValue:{summary:"false"}}}}},t={args:{src:p,showShadow:!0,shadow:"down",width:148,height:148}},r={tags:["!autodocs"],name:"Shadow",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(u,{label:"Shadow Directions",desc:"방향성 그라디언트 오버레이 비교",children:e.jsx(w,{gap:12,children:[{shadow:"none",showShadow:!1,desc:"오버레이 없음"},{shadow:"up",showShadow:!0,desc:"top → transparent"},{shadow:"down",showShadow:!0,desc:"bottom → transparent"},{shadow:"up&down",showShadow:!0,desc:"상하단 동시"}].map(({shadow:o,showShadow:a,desc:s})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(m,{src:p,shadow:o,showShadow:a,width:148,height:148}),e.jsx(g,{children:o}),e.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:10,color:"var(--color-neutral-foreground-disabled)",margin:"2px 0 0",textAlign:"center"},children:s})]},o))})})})};var n,d,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    src: IMG_SRC,
    showShadow: true,
    shadow: 'down',
    width: 148,
    height: 148
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,c,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Shadow',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Shadow Directions" desc="방향성 그라디언트 오버레이 비교">
        <Row gap={12}>
          {[{
          shadow: 'none' as ImageShadowDirection,
          showShadow: false,
          desc: '오버레이 없음'
        }, {
          shadow: 'up' as ImageShadowDirection,
          showShadow: true,
          desc: 'top → transparent'
        }, {
          shadow: 'down' as ImageShadowDirection,
          showShadow: true,
          desc: 'bottom → transparent'
        }, {
          shadow: 'up&down' as ImageShadowDirection,
          showShadow: true,
          desc: '상하단 동시'
        }].map(({
          shadow,
          showShadow,
          desc
        }) => <div key={shadow} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ImageShadow src={IMG_SRC} shadow={shadow} showShadow={showShadow} width={148} height={148} />
              <Caption>{shadow}</Caption>
              <p style={{
            fontFamily: 'Pretendard,sans-serif',
            fontSize: 10,
            color: 'var(--color-neutral-foreground-disabled)',
            margin: '2px 0 0',
            textAlign: 'center'
          }}>{desc}</p>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const S=["Playground","Directions"],I=Object.freeze(Object.defineProperty({__proto__:null,Directions:r,Playground:t,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{t as P,I as S};
