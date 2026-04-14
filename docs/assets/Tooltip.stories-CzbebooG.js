import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as n}from"./Tooltip-BA_bmyt3.js";const p=({children:t,gap:o=20})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:o},children:t}),c=({label:t,desc:o,children:r})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"#9999B8",margin:"0 0 4px"},children:t}),o&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"#55557A",margin:"0 0 12px",lineHeight:1.6},children:o}),r]}),l=({children:t})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"#9999B8",margin:"6px 0 0",textAlign:"center"},children:t}),S={title:"Assets/Badges/Tooltip",component:n,parameters:{layout:"centered",docs:{description:{component:`
툴팁형 뱃지 컴포넌트입니다.
신규 기능 안내, 구독 알림 등에 사용합니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | Height | Font | Weight | Background |
|------|--------|------|--------|------------|
| \`md\` | 24px | 11px | Bold (700) | Black (#000) |
| \`sm\` | 18px | 10px | SemiBold (600) | Red (#F4361E) |

### Arrow Location

| Location | Description |
|----------|-------------|
| \`left\` | 좌측 하단 화살표 |
| \`right\` | 우측 하단 화살표 |

\`\`\`tsx
import { BadgeTooltip } from '@/components/Badges/Tooltip';

<BadgeTooltip size="md" arrowLocation="left" text="일이삼사오육칠팔" />
<BadgeTooltip size="sm" arrowLocation="right" text="방금 구독했어요!" />
\`\`\`
        `.trim()}}},argTypes:{size:{control:"select",options:["sm","md"],description:"사이즈"},arrowLocation:{control:"select",options:["left","right"],description:"화살표 위치"},text:{control:"text",description:"텍스트"}}},a={args:{size:"md",arrowLocation:"left",text:"일이삼사오육칠팔"}},i={tags:["!autodocs"],name:"Size",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(c,{label:"Measurement",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"var(--color-neutral-background-raised-1)",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Attribute","md","sm"].map(t=>e.jsx("th",{style:{padding:"8px 24px",textAlign:"center",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)"},children:t},t))})}),e.jsx("tbody",{children:[["Height","24px","18px"],["Font size","11px","10px"],["Font weight","700","600"],["Background","#000000","#F4361E"],["Padding","5.5px 10px","3px 6px"]].map(t=>e.jsx("tr",{style:{background:"var(--color-neutral-background-default)",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:t.map((o,r)=>e.jsx("td",{style:{padding:"8px 24px",textAlign:"center",color:r===0?"var(--color-neutral-foreground-subtle-1)":"var(--color-neutral-foreground-default)",fontWeight:r===0?600:400},children:o},r))},t[0]))})]})})}),e.jsx(c,{label:"Usage",children:e.jsx(p,{children:["md","sm"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(n,{size:t,arrowLocation:"left"}),e.jsx(l,{children:t})]},t))})})]})},s={tags:["!autodocs"],name:"Contents",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(c,{label:"Arrow Left",desc:"좌측 하단 화살표 위치.",children:e.jsxs(p,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(n,{size:"md",arrowLocation:"left"}),e.jsx(l,{children:"Md"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(n,{size:"sm",arrowLocation:"left"}),e.jsx(l,{children:"Sm"})]})]})}),e.jsx(c,{label:"Arrow Right",desc:"우측 하단 화살표 위치.",children:e.jsxs(p,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(n,{size:"md",arrowLocation:"right"}),e.jsx(l,{children:"Md"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(n,{size:"sm",arrowLocation:"right"}),e.jsx(l,{children:"Sm"})]})]})})]})},d={tags:["!autodocs"],name:"Matrix",render:()=>{const t=["md","sm"],o=["left","right"];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Arrow \\ Size"}),t.map(r=>e.jsx("th",{style:{padding:"8px 24px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",textAlign:"center"},children:r},r))]})}),e.jsx("tbody",{children:o.map(r=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)",borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"16px 16px 16px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:r}),t.map(x=>e.jsx("td",{style:{padding:"16px 24px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(n,{size:x,arrowLocation:r})},x))]},r))})]})})}};var g,m,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'md',
    arrowLocation: 'left',
    text: '일이삼사오육칠팔'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,y,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
                {['Attribute', 'md', 'sm'].map(h => <th key={h} style={{
                padding: '8px 24px',
                textAlign: 'center',
                fontWeight: 700,
                color: 'var(--color-neutral-foreground-subtle-1)'
              }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[['Height', '24px', '18px'], ['Font size', '11px', '10px'], ['Font weight', '700', '600'], ['Background', '#000000', '#F4361E'], ['Padding', '5.5px 10px', '3px 6px']].map(row => <tr key={row[0]} style={{
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
      <Block label="Usage">
        <Row>
          {(['md', 'sm'] as BadgeTooltipSize[]).map(s => <div key={s} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
              <BadgeTooltip size={s} arrowLocation="left" />
              <Caption>{s}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,b,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Contents',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Arrow Left" desc="좌측 하단 화살표 위치.">
        <Row>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
            <BadgeTooltip size="md" arrowLocation="left" />
            <Caption>Md</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
            <BadgeTooltip size="sm" arrowLocation="left" />
            <Caption>Sm</Caption>
          </div>
        </Row>
      </Block>
      <Block label="Arrow Right" desc="우측 하단 화살표 위치.">
        <Row>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
            <BadgeTooltip size="md" arrowLocation="right" />
            <Caption>Md</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
            <BadgeTooltip size="sm" arrowLocation="right" />
            <Caption>Sm</Caption>
          </div>
        </Row>
      </Block>
    </div>
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,z,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Matrix',
  render: () => {
    const sizes: BadgeTooltipSize[] = ['md', 'sm'];
    const arrows: BadgeTooltipArrowLocation[] = ['left', 'right'];
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
                Arrow \\ Size
              </th>
              {sizes.map(s => <th key={s} style={{
              padding: '8px 24px',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>{s}</th>)}
            </tr>
          </thead>
          <tbody>
            {arrows.map(a => <tr key={a} style={{
            background: 'var(--color-neutral-background-default)',
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '16px 16px 16px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>{a}</td>
                {sizes.map(s => <td key={s} style={{
              padding: '16px 24px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                    <BadgeTooltip size={s} arrowLocation={a} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(k=(z=d.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const B=["Playground","Sizes","Contents","Matrix"],L=Object.freeze(Object.defineProperty({__proto__:null,Contents:s,Matrix:d,Playground:a,Sizes:i,__namedExportsOrder:B,default:S},Symbol.toStringTag,{value:"Module"}));export{a as P,L as T};
