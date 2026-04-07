import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{a as t}from"./Block-7ho0r3YM.js";import"./index-Bc2G9s8g.js";const o=({label:l,desc:i,children:r})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:l}),i&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:i}),r]}),a=({children:l})=>e.jsx("div",{style:{width:375,padding:"0 16px",backgroundColor:"var(--color-neutral-background-default)",border:"1px solid var(--color-neutral-stroke-divider)",borderRadius:8},children:l}),B={title:"Components/Header/Title",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
| \`front\` | Leading 영역 (기본: ← 뒤로가기) |
| \`back\` | Trailing 영역 (기본: × 닫기) |
| \`titlePrefixIcon\` | 타이틀 앞 아이콘 |
| \`titleSuffixIcon\` | 타이틀 뒤 아이콘 |

\`\`\`tsx
import { HeaderTitle } from '@/components/Header';

<HeaderTitle title="페이지 제목" layout="Left" />
<HeaderTitle title="페이지 제목" layout="Center" />
\`\`\`
        `.trim()}}},argTypes:{layout:{control:"select",options:["Left","Center"],description:"레이아웃",table:{type:{summary:"HeaderTitleLayout"},defaultValue:{summary:"Left"}}},title:{control:"text",description:"타이틀 텍스트",table:{defaultValue:{summary:"타이틀"}}},leadingSlot:{control:"boolean",description:"Leading 슬롯 표시",table:{defaultValue:{summary:"true"}}},trailingSlot:{control:"boolean",description:"Trailing 슬롯 표시",table:{defaultValue:{summary:"true"}}},titlePrefix:{control:"boolean",description:"타이틀 앞 아이콘 표시",table:{defaultValue:{summary:"false"}}},titleSuffix:{control:"boolean",description:"타이틀 뒤 아이콘 표시",table:{defaultValue:{summary:"false"}}}}},n={args:{title:"타이틀",layout:"Left",leadingSlot:!0,trailingSlot:!0,titlePrefix:!1,titleSuffix:!1},render:l=>e.jsx(a,{children:e.jsx(t,{...l})})},s={name:"Layout",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(o,{label:"Left",desc:"타이틀이 좌측에 정렬되며, Leading 아이콘 옆에 위치합니다.",children:e.jsx(a,{children:e.jsx(t,{title:"타이틀",layout:"Left"})})}),e.jsx(o,{label:"Center",desc:"타이틀이 중앙에 정렬되며, Leading/Trailing 아이콘이 양 끝에 위치합니다.",children:e.jsx(a,{children:e.jsx(t,{title:"타이틀",layout:"Center"})})})]})},d={name:"Slots",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(o,{label:"All Slots",desc:"모든 슬롯이 활성화된 상태입니다.",children:e.jsx(a,{children:e.jsx(t,{title:"타이틀",layout:"Left",titlePrefix:!0,titleSuffix:!0})})}),e.jsx(o,{label:"Leading Only",desc:"Trailing 슬롯을 숨긴 상태입니다.",children:e.jsx(a,{children:e.jsx(t,{title:"타이틀",layout:"Left",trailingSlot:!1})})}),e.jsx(o,{label:"Trailing Only",desc:"Leading 슬롯을 숨긴 상태입니다.",children:e.jsx(a,{children:e.jsx(t,{title:"타이틀",layout:"Left",leadingSlot:!1})})}),e.jsx(o,{label:"Title Only",desc:"양쪽 슬롯을 모두 숨긴 상태입니다.",children:e.jsx(a,{children:e.jsx(t,{title:"타이틀",layout:"Left",leadingSlot:!1,trailingSlot:!1})})})]})},c={name:"Matrix",render:()=>{const l=["Left","Center"],i=[{label:"Default",props:{}},{label:"Prefix",props:{titlePrefix:!0}},{label:"Suffix",props:{titleSuffix:!0}},{label:"Prefix + Suffix",props:{titlePrefix:!0,titleSuffix:!0}},{label:"No Leading",props:{leadingSlot:!1}},{label:"No Trailing",props:{trailingSlot:!1}}];return e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:13,width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"left",fontWeight:600},children:"Variant"}),l.map(r=>e.jsx("th",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",textAlign:"center",fontWeight:600},children:r},r))]})}),e.jsx("tbody",{children:i.map(({label:r,props:k})=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)"},children:[e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"8px 12px",color:"var(--color-neutral-foreground-subtle-1)"},children:r}),l.map(u=>e.jsx("td",{style:{border:"1px solid var(--color-neutral-stroke-divider)",padding:"12px 16px"},children:e.jsx("div",{style:{width:280},children:e.jsx(t,{title:"타이틀",layout:u,...k})})},u))]},r))})]})}};var f,p,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: '타이틀',
    layout: 'Left',
    leadingSlot: true,
    trailingSlot: true,
    titlePrefix: false,
    titleSuffix: false
  },
  render: args => <Phone>
      <HeaderTitle {...args} />
    </Phone>
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,y,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Layout',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="Left" desc="타이틀이 좌측에 정렬되며, Leading 아이콘 옆에 위치합니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" />
        </Phone>
      </Block>
      <Block label="Center" desc="타이틀이 중앙에 정렬되며, Leading/Trailing 아이콘이 양 끝에 위치합니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Center" />
        </Phone>
      </Block>
    </div>
}`,...(m=(y=s.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var b,h,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Slots',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="All Slots" desc="모든 슬롯이 활성화된 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" titlePrefix titleSuffix />
        </Phone>
      </Block>
      <Block label="Leading Only" desc="Trailing 슬롯을 숨긴 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" trailingSlot={false} />
        </Phone>
      </Block>
      <Block label="Trailing Only" desc="Leading 슬롯을 숨긴 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" leadingSlot={false} />
        </Phone>
      </Block>
      <Block label="Title Only" desc="양쪽 슬롯을 모두 숨긴 상태입니다.">
        <Phone>
          <HeaderTitle title="타이틀" layout="Left" leadingSlot={false} trailingSlot={false} />
        </Phone>
      </Block>
    </div>
}`,...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var L,v,j;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const layouts: HeaderTitleLayout[] = ['Left', 'Center'];
    const configs = [{
      label: 'Default',
      props: {}
    }, {
      label: 'Prefix',
      props: {
        titlePrefix: true
      }
    }, {
      label: 'Suffix',
      props: {
        titleSuffix: true
      }
    }, {
      label: 'Prefix + Suffix',
      props: {
        titlePrefix: true,
        titleSuffix: true
      }
    }, {
      label: 'No Leading',
      props: {
        leadingSlot: false
      }
    }, {
      label: 'No Trailing',
      props: {
        trailingSlot: false
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
}`,...(j=(v=c.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const C=["Playground","Layout","Slots","Matrix"];export{s as Layout,c as Matrix,n as Playground,d as Slots,C as __namedExportsOrder,B as default};
