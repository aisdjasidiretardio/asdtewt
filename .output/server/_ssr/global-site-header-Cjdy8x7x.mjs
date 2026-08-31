import { t as require_jsx_runtime } from "./ssr.mjs";
import { t as usePathname } from "./navigation-Bna7sSlc.mjs";
import { r as Vt, t as Tt } from "./styled-components.esm-rePmBNy9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/global-site-header-Cjdy8x7x.js
var import_jsx_runtime = require_jsx_runtime();
var TWITTER_URL = "https://x.com/onecoinrbh";
var HideOldHeaders = Vt`
  nav[aria-label="Primary navigation"]:not([data-shared-header="true"]) {
    display: none !important;
  }
`;
var Header = Tt.header`
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
`;
var HeaderInner = Tt.nav`
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
`;
var Wordmark = Tt.a`
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
`;
var HeaderLink = Tt.a`
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
`;
var DesktopLinks = Tt.div`
  display: flex;
  align-items: center;
  gap: clamp(10px, 2.2vw, 25px);

  @media (max-width: 680px) {
    display: none;
  }
`;
var MobileMenu = Tt.details`
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
`;
var MobilePanel = Tt.div`
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

  ${HeaderLink} {
    display: block;
    padding: 14px 2px;
    border-bottom: 1px solid rgba(37, 23, 14, 0.25);
    font-size: 0.82rem;
  }

  ${HeaderLink}:last-child {
    border-bottom: 0;
  }
`;
function GlobalSiteHeader() {
	const pathname = usePathname();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HideOldHeaders, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HeaderInner, {
		"aria-label": "Primary navigation",
		"data-shared-header": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wordmark, {
				href: "/",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }), "One Coin"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DesktopLinks, { children: [
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
					children: ["X ", "↗︎"]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobileMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "menu-open",
				children: "Menu"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "menu-close",
				children: "Close"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobilePanel, { children: [
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
					children: ["X ", "↗︎"]
				})
			] })] })
		]
	}) })] });
}
//#endregion
export { GlobalSiteHeader as default };
