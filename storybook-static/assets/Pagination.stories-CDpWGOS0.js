import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R as q}from"./index-Bc2G9s8g.js";function _(r,a,t,o){if(t<=o)return 6;const n=o-1;return a<=3?r===n?3:r===n-1?4:6:a>=t-2?r===0?3:r===1?4:6:r===0||r===n?3:r===1||r===n-1?4:6}function E(r,a,t){return a<=t||r<=3?r-1:r>=a-2?t-(a-r)-1:Math.floor(t/2)}const i=({totalPages:r,currentPage:a,variant:t="solid",onChange:o,className:n=""})=>{const N=Math.min(r,5),T=E(a,r,5),y=t==="ghost",G=y?"var(--color-neutral-background-static-white, #fff)":"var(--color-primary-foreground-decorative, #03c75a)",W=y?"var(--color-neutral-foreground-static-alpha-white-2, rgba(255,255,255,0.5))":"var(--color-neutral-foreground-dot, rgba(0,0,0,0.08))";return e.jsx("div",{className:n,role:"tablist","aria-label":"페이지 인디케이터",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:4},children:Array.from({length:N},(O,l)=>{const p=l===T,b=_(l,a,r,5);return e.jsx("div",{role:"tab","aria-selected":p,tabIndex:p?0:-1,onClick:()=>{if(!o||p)return;let c;r<=5||a<=3?c=l+1:a>=r-2?c=r-5+l+1:c=a-Math.floor(5/2)+l,o(c)},style:{width:b,height:b,borderRadius:4,backgroundColor:p?G:W,flexShrink:0,cursor:o?"pointer":void 0,transition:"all 0.2s ease"}},l)})})};i.displayName="Pagination";i.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{totalPages:{required:!0,tsType:{name:"number"},description:"전체 페이지 수"},currentPage:{required:!0,tsType:{name:"number"},description:"현재 활성 페이지 (1부터 시작)"},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"}]},description:"스타일",defaultValue:{value:"'solid'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"페이지 변경 콜백"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const s=({label:r,desc:a,children:t})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:r}),a&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:a}),t]}),d=({children:r,gap:a=24})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:a},children:r}),h=({children:r})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"4px 0 0",textAlign:"center"},children:r}),g=({totalPages:r,variant:a})=>{const[t,o]=q.useState(1),n=a==="ghost";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"20px 32px",borderRadius:12,backgroundColor:n?"#111122":"var(--color-neutral-background-default)",border:n?"none":"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx(i,{totalPages:r,currentPage:t,variant:a,onChange:o}),e.jsxs("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:n?"rgba(255,255,255,0.6)":"var(--color-neutral-foreground-subtle-1)",margin:0},children:[t," / ",r]})]})},L={title:"Components/Pagination",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
        `.trim()}}},argTypes:{totalPages:{control:{type:"number",min:2,max:20},description:"전체 페이지 수"},currentPage:{control:{type:"number",min:1,max:20},description:"현재 페이지 (1부터 시작)"},variant:{control:"select",options:["solid","ghost"],description:"스타일 변형",table:{defaultValue:{summary:"solid"}}}}},u={args:{totalPages:5,currentPage:1,variant:"solid"}},x={name:"Variant",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(s,{label:"Solid",desc:"밝은 배경에서 사용합니다. 활성 도트는 초록색입니다.",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[2,3,4,5].map(r=>e.jsxs(d,{gap:16,children:[e.jsxs(h,{children:[r,"p"]}),e.jsx("div",{style:{padding:"8px 16px",borderRadius:8,backgroundColor:"var(--color-neutral-background-default)",border:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(i,{totalPages:r,currentPage:1,variant:"solid"})})]},r))})}),e.jsx(s,{label:"Ghost",desc:"어두운 배경에서 사용합니다. 활성 도트는 흰색입니다.",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[2,3,4,5].map(r=>e.jsxs(d,{gap:16,children:[e.jsxs(h,{children:[r,"p"]}),e.jsx("div",{style:{padding:"8px 16px",borderRadius:8,backgroundColor:"#111122"},children:e.jsx(i,{totalPages:r,currentPage:1,variant:"ghost"})})]},r))})})]})},v={name:"Selection",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(s,{label:"5 Pages — All Selections",desc:"5개 페이지에서 각 선택 상태를 보여줍니다.",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[1,2,3,4,5].map(r=>e.jsxs(d,{gap:16,children:[e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",width:8,textAlign:"right"},children:r}),e.jsx("div",{style:{padding:"8px 16px",borderRadius:8,backgroundColor:"var(--color-neutral-background-default)",border:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(i,{totalPages:5,currentPage:r,variant:"solid"})})]},r))})}),e.jsx(s,{label:"8 Pages (5+) — Dot Scaling",desc:"6개 이상일 때 먼 도트가 축소됩니다.",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[1,2,3,4,5,6,7,8].map(r=>e.jsxs(d,{gap:16,children:[e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",width:8,textAlign:"right"},children:r}),e.jsx("div",{style:{padding:"8px 16px",borderRadius:8,backgroundColor:"var(--color-neutral-background-default)",border:"1px solid var(--color-neutral-stroke-divider)"},children:e.jsx(i,{totalPages:8,currentPage:r,variant:"solid"})})]},r))})})]})},f={name:"Interactive",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(s,{label:"Solid — Click to Navigate",desc:"도트를 클릭하여 페이지를 이동합니다.",children:e.jsxs(d,{gap:32,children:[e.jsx(g,{totalPages:5,variant:"solid"}),e.jsx(g,{totalPages:10,variant:"solid"})]})}),e.jsx(s,{label:"Ghost — Click to Navigate",children:e.jsxs(d,{gap:32,children:[e.jsx(g,{totalPages:5,variant:"ghost"}),e.jsx(g,{totalPages:10,variant:"ghost"})]})})]})},m={name:"Matrix",render:()=>{const r=["solid","ghost"],a=[2,3,4,5,8];return e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"left",fontWeight:600},children:"Pages"}),r.map(t=>e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"center",fontWeight:600},children:t},t))]})}),e.jsx("tbody",{children:a.map(t=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsxs("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",color:"var(--color-neutral-foreground-subtle-1)"},children:[t,t>5?" (5+)":""]}),r.map(o=>e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 24px",textAlign:"center"},children:e.jsx("div",{style:{display:"inline-flex",padding:"8px 16px",borderRadius:8,backgroundColor:o==="ghost"?"#111122":"transparent"},children:e.jsx(i,{totalPages:t,currentPage:1,variant:o})})},o))]},t))})]})}};var k,P,j;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    totalPages: 5,
    currentPage: 1,
    variant: 'solid'
  }
}`,...(j=(P=u.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var C,S,R;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(S=x.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var D,w,A;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(w=v.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var B,V,z;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(V=f.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var I,F,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const Q=["Playground","Variant","Selection","Interactive","Matrix"];export{f as Interactive,m as Matrix,u as Playground,v as Selection,x as Variant,Q as __namedExportsOrder,L as default};
