import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as p}from"./index-Bc2G9s8g.js";import{I as l,i as u}from"./Icon-Bs3x4phG.js";const d=({label:s,desc:r,children:n})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:s}),r&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:r}),n]}),B={title:"Assets/Icon/container.icon",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
MDS 아이콘 라이브러리입니다. 52개의 아이콘과 filled/outlined 스타일을 지원합니다.

\`\`\`tsx
import { Icon } from '@/components/Icon';

<Icon name="like" />
<Icon name="search" variant="filled" size="xl" />
\`\`\`
        `.trim()}}}},a={name:"All Icons",render:()=>{const[s,r]=p.useState("outlined"),[n,z]=p.useState(""),c=u.filter(t=>t.toLowerCase().includes(n.toLowerCase()));return e.jsxs("div",{style:{fontFamily:"Pretendard, sans-serif",width:640},children:[e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[e.jsx("input",{type:"text",placeholder:"아이콘 검색...",value:n,onChange:t=>z(t.target.value),style:{flex:1,padding:"8px 12px",border:"1px solid var(--color-neutral-stroke-default)",borderRadius:8,fontSize:14,outline:"none"}}),e.jsx("button",{onClick:()=>r(t=>t==="outlined"?"filled":"outlined"),style:{padding:"8px 16px",border:"1px solid var(--color-neutral-stroke-default)",borderRadius:8,fontSize:13,cursor:"pointer",background:"var(--color-neutral-background-raised-1)"},children:s})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gap:4},children:c.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:"12px 4px",borderRadius:8,cursor:"default"},title:t,children:[e.jsx(l,{name:t,variant:s,size:"lg"}),e.jsx("span",{style:{fontSize:10,color:"var(--color-neutral-foreground-subtle-3)",textAlign:"center",wordBreak:"break-all",lineHeight:1.3},children:t})]},t))}),e.jsxs("p",{style:{fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",marginTop:12},children:[c.length," / ",u.length," icons"]})]})}},o={name:"Size",render:()=>{const s=["xl","lg","md","sm","xs","2xs","3xs"];return e.jsx(d,{label:"Sizes",desc:"xl(30px) ~ 3xs(10px)까지 7단계 사이즈를 지원합니다.",children:e.jsx("div",{style:{display:"flex",alignItems:"center",gap:20},children:s.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(l,{name:"add",size:r}),e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)"},children:r})]},r))})})}},i={name:"Style",render:()=>{const s=["like","comment","search","notification","setting","person"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(d,{label:"Outlined",desc:"기본 아웃라인 스타일.",children:e.jsx("div",{style:{display:"flex",gap:16},children:s.map(r=>e.jsx(l,{name:r,variant:"outlined",size:"lg"},r))})}),e.jsx(d,{label:"Filled",desc:"채워진 스타일.",children:e.jsx("div",{style:{display:"flex",gap:16},children:s.map(r=>e.jsx(l,{name:r,variant:"filled",size:"lg"},r))})})]})}};var m,x,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'All Icons',
  render: () => {
    const [variant, setVariant] = useState<IconStyle>('outlined');
    const [search, setSearch] = useState('');
    const filtered = iconNames.filter(n => n.toLowerCase().includes(search.toLowerCase()));
    return <div style={{
      fontFamily: 'Pretendard, sans-serif',
      width: 640
    }}>
        <div style={{
        display: 'flex',
        gap: 8,
        marginBottom: 16
      }}>
          <input type="text" placeholder="아이콘 검색..." value={search} onChange={e => setSearch(e.target.value)} style={{
          flex: 1,
          padding: '8px 12px',
          border: '1px solid var(--color-neutral-stroke-default)',
          borderRadius: 8,
          fontSize: 14,
          outline: 'none'
        }} />
          <button onClick={() => setVariant(v => v === 'outlined' ? 'filled' : 'outlined')} style={{
          padding: '8px 16px',
          border: '1px solid var(--color-neutral-stroke-default)',
          borderRadius: 8,
          fontSize: 13,
          cursor: 'pointer',
          background: 'var(--color-neutral-background-raised-1)'
        }}>
            {variant}
          </button>
        </div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: 4
      }}>
          {filtered.map(name => <div key={name} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          padding: '12px 4px',
          borderRadius: 8,
          cursor: 'default'
        }} title={name}>
              <Icon name={name} variant={variant} size="lg" />
              <span style={{
            fontSize: 10,
            color: 'var(--color-neutral-foreground-subtle-3)',
            textAlign: 'center',
            wordBreak: 'break-all',
            lineHeight: 1.3
          }}>
                {name}
              </span>
            </div>)}
        </div>
        <p style={{
        fontSize: 11,
        color: 'var(--color-neutral-foreground-subtle-3)',
        marginTop: 12
      }}>
          {filtered.length} / {iconNames.length} icons
        </p>
      </div>;
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,y,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Size',
  render: () => {
    const sizes: IconSize[] = ['xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs'];
    return <Block label="Sizes" desc="xl(30px) ~ 3xs(10px)까지 7단계 사이즈를 지원합니다.">
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }}>
          {sizes.map(s => <div key={s} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <Icon name="add" size={s} />
              <span style={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: 11,
            color: 'var(--color-neutral-foreground-subtle-3)'
          }}>{s}</span>
            </div>)}
        </div>
      </Block>;
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,S,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Style',
  render: () => {
    const samples = ['like', 'comment', 'search', 'notification', 'setting', 'person'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }}>
        <Block label="Outlined" desc="기본 아웃라인 스타일.">
          <div style={{
          display: 'flex',
          gap: 16
        }}>
            {samples.map(n => <Icon key={n} name={n} variant="outlined" size="lg" />)}
          </div>
        </Block>
        <Block label="Filled" desc="채워진 스타일.">
          <div style={{
          display: 'flex',
          gap: 16
        }}>
            {samples.map(n => <Icon key={n} name={n} variant="filled" size="lg" />)}
          </div>
        </Block>
      </div>;
  }
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const C=["AllIcons","Sizes","Styles"];export{a as AllIcons,o as Sizes,i as Styles,C as __namedExportsOrder,B as default};
