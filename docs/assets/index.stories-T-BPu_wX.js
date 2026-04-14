import{j as e}from"./jsx-runtime-DiklIkkE.js";import{P as o,a as P,b as M}from"./More-5niUK_wN.js";const p=({children:r,gap:l=24})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:l},children:r}),d=({label:r,desc:l,children:t})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"#9999B8",margin:"0 0 4px"},children:r}),l&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"#55557A",margin:"0 0 12px",lineHeight:1.6},children:l}),t]}),I=[{icon:"check",label:"구독해지"},{icon:"like",label:"좋아요"},{icon:"placeBookmark",label:"저장하기"},{icon:"notification",label:"알림받기"},{icon:"shareType1",label:"공유하기"}],S={title:"Components/Popover",parameters:{layout:"centered",docs:{description:{component:`
팝오버 컴포넌트. **Tooltip**, **Info**, **More** 세 가지 서브 컴포넌트를 제공합니다.

---

<div style="margin-bottom:30px"></div>

### Tooltip

| Prop | Description |
|------|-------------|
| \`direction\` | 말풍선 방향: top / bottom / left / right |
| \`align\` | 꼬리 정렬: start / center / end |

### Info

| Prop | Description |
|------|-------------|
| \`type\` | default: 일반 / titled: 제목 포함 |
| \`line\` | single: 한 줄 / multi: 여러 줄 |
| \`button\` | 버튼 표시 여부 |

### More

| Prop | Description |
|------|-------------|
| \`items\` | 메뉴 아이템 배열 (icon + label) |

\`\`\`tsx
import { PopoverTooltip, PopoverInfo, PopoverMore } from '@/components/Popover';

<PopoverTooltip direction="top" align="start" text="안내 문구" />
<PopoverInfo type="default" line="single" text="설명 문구" />
<PopoverMore items={[{ icon: 'check', label: '구독해지' }]} />
\`\`\`
        `.trim()}}}},i={name:"Tooltip",render:()=>{const r=["top","bottom","left","right"],l=["start","center","end"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32,padding:4},children:e.jsx(d,{label:"Direction × Align",desc:"말풍선 방향과 꼬리 정렬 조합.",children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"left",color:"var(--color-neutral-foreground-subtle-1)"},children:"Direction"}),l.map(t=>e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:t},t))]})}),e.jsx("tbody",{children:r.map(t=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",color:"var(--color-neutral-foreground-default)"},children:t}),l.map(c=>e.jsx("td",{style:{padding:"20px 24px",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:(t==="left"||t==="right")&&c!=="center"?e.jsx("span",{style:{fontSize:11,color:"#9999B8"},children:"—"}):e.jsx(M,{direction:t,align:c})},c))]},t))})]})})})}},n={name:"Info",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,padding:4},children:[e.jsx(d,{label:"Default — Single",desc:"한 줄 텍스트 기본형.",children:e.jsxs(p,{children:[e.jsx(o,{type:"default",line:"single"}),e.jsx(o,{type:"default",line:"single",button:!0})]})}),e.jsx(d,{label:"Default — Multi",desc:"여러 줄 텍스트.",children:e.jsxs(p,{children:[e.jsx(o,{type:"default",line:"multi"}),e.jsx(o,{type:"default",line:"multi",button:!0})]})}),e.jsx(d,{label:"Titled — Multi",desc:"제목이 있는 여러 줄 팝오버.",children:e.jsxs(p,{children:[e.jsx(o,{type:"titled",line:"multi"}),e.jsx(o,{type:"titled",line:"multi",button:!0})]})})]})},a={name:"More",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32,padding:4},children:e.jsx(d,{label:"Item Count",desc:"메뉴 아이템 개수별 변형.",children:e.jsx(p,{gap:16,children:[1,2,3,4,5].map(r=>e.jsx(P,{items:I.slice(0,r)},r))})})})},s={name:"Matrix",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,padding:4},children:[e.jsx(d,{label:"Info — Type × Line × Button",desc:"Info 팝오버 전체 조합.",children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"left",color:"var(--color-neutral-foreground-subtle-1)"},children:"Type"}),e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:"Single"}),e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:"Single + Button"}),e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:"Multi"}),e.jsx("th",{style:{padding:"8px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",textAlign:"center",color:"var(--color-neutral-foreground-subtle-1)"},children:"Multi + Button"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",color:"var(--color-neutral-foreground-default)"},children:"default"}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(o,{type:"default",line:"single"})}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(o,{type:"default",line:"single",button:!0})}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(o,{type:"default",line:"multi"})}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(o,{type:"default",line:"multi",button:!0})})]}),e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",color:"var(--color-neutral-foreground-default)"},children:"titled"}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",color:"#9999B8",fontSize:11},children:"—"}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)",color:"#9999B8",fontSize:11},children:"—"}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(o,{type:"titled",line:"multi"})}),e.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(o,{type:"titled",line:"multi",button:!0})})]})]})]})}),e.jsx(d,{label:"More — Item Count",desc:"More 메뉴 아이템 수 비교.",children:e.jsx(p,{gap:16,children:[1,2,3,4,5].map(r=>e.jsx(P,{items:I.slice(0,r)},r))})})]})};var u,x,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Tooltip',
  render: () => {
    const directions: TooltipDirection[] = ['top', 'bottom', 'left', 'right'];
    const aligns: TooltipAlign[] = ['start', 'center', 'end'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      padding: 4
    }}>
        <Block label="Direction × Align" desc="말풍선 방향과 꼬리 정렬 조합.">
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
              }}>Direction</th>
                {aligns.map(a => <th key={a} style={{
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-neutral-stroke-divider)',
                textAlign: 'center',
                color: 'var(--color-neutral-foreground-subtle-1)'
              }}>{a}</th>)}
              </tr>
            </thead>
            <tbody>
              {directions.map(dir => <tr key={dir} style={{
              background: 'var(--color-neutral-background-default)'
            }}>
                  <td style={{
                padding: '12px 16px',
                borderBottom: '1px solid var(--color-neutral-stroke-divider)',
                color: 'var(--color-neutral-foreground-default)'
              }}>{dir}</td>
                  {aligns.map(align => <td key={align} style={{
                padding: '20px 24px',
                borderBottom: '1px solid var(--color-neutral-stroke-divider)'
              }}>
                      {(dir === 'left' || dir === 'right') && align !== 'center' ? <span style={{
                  fontSize: 11,
                  color: '#9999B8'
                }}>—</span> : <PopoverTooltip direction={dir} align={align} />}
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </Block>
      </div>;
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,m,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Info',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    padding: 4
  }}>
      <Block label="Default — Single" desc="한 줄 텍스트 기본형.">
        <Row>
          <PopoverInfo type="default" line="single" />
          <PopoverInfo type="default" line="single" button />
        </Row>
      </Block>
      <Block label="Default — Multi" desc="여러 줄 텍스트.">
        <Row>
          <PopoverInfo type="default" line="multi" />
          <PopoverInfo type="default" line="multi" button />
        </Row>
      </Block>
      <Block label="Titled — Multi" desc="제목이 있는 여러 줄 팝오버.">
        <Row>
          <PopoverInfo type="titled" line="multi" />
          <PopoverInfo type="titled" line="multi" button />
        </Row>
      </Block>
    </div>
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var b,y,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'More',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    padding: 4
  }}>
      <Block label="Item Count" desc="메뉴 아이템 개수별 변형.">
        <Row gap={16}>
          {[1, 2, 3, 4, 5].map(count => <PopoverMore key={count} items={moreItems.slice(0, count)} />)}
        </Row>
      </Block>
    </div>
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var k,j,B;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    padding: 4
  }}>
      <Block label="Info — Type × Line × Button" desc="Info 팝오버 전체 조합.">
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
              <th style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center',
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>Single</th>
              <th style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center',
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>Single + Button</th>
              <th style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center',
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>Multi</th>
              <th style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              textAlign: 'center',
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>Multi + Button</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{
            background: 'var(--color-neutral-background-default)'
          }}>
              <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              color: 'var(--color-neutral-foreground-default)'
            }}>default</td>
              <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}><PopoverInfo type="default" line="single" /></td>
              <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}><PopoverInfo type="default" line="single" button /></td>
              <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}><PopoverInfo type="default" line="multi" /></td>
              <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}><PopoverInfo type="default" line="multi" button /></td>
            </tr>
            <tr style={{
            background: 'var(--color-neutral-background-default)'
          }}>
              <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              color: 'var(--color-neutral-foreground-default)'
            }}>titled</td>
              <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              color: '#9999B8',
              fontSize: 11
            }}>—</td>
              <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)',
              color: '#9999B8',
              fontSize: 11
            }}>—</td>
              <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}><PopoverInfo type="titled" line="multi" /></td>
              <td style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}><PopoverInfo type="titled" line="multi" button /></td>
            </tr>
          </tbody>
        </table>
      </Block>

      <Block label="More — Item Count" desc="More 메뉴 아이템 수 비교.">
        <Row gap={16}>
          {[1, 2, 3, 4, 5].map(count => <PopoverMore key={count} items={moreItems.slice(0, count)} />)}
        </Row>
      </Block>
    </div>
}`,...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const T=["Tooltip","Info","More","Matrix"],z=Object.freeze(Object.defineProperty({__proto__:null,Info:n,Matrix:s,More:a,Tooltip:i,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{z as P,i as T};
