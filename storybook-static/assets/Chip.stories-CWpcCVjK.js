import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as M}from"./index-DRjF_FHU.js";import{C as l}from"./Chip-3GNL9kDt.js";const x=()=>e.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",width:"100%",height:"100%",children:[e.jsx("circle",{cx:"7",cy:"7",r:"4.5"}),e.jsx("path",{d:"M11 11l2.5 2.5"})]}),g=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M8 2l1.5 3.5 3.5.5-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 2z"})}),y=()=>e.jsx("svg",{viewBox:"0 0 10 10",fill:"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M3.5 2l3.5 3-3.5 3"})}),i=({children:t,gap:r=8})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:r},children:t}),s=({label:t,desc:r,children:a})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:t}),r&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:r}),a]}),O=({children:t})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:t}),_={title:"Components/Chip",component:l,parameters:{layout:"centered",sourceCode:{fe:`import { Chip } from '@/components/Chip';

<Chip type="label" size="md" label="레이블" />`,ios:`ChipBasic(
    type: .label,
    state: .enabled,
    size: .md,
    label: "레이블"
)`,aos:`@Composable
fun Preview() {
    ChipBasic(
        Type = "Label",
        State = "Enabled",
        Size = "md",
        Label = "레이블"
    )
}`},docs:{description:{component:`
선택 가능한 태그/필터 칩 컴포넌트입니다.
단일 선택과 다중 선택(태그 제거) 모드를 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`label\` | 텍스트 레이블 칩 (기본) |
| \`iconOnly\` | 아이콘만 표시 |
| \`thumbnail\` | 좌측에 원형 썸네일 이미지 + 텍스트 |

### Size

| Size | Height | Font |
|------|--------|------|
| \`sm\` | 32px | 14px |
| \`md\` | 36px | 14px |

### State

| State | Description |
|-------|-------------|
| enabled | 기본 상태 |
| selected | 선택된 상태 (Primary 배경) |
| disabled | 비활성 상태 |
| multiSelect | 선택 시 우측에 닫기 아이콘 표시 |

\`\`\`tsx
import { Chip } from '@/components/Chip';

<Chip label="전체" />
<Chip label="동영상" selected />
<Chip label="태그" multiSelect selected onRemove={() => {}} />
<Chip type="iconOnly" iconHead={<IcSearch />} />
<Chip label="레이블" iconTail={<IcArrow />} />
<Chip type="thumbnail" label="프로필" thumbnail="/avatar.jpg" />
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["label","iconOnly","thumbnail"],description:"칩 타입",table:{type:{summary:"ChipType"},defaultValue:{summary:"label"}}},size:{control:"select",options:["sm","md"],description:"사이즈",table:{type:{summary:"ChipSize"},defaultValue:{summary:"md"}}},label:{control:"text",description:"레이블 텍스트"},selected:{control:"boolean",description:"선택 상태",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성 상태",table:{defaultValue:{summary:"false"}}},multiSelect:{control:"boolean",description:"다중 선택 모드 (선택 시 닫기 아이콘)",table:{defaultValue:{summary:"false"}}},iconHead:{control:!1,description:"좌측 아이콘 (ReactNode)"},iconTail:{control:!1,description:"우측 아이콘 (ReactNode)"},thumbnail:{control:"text",description:"썸네일 이미지 URL (type=thumbnail)"}}},c={args:{type:"label",size:"md",label:"레이블",selected:!1,disabled:!1,multiSelect:!1}},d={name:"Size",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(s,{label:"Measurement",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Attribute","sm","md"].map(t=>e.jsx("th",{style:{padding:"8px 24px",textAlign:"center",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)",...t!=="Attribute"?{background:"var(--color-neutral-background-separated-1)"}:{}},children:t},t))})}),e.jsx("tbody",{children:[["Height","32px","36px"],["Font size","14px","14px"],["Font weight","400","400"],["Padding H","10px","12px"],["Icon size","14px","16px"],["Thumbnail","24px","28px"],["Radius","999","999"]].map(t=>e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:t.map((r,a)=>e.jsx("td",{style:{padding:"8px 24px",textAlign:"center",color:a===0?"var(--color-neutral-foreground-subtle-1)":"var(--color-neutral-foreground-default)",fontWeight:a===0?600:400},children:r},a))},t[0]))})]})})}),e.jsx(s,{label:"Usage",children:e.jsx(i,{gap:8,children:["sm","md"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(l,{label:"레이블",size:t}),e.jsx(O,{children:t})]},t))})})]})},p={name:"State",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(s,{label:"enabled",desc:"기본 상태.",children:e.jsx(l,{label:"레이블"})}),e.jsx(s,{label:"selected",desc:"선택된 상태. Primary 배경이 적용됩니다.",children:e.jsx(l,{label:"레이블",selected:!0})}),e.jsx(s,{label:"disabled",desc:"비활성 상태.",children:e.jsxs(i,{gap:8,children:[e.jsx(l,{label:"레이블",disabled:!0}),e.jsx(l,{label:"레이블",disabled:!0,selected:!0})]})})]})},u={name:"Contents",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(s,{label:"label only",desc:"기본 텍스트 칩.",children:e.jsxs(i,{gap:8,children:[e.jsx(l,{label:"전체"}),e.jsx(l,{label:"동영상"}),e.jsx(l,{label:"이미지"})]})}),e.jsx(s,{label:"icon + label",desc:"좌측 아이콘과 텍스트 조합.",children:e.jsxs(i,{gap:8,children:[e.jsx(l,{label:"검색",iconHead:e.jsx(x,{})}),e.jsx(l,{label:"즐겨찾기",iconHead:e.jsx(g,{}),selected:!0})]})}),e.jsx(s,{label:"iconOnly",desc:"아이콘만 표시.",children:e.jsxs(i,{gap:8,children:[e.jsx(l,{type:"iconOnly",iconHead:e.jsx(x,{})}),e.jsx(l,{type:"iconOnly",iconHead:e.jsx(g,{}),selected:!0}),e.jsx(l,{type:"iconOnly",iconHead:e.jsx(x,{}),disabled:!0})]})}),e.jsx(s,{label:"iconTail",desc:"레이블 우측에 보조 아이콘을 표시합니다.",children:e.jsxs(i,{gap:8,children:[e.jsx(l,{label:"더보기",iconTail:e.jsx(y,{})}),e.jsx(l,{label:"더보기",iconTail:e.jsx(y,{}),selected:!0}),e.jsx(l,{label:"검색",iconHead:e.jsx(x,{}),iconTail:e.jsx(y,{})})]})}),e.jsx(s,{label:"thumbnail",desc:"좌측에 원형 썸네일 이미지를 표시합니다. (sm=24px, md=28px)",children:e.jsxs(i,{gap:8,children:[e.jsx(l,{type:"thumbnail",label:"프로필",size:"sm",thumbnail:"https://i.pravatar.cc/48?u=a"}),e.jsx(l,{type:"thumbnail",label:"프로필",size:"md",thumbnail:"https://i.pravatar.cc/56?u=b"}),e.jsx(l,{type:"thumbnail",label:"프로필",size:"sm",thumbnail:"https://i.pravatar.cc/48?u=c",selected:!0}),e.jsx(l,{type:"thumbnail",label:"프로필",size:"md",thumbnail:"https://i.pravatar.cc/56?u=d",selected:!0})]})}),e.jsx(s,{label:"thumbnail + multiSelect",desc:"썸네일 칩의 다중 선택 모드.",children:e.jsxs(i,{gap:8,children:[e.jsx(l,{type:"thumbnail",label:"사용자",size:"sm",thumbnail:"https://i.pravatar.cc/48?u=e",multiSelect:!0,selected:!0}),e.jsx(l,{type:"thumbnail",label:"사용자",size:"md",thumbnail:"https://i.pravatar.cc/56?u=f",multiSelect:!0,selected:!0})]})}),e.jsx(s,{label:"multiSelect",desc:"선택 시 우측에 닫기(×) 아이콘이 표시됩니다.",children:e.jsxs(i,{gap:8,children:[e.jsx(l,{label:"디자인",multiSelect:!0}),e.jsx(l,{label:"개발",multiSelect:!0,selected:!0}),e.jsx(l,{label:"기획",iconHead:e.jsx(g,{}),multiSelect:!0,selected:!0})]})})]})},m={name:"MultiSelect",render:()=>{const t=["전체","동영상","이미지","뉴스","쇼핑","지도"],[r,a]=M.useState([]),n=o=>{a(h=>h.includes(o)?h.filter(F=>F!==o):[...h,o])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"Pretendard, sans-serif"},children:[e.jsx("p",{style:{fontSize:12,color:"var(--color-neutral-foreground-subtle-3)",margin:0},children:"클릭해서 선택/해제해보세요"}),e.jsx(i,{gap:8,children:t.map(o=>e.jsx(l,{label:o,multiSelect:!0,selected:r.includes(o),onClick:()=>n(o),onRemove:()=>n(o)},o))}),e.jsxs("p",{style:{fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:0},children:["선택됨: ",r.length>0?r.join(", "):"없음"]})]})}},b={name:"Matrix",render:()=>{const t=["sm","md"],r=[{label:"enabled",selected:!1,disabled:!1},{label:"selected",selected:!0,disabled:!1},{label:"disabled",selected:!1,disabled:!0}];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"State \\ Size"}),t.map(a=>e.jsx("th",{style:{padding:"8px 24px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",textAlign:"center"},children:a},a))]})}),e.jsx("tbody",{children:r.map(a=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:a.label}),t.map(n=>e.jsx("td",{style:{padding:"12px 24px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(l,{label:"레이블",size:n,selected:a.selected,disabled:a.disabled})},n))]},a.label))})]})})}};var f,j,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'label',
    size: 'md',
    label: '레이블',
    selected: false,
    disabled: false,
    multiSelect: false
  }
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var v,C,z;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                {['Attribute', 'sm', 'md'].map(h => <th key={h} style={{
                padding: '8px 24px',
                textAlign: 'center',
                fontWeight: 700,
                color: 'var(--color-neutral-foreground-subtle-1)',
                ...(h !== 'Attribute' ? {
                  background: 'var(--color-neutral-background-separated-1)'
                } : {})
              }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[['Height', '32px', '36px'], ['Font size', '14px', '14px'], ['Font weight', '400', '400'], ['Padding H', '10px', '12px'], ['Icon size', '14px', '16px'], ['Thumbnail', '24px', '28px'], ['Radius', '999', '999']].map(row => <tr key={row[0]} style={{
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                  {row.map((cell, i) => <td key={i} style={{
                padding: '8px 24px',
                textAlign: 'center',
                color: i === 0 ? 'var(--color-neutral-foreground-subtle-1)' : 'var(--color-neutral-foreground-default)',
                fontWeight: i === 0 ? 600 : 400
              }}>
                      {cell}
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </Block>
      <Block label="Usage">
        <Row gap={8}>
          {(['sm', 'md'] as ChipSize[]).map(s => <div key={s} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <Chip label="레이블" size={s} />
              <Caption>{s}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(z=(C=d.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var k,w,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'State',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="enabled" desc="기본 상태.">
        <Chip label="레이블" />
      </Block>
      <Block label="selected" desc="선택된 상태. Primary 배경이 적용됩니다.">
        <Chip label="레이블" selected />
      </Block>
      <Block label="disabled" desc="비활성 상태.">
        <Row gap={8}>
          <Chip label="레이블" disabled />
          <Chip label="레이블" disabled selected />
        </Row>
      </Block>
    </div>
}`,...(B=(w=p.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var A,R,T;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Contents',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="label only" desc="기본 텍스트 칩.">
        <Row gap={8}>
          <Chip label="전체" />
          <Chip label="동영상" />
          <Chip label="이미지" />
        </Row>
      </Block>
      <Block label="icon + label" desc="좌측 아이콘과 텍스트 조합.">
        <Row gap={8}>
          <Chip label="검색" iconHead={<IcSearch />} />
          <Chip label="즐겨찾기" iconHead={<IcStar />} selected />
        </Row>
      </Block>
      <Block label="iconOnly" desc="아이콘만 표시.">
        <Row gap={8}>
          <Chip type="iconOnly" iconHead={<IcSearch />} />
          <Chip type="iconOnly" iconHead={<IcStar />} selected />
          <Chip type="iconOnly" iconHead={<IcSearch />} disabled />
        </Row>
      </Block>
      <Block label="iconTail" desc="레이블 우측에 보조 아이콘을 표시합니다.">
        <Row gap={8}>
          <Chip label="더보기" iconTail={<IcArrow />} />
          <Chip label="더보기" iconTail={<IcArrow />} selected />
          <Chip label="검색" iconHead={<IcSearch />} iconTail={<IcArrow />} />
        </Row>
      </Block>
      <Block label="thumbnail" desc="좌측에 원형 썸네일 이미지를 표시합니다. (sm=24px, md=28px)">
        <Row gap={8}>
          <Chip type="thumbnail" label="프로필" size="sm" thumbnail="https://i.pravatar.cc/48?u=a" />
          <Chip type="thumbnail" label="프로필" size="md" thumbnail="https://i.pravatar.cc/56?u=b" />
          <Chip type="thumbnail" label="프로필" size="sm" thumbnail="https://i.pravatar.cc/48?u=c" selected />
          <Chip type="thumbnail" label="프로필" size="md" thumbnail="https://i.pravatar.cc/56?u=d" selected />
        </Row>
      </Block>
      <Block label="thumbnail + multiSelect" desc="썸네일 칩의 다중 선택 모드.">
        <Row gap={8}>
          <Chip type="thumbnail" label="사용자" size="sm" thumbnail="https://i.pravatar.cc/48?u=e" multiSelect selected />
          <Chip type="thumbnail" label="사용자" size="md" thumbnail="https://i.pravatar.cc/56?u=f" multiSelect selected />
        </Row>
      </Block>
      <Block label="multiSelect" desc="선택 시 우측에 닫기(×) 아이콘이 표시됩니다.">
        <Row gap={8}>
          <Chip label="디자인" multiSelect />
          <Chip label="개발" multiSelect selected />
          <Chip label="기획" iconHead={<IcStar />} multiSelect selected />
        </Row>
      </Block>
    </div>
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var H,I,P;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'MultiSelect',
  render: () => {
    const ALL_TAGS = ['전체', '동영상', '이미지', '뉴스', '쇼핑', '지도'];
    const [selected, setSelected] = useState<string[]>([]);
    const toggle = (tag: string) => {
      setSelected(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'Pretendard, sans-serif'
    }}>
        <p style={{
        fontSize: 12,
        color: 'var(--color-neutral-foreground-subtle-3)',
        margin: 0
      }}>클릭해서 선택/해제해보세요</p>
        <Row gap={8}>
          {ALL_TAGS.map(tag => <Chip key={tag} label={tag} multiSelect selected={selected.includes(tag)} onClick={() => toggle(tag)} onRemove={() => toggle(tag)} />)}
        </Row>
        <p style={{
        fontSize: 12,
        color: 'var(--color-neutral-foreground-subtle-1)',
        margin: 0
      }}>
          선택됨: {selected.length > 0 ? selected.join(', ') : '없음'}
        </p>
      </div>;
  }
}`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var L,W,D;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const sizes: ChipSize[] = ['sm', 'md'];
    const states = [{
      label: 'enabled',
      selected: false,
      disabled: false
    }, {
      label: 'selected',
      selected: true,
      disabled: false
    }, {
      label: 'disabled',
      selected: false,
      disabled: true
    }];
    return <div style={{
      fontFamily: 'Pretendard, sans-serif',
      overflowX: 'auto',
      padding: 4
    }}>
        <table style={{
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>
              <th style={{
              padding: '8px 16px 8px 0',
              textAlign: 'left',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase'
            }}>
                State \\ Size
              </th>
              {sizes.map(s => <th key={s} style={{
              padding: '8px 24px',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>
                  {s}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {states.map(st => <tr key={st.label} style={{
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '12px 16px 12px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>
                  {st.label}
                </td>
                {sizes.map(s => <td key={s} style={{
              padding: '12px 24px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                    <Chip label="레이블" size={s} selected={st.selected} disabled={st.disabled} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(D=(W=b.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const V=["Playground","Sizes","States","Contents","MultiSelectDemo","Matrix"],U=Object.freeze(Object.defineProperty({__proto__:null,Contents:u,Matrix:b,MultiSelectDemo:m,Playground:c,Sizes:d,States:p,__namedExportsOrder:V,default:_},Symbol.toStringTag,{value:"Module"}));export{U as C,c as P};
