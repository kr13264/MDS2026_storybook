import{j as e}from"./jsx-runtime-DFAAy_2V.js";import"./index-Bc2G9s8g.js";const r=({orientation:i="horizontal",length:t="100%",className:a=""})=>{const y=i==="horizontal";return e.jsx("div",{role:"separator","aria-orientation":i,className:a,style:{flexShrink:0,...y?{width:t,height:1,borderTop:"1px solid var(--color-neutral-stroke-divider, rgba(0, 0, 0, 0.06))"}:{width:1,height:t,borderLeft:"1px solid var(--color-neutral-stroke-divider, rgba(0, 0, 0, 0.06))"}}})};r.displayName="Divider";r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"방향",defaultValue:{value:"'horizontal'",computed:!1}},length:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"길이 (horizontal: width, vertical: height)",defaultValue:{value:"'100%'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const s=({label:i,desc:t,children:a})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:i}),t&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:t}),a]}),z={title:"Components/Divider",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
수평/수직 구분선 컴포넌트입니다.
콘텐츠 영역을 시각적으로 분리할 때 사용합니다.

---

<div style="margin-bottom:30px"></div>

### Orientation

| Orientation | Description |
|-------------|-------------|
| \`horizontal\` | 가로 구분선 (기본) |
| \`vertical\` | 세로 구분선 |

\`\`\`tsx
import { Divider } from '@/components/Divider';

<Divider />
<Divider orientation="vertical" length={64} />
\`\`\`
        `.trim()}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"방향",table:{type:{summary:"DividerOrientation"},defaultValue:{summary:"horizontal"}}},length:{control:"text",description:"길이 (horizontal: width, vertical: height)",table:{type:{summary:"number | string"},defaultValue:{summary:"100%"}}}}},n={args:{orientation:"horizontal",length:393}},o={name:"Orientation",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(s,{label:"Horizontal",desc:"가로 구분선. 기본 너비는 100%입니다.",children:e.jsx("div",{style:{width:393},children:e.jsx(r,{})})}),e.jsx(s,{label:"Vertical",desc:"세로 구분선. height를 지정하여 사용합니다.",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,height:64},children:[e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:14,color:"var(--color-neutral-foreground-default)"},children:"항목 A"}),e.jsx(r,{orientation:"vertical",length:64}),e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:14,color:"var(--color-neutral-foreground-default)"},children:"항목 B"})]})})]})},l={name:"Usage",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(s,{label:"List Divider",desc:"리스트 항목 사이의 구분선으로 사용합니다.",children:e.jsx("div",{style:{width:320,fontFamily:"Pretendard, sans-serif",fontSize:14,color:"var(--color-neutral-foreground-default)"},children:["알림 설정","개인정보 처리방침","서비스 이용약관"].map((i,t,a)=>e.jsxs("div",{children:[e.jsx("div",{style:{padding:"12px 0"},children:i}),t<a.length-1&&e.jsx(r,{})]},i))})}),e.jsx(s,{label:"Inline Divider",desc:"인라인 요소 사이의 세로 구분선으로 사용합니다.",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,fontFamily:"Pretendard, sans-serif",fontSize:13,color:"var(--color-neutral-foreground-subtle-1)"},children:[e.jsx("span",{children:"좋아요 15"}),e.jsx(r,{orientation:"vertical",length:14}),e.jsx("span",{children:"댓글 3"}),e.jsx(r,{orientation:"vertical",length:14}),e.jsx("span",{children:"공유 2"})]})})]})};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    length: 393
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Orientation',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="Horizontal" desc="가로 구분선. 기본 너비는 100%입니다.">
        <div style={{
        width: 393
      }}>
          <Divider />
        </div>
      </Block>
      <Block label="Vertical" desc="세로 구분선. height를 지정하여 사용합니다.">
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        height: 64
      }}>
          <span style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: 14,
          color: 'var(--color-neutral-foreground-default)'
        }}>항목 A</span>
          <Divider orientation="vertical" length={64} />
          <span style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: 14,
          color: 'var(--color-neutral-foreground-default)'
        }}>항목 B</span>
        </div>
      </Block>
    </div>
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,h,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Usage',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="List Divider" desc="리스트 항목 사이의 구분선으로 사용합니다.">
        <div style={{
        width: 320,
        fontFamily: 'Pretendard, sans-serif',
        fontSize: 14,
        color: 'var(--color-neutral-foreground-default)'
      }}>
          {['알림 설정', '개인정보 처리방침', '서비스 이용약관'].map((item, i, arr) => <div key={item}>
              <div style={{
            padding: '12px 0'
          }}>{item}</div>
              {i < arr.length - 1 && <Divider />}
            </div>)}
        </div>
      </Block>
      <Block label="Inline Divider" desc="인라인 요소 사이의 세로 구분선으로 사용합니다.">
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontFamily: 'Pretendard, sans-serif',
        fontSize: 13,
        color: 'var(--color-neutral-foreground-subtle-1)'
      }}>
          <span>좋아요 15</span>
          <Divider orientation="vertical" length={14} />
          <span>댓글 3</span>
          <Divider orientation="vertical" length={14} />
          <span>공유 2</span>
        </div>
      </Block>
    </div>
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const D=["Default","Orientation","Usage"];export{n as Default,o as Orientation,l as Usage,D as __namedExportsOrder,z as default};
