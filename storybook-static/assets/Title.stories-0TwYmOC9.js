import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a as t}from"./Indicator-DD30Uc0C.js";const a=({label:l,desc:c,children:o})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:l}),c&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:c}),o]}),r=({children:l})=>e.jsx("div",{style:{width:375,padding:"0 16px",backgroundColor:"var(--color-neutral-background-default)",border:"1px solid var(--color-neutral-stroke-divider)",borderRadius:8},children:l}),P={title:"Components/Header/Title",component:t,parameters:{layout:"centered",docs:{description:{component:`
네비게이션 헤더 타이틀 바 컴포넌트입니다.
좌측 정렬(Left)과 중앙 정렬(Center) 두 가지 레이아웃을 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Layout

| Layout | Description |
|--------|-------------|
| \`Left\` | 타이틀이 좌측 정렬됩니다 (기본) |
| \`Center\` | 타이틀이 중앙 정렬됩니다 |

### Slots

| Slot | Description |
|------|-------------|
| \`headIcon\` | Leading 영역 (기본: ← 뒤로가기) |
| \`tailIcon\` | Trailing 영역 (기본: × 닫기) |
| \`titlePrefix\` | 타이틀 앞 아이콘 |
| \`titleSuffix\` | 타이틀 뒤 아이콘 |

\`\`\`tsx
import { HeaderTitle } from '@/components/Header';

<HeaderTitle title="페이지 제목" layout="Left" />
<HeaderTitle title="페이지 제목" layout="Center" />
\`\`\`
        `.trim()}}},argTypes:{layout:{control:"select",options:["Left","Center"],description:"레이아웃",table:{type:{summary:"HeaderTitleLayout"},defaultValue:{summary:"Left"}}},title:{control:"text",description:"타이틀 텍스트",table:{defaultValue:{summary:"타이틀"}}},showHeadIcon:{control:"boolean",description:"Leading 아이콘 표시",table:{defaultValue:{summary:"true"}}},showTailIcon:{control:"boolean",description:"Trailing 아이콘 표시",table:{defaultValue:{summary:"true"}}},showTitlePrefix:{control:"boolean",description:"타이틀 앞 아이콘 표시",table:{defaultValue:{summary:"false"}}},showTitleSuffix:{control:"boolean",description:"타이틀 뒤 아이콘 표시",table:{defaultValue:{summary:"false"}}}}},s={args:{title:"타이틀",layout:"Left",showHeadIcon:!0,showTailIcon:!0,showTitlePrefix:!1,showTitleSuffix:!1},render:l=>e.jsx(r,{children:e.jsx(t,{...l})})},i={name:"Layout",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(a,{label:"Left",desc:"타이틀이 좌측에 정렬되며, headIcon 옆에 위치합니다.",children:e.jsx(r,{children:e.jsx(t,{title:"타이틀",layout:"Left"})})}),e.jsx(a,{label:"Center",desc:"타이틀이 중앙에 정렬되며, headIcon/tailIcon이 양 끝에 위치합니다.",children:e.jsx(r,{children:e.jsx(t,{title:"타이틀",layout:"Center"})})})]})},n={name:"Slots",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(a,{label:"All Slots",desc:"모든 슬롯이 활성화된 상태입니다.",children:e.jsx(r,{children:e.jsx(t,{title:"타이틀",layout:"Left",showTitlePrefix:!0,showTitleSuffix:!0})})}),e.jsx(a,{label:"headIcon Only",desc:"tailIcon을 숨긴 상태입니다.",children:e.jsx(r,{children:e.jsx(t,{title:"타이틀",layout:"Left",showTailIcon:!1})})}),e.jsx(a,{label:"tailIcon Only",desc:"headIcon을 숨긴 상태입니다.",children:e.jsx(r,{children:e.jsx(t,{title:"타이틀",layout:"Left",showHeadIcon:!1})})}),e.jsx(a,{label:"Title Only",desc:"양쪽 아이콘을 모두 숨긴 상태입니다.",children:e.jsx(r,{children:e.jsx(t,{title:"타이틀",layout:"Left",showHeadIcon:!1,showTailIcon:!1})})})]})},d={name:"Matrix",render:()=>{const l=["Left","Center"],c=[{label:"Default",props:{}},{label:"titlePrefix",props:{showTitlePrefix:!0}},{label:"titleSuffix",props:{showTitleSuffix:!0}},{label:"Prefix + Suffix",props:{showTitlePrefix:!0,showTitleSuffix:!0}},{label:"No headIcon",props:{showHeadIcon:!1}},{label:"No tailIcon",props:{showTailIcon:!1}}];return e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13,width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"left",fontWeight:600},children:"Variant"}),l.map(o=>e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"center",fontWeight:600},children:o},o))]})}),e.jsx("tbody",{children:c.map(({label:o,props:I})=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",color:"var(--color-neutral-foreground-subtle-1)"},children:o}),l.map(u=>e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 16px"},children:e.jsx("div",{style:{width:280},children:e.jsx(t,{title:"타이틀",layout:u,...I})})},u))]},o))})]})}};var f,p,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: '타이틀',
    layout: 'Left',
    showHeadIcon: true,
    showTailIcon: true,
    showTitlePrefix: false,
    showTitleSuffix: false
  },
  render: args => <Phone>
      <HeaderTitle {...args} />
    </Phone>
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,y,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Layout',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="Left" desc="타이틀이 좌측에 정렬되며, headIcon 옆에 위치합니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" />
        </Phone>
      </Block>
      <Block label="Center" desc="타이틀이 중앙에 정렬되며, headIcon/tailIcon이 양 끝에 위치합니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Center" />
        </Phone>
      </Block>
    </div>
}`,...(m=(y=i.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var b,g,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Slots',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="All Slots" desc="모든 슬롯이 활성화된 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" showTitlePrefix showTitleSuffix />
        </Phone>
      </Block>
      <Block label="headIcon Only" desc="tailIcon을 숨긴 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" showTailIcon={false} />
        </Phone>
      </Block>
      <Block label="tailIcon Only" desc="headIcon을 숨긴 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" showHeadIcon={false} />
        </Phone>
      </Block>
      <Block label="Title Only" desc="양쪽 아이콘을 모두 숨긴 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" showHeadIcon={false} showTailIcon={false} />
        </Phone>
      </Block>
    </div>
}`,...(T=(g=n.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var j,v,w;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const layouts: HeaderTitleLayout[] = ['Left', 'Center'];
    const configs = [{
      label: 'Default',
      props: {}
    }, {
      label: 'titlePrefix',
      props: {
        showTitlePrefix: true
      }
    }, {
      label: 'titleSuffix',
      props: {
        showTitleSuffix: true
      }
    }, {
      label: 'Prefix + Suffix',
      props: {
        showTitlePrefix: true,
        showTitleSuffix: true
      }
    }, {
      label: 'No headIcon',
      props: {
        showHeadIcon: false
      }
    }, {
      label: 'No tailIcon',
      props: {
        showTailIcon: false
      }
    }];
    return <table style={{
      borderCollapse: 'collapse',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 13,
      width: '100%'
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
          }}>Variant</th>
            {layouts.map(l => <th key={l} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '8px 12px',
            textAlign: 'center',
            fontWeight: 600
          }}>{l}</th>)}
          </tr>
        </thead>
        <tbody>
          {configs.map(({
          label,
          props
        }) => <tr key={label} style={{
          background: 'var(--color-neutral-background-default)'
        }}>
              <td style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '8px 12px',
            color: 'var(--color-neutral-foreground-subtle-1)'
          }}>{label}</td>
              {layouts.map(l => <td key={l} style={{
            border: '1px solid var(--color-neutral-stroke-divider)',
            padding: '12px 16px'
          }}>
                  <div style={{
              width: 280
            }}>
                    <HeaderTitle title="타이틀" layout={l} {...props} />
                  </div>
                </td>)}
            </tr>)}
        </tbody>
      </table>;
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const k=["Playground","Layout","Slots","Matrix"],H=Object.freeze(Object.defineProperty({__proto__:null,Layout:i,Matrix:d,Playground:s,Slots:n,__namedExportsOrder:k,default:P},Symbol.toStringTag,{value:"Module"}));export{s as P,H as T};
