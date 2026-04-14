import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./ImageRect-FsrKg4P1.js";import{d as n}from"./ImageThumbnail-CZe9FtFx.js";const i="https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop",f=({children:t,gap:r=8})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:r},children:t}),v=({label:t,desc:r,children:o})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"#9999B8",margin:"0 0 4px"},children:t}),r&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"#55557A",margin:"0 0 12px",lineHeight:1.6},children:r}),o]}),u=({children:t})=>e.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:11,color:"#9999B8",margin:"6px 0 0",textAlign:"center"},children:t}),l=({text:t="배지"})=>e.jsx("span",{style:{display:"inline-block",padding:"5px 10px",borderRadius:999,background:"rgba(0,0,0,0.50)",color:"#fff",fontFamily:"Pretendard, sans-serif",fontSize:12,lineHeight:"16px",letterSpacing:-.3},children:t}),s=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"5",r:"1.5",fill:"#fff"}),e.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"#fff"}),e.jsx("circle",{cx:"12",cy:"19",r:"1.5",fill:"#fff"})]}),y=({time:t="03:25"})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M4.5 3L11 7L4.5 11V3Z",fill:"#fff"})}),e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,fontWeight:700,lineHeight:"16px",letterSpacing:-.3,color:"#fff"},children:t})]}),h=()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx("div",{style:{width:20,height:20,borderRadius:"50%",overflow:"hidden",flexShrink:0,background:"var(--color-neutral-background-separated-1)"},children:e.jsx("img",{src:i,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,fontWeight:600,color:"#fff",lineHeight:"16px",letterSpacing:-.3},children:"프로필"})]}),G={title:"Components/Images/Thumbnail",component:n,parameters:{layout:"centered",docs:{description:{component:`
이미지 위에 배지·아이콘·프로필·재생시간 등 슬롯 오버레이를 배치하는 Thumbnail 컴포넌트.
Image, Media, Gallery 타입과 다양한 코너 라디우스 변형을 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`image\` | 기본 이미지. 하단 좌측에 프로필 슬롯 표시 |
| \`media\` | 미디어 콘텐츠. 하단 그림자 + 우하단 재생시간 슬롯 |
| \`gallery\` | 갤러리 콘텐츠. 상하 그림자 + 우하단 재생시간 슬롯 |

### Ratio

| Ratio | Aspect Ratio |
|-------|-------------|
| \`1:1\` | 정사각형 |
| \`3:2\` | 가로형 |
| \`3:4\` | 세로형 |
| \`3:4.5\` | 세로형 (길게) |
| \`3:5\` | 세로형 (더 길게) |
| \`16:9\` | 와이드 |

### Radius

| Radius | Value |
|--------|-------|
| \`0\` | 라디우스 없음 |
| \`8\` | 8px |
| \`12\` | 12px |
| \`16\` | 16px |
| \`20\` | 20px |

### Slots

| Slot | Position | Description |
|------|----------|-------------|
| \`slotTopLeft\` | 좌상단 | 배지 오버레이 등 |
| \`slotTopRight\` | 우상단 | 더보기 아이콘 등 |
| \`slotBottomLeft\` | 좌하단 | 프로필 정보 등 |
| \`slotBottomRight\` | 우하단 | 재생시간 표시 등 |

\`\`\`tsx
import { ImageThumbnail } from '@/components/Images';

<ImageThumbnail
  src={imgSrc}
  type="media"
  ratio="3:2"
  radius={12}
  slotTopLeft={<Badge text="NEW" />}
  slotBottomRight={<Duration time="03:25" />}
/>
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["image","media","gallery"],description:"썸네일 타입",table:{type:{summary:"ImageThumbnailType"},defaultValue:{summary:"image"}}},ratio:{control:"select",options:["1:1","3:2","3:4","3:4.5","3:5","16:9"],description:"종횡비",table:{type:{summary:"ImageThumbnailRatio"},defaultValue:{summary:"1:1"}}},radius:{control:"select",options:[0,8,12,16,20],description:"코너 라디우스",table:{type:{summary:"ImageThumbnailRadius"},defaultValue:{summary:"0"}}},disabled:{control:"boolean",description:"비활성 상태 (opacity 0.35)",table:{defaultValue:{summary:"false"}}},src:{control:"text",description:"이미지 URL",table:{type:{summary:"string"}}}}},d={decorators:[t=>e.jsx("div",{style:{width:200},children:e.jsx(t,{})})],args:{src:i,type:"image",ratio:"1:1",radius:12}},p={tags:["!autodocs"],name:"Type",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(v,{label:"Type",desc:"Image / Media / Gallery 타입별 비교 (radius=12)",children:e.jsxs(f,{gap:16,children:[e.jsxs("div",{style:{width:148},children:[e.jsx(n,{src:i,type:"image",radius:12,slotTopLeft:e.jsx(l,{}),slotTopRight:e.jsx(s,{}),slotBottomLeft:e.jsx(h,{})}),e.jsx(u,{children:"image"})]}),e.jsxs("div",{style:{width:148},children:[e.jsx(n,{src:i,type:"media",radius:12,slotTopLeft:e.jsx(l,{}),slotTopRight:e.jsx(s,{}),slotBottomRight:e.jsx(y,{})}),e.jsx(u,{children:"media"})]}),e.jsxs("div",{style:{width:148},children:[e.jsx(n,{src:i,type:"gallery",radius:12,slotTopLeft:e.jsx(l,{}),slotTopRight:e.jsx(s,{}),slotBottomRight:e.jsx(y,{})}),e.jsx(u,{children:"gallery"})]})]})})})},c={tags:["!autodocs"],name:"Ratio",render:()=>{const t=["1:1","3:2","3:4","3:4.5","3:5","16:9"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(v,{label:"Ratio",desc:"종횡비 변형 비교 (type=media, radius=12)",children:e.jsx(f,{gap:16,children:t.map(r=>e.jsxs("div",{style:{width:148},children:[e.jsx(n,{src:i,type:"media",ratio:r,radius:12,slotTopRight:e.jsx(s,{}),slotBottomRight:e.jsx(y,{})}),e.jsx(u,{children:r})]},r))})})})}},m={tags:["!autodocs"],name:"Radius",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(v,{label:"Radius",desc:"코너 라디우스 변형 비교 (type=image)",children:e.jsx(f,{gap:12,children:[0,8,12,16,20].map(t=>e.jsxs("div",{style:{width:148},children:[e.jsx(n,{src:i,type:"image",radius:t,slotTopLeft:e.jsx(l,{}),slotTopRight:e.jsx(s,{}),slotBottomLeft:e.jsx(h,{})}),e.jsxs(u,{children:[t,"px"]})]},t))})})})},g={tags:["!autodocs"],name:"Matrix",render:()=>{const t=["image","media","gallery"],r=["1:1","3:2","3:4","3:4.5","3:5","16:9"];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Ratio \\ Type"}),t.map(o=>e.jsx("th",{style:{padding:"8px 16px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:o},o))]})}),e.jsx("tbody",{children:r.map(o=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:o}),t.map(a=>e.jsx("td",{style:{padding:"12px 8px",verticalAlign:"middle",textAlign:"center"},children:e.jsx("div",{style:{width:148},children:e.jsx(n,{src:i,type:a,ratio:o,radius:12,slotTopLeft:e.jsx(l,{}),slotTopRight:e.jsx(s,{}),slotBottomLeft:a==="image"?e.jsx(h,{}):void 0,slotBottomRight:a!=="image"?e.jsx(y,{}):void 0})})},a))]},o))})]})})}},x={tags:["!autodocs"],name:"Radius Matrix",render:()=>{const t=["image","media","gallery"],r=[0,8,12,16,20];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Radius \\ Type"}),t.map(o=>e.jsx("th",{style:{padding:"8px 16px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:o},o))]})}),e.jsx("tbody",{children:r.map(o=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsxs("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:[o,"px"]}),t.map(a=>e.jsx("td",{style:{padding:"12px 8px",verticalAlign:"middle",textAlign:"center"},children:e.jsx("div",{style:{width:148},children:e.jsx(n,{src:i,type:a,radius:o,slotTopLeft:e.jsx(l,{}),slotTopRight:e.jsx(s,{}),slotBottomLeft:a==="image"?e.jsx(h,{}):void 0,slotBottomRight:a!=="image"?e.jsx(y,{}):void 0})})},a))]},o))})]})})}};var j,b,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 200
  }}><Story /></div>],
  args: {
    src: IMG_SRC,
    type: 'image',
    ratio: '1:1',
    radius: 12
  }
}`,...(T=(b=d.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var R,S,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Type',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Type" desc="Image / Media / Gallery 타입별 비교 (radius=12)">
        <Row gap={16}>
          <div style={{
          width: 148
        }}>
            <ImageThumbnail src={IMG_SRC} type="image" radius={12} slotTopLeft={<BadgeOverlay />} slotTopRight={<MoreIcon />} slotBottomLeft={<ProfileHorizontal />} />
            <Caption>image</Caption>
          </div>
          <div style={{
          width: 148
        }}>
            <ImageThumbnail src={IMG_SRC} type="media" radius={12} slotTopLeft={<BadgeOverlay />} slotTopRight={<MoreIcon />} slotBottomRight={<DurationLabel />} />
            <Caption>media</Caption>
          </div>
          <div style={{
          width: 148
        }}>
            <ImageThumbnail src={IMG_SRC} type="gallery" radius={12} slotTopLeft={<BadgeOverlay />} slotTopRight={<MoreIcon />} slotBottomRight={<DurationLabel />} />
            <Caption>gallery</Caption>
          </div>
        </Row>
      </Block>
    </div>
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var B,w,L;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Ratio',
  render: () => {
    const ratios: ImageThumbnailRatio[] = ['1:1', '3:2', '3:4', '3:4.5', '3:5', '16:9'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <Block label="Ratio" desc="종횡비 변형 비교 (type=media, radius=12)">
          <Row gap={16}>
            {ratios.map(r => <div key={r} style={{
            width: 148
          }}>
                <ImageThumbnail src={IMG_SRC} type="media" ratio={r} radius={12} slotTopRight={<MoreIcon />} slotBottomRight={<DurationLabel />} />
                <Caption>{r}</Caption>
              </div>)}
          </Row>
        </Block>
      </div>;
  }
}`,...(L=(w=c.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var M,C,k;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Radius',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Radius" desc="코너 라디우스 변형 비교 (type=image)">
        <Row gap={12}>
          {([0, 8, 12, 16, 20] as ImageThumbnailRadius[]).map(r => <div key={r} style={{
          width: 148
        }}>
              <ImageThumbnail src={IMG_SRC} type="image" radius={r} slotTopLeft={<BadgeOverlay />} slotTopRight={<MoreIcon />} slotBottomLeft={<ProfileHorizontal />} />
              <Caption>{r}px</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(k=(C=m.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var z,P,A;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Matrix',
  render: () => {
    const types: ImageThumbnailType[] = ['image', 'media', 'gallery'];
    const ratios: ImageThumbnailRatio[] = ['1:1', '3:2', '3:4', '3:4.5', '3:5', '16:9'];
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
            {ratios.map(r => <tr key={r} style={{
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '12px 16px 12px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>
                  {r}
                </td>
                {types.map(type => <td key={type} style={{
              padding: '12px 8px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                    <div style={{
                width: 148
              }}>
                      <ImageThumbnail src={IMG_SRC} type={type} ratio={r} radius={12} slotTopLeft={<BadgeOverlay />} slotTopRight={<MoreIcon />} slotBottomLeft={type === 'image' ? <ProfileHorizontal /> : undefined} slotBottomRight={type !== 'image' ? <DurationLabel /> : undefined} />
                    </div>
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(A=(P=g.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var W,D,_;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  name: 'Radius Matrix',
  render: () => {
    const types: ImageThumbnailType[] = ['image', 'media', 'gallery'];
    const radii: ImageThumbnailRadius[] = [0, 8, 12, 16, 20];
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
                Radius \\ Type
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
            {radii.map(r => <tr key={r} style={{
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '12px 16px 12px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>
                  {r}px
                </td>
                {types.map(type => <td key={type} style={{
              padding: '12px 8px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                    <div style={{
                width: 148
              }}>
                      <ImageThumbnail src={IMG_SRC} type={type} radius={r} slotTopLeft={<BadgeOverlay />} slotTopRight={<MoreIcon />} slotBottomLeft={type === 'image' ? <ProfileHorizontal /> : undefined} slotBottomRight={type !== 'image' ? <DurationLabel /> : undefined} />
                    </div>
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(_=(D=x.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const F=["Playground","Types","Ratio","Radii","Matrix","RadiusMatrix"],X=Object.freeze(Object.defineProperty({__proto__:null,Matrix:g,Playground:d,Radii:m,RadiusMatrix:x,Ratio:c,Types:p,__namedExportsOrder:F,default:G},Symbol.toStringTag,{value:"Module"}));export{d as P,X as T};
