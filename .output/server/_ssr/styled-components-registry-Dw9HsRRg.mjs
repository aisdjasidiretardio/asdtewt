import { l as __toESM, o as require_react, t as require_jsx_runtime } from "./ssr.mjs";
import { i as gt, n as Ut } from "./styled-components.esm-CfFvPSBA.mjs";
import { n as useServerInsertedHTML } from "./navigation-hqKsq5pB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/styled-components-registry-Dw9HsRRg.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function StyledComponentsRegistry({ children }) {
	const [styleSheet] = (0, import_react.useState)(() => new Ut());
	useServerInsertedHTML(() => {
		const styles = styleSheet.getStyleElement();
		styleSheet.instance.clearTag();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: styles });
	});
	if (typeof window !== "undefined") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(gt, {
		sheet: styleSheet.instance,
		children
	});
}
//#endregion
export { StyledComponentsRegistry as default };
