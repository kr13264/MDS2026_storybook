import{j as e}from"./jsx-runtime-DiklIkkE.js";import{S as t}from"./Selection-DQ_vNtut.js";const c=({children:r,gap:o=24})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:o},children:r}),d=({label:r,desc:o,children:b})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:r}),o&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:o}),b]}),f={title:"Components/Selection",component:t,parameters:{layout:"centered",docs:{description:{component:`
선택 컨트롤 컴포넌트. Check / Add / Radio 3가지 타입과 Circle / Square 형태를 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description | Usage |
|------|-------------|-------|
| \`check\` | 체크마크 선택 | 다중 선택 항목에 사용 |
| \`add\` | + 아이콘 선택 | 추가 동작이 포함된 선택에 사용 |
| \`radio\` | 라디오 (dot) | 단일 선택 항목에 사용 (circle만 지원) |

### Shape

| Shape | Description |
|-------|-------------|
| \`circle\` | 원형 (20px) |
| \`square\` | 사각형 (20px, 6px radius) |

### State

| Prop | Description |
|------|-------------|
| \`selected\` | 선택 상태 (true/false) |
| \`enabled\` | 활성 상태 (false = disabled 외관) |

\`\`\`tsx
import { Selection } from '@/components/Selection';

<Selection type="check" shape="circle" selected />
<Selection type="add" shape="square" />
<Selection type="radio" selected />
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["check","add","radio"]},shape:{control:"select",options:["circle","square"]},selected:{control:"boolean"},enabled:{control:"boolean"}}},l={args:{type:"check",shape:"circle",selected:!0,enabled:!0}},a={name:"Type",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(d,{label:"Check",desc:"체크마크 선택 컨트롤.",children:e.jsxs(c,{gap:16,children:[e.jsx(t,{type:"check",shape:"circle",selected:!0}),e.jsx(t,{type:"check",shape:"circle"}),e.jsx(t,{type:"check",shape:"circle",enabled:!1})]})}),e.jsx(d,{label:"Add",desc:"+ 아이콘 선택 컨트롤.",children:e.jsxs(c,{gap:16,children:[e.jsx(t,{type:"add",shape:"circle",selected:!0}),e.jsx(t,{type:"add",shape:"circle"}),e.jsx(t,{type:"add",shape:"circle",enabled:!1})]})}),e.jsx(d,{label:"Radio",desc:"라디오 선택 컨트롤 (circle만 지원).",children:e.jsxs(c,{gap:16,children:[e.jsx(t,{type:"radio",selected:!0}),e.jsx(t,{type:"radio"}),e.jsx(t,{type:"radio",enabled:!1})]})})]})},n={name:"Matrix",render:()=>e.jsx("div",{style:{padding:4},children:e.jsx(d,{label:"All Combinations",desc:"Type × Shape × State 전체 조합.",children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:["Type","Shape","Selected","Unselected","Disabled"].map(r=>e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:r},r))})}),e.jsx("tbody",{children:["check","add","radio"].map(r=>(r==="radio"?["circle"]:["circle","square"]).map(o=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",color:"var(--color-neutral-foreground-default)"},children:r}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",color:"var(--color-neutral-foreground-default)",textAlign:"center"},children:o}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center"},children:e.jsx(t,{type:r,shape:o,selected:!0})}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center"},children:e.jsx(t,{type:r,shape:o})}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center"},children:e.jsx(t,{type:r,shape:o,enabled:!1})})]},`${r}-${o}`)))})]})})})};var s,i,p;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'check',
    shape: 'circle',
    selected: true,
    enabled: true
  }
}`,...(p=(i=l.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var x,u,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Type',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="Check" desc="체크마크 선택 컨트롤.">
        <Row gap={16}>
          <Selection type="check" shape="circle" selected />
          <Selection type="check" shape="circle" />
          <Selection type="check" shape="circle" enabled={false} />
        </Row>
      </Block>
      <Block label="Add" desc="+ 아이콘 선택 컨트롤.">
        <Row gap={16}>
          <Selection type="add" shape="circle" selected />
          <Selection type="add" shape="circle" />
          <Selection type="add" shape="circle" enabled={false} />
        </Row>
      </Block>
      <Block label="Radio" desc="라디오 선택 컨트롤 (circle만 지원).">
        <Row gap={16}>
          <Selection type="radio" selected />
          <Selection type="radio" />
          <Selection type="radio" enabled={false} />
        </Row>
      </Block>
    </div>
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var h,g,m;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => <div style={{
    padding: 4
  }}>
      <Block label="All Combinations" desc="Type × Shape × State 전체 조합.">
        <table style={{
        borderCollapse: 'collapse',
        fontFamily: 'Pretendard, sans-serif',
        fontSize: 13
      }}>
          <thead>
            <tr style={{
            background: 'var(--color-neutral-background-raised-1)'
          }}>
              {['Type', 'Shape', 'Selected', 'Unselected', 'Disabled'].map(h => <th key={h} style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center',
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {(['check', 'add', 'radio'] as const).map(t => (t === 'radio' ? ['circle'] as const : ['circle', 'square'] as const).map(s => <tr key={\`\${t}-\${s}\`} style={{
            background: 'var(--color-neutral-background-default)'
          }}>
                  <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              color: 'var(--color-neutral-foreground-default)'
            }}>{t}</td>
                  <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              color: 'var(--color-neutral-foreground-default)',
              textAlign: 'center'
            }}>{s}</td>
                  <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center'
            }}>
                    <Selection type={t} shape={s} selected />
                  </td>
                  <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center'
            }}>
                    <Selection type={t} shape={s} />
                  </td>
                  <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center'
            }}>
                    <Selection type={t} shape={s} enabled={false} />
                  </td>
                </tr>))}
          </tbody>
        </table>
      </Block>
    </div>
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const k=["Playground","Type","Matrix"],j=Object.freeze(Object.defineProperty({__proto__:null,Matrix:n,Playground:l,Type:a,__namedExportsOrder:k,default:f},Symbol.toStringTag,{value:"Module"}));export{l as P,j as S};
