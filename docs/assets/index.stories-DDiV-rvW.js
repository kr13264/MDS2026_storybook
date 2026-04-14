import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as t}from"./Overlay-BJ4utkoh.js";import{B as l}from"./Ad-1-Hsbl1U.js";import{B as r}from"./Count-C23WycZA.js";import{B as c}from"./Tooltip-BA_bmyt3.js";import{B as p}from"./Verified-CBYU3A0P.js";const n=({children:a,gap:d=12})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:d},children:a}),s=({label:a,desc:d,children:y})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"#9999B8",margin:"0 0 4px"},children:a}),d&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"#55557A",margin:"0 0 12px",lineHeight:1.6},children:d}),y]}),i=({children:a})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"#9999B8",margin:"6px 0 0",textAlign:"center"},children:a}),m={title:"Assets/Badges",component:t,parameters:{layout:"padded",docs:{description:{component:`
상태, 카운트, 레이블, 인증 등을 표시하는 뱃지 컴포넌트 패밀리입니다.
Overlay, Ad, Count, Tooltip, Verified 5종의 서브 컴포넌트로 구성됩니다.

---

<div style="margin-bottom:30px"></div>

### 컴포넌트 구성

| Component | Description | Usage |
|-----------|-------------|-------|
| \`Overlay\` | 이미지 위 오버레이 뱃지 (Basic·Live·Live Label) | 썸네일 위 라벨, 라이브 표시 |
| \`Ad\` | 커머스/광고 뱃지 (Best·Coupon·Official·Purchase·Rating·Review·Wish) | 상품 카드, 검색 결과 |
| \`Count\` | 알림 카운트 뱃지 (Dot·Number·Max·New) | 탭바, 아이콘 위 알림 |
| \`Tooltip\` | 툴팁형 뱃지 (Md·Sm × Arrow Left·Right) | 신규 기능 안내, 알림 |
| \`Verified\` | 인증 아이콘 뱃지 (Official·Local·Verified) | 프로필, 채널명 옆 |

\`\`\`tsx
import { BadgeOverlay, BadgeAd, BadgeCount, BadgeTooltip, BadgeVerified } from '@/components/Badges';

<BadgeOverlay type="basic" color="alpha" weight="regular" text="배지" />
<BadgeAd type="best" text="BEST아이템" />
<BadgeCount type="number" count={2} />
<BadgeTooltip size="md" arrowLocation="left" text="일이삼사오육칠팔" />
<BadgeVerified type="official" />
\`\`\`
        `.trim()}}}},o={name:"Overview",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(s,{label:"Overlay",desc:"이미지 위에 오버레이되는 뱃지. Basic(Alpha/Solid × Regular/Bold), Live, Live Label 타입을 지원합니다.",children:e.jsxs(n,{gap:12,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(t,{type:"basic",color:"alpha",weight:"regular"}),e.jsx(i,{children:"Alpha · Regular"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(t,{type:"basic",color:"alpha",weight:"bold"}),e.jsx(i,{children:"Alpha · Bold"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(t,{type:"basic",color:"solid",weight:"regular"}),e.jsx(i,{children:"Solid · Regular"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(t,{type:"basic",color:"solid",weight:"bold"}),e.jsx(i,{children:"Solid · Bold"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(t,{type:"live"}),e.jsx(i,{children:"Live"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(t,{type:"liveLabel",viewCount:"1.6만 시청"}),e.jsx(i,{children:"Live Label"})]})]})}),e.jsx(s,{label:"Ad",desc:"커머스/광고용 뱃지. 상품 카드에서 BEST, 쿠폰, 공식, 구매, 별점, 리뷰, 찜 등을 표시합니다.",children:e.jsxs(n,{gap:12,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(l,{type:"best"}),e.jsx(i,{children:"Best"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(l,{type:"couponBig"}),e.jsx(i,{children:"Coupon Big"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(l,{type:"official"}),e.jsx(i,{children:"Official"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(l,{type:"couponSmall"}),e.jsx(i,{children:"Coupon Small"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(l,{type:"purchase"}),e.jsx(i,{children:"Purchase"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(l,{type:"rating",rating:4,reviewCount:87}),e.jsx(i,{children:"Rating"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(l,{type:"review"}),e.jsx(i,{children:"Review"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(l,{type:"wish"}),e.jsx(i,{children:"Wish"})]})]})}),e.jsx(s,{label:"Count",desc:"알림 카운트 뱃지. 기본 dot, 숫자, 최대(99+), New 타입을 지원합니다.",children:e.jsxs(n,{gap:16,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(r,{type:"default"}),e.jsx(i,{children:"Default"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(r,{type:"number",count:2}),e.jsx(i,{children:"Number"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(r,{type:"max"}),e.jsx(i,{children:"Max (99+)"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(r,{type:"new"}),e.jsx(i,{children:"New"})]})]})}),e.jsx(s,{label:"Tooltip",desc:"툴팁형 뱃지. Md/Sm 사이즈와 Left/Right 화살표 위치를 지원합니다.",children:e.jsxs(n,{gap:20,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(c,{size:"md",arrowLocation:"left"}),e.jsx(i,{children:"Md · Left"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(c,{size:"md",arrowLocation:"right"}),e.jsx(i,{children:"Md · Right"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(c,{size:"sm",arrowLocation:"left"}),e.jsx(i,{children:"Sm · Left"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(c,{size:"sm",arrowLocation:"right"}),e.jsx(i,{children:"Sm · Right"})]})]})}),e.jsx(s,{label:"Verified",desc:"인증 아이콘 뱃지. 공식, 지역, 인증(소/대) 타입을 지원합니다.",children:e.jsxs(n,{gap:16,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(p,{type:"official"}),e.jsx(i,{children:"Official"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(p,{type:"local"}),e.jsx(i,{children:"Local"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(p,{type:"verifiedSm"}),e.jsx(i,{children:"Verified Sm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[e.jsx(p,{type:"verifiedLg"}),e.jsx(i,{children:"Verified Lg"})]})]})})]})};var x,g,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      {/* Overlay */}
      <Block label="Overlay" desc="이미지 위에 오버레이되는 뱃지. Basic(Alpha/Solid × Regular/Bold), Live, Live Label 타입을 지원합니다.">
        <Row gap={12}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeOverlay type="basic" color="alpha" weight="regular" />
            <Caption>Alpha · Regular</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeOverlay type="basic" color="alpha" weight="bold" />
            <Caption>Alpha · Bold</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeOverlay type="basic" color="solid" weight="regular" />
            <Caption>Solid · Regular</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeOverlay type="basic" color="solid" weight="bold" />
            <Caption>Solid · Bold</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeOverlay type="live" />
            <Caption>Live</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeOverlay type="liveLabel" viewCount="1.6만 시청" />
            <Caption>Live Label</Caption>
          </div>
        </Row>
      </Block>

      {/* Ad */}
      <Block label="Ad" desc="커머스/광고용 뱃지. 상품 카드에서 BEST, 쿠폰, 공식, 구매, 별점, 리뷰, 찜 등을 표시합니다.">
        <Row gap={12}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeAd type="best" />
            <Caption>Best</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeAd type="couponBig" />
            <Caption>Coupon Big</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeAd type="official" />
            <Caption>Official</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeAd type="couponSmall" />
            <Caption>Coupon Small</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeAd type="purchase" />
            <Caption>Purchase</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeAd type="rating" rating={4.0} reviewCount={87} />
            <Caption>Rating</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeAd type="review" />
            <Caption>Review</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeAd type="wish" />
            <Caption>Wish</Caption>
          </div>
        </Row>
      </Block>

      {/* Count */}
      <Block label="Count" desc="알림 카운트 뱃지. 기본 dot, 숫자, 최대(99+), New 타입을 지원합니다.">
        <Row gap={16}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeCount type="default" />
            <Caption>Default</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeCount type="number" count={2} />
            <Caption>Number</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeCount type="max" />
            <Caption>Max (99+)</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeCount type="new" />
            <Caption>New</Caption>
          </div>
        </Row>
      </Block>

      {/* Tooltip */}
      <Block label="Tooltip" desc="툴팁형 뱃지. Md/Sm 사이즈와 Left/Right 화살표 위치를 지원합니다.">
        <Row gap={20}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
            <BadgeTooltip size="md" arrowLocation="left" />
            <Caption>Md · Left</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
            <BadgeTooltip size="md" arrowLocation="right" />
            <Caption>Md · Right</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
            <BadgeTooltip size="sm" arrowLocation="left" />
            <Caption>Sm · Left</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
            <BadgeTooltip size="sm" arrowLocation="right" />
            <Caption>Sm · Right</Caption>
          </div>
        </Row>
      </Block>

      {/* Verified */}
      <Block label="Verified" desc="인증 아이콘 뱃지. 공식, 지역, 인증(소/대) 타입을 지원합니다.">
        <Row gap={16}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeVerified type="official" />
            <Caption>Official</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeVerified type="local" />
            <Caption>Local</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeVerified type="verifiedSm" />
            <Caption>Verified Sm</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
            <BadgeVerified type="verifiedLg" />
            <Caption>Verified Lg</Caption>
          </div>
        </Row>
      </Block>
    </div>
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const v=["Overview"],w=Object.freeze(Object.defineProperty({__proto__:null,Overview:o,__namedExportsOrder:v,default:m},Symbol.toStringTag,{value:"Module"}));export{w as B,o as O};
