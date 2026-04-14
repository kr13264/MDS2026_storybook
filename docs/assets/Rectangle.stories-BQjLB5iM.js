import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as r}from"./ImageRect-FsrKg4P1.js";import"./ImageThumbnail-CZe9FtFx.js";const s="https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop",g=({children:t,gap:a=8})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:a},children:t}),l=({label:t,desc:a,children:o})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:t}),a&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:a}),o]}),x=({children:t})=>e.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:t}),P={title:"Components/Images/Rectangle",component:r,parameters:{layout:"centered",docs:{description:{component:'\n비율(ratio), 딤 레이어(opacity), 그림자(shadow), object-fit 조합으로 구성된 Rectangle 이미지 래퍼 컴포넌트.\n\n---\n\n<div style="margin-bottom:30px"></div>\n\n### Type\n\n| Type | Description |\n|------|-------------|\n| `default` | 이미지 URL을 받아 표시하는 기본 상태 |\n| `noImage` | 이미지가 없는 경우 아이콘과 빈 배경 표시 |\n| `placeHolder` | 이미지 로딩 중 shimmer 애니메이션 표시 |\n\n### Ratio\n\n| Ratio | 설명 |\n|-------|------|\n| `1:1` | 정사각형. 썸네일·앨범 커버 |\n| `16:9` | 와이드스크린. 동영상·배너 |\n| `3:2` | 일반 사진 비율 |\n| `3:4` | 세로형 콘텐츠 |\n| `3:4.5` | 세로형 콘텐츠 (더 긴 비율) |\n| `3:5` | 세로형 콘텐츠 (가장 긴 비율) |\n| `noFix` | 비율 고정 없음. 부모 크기에 맞춤 |\n\n### Opacity\n\n| Opacity | 설명 |\n|---------|------|\n| `none` | 딤 레이어 없음 |\n| `3%` | 미세한 딤. 텍스트 가독성 보조 |\n| `40%` | 중간 딤. 이미지 위 텍스트 레이블 조합 |\n\n### Shadow\n\n| Shadow | 설명 |\n|--------|------|\n| `none` | 그라디언트 오버레이 없음 |\n| `up` | 상단 방향 그라디언트 |\n| `down` | 하단 방향 그라디언트 |\n| `up&down` | 상하단 동시 그라디언트 |\n\n### Contents\n\n| Slot | Type | Default | Description |\n|------|------|---------|-------------|\n| `label` | string | — | 하단 오버레이 텍스트 레이블 |\n| `icon` | boolean | `false` | 우상단 아이콘 뱃지 표시 |\n| `fit` | `cover` · `contain` · `fill` · `scale-down` | `cover` | 이미지 object-fit |\n| `disabled` | boolean | `false` | 비활성 상태 (opacity 0.35) |\n\n```tsx\nimport { ImageRect } from \'@/components/Images\';\n\n<ImageRect src={imgSrc} ratio="16:9" opacity="40%" shadow="down" label="제목" />\n```\n        '.trim()}}},argTypes:{type:{control:"select",options:["default","noImage","placeHolder"],description:"이미지 표시 타입",table:{type:{summary:"ImageRectType"},defaultValue:{summary:"default"}}},ratio:{control:"select",options:["1:1","16:9","3:2","3:4","3:4.5","3:5","noFix"],description:"이미지 비율",table:{type:{summary:"ImageRectRatio"},defaultValue:{summary:"1:1"}}},opacity:{control:"select",options:["none","3%","40%"],description:"딤 레이어 불투명도",table:{type:{summary:"ImageRectOpacity"},defaultValue:{summary:"none"}}},shadow:{control:"select",options:["none","up","down","up&down"],description:"그라디언트 그림자 방향",table:{type:{summary:"ImageRectShadow"},defaultValue:{summary:"none"}}},fit:{control:"select",options:["cover","contain","fill","scale-down"],description:"이미지 object-fit",table:{type:{summary:"ImageRectFit"},defaultValue:{summary:"cover"}}},label:{control:"text",description:"하단 오버레이 텍스트 레이블",table:{type:{summary:"string"}}},icon:{control:"boolean",description:"우상단 아이콘 뱃지 표시",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성 상태 (opacity 0.35, pointer-events none)",table:{defaultValue:{summary:"false"}}},src:{control:"text",description:"이미지 URL",table:{type:{summary:"string"}}}}},i={decorators:[t=>e.jsx("div",{style:{width:148},children:e.jsx(t,{})})],args:{src:s,ratio:"1:1",type:"default",opacity:"none",shadow:"none",fit:"cover",radius:"none"}},d={tags:["!autodocs"],name:"Type",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(l,{label:"Types",desc:"이미지 표시 상태에 따른 3가지 타입",children:e.jsx(g,{gap:12,children:[{type:"default",src:s,label:"default"},{type:"noImage",src:void 0,label:"noImage"},{type:"placeHolder",src:void 0,label:"placeHolder"}].map(({type:t,src:a,label:o})=>e.jsxs("div",{style:{width:148},children:[e.jsx(r,{type:t,src:a,ratio:"1:1",radius:"none"}),e.jsx(x,{children:o})]},t))})})})},c={tags:["!autodocs"],name:"Ratio",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(l,{label:"Measurement",desc:"비율 기준으로 정의. 콘텐츠 유형에 따라 선택합니다.",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:["Ratio","1:1","16:9","3:2","3:4","3:4.5","3:5","noFix"].map(t=>e.jsx("th",{style:{padding:"8px 16px",textAlign:"center",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)"},children:t},t))})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"8px 16px",fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)"},children:"Usage"}),[`정사각형
썸네일`,`와이드
동영상·배너`,`일반
사진`,`세로형
콘텐츠`,`세로형
(긴 비율)`,`세로형
(더 긴)`,`고정 없음
부모에 맞춤`].map((t,a)=>e.jsx("td",{style:{padding:"8px 16px",textAlign:"center",color:"var(--color-neutral-foreground-default)"},children:t.split(`
`).map((o,n)=>e.jsx("span",{style:{display:"block"},children:o},n))},a))]})})]})})}),e.jsx(l,{label:"Usage",desc:"각 비율 별 이미지 시각화",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"flex-start"},children:[["1:1","16:9","3:2","3:4","3:4.5","3:5"].map(t=>e.jsxs("div",{style:{width:140},children:[e.jsx(r,{src:s,ratio:t,radius:"none"}),e.jsx(x,{children:t})]},t)),e.jsxs("div",{style:{width:140,height:100},children:[e.jsx(r,{src:s,ratio:"noFix",radius:"none",style:{width:"100%",height:"100%"}}),e.jsx(x,{children:"noFix"})]})]})})]})},p={tags:["!autodocs"],name:"Opacity",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(l,{label:"Opacity",desc:"딤 레이어의 불투명도 수준",children:e.jsx(g,{gap:12,children:["none","3%","40%"].map(t=>e.jsxs("div",{style:{width:148},children:[e.jsx(r,{src:s,ratio:"1:1",radius:"none",opacity:t}),e.jsx(x,{children:t})]},t))})})})},m={tags:["!autodocs"],name:"Shadow",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(l,{label:"Shadow",desc:"방향성 그라디언트 오버레이",children:e.jsx(g,{gap:12,children:["none","up","down","up&down"].map(t=>e.jsxs("div",{style:{width:148},children:[e.jsx(r,{src:s,ratio:"1:1",radius:"none",shadow:t}),e.jsx(x,{children:t})]},t))})})})},y={tags:["!autodocs"],name:"State",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(l,{label:"enabled",desc:"기본 상태. 사용자가 인터랙션 가능한 경우",children:e.jsx("div",{style:{width:148},children:e.jsx(r,{src:s,ratio:"1:1",radius:"none"})})}),e.jsx(l,{label:"disabled",desc:"비활성 상태. opacity 0.35, pointer-events none",children:e.jsx("div",{style:{width:148},children:e.jsx(r,{src:s,ratio:"1:1",radius:"none",disabled:!0})})})]})},u={tags:["!autodocs"],name:"Matrix",render:()=>{const t=["1:1","16:9","3:2","3:4","3:4.5","3:5"],a=["default","noImage","placeHolder"];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Ratio \\ Type"}),a.map(o=>e.jsx("th",{style:{padding:"8px 16px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:o},o))]})}),e.jsx("tbody",{children:t.map(o=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:o}),a.map(n=>e.jsx("td",{style:{padding:"12px 8px",verticalAlign:"middle",textAlign:"center"},children:e.jsx("div",{style:{width:140},children:e.jsx(r,{type:n,src:n==="default"?s:void 0,ratio:o,radius:"none"})})},n))]},o))})]})})}};var f,h,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 148
  }}><Story /></div>],
  args: {
    src: IMG_SRC,
    ratio: '1:1',
    type: 'default',
    opacity: 'none',
    shadow: 'none',
    fit: 'cover',
    radius: 'none'
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,j,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Type',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Types" desc="이미지 표시 상태에 따른 3가지 타입">
        <Row gap={12}>
          {[{
          type: 'default' as ImageRectType,
          src: IMG_SRC,
          label: 'default'
        }, {
          type: 'noImage' as ImageRectType,
          src: undefined,
          label: 'noImage'
        }, {
          type: 'placeHolder' as ImageRectType,
          src: undefined,
          label: 'placeHolder'
        }].map(({
          type,
          src,
          label
        }) => <div key={type} style={{
          width: 148
        }}>
              <ImageRect type={type} src={src} ratio="1:1" radius="none" />
              <Caption>{label}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,S,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Ratio',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Measurement" desc="비율 기준으로 정의. 콘텐츠 유형에 따라 선택합니다.">
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
                {['Ratio', '1:1', '16:9', '3:2', '3:4', '3:4.5', '3:5', 'noFix'].map(h => <th key={h} style={{
                padding: '8px 16px',
                textAlign: 'center',
                fontWeight: 700,
                color: 'var(--color-neutral-foreground-subtle-1)'
              }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr style={{
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                <td style={{
                padding: '8px 16px',
                fontWeight: 600,
                color: 'var(--color-neutral-foreground-subtle-1)'
              }}>Usage</td>
                {['정사각형\\n썸네일', '와이드\\n동영상·배너', '일반\\n사진', '세로형\\n콘텐츠', '세로형\\n(긴 비율)', '세로형\\n(더 긴)', '고정 없음\\n부모에 맞춤'].map((desc, i) => <td key={i} style={{
                padding: '8px 16px',
                textAlign: 'center',
                color: 'var(--color-neutral-foreground-default)'
              }}>
                    {desc.split('\\n').map((line, j) => <span key={j} style={{
                  display: 'block'
                }}>{line}</span>)}
                  </td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="Usage" desc="각 비율 별 이미지 시각화">
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'flex-start'
      }}>
          {(['1:1', '16:9', '3:2', '3:4', '3:4.5', '3:5'] as ImageRectRatio[]).map(ratio => <div key={ratio} style={{
          width: 140
        }}>
              <ImageRect src={IMG_SRC} ratio={ratio} radius="none" />
              <Caption>{ratio}</Caption>
            </div>)}
          <div style={{
          width: 140,
          height: 100
        }}>
            <ImageRect src={IMG_SRC} ratio="noFix" radius="none" style={{
            width: '100%',
            height: '100%'
          }} />
            <Caption>noFix</Caption>
          </div>
        </div>
      </Block>
    </div>
}`,...(I=(S=c.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var k,C,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Opacity',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Opacity" desc="딤 레이어의 불투명도 수준">
        <Row gap={12}>
          {(['none', '3%', '40%'] as ImageRectOpacity[]).map(opacity => <div key={opacity} style={{
          width: 148
        }}>
              <ImageRect src={IMG_SRC} ratio="1:1" radius="none" opacity={opacity} />
              <Caption>{opacity}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(T=(C=p.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var B,M,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Shadow',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Shadow" desc="방향성 그라디언트 오버레이">
        <Row gap={12}>
          {(['none', 'up', 'down', 'up&down'] as ImageRectShadow[]).map(shadow => <div key={shadow} style={{
          width: 148
        }}>
              <ImageRect src={IMG_SRC} ratio="1:1" radius="none" shadow={shadow} />
              <Caption>{shadow}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(F=(M=m.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var _,W,A;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'State',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="enabled" desc="기본 상태. 사용자가 인터랙션 가능한 경우">
        <div style={{
        width: 148
      }}>
          <ImageRect src={IMG_SRC} ratio="1:1" radius="none" />
        </div>
      </Block>
      <Block label="disabled" desc="비활성 상태. opacity 0.35, pointer-events none">
        <div style={{
        width: 148
      }}>
          <ImageRect src={IMG_SRC} ratio="1:1" radius="none" disabled />
        </div>
      </Block>
    </div>
}`,...(A=(W=y.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var D,O,z;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Matrix',
  render: () => {
    const ratios: ImageRectRatio[] = ['1:1', '16:9', '3:2', '3:4', '3:4.5', '3:5'];
    const types: ImageRectType[] = ['default', 'noImage', 'placeHolder'];
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
                Ratio \\ Type
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
            {ratios.map(ratio => <tr key={ratio} style={{
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '12px 16px 12px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>
                  {ratio}
                </td>
                {types.map(type => <td key={type} style={{
              padding: '12px 8px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                    <div style={{
                width: 140
              }}>
                      <ImageRect type={type} src={type === 'default' ? IMG_SRC : undefined} ratio={ratio} radius="none" />
                    </div>
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(z=(O=u.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const G=["Playground","Types","Ratios","Opacities","Shadows","States","Matrix"],X=Object.freeze(Object.defineProperty({__proto__:null,Matrix:u,Opacities:p,Playground:i,Ratios:c,Shadows:m,States:y,Types:d,__namedExportsOrder:G,default:P},Symbol.toStringTag,{value:"Module"}));export{i as P,X as R};
