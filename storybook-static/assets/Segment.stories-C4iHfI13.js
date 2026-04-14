import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as W}from"./index-DRjF_FHU.js";import{c as x}from"./ButtonGroup-DpYg3QSM.js";const s=({children:a,gap:n=16})=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:n},children:a}),o=({label:a,desc:n,children:t})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:a}),n&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:n}),t]}),r=({children:a})=>e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"6px 0 0",textAlign:"center"},children:a}),l=a=>{var i;const[n,t]=W.useState(a.defaultValue??((i=a.options[0])==null?void 0:i.value)??"");return e.jsx(x,{...a,value:n,onChange:t})},A={title:"Components/Buttons/Segment",component:x,parameters:{layout:"centered",docs:{description:{component:`
동일 위계의 옵션 중 단일 선택이 필요한 경우 사용하는 세그먼트 버튼입니다.
2~4개의 옵션을 지원하며, **half**(텍스트+구분선)와 **full**(균등 분할) 두 가지 너비 유형을 제공합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Height | Description |
|------|--------|-------------|
| \`half\` | 44px | 텍스트 폭 기반. 항목 사이 1px 구분선 |
| \`full\` | 40px | 컨테이너 너비를 항목 수로 균등 분할. 각 항목이 개별 border |

### Shape

| Shape | borderRadius | Description |
|-------|-------------|-------------|
| \`square\` | 8px | 사각형 — 일반 레이아웃 (기본) |
| \`round\`  | 9999px | 원형(Pill) |

### Line (항목 수)

| Line | Description |
|------|-------------|
| 2 | 옵션 2개 |
| 3 | 옵션 3개 |
| 4 | 옵션 4개 |

\`\`\`tsx
import { ButtonSegment } from '@/components/Buttons';

<ButtonSegment
  options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]}
  value={value}
  onChange={setValue}
/>
\`\`\`
        `.trim()}}},argTypes:{shape:{control:"select",options:["square","round"],description:"버튼 형태",table:{type:{summary:"ButtonSegmentShape"},defaultValue:{summary:"square"}}},type:{control:"select",options:["half","full"],description:"너비 유형",table:{type:{summary:"ButtonSegmentType"},defaultValue:{summary:"half"}}},disabled:{control:"boolean",description:"전체 비활성",table:{defaultValue:{summary:"false"}}},value:{control:!1},onChange:{control:!1},options:{control:!1}}},d={decorators:[a=>e.jsx("div",{style:{width:320},children:e.jsx(a,{})})],render:a=>{const[n,t]=W.useState("all");return e.jsx(x,{...a,options:[{value:"all",label:"전체"},{value:"video",label:"동영상"},{value:"image",label:"이미지"}],value:n,onChange:t})},args:{shape:"square",type:"half",disabled:!1}},p={name:"Type",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(o,{label:"half",desc:"텍스트 폭 기반, 항목 사이 1px 구분선. 높이 44px.",children:e.jsxs(s,{gap:12,children:[e.jsx(l,{type:"half",options:[{value:"a",label:"전체"},{value:"b",label:"구독"}]}),e.jsx(l,{type:"half",options:[{value:"a",label:"인기"},{value:"b",label:"최신"},{value:"c",label:"추천"}]}),e.jsx(l,{type:"half",options:[{value:"a",label:"1일"},{value:"b",label:"1주"},{value:"c",label:"1개월"},{value:"d",label:"3개월"}]})]})}),e.jsx(o,{label:"full",desc:"컨테이너 너비를 항목 수로 균등 분할. 각 항목이 개별 border. 높이 40px.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(l,{type:"full",options:[{value:"a",label:"전체"},{value:"b",label:"구독"}]}),e.jsx(l,{type:"full",options:[{value:"a",label:"인기"},{value:"b",label:"최신"},{value:"c",label:"추천"}]}),e.jsx(l,{type:"full",options:[{value:"a",label:"1일"},{value:"b",label:"1주"},{value:"c",label:"1개월"},{value:"d",label:"3개월"}]})]})})]})},u={name:"Shape",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(o,{label:"square",desc:"borderRadius 8px. 일반 레이아웃에 사용합니다.",children:e.jsxs(s,{gap:12,children:[e.jsx(l,{shape:"square",type:"half",options:[{value:"a",label:"전체"},{value:"b",label:"구독"},{value:"c",label:"최신"}]}),e.jsx("div",{style:{width:240},children:e.jsx(l,{shape:"square",type:"full",options:[{value:"a",label:"전체"},{value:"b",label:"구독"},{value:"c",label:"최신"}]})})]})}),e.jsx(o,{label:"round",desc:"borderRadius 9999px. Pill 형태.",children:e.jsxs(s,{gap:12,children:[e.jsx(l,{shape:"round",type:"half",options:[{value:"a",label:"전체"},{value:"b",label:"구독"},{value:"c",label:"최신"}]}),e.jsx("div",{style:{width:240},children:e.jsx(l,{shape:"round",type:"full",options:[{value:"a",label:"전체"},{value:"b",label:"구독"},{value:"c",label:"최신"}]})})]})})]})},c={name:"Line",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(o,{label:"2개",children:e.jsxs(s,{gap:24,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(l,{type:"half",options:[{value:"a",label:"전체"},{value:"b",label:"구독"}]}),e.jsx(r,{children:"half"})]}),e.jsxs("div",{style:{width:240,display:"flex",flexDirection:"column",gap:4},children:[e.jsx(l,{type:"full",options:[{value:"a",label:"전체"},{value:"b",label:"구독"}]}),e.jsx(r,{children:"full"})]})]})}),e.jsx(o,{label:"3개",children:e.jsxs(s,{gap:24,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(l,{type:"half",options:[{value:"a",label:"인기"},{value:"b",label:"최신"},{value:"c",label:"추천"}]}),e.jsx(r,{children:"half"})]}),e.jsxs("div",{style:{width:240,display:"flex",flexDirection:"column",gap:4},children:[e.jsx(l,{type:"full",options:[{value:"a",label:"인기"},{value:"b",label:"최신"},{value:"c",label:"추천"}]}),e.jsx(r,{children:"full"})]})]})}),e.jsx(o,{label:"4개",children:e.jsxs(s,{gap:24,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(l,{type:"half",options:[{value:"a",label:"1일"},{value:"b",label:"1주"},{value:"c",label:"1개월"},{value:"d",label:"3개월"}]}),e.jsx(r,{children:"half"})]}),e.jsxs("div",{style:{width:320,display:"flex",flexDirection:"column",gap:4},children:[e.jsx(l,{type:"full",options:[{value:"a",label:"1일"},{value:"b",label:"1주"},{value:"c",label:"1개월"},{value:"d",label:"3개월"}]}),e.jsx(r,{children:"full"})]})]})})]})},b={name:"State",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(o,{label:"enabled",desc:"기본 상태.",children:e.jsxs(s,{gap:12,children:[e.jsx(l,{type:"half",options:[{value:"a",label:"전체"},{value:"b",label:"구독"},{value:"c",label:"최신"}]}),e.jsx("div",{style:{width:240},children:e.jsx(l,{type:"full",options:[{value:"a",label:"전체"},{value:"b",label:"구독"},{value:"c",label:"최신"}]})})]})}),e.jsx(o,{label:"disabled",desc:"전체 비활성 상태. opacity 0.4, pointer-events none.",children:e.jsxs(s,{gap:12,children:[e.jsx(l,{type:"half",options:[{value:"a",label:"전체"},{value:"b",label:"구독"},{value:"c",label:"최신"}],disabled:!0}),e.jsx("div",{style:{width:240},children:e.jsx(l,{type:"full",options:[{value:"a",label:"전체"},{value:"b",label:"구독"},{value:"c",label:"최신"}],disabled:!0})})]})}),e.jsx(o,{label:"item disabled",desc:"특정 항목만 비활성 상태.",children:e.jsxs(s,{gap:12,children:[e.jsx(l,{type:"half",options:[{value:"a",label:"전체"},{value:"b",label:"구독",disabled:!0},{value:"c",label:"최신"}]}),e.jsx("div",{style:{width:240},children:e.jsx(l,{type:"full",options:[{value:"a",label:"전체"},{value:"b",label:"구독",disabled:!0},{value:"c",label:"최신"}]})})]})})]})},v={name:"Matrix",render:()=>{const a=["square","round"],n=["half","full"];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"shape \\ type"}),n.map(t=>e.jsx("th",{style:{padding:"8px 24px",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:t},t))]})}),e.jsx("tbody",{children:a.map(t=>e.jsxs("tr",{style:{borderTop:"1px solid var(--color-neutral-stroke-divider)"},children:[e.jsx("td",{style:{padding:"16px 16px 16px 0",fontSize:12,fontWeight:600,color:"var(--color-neutral-foreground-subtle-1)",verticalAlign:"middle"},children:t}),n.map(i=>e.jsx("td",{style:{padding:"16px 24px",verticalAlign:"middle"},children:e.jsx("div",{style:{width:i==="full"?240:"auto"},children:e.jsx(l,{shape:t,type:i,options:[{value:"a",label:"전체"},{value:"b",label:"구독"},{value:"c",label:"최신"}]})})},i))]},t))})]})})}};var f,m,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>],
  render: args => {
    const [val, setVal] = useState('all');
    return <ButtonSegment {...args} options={[{
      value: 'all',
      label: '전체'
    }, {
      value: 'video',
      label: '동영상'
    }, {
      value: 'image',
      label: '이미지'
    }]} value={val} onChange={setVal} />;
  },
  args: {
    shape: 'square',
    type: 'half',
    disabled: false
  }
}`,...(y=(m=d.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var h,g,j;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Type',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="half" desc="텍스트 폭 기반, 항목 사이 1px 구분선. 높이 44px.">
        <Row gap={12}>
          <SegmentDemo type="half" options={[{
          value: 'a',
          label: '전체'
        }, {
          value: 'b',
          label: '구독'
        }]} />
          <SegmentDemo type="half" options={[{
          value: 'a',
          label: '인기'
        }, {
          value: 'b',
          label: '최신'
        }, {
          value: 'c',
          label: '추천'
        }]} />
          <SegmentDemo type="half" options={[{
          value: 'a',
          label: '1일'
        }, {
          value: 'b',
          label: '1주'
        }, {
          value: 'c',
          label: '1개월'
        }, {
          value: 'd',
          label: '3개월'
        }]} />
        </Row>
      </Block>
      <Block label="full" desc="컨테이너 너비를 항목 수로 균등 분할. 각 항목이 개별 border. 높이 40px.">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        width: 320
      }}>
          <SegmentDemo type="full" options={[{
          value: 'a',
          label: '전체'
        }, {
          value: 'b',
          label: '구독'
        }]} />
          <SegmentDemo type="full" options={[{
          value: 'a',
          label: '인기'
        }, {
          value: 'b',
          label: '최신'
        }, {
          value: 'c',
          label: '추천'
        }]} />
          <SegmentDemo type="full" options={[{
          value: 'a',
          label: '1일'
        }, {
          value: 'b',
          label: '1주'
        }, {
          value: 'c',
          label: '1개월'
        }, {
          value: 'd',
          label: '3개월'
        }]} />
        </div>
      </Block>
    </div>
}`,...(j=(g=p.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var S,D,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Shape',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="square" desc="borderRadius 8px. 일반 레이아웃에 사용합니다.">
        <Row gap={12}>
          <SegmentDemo shape="square" type="half" options={[{
          value: 'a',
          label: '전체'
        }, {
          value: 'b',
          label: '구독'
        }, {
          value: 'c',
          label: '최신'
        }]} />
          <div style={{
          width: 240
        }}>
            <SegmentDemo shape="square" type="full" options={[{
            value: 'a',
            label: '전체'
          }, {
            value: 'b',
            label: '구독'
          }, {
            value: 'c',
            label: '최신'
          }]} />
          </div>
        </Row>
      </Block>
      <Block label="round" desc="borderRadius 9999px. Pill 형태.">
        <Row gap={12}>
          <SegmentDemo shape="round" type="half" options={[{
          value: 'a',
          label: '전체'
        }, {
          value: 'b',
          label: '구독'
        }, {
          value: 'c',
          label: '최신'
        }]} />
          <div style={{
          width: 240
        }}>
            <SegmentDemo shape="round" type="full" options={[{
            value: 'a',
            label: '전체'
          }, {
            value: 'b',
            label: '구독'
          }, {
            value: 'c',
            label: '최신'
          }]} />
          </div>
        </Row>
      </Block>
    </div>
}`,...(w=(D=u.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,k,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Line',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="2개">
        <Row gap={24}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
            <SegmentDemo type="half" options={[{
            value: 'a',
            label: '전체'
          }, {
            value: 'b',
            label: '구독'
          }]} />
            <Caption>half</Caption>
          </div>
          <div style={{
          width: 240,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
            <SegmentDemo type="full" options={[{
            value: 'a',
            label: '전체'
          }, {
            value: 'b',
            label: '구독'
          }]} />
            <Caption>full</Caption>
          </div>
        </Row>
      </Block>
      <Block label="3개">
        <Row gap={24}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
            <SegmentDemo type="half" options={[{
            value: 'a',
            label: '인기'
          }, {
            value: 'b',
            label: '최신'
          }, {
            value: 'c',
            label: '추천'
          }]} />
            <Caption>half</Caption>
          </div>
          <div style={{
          width: 240,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
            <SegmentDemo type="full" options={[{
            value: 'a',
            label: '인기'
          }, {
            value: 'b',
            label: '최신'
          }, {
            value: 'c',
            label: '추천'
          }]} />
            <Caption>full</Caption>
          </div>
        </Row>
      </Block>
      <Block label="4개">
        <Row gap={24}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
            <SegmentDemo type="half" options={[{
            value: 'a',
            label: '1일'
          }, {
            value: 'b',
            label: '1주'
          }, {
            value: 'c',
            label: '1개월'
          }, {
            value: 'd',
            label: '3개월'
          }]} />
            <Caption>half</Caption>
          </div>
          <div style={{
          width: 320,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
            <SegmentDemo type="full" options={[{
            value: 'a',
            label: '1일'
          }, {
            value: 'b',
            label: '1주'
          }, {
            value: 'c',
            label: '1개월'
          }, {
            value: 'd',
            label: '3개월'
          }]} />
            <Caption>full</Caption>
          </div>
        </Row>
      </Block>
    </div>
}`,...(R=(k=c.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var C,T,q;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'State',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="enabled" desc="기본 상태.">
        <Row gap={12}>
          <SegmentDemo type="half" options={[{
          value: 'a',
          label: '전체'
        }, {
          value: 'b',
          label: '구독'
        }, {
          value: 'c',
          label: '최신'
        }]} />
          <div style={{
          width: 240
        }}>
            <SegmentDemo type="full" options={[{
            value: 'a',
            label: '전체'
          }, {
            value: 'b',
            label: '구독'
          }, {
            value: 'c',
            label: '최신'
          }]} />
          </div>
        </Row>
      </Block>
      <Block label="disabled" desc="전체 비활성 상태. opacity 0.4, pointer-events none.">
        <Row gap={12}>
          <SegmentDemo type="half" options={[{
          value: 'a',
          label: '전체'
        }, {
          value: 'b',
          label: '구독'
        }, {
          value: 'c',
          label: '최신'
        }]} disabled />
          <div style={{
          width: 240
        }}>
            <SegmentDemo type="full" options={[{
            value: 'a',
            label: '전체'
          }, {
            value: 'b',
            label: '구독'
          }, {
            value: 'c',
            label: '최신'
          }]} disabled />
          </div>
        </Row>
      </Block>
      <Block label="item disabled" desc="특정 항목만 비활성 상태.">
        <Row gap={12}>
          <SegmentDemo type="half" options={[{
          value: 'a',
          label: '전체'
        }, {
          value: 'b',
          label: '구독',
          disabled: true
        }, {
          value: 'c',
          label: '최신'
        }]} />
          <div style={{
          width: 240
        }}>
            <SegmentDemo type="full" options={[{
            value: 'a',
            label: '전체'
          }, {
            value: 'b',
            label: '구독',
            disabled: true
          }, {
            value: 'c',
            label: '최신'
          }]} />
          </div>
        </Row>
      </Block>
    </div>
}`,...(q=(T=b.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var P,z,V;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const shapes: ButtonSegmentShape[] = ['square', 'round'];
    const types: ButtonSegmentType[] = ['half', 'full'];
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
                shape \\ type
              </th>
              {types.map(t => <th key={t} style={{
              padding: '8px 24px',
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
            {shapes.map(sh => <tr key={sh} style={{
            borderTop: '1px solid var(--color-neutral-stroke-divider)'
          }}>
                <td style={{
              padding: '16px 16px 16px 0',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-neutral-foreground-subtle-1)',
              verticalAlign: 'middle'
            }}>
                  {sh}
                </td>
                {types.map(t => <td key={t} style={{
              padding: '16px 24px',
              verticalAlign: 'middle'
            }}>
                    <div style={{
                width: t === 'full' ? 240 : 'auto'
              }}>
                      <SegmentDemo shape={sh} type={t} options={[{
                  value: 'a',
                  label: '전체'
                }, {
                  value: 'b',
                  label: '구독'
                }, {
                  value: 'c',
                  label: '최신'
                }]} />
                    </div>
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(V=(z=v.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};const L=["Playground","Types","Shapes","Lines","States","Matrix"],E=Object.freeze(Object.defineProperty({__proto__:null,Lines:c,Matrix:v,Playground:d,Shapes:u,States:b,Types:p,__namedExportsOrder:L,default:A},Symbol.toStringTag,{value:"Module"}));export{d as P,E as S};
