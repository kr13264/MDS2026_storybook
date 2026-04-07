import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{R as i}from"./index-Bc2G9s8g.js";const r=`
  .sbdocs-title {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
    font-size: 36px !important;
    font-weight: 700 !important;
    letter-spacing: -0.3px !important;
  }
  .sbdocs h2,
  .sbdocs h3,
  .sbdocs h4 {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
    font-weight: 700 !important;
  }
  .sbdocs-description,
  .sbdocs .sbdocs-p {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
  }
`,c=`
  body, .sb-show-main, .sb-main-padded, .sb-main-centered, .sb-main-fullscreen,
  #storybook-root, .docs-story, .docs-story > div {
    background-color: #111122 !important;
  }
  .docs-story {
    border-color: #2E2E50 !important;
    outline-color: #2E2E50 !important;
  }
`,d=`
  body, .sb-show-main, .sb-main-padded, .sb-main-centered, .sb-main-fullscreen,
  #storybook-root {
    background-color: #F5F5F8 !important;
  }
`,l=(s,n)=>{const t=n.globals.theme==="dark";return i.useEffect(()=>{if(!document.getElementById("mds-docs-typography")){const o=document.createElement("style");o.id="mds-docs-typography",o.textContent=r,document.head.appendChild(o)}document.documentElement.classList.toggle("dark",t);let e=document.getElementById("mds-canvas-theme");e||(e=document.createElement("style"),e.id="mds-canvas-theme",document.head.appendChild(e)),e.textContent=t?c:d},[t]),a.jsx(s,{})},b={globalTypes:{theme:{name:"Theme",defaultValue:"light",toolbar:{icon:"circlehollow",items:[{value:"light",icon:"sun",title:"Light"},{value:"dark",icon:"moon",title:"Dark"}],dynamicTitle:!0}}},decorators:[l],parameters:{options:{storySort:{order:["Home","Foundation","Assets",["Icon","container.icon","Badges",["Docs","Overlay","Ad","Count","Tooltip","Verified","Overview","*"],"*"],"Components",["Buttons",["Docs","Basic","Icon","Segment","Group","Overview","*"],"Chip","Dialogs","Divider","Header",["Docs","Title","Block","Components","Usage","Matrix","*"],"Images",["Docs","Circle","Opacity","Place","Rectangle","Shadow","Thumbnail","*"],"Pagination","Popover @의선","Profile","Reaction",["Docs","Horizontal","Vertical","*"],"Search","Sheets @ 수정","Snackbar @수정","Switch","Tabs","Thumbnail","*"],"Templates","*"]}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},layout:"centered",backgrounds:{disable:!0},viewport:{viewports:{mobile:{name:"Mobile (375)",styles:{width:"375px",height:"812px"}},tablet:{name:"Tablet (768)",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop (1280)",styles:{width:"1280px",height:"900px"}},wide:{name:"Wide (1440)",styles:{width:"1440px",height:"900px"}}},defaultViewport:"responsive"}}};export{b as default};
