import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as o}from"./Vertical-Cawrtff9.js";const l=({children:r,gap:t=16})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:t},children:r}),p=({label:r,desc:t,children:n})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:r}),t&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:t}),n]}),S={title:"Components/Reaction/Horizontal",component:o,parameters:{layout:"centered",docs:{description:{component:`
수평 리액션 버튼 컴포넌트입니다.
아이콘과 숫자가 가로로 배치됩니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | Icon | Text |
|------|------|------|
| \`default\` | 24px | 14px / 500 |
| \`small\` | 18px | 14px / 500 |

### Type

| Type | Icon |
|------|------|
| \`like\` | 좋아요 |
| \`comment\` | 댓글 |
| \`share\` | 공유 |
| \`bookmark\` | 저장 |

\`\`\`tsx
import { ReactionHorizontal } from '@/components/Reaction';

<ReactionHorizontal type="like" count={15} />
<ReactionHorizontal type="comment" count={3} size="small" selected />
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["like","comment","share","bookmark"],description:"리액션 타입",table:{type:{summary:"ReactionType"},defaultValue:{summary:"like"}}},size:{control:"select",options:["default","small"],description:"사이즈",table:{type:{summary:"ReactionHorizontalSize"},defaultValue:{summary:"default"}}},selected:{control:"boolean",description:"선택 상태",table:{defaultValue:{summary:"false"}}},showCount:{control:"boolean",description:"숫자 표시 여부",table:{defaultValue:{summary:"true"}}},count:{control:"number",description:"카운트 값",table:{defaultValue:{summary:"0"}}}}},a={args:{type:"like",size:"default",selected:!1,showCount:!0,count:15}},s={name:"Size",render:()=>{const r=["like","comment","share","bookmark"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(p,{label:"Default (24px)",desc:"기본 사이즈. 아이콘 24px + 숫자 14px.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(l,{children:r.map(t=>e.jsx(o,{type:t,count:15},t))}),e.jsx(l,{children:r.map(t=>e.jsx(o,{type:t,count:15,selected:!0},`${t}-sel`))})]})}),e.jsx(p,{label:"Small (18px)",desc:"작은 사이즈. 아이콘 18px + 숫자 14px.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(l,{children:r.map(t=>e.jsx(o,{type:t,size:"small",count:15},t))}),e.jsx(l,{children:r.map(t=>e.jsx(o,{type:t,size:"small",count:15,selected:!0},`${t}-sel`))})]})})]})}},i={name:"State",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(p,{label:"Default",desc:"기본 상태. 아웃라인 아이콘이 표시됩니다.",children:e.jsxs(l,{children:[e.jsx(o,{type:"like",count:15}),e.jsx(o,{type:"comment",count:15}),e.jsx(o,{type:"share",count:15}),e.jsx(o,{type:"bookmark",count:15})]})}),e.jsx(p,{label:"Selected",desc:"선택 상태. 채워진 아이콘이 표시됩니다.",children:e.jsxs(l,{children:[e.jsx(o,{type:"like",count:15,selected:!0}),e.jsx(o,{type:"comment",count:15,selected:!0}),e.jsx(o,{type:"share",count:15,selected:!0}),e.jsx(o,{type:"bookmark",count:15,selected:!0})]})})]})},c={name:"Matrix",render:()=>{const r=["like","comment","share","bookmark"],t=["default","small"];return e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif"},children:[e.jsxs("thead",{children:[e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"left",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Size"}),r.map(n=>e.jsx("th",{colSpan:2,style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",textAlign:"center"},children:n},n))]}),e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)"}}),r.map(n=>[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"4px 8px",fontSize:10,fontWeight:400,textAlign:"center",color:"var(--color-neutral-foreground-subtle-3)"},children:"default"},`${n}-d`),e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"4px 8px",fontSize:10,fontWeight:400,textAlign:"center",color:"var(--color-neutral-foreground-subtle-3)"},children:"selected"},`${n}-s`)])]})]}),e.jsx("tbody",{children:t.map(n=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 16px",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",whiteSpace:"nowrap"},children:n}),r.map(d=>[e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 16px",textAlign:"center",verticalAlign:"middle"},children:e.jsx(o,{type:d,size:n,count:15})},`${d}-d`),e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 16px",textAlign:"center",verticalAlign:"middle"},children:e.jsx(o,{type:d,size:n,count:15,selected:!0})},`${d}-s`)])]},n))})]})}};var u,x,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'like',
    size: 'default',
    selected: false,
    showCount: true,
    count: 15
  }
}`,...(m=(x=a.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var y,f,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Size',
  render: () => {
    const types: ReactionType[] = ['like', 'comment', 'share', 'bookmark'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }}>
        <Block label="Default (24px)" desc="기본 사이즈. 아이콘 24px + 숫자 14px.">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <Row>{types.map(t => <ReactionHorizontal key={t} type={t} count={15} />)}</Row>
            <Row>{types.map(t => <ReactionHorizontal key={\`\${t}-sel\`} type={t} count={15} selected />)}</Row>
          </div>
        </Block>
        <Block label="Small (18px)" desc="작은 사이즈. 아이콘 18px + 숫자 14px.">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <Row>{types.map(t => <ReactionHorizontal key={t} type={t} size="small" count={15} />)}</Row>
            <Row>{types.map(t => <ReactionHorizontal key={\`\${t}-sel\`} type={t} size="small" count={15} selected />)}</Row>
          </div>
        </Block>
      </div>;
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var k,b,h;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'State',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Default" desc="기본 상태. 아웃라인 아이콘이 표시됩니다.">
        <Row>
          <ReactionHorizontal type="like" count={15} />
          <ReactionHorizontal type="comment" count={15} />
          <ReactionHorizontal type="share" count={15} />
          <ReactionHorizontal type="bookmark" count={15} />
        </Row>
      </Block>
      <Block label="Selected" desc="선택 상태. 채워진 아이콘이 표시됩니다.">
        <Row>
          <ReactionHorizontal type="like" count={15} selected />
          <ReactionHorizontal type="comment" count={15} selected />
          <ReactionHorizontal type="share" count={15} selected />
          <ReactionHorizontal type="bookmark" count={15} selected />
        </Row>
      </Block>
    </div>
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,z,j;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const types: ReactionType[] = ['like', 'comment', 'share', 'bookmark'];
    const sizes: ReactionHorizontalSize[] = ['default', 'small'];
    return <table style={{
      borderCollapse: 'collapse',
      fontFamily: 'Pretendard, sans-serif'
    }}>
        <thead>
          <tr style={{
          background: 'var(--color-neutral-background-raised-1)'
        }}>
            <th style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '8px 12px',
            textAlign: 'left',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.07em',
            textTransform: 'uppercase'
          }}>Size</th>
            {types.map(t => <th key={t} colSpan={2} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '8px 12px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            textAlign: 'center'
          }}>{t}</th>)}
          </tr>
          <tr style={{
          background: 'var(--color-neutral-background-raised-1)'
        }}>
            <th style={{
            border: '1px solid var(--color-neutral-stroke-divider)'
          }} />
            {types.map(t => [<th key={\`\${t}-d\`} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '4px 8px',
            fontSize: 10,
            fontWeight: 400,
            textAlign: 'center',
            color: 'var(--color-neutral-foreground-subtle-3)'
          }}>default</th>, <th key={\`\${t}-s\`} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '4px 8px',
            fontSize: 10,
            fontWeight: 400,
            textAlign: 'center',
            color: 'var(--color-neutral-foreground-subtle-3)'
          }}>selected</th>])}
          </tr>
        </thead>
        <tbody>
          {sizes.map(sz => <tr key={sz} style={{
          background: 'var(--color-neutral-background-default)'
        }}>
              <td style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '12px 16px',
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--color-neutral-foreground-subtle-1)',
            whiteSpace: 'nowrap'
          }}>{sz}</td>
              {types.map(t => [<td key={\`\${t}-d\`} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '12px 16px',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}>
                  <ReactionHorizontal type={t} size={sz} count={15} />
                </td>, <td key={\`\${t}-s\`} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '12px 16px',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}>
                  <ReactionHorizontal type={t} size={sz} count={15} selected />
                </td>])}
            </tr>)}
        </tbody>
      </table>;
  }
}`,...(j=(z=c.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const R=["Playground","Size","State","Matrix"],A=Object.freeze(Object.defineProperty({__proto__:null,Matrix:c,Playground:a,Size:s,State:i,__namedExportsOrder:R,default:S},Symbol.toStringTag,{value:"Module"}));export{A as H,a as P};
