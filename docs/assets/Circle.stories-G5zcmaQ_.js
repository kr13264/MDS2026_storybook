import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./ImageRect-FsrKg4P1.js";import{I as l}from"./ImageThumbnail-CZe9FtFx.js";const o="https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop",P=({children:r,gap:t=8})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:t},children:r}),p=({label:r,desc:t,children:s})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:r}),t&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:t}),s]}),B=({children:r})=>e.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:r}),_={title:"Components/Images/Circle",component:l,parameters:{layout:"centered",docs:{description:{component:`
원형 이미지 컴포넌트. 프로필 이미지, 사용자 아바타, 채널 썸네일 등에 활용합니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | px | Usage |
|------|----|-------|
| \`3xs\` | 16px | 이미지 강조형 템플릿에서 출처 프로필 표기 |
| \`2xs\` | 20px | 버튼 내부에 파비콘 이미지를 노출하는 경우 |
| \`xs\`  | 24px | 기준 출처 프로필 이미지 |
| \`sm\`  | 28px | 칩 내부에 섬네일 정보를 포함하는 경우 |
| \`md\`  | 36px | 홈피드에 출처 정보를 강조하는 경우 |
| \`lg\`  | 40px | 기본적인 Image 형태 |
| \`xl\`  | 48px | 메인 콘텐츠가 대표 브랜드 또는 프로필 정보인 경우 |
| \`2xl\` | 52px | 메인 콘텐츠가 대표 브랜드 또는 프로필 정보인 경우 (대형) |

### Type

| Type | Description |
|------|-------------|
| \`default\` | 이미지 URL을 받아 표시하는 기본 상태 |
| \`noImage\` | 이미지가 없는 경우 — N 로고 아이콘 표시 |
| \`noImgPerson\` | 이미지가 없는 사람 프로필 — 사람 실루엣 아이콘 표시 |
| \`placeHolder\` | 이미지 로딩 중 shimmer 애니메이션 표시 |

### State

| State | Description |
|-------|-------------|
| \`enabled\` | 기본 상태 |
| \`disabled\` | 비활성 상태 (opacity 0.35) |

\`\`\`tsx
import { ImageCircle } from '@/components/Images';

<ImageCircle src={imgSrc} size={48} />
<ImageCircle type="noImage" size={64} />
\`\`\`
        `.trim()}}},argTypes:{size:{control:"select",options:["3xs","2xs","xs","sm","md","lg","xl","2xl"],description:"이미지 크기",table:{type:{summary:"ImageCircleSize"},defaultValue:{summary:"md"}}},type:{control:"select",options:["default","noImage","noImgPerson","placeHolder"],description:"이미지 표시 타입",table:{type:{summary:"ImageCircleType"},defaultValue:{summary:"default"}}},disabled:{control:"boolean",description:"비활성 상태 (opacity 0.35)",table:{defaultValue:{summary:"false"}}},src:{control:"text",description:"이미지 URL",table:{type:{summary:"string"}}}}},a={args:{size:"md",type:"default",src:o}},m=[{size:"3xs",px:16,usage:"출처 프로필 (강조형 템플릿)"},{size:"2xs",px:20,usage:"버튼 내부 파비콘 이미지"},{size:"xs",px:24,usage:"기준 출처 프로필"},{size:"sm",px:28,usage:"칩 내부 섬네일"},{size:"md",px:36,usage:"홈피드 출처 강조"},{size:"lg",px:40,usage:"기본 Image 형태"},{size:"xl",px:48,usage:"메인 콘텐츠 대표 프로필"},{size:"2xl",px:52,usage:"메인 콘텐츠 대표 프로필 (대형)"}],n={tags:["!autodocs"],name:"Size",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(p,{label:"Measurement",desc:"크기 기준으로 정의. 사용 맥락의 레이아웃 밀도에 따라 선택합니다.",children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,width:"100%"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Size","px","Usage"].map(r=>e.jsx("th",{style:{padding:"8px 16px",textAlign:"left",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)"},children:r},r))})}),e.jsx("tbody",{children:m.map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"8px 16px",fontWeight:600,color:"var(--color-neutral-foreground-default)"},children:r.size}),e.jsxs("td",{style:{padding:"8px 16px",color:"var(--color-neutral-foreground-default)"},children:[r.px,"px"]}),e.jsx("td",{style:{padding:"8px 16px",color:"var(--color-neutral-foreground-subtle-1)"},children:r.usage})]},r.size))})]})}),e.jsx(p,{label:"Usage",desc:"크기 별 시각화",children:e.jsx(P,{gap:12,children:m.map(({size:r,px:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(l,{src:o,size:r}),e.jsxs(B,{children:[r," · ",t,"px"]})]},r))})})]})},i={tags:["!autodocs"],name:"Type",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(p,{label:"Types",desc:"이미지 표시 상태에 따른 4가지 타입 (size=xl)",children:e.jsx(P,{gap:16,children:["default","noImage","noImgPerson","placeHolder"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(l,{type:r,size:"xl",src:r==="default"?o:void 0}),e.jsx(B,{children:r})]},r))})})})},d={tags:["!autodocs"],name:"State",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(p,{label:"enabled",desc:"기본 상태. 사용자가 인터랙션 가능한 경우",children:e.jsx(l,{src:o,size:"xl"})}),e.jsx(p,{label:"disabled",desc:"비활성 상태. opacity 0.35, pointer-events none",children:e.jsx(l,{src:o,size:"xl",disabled:!0})})]})},c={tags:["!autodocs"],name:"Matrix",render:()=>{const r=["2xl","xl","lg","md","sm","xs","2xs","3xs"],t=["noImage","noImgPerson","placeHolder","default"];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Size \\ Type"}),t.map(s=>e.jsx("th",{style:{padding:"8px 16px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:s},s))]})}),e.jsx("tbody",{children:r.map(s=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:s}),t.map(x=>e.jsx("td",{style:{padding:"12px 16px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(l,{type:x,size:s,src:x==="default"?o:void 0})},x))]},s))})]})})}};var g,u,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'md',
    type: 'default',
    src: IMG_SRC
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,h,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Size',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Measurement" desc="크기 기준으로 정의. 사용 맥락의 레이아웃 밀도에 따라 선택합니다.">
        <table style={{
        borderCollapse: 'collapse',
        fontFamily: 'Pretendard, sans-serif',
        fontSize: 12,
        width: '100%'
      }}>
          <thead>
            <tr style={{
            borderBottom: '1px solid var(--color-neutral-stroke-divider)'
          }}>
              {['Size', 'px', 'Usage'].map(h => <th key={h} style={{
              padding: '8px 16px',
              textAlign: 'left',
              fontWeight: 700,
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {SIZE_META.map(s => <tr key={s.size} style={{
            borderBottom: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '8px 16px',
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-default)'
            }}>{s.size}</td>
                <td style={{
              padding: '8px 16px',
              color: 'var(--color-neutral-foreground-default)'
            }}>{s.px}px</td>
                <td style={{
              padding: '8px 16px',
              color: 'var(--color-neutral-foreground-subtle-1)'
            }}>{s.usage}</td>
              </tr>)}
          </tbody>
        </table>
      </Block>

      <Block label="Usage" desc="크기 별 시각화">
        <Row gap={12}>
          {SIZE_META.map(({
          size,
          px
        }) => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ImageCircle src={IMG_SRC} size={size} />
              <Caption>{size} · {px}px</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,z,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Type',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Types" desc="이미지 표시 상태에 따른 4가지 타입 (size=xl)">
        <Row gap={16}>
          {(['default', 'noImage', 'noImgPerson', 'placeHolder'] as ImageCircleType[]).map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ImageCircle type={type} size="xl" src={type === 'default' ? IMG_SRC : undefined} />
              <Caption>{type}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(S=(z=i.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var j,I,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'State',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="enabled" desc="기본 상태. 사용자가 인터랙션 가능한 경우">
        <ImageCircle src={IMG_SRC} size="xl" />
      </Block>
      <Block label="disabled" desc="비활성 상태. opacity 0.35, pointer-events none">
        <ImageCircle src={IMG_SRC} size="xl" disabled />
      </Block>
    </div>
}`,...(C=(I=d.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var T,k,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Matrix',
  render: () => {
    const sizes: ImageCircleSize[] = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs'];
    const types: ImageCircleType[] = ['noImage', 'noImgPerson', 'placeHolder', 'default'];
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
                Size \\ Type
              </th>
              {types.map(t => <th key={t} style={{
              padding: '8px 16px',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase'
            }}>
                  {t}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {sizes.map(size => <tr key={size} style={{
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '12px 16px 12px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>
                  {size}
                </td>
                {types.map(type => <td key={type} style={{
              padding: '12px 16px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                    <ImageCircle type={type} size={size} src={type === 'default' ? IMG_SRC : undefined} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const R=["Playground","Sizes","Types","States","Matrix"],w=Object.freeze(Object.defineProperty({__proto__:null,Matrix:c,Playground:a,Sizes:n,States:d,Types:i,__namedExportsOrder:R,default:_},Symbol.toStringTag,{value:"Module"}));export{w as C,a as P};
