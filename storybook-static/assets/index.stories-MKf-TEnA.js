import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{b as d,I as s}from"./Block-7ho0r3YM.js";import"./index-Bc2G9s8g.js";const a=({label:o,desc:e,children:k})=>r.jsxs("div",{style:{marginBottom:32},children:[r.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 4px"},children:o}),e&&r.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"var(--color-neutral-foreground-subtle-1)",margin:"0 0 12px",lineHeight:1.6},children:e}),k]}),c=({children:o,gap:e=24})=>r.jsx("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:e},children:o}),R={title:"Components/Header",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"\n시트 및 화면 상·하단에 사용되는 핸들러 컴포넌트입니다.\nHandle은 바텀시트 상단 드래그 핸들, Indicator는 홈 인디케이터 바입니다.\n\n---\n\n<div style=\"margin-bottom:30px\"></div>\n\n### Handle\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `barWidth` | `number` | `36` | 핸들 바 너비 (px) |\n| `barHeight` | `number` | `5` | 핸들 바 높이 (px) |\n\n### Indicator\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `barWidth` | `number` | `144` | 인디케이터 바 너비 (px) |\n| `barHeight` | `number` | `5` | 인디케이터 바 높이 (px) |\n\n```tsx\nimport { Handle, Indicator } from '@/components/Header';\n\n<Handle />\n<Indicator />\n```\n        ".trim()}}}},l={args:{barWidth:36,barHeight:5},render:o=>r.jsx("div",{style:{width:393},children:r.jsx(d,{...o})})},i={name:"Components",render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[r.jsx(a,{label:"Handle",desc:"바텀시트 상단에 표시되는 드래그 핸들입니다. 둥근 상단 모서리와 가운데 바로 구성됩니다.",children:r.jsx("div",{style:{width:393,border:"1px solid var(--color-neutral-stroke-divider)",borderRadius:"var(--radius-3xl, 28px) var(--radius-3xl, 28px) 0 0",overflow:"hidden"},children:r.jsx(d,{})})}),r.jsx(a,{label:"Indicator",desc:"화면 하단의 홈 인디케이터 바입니다.",children:r.jsx("div",{style:{width:393,border:"1px solid var(--color-neutral-stroke-divider)",borderRadius:"0 0 8px 8px",overflow:"hidden",backgroundColor:"var(--color-neutral-background-default)"},children:r.jsx(s,{})})})]})},t={name:"Usage",render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:40},children:r.jsx(a,{label:"Bottom Sheet",desc:"Handle과 Indicator를 조합하여 바텀시트를 구성합니다.",children:r.jsxs("div",{style:{width:393,borderRadius:"var(--radius-3xl, 28px) var(--radius-3xl, 28px) 0 0",overflow:"hidden",boxShadow:"0 -4px 20px rgba(0,0,0,0.08)",backgroundColor:"var(--color-neutral-background-default)"},children:[r.jsx(d,{}),r.jsxs("div",{style:{padding:"0 20px 16px",fontFamily:"Pretendard, sans-serif",fontSize:14,color:"var(--color-neutral-foreground-default)"},children:[r.jsx("p",{style:{fontWeight:600,fontSize:16,margin:"0 0 8px"},children:"시트 타이틀"}),r.jsx("p",{style:{color:"var(--color-neutral-foreground-subtle-1)",margin:0,lineHeight:1.5},children:"시트 내용이 여기에 표시됩니다."})]}),r.jsx(s,{})]})})})},n={name:"Matrix",render:()=>{const o=[240,320,393];return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[r.jsx(a,{label:"Handle — Width Variants",children:r.jsx(c,{gap:32,children:o.map(e=>r.jsxs("div",{style:{textAlign:"center"},children:[r.jsxs("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 8px"},children:[e,"px"]}),r.jsx("div",{style:{width:e,border:"1px solid var(--color-neutral-stroke-divider)",borderRadius:"var(--radius-3xl, 28px) var(--radius-3xl, 28px) 0 0",overflow:"hidden"},children:r.jsx(d,{})})]},e))})}),r.jsx(a,{label:"Indicator — Width Variants",children:r.jsx(c,{gap:32,children:o.map(e=>r.jsxs("div",{style:{textAlign:"center"},children:[r.jsxs("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,color:"var(--color-neutral-foreground-subtle-3)",margin:"0 0 8px"},children:[e,"px"]}),r.jsx("div",{style:{width:e,border:"1px solid var(--color-neutral-stroke-divider)",borderRadius:"0 0 8px 8px",overflow:"hidden",backgroundColor:"var(--color-neutral-background-default)"},children:r.jsx(s,{})})]},e))})})]})}};var p,x,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    barWidth: 36,
    barHeight: 5
  },
  render: args => <div style={{
    width: 393
  }}>
      <Handle {...args} />
    </div>
}`,...(u=(x=l.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var v,m,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Components',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="Handle" desc="바텀시트 상단에 표시되는 드래그 핸들입니다. 둥근 상단 모서리와 가운데 바로 구성됩니다.">
        <div style={{
        width: 393,
        border: '1px solid var(--color-neutral-stroke-divider)',
        borderRadius: 'var(--radius-3xl, 28px) var(--radius-3xl, 28px) 0 0',
        overflow: 'hidden'
      }}>
          <Handle />
        </div>
      </Block>
      <Block label="Indicator" desc="화면 하단의 홈 인디케이터 바입니다.">
        <div style={{
        width: 393,
        border: '1px solid var(--color-neutral-stroke-divider)',
        borderRadius: '0 0 8px 8px',
        overflow: 'hidden',
        backgroundColor: 'var(--color-neutral-background-default)'
      }}>
          <Indicator />
        </div>
      </Block>
    </div>
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Usage',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Block label="Bottom Sheet" desc="Handle과 Indicator를 조합하여 바텀시트를 구성합니다.">
        <div style={{
        width: 393,
        borderRadius: 'var(--radius-3xl, 28px) var(--radius-3xl, 28px) 0 0',
        overflow: 'hidden',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
        backgroundColor: 'var(--color-neutral-background-default)'
      }}>
          <Handle />
          <div style={{
          padding: '0 20px 16px',
          fontFamily: 'Pretendard, sans-serif',
          fontSize: 14,
          color: 'var(--color-neutral-foreground-default)'
        }}>
            <p style={{
            fontWeight: 600,
            fontSize: 16,
            margin: '0 0 8px'
          }}>시트 타이틀</p>
            <p style={{
            color: 'var(--color-neutral-foreground-subtle-1)',
            margin: 0,
            lineHeight: 1.5
          }}>
              시트 내용이 여기에 표시됩니다.
            </p>
          </div>
          <Indicator />
        </div>
      </Block>
    </div>
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,w,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Matrix',
  render: () => {
    const widths = [240, 320, 393];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }}>
        <Block label="Handle — Width Variants">
          <Row gap={32}>
            {widths.map(w => <div key={w} style={{
            textAlign: 'center'
          }}>
                <p style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              margin: '0 0 8px'
            }}>{w}px</p>
                <div style={{
              width: w,
              border: '1px solid var(--color-neutral-stroke-divider)',
              borderRadius: 'var(--radius-3xl, 28px) var(--radius-3xl, 28px) 0 0',
              overflow: 'hidden'
            }}>
                  <Handle />
                </div>
              </div>)}
          </Row>
        </Block>
        <Block label="Indicator — Width Variants">
          <Row gap={32}>
            {widths.map(w => <div key={w} style={{
            textAlign: 'center'
          }}>
                <p style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: 11,
              color: 'var(--color-neutral-foreground-subtle-3)',
              margin: '0 0 8px'
            }}>{w}px</p>
                <div style={{
              width: w,
              border: '1px solid var(--color-neutral-stroke-divider)',
              borderRadius: '0 0 8px 8px',
              overflow: 'hidden',
              backgroundColor: 'var(--color-neutral-background-default)'
            }}>
                  <Indicator />
                </div>
              </div>)}
          </Row>
        </Block>
      </div>;
  }
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const B=["Playground","Components","Usage","Matrix"];export{i as Components,n as Matrix,l as Playground,t as Usage,B as __namedExportsOrder,R as default};
