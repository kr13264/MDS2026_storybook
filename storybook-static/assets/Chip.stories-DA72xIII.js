import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as ae}from"./index-Bc2G9s8g.js";import{I as re}from"./Icon-Bs3x4phG.js";const se=()=>e.jsx("svg",{width:10,height:10,viewBox:"0 0 10 10",fill:"none",children:e.jsx("path",{d:"M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})}),ie={sm:{height:32,iconHeadSize:14,thumbnailSize:24},md:{height:36,iconHeadSize:16,thumbnailSize:28}},l=({type:a="label",size:t="md",label:r="레이블",selected:p=!1,disabled:s=!1,multiSelect:u=!1,iconHead:b,iconTail:L,thumbnail:W,onClick:$,onRemove:R,className:ee=""})=>{const i=ie[t],m=u&&p,T=p&&!u,h=a==="iconOnly",B=a==="thumbnail",f=!!b&&a==="label",I=!!L&&a==="label"&&!u;let g;T?g="var(--color-primary-foreground-default, #03a94d)":m?g="var(--color-primary-background-subtle-1, #e6f9ee)":g="var(--color-neutral-background-default, #fff)";let y;T?y="1px solid transparent":m?y="1px solid var(--color-primary-foreground-default, #03a94d)":y="1px solid var(--color-neutral-stroke-subtle-1, rgba(0,0,0,0.1))";let x;s?x="var(--color-neutral-foreground-disabled, rgba(0,0,0,0.2))":T?x="var(--color-neutral-foreground-static-white, #fff)":m?x="var(--color-primary-foreground-default, #03a94d)":x="var(--color-neutral-foreground-default, #000)";let d,c;h?(d=0,c=0):B?(d=4,c=t==="sm"?10:12):m?f?(d=t==="sm"?8:10,c=t==="sm"?10:12):(d=t==="sm"?10:12,c=t==="sm"?10:12):f&&I?(d=t==="sm"?8:10,c=t==="sm"?8:10):f?(d=t==="sm"?8:10,c=t==="sm"?10:12):I?(d=t==="sm"?10:12,c=t==="sm"?8:10):(d=t==="sm"?10:12,c=t==="sm"?10:12);const le=m?8:h?0:4;return e.jsxs("button",{onClick:s?void 0:$,disabled:s,className:ee,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:le,height:i.height,width:h?i.height:void 0,minHeight:i.height,maxHeight:i.height,...h?{minWidth:i.height,maxWidth:i.height}:{paddingLeft:d,paddingRight:c},borderRadius:999,border:y,background:g,color:x,fontFamily:"var(--typography-font-family-default, Pretendard, -apple-system, sans-serif)",fontSize:"var(--typography-font-size-label-x-small, 14px)",fontWeight:400,lineHeight:"var(--typography-line-height-label-x-small, 19px)",letterSpacing:"var(--typography-letter-spacing-default, -0.3px)",cursor:s?"not-allowed":"pointer",whiteSpace:"nowrap",outline:"none",flexShrink:0},children:[B&&e.jsxs("span",{style:{width:i.thumbnailSize,height:i.thumbnailSize,borderRadius:"50%",overflow:"hidden",flexShrink:0,position:"relative"},children:[W?e.jsx("img",{src:W,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):e.jsx("span",{style:{width:"100%",height:"100%",display:"block",backgroundColor:"var(--color-neutral-background-raised-1, #eee)",borderRadius:"50%"}}),e.jsx("span",{style:{position:"absolute",inset:0,backgroundColor:"var(--color-neutral-background-dimmed-ghost, rgba(0,0,0,0.03))",borderRadius:"50%"}})]}),f&&e.jsx("span",{style:{width:i.iconHeadSize,height:i.iconHeadSize,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:b}),h&&e.jsx("span",{style:{width:i.iconHeadSize,height:i.iconHeadSize,display:"flex",alignItems:"center",justifyContent:"center"},children:b??e.jsx(re,{name:"refresh",variant:"outlined",size:t==="sm"?"sm":"xs"})}),(a==="label"||B)&&e.jsx("span",{style:{textAlign:"center"},children:r}),I&&e.jsx("span",{style:{width:10,height:10,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:L}),m&&e.jsx("span",{onClick:te=>{te.stopPropagation(),R==null||R()},style:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,cursor:"pointer"},children:e.jsx(se,{})})]})};l.displayName="Chip";l.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{type:{required:!1,tsType:{name:"union",raw:"'label' | 'iconOnly' | 'thumbnail'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'iconOnly'"},{name:"literal",value:"'thumbnail'"}]},description:"칩 타입",defaultValue:{value:"'label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"사이즈",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"레이블 텍스트 (type=label | thumbnail)",defaultValue:{value:"'레이블'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"선택 상태",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성 상태",defaultValue:{value:"false",computed:!1}},multiSelect:{required:!1,tsType:{name:"boolean"},description:"다중 선택 모드 — 선택 시 우측에 닫기 아이콘 표시",defaultValue:{value:"false",computed:!1}},iconHead:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"좌측 아이콘"},iconTail:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"우측 아이콘"},thumbnail:{required:!1,tsType:{name:"string"},description:"썸네일 이미지 URL (type=thumbnail)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 핸들러"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"닫기/제거 핸들러 (multiSelect 모드)"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const v=()=>e.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",width:"100%",height:"100%",children:[e.jsx("circle",{cx:"7",cy:"7",r:"4.5"}),e.jsx("path",{d:"M11 11l2.5 2.5"})]}),A=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M8 2l1.5 3.5 3.5.5-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 2z"})}),H=()=>e.jsx("svg",{viewBox:"0 0 10 10",fill:"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M3.5 2l3.5 3-3.5 3"})}),o=({children:a,gap:t=8})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:t},children:a}),n=({label:a,desc:t,children:r})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:a}),t&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:t}),r]}),ne=({children:a})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:a}),pe={title:"Components/Chip",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
        `.trim()}}},argTypes:{type:{control:"select",options:["label","iconOnly","thumbnail"],description:"칩 타입",table:{type:{summary:"ChipType"},defaultValue:{summary:"label"}}},size:{control:"select",options:["sm","md"],description:"사이즈",table:{type:{summary:"ChipSize"},defaultValue:{summary:"md"}}},label:{control:"text",description:"레이블 텍스트"},selected:{control:"boolean",description:"선택 상태",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성 상태",table:{defaultValue:{summary:"false"}}},multiSelect:{control:"boolean",description:"다중 선택 모드 (선택 시 닫기 아이콘)",table:{defaultValue:{summary:"false"}}},iconHead:{control:!1,description:"좌측 아이콘 (ReactNode)"},iconTail:{control:!1,description:"우측 아이콘 (ReactNode)"},thumbnail:{control:"text",description:"썸네일 이미지 URL (type=thumbnail)"}}},j={args:{type:"label",size:"md",label:"레이블",selected:!1,disabled:!1,multiSelect:!1}},S={name:"Size",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(n,{label:"Measurement",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Attribute","sm","md"].map(a=>e.jsx("th",{style:{padding:"8px 24px",textAlign:"center",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)",...a!=="Attribute"?{background:"var(--color-neutral-background-separated-1)"}:{}},children:a},a))})}),e.jsx("tbody",{children:[["Height","32px","36px"],["Font size","14px","14px"],["Font weight","400","400"],["Padding H","10px","12px"],["Icon size","14px","16px"],["Thumbnail","24px","28px"],["Radius","999","999"]].map(a=>e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:a.map((t,r)=>e.jsx("td",{style:{padding:"8px 24px",textAlign:"center",color:r===0?"var(--color-neutral-foreground-subtle-1)":"var(--color-neutral-foreground-default)",fontWeight:r===0?600:400},children:t},r))},a[0]))})]})})}),e.jsx(n,{label:"Usage",children:e.jsx(o,{gap:8,children:["sm","md"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(l,{label:"레이블",size:a}),e.jsx(ne,{children:a})]},a))})})]})},k={name:"State",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(n,{label:"enabled",desc:"기본 상태.",children:e.jsx(l,{label:"레이블"})}),e.jsx(n,{label:"selected",desc:"선택된 상태. Primary 배경이 적용됩니다.",children:e.jsx(l,{label:"레이블",selected:!0})}),e.jsx(n,{label:"disabled",desc:"비활성 상태.",children:e.jsxs(o,{gap:8,children:[e.jsx(l,{label:"레이블",disabled:!0}),e.jsx(l,{label:"레이블",disabled:!0,selected:!0})]})})]})},C={name:"Contents",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(n,{label:"label only",desc:"기본 텍스트 칩.",children:e.jsxs(o,{gap:8,children:[e.jsx(l,{label:"전체"}),e.jsx(l,{label:"동영상"}),e.jsx(l,{label:"이미지"})]})}),e.jsx(n,{label:"icon + label",desc:"좌측 아이콘과 텍스트 조합.",children:e.jsxs(o,{gap:8,children:[e.jsx(l,{label:"검색",iconHead:e.jsx(v,{})}),e.jsx(l,{label:"즐겨찾기",iconHead:e.jsx(A,{}),selected:!0})]})}),e.jsx(n,{label:"iconOnly",desc:"아이콘만 표시.",children:e.jsxs(o,{gap:8,children:[e.jsx(l,{type:"iconOnly",iconHead:e.jsx(v,{})}),e.jsx(l,{type:"iconOnly",iconHead:e.jsx(A,{}),selected:!0}),e.jsx(l,{type:"iconOnly",iconHead:e.jsx(v,{}),disabled:!0})]})}),e.jsx(n,{label:"iconTail",desc:"레이블 우측에 보조 아이콘을 표시합니다.",children:e.jsxs(o,{gap:8,children:[e.jsx(l,{label:"더보기",iconTail:e.jsx(H,{})}),e.jsx(l,{label:"더보기",iconTail:e.jsx(H,{}),selected:!0}),e.jsx(l,{label:"검색",iconHead:e.jsx(v,{}),iconTail:e.jsx(H,{})})]})}),e.jsx(n,{label:"thumbnail",desc:"좌측에 원형 썸네일 이미지를 표시합니다. (sm=24px, md=28px)",children:e.jsxs(o,{gap:8,children:[e.jsx(l,{type:"thumbnail",label:"프로필",size:"sm",thumbnail:"https://i.pravatar.cc/48?u=a"}),e.jsx(l,{type:"thumbnail",label:"프로필",size:"md",thumbnail:"https://i.pravatar.cc/56?u=b"}),e.jsx(l,{type:"thumbnail",label:"프로필",size:"sm",thumbnail:"https://i.pravatar.cc/48?u=c",selected:!0}),e.jsx(l,{type:"thumbnail",label:"프로필",size:"md",thumbnail:"https://i.pravatar.cc/56?u=d",selected:!0})]})}),e.jsx(n,{label:"thumbnail + multiSelect",desc:"썸네일 칩의 다중 선택 모드.",children:e.jsxs(o,{gap:8,children:[e.jsx(l,{type:"thumbnail",label:"사용자",size:"sm",thumbnail:"https://i.pravatar.cc/48?u=e",multiSelect:!0,selected:!0}),e.jsx(l,{type:"thumbnail",label:"사용자",size:"md",thumbnail:"https://i.pravatar.cc/56?u=f",multiSelect:!0,selected:!0})]})}),e.jsx(n,{label:"multiSelect",desc:"선택 시 우측에 닫기(×) 아이콘이 표시됩니다.",children:e.jsxs(o,{gap:8,children:[e.jsx(l,{label:"디자인",multiSelect:!0}),e.jsx(l,{label:"개발",multiSelect:!0,selected:!0}),e.jsx(l,{label:"기획",iconHead:e.jsx(A,{}),multiSelect:!0,selected:!0})]})})]})},w={name:"MultiSelect",render:()=>{const a=["전체","동영상","이미지","뉴스","쇼핑","지도"],[t,r]=ae.useState([]),p=s=>{r(u=>u.includes(s)?u.filter(b=>b!==s):[...u,s])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"Pretendard, sans-serif"},children:[e.jsx("p",{style:{fontSize:12,color:"var(--color-neutral-foreground-subtle-3)",margin:0},children:"클릭해서 선택/해제해보세요"}),e.jsx(o,{gap:8,children:a.map(s=>e.jsx(l,{label:s,multiSelect:!0,selected:t.includes(s),onClick:()=>p(s),onRemove:()=>p(s)},s))}),e.jsxs("p",{style:{fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:0},children:["선택됨: ",t.length>0?t.join(", "):"없음"]})]})}},z={name:"Matrix",render:()=>{const a=["sm","md"],t=[{label:"enabled",selected:!1,disabled:!1},{label:"selected",selected:!0,disabled:!1},{label:"disabled",selected:!1,disabled:!0}];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"State \\ Size"}),a.map(r=>e.jsx("th",{style:{padding:"8px 24px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",textAlign:"center"},children:r},r))]})}),e.jsx("tbody",{children:t.map(r=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:r.label}),a.map(p=>e.jsx("td",{style:{padding:"12px 24px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(l,{label:"레이블",size:p,selected:r.selected,disabled:r.disabled})},p))]},r.label))})]})})}};var P,F,M;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'label',
    size: 'md',
    label: '레이블',
    selected: false,
    disabled: false,
    multiSelect: false
  }
}`,...(M=(F=j.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var O,D,q;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(D=S.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var V,N,_;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(N=k.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var U,X,E;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(E=(X=C.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};var G,J,K;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;z.parameters={...z.parameters,docs:{...(Q=z.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ue=["Playground","Sizes","States","Contents","MultiSelectDemo","Matrix"];export{C as Contents,z as Matrix,w as MultiSelectDemo,j as Playground,S as Sizes,k as States,ue as __namedExportsOrder,pe as default};
