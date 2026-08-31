import { t as require_jsx_runtime } from "./ssr.mjs";
import { t as usePathname } from "./navigation-Bna7sSlc.mjs";
import { r as Vt, t as Tt } from "./styled-components.esm-rePmBNy9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/global-site-header-Ct3mMi6w.js
var import_jsx_runtime = require_jsx_runtime();
var TWITTER_URL = "https://x.com/onecoinrbh";
var HideOldHeaders = Vt`
  nav[aria-label="Primary navigation"]:not([data-shared-header="true"]){
    display:none !important;
  }
`;
var Header = Tt.header`
  position:relative;
  z-index:60;
  isolation:isolate;
  color:#25170e;
  background:#eadcad;
  background-image:
    radial-gradient(
      circle at 20% 10%,
      rgba(255,255,255,.32),
      transparent 28%
    ),
    repeating-linear-gradient(
      97deg,
      rgba(80,52,22,.025) 0 1px,
      transparent 1px 5px
    );
  border-bottom:1px solid rgba(37,23,14,.3);
`;
var HeaderInner = Tt.nav`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:min(1180px,calc(100% - 40px));
  margin:0 auto;
  padding:22px 0 17px;

  @media(min-width:760px){
    width:min(1180px,calc(100% - 80px));
  }

  @media(max-width:680px){
    align-items:flex-start;
    flex-direction:column;
    gap:14px;
    padding:18px 0 16px;
  }
`;
var Wordmark = Tt.a`
  display:inline-flex;
  align-items:center;
  gap:9px;
  color:#25170e;
  font-family:"Cinzel",serif;
  font-size:.76rem;
  font-weight:700;
  letter-spacing:.11em;
  text-decoration:none;
  white-space:nowrap;

  span{
    color:#9e332a;
    font-size:1.15rem;
  }
`;
var Links = Tt.div`
  display:flex;
  align-items:center;
  gap:clamp(10px,2.2vw,25px);

  @media(max-width:680px){
    justify-content:space-between;
    width:100%;
    gap:8px;
  }
`;
var HeaderLink = Tt.a`
  color:#25170e;
  border-bottom:1px solid currentColor;
  font-family:"Cormorant Garamond",serif;
  font-size:.9rem;
  font-weight:700;
  letter-spacing:.08em;
  text-decoration:none;
  text-transform:uppercase;
  white-space:nowrap;

  &[aria-current="page"]{
    color:#9e332a;
  }

  @media(max-width:520px){
    font-size:.63rem;
    letter-spacing:.04em;
  }
`;
function GlobalSiteHeader() {
	const pathname = usePathname();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HideOldHeaders, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HeaderInner, {
		"aria-label": "Primary navigation",
		"data-shared-header": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wordmark, {
			href: "/",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }), " One Coin"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Links, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderLink, {
				href: "/",
				"aria-current": pathname === "/" ? "page" : void 0,
				children: "The Great Hall"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderLink, {
				href: "/whitelist",
				"aria-current": pathname === "/whitelist" ? "page" : void 0,
				children: "The Royal List"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderLink, {
				href: "/winner",
				"aria-current": pathname === "/winner" ? "page" : void 0,
				children: "Winner Chamber"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HeaderLink, {
				href: TWITTER_URL,
				target: "_blank",
				rel: "noreferrer",
				children: ["X ", "↗"]
			})
		] })]
	}) })] });
}
//#endregion
export { GlobalSiteHeader as default };
