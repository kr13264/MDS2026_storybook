import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as m,R as x}from"./index-DRjF_FHU.js";import{T as k,f as v,a as E,P as S,S as C,u as w}from"./index-C4leduyF.js";import"./iframe-7e5Cl-FR.js";import"./index-BKlBQwGM.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function h({fe:n,ios:a,aos:r}){var l;const[d,s]=m.useState(!1),o=[];n&&o.push({key:"FE",code:n}),a&&o.push({key:"IOS",code:a}),r&&o.push({key:"AOS",code:r});const[t,g]=m.useState(((l=o[0])==null?void 0:l.key)??"FE");if(o.length===0)return null;const p=o.find(i=>i.key===t)??o[0],y=async()=>{await navigator.clipboard.writeText(p.code),s(!0),setTimeout(()=>s(!1),1500)};return e.jsxs("div",{style:{position:"relative",borderRadius:8,overflow:"hidden",background:"#292A2D"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:0,padding:"0 12px",borderBottom:"1px solid rgba(255,255,255,0.08)"},children:o.map((i,f)=>e.jsx("button",{onClick:()=>g(i.key),style:{padding:"8px 12px",background:"none",border:"none",borderBottom:t===i.key?"2px solid #6E76E5":"2px solid transparent",cursor:"pointer",fontSize:12,fontWeight:t===i.key?700:400,fontFamily:"'Pretendard', sans-serif",color:t===i.key?"#fff":"rgba(255,255,255,0.45)",transition:"color 0.15s",borderLeft:f>0?"1px solid rgba(255,255,255,0.12)":"none"},children:i.key},i.key))}),e.jsx("pre",{style:{margin:0,padding:"16px 20px 40px",color:"rgba(255,255,255,0.85)",fontSize:13,lineHeight:1.65,overflowX:"auto",fontFamily:"'SF Mono', 'Fira Code', 'Consolas', monospace"},children:e.jsx("code",{children:p.code})}),e.jsx("button",{onClick:y,style:{position:"absolute",bottom:10,right:12,padding:"4px 12px",borderRadius:4,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.6)",fontSize:12,fontFamily:"'Pretendard', sans-serif",cursor:"pointer",transition:"background 0.15s"},children:d?"Copied!":"Copy"})]})}h.__docgenInfo={description:"",methods:[],displayName:"SourceCode",props:{fe:{required:!1,tsType:{name:"string"},description:""},ios:{required:!1,tsType:{name:"string"},description:""},aos:{required:!1,tsType:{name:"string"},description:""}}};const c={height:1,background:"#E4E4EE",margin:"32px 0"},b={fontFamily:"'Pretendard', sans-serif",fontSize:13,fontWeight:700,color:"#9999B8",letterSpacing:"0.06em",textTransform:"uppercase",margin:"0 0 16px"};function j(){var n,a,r,d,s;try{const o=w("meta",["meta"]),t=((r=(a=(n=o==null?void 0:o.csfFile)==null?void 0:n.meta)==null?void 0:a.parameters)==null?void 0:r.sourceCode)??((s=(d=o==null?void 0:o.preparedMeta)==null?void 0:d.parameters)==null?void 0:s.sourceCode);if(t&&(t.fe||t.ios||t.aos))return e.jsx("div",{style:{marginTop:16},children:e.jsx(h,{fe:t.fe,ios:t.ios,aos:t.aos})})}catch{}return null}function u(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx(v,{}),e.jsx("div",{style:c}),e.jsx("p",{style:b,children:"Properties"}),e.jsx(E,{}),e.jsx("div",{style:c}),e.jsx("p",{style:b,children:"Preview"}),e.jsx(S,{}),e.jsx(j,{}),e.jsx("div",{style:c}),e.jsx(C,{includePrimary:!1})]})}u.__docgenInfo={description:"",methods:[],displayName:"MdsDocsPage"};const T=`
  .sbdocs, .sbdocs * {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
  }
  .sbdocs h1 {
    font-size: 36px !important;
    font-weight: 800 !important;
    letter-spacing: -0.5px !important;
    color: #111122 !important;
    margin-bottom: 6px !important;
  }
  .sbdocs-title {
    font-size: 36px !important;
    font-weight: 800 !important;
    letter-spacing: -0.5px !important;
    color: #111122 !important;
  }
  .sbdocs h2,
  .sbdocs h3,
  .sbdocs h4 {
    font-weight: 700 !important;
    border-bottom: none !important;
    padding-bottom: 0 !important;
    color: #111122 !important;
  }
  .sbdocs h2 {
    font-size: 20px !important;
    margin: 24px 0 12px !important;
  }
  .sbdocs p {
    font-size: 13px !important;
    color: #55557A !important;
    line-height: 1.7 !important;
  }
  .sbdocs .sb-unstyled {
    margin-top: 8px !important;
  }
  .sbdocs .sb-anchor > h2#stories,
  .sbdocs-stories-title,
  h2#stories,
  [id="stories"],
  .sbdocs h2[id="stories"],
  .sbdocs div > h2:has(+ .sb-unstyled) {
    display: none !important;
  }
  /* Properties 헤더 테두리 */
  .docblock-argstable {
    border-radius: 4px !important;
    overflow: hidden !important;
  }
  .docblock-argstable thead tr {
    border-top: 1px solid #E4E4EE !important;
    border-left: 1px solid #E4E4EE !important;
    border-right: 1px solid #E4E4EE !important;
    border-radius: 8px 8px 0 0 !important;
  }
  /* STORIES 대문자 레이블 */
  h3[class], h2[class] {
    text-transform: none !important;
    letter-spacing: normal !important;
  }


