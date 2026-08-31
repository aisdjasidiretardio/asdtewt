import{r as e}from"./framework-B8WyT5R3.js";import{t}from"./navigation-CmmnqiuG.js";import{i as n,r}from"./styled-components.browser.esm-B0_qInRY.js";var i=e(),a=`https://x.com/onecoinrbh`,o=r`
  nav[aria-label="Primary navigation"]:not([data-shared-header="true"]) {
    display: none !important;
  }
`,s=n.header`
  position: relative;
  z-index: 60;
  isolation: isolate;
  color: #25170e;
  background: #eadcad;
  background-image:
    radial-gradient(
      circle at 20% 10%,
      rgba(255, 255, 255, 0.32),
      transparent 28%
    ),
    repeating-linear-gradient(
      97deg,
      rgba(80, 52, 22, 0.025) 0 1px,
      transparent 1px 5px
    );
  border-bottom: 1px solid rgba(37, 23, 14, 0.3);
`,c=n.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 22px 0 17px;

  @media (min-width: 760px) {
    width: min(1180px, calc(100% - 80px));
  }

  @media (max-width: 680px) {
    width: calc(100% - 32px);
    padding: 16px 0;
  }
`,l=n.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #25170e;
  font-family: "Cinzel", serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-decoration: none;
  white-space: nowrap;

  span {
    color: #9e332a;
    font-size: 1.15rem;
  }
`,u=n.a`
  color: #25170e;
  border-bottom: 1px solid currentColor;
  font-family: "Cormorant Garamond", serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &[aria-current="page"] {
    color: #9e332a;
  }
`,d=n.div`
  display: flex;
  align-items: center;
  gap: clamp(10px, 2.2vw, 25px);

  @media (max-width: 680px) {
    display: none;
  }
`,f=n.details`
  display: none;
  position: relative;

  @media (max-width: 680px) {
    display: block;
  }

  summary {
    color: #25170e;
    border-bottom: 1px solid currentColor;
    cursor: pointer;
    font-family: "Cinzel", serif;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    list-style: none;
    text-transform: uppercase;
    user-select: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  .menu-close {
    display: none;
  }

  &[open] .menu-open {
    display: none;
  }

  &[open] .menu-close {
    display: inline;
  }
`,p=n.div`
  position: absolute;
  top: calc(100% + 17px);
  right: 0;
  z-index: 80;
  display: flex;
  flex-direction: column;
  width: min(270px, calc(100vw - 32px));
  padding: 8px 16px;
  background: #eadcad;
  background-image:
    radial-gradient(
      circle at 20% 10%,
      rgba(255, 255, 255, 0.32),
      transparent 40%
    ),
    repeating-linear-gradient(
      97deg,
      rgba(80, 52, 22, 0.025) 0 1px,
      transparent 1px 5px
    );
  border: 1px solid rgba(37, 23, 14, 0.35);
  box-shadow: 8px 10px 0 rgba(37, 23, 14, 0.13);

  ${u} {
    display: block;
    padding: 14px 2px;
    border-bottom: 1px solid rgba(37, 23, 14, 0.25);
    font-size: 0.82rem;
  }

  ${u}:last-child {
    border-bottom: 0;
  }
`;function m(){let e=t();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{}),(0,i.jsx)(s,{children:(0,i.jsxs)(c,{"aria-label":`Primary navigation`,"data-shared-header":`true`,children:[(0,i.jsxs)(l,{href:`/`,children:[(0,i.jsx)(`span`,{children:`✦`}),`One Coin`]}),(0,i.jsxs)(d,{children:[(0,i.jsx)(u,{href:`/`,"aria-current":e===`/`?`page`:void 0,children:`The Great Hall`}),(0,i.jsx)(u,{href:`/whitelist`,"aria-current":e===`/whitelist`?`page`:void 0,children:`The Royal List`}),(0,i.jsx)(u,{href:`/winner`,"aria-current":e===`/winner`?`page`:void 0,children:`Winner Chamber`}),(0,i.jsxs)(u,{href:a,target:`_blank`,rel:`noreferrer`,children:[`X `,`↗︎`]})]}),(0,i.jsxs)(f,{children:[(0,i.jsxs)(`summary`,{children:[(0,i.jsx)(`span`,{className:`menu-open`,children:`Menu`}),(0,i.jsx)(`span`,{className:`menu-close`,children:`Close`})]}),(0,i.jsxs)(p,{children:[(0,i.jsx)(u,{href:`/`,"aria-current":e===`/`?`page`:void 0,children:`The Great Hall`}),(0,i.jsx)(u,{href:`/whitelist`,"aria-current":e===`/whitelist`?`page`:void 0,children:`The Royal List`}),(0,i.jsx)(u,{href:`/winner`,"aria-current":e===`/winner`?`page`:void 0,children:`Winner Chamber`}),(0,i.jsxs)(u,{href:a,target:`_blank`,rel:`noreferrer`,children:[`X `,`↗︎`]})]})]})]})})]})}export{m as default};