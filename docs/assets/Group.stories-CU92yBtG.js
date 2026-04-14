import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a as r}from"./ButtonGroup-DpYg3QSM.js";const m=({children:l,gap:o=16})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:o},children:l}),t=({label:l,desc:o,children:a})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:l}),o&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:o}),a]}),F=({children:l})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:l}),T={title:"Components/Buttons/Group",component:r,parameters:{layout:"centered",docs:{description:{component:`
관련된 복수의 액션을 함께 제시하는 버튼 그룹입니다.
취소(outlined/neutral)와 확인(solid/primary) 패턴으로 구성됩니다.
다이얼로그·바텀시트·폼 제출 등 명시적인 확인이 필요한 영역에 사용합니다.

---

<div style="margin-bottom:30px"></div>

### Shape

| Shape | Description |
|-------|-------------|
| \`square\` | 사각형 — 일반 레이아웃 (기본) |
| \`round\`  | 원형 — 소프트한 느낌이 필요한 경우 |

### Size

| Size | Height | Description |
|------|--------|-------------|
| \`sm\` | 44px | 좁은 영역 내 보조 확인 |
| \`md\` | 48px | 기본 — 일반 폼·모달 |
| \`lg\` | 52px | 강조된 확인이 필요한 경우 |

\`\`\`tsx
import { ButtonGroup } from '@/components/Buttons';

<ButtonGroup
  cancelLabel="취소"
  confirmLabel="저장"
  onCancel={handleCancel}
  onConfirm={handleConfirm}
  shape="square"
  size="md"
/>
\`\`\`
        `.trim()}}},argTypes:{shape:{control:"select",options:["square","round"],description:"버튼 형태",table:{type:{summary:"ButtonGroupShape"},defaultValue:{summary:"square"}}},size:{control:"select",options:["sm","md","lg"],description:"높이 기준 사이즈",table:{type:{summary:"ButtonGroupSize"},defaultValue:{summary:"md"}}},cancelLabel:{control:"text",description:"취소 버튼 레이블",table:{defaultValue:{summary:"취소"}}},confirmLabel:{control:"text",description:"확인 버튼 레이블",table:{defaultValue:{summary:"확인"}}},fullWidth:{control:"boolean",description:"전체 너비",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"전체 비활성",table:{defaultValue:{summary:"false"}}},onCancel:{control:!1},onConfirm:{control:!1}}},s={args:{cancelLabel:"취소",confirmLabel:"확인",shape:"square",size:"md",fullWidth:!1,disabled:!1}},n={name:"Shape",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(t,{label:"square",desc:"사각형 형태. 일반 폼·모달·다이얼로그에 사용합니다.",children:e.jsx(m,{children:e.jsx(r,{shape:"square",cancelLabel:"취소",confirmLabel:"확인"})})}),e.jsx(t,{label:"round",desc:"원형 형태. 바텀시트 등 소프트한 레이아웃에 사용합니다.",children:e.jsx(m,{children:e.jsx(r,{shape:"round",cancelLabel:"취소",confirmLabel:"확인"})})})]})},i={name:"Size",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(t,{label:"Measurement",desc:"Height 기준으로 정의합니다.",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Attribute","sm","md","lg"].map(l=>e.jsx("th",{style:{padding:"8px 32px",textAlign:"center",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)",...l!=="Attribute"?{background:"var(--color-neutral-background-separated-1)"}:{}},children:l},l))})}),e.jsx("tbody",{children:[["Height","44","48","52"],["Text size","15","16","16"],["Padding H","16","16","20"],["Radius (square)","12","12","12"]].map(l=>e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:l.map((o,a)=>e.jsx("td",{style:{padding:"8px 32px",textAlign:"center",color:a===0?"var(--color-neutral-foreground-subtle-1)":"var(--color-neutral-foreground-default)",fontWeight:a===0?600:400},children:o},a))},l[0]))})]})})}),e.jsx(t,{label:"Usage",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["sm","md","lg"].map(l=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(r,{size:l,cancelLabel:"취소",confirmLabel:"확인"}),e.jsx(F,{children:l})]},l))})})]})},d={name:"State",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(t,{label:"enabled",desc:"기본 상태.",children:e.jsxs(m,{children:[e.jsx(r,{cancelLabel:"취소",confirmLabel:"확인"}),e.jsx(r,{shape:"round",cancelLabel:"취소",confirmLabel:"확인"})]})}),e.jsx(t,{label:"disabled",desc:"전체 비활성 상태.",children:e.jsxs(m,{children:[e.jsx(r,{cancelLabel:"취소",confirmLabel:"확인",disabled:!0}),e.jsx(r,{shape:"round",cancelLabel:"취소",confirmLabel:"확인",disabled:!0})]})})]})},c={name:"Full Width",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,width:360},children:e.jsx(t,{label:"fullWidth",desc:"바텀시트·모달 하단 등 전체 너비가 필요한 경우.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[e.jsx(r,{fullWidth:!0,cancelLabel:"취소",confirmLabel:"저장",size:"lg"}),e.jsx(r,{fullWidth:!0,shape:"round",cancelLabel:"취소",confirmLabel:"저장",size:"lg"})]})})})},p={name:"Labels",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:e.jsx(t,{label:"패턴 예시",desc:"콘텍스트에 맞는 레이블을 사용합니다.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{cancelLabel:"취소",confirmLabel:"확인"}),e.jsx(r,{cancelLabel:"나중에",confirmLabel:"시작하기"}),e.jsx(r,{cancelLabel:"닫기",confirmLabel:"저장하기"}),e.jsx(r,{cancelLabel:"아니오",confirmLabel:"예, 삭제합니다"})]})})})},u={name:"Matrix",render:()=>{const l=["square","round"],o=["sm","md","lg"];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"shape \\ size"}),o.map(a=>e.jsx("th",{style:{padding:"8px 24px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:a},a))]})}),e.jsx("tbody",{children:l.map(a=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"16px 16px 16px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:a}),o.map(f=>e.jsx("td",{style:{padding:"16px 24px",verticalAlign:"middle"},children:e.jsx(r,{shape:a,size:f,cancelLabel:"취소",confirmLabel:"확인"})},f))]},a))})]})})}};var x,b,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    cancelLabel: '취소',
    confirmLabel: '확인',
    shape: 'square',
    size: 'md',
    fullWidth: false,
    disabled: false
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,y,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Shape',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="square" desc="사각형 형태. 일반 폼·모달·다이얼로그에 사용합니다.">
        <Row>
          <ButtonGroup shape="square" cancelLabel="취소" confirmLabel="확인" />
        </Row>
      </Block>
      <Block label="round" desc="원형 형태. 바텀시트 등 소프트한 레이아웃에 사용합니다.">
        <Row>
          <ButtonGroup shape="round" cancelLabel="취소" confirmLabel="확인" />
        </Row>
      </Block>
    </div>
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var L,j,S;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Size',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Measurement" desc="Height 기준으로 정의합니다.">
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
                {['Attribute', 'sm', 'md', 'lg'].map(h => <th key={h} style={{
                padding: '8px 32px',
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
              {[['Height', '44', '48', '52'], ['Text size', '15', '16', '16'], ['Padding H', '16', '16', '20'], ['Radius (square)', '12', '12', '12']].map(row => <tr key={row[0]} style={{
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                  {row.map((cell, i) => <td key={i} style={{
                padding: '8px 32px',
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
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          {(['sm', 'md', 'lg'] as ButtonGroupSize[]).map(s => <div key={s} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
              <ButtonGroup size={s} cancelLabel="취소" confirmLabel="확인" />
              <Caption>{s}</Caption>
            </div>)}
        </div>
      </Block>
    </div>
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,z,k;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'State',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="enabled" desc="기본 상태.">
        <Row>
          <ButtonGroup cancelLabel="취소" confirmLabel="확인" />
          <ButtonGroup shape="round" cancelLabel="취소" confirmLabel="확인" />
        </Row>
      </Block>
      <Block label="disabled" desc="전체 비활성 상태.">
        <Row>
          <ButtonGroup cancelLabel="취소" confirmLabel="확인" disabled />
          <ButtonGroup shape="round" cancelLabel="취소" confirmLabel="확인" disabled />
        </Row>
      </Block>
    </div>
}`,...(k=(z=d.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var G,W,w;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Full Width',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 360
  }}>
      <Block label="fullWidth" desc="바텀시트·모달 하단 등 전체 너비가 필요한 경우.">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}>
          <ButtonGroup fullWidth cancelLabel="취소" confirmLabel="저장" size="lg" />
          <ButtonGroup fullWidth shape="round" cancelLabel="취소" confirmLabel="저장" size="lg" />
        </div>
      </Block>
    </div>
}`,...(w=(W=c.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var D,A,q;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Labels',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Block label="패턴 예시" desc="콘텍스트에 맞는 레이블을 사용합니다.">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <ButtonGroup cancelLabel="취소" confirmLabel="확인" />
          <ButtonGroup cancelLabel="나중에" confirmLabel="시작하기" />
          <ButtonGroup cancelLabel="닫기" confirmLabel="저장하기" />
          <ButtonGroup cancelLabel="아니오" confirmLabel="예, 삭제합니다" />
        </div>
      </Block>
    </div>
}`,...(q=(A=p.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var C,P,R;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const shapes: ButtonGroupShape[] = ['square', 'round'];
    const sizes: ButtonGroupSize[] = ['sm', 'md', 'lg'];
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
                shape \\ size
              </th>
              {sizes.map(s => <th key={s} style={{
              padding: '8px 24px',
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
            {shapes.map(sh => <tr key={sh} style={{
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '16px 16px 16px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>
                  {sh}
                </td>
                {sizes.map(s => <td key={s} style={{
              padding: '16px 24px',
              verticalAlign: 'middle'
            }}>
                    <ButtonGroup shape={sh} size={s} cancelLabel="취소" confirmLabel="확인" />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const H=["Playground","Shapes","Sizes","States","FullWidths","Labels","Matrix"],_=Object.freeze(Object.defineProperty({__proto__:null,FullWidths:c,Labels:p,Matrix:u,Playground:s,Shapes:n,Sizes:i,States:d,__namedExportsOrder:H,default:T},Symbol.toStringTag,{value:"Module"}));export{_ as G,s as P};
