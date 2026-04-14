import{j as e}from"./jsx-runtime-DiklIkkE.js";import{D as r}from"./Divider-BElOpyfX.js";const l=({label:a,desc:o,children:s})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:a}),o&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:o}),s]}),y={title:"Components/Divider",component:r,parameters:{layout:"centered",docs:{description:{component:`
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
        `.trim()}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"방향",table:{type:{summary:"DividerOrientation"},defaultValue:{summary:"horizontal"}}},length:{control:"text",description:"길이 (horizontal: width, vertical: height)",table:{type:{summary:"number | string"},defaultValue:{summary:"100%"}}}}},t={args:{orientation:"horizontal",length:393}},i={name:"Orientation",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(l,{label:"Horizontal",desc:"가로 구분선. 기본 너비는 100%입니다.",children:e.jsx("div",{style:{width:393},children:e.jsx(r,{})})}),e.jsx(l,{label:"Vertical",desc:"세로 구분선. height를 지정하여 사용합니다.",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,height:64},children:[e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:14,color:"var(--color-neutral-foreground-default)"},children:"항목 A"}),e.jsx(r,{orientation:"vertical",length:64}),e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:14,color:"var(--color-neutral-foreground-default)"},children:"항목 B"})]})})]})},n={name:"Usage",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(l,{label:"List Divider",desc:"리스트 항목 사이의 구분선으로 사용합니다.",children:e.jsx("div",{style:{width:320,fontFamily:"Pretendard, sans-serif",fontSize:14,color:"var(--color-neutral-foreground-default)"},children:["알림 설정","개인정보 처리방침","서비스 이용약관"].map((a,o,s)=>e.jsxs("div",{children:[e.jsx("div",{style:{padding:"12px 0"},children:a}),o<s.length-1&&e.jsx(r,{})]},a))})}),e.jsx(l,{label:"Inline Divider",desc:"인라인 요소 사이의 세로 구분선으로 사용합니다.",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,fontFamily:"Pretendard, sans-serif",fontSize:13,color:"var(--color-neutral-foreground-subtle-1)"},children:[e.jsx("span",{children:"좋아요 15"}),e.jsx(r,{orientation:"vertical",length:14}),e.jsx("span",{children:"댓글 3"}),e.jsx(r,{orientation:"vertical",length:14}),e.jsx("span",{children:"공유 2"})]})})]})};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    length: 393
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,f,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,u,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const x=["Default","Orientation","Usage"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Orientation:i,Usage:n,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{b as D,t as a};
