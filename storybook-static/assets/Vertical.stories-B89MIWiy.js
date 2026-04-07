import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{a as r}from"./Vertical-BYffoIoG.js";import"./index-Bc2G9s8g.js";import"./Icon-Bs3x4phG.js";const n=({children:l,gap:t=16})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:t},children:l}),a=({label:l,desc:t,children:o})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:l}),t&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:t}),o]}),A={title:"Components/Reaction/Vertical",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
수직 리액션 버튼 컴포넌트입니다.
아이콘 아래에 레이블 또는 숫자가 표시됩니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | Icon | Text | Content |
|------|------|------|---------|
| \`large\` | 30px | 11px | 레이블 (좋아요, 댓글...) |
| \`medium\` | 24px | 12px | 레이블 (좋아요, 댓글...) |
| \`small\` | 18px | 12px | 숫자 (count) |

### Type

| Type | Label |
|------|-------|
| \`like\` | 좋아요 |
| \`comment\` | 댓글 |
| \`share\` | 공유 |
| \`bookmark\` | 저장 |

\`\`\`tsx
import { ReactionVertical } from '@/components/Reaction';

<ReactionVertical type="like" size="large" />
<ReactionVertical type="comment" size="small" count={15} selected />
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["like","comment","share","bookmark"],description:"리액션 타입",table:{type:{summary:"ReactionType"},defaultValue:{summary:"like"}}},size:{control:"select",options:["large","medium","small"],description:"사이즈",table:{type:{summary:"ReactionVerticalSize"},defaultValue:{summary:"large"}}},selected:{control:"boolean",description:"선택 상태",table:{defaultValue:{summary:"false"}}},showLabel:{control:"boolean",description:"레이블/숫자 표시",table:{defaultValue:{summary:"true"}}},count:{control:"number",description:"카운트 값 (small 사이즈)",table:{defaultValue:{summary:"0"}}}}},i={args:{type:"like",size:"large",selected:!1,showLabel:!0,count:15}},c={name:"Size",render:()=>{const l=["like","comment","share","bookmark"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(a,{label:"Large (30px)",desc:"큰 아이콘 + 레이블 (11px). gap=4px.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{children:l.map(t=>e.jsx(r,{type:t,size:"large"},t))}),e.jsx(n,{children:l.map(t=>e.jsx(r,{type:t,size:"large",selected:!0},`${t}-sel`))})]})}),e.jsx(a,{label:"Medium (24px)",desc:"기본 아이콘 + 레이블 (12px). gap=2px.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{children:l.map(t=>e.jsx(r,{type:t,size:"medium"},t))}),e.jsx(n,{children:l.map(t=>e.jsx(r,{type:t,size:"medium",selected:!0},`${t}-sel`))})]})}),e.jsx(a,{label:"Small (18px)",desc:"작은 아이콘 + 숫자 (12px). gap=2px.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{children:l.map(t=>e.jsx(r,{type:t,size:"small",count:15},t))}),e.jsx(n,{children:l.map(t=>e.jsx(r,{type:t,size:"small",count:15,selected:!0},`${t}-sel`))})]})})]})}},d={name:"State",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(a,{label:"Default",desc:"기본 상태. 아웃라인 아이콘이 표시됩니다.",children:e.jsxs(n,{children:[e.jsx(r,{type:"like"}),e.jsx(r,{type:"comment"}),e.jsx(r,{type:"share"}),e.jsx(r,{type:"bookmark"})]})}),e.jsx(a,{label:"Selected",desc:"선택 상태. 채워진 아이콘이 표시됩니다.",children:e.jsxs(n,{children:[e.jsx(r,{type:"like",selected:!0}),e.jsx(r,{type:"comment",selected:!0}),e.jsx(r,{type:"share",selected:!0}),e.jsx(r,{type:"bookmark",selected:!0})]})})]})},p={name:"Matrix",render:()=>{const l=["like","comment","share","bookmark"],t=["large","medium","small"];return e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif"},children:[e.jsxs("thead",{children:[e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"left",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Size"}),l.map(o=>e.jsx("th",{colSpan:2,style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",textAlign:"center"},children:o},o))]}),e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)"}}),l.map(o=>[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"4px 8px",fontSize:10,fontWeight:400,textAlign:"center",color:"var(--color-neutral-foreground-subtle-3)"},children:"default"},`${o}-d`),e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"4px 8px",fontSize:10,fontWeight:400,textAlign:"center",color:"var(--color-neutral-foreground-subtle-3)"},children:"selected"},`${o}-s`)])]})]}),e.jsx("tbody",{children:t.map(o=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 16px",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",whiteSpace:"nowrap"},children:o}),l.map(s=>[e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 16px",textAlign:"center",verticalAlign:"middle"},children:e.jsx(r,{type:s,size:o,count:15})},`${s}-d`),e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 16px",textAlign:"center",verticalAlign:"middle"},children:e.jsx(r,{type:s,size:o,count:15,selected:!0})},`${s}-s`)])]},o))})]})}};var x,m,u;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'like',
    size: 'large',
    selected: false,
    showLabel: true,
    count: 15
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,g,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Size',
  render: () => {
    const types: ReactionType[] = ['like', 'comment', 'share', 'bookmark'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }}>
        <Block label="Large (30px)" desc="큰 아이콘 + 레이블 (11px). gap=4px.">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <Row>{types.map(t => <ReactionVertical key={t} type={t} size="large" />)}</Row>
            <Row>{types.map(t => <ReactionVertical key={\`\${t}-sel\`} type={t} size="large" selected />)}</Row>
          </div>
        </Block>
        <Block label="Medium (24px)" desc="기본 아이콘 + 레이블 (12px). gap=2px.">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <Row>{types.map(t => <ReactionVertical key={t} type={t} size="medium" />)}</Row>
            <Row>{types.map(t => <ReactionVertical key={\`\${t}-sel\`} type={t} size="medium" selected />)}</Row>
          </div>
        </Block>
        <Block label="Small (18px)" desc="작은 아이콘 + 숫자 (12px). gap=2px.">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <Row>{types.map(t => <ReactionVertical key={t} type={t} size="small" count={15} />)}</Row>
            <Row>{types.map(t => <ReactionVertical key={\`\${t}-sel\`} type={t} size="small" count={15} selected />)}</Row>
          </div>
        </Block>
      </div>;
  }
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,h,b;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'State',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Default" desc="기본 상태. 아웃라인 아이콘이 표시됩니다.">
        <Row>
          <ReactionVertical type="like" />
          <ReactionVertical type="comment" />
          <ReactionVertical type="share" />
          <ReactionVertical type="bookmark" />
        </Row>
      </Block>
      <Block label="Selected" desc="선택 상태. 채워진 아이콘이 표시됩니다.">
        <Row>
          <ReactionVertical type="like" selected />
          <ReactionVertical type="comment" selected />
          <ReactionVertical type="share" selected />
          <ReactionVertical type="bookmark" selected />
        </Row>
      </Block>
    </div>
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,j,z;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const types: ReactionType[] = ['like', 'comment', 'share', 'bookmark'];
    const sizes: ReactionVerticalSize[] = ['large', 'medium', 'small'];
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
                  <ReactionVertical type={t} size={sz} count={15} />
                </td>, <td key={\`\${t}-s\`} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '12px 16px',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}>
                  <ReactionVertical type={t} size={sz} count={15} selected />
                </td>])}
            </tr>)}
        </tbody>
      </table>;
  }
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const $=["Playground","Size","State","Matrix"];export{p as Matrix,i as Playground,c as Size,d as State,$ as __namedExportsOrder,A as default};
