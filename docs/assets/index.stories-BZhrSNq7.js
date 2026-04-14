import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as p}from"./index-DRjF_FHU.js";import{S as t,a}from"./SwitchTab-BKDI4xgN.js";const s=({children:l,gap:r=24})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:r},children:l}),u=({label:l,desc:r,children:o})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:l}),r&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:r}),o]}),A={title:"Components/Controls",component:t,parameters:{layout:"centered",docs:{description:{component:`
스위치 컨트롤 컴포넌트. **Toggle**과 **Tab** 두 가지 서브 컴포넌트로 구성됩니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description | Usage |
|------|-------------|-------|
| \`Toggle\` | ON/OFF 토글 스위치 | 단일 설정의 활성/비활성 전환에 사용 |
| \`Tab\` | 탭형 스위치 (2개 선택지) | 동일 위계의 두 가지 옵션 중 하나를 선택할 때 사용 |

### Toggle — Size

| Size | Dimension | Label |
|------|-----------|-------|
| \`lg\` | 52 × 30 | ON/OFF 라벨 지원 |
| \`md\` | 40 × 24 | 라벨 미지원 |
| \`sm\` | 32 × 18 | 라벨 미지원 |

### Tab — Style

| Style | Description |
|-------|-------------|
| \`square\` | 사각형 모서리 (6px radius) |
| \`round\` | 완전 라운드 (pill) |

\`\`\`tsx
import { SwitchToggle, SwitchTab } from '@/components/Switch';

<SwitchToggle size="lg" selected={true} label onChange={setSelected} />
<SwitchTab
  style="square"
  options={[{ value: 'a', label: '옵션A' }, { value: 'b', label: '옵션B' }]}
  value="a"
  onChange={setValue}
/>
\`\`\`
        `.trim()}}}},n={args:{size:"lg",selected:!0,label:!1,disabled:!1}},d={name:"Size",render:()=>{const l=({size:r,label:o})=>{const[g,T]=p.useState(!0),[B,F]=p.useState(!1);return e.jsxs(s,{gap:16,children:[o&&e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-3)",width:24},children:o}),e.jsx(t,{size:r,selected:g,onChange:T}),e.jsx(t,{size:r,selected:B,onChange:F})]})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:e.jsx(u,{label:"Toggle — Size",desc:"3가지 사이즈별 selected / unselected 비교.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(l,{size:"lg",label:"lg"}),e.jsx(l,{size:"md",label:"md"}),e.jsx(l,{size:"sm",label:"sm"})]})})})}},i={name:"Contents",render:()=>{const[l,r]=p.useState(!0),[o,g]=p.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(u,{label:"Toggle — Label",desc:"lg 사이즈에서 ON/OFF 라벨을 표시할 수 있습니다.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs(s,{gap:16,children:[e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-3)",width:80},children:"label: true"}),e.jsx(t,{size:"lg",selected:l,label:!0,onChange:r})]}),e.jsxs(s,{gap:16,children:[e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-3)",width:80},children:"label: false"}),e.jsx(t,{size:"lg",selected:o,onChange:g})]})]})}),e.jsx(u,{label:"Tab — Style",desc:"square와 round 두 가지 스타일을 지원합니다.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs(s,{gap:16,children:[e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-3)",width:50},children:"square"}),e.jsx(a,{style:"square",options:[{value:"l",label:"레이블"},{value:"r",label:"레이블"}],value:"l"}),e.jsx(a,{style:"square",options:[{value:"l",label:"레이블"},{value:"r",label:"레이블"}],value:"r"})]}),e.jsxs(s,{gap:16,children:[e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-3)",width:50},children:"round"}),e.jsx(a,{style:"round",options:[{value:"l",label:"레이블"},{value:"r",label:"레이블"}],value:"l"}),e.jsx(a,{style:"round",options:[{value:"l",label:"레이블"},{value:"r",label:"레이블"}],value:"r"})]})]})})]})}},c={name:"Matrix",render:()=>e.jsxs("div",{style:{padding:4},children:[e.jsx(u,{label:"Toggle — All Sizes × States",desc:"사이즈별 selected / unselected 전체 조합.",children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"left",color:"var(--color-neutral-foreground-subtle-1)"},children:"Size"}),e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:"Selected"}),e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:"Unselected"})]})}),e.jsx("tbody",{children:["lg","md","sm"].map(l=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",color:"var(--color-neutral-foreground-default)"},children:l}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center"},children:e.jsx(t,{size:l,selected:!0})}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center"},children:e.jsx(t,{size:l,selected:!1})})]},l))})]})}),e.jsx(u,{label:"Tab — Style × Selection",desc:"스타일별 좌/우 선택 조합.",children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"left",color:"var(--color-neutral-foreground-subtle-1)"},children:"Style"}),e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:"Left"}),e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:"Right"})]})}),e.jsx("tbody",{children:["square","round"].map(l=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",color:"var(--color-neutral-foreground-default)"},children:l}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center"},children:e.jsx(a,{style:l,options:[{value:"l",label:"레이블"},{value:"r",label:"레이블"}],value:"l"})}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center"},children:e.jsx(a,{style:l,options:[{value:"l",label:"레이블"},{value:"r",label:"레이블"}],value:"r"})})]},l))})]})})]})};var x,b,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    selected: true,
    label: false,
    disabled: false
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,y,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Size',
  render: () => {
    const Toggle = ({
      size,
      label: lbl
    }: {
      size: 'lg' | 'md' | 'sm';
      label?: string;
    }) => {
      const [on, setOn] = useState(true);
      const [off, setOff] = useState(false);
      return <Row gap={16}>
          {lbl && <span style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: 12,
          color: 'var(--color-neutral-foreground-subtle-3)',
          width: 24
        }}>{lbl}</span>}
          <SwitchToggle size={size} selected={on} onChange={setOn} />
          <SwitchToggle size={size} selected={off} onChange={setOff} />
        </Row>;
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 4
    }}>
        <Block label="Toggle — Size" desc="3가지 사이즈별 selected / unselected 비교.">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <Toggle size="lg" label="lg" />
            <Toggle size="md" label="md" />
            <Toggle size="sm" label="sm" />
          </div>
        </Block>
      </div>;
  }
}`,...(h=(y=d.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var m,S,j;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Contents',
  render: () => {
    const [withLabel, setWithLabel] = useState(true);
    const [withoutLabel, setWithoutLabel] = useState(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 4
    }}>
        <Block label="Toggle — Label" desc="lg 사이즈에서 ON/OFF 라벨을 표시할 수 있습니다.">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <Row gap={16}>
              <span style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: 12,
              color: 'var(--color-neutral-foreground-subtle-3)',
              width: 80
            }}>label: true</span>
              <SwitchToggle size="lg" selected={withLabel} label onChange={setWithLabel} />
            </Row>
            <Row gap={16}>
              <span style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: 12,
              color: 'var(--color-neutral-foreground-subtle-3)',
              width: 80
            }}>label: false</span>
              <SwitchToggle size="lg" selected={withoutLabel} onChange={setWithoutLabel} />
            </Row>
          </div>
        </Block>

        <Block label="Tab — Style" desc="square와 round 두 가지 스타일을 지원합니다.">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <Row gap={16}>
              <span style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: 12,
              color: 'var(--color-neutral-foreground-subtle-3)',
              width: 50
            }}>square</span>
              <SwitchTab style="square" options={[{
              value: 'l',
              label: '레이블'
            }, {
              value: 'r',
              label: '레이블'
            }]} value="l" />
              <SwitchTab style="square" options={[{
              value: 'l',
              label: '레이블'
            }, {
              value: 'r',
              label: '레이블'
            }]} value="r" />
            </Row>
            <Row gap={16}>
              <span style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: 12,
              color: 'var(--color-neutral-foreground-subtle-3)',
              width: 50
            }}>round</span>
              <SwitchTab style="round" options={[{
              value: 'l',
              label: '레이블'
            }, {
              value: 'r',
              label: '레이블'
            }]} value="l" />
              <SwitchTab style="round" options={[{
              value: 'l',
              label: '레이블'
            }, {
              value: 'r',
              label: '레이블'
            }]} value="r" />
            </Row>
          </div>
        </Block>
      </div>;
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,z,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => <div style={{
    padding: 4
  }}>
      <Block label="Toggle — All Sizes × States" desc="사이즈별 selected / unselected 전체 조합.">
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
            }}>Size</th>
              <th style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center',
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>Selected</th>
              <th style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center',
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>Unselected</th>
            </tr>
          </thead>
          <tbody>
            {(['lg', 'md', 'sm'] as const).map(s => <tr key={s} style={{
            background: 'var(--color-neutral-background-default)'
          }}>
                <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              color: 'var(--color-neutral-foreground-default)'
            }}>{s}</td>
                <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center'
            }}>
                  <SwitchToggle size={s} selected />
                </td>
                <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center'
            }}>
                  <SwitchToggle size={s} selected={false} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </Block>

      <Block label="Tab — Style × Selection" desc="스타일별 좌/우 선택 조합.">
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
            }}>Style</th>
              <th style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center',
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>Left</th>
              <th style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center',
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>Right</th>
            </tr>
          </thead>
          <tbody>
            {(['square', 'round'] as const).map(st => <tr key={st} style={{
            background: 'var(--color-neutral-background-default)'
          }}>
                <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              color: 'var(--color-neutral-foreground-default)'
            }}>{st}</td>
                <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center'
            }}>
                  <SwitchTab style={st} options={[{
                value: 'l',
                label: '레이블'
              }, {
                value: 'r',
                label: '레이블'
              }]} value="l" />
                </td>
                <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center'
            }}>
                  <SwitchTab style={st} options={[{
                value: 'l',
                label: '레이블'
              }, {
                value: 'r',
                label: '레이블'
              }]} value="r" />
                </td>
              </tr>)}
          </tbody>
        </table>
      </Block>
    </div>
}`,...(w=(z=c.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const C=["Playground","Size","Contents","Matrix"],R=Object.freeze(Object.defineProperty({__proto__:null,Contents:i,Matrix:c,Playground:n,Size:d,__namedExportsOrder:C,default:A},Symbol.toStringTag,{value:"Module"}));export{R as C,n as P};
