import{j as e}from"./jsx-runtime-DiklIkkE.js";import{T as r}from"./Thumbnail-DPBEkqXT.js";const s=({children:t,gap:d=16})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:d},children:t}),i=({label:t,desc:d,children:a})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:t}),d&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:d}),a]}),n=({children:t})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:t}),A={borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap",width:"100%",border:"1px solid var(--color-neutral-stroke-divider)",marginBottom:48},V={padding:"8px 16px",textAlign:"left",fontWeight:700,color:"var(--color-neutral-foreground-subtle-1)",background:"var(--color-neutral-background-raised-1)",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},l={padding:"10px 16px",color:"var(--color-neutral-foreground-default)",background:"var(--color-neutral-background-default)",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},P={...l,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)"},o="https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=400&auto=format&fit=crop",W={title:"Components/Thumbnail",component:r,parameters:{layout:"centered",docs:{description:{component:`
콘텐츠 목록에서 사용하는 **썸네일** 컴포넌트입니다.
타입·반경·비율과 4개의 오버레이 슬롯(badge · showMore · rank · duration)을 조합할 수 있습니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Dim | Shadow | Duration Slot | Description |
|------|-----|--------|--------------|-------------|
| \`image\` | 3% | none | — | 기본 이미지 썸네일 |
| \`media\` | 0% | 8% (bottom) | ✓ | 동영상 콘텐츠 썸네일 |
| \`gallery\` | 0% | 8% (top + bottom) | ✓ | 갤러리(다중) 콘텐츠 썸네일 |

### Ratio

| Ratio | 비율 | Usage |
|-------|------|-------|
| \`1:1\`   | 정사각형 | 프로필·앨범 썸네일 |
| \`3:2\`   | 가로형 | 일반 이미지 카드 |
| \`3:4\`   | 세로형 | 세로 이미지 카드 |
| \`3:4.5\` | 세로형 (길게) | 세로 이미지·숏폼 |
| \`3:5\`   | 세로형 (더 길게) | 쇼츠·릴스 썸네일 |
| \`16:9\`  | 와이드 | 동영상·뉴스 썸네일 |

### Radius

| Radius | Value | Usage |
|--------|-------|-------|
| \`0\` | 0px | 기본, 테두리 없음 |
| \`8\` | 8px | 소형 카드 |
| \`12\` | 12px | 중형 카드 |
| \`16\` | 16px | 대형 카드 |
| \`20\` | 20px | 대형 카드 (라운드) |

### Slots (Overlay)

4개의 고정 슬롯이 각 **36×36** 영역으로 코너에 배치됩니다.

| 위치 | Prop | 슬롯 크기 | 내용 | 사용 타입 |
|------|------|----------|------|----------|
| 좌상단 (topLeft) | \`badge\` | 36×36 | 텍스트 뱃지 (예: "LIVE", "NEW") | 모든 타입 |
| 우상단 (topRight) | \`showMore\` | 36×36 | \`icon.more\` 24×24 | 모든 타입 |
| 좌하단 (bottomLeft) | \`rank\` | 36×36 | 랭킹 숫자 | 모든 타입 |
| 우하단 (bottomRight) | \`duration\` | 36×36 | \`light.icon.video\` 14×14 + 시간 텍스트 (12px / 700 / white) | media · gallery |

\`\`\`tsx
import { Thumbnail } from '@/components/Thumbnail';

<Thumbnail src={img} type="image" ratio="1:1" radius={12} />
<Thumbnail src={img} type="media" ratio="3:2" radius={8} duration="03:25" badge="LIVE" showMore />
<Thumbnail src={img} type="gallery" ratio="3:4" radius={12} duration="12:00" rank={1} />
\`\`\`
        `.trim()}}},argTypes:{type:{control:"select",options:["image","media","gallery"],description:"썸네일 타입",table:{type:{summary:"ThumbnailType"},defaultValue:{summary:"image"}}},ratio:{control:"select",options:["1:1","3:2","3:4","3:4.5","3:5","16:9"],description:"이미지 비율 — 설정 시 width 기준으로 height 자동 계산",table:{type:{summary:"ThumbnailRatio"}}},radius:{control:"select",options:[0,8,12,16,20],description:"모서리 반경",table:{type:{summary:"ThumbnailRadius"},defaultValue:{summary:"none"}}},src:{control:"text",description:"이미지 URL"},width:{control:"number",description:"너비 (px)",table:{defaultValue:{summary:"150"}}},height:{control:"number",description:"높이 (px) — ratio 미설정 시 사용",table:{defaultValue:{summary:"150"}}},duration:{control:"text",description:"재생시간 (media·gallery) — light.icon.video 14×14 + 텍스트로 구성"},badge:{control:"text",description:"좌상단 코너 뱃지 텍스트"},rank:{control:"number",description:"좌하단 랭킹 번호"},showMore:{control:"boolean",description:"우상단 icon.more (24×24) 표시",table:{defaultValue:{summary:"false"}}}}},c={args:{type:"media",ratio:"1:1",radius:12,src:o,width:150,duration:"03:25",badge:"LIVE",showMore:!0}},p={name:"Type",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4,fontFamily:"Pretendard, sans-serif"},children:[e.jsx(i,{label:"Measurement",desc:"타입에 따라 딤·쉐도우·duration 슬롯 사용 여부가 달라집니다.",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:A,children:[e.jsx("thead",{children:e.jsx("tr",{children:["Type","Dim","Shadow","Duration Slot","Description"].map(t=>e.jsx("th",{style:V,children:t},t))})}),e.jsx("tbody",{children:[["image","3%","none","—","기본 이미지 썸네일"],["media","0%","8%  (bottom)","✓","동영상 콘텐츠 썸네일"],["gallery","0%","8%  (top + bottom)","✓","갤러리(다중) 콘텐츠 썸네일"]].map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:P,children:t[0]}),e.jsx("td",{style:l,children:t[1]}),e.jsx("td",{style:l,children:t[2]}),e.jsx("td",{style:{...l,textAlign:"center"},children:t[3]}),e.jsx("td",{style:l,children:t[4]})]},t[0]))})]})})}),e.jsx(i,{label:"Usage",children:e.jsx(s,{gap:16,children:["image","media","gallery"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{src:o,type:t,radius:8,width:150,height:150,duration:"03:25"}),e.jsxs(n,{children:['type="',t,'"']})]},t))})})]})},u={name:"Ratio",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:e.jsx(i,{label:"Usage",desc:"width 기준으로 height가 자동 계산됩니다.",children:e.jsx(s,{gap:16,children:["1:1","3:2","3:4","3:4.5","3:5","16:9"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{src:o,type:"image",radius:8,width:120,ratio:t}),e.jsx(n,{children:t})]},t))})})})},m={name:"Radius",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:e.jsx(i,{label:"Usage",desc:"모서리 반경 옵션입니다.",children:e.jsx(s,{gap:16,children:[0,8,12,16,20].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{src:o,type:"image",radius:t,width:150,height:150}),e.jsxs(n,{children:["radius=",t]})]},String(t)))})})})},g={name:"Slots",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4,fontFamily:"Pretendard, sans-serif"},children:[e.jsx(i,{label:"Slot Layout",desc:"4개의 오버레이 슬롯이 36×36 영역으로 각 코너에 고정 배치됩니다.",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:A,children:[e.jsx("thead",{children:e.jsx("tr",{children:["위치","Prop","슬롯 크기","내용","사용 타입"].map(t=>e.jsx("th",{style:V,children:t},t))})}),e.jsx("tbody",{children:[["좌상단  (topLeft)","badge","36×36",'텍스트 뱃지  (예: "LIVE", "NEW")',"모든 타입"],["우상단  (topRight)","showMore","36×36","icon.more  24×24","모든 타입"],["좌하단  (bottomLeft)","rank","36×36","랭킹 숫자","모든 타입"],["우하단  (bottomRight)","duration","36×36","light.icon.video  14×14  +  시간 텍스트  (12px / 700 / white)","media · gallery"]].map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:P,children:t[0]}),e.jsx("td",{style:l,children:e.jsx("code",{children:t[1]})}),e.jsx("td",{style:{...l,textAlign:"center"},children:t[2]}),e.jsx("td",{style:l,children:t[3]}),e.jsx("td",{style:l,children:t[4]})]},t[0]))})]})})}),e.jsx(i,{label:"badge",desc:"좌상단 코너 뱃지. LIVE, NEW 등 상태 표시에 사용합니다.",children:e.jsx(s,{gap:16,children:["LIVE","NEW"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{src:o,type:"image",radius:8,width:150,height:150,badge:t}),e.jsxs(n,{children:['badge="',t,'"']})]},t))})}),e.jsx(i,{label:"showMore",desc:"우상단 icon.more (24×24)를 표시합니다.",children:e.jsx(s,{gap:16,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{src:o,type:"image",radius:8,width:150,height:150,showMore:!0}),e.jsx(n,{children:"showMore"})]})})}),e.jsx(i,{label:"duration",desc:"우하단 재생시간. light.icon.video (14×14) + 시간 텍스트로 구성됩니다. media·gallery 타입에서만 표시됩니다.",children:e.jsx(s,{gap:16,children:["media","gallery"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{src:o,type:t,radius:8,width:150,height:150,duration:"03:25"}),e.jsxs(n,{children:['type="',t,'"']})]},t))})}),e.jsx(i,{label:"Combination",desc:"badge · showMore · rank · duration을 함께 사용하는 예시입니다.",children:e.jsxs(s,{gap:16,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{src:o,type:"media",radius:12,width:150,height:150,badge:"LIVE",showMore:!0,duration:"03:25"}),e.jsx(n,{children:"media + badge + more + duration"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{src:o,type:"gallery",radius:12,width:150,height:150,rank:1,showMore:!0,duration:"12:00"}),e.jsx(n,{children:"gallery + rank + more + duration"})]})]})})]})},h={name:"Matrix",render:()=>{const t=["image","media","gallery"],d=[0,8,12,16,20];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse",border:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-background-raised-1)"},children:[e.jsx("th",{style:{padding:"8px 16px",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:"type \\ radius"}),d.map(a=>e.jsx("th",{style:{padding:"8px 16px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textAlign:"center",borderBottom:"1px solid var(--color-neutral-stroke-divider)"},children:a},String(a)))]})}),e.jsx("tbody",{children:t.map(a=>e.jsxs("tr",{style:{background:"var(--color-neutral-background-default)",borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"16px",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle",background:"var(--color-neutral-background-default)"},children:a}),d.map(y=>e.jsx("td",{style:{padding:"12px 16px",verticalAlign:"middle",textAlign:"center",background:"var(--color-neutral-background-default)"},children:e.jsx(r,{src:o,type:a,radius:y,width:100,height:100,duration:a!=="image"?"03:25":void 0})},String(y)))]},a))})]})})}};var x,b,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'media',
    ratio: '1:1',
    radius: 12,
    src: IMG,
    width: 150,
    duration: '03:25',
    badge: 'LIVE',
    showMore: true
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,j,w;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Type',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4,
    fontFamily: 'Pretendard, sans-serif'
  }}>
      <Block label="Measurement" desc="타입에 따라 딤·쉐도우·duration 슬롯 사용 여부가 달라집니다.">
        <div style={{
        overflowX: 'auto'
      }}>
          <table style={TABLE_S}>
            <thead>
              <tr>
                {['Type', 'Dim', 'Shadow', 'Duration Slot', 'Description'].map(h => <th key={h} style={TH_S}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {([['image', '3%', 'none', '—', '기본 이미지 썸네일'], ['media', '0%', '8%  (bottom)', '✓', '동영상 콘텐츠 썸네일'], ['gallery', '0%', '8%  (top + bottom)', '✓', '갤러리(다중) 콘텐츠 썸네일']] as const).map(row => <tr key={row[0]}>
                  <td style={TD_LABEL_S}>{row[0]}</td>
                  <td style={TD_S}>{row[1]}</td>
                  <td style={TD_S}>{row[2]}</td>
                  <td style={{
                ...TD_S,
                textAlign: 'center'
              }}>{row[3]}</td>
                  <td style={TD_S}>{row[4]}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="Usage">
        <Row gap={16}>
          {(['image', 'media', 'gallery'] as ThumbnailType[]).map(t => <div key={t} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <Thumbnail src={IMG} type={t} radius={8} width={150} height={150} duration="03:25" />
              <Caption>type="{t}"</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,T,S;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Ratio',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="Usage" desc="width 기준으로 height가 자동 계산됩니다.">
        <Row gap={16}>
          {(['1:1', '3:2', '3:4', '3:4.5', '3:5', '16:9'] as ThumbnailRatio[]).map(r => <div key={r} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <Thumbnail src={IMG} type="image" radius={8} width={120} ratio={r} />
              <Caption>{r}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(S=(T=u.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var D,I,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Radius',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="Usage" desc="모서리 반경 옵션입니다.">
        <Row gap={16}>
          {([0, 8, 12, 16, 20] as ThumbnailRadius[]).map(r => <div key={String(r)} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <Thumbnail src={IMG} type="image" radius={r} width={150} height={150} />
              <Caption>radius={r}</Caption>
            </div>)}
        </Row>
      </Block>
    </div>
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var M,B,L;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Slots',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4,
    fontFamily: 'Pretendard, sans-serif'
  }}>

      <Block label="Slot Layout" desc="4개의 오버레이 슬롯이 36×36 영역으로 각 코너에 고정 배치됩니다.">
        <div style={{
        overflowX: 'auto'
      }}>
          <table style={TABLE_S}>
            <thead>
              <tr>
                {['위치', 'Prop', '슬롯 크기', '내용', '사용 타입'].map(h => <th key={h} style={TH_S}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {([['좌상단  (topLeft)', 'badge', '36×36', '텍스트 뱃지  (예: "LIVE", "NEW")', '모든 타입'], ['우상단  (topRight)', 'showMore', '36×36', 'icon.more  24×24', '모든 타입'], ['좌하단  (bottomLeft)', 'rank', '36×36', '랭킹 숫자', '모든 타입'], ['우하단  (bottomRight)', 'duration', '36×36', 'light.icon.video  14×14  +  시간 텍스트  (12px / 700 / white)', 'media · gallery']] as const).map(row => <tr key={row[0]}>
                  <td style={TD_LABEL_S}>{row[0]}</td>
                  <td style={TD_S}><code>{row[1]}</code></td>
                  <td style={{
                ...TD_S,
                textAlign: 'center'
              }}>{row[2]}</td>
                  <td style={TD_S}>{row[3]}</td>
                  <td style={TD_S}>{row[4]}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="badge" desc="좌상단 코너 뱃지. LIVE, NEW 등 상태 표시에 사용합니다.">
        <Row gap={16}>
          {['LIVE', 'NEW'].map(b => <div key={b} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <Thumbnail src={IMG} type="image" radius={8} width={150} height={150} badge={b} />
              <Caption>badge="{b}"</Caption>
            </div>)}
        </Row>
      </Block>

      <Block label="showMore" desc="우상단 icon.more (24×24)를 표시합니다.">
        <Row gap={16}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
            <Thumbnail src={IMG} type="image" radius={8} width={150} height={150} showMore />
            <Caption>showMore</Caption>
          </div>
        </Row>
      </Block>

      <Block label="duration" desc="우하단 재생시간. light.icon.video (14×14) + 시간 텍스트로 구성됩니다. media·gallery 타입에서만 표시됩니다.">
        <Row gap={16}>
          {(['media', 'gallery'] as ThumbnailType[]).map(t => <div key={t} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
              <Thumbnail src={IMG} type={t} radius={8} width={150} height={150} duration="03:25" />
              <Caption>type="{t}"</Caption>
            </div>)}
        </Row>
      </Block>

      <Block label="Combination" desc="badge · showMore · rank · duration을 함께 사용하는 예시입니다.">
        <Row gap={16}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
            <Thumbnail src={IMG} type="media" radius={12} width={150} height={150} badge="LIVE" showMore duration="03:25" />
            <Caption>media + badge + more + duration</Caption>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
            <Thumbnail src={IMG} type="gallery" radius={12} width={150} height={150} rank={1} showMore duration="12:00" />
            <Caption>gallery + rank + more + duration</Caption>
          </div>
        </Row>
      </Block>

    </div>
}`,...(L=(B=g.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var E,_,C;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const types: ThumbnailType[] = ['image', 'media', 'gallery'];
    const radiuses: ThumbnailRadius[] = [0, 8, 12, 16, 20];
    return <div style={{
      fontFamily: 'Pretendard, sans-serif',
      overflowX: 'auto',
      padding: 4
    }}>
        <table style={{
        borderCollapse: 'collapse',
        border: '1px solid var(--color-neutral-stroke-divider)'
      }}>
          <thead>
            <tr style={{
            background: 'var(--color-neutral-background-raised-1)'
          }}>
              <th style={{
              padding: '8px 16px',
              textAlign: 'left',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                type \\ radius
              </th>
              {radiuses.map(r => <th key={String(r)} style={{
              padding: '8px 16px',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textAlign: 'center',
              borderBottom: '1px solid var(--color-neutral-stroke-divider)'
            }}>
                  {r}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {types.map(t => <tr key={t} style={{
            background: 'var(--color-neutral-background-default)',
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '16px',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle',
              background: 'var(--color-neutral-background-default)'
            }}>
                  {t}
                </td>
                {radiuses.map(r => <td key={String(r)} style={{
              padding: '12px 16px',
              verticalAlign: 'middle',
              textAlign: 'center',
              background: 'var(--color-neutral-background-default)'
            }}>
                    <Thumbnail src={IMG} type={t} radius={r} width={100} height={100} duration={t !== 'image' ? '03:25' : undefined} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(C=(_=h.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const z=["Playground","Types","Ratios","Radiuses","Slots","Matrix"],U=Object.freeze(Object.defineProperty({__proto__:null,Matrix:h,Playground:c,Radiuses:m,Ratios:u,Slots:g,Types:p,__namedExportsOrder:z,default:W},Symbol.toStringTag,{value:"Module"}));export{c as P,U as T};
