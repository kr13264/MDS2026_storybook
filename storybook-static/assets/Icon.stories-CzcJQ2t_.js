import{j as e}from"./jsx-runtime-DiklIkkE.js";import{b as t}from"./ButtonGroup-DpYg3QSM.js";const g=()=>e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M10 4v12M4 10h12"})}),m=()=>e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M14.5 3.5a2.121 2.121 0 0 1 3 3L6 18H3v-3L14.5 3.5z"})}),f=()=>e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M10 3v10M6 9l4 4 4-4M3 15v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1"})}),T=()=>e.jsxs("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:[e.jsx("circle",{cx:"9",cy:"9",r:"5.5"}),e.jsx("path",{d:"M13 13l3.5 3.5"})]}),l=({children:n,gap:o=8})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:o},children:n}),r=({label:n,desc:o,children:a})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:n}),o&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:o}),a]}),L=({children:n})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:n}),H={title:"Components/Buttons/Icon",component:t,parameters:{layout:"centered",docs:{description:{component:`
단일 아이콘만 표시하는 버튼입니다.
레이블 없이 다운로드·공유·편집 등 단일 기능을 수행할 때 사용합니다.
**square**(사각)와 **round**(원형) 두 가지 형태를 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | Height | Icon |
|------|--------|------|
| \`sm\`  | 36px | 16px |
| \`md\`  | 40px | 20px |
| \`lg\`  | 44px | 20px |
| \`xl\`  | 48px | 20px |
| \`2xl\` | 52px | 20px |

### Shape

| Shape | Description |
|-------|-------------|
| \`square\` | 사각형 (기본) — 일반 레이아웃에 사용 |
| \`round\`  | 원형 — FAB, 플로팅 버튼에 사용 |

\`\`\`tsx
import { ButtonIcon } from '@/components/Buttons';

<ButtonIcon icon={<IcEdit />} variant="solid" size="md" />
<ButtonIcon icon={<IcPlus />} variant="solid" shape="round" fab />
\`\`\`
        `.trim()}}},argTypes:{variant:{control:"select",options:["plain","outlined","tonal","solid"],description:"강조 수준 스타일",table:{type:{summary:"ButtonIconVariant"},defaultValue:{summary:"solid"}}},size:{control:"select",options:["sm","md","lg","xl","2xl"],description:"높이 기준 사이즈",table:{type:{summary:"ButtonIconSize"},defaultValue:{summary:"md"}}},color:{control:"select",options:["primary","secondary","danger","neutral"],description:"색상 테마",table:{type:{summary:"ButtonIconColor"},defaultValue:{summary:"primary"}}},shape:{control:"select",options:["square","round"],description:"버튼 형태",table:{type:{summary:"ButtonIconShape"},defaultValue:{summary:"square"}}},loading:{control:"boolean",description:"로딩 스피너 표시",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성 상태",table:{defaultValue:{summary:"false"}}},fab:{control:"boolean",description:"FAB — 독립 노출 시 shadow 적용",table:{defaultValue:{summary:"false"}}},icon:{control:!1,description:"아이콘 요소 (필수)"}}},s={args:{icon:e.jsx(m,{}),variant:"solid",size:"md",color:"primary",shape:"square",loading:!1,disabled:!1,fab:!1}},i={name:"Size",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(r,{label:"Measurement",desc:"Height 기준으로 정의. 아이콘 크기는 sm=16px, md 이상=20px.",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Attribute","sm","md","lg","xl","2xl"].map(n=>e.jsx("th",{style:{padding:"8px 24px",textAlign:"center",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)",...n!=="Attribute"?{background:"var(--color-neutral-background-separated-1)"}:{}},children:n},n))})}),e.jsx("tbody",{children:[["Height","36","40","44","48","52"],["Icon size","16","20","20","20","20"]].map(n=>e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:n.map((o,a)=>e.jsx("td",{style:{padding:"8px 24px",textAlign:"center",color:a===0?"var(--color-neutral-foreground-subtle-1)":"var(--color-neutral-foreground-default)",fontWeight:a===0?600:400},children:o},a))},n[0]))})]})})}),e.jsx(r,{label:"Usage",children:e.jsx(l,{gap:12,children:["sm","md","lg","xl","2xl"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(t,{icon:e.jsx(m,{}),variant:"solid",size:n}),e.jsx(L,{children:n})]},n))})})]})},d={name:"Style",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["solid","tonal","outlined","plain"].map(n=>e.jsx(r,{label:n,children:e.jsx(l,{gap:8,children:["primary","secondary","danger","neutral"].map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(t,{icon:e.jsx(m,{}),variant:n,color:o}),e.jsx(L,{children:o})]},o))})},n))})},c={name:"Shape",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(r,{label:"square",desc:"사각형 형태. 일반 레이아웃에 사용합니다.",children:e.jsx(l,{gap:8,children:["solid","tonal","outlined","plain"].map(n=>e.jsx(t,{icon:e.jsx(m,{}),variant:n,shape:"square"},n))})}),e.jsx(r,{label:"round",desc:"원형 형태. FAB 또는 플로팅 버튼으로 사용합니다.",children:e.jsx(l,{gap:8,children:["solid","tonal","outlined","plain"].map(n=>e.jsx(t,{icon:e.jsx(m,{}),variant:n,shape:"round"},n))})})]})},p={name:"State",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(r,{label:"enabled",desc:"기본 상태.",children:e.jsx(l,{gap:8,children:["solid","tonal","outlined","plain"].map(n=>e.jsx(t,{icon:e.jsx(f,{}),variant:n},n))})}),e.jsx(r,{label:"disabled",desc:"비활성 상태. 액션이 불가능한 경우.",children:e.jsx(l,{gap:8,children:["solid","tonal","outlined","plain"].map(n=>e.jsx(t,{icon:e.jsx(f,{}),variant:n,disabled:!0},n))})}),e.jsx(r,{label:"loading",desc:"비동기 처리 중 스피너 노출.",children:e.jsx(l,{gap:8,children:["solid","tonal","outlined","plain"].map(n=>e.jsx(t,{icon:e.jsx(f,{}),variant:n,loading:!0},n))})})]})},u={name:"FAB",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(r,{label:"fab=false",desc:"일반 버튼 형태.",children:e.jsxs(l,{gap:8,children:[e.jsx(t,{icon:e.jsx(g,{}),variant:"solid",fab:!1}),e.jsx(t,{icon:e.jsx(g,{}),variant:"solid",shape:"round",fab:!1})]})}),e.jsx(r,{label:"fab=true",desc:"화면 상위에 독립적으로 노출. shadow 적용.",children:e.jsxs(l,{gap:8,children:[e.jsx(t,{icon:e.jsx(g,{}),variant:"solid",fab:!0}),e.jsx(t,{icon:e.jsx(g,{}),variant:"solid",shape:"round",fab:!0})]})})]})},x={name:"Matrix",render:()=>{const n=["solid","tonal","outlined","plain"],o=["sm","md","lg","xl","2xl"];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Style \\ Size"}),o.map(a=>e.jsx("th",{style:{padding:"8px 16px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:a},a))]})}),e.jsx("tbody",{children:n.map(a=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:a}),o.map(h=>e.jsx("td",{style:{padding:"12px 16px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(t,{icon:e.jsx(T,{}),variant:a,size:h})},h))]},a))})]})})}};var v,y,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    icon: <IcEdit />,
    variant: 'solid',
    size: 'md',
    color: 'primary',
    shape: 'square',
    loading: false,
    disabled: false,
    fab: false
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,B,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Size',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Measurement" desc="Height 기준으로 정의. 아이콘 크기는 sm=16px, md 이상=20px.">
        <div style={{
        overflowX: 'auto'
      }}>
          <table style={{
          borderCollapse: 'collapse',
          fontFamily: 'Pretendard, sans-serif',
          fontSize: 12,
          whiteSpace: 'nowrap'
        }}>
            <thead>
              <tr style={{
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                {['Attribute', 'sm', 'md', 'lg', 'xl', '2xl'].map(h => <th key={h} style={{
                padding: '8px 24px',
                textAlign: 'center',
                fontWeight: 700,
                color: 'var(--color-neutral-foreground-subtle-1)',
                ...(h !== 'Attribute' ? {
                  background: 'var(--color-neutral-background-separated-1)'
                } : {})
              }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[['Height', '36', '40', '44', '48', '52'], ['Icon size', '16', '20', '20', '20', '20']].map(row => <tr key={row[0]} style={{
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                  {row.map((cell, i) => <td key={i} style={{
                padding: '8px 24px',
                textAlign: 'center',
                color: i === 0 ? 'var(--color-neutral-foreground-subtle-1)' : 'var(--color-neutral-foreground-default)',
                fontWeight: i === 0 ? 600 : 400
              }}>
                      {cell}
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="Usage">
        <Row gap={12}>
          {(['sm', 'md', 'lg', 'xl', '2xl'] as ButtonIconSize[]).map(s => <div key={s} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ButtonIcon icon={<IcEdit />} variant="solid" size={s} />
              <Caption>{s}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(k=(B=i.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var I,S,w;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Style',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => <Block key={v} label={v}>
          <Row gap={8}>
            {(['primary', 'secondary', 'danger', 'neutral'] as ButtonIconColor[]).map(c => <div key={c} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
                <ButtonIcon icon={<IcEdit />} variant={v} color={c} />
                <Caption>{c}</Caption>
              </div>)}
          </Row>
        </Block>)}
    </div>
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,A,R;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Shape',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="square" desc="사각형 형태. 일반 레이아웃에 사용합니다.">
        <Row gap={8}>
          {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => <ButtonIcon key={v} icon={<IcEdit />} variant={v} shape="square" />)}
        </Row>
      </Block>
      <Block label="round" desc="원형 형태. FAB 또는 플로팅 버튼으로 사용합니다.">
        <Row gap={8}>
          {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => <ButtonIcon key={v} icon={<IcEdit />} variant={v} shape="round" />)}
        </Row>
      </Block>
    </div>
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,P,C;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'State',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="enabled" desc="기본 상태.">
        <Row gap={8}>
          {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => <ButtonIcon key={v} icon={<IcDownload />} variant={v} />)}
        </Row>
      </Block>
      <Block label="disabled" desc="비활성 상태. 액션이 불가능한 경우.">
        <Row gap={8}>
          {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => <ButtonIcon key={v} icon={<IcDownload />} variant={v} disabled />)}
        </Row>
      </Block>
      <Block label="loading" desc="비동기 처리 중 스피너 노출.">
        <Row gap={8}>
          {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => <ButtonIcon key={v} icon={<IcDownload />} variant={v} loading />)}
        </Row>
      </Block>
    </div>
}`,...(C=(P=p.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var W,F,V;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'FAB',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="fab=false" desc="일반 버튼 형태.">
        <Row gap={8}>
          <ButtonIcon icon={<IcPlus />} variant="solid" fab={false} />
          <ButtonIcon icon={<IcPlus />} variant="solid" shape="round" fab={false} />
        </Row>
      </Block>
      <Block label="fab=true" desc="화면 상위에 독립적으로 노출. shadow 적용.">
        <Row gap={8}>
          <ButtonIcon icon={<IcPlus />} variant="solid" fab />
          <ButtonIcon icon={<IcPlus />} variant="solid" shape="round" fab />
        </Row>
      </Block>
    </div>
}`,...(V=(F=u.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var M,q,E;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const variants: ButtonIconVariant[] = ['solid', 'tonal', 'outlined', 'plain'];
    const sizes: ButtonIconSize[] = ['sm', 'md', 'lg', 'xl', '2xl'];
    return <div style={{
      fontFamily: 'Pretendard, sans-serif',
      overflowX: 'auto',
      padding: 4
    }}>
        <table style={{
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>
              <th style={{
              padding: '8px 16px 8px 0',
              textAlign: 'left',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase'
            }}>
                Style \\ Size
              </th>
              {sizes.map(s => <th key={s} style={{
              padding: '8px 16px',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase'
            }}>
                  {s}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {variants.map(v => <tr key={v} style={{
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '12px 16px 12px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>
                  {v}
                </td>
                {sizes.map(s => <td key={s} style={{
              padding: '12px 16px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                    <ButtonIcon icon={<IcSearch />} variant={v} size={s} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(E=(q=x.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const _=["Playground","Sizes","Styles","Shapes","States","FAB","Matrix"],U=Object.freeze(Object.defineProperty({__proto__:null,FAB:u,Matrix:x,Playground:s,Shapes:c,Sizes:i,States:p,Styles:d,__namedExportsOrder:_,default:H},Symbol.toStringTag,{value:"Module"}));export{U as I,s as P};