`,D=`
  body, .sb-show-main, .sb-main-padded, .sb-main-centered, .sb-main-fullscreen,
  #storybook-root, .docs-story, .docs-story > div {
    background-color: #111122 !important;
  }
  .docs-story {
    border-color: #2E2E50 !important;
    outline-color: #2E2E50 !important;
  }
`,P=`
  body, .sb-show-main, .sb-main-padded, .sb-main-centered, .sb-main-fullscreen,
  #storybook-root, .docs-story, .docs-story > div {
    background-color: #F5F5F8 !important;
  }
`,F=(n,a)=>{const r=a.globals.theme==="dark";return x.useEffect(()=>{if(!document.getElementById("mds-docs-typography")){const o=document.createElement("style");o.id="mds-docs-typography",o.textContent=T,document.head.appendChild(o)}document.documentElement.classList.toggle("dark",r);let s=document.getElementById("mds-canvas-theme");s||(s=document.createElement("style"),s.id="mds-canvas-theme",document.head.appendChild(s)),s.textContent=r?D:P},[r]),e.jsx(n,{})},M={globalTypes:{theme:{name:"Theme",defaultValue:"light",toolbar:{icon:"circlehollow",items:[{value:"light",icon:"sun",title:"Light"},{value:"dark",icon:"moon",title:"Dark"}],dynamicTitle:!0}}},decorators:[F],parameters:{options:{storySort:{order:["Home","Foundation","Assets",["Icon","container.icon","Badges",["Overlay","Ad","Count","Tooltip","Verified","*","Overview","Docs"],"*"],"Components",["Badges",["Overlay","Ad","Count","Tooltip","Verified","*","Overview","Docs"],"Buttons",["Basic","Icon","Segment","Group","*","Overview","Docs"],"Chip","Controls",["Switch","Search","*","Docs"],"Dialogs","Divider","Header",["Title","Block","Components","Usage","Matrix","*","Docs"],"Images",["Circle","Opacity","Place","Rectangle","Shadow","Thumbnail","*","Overview","Docs"],"Pagination","Popover @의선","Profile","Reaction",["Horizontal","Vertical","*","Docs"],"Sheets @ 수정","Snackbar @수정","Tabs","Thumbnail","*"],"Templates","*"]}},docs:{page:u},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},layout:"centered",backgrounds:{disable:!0},viewport:{viewports:{mobile:{name:"Mobile (375)",styles:{width:"375px",height:"812px"}},tablet:{name:"Tablet (768)",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop (1280)",styles:{width:"1280px",height:"900px"}},wide:{name:"Wide (1440)",styles:{width:"1440px",height:"900px"}}},defaultViewport:"responsive"}}};export{M as default};
