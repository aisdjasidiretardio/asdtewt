import { c as __require, l as __toESM, o as require_react } from "./ssr.mjs";
import "../_libs/@emotion/is-prop-valid+[...].mjs";
import { a as stringify, i as serialize, n as prefixer, o as compile, r as rulesheet, t as middleware } from "../_libs/stylis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/styled-components.esm-rePmBNy9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var r, i;
var l = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", a = "active", c = "data-styled-version", u = "6.5.3", d = "/*!sc*/\n", h = "undefined" != typeof window && "undefined" != typeof document, p = void 0 === import_react.createContext;
function f(e) {
	if ("undefined" != typeof process && void 0 !== process.env) {
		const t = process.env[e];
		if (void 0 !== t && "" !== t) return "false" !== t;
	}
}
var m = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (i = null !== (r = f("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== r ? r : f("SC_DISABLE_SPEEDY")) && void 0 !== i ? i : "undefined" != typeof process && void 0 !== process.env && false), g = "sc-keyframes-", y = {};
function S(e, ...t) {
	return /* @__PURE__ */ new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length > 0 ? ` Args: ${t.join(", ")}` : ""}`);
}
var w = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), C = 1;
var P = (e) => {
	if (w.has(e)) return w.get(e);
	for (; N.has(C);) C++;
	const t = C++;
	return w.set(e, t), N.set(t, e), t;
}, O = (e) => N.get(e), E = (e, t) => {
	C = t + 1, w.set(e, t), N.set(t, e);
}, x = Object.freeze([]), $ = Object.freeze({});
function R(e, t, n = $) {
	return e.theme !== n.theme && e.theme || t || n.theme;
}
var j = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, k = /(^-|-$)/g;
function T(e) {
	return e.replace(j, "-").replace(k, "");
}
var D = /(a)(d)/gi, M = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97));
function V(e) {
	let t, n = "";
	for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = M(t % 52) + n;
	return (M(t % 52) + n).replace(D, "$1-$2");
}
var G = 5381, F = (e, t) => {
	let n = t.length;
	for (; n;) e = 33 * e ^ t.charCodeAt(--n);
	return e;
}, z = (e) => F(G, e);
function W(e) {
	return V(z(e) >>> 0);
}
function B(e) {
	return e.displayName || e.name || "Component";
}
function L(e) {
	return "string" == typeof e && true;
}
function q(e) {
	return L(e) ? `styled.${e}` : `Styled(${B(e)})`;
}
var H = Symbol.for("react.memo"), Y = Symbol.for("react.forward_ref"), U = {
	contextType: !0,
	defaultProps: !0,
	displayName: !0,
	getDerivedStateFromError: !0,
	getDerivedStateFromProps: !0,
	propTypes: !0,
	type: !0
}, J = {
	name: !0,
	length: !0,
	prototype: !0,
	caller: !0,
	callee: !0,
	arguments: !0,
	arity: !0
}, X = {
	$$typeof: !0,
	compare: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0,
	type: !0
}, Z = {
	[Y]: {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	},
	[H]: X
};
function K(e) {
	return ("type" in (t = e) && t.type.$$typeof) === H ? X : "$$typeof" in e ? Z[e.$$typeof] : U;
	var t;
}
var Q = Object.defineProperty, ee = Object.getOwnPropertyNames, te = Object.getOwnPropertySymbols, ne = Object.getOwnPropertyDescriptor, oe = Object.getPrototypeOf, se = Object.prototype;
function re(e, t, n) {
	if ("string" != typeof t) {
		const o = oe(t);
		o && o !== se && re(e, o, n);
		const s = ee(t).concat(te(t)), r = K(e), i = K(t);
		for (let o = 0; o < s.length; ++o) {
			const l = s[o];
			if (!(l in J || n && n[l] || i && l in i || r && l in r)) {
				const n = ne(t, l);
				try {
					Q(e, l, n);
				} catch (e) {}
			}
		}
	}
	return e;
}
function ie(e) {
	return "function" == typeof e;
}
var le = Symbol.for("react.forward_ref");
function ae(e) {
	return null != e && ("object" == typeof e || "function" == typeof e) && e.$$typeof === le && "styledComponentId" in e;
}
function ce(e, t) {
	return e && t ? e + " " + t : e || t || "";
}
function ue(e, t) {
	return e.join(t || "");
}
function de(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) t += e[n] + d;
	return t;
}
function he(e) {
	return e ? e.replaceAll(d, "") : e;
}
function pe(e) {
	return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function fe(e, t, n = !1) {
	if (!n && !pe(e) && !Array.isArray(e)) return t;
	if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e[n] = fe(e[n], t[n]);
	else if (pe(t)) for (const n in t) e[n] = fe(e[n], t[n]);
	return e;
}
function me(e) {
	if (!p) return null;
	const n = import_react.cache;
	return n ? n(e) : null;
}
function ge(e, t) {
	Object.defineProperty(e, "toString", { value: t });
}
var ye = class {
	constructor(e) {
		this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e, this._cGroup = 0, this._cIndex = 0;
	}
	indexOfGroup(e) {
		if (e === this._cGroup) return this._cIndex;
		let t = this._cIndex;
		if (e > this._cGroup) for (let n = this._cGroup; n < e; n++) t += this.groupSizes[n];
		else for (let n = this._cGroup - 1; n >= e; n--) t -= this.groupSizes[n];
		return this._cGroup = e, this._cIndex = t, t;
	}
	insertRules(e, t) {
		if (e >= this.groupSizes.length) {
			const t = this.groupSizes, n = t.length;
			let o = n;
			for (; e >= o;) if (o <<= 1, o < 0) throw S(16, `${e}`);
			this.groupSizes = new Uint32Array(o), this.groupSizes.set(t), this.length = o;
			for (let e = n; e < o; e++) this.groupSizes[e] = 0;
		}
		let n = this.indexOfGroup(e + 1), o = 0;
		for (let s = 0, r = t.length; s < r; s++) this.tag.insertRule(n, t[s]) && (this.groupSizes[e]++, n++, o++);
		o > 0 && this._cGroup > e && (this._cIndex += o);
	}
	clearGroup(e) {
		if (e < this.length) {
			const t = this.groupSizes[e], n = this.indexOfGroup(e), o = n + t;
			this.groupSizes[e] = 0;
			for (let e = n; e < o; e++) this.tag.deleteRule(n);
			t > 0 && this._cGroup > e && (this._cIndex -= t);
		}
	}
	getGroup(e) {
		let t = "";
		if (e >= this.length || 0 === this.groupSizes[e]) return t;
		const n = this.groupSizes[e], o = this.indexOfGroup(e), s = o + n;
		for (let e = o; e < s; e++) t += this.tag.getRule(e) + d;
		return t;
	}
}, ve = `style[${l}][${c}="${u}"]`, Se = new RegExp(`^${l}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), be = (e) => "undefined" != typeof ShadowRoot && e instanceof ShadowRoot || "host" in e && 11 === e.nodeType, we = (e) => {
	if (!e) return document;
	if (be(e)) return e;
	if ("getRootNode" in e) {
		const t = e.getRootNode();
		if (be(t)) return t;
	}
	return document;
}, Ne = (e, t, n) => {
	const o = n.split(",");
	let s;
	for (let n = 0, r = o.length; n < r; n++) (s = o[n]) && e.registerName(t, s);
}, Ce = (e, t) => {
	var n;
	const o = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(d), s = [];
	for (let t = 0, n = o.length; t < n; t++) {
		const n = o[t].trim();
		if (!n) continue;
		const r = n.match(Se);
		if (r) {
			const t = 0 | parseInt(r[1], 10), n = r[2];
			0 !== t && (E(n, t), Ne(e, n, r[3]), e.getTag().insertRules(t, s)), s.length = 0;
		} else s.push(n);
	}
}, Pe = (e) => {
	const t = we(e.options.target).querySelectorAll(ve);
	for (let n = 0, o = t.length; n < o; n++) {
		const o = t[n];
		o && o.getAttribute(l) !== a && (Ce(e, o), o.parentNode && o.parentNode.removeChild(o));
	}
};
var Oe = !1;
function Ee() {
	if (!1 !== Oe) return Oe;
	if ("undefined" != typeof document) {
		const e = document.head.querySelector("meta[property=\"csp-nonce\"]");
		if (e) return Oe = e.nonce || e.getAttribute("content") || void 0;
		const t = document.head.querySelector("meta[name=\"sc-nonce\"]");
		if (t) return Oe = t.getAttribute("content") || void 0;
	}
	return Oe = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}
var Ie = (e, t) => {
	const n = document.head, o = e || n, s = document.createElement("style"), r = ((e) => {
		const t = Array.from(e.querySelectorAll(`style[${l}]`));
		return t[t.length - 1];
	})(o), i = void 0 !== r ? r.nextSibling : null;
	s.setAttribute(l, a), s.setAttribute(c, u);
	const d = t || Ee();
	return d && s.setAttribute("nonce", d), o.insertBefore(s, i), s;
}, Ae = class {
	constructor(e, t) {
		this.element = Ie(e, t), this.element.appendChild(document.createTextNode("")), this.sheet = ((e) => {
			var t;
			if (e.sheet) return e.sheet;
			const n = null !== (t = e.getRootNode().styleSheets) && void 0 !== t ? t : document.styleSheets;
			for (let t = 0, o = n.length; t < o; t++) {
				const o = n[t];
				if (o.ownerNode === e) return o;
			}
			throw S(17);
		})(this.element), this.length = 0;
	}
	insertRule(e, t) {
		try {
			return this.sheet.insertRule(t, e), this.length++, !0;
		} catch (e) {
			return !1;
		}
	}
	deleteRule(e) {
		this.sheet.deleteRule(e), this.length--;
	}
	getRule(e) {
		const t = this.sheet.cssRules[e];
		return t && t.cssText ? t.cssText : "";
	}
}, _e = class {
	constructor(e, t) {
		this.element = Ie(e, t), this.nodes = this.element.childNodes, this.length = 0;
	}
	insertRule(e, t) {
		if (e <= this.length && e >= 0) {
			const n = document.createTextNode(t);
			return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
		}
		return !1;
	}
	deleteRule(e) {
		this.element.removeChild(this.nodes[e]), this.length--;
	}
	getRule(e) {
		return e < this.length ? this.nodes[e].textContent : "";
	}
}, xe = class {
	constructor(e) {
		this.rules = [], this.length = 0;
	}
	insertRule(e, t) {
		return e <= this.length && (e === this.length ? this.rules.push(t) : this.rules.splice(e, 0, t), this.length++, !0);
	}
	deleteRule(e) {
		this.rules.splice(e, 1), this.length--;
	}
	getRule(e) {
		return e < this.length ? this.rules[e] : "";
	}
};
var $e = h;
var Re = {
	isServer: !h,
	useCSSOMInjection: !m
};
var je = class je {
	static registerId(e) {
		return P(e);
	}
	constructor(e = $, t = {}, n) {
		this.options = Object.assign(Object.assign({}, Re), e), this.gs = t, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n), this.server = !!e.isServer, !this.server && h && $e && ($e = !1, Pe(this)), ge(this, () => ((e) => {
			const t = e.getTag(), { length: n } = t;
			let o = "";
			for (let s = 0; s < n; s++) {
				const n = O(s);
				if (void 0 === n) continue;
				const r = e.names.get(n);
				if (void 0 === r || !r.size) continue;
				const i = t.getGroup(s);
				if (0 === i.length) continue;
				const a = l + ".g" + s + "[id=\"" + n + "\"]";
				let c = "";
				for (const e of r) e.length > 0 && (c += e + ",");
				o += i + a + "{content:\"" + c + "\"}/*!sc*/\n";
			}
			return o;
		})(this));
	}
	rehydrate() {
		!this.server && h && Pe(this);
	}
	reconstructWithOptions(e, t = !0) {
		const n = new je(Object.assign(Object.assign({}, this.options), e), this.gs, t && this.names || void 0);
		return n.keyframeIds = new Set(this.keyframeIds), !this.server && h && e.target !== this.options.target && we(this.options.target) !== we(e.target) && Pe(n), n;
	}
	allocateGSInstance(e) {
		return this.gs[e] = (this.gs[e] || 0) + 1;
	}
	getTag() {
		return this.tag || (this.tag = (e = (({ isServer: e, useCSSOMInjection: t, target: n, nonce: o }) => e ? new xe(n) : t ? new Ae(n, o) : new _e(n, o))(this.options), new ye(e)));
		var e;
	}
	hasNameForId(e, t) {
		var n, o;
		return null !== (o = null === (n = this.names.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== o && o;
	}
	registerName(e, t) {
		P(e), e.startsWith(g) && this.keyframeIds.add(e);
		const n = this.names.get(e);
		n ? n.add(t) : this.names.set(e, new Set([t]));
	}
	insertRules(e, t, n) {
		this.registerName(e, t), this.getTag().insertRules(P(e), n);
	}
	clearNames(e) {
		this.names.has(e) && this.names.get(e).clear();
	}
	clearRules(e) {
		this.getTag().clearGroup(P(e)), this.clearNames(e);
	}
	clearTag() {
		this.tag = void 0;
	}
};
var ke = /* @__PURE__ */ new WeakSet(), Te = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexShrink: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
function De(e, t) {
	return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || e in Te || e.startsWith("--") ? String(t).trim() : t + "px";
}
var Me = 47;
function Ve(e) {
	if (45 === e.charCodeAt(0) && 45 === e.charCodeAt(1)) return e;
	let t = "";
	for (let n = 0; n < e.length; n++) {
		const o = e.charCodeAt(n);
		t += o >= 65 && o <= 90 ? "-" + String.fromCharCode(o + 32) : e[n];
	}
	return t.startsWith("ms-") ? "-" + t : t;
}
var Ge = Symbol.for("sc-keyframes");
function Fe(e) {
	return "object" == typeof e && null !== e && Ge in e;
}
function ze(e) {
	return ie(e) && !(e.prototype && e.prototype.isReactComponent);
}
var We = (e) => null == e || !1 === e || "" === e, Be = Symbol.for("react.client.reference");
function Le(e) {
	return e.$$typeof === Be;
}
function He(e, t) {
	for (const n in e) {
		const o = e[n];
		e.hasOwnProperty(n) && !We(o) && (Array.isArray(o) && ke.has(o) || ie(o) ? t.push(Ve(n) + ":", o, ";") : pe(o) ? (t.push(n + " {"), He(o, t), t.push("}")) : t.push(Ve(n) + ": " + De(n, o) + ";"));
	}
}
function Ye(e, t, n, o, s = []) {
	if (We(e)) return s;
	const r = typeof e;
	if ("string" === r) return s.push(e), s;
	if ("function" === r) {
		if (Le(e)) return s;
		if (ze(e) && t) return Ye(e(t), t, n, o, s);
		return s.push(e), s;
	}
	if (Array.isArray(e)) {
		for (let r = 0; r < e.length; r++) Ye(e[r], t, n, o, s);
		return s;
	}
	return ae(e) ? (s.push(`.${e.styledComponentId}`), s) : Fe(e) ? (n ? (e.inject(n, o), s.push(e.getName(o))) : s.push(e), s) : Le(e) ? s : pe(e) ? e.toString !== Object.prototype.toString ? (s.push(e.toString()), s) : (He(e, s), s) : (s.push(e.toString()), s);
}
var Ue = z(u), Je = p ? /* @__PURE__ */ new WeakMap() : null;
function Xe(e, t) {
	if (!Je) return null;
	const n = Je.get(e);
	if (!n) return null;
	const o = t.names.get(e.componentId);
	if (!o) return null;
	let s = "";
	for (const e of o) {
		const t = n.get(e);
		if (!t) return null;
		s += t;
	}
	return s;
}
var Ze = class {
	constructor(e, t, n) {
		this.rules = e, this.componentId = t, this.baseHash = F(Ue, t), this.baseStyle = n, je.registerId(t);
	}
	generateAndInjectStyles(e, t, n) {
		let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
		{
			let s = "";
			for (let o = 0; o < this.rules.length; o++) {
				const r = this.rules[o];
				if ("string" == typeof r) s += r;
				else if (r) if (ze(r)) {
					const o = r(e);
					"string" == typeof o ? s += o : null != o && !1 !== o && (s += ue(Ye(o, e, t, n)));
				} else s += ue(Ye(r, e, t, n));
			}
			if (s) {
				this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
				const e = n.hash ? n.hash + s : s;
				let r = this.dynamicNameCache.get(e);
				if (!r) {
					if (r = V(F(F(this.baseHash, n.hash), s) >>> 0), this.dynamicNameCache.size >= 200) {
						const e = this.dynamicNameCache.keys().next().value;
						void 0 !== e && this.dynamicNameCache.delete(e);
					}
					this.dynamicNameCache.set(e, r);
				}
				if (!t.hasNameForId(this.componentId, r)) if (p && function(e, t) {
					var n, o;
					return null !== (o = null === (n = null == Je ? void 0 : Je.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== o && o;
				}(this, r)) t.registerName(this.componentId, r);
				else {
					const e = n(s, "." + r, void 0, this.componentId);
					p && function(e, t, n) {
						if (!Je) return;
						let o = Je.get(e);
						o || (o = /* @__PURE__ */ new Map(), Je.set(e, o)), o.set(t, de(n));
					}(this, r, e), t.insertRules(this.componentId, r, e);
				}
				o = ce(o, r);
			}
		}
		return o;
	}
};
var Ke = /&/g;
function Qe(e, t) {
	let n = 0;
	for (; --t >= 0 && 92 === e.charCodeAt(t);) n++;
	return !(1 & ~n);
}
function et(e) {
	const t = e.length;
	let n = "", o = 0, s = 0, r = 0, i = !1, l = !1;
	for (let a = 0; a < t; a++) {
		const c = e.charCodeAt(a);
		if (0 !== r || i || c !== Me || 42 !== e.charCodeAt(a + 1)) if (i) 42 === c && e.charCodeAt(a + 1) === Me && (i = !1, a++);
		else if (34 !== c && 39 !== c || Qe(e, a)) {
			if (0 === r) if (123 === c) s++;
			else if (125 === c) {
				if (s--, s < 0) {
					l = !0;
					let n = a + 1;
					for (; n < t;) {
						const t = e.charCodeAt(n);
						if (59 === t || 10 === t) break;
						n++;
					}
					n < t && 59 === e.charCodeAt(n) && n++, s = 0, a = n - 1, o = n;
					continue;
				}
				0 === s && (n += e.substring(o, a + 1), o = a + 1);
			} else 59 === c && 0 === s && (n += e.substring(o, a + 1), o = a + 1);
		} else 0 === r ? r = c : r === c && (r = 0);
		else i = !0, a++;
	}
	return l || 0 !== s || 0 !== r ? (o < t && 0 === s && 0 === r && (n += e.substring(o)), n) : e;
}
function tt(e, t) {
	const n = t + " ", o = "," + n;
	for (let s = 0; s < e.length; s++) {
		const r = e[s];
		if ("rule" === r.type) {
			r.value = (n + r.value).replaceAll(",", o);
			const e = r.props, t = [];
			for (let o = 0; o < e.length; o++) t[o] = n + e[o];
			r.props = t;
		}
		Array.isArray(r.children) && "@keyframes" !== r.type && tt(r.children, t);
	}
	return e;
}
function nt({ options: e = $, plugins: t = x } = $) {
	let n, s, r;
	const i = (e, t, o) => o.startsWith(s) && o.endsWith(s) && o.replaceAll(s, "").length > 0 ? `.${n}` : e, l = t.slice();
	l.push((e) => {
		e.type === "rule" && e.value.includes("&") && (r || (r = new RegExp(`\\${s}\\b`, "g")), e.props[0] = e.props[0].replace(Ke, s).replace(r, i));
	}), e.prefix && l.push(prefixer), l.push(stringify);
	let a = [];
	const c = middleware(l.concat(rulesheet((e) => a.push(e)))), u = (t, i = "", l = "", u = "&") => {
		n = u, s = i, r = void 0;
		const d = function(e) {
			const t = -1 !== e.indexOf("//"), n = -1 !== e.indexOf("}");
			if (!t && !n) return e;
			if (!t) return et(e);
			const o = e.length;
			let s = "", r = 0, i = 0, l = 0, a = 0, c = 0, u = !1;
			for (; i < o;) {
				const t = e.charCodeAt(i);
				if (34 !== t && 39 !== t || Qe(e, i)) if (0 === l) if (t === Me && i + 1 < o && 42 === e.charCodeAt(i + 1)) {
					for (i += 2; i + 1 < o && (42 !== e.charCodeAt(i) || e.charCodeAt(i + 1) !== Me);) i++;
					i += 2;
				} else if (40 !== t) if (41 !== t) if (a > 0) i++;
				else if (42 === t && i + 1 < o && e.charCodeAt(i + 1) === Me) s += e.substring(r, i), i += 2, r = i, u = !0;
				else if (t === Me && i + 1 < o && e.charCodeAt(i + 1) === Me) {
					for (s += e.substring(r, i); i < o && 10 !== e.charCodeAt(i);) i++;
					r = i, u = !0;
				} else 123 === t ? c++ : 125 === t && c--, i++;
				else a > 0 && a--, i++;
				else a++, i++;
				else i++;
				else 0 === l ? l = t : l === t && (l = 0), i++;
			}
			return u ? (r < o && (s += e.substring(r)), 0 === c ? s : et(s)) : 0 === c ? e : et(e);
		}(t);
		let h = compile(l || i ? l + " " + i + " { " + d + " }" : d);
		return e.namespace && (h = tt(h, e.namespace)), a = [], serialize(h, c), a;
	}, d = e;
	let h = G;
	for (let e = 0; e < t.length; e++) t[e].name || S(15), h = F(h, t[e].name);
	return null != d && d.namespace && (h = F(h, d.namespace)), null != d && d.prefix && (h = F(h, "p")), u.hash = h !== G ? h.toString() : "", u;
}
var ot, st, rt;
var it = new je(), lt = nt();
var at, ct = null, ut = lt, dt = p && null !== (rt = null === (st = (ot = import_react.default).cache) || void 0 === st ? void 0 : st.call(ot, () => {
	it.names.clear(), it.keyframeIds.clear(), it.clearTag(), ct = null;
})) && void 0 !== rt ? rt : null, ht = {
	shouldForwardProp: void 0,
	styleSheet: it,
	stylis: lt,
	stylisPlugins: void 0
}, pt = p ? {
	Provider: ({ children: e }) => e,
	Consumer: ({ children: e }) => e(ht)
} : import_react.createContext(ht);
pt.Consumer;
function mt() {
	return p ? (dt && dt(), ct || ht) : import_react.useContext(pt);
}
function gt(e) {
	var n, o, s;
	if (p) {
		dt && dt();
		const t = ct || ht, s = void 0 !== e.stylisPlugins || void 0 !== e.namespace || void 0 !== e.enableVendorPrefixes;
		s && (e.stylisPlugins && e.stylisPlugins !== at ? (at = e.stylisPlugins, ut = nt({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: e.stylisPlugins
		})) : void 0 === e.namespace && void 0 === e.enableVendorPrefixes || (ut = nt({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: null !== (n = e.stylisPlugins) && void 0 !== n ? n : t.stylisPlugins
		})));
		const r = s ? void 0 === e.stylisPlugins || e.stylisPlugins.length ? ut : lt : t.stylis, i = "shouldForwardProp" in e ? e.shouldForwardProp : t.shouldForwardProp, l = null !== (o = e.stylisPlugins) && void 0 !== o ? o : t.stylisPlugins;
		return ct = r !== lt || i ? {
			shouldForwardProp: i,
			styleSheet: it,
			stylis: r,
			stylisPlugins: l
		} : null, e.children;
	}
	const r = mt(), { styleSheet: i } = r, l = import_react.useMemo(() => {
		let t = i;
		return e.sheet ? t = e.sheet : e.target ? t = t.reconstructWithOptions(void 0 !== e.nonce ? {
			target: e.target,
			nonce: e.nonce
		} : { target: e.target }, !1) : void 0 !== e.nonce && (t = t.reconstructWithOptions({ nonce: e.nonce })), e.disableCSSOMInjection && (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })), t;
	}, [
		e.disableCSSOMInjection,
		e.nonce,
		e.sheet,
		e.target,
		i
	]), a = import_react.useMemo(() => {
		var t;
		return void 0 === e.stylisPlugins && void 0 === e.namespace && void 0 === e.enableVendorPrefixes ? r.stylis : nt({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: null !== (t = e.stylisPlugins) && void 0 !== t ? t : r.stylisPlugins
		});
	}, [
		e.enableVendorPrefixes,
		e.namespace,
		e.stylisPlugins,
		r.stylis,
		r.stylisPlugins
	]), c = "shouldForwardProp" in e ? e.shouldForwardProp : r.shouldForwardProp, u = null !== (s = e.stylisPlugins) && void 0 !== s ? s : r.stylisPlugins, d = import_react.useMemo(() => ({
		shouldForwardProp: c,
		styleSheet: l,
		stylis: a,
		stylisPlugins: u
	}), [
		c,
		l,
		a,
		u
	]);
	return import_react.createElement(pt.Provider, { value: d }, e.children);
}
var yt = p ? {
	Provider: ({ children: e }) => e,
	Consumer: ({ children: e }) => e(void 0)
} : import_react.createContext(void 0);
yt.Consumer;
var wt = {};
function Nt(e, t) {
	const n = "string" != typeof e ? "sc" : T(e);
	wt[n] = (wt[n] || 0) + 1;
	const o = n + "-" + W(u + n + wt[n]);
	return t ? t + "-" + o : o;
}
var Pt = me(() => /* @__PURE__ */ new Set()), Ot = /* @__PURE__ */ new Map();
function Et(e) {
	let t = Ot.get(e);
	return t || (t = new RegExp("\\." + e + "(?![a-zA-Z0-9_-])", "g"), Ot.set(e, t)), t;
}
function It(e, t, n) {
	const o = n.names.get(t);
	if (o) for (const t of o) {
		const n = Et(t);
		n.lastIndex = 0, e = e.replace(n, ":where(." + t + ")");
	}
	return e;
}
function At(o, s, r) {
	const i = ae(o), a = o, c = !L(o), { attrs: u = x, componentId: h = Nt(s.displayName, s.parentComponentId), displayName: f = q(o) } = s, m = s.displayName && s.componentId ? T(s.displayName) + "-" + s.componentId : s.componentId || h, g = i && a.attrs ? a.attrs.concat(u).filter(Boolean) : u;
	let { shouldForwardProp: y } = s;
	if (i && a.shouldForwardProp) {
		const e = a.shouldForwardProp;
		if (s.shouldForwardProp) {
			const t = s.shouldForwardProp;
			y = (n, o) => e(n, o) && t(n, o);
		} else y = e;
	}
	const v = new Ze(r, m, i ? a.componentStyle : void 0);
	function S(o, s) {
		return function(o, s, r) {
			const { attrs: i, componentStyle: a, defaultProps: c, foldedComponentIds: u, styledComponentId: h, target: f } = o, m = p ? void 0 : import_react.useContext(yt), g = mt(), y = o.shouldForwardProp || g.shouldForwardProp;
			const v = R(s, m, c) || (p ? void 0 : $);
			let S, b;
			S = function(e, t, n) {
				const o = Object.assign(Object.assign({}, t), {
					className: void 0,
					theme: n
				}), s = e.length > 1;
				for (let n = 0; n < e.length; n++) {
					const r = e[n], i = ie(r) ? r(s ? Object.assign({}, o) : o) : r;
					for (const e in i) "className" === e ? o.className = ce(o.className, i[e]) : "style" === e ? o.style = Object.assign(Object.assign({}, o.style), i[e]) : e in t && void 0 === t[e] || (o[e] = i[e]);
				}
				return "className" in t && "string" == typeof t.className && (o.className = ce(o.className, t.className)), o;
			}(i, s, v), b = a.generateAndInjectStyles(S, g.styleSheet, g.stylis);
			const w = S.as || f, N = function(t, n, o, s) {
				const r = {};
				for (const i in t) void 0 === t[i] || "$" === i[0] || "as" === i || "theme" === i && t.theme === o || ("forwardedAs" === i ? r.as = t.forwardedAs : s && !s(i, n) || (r[i] = t[i]));
				return r;
			}(S, w, v, y);
			let C = ce(u, h);
			b && (C += " " + b), S.className && (C += " " + S.className), N[L(w) && w.includes("-") ? "class" : "className"] = C, r && (N.ref = r);
			const O = (0, import_react.createElement)(w, N);
			if (p) {
				const e = Pt ? Pt() : null;
				let n = null, o = 0, s = "", r = !0, i = a;
				for (; i;) {
					const t = g.styleSheet.names.get(i.componentId);
					if (t) {
						o += t.size;
						for (const o of t) e && e.has(o) || (n || (n = []), n.push(o), e && e.add(o));
					}
					if (n && r) {
						let e = Xe(i, g.styleSheet);
						null === e ? r = !1 : (i !== a && (e = It(e, i.componentId, g.styleSheet)), s = e + s);
					}
					i = i.baseStyle;
				}
				if (n && !r) {
					s = "";
					const e = g.styleSheet.getTag();
					let t = a;
					for (; t;) {
						let n = e.getGroup(P(t.componentId));
						n && t !== a && (n = It(n, t.componentId, g.styleSheet)), s = n + s, t = t.baseStyle;
					}
				}
				let c = "";
				if (g.styleSheet.keyframeIds.size > 0) {
					const t = g.styleSheet.getTag();
					for (const n of g.styleSheet.keyframeIds) {
						if (e && e.has(n)) continue;
						const o = t.getGroup(P(n));
						o && (c += o, e && e.add(n));
					}
				}
				if (s && e && n && n.length < o) {
					const e = s.split(d);
					let t = "";
					for (let o = 0; o < e.length; o++) {
						const s = e[o];
						if (s) for (let e = 0; e < n.length; e++) {
							const o = Et(n[e]);
							if (o.lastIndex = 0, o.test(s)) {
								t += s + d;
								break;
							}
						}
					}
					s = t;
				}
				const u = he(c + s);
				if (u) {
					const e = import_react.createElement("style", {
						[l]: "",
						key: "sc-" + a.componentId,
						children: u
					});
					return import_react.createElement(import_react.Fragment, null, e, O);
				}
			}
			return O;
		}(b, o, s);
	}
	S.displayName = f;
	let b = import_react.forwardRef(S);
	return b.attrs = g, b.componentStyle = v, b.displayName = f, b.shouldForwardProp = y, b.foldedComponentIds = i ? ce(a.foldedComponentIds, a.styledComponentId) : "", b.styledComponentId = m, b.target = i ? a.target : o, Object.defineProperty(b, "defaultProps", {
		get() {
			return this._foldedDefaultProps;
		},
		set(e) {
			this._foldedDefaultProps = i ? function(e, ...t) {
				for (const n of t) fe(e, n, !0);
				return e;
			}({}, a.defaultProps, e) : e;
		}
	}), ge(b, () => `.${b.styledComponentId}`), c && re(b, o, {
		attrs: !0,
		componentStyle: !0,
		displayName: !0,
		foldedComponentIds: !0,
		shouldForwardProp: !0,
		styledComponentId: !0,
		target: !0
	}), b;
}
var _t = new Set([
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"bdi",
	"bdo",
	"blockquote",
	"body",
	"button",
	"br",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"main",
	"map",
	"mark",
	"menu",
	"meter",
	"nav",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"search",
	"section",
	"select",
	"slot",
	"small",
	"span",
	"strong",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"tr",
	"u",
	"ul",
	"var",
	"video",
	"wbr",
	"circle",
	"clipPath",
	"defs",
	"ellipse",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"filter",
	"foreignObject",
	"g",
	"image",
	"line",
	"linearGradient",
	"marker",
	"mask",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"stop",
	"svg",
	"switch",
	"symbol",
	"text",
	"textPath",
	"tspan",
	"use"
]);
function xt(e, t) {
	const n = [e[0]];
	for (let o = 0, s = t.length; o < s; o += 1) n.push(t[o], e[o + 1]);
	return n;
}
var $t = (e) => (ke.add(e), e);
function Rt(e, ...t) {
	if (ie(e) || pe(e)) return $t(Ye(xt(x, [e, ...t])));
	const n = e;
	return 0 === t.length && 1 === n.length && "string" == typeof n[0] ? Ye(n) : $t(Ye(xt(n, t)));
}
function jt(e, t, n = $) {
	if (!t) throw S(1, t);
	const o = (o, ...s) => e(t, n, Rt(o, ...s));
	return o.attrs = (o) => jt(e, t, Object.assign(Object.assign({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) })), o.withConfig = (o) => jt(e, t, Object.assign(Object.assign({}, n), o)), o;
}
var kt = (e) => jt(At, e), Tt = kt;
_t.forEach((e) => {
	Tt[e] = kt(e);
});
var Dt = class {
	constructor(e, t) {
		this.instanceRules = /* @__PURE__ */ new Map(), this.rules = e, this.componentId = t, this.isStatic = function(e) {
			for (let t = 0; t < e.length; t += 1) {
				const n = e[t];
				if (ie(n) && !ae(n)) return !1;
			}
			return !0;
		}(e), je.registerId(this.componentId);
	}
	removeStyles(e, t) {
		this.instanceRules.delete(e), this.rebuildGroup(t);
	}
	renderStyles(e, t, n, o) {
		const s = this.componentId;
		if (this.isStatic) {
			if (n.hasNameForId(s, s + e)) this.instanceRules.has(e) || this.computeRules(e, t, n, o);
			else {
				const r = this.computeRules(e, t, n, o);
				n.insertRules(s, r.name, r.rules);
			}
			return;
		}
		const r = this.instanceRules.get(e);
		if (this.computeRules(e, t, n, o), !n.server && r) {
			const t = r.rules, n = this.instanceRules.get(e).rules;
			if (t.length === n.length) {
				let e = !0;
				for (let o = 0; o < t.length; o++) if (t[o] !== n[o]) {
					e = !1;
					break;
				}
				if (e) return;
			}
		}
		this.rebuildGroup(n);
	}
	computeRules(e, t, n, o) {
		const s = ue(Ye(this.rules, t, n, o)), r = {
			name: this.componentId + e,
			rules: o(s, "")
		};
		return this.instanceRules.set(e, r), r;
	}
	rebuildGroup(e) {
		const t = this.componentId;
		e.clearRules(t);
		for (const n of this.instanceRules.values()) e.insertRules(t, n.name, n.rules);
	}
};
var Mt = me(() => /* @__PURE__ */ new Set());
function Vt(e, ...n) {
	const o = Rt(e, ...n), s = `sc-global-${W(JSON.stringify(o))}`, r = new Dt(o, s);
	const i = (e) => {
		const n = mt(), l = p ? void 0 : import_react.useContext(yt);
		let a;
		if (a = n.styleSheet.allocateGSInstance(s), (p || n.styleSheet.server) && function(e, t, n, o, s) {
			if (r.isStatic) r.renderStyles(e, y, n, s);
			else {
				const l = Object.assign(Object.assign({}, t), { theme: R(t, o, i.defaultProps) });
				r.renderStyles(e, l, n, s);
			}
		}(a, e, n.styleSheet, l, n.stylis), p) {
			const e = "undefined" == typeof window ? r.instanceRules.get(a) : void 0, o = e ? de(e.rules) : "";
			if (o) {
				r.instanceRules.delete(a);
				const e = Mt ? Mt() : null;
				if (e) {
					const t = r.isStatic ? s + n.stylis.hash : o;
					if (e.has(t)) return null;
					e.add(t);
				}
				return import_react.createElement("style", {
					key: s + "-" + a,
					"data-styled-global": s,
					children: he(o)
				});
			}
		}
		return r.instanceRules.delete(a), null;
	};
	return import_react.memo(i);
}
var Wt;
var Bt = p ? /* @__PURE__ */ new WeakMap() : null;
var Lt = class {
	constructor(e, t) {
		this[Wt] = !0, this.inject = (e, t = lt) => {
			var n;
			const o = this.getName(t);
			if (!e.hasNameForId(this.id, o)) {
				const s = t.hash || "", r = p ? null === (n = null == Bt ? void 0 : Bt.get(this)) || void 0 === n ? void 0 : n.get(s) : void 0;
				if (r) e.insertRules(this.id, o, r);
				else {
					const n = t(this.rules, o, "@keyframes");
					if (p && Bt) {
						let e = Bt.get(this);
						e || (e = /* @__PURE__ */ new Map(), Bt.set(this, e)), e.set(s, n);
					}
					e.insertRules(this.id, o, n);
				}
			}
		}, this.name = e, this.id = g + e, this.rules = t, P(this.id), ge(this, () => {
			throw S(12, String(this.name));
		});
	}
	getName(e = lt) {
		return e.hash ? this.name + V(+e.hash >>> 0) : this.name;
	}
};
function qt(e, ...t) {
	const n = ue(Rt(e, ...t));
	return new Lt(W(n), n);
}
Wt = Ge;
var Yt = /^\s*<\/[a-z]/i;
var Ut = class {
	constructor({ nonce: e } = {}) {
		this._emitSheetCSS = () => {
			const e = this.instance.toString();
			if (!e) return "";
			const t = this.instance.options.nonce || Ee();
			return `<style ${ue([
				t && `nonce="${t}"`,
				`${l}="true"`,
				`${c}="${u}"`
			].filter(Boolean), " ")}>${e}</style>`;
		}, this.getStyleTags = () => {
			if (this.sealed) throw S(2);
			return this._emitSheetCSS();
		}, this.getStyleElement = () => {
			if (this.sealed) throw S(2);
			const e = this.instance.toString();
			if (!e) return [];
			const n = {
				[l]: "",
				[c]: u,
				dangerouslySetInnerHTML: { __html: e }
			}, o = this.instance.options.nonce || Ee();
			return o && (n.nonce = o), [import_react.createElement("style", Object.assign({}, n, { key: "sc-0-0" }))];
		}, this.seal = () => {
			this.sealed = !0;
		}, this.instance = new je({
			isServer: !0,
			nonce: e
		}), this.sealed = !1;
	}
	collectStyles(e) {
		if (this.sealed) throw S(2);
		return import_react.createElement(gt, { sheet: this.instance }, e);
	}
	interleaveWithNodeStream(e) {
		if (this.sealed) throw S(2);
		this.seal();
		const { Transform: t } = __require("stream"), { instance: n, _emitSheetCSS: o } = this, s = new t({ transform: function(e, t, s) {
			const r = e.toString(), i = o();
			if (n.clearTag(), Yt.test(r)) {
				const e = r.indexOf(">") + 1, t = r.slice(0, e), n = r.slice(e);
				this.push(t + i + n);
			} else this.push(i + r);
			s();
		} });
		if ("on" in e && "function" == typeof e.on && "pipe" in e) {
			const t = e;
			return t.on("error", (e) => {
				s.emit("error", e);
			}), t.pipe(s);
		}
		if ("pipe" in e && "function" == typeof e.pipe) return e.pipe(s);
		throw new Error("Unsupported stream type");
	}
};
`${l}`;
`${l}`;
`${l}`;
//#endregion
export { qt as a, gt as i, Ut as n, Vt as r, Tt as t };
