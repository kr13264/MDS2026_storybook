import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{H as l}from"./Block-7ho0r3YM.js";import"./index-Bc2G9s8g.js";const c=({label:t,desc:i,children:r})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:t}),i&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:i}),r]}),o=({children:t})=>e.jsx("div",{style:{width:375,border:"1px solid var(--color-neutral-stroke-divider)",borderRadius:8,overflow:"hidden"},children:t}),W={title:"Components/Header/Block",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
블록 헤더 컴포넌트입니다.
SheetsTitle은 바텀시트 상단에, BlockTitle은 일반 콘텐츠 블록 상단에 사용합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`SheetsTitle\` | 바텀시트용 — Handle + 타이틀 + 닫기 (둥근 상단) |
| \`BlockTitle\` | 블록용 — 타이틀 + 닫기 (직각) |

\`\`\`tsx
import { HeaderBlock } from '@/components/Header';

<HeaderBlock type="SheetsTitle" title="시트 타이틀" />
<HeaderBlock type="BlockTitle" title="블록 타이틀" />
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["SheetsTitle","BlockTitle"],description:"블록 타입",table:{type:{summary:"HeaderBlockType"},defaultValue:{summary:"SheetsTitle"}}},title:{control:"text",description:"타이틀 텍스트",table:{defaultValue:{summary:"타이틀"}}},trailingSlot:{control:"boolean",description:"Trailing 슬롯 표시",table:{defaultValue:{summary:"true"}}}}},a={args:{type:"SheetsTitle",title:"타이틀",trailingSlot:!0},render:t=>e.jsx(o,{children:e.jsx(l,{...t})})},s={name:"Type",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(c,{label:"SheetsTitle",desc:"바텀시트 상단에 사용합니다. Handle 바와 둥근 상단 모서리를 포함합니다.",children:e.jsx(o,{children:e.jsx(l,{type:"SheetsTitle",title:"시트 타이틀"})})}),e.jsx(c,{label:"BlockTitle",desc:"일반 콘텐츠 블록 상단에 사용합니다. 타이틀과 닫기 버튼만 표시됩니다.",children:e.jsx(o,{children:e.jsx(l,{type:"BlockTitle",title:"블록 타이틀"})})})]})},d={name:"Slots",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(c,{label:"With Trailing",desc:"닫기 버튼이 포함된 기본 상태입니다.",children:e.jsx(o,{children:e.jsx(l,{type:"SheetsTitle",title:"타이틀",trailingSlot:!0})})}),e.jsx(c,{label:"Without Trailing",desc:"닫기 버튼을 숨긴 상태입니다.",children:e.jsx(o,{children:e.jsx(l,{type:"SheetsTitle",title:"타이틀",trailingSlot:!1})})})]})},n={name:"Matrix",render:()=>{const t=["SheetsTitle","BlockTitle"],i=[{label:"Default",props:{}},{label:"No Trailing",props:{trailingSlot:!1}},{label:"Long Title",props:{title:"매우 긴 타이틀이 들어가는 경우"}}];return e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13,width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"left",fontWeight:600},children:"Variant"}),t.map(r=>e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"center",fontWeight:600},children:r},r))]})}),e.jsx("tbody",{children:i.map(({label:r,props:j})=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",color:"var(--color-neutral-foreground-subtle-1)"},children:r}),t.map(p=>e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 16px"},children:e.jsx("div",{style:{width:280,border:"1px solid var(--color-neutral-stroke-divider)",borderRadius:p==="SheetsTitle"?"28px 28px 0 0":0,overflow:"hidden"},children:e.jsx(l,{type:p,title:"타이틀",...j})})},p))]},r))})]})}};var x,u,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'SheetsTitle',
    title: '타이틀',
    trailingSlot: true
  },
  render: args => <Phone>
      <HeaderBlock {...args} />
    </Phone>
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,m;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Type',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="SheetsTitle" desc="바텀시트 상단에 사용합니다. Handle 바와 둥근 상단 모서리를 포함합니다.">
        <Phone>
          <HeaderBlock type="SheetsTitle" title="시트 타이틀" />
        </Phone>
      </Block>
      <Block label="BlockTitle" desc="일반 콘텐츠 블록 상단에 사용합니다. 타이틀과 닫기 버튼만 표시됩니다.">
        <Phone>
          <HeaderBlock type="BlockTitle" title="블록 타이틀" />
        </Phone>
      </Block>
    </div>
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,k,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Slots',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="With Trailing" desc="닫기 버튼이 포함된 기본 상태입니다.">
        <Phone>
          <HeaderBlock type="SheetsTitle" title="타이틀" trailingSlot />
        </Phone>
      </Block>
      <Block label="Without Trailing" desc="닫기 버튼을 숨긴 상태입니다.">
        <Phone>
          <HeaderBlock type="SheetsTitle" title="타이틀" trailingSlot={false} />
        </Phone>
      </Block>
    </div>
}`,...(f=(k=d.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var T,v,S;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const types: HeaderBlockType[] = ['SheetsTitle', 'BlockTitle'];
    const configs = [{
      label: 'Default',
      props: {}
    }, {
      label: 'No Trailing',
      props: {
        trailingSlot: false
      }
    }, {
      label: 'Long Title',
      props: {
        title: '매우 긴 타이틀이 들어가는 경우'
      }
    }];
    return <table style={{
      borderCollapse: 'collapse',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 13,
      width: '100%'
    }}>
        <thead>
          <tr style={{
          background: 'var(--color-neutral-background-raised-1)'
        }}>
            <th style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '8px 12px',
            textAlign: 'left',
            fontWeight: 600
          }}>Variant</th>
            {types.map(t => <th key={t} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '8px 12px',
            textAlign: 'center',
            fontWeight: 600
          }}>{t}</th>)}
          </tr>
        </thead>
        <tbody>
          {configs.map(({
          label,
          props
        }) => <tr key={label} style={{
          background: 'var(--color-neutral-background-default)'
        }}>
              <td style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '8px 12px',
            color: 'var(--color-neutral-foreground-subtle-1)'
          }}>{label}</td>
              {types.map(t => <td key={t} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '12px 16px'
          }}>
                  <div style={{
              width: 280,
              border: '1px solid var(--color-neutral-stroke-divider)',
              borderRadius: t === 'SheetsTitle' ? '28px 28px 0 0' : 0,
              overflow: 'hidden'
            }}>
                    <HeaderBlock type={t} title="타이틀" {...props} />
                  </div>
                </td>)}
            </tr>)}
        </tbody>
      </table>;
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const w=["Playground","Type","Slots","Matrix"];export{n as Matrix,a as Playground,d as Slots,s as Type,w as __namedExportsOrder,W as default};
