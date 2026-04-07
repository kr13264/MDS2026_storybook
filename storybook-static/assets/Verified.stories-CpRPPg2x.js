import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as l}from"./Verified-D4hd2sAO.js";import"./index-Bc2G9s8g.js";const S=({children:r,gap:t=20})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:t},children:r}),s=({label:r,desc:t,children:o})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"#9999B8",margin:"0 0 4px"},children:r}),t&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"#55557A",margin:"0 0 12px",lineHeight:1.6},children:t}),o]}),k=({children:r})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"#9999B8",margin:"6px 0 0",textAlign:"center"},children:r}),A={title:"Assets/Badges/Verified",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
인증/검증 아이콘 뱃지 컴포넌트입니다.
프로필, 채널명 옆에 인증 상태를 표시합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Size | Color | Description |
|------|------|-------|-------------|
| \`official\` | 19×15px | Blue (#3283FD) | 공식 인증 뱃지 |
| \`local\` | 19×15px | Green (#03A94D) | 지역 인증 뱃지 |
| \`verifiedSm\` | 14×14px | Blue (#3283FD) | 소형 인증 체크 |
| \`verifiedLg\` | 22×22px | Blue (#3283FD) | 대형 인증 체크 |

\`\`\`tsx
import { BadgeVerified } from '@/components/Badges/Verified';

<BadgeVerified type="official" />
<BadgeVerified type="local" />
<BadgeVerified type="verifiedSm" />
<BadgeVerified type="verifiedLg" />
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["official","local","verifiedSm","verifiedLg"],description:"인증 뱃지 타입"}}},n={args:{type:"official"}},i={name:"Size",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(s,{label:"Measurement",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"var(--color-neutral-background-raised-1)",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Attribute","official","local","verifiedSm","verifiedLg"].map(r=>e.jsx("th",{style:{padding:"8px 16px",textAlign:"center",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)"},children:r},r))})}),e.jsx("tbody",{children:[["Width","19px","19px","14px","22px"],["Height","15px","15px","14px","22px"],["Color","#3283FD","#03A94D","#3283FD","#3283FD"]].map(r=>e.jsx("tr",{style:{background:"var(--color-neutral-background-default)",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:r.map((t,o)=>e.jsx("td",{style:{padding:"8px 16px",textAlign:"center",color:o===0?"var(--color-neutral-foreground-subtle-1)":"var(--color-neutral-foreground-default)",fontWeight:o===0?600:400},children:t},o))},r[0]))})]})})}),e.jsx(s,{label:"Usage",children:e.jsx(S,{children:["official","local","verifiedSm","verifiedLg"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(l,{type:r}),e.jsx(k,{children:r})]},r))})})]})},a={name:"Contents",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(s,{label:"With text",desc:"프로필/채널명 옆에 인증 뱃지를 배치하는 예시.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"Pretendard, sans-serif"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--color-neutral-foreground-default)"},children:"공식 채널"}),e.jsx(l,{type:"official"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--color-neutral-foreground-default)"},children:"지역 채널"}),e.jsx(l,{type:"local"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--color-neutral-foreground-default)"},children:"인증 사용자"}),e.jsx(l,{type:"verifiedSm"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx("span",{style:{fontSize:16,fontWeight:700,color:"var(--color-neutral-foreground-default)"},children:"인증 사용자"}),e.jsx(l,{type:"verifiedLg"})]})]})})})},d={name:"Matrix",render:()=>{const r=["official","local","verifiedSm","verifiedLg"];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{padding:"8px 16px",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Type"}),e.jsx("th",{style:{padding:"8px 24px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",textAlign:"center"},children:"Preview"})]})}),e.jsx("tbody",{children:r.map(t=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)",borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"12px 16px",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:t}),e.jsx("td",{style:{padding:"12px 24px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(l,{type:t})})]},t))})]})})}};var c,p,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'official'
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,x,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
                {['Attribute', 'official', 'local', 'verifiedSm', 'verifiedLg'].map(h => <th key={h} style={{
                padding: '8px 16px',
                textAlign: 'center',
                fontWeight: 700,
                color: 'var(--color-neutral-foreground-subtle-1)'
              }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[['Width', '19px', '19px', '14px', '22px'], ['Height', '15px', '15px', '14px', '22px'], ['Color', '#3283FD', '#03A94D', '#3283FD', '#3283FD']].map(row => <tr key={row[0]} style={{
              background: 'var(--color-neutral-background-default)',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                  {row.map((cell, i) => <td key={i} style={{
                padding: '8px 16px',
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
          {(['official', 'local', 'verifiedSm', 'verifiedLg'] as BadgeVerifiedType[]).map(t => <div key={t} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
              <BadgeVerified type={t} />
              <Caption>{t}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var y,m,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Contents',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="With text" desc="프로필/채널명 옆에 인증 뱃지를 배치하는 예시.">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        fontFamily: 'Pretendard, sans-serif'
      }}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }}>
            <span style={{
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--color-neutral-foreground-default)'
          }}>공식 채널</span>
            <BadgeVerified type="official" />
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }}>
            <span style={{
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--color-neutral-foreground-default)'
          }}>지역 채널</span>
            <BadgeVerified type="local" />
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }}>
            <span style={{
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--color-neutral-foreground-default)'
          }}>인증 사용자</span>
            <BadgeVerified type="verifiedSm" />
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }}>
            <span style={{
            fontSize: 16,
            fontWeight: 700,
            color: 'var(--color-neutral-foreground-default)'
          }}>인증 사용자</span>
            <BadgeVerified type="verifiedLg" />
          </div>
        </div>
      </Block>
    </div>
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var h,b,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const types: BadgeVerifiedType[] = ['official', 'local', 'verifiedSm', 'verifiedLg'];
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
              padding: '8px 16px',
              textAlign: 'left',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase'
            }}>Type</th>
              <th style={{
              padding: '8px 24px',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>Preview</th>
            </tr>
          </thead>
          <tbody>
            {types.map(t => <tr key={t} style={{
            background: 'var(--color-neutral-background-default)',
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '12px 16px',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>{t}</td>
                <td style={{
              padding: '12px 24px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                  <BadgeVerified type={t} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const D=["Playground","Sizes","Contents","Matrix"];export{a as Contents,d as Matrix,n as Playground,i as Sizes,D as __namedExportsOrder,A as default};
