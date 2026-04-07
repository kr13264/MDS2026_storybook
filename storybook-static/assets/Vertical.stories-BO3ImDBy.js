import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{a as s}from"./ProfileHorizontal-C3ofRhvR.js";import"./index-Bc2G9s8g.js";const o=({children:l,gap:t=24})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:t},children:l}),a=({label:l,desc:t,children:n})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:l}),t&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:t}),n]}),r="https://i.pravatar.cc/150?img=3",E={title:"Components/Profile/Vertical",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
채널을 강조할 때 사용하는 **아바타 + 텍스트** 형식의 프로필 컴포넌트입니다.
아바타 이미지, 프로필명, 서브 텍스트(시간·채널 정보 등)를 수직으로 배치합니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | Avatar | Font Size | Usage |
|------|--------|-----------|-------|
| \`default\` | 48px | 14px | 일반적인 채널/프로필 목록 |
| \`small\` | 36px | 13px | 공간이 좁은 영역 또는 보조 목록 |

### Emphasis

| Emphasis | fontWeight | Description |
|----------|------------|-------------|
| \`false\` | 400 (Regular) | 기본 상태 |
| \`true\` | 600 (SemiBold) | 채널명을 강조해야 하는 경우 |

### Selected

| Selected | Description |
|----------|-------------|
| \`false\` | 기본 상태 |
| \`true\` | 선택된 채널 — 아바타에 파란 테두리(#3283fd) 표시 |

### Contents

| Slot | Type | Description |
|------|------|-------------|
| \`src\` | string | 아바타 이미지 URL (없으면 기본 플레이스홀더) |
| \`name\` | string | 프로필/채널 이름 |
| \`info\` | string | 서브 텍스트 (시간, 채널 정보 등) |

\`\`\`tsx
import { ProfileVertical } from '@/components/Profile';

<ProfileVertical name="홍길동" info="3분 전" src="..." />
<ProfileVertical size="small" emphasis selected name="채널명" info="방금 전" src="..." />
\`\`\`
        `.trim()}}},argTypes:{size:{control:"select",options:["default","small"],description:"아바타 사이즈 (default=48px · small=36px)",table:{type:{summary:"ProfileSize"},defaultValue:{summary:"default"}}},emphasis:{control:"boolean",description:"이름 강조 — fontWeight 400 → 600",table:{defaultValue:{summary:"false"}}},selected:{control:"boolean",description:"선택 상태 — 아바타에 파란 테두리(#3283fd) 표시",table:{defaultValue:{summary:"false"}}},src:{control:"text",description:"아바타 이미지 URL"},name:{control:"text",description:"프로필/채널 이름",table:{defaultValue:{summary:"프로필명"}}},label:{control:"boolean",description:"레이블 표시 여부",table:{defaultValue:{summary:"true"}}},info:{control:"text",description:"서브 텍스트 (시간, 채널 정보 등)"}}},d={args:{size:"default",emphasis:!1,selected:!1,name:"홍길동",label:!0,info:"3분 전",src:r}},p={name:"Size",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(a,{label:"Measurement",desc:"Avatar 크기 기준으로 정의됩니다.",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Attribute","default","small"].map(l=>e.jsx("th",{style:{padding:"8px 24px",textAlign:"center",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)"},children:l},l))})}),e.jsx("tbody",{children:[["Avatar size","48px","36px"],["Font size","14px","13px"],["Line height","19px","19px"],["Component height","92px","78px"]].map(l=>e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:l.map((t,n)=>e.jsx("td",{style:{padding:"8px 24px",textAlign:"center",color:n===0?"var(--color-neutral-foreground-subtle-1)":"var(--color-neutral-foreground-default)",fontWeight:n===0?600:400},children:t},n))},l[0]))})]})})}),e.jsx(a,{label:"Usage",children:e.jsx(o,{gap:32,children:["default","small"].map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(s,{size:l,name:"홍길동",info:"3분 전",src:r}),e.jsxs("code",{style:{fontFamily:"monospace",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)"},children:['size="',l,'"']})]},l))})})]})},m={name:"Emphasis",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(a,{label:"emphasis=false",desc:"기본 상태. fontWeight 400 (Regular).",children:e.jsxs(o,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전",src:r,emphasis:!1}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전",src:r,emphasis:!1})]})}),e.jsx(a,{label:"emphasis=true",desc:"이름을 강조할 때 사용합니다. fontWeight 600 (SemiBold).",children:e.jsxs(o,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전",src:r,emphasis:!0}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전",src:r,emphasis:!0})]})})]})},f={name:"Selected",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(a,{label:"selected=false",desc:"기본 상태.",children:e.jsxs(o,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전",src:r,selected:!1}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전",src:r,selected:!1})]})}),e.jsx(a,{label:"selected=true",desc:"선택된 채널. 아바타 주변에 파란 테두리(#3283fd)가 표시됩니다.",children:e.jsxs(o,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전",src:r,selected:!0}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전",src:r,selected:!0})]})})]})},x={name:"Contents",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(a,{label:"src (이미지 있음)",desc:"아바타 이미지 URL을 전달합니다.",children:e.jsxs(o,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전",src:r}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전",src:r})]})}),e.jsx(a,{label:"src 없음 (플레이스홀더)",desc:"src가 없으면 기본 그라디언트 플레이스홀더가 표시됩니다.",children:e.jsxs(o,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전"}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전"})]})}),e.jsx(a,{label:"info 없음",desc:"info prop을 생략하면 이름만 표시됩니다.",children:e.jsxs(o,{gap:32,children:[e.jsx(s,{name:"홍길동",src:r}),e.jsx(s,{size:"small",name:"홍길동",src:r})]})})]})},u={name:"Matrix",render:()=>{const l=["default","small"],t=[!1,!0],n=[!1,!0];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"size \\ emphasis · selected"}),t.flatMap(i=>n.map(c=>e.jsxs("th",{style:{padding:"8px 16px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textAlign:"center"},children:["em=",String(i)," sel=",String(c)]},`${i}-${c}`)))]})}),e.jsx("tbody",{children:l.map(i=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"16px 16px 16px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:i}),t.flatMap(c=>n.map(g=>e.jsx("td",{style:{padding:"16px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(s,{size:i,emphasis:c,selected:g,name:"홍길동",info:"3분 전",src:r})},`${c}-${g}`)))]},i))})]})})}};var h,y,A;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'default',
    emphasis: false,
    selected: false,
    name: '홍길동',
    label: true,
    info: '3분 전',
    src: AVATAR
  }
}`,...(A=(y=d.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var b,v,j;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Size',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="Measurement" desc="Avatar 크기 기준으로 정의됩니다.">
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
                {['Attribute', 'default', 'small'].map(h => <th key={h} style={{
                padding: '8px 24px',
                textAlign: 'center',
                fontWeight: 700,
                color: 'var(--color-neutral-foreground-subtle-1)'
              }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[['Avatar size', '48px', '36px'], ['Font size', '14px', '13px'], ['Line height', '19px', '19px'], ['Component height', '92px', '78px']].map(row => <tr key={row[0]} style={{
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
        <Row gap={32}>
          {(['default', 'small'] as ProfileSize[]).map(s => <div key={s} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
              <ProfileVertical size={s} name="홍길동" info="3분 전" src={AVATAR} />
              <code style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: 'var(--color-neutral-foreground-subtle-3)'
          }}>size="{s}"</code>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(j=(v=p.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var z,S,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Emphasis',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="emphasis=false" desc="기본 상태. fontWeight 400 (Regular).">
        <Row gap={32}>
          <ProfileVertical name="홍길동" info="3분 전" src={AVATAR} emphasis={false} />
          <ProfileVertical size="small" name="홍길동" info="3분 전" src={AVATAR} emphasis={false} />
        </Row>
      </Block>
      <Block label="emphasis=true" desc="이름을 강조할 때 사용합니다. fontWeight 600 (SemiBold).">
        <Row gap={32}>
          <ProfileVertical name="홍길동" info="3분 전" src={AVATAR} emphasis={true} />
          <ProfileVertical size="small" name="홍길동" info="3분 전" src={AVATAR} emphasis={true} />
        </Row>
      </Block>
    </div>
}`,...(R=(S=m.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var V,P,k;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Selected',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="selected=false" desc="기본 상태.">
        <Row gap={32}>
          <ProfileVertical name="홍길동" info="3분 전" src={AVATAR} selected={false} />
          <ProfileVertical size="small" name="홍길동" info="3분 전" src={AVATAR} selected={false} />
        </Row>
      </Block>
      <Block label="selected=true" desc="선택된 채널. 아바타 주변에 파란 테두리(#3283fd)가 표시됩니다.">
        <Row gap={32}>
          <ProfileVertical name="홍길동" info="3분 전" src={AVATAR} selected={true} />
          <ProfileVertical size="small" name="홍길동" info="3분 전" src={AVATAR} selected={true} />
        </Row>
      </Block>
    </div>
}`,...(k=(P=f.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var w,B,T;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Contents',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="src (이미지 있음)" desc="아바타 이미지 URL을 전달합니다.">
        <Row gap={32}>
          <ProfileVertical name="홍길동" info="3분 전" src={AVATAR} />
          <ProfileVertical size="small" name="홍길동" info="3분 전" src={AVATAR} />
        </Row>
      </Block>
      <Block label="src 없음 (플레이스홀더)" desc="src가 없으면 기본 그라디언트 플레이스홀더가 표시됩니다.">
        <Row gap={32}>
          <ProfileVertical name="홍길동" info="3분 전" />
          <ProfileVertical size="small" name="홍길동" info="3분 전" />
        </Row>
      </Block>
      <Block label="info 없음" desc="info prop을 생략하면 이름만 표시됩니다.">
        <Row gap={32}>
          <ProfileVertical name="홍길동" src={AVATAR} />
          <ProfileVertical size="small" name="홍길동" src={AVATAR} />
        </Row>
      </Block>
    </div>
}`,...(T=(B=x.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var W,D,C;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const sizes: ProfileSize[] = ['default', 'small'];
    const emphasisOpts = [false, true];
    const selectedOpts = [false, true];
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
                size \\ emphasis · selected
              </th>
              {emphasisOpts.flatMap(e => selectedOpts.map(s => <th key={\`\${e}-\${s}\`} style={{
              padding: '8px 16px',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textAlign: 'center'
            }}>
                    em={String(e)} sel={String(s)}
                  </th>))}
            </tr>
          </thead>
          <tbody>
            {sizes.map(size => <tr key={size} style={{
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '16px 16px 16px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>
                  {size}
                </td>
                {emphasisOpts.flatMap(e => selectedOpts.map(s => <td key={\`\${e}-\${s}\`} style={{
              padding: '16px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                      <ProfileVertical size={size} emphasis={e} selected={s} name="홍길동" info="3분 전" src={AVATAR} />
                    </td>))}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(C=(D=u.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const $=["Playground","Sizes","Emphasis","Selected","Contents","Matrix"];export{x as Contents,m as Emphasis,u as Matrix,d as Playground,f as Selected,p as Sizes,$ as __namedExportsOrder,E as default};
