import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as t}from"./Overlay-CcSiq-dJ.js";import"./index-Bc2G9s8g.js";const i=({children:r,gap:o=12})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:o},children:r}),a=({label:r,desc:o,children:l})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"#9999B8",margin:"0 0 4px"},children:r}),o&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"#55557A",margin:"0 0 12px",lineHeight:1.6},children:o}),l]}),n=({children:r})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"#9999B8",margin:"6px 0 0",textAlign:"center"},children:r}),L={title:"Assets/Badges/Overlay",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
이미지/썸네일 위에 오버레이되는 뱃지 컴포넌트입니다.
Basic(Alpha/Solid × Regular/Bold), Live, Live Label 타입을 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`basic\` | 텍스트 레이블 뱃지 (기본) |
| \`live\` | 라이브 표시 뱃지 (빨간 배경) |
| \`liveLabel\` | 라이브 + 시청자 수 뱃지 |

### Color (Basic 전용)

| Color | Description |
|-------|-------------|
| \`alpha\` | 반투명 검정 배경 (rgba 0,0,0,0.5) |
| \`solid\` | 파란색 배경 (#3283FD) |

### Weight (Basic 전용)

| Weight | Description |
|--------|-------------|
| \`regular\` | 기본 굵기 (400) |
| \`bold\` | 굵은 글씨 (700) |

\`\`\`tsx
import { BadgeOverlay } from '@/components/Badges/Overlay';

<BadgeOverlay type="basic" color="alpha" weight="regular" text="배지" />
<BadgeOverlay type="live" />
<BadgeOverlay type="liveLabel" viewCount="1.6만 시청" />
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["basic","live","liveLabel"],description:"뱃지 타입"},color:{control:"select",options:["alpha","solid"],description:"배경 색상 (basic 전용)"},weight:{control:"select",options:["regular","bold"],description:"폰트 굵기 (basic 전용)"},text:{control:"text",description:"텍스트"},viewCount:{control:"text",description:"시청자 수 (liveLabel 전용)"}}},d={args:{type:"basic",color:"alpha",weight:"regular",text:"배지",viewCount:"1.6만 시청"}},s={name:"Size",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(a,{label:"Measurement",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"var(--color-neutral-background-raised-1)",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Attribute","Value"].map(r=>e.jsx("th",{style:{padding:"8px 24px",textAlign:"center",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)"},children:r},r))})}),e.jsx("tbody",{children:[["Height","26px"],["Border radius","999px (pill)"],["Font size","12px"],["Line height","16px"],["Letter spacing","-0.3px"],["Padding","5px 8px"]].map(r=>e.jsx("tr",{style:{background:"var(--color-neutral-background-default)",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:r.map((o,l)=>e.jsx("td",{style:{padding:"8px 24px",textAlign:"center",color:l===0?"var(--color-neutral-foreground-subtle-1)":"var(--color-neutral-foreground-default)",fontWeight:l===0?600:400},children:o},l))},r[0]))})]})})})})},c={name:"Contents",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(a,{label:"Basic — Alpha",desc:"반투명 검정 배경의 기본 뱃지.",children:e.jsxs(i,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(t,{color:"alpha",weight:"regular"}),e.jsx(n,{children:"Regular"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(t,{color:"alpha",weight:"bold"}),e.jsx(n,{children:"Bold"})]})]})}),e.jsx(a,{label:"Basic — Solid",desc:"파란색 배경의 기본 뱃지.",children:e.jsxs(i,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(t,{color:"solid",weight:"regular"}),e.jsx(n,{children:"Regular"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(t,{color:"solid",weight:"bold"}),e.jsx(n,{children:"Bold"})]})]})}),e.jsx(a,{label:"Live",desc:"라이브 방송 표시 뱃지.",children:e.jsx(i,{children:e.jsx(t,{type:"live"})})}),e.jsx(a,{label:"Live Label",desc:"라이브 + 시청자 수를 함께 표시하는 뱃지.",children:e.jsx(i,{children:e.jsx(t,{type:"liveLabel",viewCount:"1.6만 시청"})})})]})},p={name:"Matrix",render:()=>{const r=["alpha","solid"],o=["regular","bold"];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Color \\ Weight"}),o.map(l=>e.jsx("th",{style:{padding:"8px 24px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",textAlign:"center"},children:l},l))]})}),e.jsxs("tbody",{children:[r.map(l=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)",borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:l}),o.map(g=>e.jsx("td",{style:{padding:"12px 24px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(t,{color:l,weight:g})},g))]},l)),e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)",borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:"live"}),e.jsx("td",{style:{padding:"12px 24px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(t,{type:"live"})}),e.jsx("td",{})]}),e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)",borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:"liveLabel"}),e.jsx("td",{colSpan:2,style:{padding:"12px 24px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(t,{type:"liveLabel"})})]})]})]})})}};var x,u,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'basic',
    color: 'alpha',
    weight: 'regular',
    text: '배지',
    viewCount: '1.6만 시청'
  }
}`,...(v=(u=d.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var y,h,m;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Size',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Measurement">
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
              background: 'var(--color-neutral-background-raised-1)',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                {['Attribute', 'Value'].map(h => <th key={h} style={{
                padding: '8px 24px',
                textAlign: 'center',
                fontWeight: 700,
                color: 'var(--color-neutral-foreground-subtle-1)'
              }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[['Height', '26px'], ['Border radius', '999px (pill)'], ['Font size', '12px'], ['Line height', '16px'], ['Letter spacing', '-0.3px'], ['Padding', '5px 8px']].map(row => <tr key={row[0]} style={{
              background: 'var(--color-neutral-background-default)',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                  {row.map((cell, i) => <td key={i} style={{
                padding: '8px 24px',
                textAlign: 'center',
                color: i === 0 ? 'var(--color-neutral-foreground-subtle-1)' : 'var(--color-neutral-foreground-default)',
                fontWeight: i === 0 ? 600 : 400
              }}>{cell}</td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </Block>
    </div>
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var f,b,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Contents',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Basic — Alpha" desc="반투명 검정 배경의 기본 뱃지.">
        <Row>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeOverlay color="alpha" weight="regular" />
            <Caption>Regular</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeOverlay color="alpha" weight="bold" />
            <Caption>Bold</Caption>
          </div>
        </Row>
      </Block>
      <Block label="Basic — Solid" desc="파란색 배경의 기본 뱃지.">
        <Row>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeOverlay color="solid" weight="regular" />
            <Caption>Regular</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeOverlay color="solid" weight="bold" />
            <Caption>Bold</Caption>
          </div>
        </Row>
      </Block>
      <Block label="Live" desc="라이브 방송 표시 뱃지.">
        <Row>
          <BadgeOverlay type="live" />
        </Row>
      </Block>
      <Block label="Live Label" desc="라이브 + 시청자 수를 함께 표시하는 뱃지.">
        <Row>
          <BadgeOverlay type="liveLabel" viewCount="1.6만 시청" />
        </Row>
      </Block>
    </div>
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var k,B,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const colors: BadgeOverlayColor[] = ['alpha', 'solid'];
    const weights: BadgeOverlayWeight[] = ['regular', 'bold'];
    return <div style={{
      fontFamily: 'Pretendard, sans-serif',
      overflowX: 'auto',
      padding: 4
    }}>
        <table style={{
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr style={{
            background: 'var(--color-neutral-background-raised-1)'
          }}>
              <th style={{
              padding: '8px 16px 8px 0',
              textAlign: 'left',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase'
            }}>
                Color \\ Weight
              </th>
              {weights.map(w => <th key={w} style={{
              padding: '8px 24px',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>{w}</th>)}
            </tr>
          </thead>
          <tbody>
            {colors.map(c => <tr key={c} style={{
            background: 'var(--color-neutral-background-default)',
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '12px 16px 12px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>{c}</td>
                {weights.map(w => <td key={w} style={{
              padding: '12px 24px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                    <BadgeOverlay color={c} weight={w} />
                  </td>)}
              </tr>)}
            <tr style={{
            background: 'var(--color-neutral-background-default)',
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
              <td style={{
              padding: '12px 16px 12px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>live</td>
              <td style={{
              padding: '12px 24px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}><BadgeOverlay type="live" /></td>
              <td />
            </tr>
            <tr style={{
            background: 'var(--color-neutral-background-default)',
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
              <td style={{
              padding: '12px 16px 12px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>liveLabel</td>
              <td colSpan={2} style={{
              padding: '12px 24px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}><BadgeOverlay type="liveLabel" /></td>
            </tr>
          </tbody>
        </table>
      </div>;
  }
}`,...(w=(B=p.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const z=["Playground","Sizes","Contents","Matrix"];export{c as Contents,p as Matrix,d as Playground,s as Sizes,z as __namedExportsOrder,L as default};
