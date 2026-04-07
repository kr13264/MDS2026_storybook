import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{P as s}from"./ProfileHorizontal-C3ofRhvR.js";import"./index-Bc2G9s8g.js";const a=({children:r,gap:o=24})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:o},children:r}),t=({label:r,desc:o,children:n})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:r}),o&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:o}),n]}),l="https://i.pravatar.cc/150?img=3",O={title:"Components/Profile/Horizontal",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
아바타와 텍스트를 **가로로 배치**하는 프로필 컴포넌트입니다.
아바타 이미지, 프로필명, 서브 레이블(점 구분자), 하단 서브 텍스트(시간 등)를 수평으로 표시합니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | Avatar | Font Size | Usage |
|------|--------|-----------|-------|
| \`default\` | 36px | 14px | 일반적인 프로필 목록 |
| \`small\` | 28px | 13px | 공간이 좁은 영역 또는 보조 목록 |

### Emphasis

| Emphasis | fontWeight | Description |
|----------|------------|-------------|
| \`false\` | 400 (Regular) | 기본 상태 |
| \`true\` | 600 (SemiBold) | 이름을 강조해야 하는 경우 |

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
| \`sub\` | string | 이름 옆 서브 레이블 (점 구분자로 연결) |
| \`info\` | string | 하단 서브 텍스트 (시간, 채널 정보 등) |

\`\`\`tsx
import { ProfileHorizontal } from '@/components/Profile';

<ProfileHorizontal name="홍길동" info="3분 전" src="..." />
<ProfileHorizontal size="small" emphasis selected name="채널명" sub="레이블" info="방금 전" src="..." />
\`\`\`
        `.trim()}}},argTypes:{size:{control:"select",options:["default","small"],description:"아바타 사이즈 (default=36px · small=28px)",table:{type:{summary:"ProfileSize"},defaultValue:{summary:"default"}}},emphasis:{control:"boolean",description:"이름 강조 — fontWeight 400 → 600",table:{defaultValue:{summary:"false"}}},selected:{control:"boolean",description:"선택 상태 — 아바타에 파란 테두리(#3283fd) 표시",table:{defaultValue:{summary:"false"}}},src:{control:"text",description:"아바타 이미지 URL"},name:{control:"text",description:"프로필/채널 이름",table:{defaultValue:{summary:"프로필명"}}},sub:{control:"text",description:"이름 옆 서브 레이블 (점 구분자로 연결)"},label:{control:"boolean",description:"서브 레이블 표시 여부",table:{defaultValue:{summary:"true"}}},info:{control:"text",description:"하단 서브 텍스트 (시간, 채널 정보 등)"},date:{control:"boolean",description:"하단 서브 텍스트 표시 여부",table:{defaultValue:{summary:"true"}}}}},c={args:{size:"default",emphasis:!1,selected:!1,name:"홍길동",sub:"레이블",label:!0,info:"3분 전",date:!0,src:l}},p={name:"Size",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(t,{label:"Measurement",desc:"Avatar 크기 기준으로 정의됩니다.",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Attribute","default","small"].map(r=>e.jsx("th",{style:{padding:"8px 24px",textAlign:"center",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)"},children:r},r))})}),e.jsx("tbody",{children:[["Avatar size","36px","28px"],["Font size","14px","13px"],["Line height","19px","19px"]].map(r=>e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:r.map((o,n)=>e.jsx("td",{style:{padding:"8px 24px",textAlign:"center",color:n===0?"var(--color-neutral-foreground-subtle-1)":"var(--color-neutral-foreground-default)",fontWeight:n===0?600:400},children:o},n))},r[0]))})]})})}),e.jsx(t,{label:"Usage",children:e.jsx(a,{gap:32,children:["default","small"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(s,{size:r,name:"홍길동",info:"3분 전",src:l}),e.jsxs("code",{style:{fontFamily:"monospace",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)"},children:['size="',r,'"']})]},r))})})]})},m={name:"Emphasis",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(t,{label:"emphasis=false",desc:"기본 상태. fontWeight 400 (Regular).",children:e.jsxs(a,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전",src:l,emphasis:!1}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전",src:l,emphasis:!1})]})}),e.jsx(t,{label:"emphasis=true",desc:"이름을 강조할 때 사용합니다. fontWeight 600 (SemiBold).",children:e.jsxs(a,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전",src:l,emphasis:!0}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전",src:l,emphasis:!0})]})})]})},f={name:"Selected",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(t,{label:"selected=false",desc:"기본 상태.",children:e.jsxs(a,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전",src:l,selected:!1}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전",src:l,selected:!1})]})}),e.jsx(t,{label:"selected=true",desc:"선택된 채널. 아바타 주변에 파란 테두리(#3283fd)가 표시됩니다.",children:e.jsxs(a,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전",src:l,selected:!0}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전",src:l,selected:!0})]})})]})},u={name:"Contents",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(t,{label:"src (이미지 있음)",desc:"아바타 이미지 URL을 전달합니다.",children:e.jsxs(a,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전",src:l}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전",src:l})]})}),e.jsx(t,{label:"src 없음 (플레이스홀더)",desc:"src가 없으면 기본 그라디언트 플레이스홀더가 표시됩니다.",children:e.jsxs(a,{gap:32,children:[e.jsx(s,{name:"홍길동",info:"3분 전"}),e.jsx(s,{size:"small",name:"홍길동",info:"3분 전"})]})}),e.jsx(t,{label:"sub 있음",desc:"이름 옆에 점 구분자와 함께 서브 레이블이 표시됩니다.",children:e.jsxs(a,{gap:32,children:[e.jsx(s,{name:"홍길동",sub:"레이블",info:"3분 전",src:l}),e.jsx(s,{size:"small",name:"홍길동",sub:"레이블",info:"3분 전",src:l})]})}),e.jsx(t,{label:"info 없음",desc:"info prop을 생략하면 이름(+sub)만 표시됩니다.",children:e.jsxs(a,{gap:32,children:[e.jsx(s,{name:"홍길동",sub:"레이블",src:l}),e.jsx(s,{size:"small",name:"홍길동",src:l})]})})]})},x={name:"Matrix",render:()=>{const r=["default","small"],o=[!1,!0],n=[!1,!0];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"size \\ emphasis · selected"}),o.flatMap(i=>n.map(d=>e.jsxs("th",{style:{padding:"8px 16px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textAlign:"center"},children:["em=",String(i)," sel=",String(d)]},`${i}-${d}`)))]})}),e.jsx("tbody",{children:r.map(i=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"16px 16px 16px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:i}),o.flatMap(d=>n.map(g=>e.jsx("td",{style:{padding:"16px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(s,{size:i,emphasis:d,selected:g,name:"홍길동",info:"3분 전",src:l})},`${d}-${g}`)))]},i))})]})})}};var h,y,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'default',
    emphasis: false,
    selected: false,
    name: '홍길동',
    sub: '레이블',
    label: true,
    info: '3분 전',
    date: true,
    src: AVATAR
  }
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var z,A,j;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
              {[['Avatar size', '36px', '28px'], ['Font size', '14px', '13px'], ['Line height', '19px', '19px']].map(row => <tr key={row[0]} style={{
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
          gap: 12
        }}>
              <ProfileHorizontal size={s} name="홍길동" info="3분 전" src={AVATAR} />
              <code style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: 'var(--color-neutral-foreground-subtle-3)'
          }}>size="{s}"</code>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(j=(A=p.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var v,S,R;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Emphasis',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="emphasis=false" desc="기본 상태. fontWeight 400 (Regular).">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" src={AVATAR} emphasis={false} />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" src={AVATAR} emphasis={false} />
        </Row>
      </Block>
      <Block label="emphasis=true" desc="이름을 강조할 때 사용합니다. fontWeight 600 (SemiBold).">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" src={AVATAR} emphasis={true} />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" src={AVATAR} emphasis={true} />
        </Row>
      </Block>
    </div>
}`,...(R=(S=m.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var P,k,w;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Selected',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="selected=false" desc="기본 상태.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" src={AVATAR} selected={false} />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" src={AVATAR} selected={false} />
        </Row>
      </Block>
      <Block label="selected=true" desc="선택된 채널. 아바타 주변에 파란 테두리(#3283fd)가 표시됩니다.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" src={AVATAR} selected={true} />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" src={AVATAR} selected={true} />
        </Row>
      </Block>
    </div>
}`,...(w=(k=f.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var B,T,H;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Contents',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="src (이미지 있음)" desc="아바타 이미지 URL을 전달합니다.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" src={AVATAR} />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" src={AVATAR} />
        </Row>
      </Block>
      <Block label="src 없음 (플레이스홀더)" desc="src가 없으면 기본 그라디언트 플레이스홀더가 표시됩니다.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" />
        </Row>
      </Block>
      <Block label="sub 있음" desc="이름 옆에 점 구분자와 함께 서브 레이블이 표시됩니다.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" sub="레이블" info="3분 전" src={AVATAR} />
          <ProfileHorizontal size="small" name="홍길동" sub="레이블" info="3분 전" src={AVATAR} />
        </Row>
      </Block>
      <Block label="info 없음" desc="info prop을 생략하면 이름(+sub)만 표시됩니다.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" sub="레이블" src={AVATAR} />
          <ProfileHorizontal size="small" name="홍길동" src={AVATAR} />
        </Row>
      </Block>
    </div>
}`,...(H=(T=u.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var V,W,D;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
                      <ProfileHorizontal size={size} emphasis={e} selected={s} name="홍길동" info="3분 전" src={AVATAR} />
                    </td>))}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(D=(W=x.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const E=["Playground","Sizes","Emphasis","Selected","Contents","Matrix"];export{u as Contents,m as Emphasis,x as Matrix,c as Playground,f as Selected,p as Sizes,E as __namedExportsOrder,O as default};
