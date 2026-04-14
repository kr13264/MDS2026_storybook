import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as z}from"./index-DRjF_FHU.js";import{P as t}from"./Pagination-BYK1Ffre.js";const n=({label:r,desc:o,children:a})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:r}),o&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:o}),a]}),l=({children:r,gap:o=24})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:o},children:r}),v=({children:r})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"4px 0 0",textAlign:"center"},children:r}),x=({totalPages:r,variant:o})=>{const[a,i]=z.useState(1),u=o==="ghost";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"20px 32px",borderRadius:12,backgroundColor:u?"#111122":"var(--color-neutral-background-default)",border:u?"none":"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx(t,{totalPages:r,currentPage:a,variant:o,onChange:i}),e.jsxs("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:u?"rgba(255,255,255,0.6)":"var(--color-neutral-foreground-subtle-1)",margin:0},children:[a," / ",r]})]})},F={title:"Components/Pagination",component:t,parameters:{layout:"centered",docs:{description:{component:`
도트 기반 페이지 인디케이터 컴포넌트입니다.
현재 페이지 위치를 시각적으로 표시합니다.

---

<div style="margin-bottom:30px"></div>

### Variant

| Variant | Description |
|---------|-------------|
| \`solid\` | 밝은 배경용 — 활성 도트: 초록색, 비활성: 회색 |
| \`ghost\` | 어두운 배경용 — 활성 도트: 흰색, 비활성: 반투명 흰색 |

### Dots (totalPages)

| Pages | Description |
|-------|-------------|
| 2–5 | 모든 도트를 동일 크기(6px)로 표시 |
| 6+ | 최대 5개 도트 표시, 먼 도트는 축소 (4px → 3px) |

\`\`\`tsx
import { Pagination } from '@/components/Pagination';

<Pagination totalPages={5} currentPage={1} variant="solid" />
<Pagination totalPages={8} currentPage={3} variant="ghost" onChange={setPage} />
\`\`\`
        `.trim()}}},argTypes:{totalPages:{control:{type:"number",min:2,max:20},description:"전체 페이지 수"},currentPage:{control:{type:"number",min:1,max:20},description:"현재 페이지 (1부터 시작)"},variant:{control:"select",options:["solid","ghost"],description:"스타일 변형",table:{defaultValue:{summary:"solid"}}}}},s={args:{totalPages:5,currentPage:1,variant:"solid"}},d={name:"Variant",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(n,{label:"Solid",desc:"밝은 배경에서 사용합니다. 활성 도트는 초록색입니다.",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[2,3,4,5].map(r=>e.jsxs(l,{gap:16,children:[e.jsxs(v,{children:[r,"p"]}),e.jsx("div",{style:{padding:"8px 16px",borderRadius:8,backgroundColor:"var(--color-neutral-background-default)",border:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(t,{totalPages:r,currentPage:1,variant:"solid"})})]},r))})}),e.jsx(n,{label:"Ghost",desc:"어두운 배경에서 사용합니다. 활성 도트는 흰색입니다.",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[2,3,4,5].map(r=>e.jsxs(l,{gap:16,children:[e.jsxs(v,{children:[r,"p"]}),e.jsx("div",{style:{padding:"8px 16px",borderRadius:8,backgroundColor:"#111122"},children:e.jsx(t,{totalPages:r,currentPage:1,variant:"ghost"})})]},r))})})]})},c={name:"Selection",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(n,{label:"5 Pages — All Selections",desc:"5개 페이지에서 각 선택 상태를 보여줍니다.",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[1,2,3,4,5].map(r=>e.jsxs(l,{gap:16,children:[e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",width:8,textAlign:"right"},children:r}),e.jsx("div",{style:{padding:"8px 16px",borderRadius:8,backgroundColor:"var(--color-neutral-background-default)",border:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(t,{totalPages:5,currentPage:r,variant:"solid"})})]},r))})}),e.jsx(n,{label:"8 Pages (5+) — Dot Scaling",desc:"6개 이상일 때 먼 도트가 축소됩니다.",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[1,2,3,4,5,6,7,8].map(r=>e.jsxs(l,{gap:16,children:[e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",width:8,textAlign:"right"},children:r}),e.jsx("div",{style:{padding:"8px 16px",borderRadius:8,backgroundColor:"var(--color-neutral-background-default)",border:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(t,{totalPages:8,currentPage:r,variant:"solid"})})]},r))})})]})},g={name:"Interactive",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(n,{label:"Solid — Click to Navigate",desc:"도트를 클릭하여 페이지를 이동합니다.",children:e.jsxs(l,{gap:32,children:[e.jsx(x,{totalPages:5,variant:"solid"}),e.jsx(x,{totalPages:10,variant:"solid"})]})}),e.jsx(n,{label:"Ghost — Click to Navigate",children:e.jsxs(l,{gap:32,children:[e.jsx(x,{totalPages:5,variant:"ghost"}),e.jsx(x,{totalPages:10,variant:"ghost"})]})})]})},p={name:"Matrix",render:()=>{const r=["solid","ghost"],o=[2,3,4,5,8];return e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"left",fontWeight:600},children:"Pages"}),r.map(a=>e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"center",fontWeight:600},children:a},a))]})}),e.jsx("tbody",{children:o.map(a=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsxs("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",color:"var(--color-neutral-foreground-subtle-1)"},children:[a,a>5?" (5+)":""]}),r.map(i=>e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 24px",textAlign:"center"},children:e.jsx("div",{style:{display:"inline-flex",padding:"8px 16px",borderRadius:8,backgroundColor:i==="ghost"?"#111122":"transparent"},children:e.jsx(t,{totalPages:a,currentPage:1,variant:i})})},i))]},a))})]})}};var m,f,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    totalPages: 5,
    currentPage: 1,
    variant: 'solid'
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,h,P;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Variant',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="Solid" desc="밝은 배경에서 사용합니다. 활성 도트는 초록색입니다.">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          {[2, 3, 4, 5].map(pages => <Row key={pages} gap={16}>
              <Caption>{pages}p</Caption>
              <div style={{
            padding: '8px 16px',
            borderRadius: 8,
            backgroundColor: 'var(--color-neutral-background-default)',
            border: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <Pagination totalPages={pages} currentPage={1} variant="solid" />
              </div>
            </Row>)}
        </div>
      </Block>
      <Block label="Ghost" desc="어두운 배경에서 사용합니다. 활성 도트는 흰색입니다.">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          {[2, 3, 4, 5].map(pages => <Row key={pages} gap={16}>
              <Caption>{pages}p</Caption>
              <div style={{
            padding: '8px 16px',
            borderRadius: 8,
            backgroundColor: '#111122'
          }}>
                <Pagination totalPages={pages} currentPage={1} variant="ghost" />
              </div>
            </Row>)}
        </div>
      </Block>
    </div>
}`,...(P=(h=d.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var k,j,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Selection',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="5 Pages — All Selections" desc="5개 페이지에서 각 선택 상태를 보여줍니다.">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          {[1, 2, 3, 4, 5].map(page => <Row key={page} gap={16}>
              <span style={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: 11,
            color: 'var(--color-neutral-foreground-subtle-3)',
            width: 8,
            textAlign: 'right'
          }}>{page}</span>
              <div style={{
            padding: '8px 16px',
            borderRadius: 8,
            backgroundColor: 'var(--color-neutral-background-default)',
            border: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <Pagination totalPages={5} currentPage={page} variant="solid" />
              </div>
            </Row>)}
        </div>
      </Block>
      <Block label="8 Pages (5+) — Dot Scaling" desc="6개 이상일 때 먼 도트가 축소됩니다.">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(page => <Row key={page} gap={16}>
              <span style={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: 11,
            color: 'var(--color-neutral-foreground-subtle-3)',
            width: 8,
            textAlign: 'right'
          }}>{page}</span>
              <div style={{
            padding: '8px 16px',
            borderRadius: 8,
            backgroundColor: 'var(--color-neutral-background-default)',
            border: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <Pagination totalPages={8} currentPage={page} variant="solid" />
              </div>
            </Row>)}
        </div>
      </Block>
    </div>
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,R,D;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Interactive',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="Solid — Click to Navigate" desc="도트를 클릭하여 페이지를 이동합니다.">
        <Row gap={32}>
          <PaginationDemo totalPages={5} variant="solid" />
          <PaginationDemo totalPages={10} variant="solid" />
        </Row>
      </Block>
      <Block label="Ghost — Click to Navigate">
        <Row gap={32}>
          <PaginationDemo totalPages={5} variant="ghost" />
          <PaginationDemo totalPages={10} variant="ghost" />
        </Row>
      </Block>
    </div>
}`,...(D=(R=g.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var w,B,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const variants: PaginationVariant[] = ['solid', 'ghost'];
    const pageCounts = [2, 3, 4, 5, 8];
    return <table style={{
      borderCollapse: 'collapse',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 13
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
          }}>Pages</th>
            {variants.map(v => <th key={v} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '8px 12px',
            textAlign: 'center',
            fontWeight: 600
          }}>{v}</th>)}
          </tr>
        </thead>
        <tbody>
          {pageCounts.map(pages => <tr key={pages} style={{
          background: 'var(--color-neutral-background-default)'
        }}>
              <td style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '8px 12px',
            color: 'var(--color-neutral-foreground-subtle-1)'
          }}>{pages}{pages > 5 ? ' (5+)' : ''}</td>
              {variants.map(v => <td key={v} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '12px 24px',
            textAlign: 'center'
          }}>
                  <div style={{
              display: 'inline-flex',
              padding: '8px 16px',
              borderRadius: 8,
              backgroundColor: v === 'ghost' ? '#111122' : 'transparent'
            }}>
                    <Pagination totalPages={pages} currentPage={1} variant={v} />
                  </div>
                </td>)}
            </tr>)}
        </tbody>
      </table>;
  }
}`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const V=["Playground","Variant","Selection","Interactive","Matrix"],G=Object.freeze(Object.defineProperty({__proto__:null,Interactive:g,Matrix:p,Playground:s,Selection:c,Variant:d,__namedExportsOrder:V,default:F},Symbol.toStringTag,{value:"Module"}));export{G as P,s as a};
