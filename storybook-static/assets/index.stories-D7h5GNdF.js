import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as m,I as g,e as w,b as y,a as x,d as f}from"./ImageThumbnail-D8tMuG9b.js";import"./index-Bc2G9s8g.js";const o="https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop",s=({children:a,gap:l=8})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:l},children:a}),i=({label:a,desc:l,children:c})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"#9999B8",margin:"0 0 4px"},children:a}),l&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"#55557A",margin:"0 0 12px",lineHeight:1.6},children:l}),c]}),t=({children:a})=>e.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:11,color:"#9999B8",margin:"6px 0 0",textAlign:"center"},children:a}),j={title:"Components/Images",component:m,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
비율·딤·그림자를 조합하는 이미지 래퍼 컴포넌트 패밀리입니다.
Rectangle, Circle 형태와 Place·Opacity·Shadow 레이어 컴포넌트로 구성됩니다.

---

<div style="margin-bottom:30px"></div>

### 컴포넌트 구성

| Component | Description | Usage |
|-----------|-------------|-------|
| \`Rectangle\` | 비율·딤·그림자·레이블을 조합한 이미지 래퍼 | 콘텐츠 썸네일, 배너 |
| \`Circle\` | 원형 이미지 | 프로필·아바타·채널 썸네일 |
| \`Thumbnail\` | 슬롯 오버레이가 있는 정사각형 이미지 (Image·Media·Gallery) | 피드 카드, 미디어 그리드 |
| \`Place\` | 이미지 배치 상태 (default·noImage·placeHolder) | 이미지 로딩 상태 표현 |
| \`Opacity\` | 검정 딤 레이어 (none·3%·40%) | 이미지 위 텍스트 가독성 확보 |
| \`Shadow\` | 방향성 그라디언트 오버레이 | 이미지 엣지 처리 |

\`\`\`tsx
import { ImageRect, ImageCircle, ImagePlace, ImageOpacity, ImageShadow } from '@/components/Images';

// Rectangle — 비율·딤·그림자 조합
<ImageRect src={imgSrc} ratio="16:9" opacity="40%" shadow="down" label="제목" />

// Circle — 원형 프로필
<ImageCircle src={imgSrc} size={48} />

// Place — 상태별 플레이스홀더
<ImagePlace type="placeHolder" size={120} />
\`\`\`
        `.trim()}}}},n={name:"Overview",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(i,{label:"Rectangle",desc:"비율·딤·그림자·레이블을 조합한 메인 이미지 래퍼",children:e.jsx(s,{gap:12,children:[{ratio:"16:9",label:"16:9 · default"},{ratio:"1:1",label:"1:1 · opacity 40%",opacity:"40%"},{ratio:"3:4",label:"3:4 · shadow down",shadow:"down"}].map(({ratio:a,label:l,opacity:c,shadow:h})=>e.jsxs("div",{style:{width:148},children:[e.jsx(m,{src:o,ratio:a,opacity:c??"none",shadow:h??"none"}),e.jsx(t,{children:l})]},l))})}),e.jsx(i,{label:"Circle",desc:"원형 이미지. 프로필·아바타·채널 썸네일에 사용",children:e.jsx(s,{gap:12,children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(g,{src:o,size:a}),e.jsx(t,{children:a})]},a))})}),e.jsx(i,{label:"Thumbnail",desc:"슬롯 오버레이가 있는 정사각형 이미지. Image · Media · Gallery 타입",children:e.jsx(s,{gap:12,children:[{type:"image",label:"image"},{type:"media",label:"media"},{type:"gallery",label:"gallery"}].map(({type:a,label:l})=>e.jsxs("div",{style:{width:148},children:[e.jsx(w,{src:o,type:a,radius:12}),e.jsx(t,{children:l})]},a))})}),e.jsx(i,{label:"Place",desc:"이미지 배치 상태 (default · noImage · placeHolder)",children:e.jsx(s,{gap:12,children:["default","noImage","placeHolder"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(y,{type:a,size:148,src:a==="default"?o:void 0}),e.jsx(t,{children:a})]},a))})}),e.jsx(i,{label:"Opacity",desc:"검정 딤 레이어 (none · 3% · 40%)",children:e.jsx(s,{gap:12,children:["none","3%","40%"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(x,{src:o,opacity:a,width:148,height:148}),e.jsx(t,{children:a})]},a))})}),e.jsx(i,{label:"Shadow",desc:"방향성 그라디언트 오버레이 (none · up · down · up&down)",children:e.jsx(s,{gap:12,children:[{shadow:"none",showShadow:!1},{shadow:"up",showShadow:!0},{shadow:"down",showShadow:!0},{shadow:"up&down",showShadow:!0}].map(({shadow:a,showShadow:l})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(f,{src:o,shadow:a,showShadow:l,width:148,height:148}),e.jsx(t,{children:a})]},a))})})]})};var d,r,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="Rectangle" desc="비율·딤·그림자·레이블을 조합한 메인 이미지 래퍼">
        <Row gap={12}>
          {[{
          ratio: '16:9' as const,
          label: '16:9 · default'
        }, {
          ratio: '1:1' as const,
          label: '1:1 · opacity 40%',
          opacity: '40%' as const
        }, {
          ratio: '3:4' as const,
          label: '3:4 · shadow down',
          shadow: 'down' as const
        }].map(({
          ratio,
          label,
          opacity,
          shadow
        }) => <div key={label} style={{
          width: 148
        }}>
              <ImageRect src={IMG_SRC} ratio={ratio} opacity={opacity ?? 'none'} shadow={shadow ?? 'none'} />
              <Caption>{label}</Caption>
            </div>)}
        </Row>
      </Block>

      <Block label="Circle" desc="원형 이미지. 프로필·아바타·채널 썸네일에 사용">
        <Row gap={12}>
          {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ImageCircle src={IMG_SRC} size={size} />
              <Caption>{size}</Caption>
            </div>)}
        </Row>
      </Block>

      <Block label="Thumbnail" desc="슬롯 오버레이가 있는 정사각형 이미지. Image · Media · Gallery 타입">
        <Row gap={12}>
          {[{
          type: 'image' as const,
          label: 'image'
        }, {
          type: 'media' as const,
          label: 'media'
        }, {
          type: 'gallery' as const,
          label: 'gallery'
        }].map(({
          type,
          label
        }) => <div key={type} style={{
          width: 148
        }}>
              <ImageThumbnail src={IMG_SRC} type={type} radius={12} />
              <Caption>{label}</Caption>
            </div>)}
        </Row>
      </Block>

      <Block label="Place" desc="이미지 배치 상태 (default · noImage · placeHolder)">
        <Row gap={12}>
          {(['default', 'noImage', 'placeHolder'] as const).map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ImagePlace type={type} size={148} src={type === 'default' ? IMG_SRC : undefined} />
              <Caption>{type}</Caption>
            </div>)}
        </Row>
      </Block>

      <Block label="Opacity" desc="검정 딤 레이어 (none · 3% · 40%)">
        <Row gap={12}>
          {(['none', '3%', '40%'] as const).map(opacity => <div key={opacity} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ImageOpacity src={IMG_SRC} opacity={opacity} width={148} height={148} />
              <Caption>{opacity}</Caption>
            </div>)}
        </Row>
      </Block>

      <Block label="Shadow" desc="방향성 그라디언트 오버레이 (none · up · down · up&amp;down)">
        <Row gap={12}>
          {[{
          shadow: 'none' as const,
          showShadow: false
        }, {
          shadow: 'up' as const,
          showShadow: true
        }, {
          shadow: 'down' as const,
          showShadow: true
        }, {
          shadow: 'up&down' as const,
          showShadow: true
        }].map(({
          shadow,
          showShadow
        }) => <div key={shadow} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <ImageShadow src={IMG_SRC} shadow={shadow} showShadow={showShadow} width={148} height={148} />
              <Caption>{shadow}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(p=(r=n.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const v=["Overview"];export{n as Overview,v as __namedExportsOrder,j as default};
