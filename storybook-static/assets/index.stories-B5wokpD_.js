import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as o}from"./index-DRjF_FHU.js";import{T as r}from"./TabList-2IMkG-Bq.js";const d=({label:t,desc:a,children:l})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:t}),a&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:a}),l]}),x=({children:t})=>e.jsx("div",{style:{background:"#1c1c1c",borderRadius:12,padding:"16px 20px"},children:t}),n=[{label:"전체",value:"all"},{label:"추천",value:"recommend"},{label:"인기",value:"popular"},{label:"최신",value:"recent"}],N=[{label:"전체",value:"all"},{label:"추천",value:"recommend"},{label:"비활성",value:"disabled",disabled:!0},{label:"최신",value:"recent"}],R={title:"Components/Tabs",component:r,parameters:{layout:"padded",docs:{description:{component:`
탭 전환 네비게이션 컴포넌트.
**UnderLine**과 **Capsule** 두 가지 타입, **Scrollable**과 **Fixed** 두 가지 레이아웃을 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`underline\` | 하단 라인으로 선택 상태를 표시 |
| \`capsule\` | 캡슐(pill) 배경으로 선택 상태를 표시 |

### Layout

| Layout | Description |
|--------|-------------|
| \`scrollable\` | 콘텐츠에 맞는 가변 너비, 넘치면 스크롤 |
| \`fixed\` | 부모 너비를 균등 분할 (underline만 지원) |

### Tone

| Tone | Description |
|------|-------------|
| \`natural\` | 밝은 배경용 (기본) |
| \`invert\` | 어두운 배경용 |

### State

| State | Description |
|-------|-------------|
| \`default\` | 미선택 |
| \`selected\` | 선택됨 (Bold) |
| \`disabled\` | 비활성 |

\`\`\`tsx
import { TabList } from '@/components/Tabs';

<TabList
  type="underline"
  layout="scrollable"
  tone="natural"
  items={[{ label: '전체', value: 'all' }, { label: '추천', value: 'rec' }]}
  value="all"
  onChange={setValue}
/>
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["underline","capsule"]},layout:{control:"select",options:["scrollable","fixed"]},tone:{control:"select",options:["natural","invert"]}}},i={args:{type:"underline",layout:"scrollable",tone:"natural",items:n,value:"all"},render:function(a){const[l,s]=o.useState(a.value??"all");return e.jsx(r,{...a,value:l,onChange:s})}},c={name:"Type",render:()=>{const[t,a]=o.useState("all"),[l,s]=o.useState("all");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(d,{label:"UnderLine",desc:"하단 라인으로 선택 상태를 표시합니다.",children:e.jsx(r,{type:"underline",items:n,value:t,onChange:a})}),e.jsx(d,{label:"Capsule",desc:"캡슐 배경으로 선택 상태를 표시합니다.",children:e.jsx(r,{type:"capsule",items:n,value:l,onChange:s})})]})}},u={name:"Layout",render:()=>{const[t,a]=o.useState("all"),[l,s]=o.useState("all");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(d,{label:"Scrollable",desc:"콘텐츠에 맞는 가변 너비. 넘치면 스크롤됩니다.",children:e.jsx(r,{type:"underline",layout:"scrollable",items:n,value:t,onChange:a})}),e.jsx(d,{label:"Fixed",desc:"부모 너비를 균등 분할합니다.",children:e.jsx("div",{style:{width:375},children:e.jsx(r,{type:"underline",layout:"fixed",items:n,value:l,onChange:s})})})]})}},p={name:"Tone",render:()=>{const[t,a]=o.useState("all"),[l,s]=o.useState("all"),[_,z]=o.useState("all"),[M,A]=o.useState("all");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(d,{label:"Natural — UnderLine",desc:"밝은 배경용.",children:e.jsx(r,{type:"underline",tone:"natural",items:n,value:t,onChange:a})}),e.jsx(d,{label:"Invert — UnderLine",desc:"어두운 배경용.",children:e.jsx(x,{children:e.jsx(r,{type:"underline",tone:"invert",items:n,value:l,onChange:s})})}),e.jsx(d,{label:"Natural — Capsule",desc:"밝은 배경용.",children:e.jsx(r,{type:"capsule",tone:"natural",items:n,value:_,onChange:z})}),e.jsx(d,{label:"Invert — Capsule",desc:"어두운 배경용.",children:e.jsx(x,{children:e.jsx(r,{type:"capsule",tone:"invert",items:n,value:M,onChange:A})})})]})}},m={name:"Contents",render:()=>{const[t,a]=o.useState("all");return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:e.jsx(d,{label:"Disabled Item",desc:"개별 탭 아이템을 비활성화할 수 있습니다.",children:e.jsx(r,{type:"underline",items:N,value:t,onChange:a})})})}},v={name:"Matrix",render:()=>{const t=["underline","capsule"],a=["natural","invert"];return e.jsx("div",{style:{padding:4},children:e.jsx(d,{label:"Type × Tone",desc:"타입과 톤 조합 전체 비교.",children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"left",color:"var(--color-neutral-foreground-subtle-1)"},children:"Type"}),a.map(l=>e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:l},l))]})}),e.jsx("tbody",{children:t.map(l=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",color:"var(--color-neutral-foreground-default)"},children:l}),a.map(s=>e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:s==="invert"?e.jsx(x,{children:e.jsx(r,{type:l,tone:s,items:n,value:"all"})}):e.jsx(r,{type:l,tone:s,items:n,value:"all"})},s))]},l))})]})})})}};var y,b,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'underline',
    layout: 'scrollable',
    tone: 'natural',
    items: sampleItems,
    value: 'all'
  },
  render: function Render(args) {
    const [val, setVal] = useState(args.value ?? 'all');
    return <TabList {...args} value={val} onChange={setVal} />;
  }
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,f,j;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Type',
  render: () => {
    const [val1, setVal1] = useState('all');
    const [val2, setVal2] = useState('all');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 4
    }}>
        <Block label="UnderLine" desc="하단 라인으로 선택 상태를 표시합니다.">
          <TabList type="underline" items={sampleItems} value={val1} onChange={setVal1} />
        </Block>
        <Block label="Capsule" desc="캡슐 배경으로 선택 상태를 표시합니다.">
          <TabList type="capsule" items={sampleItems} value={val2} onChange={setVal2} />
        </Block>
      </div>;
  }
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var k,T,S;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Layout',
  render: () => {
    const [val1, setVal1] = useState('all');
    const [val2, setVal2] = useState('all');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 4
    }}>
        <Block label="Scrollable" desc="콘텐츠에 맞는 가변 너비. 넘치면 스크롤됩니다.">
          <TabList type="underline" layout="scrollable" items={sampleItems} value={val1} onChange={setVal1} />
        </Block>
        <Block label="Fixed" desc="부모 너비를 균등 분할합니다.">
          <div style={{
          width: 375
        }}>
            <TabList type="underline" layout="fixed" items={sampleItems} value={val2} onChange={setVal2} />
          </div>
        </Block>
      </div>;
  }
}`,...(S=(T=u.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var B,C,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Tone',
  render: () => {
    const [val1, setVal1] = useState('all');
    const [val2, setVal2] = useState('all');
    const [val3, setVal3] = useState('all');
    const [val4, setVal4] = useState('all');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 4
    }}>
        <Block label="Natural — UnderLine" desc="밝은 배경용.">
          <TabList type="underline" tone="natural" items={sampleItems} value={val1} onChange={setVal1} />
        </Block>
        <Block label="Invert — UnderLine" desc="어두운 배경용.">
          <DarkBg>
            <TabList type="underline" tone="invert" items={sampleItems} value={val2} onChange={setVal2} />
          </DarkBg>
        </Block>
        <Block label="Natural — Capsule" desc="밝은 배경용.">
          <TabList type="capsule" tone="natural" items={sampleItems} value={val3} onChange={setVal3} />
        </Block>
        <Block label="Invert — Capsule" desc="어두운 배경용.">
          <DarkBg>
            <TabList type="capsule" tone="invert" items={sampleItems} value={val4} onChange={setVal4} />
          </DarkBg>
        </Block>
      </div>;
  }
}`,...(V=(C=p.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var L,D,I;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Contents',
  render: () => {
    const [val, setVal] = useState('all');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 4
    }}>
        <Block label="Disabled Item" desc="개별 탭 아이템을 비활성화할 수 있습니다.">
          <TabList type="underline" items={sampleWithDisabled} value={val} onChange={setVal} />
        </Block>
      </div>;
  }
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var P,F,U;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const types: TabType[] = ['underline', 'capsule'];
    const tones: TabTone[] = ['natural', 'invert'];
    return <div style={{
      padding: 4
    }}>
        <Block label="Type × Tone" desc="타입과 톤 조합 전체 비교.">
          <table style={{
          borderCollapse: 'collapse',
          fontFamily: 'Pretendard, sans-serif',
          fontSize: 13
        }}>
            <thead>
              <tr style={{
              background: 'var(--color-neutral-background-raised-1)'
            }}>
                <th style={{
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-neutral-stroke-divider)',
                textAlign: 'left',
                color: 'var(--color-neutral-foreground-subtle-1)'
              }}>Type</th>
                {tones.map(t => <th key={t} style={{
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-neutral-stroke-divider)',
                textAlign: 'center',
                color: 'var(--color-neutral-foreground-subtle-1)'
              }}>{t}</th>)}
              </tr>
            </thead>
            <tbody>
              {types.map(type => <tr key={type} style={{
              background: 'var(--color-neutral-background-default)'
            }}>
                  <td style={{
                padding: '12px 16px',
                borderBottom: '1px solid var(--color-neutral-stroke-divider)',
                color: 'var(--color-neutral-foreground-default)'
              }}>{type}</td>
                  {tones.map(tone => <td key={tone} style={{
                padding: '12px 16px',
                borderBottom: '1px solid var(--color-neutral-stroke-divider)'
              }}>
                      {tone === 'invert' ? <DarkBg>
                          <TabList type={type} tone={tone} items={sampleItems} value="all" />
                        </DarkBg> : <TabList type={type} tone={tone} items={sampleItems} value="all" />}
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </Block>
      </div>;
  }
}`,...(U=(F=v.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};const E=["Playground","Type","Layout","Tone","Contents","Matrix"],H=Object.freeze(Object.defineProperty({__proto__:null,Contents:m,Layout:u,Matrix:v,Playground:i,Tone:p,Type:c,__namedExportsOrder:E,default:R},Symbol.toStringTag,{value:"Module"}));export{i as P,H as T};
