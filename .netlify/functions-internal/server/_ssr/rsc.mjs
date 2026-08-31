import * as __viteRscAsyncHooks from "node:async_hooks";
import { AsyncLocalStorage as AsyncLocalStorage$1 } from "node:async_hooks";
//#region node_modules/.nitro/vite/services/rsc/__vite_rsc_assets_manifest.js
var __vite_rsc_assets_manifest_default = {
	"bootstrapScriptContent": "import(\"/assets/index-cuFJoR4H.js\")",
	"clientReferenceDeps": {
		"556f1e0fb9a2": {
			"js": [
				"/assets/global-site-header-DArLk_44.js",
				"/assets/styled-components.browser.esm-B0_qInRY.js",
				"/assets/rolldown-runtime-S-ySWqyJ.js",
				"/assets/framework-B8WyT5R3.js",
				"/assets/navigation-CmmnqiuG.js",
				"/assets/readonly-url-search-params-pgk0LUNy.js",
				"/assets/index-cuFJoR4H.js"
			],
			"css": []
		},
		"6be96b483227": {
			"js": [
				"/assets/portal-client-DkzQP_iP.js",
				"/assets/rolldown-runtime-S-ySWqyJ.js",
				"/assets/styled-components.browser.esm-B0_qInRY.js",
				"/assets/framework-B8WyT5R3.js",
				"/assets/index-cuFJoR4H.js",
				"/assets/readonly-url-search-params-pgk0LUNy.js"
			],
			"css": []
		},
		"26f909cfad48": {
			"js": [
				"/assets/site-client-DrelFR8Z.js",
				"/assets/styled-components.browser.esm-B0_qInRY.js",
				"/assets/rolldown-runtime-S-ySWqyJ.js",
				"/assets/framework-B8WyT5R3.js",
				"/assets/index-cuFJoR4H.js",
				"/assets/readonly-url-search-params-pgk0LUNy.js"
			],
			"css": []
		},
		"ed7d606e58f7": {
			"js": [
				"/assets/styled-components-registry-CVdP4HiT.js",
				"/assets/rolldown-runtime-S-ySWqyJ.js",
				"/assets/styled-components.browser.esm-B0_qInRY.js",
				"/assets/framework-B8WyT5R3.js",
				"/assets/navigation-CmmnqiuG.js",
				"/assets/readonly-url-search-params-pgk0LUNy.js",
				"/assets/index-cuFJoR4H.js"
			],
			"css": []
		},
		"593f344dc510": {
			"js": [
				"/assets/index-cuFJoR4H.js",
				"/assets/rolldown-runtime-S-ySWqyJ.js",
				"/assets/framework-B8WyT5R3.js",
				"/assets/readonly-url-search-params-pgk0LUNy.js"
			],
			"css": []
		},
		"15c18cfaeeff": {
			"js": [
				"/assets/layout-segment-context-B9W7b0P-.js",
				"/assets/rolldown-runtime-S-ySWqyJ.js",
				"/assets/index-cuFJoR4H.js",
				"/assets/framework-B8WyT5R3.js",
				"/assets/readonly-url-search-params-pgk0LUNy.js"
			],
			"css": []
		},
		"8c0f216c4604": {
			"js": [
				"/assets/index-cuFJoR4H.js",
				"/assets/rolldown-runtime-S-ySWqyJ.js",
				"/assets/framework-B8WyT5R3.js",
				"/assets/readonly-url-search-params-pgk0LUNy.js"
			],
			"css": []
		}
	},
	"serverResources": { "app/layout.tsx": {
		"js": [],
		"css": ["/assets/index-CVxJwntd.css"]
	} }
};
//#endregion
//#region node_modules/.nitro/vite/services/rsc/index.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
function tinyassert(value, message) {
	if (value) return;
	if (message instanceof Error) throw message;
	throw new TinyAssertionError(message, tinyassert);
}
var TinyAssertionError = class extends Error {
	constructor(message, stackStartFunction) {
		super(message ?? "TinyAssertionError");
		if (stackStartFunction && "captureStackTrace" in Error) Error.captureStackTrace(this, stackStartFunction);
	}
};
function safeFunctionCast(f) {
	return f;
}
function memoize(f, options) {
	const keyFn = options?.keyFn ?? ((...args) => args[0]);
	const cache = options?.cache ?? /* @__PURE__ */ new Map();
	return safeFunctionCast(function(...args) {
		const key = keyFn(...args);
		const value = cache.get(key);
		if (typeof value !== "undefined") return value;
		const newValue = f.apply(this, args);
		cache.set(key, newValue);
		return newValue;
	});
}
var SERVER_REFERENCE_PREFIX = "$$server:";
var SERVER_DECODE_CLIENT_PREFIX = "$$decode-client:";
function removeReferenceCacheTag(id) {
	return id.split("$$cache=")[0];
}
function setInternalRequire() {
	globalThis.__vite_rsc_require__ = (id) => {
		if (id.startsWith("$$server:")) {
			id = id.slice(9);
			return globalThis.__vite_rsc_server_require__(id);
		}
		return globalThis.__vite_rsc_client_require__(id);
	};
}
/**
* @license React
* react.react-server.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_react_server_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ReactSharedInternals = {
		H: null,
		A: null
	};
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var isArrayImpl = Array.isArray;
	function noop() {}
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error(formatProdErrorMessage(31, "[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array));
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	function createCacheRoot() {
		return /* @__PURE__ */ new WeakMap();
	}
	function createCacheNode() {
		return {
			s: 0,
			v: void 0,
			o: null,
			p: null
		};
	}
	exports.Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error(formatProdErrorMessage(143));
			return children;
		}
	};
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.cache = function(fn) {
		return function() {
			var dispatcher = ReactSharedInternals.A;
			if (!dispatcher) return fn.apply(null, arguments);
			var fnMap = dispatcher.getCacheForType(createCacheRoot);
			dispatcher = fnMap.get(fn);
			void 0 === dispatcher && (dispatcher = createCacheNode(), fnMap.set(fn, dispatcher));
			fnMap = 0;
			for (var l = arguments.length; fnMap < l; fnMap++) {
				var arg = arguments[fnMap];
				if ("function" === typeof arg || "object" === typeof arg && null !== arg) {
					var objectCache = dispatcher.o;
					null === objectCache && (dispatcher.o = objectCache = /* @__PURE__ */ new WeakMap());
					dispatcher = objectCache.get(arg);
					void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
				} else objectCache = dispatcher.p, null === objectCache && (dispatcher.p = objectCache = /* @__PURE__ */ new Map()), dispatcher = objectCache.get(arg), void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
			}
			if (1 === dispatcher.s) return dispatcher.v;
			if (2 === dispatcher.s) throw dispatcher.v;
			try {
				var result = fn.apply(null, arguments);
				fnMap = dispatcher;
				fnMap.s = 1;
				return fnMap.v = result;
			} catch (error) {
				throw result = dispatcher, result.s = 2, result.v = error, error;
			}
		};
	};
	exports.cacheSignal = function() {
		var dispatcher = ReactSharedInternals.A;
		return dispatcher ? dispatcher.cacheSignal() : null;
	};
	exports.captureOwnerStack = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error(formatProdErrorMessage(267, element));
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useDebugValue = function() {};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.version = "19.2.6";
}));
var require_react_react_server = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_react_server_production();
}));
/**
* @license React
* react-dom.react-server.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_react_server_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react_react_server();
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	};
	if (!React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.version = "19.2.6";
}));
var require_react_dom_react_server = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_dom_react_server_production();
}));
var require_react_server_dom_webpack_server_edge_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	globalThis.AsyncLocalStorage = __viteRscAsyncHooks.AsyncLocalStorage;
	/**
	* @license React
	* react-server-dom-webpack-server.edge.production.js
	*
	* Copyright (c) Meta Platforms, Inc. and affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var ReactDOM = require_react_dom_react_server(), React = require_react_react_server(), REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ASYNC_ITERATOR = Symbol.asyncIterator;
	function handleErrorInNextTick(error) {
		setTimeout(function() {
			throw error;
		});
	}
	var LocalPromise = Promise, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : function(callback) {
		LocalPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
	}, currentView = null, writtenBytes = 0;
	function writeChunkAndReturn(destination, chunk) {
		if (0 !== chunk.byteLength) if (2048 < chunk.byteLength) 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = new Uint8Array(2048), writtenBytes = 0), destination.enqueue(chunk);
		else {
			var allowableBytes = currentView.length - writtenBytes;
			allowableBytes < chunk.byteLength && (0 === allowableBytes ? destination.enqueue(currentView) : (currentView.set(chunk.subarray(0, allowableBytes), writtenBytes), destination.enqueue(currentView), chunk = chunk.subarray(allowableBytes)), currentView = new Uint8Array(2048), writtenBytes = 0);
			currentView.set(chunk, writtenBytes);
			writtenBytes += chunk.byteLength;
		}
		return !0;
	}
	var textEncoder = new TextEncoder();
	function stringToChunk(content) {
		return textEncoder.encode(content);
	}
	function byteLengthOfChunk(chunk) {
		return chunk.byteLength;
	}
	function closeWithError(destination, error) {
		"function" === typeof destination.error ? destination.error(error) : destination.close();
	}
	var CLIENT_REFERENCE_TAG$1 = Symbol.for("react.client.reference"), SERVER_REFERENCE_TAG = Symbol.for("react.server.reference");
	function registerClientReferenceImpl(proxyImplementation, id, async) {
		return Object.defineProperties(proxyImplementation, {
			$$typeof: { value: CLIENT_REFERENCE_TAG$1 },
			$$id: { value: id },
			$$async: { value: async }
		});
	}
	var FunctionBind = Function.prototype.bind, ArraySlice = Array.prototype.slice;
	function bind() {
		var newFn = FunctionBind.apply(this, arguments);
		if (this.$$typeof === SERVER_REFERENCE_TAG) {
			var args = ArraySlice.call(arguments, 1), $$typeof = { value: SERVER_REFERENCE_TAG }, $$id = { value: this.$$id };
			args = { value: this.$$bound ? this.$$bound.concat(args) : args };
			return Object.defineProperties(newFn, {
				$$typeof,
				$$id,
				$$bound: args,
				bind: {
					value: bind,
					configurable: !0
				}
			});
		}
		return newFn;
	}
	var serverReferenceToString = {
		value: function() {
			return "function () { [omitted code] }";
		},
		configurable: !0,
		writable: !0
	}, PROMISE_PROTOTYPE = Promise.prototype, deepProxyHandlers = {
		get: function(target, name) {
			switch (name) {
				case "$$typeof": return target.$$typeof;
				case "$$id": return target.$$id;
				case "$$async": return target.$$async;
				case "name": return target.name;
				case "displayName": return;
				case "defaultProps": return;
				case "_debugInfo": return;
				case "toJSON": return;
				case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
				case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
				case "Provider": throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
				case "then": throw Error("Cannot await or return from a thenable. You cannot await a client module from a server component.");
			}
			throw Error("Cannot access " + (String(target.name) + "." + String(name)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
		},
		set: function() {
			throw Error("Cannot assign to a client module from a server module.");
		}
	};
	function getReference(target, name) {
		switch (name) {
			case "$$typeof": return target.$$typeof;
			case "$$id": return target.$$id;
			case "$$async": return target.$$async;
			case "name": return target.name;
			case "defaultProps": return;
			case "_debugInfo": return;
			case "toJSON": return;
			case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
			case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
			case "__esModule":
				var moduleId = target.$$id;
				target.default = registerClientReferenceImpl(function() {
					throw Error("Attempted to call the default export of " + moduleId + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
				}, target.$$id + "#", target.$$async);
				return !0;
			case "then":
				if (target.then) return target.then;
				if (target.$$async) return;
				var clientReference = registerClientReferenceImpl({}, target.$$id, !0), proxy = new Proxy(clientReference, proxyHandlers$1);
				target.status = "fulfilled";
				target.value = proxy;
				return target.then = registerClientReferenceImpl(function(resolve) {
					return Promise.resolve(resolve(proxy));
				}, target.$$id + "#then", !1);
		}
		if ("symbol" === typeof name) throw Error("Cannot read Symbol exports. Only named exports are supported on a client module imported on the server.");
		clientReference = target[name];
		clientReference || (clientReference = registerClientReferenceImpl(function() {
			throw Error("Attempted to call " + String(name) + "() from the server but " + String(name) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
		}, target.$$id + "#" + name, target.$$async), Object.defineProperty(clientReference, "name", { value: name }), clientReference = target[name] = new Proxy(clientReference, deepProxyHandlers));
		return clientReference;
	}
	var proxyHandlers$1 = {
		get: function(target, name) {
			return getReference(target, name);
		},
		getOwnPropertyDescriptor: function(target, name) {
			var descriptor = Object.getOwnPropertyDescriptor(target, name);
			descriptor || (descriptor = {
				value: getReference(target, name),
				writable: !1,
				configurable: !1,
				enumerable: !1
			}, Object.defineProperty(target, name, descriptor));
			return descriptor;
		},
		getPrototypeOf: function() {
			return PROMISE_PROTOTYPE;
		},
		set: function() {
			throw Error("Cannot assign to a client module from a server module.");
		}
	}, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
		f: previousDispatcher.f,
		r: previousDispatcher.r,
		D: prefetchDNS,
		C: preconnect,
		L: preload,
		m: preloadModule$1,
		X: preinitScript,
		S: preinitStyle,
		M: preinitModuleScript
	};
	function prefetchDNS(href) {
		if ("string" === typeof href && href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "D|" + href;
				hints.has(key) || (hints.add(key), emitHint(request, "D", href));
			} else previousDispatcher.D(href);
		}
	}
	function preconnect(href, crossOrigin) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "C|" + (null == crossOrigin ? "null" : crossOrigin) + "|" + href;
				hints.has(key) || (hints.add(key), "string" === typeof crossOrigin ? emitHint(request, "C", [href, crossOrigin]) : emitHint(request, "C", href));
			} else previousDispatcher.C(href, crossOrigin);
		}
	}
	function preload(href, as, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "L";
				if ("image" === as && options) {
					var imageSrcSet = options.imageSrcSet, imageSizes = options.imageSizes, uniquePart = "";
					"string" === typeof imageSrcSet && "" !== imageSrcSet ? (uniquePart += "[" + imageSrcSet + "]", "string" === typeof imageSizes && (uniquePart += "[" + imageSizes + "]")) : uniquePart += "[][]" + href;
					key += "[image]" + uniquePart;
				} else key += "[" + as + "]" + href;
				hints.has(key) || (hints.add(key), (options = trimOptions(options)) ? emitHint(request, "L", [
					href,
					as,
					options
				]) : emitHint(request, "L", [href, as]));
			} else previousDispatcher.L(href, as, options);
		}
	}
	function preloadModule$1(href, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "m|" + href;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "m", [href, options]) : emitHint(request, "m", href);
			}
			previousDispatcher.m(href, options);
		}
	}
	function preinitStyle(href, precedence, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "S|" + href;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "S", [
					href,
					"string" === typeof precedence ? precedence : 0,
					options
				]) : "string" === typeof precedence ? emitHint(request, "S", [href, precedence]) : emitHint(request, "S", href);
			}
			previousDispatcher.S(href, precedence, options);
		}
	}
	function preinitScript(src, options) {
		if ("string" === typeof src) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "X|" + src;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "X", [src, options]) : emitHint(request, "X", src);
			}
			previousDispatcher.X(src, options);
		}
	}
	function preinitModuleScript(src, options) {
		if ("string" === typeof src) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "M|" + src;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "M", [src, options]) : emitHint(request, "M", src);
			}
			previousDispatcher.M(src, options);
		}
	}
	function trimOptions(options) {
		if (null == options) return null;
		var hasProperties = !1, trimmed = {}, key;
		for (key in options) null != options[key] && (hasProperties = !0, trimmed[key] = options[key]);
		return hasProperties ? trimmed : null;
	}
	function getChildFormatContext(parentContext, type, props) {
		switch (type) {
			case "img":
				type = props.src;
				var srcSet = props.srcSet;
				if (!("lazy" === props.loading || !type && !srcSet || "string" !== typeof type && null != type || "string" !== typeof srcSet && null != srcSet || "low" === props.fetchPriority || parentContext & 3) && ("string" !== typeof type || ":" !== type[4] || "d" !== type[0] && "D" !== type[0] || "a" !== type[1] && "A" !== type[1] || "t" !== type[2] && "T" !== type[2] || "a" !== type[3] && "A" !== type[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
					var sizes = "string" === typeof props.sizes ? props.sizes : void 0;
					var input = props.crossOrigin;
					preload(type || "", "image", {
						imageSrcSet: srcSet,
						imageSizes: sizes,
						crossOrigin: "string" === typeof input ? "use-credentials" === input ? input : "" : void 0,
						integrity: props.integrity,
						type: props.type,
						fetchPriority: props.fetchPriority,
						referrerPolicy: props.referrerPolicy
					});
				}
				return parentContext;
			case "link":
				type = props.rel;
				srcSet = props.href;
				if (!(parentContext & 1 || null != props.itemProp || "string" !== typeof type || "string" !== typeof srcSet || "" === srcSet)) switch (type) {
					case "preload":
						preload(srcSet, props.as, {
							crossOrigin: props.crossOrigin,
							integrity: props.integrity,
							nonce: props.nonce,
							type: props.type,
							fetchPriority: props.fetchPriority,
							referrerPolicy: props.referrerPolicy,
							imageSrcSet: props.imageSrcSet,
							imageSizes: props.imageSizes,
							media: props.media
						});
						break;
					case "modulepreload":
						preloadModule$1(srcSet, {
							as: props.as,
							crossOrigin: props.crossOrigin,
							integrity: props.integrity,
							nonce: props.nonce
						});
						break;
					case "stylesheet": preload(srcSet, "stylesheet", {
						crossOrigin: props.crossOrigin,
						integrity: props.integrity,
						nonce: props.nonce,
						type: props.type,
						fetchPriority: props.fetchPriority,
						referrerPolicy: props.referrerPolicy,
						media: props.media
					});
				}
				return parentContext;
			case "picture": return parentContext | 2;
			case "noscript": return parentContext | 1;
			default: return parentContext;
		}
	}
	var supportsRequestStorage = "function" === typeof AsyncLocalStorage, requestStorage = supportsRequestStorage ? new AsyncLocalStorage() : null, TEMPORARY_REFERENCE_TAG = Symbol.for("react.temporary.reference"), proxyHandlers = {
		get: function(target, name) {
			switch (name) {
				case "$$typeof": return target.$$typeof;
				case "name": return;
				case "displayName": return;
				case "defaultProps": return;
				case "_debugInfo": return;
				case "toJSON": return;
				case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
				case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
				case "Provider": throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
				case "then": return;
			}
			throw Error("Cannot access " + String(name) + " on the server. You cannot dot into a temporary client reference from a server component. You can only pass the value through to the client.");
		},
		set: function() {
			throw Error("Cannot assign to a temporary client reference from a server module.");
		}
	};
	function createTemporaryReference(temporaryReferences, id) {
		var reference = Object.defineProperties(function() {
			throw Error("Attempted to call a temporary Client Reference from the server but it is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
		}, { $$typeof: { value: TEMPORARY_REFERENCE_TAG } });
		reference = new Proxy(reference, proxyHandlers);
		temporaryReferences.set(reference, id);
		return reference;
	}
	function noop() {}
	var SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.");
	function trackUsedThenable(thenableState, thenable, index) {
		index = thenableState[index];
		void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop, noop), thenable = index);
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default:
				"string" === typeof thenable.status ? thenable.then(noop, noop) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
					if ("pending" === thenable.status) {
						var fulfilledThenable = thenable;
						fulfilledThenable.status = "fulfilled";
						fulfilledThenable.value = fulfilledValue;
					}
				}, function(error) {
					if ("pending" === thenable.status) {
						var rejectedThenable = thenable;
						rejectedThenable.status = "rejected";
						rejectedThenable.reason = error;
					}
				}));
				switch (thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenable.reason;
				}
				suspendedThenable = thenable;
				throw SuspenseException;
		}
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
		if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
		var thenable = suspendedThenable;
		suspendedThenable = null;
		return thenable;
	}
	var currentRequest$1 = null, thenableIndexCounter = 0, thenableState = null;
	function getThenableStateAfterSuspending() {
		var state = thenableState || [];
		thenableState = null;
		return state;
	}
	var HooksDispatcher = {
		readContext: unsupportedContext,
		use,
		useCallback: function(callback) {
			return callback;
		},
		useContext: unsupportedContext,
		useEffect: unsupportedHook,
		useImperativeHandle: unsupportedHook,
		useLayoutEffect: unsupportedHook,
		useInsertionEffect: unsupportedHook,
		useMemo: function(nextCreate) {
			return nextCreate();
		},
		useReducer: unsupportedHook,
		useRef: unsupportedHook,
		useState: unsupportedHook,
		useDebugValue: function() {},
		useDeferredValue: unsupportedHook,
		useTransition: unsupportedHook,
		useSyncExternalStore: unsupportedHook,
		useId,
		useHostTransitionStatus: unsupportedHook,
		useFormState: unsupportedHook,
		useActionState: unsupportedHook,
		useOptimistic: unsupportedHook,
		useMemoCache: function(size) {
			for (var data = Array(size), i = 0; i < size; i++) data[i] = REACT_MEMO_CACHE_SENTINEL;
			return data;
		},
		useCacheRefresh: function() {
			return unsupportedRefresh;
		}
	};
	HooksDispatcher.useEffectEvent = unsupportedHook;
	function unsupportedHook() {
		throw Error("This Hook is not supported in Server Components.");
	}
	function unsupportedRefresh() {
		throw Error("Refreshing the cache is not supported in Server Components.");
	}
	function unsupportedContext() {
		throw Error("Cannot read a Client Context from a Server Component.");
	}
	function useId() {
		if (null === currentRequest$1) throw Error("useId can only be used while React is rendering");
		var id = currentRequest$1.identifierCount++;
		return "_" + currentRequest$1.identifierPrefix + "S_" + id.toString(32) + "_";
	}
	function use(usable) {
		if (null !== usable && "object" === typeof usable || "function" === typeof usable) {
			if ("function" === typeof usable.then) {
				var index = thenableIndexCounter;
				thenableIndexCounter += 1;
				null === thenableState && (thenableState = []);
				return trackUsedThenable(thenableState, usable, index);
			}
			usable.$$typeof === REACT_CONTEXT_TYPE && unsupportedContext();
		}
		if (usable.$$typeof === CLIENT_REFERENCE_TAG$1) {
			if (null != usable.value && usable.value.$$typeof === REACT_CONTEXT_TYPE) throw Error("Cannot read a Client Context from a Server Component.");
			throw Error("Cannot use() an already resolved Client Reference.");
		}
		throw Error("An unsupported type was passed to use(): " + String(usable));
	}
	var DefaultAsyncDispatcher = {
		getCacheForType: function(resourceType) {
			var JSCompiler_inline_result = (JSCompiler_inline_result = resolveRequest()) ? JSCompiler_inline_result.cache : /* @__PURE__ */ new Map();
			var entry = JSCompiler_inline_result.get(resourceType);
			void 0 === entry && (entry = resourceType(), JSCompiler_inline_result.set(resourceType, entry));
			return entry;
		},
		cacheSignal: function() {
			var request = resolveRequest();
			return request ? request.cacheController.signal : null;
		}
	}, ReactSharedInternalsServer = React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	if (!ReactSharedInternalsServer) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	var isArrayImpl = Array.isArray, getPrototypeOf = Object.getPrototypeOf;
	function objectName(object) {
		object = Object.prototype.toString.call(object);
		return object.slice(8, object.length - 1);
	}
	function describeValueForErrorMessage(value) {
		switch (typeof value) {
			case "string": return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
			case "object":
				if (isArrayImpl(value)) return "[...]";
				if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
				value = objectName(value);
				return "Object" === value ? "{...}" : value;
			case "function": return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
			default: return String(value);
		}
	}
	function describeElementType(type) {
		if ("string" === typeof type) return type;
		switch (type) {
			case REACT_SUSPENSE_TYPE: return "Suspense";
			case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
		}
		if ("object" === typeof type) switch (type.$$typeof) {
			case REACT_FORWARD_REF_TYPE: return describeElementType(type.render);
			case REACT_MEMO_TYPE: return describeElementType(type.type);
			case REACT_LAZY_TYPE:
				var payload = type._payload;
				type = type._init;
				try {
					return describeElementType(type(payload));
				} catch (x) {}
		}
		return "";
	}
	var CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference");
	function describeObjectForErrorMessage(objectOrArray, expandedName) {
		var objKind = objectName(objectOrArray);
		if ("Object" !== objKind && "Array" !== objKind) return objKind;
		objKind = -1;
		var length = 0;
		if (isArrayImpl(objectOrArray)) {
			var str = "[";
			for (var i = 0; i < objectOrArray.length; i++) {
				0 < i && (str += ", ");
				var value = objectOrArray[i];
				value = "object" === typeof value && null !== value ? describeObjectForErrorMessage(value) : describeValueForErrorMessage(value);
				"" + i === expandedName ? (objKind = str.length, length = value.length, str += value) : str = 10 > value.length && 40 > str.length + value.length ? str + value : str + "...";
			}
			str += "]";
		} else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) str = "<" + describeElementType(objectOrArray.type) + "/>";
		else {
			if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
			str = "{";
			i = Object.keys(objectOrArray);
			for (value = 0; value < i.length; value++) {
				0 < value && (str += ", ");
				var name = i[value], encodedKey = JSON.stringify(name);
				str += ("\"" + name + "\"" === encodedKey ? name : encodedKey) + ": ";
				encodedKey = objectOrArray[name];
				encodedKey = "object" === typeof encodedKey && null !== encodedKey ? describeObjectForErrorMessage(encodedKey) : describeValueForErrorMessage(encodedKey);
				name === expandedName ? (objKind = str.length, length = encodedKey.length, str += encodedKey) : str = 10 > encodedKey.length && 40 > str.length + encodedKey.length ? str + encodedKey : str + "...";
			}
			str += "}";
		}
		return void 0 === expandedName ? str : -1 < objKind && 0 < length ? (objectOrArray = " ".repeat(objKind) + "^".repeat(length), "\n  " + str + "\n  " + objectOrArray) : "\n  " + str;
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty, ObjectPrototype$1 = Object.prototype, stringify = JSON.stringify;
	function defaultErrorHandler(error) {
		console.error(error);
	}
	function RequestInstance(type, model, bundlerConfig, onError, onPostpone, onAllReady, onFatalError, identifierPrefix, temporaryReferences) {
		if (null !== ReactSharedInternalsServer.A && ReactSharedInternalsServer.A !== DefaultAsyncDispatcher) throw Error("Currently React only supports one RSC renderer at a time.");
		ReactSharedInternalsServer.A = DefaultAsyncDispatcher;
		var abortSet = /* @__PURE__ */ new Set(), pingedTasks = [], hints = /* @__PURE__ */ new Set();
		this.type = type;
		this.status = 10;
		this.flushScheduled = !1;
		this.destination = this.fatalError = null;
		this.bundlerConfig = bundlerConfig;
		this.cache = /* @__PURE__ */ new Map();
		this.cacheController = new AbortController();
		this.pendingChunks = this.nextChunkId = 0;
		this.hints = hints;
		this.abortableTasks = abortSet;
		this.pingedTasks = pingedTasks;
		this.completedImportChunks = [];
		this.completedHintChunks = [];
		this.completedRegularChunks = [];
		this.completedErrorChunks = [];
		this.writtenSymbols = /* @__PURE__ */ new Map();
		this.writtenClientReferences = /* @__PURE__ */ new Map();
		this.writtenServerReferences = /* @__PURE__ */ new Map();
		this.writtenObjects = /* @__PURE__ */ new WeakMap();
		this.temporaryReferences = temporaryReferences;
		this.identifierPrefix = identifierPrefix || "";
		this.identifierCount = 1;
		this.taintCleanupQueue = [];
		this.onError = void 0 === onError ? defaultErrorHandler : onError;
		this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
		this.onAllReady = onAllReady;
		this.onFatalError = onFatalError;
		type = createTask(this, model, null, !1, 0, abortSet);
		pingedTasks.push(type);
	}
	var currentRequest = null;
	function resolveRequest() {
		if (currentRequest) return currentRequest;
		if (supportsRequestStorage) {
			var store = requestStorage.getStore();
			if (store) return store;
		}
		return null;
	}
	function serializeThenable(request, task, thenable) {
		var newTask = createTask(request, thenable, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		switch (thenable.status) {
			case "fulfilled": return newTask.model = thenable.value, pingTask(request, newTask), newTask.id;
			case "rejected": return erroredTask(request, newTask, thenable.reason), newTask.id;
			default:
				if (12 === request.status) return request.abortableTasks.delete(newTask), 21 === request.type ? (haltTask(newTask), finishHaltedTask(newTask, request)) : (task = request.fatalError, abortTask(newTask), finishAbortedTask(newTask, request, task)), newTask.id;
				"string" !== typeof thenable.status && (thenable.status = "pending", thenable.then(function(fulfilledValue) {
					"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
				}, function(error) {
					"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
				}));
		}
		thenable.then(function(value) {
			newTask.model = value;
			pingTask(request, newTask);
		}, function(reason) {
			0 === newTask.status && (erroredTask(request, newTask, reason), enqueueFlush(request));
		});
		return newTask.id;
	}
	function serializeReadableStream(request, task, stream) {
		function progress(entry) {
			if (0 === streamTask.status) if (entry.done) streamTask.status = 1, entry = streamTask.id.toString(16) + ":C\n", request.completedRegularChunks.push(stringToChunk(entry)), request.abortableTasks.delete(streamTask), request.cacheController.signal.removeEventListener("abort", abortStream), enqueueFlush(request), callOnAllReadyIfReady(request);
			else try {
				streamTask.model = entry.value, request.pendingChunks++, tryStreamTask(request, streamTask), enqueueFlush(request), reader.read().then(progress, error);
			} catch (x$11) {
				error(x$11);
			}
		}
		function error(reason) {
			0 === streamTask.status && (request.cacheController.signal.removeEventListener("abort", abortStream), erroredTask(request, streamTask, reason), enqueueFlush(request), reader.cancel(reason).then(error, error));
		}
		function abortStream() {
			if (0 === streamTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortStream);
				signal = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(streamTask), haltTask(streamTask), finishHaltedTask(streamTask, request)) : (erroredTask(request, streamTask, signal), enqueueFlush(request));
				reader.cancel(signal).then(error, error);
			}
		}
		var supportsBYOB = stream.supportsBYOB;
		if (void 0 === supportsBYOB) try {
			stream.getReader({ mode: "byob" }).releaseLock(), supportsBYOB = !0;
		} catch (x) {
			supportsBYOB = !1;
		}
		var reader = stream.getReader(), streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		request.pendingChunks++;
		task = streamTask.id.toString(16) + ":" + (supportsBYOB ? "r" : "R") + "\n";
		request.completedRegularChunks.push(stringToChunk(task));
		request.cacheController.signal.addEventListener("abort", abortStream);
		reader.read().then(progress, error);
		return serializeByValueID(streamTask.id);
	}
	function serializeAsyncIterable(request, task, iterable, iterator) {
		function progress(entry) {
			if (0 === streamTask.status) if (entry.done) {
				streamTask.status = 1;
				if (void 0 === entry.value) var endStreamRow = streamTask.id.toString(16) + ":C\n";
				else try {
					var chunkId = outlineModelWithFormatContext(request, entry.value, 0);
					endStreamRow = streamTask.id.toString(16) + ":C" + stringify(serializeByValueID(chunkId)) + "\n";
				} catch (x) {
					error(x);
					return;
				}
				request.completedRegularChunks.push(stringToChunk(endStreamRow));
				request.abortableTasks.delete(streamTask);
				request.cacheController.signal.removeEventListener("abort", abortIterable);
				enqueueFlush(request);
				callOnAllReadyIfReady(request);
			} else try {
				streamTask.model = entry.value, request.pendingChunks++, tryStreamTask(request, streamTask), enqueueFlush(request), iterator.next().then(progress, error);
			} catch (x$12) {
				error(x$12);
			}
		}
		function error(reason) {
			0 === streamTask.status && (request.cacheController.signal.removeEventListener("abort", abortIterable), erroredTask(request, streamTask, reason), enqueueFlush(request), "function" === typeof iterator.throw && iterator.throw(reason).then(error, error));
		}
		function abortIterable() {
			if (0 === streamTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortIterable);
				var reason = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(streamTask), haltTask(streamTask), finishHaltedTask(streamTask, request)) : (erroredTask(request, streamTask, signal.reason), enqueueFlush(request));
				"function" === typeof iterator.throw && iterator.throw(reason).then(error, error);
			}
		}
		iterable = iterable === iterator;
		var streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		request.pendingChunks++;
		task = streamTask.id.toString(16) + ":" + (iterable ? "x" : "X") + "\n";
		request.completedRegularChunks.push(stringToChunk(task));
		request.cacheController.signal.addEventListener("abort", abortIterable);
		iterator.next().then(progress, error);
		return serializeByValueID(streamTask.id);
	}
	function emitHint(request, code, model) {
		model = stringify(model);
		code = stringToChunk(":H" + code + model + "\n");
		request.completedHintChunks.push(code);
		enqueueFlush(request);
	}
	function readThenable(thenable) {
		if ("fulfilled" === thenable.status) return thenable.value;
		if ("rejected" === thenable.status) throw thenable.reason;
		throw thenable;
	}
	function createLazyWrapperAroundWakeable(request, task, wakeable) {
		switch (wakeable.status) {
			case "fulfilled": return wakeable.value;
			case "rejected": break;
			default: "string" !== typeof wakeable.status && (wakeable.status = "pending", wakeable.then(function(fulfilledValue) {
				"pending" === wakeable.status && (wakeable.status = "fulfilled", wakeable.value = fulfilledValue);
			}, function(error) {
				"pending" === wakeable.status && (wakeable.status = "rejected", wakeable.reason = error);
			}));
		}
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: wakeable,
			_init: readThenable
		};
	}
	function voidHandler() {}
	function processServerComponentReturnValue(request, task, Component, result) {
		if ("object" !== typeof result || null === result || result.$$typeof === CLIENT_REFERENCE_TAG$1) return result;
		if ("function" === typeof result.then) return createLazyWrapperAroundWakeable(request, task, result);
		var iteratorFn = getIteratorFn(result);
		return iteratorFn ? (request = {}, request[Symbol.iterator] = function() {
			return iteratorFn.call(result);
		}, request) : "function" !== typeof result[ASYNC_ITERATOR] || "function" === typeof ReadableStream && result instanceof ReadableStream ? result : (request = {}, request[ASYNC_ITERATOR] = function() {
			return result[ASYNC_ITERATOR]();
		}, request);
	}
	function renderFunctionComponent(request, task, key, Component, props) {
		var prevThenableState = task.thenableState;
		task.thenableState = null;
		thenableIndexCounter = 0;
		thenableState = prevThenableState;
		props = Component(props, void 0);
		if (12 === request.status) throw "object" === typeof props && null !== props && "function" === typeof props.then && props.$$typeof !== CLIENT_REFERENCE_TAG$1 && props.then(voidHandler, voidHandler), null;
		props = processServerComponentReturnValue(request, task, Component, props);
		Component = task.keyPath;
		prevThenableState = task.implicitSlot;
		null !== key ? task.keyPath = null === Component ? key : Component + "," + key : null === Component && (task.implicitSlot = !0);
		request = renderModelDestructive(request, task, emptyRoot, "", props);
		task.keyPath = Component;
		task.implicitSlot = prevThenableState;
		return request;
	}
	function renderFragment(request, task, children) {
		return null !== task.keyPath ? (request = [
			REACT_ELEMENT_TYPE,
			REACT_FRAGMENT_TYPE,
			task.keyPath,
			{ children }
		], task.implicitSlot ? [request] : request) : children;
	}
	var serializedSize = 0;
	function deferTask(request, task) {
		task = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		pingTask(request, task);
		return serializeLazyID(task.id);
	}
	function renderElement(request, task, type, key, ref, props) {
		if (null !== ref && void 0 !== ref) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
		if ("function" === typeof type && type.$$typeof !== CLIENT_REFERENCE_TAG$1 && type.$$typeof !== TEMPORARY_REFERENCE_TAG) return renderFunctionComponent(request, task, key, type, props);
		if (type === REACT_FRAGMENT_TYPE && null === key) return type = task.implicitSlot, null === task.keyPath && (task.implicitSlot = !0), props = renderModelDestructive(request, task, emptyRoot, "", props.children), task.implicitSlot = type, props;
		if (null != type && "object" === typeof type && type.$$typeof !== CLIENT_REFERENCE_TAG$1) switch (type.$$typeof) {
			case REACT_LAZY_TYPE:
				var init = type._init;
				type = init(type._payload);
				if (12 === request.status) throw null;
				return renderElement(request, task, type, key, ref, props);
			case REACT_FORWARD_REF_TYPE: return renderFunctionComponent(request, task, key, type.render, props);
			case REACT_MEMO_TYPE: return renderElement(request, task, type.type, key, ref, props);
		}
		else "string" === typeof type && (ref = task.formatContext, init = getChildFormatContext(ref, type, props), ref !== init && null != props.children && outlineModelWithFormatContext(request, props.children, init));
		request = key;
		key = task.keyPath;
		null === request ? request = key : null !== key && (request = key + "," + request);
		props = [
			REACT_ELEMENT_TYPE,
			type,
			request,
			props
		];
		task = task.implicitSlot && null !== request ? [props] : props;
		return task;
	}
	function pingTask(request, task) {
		var pingedTasks = request.pingedTasks;
		pingedTasks.push(task);
		1 === pingedTasks.length && (request.flushScheduled = null !== request.destination, 21 === request.type || 10 === request.status ? scheduleMicrotask(function() {
			return performWork(request);
		}) : setTimeout(function() {
			return performWork(request);
		}, 0));
	}
	function createTask(request, model, keyPath, implicitSlot, formatContext, abortSet) {
		request.pendingChunks++;
		var id = request.nextChunkId++;
		"object" !== typeof model || null === model || null !== keyPath || implicitSlot || request.writtenObjects.set(model, serializeByValueID(id));
		var task = {
			id,
			status: 0,
			model,
			keyPath,
			implicitSlot,
			formatContext,
			ping: function() {
				return pingTask(request, task);
			},
			toJSON: function(parentPropertyName, value) {
				serializedSize += parentPropertyName.length;
				var prevKeyPath = task.keyPath, prevImplicitSlot = task.implicitSlot;
				try {
					var JSCompiler_inline_result = renderModelDestructive(request, task, this, parentPropertyName, value);
				} catch (thrownValue) {
					if (parentPropertyName = task.model, parentPropertyName = "object" === typeof parentPropertyName && null !== parentPropertyName && (parentPropertyName.$$typeof === REACT_ELEMENT_TYPE || parentPropertyName.$$typeof === REACT_LAZY_TYPE), 12 === request.status) task.status = 3, 21 === request.type ? (prevKeyPath = request.nextChunkId++, prevKeyPath = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath), JSCompiler_inline_result = prevKeyPath) : (prevKeyPath = request.fatalError, JSCompiler_inline_result = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath));
					else if (value = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, "object" === typeof value && null !== value && "function" === typeof value.then) {
						JSCompiler_inline_result = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
						var ping = JSCompiler_inline_result.ping;
						value.then(ping, ping);
						JSCompiler_inline_result.thenableState = getThenableStateAfterSuspending();
						task.keyPath = prevKeyPath;
						task.implicitSlot = prevImplicitSlot;
						JSCompiler_inline_result = parentPropertyName ? serializeLazyID(JSCompiler_inline_result.id) : serializeByValueID(JSCompiler_inline_result.id);
					} else task.keyPath = prevKeyPath, task.implicitSlot = prevImplicitSlot, request.pendingChunks++, prevKeyPath = request.nextChunkId++, prevImplicitSlot = logRecoverableError(request, value, task), emitErrorChunk(request, prevKeyPath, prevImplicitSlot), JSCompiler_inline_result = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath);
				}
				return JSCompiler_inline_result;
			},
			thenableState: null
		};
		abortSet.add(task);
		return task;
	}
	function serializeByValueID(id) {
		return "$" + id.toString(16);
	}
	function serializeLazyID(id) {
		return "$L" + id.toString(16);
	}
	function encodeReferenceChunk(request, id, reference) {
		request = stringify(reference);
		id = id.toString(16) + ":" + request + "\n";
		return stringToChunk(id);
	}
	function serializeClientReference(request, parent, parentPropertyName, clientReference) {
		var clientReferenceKey = clientReference.$$async ? clientReference.$$id + "#async" : clientReference.$$id, writtenClientReferences = request.writtenClientReferences, existingId = writtenClientReferences.get(clientReferenceKey);
		if (void 0 !== existingId) return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(existingId) : serializeByValueID(existingId);
		try {
			var config = request.bundlerConfig, modulePath = clientReference.$$id;
			existingId = "";
			var resolvedModuleData = config[modulePath];
			if (resolvedModuleData) existingId = resolvedModuleData.name;
			else {
				var idx = modulePath.lastIndexOf("#");
				-1 !== idx && (existingId = modulePath.slice(idx + 1), resolvedModuleData = config[modulePath.slice(0, idx)]);
				if (!resolvedModuleData) throw Error("Could not find the module \"" + modulePath + "\" in the React Client Manifest. This is probably a bug in the React Server Components bundler.");
			}
			if (!0 === resolvedModuleData.async && !0 === clientReference.$$async) throw Error("The module \"" + modulePath + "\" is marked as an async ESM module but was loaded as a CJS proxy. This is probably a bug in the React Server Components bundler.");
			var JSCompiler_inline_result = !0 === resolvedModuleData.async || !0 === clientReference.$$async ? [
				resolvedModuleData.id,
				resolvedModuleData.chunks,
				existingId,
				1
			] : [
				resolvedModuleData.id,
				resolvedModuleData.chunks,
				existingId
			];
			request.pendingChunks++;
			var importId = request.nextChunkId++, json = stringify(JSCompiler_inline_result), processedChunk = stringToChunk(importId.toString(16) + ":I" + json + "\n");
			request.completedImportChunks.push(processedChunk);
			writtenClientReferences.set(clientReferenceKey, importId);
			return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(importId) : serializeByValueID(importId);
		} catch (x) {
			return request.pendingChunks++, parent = request.nextChunkId++, parentPropertyName = logRecoverableError(request, x, null), emitErrorChunk(request, parent, parentPropertyName), serializeByValueID(parent);
		}
	}
	function outlineModelWithFormatContext(request, value, formatContext) {
		value = createTask(request, value, null, !1, formatContext, request.abortableTasks);
		retryTask(request, value);
		return value.id;
	}
	function serializeTypedArray(request, tag, typedArray) {
		request.pendingChunks++;
		var bufferId = request.nextChunkId++;
		emitTypedArrayChunk(request, bufferId, tag, typedArray, !1);
		return serializeByValueID(bufferId);
	}
	function serializeBlob(request, blob) {
		function progress(entry) {
			if (0 === newTask.status) if (entry.done) request.cacheController.signal.removeEventListener("abort", abortBlob), pingTask(request, newTask);
			else return model.push(entry.value), reader.read().then(progress).catch(error);
		}
		function error(reason) {
			0 === newTask.status && (request.cacheController.signal.removeEventListener("abort", abortBlob), erroredTask(request, newTask, reason), enqueueFlush(request), reader.cancel(reason).then(error, error));
		}
		function abortBlob() {
			if (0 === newTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortBlob);
				signal = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(newTask), haltTask(newTask), finishHaltedTask(newTask, request)) : (erroredTask(request, newTask, signal), enqueueFlush(request));
				reader.cancel(signal).then(error, error);
			}
		}
		var model = [blob.type], newTask = createTask(request, model, null, !1, 0, request.abortableTasks), reader = blob.stream().getReader();
		request.cacheController.signal.addEventListener("abort", abortBlob);
		reader.read().then(progress).catch(error);
		return "$B" + newTask.id.toString(16);
	}
	var modelRoot = !1;
	function renderModelDestructive(request, task, parent, parentPropertyName, value) {
		task.model = value;
		if (value === REACT_ELEMENT_TYPE) return "$";
		if (null === value) return null;
		if ("object" === typeof value) {
			switch (value.$$typeof) {
				case REACT_ELEMENT_TYPE:
					var elementReference = null, writtenObjects = request.writtenObjects;
					if (null === task.keyPath && !task.implicitSlot) {
						var existingReference = writtenObjects.get(value);
						if (void 0 !== existingReference) if (modelRoot === value) modelRoot = null;
						else return existingReference;
						else -1 === parentPropertyName.indexOf(":") && (parent = writtenObjects.get(parent), void 0 !== parent && (elementReference = parent + ":" + parentPropertyName, writtenObjects.set(value, elementReference)));
					}
					if (3200 < serializedSize) return deferTask(request, task);
					parentPropertyName = value.props;
					parent = parentPropertyName.ref;
					request = renderElement(request, task, value.type, value.key, void 0 !== parent ? parent : null, parentPropertyName);
					"object" === typeof request && null !== request && null !== elementReference && (writtenObjects.has(request) || writtenObjects.set(request, elementReference));
					return request;
				case REACT_LAZY_TYPE:
					if (3200 < serializedSize) return deferTask(request, task);
					task.thenableState = null;
					parentPropertyName = value._init;
					value = parentPropertyName(value._payload);
					if (12 === request.status) throw null;
					return renderModelDestructive(request, task, emptyRoot, "", value);
				case REACT_LEGACY_ELEMENT_TYPE: throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
			}
			if (value.$$typeof === CLIENT_REFERENCE_TAG$1) return serializeClientReference(request, parent, parentPropertyName, value);
			if (void 0 !== request.temporaryReferences && (elementReference = request.temporaryReferences.get(value), void 0 !== elementReference)) return "$T" + elementReference;
			elementReference = request.writtenObjects;
			writtenObjects = elementReference.get(value);
			if ("function" === typeof value.then) {
				if (void 0 !== writtenObjects) {
					if (null !== task.keyPath || task.implicitSlot) return "$@" + serializeThenable(request, task, value).toString(16);
					if (modelRoot === value) modelRoot = null;
					else return writtenObjects;
				}
				request = "$@" + serializeThenable(request, task, value).toString(16);
				elementReference.set(value, request);
				return request;
			}
			if (void 0 !== writtenObjects) if (modelRoot === value) {
				if (writtenObjects !== serializeByValueID(task.id)) return writtenObjects;
				modelRoot = null;
			} else return writtenObjects;
			else if (-1 === parentPropertyName.indexOf(":") && (writtenObjects = elementReference.get(parent), void 0 !== writtenObjects)) {
				existingReference = parentPropertyName;
				if (isArrayImpl(parent) && parent[0] === REACT_ELEMENT_TYPE) switch (parentPropertyName) {
					case "1":
						existingReference = "type";
						break;
					case "2":
						existingReference = "key";
						break;
					case "3":
						existingReference = "props";
						break;
					case "4": existingReference = "_owner";
				}
				elementReference.set(value, writtenObjects + ":" + existingReference);
			}
			if (isArrayImpl(value)) return renderFragment(request, task, value);
			if (value instanceof Map) return value = Array.from(value), "$Q" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if (value instanceof Set) return value = Array.from(value), "$W" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if ("function" === typeof FormData && value instanceof FormData) return value = Array.from(value.entries()), "$K" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if (value instanceof Error) return "$Z";
			if (value instanceof ArrayBuffer) return serializeTypedArray(request, "A", new Uint8Array(value));
			if (value instanceof Int8Array) return serializeTypedArray(request, "O", value);
			if (value instanceof Uint8Array) return serializeTypedArray(request, "o", value);
			if (value instanceof Uint8ClampedArray) return serializeTypedArray(request, "U", value);
			if (value instanceof Int16Array) return serializeTypedArray(request, "S", value);
			if (value instanceof Uint16Array) return serializeTypedArray(request, "s", value);
			if (value instanceof Int32Array) return serializeTypedArray(request, "L", value);
			if (value instanceof Uint32Array) return serializeTypedArray(request, "l", value);
			if (value instanceof Float32Array) return serializeTypedArray(request, "G", value);
			if (value instanceof Float64Array) return serializeTypedArray(request, "g", value);
			if (value instanceof BigInt64Array) return serializeTypedArray(request, "M", value);
			if (value instanceof BigUint64Array) return serializeTypedArray(request, "m", value);
			if (value instanceof DataView) return serializeTypedArray(request, "V", value);
			if ("function" === typeof Blob && value instanceof Blob) return serializeBlob(request, value);
			if (elementReference = getIteratorFn(value)) return parentPropertyName = elementReference.call(value), parentPropertyName === value ? (value = Array.from(parentPropertyName), "$i" + outlineModelWithFormatContext(request, value, 0).toString(16)) : renderFragment(request, task, Array.from(parentPropertyName));
			if ("function" === typeof ReadableStream && value instanceof ReadableStream) return serializeReadableStream(request, task, value);
			elementReference = value[ASYNC_ITERATOR];
			if ("function" === typeof elementReference) return null !== task.keyPath ? (request = [
				REACT_ELEMENT_TYPE,
				REACT_FRAGMENT_TYPE,
				task.keyPath,
				{ children: value }
			], request = task.implicitSlot ? [request] : request) : (parentPropertyName = elementReference.call(value), request = serializeAsyncIterable(request, task, value, parentPropertyName)), request;
			if (value instanceof Date) return "$D" + value.toJSON();
			request = getPrototypeOf(value);
			if (request !== ObjectPrototype$1 && (null === request || null !== getPrototypeOf(request))) throw Error("Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported." + describeObjectForErrorMessage(parent, parentPropertyName));
			return value;
		}
		if ("string" === typeof value) {
			serializedSize += value.length;
			if ("Z" === value[value.length - 1] && parent[parentPropertyName] instanceof Date) return "$D" + value;
			if (1024 <= value.length && null !== byteLengthOfChunk) return request.pendingChunks++, task = request.nextChunkId++, emitTextChunk(request, task, value, !1), serializeByValueID(task);
			request = "$" === value[0] ? "$" + value : value;
			return request;
		}
		if ("boolean" === typeof value) return value;
		if ("number" === typeof value) return Number.isFinite(value) ? 0 === value && -Infinity === 1 / value ? "$-0" : value : Infinity === value ? "$Infinity" : -Infinity === value ? "$-Infinity" : "$NaN";
		if ("undefined" === typeof value) return "$undefined";
		if ("function" === typeof value) {
			if (value.$$typeof === CLIENT_REFERENCE_TAG$1) return serializeClientReference(request, parent, parentPropertyName, value);
			if (value.$$typeof === SERVER_REFERENCE_TAG) return task = request.writtenServerReferences, parentPropertyName = task.get(value), void 0 !== parentPropertyName ? request = "$h" + parentPropertyName.toString(16) : (parentPropertyName = value.$$bound, parentPropertyName = null === parentPropertyName ? null : Promise.resolve(parentPropertyName), request = outlineModelWithFormatContext(request, {
				id: value.$$id,
				bound: parentPropertyName
			}, 0), task.set(value, request), request = "$h" + request.toString(16)), request;
			if (void 0 !== request.temporaryReferences && (request = request.temporaryReferences.get(value), void 0 !== request)) return "$T" + request;
			if (value.$$typeof === TEMPORARY_REFERENCE_TAG) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
			if (/^on[A-Z]/.test(parentPropertyName)) throw Error("Event handlers cannot be passed to Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
			throw Error("Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with \"use server\". Or maybe you meant to call this function rather than return it." + describeObjectForErrorMessage(parent, parentPropertyName));
		}
		if ("symbol" === typeof value) {
			task = request.writtenSymbols;
			elementReference = task.get(value);
			if (void 0 !== elementReference) return serializeByValueID(elementReference);
			elementReference = value.description;
			if (Symbol.for(elementReference) !== value) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (value.description + ") cannot be found among global symbols.") + describeObjectForErrorMessage(parent, parentPropertyName));
			request.pendingChunks++;
			parentPropertyName = request.nextChunkId++;
			parent = encodeReferenceChunk(request, parentPropertyName, "$S" + elementReference);
			request.completedImportChunks.push(parent);
			task.set(value, parentPropertyName);
			return serializeByValueID(parentPropertyName);
		}
		if ("bigint" === typeof value) return "$n" + value.toString(10);
		throw Error("Type " + typeof value + " is not supported in Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName));
	}
	function logRecoverableError(request, error) {
		var prevRequest = currentRequest;
		currentRequest = null;
		try {
			var onError = request.onError;
			var errorDigest = supportsRequestStorage ? requestStorage.run(void 0, onError, error) : onError(error);
		} finally {
			currentRequest = prevRequest;
		}
		if (null != errorDigest && "string" !== typeof errorDigest) throw Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
		return errorDigest || "";
	}
	function fatalError(request, error) {
		var onFatalError = request.onFatalError;
		onFatalError(error);
		null !== request.destination ? (request.status = 14, closeWithError(request.destination, error)) : (request.status = 13, request.fatalError = error);
		request.cacheController.abort(Error("The render was aborted due to a fatal error.", { cause: error }));
	}
	function emitErrorChunk(request, id, digest) {
		digest = { digest };
		id = id.toString(16) + ":E" + stringify(digest) + "\n";
		id = stringToChunk(id);
		request.completedErrorChunks.push(id);
	}
	function emitModelChunk(request, id, json) {
		id = id.toString(16) + ":" + json + "\n";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id);
	}
	function emitTypedArrayChunk(request, id, tag, typedArray, debug) {
		debug ? request.pendingDebugChunks++ : request.pendingChunks++;
		debug = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
		typedArray = 2048 < typedArray.byteLength ? debug.slice() : debug;
		debug = typedArray.byteLength;
		id = id.toString(16) + ":" + tag + debug.toString(16) + ",";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id, typedArray);
	}
	function emitTextChunk(request, id, text, debug) {
		if (null === byteLengthOfChunk) throw Error("Existence of byteLengthOfChunk should have already been checked. This is a bug in React.");
		debug ? request.pendingDebugChunks++ : request.pendingChunks++;
		text = stringToChunk(text);
		debug = text.byteLength;
		id = id.toString(16) + ":T" + debug.toString(16) + ",";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id, text);
	}
	function emitChunk(request, task, value) {
		var id = task.id;
		"string" === typeof value && null !== byteLengthOfChunk ? emitTextChunk(request, id, value, !1) : value instanceof ArrayBuffer ? emitTypedArrayChunk(request, id, "A", new Uint8Array(value), !1) : value instanceof Int8Array ? emitTypedArrayChunk(request, id, "O", value, !1) : value instanceof Uint8Array ? emitTypedArrayChunk(request, id, "o", value, !1) : value instanceof Uint8ClampedArray ? emitTypedArrayChunk(request, id, "U", value, !1) : value instanceof Int16Array ? emitTypedArrayChunk(request, id, "S", value, !1) : value instanceof Uint16Array ? emitTypedArrayChunk(request, id, "s", value, !1) : value instanceof Int32Array ? emitTypedArrayChunk(request, id, "L", value, !1) : value instanceof Uint32Array ? emitTypedArrayChunk(request, id, "l", value, !1) : value instanceof Float32Array ? emitTypedArrayChunk(request, id, "G", value, !1) : value instanceof Float64Array ? emitTypedArrayChunk(request, id, "g", value, !1) : value instanceof BigInt64Array ? emitTypedArrayChunk(request, id, "M", value, !1) : value instanceof BigUint64Array ? emitTypedArrayChunk(request, id, "m", value, !1) : value instanceof DataView ? emitTypedArrayChunk(request, id, "V", value, !1) : (value = stringify(value, task.toJSON), emitModelChunk(request, task.id, value));
	}
	function erroredTask(request, task, error) {
		task.status = 4;
		error = logRecoverableError(request, error, task);
		emitErrorChunk(request, task.id, error);
		request.abortableTasks.delete(task);
		callOnAllReadyIfReady(request);
	}
	var emptyRoot = {};
	function retryTask(request, task) {
		if (0 === task.status) {
			task.status = 5;
			var parentSerializedSize = serializedSize;
			try {
				modelRoot = task.model;
				var resolvedModel = renderModelDestructive(request, task, emptyRoot, "", task.model);
				modelRoot = resolvedModel;
				task.keyPath = null;
				task.implicitSlot = !1;
				if ("object" === typeof resolvedModel && null !== resolvedModel) request.writtenObjects.set(resolvedModel, serializeByValueID(task.id)), emitChunk(request, task, resolvedModel);
				else {
					var json = stringify(resolvedModel);
					emitModelChunk(request, task.id, json);
				}
				task.status = 1;
				request.abortableTasks.delete(task);
				callOnAllReadyIfReady(request);
			} catch (thrownValue) {
				if (12 === request.status) if (request.abortableTasks.delete(task), task.status = 0, 21 === request.type) haltTask(task), finishHaltedTask(task, request);
				else {
					var errorId = request.fatalError;
					abortTask(task);
					finishAbortedTask(task, request, errorId);
				}
				else {
					var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
					if ("object" === typeof x && null !== x && "function" === typeof x.then) {
						task.status = 0;
						task.thenableState = getThenableStateAfterSuspending();
						var ping = task.ping;
						x.then(ping, ping);
					} else erroredTask(request, task, x);
				}
			} finally {
				serializedSize = parentSerializedSize;
			}
		}
	}
	function tryStreamTask(request, task) {
		var parentSerializedSize = serializedSize;
		try {
			emitChunk(request, task, task.model);
		} finally {
			serializedSize = parentSerializedSize;
		}
	}
	function performWork(request) {
		var prevDispatcher = ReactSharedInternalsServer.H;
		ReactSharedInternalsServer.H = HooksDispatcher;
		var prevRequest = currentRequest;
		currentRequest$1 = currentRequest = request;
		try {
			var pingedTasks = request.pingedTasks;
			request.pingedTasks = [];
			for (var i = 0; i < pingedTasks.length; i++) retryTask(request, pingedTasks[i]);
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		} finally {
			ReactSharedInternalsServer.H = prevDispatcher, currentRequest$1 = null, currentRequest = prevRequest;
		}
	}
	function abortTask(task) {
		0 === task.status && (task.status = 3);
	}
	function finishAbortedTask(task, request, errorId) {
		3 === task.status && (errorId = serializeByValueID(errorId), task = encodeReferenceChunk(request, task.id, errorId), request.completedErrorChunks.push(task));
	}
	function haltTask(task) {
		0 === task.status && (task.status = 3);
	}
	function finishHaltedTask(task, request) {
		3 === task.status && request.pendingChunks--;
	}
	function flushCompletedChunks(request) {
		var destination = request.destination;
		if (null !== destination) {
			currentView = new Uint8Array(2048);
			writtenBytes = 0;
			try {
				for (var importsChunks = request.completedImportChunks, i = 0; i < importsChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, importsChunks[i]);
				importsChunks.splice(0, i);
				var hintChunks = request.completedHintChunks;
				for (i = 0; i < hintChunks.length; i++) writeChunkAndReturn(destination, hintChunks[i]);
				hintChunks.splice(0, i);
				var regularChunks = request.completedRegularChunks;
				for (i = 0; i < regularChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, regularChunks[i]);
				regularChunks.splice(0, i);
				var errorChunks = request.completedErrorChunks;
				for (i = 0; i < errorChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, errorChunks[i]);
				errorChunks.splice(0, i);
			} finally {
				request.flushScheduled = !1, currentView && 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = null, writtenBytes = 0);
			}
		}
		0 === request.pendingChunks && (12 > request.status && request.cacheController.abort(Error("This render completed successfully. All cacheSignals are now aborted to allow clean up of any unused resources.")), null !== request.destination && (request.status = 14, request.destination.close(), request.destination = null));
	}
	function startWork(request) {
		request.flushScheduled = null !== request.destination;
		supportsRequestStorage ? scheduleMicrotask(function() {
			requestStorage.run(request, performWork, request);
		}) : scheduleMicrotask(function() {
			return performWork(request);
		});
		setTimeout(function() {
			10 === request.status && (request.status = 11);
		}, 0);
	}
	function enqueueFlush(request) {
		!1 === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination && (request.flushScheduled = !0, setTimeout(function() {
			request.flushScheduled = !1;
			flushCompletedChunks(request);
		}, 0));
	}
	function callOnAllReadyIfReady(request) {
		0 === request.abortableTasks.size && (request = request.onAllReady, request());
	}
	function startFlowing(request, destination) {
		if (13 === request.status) request.status = 14, closeWithError(destination, request.fatalError);
		else if (14 !== request.status && null === request.destination) {
			request.destination = destination;
			try {
				flushCompletedChunks(request);
			} catch (error) {
				logRecoverableError(request, error, null), fatalError(request, error);
			}
		}
	}
	function finishHalt(request, abortedTasks) {
		try {
			abortedTasks.forEach(function(task) {
				return finishHaltedTask(task, request);
			});
			var onAllReady = request.onAllReady;
			onAllReady();
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		}
	}
	function finishAbort(request, abortedTasks, errorId) {
		try {
			abortedTasks.forEach(function(task) {
				return finishAbortedTask(task, request, errorId);
			});
			var onAllReady = request.onAllReady;
			onAllReady();
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		}
	}
	function abort(request, reason) {
		if (!(11 < request.status)) try {
			request.status = 12;
			request.cacheController.abort(reason);
			var abortableTasks = request.abortableTasks;
			if (0 < abortableTasks.size) if (21 === request.type) abortableTasks.forEach(function(task) {
				return haltTask(task, request);
			}), setTimeout(function() {
				return finishHalt(request, abortableTasks);
			}, 0);
			else {
				var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason, digest = logRecoverableError(request, error, null), errorId = request.nextChunkId++;
				request.fatalError = errorId;
				request.pendingChunks++;
				emitErrorChunk(request, errorId, digest, error, !1, null);
				abortableTasks.forEach(function(task) {
					return abortTask(task, request, errorId);
				});
				setTimeout(function() {
					return finishAbort(request, abortableTasks, errorId);
				}, 0);
			}
			else {
				var onAllReady = request.onAllReady;
				onAllReady();
				flushCompletedChunks(request);
			}
		} catch (error$26) {
			logRecoverableError(request, error$26, null), fatalError(request, error$26);
		}
	}
	function resolveServerReference(bundlerConfig, id) {
		var name = "", resolvedModuleData = bundlerConfig[id];
		if (resolvedModuleData) name = resolvedModuleData.name;
		else {
			var idx = id.lastIndexOf("#");
			-1 !== idx && (name = id.slice(idx + 1), resolvedModuleData = bundlerConfig[id.slice(0, idx)]);
			if (!resolvedModuleData) throw Error("Could not find the module \"" + id + "\" in the React Server Manifest. This is probably a bug in the React Server Components bundler.");
		}
		return resolvedModuleData.async ? [
			resolvedModuleData.id,
			resolvedModuleData.chunks,
			name,
			1
		] : [
			resolvedModuleData.id,
			resolvedModuleData.chunks,
			name
		];
	}
	var chunkCache = /* @__PURE__ */ new Map();
	function requireAsyncModule(id) {
		var promise = __vite_rsc_require__(id);
		if ("function" !== typeof promise.then || "fulfilled" === promise.status) return null;
		promise.then(function(value) {
			promise.status = "fulfilled";
			promise.value = value;
		}, function(reason) {
			promise.status = "rejected";
			promise.reason = reason;
		});
		return promise;
	}
	function ignoreReject() {}
	function preloadModule(metadata) {
		for (var chunks = metadata[1], promises = [], i = 0; i < chunks.length;) {
			var chunkId = chunks[i++];
			chunks[i++];
			var entry = chunkCache.get(chunkId);
			if (void 0 === entry) {
				entry = __webpack_chunk_load__(chunkId);
				promises.push(entry);
				var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
				entry.then(resolve, ignoreReject);
				chunkCache.set(chunkId, entry);
			} else null !== entry && promises.push(entry);
		}
		return 4 === metadata.length ? 0 === promises.length ? requireAsyncModule(metadata[0]) : Promise.all(promises).then(function() {
			return requireAsyncModule(metadata[0]);
		}) : 0 < promises.length ? Promise.all(promises) : null;
	}
	function requireModule(metadata) {
		var moduleExports = __vite_rsc_require__(metadata[0]);
		if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
		else throw moduleExports.reason;
		if ("*" === metadata[2]) return moduleExports;
		if ("" === metadata[2]) return moduleExports.__esModule ? moduleExports.default : moduleExports;
		if (hasOwnProperty.call(moduleExports, metadata[2])) return moduleExports[metadata[2]];
	}
	function appendBackingEntry(backingStore, key, value) {
		backingStore.data.append(key, value);
		value = backingStore.keys;
		null === value ? (backingStore.keys = Array.from(backingStore.data.keys()), backingStore.keyPointer = 0) : value.push(key);
	}
	var RESPONSE_SYMBOL = Symbol();
	function ReactPromise(status, value, reason) {
		this.status = status;
		this.value = value;
		this.reason = reason;
	}
	ReactPromise.prototype = Object.create(Promise.prototype);
	ReactPromise.prototype.then = function(resolve, reject) {
		switch (this.status) {
			case "resolved_model": initializeModelChunk(this);
		}
		switch (this.status) {
			case "fulfilled":
				if ("function" === typeof resolve) {
					for (var inspectedValue = this.value, cycleProtection = 0, visited = /* @__PURE__ */ new Set(); inspectedValue instanceof ReactPromise;) {
						cycleProtection++;
						if (inspectedValue === this || visited.has(inspectedValue) || 1e3 < cycleProtection) {
							"function" === typeof reject && reject(Error("Cannot have cyclic thenables."));
							return;
						}
						visited.add(inspectedValue);
						if ("fulfilled" === inspectedValue.status) inspectedValue = inspectedValue.value;
						else break;
					}
					resolve(this.value);
				}
				break;
			case "pending":
			case "blocked":
				"function" === typeof resolve && (null === this.value && (this.value = []), this.value.push(resolve));
				"function" === typeof reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
				break;
			default: "function" === typeof reject && reject(this.reason);
		}
	};
	var ObjectPrototype = Object.prototype, ArrayPrototype = Array.prototype;
	function wakeChunk(response, listeners, value, chunk) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(value) : fulfillReference(response, listener, value, chunk.reason);
		}
	}
	function rejectChunk(response, listeners, error) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(error) : rejectReference(response, listener.handler, error);
		}
	}
	function triggerErrorOnChunk(response, chunk, error) {
		if ("pending" !== chunk.status && "blocked" !== chunk.status) chunk.reason.error(error);
		else {
			var listeners = chunk.reason;
			chunk.status = "rejected";
			chunk.reason = error;
			null !== listeners && rejectChunk(response, listeners, error);
		}
	}
	function createResolvedModelChunk(response, value, id) {
		var $jscomp$compprop2 = {};
		return new ReactPromise("resolved_model", value, ($jscomp$compprop2.id = id, $jscomp$compprop2[RESPONSE_SYMBOL] = response, $jscomp$compprop2));
	}
	function resolveModelChunk(response, chunk, value, id) {
		if ("pending" !== chunk.status) chunk = chunk.reason, "C" === value[0] ? chunk.close("C" === value ? "\"$undefined\"" : value.slice(1)) : chunk.enqueueModel(value);
		else {
			var resolveListeners = chunk.value, rejectListeners = chunk.reason;
			chunk.status = "resolved_model";
			chunk.value = value;
			value = {};
			chunk.reason = (value.id = id, value[RESPONSE_SYMBOL] = response, value);
			if (null !== resolveListeners) switch (initializeModelChunk(chunk), chunk.status) {
				case "fulfilled":
					wakeChunk(response, resolveListeners, chunk.value, chunk);
					break;
				case "blocked":
				case "pending":
					if (chunk.value) for (response = 0; response < resolveListeners.length; response++) chunk.value.push(resolveListeners[response]);
					else chunk.value = resolveListeners;
					if (chunk.reason) {
						if (rejectListeners) for (resolveListeners = 0; resolveListeners < rejectListeners.length; resolveListeners++) chunk.reason.push(rejectListeners[resolveListeners]);
					} else chunk.reason = rejectListeners;
					break;
				case "rejected": rejectListeners && rejectChunk(response, rejectListeners, chunk.reason);
			}
		}
	}
	function createResolvedIteratorResultChunk(response, value, done) {
		var $jscomp$compprop4 = {};
		return new ReactPromise("resolved_model", (done ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + value + "}", ($jscomp$compprop4.id = -1, $jscomp$compprop4[RESPONSE_SYMBOL] = response, $jscomp$compprop4));
	}
	function resolveIteratorResultChunk(response, chunk, value, done) {
		resolveModelChunk(response, chunk, (done ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + value + "}", -1);
	}
	function loadServerReference$1(response, metaData, parentObject, key) {
		function reject(error) {
			var rejectListeners = blockedPromise.reason, erroredPromise = blockedPromise;
			erroredPromise.status = "rejected";
			erroredPromise.value = null;
			erroredPromise.reason = error;
			null !== rejectListeners && rejectChunk(response, rejectListeners, error);
			rejectReference(response, handler, error);
		}
		var id = metaData.id;
		if ("string" !== typeof id || "then" === key) return null;
		var cachedPromise = metaData.$$promise;
		if (void 0 !== cachedPromise) {
			if ("fulfilled" === cachedPromise.status) return cachedPromise = cachedPromise.value, "__proto__" === key ? null : parentObject[key] = cachedPromise;
			initializingHandler ? (id = initializingHandler, id.deps++) : id = initializingHandler = {
				chunk: null,
				value: null,
				reason: null,
				deps: 1,
				errored: !1
			};
			cachedPromise.then(resolveReference.bind(null, response, id, parentObject, key), rejectReference.bind(null, response, id));
			return null;
		}
		var blockedPromise = new ReactPromise("blocked", null, null);
		metaData.$$promise = blockedPromise;
		var serverReference = resolveServerReference(response._bundlerConfig, id);
		cachedPromise = metaData.bound;
		if (id = preloadModule(serverReference)) cachedPromise instanceof ReactPromise && (id = Promise.all([id, cachedPromise]));
		else if (cachedPromise instanceof ReactPromise) id = Promise.resolve(cachedPromise);
		else return cachedPromise = requireModule(serverReference), id = blockedPromise, id.status = "fulfilled", id.value = cachedPromise;
		if (initializingHandler) {
			var handler = initializingHandler;
			handler.deps++;
		} else handler = initializingHandler = {
			chunk: null,
			value: null,
			reason: null,
			deps: 1,
			errored: !1
		};
		id.then(function() {
			var resolvedValue = requireModule(serverReference);
			if (metaData.bound) {
				var promiseValue = metaData.bound.value;
				promiseValue = isArrayImpl(promiseValue) ? promiseValue.slice(0) : [];
				if (1e3 < promiseValue.length) {
					reject(Error("Server Function has too many bound arguments. Received " + promiseValue.length + " but the limit is 1000."));
					return;
				}
				promiseValue.unshift(null);
				resolvedValue = resolvedValue.bind.apply(resolvedValue, promiseValue);
			}
			promiseValue = blockedPromise.value;
			var initializedPromise = blockedPromise;
			initializedPromise.status = "fulfilled";
			initializedPromise.value = resolvedValue;
			initializedPromise.reason = null;
			null !== promiseValue && wakeChunk(response, promiseValue, resolvedValue, initializedPromise);
			resolveReference(response, handler, parentObject, key, resolvedValue);
		}, reject);
		return null;
	}
	function reviveModel(response, parentObj, parentKey, value, reference, arrayRoot) {
		if ("string" === typeof value) return parseModelString(response, parentObj, parentKey, value, reference, arrayRoot);
		if ("object" === typeof value && null !== value) if (void 0 !== reference && void 0 !== response._temporaryReferences && response._temporaryReferences.set(value, reference), isArrayImpl(value)) {
			if (null === arrayRoot) {
				var childContext = {
					count: 0,
					fork: !1
				};
				response._rootArrayContexts.set(value, childContext);
			} else childContext = arrayRoot;
			1 < value.length && (childContext.fork = !0);
			bumpArrayCount(childContext, value.length + 1, response);
			for (parentObj = 0; parentObj < value.length; parentObj++) value[parentObj] = reviveModel(response, value, "" + parentObj, value[parentObj], void 0 !== reference ? reference + ":" + parentObj : void 0, childContext);
		} else for (childContext in value) hasOwnProperty.call(value, childContext) && ("__proto__" === childContext ? delete value[childContext] : (parentObj = void 0 !== reference && -1 === childContext.indexOf(":") ? reference + ":" + childContext : void 0, parentObj = reviveModel(response, value, childContext, value[childContext], parentObj, null), void 0 !== parentObj ? value[childContext] = parentObj : delete value[childContext]));
		return value;
	}
	function bumpArrayCount(arrayContext, slots, response) {
		if ((arrayContext.count += slots) > response._arraySizeLimit && arrayContext.fork) throw Error("Maximum array nesting exceeded. Large nested arrays can be dangerous. Try adding intermediate objects.");
	}
	var initializingHandler = null;
	function initializeModelChunk(chunk) {
		var prevHandler = initializingHandler;
		initializingHandler = null;
		var _chunk$reason = chunk.reason, response = _chunk$reason[RESPONSE_SYMBOL];
		_chunk$reason = _chunk$reason.id;
		_chunk$reason = -1 === _chunk$reason ? void 0 : _chunk$reason.toString(16);
		var resolvedModel = chunk.value;
		chunk.status = "blocked";
		chunk.value = null;
		chunk.reason = null;
		try {
			var rawModel = JSON.parse(resolvedModel);
			resolvedModel = {
				count: 0,
				fork: !1
			};
			var value = reviveModel(response, { "": rawModel }, "", rawModel, _chunk$reason, resolvedModel), resolveListeners = chunk.value;
			if (null !== resolveListeners) for (chunk.value = null, chunk.reason = null, rawModel = 0; rawModel < resolveListeners.length; rawModel++) {
				var listener = resolveListeners[rawModel];
				"function" === typeof listener ? listener(value) : fulfillReference(response, listener, value, resolvedModel);
			}
			if (null !== initializingHandler) {
				if (initializingHandler.errored) throw initializingHandler.reason;
				if (0 < initializingHandler.deps) {
					initializingHandler.value = value;
					initializingHandler.reason = resolvedModel;
					initializingHandler.chunk = chunk;
					return;
				}
			}
			chunk.status = "fulfilled";
			chunk.value = value;
			chunk.reason = resolvedModel;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		} finally {
			initializingHandler = prevHandler;
		}
	}
	function reportGlobalError(response, error) {
		response._closed = !0;
		response._closedReason = error;
		response._chunks.forEach(function(chunk) {
			"pending" === chunk.status ? triggerErrorOnChunk(response, chunk, error) : "fulfilled" === chunk.status && null !== chunk.reason && (chunk = chunk.reason, "function" === typeof chunk.error && chunk.error(error));
		});
	}
	function getChunk(response, id) {
		var chunks = response._chunks, chunk = chunks.get(id);
		chunk || (chunk = response._formData.data.get(response._prefix + id), chunk = "string" === typeof chunk ? createResolvedModelChunk(response, chunk, id) : response._closed ? new ReactPromise("rejected", null, response._closedReason) : new ReactPromise("pending", null, null), chunks.set(id, chunk));
		return chunk;
	}
	function fulfillReference(response, reference, value, arrayRoot) {
		var handler = reference.handler, parentObject = reference.parentObject, key = reference.key, map = reference.map, path = reference.path;
		try {
			for (var localLength = 0, rootArrayContexts = response._rootArrayContexts, i = 1; i < path.length; i++) {
				var name = path[i];
				if ("object" !== typeof value || null === value || getPrototypeOf(value) !== ObjectPrototype && getPrototypeOf(value) !== ArrayPrototype || !hasOwnProperty.call(value, name)) throw Error("Invalid reference.");
				value = value[name];
				if (isArrayImpl(value)) localLength = 0, arrayRoot = rootArrayContexts.get(value) || arrayRoot;
				else if (arrayRoot = null, "string" === typeof value) localLength = value.length;
				else if ("bigint" === typeof value) {
					var n = Math.abs(Number(value));
					localLength = 0 === n ? 1 : Math.floor(Math.log10(n)) + 1;
				} else localLength = ArrayBuffer.isView(value) ? value.byteLength : 0;
			}
			var resolvedValue = map(response, value, parentObject, key);
			var referenceArrayRoot = reference.arrayRoot;
			null !== referenceArrayRoot && (null !== arrayRoot ? (arrayRoot.fork && (referenceArrayRoot.fork = !0), bumpArrayCount(referenceArrayRoot, arrayRoot.count, response)) : 0 < localLength && bumpArrayCount(referenceArrayRoot, localLength, response));
		} catch (error) {
			rejectReference(response, handler, error);
			return;
		}
		resolveReference(response, handler, parentObject, key, resolvedValue);
	}
	function resolveReference(response, handler, parentObject, key, resolvedValue) {
		"__proto__" !== key && (parentObject[key] = resolvedValue);
		"" === key && null === handler.value && (handler.value = resolvedValue);
		handler.deps--;
		0 === handler.deps && (parentObject = handler.chunk, null !== parentObject && "blocked" === parentObject.status && (key = parentObject.value, parentObject.status = "fulfilled", parentObject.value = handler.value, parentObject.reason = handler.reason, null !== key && wakeChunk(response, key, handler.value, parentObject)));
	}
	function rejectReference(response, handler, error) {
		handler.errored || (handler.errored = !0, handler.value = null, handler.reason = error, handler = handler.chunk, null !== handler && "blocked" === handler.status && triggerErrorOnChunk(response, handler, error));
	}
	function getOutlinedModel(response, reference, parentObject, key, referenceArrayRoot, map) {
		reference = reference.split(":");
		var id = parseInt(reference[0], 16), chunk = getChunk(response, id);
		switch (chunk.status) {
			case "resolved_model": initializeModelChunk(chunk);
		}
		switch (chunk.status) {
			case "fulfilled":
				id = chunk.value;
				chunk = chunk.reason;
				if (null !== chunk && "error" in chunk) throw Error("Expected an initialized chunk but got an initialized stream chunk instead. This payload may have been submitted by an older version of React.");
				for (var localLength = 0, rootArrayContexts = response._rootArrayContexts, i = 1; i < reference.length; i++) {
					localLength = reference[i];
					if ("object" !== typeof id || null === id || getPrototypeOf(id) !== ObjectPrototype && getPrototypeOf(id) !== ArrayPrototype || !hasOwnProperty.call(id, localLength)) throw Error("Invalid reference.");
					id = id[localLength];
					isArrayImpl(id) ? (localLength = 0, chunk = rootArrayContexts.get(id) || chunk) : (chunk = null, "string" === typeof id ? localLength = id.length : "bigint" === typeof id ? (localLength = Math.abs(Number(id)), localLength = 0 === localLength ? 1 : Math.floor(Math.log10(localLength)) + 1) : localLength = ArrayBuffer.isView(id) ? id.byteLength : 0);
				}
				parentObject = map(response, id, parentObject, key);
				null !== referenceArrayRoot && (null !== chunk ? (chunk.fork && (referenceArrayRoot.fork = !0), bumpArrayCount(referenceArrayRoot, chunk.count, response)) : 0 < localLength && bumpArrayCount(referenceArrayRoot, localLength, response));
				return parentObject;
			case "blocked": return initializingHandler ? (response = initializingHandler, response.deps++) : response = initializingHandler = {
				chunk: null,
				value: null,
				reason: null,
				deps: 1,
				errored: !1
			}, referenceArrayRoot = {
				handler: response,
				parentObject,
				key,
				map,
				path: reference,
				arrayRoot: referenceArrayRoot
			}, null === chunk.value ? chunk.value = [referenceArrayRoot] : chunk.value.push(referenceArrayRoot), null === chunk.reason ? chunk.reason = [referenceArrayRoot] : chunk.reason.push(referenceArrayRoot), null;
			case "pending": throw Error("Invalid forward reference.");
			default: return initializingHandler ? (initializingHandler.errored = !0, initializingHandler.value = null, initializingHandler.reason = chunk.reason) : initializingHandler = {
				chunk: null,
				value: null,
				reason: chunk.reason,
				deps: 0,
				errored: !0
			}, null;
		}
	}
	function createMap(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Map initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Map.");
		model.$$consumed = !0;
		return new Map(model);
	}
	function createSet(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Set initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Set.");
		model.$$consumed = !0;
		return new Set(model);
	}
	function extractIterator(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Iterator initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Iterator.");
		model.$$consumed = !0;
		return model[Symbol.iterator]();
	}
	function createModel(response, model, parentObject, key) {
		return "then" === key && "function" === typeof model ? null : model;
	}
	function parseTypedArray(response, reference, constructor, bytesPerElement, parentObject, parentKey, referenceArrayRoot) {
		function reject(error) {
			if (!handler.errored) {
				handler.errored = !0;
				handler.value = null;
				handler.reason = error;
				var chunk = handler.chunk;
				null !== chunk && "blocked" === chunk.status && triggerErrorOnChunk(response, chunk, error);
			}
		}
		reference = parseInt(reference.slice(2), 16);
		var key = response._prefix + reference;
		bytesPerElement = response._chunks;
		if (bytesPerElement.has(reference)) throw Error("Already initialized typed array.");
		bytesPerElement.set(reference, new ReactPromise("rejected", null, Error("Already initialized typed array.")));
		reference = response._formData.data.get(key).arrayBuffer();
		if (initializingHandler) {
			var handler = initializingHandler;
			handler.deps++;
		} else handler = initializingHandler = {
			chunk: null,
			value: null,
			reason: null,
			deps: 1,
			errored: !1
		};
		reference.then(function(buffer) {
			try {
				null !== referenceArrayRoot && bumpArrayCount(referenceArrayRoot, buffer.byteLength, response);
				var resolvedValue = constructor === ArrayBuffer ? buffer : new constructor(buffer);
				"__proto__" !== key && (parentObject[parentKey] = resolvedValue);
				"" === parentKey && null === handler.value && (handler.value = resolvedValue);
			} catch (x) {
				reject(x);
				return;
			}
			handler.deps--;
			0 === handler.deps && (buffer = handler.chunk, null !== buffer && "blocked" === buffer.status && (resolvedValue = buffer.value, buffer.status = "fulfilled", buffer.value = handler.value, buffer.reason = null, null !== resolvedValue && wakeChunk(response, resolvedValue, handler.value, buffer)));
		}, reject);
		return null;
	}
	function resolveStream(response, id, stream, controller) {
		var chunks = response._chunks;
		stream = new ReactPromise("fulfilled", stream, controller);
		chunks.set(id, stream);
		response = response._formData.data.getAll(response._prefix + id);
		for (id = 0; id < response.length; id++) chunks = response[id], "string" === typeof chunks && ("C" === chunks[0] ? controller.close("C" === chunks ? "\"$undefined\"" : chunks.slice(1)) : controller.enqueueModel(chunks));
	}
	function parseReadableStream(response, reference, type) {
		function enqueue(value) {
			"bytes" !== type || ArrayBuffer.isView(value) ? controller.enqueue(value) : flightController.error(Error("Invalid data for bytes stream."));
		}
		reference = parseInt(reference.slice(2), 16);
		if (response._chunks.has(reference)) throw Error("Already initialized stream.");
		var controller = null, closed = !1, stream = new ReadableStream({
			type,
			start: function(c) {
				controller = c;
			}
		}), previousBlockedChunk = null, flightController = {
			enqueueModel: function(json) {
				if (null === previousBlockedChunk) {
					var chunk = createResolvedModelChunk(response, json, -1);
					initializeModelChunk(chunk);
					"fulfilled" === chunk.status ? enqueue(chunk.value) : (chunk.then(enqueue, flightController.error), previousBlockedChunk = chunk);
				} else {
					chunk = previousBlockedChunk;
					var chunk$31 = new ReactPromise("pending", null, null);
					chunk$31.then(enqueue, flightController.error);
					previousBlockedChunk = chunk$31;
					chunk.then(function() {
						previousBlockedChunk === chunk$31 && (previousBlockedChunk = null);
						resolveModelChunk(response, chunk$31, json, -1);
					});
				}
			},
			close: function() {
				if (!closed) if (closed = !0, null === previousBlockedChunk) controller.close();
				else {
					var blockedChunk = previousBlockedChunk;
					previousBlockedChunk = null;
					blockedChunk.then(function() {
						return controller.close();
					});
				}
			},
			error: function(error) {
				if (!closed) if (closed = !0, null === previousBlockedChunk) controller.error(error);
				else {
					var blockedChunk = previousBlockedChunk;
					previousBlockedChunk = null;
					blockedChunk.then(function() {
						return controller.error(error);
					});
				}
			}
		};
		resolveStream(response, reference, stream, flightController);
		return stream;
	}
	function FlightIterator(next) {
		this.next = next;
	}
	FlightIterator.prototype = {};
	FlightIterator.prototype[ASYNC_ITERATOR] = function() {
		return this;
	};
	function parseAsyncIterable(response, reference, iterator) {
		reference = parseInt(reference.slice(2), 16);
		if (response._chunks.has(reference)) throw Error("Already initialized stream.");
		var buffer = [], closed = !1, nextWriteIndex = 0, $jscomp$compprop5 = {};
		$jscomp$compprop5 = ($jscomp$compprop5[ASYNC_ITERATOR] = function() {
			var nextReadIndex = 0;
			return new FlightIterator(function(arg) {
				if (void 0 !== arg) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
				if (nextReadIndex === buffer.length) {
					if (closed) return new ReactPromise("fulfilled", {
						done: !0,
						value: void 0
					}, null);
					buffer[nextReadIndex] = new ReactPromise("pending", null, null);
				}
				return buffer[nextReadIndex++];
			});
		}, $jscomp$compprop5);
		iterator = iterator ? $jscomp$compprop5[ASYNC_ITERATOR]() : $jscomp$compprop5;
		resolveStream(response, reference, iterator, {
			enqueueModel: function(value) {
				nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !1) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !1);
				nextWriteIndex++;
			},
			close: function(value) {
				if (!closed) for (closed = !0, nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !0) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !0), nextWriteIndex++; nextWriteIndex < buffer.length;) resolveIteratorResultChunk(response, buffer[nextWriteIndex++], "\"$undefined\"", !0);
			},
			error: function(error) {
				if (!closed) for (closed = !0, nextWriteIndex === buffer.length && (buffer[nextWriteIndex] = new ReactPromise("pending", null, null)); nextWriteIndex < buffer.length;) triggerErrorOnChunk(response, buffer[nextWriteIndex++], error);
			}
		});
		return iterator;
	}
	function parseModelString(response, obj, key, value, reference, arrayRoot) {
		if ("$" === value[0]) {
			switch (value[1]) {
				case "$": return null !== arrayRoot && bumpArrayCount(arrayRoot, value.length - 1, response), value.slice(1);
				case "@": return obj = parseInt(value.slice(2), 16), getChunk(response, obj);
				case "h": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, loadServerReference$1);
				case "T":
					if (void 0 === reference || void 0 === response._temporaryReferences) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
					return createTemporaryReference(response._temporaryReferences, reference);
				case "Q": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, createMap);
				case "W": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, createSet);
				case "K":
					key = value.slice(2);
					obj = response._prefix + "_";
					key = obj + key + "_";
					arrayRoot = new FormData();
					for (response = response._formData;;) {
						value = response.keys;
						null === value && (value = response.keys = Array.from(response.data.keys()), response.keyPointer = 0);
						value = value[response.keyPointer];
						if (void 0 === value) break;
						if (value.startsWith(key)) {
							reference = response.data.getAll(value);
							for (var referencedFormDataKey = value.slice(key.length), i = 0; i < reference.length; i++) arrayRoot.append(referencedFormDataKey, reference[i]);
							response.data.delete(value);
							response.keyPointer++;
						} else if (value.startsWith(obj)) break;
						else response.keyPointer++;
					}
					return arrayRoot;
				case "i": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, extractIterator);
				case "I": return Infinity;
				case "-": return "$-0" === value ? -0 : -Infinity;
				case "N": return NaN;
				case "u": return;
				case "D": return new Date(Date.parse(value.slice(2)));
				case "n":
					obj = value.slice(2);
					if (300 < obj.length) throw Error("BigInt is too large. Received " + obj.length + " digits but the limit is 300.");
					null !== arrayRoot && bumpArrayCount(arrayRoot, obj.length, response);
					return BigInt(obj);
				case "A": return parseTypedArray(response, value, ArrayBuffer, 1, obj, key, arrayRoot);
				case "O": return parseTypedArray(response, value, Int8Array, 1, obj, key, arrayRoot);
				case "o": return parseTypedArray(response, value, Uint8Array, 1, obj, key, arrayRoot);
				case "U": return parseTypedArray(response, value, Uint8ClampedArray, 1, obj, key, arrayRoot);
				case "S": return parseTypedArray(response, value, Int16Array, 2, obj, key, arrayRoot);
				case "s": return parseTypedArray(response, value, Uint16Array, 2, obj, key, arrayRoot);
				case "L": return parseTypedArray(response, value, Int32Array, 4, obj, key, arrayRoot);
				case "l": return parseTypedArray(response, value, Uint32Array, 4, obj, key, arrayRoot);
				case "G": return parseTypedArray(response, value, Float32Array, 4, obj, key, arrayRoot);
				case "g": return parseTypedArray(response, value, Float64Array, 8, obj, key, arrayRoot);
				case "M": return parseTypedArray(response, value, BigInt64Array, 8, obj, key, arrayRoot);
				case "m": return parseTypedArray(response, value, BigUint64Array, 8, obj, key, arrayRoot);
				case "V": return parseTypedArray(response, value, DataView, 1, obj, key, arrayRoot);
				case "B": return obj = parseInt(value.slice(2), 16), response._formData.data.get(response._prefix + obj);
				case "R": return parseReadableStream(response, value, void 0);
				case "r": return parseReadableStream(response, value, "bytes");
				case "X": return parseAsyncIterable(response, value, !1);
				case "x": return parseAsyncIterable(response, value, !0);
			}
			value = value.slice(1);
			return getOutlinedModel(response, value, obj, key, arrayRoot, createModel);
		}
		null !== arrayRoot && bumpArrayCount(arrayRoot, value.length, response);
		return value;
	}
	function createResponse(bundlerConfig, formFieldPrefix, temporaryReferences) {
		var backingFormData = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : new FormData(), arraySizeLimit = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1e6;
		return {
			_bundlerConfig: bundlerConfig,
			_prefix: formFieldPrefix,
			_formData: {
				data: backingFormData,
				keyPointer: -1,
				keys: null
			},
			_chunks: /* @__PURE__ */ new Map(),
			_closed: !1,
			_closedReason: null,
			_temporaryReferences: temporaryReferences,
			_rootArrayContexts: /* @__PURE__ */ new WeakMap(),
			_arraySizeLimit: arraySizeLimit
		};
	}
	function close(response) {
		reportGlobalError(response, Error("Connection closed."));
	}
	function loadServerReference(bundlerConfig, metaData) {
		var id = metaData.id;
		if ("string" !== typeof id) return null;
		var serverReference = resolveServerReference(bundlerConfig, id);
		bundlerConfig = preloadModule(serverReference);
		metaData = metaData.bound;
		return metaData instanceof Promise ? Promise.all([metaData, bundlerConfig]).then(function(_ref) {
			_ref = _ref[0];
			var fn = requireModule(serverReference);
			if (1e3 < _ref.length) throw Error("Server Function has too many bound arguments. Received " + _ref.length + " but the limit is 1000.");
			return fn.bind.apply(fn, [null].concat(_ref));
		}) : bundlerConfig ? Promise.resolve(bundlerConfig).then(function() {
			return requireModule(serverReference);
		}) : Promise.resolve(requireModule(serverReference));
	}
	function decodeBoundActionMetaData(body, serverManifest, formFieldPrefix, arraySizeLimit) {
		body = createResponse(serverManifest, formFieldPrefix, void 0, body, arraySizeLimit);
		close(body);
		body = getChunk(body, 0);
		body.then(function() {});
		if ("fulfilled" !== body.status) throw body.reason;
		return body.value;
	}
	exports.createClientModuleProxy = function(moduleId) {
		moduleId = registerClientReferenceImpl({}, moduleId, !1);
		return new Proxy(moduleId, proxyHandlers$1);
	};
	exports.createTemporaryReferenceSet = function() {
		return /* @__PURE__ */ new WeakMap();
	};
	exports.decodeAction = function(body, serverManifest) {
		var formData = new FormData(), action = null, seenActions = /* @__PURE__ */ new Set();
		body.forEach(function(value, key) {
			key.startsWith("$ACTION_") ? key.startsWith("$ACTION_REF_") ? seenActions.has(key) || (seenActions.add(key), value = "$ACTION_" + key.slice(12) + ":", value = decodeBoundActionMetaData(body, serverManifest, value), action = loadServerReference(serverManifest, value)) : key.startsWith("$ACTION_ID_") && !seenActions.has(key) && (seenActions.add(key), value = key.slice(11), action = loadServerReference(serverManifest, {
				id: value,
				bound: null
			})) : formData.append(key, value);
		});
		return null === action ? null : action.then(function(fn) {
			return fn.bind(null, formData);
		});
	};
	exports.decodeFormState = function(actionResult, body, serverManifest) {
		var keyPath = body.get("$ACTION_KEY");
		if ("string" !== typeof keyPath) return Promise.resolve(null);
		var metaData = null;
		body.forEach(function(value, key) {
			key.startsWith("$ACTION_REF_") && (value = "$ACTION_" + key.slice(12) + ":", metaData = decodeBoundActionMetaData(body, serverManifest, value));
		});
		if (null === metaData) return Promise.resolve(null);
		var referenceId = metaData.id;
		return Promise.resolve(metaData.bound).then(function(bound) {
			return null === bound ? null : [
				actionResult,
				keyPath,
				referenceId,
				bound.length - 1
			];
		});
	};
	exports.decodeReply = function(body, webpackMap, options) {
		if ("string" === typeof body) {
			var form = new FormData();
			form.append("0", body);
			body = form;
		}
		body = createResponse(webpackMap, "", options ? options.temporaryReferences : void 0, body, options ? options.arraySizeLimit : void 0);
		webpackMap = getChunk(body, 0);
		close(body);
		return webpackMap;
	};
	exports.decodeReplyFromAsyncIterable = function(iterable, webpackMap, options) {
		function progress(entry) {
			if (entry.done) close(response);
			else {
				entry = entry.value;
				var name = entry[0];
				entry = entry[1];
				if ("string" === typeof entry) {
					appendBackingEntry(response._formData, name, entry);
					var prefix = response._prefix;
					if (name.startsWith(prefix)) {
						var chunks = response._chunks;
						name = +name.slice(prefix.length);
						(chunks = chunks.get(name)) && resolveModelChunk(response, chunks, entry, name);
					}
				} else appendBackingEntry(response._formData, name, entry);
				iterator.next().then(progress, error);
			}
		}
		function error(reason) {
			reportGlobalError(response, reason);
			"function" === typeof iterator.throw && iterator.throw(reason).then(error, error);
		}
		var iterator = iterable[ASYNC_ITERATOR](), response = createResponse(webpackMap, "", options ? options.temporaryReferences : void 0, void 0, options ? options.arraySizeLimit : void 0);
		iterator.next().then(progress, error);
		return getChunk(response, 0);
	};
	exports.prerender = function(model, webpackMap, options) {
		return new Promise(function(resolve, reject) {
			var request = new RequestInstance(21, model, webpackMap, options ? options.onError : void 0, options ? options.onPostpone : void 0, function() {
				resolve({ prelude: new ReadableStream({
					type: "bytes",
					pull: function(controller) {
						startFlowing(request, controller);
					},
					cancel: function(reason) {
						request.destination = null;
						abort(request, reason);
					}
				}, { highWaterMark: 0 }) });
			}, reject, options ? options.identifierPrefix : void 0, options ? options.temporaryReferences : void 0);
			if (options && options.signal) {
				var signal = options.signal;
				if (signal.aborted) abort(request, signal.reason);
				else {
					var listener = function() {
						abort(request, signal.reason);
						signal.removeEventListener("abort", listener);
					};
					signal.addEventListener("abort", listener);
				}
			}
			startWork(request);
		});
	};
	exports.registerClientReference = function(proxyImplementation, id, exportName) {
		return registerClientReferenceImpl(proxyImplementation, id + "#" + exportName, !1);
	};
	exports.registerServerReference = function(reference, id, exportName) {
		return Object.defineProperties(reference, {
			$$typeof: { value: SERVER_REFERENCE_TAG },
			$$id: {
				value: null === exportName ? id : id + "#" + exportName,
				configurable: !0
			},
			$$bound: {
				value: null,
				configurable: !0
			},
			bind: {
				value: bind,
				configurable: !0
			},
			toString: serverReferenceToString
		});
	};
	exports.renderToReadableStream = function(model, webpackMap, options) {
		var request = new RequestInstance(20, model, webpackMap, options ? options.onError : void 0, options ? options.onPostpone : void 0, noop, noop, options ? options.identifierPrefix : void 0, options ? options.temporaryReferences : void 0);
		if (options && options.signal) {
			var signal = options.signal;
			if (signal.aborted) abort(request, signal.reason);
			else {
				var listener = function() {
					abort(request, signal.reason);
					signal.removeEventListener("abort", listener);
				};
				signal.addEventListener("abort", listener);
			}
		}
		return new ReadableStream({
			type: "bytes",
			start: function() {
				startWork(request);
			},
			pull: function(controller) {
				startFlowing(request, controller);
			},
			cancel: function(reason) {
				request.destination = null;
				abort(request, reason);
			}
		}, { highWaterMark: 0 });
	};
}));
var import_server_edge = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	var s = require_react_server_dom_webpack_server_edge_production();
	exports.renderToReadableStream = s.renderToReadableStream;
	exports.decodeReply = s.decodeReply;
	exports.decodeReplyFromAsyncIterable = s.decodeReplyFromAsyncIterable;
	exports.decodeAction = s.decodeAction;
	exports.decodeFormState = s.decodeFormState;
	exports.registerServerReference = s.registerServerReference;
	exports.registerClientReference = s.registerClientReference;
	exports.createClientModuleProxy = s.createClientModuleProxy;
	exports.createTemporaryReferenceSet = s.createTemporaryReferenceSet;
})))(), 1);
var init = false;
var requireModule;
function setRequireModule(options) {
	if (init) return;
	init = true;
	requireModule = (id) => {
		return options.load(removeReferenceCacheTag(id));
	};
	globalThis.__vite_rsc_server_require__ = memoize(async (id) => {
		if (id.startsWith("$$decode-client:")) {
			id = id.slice(SERVER_DECODE_CLIENT_PREFIX.length);
			id = removeReferenceCacheTag(id);
			const target = {};
			const getOrCreateClientReference = (name) => {
				return target[name] ??= import_server_edge.registerClientReference(() => {
					throw new Error(`Unexpectedly client reference export '${name}' is called on server`);
				}, id, name);
			};
			return new Proxy(target, { getOwnPropertyDescriptor(_target, name) {
				if (typeof name !== "string" || name === "then") return Reflect.getOwnPropertyDescriptor(target, name);
				getOrCreateClientReference(name);
				return Reflect.getOwnPropertyDescriptor(target, name);
			} });
		}
		return requireModule(id);
	});
	setInternalRequire();
}
async function loadServerAction(id) {
	const [file, name] = id.split("#");
	return (await requireModule(file))[name];
}
function createServerManifest() {
	const cacheTag = "";
	return new Proxy({}, { get(_target, $$id, _receiver) {
		tinyassert(typeof $$id === "string");
		let [id, name] = $$id.split("#");
		tinyassert(id);
		tinyassert(name);
		return {
			id: SERVER_REFERENCE_PREFIX + id + cacheTag,
			name,
			chunks: [],
			async: true
		};
	} });
}
function createClientManifest(options) {
	const cacheTag = "";
	return new Proxy({}, { get(_target, $$id, _receiver) {
		tinyassert(typeof $$id === "string");
		let [id, name] = $$id.split("#");
		tinyassert(id);
		tinyassert(name);
		options?.onClientReference?.({
			id,
			name
		});
		return {
			id: id + cacheTag,
			name,
			chunks: [],
			async: true
		};
	} });
}
/**
* @license React
* react-server-dom-webpack-client.edge.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_server_dom_webpack_client_edge_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ReactDOM = require_react_dom_react_server(), hasOwnProperty = Object.prototype.hasOwnProperty;
	function requireModule(metadata) {
		var moduleExports = __vite_rsc_require__(metadata[0]);
		if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
		else throw moduleExports.reason;
		if ("*" === metadata[2]) return moduleExports;
		if ("" === metadata[2]) return moduleExports.__esModule ? moduleExports.default : moduleExports;
		if (hasOwnProperty.call(moduleExports, metadata[2])) return moduleExports[metadata[2]];
	}
	ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_LAZY_TYPE = Symbol.for("react.lazy");
	Array.isArray;
	Function.prototype.bind;
	Array.prototype.slice;
	function ReactPromise(status, value, reason) {
		this.status = status;
		this.value = value;
		this.reason = reason;
	}
	ReactPromise.prototype = Object.create(Promise.prototype);
	ReactPromise.prototype.then = function(resolve, reject) {
		switch (this.status) {
			case "resolved_model":
				initializeModelChunk(this);
				break;
			case "resolved_module": initializeModuleChunk(this);
		}
		switch (this.status) {
			case "fulfilled":
				"function" === typeof resolve && resolve(this.value);
				break;
			case "pending":
			case "blocked":
				"function" === typeof resolve && (null === this.value && (this.value = []), this.value.push(resolve));
				"function" === typeof reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
				break;
			case "halted": break;
			default: "function" === typeof reject && reject(this.reason);
		}
	};
	function wakeChunk(listeners, value, chunk) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(value) : fulfillReference(listener, value, chunk);
		}
	}
	function rejectChunk(listeners, error) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(error) : rejectReference(listener, error);
		}
	}
	function resolveBlockedCycle(resolvedChunk, reference) {
		var referencedChunk = reference.handler.chunk;
		if (null === referencedChunk) return null;
		if (referencedChunk === resolvedChunk) return reference.handler;
		reference = referencedChunk.value;
		if (null !== reference) for (referencedChunk = 0; referencedChunk < reference.length; referencedChunk++) {
			var listener = reference[referencedChunk];
			if ("function" !== typeof listener && (listener = resolveBlockedCycle(resolvedChunk, listener), null !== listener)) return listener;
		}
		return null;
	}
	function triggerErrorOnChunk(response, chunk, error) {
		"pending" !== chunk.status && "blocked" !== chunk.status ? chunk.reason.error(error) : (response = chunk.reason, chunk.status = "rejected", chunk.reason = error, null !== response && rejectChunk(response, error));
	}
	var initializingHandler = null;
	function initializeModelChunk(chunk) {
		var prevHandler = initializingHandler;
		initializingHandler = null;
		var resolvedModel = chunk.value, response = chunk.reason;
		chunk.status = "blocked";
		chunk.value = null;
		chunk.reason = null;
		try {
			var value = JSON.parse(resolvedModel, response._fromJSON), resolveListeners = chunk.value;
			if (null !== resolveListeners) for (chunk.value = null, chunk.reason = null, resolvedModel = 0; resolvedModel < resolveListeners.length; resolvedModel++) {
				var listener = resolveListeners[resolvedModel];
				"function" === typeof listener ? listener(value) : fulfillReference(listener, value, chunk);
			}
			if (null !== initializingHandler) {
				if (initializingHandler.errored) throw initializingHandler.reason;
				if (0 < initializingHandler.deps) {
					initializingHandler.value = value;
					initializingHandler.chunk = chunk;
					return;
				}
			}
			chunk.status = "fulfilled";
			chunk.value = value;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		} finally {
			initializingHandler = prevHandler;
		}
	}
	function initializeModuleChunk(chunk) {
		try {
			var value = requireModule(chunk.value);
			chunk.status = "fulfilled";
			chunk.value = value;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		}
	}
	function fulfillReference(reference, value) {
		var response = reference.response, handler = reference.handler, parentObject = reference.parentObject, key = reference.key, map = reference.map, path = reference.path;
		try {
			for (var i = 1; i < path.length; i++) {
				for (; "object" === typeof value && null !== value && value.$$typeof === REACT_LAZY_TYPE;) {
					var referencedChunk = value._payload;
					if (referencedChunk === handler.chunk) value = handler.value;
					else {
						switch (referencedChunk.status) {
							case "resolved_model":
								initializeModelChunk(referencedChunk);
								break;
							case "resolved_module": initializeModuleChunk(referencedChunk);
						}
						switch (referencedChunk.status) {
							case "fulfilled":
								value = referencedChunk.value;
								continue;
							case "blocked":
								var cyclicHandler = resolveBlockedCycle(referencedChunk, reference);
								if (null !== cyclicHandler) {
									value = cyclicHandler.value;
									continue;
								}
							case "pending":
								path.splice(0, i - 1);
								null === referencedChunk.value ? referencedChunk.value = [reference] : referencedChunk.value.push(reference);
								null === referencedChunk.reason ? referencedChunk.reason = [reference] : referencedChunk.reason.push(reference);
								return;
							case "halted": return;
							default:
								rejectReference(reference, referencedChunk.reason);
								return;
						}
					}
				}
				var name = path[i];
				if ("object" === typeof value && null !== value && hasOwnProperty.call(value, name)) value = value[name];
				else throw Error("Invalid reference.");
			}
			for (; "object" === typeof value && null !== value && value.$$typeof === REACT_LAZY_TYPE;) {
				var referencedChunk$44 = value._payload;
				if (referencedChunk$44 === handler.chunk) value = handler.value;
				else {
					switch (referencedChunk$44.status) {
						case "resolved_model":
							initializeModelChunk(referencedChunk$44);
							break;
						case "resolved_module": initializeModuleChunk(referencedChunk$44);
					}
					switch (referencedChunk$44.status) {
						case "fulfilled":
							value = referencedChunk$44.value;
							continue;
					}
					break;
				}
			}
			var mappedValue = map(response, value, parentObject, key);
			"__proto__" !== key && (parentObject[key] = mappedValue);
			"" === key && null === handler.value && (handler.value = mappedValue);
			if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) {
				var element = handler.value;
				switch (key) {
					case "3": element.props = mappedValue;
				}
			}
		} catch (error) {
			rejectReference(reference, error);
			return;
		}
		handler.deps--;
		0 === handler.deps && (reference = handler.chunk, null !== reference && "blocked" === reference.status && (value = reference.value, reference.status = "fulfilled", reference.value = handler.value, reference.reason = handler.reason, null !== value && wakeChunk(value, handler.value, reference)));
	}
	function rejectReference(reference, error) {
		var handler = reference.handler;
		reference = reference.response;
		handler.errored || (handler.errored = !0, handler.value = null, handler.reason = error, handler = handler.chunk, null !== handler && "blocked" === handler.status && triggerErrorOnChunk(reference, handler, error));
	}
}));
(/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_server_dom_webpack_client_edge_production();
})))();
function renderToReadableStream$2(data, options, extraOptions) {
	return import_server_edge.renderToReadableStream(data, createClientManifest({ onClientReference: extraOptions?.onClientReference }), options);
}
function registerClientReference(proxy, id, name) {
	return import_server_edge.registerClientReference(proxy, id, name);
}
var decodeReply = (body, options) => import_server_edge.decodeReply(body, createServerManifest(), options);
function decodeAction(body) {
	return import_server_edge.decodeAction(body, createServerManifest());
}
function decodeFormState(actionResult, body) {
	return import_server_edge.decodeFormState(actionResult, body, createServerManifest());
}
var createTemporaryReferenceSet = import_server_edge.createTemporaryReferenceSet;
var server_references_default = {};
initialize();
function initialize() {
	setRequireModule({ load: async (id) => {
		{
			const import_ = server_references_default[id];
			if (!import_) throw new Error(`server reference not found '${id}'`);
			return import_();
		}
	} });
}
function renderToReadableStream$1(data, options, extraOptions) {
	return renderToReadableStream$2(data, options, { onClientReference(metadata) {
		const deps = __vite_rsc_assets_manifest_default.clientReferenceDeps[metadata.id] ?? {
			js: [],
			css: []
		};
		extraOptions?.onClientReference?.({
			id: metadata.id,
			name: metadata.name,
			deps
		});
	} });
}
var REACT_FLIGHT_STYLESHEET_PRELOAD_HINT = /(\d*:HL\[.*?),"stylesheet"(\]|,)/g;
/**
* React Flight emits HL hints with "stylesheet" for CSS preloads, but the
* HTML spec requires "style" for <link rel="preload">. Rewrite each complete
* Flight line so SSR embeds, navigation, and server actions see valid hints.
*/
function normalizeReactFlightHintLine(line) {
	return line.replace(REACT_FLIGHT_STYLESHEET_PRELOAD_HINT, "$1,\"style\"$2");
}
function normalizeReactFlightPreloadHints(stream) {
	const decoder = new TextDecoder();
	const encoder = new TextEncoder();
	let carry = "";
	return stream.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			const text = carry + decoder.decode(chunk, { stream: true });
			const lastNewline = text.lastIndexOf("\n");
			if (lastNewline === -1) {
				carry = text;
				return;
			}
			carry = text.slice(lastNewline + 1);
			controller.enqueue(encoder.encode(normalizeReactFlightHintLine(text.slice(0, lastNewline + 1))));
		},
		flush(controller) {
			const text = carry + decoder.decode();
			if (text) controller.enqueue(encoder.encode(normalizeReactFlightHintLine(text)));
		}
	}));
}
function createRscRenderer(render) {
	return (model, options) => normalizeReactFlightPreloadHints(render(model, options));
}
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server(), 1);
var ReadonlyURLSearchParamsError = class extends Error {
	constructor() {
		super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
	}
};
/**
* Read-only URLSearchParams wrapper matching Next.js runtime behavior.
* Mutation methods remain present for instanceof/API compatibility but throw.
*/
var ReadonlyURLSearchParams = class extends URLSearchParams {
	append(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	delete(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	set(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	sort() {
		throw new ReadonlyURLSearchParamsError();
	}
};
/**
* Shared basePath helpers.
*
* Next.js only treats a pathname as being under basePath when it is an exact
* match ("/app") or starts with the basePath followed by a path separator
* ("/app/..."). Prefix-only matches like "/application" must be left intact.
*/
/**
* Check whether a pathname is inside the configured basePath.
*/
function hasBasePath(pathname, basePath) {
	if (!basePath) return false;
	return pathname === basePath || pathname.startsWith(basePath + "/");
}
/**
* Strip the basePath prefix from a pathname when it matches on a segment
* boundary. Returns the original pathname when it is outside the basePath.
*/
function stripBasePath(pathname, basePath) {
	if (!hasBasePath(pathname, basePath)) return pathname;
	return pathname.slice(basePath.length) || "/";
}
/**
* Remove trailing slashes from a pathname while preserving the root "/".
* Collapses any number of trailing slashes ("/a//" → "/a"). Used by the
* trailing-slash redirect path and route pattern normalization.
*/
function removeTrailingSlash(pathname) {
	if (pathname === "/") return "/";
	let end = pathname.length;
	while (end > 0 && pathname.charCodeAt(end - 1) === 47) end--;
	return end === 0 ? "/" : pathname.slice(0, end);
}
/**
* Internal HTTP header name constants used throughout vinext.
*
* Centralizes all custom header names so they are defined once and referenced
* everywhere via imports. Keeping them in one module prevents typos, makes
* rename-refactors trivial, and lets grep find every consumer instantly.
*
* Standard HTTP headers (Content-Type, Cache-Control, etc.) are intentionally
* omitted — only vinext-internal and Next.js-protocol headers belong here.
*/
/** ISR / page cache state indicator: "HIT" | "MISS" | "STALE" | "STATIC". */
var VINEXT_CACHE_HEADER = "X-Vinext-Cache";
/** Static file signal — value is URL-encoded pathname. */
var VINEXT_STATIC_FILE_HEADER = "x-vinext-static-file";
/** Serialized middleware context (JSON) forwarded from dev server to RSC entry. */
var VINEXT_MW_CTX_HEADER = "x-vinext-mw-ctx";
/** Timing metrics: `handlerStart,compileMs,renderMs`. */
var VINEXT_TIMING_HEADER = "x-vinext-timing";
/** Build-time prerender authentication secret. */
var VINEXT_PRERENDER_SECRET_HEADER = "x-vinext-prerender-secret";
/** URL-encoded JSON route params carried on RSC responses. */
var VINEXT_PARAMS_HEADER = "X-Vinext-Params";
/** Deduplicated, sorted list of mounted layout slots for cache keying. */
var VINEXT_MOUNTED_SLOTS_HEADER = "X-Vinext-Mounted-Slots";
/** Route interception context for parallel/intercepting routes. */
var VINEXT_INTERCEPTION_CONTEXT_HEADER = "X-Vinext-Interception-Context";
/** RSC render mode (e.g. "navigation", "prefetch"). */
var VINEXT_RSC_RENDER_MODE_HEADER = "X-Vinext-Rsc-Render-Mode";
/** Next.js action-not-found indicator (value "1"). */
var NEXTJS_ACTION_NOT_FOUND_HEADER = "x-nextjs-action-not-found";
/** Indicates revalidation occurred — value is JSON kind (1 = path/tag, 2 = dynamic-only). */
var ACTION_REVALIDATED_HEADER = "x-action-revalidated";
/** Redirect URL from a Server Action. */
var ACTION_REDIRECT_HEADER = "x-action-redirect";
/** Redirect type from a Server Action ("push" | "replace"). */
var ACTION_REDIRECT_TYPE_HEADER = "x-action-redirect-type";
/** HTTP status for a Server Action redirect (e.g. "308"). */
var ACTION_REDIRECT_STATUS_HEADER = "x-action-redirect-status";
/** Prefix for forwarded request headers (e.g. `x-middleware-request-cookie`). */
var MIDDLEWARE_REQUEST_HEADER_PREFIX = "x-middleware-request-";
/** Comma-separated list of header names that middleware wants to override. */
var MIDDLEWARE_OVERRIDE_HEADERS = "x-middleware-override-headers";
/** Carries cookies set by middleware for same-render reads. */
var MIDDLEWARE_SET_COOKIE_HEADER = "x-middleware-set-cookie";
/** Signal from `NextResponse.next()` — value "1" means "continue to next handler". */
var MIDDLEWARE_NEXT_HEADER = "x-middleware-next";
/** Rewrite destination URL set by `NextResponse.rewrite()`. */
var MIDDLEWARE_REWRITE_HEADER = "x-middleware-rewrite";
/** Redirect URL set by middleware. */
var MIDDLEWARE_REDIRECT_HEADER = "x-middleware-redirect";
/** Skip-middleware signal. */
var MIDDLEWARE_SKIP_HEADER = "x-middleware-skip";
var NEXT_ROUTER_STATE_TREE_HEADER = "Next-Router-State-Tree";
var NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
var NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = "Next-Router-Segment-Prefetch";
var NEXT_URL_HEADER = "Next-Url";
/** Lowercase flight header variants used in middleware forwarding. */
var FLIGHT_HEADERS = [
	"rsc",
	"next-router-state-tree",
	"next-router-prefetch",
	"next-hmr-refresh",
	"next-router-segment-prefetch"
];
/**
* Headers that must be stripped from external requests before any handler
* processes them. An attacker could forge these to influence routing or
* impersonate internal data fetches.
*
* Ported from Next.js `INTERNAL_HEADERS`:
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/lib/server-ipc/utils.ts
*/
var INTERNAL_HEADERS = [
	MIDDLEWARE_REWRITE_HEADER,
	MIDDLEWARE_REDIRECT_HEADER,
	MIDDLEWARE_SET_COOKIE_HEADER,
	MIDDLEWARE_SKIP_HEADER,
	MIDDLEWARE_OVERRIDE_HEADERS,
	MIDDLEWARE_NEXT_HEADER,
	"x-now-route-matches",
	"x-matched-path",
	"x-nextjs-data",
	"x-next-resume-state-length"
];
/**
* Shared URL safety utilities for Link, Form, and navigation shims.
*
* Centralizes dangerous URI scheme detection so all components and
* navigation functions use the same validation logic.
*/
/**
* Detect dangerous URI schemes that should never be navigated to.
*
* Adapted from Next.js's javascript URL detector:
* packages/next/src/client/lib/javascript-url.ts
* https://github.com/vercel/next.js/blob/canary/packages/next/src/client/lib/javascript-url.ts
*
* URL parsing ignores leading C0 control characters / spaces, and treats
* embedded tab/newline characters in the scheme as insignificant. We mirror
* that behavior here so obfuscated values like `java\nscript:` and
* `\x00javascript:` are still blocked.
*
* Vinext intentionally extends this handling to `data:` and `vbscript:` too,
* since both are also dangerous navigation targets.
*/
var LEADING_IGNORED = "[\\u0000-\\u001F \\u200B\\uFEFF]*";
var SCHEME_IGNORED = "[\\r\\n\\t]*";
function buildDangerousSchemeRegex(scheme) {
	const chars = scheme.split("").join(SCHEME_IGNORED);
	return new RegExp(`^${LEADING_IGNORED}${chars}${SCHEME_IGNORED}:`, "i");
}
buildDangerousSchemeRegex("javascript"), buildDangerousSchemeRegex("data"), buildDangerousSchemeRegex("vbscript");
/**
* FNV-1a hash producing a 64-bit result (two 32-bit rounds with different seeds).
* Used for deterministic key generation where collisions must be rare.
*/
function fnv1a64(input) {
	let h1 = 2166136261;
	for (let i = 0; i < input.length; i++) {
		h1 ^= input.charCodeAt(i);
		h1 = h1 * 16777619 >>> 0;
	}
	let h2 = 84696351;
	for (let i = 0; i < input.length; i++) {
		h2 ^= input.charCodeAt(i);
		h2 = h2 * 16777619 >>> 0;
	}
	return h1.toString(36) + h2.toString(36);
}
function createArtifactCompatibilityEnvelope(input = {}) {
	return {
		schemaVersion: 1,
		graphVersion: input.graphVersion ?? null,
		deploymentVersion: input.deploymentVersion ?? null,
		appElementsSchemaVersion: 1,
		rscPayloadSchemaVersion: 1,
		rootBoundaryId: input.rootBoundaryId ?? null,
		renderEpoch: input.renderEpoch ?? null
	};
}
function createArtifactCompatibilityGraphVersion(input) {
	return `app-route-graph:${fnv1a64(JSON.stringify([input.routePattern, input.rootBoundaryId]))}`;
}
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isStringOrNull(value) {
	return typeof value === "string" || value === null;
}
function hasCurrentSchemaVersions(record) {
	return record.schemaVersion === 1 && record.appElementsSchemaVersion === 1 && record.rscPayloadSchemaVersion === 1;
}
function parseArtifactCompatibilityEnvelope(value) {
	if (!isRecord(value)) return null;
	if (!hasCurrentSchemaVersions(value)) return null;
	if (!isStringOrNull(value.graphVersion)) return null;
	if (!isStringOrNull(value.deploymentVersion)) return null;
	if (!isStringOrNull(value.rootBoundaryId)) return null;
	if (!isStringOrNull(value.renderEpoch)) return null;
	return {
		schemaVersion: 1,
		graphVersion: value.graphVersion,
		deploymentVersion: value.deploymentVersion,
		appElementsSchemaVersion: 1,
		rscPayloadSchemaVersion: 1,
		rootBoundaryId: value.rootBoundaryId,
		renderEpoch: value.renderEpoch
	};
}
var APP_INTERCEPTION_SEPARATOR = "\0";
var APP_ARTIFACT_COMPATIBILITY_KEY = "__artifactCompatibility";
var APP_INTERCEPTION_CONTEXT_KEY = "__interceptionContext";
var APP_LAYOUT_IDS_KEY = "__layoutIds";
var APP_LAYOUT_FLAGS_KEY = "__layoutFlags";
var APP_ROUTE_KEY = "__route";
var APP_ROOT_LAYOUT_KEY = "__rootLayout";
var APP_UNMATCHED_SLOT_WIRE_VALUE = "__VINEXT_UNMATCHED_SLOT__";
var UNMATCHED_SLOT = Symbol.for("vinext.unmatchedSlot");
function appendInterceptionContext(identity, interceptionContext) {
	return interceptionContext === null ? identity : `${identity}${APP_INTERCEPTION_SEPARATOR}${interceptionContext}`;
}
function createAppPayloadRouteId(routePath, interceptionContext) {
	return appendInterceptionContext(`route:${routePath}`, interceptionContext);
}
function createAppPayloadPageId(routePath, interceptionContext) {
	return appendInterceptionContext(`page:${routePath}`, interceptionContext);
}
function createAppPayloadLayoutId(treePath) {
	return `layout:${treePath}`;
}
function createAppPayloadTemplateId(treePath) {
	return `template:${treePath}`;
}
function createAppPayloadSlotId(slotName, treePath) {
	return `slot:${slotName}:${treePath}`;
}
function createAppPayloadCacheKey(rscUrl, interceptionContext) {
	return appendInterceptionContext(rscUrl, interceptionContext);
}
function parsePathWithInterception(input) {
	const separatorIndex = input.indexOf(APP_INTERCEPTION_SEPARATOR);
	const path = separatorIndex === -1 ? input : input.slice(0, separatorIndex);
	if (!path.startsWith("/")) return null;
	return {
		interceptionContext: separatorIndex === -1 ? null : input.slice(separatorIndex + 1),
		path
	};
}
/**
* AppElements tree paths are absolute route-tree paths on the wire.
* Bare segment names are not valid layout/template/slot tree identities.
*/
function parseTreePath(input) {
	return input.startsWith("/") ? input : null;
}
function parseAppElementsWireElementKey(key) {
	if (key.startsWith("route:")) {
		const parsed = parsePathWithInterception(key.slice(6));
		if (!parsed) return null;
		return {
			interceptionContext: parsed.interceptionContext,
			kind: "route",
			path: parsed.path
		};
	}
	if (key.startsWith("page:")) {
		const parsed = parsePathWithInterception(key.slice(5));
		if (!parsed) return null;
		return {
			interceptionContext: parsed.interceptionContext,
			kind: "page",
			path: parsed.path
		};
	}
	if (key.startsWith("layout:")) {
		const treePath = parseTreePath(key.slice(7));
		return treePath ? {
			kind: "layout",
			treePath
		} : null;
	}
	if (key.startsWith("template:")) {
		const treePath = parseTreePath(key.slice(9));
		return treePath ? {
			kind: "template",
			treePath
		} : null;
	}
	if (key.startsWith("slot:")) {
		const body = key.slice(5);
		const separatorIndex = body.indexOf(":");
		if (separatorIndex <= 0) return null;
		const name = body.slice(0, separatorIndex);
		const treePath = parseTreePath(body.slice(separatorIndex + 1));
		return treePath ? {
			kind: "slot",
			name,
			treePath
		} : null;
	}
	return null;
}
function isAppElementsWireSlotId(key) {
	if (!key.startsWith("slot:")) return false;
	const body = key.slice(5);
	const separatorIndex = body.indexOf(":");
	return separatorIndex > 0 && body.charCodeAt(separatorIndex + 1) === 47;
}
function createAppElementsWireMetadataEntries(input) {
	return {
		[APP_ROUTE_KEY]: input.routeId,
		[APP_INTERCEPTION_CONTEXT_KEY]: input.interceptionContext,
		[APP_LAYOUT_IDS_KEY]: [...input.layoutIds ?? []],
		[APP_ROOT_LAYOUT_KEY]: input.rootLayoutTreePath
	};
}
function normalizeAppElements(elements) {
	let needsNormalization = false;
	for (const [key, value] of Object.entries(elements)) if (isAppElementsWireSlotId(key) && value === "__VINEXT_UNMATCHED_SLOT__") {
		needsNormalization = true;
		break;
	}
	if (!needsNormalization) return elements;
	const normalized = {};
	for (const [key, value] of Object.entries(elements)) normalized[key] = isAppElementsWireSlotId(key) && value === "__VINEXT_UNMATCHED_SLOT__" ? UNMATCHED_SLOT : value;
	return normalized;
}
function isLayoutFlagsRecord(value) {
	if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
	for (const v of Object.values(value)) if (v !== "s" && v !== "d") return false;
	return true;
}
function parseLayoutFlags(value) {
	if (isLayoutFlagsRecord(value)) return value;
	return {};
}
function parseLayoutIds(value) {
	if (value === void 0) return [];
	if (!Array.isArray(value)) throw new Error("[vinext] Invalid __layoutIds in App Router payload: expected layout id string[]");
	const layoutIds = [];
	for (const entry of value) {
		if (typeof entry !== "string") throw new Error("[vinext] Invalid __layoutIds in App Router payload: expected layout id string[]");
		if (parseAppElementsWireElementKey(entry)?.kind !== "layout") throw new Error("[vinext] Invalid __layoutIds in App Router payload: expected layout ids");
		layoutIds.push(entry);
	}
	return layoutIds;
}
/**
* Type predicate for a plain (non-null, non-array) record of app payload values.
* Used to distinguish the App Router payload object from bare React elements at
* the render boundary. Narrows to `Readonly<Record<string, unknown>>` because
* the outgoing payload carries heterogeneous values (ReactNodes for the rendered
* tree, plus metadata like `__layoutFlags` which is a plain object). Delegates
* to React's canonical `isValidElement` so we don't depend on React's internal
* `$$typeof` marker scheme.
*/
function isAppElementsRecord(value) {
	if (typeof value !== "object" || value === null) return false;
	if (Array.isArray(value)) return false;
	if ((0, import_react_react_server.isValidElement)(value)) return false;
	return true;
}
function withLayoutFlags(elements, layoutFlags) {
	return {
		...elements,
		[APP_LAYOUT_FLAGS_KEY]: layoutFlags
	};
}
function buildOutgoingAppPayload(input) {
	if (!isAppElementsRecord(input.element)) return input.element;
	return {
		...input.element,
		[APP_LAYOUT_FLAGS_KEY]: input.layoutFlags,
		[APP_ARTIFACT_COMPATIBILITY_KEY]: input.artifactCompatibility ?? createArtifactCompatibilityEnvelope()
	};
}
function readArtifactCompatibilityMetadata(value) {
	if (value === void 0) return createArtifactCompatibilityEnvelope();
	return parseArtifactCompatibilityEnvelope(value) ?? createArtifactCompatibilityEnvelope();
}
function readAppElementsMetadata(elements) {
	const routeId = elements[APP_ROUTE_KEY];
	if (typeof routeId !== "string") throw new Error("[vinext] Missing __route string in App Router payload");
	const interceptionContext = elements[APP_INTERCEPTION_CONTEXT_KEY];
	if (interceptionContext !== void 0 && interceptionContext !== null && typeof interceptionContext !== "string") throw new Error("[vinext] Invalid __interceptionContext in App Router payload");
	const rootLayoutTreePath = elements[APP_ROOT_LAYOUT_KEY];
	if (rootLayoutTreePath === void 0) throw new Error("[vinext] Missing __rootLayout key in App Router payload");
	if (rootLayoutTreePath !== null && typeof rootLayoutTreePath !== "string") throw new Error("[vinext] Invalid __rootLayout in App Router payload: expected string or null");
	const layoutFlags = parseLayoutFlags(elements[APP_LAYOUT_FLAGS_KEY]);
	const layoutIds = parseLayoutIds(elements[APP_LAYOUT_IDS_KEY]);
	return {
		artifactCompatibility: readArtifactCompatibilityMetadata(elements[APP_ARTIFACT_COMPATIBILITY_KEY]),
		interceptionContext: interceptionContext ?? null,
		layoutIds,
		layoutFlags,
		routeId,
		rootLayoutTreePath
	};
}
var AppElementsWire = {
	keys: {
		artifactCompatibility: APP_ARTIFACT_COMPATIBILITY_KEY,
		interceptionContext: APP_INTERCEPTION_CONTEXT_KEY,
		layoutIds: APP_LAYOUT_IDS_KEY,
		layoutFlags: APP_LAYOUT_FLAGS_KEY,
		rootLayout: APP_ROOT_LAYOUT_KEY,
		route: APP_ROUTE_KEY
	},
	unmatchedSlotValue: APP_UNMATCHED_SLOT_WIRE_VALUE,
	createMetadataEntries: createAppElementsWireMetadataEntries,
	decode: normalizeAppElements,
	encodeCacheKey: createAppPayloadCacheKey,
	encodeLayoutId: createAppPayloadLayoutId,
	encodeOutgoingPayload: buildOutgoingAppPayload,
	encodePageId: createAppPayloadPageId,
	encodeRouteId: createAppPayloadRouteId,
	encodeSlotId: createAppPayloadSlotId,
	encodeTemplateId: createAppPayloadTemplateId,
	isSlotId: isAppElementsWireSlotId,
	parseElementKey: parseAppElementsWireElementKey,
	readMetadata: readAppElementsMetadata,
	withLayoutFlags
};
/**
* Normalize the `x-vinext-mounted-slots` header for request handling and cache keying.
*
* The browser sends mounted slot ids as a space-separated list in the order slots were
* rendered, which changes across navigations. This normalizes to a canonical form
* (sorted, deduplicated) so equivalent slot sets map to the same RSC cache entry.
*
* Consumed by:
*   - app-rsc-request-normalization (request lifecycle, reads incoming header)
*   - app-elements (outgoing x-vinext-mounted-slots construction)
*   - isr-cache (RSC cache key generation)
*/
function normalizeMountedSlotsHeader(raw) {
	if (!raw) return null;
	return Array.from(new Set(raw.split(/\s+/).filter(Boolean))).sort().join(" ") || null;
}
var APP_RSC_RENDER_MODE_NAVIGATION = "navigation";
var APP_RSC_RENDER_MODE_REFRESH_PRESERVE_UI = "refresh-preserve-ui";
var APP_RSC_RENDER_MODE_ACTION_RERENDER_PRESERVE_UI = "action-rerender-preserve-ui";
function shouldSuppressLoadingBoundaries(mode) {
	return mode === "refresh-preserve-ui" || mode === "action-rerender-preserve-ui";
}
function shouldUsePreserveUiCacheVariant(mode) {
	return shouldSuppressLoadingBoundaries(mode);
}
function parseAppRscRenderMode(value) {
	switch (value) {
		case APP_RSC_RENDER_MODE_REFRESH_PRESERVE_UI: return APP_RSC_RENDER_MODE_REFRESH_PRESERVE_UI;
		case APP_RSC_RENDER_MODE_ACTION_RERENDER_PRESERVE_UI: return APP_RSC_RENDER_MODE_ACTION_RERENDER_PRESERVE_UI;
		default: return APP_RSC_RENDER_MODE_NAVIGATION;
	}
}
/**
* RSC cache-busting hashes cover the headers that make a `.rsc` payload vary.
* Client-side variant headers must survive transit through CDNs and reverse
* proxies; stripping them changes the server hash and turns stale URLs into
* repeated canonicalization redirects.
*/
var VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM = "_rsc";
var VINEXT_RSC_VARY_HEADER = [
	"RSC",
	"Accept",
	NEXT_ROUTER_STATE_TREE_HEADER,
	NEXT_ROUTER_PREFETCH_HEADER,
	NEXT_ROUTER_SEGMENT_PREFETCH_HEADER,
	NEXT_URL_HEADER,
	VINEXT_INTERCEPTION_CONTEXT_HEADER,
	VINEXT_MOUNTED_SLOTS_HEADER,
	VINEXT_RSC_RENDER_MODE_HEADER
].join(", ");
var CACHE_BUSTING_DIGEST_BYTES = 12;
var textEncoder = new TextEncoder();
function encodeBase64Url(bytes) {
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
function normalizeHeaderValue(value) {
	return value ?? "0";
}
function normalizeRenderModeHeaderValue(value) {
	const renderMode = parseAppRscRenderMode(value);
	return renderMode === "navigation" ? null : renderMode;
}
function createCacheBustingInput(headers, options = {}) {
	const values = [
		headers.get(NEXT_ROUTER_PREFETCH_HEADER),
		headers.get(NEXT_ROUTER_SEGMENT_PREFETCH_HEADER),
		headers.get(NEXT_ROUTER_STATE_TREE_HEADER),
		headers.get(NEXT_URL_HEADER),
		headers.get(VINEXT_INTERCEPTION_CONTEXT_HEADER),
		headers.get(VINEXT_MOUNTED_SLOTS_HEADER),
		...options.includeRenderModeHeader === false ? [] : [normalizeRenderModeHeaderValue(headers.get(VINEXT_RSC_RENDER_MODE_HEADER))]
	];
	if (values.every((value) => value === null)) return null;
	return values.map(normalizeHeaderValue).join(",");
}
async function sha256CacheBustingHash(input) {
	const digest = await globalThis.crypto.subtle.digest("SHA-256", textEncoder.encode(input));
	return encodeBase64Url(new Uint8Array(digest).subarray(0, CACHE_BUSTING_DIGEST_BYTES));
}
function computeLegacyRscCacheBustingSearchParam(headers) {
	const input = createCacheBustingInput(headers);
	return input === null ? "" : fnv1a64(input);
}
async function computePreviousRscCacheBustingSearchParam(headers) {
	const input = createCacheBustingInput(headers, { includeRenderModeHeader: false });
	if (input === null) return null;
	return sha256CacheBustingHash(input);
}
function computePreviousLegacyRscCacheBustingSearchParam(headers) {
	const input = createCacheBustingInput(headers, { includeRenderModeHeader: false });
	return input === null ? null : fnv1a64(input);
}
function getSearchPairsWithoutRscCacheBusting(url) {
	return (url.search.startsWith("?") ? url.search.slice(1) : url.search).split("&").filter((pair) => pair.length > 0 && !isRscCacheBustingSearchPair(pair));
}
function isRscCacheBustingSearchPair(pair) {
	const separatorIndex = pair.indexOf("=");
	const rawKey = separatorIndex === -1 ? pair : pair.slice(0, separatorIndex);
	try {
		return decodeURIComponent(rawKey.replaceAll("+", " ")) === VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM;
	} catch {
		return rawKey === VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM;
	}
}
async function computeRscCacheBustingSearchParam(headers) {
	const input = createCacheBustingInput(headers);
	if (input === null) return "";
	return sha256CacheBustingHash(input);
}
function setRscCacheBustingSearchParam(url, hash) {
	const pairs = getSearchPairsWithoutRscCacheBusting(url);
	pairs.push(hash.length > 0 ? `${VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM}=${hash}` : VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM);
	url.search = `?${pairs.join("&")}`;
}
function stripRscCacheBustingSearchParam(url) {
	const pairs = getSearchPairsWithoutRscCacheBusting(url);
	url.search = pairs.length > 0 ? `?${pairs.join("&")}` : "";
}
/**
* Remove a trailing `.rsc` suffix from a pathname. Returns the pathname
* unchanged when the suffix is absent.
*/
function stripRscSuffix(pathname) {
	return pathname.endsWith(".rsc") ? pathname.slice(0, -4) : pathname;
}
function toRscRequestPath(href) {
	const hashIndex = href.indexOf("#");
	const beforeHash = hashIndex === -1 ? href : href.slice(0, hashIndex);
	const queryIndex = beforeHash.indexOf("?");
	const pathname = queryIndex === -1 ? beforeHash : beforeHash.slice(0, queryIndex);
	const query = queryIndex === -1 ? "" : beforeHash.slice(queryIndex);
	return `${pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname}.rsc${query}`;
}
async function createRscRequestUrl(href, headers) {
	const url = new URL(toRscRequestPath(href), "http://vinext.local");
	setRscCacheBustingSearchParam(url, await computeRscCacheBustingSearchParam(headers));
	return `${url.pathname}${url.search}`;
}
async function createRscRedirectLocation(location, request) {
	const requestUrl = new URL(request.url);
	const destinationUrl = new URL(location, requestUrl);
	if (destinationUrl.origin !== requestUrl.origin) return destinationUrl.toString();
	const rscPath = await createRscRequestUrl(`${destinationUrl.pathname}${destinationUrl.search}`, request.headers);
	return `${destinationUrl.origin}${rscPath}`;
}
async function resolveInvalidRscCacheBustingRequest(options) {
	if (!options.isRscRequest || options.request.method !== "GET" && options.request.method !== "HEAD") return null;
	const url = new URL(options.request.url);
	const actualHash = url.searchParams.get(VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM);
	const expectedHash = await computeRscCacheBustingSearchParam(options.request.headers);
	if (actualHash === null && expectedHash === "") return null;
	const acceptedHashes = new Set([expectedHash]);
	if (actualHash !== null && actualHash !== expectedHash) {
		acceptedHashes.add(computeLegacyRscCacheBustingSearchParam(options.request.headers));
		if (normalizeRenderModeHeaderValue(options.request.headers.get("X-Vinext-Rsc-Render-Mode")) === null) {
			const previousHash = await computePreviousRscCacheBustingSearchParam(options.request.headers);
			const previousLegacyHash = computePreviousLegacyRscCacheBustingSearchParam(options.request.headers);
			if (previousHash !== null) acceptedHashes.add(previousHash);
			if (previousLegacyHash !== null) acceptedHashes.add(previousLegacyHash);
		}
	}
	if (actualHash !== null && acceptedHashes.has(actualHash)) return null;
	setRscCacheBustingSearchParam(url, expectedHash);
	return new Response(null, {
		status: 307,
		headers: { Location: `${url.pathname}${url.search}` }
	});
}
var _SERVER_INSERTED_HTML_CTX_KEY = Symbol.for("vinext.serverInsertedHTMLContext");
function getServerInsertedHTMLContext() {
	if (typeof import_react_react_server.createContext !== "function") return null;
	const globalState = globalThis;
	if (!globalState[_SERVER_INSERTED_HTML_CTX_KEY]) globalState[_SERVER_INSERTED_HTML_CTX_KEY] = import_react_react_server.createContext(null);
	return globalState[_SERVER_INSERTED_HTML_CTX_KEY] ?? null;
}
getServerInsertedHTMLContext();
var GLOBAL_ACCESSORS_KEY = Symbol.for("vinext.navigation.globalAccessors");
var _GLOBAL_ACCESSORS_KEY = GLOBAL_ACCESSORS_KEY;
var _GLOBAL_HYDRATION_CONTEXT_KEY = Symbol.for("vinext.navigation.clientHydrationContext");
function _getGlobalAccessors() {
	return globalThis[_GLOBAL_ACCESSORS_KEY];
}
function _getClientHydrationContext() {
	const globalState = globalThis;
	if (Object.prototype.hasOwnProperty.call(globalState, _GLOBAL_HYDRATION_CONTEXT_KEY)) return globalState[_GLOBAL_HYDRATION_CONTEXT_KEY] ?? null;
}
function _setClientHydrationContext(ctx) {
	globalThis[_GLOBAL_HYDRATION_CONTEXT_KEY] = ctx;
}
var _serverContext = null;
var _getServerContext = () => {
	if (typeof window !== "undefined") {
		const hydrationContext = _getClientHydrationContext();
		return hydrationContext !== void 0 ? hydrationContext : _serverContext;
	}
	const g = _getGlobalAccessors();
	return g ? g.getServerContext() : _serverContext;
};
var _setServerContext = (ctx) => {
	if (typeof window !== "undefined") {
		_serverContext = ctx;
		_setClientHydrationContext(ctx);
		return;
	}
	const g = _getGlobalAccessors();
	if (g) g.setServerContext(ctx);
	else _serverContext = ctx;
};
/**
* Register ALS-backed state accessors. Called by navigation-state.ts on import.
* @internal
*/
function _registerStateAccessors(accessors) {
	_getServerContext = accessors.getServerContext;
	_setServerContext = accessors.setServerContext;
	accessors.getInsertedHTMLCallbacks;
	accessors.clearInsertedHTMLCallbacks;
}
/**
* Get the navigation context for the current SSR/RSC render.
* Reads from AsyncLocalStorage when available (concurrent-safe),
* otherwise falls back to module-level state.
*/
function getNavigationContext() {
	return _getServerContext();
}
/**
* Set the navigation context for the current SSR/RSC render.
* Called by the framework entry before rendering each request.
*/
function setNavigationContext(ctx) {
	_setServerContext(ctx);
}
var isServer = typeof window === "undefined";
var _CLIENT_NAV_STATE_KEY = Symbol.for("vinext.clientNavigationState");
function getClientNavigationState() {
	if (isServer) return null;
	const globalState = window;
	globalState[_CLIENT_NAV_STATE_KEY] ??= {
		listeners: /* @__PURE__ */ new Set(),
		cachedSearch: window.location.search,
		cachedReadonlySearchParams: new ReadonlyURLSearchParams(window.location.search),
		cachedPathname: stripBasePath(window.location.pathname, ""),
		clientParams: {},
		clientParamsJson: "{}",
		pendingClientParams: null,
		pendingClientParamsJson: null,
		pendingPathname: null,
		pendingPathnameNavId: null,
		originalPushState: window.history.pushState.bind(window.history),
		originalReplaceState: window.history.replaceState.bind(window.history),
		patchInstalled: false,
		hasPendingNavigationUpdate: false,
		suppressUrlNotifyCount: 0,
		navigationSnapshotActiveCount: 0
	};
	return globalState[_CLIENT_NAV_STATE_KEY];
}
function notifyNavigationListeners() {
	const state = getClientNavigationState();
	if (!state) return;
	for (const fn of state.listeners) fn();
}
function syncCommittedUrlStateFromLocation() {
	const state = getClientNavigationState();
	if (!state) return false;
	let changed = false;
	const pathname = stripBasePath(window.location.pathname, "");
	if (pathname !== state.cachedPathname) {
		state.cachedPathname = pathname;
		changed = true;
	}
	const search = window.location.search;
	if (search !== state.cachedSearch) {
		state.cachedSearch = search;
		state.cachedReadonlySearchParams = new ReadonlyURLSearchParams(search);
		changed = true;
	}
	return changed;
}
/**
* Commit pending client navigation state to committed snapshots.
*
* navId is optional: callers that don't own pendingPathname (for example,
* superseded pre-paint cleanup) may pass undefined to flush URL/params state
* without clearing pendingPathname owned by the active navigation. Such callers
* must opt in explicitly if they also own an activated render snapshot.
*/
function commitClientNavigationState(navId, options) {
	if (isServer) return;
	const state = getClientNavigationState();
	if (!state) return;
	if ((navId !== void 0 || options?.releaseSnapshot === true) && state.navigationSnapshotActiveCount > 0) state.navigationSnapshotActiveCount -= 1;
	const urlChanged = syncCommittedUrlStateFromLocation();
	if (state.pendingClientParams !== null && state.pendingClientParamsJson !== null) {
		state.clientParams = state.pendingClientParams;
		state.clientParamsJson = state.pendingClientParamsJson;
		state.pendingClientParams = null;
		state.pendingClientParamsJson = null;
	}
	if (state.pendingPathnameNavId === null || navId !== void 0 && state.pendingPathnameNavId === navId) {
		state.pendingPathname = null;
		state.pendingPathnameNavId = null;
	}
	const shouldNotify = urlChanged || state.hasPendingNavigationUpdate;
	state.hasPendingNavigationUpdate = false;
	if (shouldNotify) notifyNavigationListeners();
}
/**
* Restore scroll position from a history state object (used on popstate).
*
* When an RSC navigation is in flight (back/forward triggers both this
* handler and the browser entry's popstate handler which calls
* __VINEXT_RSC_NAVIGATE__), we must wait for the new content to render
* before scrolling. Otherwise the user sees old content flash at the
* restored scroll position.
*
* This handler fires before the browser entry's popstate handler (because
* navigation.ts is loaded before hydration completes), so we defer via a
* microtask to give the browser entry handler a chance to set
* __VINEXT_RSC_PENDING__. Promise.resolve() schedules a microtask
* that runs after all synchronous event listeners have completed.
*/
function restoreScrollPosition(state) {
	if (state && typeof state === "object" && "__vinext_scrollY" in state) {
		const { __vinext_scrollX: x, __vinext_scrollY: y } = state;
		Promise.resolve().then(() => {
			const pending = window.__VINEXT_RSC_PENDING__ ?? null;
			if (pending) pending.then(() => {
				requestAnimationFrame(() => {
					window.scrollTo(x, y);
				});
			});
			else requestAnimationFrame(() => {
				window.scrollTo(x, y);
			});
		});
	}
}
if (!isServer) {
	const state = getClientNavigationState();
	if (state && !state.patchInstalled) {
		state.patchInstalled = true;
		window.addEventListener("popstate", (event) => {
			if (typeof window.__VINEXT_RSC_NAVIGATE__ !== "function") {
				commitClientNavigationState();
				restoreScrollPosition(event.state);
			}
		});
		window.history.pushState = function patchedPushState(data, unused, url) {
			state.originalPushState.call(window.history, data, unused, url);
			if (state.suppressUrlNotifyCount === 0) commitClientNavigationState();
		};
		window.history.replaceState = function patchedReplaceState(data, unused, url) {
			state.originalReplaceState.call(window.history, data, unused, url);
			if (state.suppressUrlNotifyCount === 0) commitClientNavigationState();
		};
	}
}
/**
* Shared error helper for client-only hooks called in Server Components.
*
* Used by `.react-server.ts` shim variants to provide a clear, actionable
* error message when a developer forgets the "use client" directive.
*
* @see https://github.com/cloudflare/vinext/issues/834
*/
function buildClientHookErrorMessage(hookName) {
	return `${hookName} only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component`;
}
/**
* Shared helper for registering AsyncLocalStorage instances on `globalThis`
* via `Symbol.for(...)` so that they survive multiple module instances.
*
* Why this helper exists
* ----------------------
* Vite's multi-environment setup (RSC / SSR / client) and HMR can load a
* single source module under several different specifiers, producing more
* than one module instance at runtime. If each instance kept its own
* module-local `new AsyncLocalStorage()`, request-scoped state would silently
* fork across instances — `headers()` in one environment wouldn't see what
* `connection()` registered in another, concurrent requests would stomp each
* other, etc.
*
* The fix every shim was applying inline:
*
*   const _ALS_KEY = Symbol.for("vinext.foo.als");
*   const _g = globalThis as unknown as Record<PropertyKey, unknown>;
*   const _als = (_g[_ALS_KEY] ??=
*     new AsyncLocalStorage<T>()) as AsyncLocalStorage<T>;
*
* This helper packages that pattern.
*
* Cross-bundle singleton property — preserved
* -------------------------------------------
* - `Symbol.for(key)` consults the global symbol registry and returns the
*   same symbol regardless of which module instance calls it.
* - `globalThis[sym]` is a single slot shared by every module instance.
* - `??=` only assigns when the slot is empty, so the first caller wins and
*   every subsequent caller (in any module instance) reads the same ALS.
*
* The helper module itself never holds the ALS by reference — it always
* round-trips through `globalThis`. So even if this helper file is itself
* loaded under multiple module instances, every copy still hands back the
* one true ALS for a given key.
*/
var _g$8 = globalThis;
/**
* Get (or lazily create) the AsyncLocalStorage registered on `globalThis`
* under `Symbol.for(key)`. Multiple callers — including callers in different
* module instances — that pass the same `key` receive the same ALS instance.
*
* @param key - String key fed to `Symbol.for(...)`. By convention vinext
*   shims use a dotted namespace such as `"vinext.cache.als"`.
*/
function getOrCreateAls(key) {
	const sym = Symbol.for(key);
	return _g$8[sym] ??= new AsyncLocalStorage$1();
}
var _REQUEST_CONTEXT_ALS_KEY = Symbol.for("vinext.requestContext.als");
var _g$7 = globalThis;
var _als$4 = getOrCreateAls("vinext.unifiedRequestContext.als");
function _getInheritedExecutionContext() {
	const unifiedStore = _als$4.getStore();
	if (unifiedStore) return unifiedStore.executionContext;
	return _g$7[_REQUEST_CONTEXT_ALS_KEY]?.getStore() ?? null;
}
/**
* Create a fresh `UnifiedRequestContext` with defaults for all fields.
* Pass partial overrides for the fields you need to pre-populate.
*/
function createRequestContext(opts) {
	return {
		headersContext: null,
		actionRevalidationKind: 0,
		dynamicUsageDetected: false,
		invalidDynamicUsageError: null,
		pendingSetCookies: [],
		draftModeCookieHeader: null,
		phase: "render",
		i18nContext: null,
		serverContext: null,
		serverInsertedHTMLCallbacks: [],
		requestScopedCacheLife: null,
		unstableCacheRevalidation: "foreground",
		_privateCache: null,
		currentRequestTags: [],
		currentFetchSoftTags: [],
		currentFetchCacheMode: null,
		isFetchDedupeActive: false,
		currentFetchDedupeEntries: /* @__PURE__ */ new Map(),
		executionContext: _getInheritedExecutionContext(),
		requestCache: /* @__PURE__ */ new WeakMap(),
		ssrContext: null,
		ssrHeadChildren: [],
		rootParams: null,
		...opts
	};
}
function runWithRequestContext(ctx, fn) {
	return _als$4.run(ctx, fn);
}
function runWithUnifiedStateMutation(mutate, fn) {
	const parentCtx = _als$4.getStore();
	if (!parentCtx) return fn();
	const childCtx = { ...parentCtx };
	mutate(childCtx);
	return _als$4.run(childCtx, fn);
}
/**
* Get the current unified request context.
* Returns the ALS store when inside a `runWithRequestContext()` scope,
* or a fresh detached context otherwise. Unlike the legacy per-shim fallback
* singletons, this detached value is ephemeral — mutations do not persist
* across calls. This is intentional to prevent state leakage outside request
* scopes.
*
* Only direct callers observe this detached fallback. Shim `_getState()`
* helpers should continue to gate on `isInsideUnifiedScope()` and fall back
* to their standalone ALS/fallback singletons outside the unified scope.
* If called inside a standalone `runWithExecutionContext()` scope, the
* detached context still reflects that inherited `executionContext`.
*/
function getRequestContext() {
	return _als$4.getStore() ?? createRequestContext();
}
/**
* Check whether the current execution is inside a `runWithRequestContext()` scope.
* Shim modules use this to decide whether to read from the unified store
* or fall back to their own standalone ALS.
*/
function isInsideUnifiedScope() {
	return _als$4.getStore() != null;
}
var CREDENTIAL_REQUEST_HEADERS = ["authorization", "cookie"];
function getMiddlewareHeaderValue(source, key) {
	if (source instanceof Headers) return source.get(key);
	const value = source[key];
	if (value === void 0) return null;
	return Array.isArray(value) ? value[0] ?? null : value;
}
function getOverrideHeaderNames(source) {
	const rawValue = getMiddlewareHeaderValue(source, MIDDLEWARE_OVERRIDE_HEADERS);
	if (rawValue === null) return null;
	return rawValue.split(",").map((key) => key.trim()).filter(Boolean);
}
function getForwardedRequestHeaders(source) {
	const forwardedHeaders = /* @__PURE__ */ new Map();
	if (source instanceof Headers) {
		for (const [key, value] of source.entries()) if (key.startsWith("x-middleware-request-")) forwardedHeaders.set(key.slice(MIDDLEWARE_REQUEST_HEADER_PREFIX.length), value);
		return forwardedHeaders;
	}
	for (const [key, value] of Object.entries(source)) {
		if (!key.startsWith("x-middleware-request-")) continue;
		const normalizedValue = Array.isArray(value) ? value[0] ?? "" : value;
		forwardedHeaders.set(key.slice(MIDDLEWARE_REQUEST_HEADER_PREFIX.length), normalizedValue);
	}
	return forwardedHeaders;
}
function cloneHeaders(source) {
	const cloned = new Headers();
	for (const [key, value] of source.entries()) cloned.append(key, value);
	return cloned;
}
function buildRequestHeadersFromMiddlewareResponse(baseHeaders, middlewareHeaders, options = {}) {
	const overrideHeaderNames = getOverrideHeaderNames(middlewareHeaders);
	const forwardedHeaders = getForwardedRequestHeaders(middlewareHeaders);
	if (overrideHeaderNames === null && forwardedHeaders.size === 0) return null;
	const nextHeaders = overrideHeaderNames === null ? cloneHeaders(baseHeaders) : new Headers();
	if (overrideHeaderNames === null) {
		for (const [key, value] of forwardedHeaders) nextHeaders.set(key, value);
		return nextHeaders;
	}
	if (options.preserveCredentialHeaders) {
		const overrideHeaderNameSet = new Set(overrideHeaderNames);
		for (const key of CREDENTIAL_REQUEST_HEADERS) {
			if (overrideHeaderNameSet.has(key)) continue;
			const value = baseHeaders.get(key);
			if (value !== null) nextHeaders.set(key, value);
		}
	}
	for (const key of overrideHeaderNames) {
		const value = forwardedHeaders.get(key);
		if (value !== void 0) nextHeaders.set(key, value);
	}
	return nextHeaders;
}
function shouldKeepMiddlewareHeader(key) {
	return key === "x-middleware-override-headers" || key === "x-middleware-set-cookie" || key.startsWith("x-middleware-request-");
}
/**
* RFC 6265 §4.1.1: cookie-name is a token (RFC 2616 §2.2).
* Allowed: any visible ASCII (0x21-0x7E) except separators: ()<>@,;:\"/[]?={}
*/
var VALID_COOKIE_NAME_RE = /^[\x21\x23-\x27\x2A\x2B\x2D\x2E\x30-\x39\x41-\x5A\x5E-\x7A\x7C\x7E]+$/;
function validateCookieName(name) {
	if (!name || !VALID_COOKIE_NAME_RE.test(name)) throw new Error(`Invalid cookie name: ${JSON.stringify(name)}`);
}
/**
* Port of the current Next.js/@edge-runtime request cookie parser semantics.
*
* Important details:
* - split on a semicolon-plus-optional-spaces pattern
* - preserve whitespace around names/values otherwise
* - bare tokens become "true"
* - malformed percent-encoded values are skipped
* - duplicate names collapse to the last value via Map.set()
*/
function parseCookieHeader(cookieHeader) {
	const cookies = /* @__PURE__ */ new Map();
	for (const pair of cookieHeader.split(/; */)) {
		if (!pair) continue;
		const splitAt = pair.indexOf("=");
		if (splitAt === -1) {
			cookies.set(pair, "true");
			continue;
		}
		const key = pair.slice(0, splitAt);
		const value = pair.slice(splitAt + 1);
		try {
			cookies.set(key, decodeURIComponent(value));
		} catch {}
	}
	return cookies;
}
var _FALLBACK_KEY$4 = Symbol.for("vinext.nextHeadersShim.fallback");
var _g$6 = globalThis;
var _als$3 = getOrCreateAls("vinext.nextHeadersShim.als");
var _fallbackState$3 = _g$6[_FALLBACK_KEY$4] ??= {
	headersContext: null,
	dynamicUsageDetected: false,
	invalidDynamicUsageError: null,
	pendingSetCookies: [],
	draftModeCookieHeader: null,
	phase: "render"
};
(/* @__PURE__ */ new Date(0)).toUTCString();
function splitMiddlewareSetCookieHeader(value) {
	const cookies = [];
	let start = 0;
	let inExpires = false;
	let expiresCommaSeen = false;
	for (let i = 0; i < value.length; i++) {
		if (value.slice(i, i + 8).toLowerCase() === "expires=") {
			inExpires = true;
			expiresCommaSeen = false;
			i += 7;
			continue;
		}
		const ch = value[i];
		if (inExpires && ch === ";") {
			inExpires = false;
			expiresCommaSeen = false;
			continue;
		}
		if (ch !== ",") continue;
		if (inExpires && !expiresCommaSeen) {
			expiresCommaSeen = true;
			continue;
		}
		const cookie = value.slice(start, i).trim();
		if (cookie) cookies.push(cookie);
		start = i + 1;
		inExpires = false;
		expiresCommaSeen = false;
	}
	const cookie = value.slice(start).trim();
	if (cookie) cookies.push(cookie);
	return cookies;
}
function setCookieNameValue(setCookie) {
	const equalsIndex = setCookie.indexOf("=");
	if (equalsIndex <= 0) return null;
	const name = setCookie.slice(0, equalsIndex).trim();
	const valueEnd = setCookie.indexOf(";", equalsIndex + 1);
	const encodedValue = setCookie.slice(equalsIndex + 1, valueEnd === -1 ? void 0 : valueEnd);
	let value;
	try {
		value = decodeURIComponent(encodedValue);
	} catch {
		value = encodedValue;
	}
	return {
		name,
		value
	};
}
function rebuildCookiesFromHeader(ctx, cookieHeader) {
	ctx.cookies.clear();
	if (cookieHeader === null) return;
	const nextCookies = parseCookieHeader(cookieHeader);
	for (const [name, value] of nextCookies) ctx.cookies.set(name, value);
}
function mergeMiddlewareSetCookies(ctx, rawHeader) {
	if (rawHeader === null) return false;
	let merged = false;
	for (const setCookie of splitMiddlewareSetCookieHeader(rawHeader)) {
		const entry = setCookieNameValue(setCookie);
		if (!entry) continue;
		ctx.cookies.set(entry.name, entry.value);
		merged = true;
	}
	return merged;
}
function _getState$2() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als$3.getStore() ?? _fallbackState$3;
}
/**
* Dynamic usage flag — set when a component calls connection(), cookies(),
* headers(), or noStore() during rendering. When true, ISR caching is
* bypassed and the response gets Cache-Control: no-store.
*/
/**
* Mark the current render as requiring dynamic (uncached) rendering.
* Called by connection(), cookies(), headers(), and noStore().
*/
function markDynamicUsage() {
	const state = _getState$2();
	if (state.headersContext?.forceStatic) return;
	state.dynamicUsageDetected = true;
}
/**
* Check, consume, and return any invalid dynamic usage error recorded during
* the render (e.g. cookies() called inside "use cache"). This error persists
* even if the throw was caught by user-code try/catch, so it can surface on
* client-side navigations where the static shell validation is skipped.
* Ported from Next.js: workStore.invalidDynamicUsageError in
* packages/next/src/server/app-render/app-render.tsx
* https://github.com/vercel/next.js/commit/f5e54c06726b571a042fce67417e40a29f6b8689
*/
function consumeInvalidDynamicUsageError() {
	const state = _getState$2();
	const err = state.invalidDynamicUsageError;
	state.invalidDynamicUsageError = null;
	return err;
}
/**
* Check and reset the dynamic usage flag.
* Called by the server after rendering to decide on caching.
*/
function consumeDynamicUsage() {
	const state = _getState$2();
	const used = state.dynamicUsageDetected;
	state.dynamicUsageDetected = false;
	return used;
}
function _setStatePhase(state, phase) {
	const previous = state.phase;
	state.phase = phase;
	return previous;
}
function setHeadersAccessPhase(phase) {
	return _setStatePhase(_getState$2(), phase);
}
/**
* Set the headers/cookies context for the current RSC render.
* Called by the framework's RSC entry before rendering each request.
*
* @deprecated Prefer runWithHeadersContext() which uses als.run() for
* proper per-request isolation. This function mutates the ALS store
* in-place and is only safe for cleanup (ctx=null) within an existing
* als.run() scope.
*/
/**
* Returns the current live HeadersContext from ALS (or the fallback).
* Used after applyMiddlewareRequestHeaders() to build a post-middleware
* request context for afterFiles/fallback rewrite has/missing evaluation.
*/
function getHeadersContext() {
	return _getState$2().headersContext;
}
function setHeadersContext(ctx) {
	const state = _getState$2();
	if (ctx !== null) {
		state.headersContext = ctx;
		state.dynamicUsageDetected = false;
		state.pendingSetCookies = [];
		state.draftModeCookieHeader = null;
		state.phase = "render";
	} else {
		state.headersContext = null;
		state.phase = "render";
	}
}
/**
* Apply middleware-forwarded request headers to the current headers context.
*
* When Next.js middleware calls `NextResponse.next()` or `NextResponse.rewrite()`
* with `{ request: { headers } }`, the modified headers are encoded on the
* middleware response. This function decodes that protocol and applies the
* resulting request header set to the live `HeadersContext`. When an override
* list is present, omitted headers are deleted as part of the rebuild.
*
* Cached `readonlyHeaders` and `readonlyCookies` snapshots on the
* HeadersContext must be invalidated whenever this function rebuilds the
* underlying `headers`/`cookies`. Otherwise a middleware that reads
* `headers()` (or `cookies()`) before returning a request-header override —
* for example `@clerk/nextjs`, whose `clerkClient()` reads `headers()` via
* `buildRequestLike()` during middleware execution — primes a sealed snapshot
* built from the *pre*-override request, and any subsequent `headers()` call
* from a Server Component would return that stale snapshot instead of the
* middleware-modified view.
*/
function applyMiddlewareRequestHeaders(middlewareResponseHeaders) {
	const state = _getState$2();
	if (!state.headersContext) return;
	const ctx = state.headersContext;
	const previousCookieHeader = ctx.headers.get("cookie");
	const middlewareSetCookieHeader = middlewareResponseHeaders.get(MIDDLEWARE_SET_COOKIE_HEADER);
	const nextHeaders = buildRequestHeadersFromMiddlewareResponse(ctx.headers, middlewareResponseHeaders);
	if (!nextHeaders && middlewareSetCookieHeader === null) return;
	if (nextHeaders) {
		ctx.headers = nextHeaders;
		ctx.readonlyHeaders = void 0;
		const nextCookieHeader = nextHeaders.get("cookie");
		if (previousCookieHeader !== nextCookieHeader) {
			rebuildCookiesFromHeader(ctx, nextCookieHeader);
			ctx.readonlyCookies = void 0;
			ctx.mutableCookies = void 0;
		}
	}
	if (mergeMiddlewareSetCookies(ctx, middlewareSetCookieHeader)) {
		ctx.readonlyCookies = void 0;
		ctx.mutableCookies = void 0;
	}
}
/** Methods on `Headers` that mutate state. Hoisted to module scope — static. */
var _HEADERS_MUTATING_METHODS = new Set([
	"set",
	"delete",
	"append"
]);
/**
* Create a HeadersContext from a standard Request object.
*
* Performance note: In Workerd (Cloudflare Workers), `new Headers(request.headers)`
* copies the entire header map across the V8/C++ boundary, which shows up as
* ~815 ms self-time in production profiles when requests carry many headers.
* We defer this copy with a lazy proxy:
*
* - Reads (`get`, `has`, `entries`, …) are forwarded directly to the original
*   immutable `request.headers` — zero copy cost on the hot path.
* - The first mutating call (`set`, `delete`, `append`) materialises
*   `new Headers(request.headers)` once, then applies the mutation to the copy.
*   All subsequent operations go to the copy.
*
* This means the ~815 ms copy only occurs when middleware actually rewrites
* request headers via `NextResponse.next({ request: { headers } })`, which is
* uncommon.  Pure read requests (the vast majority) pay zero copy cost.
*
* Cookie parsing is also deferred: the `cookie` header string is not split
* until the first call to `cookies()` or `draftMode()`.
*/
function headersContextFromRequest(request) {
	let _mutable = null;
	const headersProxy = new Proxy(request.headers, { get(target, prop) {
		const src = _mutable ?? target;
		if (typeof prop === "string" && _HEADERS_MUTATING_METHODS.has(prop)) return (...args) => {
			if (!_mutable) _mutable = new Headers(target);
			return _mutable[prop](...args);
		};
		const value = Reflect.get(src, prop, src);
		return typeof value === "function" ? value.bind(src) : value;
	} });
	let _cookies = null;
	function getCookies() {
		if (_cookies) return _cookies;
		_cookies = parseCookieHeader(headersProxy.get("cookie") || "");
		return _cookies;
	}
	return {
		headers: headersProxy,
		get cookies() {
			return getCookies();
		}
	};
}
/** Accumulated Set-Cookie headers from cookies().set() / .delete() calls */
/**
* Get and clear all pending Set-Cookie headers generated by cookies().set()/delete().
* Called by the framework after rendering to attach headers to the response.
*/
function getAndClearPendingCookies() {
	const state = _getState$2();
	const cookies = state.pendingSetCookies;
	state.pendingSetCookies = [];
	return cookies;
}
var DRAFT_MODE_COOKIE = "__prerender_bypass";
(/* @__PURE__ */ new Date(0)).toUTCString();
function getDraftSecret() {
	return "79120a72-7029-4d67-9d4c-0a2a76dad9b9";
}
/**
* Get any Set-Cookie header generated by draftMode().enable()/disable().
* Called by the framework after rendering to attach the header to the response.
*/
function getDraftModeCookieHeader() {
	const state = _getState$2();
	const header = state.draftModeCookieHeader;
	state.draftModeCookieHeader = null;
	return header;
}
function isDraftModeRequest(request) {
	const cookieHeader = request.headers.get("cookie");
	if (!cookieHeader) return false;
	return parseCookieHeader(cookieHeader).get(DRAFT_MODE_COOKIE) === getDraftSecret();
}
function hasParamProperty(obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
}
var wellKnownProperties = new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toString",
	"valueOf",
	"toLocaleString",
	"then",
	"catch",
	"finally",
	"status",
	"value",
	"error",
	"displayName",
	"_debugInfo",
	"toJSON",
	"$$typeof",
	"__esModule",
	"@@iterator"
]);
function isWellKnownProperty(prop) {
	return wellKnownProperties.has(prop);
}
function makeThenableParams(obj) {
	const plain = { ...obj };
	const promise = Promise.resolve(plain);
	return new Proxy(promise, {
		get(target, prop, receiver) {
			if (!isWellKnownProperty(prop) && hasParamProperty(plain, prop)) return Reflect.get(plain, prop);
			const value = Reflect.get(target, prop, receiver);
			return typeof value === "function" ? value.bind(target) : value;
		},
		getOwnPropertyDescriptor(target, prop) {
			if (!isWellKnownProperty(prop) && hasParamProperty(plain, prop)) return {
				configurable: true,
				enumerable: true,
				value: Reflect.get(plain, prop),
				writable: true
			};
			return Reflect.getOwnPropertyDescriptor(target, prop);
		},
		has(target, prop) {
			return Reflect.has(target, prop) || !isWellKnownProperty(prop) && hasParamProperty(plain, prop);
		},
		ownKeys() {
			return Reflect.ownKeys(plain).filter((prop) => !isWellKnownProperty(prop));
		}
	});
}
/**
* @license React
* react-jsx-runtime.react-server.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_react_server_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react_react_server(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	if (!React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
var import_jsx_runtime_react_server = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_react_server_production();
})))();
/**
* Resolve viewport config from a module. Handles both static `viewport` export
* and async `generateViewport()` function.
*/
async function resolveModuleViewport(mod, params) {
	if (typeof mod.generateViewport === "function") {
		const asyncParams = makeThenableParams(params);
		return await mod.generateViewport({ params: asyncParams });
	}
	if (mod.viewport && typeof mod.viewport === "object") return mod.viewport;
	return null;
}
/**
* Merge viewport configs from multiple sources (layouts + page).
* Later entries override earlier ones.
*/
var DEFAULT_VIEWPORT = {
	width: "device-width",
	initialScale: 1
};
function mergeViewport(viewportList) {
	const merged = { ...DEFAULT_VIEWPORT };
	for (const vp of viewportList) Object.assign(merged, vp);
	return merged;
}
/**
* React component that renders viewport meta tags into <head>.
*/
function ViewportHead({ viewport }) {
	const elements = [];
	let key = 0;
	const parts = [];
	if (viewport.width !== void 0) parts.push(`width=${viewport.width}`);
	if (viewport.height !== void 0) parts.push(`height=${viewport.height}`);
	if (viewport.initialScale !== void 0) parts.push(`initial-scale=${viewport.initialScale}`);
	if (viewport.minimumScale !== void 0) parts.push(`minimum-scale=${viewport.minimumScale}`);
	if (viewport.maximumScale !== void 0) parts.push(`maximum-scale=${viewport.maximumScale}`);
	if (viewport.userScalable !== void 0) parts.push(`user-scalable=${viewport.userScalable ? "yes" : "no"}`);
	if (parts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "viewport",
		content: parts.join(", ")
	}, key++));
	if (viewport.themeColor) {
		if (typeof viewport.themeColor === "string") elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "theme-color",
			content: viewport.themeColor
		}, key++));
		else if (Array.isArray(viewport.themeColor)) for (const entry of viewport.themeColor) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "theme-color",
			content: entry.color,
			...entry.media ? { media: entry.media } : {}
		}, key++));
	}
	if (viewport.colorScheme) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "color-scheme",
		content: viewport.colorScheme
	}, key++));
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(import_jsx_runtime_react_server.Fragment, { children: elements });
}
function isPlainObject$1(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) && !(value instanceof URL);
}
function isOtherMetadata(value) {
	if (!isPlainObject$1(value)) return false;
	return Object.values(value).every((item) => {
		if (typeof item === "string") return true;
		return Array.isArray(item) && item.every((nestedItem) => typeof nestedItem === "string");
	});
}
/**
* Extract a plain string title from a metadata title value.
*/
function resolveStringTitle(title) {
	if (typeof title === "string") return title;
	if (title && typeof title === "object") return title.absolute ?? title.default ?? void 0;
}
/**
* Post-process merged metadata to cross-fill openGraph and Twitter fields.
*
* Next.js runs this once after all layouts/pages and file-based metadata
* have been resolved. When openGraph exists, it auto-fills missing
* twitter:title/description/images from openGraph (falling back to root
* metadata title/description). Existing openGraph/twitter objects also inherit
* missing title/description from root metadata.
*
* Ported from Next.js:
* https://github.com/vercel/next.js/blob/canary/packages/next/src/lib/metadata/resolve-metadata.ts
*/
function postProcessMetadata(merged) {
	const result = { ...merged };
	const resolvedTitle = resolveStringTitle(result.title);
	if (result.openGraph) {
		const og = { ...result.openGraph };
		if (!og.title && resolvedTitle) og.title = resolvedTitle;
		if (!og.description && result.description) og.description = result.description;
		result.openGraph = og;
	}
	if (result.openGraph) {
		const autoFill = {};
		const existingTwitter = result.twitter;
		const hasTwTitle = existingTwitter ? Boolean(existingTwitter.title) : false;
		const hasTwDescription = existingTwitter ? Boolean(existingTwitter.description) : false;
		const hasTwImages = existingTwitter ? Object.prototype.hasOwnProperty.call(existingTwitter, "images") && Boolean(existingTwitter.images) : false;
		if (!hasTwTitle) {
			if (result.openGraph.title) autoFill.title = result.openGraph.title;
			else if (resolvedTitle) autoFill.title = resolvedTitle;
		}
		if (!hasTwDescription) autoFill.description = result.openGraph.description || result.description || void 0;
		if (!hasTwImages) autoFill.images = result.openGraph.images;
		if (Object.keys(autoFill).length > 0) if (existingTwitter) result.twitter = {
			...existingTwitter,
			...autoFill
		};
		else result.twitter = autoFill;
	}
	if (result.twitter) {
		const tw = { ...result.twitter };
		if (!tw.title && resolvedTitle) tw.title = resolvedTitle;
		if (!tw.description && result.description) tw.description = result.description;
		result.twitter = tw;
	}
	if (result.twitter) {
		const tw = { ...result.twitter };
		if (!tw.card) {
			const images = tw.images;
			tw.card = (Array.isArray(images) ? images.length > 0 : Boolean(images)) ? "summary_large_image" : "summary";
		}
		result.twitter = tw;
	}
	return result;
}
/**
* Merge metadata from multiple sources (layouts + page).
*
* The list is ordered [rootLayout, nestedLayout, ..., page].
* Title template from layouts applies to the page title but NOT to
* the segment that defines the template itself. `title.absolute`
* skips all templates. `title.default` is the fallback when no
* child provides a title.
*
* For top-level keys, later entries override earlier ones. `other` custom meta
* tags are the exception: Next.js merges those across segments.
*/
function mergeMetadataEntries(entries) {
	if (entries.length === 0) return {};
	const merged = {};
	let parentTemplate;
	for (const entry of entries) {
		const meta = entry.metadata;
		const isPage = Boolean(entry.isPage);
		const contributesTitle = entry.contributesTitle !== false;
		if (contributesTitle && !isPage && meta.title && typeof meta.title === "object" && meta.title.template) parentTemplate = meta.title.template;
		for (const key of Object.keys(meta)) {
			if (key === "title") continue;
			const incoming = meta[key];
			const existing = merged[key];
			if (key === "other" && isOtherMetadata(existing) && isOtherMetadata(incoming)) merged.other = {
				...existing,
				...incoming
			};
			else merged[key] = incoming;
		}
		if (contributesTitle && meta.title !== void 0) merged.title = meta.title;
	}
	const finalTitle = merged.title;
	if (finalTitle) {
		if (typeof finalTitle === "string") {
			if (parentTemplate) merged.title = parentTemplate.replace("%s", finalTitle);
		} else if (typeof finalTitle === "object") {
			if (finalTitle.absolute) merged.title = finalTitle.absolute;
			else if (finalTitle.default) merged.title = finalTitle.default;
			else if (finalTitle.template && !finalTitle.default && !finalTitle.absolute) merged.title = void 0;
		}
	}
	return merged;
}
/**
* Resolve metadata from a module. Handles both static `metadata` export
* and async `generateMetadata()` function.
*
* @param parent - A Promise that resolves to the accumulated (merged) metadata
*   from all ancestor segments. Passed as the second argument to
*   `generateMetadata()`, matching Next.js's eager-execution-with-serial-
*   resolution approach. If not provided, defaults to a promise that resolves
*   to an empty object (so `await parent` never throws).
*/
async function resolveModuleMetadata(mod, params = {}, searchParams, parent = Promise.resolve({})) {
	if (typeof mod.generateMetadata === "function") {
		const asyncParams = makeThenableParams(params);
		const props = searchParams === void 0 ? { params: asyncParams } : {
			params: asyncParams,
			searchParams: makeThenableParams(searchParams)
		};
		return await mod.generateMetadata(props, parent);
	}
	if (mod.metadata && typeof mod.metadata === "object") return mod.metadata;
	return null;
}
/**
* React component that renders metadata as HTML head elements.
* Used by the RSC entry to inject into the <head>.
*/
function isIconDescriptor(value) {
	if (typeof value !== "object" || value === null || value instanceof URL || Array.isArray(value)) return false;
	const urlValue = Reflect.get(value, "url");
	return typeof urlValue === "string" || urlValue instanceof URL;
}
function isIconsMap(value) {
	return typeof value === "object" && !(value instanceof URL) && !Array.isArray(value) && !isIconDescriptor(value);
}
function normalizeUrlDescriptor(value, createDescriptor) {
	if (typeof value === "string" || value instanceof URL) return createDescriptor(value);
	return value;
}
function normalizeUrlDescriptorEntries(value, createDescriptor) {
	if (!value) return [];
	if (Array.isArray(value)) return value.map((entry) => normalizeUrlDescriptor(entry, createDescriptor));
	return [normalizeUrlDescriptor(value, createDescriptor)];
}
function MetadataHead({ metadata }) {
	const elements = [];
	let key = 0;
	const base = metadata.metadataBase;
	function resolveUrl(url) {
		if (!url) return void 0;
		const s = typeof url === "string" ? url : url instanceof URL ? url.toString() : String(url);
		if (!base) return s;
		if (s.startsWith("http://") || s.startsWith("https://") || s.startsWith("//")) return s;
		try {
			return new URL(s, base).toString();
		} catch {
			return s;
		}
	}
	const title = typeof metadata.title === "string" ? metadata.title : typeof metadata.title === "object" ? metadata.title.absolute || metadata.title.default : void 0;
	if (title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("title", { children: title }, key++));
	if (metadata.description) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "description",
		content: metadata.description
	}, key++));
	if (metadata.generator) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "generator",
		content: metadata.generator
	}, key++));
	if (metadata.applicationName) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "application-name",
		content: metadata.applicationName
	}, key++));
	if (metadata.referrer) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "referrer",
		content: metadata.referrer
	}, key++));
	if (metadata.keywords) {
		const kw = Array.isArray(metadata.keywords) ? metadata.keywords.join(",") : metadata.keywords;
		elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "keywords",
			content: kw
		}, key++));
	}
	if (metadata.authors) {
		const authorList = Array.isArray(metadata.authors) ? metadata.authors : [metadata.authors];
		for (const author of authorList) {
			if (author.name) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				name: "author",
				content: author.name
			}, key++));
			if (author.url) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "author",
				href: author.url
			}, key++));
		}
	}
	if (metadata.creator) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "creator",
		content: metadata.creator
	}, key++));
	if (metadata.publisher) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "publisher",
		content: metadata.publisher
	}, key++));
	if (metadata.formatDetection) {
		const parts = [];
		if (metadata.formatDetection.telephone === false) parts.push("telephone=no");
		if (metadata.formatDetection.address === false) parts.push("address=no");
		if (metadata.formatDetection.email === false) parts.push("email=no");
		if (parts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "format-detection",
			content: parts.join(", ")
		}, key++));
	}
	if (metadata.category) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "category",
		content: metadata.category
	}, key++));
	if (metadata.robots) if (typeof metadata.robots === "string") elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "robots",
		content: metadata.robots
	}, key++));
	else {
		const { googleBot, ...robotsRest } = metadata.robots;
		const robotParts = [];
		for (const [k, v] of Object.entries(robotsRest)) if (v === true) robotParts.push(k);
		else if (v === false) robotParts.push(`no${k}`);
		else if (typeof v === "string" || typeof v === "number") robotParts.push(`${k}:${v}`);
		if (robotParts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "robots",
			content: robotParts.join(", ")
		}, key++));
		if (googleBot) if (typeof googleBot === "string") elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "googlebot",
			content: googleBot
		}, key++));
		else {
			const gbParts = [];
			for (const [k, v] of Object.entries(googleBot)) if (v === true) gbParts.push(k);
			else if (v === false) gbParts.push(`no${k}`);
			else if (typeof v === "string" || typeof v === "number") gbParts.push(`${k}:${v}`);
			if (gbParts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				name: "googlebot",
				content: gbParts.join(", ")
			}, key++));
		}
	}
	if (metadata.openGraph) {
		const og = metadata.openGraph;
		if (og.title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:title",
			content: og.title
		}, key++));
		if (og.description) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:description",
			content: og.description
		}, key++));
		if (og.url) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:url",
			content: resolveUrl(og.url)
		}, key++));
		if (og.siteName) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:site_name",
			content: og.siteName
		}, key++));
		if (og.type) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:type",
			content: og.type
		}, key++));
		if (og.locale) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:locale",
			content: og.locale
		}, key++));
		if (og.publishedTime) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "article:published_time",
			content: og.publishedTime
		}, key++));
		if (og.modifiedTime) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "article:modified_time",
			content: og.modifiedTime
		}, key++));
		if (og.authors) for (const author of og.authors) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "article:author",
			content: author
		}, key++));
		if (og.images) {
			const imgList = typeof og.images === "string" || og.images instanceof URL ? [{ url: og.images }] : Array.isArray(og.images) ? og.images : [og.images];
			for (const img of imgList) {
				const imgUrl = typeof img === "string" || img instanceof URL ? img : img.url;
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					property: "og:image",
					content: resolveUrl(imgUrl)
				}, key++));
				if (typeof img !== "string" && !(img instanceof URL)) {
					if (img.width) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:width",
						content: String(img.width)
					}, key++));
					if (img.height) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:height",
						content: String(img.height)
					}, key++));
					if (img.type) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:type",
						content: img.type
					}, key++));
					if (img.alt) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:alt",
						content: img.alt
					}, key++));
				}
			}
		}
		if (og.videos) for (const video of og.videos) {
			elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				property: "og:video",
				content: resolveUrl(video.url)
			}, key++));
			if (video.width) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				property: "og:video:width",
				content: String(video.width)
			}, key++));
			if (video.height) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				property: "og:video:height",
				content: String(video.height)
			}, key++));
		}
		if (og.audio) for (const audio of og.audio) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:audio",
			content: resolveUrl(audio.url)
		}, key++));
	}
	if (metadata.twitter) {
		const tw = metadata.twitter;
		if (tw.card) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:card",
			content: tw.card
		}, key++));
		if (tw.site) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:site",
			content: tw.site
		}, key++));
		if (tw.siteId) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:site:id",
			content: tw.siteId
		}, key++));
		if (tw.title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:title",
			content: tw.title
		}, key++));
		if (tw.description) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:description",
			content: tw.description
		}, key++));
		if (tw.creator) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:creator",
			content: tw.creator
		}, key++));
		if (tw.creatorId) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:creator:id",
			content: tw.creatorId
		}, key++));
		if (tw.images) {
			const imgList = typeof tw.images === "string" || tw.images instanceof URL ? [tw.images] : Array.isArray(tw.images) ? tw.images : [tw.images];
			for (const img of imgList) {
				const imgUrl = typeof img === "string" || img instanceof URL ? img : img.url;
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:image",
					content: resolveUrl(imgUrl)
				}, key++));
				if (typeof img !== "string" && !(img instanceof URL)) {
					if (img.type) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: "twitter:image:type",
						content: img.type
					}, key++));
					if (img.width) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: "twitter:image:width",
						content: String(img.width)
					}, key++));
					if (img.height) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: "twitter:image:height",
						content: String(img.height)
					}, key++));
					if (img.alt) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: "twitter:image:alt",
						content: img.alt
					}, key++));
				}
			}
		}
		if (tw.players) {
			const players = Array.isArray(tw.players) ? tw.players : [tw.players];
			for (const player of players) {
				const playerUrl = player.playerUrl.toString();
				const streamUrl = player.streamUrl.toString();
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player",
					content: resolveUrl(playerUrl)
				}, key++));
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player:stream",
					content: resolveUrl(streamUrl)
				}, key++));
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player:width",
					content: String(player.width)
				}, key++));
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player:height",
					content: String(player.height)
				}, key++));
			}
		}
		if (tw.app) {
			const { app } = tw;
			for (const platform of [
				"iphone",
				"ipad",
				"googleplay"
			]) {
				if (app.name) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: `twitter:app:name:${platform}`,
					content: app.name
				}, key++));
				if (app.id[platform] !== void 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: `twitter:app:id:${platform}`,
					content: String(app.id[platform])
				}, key++));
				if (app.url?.[platform] !== void 0) {
					const appUrl = app.url[platform].toString();
					elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: `twitter:app:url:${platform}`,
						content: resolveUrl(appUrl)
					}, key++));
				}
			}
		}
	}
	if (metadata.icons) {
		const iconEntries = isIconsMap(metadata.icons) ? normalizeUrlDescriptorEntries(metadata.icons.icon, (url) => ({ url })) : normalizeUrlDescriptorEntries(metadata.icons, (url) => ({ url }));
		if (isIconsMap(metadata.icons) && metadata.icons.shortcut) {
			const shortcuts = Array.isArray(metadata.icons.shortcut) ? metadata.icons.shortcut : [metadata.icons.shortcut];
			for (const s of shortcuts) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "shortcut icon",
				href: resolveUrl(s)
			}, key++));
		}
		if (iconEntries.length > 0) for (const i of iconEntries) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "icon",
			href: resolveUrl(i.url),
			...i.sizes ? { sizes: i.sizes } : {},
			...i.type ? { type: i.type } : {},
			...i.media ? { media: i.media } : {}
		}, key++));
		if (isIconsMap(metadata.icons) && metadata.icons.apple) for (const a of normalizeUrlDescriptorEntries(metadata.icons.apple, (url) => ({ url }))) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "apple-touch-icon",
			href: resolveUrl(a.url),
			...a.sizes ? { sizes: a.sizes } : {},
			...a.type ? { type: a.type } : {}
		}, key++));
		if (isIconsMap(metadata.icons) && metadata.icons.other) for (const o of metadata.icons.other) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: o.rel,
			href: resolveUrl(o.url),
			...o.sizes ? { sizes: o.sizes } : {}
		}, key++));
	}
	if (metadata.manifest) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
		rel: "manifest",
		href: resolveUrl(metadata.manifest)
	}, key++));
	if (metadata.alternates) {
		const alt = metadata.alternates;
		if (alt.canonical) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "canonical",
			href: resolveUrl(alt.canonical)
		}, key++));
		if (alt.languages) for (const [lang, href] of Object.entries(alt.languages)) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "alternate",
			hrefLang: lang,
			href: resolveUrl(href)
		}, key++));
		if (alt.media) for (const [media, href] of Object.entries(alt.media)) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "alternate",
			media,
			href: resolveUrl(href)
		}, key++));
		if (alt.types) for (const [type, href] of Object.entries(alt.types)) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "alternate",
			type,
			href: resolveUrl(href)
		}, key++));
	}
	if (metadata.verification) {
		const v = metadata.verification;
		if (v.google) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "google-site-verification",
			content: v.google
		}, key++));
		if (v.yahoo) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "y_key",
			content: v.yahoo
		}, key++));
		if (v.yandex) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "yandex-verification",
			content: v.yandex
		}, key++));
		if (v.other) for (const [name, content] of Object.entries(v.other)) {
			const values = Array.isArray(content) ? content : [content];
			for (const val of values) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				name,
				content: val
			}, key++));
		}
	}
	if (metadata.appleWebApp) {
		const awa = metadata.appleWebApp;
		if (awa.capable !== false) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "mobile-web-app-capable",
			content: "yes"
		}, key++));
		if (awa.title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "apple-mobile-web-app-title",
			content: awa.title
		}, key++));
		if (awa.statusBarStyle) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "apple-mobile-web-app-status-bar-style",
			content: awa.statusBarStyle
		}, key++));
		if (awa.startupImage) {
			const imgs = typeof awa.startupImage === "string" ? [{ url: awa.startupImage }] : awa.startupImage;
			for (const img of imgs) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "apple-touch-startup-image",
				href: resolveUrl(img.url),
				...img.media ? { media: img.media } : {}
			}, key++));
		}
	}
	if (metadata.itunes) {
		const { appId, appArgument } = metadata.itunes;
		let content = `app-id=${appId}`;
		if (appArgument) content += `, app-argument=${appArgument}`;
		elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "apple-itunes-app",
			content
		}, key++));
	}
	if (metadata.appLinks) {
		const al = metadata.appLinks;
		for (const platform of [
			"ios",
			"iphone",
			"ipad",
			"android",
			"windows_phone",
			"windows",
			"windows_universal",
			"web"
		]) {
			const entries = al[platform];
			if (!entries) continue;
			const list = Array.isArray(entries) ? entries : [entries];
			for (const entry of list) for (const [k, v] of Object.entries(entry)) {
				if (v === void 0 || v === null) continue;
				const str = String(v);
				const content = k === "url" ? resolveUrl(str) : str;
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					property: `al:${platform}:${k}`,
					content
				}, key++));
			}
		}
	}
	if (metadata.other) for (const [name, content] of Object.entries(metadata.other)) {
		const values = Array.isArray(content) ? content : [content];
		for (const val of values) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name,
			content: val
		}, key++));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(import_jsx_runtime_react_server.Fragment, { children: elements });
}
/**
* Request ExecutionContext — AsyncLocalStorage-backed accessor.
*
* Makes the Cloudflare Workers `ExecutionContext` (which provides
* `waitUntil`) available to any code on the call stack during a request
* without requiring it to be threaded through every function signature.
*
* Usage:
*
*   // In the worker entry, wrap the handler:
*   import { runWithExecutionContext } from "vinext/shims/request-context";
*   export default {
*     fetch(request, env, ctx) {
*       return runWithExecutionContext(ctx, () => handler.fetch(request, env, ctx));
*     }
*   };
*
*   // Anywhere downstream:
*   import { getRequestExecutionContext } from "vinext/shims/request-context";
*   const ctx = getRequestExecutionContext(); // null on Node.js dev
*   ctx?.waitUntil(somePromise);
*/
var _als$2 = getOrCreateAls("vinext.requestContext.als");
/**
* Get the `ExecutionContext` for the current request, or `null` when called
* outside a `runWithExecutionContext()` scope (e.g. on Node.js dev server).
*
* Use `ctx?.waitUntil(promise)` to schedule background work that must
* complete before the Worker isolate is torn down.
*/
function getRequestExecutionContext() {
	if (isInsideUnifiedScope()) return getRequestContext().executionContext;
	return _als$2.getStore() ?? null;
}
/**
* Cache for compiled regex patterns in matchConfigPattern.
*
* Redirect/rewrite patterns are static — they come from next.config.js and
* never change at runtime. Without caching, every request that hits the regex
* branch re-runs the full tokeniser walk + isSafeRegex + new RegExp() for
* every rule in the array. On apps with many locale-prefixed rules (which all
* contain `(` and therefore enter the regex branch) this dominated profiling
* at ~2.4 seconds of CPU self-time.
*
* Value is `null` when safeRegExp rejected the pattern (ReDoS risk), so we
* skip it on subsequent requests too without re-running the scanner.
*/
var _compiledPatternCache = /* @__PURE__ */ new Map();
/**
* Cache for compiled header source regexes in matchHeaders.
*
* Each NextHeader rule has a `source` that is run through escapeHeaderSource()
* then safeRegExp() to produce a RegExp. Both are pure functions of the source
* string and the result never changes. Without caching, every request
* re-runs the full escapeHeaderSource tokeniser + isSafeRegex scan + new RegExp()
* for every header rule.
*
* Value is `null` when safeRegExp rejected the pattern (ReDoS risk).
*/
var _compiledHeaderSourceCache = /* @__PURE__ */ new Map();
/**
* Cache for compiled has/missing condition value regexes in checkSingleCondition.
*
* Each has/missing condition may carry a `value` string that is passed directly
* to safeRegExp() for matching against header/cookie/query/host values. The
* condition objects are static (from next.config.js) so the compiled RegExp
* never changes. Without caching, safeRegExp() is called on every request for
* every condition on every rule.
*
* Value is `null` when safeRegExp rejected the pattern, or `false` when the
* value string was undefined (no regex needed — use exact string comparison).
*/
var _compiledConditionCache = /* @__PURE__ */ new Map();
/**
* Cache for destination substitution regexes in substituteDestinationParams.
*
* The regex depends only on the set of param keys captured from the matched
* source pattern. Caching by sorted key list avoids recompiling a new RegExp
* for repeated redirect/rewrite calls that use the same param shape.
*/
var _compiledDestinationParamCache = /* @__PURE__ */ new Map();
/**
* Generic helper for the regex compilation caches above.
*
* Each cache stores the compiled artifact (or `null` when safeRegExp rejected
* the pattern) the first time a key is seen, and reuses it forever. The
* `undefined` sentinel distinguishes "not yet seen" from "seen and rejected"
* so we never re-run isSafeRegex on the same input.
*
* Keep the security path intact: `compile()` is responsible for calling
* safeRegExp(); this helper only handles caching.
*/
function getCachedRegex(cache, key, compile) {
	let value = cache.get(key);
	if (value === void 0) {
		value = compile();
		cache.set(key, value);
	}
	return value;
}
/**
* Redirect index for O(1) locale-static rule lookup.
*
* Many Next.js apps generate 50-100 redirect rules of the form:
*   /:locale(en|es|fr|...)?/some-static-path  →  /some-destination
*
* The compiled regex for each is like:
*   ^/(en|es|fr|...)?/some-static-path$
*
* When no redirect matches (the common case for ordinary page loads),
* matchRedirect previously ran exec() on every one of those regexes —
* ~2ms per call, ~2992ms total self-time in profiles.
*
* The index splits rules into two buckets:
*
*   localeStatic — rules whose source is exactly /:paramName(alt1|alt2|...)?/suffix
*     where `suffix` is a static path with no further params or regex groups.
*     These are indexed in a Map<suffix, entry[]> for O(1) lookup after a
*     single fast strip of the optional locale prefix.
*
*   linear — all other rules. Matched with the original O(n) loop.
*
* The index is stored in a WeakMap keyed by the redirects array so it is
* computed once per config load and GC'd when the array is no longer live.
*
* ## Ordering invariant
*
* Redirect rules must be evaluated in their original order (first match wins).
* Each locale-static entry stores its `originalIndex` so that, when a
* locale-static fast-path match is found, any linear rules that appear earlier
* in the array are still checked first.
*/
/** Matches `/:param(alternation)?/static/suffix` — the locale-static pattern. */
var _LOCALE_STATIC_RE = /^\/:[\w-]+\(([^)]+)\)\?\/([a-zA-Z0-9_~.%@!$&'*+,;=:/-]+)$/;
var _redirectIndexCache = /* @__PURE__ */ new WeakMap();
/**
* Build (or retrieve from cache) the redirect index for a given redirects array.
*
* Called once per config load from matchRedirect. The WeakMap ensures the index
* is recomputed if the config is reloaded (new array reference) and GC'd when
* the array is collected.
*/
function _getRedirectIndex(redirects) {
	let index = _redirectIndexCache.get(redirects);
	if (index !== void 0) return index;
	const localeStatic = /* @__PURE__ */ new Map();
	const linear = [];
	for (let i = 0; i < redirects.length; i++) {
		const redirect = redirects[i];
		const m = _LOCALE_STATIC_RE.exec(redirect.source);
		if (m) {
			const paramName = redirect.source.slice(2, redirect.source.indexOf("("));
			const alternation = m[1];
			const suffix = "/" + m[2];
			const altRe = safeRegExp("^(?:" + alternation + ")$");
			if (!altRe) {
				linear.push([i, redirect]);
				continue;
			}
			const entry = {
				paramName,
				altRe,
				redirect,
				originalIndex: i
			};
			const bucket = localeStatic.get(suffix);
			if (bucket) bucket.push(entry);
			else localeStatic.set(suffix, [entry]);
		} else linear.push([i, redirect]);
	}
	index = {
		localeStatic,
		linear
	};
	_redirectIndexCache.set(redirects, index);
	return index;
}
/** Hop-by-hop headers that should not be forwarded through a proxy. */
var HOP_BY_HOP_HEADERS = new Set([
	"connection",
	"keep-alive",
	"proxy-authenticate",
	"proxy-authorization",
	"te",
	"trailers",
	"transfer-encoding",
	"upgrade"
]);
/**
* Request hop-by-hop headers to strip before proxying with fetch().
* Intentionally narrower than HOP_BY_HOP_HEADERS: external rewrite proxying
* still forwards proxy auth credentials, while response sanitization strips
* them before returning data to the client.
*/
var REQUEST_HOP_BY_HOP_HEADERS = new Set([
	"connection",
	"keep-alive",
	"te",
	"trailers",
	"transfer-encoding",
	"upgrade"
]);
function stripHopByHopRequestHeaders(headers) {
	const connectionTokens = (headers.get("connection") || "").split(",").map((value) => value.trim().toLowerCase()).filter(Boolean);
	for (const header of REQUEST_HOP_BY_HOP_HEADERS) headers.delete(header);
	for (const token of connectionTokens) headers.delete(token);
}
/**
* Detect regex patterns vulnerable to catastrophic backtracking (ReDoS).
*
* Uses a lightweight heuristic: scans the pattern string for nested quantifiers
* (a quantifier applied to a group that itself contains a quantifier). This
* catches the most common pathological patterns like `(a+)+`, `(.*)*`,
* `([^/]+)+`, `(a|a+)+` without needing a full regex parser.
*
* Returns true if the pattern appears safe, false if it's potentially dangerous.
*/
function isSafeRegex(pattern) {
	const quantifierAtDepth = [];
	let depth = 0;
	let i = 0;
	while (i < pattern.length) {
		const ch = pattern[i];
		if (ch === "\\") {
			i += 2;
			continue;
		}
		if (ch === "[") {
			i++;
			while (i < pattern.length && pattern[i] !== "]") {
				if (pattern[i] === "\\") i++;
				i++;
			}
			i++;
			continue;
		}
		if (ch === "(") {
			depth++;
			if (quantifierAtDepth.length <= depth) quantifierAtDepth.push(false);
			else quantifierAtDepth[depth] = false;
			i++;
			continue;
		}
		if (ch === ")") {
			const hadQuantifier = depth > 0 && quantifierAtDepth[depth];
			if (depth > 0) depth--;
			const next = pattern[i + 1];
			if (next === "+" || next === "*" || next === "{") {
				if (hadQuantifier) return false;
				if (depth >= 0 && depth < quantifierAtDepth.length) quantifierAtDepth[depth] = true;
			}
			i++;
			continue;
		}
		if (ch === "+" || ch === "*") {
			if (depth > 0) quantifierAtDepth[depth] = true;
			i++;
			continue;
		}
		if (ch === "?") {
			const prev = i > 0 ? pattern[i - 1] : "";
			if (prev !== "+" && prev !== "*" && prev !== "?" && prev !== "}") {
				if (depth > 0) quantifierAtDepth[depth] = true;
			}
			i++;
			continue;
		}
		if (ch === "{") {
			let j = i + 1;
			while (j < pattern.length && /[\d,]/.test(pattern[j])) j++;
			if (j < pattern.length && pattern[j] === "}" && j > i + 1) {
				if (depth > 0) quantifierAtDepth[depth] = true;
				i = j + 1;
				continue;
			}
		}
		i++;
	}
	return true;
}
/**
* Compile a regex pattern safely. Returns the compiled RegExp or null if the
* pattern is invalid or vulnerable to ReDoS.
*
* Logs a warning when a pattern is rejected so developers can fix their config.
*/
function safeRegExp(pattern, flags) {
	if (!isSafeRegex(pattern)) {
		console.warn(`[vinext] Ignoring potentially unsafe regex pattern (ReDoS risk): ${pattern}\n  Patterns with nested quantifiers (e.g. (a+)+) can cause catastrophic backtracking.\n  Simplify the pattern to avoid nested repetition.`);
		return null;
	}
	try {
		return new RegExp(pattern, flags);
	} catch {
		return null;
	}
}
/**
* Convert a Next.js header/rewrite/redirect source pattern into a regex string.
*
* Regex groups in the source (e.g. `(\d+)`) are extracted first, the remaining
* text is escaped/converted in a **single pass** (avoiding chained `.replace()`
* which CodeQL flags as incomplete sanitization), then groups are restored.
*/
function escapeHeaderSource(source) {
	const S = "";
	const groups = [];
	const withPlaceholders = source.replace(/\(([^)]+)\)/g, (_m, inner) => {
		groups.push(inner);
		return `${S}G${groups.length - 1}${S}`;
	});
	let result = "";
	const re = new RegExp(`${S}G(\\d+)${S}|:[\\w-]+|[.+?*]|[^.+?*:\\uE000]+`, "g");
	let m;
	while ((m = re.exec(withPlaceholders)) !== null) if (m[1] !== void 0) result += `(${groups[Number(m[1])]})`;
	else if (m[0].startsWith(":")) {
		const constraintMatch = withPlaceholders.slice(re.lastIndex).match(new RegExp(`^${S}G(\\d+)${S}`));
		if (constraintMatch) {
			re.lastIndex += constraintMatch[0].length;
			result += `(${groups[Number(constraintMatch[1])]})`;
		} else result += "[^/]+";
	} else switch (m[0]) {
		case ".":
			result += "\\.";
			break;
		case "+":
			result += "\\+";
			break;
		case "?":
			result += "\\?";
			break;
		case "*":
			result += ".*";
			break;
		default:
			result += m[0];
			break;
	}
	return result;
}
/**
* Parse a Cookie header string into a key-value record.
*/
function parseCookies(cookieHeader) {
	if (!cookieHeader) return {};
	const cookies = {};
	for (const part of cookieHeader.split(";")) {
		const eq = part.indexOf("=");
		if (eq === -1) continue;
		const key = part.slice(0, eq).trim();
		const value = part.slice(eq + 1).trim();
		if (key) cookies[key] = value;
	}
	return cookies;
}
/**
* Build a RequestContext from a Web Request object.
*/
function requestContextFromRequest(request) {
	const url = new URL(request.url);
	return {
		headers: request.headers,
		cookies: parseCookies(request.headers.get("cookie")),
		query: url.searchParams,
		host: normalizeHost(request.headers.get("host"), url.hostname)
	};
}
function normalizeHost(hostHeader, fallbackHostname) {
	return (hostHeader ?? fallbackHostname).split(":", 1)[0].toLowerCase();
}
function _emptyParams() {
	return Object.create(null);
}
function _matchConditionValue(actualValue, expectedValue) {
	if (expectedValue === void 0) return _emptyParams();
	const re = _cachedConditionRegex(expectedValue);
	if (re) {
		const match = re.exec(actualValue);
		if (!match) return null;
		const params = _emptyParams();
		if (match.groups) {
			for (const [key, value] of Object.entries(match.groups)) if (value !== void 0) params[key] = value;
		}
		return params;
	}
	return actualValue === expectedValue ? _emptyParams() : null;
}
/**
* Check a single has/missing condition against request context.
* Returns captured params when the condition is satisfied, or null otherwise.
*/
function matchSingleCondition(condition, ctx) {
	switch (condition.type) {
		case "header": {
			const headerValue = ctx.headers.get(condition.key);
			if (headerValue === null) return null;
			return _matchConditionValue(headerValue, condition.value);
		}
		case "cookie": {
			const cookieValue = ctx.cookies[condition.key];
			if (cookieValue === void 0) return null;
			return _matchConditionValue(cookieValue, condition.value);
		}
		case "query": {
			const queryValue = ctx.query.get(condition.key);
			if (queryValue === null) return null;
			return _matchConditionValue(queryValue, condition.value);
		}
		case "host":
			if (condition.value !== void 0) return _matchConditionValue(ctx.host, condition.value);
			return ctx.host === condition.key ? _emptyParams() : null;
		default: return null;
	}
}
/**
* Return a cached RegExp for a has/missing condition value string, compiling
* on first use. Returns null if safeRegExp rejected the pattern or if the
* value is not a valid regex (fall back to exact string comparison).
*/
function _cachedConditionRegex(value) {
	return getCachedRegex(_compiledConditionCache, value, () => safeRegExp(`^${value}$`));
}
/**
* Check all has/missing conditions for a config rule.
* Returns true if the rule should be applied (all has conditions pass, all missing conditions pass).
*
* - has: every condition must match (the request must have it)
* - missing: every condition must NOT match (the request must not have it)
*/
function collectConditionParams(has, missing, ctx) {
	const params = _emptyParams();
	if (has) for (const condition of has) {
		const conditionParams = matchSingleCondition(condition, ctx);
		if (!conditionParams) return null;
		Object.assign(params, conditionParams);
	}
	if (missing) {
		for (const condition of missing) if (matchSingleCondition(condition, ctx)) return null;
	}
	return params;
}
function checkHasConditions(has, missing, ctx) {
	return collectConditionParams(has, missing, ctx) !== null;
}
/**
* If the current position in `str` starts with a parenthesized group, consume
* it and advance `re.lastIndex` past the closing `)`. Returns the group
* contents or null if no group is present.
*/
function extractConstraint$1(str, re) {
	if (str[re.lastIndex] !== "(") return null;
	const start = re.lastIndex + 1;
	let depth = 1;
	let i = start;
	while (i < str.length && depth > 0) {
		if (str[i] === "(") depth++;
		else if (str[i] === ")") depth--;
		i++;
	}
	if (depth !== 0) return null;
	re.lastIndex = i;
	return str.slice(start, i - 1);
}
/**
* Match a Next.js config pattern (from redirects/rewrites sources) against a pathname.
* Returns matched params or null.
*
* Supports:
*   :param     - matches a single path segment
*   :param*    - matches zero or more segments (catch-all)
*   :param+    - matches one or more segments
*   (regex)    - inline regex patterns in the source
*   :param(constraint) - named param with inline regex constraint
*/
function matchConfigPattern(pathname, pattern) {
	if (pattern.includes("(") || pattern.includes("\\") || /:[\w-]+[*+][^/]/.test(pattern) || /:[\w-]+\./.test(pattern)) try {
		const compiled = getCachedRegex(_compiledPatternCache, pattern, () => {
			const paramNames = [];
			let regexStr = "";
			const tokenRe = /:([\w-]+)|[.]|[^:.]+/g;
			let tok;
			while ((tok = tokenRe.exec(pattern)) !== null) if (tok[1] !== void 0) {
				const name = tok[1];
				const rest = pattern.slice(tokenRe.lastIndex);
				if (rest.startsWith("*") || rest.startsWith("+")) {
					const quantifier = rest[0];
					tokenRe.lastIndex += 1;
					const constraint = extractConstraint$1(pattern, tokenRe);
					paramNames.push(name);
					if (constraint !== null) regexStr += `(${constraint})`;
					else regexStr += quantifier === "*" ? "(.*)" : "(.+)";
				} else {
					const constraint = extractConstraint$1(pattern, tokenRe);
					paramNames.push(name);
					regexStr += constraint !== null ? `(${constraint})` : "([^/]+)";
				}
			} else if (tok[0] === ".") regexStr += "\\.";
			else regexStr += tok[0];
			const re = safeRegExp("^" + regexStr + "$");
			return re ? {
				re,
				paramNames
			} : null;
		});
		if (!compiled) return null;
		const match = compiled.re.exec(pathname);
		if (!match) return null;
		const params = Object.create(null);
		for (let i = 0; i < compiled.paramNames.length; i++) params[compiled.paramNames[i]] = match[i + 1] ?? "";
		return params;
	} catch {}
	const catchAllMatch = pattern.match(/:([\w-]+)(\*|\+)$/);
	if (catchAllMatch) {
		const prefix = pattern.slice(0, pattern.lastIndexOf(":"));
		const paramName = catchAllMatch[1];
		const isPlus = catchAllMatch[2] === "+";
		const prefixNoSlash = prefix.replace(/\/$/, "");
		if (!pathname.startsWith(prefixNoSlash)) return null;
		const charAfter = pathname[prefixNoSlash.length];
		if (charAfter !== void 0 && charAfter !== "/") return null;
		const rest = pathname.slice(prefixNoSlash.length);
		if (isPlus && (!rest || rest === "/")) return null;
		let restValue = rest.startsWith("/") ? rest.slice(1) : rest;
		return { [paramName]: restValue };
	}
	const parts = pattern.split("/");
	const pathParts = pathname.split("/");
	if (parts.length !== pathParts.length) return null;
	const params = Object.create(null);
	for (let i = 0; i < parts.length; i++) if (parts[i].startsWith(":")) params[parts[i].slice(1)] = pathParts[i];
	else if (parts[i] !== pathParts[i]) return null;
	return params;
}
/**
* Apply redirect rules from next.config.js.
* Returns the redirect info if a redirect was matched, or null.
*
* `ctx` provides the request context (cookies, headers, query, host) used
* to evaluate has/missing conditions. Next.js always has request context
* when evaluating redirects, so this parameter is required.
*
* ## Performance
*
* Rules with a locale-capture-group prefix (the dominant pattern in large
* Next.js apps — e.g. `/:locale(en|es|fr|...)?/some-path`) are handled via
* a pre-built index. Instead of running exec() on each locale regex
* individually, we:
*
*   1. Strip the optional locale prefix from the pathname with one cheap
*      string-slice check (no regex exec on the hot path).
*   2. Look up the stripped suffix in a Map<suffix, entry[]>.
*   3. For each matching entry, validate the captured locale string against
*      a small, anchored alternation regex.
*
* This reduces the per-request cost from O(n × regex) to O(1) map lookup +
* O(matches × tiny-regex), eliminating the ~2992ms self-time reported in
* profiles for apps with 63+ locale-prefixed rules.
*
* Rules that don't fit the locale-static pattern fall back to the original
* linear matchConfigPattern scan.
*
* ## Ordering invariant
*
* First match wins, preserving the original redirect array order. When a
* locale-static fast-path match is found at position N, all linear rules with
* an original index < N are checked via matchConfigPattern first — they are
* few in practice (typically zero) so this is not a hot-path concern.
*/
function matchRedirect(pathname, redirects, ctx) {
	if (redirects.length === 0) return null;
	const index = _getRedirectIndex(redirects);
	let localeMatch = null;
	let localeMatchIndex = Infinity;
	if (index.localeStatic.size > 0) {
		const noLocaleBucket = index.localeStatic.get(pathname);
		if (noLocaleBucket) for (const entry of noLocaleBucket) {
			if (entry.originalIndex >= localeMatchIndex) continue;
			const redirect = entry.redirect;
			const conditionParams = redirect.has || redirect.missing ? collectConditionParams(redirect.has, redirect.missing, ctx) : _emptyParams();
			if (!conditionParams) continue;
			localeMatch = {
				destination: substituteAndSanitizeDestination(redirect.destination, {
					[entry.paramName]: "",
					...conditionParams
				}),
				permanent: redirect.permanent
			};
			localeMatchIndex = entry.originalIndex;
			break;
		}
		const slashTwo = pathname.indexOf("/", 1);
		if (slashTwo !== -1) {
			const suffix = pathname.slice(slashTwo);
			const localePart = pathname.slice(1, slashTwo);
			const localeBucket = index.localeStatic.get(suffix);
			if (localeBucket) for (const entry of localeBucket) {
				if (entry.originalIndex >= localeMatchIndex) continue;
				if (!entry.altRe.test(localePart)) continue;
				const redirect = entry.redirect;
				const conditionParams = redirect.has || redirect.missing ? collectConditionParams(redirect.has, redirect.missing, ctx) : _emptyParams();
				if (!conditionParams) continue;
				localeMatch = {
					destination: substituteAndSanitizeDestination(redirect.destination, {
						[entry.paramName]: localePart,
						...conditionParams
					}),
					permanent: redirect.permanent
				};
				localeMatchIndex = entry.originalIndex;
				break;
			}
		}
	}
	for (const [origIdx, redirect] of index.linear) {
		if (origIdx >= localeMatchIndex) break;
		const params = matchConfigPattern(pathname, redirect.source);
		if (params) {
			const conditionParams = redirect.has || redirect.missing ? collectConditionParams(redirect.has, redirect.missing, ctx) : _emptyParams();
			if (!conditionParams) continue;
			return {
				destination: substituteAndSanitizeDestination(redirect.destination, {
					...params,
					...conditionParams
				}),
				permanent: redirect.permanent
			};
		}
	}
	return localeMatch;
}
/**
* Apply rewrite rules from next.config.js.
* Returns the rewritten URL or null if no rewrite matched.
*
* `ctx` provides the request context (cookies, headers, query, host) used
* to evaluate has/missing conditions. Next.js always has request context
* when evaluating rewrites, so this parameter is required.
*/
function matchRewrite(pathname, rewrites, ctx) {
	for (const rewrite of rewrites) {
		const params = matchConfigPattern(pathname, rewrite.source);
		if (params) {
			const conditionParams = rewrite.has || rewrite.missing ? collectConditionParams(rewrite.has, rewrite.missing, ctx) : _emptyParams();
			if (!conditionParams) continue;
			return substituteAndSanitizeDestination(rewrite.destination, {
				...params,
				...conditionParams
			});
		}
	}
	return null;
}
/**
* Substitute all matched route params into a redirect/rewrite destination.
*
* Handles repeated params (e.g. `/api/:id/:id`) and catch-all suffix forms
* (`:path*`, `:path+`) in a single pass. Unknown params are left intact.
*/
function substituteDestinationParams(destination, params) {
	const keys = Object.keys(params);
	if (keys.length === 0) return destination;
	const sortedKeys = [...keys].sort((a, b) => b.length - a.length);
	const cacheKey = sortedKeys.join("\0");
	let paramRe = _compiledDestinationParamCache.get(cacheKey);
	if (!paramRe) {
		const paramAlternation = sortedKeys.map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
		paramRe = new RegExp(`:(${paramAlternation})([+*])?(?![A-Za-z0-9_])`, "g");
		_compiledDestinationParamCache.set(cacheKey, paramRe);
	}
	return destination.replace(paramRe, (_token, key) => params[key]);
}
/**
* Substitute params into a redirect/rewrite destination and sanitize the
* result. Used by every redirect/rewrite branch — the substitution can
* introduce protocol-relative URLs (e.g. `//evil.com` from a decoded `%2F`
* in a catch-all param), which sanitizeDestination collapses.
*/
function substituteAndSanitizeDestination(destination, params) {
	return sanitizeDestination(substituteDestinationParams(destination, params));
}
/**
* Sanitize a redirect/rewrite destination to collapse protocol-relative URLs.
*
* After parameter substitution, a destination like `/:path*` can become
* `//evil.com` if the catch-all captured a decoded `%2F` (`/evil.com`).
* Browsers interpret `//evil.com` as a protocol-relative URL, redirecting
* users off-site.
*
* This function collapses any leading double (or more) slashes to a single
* slash for non-external (relative) destinations.
*/
function sanitizeDestination(dest) {
	if (dest.startsWith("http://") || dest.startsWith("https://")) return dest;
	dest = dest.replace(/^[\\/]+/, "/");
	return dest;
}
/**
* Check if a URL is external (absolute URL or protocol-relative).
* Detects any URL scheme (http:, https:, data:, javascript:, blob:, etc.)
* per RFC 3986, plus protocol-relative URLs (//).
*/
function isExternalUrl(url) {
	return /^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith("//");
}
/**
* Proxy an incoming request to an external URL and return the upstream response.
*
* Used for external rewrites (e.g. `/ph/:path*` → `https://us.i.posthog.com/:path*`).
* Next.js handles these as server-side reverse proxies, forwarding the request
* method, headers, and body to the external destination.
*
* Works in all runtimes (Node.js, Cloudflare Workers) via the standard fetch() API.
*/
async function proxyExternalRequest(request, externalUrl) {
	const originalUrl = new URL(request.url);
	const targetUrl = new URL(externalUrl);
	const destinationKeys = new Set(targetUrl.searchParams.keys());
	for (const [key, value] of originalUrl.searchParams) if (!destinationKeys.has(key)) targetUrl.searchParams.append(key, value);
	const headers = new Headers(request.headers);
	headers.set("host", targetUrl.host);
	stripHopByHopRequestHeaders(headers);
	const keysToDelete = [];
	for (const key of headers.keys()) if (key.startsWith("x-middleware-")) keysToDelete.push(key);
	for (const key of keysToDelete) headers.delete(key);
	headers.delete(VINEXT_PRERENDER_SECRET_HEADER);
	headers.delete(VINEXT_MW_CTX_HEADER);
	const method = request.method;
	const hasBody = method !== "GET" && method !== "HEAD";
	const init = {
		method,
		headers,
		redirect: "manual"
	};
	if (hasBody && request.body) {
		init.body = request.body;
		init.duplex = "half";
	}
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 3e4);
	let upstreamResponse;
	try {
		upstreamResponse = await fetch(targetUrl.href, {
			...init,
			signal: controller.signal
		});
	} catch (e) {
		if (e instanceof Error && e.name === "AbortError") {
			console.error("[vinext] External rewrite proxy timeout:", targetUrl.href);
			return new Response("Gateway Timeout", { status: 504 });
		}
		console.error("[vinext] External rewrite proxy error:", e);
		return new Response("Bad Gateway", { status: 502 });
	} finally {
		clearTimeout(timeout);
	}
	const isNodeRuntime = typeof process !== "undefined" && !!process.versions?.node;
	const responseHeaders = new Headers();
	upstreamResponse.headers.forEach((value, key) => {
		const lower = key.toLowerCase();
		if (HOP_BY_HOP_HEADERS.has(lower)) return;
		if (isNodeRuntime && (lower === "content-encoding" || lower === "content-length")) return;
		responseHeaders.append(key, value);
	});
	return new Response(upstreamResponse.body, {
		status: upstreamResponse.status,
		statusText: upstreamResponse.statusText,
		headers: responseHeaders
	});
}
/**
* Apply custom header rules from next.config.js.
* Returns an array of { key, value } pairs to set on the response.
*
* `ctx` provides the request context (cookies, headers, query, host) used
* to evaluate has/missing conditions. Next.js always has request context
* when evaluating headers, so this parameter is required.
*/
function matchHeaders(pathname, headers, ctx) {
	const result = [];
	for (const rule of headers) {
		const sourceRegex = getCachedRegex(_compiledHeaderSourceCache, rule.source, () => safeRegExp("^" + escapeHeaderSource(rule.source) + "$"));
		if (sourceRegex && sourceRegex.test(pathname)) {
			if (rule.has || rule.missing) {
				if (!checkHasConditions(rule.has, rule.missing, ctx)) continue;
			}
			result.push(...rule.headers);
		}
	}
	return result;
}
/**
* Build a 400 Bad Request plain-text response.
*
* Used for malformed percent-encoding, invalid HTTP methods (where Next.js
* returns 400), and other request-shape validation failures.
*/
function badRequestResponse(init) {
	return new Response("Bad Request", {
		status: 400,
		headers: init?.headers
	});
}
/**
* Build a 403 Forbidden plain-text response.
*
* Used by CSRF origin validation and dev-server origin checks.
*/
function forbiddenResponse() {
	return new Response("Forbidden", {
		status: 403,
		headers: { "Content-Type": "text/plain" }
	});
}
/**
* Build a 404 Not Found plain-text response.
*
* The `headers` option lets call sites merge middleware response headers into
* the 404, matching the pattern used by `app-rsc-handler` after a route match
* fails but middleware has already contributed headers.
*/
function notFoundResponse(init) {
	return new Response("Not Found", {
		status: 404,
		headers: init?.headers
	});
}
/**
* Build a 405 Method Not Allowed plain-text response with the `Allow` header set.
*
* `allowedMethods` is rendered as the comma-separated `Allow` header value.
* Existing headers (e.g. middleware response headers) can be merged via `init.headers`;
* the `Allow` header takes precedence and overwrites any colliding entry.
*/
function methodNotAllowedResponse(allowedMethods, init) {
	const headers = new Headers(init?.headers);
	headers.set("Allow", allowedMethods);
	return new Response("Method Not Allowed", {
		status: 405,
		headers
	});
}
/**
* Build a 413 Payload Too Large plain-text response.
*
* Used by server action body-size enforcement.
*/
function payloadTooLargeResponse() {
	return new Response("Payload Too Large", { status: 413 });
}
/**
* Build a 500 Internal Server Error plain-text response.
*
* The `message` argument lets dev-mode handlers surface failure details while
* production paths fall back to the canonical body. Pass `undefined` (or omit)
* to use the canonical "Internal Server Error" body.
*/
function internalServerErrorResponse(message, init) {
	return new Response(message ?? "Internal Server Error", {
		status: 500,
		headers: init?.headers
	});
}
/**
* Shared request pipeline utilities.
*
* Extracted from generated entries and server hot paths to keep codegen focused
* on app shape while normal modules own request behavior. Some dev-server and
* worker-template setup code still has inline normalization that should be
* migrated in follow-up work.
*
* These utilities handle the common request lifecycle steps: protocol-
* relative URL guards, basePath stripping, trailing slash normalization,
* and CSRF origin validation.
*
* Plain-text error response builders (forbidden / not-found / etc.) live in
* `./http-error-responses.ts`.
*/
/**
* Guard against protocol-relative URL open redirects.
*
* Paths like `//example.com/` would be redirected to `//example.com` by the
* trailing-slash normalizer, which browsers interpret as `http://example.com`.
* Backslashes are equivalent to forward slashes in the URL spec
* (e.g. `/\evil.com` is treated as `//evil.com` by browsers).
*
* Next.js returns 404 for these paths. We check the RAW pathname before
* normalization so the guard fires before normalizePath collapses `//`.
*
* Percent-encoded variants are also blocked because:
*   - `%5C` decodes to `\` (browsers treat `/\evil.com` as `//evil.com`).
*   - `%2F` decodes to `/` (so `/%2F/evil.com` effectively becomes `//evil.com`).
* These forms survive segment-wise decoding that re-encodes path delimiters
* (e.g. `normalizePathnameForRouteMatchStrict`), so a later trailing-slash
* redirect would still echo the encoded form in its `Location` header. See
* `isOpenRedirectShaped` for the full list of rejected leading-segment forms.
*
* @param rawPathname - The raw pathname from the URL, before any normalization
* @returns A 404 Response if the path is protocol-relative, or null to continue
*/
function guardProtocolRelativeUrl(rawPathname) {
	if (isOpenRedirectShaped(rawPathname)) return notFoundResponse();
	return null;
}
/**
* Returns true if a request pathname looks like a protocol-relative open
* redirect, in either literal or percent-encoded form.
*
* Exported for call sites that need to replicate the guard inline (Pages
* Router worker codegen, Node production server) and for defense-in-depth
* checks inside redirect emitters.
*
* A pathname is considered "open redirect shaped" when its first segment,
* after decoding backslashes and encoded delimiters, would cause a browser
* to resolve a `Location` containing the pathname as protocol-relative:
*
*   - literal   `//evil.com`
*   - literal   `/\evil.com`             (browsers normalize `\` to `/`)
*   - encoded   `/%5Cevil.com`           (`%5C` decodes to `\` in Location)
*   - encoded   `/%2F/evil.com`          (`%2F` decodes to `/` → `//`)
*   - mixed     `/%5C%2F`, `/%5C%5C`     (and other combinations)
*
* We explicitly do not require a valid percent sequence elsewhere in the
* pathname — we only examine the leading bytes (up to the second real or
* encoded delimiter) so malformed suffixes can still reach the normal
* "400 Bad Request" decode path instead of being masked as "404".
*/
function isOpenRedirectShaped(rawPathname) {
	if (!rawPathname.startsWith("/")) return false;
	const afterSlash = rawPathname.slice(1);
	if (afterSlash.startsWith("/") || afterSlash.startsWith("\\")) return true;
	if (afterSlash.length >= 3 && afterSlash[0] === "%") {
		const encoded = afterSlash.slice(0, 3).toLowerCase();
		if (encoded === "%5c" || encoded === "%2f") return true;
	}
	return false;
}
/**
* Apply matched next.config.js headers to a Web Headers object.
*
* Next.js evaluates config header match conditions against the original
* request snapshot. Middleware response headers still win for the same
* response key, while multi-value headers are additive.
*/
function applyConfigHeadersToResponse(responseHeaders, options) {
	const matched = matchHeaders(options.pathname, options.configHeaders, options.requestContext);
	for (const header of matched) {
		const lowerName = header.key.toLowerCase();
		if (lowerName === "vary" || lowerName === "set-cookie") responseHeaders.append(header.key, header.value);
		else if (!responseHeaders.has(lowerName)) responseHeaders.set(header.key, header.value);
	}
}
function createStaticFileSignal(pathname, context) {
	const headers = new Headers({ [VINEXT_STATIC_FILE_HEADER]: encodeURIComponent(pathname) });
	if (context.headers) for (const [key, value] of context.headers) headers.append(key, value);
	return new Response(null, {
		status: context.status ?? 200,
		headers
	});
}
/**
* Resolve the public/ filesystem-route slot in the Next.js routing order.
*
* Public files are checked after middleware and before afterFiles/fallback
* rewrites. The generated App Router entry provides the public-file set; this
* helper owns the request-method and RSC exclusions plus static-file signaling.
*/
function resolvePublicFileRoute(options) {
	if (options.request.method !== "GET" && options.request.method !== "HEAD") return null;
	if (options.pathname.endsWith(".rsc")) return null;
	if (!options.publicFiles.has(options.cleanPathname)) return null;
	return createStaticFileSignal(options.cleanPathname, options.middlewareContext);
}
/**
* Check if the pathname needs a trailing slash redirect, and return the
* redirect Response if so.
*
* Follows Next.js behavior:
* - `/api` routes are never redirected
* - The root path `/` is never redirected
* - If `trailingSlash` is true, redirect `/about` → `/about/`
* - If `trailingSlash` is false (default), redirect `/about/` → `/about`
*
* @param pathname - The basePath-stripped pathname
* @param basePath - The basePath to prepend to the redirect Location
* @param trailingSlash - Whether trailing slashes should be enforced
* @param search - The query string (including `?`) to preserve in the redirect
* @returns A 308 redirect Response, or null if no redirect is needed
*/
function normalizeTrailingSlash(pathname, basePath, trailingSlash, search) {
	if (pathname === "/" || pathname === "/api" || pathname.startsWith("/api/")) return null;
	if (isOpenRedirectShaped(pathname)) return notFoundResponse();
	const hasTrailing = pathname.endsWith("/");
	if (trailingSlash && !hasTrailing && !pathname.endsWith(".rsc")) return new Response(null, {
		status: 308,
		headers: { Location: basePath + pathname + "/" + search }
	});
	if (!trailingSlash && hasTrailing) return new Response(null, {
		status: 308,
		headers: { Location: basePath + removeTrailingSlash(pathname) + search }
	});
	return null;
}
/**
* Validate CSRF origin for server action requests.
*
* Matches Next.js behavior: compares the Origin header against the Host
* header. If they don't match, the request is rejected with 403 unless
* the origin is in the allowedOrigins list.
*
* @param request - The incoming Request
* @param allowedOrigins - Origins from experimental.serverActions.allowedOrigins
* @returns A 403 Response if origin validation fails, or null to continue
*/
function validateCsrfOrigin(request, allowedOrigins = []) {
	const originHeader = request.headers.get("origin");
	if (!originHeader) return null;
	if (originHeader === "null") {
		if (allowedOrigins.includes("null")) return null;
		console.warn(`[vinext] CSRF origin "null" blocked for server action. To allow requests from sandboxed contexts, add "null" to experimental.serverActions.allowedOrigins.`);
		return forbiddenResponse();
	}
	let originHost;
	try {
		originHost = new URL(originHeader).host.toLowerCase();
	} catch {
		return forbiddenResponse();
	}
	const hostHeader = (request.headers.get("host") || "").split(",")[0].trim().toLowerCase() || new URL(request.url).host.toLowerCase();
	if (originHost === hostHeader) return null;
	if (allowedOrigins.length > 0 && isOriginAllowed(originHost, allowedOrigins)) return null;
	console.warn(`[vinext] CSRF origin mismatch: origin "${originHost}" does not match host "${hostHeader}". Blocking server action request.`);
	return forbiddenResponse();
}
/**
* Reject malformed Flight container reference graphs in server action payloads.
*
* `@vitejs/plugin-rsc` vendors its own React Flight decoder. Malicious action
* payloads can abuse container references (`$Q`, `$W`, `$i`) to trigger very
* expensive deserialization before the action is even looked up.
*
* Legitimate React-encoded container payloads use separate numeric backing
* fields (e.g. field `1` plus root field `0` containing `"$Q1"`). We reject
* numeric backing-field graphs that contain missing backing fields or cycles.
* Regular user form fields are ignored entirely.
*/
async function validateServerActionPayload(body) {
	const containerRefRe = /"\$([QWi])(\d+)"/g;
	const fieldRefs = /* @__PURE__ */ new Map();
	const collectRefs = (fieldKey, text) => {
		const refs = /* @__PURE__ */ new Set();
		let match;
		containerRefRe.lastIndex = 0;
		while ((match = containerRefRe.exec(text)) !== null) refs.add(match[2]);
		fieldRefs.set(fieldKey, refs);
	};
	if (typeof body === "string") collectRefs("0", body);
	else for (const [key, value] of body.entries()) {
		if (!/^\d+$/.test(key)) continue;
		if (typeof value === "string") {
			collectRefs(key, value);
			continue;
		}
		if (typeof value?.text === "function") collectRefs(key, await value.text());
	}
	if (fieldRefs.size === 0) return null;
	const knownFields = new Set(fieldRefs.keys());
	for (const refs of fieldRefs.values()) for (const ref of refs) if (!knownFields.has(ref)) return new Response("Invalid server action payload", {
		status: 400,
		headers: { "Content-Type": "text/plain" }
	});
	const visited = /* @__PURE__ */ new Set();
	const stack = /* @__PURE__ */ new Set();
	const hasCycle = (node) => {
		if (stack.has(node)) return true;
		if (visited.has(node)) return false;
		visited.add(node);
		stack.add(node);
		for (const ref of fieldRefs.get(node) ?? []) if (hasCycle(ref)) return true;
		stack.delete(node);
		return false;
	};
	for (const node of fieldRefs.keys()) if (hasCycle(node)) return new Response("Invalid server action payload", {
		status: 400,
		headers: { "Content-Type": "text/plain" }
	});
	return null;
}
/**
* Check if an origin matches any pattern in the allowed origins list.
* Supports wildcard subdomains (e.g. `*.example.com`).
*/
/**
* Segment-by-segment domain matching for wildcard origin patterns.
* `*` matches exactly one DNS label; `**` matches one or more labels.
*
* Ported from Next.js: packages/next/src/server/app-render/csrf-protection.ts
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/app-render/csrf-protection.ts
*/
function matchWildcardDomain(domain, pattern) {
	const normalizedDomain = domain.replace(/[A-Z]/g, (c) => c.toLowerCase());
	const normalizedPattern = pattern.replace(/[A-Z]/g, (c) => c.toLowerCase());
	const domainParts = normalizedDomain.split(".");
	const patternParts = normalizedPattern.split(".");
	if (patternParts.length < 1) return false;
	if (domainParts.length < patternParts.length) return false;
	if (patternParts.length === 1 && (patternParts[0] === "*" || patternParts[0] === "**")) return false;
	while (patternParts.length) {
		const patternPart = patternParts.pop();
		const domainPart = domainParts.pop();
		if (patternPart === void 0) return false;
		switch (patternPart) {
			case "": return false;
			case "*": if (domainPart) continue;
			else return false;
			case "**":
				if (patternParts.length > 0) return false;
				return domainPart !== void 0;
			default: if (patternPart !== domainPart) return false;
		}
	}
	return domainParts.length === 0;
}
function isOriginAllowed(origin, allowed) {
	for (const pattern of allowed) if (pattern.includes("*")) {
		if (matchWildcardDomain(origin, pattern)) return true;
	} else if (origin.toLowerCase() === pattern.toLowerCase()) return true;
	return false;
}
/**
* Validate an image optimization URL parameter.
*
* Ensures the URL is a relative path that doesn't escape the origin:
* - Must start with "/" but not "//"
* - Backslashes are normalized (browsers treat `\` as `/`)
* - Origin validation as defense-in-depth
*
* @param rawUrl - The raw `url` query parameter value
* @param requestUrl - The full request URL for origin comparison
* @returns An error Response if validation fails, or the normalized image URL
*/
function validateImageUrl(rawUrl, requestUrl) {
	const imgUrl = rawUrl?.replaceAll("\\", "/") ?? null;
	if (!imgUrl || !imgUrl.startsWith("/") || imgUrl.startsWith("//")) return new Response(!rawUrl ? "Missing url parameter" : "Only relative URLs allowed", { status: 400 });
	const url = new URL(requestUrl);
	if (new URL(imgUrl, url.origin).origin !== url.origin) return new Response("Only relative URLs allowed", { status: 400 });
	return imgUrl;
}
/**
* Strip internal `x-middleware-*` headers from a Headers object.
*
* Middleware uses `x-middleware-*` headers as internal signals (e.g.
* `x-middleware-next`, `x-middleware-rewrite`, `x-middleware-request-*`).
* These must be removed before sending the response to the client.
*
* @param headers - The Headers object to modify in place
*/
function processMiddlewareHeaders(headers) {
	const keysToDelete = [];
	for (const key of headers.keys()) if (key.startsWith("x-middleware-")) keysToDelete.push(key);
	for (const key of keysToDelete) headers.delete(key);
}
/**
* Strip internal headers from an inbound request so they cannot be forged by
* an external attacker to influence routing or impersonate internal state.
*
* Must be called at every request entry point BEFORE middleware, routing,
* or any handler logic accesses the request headers.
*
* Returns a new Headers object with internal headers removed. The input
* is never mutated — Request.headers is immutable in Workers/miniflare
* environments (see applyMiddlewareRequestHeaders in config-matchers.ts
* for the same cloning pattern).
*
* @param headers - The source Headers (never modified)
* @returns A new Headers with INTERNAL_HEADERS removed
*/
function filterInternalHeaders(headers) {
	const filtered = new Headers();
	for (const [key, value] of headers) if (!INTERNAL_HEADERS.includes(key.toLowerCase())) filtered.append(key, value);
	return filtered;
}
function getRequestCf(request) {
	const cf = Reflect.get(request, "cf");
	return cf === void 0 ? void 0 : cf;
}
/**
* Clone a Request while overriding headers, preserving metadata when possible.
*
* Some runtimes (Workers) allow `new Request(request, { headers })` which
* retains redirect/signal/cf data. Others (Node/undici across realms) can throw
* when cloning a foreign Request instance. In that case, fall back to building
* a RequestInit with best-effort metadata.
*/
function cloneRequestWithHeaders(request, headers) {
	let cloned;
	try {
		cloned = new Request(request, { headers });
	} catch {
		const init = {
			method: request.method,
			headers,
			body: request.body ?? void 0,
			redirect: request.redirect,
			signal: request.signal,
			integrity: request.integrity,
			cache: request.cache,
			mode: request.mode,
			credentials: request.credentials,
			referrer: request.referrer,
			referrerPolicy: request.referrerPolicy
		};
		if (request.body) init.duplex = "half";
		cloned = new Request(request.url, init);
	}
	const cf = getRequestCf(request);
	if (cf !== void 0) Object.defineProperty(cloned, "cf", {
		value: cf,
		enumerable: true,
		configurable: true
	});
	return cloned;
}
/**
* Cache-tag canonicalisation.
*
* Tags can flow into HTTP headers (e.g. `x-next-cache-tags` on ISR responses,
* Cloudflare cache-tag headers, downstream Worker code) where Node's
* `validateHeaderValue` rejects any byte outside `\t\x20-\x7e` and crashes
* the response with `ERR_INVALID_CHAR`. Even on platforms with permissive
* header setters, divergence between storage form and wire form silently
* breaks invalidation when a `revalidateTag` call's tag does not byte-match
* the form that was stored.
*
* The fix is to apply this encoding at every public boundary so storage,
* comparison, and the wire all see the same ASCII-safe form. The fast-path
* returns the input unchanged for already-ASCII tags (the common case), so
* pre-encoded `%xx` input round-trips losslessly without `decodeURIComponent`
* mangling literal `%xx` characters.
*
* The replacement matches *runs* of out-of-class code units rather than each
* code unit individually so surrogate pairs (emoji, non-BMP characters) are
* handed to `encodeURIComponent` as a complete code point — a per-code-unit
* regex would split the pair and throw `URIError`.
*
* Mirrors Next.js's `packages/next/src/server/lib/encode-cache-tag.ts`
* (introduced in vercel/next.js#93601).
*/
var OUT_OF_CLASS_CHAR = /[^\t\x20-\x7e]/;
var OUT_OF_CLASS_RUN = /[^\t\x20-\x7e]+/g;
function encodeCacheTag(tag) {
	return OUT_OF_CLASS_CHAR.test(tag) ? tag.replace(OUT_OF_CLASS_RUN, (run) => encodeURIComponent(run)) : tag;
}
function encodeCacheTags(tags) {
	return tags.map(encodeCacheTag);
}
/**
* Shim for next/dist/server/app-render/work-unit-async-storage.external
* and next/dist/client/components/request-async-storage.external
*
* Tracks the current rendering context type so that dynamic APIs
* (io, headers, cookies, etc.) can branch on whether they're
* inside a request, prerender, cache scope, or other context.
*
* Used by: @sentry/nextjs (runtime resolve for request context injection),
* io() for hanging-promise behavior during prerendering.
*/
var workUnitAsyncStorage = new AsyncLocalStorage$1();
function isUnknownRecord(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
function readRecordField(ctx, field) {
	const value = ctx?.[field];
	return isUnknownRecord(value) ? value : void 0;
}
function readCacheControlNumberField(ctx, field) {
	const value = readRecordField(ctx, "cacheControl")?.[field] ?? ctx?.[field];
	return typeof value === "number" ? value : void 0;
}
function readStringArrayField(ctx, field) {
	const value = ctx?.[field];
	if (!Array.isArray(value)) return [];
	return value.filter((item) => typeof item === "string");
}
var MemoryCacheHandler = class {
	store = /* @__PURE__ */ new Map();
	tagRevalidatedAt = /* @__PURE__ */ new Map();
	async get(key, _ctx) {
		const entry = this.store.get(key);
		if (!entry) return null;
		for (const tag of entry.tags) {
			const revalidatedAt = this.tagRevalidatedAt.get(tag);
			if (revalidatedAt && revalidatedAt >= entry.lastModified) {
				this.store.delete(key);
				return null;
			}
		}
		for (const tag of readStringArrayField(_ctx, "softTags")) {
			const revalidatedAt = this.tagRevalidatedAt.get(tag);
			if (revalidatedAt && revalidatedAt >= entry.lastModified) return null;
		}
		if (entry.expireAt !== null && Date.now() > entry.expireAt) {
			this.store.delete(key);
			return null;
		}
		if (entry.revalidateAt !== null && Date.now() > entry.revalidateAt) return {
			lastModified: entry.lastModified,
			value: entry.value,
			cacheState: "stale",
			cacheControl: entry.cacheControl
		};
		return {
			lastModified: entry.lastModified,
			value: entry.value,
			cacheControl: entry.cacheControl
		};
	}
	async set(key, data, ctx) {
		const tagSet = /* @__PURE__ */ new Set();
		if (data && "tags" in data && Array.isArray(data.tags)) for (const t of data.tags) tagSet.add(t);
		for (const t of readStringArrayField(ctx, "tags")) tagSet.add(t);
		const tags = [...tagSet];
		let effectiveRevalidate;
		let effectiveExpire;
		effectiveRevalidate = readCacheControlNumberField(ctx, "revalidate");
		effectiveExpire = readCacheControlNumberField(ctx, "expire");
		if (data && "revalidate" in data && typeof data.revalidate === "number") effectiveRevalidate = data.revalidate;
		if (effectiveRevalidate === 0) return;
		const now = Date.now();
		const revalidateAt = typeof effectiveRevalidate === "number" && effectiveRevalidate > 0 ? now + effectiveRevalidate * 1e3 : null;
		const expireAt = typeof effectiveExpire === "number" && effectiveExpire > 0 ? now + effectiveExpire * 1e3 : null;
		const cacheControl = typeof effectiveRevalidate === "number" ? effectiveExpire === void 0 ? { revalidate: effectiveRevalidate } : {
			revalidate: effectiveRevalidate,
			expire: effectiveExpire
		} : void 0;
		this.store.set(key, {
			value: data,
			tags,
			lastModified: now,
			revalidateAt,
			expireAt,
			cacheControl
		});
	}
	async revalidateTag(tags, _durations) {
		const tagList = Array.isArray(tags) ? tags : [tags];
		const now = Date.now();
		for (const tag of tagList) this.tagRevalidatedAt.set(tag, now);
	}
	resetRequestCache() {}
};
var _HANDLER_KEY = Symbol.for("vinext.cacheHandler");
var _gHandler = globalThis;
function _getActiveHandler() {
	return _gHandler[_HANDLER_KEY] ?? (_gHandler[_HANDLER_KEY] = new MemoryCacheHandler());
}
/**
* Get the active CacheHandler (for internal use or testing).
*/
function getCacheHandler() {
	return _getActiveHandler();
}
/**
* A fulfilled thenable that React can unwrap synchronously via `use()`
* without ever suspending. Reusing a single instance avoids allocating
* on every call — matching Next.js's browser/client implementation.
*
* @see https://github.com/vercel/next.js/blob/canary/packages/next/src/client/request/io.browser.ts
*/
var _resolvedIOPromise = Promise.resolve(void 0);
_resolvedIOPromise.status = "fulfilled";
_resolvedIOPromise.value = void 0;
var _FALLBACK_KEY$3 = Symbol.for("vinext.cache.fallback");
var _g$5 = globalThis;
var _cacheAls = getOrCreateAls("vinext.cache.als");
var _cacheFallbackState = _g$5[_FALLBACK_KEY$3] ??= {
	actionRevalidationKind: 0,
	requestScopedCacheLife: null,
	unstableCacheRevalidation: "foreground"
};
var ACTION_DID_NOT_REVALIDATE$1 = 0;
function _getCacheState() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _cacheAls.getStore() ?? _cacheFallbackState;
}
function getAndClearActionRevalidationKind() {
	const state = _getCacheState();
	const kind = state.actionRevalidationKind;
	state.actionRevalidationKind = ACTION_DID_NOT_REVALIDATE$1;
	return kind;
}
/**
* Read the request-scoped cache life without clearing it. Prerender response
* shaping needs the metadata before the manifest writer consumes it after the
* body has been fully rendered.
* @internal
*/
function _peekRequestScopedCacheLife() {
	const config = _getCacheState().requestScopedCacheLife;
	return config === null ? null : { ...config };
}
/**
* Consume and reset the request-scoped cache life. Returns null if none was set.
* @internal
*/
function _consumeRequestScopedCacheLife() {
	const state = _getCacheState();
	const config = state.requestScopedCacheLife;
	state.requestScopedCacheLife = null;
	return config;
}
getOrCreateAls("vinext.unstableCache.als");
/**
* Extended fetch() with Next.js caching semantics.
*
* Patches `globalThis.fetch` during server rendering to support:
*
*   fetch(url, { next: { revalidate: 60, tags: ['posts'] } })
*   fetch(url, { cache: 'force-cache' })
*   fetch(url, { cache: 'no-store' })
*
* Cached responses are stored via the pluggable CacheHandler, so
* revalidateTag() and revalidatePath() invalidate fetch-level caches.
*
* Usage (in server entry):
*   import { withFetchCache, cleanupFetchCache } from './fetch-cache';
*   const cleanup = withFetchCache();
*   try { ... render ... } finally { cleanup(); }
*
* Or use the async helper:
*   await runWithFetchCache(async () => { ... render ... });
*/
/**
* Headers excluded from the cache key. These are W3C trace context headers
* that can break request caching and deduplication.
* All other headers ARE included in the cache key, matching Next.js behavior.
*/
var HEADER_BLOCKLIST = ["traceparent", "tracestate"];
var CACHE_KEY_PREFIX = "v3";
var MAX_CACHE_KEY_BODY_BYTES = 1024 * 1024;
var BodyTooLargeForCacheKeyError = class extends Error {
	constructor() {
		super("Fetch body too large for cache key generation");
	}
};
var SkipCacheKeyGenerationError = class extends Error {
	constructor() {
		super("Fetch body could not be serialized for cache key generation");
	}
};
/**
* Collect all headers from the request, excluding the blocklist.
* Merges headers from both the Request object and the init object,
* with init taking precedence (matching fetch() spec behavior).
*/
function collectHeaders(input, init) {
	const merged = {};
	if (input instanceof Request && input.headers) input.headers.forEach((v, k) => {
		merged[k] = v;
	});
	if (init?.headers) (init.headers instanceof Headers ? init.headers : new Headers(init.headers)).forEach((v, k) => {
		merged[k] = v;
	});
	for (const blocked of HEADER_BLOCKLIST) delete merged[blocked];
	return merged;
}
/**
* Check whether a fetch request carries any per-user auth headers.
* Used for the safety bypass (skip caching when auth headers are present
* without an explicit cache opt-in).
*/
var AUTH_HEADERS = [
	"authorization",
	"cookie",
	"x-api-key"
];
function hasAuthHeaders(input, init) {
	const headers = collectHeaders(input, init);
	return AUTH_HEADERS.some((name) => name in headers);
}
async function serializeFormData(formData, pushBodyChunk, getTotalBodyBytes) {
	for (const [key, val] of formData.entries()) {
		if (typeof val === "string") {
			pushBodyChunk(JSON.stringify([key, {
				kind: "string",
				value: val
			}]));
			continue;
		}
		if (val.size > MAX_CACHE_KEY_BODY_BYTES || getTotalBodyBytes() + val.size > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(JSON.stringify([key, {
			kind: "file",
			name: val.name,
			type: val.type,
			value: await val.text()
		}]));
	}
}
function getParsedFormContentType(contentType) {
	const mediaType = contentType?.split(";")[0]?.trim().toLowerCase();
	if (mediaType === "multipart/form-data" || mediaType === "application/x-www-form-urlencoded") return mediaType;
}
function stripMultipartBoundary(contentType) {
	const [type, ...params] = contentType.split(";");
	const keptParams = params.map((param) => param.trim()).filter(Boolean).filter((param) => !/^boundary\s*=/i.test(param));
	const normalizedType = type.trim().toLowerCase();
	return keptParams.length > 0 ? `${normalizedType}; ${keptParams.join("; ")}` : normalizedType;
}
async function readRequestBodyChunksWithinLimit(request) {
	const contentLengthHeader = request.headers.get("content-length");
	if (contentLengthHeader) {
		const contentLength = Number(contentLengthHeader);
		if (Number.isFinite(contentLength) && contentLength > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
	}
	const requestClone = request.clone();
	const contentType = requestClone.headers.get("content-type") ?? void 0;
	const reader = requestClone.body?.getReader();
	if (!reader) return {
		chunks: [],
		contentType
	};
	const chunks = [];
	let totalBodyBytes = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			totalBodyBytes += value.byteLength;
			if (totalBodyBytes > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
			chunks.push(value);
		}
	} catch (err) {
		reader.cancel().catch(() => {});
		throw err;
	}
	return {
		chunks,
		contentType
	};
}
/**
* Serialize request body into string chunks for cache key inclusion.
* Handles all body types: string, Uint8Array, ReadableStream, FormData, Blob,
* and Request object bodies.
* Returns the serialized body chunks and optionally stashes the original body
* on init as `_ogBody` so it can still be used after stream consumption.
*/
async function serializeBody(input, init) {
	if (!init?.body && !(input instanceof Request && input.body)) return { bodyChunks: [] };
	const bodyChunks = [];
	const encoder = new TextEncoder();
	const decoder = new TextDecoder();
	let totalBodyBytes = 0;
	let canonicalizedContentType;
	const pushBodyChunk = (chunk) => {
		totalBodyBytes += encoder.encode(chunk).byteLength;
		if (totalBodyBytes > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		bodyChunks.push(chunk);
	};
	const getTotalBodyBytes = () => totalBodyBytes;
	if (init?.body instanceof Uint8Array) {
		if (init.body.byteLength > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(decoder.decode(init.body));
		init._ogBody = init.body;
	} else if (init?.body && typeof init.body.getReader === "function") {
		const [bodyForHashing, bodyForFetch] = init.body.tee();
		init._ogBody = bodyForFetch;
		const reader = bodyForHashing.getReader();
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				if (typeof value === "string") pushBodyChunk(value);
				else {
					totalBodyBytes += value.byteLength;
					if (totalBodyBytes > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
					bodyChunks.push(decoder.decode(value, { stream: true }));
				}
			}
			const finalChunk = decoder.decode();
			if (finalChunk) pushBodyChunk(finalChunk);
		} catch (err) {
			await reader.cancel();
			if (err instanceof BodyTooLargeForCacheKeyError) throw err;
			throw new SkipCacheKeyGenerationError();
		}
	} else if (init?.body instanceof URLSearchParams) {
		init._ogBody = init.body;
		pushBodyChunk(init.body.toString());
	} else if (init?.body && typeof init.body.keys === "function") {
		const formData = init.body;
		init._ogBody = init.body;
		await serializeFormData(formData, pushBodyChunk, getTotalBodyBytes);
	} else if (init?.body && typeof init.body.arrayBuffer === "function") {
		const blob = init.body;
		if (blob.size > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(await blob.text());
		const arrayBuffer = await blob.arrayBuffer();
		init._ogBody = new Blob([arrayBuffer], { type: blob.type });
	} else if (typeof init?.body === "string") {
		if (init.body.length > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(init.body);
		init._ogBody = init.body;
	} else if (input instanceof Request && input.body) {
		let chunks;
		let contentType;
		try {
			({chunks, contentType} = await readRequestBodyChunksWithinLimit(input));
		} catch (err) {
			if (err instanceof BodyTooLargeForCacheKeyError) throw err;
			throw new SkipCacheKeyGenerationError();
		}
		const formContentType = getParsedFormContentType(contentType);
		if (formContentType) try {
			await serializeFormData(await new Request(input.url, {
				method: input.method,
				headers: contentType ? { "content-type": contentType } : void 0,
				body: new Blob(chunks)
			}).formData(), pushBodyChunk, getTotalBodyBytes);
			canonicalizedContentType = formContentType === "multipart/form-data" && contentType ? stripMultipartBoundary(contentType) : void 0;
			return {
				bodyChunks,
				canonicalizedContentType
			};
		} catch (err) {
			if (err instanceof BodyTooLargeForCacheKeyError) throw err;
			throw new SkipCacheKeyGenerationError();
		}
		for (const chunk of chunks) pushBodyChunk(decoder.decode(chunk, { stream: true }));
		const finalChunk = decoder.decode();
		if (finalChunk) pushBodyChunk(finalChunk);
	}
	return {
		bodyChunks,
		canonicalizedContentType
	};
}
/**
* Generate a deterministic cache key from a fetch request.
*
* Matches Next.js behavior: the key is a SHA-256 hash of a JSON array
* containing URL, method, all headers (minus blocklist), all RequestInit
* options, and the serialized body.
*/
async function buildFetchCacheKey(input, init) {
	let url;
	let method = "GET";
	if (typeof input === "string") url = input;
	else if (input instanceof URL) url = input.toString();
	else {
		url = input.url;
		method = input.method || "GET";
	}
	if (init?.method) method = init.method;
	const headers = collectHeaders(input, init);
	const { bodyChunks, canonicalizedContentType } = await serializeBody(input, init);
	if (canonicalizedContentType) headers["content-type"] = canonicalizedContentType;
	const cacheString = JSON.stringify([
		CACHE_KEY_PREFIX,
		url,
		method,
		headers,
		init?.mode,
		init?.redirect,
		init?.credentials,
		init?.referrer,
		init?.referrerPolicy,
		init?.integrity,
		init?.cache,
		bodyChunks
	]);
	const buffer = new TextEncoder().encode(cacheString);
	const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
	return Array.prototype.map.call(new Uint8Array(hashBuffer), (b) => b.toString(16).padStart(2, "0")).join("");
}
var _PENDING_KEY = Symbol.for("vinext.fetchCache.pendingRefetches");
var _gPending = globalThis;
var pendingRefetches = _gPending[_PENDING_KEY] ??= /* @__PURE__ */ new Map();
var DEDUP_TIMEOUT_MS = 6e4;
var _ORIG_FETCH_KEY = Symbol.for("vinext.fetchCache.originalFetch");
var _gFetch = globalThis;
var originalFetch = _gFetch[_ORIG_FETCH_KEY] ??= globalThis.fetch;
var _FALLBACK_KEY$2 = Symbol.for("vinext.fetchCache.fallback");
var _g$4 = globalThis;
var _als$1 = getOrCreateAls("vinext.fetchCache.als");
var _noop = () => {};
var _responseBodyRegistry;
if (globalThis.FinalizationRegistry) _responseBodyRegistry = new FinalizationRegistry((weakRef) => {
	const stream = weakRef.deref();
	if (stream && !stream.locked) stream.cancel("Response object has been garbage collected").then(_noop, _noop);
});
var _fallbackState$2 = _g$4[_FALLBACK_KEY$2] ??= {
	currentRequestTags: [],
	currentFetchSoftTags: [],
	currentFetchCacheMode: null,
	isFetchDedupeActive: false,
	currentFetchDedupeEntries: /* @__PURE__ */ new Map()
};
function _getState$1() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als$1.getStore() ?? _fallbackState$2;
}
/**
* Get tags collected during the current render pass.
* Useful for associating page-level cache entries with all the
* fetch tags used during rendering.
*/
function getCollectedFetchTags() {
	return [..._getState$1().currentRequestTags];
}
/**
* Set path-derived implicit tags for fetch cache reads in the current render.
*
* These are intentionally not persisted on fetch entries. They mirror Next.js
* `softTags`: `revalidatePath()` should make a fetch miss while rendering the
* affected route, without permanently coupling a shared fetch entry to one path.
*/
function setCurrentFetchSoftTags(tags) {
	_getState$1().currentFetchSoftTags = [...tags];
}
function setCurrentFetchCacheMode(mode) {
	_getState$1().currentFetchCacheMode = mode;
}
function isNoStoreFetch(cacheDirective, nextOpts) {
	return cacheDirective === "no-store" || cacheDirective === "no-cache" || nextOpts?.revalidate === false || nextOpts?.revalidate === 0;
}
function isCacheableFetch(cacheDirective, nextOpts) {
	return cacheDirective === "force-cache" || typeof nextOpts?.revalidate === "number" && nextOpts.revalidate > 0;
}
function hasExplicitRevalidateValue(nextOpts) {
	return nextOpts?.revalidate !== void 0;
}
function resolveSegmentCacheDirective(cacheDirective, nextOpts, mode) {
	if (!mode || mode === "auto") return cacheDirective;
	switch (mode) {
		case "force-cache": return "force-cache";
		case "force-no-store": return "no-store";
		case "only-cache":
			if (isNoStoreFetch(cacheDirective, nextOpts)) throw new Error("Route segment config `fetchCache = \"only-cache\"` conflicts with no-store fetch.");
			return cacheDirective ?? "force-cache";
		case "only-no-store":
			if (isCacheableFetch(cacheDirective, nextOpts)) throw new Error("Route segment config `fetchCache = \"only-no-store\"` conflicts with cacheable fetch.");
			return cacheDirective ?? "no-store";
		case "default-cache": return cacheDirective ?? (hasExplicitRevalidateValue(nextOpts) ? void 0 : "force-cache");
		case "default-no-store": return cacheDirective ?? (hasExplicitRevalidateValue(nextOpts) ? void 0 : "no-store");
	}
	return cacheDirective;
}
function getFetchCacheDirective(input, init) {
	if (init?.cache !== void 0) return init.cache;
	if (!(input instanceof Request) || input.cache === "default") return;
	return input.cache;
}
function buildFetchDedupeKey(request) {
	const filteredHeaders = Array.from(request.headers.entries()).filter(([key]) => !HEADER_BLOCKLIST.includes(key.toLowerCase()));
	return JSON.stringify([
		request.method,
		filteredHeaders,
		request.mode,
		request.redirect,
		request.credentials,
		request.referrer,
		request.referrerPolicy,
		request.integrity
	]);
}
function createFetchDedupeCandidate(input, init) {
	if (init?.signal) return null;
	const method = init?.method?.toUpperCase();
	if (method && method !== "GET" && method !== "HEAD") return null;
	if (init?.keepalive) return null;
	const request = typeof input === "string" || input instanceof URL ? new Request(input, init) : input;
	if (request.method !== "GET" && request.method !== "HEAD" || request.keepalive) return null;
	return {
		url: request.url,
		key: buildFetchDedupeKey(request)
	};
}
function buildDedupeClone(body, source) {
	const cloned = new Response(body, {
		status: source.status,
		statusText: source.statusText,
		headers: new Headers(source.headers)
	});
	Object.defineProperty(cloned, "url", {
		value: source.url,
		configurable: true,
		enumerable: true,
		writable: false
	});
	if (_responseBodyRegistry && cloned.body) _responseBodyRegistry.register(cloned, new WeakRef(cloned.body));
	return cloned;
}
function cloneDedupeResponse(response) {
	if (!response.body) return [buildDedupeClone(null, response), buildDedupeClone(null, response)];
	const [body1, body2] = response.body.tee();
	return [buildDedupeClone(body1, response), buildDedupeClone(body2, response)];
}
function dedupeFetch(input, init) {
	const state = _getState$1();
	if (!state.isFetchDedupeActive) return originalFetch(input, init);
	const candidate = createFetchDedupeCandidate(input, init);
	if (!candidate) return originalFetch(input, init);
	const entriesByUrl = state.currentFetchDedupeEntries;
	let entries = entriesByUrl.get(candidate.url);
	if (!entries) {
		entries = [];
		entriesByUrl.set(candidate.url, entries);
	}
	for (const entry of entries) {
		if (entry.key !== candidate.key) continue;
		return entry.promise.then(() => {
			if (!entry.response) throw new Error("[vinext] Missing deduped fetch response");
			const [responseForCaller, responseForFutureCaller] = cloneDedupeResponse(entry.response);
			entry.response = responseForFutureCaller;
			return responseForCaller;
		});
	}
	const promise = originalFetch(input, init);
	const entry = {
		key: candidate.key,
		promise,
		response: null
	};
	entries.push(entry);
	return promise.then((response) => {
		const [responseForCaller, responseForFutureCaller] = cloneDedupeResponse(response);
		entry.response = responseForFutureCaller;
		return responseForCaller;
	}, (err) => {
		const idx = entries.indexOf(entry);
		if (idx !== -1) entries.splice(idx, 1);
		throw err;
	});
}
/**
* Create a patched fetch function with Next.js caching semantics.
*
* The patched fetch:
* 1. Checks `cache` and `next` options to determine caching behavior
* 2. On cache hit, returns the cached response without hitting the network
* 3. On cache miss, fetches from network, stores in cache, returns response
* 4. Respects `next.revalidate` for TTL-based revalidation
* 5. Respects `next.tags` for tag-based invalidation via revalidateTag()
*/
function createPatchedFetch() {
	return async function patchedFetch(input, init) {
		const nextOpts = init?.next;
		const cacheDirective = resolveSegmentCacheDirective(getFetchCacheDirective(input, init), nextOpts, _getState$1().currentFetchCacheMode);
		if (!nextOpts && !cacheDirective) return dedupeFetch(input, init);
		if (cacheDirective === "no-store" || cacheDirective === "no-cache" || nextOpts?.revalidate === false || nextOpts?.revalidate === 0) return dedupeFetch(input, stripNextFromInit(init, cacheDirective));
		if (!(cacheDirective === "force-cache" || typeof nextOpts?.revalidate === "number" && nextOpts.revalidate > 0) && hasAuthHeaders(input, init)) return dedupeFetch(input, stripNextFromInit(init, cacheDirective));
		let revalidateSeconds;
		if (cacheDirective === "force-cache") revalidateSeconds = nextOpts?.revalidate && typeof nextOpts.revalidate === "number" ? nextOpts.revalidate : 31536e3;
		else if (typeof nextOpts?.revalidate === "number" && nextOpts.revalidate > 0) revalidateSeconds = nextOpts.revalidate;
		else if (nextOpts?.tags && nextOpts.tags.length > 0) revalidateSeconds = 31536e3;
		else return dedupeFetch(input, stripNextFromInit(init, cacheDirective));
		const tags = encodeCacheTags(nextOpts?.tags ?? []);
		const softTags = _getState$1().currentFetchSoftTags;
		let fetchInit = stripNextFromInit(init, cacheDirective);
		let cacheKey;
		try {
			cacheKey = await buildFetchCacheKey(input, fetchInit);
			fetchInit = stripNextFromInit(fetchInit, cacheDirective);
		} catch (err) {
			if (err instanceof BodyTooLargeForCacheKeyError || err instanceof SkipCacheKeyGenerationError) {
				fetchInit = stripNextFromInit(fetchInit, cacheDirective);
				return dedupeFetch(input, fetchInit);
			}
			throw err;
		}
		const handler = getCacheHandler();
		const reqTags = _getState$1().currentRequestTags;
		if (tags.length > 0) {
			for (const tag of tags) if (!reqTags.includes(tag)) reqTags.push(tag);
		}
		try {
			const cached = await handler.get(cacheKey, {
				kind: "FETCH",
				tags,
				softTags
			});
			if (cached?.value && cached.value.kind === "FETCH" && cached.cacheState !== "stale") {
				const cachedData = cached.value.data;
				return new Response(cachedData.body, {
					status: cachedData.status ?? 200,
					headers: cachedData.headers
				});
			}
			if (cached?.value && cached.value.kind === "FETCH" && cached.cacheState === "stale") {
				const staleData = cached.value.data;
				if (!pendingRefetches.has(cacheKey)) {
					const refetchPromise = originalFetch(input, fetchInit).then(async (freshResp) => {
						if (freshResp.status !== 200) return;
						const freshBody = await freshResp.text();
						const freshHeaders = {};
						freshResp.headers.forEach((v, k) => {
							if (k.toLowerCase() === "set-cookie") return;
							freshHeaders[k] = v;
						});
						const freshValue = {
							kind: "FETCH",
							data: {
								headers: freshHeaders,
								body: freshBody,
								url: typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url,
								status: freshResp.status
							},
							tags,
							revalidate: revalidateSeconds
						};
						await handler.set(cacheKey, freshValue, {
							fetchCache: true,
							tags,
							revalidate: revalidateSeconds
						});
					}).catch((err) => {
						const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
						console.error(`[vinext] fetch cache background revalidation failed for ${url} (key=${cacheKey.slice(0, 12)}...):`, err);
					}).finally(() => {
						if (pendingRefetches.get(cacheKey) === refetchPromise) pendingRefetches.delete(cacheKey);
						clearTimeout(timeoutId);
					});
					pendingRefetches.set(cacheKey, refetchPromise);
					const timeoutId = setTimeout(() => {
						if (pendingRefetches.get(cacheKey) === refetchPromise) pendingRefetches.delete(cacheKey);
					}, DEDUP_TIMEOUT_MS);
					getRequestExecutionContext()?.waitUntil(refetchPromise);
				}
				return new Response(staleData.body, {
					status: staleData.status ?? 200,
					headers: staleData.headers
				});
			}
		} catch (cacheErr) {
			console.error("[vinext] fetch cache read error:", cacheErr);
		}
		const response = await dedupeFetch(input, fetchInit);
		if (response.status === 200) {
			const cloned = response.clone();
			const body = await cloned.text();
			const headers = {};
			cloned.headers.forEach((v, k) => {
				if (k.toLowerCase() === "set-cookie") return;
				headers[k] = v;
			});
			const cacheValue = {
				kind: "FETCH",
				data: {
					headers,
					body,
					url: typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url,
					status: cloned.status
				},
				tags,
				revalidate: revalidateSeconds
			};
			handler.set(cacheKey, cacheValue, {
				fetchCache: true,
				tags,
				revalidate: revalidateSeconds
			}).catch((err) => {
				console.error("[vinext] fetch cache write error:", err);
			});
		}
		return response;
	};
}
/**
* Strip the `next` property from RequestInit before passing to real fetch.
* The `next` property is not a standard fetch option and would cause warnings
* in some environments.
*/
function stripNextFromInit(init, cacheOverride) {
	if (!init) return cacheOverride === void 0 ? void 0 : { cache: cacheOverride };
	const { next: _next, _ogBody, ...rest } = init;
	if (cacheOverride !== void 0) rest.cache = cacheOverride;
	if (_ogBody !== void 0) rest.body = _ogBody;
	return Object.keys(rest).length > 0 ? rest : void 0;
}
var _PATCH_KEY = Symbol.for("vinext.fetchCache.patchInstalled");
function _ensurePatchInstalled() {
	if (_g$4[_PATCH_KEY]) return;
	_g$4[_PATCH_KEY] = true;
	globalThis.fetch = createPatchedFetch();
}
function runWithFetchDedupe(fn) {
	_ensurePatchInstalled();
	const state = _getState$1();
	if (state.isFetchDedupeActive) return fn();
	if (isInsideUnifiedScope()) return runWithUnifiedStateMutation((uCtx) => {
		uCtx.isFetchDedupeActive = true;
		uCtx.currentFetchDedupeEntries = /* @__PURE__ */ new Map();
	}, fn);
	return _als$1.run({
		...state,
		isFetchDedupeActive: true,
		currentFetchDedupeEntries: /* @__PURE__ */ new Map()
	}, fn);
}
/**
* Install the patched fetch without creating a standalone ALS scope.
*
* `runWithFetchCache()` is the standalone helper: it installs the patch and
* creates an isolated per-request tag store. The unified request context owns
* that isolation itself via `currentRequestTags`, so callers inside
* `runWithRequestContext()` only need the process-global fetch monkey-patch.
*/
function ensureFetchPatch() {
	_ensurePatchInstalled();
}
var ESCAPE_REGEX = /[&><\u2028\u2029]/;
function matchesDirectiveName(directive, name) {
	return directive === name || directive.startsWith(`${name} `);
}
function getScriptNonceFromHeader(cspHeaderValue) {
	const directives = cspHeaderValue.split(";").map((directive) => directive.trim());
	const directive = directives.find((value) => matchesDirectiveName(value, "script-src")) ?? directives.find((value) => matchesDirectiveName(value, "default-src"));
	if (!directive) return;
	const nonce = directive.split(" ").slice(1).map((source) => source.trim()).find((source) => source.startsWith("'nonce-") && source.length > 8 && source.endsWith("'"))?.slice(7, -1);
	if (!nonce) return;
	if (ESCAPE_REGEX.test(nonce)) throw new Error("Nonce value from Content-Security-Policy contained HTML escape characters.\nLearn more: https://nextjs.org/docs/messages/nonce-contained-invalid-characters");
	return nonce;
}
function getScriptNonceFromHeaders(headers) {
	const csp = headers?.get("content-security-policy") ?? headers?.get("content-security-policy-report-only");
	if (!csp) return;
	return getScriptNonceFromHeader(csp);
}
function getScriptNonceFromHeaderSources(...headersList) {
	for (const headers of headersList) {
		const nonce = getScriptNonceFromHeaders(headers);
		if (nonce) return nonce;
	}
}
var ADDITIVE_RESPONSE_HEADER_NAMES = new Set(["set-cookie", "vary"]);
function mergeVaryHeader(target, value) {
	const existing = target.get("Vary");
	const tokens = (existing ? `${existing}, ${value}` : value).split(",").map((token) => token.trim()).filter((token) => token.length > 0);
	if (tokens.some((token) => token === "*")) {
		target.set("Vary", "*");
		return;
	}
	const seen = /* @__PURE__ */ new Set();
	const merged = [];
	for (const token of tokens) {
		const normalized = token.toLowerCase();
		if (seen.has(normalized)) continue;
		seen.add(normalized);
		merged.push(token);
	}
	target.set("Vary", merged.join(", "));
}
/**
* Merge middleware response headers into a target Headers object.
*
* Set-Cookie and Vary are accumulated (append) since multiple sources can
* contribute values. All other headers use set() so middleware owns singular
* response headers like Cache-Control.
*/
function mergeMiddlewareResponseHeaders(target, middlewareHeaders) {
	if (!middlewareHeaders) return;
	for (const [key, value] of middlewareHeaders) {
		if (key.toLowerCase() === "vary") {
			mergeVaryHeader(target, value);
			continue;
		}
		if (ADDITIVE_RESPONSE_HEADER_NAMES.has(key.toLowerCase())) {
			target.append(key, value);
			continue;
		}
		target.set(key, value);
	}
}
var PATH_DELIMITER_REGEX = /([/#?\\]|%(2f|23|3f|5c))/gi;
function encodePathDelimiters(segment) {
	return segment.replace(PATH_DELIMITER_REGEX, (char) => encodeURIComponent(char));
}
/**
* Decode a filesystem or URL path segment while preserving encoded path delimiters.
* Mirrors Next.js segment-wise decoding so "%5F" becomes "_" but "%2F" stays "%2F".
*/
function decodeRouteSegment(segment) {
	try {
		return encodePathDelimiters(decodeURIComponent(segment));
	} catch {
		return segment;
	}
}
/**
* Strict variant for request pipelines that should reject malformed percent-encoding.
*/
function decodeRouteSegmentStrict(segment) {
	return encodePathDelimiters(decodeURIComponent(segment));
}
/**
* Normalize a pathname for route matching by decoding each segment independently.
* This prevents encoded slashes from turning into real path separators.
*/
function normalizePathnameForRouteMatch(pathname) {
	return pathname.split("/").map((segment) => decodeRouteSegment(segment)).join("/");
}
/**
* Strict pathname normalization for live request handling.
* Throws on malformed percent-encoding so callers can return 400.
*/
function normalizePathnameForRouteMatchStrict(pathname) {
	return pathname.split("/").map((segment) => decodeRouteSegmentStrict(segment)).join("/");
}
function decodeMatchedParam(value) {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
}
/**
* Decode captured route params with `decodeURIComponent`, mirroring Next.js
* route-matcher.ts:25-27. Mutates the params object in place. Catch-all
* arrays are decoded element-wise. Malformed escapes are preserved (the
* strict normalization layer rejects them at the request boundary).
*/
function decodeMatchedParams(params) {
	for (const key of Object.keys(params)) {
		const value = params[key];
		if (Array.isArray(value)) params[key] = value.map(decodeMatchedParam);
		else params[key] = decodeMatchedParam(value);
	}
}
var NextRequest = class extends Request {
	_nextUrl;
	_url;
	_cookies;
	constructor(input, init) {
		const { nextConfig: _nextConfig, ...requestInit } = init ?? {};
		if (input instanceof Request) {
			const requestInput = requestInit.body === void 0 && input.body && !input.bodyUsed ? input.clone() : input;
			super(requestInput, requestInit);
		} else super(input, requestInit);
		const url = typeof input === "string" ? new URL(input, "http://localhost") : input instanceof URL ? input : new URL(input.url, "http://localhost");
		const urlConfig = _nextConfig ? {
			basePath: _nextConfig.basePath,
			nextConfig: { i18n: _nextConfig.i18n }
		} : void 0;
		this._nextUrl = new NextURL(url, void 0, urlConfig);
		this._url = process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url.toString() : this._nextUrl.toString();
		this._cookies = new RequestCookies(this.headers);
	}
	get nextUrl() {
		return this._nextUrl;
	}
	get url() {
		return this._url;
	}
	get cookies() {
		return this._cookies;
	}
	/**
	* Client IP address. Prefers Cloudflare's trusted CF-Connecting-IP header
	* over the spoofable X-Forwarded-For. Returns undefined if unavailable.
	*/
	get ip() {
		return this.headers.get("cf-connecting-ip") ?? this.headers.get("x-real-ip") ?? this.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? void 0;
	}
	/**
	* Geolocation data. Platform-dependent (e.g., Cloudflare, Vercel).
	* Returns undefined if not available.
	*/
	get geo() {
		const country = this.headers.get("cf-ipcountry") ?? this.headers.get("x-vercel-ip-country") ?? void 0;
		if (!country) return void 0;
		return {
			country,
			city: this.headers.get("cf-ipcity") ?? this.headers.get("x-vercel-ip-city") ?? void 0,
			region: this.headers.get("cf-region") ?? this.headers.get("x-vercel-ip-country-region") ?? void 0,
			latitude: this.headers.get("cf-iplatitude") ?? this.headers.get("x-vercel-ip-latitude") ?? void 0,
			longitude: this.headers.get("cf-iplongitude") ?? this.headers.get("x-vercel-ip-longitude") ?? void 0
		};
	}
	/**
	* The build ID of the Next.js application.
	* Delegates to `nextUrl.buildId` to match Next.js API surface.
	* Can be used in middleware to detect deployment skew between client and server.
	*/
	get buildId() {
		return this._nextUrl.buildId;
	}
};
var NextURL = class NextURL {
	/** Internal URL stores the pathname WITHOUT basePath or locale prefix. */
	_url;
	_basePath;
	_locale;
	_defaultLocale;
	_locales;
	constructor(input, base, config) {
		this._url = new URL(input.toString(), base);
		this._basePath = config?.basePath ?? "";
		this._stripBasePath();
		const i18n = config?.nextConfig?.i18n;
		if (i18n) {
			this._locales = [...i18n.locales];
			this._defaultLocale = i18n.defaultLocale;
			this._analyzeLocale(this._locales);
		}
	}
	/** Strip basePath prefix from the internal pathname. */
	_stripBasePath() {
		if (!this._basePath) return;
		this._url.pathname = stripBasePath(this._url.pathname, this._basePath);
	}
	/** Extract locale from pathname, stripping it from the internal URL. */
	_analyzeLocale(locales) {
		const segments = this._url.pathname.split("/");
		const candidate = segments[1]?.toLowerCase();
		const match = locales.find((l) => l.toLowerCase() === candidate);
		if (match) {
			this._locale = match;
			this._url.pathname = "/" + segments.slice(2).join("/");
		} else this._locale = this._defaultLocale;
	}
	/**
	* Reconstruct the full pathname with basePath + locale prefix.
	* Mirrors Next.js's internal formatPathname().
	*/
	_formatPathname() {
		let prefix = this._basePath;
		if (this._locale && this._locale !== this._defaultLocale) prefix += "/" + this._locale;
		if (!prefix) return this._url.pathname;
		const inner = this._url.pathname;
		return inner === "/" ? prefix : prefix + inner;
	}
	get href() {
		const formatted = this._formatPathname();
		if (formatted === this._url.pathname) return this._url.href;
		const { href, pathname, search, hash } = this._url;
		const baseEnd = href.length - pathname.length - search.length - hash.length;
		return href.slice(0, baseEnd) + formatted + search + hash;
	}
	set href(value) {
		this._url.href = value;
		this._stripBasePath();
		if (this._locales) this._analyzeLocale(this._locales);
	}
	get origin() {
		return this._url.origin;
	}
	get protocol() {
		return this._url.protocol;
	}
	set protocol(value) {
		this._url.protocol = value;
	}
	get username() {
		return this._url.username;
	}
	set username(value) {
		this._url.username = value;
	}
	get password() {
		return this._url.password;
	}
	set password(value) {
		this._url.password = value;
	}
	get host() {
		return this._url.host;
	}
	set host(value) {
		this._url.host = value;
	}
	get hostname() {
		return this._url.hostname;
	}
	set hostname(value) {
		this._url.hostname = value;
	}
	get port() {
		return this._url.port;
	}
	set port(value) {
		this._url.port = value;
	}
	/** Returns the pathname WITHOUT basePath or locale prefix. */
	get pathname() {
		return this._url.pathname;
	}
	set pathname(value) {
		this._url.pathname = value;
	}
	get search() {
		return this._url.search;
	}
	set search(value) {
		this._url.search = value;
	}
	get searchParams() {
		return this._url.searchParams;
	}
	get hash() {
		return this._url.hash;
	}
	set hash(value) {
		this._url.hash = value;
	}
	get basePath() {
		return this._basePath;
	}
	set basePath(value) {
		this._basePath = value === "" ? "" : value.startsWith("/") ? value : "/" + value;
	}
	get locale() {
		return this._locale ?? "";
	}
	set locale(value) {
		if (this._locales) {
			if (!value) {
				this._locale = this._defaultLocale;
				return;
			}
			if (!this._locales.includes(value)) throw new TypeError(`The locale "${value}" is not in the configured locales: ${this._locales.join(", ")}`);
		}
		this._locale = this._locales ? value : this._locale;
	}
	get defaultLocale() {
		return this._defaultLocale;
	}
	get locales() {
		return this._locales ? [...this._locales] : void 0;
	}
	clone() {
		const config = {
			basePath: this._basePath,
			nextConfig: this._locales ? { i18n: {
				locales: [...this._locales],
				defaultLocale: this._defaultLocale
			} } : void 0
		};
		return new NextURL(this.href, void 0, config);
	}
	toString() {
		return this.href;
	}
	/**
	* The build ID of the Next.js application.
	* Set from `generateBuildId` in next.config.js, or a random UUID if not configured.
	* Can be used in middleware to detect deployment skew between client and server.
	* Matches the Next.js API: `request.nextUrl.buildId`.
	*/
	get buildId() {
		return "d90292b9-b3d4-4272-a766-82e8411e829e";
	}
};
var RequestCookies = class {
	_headers;
	_parsed;
	constructor(headers) {
		this._headers = headers;
		this._parsed = parseCookieHeader(headers.get("cookie") ?? "");
	}
	get(name) {
		const value = this._parsed.get(name);
		return value !== void 0 ? {
			name,
			value
		} : void 0;
	}
	getAll(nameOrOptions) {
		const name = typeof nameOrOptions === "string" ? nameOrOptions : nameOrOptions?.name;
		return [...this._parsed.entries()].filter(([cookieName]) => name === void 0 || cookieName === name).map(([cookieName, value]) => ({
			name: cookieName,
			value
		}));
	}
	has(name) {
		return this._parsed.has(name);
	}
	set(nameOrOptions, value) {
		let cookieName;
		let cookieValue;
		if (typeof nameOrOptions === "string") {
			cookieName = nameOrOptions;
			cookieValue = value ?? "";
		} else {
			cookieName = nameOrOptions.name;
			cookieValue = nameOrOptions.value;
		}
		validateCookieName(cookieName);
		this._parsed.set(cookieName, cookieValue);
		this._syncHeader();
		return this;
	}
	delete(names) {
		if (Array.isArray(names)) {
			const results = names.map((name) => {
				validateCookieName(name);
				return this._parsed.delete(name);
			});
			this._syncHeader();
			return results;
		}
		validateCookieName(names);
		const result = this._parsed.delete(names);
		this._syncHeader();
		return result;
	}
	clear() {
		this._parsed.clear();
		this._syncHeader();
		return this;
	}
	get size() {
		return this._parsed.size;
	}
	toString() {
		return this._serialize();
	}
	_serialize() {
		return [...this._parsed.entries()].map(([n, v]) => `${n}=${encodeURIComponent(v)}`).join("; ");
	}
	_syncHeader() {
		if (this._parsed.size === 0) this._headers.delete("cookie");
		else this._headers.set("cookie", this._serialize());
	}
	[Symbol.iterator]() {
		return this.getAll().map((c) => [c.name, c])[Symbol.iterator]();
	}
};
var ReadonlyRequestCookiesError = class ReadonlyRequestCookiesError extends Error {
	constructor() {
		super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
	}
	static callable() {
		throw new ReadonlyRequestCookiesError();
	}
};
var REQUEST_HEADERS_MUTATING_METHODS = new Set([
	"set",
	"delete",
	"append"
]);
var ReadonlyRequestHeadersError = class ReadonlyRequestHeadersError extends Error {
	constructor() {
		super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
	}
	static callable() {
		throw new ReadonlyRequestHeadersError();
	}
};
function sealRequestHeaders(headers) {
	return new Proxy(headers, { get(target, prop) {
		if (typeof prop === "string" && REQUEST_HEADERS_MUTATING_METHODS.has(prop)) return ReadonlyRequestHeadersError.callable;
		const value = Reflect.get(target, prop, target);
		return typeof value === "function" ? value.bind(target) : value;
	} });
}
function sealRequestCookies(cookies) {
	return new Proxy(cookies, { get(target, prop) {
		if (prop === "set" || prop === "delete" || prop === "clear") return ReadonlyRequestCookiesError.callable;
		const value = Reflect.get(target, prop, target);
		return typeof value === "function" ? value.bind(target) : value;
	} });
}
/**
* Minimal NextFetchEvent — extends FetchEvent where available,
* otherwise provides the waitUntil pattern standalone.
*/
var NextFetchEvent = class {
	sourcePage;
	_waitUntilPromises = [];
	constructor(params) {
		this.sourcePage = params.page;
	}
	waitUntil(promise) {
		this._waitUntilPromises.push(promise);
	}
	get waitUntilPromises() {
		return this._waitUntilPromises;
	}
	/** Drain all waitUntil promises. Returns a single promise that settles when all are done. */
	drainWaitUntil() {
		return Promise.allSettled(this._waitUntilPromises);
	}
};
globalThis.URLPattern;
/**
* Path normalization utility for request handling.
*
* Normalizes URL pathnames to a canonical form BEFORE any matching occurs
* (middleware, routing, redirects, rewrites). This ensures middleware and
* the router always see the same path, preventing path-confusion issues like
* double-slash mismatches.
*
* Normalization rules:
*  1. Collapse consecutive slashes: //foo///bar → /foo/bar
*  2. Resolve single-dot segments:  /foo/./bar  → /foo/bar
*  3. Resolve double-dot segments:  /foo/../bar → /bar
*  4. Ensure leading slash:         foo/bar     → /foo/bar
*  5. Preserve root:                /           → /
*
* This function does NOT:
*  - Strip or add trailing slashes (handled separately by trailingSlash config)
*  - Decode percent-encoded characters (callers should decode before calling this)
*  - Lowercase the path (route matching is case-sensitive)
*/
function normalizePath(pathname) {
	if (pathname === "/" || pathname.length > 1 && pathname[0] === "/" && !pathname.includes("//") && !pathname.includes("/./") && !pathname.includes("/../") && !pathname.endsWith("/.") && !pathname.endsWith("/..")) return pathname;
	const segments = pathname.split("/");
	const resolved = [];
	for (const segment of segments) {
		if (segment === "" || segment === ".") continue;
		if (segment === "..") resolved.pop();
		else resolved.push(segment);
	}
	return "/" + resolved.join("/");
}
var EMPTY_MIDDLEWARE_REQUEST_CONTEXT = {
	headers: new Headers(),
	cookies: {},
	query: new URLSearchParams(),
	host: ""
};
var _mwPatternCache = /* @__PURE__ */ new Map();
function matchesMiddleware(pathname, matcher, request, i18nConfig) {
	if (!matcher) return true;
	if (typeof matcher === "string") return matchMatcherPattern(pathname, matcher, i18nConfig);
	if (!Array.isArray(matcher)) return false;
	const requestContext = request ? requestContextFromRequest(request) : EMPTY_MIDDLEWARE_REQUEST_CONTEXT;
	for (const m of matcher) {
		if (typeof m === "string") {
			if (matchMatcherPattern(pathname, m, i18nConfig)) return true;
			continue;
		}
		if (isValidMiddlewareMatcherObject(m)) {
			if (!matchObjectMatcher(pathname, m, i18nConfig)) continue;
			if (!checkHasConditions(m.has, m.missing, requestContext)) continue;
			return true;
		}
	}
	return false;
}
function isValidMiddlewareMatcherObject(value) {
	if (!value || typeof value !== "object" || Array.isArray(value)) return false;
	if (!("source" in value) || typeof value.source !== "string") return false;
	for (const key of Object.keys(value)) if (key !== "source" && key !== "locale" && key !== "has" && key !== "missing") return false;
	if ("locale" in value && value.locale !== void 0 && value.locale !== false) return false;
	if ("has" in value && value.has !== void 0 && !Array.isArray(value.has)) return false;
	if ("missing" in value && value.missing !== void 0 && !Array.isArray(value.missing)) return false;
	return true;
}
function matchMatcherPattern(pathname, pattern, i18nConfig) {
	if (!i18nConfig) return matchPattern(pathname, pattern);
	return matchPattern(stripLocalePrefix(pathname, i18nConfig) ?? pathname, pattern);
}
function matchObjectMatcher(pathname, matcher, i18nConfig) {
	return matcher.locale === false ? matchPattern(pathname, matcher.source) : matchMatcherPattern(pathname, matcher.source, i18nConfig);
}
function stripLocalePrefix(pathname, i18nConfig) {
	if (pathname === "/") return null;
	const segments = pathname.split("/");
	const firstSegment = segments[1];
	if (!firstSegment || !i18nConfig.locales.includes(firstSegment)) return null;
	return removeTrailingSlash("/" + segments.slice(2).join("/"));
}
function matchPattern(pathname, pattern) {
	let cached = _mwPatternCache.get(pattern);
	if (cached === void 0) {
		cached = compileMatcherPattern(pattern);
		_mwPatternCache.set(pattern, cached);
	}
	if (cached === null) return pathname === pattern;
	return cached.test(pathname);
}
function extractConstraint(str, re) {
	if (str[re.lastIndex] !== "(") return null;
	const start = re.lastIndex + 1;
	let depth = 1;
	let i = start;
	while (i < str.length && depth > 0) {
		if (str[i] === "(") depth++;
		else if (str[i] === ")") depth--;
		i++;
	}
	if (depth !== 0) return null;
	re.lastIndex = i;
	return str.slice(start, i - 1);
}
function compileMatcherPattern(pattern) {
	const hasConstraints = /:[\w-]+[*+]?\(/.test(pattern);
	if (!hasConstraints && (pattern.includes("(") || pattern.includes("\\"))) return safeRegExp("^" + pattern + "$");
	let regexStr = "";
	const tokenRe = /\/:([\w-]+)\*|\/:([\w-]+)\+|:([\w-]+)|[.]|[^/:.]+|./g;
	let tok;
	while ((tok = tokenRe.exec(pattern)) !== null) if (tok[1] !== void 0) {
		const constraint = hasConstraints ? extractConstraint(pattern, tokenRe) : null;
		regexStr += constraint !== null ? `(?:/(${constraint}))?` : "(?:/.*)?";
	} else if (tok[2] !== void 0) {
		const constraint = hasConstraints ? extractConstraint(pattern, tokenRe) : null;
		regexStr += constraint !== null ? `(?:/(${constraint}))` : "(?:/.+)";
	} else if (tok[3] !== void 0) {
		const constraint = hasConstraints ? extractConstraint(pattern, tokenRe) : null;
		const isOptional = pattern[tokenRe.lastIndex] === "?";
		if (isOptional) tokenRe.lastIndex += 1;
		const group = constraint !== null ? `(${constraint})` : "([^/]+)";
		if (isOptional && regexStr.endsWith("/")) regexStr = regexStr.slice(0, -1) + `(?:/${group})?`;
		else if (isOptional) regexStr += `${group}?`;
		else regexStr += group;
	} else if (tok[0] === ".") regexStr += "\\.";
	else regexStr += tok[0];
	return safeRegExp("^" + regexStr + "$");
}
function isMiddlewareHandler(value) {
	return typeof value === "function";
}
function isMiddlewareConfigExport(value) {
	return !!value && typeof value === "object";
}
function middlewareFileLabel(isProxy) {
	return isProxy ? "Proxy" : "Middleware";
}
function middlewareExpectedExport(isProxy) {
	return isProxy ? "proxy" : "middleware";
}
function resolveMiddlewareModuleHandler(mod, options) {
	const handler = options.isProxy ? mod.proxy ?? mod.default : mod.middleware ?? mod.default;
	if (isMiddlewareHandler(handler)) return handler;
	const fileLabel = middlewareFileLabel(options.isProxy);
	const expectedExport = middlewareExpectedExport(options.isProxy);
	const fileSuffix = options.filePath ? ` "${options.filePath}"` : "";
	throw new Error(`The ${fileLabel} file${fileSuffix} must export a function named \`${expectedExport}\` or a \`default\` function.`);
}
function middlewareMatcher(mod) {
	const config = mod.config;
	if (!isMiddlewareConfigExport(config)) return void 0;
	return config.matcher;
}
function stripMiddlewareHeadersFromResponse(response) {
	const headers = new Headers(response.headers);
	processMiddlewareHeaders(headers);
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
function collectMiddlewareHeaders(response) {
	const responseHeaders = new Headers();
	for (const [key, value] of response.headers) if (!key.startsWith("x-middleware-") || shouldKeepMiddlewareHeader(key)) responseHeaders.append(key, value);
	return responseHeaders;
}
function drainFetchEvent(fetchEvent) {
	const waitUntilPromises = fetchEvent.waitUntilPromises;
	const drained = fetchEvent.drainWaitUntil();
	const executionContext = getRequestExecutionContext();
	if (executionContext) executionContext.waitUntil(drained);
	return waitUntilPromises;
}
function resolveMiddlewarePathname(request) {
	const url = new URL(request.url);
	try {
		return normalizePath(normalizePathnameForRouteMatchStrict(url.pathname));
	} catch {
		return badRequestResponse();
	}
}
function createNextRequest(request, normalizedPathname, i18nConfig, basePath) {
	const url = new URL(request.url);
	let mwRequest = request.body && !request.bodyUsed ? request.clone() : request;
	if (normalizedPathname !== url.pathname) {
		const mwUrl = new URL(url);
		mwUrl.pathname = normalizedPathname;
		mwRequest = new Request(mwUrl, mwRequest);
	}
	const nextConfig = basePath || i18nConfig ? {
		basePath: basePath ?? "",
		i18n: i18nConfig ?? void 0
	} : void 0;
	return mwRequest instanceof NextRequest ? mwRequest : new NextRequest(mwRequest, nextConfig ? { nextConfig } : void 0);
}
async function executeMiddleware(options) {
	const middlewareFn = resolveMiddlewareModuleHandler(options.module, {
		filePath: options.filePath,
		isProxy: options.isProxy
	});
	const normalizedPathname = options.normalizedPathname ?? resolveMiddlewarePathname(options.request);
	if (normalizedPathname instanceof Response) return {
		continue: false,
		response: normalizedPathname
	};
	if (!matchesMiddleware(normalizedPathname, middlewareMatcher(options.module), options.request, options.i18nConfig)) return { continue: true };
	const nextRequest = createNextRequest(options.request, normalizedPathname, options.i18nConfig, options.basePath);
	const fetchEvent = new NextFetchEvent({ page: normalizedPathname });
	let response;
	try {
		response = await middlewareFn(nextRequest, fetchEvent);
	} catch (e) {
		console.error("[vinext] Middleware error:", e);
		const waitUntilPromises = drainFetchEvent(fetchEvent);
		return {
			continue: false,
			response: internalServerErrorResponse(options.includeErrorDetails ? "Middleware Error: " + (e instanceof Error ? e.message : String(e)) : "Internal Server Error"),
			waitUntilPromises
		};
	}
	const waitUntilPromises = drainFetchEvent(fetchEvent);
	if (!response) return {
		continue: true,
		waitUntilPromises
	};
	if (response.headers.get("x-middleware-next") === "1") return {
		continue: true,
		responseHeaders: collectMiddlewareHeaders(response),
		status: response.status !== 200 ? response.status : void 0,
		waitUntilPromises
	};
	if (response.status >= 300 && response.status < 400) {
		const location = response.headers.get("Location") ?? response.headers.get("location");
		if (location) {
			const responseHeaders = new Headers();
			for (const [key, value] of response.headers) if (!key.startsWith("x-middleware-") && key.toLowerCase() !== "location") responseHeaders.append(key, value);
			return {
				continue: false,
				redirectUrl: location,
				redirectStatus: response.status,
				response: stripMiddlewareHeadersFromResponse(response),
				responseHeaders,
				waitUntilPromises
			};
		}
	}
	const rewriteUrl = response.headers.get(MIDDLEWARE_REWRITE_HEADER);
	if (rewriteUrl) {
		let rewritePath;
		try {
			const rewriteParsed = new URL(rewriteUrl, options.request.url);
			const requestOrigin = new URL(options.request.url).origin;
			rewritePath = rewriteParsed.origin === requestOrigin ? rewriteParsed.pathname + rewriteParsed.search : rewriteParsed.href;
		} catch {
			rewritePath = rewriteUrl;
		}
		return {
			continue: true,
			rewriteUrl: rewritePath,
			rewriteStatus: response.status !== 200 ? response.status : void 0,
			responseHeaders: collectMiddlewareHeaders(response),
			status: response.status !== 200 ? response.status : void 0,
			waitUntilPromises
		};
	}
	return {
		continue: false,
		response: stripMiddlewareHeadersFromResponse(response),
		waitUntilPromises
	};
}
var FLIGHT_HEADER_SET = new Set(FLIGHT_HEADERS);
function requestWithoutFlightHeaders(request) {
	let hasFlightHeader = false;
	const headers = new Headers();
	for (const [key, value] of request.headers) if (FLIGHT_HEADER_SET.has(key.toLowerCase())) hasFlightHeader = true;
	else headers.append(key, value);
	if (!hasFlightHeader) return request;
	return cloneRequestWithHeaders(request.body ? request.clone() : request, headers);
}
function responseFromMiddlewareRedirect(result) {
	if (result.response) return result.response;
	const headers = new Headers(result.responseHeaders);
	if (result.redirectUrl) headers.set("Location", result.redirectUrl);
	return new Response(null, {
		status: result.redirectStatus ?? 307,
		headers
	});
}
function isExternalMiddlewareRewrite(rewriteUrl, request) {
	return new URL(rewriteUrl, request.url).origin !== new URL(request.url).origin;
}
function requestWithMiddlewareRequestHeaders(request, middlewareHeaders) {
	const nextHeaders = middlewareHeaders ? buildRequestHeadersFromMiddlewareResponse(request.headers, middlewareHeaders, { preserveCredentialHeaders: true }) : null;
	if (!nextHeaders) return request;
	const init = {
		method: request.method,
		headers: nextHeaders,
		body: request.body
	};
	if (request.body) Object.defineProperty(init, "duplex", {
		value: "half",
		enumerable: true
	});
	return new Request(request.url, init);
}
async function proxyExternalMiddlewareRewrite(request, rewriteUrl, context) {
	const proxyRequest = requestWithMiddlewareRequestHeaders(request, context.requestHeaders ?? context.headers);
	setHeadersContext(null);
	setNavigationContext(null);
	const proxyResponse = await proxyExternalRequest(proxyRequest, rewriteUrl);
	const headers = new Headers(proxyResponse.headers);
	processMiddlewareHeaders(headers);
	if (!context.headers) return new Response(proxyResponse.body, {
		status: proxyResponse.status,
		statusText: proxyResponse.statusText,
		headers
	});
	const middlewareHeaders = new Headers(context.headers);
	processMiddlewareHeaders(middlewareHeaders);
	mergeMiddlewareResponseHeaders(headers, middlewareHeaders);
	return new Response(proxyResponse.body, {
		status: proxyResponse.status,
		statusText: proxyResponse.statusText,
		headers
	});
}
function applyForwardedMiddlewareContext(request, context) {
	return { applied: false };
}
async function applyAppMiddleware(options) {
	const forwarded = applyForwardedMiddlewareContext(options.request, options.context);
	const middlewareRequest = requestWithoutFlightHeaders(options.request);
	let cleanPathname = options.cleanPathname;
	let search = null;
	if (forwarded.rewriteUrl) try {
		if (isExternalMiddlewareRewrite(forwarded.rewriteUrl, middlewareRequest)) return {
			kind: "response",
			response: await proxyExternalMiddlewareRewrite(middlewareRequest, forwarded.rewriteUrl, options.context)
		};
		const rewriteParsed = new URL(forwarded.rewriteUrl, middlewareRequest.url);
		cleanPathname = rewriteParsed.pathname;
		search = rewriteParsed.search;
	} catch (e) {
		console.error("[vinext] Failed to apply forwarded middleware rewrite:", e);
		forwarded.applied = false;
	}
	if (!forwarded.applied) {
		const result = await executeMiddleware({
			basePath: options.basePath,
			i18nConfig: options.i18nConfig,
			isProxy: options.isProxy,
			module: options.module,
			normalizedPathname: cleanPathname,
			request: middlewareRequest
		});
		if (!result.continue) {
			if (result.redirectUrl) return {
				kind: "response",
				response: responseFromMiddlewareRedirect(result)
			};
			if (result.response) return {
				kind: "response",
				response: result.response
			};
			return {
				kind: "response",
				response: internalServerErrorResponse()
			};
		}
		if (result.responseHeaders) options.context.headers = new Headers(result.responseHeaders);
		if (result.status !== void 0) options.context.status = result.status;
		if (result.rewriteUrl) {
			if (result.rewriteStatus !== void 0) options.context.status = result.rewriteStatus;
			if (isExternalUrl(result.rewriteUrl)) return {
				kind: "response",
				response: await proxyExternalMiddlewareRewrite(middlewareRequest, result.rewriteUrl, options.context)
			};
			const rewriteParsed = new URL(result.rewriteUrl, middlewareRequest.url);
			cleanPathname = rewriteParsed.pathname;
			search = rewriteParsed.search;
		}
	}
	if (options.context.headers) {
		options.context.requestHeaders = new Headers(options.context.headers);
		applyMiddlewareRequestHeaders(options.context.headers);
		processMiddlewareHeaders(options.context.headers);
	}
	return {
		kind: "continue",
		cleanPathname,
		search
	};
}
var NEVER_CACHE_CONTROL = "private, no-cache, no-store, max-age=0, must-revalidate";
var STATIC_CACHE_CONTROL = "s-maxage=31536000, stale-while-revalidate";
var STALE_REVALIDATE_CACHE_CONTROL = "s-maxage=0, stale-while-revalidate";
var NO_STORE_CACHE_CONTROL$1 = "no-store, must-revalidate";
/**
* Matches Next.js's `getCacheControlHeader` stale window semantics while
* preserving vinext's legacy unbounded SWR header when no expire ceiling is
* available yet.
*
* Next.js source:
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/lib/cache-control.ts
*/
function buildRevalidateCacheControl(revalidateSeconds, expireSeconds) {
	if (expireSeconds === void 0) return `s-maxage=${revalidateSeconds}, stale-while-revalidate`;
	if (revalidateSeconds >= expireSeconds) return `s-maxage=${revalidateSeconds}`;
	return `s-maxage=${revalidateSeconds}, stale-while-revalidate=${expireSeconds - revalidateSeconds}`;
}
/**
* Builds Cache-Control for ISR cache reads. HIT responses and STALE responses
* with stored expire metadata use the same route policy because Next.js derives
* this header from cache-control metadata, not from the cache hit/stale state.
* STALE entries without expire metadata keep vinext's legacy `s-maxage=0`
* fallback so older cache entries are not treated as newly fresh downstream.
*/
function buildCachedRevalidateCacheControl(cacheState, revalidateSeconds, expireSeconds) {
	if (revalidateSeconds === Infinity) return STATIC_CACHE_CONTROL;
	if (cacheState === "STALE" && expireSeconds === void 0) return STALE_REVALIDATE_CACHE_CONTROL;
	return buildRevalidateCacheControl(revalidateSeconds, expireSeconds);
}
function applyTimingHeader(headers, timing) {
	if (!timing) return;
	const handlerStart = Math.round(timing.handlerStart);
	const compileMs = timing.compileEnd !== void 0 ? Math.round(timing.compileEnd - timing.handlerStart) : -1;
	const renderMs = timing.responseKind === "html" && timing.renderEnd !== void 0 && timing.compileEnd !== void 0 ? Math.round(timing.renderEnd - timing.compileEnd) : -1;
	headers.set(VINEXT_TIMING_HEADER, `${handlerStart},${compileMs},${renderMs}`);
}
function resolveAppPageRscResponsePolicy(options) {
	if (options.isDraftMode) return { cacheControl: NO_STORE_CACHE_CONTROL$1 };
	if (options.isForceDynamic || options.dynamicUsedDuringBuild) return { cacheControl: NO_STORE_CACHE_CONTROL$1 };
	if (options.revalidateSeconds === 0) return { cacheControl: NO_STORE_CACHE_CONTROL$1 };
	if ((options.isForceStatic || options.isDynamicError) && !options.revalidateSeconds || options.revalidateSeconds === Infinity) return {
		cacheControl: STATIC_CACHE_CONTROL,
		cacheState: "STATIC"
	};
	if (options.revalidateSeconds) return {
		cacheControl: buildRevalidateCacheControl(options.revalidateSeconds, options.expireSeconds),
		cacheState: options.isProduction ? "MISS" : void 0
	};
	return {};
}
function resolveAppPageHtmlResponsePolicy(options) {
	if (options.isDraftMode) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if (options.isForceDynamic) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if (options.hasScriptNonce) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if (options.isProgressiveActionRender) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if (options.revalidateSeconds === 0) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if ((options.isForceStatic || options.isDynamicError) && options.revalidateSeconds === null) return {
		cacheControl: STATIC_CACHE_CONTROL,
		cacheState: "STATIC",
		shouldWriteToCache: false
	};
	if (options.dynamicUsedDuringRender) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if (options.revalidateSeconds !== null && options.revalidateSeconds > 0 && options.revalidateSeconds !== Infinity) return {
		cacheControl: buildRevalidateCacheControl(options.revalidateSeconds, options.expireSeconds),
		cacheState: options.isProduction ? "MISS" : void 0,
		shouldWriteToCache: options.isProduction
	};
	if (options.revalidateSeconds === Infinity) return {
		cacheControl: STATIC_CACHE_CONTROL,
		cacheState: "STATIC",
		shouldWriteToCache: false
	};
	return { shouldWriteToCache: false };
}
function buildAppPageRscResponse(body, options) {
	const headers = new Headers({
		"Content-Type": "text/x-component; charset=utf-8",
		Vary: VINEXT_RSC_VARY_HEADER
	});
	if (options.params && Object.keys(options.params).length > 0) headers.set(VINEXT_PARAMS_HEADER, encodeURIComponent(JSON.stringify(options.params)));
	if (options.mountedSlotsHeader) headers.set(VINEXT_MOUNTED_SLOTS_HEADER, options.mountedSlotsHeader);
	if (options.policy.cacheControl) headers.set("Cache-Control", options.policy.cacheControl);
	if (options.policy.cacheState) headers.set(VINEXT_CACHE_HEADER, options.policy.cacheState);
	mergeMiddlewareResponseHeaders(headers, options.middlewareContext.headers);
	applyTimingHeader(headers, options.timing);
	return new Response(body, {
		status: options.middlewareContext.status ?? 200,
		headers
	});
}
function buildAppPageHtmlResponse(body, options) {
	const headers = new Headers({
		"Content-Type": "text/html; charset=utf-8",
		Vary: VINEXT_RSC_VARY_HEADER
	});
	if (options.policy.cacheControl) headers.set("Cache-Control", options.policy.cacheControl);
	if (options.policy.cacheState) headers.set(VINEXT_CACHE_HEADER, options.policy.cacheState);
	if (options.draftCookie) headers.append("Set-Cookie", options.draftCookie);
	if (options.fontLinkHeader) headers.set("Link", options.fontLinkHeader);
	mergeMiddlewareResponseHeaders(headers, options.middlewareContext.headers);
	applyTimingHeader(headers, options.timing);
	return new Response(body, {
		status: options.middlewareContext.status ?? 200,
		headers
	});
}
var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
function appendUnique(tags, tag) {
	if (!tags.includes(tag)) tags.push(tag);
}
function normalizeRouteSegment(segment) {
	if (!segment || segment === "." || segment.startsWith("@")) return null;
	return segment;
}
function buildRouteCachePath(routeSegments, leafKind) {
	const parts = [];
	for (const segment of routeSegments) {
		const normalized = normalizeRouteSegment(segment);
		if (normalized) parts.push(normalized);
	}
	parts.push(leafKind);
	return `/${parts.join("/")}`;
}
function appendDerivedTags(tags, routePath) {
	appendUnique(tags, `${NEXT_CACHE_IMPLICIT_TAG_ID}/layout`);
	if (!routePath.startsWith("/")) return;
	const routeParts = routePath.split("/");
	const leafIndex = routeParts.length - 1;
	for (let i = 1; i <= routeParts.length; i++) {
		let currentPathname = routeParts.slice(0, i).join("/");
		if (!currentPathname) continue;
		if (!(i - 1 === leafIndex)) currentPathname = `${currentPathname}/layout`;
		appendUnique(tags, `${NEXT_CACHE_IMPLICIT_TAG_ID}${currentPathname}`);
	}
}
function buildPageCacheTags(pathname, extraTags, routeSegments, leafKind) {
	const tags = [pathname, `${NEXT_CACHE_IMPLICIT_TAG_ID}${pathname}`];
	if (pathname === "/") appendUnique(tags, `${NEXT_CACHE_IMPLICIT_TAG_ID}/index`);
	if (pathname === "/index") appendUnique(tags, `${NEXT_CACHE_IMPLICIT_TAG_ID}/`);
	appendDerivedTags(tags, buildRouteCachePath(routeSegments, leafKind));
	for (const tag of extraTags) appendUnique(tags, tag);
	return tags.map(encodeCacheTag);
}
/**
* Build a request context from the live ALS HeadersContext, which reflects
* any x-middleware-request-* header mutations applied by middleware.
* Used for afterFiles and fallback rewrite has/missing evaluation — these
* run after middleware in the App Router execution order.
*
* Falls back to `requestContextFromRequest(request)` when no HeadersContext
* is set (no middleware ran, or middleware didn't set request headers).
*/
function buildPostMwRequestContext(request) {
	const url = new URL(request.url);
	const ctx = getHeadersContext();
	if (!ctx) return requestContextFromRequest(request);
	const cookiesRecord = Object.fromEntries(ctx.cookies);
	return {
		headers: ctx.headers,
		cookies: cookiesRecord,
		query: url.searchParams,
		host: normalizeHost(ctx.headers.get("host"), url.hostname)
	};
}
var _FALLBACK_KEY$1 = Symbol.for("vinext.rootParams.fallback");
var _g$3 = globalThis;
var _fallbackState$1 = _g$3[_FALLBACK_KEY$1] ??= { rootParams: null };
function getState() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _fallbackState$1;
}
function pickRootParams(params, rootParamNames) {
	const picked = {};
	for (const name of rootParamNames ?? []) picked[name] = params[name];
	return picked;
}
function setRootParams(params) {
	getState().rootParams = params;
}
async function callAppPrerenderStaticParams(options) {
	setRootParams(pickRootParams(options.params, options.rootParamNamesByPattern[options.pattern]));
	try {
		return await options.fn({ params: options.params });
	} finally {
		setRootParams(null);
	}
}
var STATIC_PARAMS_ENDPOINT = "/__vinext/prerender/static-params";
var PAGES_STATIC_PATHS_ENDPOINT = "/__vinext/prerender/pages-static-paths";
var JSON_HEADERS = { "content-type": "application/json" };
async function handleAppPrerenderEndpoint(request, options) {
	if (options.pathname === STATIC_PARAMS_ENDPOINT) return handleStaticParamsEndpoint(request, options);
	if (options.pathname === PAGES_STATIC_PATHS_ENDPOINT) {
		if (!options.loadPagesRoutes) return null;
		return handlePagesStaticPathsEndpoint(request, options);
	}
	return null;
}
async function handleStaticParamsEndpoint(request, options) {
	if (!isEnabled(options)) return notFoundResponse();
	const url = new URL(request.url);
	const pattern = url.searchParams.get("pattern");
	if (!pattern) return new Response("missing pattern", { status: 400 });
	const generateStaticParams = options.staticParamsMap[pattern];
	if (typeof generateStaticParams !== "function") return jsonNullResponse();
	try {
		return jsonResponse(await callAppPrerenderStaticParams({
			fn: generateStaticParams,
			params: parseParentParams(url.searchParams.get("parentParams")),
			pattern,
			rootParamNamesByPattern: options.rootParamNamesByPattern ?? {}
		}));
	} catch (error) {
		return jsonResponse({ error: String(error) }, 500);
	}
}
async function handlePagesStaticPathsEndpoint(request, options) {
	if (!isEnabled(options)) return notFoundResponse();
	const url = new URL(request.url);
	const pattern = url.searchParams.get("pattern");
	if (!pattern) return new Response("missing pattern", { status: 400 });
	try {
		const getStaticPaths = findPageRoute(await options.loadPagesRoutes?.(), pattern)?.module?.getStaticPaths;
		if (typeof getStaticPaths !== "function") return jsonNullResponse();
		return jsonResponse(await getStaticPaths({
			locales: parseLocales(url.searchParams.get("locales")),
			defaultLocale: url.searchParams.get("defaultLocale") ?? ""
		}));
	} catch (error) {
		return jsonResponse({ error: String(error) }, 500);
	}
}
function isEnabled(options) {
	return options.isPrerenderEnabled?.() ?? false;
}
function jsonResponse(body, status = 200) {
	return new Response(JSON.stringify(body), {
		headers: JSON_HEADERS,
		status
	});
}
function jsonNullResponse() {
	return new Response("null", {
		headers: JSON_HEADERS,
		status: 200
	});
}
function parseParentParams(raw) {
	if (!raw) return {};
	const value = JSON.parse(raw);
	if (!isPlainObject(value)) return {};
	const params = {};
	for (const [key, paramValue] of Object.entries(value)) if (typeof paramValue === "string" || paramValue === void 0 || isStringArray(paramValue)) params[key] = paramValue;
	return params;
}
function parseLocales(raw) {
	if (!raw) return [];
	const value = JSON.parse(raw);
	if (!Array.isArray(value)) return [];
	return value.filter((locale) => typeof locale === "string");
}
function findPageRoute(value, pattern) {
	if (!Array.isArray(value)) return void 0;
	for (const route of value) if (isPageRoute(route) && route.pattern === pattern) return route;
}
function isPageRoute(value) {
	if (!isPlainObject(value) || typeof value.pattern !== "string") return false;
	if (value.module === void 0) return true;
	if (!isPlainObject(value.module)) return false;
	return value.module.getStaticPaths === void 0 || typeof value.module.getStaticPaths === "function";
}
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isStringArray(value) {
	return Array.isArray(value) && value.every((item) => typeof item === "string");
}
/**
* Apply App Router response finalization that must happen outside individual
* route dispatchers.
*
* Called once per request in the outer handler() wrapper, after all route
* handling, so that every response path (page, route handler, server action,
* metadata, not-found) gets headers applied consistently.
*
* Skips 3xx redirect responses. Response.redirect() creates immutable
* headers that throw on mutation, and Next.js does not apply config headers
* to redirects regardless.
*/
function finalizeAppRscResponse(response, request, options) {
	if (response.status >= 300 && response.status < 400) return response;
	if (!response.headers.has("x-vinext-static-file")) mergeVaryHeader(response.headers, VINEXT_RSC_VARY_HEADER);
	if (!options.configHeaders.length) return response;
	const url = new URL(request.url);
	let pathname;
	try {
		pathname = normalizePath(normalizePathnameForRouteMatch(url.pathname));
	} catch {
		pathname = url.pathname;
	}
	pathname = stripBasePath(pathname, options.basePath);
	applyConfigHeadersToResponse(response.headers, {
		configHeaders: options.configHeaders,
		pathname,
		requestContext: options.requestContext
	});
	return response;
}
/**
* Normalize an App Router RSC request.
*
* Performs all security-sensitive and compatibility-sensitive preprocessing before
* route matching. The ordering of steps is security-critical — changing it introduces
* vulnerabilities:
*
*   1. Parse URL
*   2. Protocol-relative URL guard — on the raw pathname, BEFORE normalizePath collapses
*      `//` to `/`. If the guard ran after normalization, `//evil.com` → `/evil.com`
*      would bypass the check and reach the trailing-slash redirector, which echoes the
*      path into a `Location` header that browsers interpret as protocol-relative.
*   3. Strict percent-decode each segment — throws on malformed sequences (→ 400). Must
*      run before basePath check so %2F-encoded slashes cannot create fake basePath prefixes.
*   4. Collapse double-slashes, resolve `.` and `..` segments (normalizePath)
*   5. basePath check + strip — 404 when pathname lacks the basePath prefix.
*      `/__vinext/` bypasses this for internal prerender endpoints.
*   6. RSC detection: `.rsc` suffix only. RSC headers do not select payload
*      rendering at the canonical HTML URL, so caches that ignore Vary cannot
*      store Flight responses under HTML URLs.
*   7. cleanPathname — pathname with `.rsc` suffix stripped
*   8. Sanitize X-Vinext-Interception-Context — strip null bytes (header injection)
*   9. Normalize x-vinext-mounted-slots — dedup and sort for canonical cache keys
*   10. Read semantic render mode for refresh/action payload rendering
*
* @returns A 400 or 404 Response for invalid or out-of-scope inputs,
*          or a NormalizedRscRequest for valid requests.
*/
function normalizeRscRequest(request, basePath) {
	const url = new URL(request.url);
	const protoGuard = guardProtocolRelativeUrl(url.pathname);
	if (protoGuard) return protoGuard;
	let decoded;
	try {
		decoded = normalizePathnameForRouteMatchStrict(url.pathname);
	} catch {
		return badRequestResponse();
	}
	let pathname = normalizePath(decoded);
	if (basePath) {
		if (!hasBasePath(pathname, basePath) && !pathname.startsWith("/__vinext/")) return notFoundResponse();
		pathname = stripBasePath(pathname, basePath);
	}
	const isRscRequest = pathname.endsWith(".rsc");
	const cleanPathname = stripRscSuffix(pathname);
	const interceptionContextHeader = request.headers.get("X-Vinext-Interception-Context")?.replaceAll("\0", "") || null;
	const mountedSlotsHeader = normalizeMountedSlotsHeader(request.headers.get(VINEXT_MOUNTED_SLOTS_HEADER));
	const renderMode = isRscRequest ? parseAppRscRenderMode(request.headers.get(VINEXT_RSC_RENDER_MODE_HEADER)) : APP_RSC_RENDER_MODE_NAVIGATION;
	return {
		url,
		pathname,
		cleanPathname,
		isRscRequest,
		interceptionContextHeader,
		mountedSlotsHeader,
		renderMode
	};
}
function routePatternPart(segment) {
	if (segment.startsWith("[[...") && segment.endsWith("]]")) return `:${segment.slice(5, -2)}*`;
	if (segment.startsWith("[...") && segment.endsWith("]")) return `:${segment.slice(4, -1)}+`;
	if (segment.startsWith("[") && segment.endsWith("]")) return `:${segment.slice(1, -1)}`;
	return segment;
}
function routePatternParts(pathname) {
	return pathname.split("/").filter(Boolean).map(routePatternPart);
}
function routePattern(pathname) {
	const parts = routePatternParts(pathname);
	return parts.length > 0 ? `/${parts.join("/")}` : "";
}
function appendParamValue(target, value) {
	if (Array.isArray(value)) {
		for (const entry of value) target.push(entry);
		return;
	}
	target.push(value);
}
function fillRoutePatternSegments(pathname, params) {
	const segments = pathname.split("/").filter(Boolean);
	const resolvedSegments = [];
	for (const segment of segments) {
		if (segment.startsWith("[[...") && segment.endsWith("]]")) {
			const value = params[segment.slice(5, -2)];
			if (value !== void 0 && value !== "") {
				if (Array.isArray(value) && value.length === 0) continue;
				appendParamValue(resolvedSegments, value);
			}
			continue;
		}
		if (segment.startsWith("[...") && segment.endsWith("]")) {
			const value = params[segment.slice(4, -1)];
			if (value === void 0 || (Array.isArray(value) ? value.length === 0 : value === "")) return null;
			appendParamValue(resolvedSegments, value);
			continue;
		}
		if (segment.startsWith("[") && segment.endsWith("]")) {
			const value = params[segment.slice(1, -1)];
			if (typeof value === "string") {
				resolvedSegments.push(value);
				continue;
			}
			if (Array.isArray(value) && value.length > 0) {
				if (value.length > 1) return null;
				resolvedSegments.push(value[0]);
				continue;
			}
			return null;
		}
		resolvedSegments.push(segment);
	}
	return resolvedSegments.length > 0 ? `/${resolvedSegments.join("/")}` : "/";
}
function matchRoutePattern(urlParts, patternParts) {
	const params = Object.create(null);
	function matchFrom(urlIndex, patternIndex) {
		if (patternIndex === patternParts.length) return urlIndex === urlParts.length;
		const patternPart = patternParts[patternIndex];
		if (patternPart.startsWith(":") && (patternPart.endsWith("+") || patternPart.endsWith("*"))) {
			const paramName = patternPart.slice(1, -1);
			const minLength = patternPart.endsWith("+") ? 1 : 0;
			for (let endIndex = urlIndex + minLength; endIndex <= urlParts.length; endIndex++) {
				const value = urlParts.slice(urlIndex, endIndex);
				if (value.length > 0) params[paramName] = value;
				else delete params[paramName];
				if (matchFrom(endIndex, patternIndex + 1)) return true;
			}
			delete params[paramName];
			return false;
		}
		if (patternPart.startsWith(":")) {
			if (urlIndex >= urlParts.length) return false;
			const paramName = patternPart.slice(1);
			params[paramName] = urlParts[urlIndex];
			if (matchFrom(urlIndex + 1, patternIndex + 1)) return true;
			delete params[paramName];
			return false;
		}
		if (urlIndex >= urlParts.length || urlParts[urlIndex] !== patternPart) return false;
		return matchFrom(urlIndex + 1, patternIndex + 1);
	}
	if (!matchFrom(0, 0)) return null;
	decodeMatchedParams(params);
	return params;
}
/** Escape the five XML special characters in text content and attribute values. */
function escapeXml(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
/**
* Convert a sitemap array to XML string.
*/
function sitemapToXml(entries) {
	const hasAlternates = entries.some((entry) => Object.keys(entry.alternates ?? {}).length > 0);
	const hasImages = entries.some((entry) => Boolean(entry.images?.length));
	const hasVideos = entries.some((entry) => Boolean(entry.videos?.length));
	let content = "";
	content += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	content += "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"";
	if (hasImages) content += " xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\"";
	if (hasVideos) content += " xmlns:video=\"http://www.google.com/schemas/sitemap-video/1.1\"";
	if (hasAlternates) content += " xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">\n";
	else content += ">\n";
	for (const entry of entries) {
		content += "<url>\n";
		content += `<loc>${escapeXml(entry.url)}</loc>\n`;
		const languages = entry.alternates?.languages;
		if (languages && Object.keys(languages).length) for (const language in languages) content += `<xhtml:link rel="alternate" hreflang="${escapeXml(language)}" href="${escapeXml(languages[language])}" />\n`;
		if (entry.images?.length) for (const image of entry.images) content += `<image:image>\n<image:loc>${escapeXml(image)}</image:loc>\n</image:image>\n`;
		if (entry.videos?.length) for (const video of entry.videos) {
			const videoFields = [
				"<video:video>",
				`<video:title>${escapeXml(String(video.title))}</video:title>`,
				`<video:thumbnail_loc>${escapeXml(String(video.thumbnail_loc))}</video:thumbnail_loc>`,
				`<video:description>${escapeXml(String(video.description))}</video:description>`,
				video.content_loc && `<video:content_loc>${escapeXml(String(video.content_loc))}</video:content_loc>`,
				video.player_loc && `<video:player_loc>${escapeXml(String(video.player_loc))}</video:player_loc>`,
				video.duration && `<video:duration>${video.duration}</video:duration>`,
				video.view_count && `<video:view_count>${video.view_count}</video:view_count>`,
				video.tag && `<video:tag>${escapeXml(String(video.tag))}</video:tag>`,
				video.rating && `<video:rating>${video.rating}</video:rating>`,
				video.expiration_date && `<video:expiration_date>${escapeXml(String(video.expiration_date))}</video:expiration_date>`,
				video.publication_date && `<video:publication_date>${escapeXml(String(video.publication_date))}</video:publication_date>`,
				video.family_friendly && `<video:family_friendly>${video.family_friendly}</video:family_friendly>`,
				video.requires_subscription && `<video:requires_subscription>${video.requires_subscription}</video:requires_subscription>`,
				video.live && `<video:live>${video.live}</video:live>`,
				video.restriction && `<video:restriction relationship="${escapeXml(String(video.restriction.relationship))}">${escapeXml(String(video.restriction.content))}</video:restriction>`,
				video.platform && `<video:platform relationship="${escapeXml(String(video.platform.relationship))}">${escapeXml(String(video.platform.content))}</video:platform>`,
				video.uploader && `<video:uploader${video.uploader.info ? ` info="${escapeXml(String(video.uploader.info))}"` : ""}>${escapeXml(String(video.uploader.content))}</video:uploader>`,
				"</video:video>\n"
			].filter(Boolean);
			content += videoFields.join("\n");
		}
		if (entry.lastModified) content += `<lastmod>${serializeDate(entry.lastModified)}</lastmod>\n`;
		if (entry.changeFrequency) content += `<changefreq>${entry.changeFrequency}</changefreq>\n`;
		if (typeof entry.priority === "number") content += `<priority>${entry.priority}</priority>\n`;
		content += "</url>\n";
	}
	content += "</urlset>\n";
	return content;
}
/**
* Convert a robots config to text format.
*/
function robotsToText(config) {
	const lines = [];
	const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
	for (const rule of rules) {
		const agents = Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent ?? "*"];
		for (const agent of agents) lines.push(`User-Agent: ${agent}`);
		if (rule.allow) {
			const allows = Array.isArray(rule.allow) ? rule.allow : [rule.allow];
			for (const allow of allows) lines.push(`Allow: ${allow}`);
		}
		if (rule.disallow) {
			const disallows = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow];
			for (const disallow of disallows) lines.push(`Disallow: ${disallow}`);
		}
		if (rule.crawlDelay !== void 0) lines.push(`Crawl-delay: ${rule.crawlDelay}`);
		if (rule.other) for (const key of Object.keys(rule.other)) {
			const value = rule.other[key];
			if (value == null) continue;
			const values = Array.isArray(value) ? value : [value];
			for (const v of values) lines.push(`${key}: ${v}`);
		}
		lines.push("");
	}
	if (config.sitemap) {
		const sitemaps = Array.isArray(config.sitemap) ? config.sitemap : [config.sitemap];
		for (const sitemap of sitemaps) lines.push(`Sitemap: ${sitemap}`);
	}
	if (config.host) lines.push(`Host: ${config.host}`);
	return lines.join("\n").trim() + "\n";
}
/**
* Convert a manifest config to JSON string.
*/
function manifestToJson(config) {
	return JSON.stringify(config, null, 2);
}
function serializeDate(value) {
	return value instanceof Date ? value.toISOString() : value;
}
function getMetadataRouteKind(route) {
	if (route.type === "favicon") return "favicon";
	if (route.type === "icon") return "icon";
	if (route.type === "apple-icon") return "apple";
	if (route.type === "opengraph-image") return "openGraph";
	if (route.type === "twitter-image") return "twitter";
	if (route.type === "manifest") return "manifest";
	return null;
}
function getMetadataImageRouteKind(route) {
	const kind = getMetadataRouteKind(route);
	if (kind === "icon" || kind === "apple" || kind === "openGraph" || kind === "twitter") return kind;
	return null;
}
var metadataImageIdPattern = /^[a-zA-Z0-9-_.]+$/;
function isValidMetadataImageId(id) {
	return metadataImageIdPattern.test(id);
}
function matchMetadataRoutePattern(urlParts, patternParts) {
	return matchRoutePattern(urlParts, patternParts);
}
var routeFunctionCache = /* @__PURE__ */ new WeakMap();
function isObject(value) {
	return typeof value === "object" && value !== null;
}
function readFunction(module, key) {
	if (!module) return null;
	const value = Reflect.get(module, key);
	if (typeof value !== "function") return null;
	return (props) => Reflect.apply(value, module, [props]);
}
function isSitemapEntries(value) {
	return Array.isArray(value);
}
function isRobotsConfig(value) {
	return isObject(value) && !Array.isArray(value);
}
function isManifestConfig(value) {
	return isObject(value) && !Array.isArray(value);
}
function isImageMetadataRoute(route) {
	return route.type === "icon" || route.type === "apple-icon" || route.type === "opengraph-image" || route.type === "twitter-image";
}
function getMetadataRouteFunctions(route) {
	const cached = routeFunctionCache.get(route);
	if (cached) return cached;
	const generateImageMetadata = route.isDynamic && isImageMetadataRoute(route) ? readFunction(route.module, "generateImageMetadata") : null;
	const functions = {
		defaultExport: route.isDynamic ? readFunction(route.module, "default") : null,
		generateImageMetadata,
		generateSitemaps: route.type === "sitemap" && route.isDynamic ? readFunction(route.module, "generateSitemaps") : null,
		hasGeneratedImageMetadata: route.isDynamic && isImageMetadataRoute(route) && Boolean(generateImageMetadata)
	};
	routeFunctionCache.set(route, functions);
	return functions;
}
function matchMetadataRoute(route, cleanPathname, functions) {
	if (route.patternParts) {
		const urlParts = cleanPathname.split("/").filter(Boolean);
		if (functions.hasGeneratedImageMetadata && urlParts.length > 0) {
			const params = matchMetadataRoutePattern(urlParts.slice(0, -1), route.patternParts);
			if (params) return {
				params,
				imageId: urlParts[urlParts.length - 1]
			};
		}
		const params = matchMetadataRoutePattern(urlParts, route.patternParts);
		return params ? {
			params,
			imageId: null
		} : null;
	}
	if (functions.hasGeneratedImageMetadata && cleanPathname.startsWith(`${route.servedUrl}/`)) {
		const imageSuffix = cleanPathname.slice(route.servedUrl.length + 1);
		if (!imageSuffix || imageSuffix.includes("/")) return null;
		return {
			params: Object.create(null),
			imageId: imageSuffix
		};
	}
	return cleanPathname === route.servedUrl ? {
		params: null,
		imageId: null
	} : null;
}
function findGeneratedSitemapId(entries, rawId) {
	if (!Array.isArray(entries)) return null;
	for (const entry of entries) {
		if (!isObject(entry) || Reflect.get(entry, "id") == null) throw new Error("id property is required for every item returned from generateSitemaps");
		const id = Reflect.get(entry, "id");
		if (String(id) === rawId) return rawId;
	}
	return null;
}
function makeThenableMetadataRouteId(id) {
	return Object.assign(Promise.resolve(id), {
		toString() {
			return id;
		},
		valueOf() {
			return id;
		},
		[Symbol.toPrimitive]() {
			return id;
		}
	});
}
async function handleGeneratedSitemap(route, cleanPathname, functions) {
	if (!functions.generateSitemaps || !functions.defaultExport) return null;
	const sitemapPrefix = route.servedUrl.slice(0, -4);
	if (!cleanPathname.startsWith(`${sitemapPrefix}/`) || !cleanPathname.endsWith(".xml")) return null;
	const rawId = cleanPathname.slice(sitemapPrefix.length + 1, -4);
	if (rawId.includes("/")) return null;
	const matchedId = findGeneratedSitemapId(await functions.generateSitemaps({}), rawId);
	if (!matchedId) return notFoundResponse();
	const result = await functions.defaultExport({ id: makeThenableMetadataRouteId(matchedId) });
	if (result instanceof Response) return result;
	if (!isSitemapEntries(result)) throw new TypeError("Metadata sitemap routes must return an array.");
	return new Response(sitemapToXml(result), { headers: {
		"Content-Type": route.contentType,
		"Cache-Control": "public, max-age=0, must-revalidate"
	} });
}
function findGeneratedImageId(imageMetadata, imageId, servedUrl) {
	if (!Array.isArray(imageMetadata)) return null;
	for (const item of imageMetadata) {
		if (!isObject(item) || Reflect.get(item, "id") == null) throw new Error("id property is required for every item returned from generateImageMetadata");
		const itemId = String(Reflect.get(item, "id"));
		if (!isValidMetadataImageId(itemId)) {
			console.warn(`[vinext] Skipping metadata route ${servedUrl} image id "${itemId}" because metadata image ids must match /^[a-zA-Z0-9-_.]+$/.`);
			continue;
		}
		if (itemId === imageId) return itemId;
	}
	return null;
}
async function callDynamicMetadataRoute(route, match, makeThenableParams, functions) {
	if (!functions.defaultExport) {
		console.warn(`[vinext] Dynamic metadata route ${route.servedUrl} has no default export.`);
		return notFoundResponse();
	}
	const paramsThenable = makeThenableParams(match.params ?? {});
	let result;
	if (functions.hasGeneratedImageMetadata) {
		if (match.imageId === null || !isValidMetadataImageId(match.imageId)) return notFoundResponse();
		if (!functions.generateImageMetadata) return notFoundResponse();
		const matchedImageId = findGeneratedImageId(await functions.generateImageMetadata({ params: paramsThenable }), match.imageId, route.servedUrl);
		if (!matchedImageId) return notFoundResponse();
		result = await functions.defaultExport({
			params: paramsThenable,
			id: makeThenableMetadataRouteId(matchedImageId)
		});
	} else result = await functions.defaultExport({ params: paramsThenable });
	if (result instanceof Response) return result;
	let body;
	if (route.type === "sitemap") {
		if (!isSitemapEntries(result)) throw new TypeError("Metadata sitemap routes must return an array.");
		body = sitemapToXml(result);
	} else if (route.type === "robots") {
		if (!isRobotsConfig(result)) throw new TypeError("Metadata robots routes must return an object.");
		body = robotsToText(result);
	} else if (route.type === "manifest") {
		if (!isManifestConfig(result)) throw new TypeError("Metadata manifest routes must return an object.");
		body = manifestToJson(result);
	} else if (isImageMetadataRoute(route)) throw new TypeError(`Dynamic metadata ${route.type} route ${route.servedUrl} must return a Response.`);
	else body = JSON.stringify(result);
	return new Response(body, { headers: {
		"Content-Type": route.contentType,
		"Cache-Control": "public, max-age=0, must-revalidate"
	} });
}
function serveStaticMetadataRoute(route) {
	if (typeof route.fileDataBase64 !== "string") throw new Error(`[vinext] Static metadata route ${route.servedUrl} is missing embedded file data.`);
	try {
		const binary = atob(route.fileDataBase64);
		const bytes = new Uint8Array(binary.length);
		for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
		return new Response(bytes, { headers: {
			"Content-Type": route.contentType,
			"Cache-Control": "public, max-age=0, must-revalidate"
		} });
	} catch (error) {
		const reason = error instanceof Error && error.message ? `: ${error.message}` : "";
		throw new Error(`[vinext] Failed to decode embedded metadata route file data for ${route.servedUrl}${reason}`, { cause: error });
	}
}
async function handleMetadataRouteRequest(options) {
	for (const route of options.metadataRoutes) {
		const functions = getMetadataRouteFunctions(route);
		if (route.type === "sitemap" && route.isDynamic) {
			if (functions.generateSitemaps) {
				const generatedSitemapResponse = await handleGeneratedSitemap(route, options.cleanPathname, functions);
				if (generatedSitemapResponse) return generatedSitemapResponse;
				continue;
			}
		}
		const match = matchMetadataRoute(route, options.cleanPathname, functions);
		if (!match) continue;
		return route.isDynamic ? callDynamicMetadataRoute(route, match, options.makeThenableParams, functions) : serveStaticMetadataRoute(route);
	}
	return null;
}
/**
* Sets up the work unit async storage for prerendering.
*
* When VINEXT_PRERENDER=1, wraps execution in a workUnitAsyncStorage.run()
* with a PrerenderStore so that dynamic APIs (e.g., io()) can
* detect the prerender context and return hanging promises.
*
* Used by: app-rsc-entry.ts handler template.
*
* TODO: If future dynamic APIs need request-scoped stores for normal (non-prerender)
* requests, add a `{ type: "request" }` store during normal request handling.
*/
function runWithPrerenderWorkUnit(fn, options) {
	if (process.env.VINEXT_PRERENDER === "1") {
		const controller = new AbortController();
		const route = typeof options?.route === "function" ? options.route() : options?.route;
		return workUnitAsyncStorage.run({
			type: "prerender",
			renderSignal: controller.signal,
			route
		}, fn).finally(() => controller.abort());
	}
	return fn();
}
function hasProperty(value, key) {
	return key in value;
}
function isExecutionContextLike(value) {
	if (!value || typeof value !== "object") return false;
	return hasProperty(value, "waitUntil") && typeof value.waitUntil === "function";
}
function redirectDestinationWithBasePath(destination, basePath) {
	if (!basePath || isExternalUrl(destination) || hasBasePath(destination, basePath)) return destination;
	return basePath + destination;
}
async function applyRewrite(options, cleanPathname) {
	if (!options.rewrites.length) return null;
	const rewritten = matchRewrite(cleanPathname, options.rewrites, options.requestContext);
	if (!rewritten) return null;
	if (isExternalUrl(rewritten)) {
		options.clearRequestContext();
		return proxyExternalRequest(options.request, rewritten);
	}
	return rewritten;
}
function applyConfigHeadersToMiddlewareRedirect(response, options) {
	if (response.status < 300 || response.status >= 400) return response;
	if (!options.configHeaders.length) return response;
	const headers = new Headers();
	applyConfigHeadersToResponse(headers, {
		configHeaders: options.configHeaders,
		pathname: options.pathname,
		requestContext: options.requestContext
	});
	if (!headers.entries().next().done) {
		mergeMiddlewareResponseHeaders(headers, response.headers);
		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers
		});
	}
	return response;
}
async function handleAppRscRequest(options, request, preMiddlewareRequestContext) {
	const handlerStart = 0;
	const normalized = normalizeRscRequest(request, options.basePath);
	if (normalized instanceof Response) return normalized;
	const { url, isRscRequest, interceptionContextHeader, mountedSlotsHeader, renderMode } = normalized;
	let { pathname, cleanPathname } = normalized;
	const prerenderEndpointResponse = await handleAppPrerenderEndpoint(request, {
		isPrerenderEnabled() {
			return process.env.VINEXT_PRERENDER === "1";
		},
		loadPagesRoutes: options.loadPrerenderPagesRoutes,
		pathname,
		rootParamNamesByPattern: options.rootParamNamesByPattern,
		staticParamsMap: options.staticParamsMap
	});
	if (prerenderEndpointResponse) return prerenderEndpointResponse;
	const trailingSlashRedirect = normalizeTrailingSlash(pathname, options.basePath, options.trailingSlash, url.search);
	if (trailingSlashRedirect) return trailingSlashRedirect;
	const redirect = matchRedirect(stripRscSuffix(pathname), options.configRedirects, preMiddlewareRequestContext);
	if (redirect) {
		const destination = sanitizeDestination(redirectDestinationWithBasePath(redirect.destination, options.basePath));
		const location = isRscRequest && request.headers.get("RSC") === "1" ? await createRscRedirectLocation(destination, request) : destination;
		return new Response(null, {
			status: redirect.permanent ? 308 : 307,
			headers: { Location: location }
		});
	}
	const rscCacheBustingRedirect = await resolveInvalidRscCacheBustingRequest({
		isRscRequest,
		request
	});
	if (rscCacheBustingRedirect) return rscCacheBustingRedirect;
	const middlewareContext = {
		headers: null,
		requestHeaders: null,
		status: null
	};
	if (options.middlewareModule) {
		const middlewareResult = await applyAppMiddleware({
			basePath: options.basePath,
			cleanPathname,
			context: middlewareContext,
			i18nConfig: options.i18nConfig,
			isProxy: options.isMiddlewareProxy,
			module: options.middlewareModule,
			request
		});
		if (middlewareResult.kind === "response") return applyConfigHeadersToMiddlewareRedirect(middlewareResult.response, {
			configHeaders: options.configHeaders,
			pathname: cleanPathname,
			requestContext: preMiddlewareRequestContext
		});
		cleanPathname = middlewareResult.cleanPathname;
		if (middlewareResult.search !== null) url.search = middlewareResult.search;
	}
	const scriptNonce = getScriptNonceFromHeaderSources(request.headers, middlewareContext.headers);
	const postMiddlewareRequestContext = buildPostMwRequestContext(request);
	const beforeFilesRewrite = await applyRewrite({
		clearRequestContext: options.clearRequestContext,
		request,
		requestContext: postMiddlewareRequestContext,
		rewrites: options.configRewrites.beforeFiles
	}, cleanPathname);
	if (beforeFilesRewrite instanceof Response) return beforeFilesRewrite;
	if (beforeFilesRewrite) cleanPathname = beforeFilesRewrite;
	if (cleanPathname === "/_vinext/image") {
		const imageUrlResult = validateImageUrl(url.searchParams.get("url"), request.url);
		if (imageUrlResult instanceof Response) return imageUrlResult;
		return Response.redirect(new URL(imageUrlResult, url.origin).href, 302);
	}
	const metadataRouteResponse = await handleMetadataRouteRequest({
		metadataRoutes: options.metadataRoutes,
		cleanPathname,
		makeThenableParams: options.makeThenableParams
	});
	if (metadataRouteResponse) return metadataRouteResponse;
	const publicFileResponse = resolvePublicFileRoute({
		cleanPathname,
		middlewareContext,
		pathname,
		publicFiles: options.publicFiles,
		request
	});
	if (publicFileResponse) {
		options.clearRequestContext();
		return publicFileResponse;
	}
	if (isRscRequest) stripRscCacheBustingSearchParam(url);
	options.setNavigationContext({
		pathname: cleanPathname,
		searchParams: url.searchParams,
		params: {}
	});
	const actionId = request.headers.get("x-rsc-action") ?? request.headers.get("next-action");
	const contentType = request.headers.get("content-type") || "";
	const progressiveActionResult = await options.handleProgressiveActionRequest({
		actionId,
		cleanPathname,
		contentType,
		middlewareContext,
		request
	});
	if (progressiveActionResult instanceof Response) return progressiveActionResult;
	const isProgressiveActionRender = progressiveActionResult?.kind === "form-state";
	const formState = isProgressiveActionRender ? progressiveActionResult.formState : null;
	const serverActionResponse = await options.handleServerActionRequest({
		actionId,
		cleanPathname,
		contentType,
		interceptionContext: interceptionContextHeader,
		isRscRequest,
		middlewareContext,
		mountedSlotsHeader,
		request,
		searchParams: url.searchParams
	});
	if (serverActionResponse) return serverActionResponse;
	let match = options.matchRoute(cleanPathname);
	if (!match || match.route.isDynamic) {
		const afterFilesRewrite = await applyRewrite({
			clearRequestContext: options.clearRequestContext,
			request,
			requestContext: postMiddlewareRequestContext,
			rewrites: options.configRewrites.afterFiles
		}, cleanPathname);
		if (afterFilesRewrite instanceof Response) return afterFilesRewrite;
		if (afterFilesRewrite) {
			cleanPathname = afterFilesRewrite;
			match = options.matchRoute(cleanPathname);
		}
	}
	if (!match) {
		const fallbackRewrite = await applyRewrite({
			clearRequestContext: options.clearRequestContext,
			request,
			requestContext: postMiddlewareRequestContext,
			rewrites: options.configRewrites.fallback
		}, cleanPathname);
		if (fallbackRewrite instanceof Response) return fallbackRewrite;
		if (fallbackRewrite) {
			cleanPathname = fallbackRewrite;
			match = options.matchRoute(cleanPathname);
		}
	}
	if (!match) {
		const pagesFallbackResponse = await options.renderPagesFallback?.({
			isRscRequest,
			middlewareContext,
			request,
			url
		});
		if (pagesFallbackResponse) {
			options.clearRequestContext();
			return pagesFallbackResponse;
		}
		const renderedNotFoundResponse = await options.renderNotFound({
			isRscRequest,
			middlewareContext,
			request,
			route: null,
			scriptNonce
		});
		if (renderedNotFoundResponse) return renderedNotFoundResponse;
		options.clearRequestContext();
		const headers = new Headers();
		mergeMiddlewareResponseHeaders(headers, middlewareContext.headers);
		return notFoundResponse({ headers });
	}
	const { route, params } = match;
	options.setNavigationContext({
		pathname: cleanPathname,
		searchParams: url.searchParams,
		params
	});
	setRootParams(pickRootParams(params, route.rootParamNames));
	if (route.routeHandler) {
		setCurrentFetchSoftTags(buildPageCacheTags(cleanPathname, [], [...route.routeSegments], "route"));
		return options.dispatchMatchedRouteHandler({
			cleanPathname,
			middlewareContext,
			params,
			request,
			route,
			searchParams: url.searchParams
		});
	}
	return options.dispatchMatchedPage({
		cleanPathname,
		formState,
		handlerStart,
		interceptionContext: interceptionContextHeader,
		isProgressiveActionRender,
		isRscRequest,
		middlewareContext,
		mountedSlotsHeader,
		params,
		request,
		route,
		scriptNonce,
		searchParams: url.searchParams,
		renderMode
	});
}
function createAppRscHandler(options) {
	return async function appRscHandler(rawRequest, ctx) {
		await options.ensureInstrumentation?.();
		const mwCtx = rawRequest.headers.get(VINEXT_MW_CTX_HEADER);
		const filteredHeaders = filterInternalHeaders(rawRequest.headers);
		if (mwCtx !== null) filteredHeaders.set(VINEXT_MW_CTX_HEADER, mwCtx);
		const request = cloneRequestWithHeaders(rawRequest, filteredHeaders);
		const executionContext = isExecutionContextLike(ctx) ? ctx : getRequestExecutionContext() ?? null;
		return runWithRequestContext(createRequestContext({
			headersContext: headersContextFromRequest(request),
			executionContext,
			unstableCacheRevalidation: "background"
		}), () => runWithPrerenderWorkUnit(async () => {
			ensureFetchPatch();
			const preMiddlewareRequestContext = requestContextFromRequest(request);
			let response;
			try {
				response = await handleAppRscRequest(options, request, preMiddlewareRequestContext);
			} catch (error) {
				throw error;
			}
			return finalizeAppRscResponse(response, request, {
				basePath: options.basePath,
				configHeaders: options.configHeaders,
				requestContext: preMiddlewareRequestContext
			});
		}, { route: () => new URL(request.url).pathname }));
	};
}
/**
* Get the registered onRequestError handler (if any).
*
* Reads from globalThis so it works across Vite environment boundaries.
*/
function getOnRequestErrorHandler() {
	return globalThis.__VINEXT_onRequestErrorHandler__ ?? null;
}
/**
* Report a request error via the instrumentation handler.
*
* No-op if no onRequestError handler is registered.
*
* Reads the handler from globalThis so this function works correctly regardless
* of which environment it is called from.
*/
function reportRequestError(error, request, context) {
	const handler = getOnRequestErrorHandler();
	if (!handler) return Promise.resolve();
	const promise = (async () => {
		try {
			await handler(error, request, context);
		} catch (reportErr) {
			console.error("[vinext] onRequestError handler threw:", reportErr instanceof Error ? reportErr.message : String(reportErr));
		}
	})();
	getRequestExecutionContext()?.waitUntil(promise);
	return promise;
}
var ROUTE_HANDLER_HTTP_METHODS = [
	"GET",
	"HEAD",
	"POST",
	"PUT",
	"DELETE",
	"PATCH",
	"OPTIONS"
];
/**
* Checks whether a string is a recognized HTTP method for App Router route
* handlers. Invalid methods must be rejected with 400 before any auto-OPTIONS
* or 405 logic runs.
*
* @see https://github.com/vercel/next.js/blob/canary/packages/next/src/server/web/http.ts
*/
function isValidHTTPMethod(maybeMethod) {
	return ROUTE_HANDLER_HTTP_METHODS.includes(maybeMethod);
}
function collectRouteHandlerMethods(handler) {
	const methods = ROUTE_HANDLER_HTTP_METHODS.filter((method) => typeof handler[method] === "function");
	if (methods.includes("GET") && !methods.includes("HEAD")) methods.push("HEAD");
	return methods;
}
function buildRouteHandlerAllowHeader(exportedMethods) {
	const allow = new Set(exportedMethods);
	allow.add("OPTIONS");
	return Array.from(allow).sort().join(", ");
}
var _KNOWN_DYNAMIC_APP_ROUTE_HANDLERS_KEY = Symbol.for("vinext.appRouteHandlerRuntime.knownDynamicHandlers");
var _g$2 = globalThis;
var knownDynamicAppRouteHandlers = _g$2[_KNOWN_DYNAMIC_APP_ROUTE_HANDLERS_KEY] ??= /* @__PURE__ */ new Set();
function isKnownDynamicAppRoute(pattern) {
	return knownDynamicAppRouteHandlers.has(pattern);
}
function markKnownDynamicAppRoute(pattern) {
	knownDynamicAppRouteHandlers.add(pattern);
}
function bindMethodIfNeeded(value, target) {
	return typeof value === "function" ? value.bind(target) : value;
}
function buildNextConfig(options) {
	if (!options.basePath && !options.i18n) return null;
	return {
		basePath: options.basePath,
		i18n: options.i18n ?? void 0
	};
}
function rebuildRequestWithHeaders(input, headers) {
	const method = input.method;
	const hasBody = method !== "GET" && method !== "HEAD";
	const init = {
		method,
		headers,
		cache: input.cache,
		credentials: input.credentials,
		integrity: input.integrity,
		keepalive: input.keepalive,
		mode: input.mode,
		redirect: input.redirect,
		referrer: input.referrer,
		referrerPolicy: input.referrerPolicy,
		signal: input.signal
	};
	if (hasBody && input.body) {
		init.body = input.body;
		init.duplex = "half";
	}
	return new Request(input.url, init);
}
function cleanStaticUrl(url) {
	const cleanUrl = new URL(url);
	cleanUrl.protocol = "http:";
	cleanUrl.host = "localhost:3000";
	cleanUrl.username = "";
	cleanUrl.password = "";
	cleanUrl.search = "";
	cleanUrl.hash = "";
	return cleanUrl.href;
}
function readEmptyBodyAsArrayBuffer() {
	return new Response(null).arrayBuffer();
}
function readEmptyBodyAsBlob() {
	return new Response(null).blob();
}
function readEmptyBodyAsFormData() {
	return new Response(null).formData();
}
function readEmptyBodyAsJson() {
	return new Response(null).json();
}
function readEmptyBodyAsText() {
	return new Response(null).text();
}
function createTrackedAppRouteRequest(request, options = {}) {
	let didAccessDynamicRequest = false;
	const requestMode = options.requestMode ?? "auto";
	const nextConfig = buildNextConfig(options);
	const markDynamicAccess = (access) => {
		didAccessDynamicRequest = true;
		options.onDynamicAccess?.(access);
	};
	const wrapNextUrl = (nextUrl) => {
		return new Proxy(nextUrl, { get(target, prop) {
			switch (prop) {
				case "search":
				case "searchParams":
				case "url":
				case "href":
				case "toJSON":
				case "toString":
				case "origin":
					markDynamicAccess(`nextUrl.${String(prop)}`);
					return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
				case "clone": return () => wrapNextUrl(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
		} });
	};
	const wrapForceStaticNextUrl = (nextUrl) => {
		const emptySearchParams = new URLSearchParams();
		const staticHref = cleanStaticUrl(nextUrl.href);
		return new Proxy(nextUrl, { get(target, prop) {
			switch (prop) {
				case "search": return "";
				case "searchParams": return emptySearchParams;
				case "href": return staticHref;
				case "url": return;
				case "toJSON":
				case "toString": return () => staticHref;
				case "clone": return () => wrapForceStaticNextUrl(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
		} });
	};
	const throwStaticGenerationError = (expression) => {
		throw new Error(options.staticGenerationErrorMessage?.(expression) ?? `Route handler with \`dynamic = "error"\` used ${expression}.`);
	};
	const wrapRequireStaticNextUrl = (nextUrl) => {
		return new Proxy(nextUrl, { get(target, prop) {
			switch (prop) {
				case "search":
				case "searchParams":
				case "url":
				case "href":
				case "toJSON":
				case "toString":
				case "origin": return throwStaticGenerationError(`nextUrl.${String(prop)}`);
				case "clone": return () => wrapRequireStaticNextUrl(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
		} });
	};
	const wrapRequest = (input) => {
		const requestHeaders = options.middlewareHeaders ? buildRequestHeadersFromMiddlewareResponse(input.headers, options.middlewareHeaders) : null;
		const requestWithOverrides = requestHeaders ? rebuildRequestWithHeaders(input, requestHeaders) : input;
		const nextRequest = requestWithOverrides instanceof NextRequest ? requestWithOverrides : new NextRequest(requestWithOverrides, { nextConfig: nextConfig ?? void 0 });
		let proxiedNextUrl = null;
		let forceStaticNextUrl = null;
		let requireStaticNextUrl = null;
		let forceStaticHeaders = null;
		let forceStaticCookies = null;
		return new Proxy(nextRequest, { get(target, prop) {
			if (requestMode === "force-static") switch (prop) {
				case "nextUrl":
					forceStaticNextUrl ??= wrapForceStaticNextUrl(target.nextUrl);
					return forceStaticNextUrl;
				case "headers":
					forceStaticHeaders ??= sealRequestHeaders(new Headers());
					return forceStaticHeaders;
				case "cookies":
					forceStaticCookies ??= sealRequestCookies(new RequestCookies(new Headers()));
					return forceStaticCookies;
				case "url": return cleanStaticUrl(target.nextUrl.href);
				case "ip":
				case "geo": return;
				case "body": return null;
				case "arrayBuffer": return readEmptyBodyAsArrayBuffer;
				case "blob": return readEmptyBodyAsBlob;
				case "formData": return readEmptyBodyAsFormData;
				case "json": return readEmptyBodyAsJson;
				case "text": return readEmptyBodyAsText;
				case "clone": return () => wrapRequest(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
			if (requestMode === "error") switch (prop) {
				case "nextUrl":
					requireStaticNextUrl ??= wrapRequireStaticNextUrl(target.nextUrl);
					return requireStaticNextUrl;
				case "headers":
				case "cookies":
				case "url":
				case "ip":
				case "geo":
				case "body":
				case "blob":
				case "json":
				case "text":
				case "arrayBuffer":
				case "formData": return throwStaticGenerationError(`request.${String(prop)}`);
				case "clone": return () => wrapRequest(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
			switch (prop) {
				case "nextUrl":
					proxiedNextUrl ??= wrapNextUrl(target.nextUrl);
					return proxiedNextUrl;
				case "headers":
				case "cookies":
				case "ip":
				case "geo":
				case "url":
				case "body":
				case "blob":
				case "json":
				case "text":
				case "arrayBuffer":
				case "formData":
					markDynamicAccess(`request.${String(prop)}`);
					return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
				case "clone": return () => wrapRequest(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
		} });
	};
	return {
		request: wrapRequest(request),
		didAccessDynamicRequest() {
			return didAccessDynamicRequest;
		}
	};
}
/**
* Pulls a stringified `digest` off an unknown thrown value, or returns null
* when the value is not a digest-bearing error.
*/
function getNextErrorDigest(error) {
	if (!error || typeof error !== "object" || !("digest" in error)) return null;
	return String(error.digest);
}
/**
* Parses a `NEXT_REDIRECT;<type>;<encodedUrl>;<status>` digest. Returns null
* when the digest is not a redirect digest or the encoded URL segment is
* missing. The `url` is decoded with `decodeURIComponent`; the `status`
* defaults to 307 when omitted; an omitted `type` is left as null so the
* caller can apply the correct context-sensitive default.
*/
function parseNextRedirectDigest(digest) {
	if (!digest.startsWith("NEXT_REDIRECT;")) return null;
	const parts = digest.split(";");
	const encodedUrl = parts[2];
	if (!encodedUrl) return null;
	const type = parts[1];
	return {
		status: parts[3] ? parseInt(parts[3], 10) : 307,
		type: type || null,
		url: decodeURIComponent(encodedUrl)
	};
}
/**
* Parses a `NEXT_NOT_FOUND` or `NEXT_HTTP_ERROR_FALLBACK;<status>` digest.
* Returns `{ status: 404 }` for `NEXT_NOT_FOUND` and the parsed status code
* for the fallback form. Returns null otherwise.
*/
function parseNextHttpErrorDigest(digest) {
	if (digest === "NEXT_NOT_FOUND") return { status: 404 };
	if (digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;")) return { status: parseInt(digest.split(";")[1], 10) };
	return null;
}
function isPossibleAppRouteActionRequest(request) {
	if (request.method.toUpperCase() !== "POST") return false;
	const contentType = request.headers.get("content-type");
	return request.headers.has("x-rsc-action") || request.headers.has("next-action") || contentType === "application/x-www-form-urlencoded" || contentType?.startsWith("multipart/form-data") === true;
}
function getAppRouteHandlerRevalidateSeconds(handler) {
	const { revalidate } = handler;
	if (revalidate === false) return Infinity;
	if (typeof revalidate !== "number" || !Number.isFinite(revalidate) || revalidate < 0) return null;
	return revalidate;
}
function hasAppRouteHandlerDefaultExport(handler) {
	return typeof handler.default === "function";
}
function resolveAppRouteHandlerMethod(handler, method) {
	const exportedMethods = collectRouteHandlerMethods(handler);
	const allowHeaderForOptions = buildRouteHandlerAllowHeader(exportedMethods);
	const shouldAutoRespondToOptions = method === "OPTIONS" && typeof handler.OPTIONS !== "function";
	let handlerFn = typeof handler[method] === "function" ? handler[method] : void 0;
	let isAutoHead = false;
	if (method === "HEAD" && typeof handler.HEAD !== "function" && typeof handler.GET === "function") {
		handlerFn = handler.GET;
		isAutoHead = true;
	}
	return {
		allowHeaderForOptions,
		exportedMethods,
		handlerFn,
		isAutoHead,
		shouldAutoRespondToOptions
	};
}
function shouldReadAppRouteHandlerCache(options) {
	return options.isProduction && options.revalidateSeconds !== null && options.revalidateSeconds > 0 && options.revalidateSeconds !== Infinity && options.dynamicConfig !== "force-dynamic" && !options.isKnownDynamic && (options.method === "GET" || options.isAutoHead) && typeof options.handlerFn === "function";
}
function shouldApplyAppRouteHandlerRevalidateHeader(options) {
	return options.revalidateSeconds !== null && !options.dynamicUsedInHandler && (options.method === "GET" || options.isAutoHead) && !options.handlerSetCacheControl;
}
function shouldWriteAppRouteHandlerCache(options) {
	return options.isProduction && options.revalidateSeconds !== null && options.revalidateSeconds > 0 && options.revalidateSeconds !== Infinity && options.dynamicConfig !== "force-dynamic" && shouldApplyAppRouteHandlerRevalidateHeader(options);
}
function resolveAppRouteHandlerSpecialError(error, requestUrl, options) {
	if (!(error && typeof error === "object" && "digest" in error)) return null;
	const digest = String(error.digest);
	const redirect = parseNextRedirectDigest(digest);
	if (redirect) return {
		kind: "redirect",
		location: new URL(redirect.url, requestUrl).toString(),
		statusCode: options?.isAction ? 303 : redirect.status
	};
	const httpError = parseNextHttpErrorDigest(digest);
	if (httpError) return {
		kind: "status",
		statusCode: httpError.status
	};
	return null;
}
function getAppPageStaticGenerationErrorMessage() {
	return "Page with `dynamic = \"error\"` used a dynamic API. This page was expected to be fully static, but headers(), cookies(), or searchParams was accessed. Remove the dynamic API usage or change the dynamic config to \"auto\" or \"force-dynamic\".";
}
function getAppRouteStaticGenerationErrorMessage(routePattern, expression) {
	return `Route ${routePattern ?? "unknown route"} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression ?? "a dynamic request API"}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`;
}
function createStaticGenerationHeadersContext(options) {
	const context = {
		headers: new Headers(),
		cookies: /* @__PURE__ */ new Map()
	};
	if (options.dynamicConfig === "force-static") context.forceStatic = true;
	if (options.dynamicConfig === "error") context.accessError = new Error(options.routeKind === "route" ? getAppRouteStaticGenerationErrorMessage(options.routePattern) : getAppPageStaticGenerationErrorMessage());
	return context;
}
var APP_ROUTE_REWRITE_ERROR = "NextResponse.rewrite() was used in a app route handler, this is not currently supported. Please remove the invocation to continue.";
var APP_ROUTE_NEXT_ERROR = "NextResponse.next() was used in a app route handler, this is not supported. See here for more info: https://nextjs.org/docs/messages/next-response-next-in-app-route-handler";
function hasMiddlewareHeader(headers) {
	for (const key of headers.keys()) if (key.startsWith("x-middleware-")) return true;
	return false;
}
function buildRouteHandlerCacheControl(cacheState, revalidateSeconds, expireSeconds) {
	if (revalidateSeconds === 0) return NEVER_CACHE_CONTROL;
	if (revalidateSeconds === Infinity) return STATIC_CACHE_CONTROL;
	return buildCachedRevalidateCacheControl(cacheState, revalidateSeconds, expireSeconds);
}
function applyRouteHandlerMiddlewareContext(response, middlewareContext) {
	if (!middlewareContext.headers && middlewareContext.status == null) return response;
	const responseHeaders = new Headers(response.headers);
	mergeMiddlewareResponseHeaders(responseHeaders, middlewareContext.headers);
	return new Response(response.body, {
		status: middlewareContext.status ?? response.status,
		statusText: response.statusText,
		headers: responseHeaders
	});
}
function assertSupportedAppRouteHandlerResponse(response) {
	if (response.headers.has("x-middleware-rewrite")) throw new Error(APP_ROUTE_REWRITE_ERROR);
	if (response.headers.get("x-middleware-next") === "1") throw new Error(APP_ROUTE_NEXT_ERROR);
}
function buildRouteHandlerCachedResponse(cachedValue, options) {
	const headers = new Headers();
	for (const [key, value] of Object.entries(cachedValue.headers)) if (Array.isArray(value)) for (const entry of value) headers.append(key, entry);
	else headers.set(key, value);
	headers.set(VINEXT_CACHE_HEADER, options.cacheState);
	const revalidateSeconds = options.cacheControl?.revalidate ?? options.revalidateSeconds;
	const expireSeconds = options.cacheControl === void 0 ? void 0 : options.cacheControl.expire ?? options.expireSeconds;
	headers.set("Cache-Control", buildRouteHandlerCacheControl(options.cacheState, revalidateSeconds, expireSeconds));
	return new Response(options.isHead ? null : cachedValue.body, {
		status: cachedValue.status,
		headers
	});
}
function applyRouteHandlerRevalidateHeader(response, revalidateSeconds, expireSeconds) {
	response.headers.set("cache-control", buildRouteHandlerCacheControl("HIT", revalidateSeconds, expireSeconds));
}
function markRouteHandlerCacheMiss(response) {
	response.headers.set(VINEXT_CACHE_HEADER, "MISS");
}
function getSetCookieName(cookie) {
	const equalsIndex = cookie.indexOf("=");
	if (equalsIndex <= 0) return null;
	return cookie.slice(0, equalsIndex);
}
function applyMutableCookieFallbacks(headers, pendingCookies) {
	if (pendingCookies.length === 0) return;
	const returnedCookies = headers.getSetCookie();
	const returnedCookieNames = /* @__PURE__ */ new Set();
	for (const cookie of returnedCookies) {
		const name = getSetCookieName(cookie);
		if (name) returnedCookieNames.add(name);
	}
	const fallbackCookies = /* @__PURE__ */ new Map();
	const unkeyedFallbackCookies = [];
	for (const cookie of pendingCookies) {
		const name = getSetCookieName(cookie);
		if (!name) {
			unkeyedFallbackCookies.push(cookie);
			continue;
		}
		if (!returnedCookieNames.has(name)) fallbackCookies.set(name, cookie);
	}
	headers.delete("Set-Cookie");
	for (const cookie of unkeyedFallbackCookies) headers.append("Set-Cookie", cookie);
	for (const cookie of fallbackCookies.values()) headers.append("Set-Cookie", cookie);
	for (const cookie of returnedCookies) headers.append("Set-Cookie", cookie);
}
async function buildAppRouteCacheValue(response) {
	const body = await response.arrayBuffer();
	const headers = {};
	response.headers.forEach((value, key) => {
		if (key === "set-cookie" || key === "X-Vinext-Cache".toLowerCase() || key === "cache-control" || key.startsWith("x-middleware-")) return;
		headers[key] = value;
	});
	const setCookies = response.headers.getSetCookie?.() ?? [];
	if (setCookies.length > 0) headers["set-cookie"] = setCookies;
	return {
		kind: "APP_ROUTE",
		body,
		status: response.status,
		headers
	};
}
function finalizeRouteHandlerResponse(response, options) {
	const { pendingCookies, draftCookie, isHead } = options;
	if (pendingCookies.length === 0 && !draftCookie && !isHead && !hasMiddlewareHeader(response.headers)) return response;
	const headers = new Headers(response.headers);
	processMiddlewareHeaders(headers);
	applyMutableCookieFallbacks(headers, pendingCookies);
	if (draftCookie) headers.append("Set-Cookie", draftCookie);
	return new Response(isHead ? null : response.body, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
function configureAppRouteStaticGenerationContext(options) {
	if (options.dynamicConfig === "force-static" || options.dynamicConfig === "error") {
		setHeadersContext(createStaticGenerationHeadersContext({
			dynamicConfig: options.dynamicConfig,
			routeKind: "route",
			routePattern: options.routePattern
		}));
		options.setHeadersAccessPhase?.("route-handler");
	}
}
async function runAppRouteHandler(options) {
	options.consumeDynamicUsage();
	configureAppRouteStaticGenerationContext(options);
	const trackedRequest = createTrackedAppRouteRequest(options.request, {
		basePath: options.basePath,
		i18n: options.i18n,
		middlewareHeaders: options.middlewareRequestHeaders,
		onDynamicAccess() {
			options.markDynamicUsage();
		},
		requestMode: options.dynamicConfig === "force-static" || options.dynamicConfig === "error" ? options.dynamicConfig : "auto",
		staticGenerationErrorMessage(expression) {
			return getAppRouteStaticGenerationErrorMessage(options.routePattern, expression);
		}
	});
	const response = await options.handlerFn(trackedRequest.request, { params: options.params });
	return {
		dynamicUsedInHandler: options.consumeDynamicUsage(),
		response
	};
}
async function executeAppRouteHandler(options) {
	const previousHeadersPhase = options.setHeadersAccessPhase("route-handler");
	try {
		const { dynamicUsedInHandler, response } = await runAppRouteHandler({
			...options,
			dynamicConfig: options.handler.dynamic
		});
		assertSupportedAppRouteHandlerResponse(response);
		const handlerSetCacheControl = response.headers.has("cache-control");
		if (dynamicUsedInHandler) markKnownDynamicAppRoute(options.routePattern);
		if (shouldApplyAppRouteHandlerRevalidateHeader({
			dynamicUsedInHandler,
			handlerSetCacheControl,
			isAutoHead: options.isAutoHead,
			method: options.method,
			revalidateSeconds: options.revalidateSeconds
		})) {
			const revalidateSeconds = options.revalidateSeconds;
			if (revalidateSeconds == null) throw new Error("Expected route handler revalidate seconds");
			applyRouteHandlerRevalidateHeader(response, revalidateSeconds, options.expireSeconds);
		}
		if (shouldWriteAppRouteHandlerCache({
			dynamicConfig: options.handler.dynamic,
			dynamicUsedInHandler,
			handlerSetCacheControl,
			isAutoHead: options.isAutoHead,
			isProduction: options.isProduction,
			method: options.method,
			revalidateSeconds: options.revalidateSeconds
		})) {
			markRouteHandlerCacheMiss(response);
			const routeClone = response.clone();
			const routeKey = options.isrRouteKey(options.cleanPathname);
			const revalidateSeconds = options.revalidateSeconds;
			if (revalidateSeconds == null) throw new Error("Expected route handler cache revalidate seconds");
			const routeTags = options.buildPageCacheTags(options.cleanPathname, options.getCollectedFetchTags());
			const routeWritePromise = (async () => {
				try {
					const routeCacheValue = await buildAppRouteCacheValue(routeClone);
					await options.isrSet(routeKey, routeCacheValue, revalidateSeconds, routeTags, options.expireSeconds);
					options.isrDebug?.("route cache written", routeKey);
				} catch (cacheErr) {
					console.error("[vinext] ISR route cache write error:", cacheErr);
				}
			})();
			options.executionContext?.waitUntil(routeWritePromise);
		}
		const pendingCookies = options.getAndClearPendingCookies();
		const draftCookie = options.getDraftModeCookieHeader();
		options.clearRequestContext();
		return applyRouteHandlerMiddlewareContext(finalizeRouteHandlerResponse(response, {
			pendingCookies,
			draftCookie,
			isHead: options.isAutoHead
		}), options.middlewareContext);
	} catch (error) {
		const pendingCookies = options.getAndClearPendingCookies();
		const draftCookie = options.getDraftModeCookieHeader();
		const specialError = resolveAppRouteHandlerSpecialError(error, options.request.url, { isAction: isPossibleAppRouteActionRequest(options.request) });
		options.clearRequestContext();
		if (specialError) {
			if (specialError.kind === "redirect") return applyRouteHandlerMiddlewareContext(finalizeRouteHandlerResponse(new Response(null, {
				status: specialError.statusCode,
				headers: { Location: specialError.location }
			}), {
				pendingCookies,
				draftCookie,
				isHead: options.isAutoHead
			}), options.middlewareContext);
			return applyRouteHandlerMiddlewareContext(new Response(null, { status: specialError.statusCode }), options.middlewareContext);
		}
		console.error("[vinext] Route handler error:", error);
		options.reportRequestError(error instanceof Error ? error : new Error(String(error)), {
			path: options.cleanPathname,
			method: options.request.method,
			headers: Object.fromEntries(options.request.headers.entries())
		}, {
			routerKind: "App Router",
			routePath: options.routePattern,
			routeType: "route"
		});
		return applyRouteHandlerMiddlewareContext(new Response(null, { status: 500 }), options.middlewareContext);
	} finally {
		options.setHeadersAccessPhase(previousHeadersPhase);
	}
}
function getCachedAppRouteValue(entry) {
	return entry?.value.value && entry.value.value.kind === "APP_ROUTE" ? entry.value.value : null;
}
async function readAppRouteHandlerCacheResponse(options) {
	const routeKey = options.isrRouteKey(options.cleanPathname);
	try {
		const cached = await options.isrGet(routeKey);
		const cachedValue = getCachedAppRouteValue(cached);
		if (cachedValue && !cached?.isStale) {
			options.isrDebug?.("HIT (route)", options.cleanPathname);
			options.clearRequestContext();
			return applyRouteHandlerMiddlewareContext(buildRouteHandlerCachedResponse(cachedValue, {
				cacheState: "HIT",
				cacheControl: cached?.value.cacheControl,
				expireSeconds: options.expireSeconds,
				isHead: options.isAutoHead,
				revalidateSeconds: options.revalidateSeconds
			}), options.middlewareContext);
		}
		if (cached?.isStale && cachedValue) {
			const staleValue = cachedValue;
			const revalidateSearchParams = new URLSearchParams(options.revalidateSearchParams);
			options.scheduleBackgroundRegeneration(routeKey, async () => {
				await options.runInRevalidationContext(async () => {
					options.setNavigationContext({
						pathname: options.cleanPathname,
						searchParams: revalidateSearchParams,
						params: options.params
					});
					const { dynamicUsedInHandler, response } = await runAppRouteHandler({
						basePath: options.basePath,
						consumeDynamicUsage: options.consumeDynamicUsage,
						dynamicConfig: options.dynamicConfig,
						handlerFn: options.handlerFn,
						i18n: options.i18n,
						markDynamicUsage: options.markDynamicUsage,
						params: makeThenableParams(options.params),
						request: new Request(options.requestUrl, { method: "GET" }),
						routePattern: options.routePattern,
						setHeadersAccessPhase: options.setHeadersAccessPhase
					});
					options.setNavigationContext(null);
					assertSupportedAppRouteHandlerResponse(response);
					if (dynamicUsedInHandler) {
						markKnownDynamicAppRoute(options.routePattern);
						options.isrDebug?.("route regen skipped (dynamic usage)", options.cleanPathname);
						return;
					}
					const routeTags = options.buildPageCacheTags(options.cleanPathname, options.getCollectedFetchTags());
					const routeCacheValue = await buildAppRouteCacheValue(response);
					await options.isrSet(routeKey, routeCacheValue, options.revalidateSeconds, routeTags, options.expireSeconds);
					options.isrDebug?.("route regen complete", routeKey);
				});
			});
			options.isrDebug?.("STALE (route)", options.cleanPathname);
			options.clearRequestContext();
			return applyRouteHandlerMiddlewareContext(buildRouteHandlerCachedResponse(staleValue, {
				cacheState: "STALE",
				cacheControl: cached.value.cacheControl,
				expireSeconds: options.expireSeconds,
				isHead: options.isAutoHead,
				revalidateSeconds: options.revalidateSeconds
			}), options.middlewareContext);
		}
	} catch (routeCacheError) {
		console.error("[vinext] ISR route cache read error:", routeCacheError);
	}
	return null;
}
function isAppRouteHandlerFunction(value) {
	return typeof value === "function";
}
function buildRouteHandlerPageCacheTags(pathname, extraTags, routeSegments) {
	return buildPageCacheTags(pathname, extraTags, routeSegments, "route");
}
async function runInRouteHandlerRevalidationContext(options, renderFn) {
	await runWithRequestContext(createRequestContext({
		headersContext: createStaticGenerationHeadersContext({
			dynamicConfig: options.dynamicConfig,
			routeKind: "route",
			routePattern: options.routePattern
		}),
		executionContext: getRequestExecutionContext(),
		unstableCacheRevalidation: "foreground"
	}), async () => {
		ensureFetchPatch();
		setCurrentFetchSoftTags(buildRouteHandlerPageCacheTags(options.cleanPathname, [], options.routeSegments));
		await renderFn();
	});
}
async function dispatchAppRouteHandler(options) {
	const { route } = options;
	const handler = route.routeHandler;
	const method = options.request.method.toUpperCase();
	const revalidateSeconds = getAppRouteHandlerRevalidateSeconds(handler);
	const isDevelopment = options.isDevelopment ?? false;
	const isProduction = options.isProduction ?? true;
	if (hasAppRouteHandlerDefaultExport(handler) && isDevelopment) console.error("[vinext] Detected default export in route handler " + route.pattern + ". Export a named export for each HTTP method instead.");
	if (!isValidHTTPMethod(method)) {
		options.clearRequestContext();
		return applyRouteHandlerMiddlewareContext(new Response(null, { status: 400 }), options.middlewareContext);
	}
	const { allowHeaderForOptions, handlerFn, isAutoHead, shouldAutoRespondToOptions } = resolveAppRouteHandlerMethod(handler, method);
	if (shouldAutoRespondToOptions) {
		options.clearRequestContext();
		return applyRouteHandlerMiddlewareContext(new Response(null, {
			status: 204,
			headers: { Allow: allowHeaderForOptions }
		}), options.middlewareContext);
	}
	const resolvedHandlerFn = isAppRouteHandlerFunction(handlerFn) ? handlerFn : void 0;
	if (revalidateSeconds !== null && shouldReadAppRouteHandlerCache({
		dynamicConfig: handler.dynamic,
		handlerFn: resolvedHandlerFn,
		isAutoHead,
		isKnownDynamic: isKnownDynamicAppRoute(route.pattern),
		isProduction,
		method,
		revalidateSeconds
	}) && resolvedHandlerFn) {
		const cachedRouteResponse = await readAppRouteHandlerCacheResponse({
			basePath: options.basePath,
			buildPageCacheTags(pathname, extraTags) {
				return buildRouteHandlerPageCacheTags(pathname, extraTags, route.routeSegments);
			},
			cleanPathname: options.cleanPathname,
			clearRequestContext: options.clearRequestContext,
			consumeDynamicUsage,
			dynamicConfig: handler.dynamic,
			getCollectedFetchTags,
			handlerFn: resolvedHandlerFn,
			i18n: options.i18n,
			isAutoHead,
			isrDebug: options.isrDebug,
			isrGet: options.isrGet,
			isrRouteKey: options.isrRouteKey,
			isrSet: options.isrSet,
			markDynamicUsage,
			middlewareContext: options.middlewareContext,
			params: options.params,
			requestUrl: options.request.url,
			revalidateSearchParams: options.searchParams,
			expireSeconds: options.expireSeconds,
			revalidateSeconds,
			routePattern: route.pattern,
			runInRevalidationContext(renderFn) {
				return runInRouteHandlerRevalidationContext({
					cleanPathname: options.cleanPathname,
					dynamicConfig: handler.dynamic,
					routePattern: route.pattern,
					routeSegments: route.routeSegments
				}, renderFn);
			},
			scheduleBackgroundRegeneration(key, renderFn) {
				options.scheduleBackgroundRegeneration(key, renderFn, {
					routerKind: "App Router",
					routePath: route.pattern,
					routeType: "route"
				});
			},
			setHeadersAccessPhase,
			setNavigationContext
		});
		if (cachedRouteResponse) return cachedRouteResponse;
	}
	if (resolvedHandlerFn) return executeAppRouteHandler({
		basePath: options.basePath,
		buildPageCacheTags(pathname, extraTags) {
			return buildRouteHandlerPageCacheTags(pathname, extraTags, route.routeSegments);
		},
		cleanPathname: options.cleanPathname,
		clearRequestContext: options.clearRequestContext,
		consumeDynamicUsage,
		executionContext: getRequestExecutionContext(),
		getAndClearPendingCookies,
		getCollectedFetchTags,
		getDraftModeCookieHeader,
		handler,
		handlerFn: resolvedHandlerFn,
		i18n: options.i18n,
		isAutoHead,
		isProduction,
		isrDebug: options.isrDebug,
		isrRouteKey: options.isrRouteKey,
		isrSet: options.isrSet,
		markDynamicUsage,
		method,
		middlewareContext: options.middlewareContext,
		middlewareRequestHeaders: options.middlewareRequestHeaders,
		params: makeThenableParams(options.params),
		reportRequestError(error, request, context) {
			reportRequestError(error, request, context);
		},
		request: options.request,
		expireSeconds: options.expireSeconds,
		revalidateSeconds,
		routePattern: route.pattern,
		setHeadersAccessPhase
	});
	options.clearRequestContext();
	return applyRouteHandlerMiddlewareContext(new Response(null, { status: 405 }), options.middlewareContext);
}
/**
* Helpers for the repeated `new TextDecoder()` + `ReadableStream` chunk-loop
* pattern used across the server. Each helper handles the streaming-decode
* boundary correctly (final empty `decoder.decode()` flush so any incomplete
* trailing UTF-8 sequence is reported).
*
* Sites with additional load-bearing behaviour (line-buffered transforms,
* raw-byte accumulators, mixed string/Uint8Array streams, cache-key body
* canonicalisation) intentionally still inline their own decoder.
*/
/**
* Drain a UTF-8 byte stream and return the full decoded text. The stream
* reader is released on both success and failure.
*/
async function readStreamAsText(stream) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();
	const chunks = [];
	try {
		for (;;) {
			const { done, value } = await reader.read();
			if (done) break;
			chunks.push(decoder.decode(value, { stream: true }));
		}
		chunks.push(decoder.decode());
		return chunks.join("");
	} finally {
		reader.releaseLock();
	}
}
/**
* Drain a UTF-8 byte stream up to `maxBytes` of *raw* input, returning the
* decoded text. If the raw size limit is exceeded, the reader is cancelled
* and `onLimitExceeded` is invoked; it MUST throw — its return type is
* `never` to enforce that. Each caller passes its own error type.
*
* The size check is on raw bytes (pre-decode) to bound memory before
* paying the decoder cost.
*/
async function readStreamAsTextWithLimit(stream, maxBytes, onLimitExceeded) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();
	const chunks = [];
	let totalSize = 0;
	try {
		for (;;) {
			const result = await reader.read();
			if (result.done) break;
			totalSize += result.value.byteLength;
			if (totalSize > maxBytes) {
				await reader.cancel();
				onLimitExceeded();
			}
			chunks.push(decoder.decode(result.value, { stream: true }));
		}
		chunks.push(decoder.decode());
		return chunks.join("");
	} finally {
		reader.releaseLock();
	}
}
var SERVER_ACTION_NOT_FOUND_DOCS = "https://nextjs.org/docs/messages/failed-to-find-server-action";
var SERVER_ACTION_NOT_FOUND_BODY = "Server action not found.";
function getServerActionNotFoundPrefix(actionId) {
	return `Failed to find Server Action${actionId ? ` "${actionId}"` : ""}.`;
}
function getServerActionNotFoundMessage(actionId) {
	return `${getServerActionNotFoundPrefix(actionId)} This request might be from an older or newer deployment.\nRead more: ${SERVER_ACTION_NOT_FOUND_DOCS}`;
}
function getUnknownMessage(error) {
	if (error instanceof Error) return error.message;
	return typeof error === "string" ? error : "";
}
function isServerActionNotFoundError(error, actionId) {
	const message = getUnknownMessage(error);
	if (!message) return false;
	if (!actionId) return message.startsWith("Failed to find Server Action");
	if (message.startsWith(getServerActionNotFoundPrefix(actionId))) return true;
	return Boolean(actionId && message.includes(`[vite-rsc] invalid server reference '${actionId}'`));
}
function createServerActionNotFoundResponse() {
	return new Response(SERVER_ACTION_NOT_FOUND_BODY, {
		status: 404,
		headers: {
			[NEXTJS_ACTION_NOT_FOUND_HEADER]: "1",
			"content-type": "text/plain"
		}
	});
}
function getAppPageSegmentParamName(segment) {
	if (segment.startsWith("[[...") && segment.endsWith("]]") && segment.length > 7) return segment.slice(5, -2);
	if (segment.startsWith("[...") && segment.endsWith("]") && segment.length > 5) return segment.slice(4, -1);
	if (segment.startsWith("[") && segment.endsWith("]") && !segment.includes(".") && segment.length > 2) return segment.slice(1, -1);
	return null;
}
function isEmptyOptionalCatchAll(segment, paramValue) {
	return segment.startsWith("[[...") && Array.isArray(paramValue) && paramValue.length === 0;
}
function resolveAppPageSegmentParams(routeSegments, treePosition, matchedParams) {
	const segmentParams = {};
	const segments = routeSegments ?? [];
	const end = Math.min(Math.max(treePosition, 0), segments.length);
	for (let index = 0; index < end; index++) {
		const segment = segments[index];
		const paramName = getAppPageSegmentParamName(segment);
		if (!paramName) continue;
		const paramValue = matchedParams[paramName];
		if (paramValue === void 0 || isEmptyOptionalCatchAll(segment, paramValue)) continue;
		segmentParams[paramName] = paramValue;
	}
	return segmentParams;
}
function pickRouteParams(matchedParams, routeParamNames) {
	const params = {};
	for (const paramName of routeParamNames) {
		const value = matchedParams[paramName];
		if (value !== void 0) params[paramName] = value;
	}
	return params;
}
function collectParentParamNames(routeSegments, boundaryPosition) {
	const limit = Math.max(0, Math.min(boundaryPosition, routeSegments.length));
	const names = [];
	for (const segment of routeSegments.slice(0, limit)) {
		const name = getAppPageSegmentParamName(segment);
		if (name && !names.includes(name)) names.push(name);
	}
	return names;
}
function getLayoutGenerateStaticParamsBoundary(layoutTreePosition) {
	return (layoutTreePosition ?? 0) - 1;
}
function resolveAppPageGenerateStaticParamsSources(options) {
	const sources = [];
	options.layouts?.forEach((layout, index) => {
		if (typeof layout?.generateStaticParams !== "function") return;
		sources.push({
			generateStaticParams: layout.generateStaticParams,
			parentParamNames: collectParentParamNames(options.routeSegments, getLayoutGenerateStaticParamsBoundary(options.layoutTreePositions?.[index]))
		});
	});
	if (typeof options.page?.generateStaticParams === "function") sources.push({
		generateStaticParams: options.page.generateStaticParams,
		parentParamNames: collectParentParamNames(options.routeSegments, Math.max(0, options.routeSegments.length - 1))
	});
	return sources;
}
function areStaticParamsAllowed(params, staticParams) {
	const paramKeys = Object.keys(params);
	return staticParams.some((staticParamSet) => paramKeys.every((key) => {
		const value = params[key];
		const staticValue = staticParamSet[key];
		if (staticValue === void 0) return true;
		if (Array.isArray(value)) return JSON.stringify(value) === JSON.stringify(staticValue);
		if (typeof staticValue === "string" || typeof staticValue === "number" || typeof staticValue === "boolean") return String(value) === String(staticValue);
		return JSON.stringify(value) === JSON.stringify(staticValue);
	}));
}
function normalizeGenerateStaticParams(generateStaticParams) {
	return (Array.isArray(generateStaticParams) ? generateStaticParams : [generateStaticParams]).flatMap((source) => {
		if (typeof source === "function") return [{
			generateStaticParams: source,
			parentParamNames: []
		}];
		if (typeof source?.generateStaticParams === "function") return [source];
		return [];
	});
}
async function validateAppPageDynamicParams(options) {
	if (!options.enforceStaticParamsOnly || !options.isDynamicRoute) return null;
	const generateStaticParamsSources = normalizeGenerateStaticParams(options.generateStaticParams);
	if (generateStaticParamsSources.length === 0) {
		options.clearRequestContext();
		return notFoundResponse();
	}
	for (const source of generateStaticParamsSources) {
		const staticParams = await runWithFetchDedupe(() => source.generateStaticParams({ params: pickRouteParams(options.params, source.parentParamNames) }));
		if (Array.isArray(staticParams) && !areStaticParamsAllowed(options.params, staticParams)) {
			options.clearRequestContext();
			return notFoundResponse();
		}
	}
	return null;
}
function resolveAppPageInterceptState(options) {
	if (!options.isRscRequest) return { kind: "none" };
	const intercept = options.findIntercept(options.cleanPathname);
	if (!intercept) return { kind: "none" };
	const sourceRoute = options.getSourceRoute(intercept.sourceRouteIndex);
	if (!sourceRoute) return { kind: "none" };
	if (sourceRoute === options.currentRoute) return {
		kind: "current-route",
		intercept
	};
	return {
		kind: "source-route",
		intercept,
		sourceRoute
	};
}
function resolveAppPageActionRerenderTarget(options) {
	const interceptState = resolveAppPageInterceptState({
		cleanPathname: options.cleanPathname,
		currentRoute: options.currentRoute,
		findIntercept: options.findIntercept,
		getRouteParamNames: options.getRouteParamNames,
		getSourceRoute: options.getSourceRoute,
		isRscRequest: options.isRscRequest,
		toInterceptOpts: options.toInterceptOpts
	});
	if (interceptState.kind === "source-route") return {
		interceptOpts: options.toInterceptOpts(interceptState.intercept),
		navigationParams: interceptState.intercept.matchedParams,
		params: pickRouteParams(interceptState.intercept.matchedParams, options.getRouteParamNames(interceptState.sourceRoute)),
		route: interceptState.sourceRoute
	};
	return {
		interceptOpts: interceptState.kind === "current-route" ? options.toInterceptOpts(interceptState.intercept) : void 0,
		navigationParams: options.currentParams,
		params: options.currentParams,
		route: options.currentRoute
	};
}
async function resolveAppPageIntercept(options) {
	const interceptState = resolveAppPageInterceptState({
		cleanPathname: options.cleanPathname,
		currentRoute: options.currentRoute,
		findIntercept: options.findIntercept,
		getRouteParamNames: options.getRouteParamNames,
		getSourceRoute: options.getSourceRoute,
		isRscRequest: options.isRscRequest,
		toInterceptOpts: options.toInterceptOpts
	});
	if (interceptState.kind === "source-route") {
		options.setNavigationContext({
			params: interceptState.intercept.matchedParams,
			pathname: options.cleanPathname,
			searchParams: options.searchParams
		});
		const interceptElement = await options.buildPageElement(interceptState.sourceRoute, pickRouteParams(interceptState.intercept.matchedParams, options.getRouteParamNames(interceptState.sourceRoute)), options.toInterceptOpts(interceptState.intercept), options.searchParams);
		return {
			interceptOpts: void 0,
			response: await options.renderInterceptResponse(interceptState.sourceRoute, interceptElement)
		};
	}
	return {
		interceptOpts: interceptState.kind === "current-route" ? options.toInterceptOpts(interceptState.intercept) : void 0,
		response: null
	};
}
async function buildAppPageElement(options) {
	try {
		return {
			element: await options.buildPageElement(),
			response: null
		};
	} catch (error) {
		const specialError = options.resolveSpecialError(error);
		if (specialError) return {
			element: null,
			response: await options.renderSpecialError(specialError)
		};
		const errorBoundaryResponse = await options.renderErrorBoundaryPage(error);
		if (errorBoundaryResponse) return {
			element: null,
			response: errorBoundaryResponse
		};
		throw error;
	}
}
/**
* Matches Next.js' server action argument cap to prevent stack overflow in
* Function.prototype.apply when decoding hostile action payloads.
*/
var SERVER_ACTION_ARGS_LIMIT = 1e3;
var ACTION_DID_NOT_REVALIDATE = 0;
var ACTION_DID_REVALIDATE_STATIC_AND_DYNAMIC = 1;
function setActionRevalidatedHeader(headers, kind) {
	if (kind === ACTION_DID_NOT_REVALIDATE) return;
	headers.set(ACTION_REVALIDATED_HEADER, JSON.stringify(kind));
}
function resolveActionRevalidationKind(hasModifiedCookies) {
	const revalidationKind = getAndClearActionRevalidationKind();
	if (hasModifiedCookies) return ACTION_DID_REVALIDATE_STATIC_AND_DYNAMIC;
	return revalidationKind;
}
function isRequestBodyTooLarge(error) {
	return error instanceof Error && error.message === "Request body too large";
}
function isAppServerActionFunction(action) {
	return typeof action === "function";
}
function normalizeError(error) {
	return error instanceof Error ? error : new Error(String(error));
}
function validateServerActionArgs(args) {
	if (args.length > SERVER_ACTION_ARGS_LIMIT) throw new Error(`Server Action arguments list is too long (${args.length}). Maximum allowed is ${SERVER_ACTION_ARGS_LIMIT}.`);
}
async function readActionBodyWithLimit(request, maxBytes) {
	if (!request.body) return "";
	return readStreamAsTextWithLimit(request.body, maxBytes, () => {
		throw new Error("Request body too large");
	});
}
async function readActionFormDataWithLimit(request, maxBytes) {
	if (!request.body) return new FormData();
	const reader = request.body.getReader();
	const chunks = [];
	let totalSize = 0;
	for (;;) {
		const result = await reader.read();
		if (result.done) break;
		totalSize += result.value.byteLength;
		if (totalSize > maxBytes) {
			await reader.cancel();
			throw new Error("Request body too large");
		}
		chunks.push(result.value);
	}
	const combined = new Uint8Array(totalSize);
	let offset = 0;
	for (const chunk of chunks) {
		combined.set(chunk, offset);
		offset += chunk.byteLength;
	}
	return new Response(combined, { headers: { "Content-Type": request.headers.get("content-type") || "" } }).formData();
}
function getActionControlResponse(error) {
	const digest = getNextErrorDigest(error);
	if (!digest) return null;
	const redirect = parseNextRedirectDigest(digest);
	if (redirect) return {
		kind: "redirect",
		url: redirect.url
	};
	const httpError = parseNextHttpErrorDigest(digest);
	if (httpError) {
		if (!Number.isInteger(httpError.status)) return null;
		return {
			kind: "status",
			statusCode: httpError.status
		};
	}
	return null;
}
function getActionRedirect(error) {
	const digest = getNextErrorDigest(error);
	if (!digest) return null;
	const redirect = parseNextRedirectDigest(digest);
	if (!redirect) return null;
	return {
		status: redirect.status,
		type: redirect.type ?? "push",
		url: redirect.url
	};
}
function getActionHttpFallbackStatus(error) {
	const digest = getNextErrorDigest(error);
	if (!digest) return null;
	const httpError = parseNextHttpErrorDigest(digest);
	if (!httpError || !Number.isInteger(httpError.status)) return null;
	return httpError.status;
}
function createServerActionErrorResponse(error, options) {
	options.getAndClearPendingCookies();
	console.error("[vinext] Server action error:", error);
	options.reportRequestError(normalizeError(error), {
		path: options.cleanPathname,
		method: options.request.method,
		headers: Object.fromEntries(options.request.headers.entries())
	}, {
		routerKind: "App Router",
		routePath: options.cleanPathname,
		routeType: "action"
	});
	options.clearRequestContext();
	return internalServerErrorResponse(void 0);
}
function createActionNotFoundResponse(actionId, options) {
	options.getAndClearPendingCookies();
	console.warn(getServerActionNotFoundMessage(actionId));
	options.clearRequestContext();
	return createServerActionNotFoundResponse();
}
function isProgressiveServerActionRequest(request, contentType, actionId) {
	return request.method.toUpperCase() === "POST" && contentType.startsWith("multipart/form-data") && !actionId;
}
async function handleProgressiveServerActionRequest(options) {
	if (!isProgressiveServerActionRequest(options.request, options.contentType, options.actionId)) return null;
	const csrfResponse = validateCsrfOrigin(options.request, options.allowedOrigins);
	if (csrfResponse) return csrfResponse;
	if (parseInt(options.request.headers.get("content-length") || "0", 10) > options.maxActionBodySize) {
		options.clearRequestContext();
		return payloadTooLargeResponse();
	}
	try {
		let body;
		try {
			body = await options.readFormDataWithLimit(options.request.clone(), options.maxActionBodySize);
		} catch (error) {
			if (isRequestBodyTooLarge(error)) {
				options.clearRequestContext();
				return payloadTooLargeResponse();
			}
			throw error;
		}
		const payloadResponse = await validateServerActionPayload(body);
		if (payloadResponse) {
			options.clearRequestContext();
			return payloadResponse;
		}
		const action = await options.decodeAction(body);
		if (!isAppServerActionFunction(action)) return null;
		let actionControlResponse = null;
		let actionResult;
		const previousHeadersPhase = options.setHeadersAccessPhase("action");
		try {
			actionResult = await action();
		} catch (error) {
			actionControlResponse = getActionControlResponse(error);
			if (!actionControlResponse) throw error;
		} finally {
			options.setHeadersAccessPhase(previousHeadersPhase);
		}
		if (!actionControlResponse) {
			getAndClearActionRevalidationKind();
			return {
				kind: "form-state",
				formState: await options.decodeFormState(actionResult, body) ?? null
			};
		}
		const actionPendingCookies = options.getAndClearPendingCookies();
		const actionDraftCookie = options.getDraftModeCookieHeader();
		const actionRevalidationKind = resolveActionRevalidationKind(actionPendingCookies.length > 0 || Boolean(actionDraftCookie));
		options.clearRequestContext();
		const headers = new Headers();
		if (actionControlResponse.kind === "redirect") headers.set("Location", new URL(actionControlResponse.url, options.request.url).toString());
		mergeMiddlewareResponseHeaders(headers, options.middlewareHeaders);
		for (const cookie of actionPendingCookies) headers.append("Set-Cookie", cookie);
		if (actionDraftCookie) headers.append("Set-Cookie", actionDraftCookie);
		setActionRevalidatedHeader(headers, actionRevalidationKind);
		return new Response(null, {
			status: actionControlResponse.kind === "redirect" ? 303 : actionControlResponse.statusCode,
			headers
		});
	} catch (error) {
		if (isServerActionNotFoundError(error, null)) return createActionNotFoundResponse(null, {
			clearRequestContext: options.clearRequestContext,
			getAndClearPendingCookies: options.getAndClearPendingCookies
		});
		getAndClearActionRevalidationKind();
		options.getAndClearPendingCookies();
		console.error("[vinext] Server action error:", error);
		options.reportRequestError(normalizeError(error), {
			path: options.cleanPathname,
			method: options.request.method,
			headers: Object.fromEntries(options.request.headers.entries())
		}, {
			routerKind: "App Router",
			routePath: options.cleanPathname,
			routeType: "action"
		});
		options.clearRequestContext();
		return internalServerErrorResponse(void 0);
	}
}
async function handleServerActionRscRequest(options) {
	if (options.request.method.toUpperCase() !== "POST" || !options.actionId) return null;
	const csrfResponse = validateCsrfOrigin(options.request, options.allowedOrigins);
	if (csrfResponse) return csrfResponse;
	if (parseInt(options.request.headers.get("content-length") || "0", 10) > options.maxActionBodySize) {
		options.clearRequestContext();
		return payloadTooLargeResponse();
	}
	try {
		let body;
		try {
			body = options.contentType.startsWith("multipart/form-data") ? await options.readFormDataWithLimit(options.request, options.maxActionBodySize) : await options.readBodyWithLimit(options.request, options.maxActionBodySize);
		} catch (error) {
			if (isRequestBodyTooLarge(error)) {
				options.clearRequestContext();
				return payloadTooLargeResponse();
			}
			throw error;
		}
		const payloadResponse = await validateServerActionPayload(body);
		if (payloadResponse) {
			options.clearRequestContext();
			return payloadResponse;
		}
		let action;
		try {
			action = await options.loadServerAction(options.actionId);
		} catch (error) {
			if (isServerActionNotFoundError(error, options.actionId)) return createActionNotFoundResponse(options.actionId, {
				clearRequestContext: options.clearRequestContext,
				getAndClearPendingCookies: options.getAndClearPendingCookies
			});
			throw error;
		}
		if (!isAppServerActionFunction(action)) return createActionNotFoundResponse(options.actionId, {
			clearRequestContext: options.clearRequestContext,
			getAndClearPendingCookies: options.getAndClearPendingCookies
		});
		const temporaryReferences = options.createTemporaryReferenceSet();
		const args = await options.decodeReply(body, { temporaryReferences });
		let returnValue;
		let actionRedirect = null;
		let actionStatus = 200;
		const previousHeadersPhase = options.setHeadersAccessPhase("action");
		try {
			try {
				validateServerActionArgs(args);
				returnValue = {
					ok: true,
					data: await action.apply(null, args)
				};
			} catch (error) {
				actionRedirect = getActionRedirect(error);
				if (actionRedirect) returnValue = {
					ok: true,
					data: void 0
				};
				else {
					const httpFallbackStatus = getActionHttpFallbackStatus(error);
					if (httpFallbackStatus !== null) {
						actionStatus = httpFallbackStatus;
						returnValue = {
							ok: false,
							data: error
						};
					} else {
						console.error("[vinext] Server action error:", error);
						returnValue = {
							ok: false,
							data: options.sanitizeErrorForClient(error)
						};
					}
				}
			}
		} finally {
			options.setHeadersAccessPhase(previousHeadersPhase);
		}
		if (actionRedirect) {
			const actionPendingCookies = options.getAndClearPendingCookies();
			const actionDraftCookie = options.getDraftModeCookieHeader();
			const actionRevalidationKind = resolveActionRevalidationKind(actionPendingCookies.length > 0 || Boolean(actionDraftCookie));
			options.clearRequestContext();
			const redirectHeaders = new Headers({
				"Content-Type": "text/x-component; charset=utf-8",
				Vary: VINEXT_RSC_VARY_HEADER
			});
			mergeMiddlewareResponseHeaders(redirectHeaders, options.middlewareHeaders);
			redirectHeaders.set(ACTION_REDIRECT_HEADER, actionRedirect.url);
			redirectHeaders.set(ACTION_REDIRECT_TYPE_HEADER, actionRedirect.type);
			redirectHeaders.set(ACTION_REDIRECT_STATUS_HEADER, String(actionRedirect.status));
			for (const cookie of actionPendingCookies) redirectHeaders.append("Set-Cookie", cookie);
			if (actionDraftCookie) redirectHeaders.append("Set-Cookie", actionDraftCookie);
			setActionRevalidatedHeader(redirectHeaders, actionRevalidationKind);
			return new Response("", {
				status: 200,
				headers: redirectHeaders
			});
		}
		const actionPendingCookies = options.getAndClearPendingCookies();
		const actionDraftCookie = options.getDraftModeCookieHeader();
		const actionRevalidationKind = resolveActionRevalidationKind(actionPendingCookies.length > 0 || Boolean(actionDraftCookie));
		if (actionRevalidationKind === ACTION_DID_NOT_REVALIDATE) {
			const onRenderError = options.createRscOnErrorHandler(options.request, options.cleanPathname, options.cleanPathname);
			const rscStream = await options.renderToReadableStream({ returnValue }, {
				temporaryReferences,
				onError: onRenderError
			});
			options.clearRequestContext();
			const actionHeaders = new Headers({
				"Content-Type": "text/x-component; charset=utf-8",
				Vary: VINEXT_RSC_VARY_HEADER
			});
			mergeMiddlewareResponseHeaders(actionHeaders, options.middlewareHeaders);
			return new Response(rscStream, {
				status: options.middlewareStatus ?? actionStatus,
				headers: actionHeaders
			});
		}
		const match = options.matchRoute(options.cleanPathname);
		let element;
		let errorPattern = match ? match.route.pattern : options.cleanPathname;
		if (match) {
			const { route: actionRoute, params: actionParams } = match;
			const actionRerenderTarget = resolveAppPageActionRerenderTarget({
				cleanPathname: options.cleanPathname,
				currentParams: actionParams,
				currentRoute: actionRoute,
				findIntercept: options.findIntercept,
				getRouteParamNames: options.getRouteParamNames,
				getSourceRoute: options.getSourceRoute,
				isRscRequest: options.isRscRequest,
				toInterceptOpts: options.toInterceptOpts
			});
			options.setNavigationContext({
				pathname: options.cleanPathname,
				searchParams: options.searchParams,
				params: actionRerenderTarget.navigationParams
			});
			setCurrentFetchCacheMode(options.resolveRouteFetchCacheMode?.(actionRerenderTarget.route) ?? null);
			element = options.buildPageElement({
				cleanPathname: options.cleanPathname,
				interceptOpts: actionRerenderTarget.interceptOpts,
				isRscRequest: options.isRscRequest,
				mountedSlotsHeader: options.mountedSlotsHeader,
				params: actionRerenderTarget.params,
				request: options.request,
				route: actionRerenderTarget.route,
				searchParams: options.searchParams,
				renderMode: APP_RSC_RENDER_MODE_ACTION_RERENDER_PRESERVE_UI
			});
			errorPattern = actionRerenderTarget.route.pattern;
		} else {
			const actionRouteId = options.createPayloadRouteId(options.cleanPathname, null);
			element = options.createNotFoundElement(actionRouteId);
		}
		const onRenderError = options.createRscOnErrorHandler(options.request, options.cleanPathname, errorPattern);
		const rscStream = await options.renderToReadableStream({
			root: element,
			returnValue
		}, {
			temporaryReferences,
			onError: onRenderError
		});
		const actionHeaders = new Headers({
			"Content-Type": "text/x-component; charset=utf-8",
			Vary: VINEXT_RSC_VARY_HEADER
		});
		mergeMiddlewareResponseHeaders(actionHeaders, options.middlewareHeaders);
		setActionRevalidatedHeader(actionHeaders, actionRevalidationKind);
		const actionResponse = new Response(rscStream, {
			status: options.middlewareStatus ?? actionStatus,
			headers: actionHeaders
		});
		if (actionPendingCookies.length > 0 || actionDraftCookie) {
			for (const cookie of actionPendingCookies) actionResponse.headers.append("Set-Cookie", cookie);
			if (actionDraftCookie) actionResponse.headers.append("Set-Cookie", actionDraftCookie);
		}
		return actionResponse;
	} catch (error) {
		getAndClearActionRevalidationKind();
		return createServerActionErrorResponse(error, {
			cleanPathname: options.cleanPathname,
			clearRequestContext: options.clearRequestContext,
			getAndClearPendingCookies: options.getAndClearPendingCookies,
			reportRequestError: options.reportRequestError,
			request: options.request
		});
	}
}
function isPromiseLike(value) {
	return Boolean(value && (typeof value === "object" || typeof value === "function") && "then" in value && typeof value.then === "function");
}
function getAppPageStatusText(statusCode) {
	return statusCode === 403 ? "Forbidden" : statusCode === 401 ? "Unauthorized" : "Not Found";
}
function mergeAppPageSpecialErrorHeaders(response, middlewareContext) {
	const headers = new Headers(response.headers);
	mergeMiddlewareResponseHeaders(headers, middlewareContext?.headers ?? null);
	return new Response(response.body, {
		headers,
		status: response.status,
		statusText: response.statusText
	});
}
function resolveAppPageSpecialError(error) {
	if (!(error && typeof error === "object" && "digest" in error)) return null;
	const digest = String(error.digest);
	const redirect = parseNextRedirectDigest(digest);
	if (redirect) return {
		kind: "redirect",
		location: redirect.url,
		statusCode: redirect.status
	};
	const httpError = parseNextHttpErrorDigest(digest);
	if (httpError) return {
		kind: "http-access-fallback",
		statusCode: httpError.status
	};
	return null;
}
/**
* Resolves a redirect() target against the request URL and prepends the
* configured basePath when the target is an app-internal absolute path.
*
* Mirrors Next.js's `addPathPrefix(getURLFromRedirectError(err), basePath)`
* in `app-render.tsx`: a `redirect("/about")` call from a page mounted at
* `/blog` (basePath) produces `Location: /blog/about`.
*
* Skips prefixing when:
*  - basePath is unset / empty
*  - the target is a full URL pointing at a different origin (external redirect)
*  - the target already starts with the basePath (caller did the work themselves)
*/
function applyAppPageRedirectBasePath(location, requestUrl, basePath) {
	const resolved = new URL(location, requestUrl);
	const requestOrigin = new URL(requestUrl).origin;
	if (!basePath || resolved.origin !== requestOrigin) return resolved.toString();
	if (hasBasePath(resolved.pathname, basePath)) return resolved.toString();
	resolved.pathname = resolved.pathname === "/" ? basePath : `${basePath}${resolved.pathname}`;
	return resolved.toString();
}
async function buildAppPageSpecialErrorResponse(options) {
	if (options.specialError.kind === "redirect") {
		options.clearRequestContext();
		const prefixedLocation = applyAppPageRedirectBasePath(options.specialError.location, options.request.url, options.basePath);
		const location = options.isRscRequest ? await createRscRedirectLocation(prefixedLocation, options.request) : prefixedLocation;
		const headers = new Headers({ Location: location });
		mergeMiddlewareResponseHeaders(headers, options.middlewareContext?.headers ?? null);
		const pendingCookies = options.getAndClearPendingCookies?.() ?? [];
		for (const cookie of pendingCookies) headers.append("Set-Cookie", cookie);
		return new Response(null, {
			headers,
			status: options.specialError.statusCode
		});
	}
	if (options.renderFallbackPage) {
		const fallbackResponse = await options.renderFallbackPage(options.specialError.statusCode);
		if (fallbackResponse) return mergeAppPageSpecialErrorHeaders(fallbackResponse, options.middlewareContext);
	}
	options.clearRequestContext();
	return mergeAppPageSpecialErrorHeaders(new Response(getAppPageStatusText(options.specialError.statusCode), { status: options.specialError.statusCode }), options.middlewareContext);
}
/** See `LayoutFlags` type docblock in app-elements.ts for lifecycle. */
async function probeAppPageLayouts(options) {
	const layoutFlags = {};
	const cls = options.classification ?? null;
	return {
		response: await options.runWithSuppressedHookWarning(async () => {
			for (let layoutIndex = options.layoutCount - 1; layoutIndex >= 0; layoutIndex--) {
				const buildTimeResult = cls?.buildTimeClassifications?.get(layoutIndex);
				if (cls && buildTimeResult) {
					layoutFlags[cls.getLayoutId(layoutIndex)] = buildTimeResult === "static" ? "s" : "d";
					if (cls.debugClassification) cls.debugClassification(cls.getLayoutId(layoutIndex), cls.buildTimeReasons?.get(layoutIndex) ?? { layer: "no-classifier" });
					const errorResponse = await probeLayoutForErrors(options, layoutIndex);
					if (errorResponse) return errorResponse;
					continue;
				}
				if (cls) {
					try {
						const { dynamicDetected } = await cls.runWithIsolatedDynamicScope(() => options.probeLayoutAt(layoutIndex));
						layoutFlags[cls.getLayoutId(layoutIndex)] = dynamicDetected ? "d" : "s";
						if (cls.debugClassification) cls.debugClassification(cls.getLayoutId(layoutIndex), {
							layer: "runtime-probe",
							outcome: dynamicDetected ? "dynamic" : "static"
						});
					} catch (error) {
						layoutFlags[cls.getLayoutId(layoutIndex)] = "d";
						if (cls.debugClassification) cls.debugClassification(cls.getLayoutId(layoutIndex), {
							layer: "runtime-probe",
							outcome: "dynamic",
							error: error instanceof Error ? error.message : String(error)
						});
						const errorResponse = await options.onLayoutError(error, layoutIndex);
						if (errorResponse) return errorResponse;
					}
					continue;
				}
				const errorResponse = await probeLayoutForErrors(options, layoutIndex);
				if (errorResponse) return errorResponse;
			}
			return null;
		}),
		layoutFlags
	};
}
async function probeLayoutForErrors(options, layoutIndex) {
	try {
		const layoutResult = options.probeLayoutAt(layoutIndex);
		if (isPromiseLike(layoutResult)) await layoutResult;
	} catch (error) {
		return options.onLayoutError(error, layoutIndex);
	}
	return null;
}
async function probeAppPageComponent(options) {
	return options.runWithSuppressedHookWarning(async () => {
		try {
			const pageResult = options.probePage();
			if (isPromiseLike(pageResult)) if (options.awaitAsyncResult) await pageResult;
			else Promise.resolve(pageResult).catch(() => {});
		} catch (error) {
			return options.onError(error);
		}
		return null;
	});
}
async function readAppPageBinaryStream(stream) {
	const reader = stream.getReader();
	const chunks = [];
	let totalLength = 0;
	for (;;) {
		const { done, value } = await reader.read();
		if (done) break;
		chunks.push(value);
		totalLength += value.byteLength;
	}
	const buffer = new Uint8Array(totalLength);
	let offset = 0;
	for (const chunk of chunks) {
		buffer.set(chunk, offset);
		offset += chunk.byteLength;
	}
	return buffer.buffer;
}
function teeAppPageRscStreamForCapture(stream, shouldCapture) {
	if (!shouldCapture) return { ssrStream: stream };
	const [ssrStream, sideStream] = stream.tee();
	return {
		ssrStream,
		sideStream
	};
}
function buildAppPageFontLinkHeader(preloads) {
	if (!preloads || preloads.length === 0) return "";
	return preloads.map((preload) => `<${preload.href}>; rel=preload; as=font; type=${preload.type}; crossorigin`).join(", ");
}
function hasDigest(error) {
	return Boolean(error && typeof error === "object" && "digest" in error);
}
function getThrownValueMessage(error) {
	return error instanceof Error ? error.message : String(error);
}
function getThrownValueStack(error) {
	return error instanceof Error ? error.stack || "" : "";
}
/**
* djb2 hash matching Next.js's string-hash package for RSC error digests.
*/
function errorDigest(input) {
	let hash = 5381;
	for (let i = input.length - 1; i >= 0; i--) hash = hash * 33 ^ input.charCodeAt(i);
	return (hash >>> 0).toString();
}
function sanitizeErrorForClient(error, nodeEnv = "production") {
	if (resolveAppPageSpecialError(error)) return error;
	if (nodeEnv !== "production") return error;
	const sanitized = /* @__PURE__ */ new Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.");
	sanitized.digest = errorDigest(getThrownValueMessage(error) + getThrownValueStack(error));
	return sanitized;
}
function createRscOnErrorHandler$1(options) {
	return (error) => {
		const nodeEnv = options.nodeEnv ?? "production";
		if (hasDigest(error)) return String(error.digest);
		if (nodeEnv !== "production" && error instanceof Error && error.message.includes("Only plain objects, and a few built-ins, can be passed to Client Components")) {
			console.error("[vinext] RSC serialization error: a non-plain object was passed from a Server Component to a Client Component.\n\nCommon causes:\n  * Passing a module namespace (import * as X) directly as a prop.\n    Unlike Next.js (webpack), Vite produces real ESM module namespace objects\n    which are not serializable. Fix: pass individual values instead,\n    e.g. <Comp value={module.value} />\n  * Passing a class instance (new Foo()) as a prop.\n    Fix: convert to a plain object, e.g. { id: foo.id, name: foo.name }\n  * Passing a Date, Map, or Set. Use .toISOString(), [...map.entries()], etc.\n  * Passing Object.create(null). Use { ...obj } to restore a prototype.\n\nOriginal error:", error.message);
			return;
		}
		if (options.requestInfo && options.errorContext && error) options.reportRequestError(error instanceof Error ? error : new Error(getThrownValueMessage(error)), options.requestInfo, options.errorContext);
		if (nodeEnv === "production" && error) return errorDigest(getThrownValueMessage(error) + getThrownValueStack(error));
	};
}
/**
* Build a per-request RSC error handler that extracts request metadata from
* the incoming Web `Request`, wires it into a `createRscOnErrorHandler` call,
* and binds the configured `reportRequestError` reporter.
*
* Pure factory: takes all deps explicitly — no closure over module-level state.
*/
function createAppRscOnErrorHandler(reportRequestError, request, pathname, routePath) {
	const requestHeaders = Object.fromEntries(request.headers.entries());
	const requestInfo = {
		path: pathname,
		method: request.method,
		headers: requestHeaders
	};
	return createRscOnErrorHandler$1({
		errorContext: {
			routerKind: "App Router",
			routePath: routePath || pathname,
			routeType: "render"
		},
		reportRequestError,
		requestInfo
	});
}
var ErrorBoundary = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ErrorBoundary' is called on server");
}, "593f344dc510", "ErrorBoundary");
var ForbiddenBoundary = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ForbiddenBoundary' is called on server");
}, "593f344dc510", "ForbiddenBoundary");
var NotFoundBoundary = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'NotFoundBoundary' is called on server");
}, "593f344dc510", "NotFoundBoundary");
var RedirectBoundary = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'RedirectBoundary' is called on server");
}, "593f344dc510", "RedirectBoundary");
var UnauthorizedBoundary = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'UnauthorizedBoundary' is called on server");
}, "593f344dc510", "UnauthorizedBoundary");
/**
* Layout segment context provider.
*
* Must be "use client" so that Vite's RSC bundler renders this component in
* the SSR/browser environment where React.createContext is available. The RSC
* entry imports and renders LayoutSegmentProvider directly, but because of the
* "use client" boundary the actual execution happens on the SSR/client side
* where the context can be created and consumed by useSelectedLayoutSegment(s).
*
* Without "use client", this runs in the RSC environment where
* React.createContext is undefined, getLayoutSegmentContext() returns null,
* the provider becomes a no-op, and useSelectedLayoutSegments always returns [].
*
* The context is shared with navigation.ts via getLayoutSegmentContext()
* to avoid creating separate contexts in different modules.
*/
/**
* Wraps children with the layout segment context.
*
* Each layout in the App Router tree wraps its children with this provider,
* passing a map of parallel route key to segment path. The "children" key is
* always present (the default parallel route). Named parallel slots at this
* layout level add their own keys.
*
* Components inside the provider call useSelectedLayoutSegments(parallelRoutesKey)
* to read the segments for a specific parallel route.
*/
var LayoutSegmentProvider = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'LayoutSegmentProvider' is called on server");
}, "15c18cfaeeff", "LayoutSegmentProvider");
/**
* Holds resolved AppElements (not a Promise). React 19's use(Promise) during
* hydration triggers "async Client Component" for native Promises that lack
* React's internal .status property. Storing resolved values sidesteps this.
*/
var Children = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Children' is called on server");
}, "8c0f216c4604", "Children");
var ParallelSlot = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ParallelSlot' is called on server");
}, "8c0f216c4604", "ParallelSlot");
var Slot = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Slot' is called on server");
}, "8c0f216c4604", "Slot");
function createAppRenderDependency() {
	let released = false;
	let resolve;
	return {
		promise: new Promise((promiseResolve) => {
			resolve = promiseResolve;
		}),
		release() {
			if (released) return;
			released = true;
			resolve();
		}
	};
}
function renderAfterAppDependencies(children, dependencies) {
	if (dependencies.length === 0) return children;
	async function AwaitAppRenderDependencies() {
		await Promise.all(dependencies.map((dependency) => dependency.promise));
		return children;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(AwaitAppRenderDependencies, {});
}
function renderWithAppDependencyBarrier(children, dependency) {
	function ReleaseAppRenderDependency() {
		dependency.release();
		return null;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(import_jsx_runtime_react_server.Fragment, { children: [children, /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ReleaseAppRenderDependency, {})] });
}
function isOptionalCatchAllSegment(segment) {
	return segment.startsWith("[[...") && segment.endsWith("]]") && segment.length > 7;
}
function isCatchAllSegment(segment) {
	return segment.startsWith("[...") && segment.endsWith("]") && segment.length > 5;
}
function isDynamicSegment(segment) {
	return segment.startsWith("[") && segment.endsWith("]") && !segment.includes(".");
}
function isRouteGroupSegment(segment) {
	return segment.startsWith("(") && segment.endsWith(")");
}
function formatParamSegmentValue(value) {
	if (Array.isArray(value)) return value.join("/");
	return value;
}
function readSegmentParam(segment) {
	if (isOptionalCatchAllSegment(segment)) return {
		name: segment.slice(5, -2),
		type: "oc"
	};
	if (isCatchAllSegment(segment)) return {
		name: segment.slice(4, -1),
		type: "c"
	};
	if (isDynamicSegment(segment)) return {
		name: segment.slice(1, -1),
		type: "d"
	};
	return null;
}
function formatSegmentStateParamValue(param, params, fallbackSegment) {
	const value = params[param.name];
	if (param.type === "oc" && (value === void 0 || Array.isArray(value) && value.length === 0)) return "";
	return formatParamSegmentValue(value) ?? fallbackSegment;
}
function resolveSingleSegmentStateKey(segment, params) {
	const param = readSegmentParam(segment);
	if (!param) return segment;
	return `${param.name}|${formatSegmentStateParamValue(param, params, segment)}|${param.type}`;
}
function resolveAppPageChildSegments(routeSegments, treePosition, params) {
	const rawSegments = routeSegments.slice(treePosition);
	const resolvedSegments = [];
	for (const segment of rawSegments) {
		if (isOptionalCatchAllSegment(segment)) {
			const paramValue = params[segment.slice(5, -2)];
			if (Array.isArray(paramValue) && paramValue.length === 0) continue;
			const resolvedValue = formatParamSegmentValue(paramValue);
			if (resolvedValue !== void 0) resolvedSegments.push(resolvedValue);
			continue;
		}
		if (isCatchAllSegment(segment)) {
			const paramName = segment.slice(4, -1);
			resolvedSegments.push(formatParamSegmentValue(params[paramName]) ?? segment);
			continue;
		}
		if (isDynamicSegment(segment)) {
			const paramName = segment.slice(1, -1);
			resolvedSegments.push(formatParamSegmentValue(params[paramName]) ?? segment);
			continue;
		}
		resolvedSegments.push(segment);
	}
	return resolvedSegments;
}
function resolveAppPageSegmentStateKey(routeSegments, treePosition, params) {
	for (const segment of routeSegments.slice(treePosition)) if (!isRouteGroupSegment(segment)) return resolveSingleSegmentStateKey(segment, params);
	return "";
}
function resolveAppPageRouteStateKey(routeSegments, params) {
	const statePath = [];
	for (const segment of routeSegments) if (!isRouteGroupSegment(segment)) statePath.push(resolveSingleSegmentStateKey(segment, params));
	return statePath.length > 0 ? JSON.stringify(statePath) : "";
}
function getDefaultExport$1(module) {
	return module?.default ?? null;
}
function getErrorBoundaryExport(module) {
	return module?.default ?? null;
}
function createAppPageTreePath(routeSegments, treePosition) {
	const treePathSegments = routeSegments?.slice(0, treePosition) ?? [];
	if (treePathSegments.length === 0) return "/";
	return `/${treePathSegments.join("/")}`;
}
function createAppPageLayoutEntries(route) {
	return route.layouts.map((layoutModule, index) => {
		const treePosition = route.layoutTreePositions?.[index] ?? 0;
		const treePath = createAppPageTreePath(route.routeSegments, treePosition);
		return {
			errorModule: route.errorTreePositions ? null : route.errors?.[index] ?? null,
			forbiddenModule: route.forbiddens?.[index] ?? null,
			id: AppElementsWire.encodeLayoutId(treePath),
			layoutModule,
			notFoundModule: route.notFounds?.[index] ?? null,
			unauthorizedModule: route.unauthorizeds?.[index] ?? null,
			treePath,
			treePosition
		};
	});
}
function createAppPageTemplateEntries(route) {
	return (route.templates ?? []).map((templateModule, index) => {
		const treePosition = route.templateTreePositions?.[index] ?? 0;
		const treePath = createAppPageTreePath(route.routeSegments, treePosition);
		return {
			id: AppElementsWire.encodeTemplateId(treePath),
			templateModule,
			treePath,
			treePosition
		};
	});
}
function createAppPageErrorEntries(route) {
	return (route.errorPaths ?? route.errors ?? []).flatMap((errorModule, index) => {
		if (!errorModule) return [];
		const treePosition = route.errorTreePositions?.[index];
		if (treePosition === void 0) return [];
		return [{
			errorModule,
			treePosition
		}];
	});
}
function createAppPageParallelSlotEntries(layoutIndex, layoutEntries, route, getEffectiveSlotParams) {
	const parallelSlots = {};
	for (const [slotKey, slot] of Object.entries(route.slots ?? {})) {
		const slotName = slot.name;
		const targetIndex = slot.layoutIndex >= 0 ? slot.layoutIndex : layoutEntries.length - 1;
		if (targetIndex !== layoutIndex) continue;
		const treePath = layoutEntries[targetIndex]?.treePath ?? "/";
		const slotParams = getEffectiveSlotParams(slotKey, slotName);
		parallelSlots[slotName] = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(LayoutSegmentProvider, {
			segmentMap: { children: slot.routeSegments ? resolveAppPageChildSegments(slot.routeSegments, 0, slotParams) : [] },
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Slot, { id: AppElementsWire.encodeSlotId(slotName, treePath) })
		});
	}
	return Object.keys(parallelSlots).length > 0 ? parallelSlots : void 0;
}
function createAppPageRouteHead(metadata, viewport) {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(import_jsx_runtime_react_server.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", { charSet: "utf-8" }),
		metadata ? /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(MetadataHead, { metadata }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ViewportHead, { viewport })
	] });
}
function buildAppPageElements(options) {
	const interceptionContext = options.interceptionContext ?? null;
	const routeSegments = options.route.routeSegments ?? [];
	const routeResetKey = resolveAppPageRouteStateKey(routeSegments, options.matchedParams);
	const routeId = AppElementsWire.encodeRouteId(options.routePath, interceptionContext);
	const pageId = AppElementsWire.encodePageId(options.routePath, interceptionContext);
	const layoutEntries = createAppPageLayoutEntries(options.route);
	const templateEntries = createAppPageTemplateEntries(options.route);
	const errorEntries = createAppPageErrorEntries(options.route);
	const layoutEntriesByTreePosition = /* @__PURE__ */ new Map();
	const templateEntriesByTreePosition = /* @__PURE__ */ new Map();
	const errorEntriesByTreePosition = /* @__PURE__ */ new Map();
	for (const layoutEntry of layoutEntries) layoutEntriesByTreePosition.set(layoutEntry.treePosition, layoutEntry);
	for (const templateEntry of templateEntries) templateEntriesByTreePosition.set(templateEntry.treePosition, templateEntry);
	for (const errorEntry of errorEntries) errorEntriesByTreePosition.set(errorEntry.treePosition, errorEntry);
	const layoutIndicesByTreePosition = /* @__PURE__ */ new Map();
	for (let index = 0; index < layoutEntries.length; index++) layoutIndicesByTreePosition.set(layoutEntries[index].treePosition, index);
	const layoutDependenciesByIndex = /* @__PURE__ */ new Map();
	const layoutDependenciesBefore = [];
	const slotDependenciesByLayoutIndex = [];
	const templateDependenciesById = /* @__PURE__ */ new Map();
	const templateDependenciesBeforeById = /* @__PURE__ */ new Map();
	const pageDependencies = [];
	const rootLayoutTreePath = layoutEntries[0]?.treePath ?? null;
	const elements = { ...AppElementsWire.createMetadataEntries({
		interceptionContext,
		layoutIds: options.route.ids?.layouts ?? layoutEntries.map((entry) => entry.id),
		rootLayoutTreePath,
		routeId
	}) };
	const slotNameCounts = /* @__PURE__ */ new Map();
	for (const slot of Object.values(options.route.slots ?? {})) {
		const slotName = slot.name;
		slotNameCounts.set(slotName, (slotNameCounts.get(slotName) ?? 0) + 1);
	}
	const orderedTreePositions = Array.from(new Set([
		...layoutEntries.map((entry) => entry.treePosition),
		...templateEntries.map((entry) => entry.treePosition),
		...errorEntries.map((entry) => entry.treePosition)
	])).sort((left, right) => left - right);
	const resolveSlotOverride = (slotKey, slotName) => {
		const overrideByKey = options.slotOverrides?.[slotKey];
		if (overrideByKey) return overrideByKey;
		if (slotKey === slotName || (slotNameCounts.get(slotName) ?? 0) === 1) return options.slotOverrides?.[slotName];
	};
	const getEffectiveSlotParams = (slotKey, slotName) => resolveSlotOverride(slotKey, slotName)?.params ?? options.matchedParams;
	for (const treePosition of orderedTreePositions) {
		const layoutIndex = layoutIndicesByTreePosition.get(treePosition);
		if (layoutIndex !== void 0) {
			const layoutEntry = layoutEntries[layoutIndex];
			layoutDependenciesBefore[layoutIndex] = [...pageDependencies];
			if (getDefaultExport$1(layoutEntry.layoutModule)) {
				const layoutDependency = createAppRenderDependency();
				layoutDependenciesByIndex.set(layoutIndex, layoutDependency);
				pageDependencies.push(layoutDependency);
			}
			slotDependenciesByLayoutIndex[layoutIndex] = [...pageDependencies];
		}
		const templateEntry = templateEntriesByTreePosition.get(treePosition);
		if (!templateEntry || !getDefaultExport$1(templateEntry.templateModule)) continue;
		const templateDependency = createAppRenderDependency();
		templateDependenciesById.set(templateEntry.id, templateDependency);
		templateDependenciesBeforeById.set(templateEntry.id, [...pageDependencies]);
		pageDependencies.push(templateDependency);
	}
	elements[pageId] = renderAfterAppDependencies(options.element, pageDependencies);
	for (const templateEntry of templateEntries) {
		const templateComponent = getDefaultExport$1(templateEntry.templateModule);
		if (!templateComponent) continue;
		const TemplateComponent = templateComponent;
		const templateDependency = templateDependenciesById.get(templateEntry.id);
		const templateElement = templateDependency ? renderWithAppDependencyBarrier(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(TemplateComponent, {
			params: options.matchedParams,
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Children, {})
		}), templateDependency) : /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(TemplateComponent, {
			params: options.matchedParams,
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Children, {})
		});
		elements[templateEntry.id] = renderAfterAppDependencies(templateElement, templateDependenciesBeforeById.get(templateEntry.id) ?? []);
	}
	for (let index = 0; index < layoutEntries.length; index++) {
		const layoutEntry = layoutEntries[index];
		const layoutComponent = getDefaultExport$1(layoutEntry.layoutModule);
		if (!layoutComponent) continue;
		const layoutProps = { params: options.makeThenableParams(resolveAppPageSegmentParams(options.route.routeSegments, layoutEntry.treePosition, options.matchedParams)) };
		for (const slot of Object.values(options.route.slots ?? {})) {
			const slotName = slot.name;
			if ((slot.layoutIndex >= 0 ? slot.layoutIndex : layoutEntries.length - 1) !== index) continue;
			layoutProps[slotName] = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ParallelSlot, { name: slotName });
		}
		const LayoutComponent = layoutComponent;
		const layoutDependency = layoutDependenciesByIndex.get(index);
		const layoutElement = layoutDependency ? renderWithAppDependencyBarrier(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(LayoutComponent, {
			...layoutProps,
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Children, {})
		}), layoutDependency) : /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(LayoutComponent, {
			...layoutProps,
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Children, {})
		});
		elements[layoutEntry.id] = renderAfterAppDependencies(layoutElement, layoutDependenciesBefore[index] ?? []);
	}
	for (const [slotKey, slot] of Object.entries(options.route.slots ?? {})) {
		const slotName = slot.name;
		const targetIndex = slot.layoutIndex >= 0 ? slot.layoutIndex : layoutEntries.length - 1;
		const treePath = layoutEntries[targetIndex]?.treePath ?? "/";
		const slotId = AppElementsWire.encodeSlotId(slotName, treePath);
		const slotOverride = resolveSlotOverride(slotKey, slotName);
		const slotParams = getEffectiveSlotParams(slotKey, slotName);
		const slotResetKey = resolveAppPageRouteStateKey(slot.routeSegments ?? [], slotParams);
		const overrideOrPageComponent = getDefaultExport$1(slotOverride?.pageModule) ?? getDefaultExport$1(slot.page);
		const defaultComponent = getDefaultExport$1(slot.default);
		if (!overrideOrPageComponent && defaultComponent && options.isRscRequest && options.mountedSlotIds?.has(slotId)) continue;
		const slotComponent = overrideOrPageComponent ?? defaultComponent;
		if (!slotComponent) {
			elements[slotId] = AppElementsWire.unmatchedSlotValue;
			continue;
		}
		const slotThenableParams = options.makeThenableParams(slotParams);
		const slotProps = { params: slotThenableParams };
		if (slotOverride?.props) Object.assign(slotProps, slotOverride.props);
		let slotElement = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(slotComponent, { ...slotProps });
		const interceptLayouts = slotOverride?.layoutModules ?? [];
		for (let layoutIndex = interceptLayouts.length - 1; layoutIndex >= 0; layoutIndex--) {
			const interceptLayoutComponent = getDefaultExport$1(interceptLayouts[layoutIndex]);
			if (!interceptLayoutComponent) continue;
			slotElement = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(interceptLayoutComponent, {
				params: slotThenableParams,
				children: slotElement
			});
		}
		const slotLayoutComponent = getDefaultExport$1(slot.layout);
		if (slotLayoutComponent) slotElement = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(slotLayoutComponent, {
			params: slotThenableParams,
			children: slotElement
		});
		const slotLoadingComponent = getDefaultExport$1(slot.loading);
		if (slotLoadingComponent && !shouldSuppressLoadingBoundaries(options.renderMode ?? "navigation")) slotElement = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(import_react_react_server.Suspense, {
			fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(slotLoadingComponent, {}),
			children: slotElement
		}, slotResetKey);
		const slotErrorComponent = getErrorBoundaryExport(slot.error);
		if (slotErrorComponent) slotElement = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ErrorBoundary, {
			resetKey: slotResetKey,
			fallback: slotErrorComponent,
			children: slotElement
		});
		elements[slotId] = renderAfterAppDependencies(slotElement, targetIndex >= 0 ? slotDependenciesByLayoutIndex[targetIndex] ?? [] : []);
	}
	let routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(LayoutSegmentProvider, {
		segmentMap: { children: [] },
		children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Slot, { id: pageId })
	});
	routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(RedirectBoundary, { children: routeChildren });
	const routeLoadingComponent = getDefaultExport$1(options.route.loading);
	if (routeLoadingComponent && !shouldSuppressLoadingBoundaries(options.renderMode ?? "navigation")) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(import_react_react_server.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(routeLoadingComponent, {}),
		children: routeChildren
	}, routeResetKey);
	const lastLayoutErrorModule = errorEntries.length > 0 ? errorEntries[errorEntries.length - 1].errorModule : null;
	const notFoundComponent = getDefaultExport$1(options.route.notFound) ?? getDefaultExport$1(options.rootNotFoundModule);
	if (notFoundComponent) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(NotFoundBoundary, {
		resetKey: routeResetKey,
		fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(notFoundComponent, {}),
		children: routeChildren
	});
	const forbiddenComponent = getDefaultExport$1(options.route.forbidden) ?? getDefaultExport$1(options.rootForbiddenModule);
	if (forbiddenComponent) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ForbiddenBoundary, {
		resetKey: routeResetKey,
		fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(forbiddenComponent, {}),
		children: routeChildren
	});
	const unauthorizedComponent = getDefaultExport$1(options.route.unauthorized) ?? getDefaultExport$1(options.rootUnauthorizedModule);
	if (unauthorizedComponent) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(UnauthorizedBoundary, {
		resetKey: routeResetKey,
		fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(unauthorizedComponent, {}),
		children: routeChildren
	});
	const pageErrorComponent = getErrorBoundaryExport(options.route.error);
	if (pageErrorComponent && options.route.error !== lastLayoutErrorModule) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ErrorBoundary, {
		resetKey: routeResetKey,
		fallback: pageErrorComponent,
		children: routeChildren
	});
	for (let index = orderedTreePositions.length - 1; index >= 0; index--) {
		const treePosition = orderedTreePositions[index];
		const segmentResetKey = resolveAppPageSegmentStateKey(routeSegments, treePosition, options.matchedParams);
		let segmentChildren = routeChildren;
		const layoutEntry = layoutEntriesByTreePosition.get(treePosition);
		const templateEntry = templateEntriesByTreePosition.get(treePosition);
		const errorEntry = errorEntriesByTreePosition.get(treePosition);
		if (layoutEntry) {
			const layoutNotFoundComponent = getDefaultExport$1(layoutEntry.notFoundModule);
			if (layoutNotFoundComponent) segmentChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(NotFoundBoundary, {
				resetKey: segmentResetKey,
				fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(layoutNotFoundComponent, {}),
				children: segmentChildren
			});
			const layoutForbiddenComponent = getDefaultExport$1(layoutEntry.forbiddenModule);
			if (layoutForbiddenComponent) segmentChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ForbiddenBoundary, {
				resetKey: segmentResetKey,
				fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(layoutForbiddenComponent, {}),
				children: segmentChildren
			});
			const layoutUnauthorizedComponent = getDefaultExport$1(layoutEntry.unauthorizedModule);
			if (layoutUnauthorizedComponent) segmentChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(UnauthorizedBoundary, {
				resetKey: segmentResetKey,
				fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(layoutUnauthorizedComponent, {}),
				children: segmentChildren
			});
		}
		const segmentErrorComponent = getErrorBoundaryExport(errorEntry?.errorModule ?? layoutEntry?.errorModule);
		if (segmentErrorComponent) segmentChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ErrorBoundary, {
			resetKey: segmentResetKey,
			fallback: segmentErrorComponent,
			children: segmentChildren
		});
		if (templateEntry && getDefaultExport$1(templateEntry.templateModule)) segmentChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Slot, {
			id: templateEntry.id,
			children: segmentChildren
		}, segmentResetKey);
		if (!layoutEntry) {
			routeChildren = segmentChildren;
			continue;
		}
		const layoutHasElement = getDefaultExport$1(layoutEntry.layoutModule) !== null;
		const layoutIndex = layoutIndicesByTreePosition.get(treePosition) ?? -1;
		const segmentMap = { children: resolveAppPageChildSegments(routeSegments, layoutEntry.treePosition, options.matchedParams) };
		for (const [slotKey, slot] of Object.entries(options.route.slots ?? {})) {
			const slotName = slot.name;
			if ((slot.layoutIndex >= 0 ? slot.layoutIndex : layoutEntries.length - 1) !== layoutIndex) continue;
			const slotParams = getEffectiveSlotParams(slotKey, slotName);
			segmentMap[slotName] = slot.routeSegments ? resolveAppPageChildSegments(slot.routeSegments, 0, slotParams) : [];
		}
		routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(LayoutSegmentProvider, {
			segmentMap,
			children: layoutHasElement ? /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Slot, {
				id: layoutEntry.id,
				parallelSlots: createAppPageParallelSlotEntries(layoutIndex, layoutEntries, options.route, getEffectiveSlotParams),
				children: segmentChildren
			}) : segmentChildren
		});
	}
	const globalErrorComponent = getErrorBoundaryExport(options.globalErrorModule);
	if (globalErrorComponent) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ErrorBoundary, {
		fallback: globalErrorComponent,
		children: routeChildren
	});
	elements[routeId] = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(import_jsx_runtime_react_server.Fragment, { children: [createAppPageRouteHead(options.resolvedMetadata, options.resolvedViewport), routeChildren] });
	return elements;
}
function routeApplies(routePath, routePrefix) {
	if (!routePrefix) return true;
	return routePath === routePrefix || routePath.startsWith(`${routePrefix}/`);
}
function routeScore(routePrefix) {
	return routePrefix.split("/").filter(Boolean).length;
}
function routeSegmentsApply(routeSegments, routePrefixSegments) {
	if (routePrefixSegments.length > routeSegments.length) return false;
	for (let index = 0; index < routePrefixSegments.length; index++) if (routeSegments[index] !== routePrefixSegments[index]) return false;
	return true;
}
function removeParallelRouteSegments(routeSegments) {
	return routeSegments.filter((segment) => !segment.startsWith("@"));
}
function routeSegmentsApplyWithParallelSlots(routeSegments, routePrefixSegments) {
	if (routeSegmentsApply(routeSegments, routePrefixSegments)) return true;
	const visiblePrefixSegments = removeParallelRouteSegments(routePrefixSegments);
	return visiblePrefixSegments.length !== routePrefixSegments.length && routeSegmentsApply(routeSegments, visiblePrefixSegments);
}
function routeSpecificity(route) {
	return route.routeSegments?.length ?? routeScore(route.routePrefix);
}
function selectDeepestRoutes(metadataRoutes, kind, routePath, params, routeSegments) {
	if (!metadataRoutes || metadataRoutes.length === 0) return [];
	let selectedScore = -1;
	const selectedRoutes = [];
	for (const route of metadataRoutes) {
		if ((route.headData?.kind ?? getMetadataRouteKind(route)) !== kind) continue;
		if (routeSegments && route.routeSegments) {
			if (!routeSegmentsApplyWithParallelSlots(routeSegments, route.routeSegments)) continue;
			const currentScore = routeSpecificity(route);
			if (currentScore > selectedScore) {
				selectedScore = currentScore;
				selectedRoutes.length = 0;
				selectedRoutes.push(route);
				continue;
			}
			if (currentScore === selectedScore) selectedRoutes.push(route);
			continue;
		}
		const routePrefix = route.routePrefix;
		const resolvedRoutePrefix = fillRoutePatternSegments(routePrefix, params);
		const normalizedRoutePrefix = routePattern(routePrefix);
		if (!routeApplies(routePath, routePrefix) && !routeApplies(routePath, normalizedRoutePrefix) && (!resolvedRoutePrefix || !routeApplies(routePath, resolvedRoutePrefix))) continue;
		const currentScore = routeSpecificity(route);
		if (currentScore > selectedScore) {
			selectedScore = currentScore;
			selectedRoutes.length = 0;
			selectedRoutes.push(route);
			continue;
		}
		if (currentScore === selectedScore) selectedRoutes.push(route);
	}
	return selectedRoutes;
}
function isStringOrUrl(value) {
	return typeof value === "string" || typeof value === "object" && value instanceof URL;
}
function normalizeIconDescriptor(value) {
	if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
	const urlValue = Reflect.get(value, "url");
	if (!isStringOrUrl(urlValue)) return null;
	const entry = { url: urlValue };
	const sizesValue = Reflect.get(value, "sizes");
	if (typeof sizesValue === "string") entry.sizes = sizesValue;
	const typeValue = Reflect.get(value, "type");
	if (typeof typeValue === "string") entry.type = typeValue;
	const mediaValue = Reflect.get(value, "media");
	if (typeof mediaValue === "string") entry.media = mediaValue;
	return entry;
}
function normalizeIconValue(value) {
	if (isStringOrUrl(value)) return { url: value };
	return normalizeIconDescriptor(value);
}
function normalizeIconValueList(values) {
	const normalizedEntries = [];
	for (const value of values) {
		const normalizedValue = normalizeIconValue(value);
		if (normalizedValue) normalizedEntries.push(normalizedValue);
	}
	return normalizedEntries;
}
function normalizeIconEntries(icon) {
	const normalizedTopLevelValue = normalizeIconValue(icon);
	if (normalizedTopLevelValue) return [normalizedTopLevelValue];
	if (Array.isArray(icon)) return normalizeIconValueList(icon);
	if (!isIconMap(icon)) return [];
	const iconValue = icon.icon;
	if (!iconValue) return [];
	if (Array.isArray(iconValue)) return normalizeIconValueList(iconValue);
	const normalizedValue = normalizeIconValue(iconValue);
	return normalizedValue ? [normalizedValue] : [];
}
function isIconMap(value) {
	if (!value || typeof value !== "object" || value instanceof URL || Array.isArray(value)) return false;
	return normalizeIconValue(value) === null;
}
function cloneIconMap(value) {
	if (!value) return {};
	if (isIconMap(value)) return { ...value };
	const iconEntries = normalizeIconEntries(value);
	return iconEntries.length > 0 ? { icon: iconEntries } : {};
}
function buildIconEntry(headData) {
	if (headData.kind !== "favicon" && headData.kind !== "icon") return null;
	const iconEntry = { url: headData.href };
	if (headData.sizes) iconEntry.sizes = headData.sizes;
	if (headData.type) iconEntry.type = headData.type;
	return iconEntry;
}
function buildAppleEntry(headData) {
	if (headData.kind !== "apple") return null;
	const appleEntry = { url: headData.href };
	if (headData.sizes) appleEntry.sizes = headData.sizes;
	if (headData.type) appleEntry.type = headData.type;
	return appleEntry;
}
function normalizeAppleEntry(value) {
	if (isStringOrUrl(value)) return { url: value };
	return { ...value };
}
function buildSocialEntry(headData) {
	if (headData.kind !== "openGraph" && headData.kind !== "twitter") return null;
	const socialEntry = { url: headData.href };
	if (headData.width !== void 0) socialEntry.width = headData.width;
	if (headData.height !== void 0) socialEntry.height = headData.height;
	if (headData.alt) socialEntry.alt = headData.alt;
	if (headData.type) socialEntry.type = headData.type;
	return socialEntry;
}
function normalizeMetadataImageId(route, id) {
	const normalizedId = String(id);
	if (!isValidMetadataImageId(normalizedId)) {
		console.warn(`[vinext] Skipping metadata route ${route.servedUrl} image id "${normalizedId}" because metadata image ids must match /^[a-zA-Z0-9-_.]+$/.`);
		return null;
	}
	return normalizedId;
}
function withContentHash(href, contentHash) {
	if (!contentHash) return href;
	return `${href}?${contentHash}`;
}
function hasOwnProperty(source, key) {
	return Boolean(source && Object.prototype.hasOwnProperty.call(source, key));
}
function hasOpenGraphImages(metadata) {
	return hasOwnProperty(metadata?.openGraph, "images");
}
function hasTwitterImages(metadata) {
	return hasOwnProperty(metadata?.twitter, "images");
}
function hasIcons(metadata) {
	return Boolean(metadata?.icons);
}
function getMetadataSourceForRoute(route, options, fallbackMetadata) {
	if (!options?.metadataSources) return fallbackMetadata;
	if (!route.routeSegments) return null;
	for (let index = options.metadataSources.length - 1; index >= 0; index--) {
		const source = options.metadataSources[index];
		if (routeSegmentsApplyWithParallelSlots(source.routeSegments, route.routeSegments)) return source.metadata;
	}
	return null;
}
function socialRouteHasExplicitImagesAtSource(route, kind, options, fallbackMetadata) {
	const sourceMetadata = getMetadataSourceForRoute(route, options, fallbackMetadata);
	return kind === "openGraph" ? hasOpenGraphImages(sourceMetadata) : hasTwitterImages(sourceMetadata);
}
function iconRouteHasExplicitIconsAtSource(route, options, fallbackMetadata) {
	return hasIcons(fallbackMetadata) || hasIcons(getMetadataSourceForRoute(route, options, null));
}
function readStringProperty(source, key) {
	const value = Reflect.get(source, key);
	return typeof value === "string" ? value : void 0;
}
function readNumberProperty(source, key) {
	const value = Reflect.get(source, key);
	return typeof value === "number" ? value : void 0;
}
function readStringOrNumberProperty(source, key) {
	const value = Reflect.get(source, key);
	if (typeof value === "string" || typeof value === "number") return value;
}
function readSizeProperty(source) {
	const sizeValue = Reflect.get(source, "size");
	if (typeof sizeValue !== "object" || sizeValue === null) return;
	const width = readNumberProperty(sizeValue, "width");
	const height = readNumberProperty(sizeValue, "height");
	if (width === void 0 && height === void 0) return;
	return {
		width,
		height
	};
}
function readDynamicImageMetadataSource(source) {
	return {
		id: readStringOrNumberProperty(source, "id"),
		alt: readStringProperty(source, "alt"),
		contentType: readStringProperty(source, "contentType"),
		size: readSizeProperty(source)
	};
}
async function resolveDynamicImageMetadataSources(route, params) {
	if (!route.module || typeof route.module !== "object") return [];
	const generateImageMetadata = Reflect.get(route.module, "generateImageMetadata");
	if (typeof generateImageMetadata !== "function") return [readDynamicImageMetadataSource(route.module)];
	const result = await generateImageMetadata({ params: makeThenableParams(params) });
	if (!Array.isArray(result)) return [];
	const sources = [];
	for (const entry of result) if (typeof entry === "object" && entry !== null) {
		const source = readDynamicImageMetadataSource(entry);
		if (source.id === void 0) {
			console.warn(`[vinext] Skipping metadata route ${route.servedUrl} image metadata entry because generateImageMetadata entries must include an id.`);
			continue;
		}
		sources.push(source);
	}
	return sources;
}
async function resolveRouteHeadData(route, params) {
	if (!route.isDynamic || !route.module || typeof route.module !== "object") return route.headData ? [route.headData] : [];
	const routeKind = getMetadataImageRouteKind(route);
	if (!routeKind) return route.headData ? [route.headData] : [];
	const resolvedUrl = fillRoutePatternSegments(route.servedUrl, params);
	if (!resolvedUrl) {
		console.warn(`[vinext] Skipping metadata route ${route.servedUrl} because params did not fill all dynamic segments.`);
		return [];
	}
	const metadataSources = await resolveDynamicImageMetadataSources(route, params);
	const resolvedHeadData = [];
	for (const metadataSource of metadataSources) {
		let hrefBase = resolvedUrl;
		if (metadataSource.id !== void 0) {
			const normalizedId = normalizeMetadataImageId(route, metadataSource.id);
			if (!normalizedId) continue;
			hrefBase = `${resolvedUrl}/${normalizedId}`;
		}
		const href = withContentHash(hrefBase, route.contentHash);
		const contentType = metadataSource.contentType ?? route.contentType;
		const size = metadataSource.size;
		if (routeKind === "icon" || routeKind === "apple") {
			let sizes;
			if (size?.width !== void 0 && size.height !== void 0) sizes = `${size.width}x${size.height}`;
			resolvedHeadData.push({
				kind: routeKind,
				href,
				sizes,
				type: contentType
			});
			continue;
		}
		resolvedHeadData.push({
			kind: routeKind,
			href,
			alt: metadataSource.alt,
			height: size?.height,
			type: contentType,
			width: size?.width
		});
	}
	return resolvedHeadData;
}
async function resolveHeadDataList(routes, params) {
	return (await Promise.all(routes.map((route) => resolveRouteHeadData(route, params)))).flat();
}
async function applyFileBasedMetadata(metadata, routePath, params, metadataRoutes, options) {
	if (!metadataRoutes || metadataRoutes.length === 0) return metadata;
	const routeSegments = options?.routeSegments ?? null;
	const faviconRoutes = selectDeepestRoutes(metadataRoutes, "favicon", routePath, params, routeSegments);
	const iconRoutes = selectDeepestRoutes(metadataRoutes, "icon", routePath, params, routeSegments).filter((route) => !iconRouteHasExplicitIconsAtSource(route, options, metadata));
	const appleRoutes = selectDeepestRoutes(metadataRoutes, "apple", routePath, params, routeSegments).filter((route) => !iconRouteHasExplicitIconsAtSource(route, options, metadata));
	const openGraphRoutes = selectDeepestRoutes(metadataRoutes, "openGraph", routePath, params, routeSegments).filter((route) => !socialRouteHasExplicitImagesAtSource(route, "openGraph", options, metadata));
	const twitterRoutes = selectDeepestRoutes(metadataRoutes, "twitter", routePath, params, routeSegments).filter((route) => !socialRouteHasExplicitImagesAtSource(route, "twitter", options, metadata));
	const manifestRoutes = selectDeepestRoutes(metadataRoutes, "manifest", routePath, params, routeSegments);
	const [faviconHeadData, iconHeadData, appleHeadData, openGraphHeadData, twitterHeadData, manifestHeadData] = await Promise.all([
		resolveHeadDataList(faviconRoutes, params),
		resolveHeadDataList(iconRoutes, params),
		resolveHeadDataList(appleRoutes, params),
		resolveHeadDataList(openGraphRoutes, params),
		resolveHeadDataList(twitterRoutes, params),
		resolveHeadDataList(manifestRoutes, params)
	]);
	if (!metadata && faviconHeadData.length === 0 && iconHeadData.length === 0 && appleHeadData.length === 0 && openGraphHeadData.length === 0 && twitterHeadData.length === 0 && manifestHeadData.length === 0) return null;
	const nextMetadata = metadata ? { ...metadata } : {};
	const faviconEntries = [];
	for (const headData of faviconHeadData) {
		const iconEntry = buildIconEntry(headData);
		if (iconEntry) faviconEntries.push(iconEntry);
	}
	if (faviconEntries.length > 0) {
		const nextIcons = cloneIconMap(nextMetadata.icons);
		const normalizedIcons = normalizeIconEntries(nextIcons);
		nextIcons.icon = [...faviconEntries, ...normalizedIcons];
		nextMetadata.icons = nextIcons;
	}
	{
		const nextIcons = cloneIconMap(nextMetadata.icons);
		const iconEntries = [];
		for (const headData of iconHeadData) {
			const iconEntry = buildIconEntry(headData);
			if (iconEntry) iconEntries.push(iconEntry);
		}
		if (iconEntries.length > 0) {
			const normalizedIcons = normalizeIconEntries(nextIcons);
			nextIcons.icon = [...iconEntries, ...normalizedIcons];
		}
		const appleEntries = [];
		for (const headData of appleHeadData) {
			const appleEntry = buildAppleEntry(headData);
			if (appleEntry) appleEntries.push(appleEntry);
		}
		if (appleEntries.length > 0) {
			const existingApple = nextIcons.apple;
			const normalizedAppleEntries = [];
			if (Array.isArray(existingApple)) for (const entry of existingApple) normalizedAppleEntries.push(normalizeAppleEntry(entry));
			else if (existingApple) normalizedAppleEntries.push(normalizeAppleEntry(existingApple));
			nextIcons.apple = [...appleEntries, ...normalizedAppleEntries];
		}
		if (iconEntries.length > 0 || appleEntries.length > 0) nextMetadata.icons = nextIcons;
	}
	if (openGraphHeadData.length > 0) {
		const socialEntries = [];
		for (const headData of openGraphHeadData) {
			const socialEntry = buildSocialEntry(headData);
			if (socialEntry) socialEntries.push(socialEntry);
		}
		if (socialEntries.length > 0) {
			const nextOpenGraph = nextMetadata.openGraph ? { ...nextMetadata.openGraph } : {};
			nextOpenGraph.images = socialEntries;
			nextMetadata.openGraph = nextOpenGraph;
		}
	}
	if (twitterHeadData.length > 0) {
		const socialEntries = [];
		for (const headData of twitterHeadData) {
			const socialEntry = buildSocialEntry(headData);
			if (socialEntry) socialEntries.push(socialEntry);
		}
		if (socialEntries.length > 0) {
			const nextTwitter = nextMetadata.twitter ? { ...nextMetadata.twitter } : {};
			nextTwitter.images = socialEntries;
			nextMetadata.twitter = nextTwitter;
		}
	}
	if (manifestHeadData.length > 0 && manifestHeadData[0].kind === "manifest") nextMetadata.manifest = manifestHeadData[0].href;
	return nextMetadata;
}
function resolveActiveParallelRouteHeadInputs(options) {
	return Object.entries(options.slots ?? {}).map(([slotKey, slot]) => {
		if (options.interceptSlotKey === slotKey && options.interceptPage) return {
			layoutModules: options.interceptLayouts ?? [],
			pageModule: options.interceptPage,
			params: options.interceptParams ?? options.params,
			routeSegments: options.routeSegments
		};
		return {
			layoutModules: slot.layout ? [slot.layout] : [],
			pageModule: slot.page,
			params: options.params,
			routeSegments: options.routeSegments
		};
	});
}
function isPresent(value) {
	return value !== null && value !== void 0;
}
function collectAppPageSearchParams(searchParams) {
	const pageSearchParams = Object.create(null);
	let hasSearchParams = false;
	searchParams?.forEach((value, key) => {
		hasSearchParams = true;
		const currentValue = pageSearchParams[key];
		if (Array.isArray(currentValue)) {
			pageSearchParams[key] = [...currentValue, value];
			return;
		}
		if (currentValue !== void 0) {
			pageSearchParams[key] = [currentValue, value];
			return;
		}
		pageSearchParams[key] = value;
	});
	return {
		hasSearchParams,
		pageSearchParams
	};
}
function createMetadataSources(metadataResults, routeSegments, layoutTreePositions, pageMetadata, includePageSource) {
	const metadataSources = metadataResults.map((metadata, index) => ({
		routeSegments: routeSegments.slice(0, layoutTreePositions[index] ?? 0),
		metadata
	}));
	if (includePageSource) metadataSources.push({
		routeSegments,
		metadata: pageMetadata
	});
	return metadataSources;
}
function createLayoutInputs(layoutModules, layoutTreePositions) {
	const layoutInputs = [];
	for (let index = 0; index < layoutModules.length; index++) {
		const layoutModule = layoutModules[index];
		if (!isPresent(layoutModule)) continue;
		layoutInputs.push({
			module: layoutModule,
			treePosition: layoutTreePositions[index] ?? 0
		});
	}
	return layoutInputs;
}
async function resolveLayoutMetadata(layoutInputs, params, routeSegments) {
	const layoutMetadataPromises = [];
	let accumulatedMetadata = Promise.resolve({});
	for (const layoutInput of layoutInputs) {
		const parentForLayout = accumulatedMetadata;
		const layoutParams = resolveAppPageSegmentParams(routeSegments, layoutInput.treePosition, params);
		const metadataPromise = resolveModuleMetadata(layoutInput.module, layoutParams, void 0, parentForLayout);
		layoutMetadataPromises.push(metadataPromise);
		metadataPromise.catch(() => null);
		accumulatedMetadata = metadataPromise.then(async (metadataResult) => {
			if (metadataResult) return mergeMetadataEntries([{ metadata: await parentForLayout }, { metadata: metadataResult }]);
			return parentForLayout;
		});
		accumulatedMetadata.catch(() => null);
	}
	return Promise.all(layoutMetadataPromises);
}
async function resolveLayoutViewport(layoutInputs, params, routeSegments) {
	return Promise.all(layoutInputs.map((layoutInput) => {
		const layoutParams = resolveAppPageSegmentParams(routeSegments, layoutInput.treePosition, params);
		return resolveModuleViewport(layoutInput.module, layoutParams);
	}));
}
async function resolveParallelRouteHead(parallelRoute, fallbackParams, fallbackRouteSegments, pageSearchParams, parent) {
	const params = parallelRoute.params ?? fallbackParams;
	const routeSegments = parallelRoute.routeSegments ?? fallbackRouteSegments;
	const metadataResults = [];
	const viewportResults = [];
	const metadataSources = [];
	let accumulatedMetadata = parent;
	const layoutModules = [...parallelRoute.layoutModules ?? [], parallelRoute.layoutModule].filter(isPresent);
	const layoutViewportPromises = layoutModules.map((layoutModule) => resolveModuleViewport(layoutModule, params));
	const pageViewportPromise = parallelRoute.pageModule ? resolveModuleViewport(parallelRoute.pageModule, params) : Promise.resolve(null);
	for (const layoutViewportPromise of layoutViewportPromises) layoutViewportPromise.catch(() => null);
	pageViewportPromise.catch(() => null);
	for (const layoutModule of layoutModules) {
		const layoutMetadata = await resolveModuleMetadata(layoutModule, params, void 0, accumulatedMetadata);
		metadataResults.push(layoutMetadata);
		metadataSources.push({
			metadata: layoutMetadata,
			routeSegments
		});
		if (layoutMetadata) {
			accumulatedMetadata = accumulatedMetadata.then(async (parentMetadata) => mergeMetadataEntries([{ metadata: parentMetadata }, { metadata: layoutMetadata }]));
			accumulatedMetadata.catch(() => null);
		}
	}
	if (parallelRoute.pageModule) {
		const pageMetadata = await resolveModuleMetadata(parallelRoute.pageModule, params, pageSearchParams, accumulatedMetadata);
		metadataResults.push(pageMetadata);
		metadataSources.push({
			metadata: pageMetadata,
			routeSegments
		});
	}
	viewportResults.push(...await Promise.all(layoutViewportPromises));
	const pageViewport = await pageViewportPromise;
	if (parallelRoute.pageModule) viewportResults.push(pageViewport);
	return {
		metadataResults,
		metadataSources,
		viewportResults
	};
}
async function resolveAppPageHead(options) {
	return await runWithFetchDedupe(() => resolveAppPageHeadInner(options));
}
async function resolveAppPageHeadInner(options) {
	const routeSegments = options.routeSegments ?? [];
	const layoutTreePositions = options.layoutTreePositions ?? [];
	const layoutInputs = createLayoutInputs(options.layoutModules, layoutTreePositions);
	const layoutSourcePositions = layoutInputs.map((input) => input.treePosition);
	const { hasSearchParams, pageSearchParams } = collectAppPageSearchParams(options.searchParams);
	const layoutMetadataPromise = resolveLayoutMetadata(layoutInputs, options.params, routeSegments);
	const layoutViewportPromise = resolveLayoutViewport(layoutInputs, options.params, routeSegments);
	const layoutMetadataResultsForParent = layoutMetadataPromise.then((metadataResults) => metadataResults.filter(isPresent));
	layoutMetadataResultsForParent.catch(() => null);
	const pageParentPromise = layoutMetadataResultsForParent.then((metadataResults) => metadataResults.length > 0 ? mergeMetadataEntries(metadataResults.map((metadata) => ({ metadata }))) : {});
	pageParentPromise.catch(() => null);
	const pageMetadataPromise = options.pageModule ? resolveModuleMetadata(options.pageModule, options.params, pageSearchParams, pageParentPromise) : Promise.resolve(null);
	const pageViewportPromise = options.pageModule ? resolveModuleViewport(options.pageModule, options.params) : Promise.resolve(null);
	const parallelRouteHeadPromise = Promise.all((options.parallelRoutes ?? []).map((parallelRoute) => resolveParallelRouteHead(parallelRoute, options.params, routeSegments, pageSearchParams, pageParentPromise)));
	const [layoutMetadataResults, layoutViewportResults, pageMetadata, pageViewport, parallelRouteHeads] = await Promise.all([
		layoutMetadataPromise,
		layoutViewportPromise,
		pageMetadataPromise,
		pageViewportPromise,
		parallelRouteHeadPromise
	]);
	const parallelMetadataResults = parallelRouteHeads.flatMap((head) => head.metadataResults);
	const parallelViewportResults = parallelRouteHeads.flatMap((head) => head.viewportResults);
	const parallelMetadataSources = parallelRouteHeads.flatMap((head) => head.metadataSources);
	const metadataEntries = [
		...layoutMetadataResults.filter(isPresent).map((metadata) => ({ metadata })),
		...pageMetadata ? [{
			isPage: true,
			metadata: pageMetadata
		}] : [],
		...parallelMetadataResults.filter(isPresent).map((metadata) => ({
			contributesTitle: false,
			metadata
		}))
	];
	const viewportList = [
		...layoutViewportResults.filter(isPresent),
		...pageViewport ? [pageViewport] : [],
		...parallelViewportResults.filter(isPresent)
	];
	const resolvedMetadataBase = metadataEntries.length > 0 ? mergeMetadataEntries(metadataEntries) : null;
	const metadataSources = createMetadataSources(layoutMetadataResults, routeSegments, layoutSourcePositions, pageMetadata, Boolean(options.pageModule));
	metadataSources.push(...parallelMetadataSources);
	let metadata = resolvedMetadataBase;
	try {
		metadata = await applyFileBasedMetadata(resolvedMetadataBase, options.routePath, options.params, options.metadataRoutes, {
			routeSegments,
			metadataSources
		});
	} catch (error) {
		if (!options.fallbackOnFileMetadataError) throw error;
		console.error(`[vinext] File-based metadata resolution failed while rendering error boundary for ${options.routePath}:`, error);
	}
	if (metadata) metadata = postProcessMetadata(metadata);
	return {
		hasSearchParams,
		metadata,
		pageSearchParams,
		viewport: mergeViewport(viewportList)
	};
}
function resolveAppPageHttpAccessBoundaryComponent(options) {
	let boundaryModule;
	if (options.statusCode === 403) boundaryModule = options.routeForbiddenModule ?? options.rootForbiddenModule;
	else if (options.statusCode === 401) boundaryModule = options.routeUnauthorizedModule ?? options.rootUnauthorizedModule;
	else boundaryModule = options.routeNotFoundModule ?? options.rootNotFoundModule;
	return options.getDefaultExport(boundaryModule) ?? null;
}
function resolveAppPageParentHttpAccessBoundaryModule(options) {
	let routeModules = options.routeNotFoundModules;
	let rootModule = options.rootNotFoundModule;
	if (options.statusCode === 403) {
		routeModules = options.routeForbiddenModules;
		rootModule = options.rootForbiddenModule;
	} else if (options.statusCode === 401) {
		routeModules = options.routeUnauthorizedModules;
		rootModule = options.rootUnauthorizedModule;
	}
	if (routeModules) for (let index = options.layoutIndex - 1; index >= 0; index--) {
		const module = routeModules[index];
		if (module) return module;
	}
	return rootModule ?? null;
}
function resolveAppPageErrorBoundary(options) {
	const pageErrorComponent = options.getDefaultExport(options.pageErrorModule);
	if (pageErrorComponent) return {
		component: pageErrorComponent,
		isGlobalError: false
	};
	const segmentErrorModules = options.errorModules ?? options.layoutErrorModules;
	if (segmentErrorModules) for (let index = segmentErrorModules.length - 1; index >= 0; index--) {
		const segmentErrorComponent = options.getDefaultExport(segmentErrorModules[index]);
		if (segmentErrorComponent) return {
			component: segmentErrorComponent,
			isGlobalError: false
		};
	}
	const globalErrorComponent = options.getDefaultExport(options.globalErrorModule);
	return {
		component: globalErrorComponent ?? null,
		isGlobalError: Boolean(globalErrorComponent)
	};
}
function wrapAppPageBoundaryElement(options) {
	let element = options.element;
	if (!options.skipLayoutWrapping) for (let index = options.layoutModules.length - 1; index >= 0; index--) {
		const layoutComponent = options.getDefaultExport(options.layoutModules[index]);
		if (!layoutComponent) continue;
		const treePosition = options.layoutTreePositions ? options.layoutTreePositions[index] : 0;
		const asyncParams = options.makeThenableParams(resolveAppPageSegmentParams(options.routeSegments, treePosition, options.matchedParams));
		element = options.renderLayout(layoutComponent, element, asyncParams);
		if (options.isRscRequest && options.renderLayoutSegmentProvider && options.resolveChildSegments) {
			const childSegments = options.resolveChildSegments(options.routeSegments ?? [], treePosition, options.matchedParams);
			element = options.renderLayoutSegmentProvider({ children: childSegments }, element);
		}
	}
	if (options.isRscRequest && options.includeGlobalErrorBoundary && options.globalErrorComponent) element = options.renderErrorBoundary(options.globalErrorComponent, element);
	return element;
}
async function renderAppPageBoundaryResponse(options) {
	const rscStream = runWithFetchDedupe(() => options.renderToReadableStream(options.element, { onError: options.createRscOnErrorHandler() }));
	if (options.isRscRequest) {
		const headers = new Headers({
			"Content-Type": "text/x-component; charset=utf-8",
			Vary: VINEXT_RSC_VARY_HEADER
		});
		mergeMiddlewareResponseHeaders(headers, options.middlewareHeaders ?? null);
		return new Response(rscStream, {
			status: options.status,
			headers
		});
	}
	return options.createHtmlResponse(rscStream, options.status);
}
function createAppPageFontData(options) {
	return {
		links: options.getLinks(),
		preloads: options.getPreloads(),
		styles: options.getStyles()
	};
}
async function renderAppPageHtmlStream(options) {
	const ssrOptions = {
		formState: options.formState ?? null,
		scriptNonce: options.scriptNonce,
		sideStream: options.sideStream,
		capturedRscDataRef: options.capturedRscDataRef,
		waitForAllReady: options.waitForAllReady
	};
	return options.ssrHandler.handleSsr(options.rscStream, options.navigationContext, options.fontData, ssrOptions);
}
/**
* Wraps a stream so that `onFlush` is called when the last byte has been read
* by the downstream consumer (i.e. when the HTTP layer finishes draining the
* response body). This is the correct place to clear per-request context,
* because the RSC/SSR pipeline is lazy — components execute while the stream
* is being consumed, not when the stream handle is first obtained.
*/
function deferUntilStreamConsumed(stream, onFlush) {
	let called = false;
	const once = () => {
		if (!called) {
			called = true;
			onFlush();
		}
	};
	const cleanup = new TransformStream({ flush() {
		once();
	} });
	const reader = stream.pipeThrough(cleanup).getReader();
	return new ReadableStream({
		pull(controller) {
			return reader.read().then(({ done, value }) => {
				if (done) controller.close();
				else controller.enqueue(value);
			}, (error) => {
				once();
				controller.error(error);
			});
		},
		cancel(reason) {
			once();
			return reader.cancel(reason);
		}
	});
}
async function renderAppPageHtmlResponse(options) {
	const safeStream = deferUntilStreamConsumed(await renderAppPageHtmlStream(options), () => {
		options.clearRequestContext();
	});
	const headers = new Headers({
		"Content-Type": "text/html; charset=utf-8",
		Vary: VINEXT_RSC_VARY_HEADER
	});
	if (options.fontLinkHeader) headers.set("Link", options.fontLinkHeader);
	mergeMiddlewareResponseHeaders(headers, options.middlewareHeaders ?? null);
	return new Response(safeStream, {
		status: options.status,
		headers
	});
}
async function renderAppPageHtmlStreamWithRecovery(options) {
	try {
		const htmlStream = await options.renderHtmlStream();
		options.onShellRendered?.();
		return {
			htmlStream,
			response: null
		};
	} catch (error) {
		const specialError = options.resolveSpecialError(error);
		if (specialError) return {
			htmlStream: null,
			response: await options.renderSpecialErrorResponse(specialError)
		};
		const boundaryResponse = await options.renderErrorBoundaryResponse(error);
		if (boundaryResponse) return {
			htmlStream: null,
			response: boundaryResponse
		};
		throw error;
	}
}
function createAppPageRscErrorTracker(baseOnError) {
	let capturedError = null;
	let capturedSpecialError = null;
	return {
		getCapturedError() {
			return capturedError;
		},
		getCapturedSpecialError() {
			return capturedSpecialError;
		},
		onRenderError(error, requestInfo, errorContext) {
			if (error && typeof error === "object" && "digest" in error) {
				if (capturedSpecialError === null) capturedSpecialError = error;
			} else capturedError = error;
			return baseOnError(error, requestInfo, errorContext);
		}
	};
}
function shouldRerenderAppPageWithGlobalError(options) {
	return Boolean(options.capturedError) && !options.hasLocalBoundary;
}
function getDefaultExport(module) {
	return module?.default ?? null;
}
function wrapRenderedBoundaryElement(options) {
	return wrapAppPageBoundaryElement({
		element: options.element,
		getDefaultExport,
		globalErrorComponent: getDefaultExport(options.globalErrorModule),
		includeGlobalErrorBoundary: options.includeGlobalErrorBoundary,
		isRscRequest: options.isRscRequest,
		layoutModules: options.layoutModules,
		layoutTreePositions: options.layoutTreePositions,
		makeThenableParams: options.makeThenableParams,
		matchedParams: options.matchedParams,
		renderErrorBoundary(GlobalErrorComponent, children) {
			return (0, import_react_react_server.createElement)(ErrorBoundary, {
				fallback: GlobalErrorComponent,
				children
			});
		},
		renderLayout(LayoutComponent, children, asyncParams) {
			return (0, import_react_react_server.createElement)(LayoutComponent, {
				children,
				params: asyncParams
			});
		},
		renderLayoutSegmentProvider(segmentMap, children) {
			return (0, import_react_react_server.createElement)(LayoutSegmentProvider, { segmentMap }, children);
		},
		resolveChildSegments: options.resolveChildSegments,
		routeSegments: options.routeSegments ?? [],
		skipLayoutWrapping: options.skipLayoutWrapping
	});
}
function createAppPageBoundaryLayoutEntries(route, layoutModules) {
	if (!route || layoutModules.length === 0) return [];
	return createAppPageLayoutEntries({
		errors: route.errors,
		layoutTreePositions: route.layoutTreePositions,
		layouts: layoutModules,
		notFounds: null,
		routeSegments: route.routeSegments
	});
}
function resolveHttpAccessFallbackHeadRouteSegments(route, layoutModules) {
	if (!route?.routeSegments) return;
	if (!route.layouts || layoutModules.length >= route.layouts.length) return route.routeSegments;
	const lastIncludedLayoutIndex = layoutModules.length - 1;
	if (lastIncludedLayoutIndex < 0) return [];
	const segmentCount = route.layoutTreePositions?.[lastIncludedLayoutIndex] ?? 0;
	return route.routeSegments.slice(0, segmentCount);
}
function resolveHttpAccessFallbackHeadLayoutTreePositions(route, layoutModules) {
	if (!route?.layouts || layoutModules.length >= route.layouts.length) return route?.layoutTreePositions;
	return route.layoutTreePositions?.slice(0, layoutModules.length);
}
function createAppPageBoundaryRscPayload(options) {
	const routeId = AppElementsWire.encodeRouteId(options.pathname, null);
	const layoutEntries = createAppPageBoundaryLayoutEntries(options.route, options.layoutModules);
	return {
		...AppElementsWire.createMetadataEntries({
			interceptionContext: null,
			layoutIds: layoutEntries.map((entry) => entry.id),
			rootLayoutTreePath: layoutEntries[0]?.treePath ?? null,
			routeId
		}),
		[routeId]: options.element
	};
}
async function renderAppPageBoundaryElementResponse(options) {
	const pathname = new URL(options.requestUrl).pathname;
	return renderAppPageBoundaryResponse({
		async createHtmlResponse(rscStream, responseStatus) {
			const fontData = createAppPageFontData({
				getLinks: options.getFontLinks,
				getPreloads: options.getFontPreloads,
				getStyles: options.getFontStyles
			});
			const ssrHandler = await options.loadSsrHandler();
			return renderAppPageHtmlResponse({
				clearRequestContext: options.clearRequestContext,
				fontData,
				fontLinkHeader: options.buildFontLinkHeader(fontData.preloads),
				middlewareHeaders: options.middlewareContext.headers,
				navigationContext: options.getNavigationContext(),
				rscStream,
				scriptNonce: options.scriptNonce,
				ssrHandler,
				status: responseStatus
			});
		},
		createRscOnErrorHandler() {
			return options.createRscOnErrorHandler(pathname, options.routePattern ?? pathname);
		},
		element: createAppPageBoundaryRscPayload({
			element: options.element,
			layoutModules: options.layoutModules,
			pathname,
			route: options.route
		}),
		isRscRequest: options.isRscRequest,
		middlewareHeaders: options.middlewareContext.headers,
		renderToReadableStream: options.renderToReadableStream,
		status: options.status
	});
}
async function renderAppPageHttpAccessFallback(options) {
	const boundaryComponent = options.boundaryComponent ?? resolveAppPageHttpAccessBoundaryComponent({
		getDefaultExport,
		rootForbiddenModule: options.rootForbiddenModule,
		rootNotFoundModule: options.rootNotFoundModule,
		rootUnauthorizedModule: options.rootUnauthorizedModule,
		routeForbiddenModule: options.route?.forbidden,
		routeNotFoundModule: options.route?.notFound,
		routeUnauthorizedModule: options.route?.unauthorized,
		statusCode: options.statusCode
	});
	if (!boundaryComponent) return null;
	const layoutModules = options.layoutModules ?? options.route?.layouts ?? options.rootLayouts;
	const routeSegments = resolveHttpAccessFallbackHeadRouteSegments(options.route, layoutModules);
	const { metadata, viewport } = await resolveAppPageHead({
		layoutModules,
		layoutTreePositions: resolveHttpAccessFallbackHeadLayoutTreePositions(options.route, layoutModules),
		metadataRoutes: options.metadataRoutes,
		params: options.matchedParams,
		routePath: options.route?.pattern ?? new URL(options.requestUrl).pathname,
		routeSegments
	});
	const headElements = [(0, import_react_react_server.createElement)("meta", {
		charSet: "utf-8",
		key: "charset"
	}), (0, import_react_react_server.createElement)("meta", {
		content: "noindex",
		key: "robots",
		name: "robots"
	})];
	if (metadata) headElements.push((0, import_react_react_server.createElement)(MetadataHead, {
		key: "metadata",
		metadata
	}));
	headElements.push((0, import_react_react_server.createElement)(ViewportHead, {
		key: "viewport",
		viewport
	}));
	const element = wrapRenderedBoundaryElement({
		element: (0, import_react_react_server.createElement)(import_react_react_server.Fragment, null, ...headElements, (0, import_react_react_server.createElement)(boundaryComponent)),
		globalErrorModule: options.globalErrorModule,
		includeGlobalErrorBoundary: true,
		isRscRequest: options.isRscRequest,
		layoutModules,
		layoutTreePositions: options.route?.layoutTreePositions,
		makeThenableParams: options.makeThenableParams,
		matchedParams: options.matchedParams,
		resolveChildSegments: options.resolveChildSegments,
		routeSegments: options.route?.routeSegments
	});
	return renderAppPageBoundaryElementResponse({
		...options,
		element,
		layoutModules,
		route: options.route,
		routePattern: options.route?.pattern,
		status: options.statusCode
	});
}
async function renderAppPageErrorBoundary(options) {
	const errorBoundary = resolveAppPageErrorBoundary({
		getDefaultExport,
		errorModules: options.route?.errorPaths,
		globalErrorModule: options.globalErrorModule,
		layoutErrorModules: options.route?.errors,
		pageErrorModule: options.route?.error
	});
	if (!errorBoundary.component) return null;
	const rawError = options.error instanceof Error ? options.error : new Error(String(options.error));
	rewriteClientHookError(rawError);
	const errorObject = options.sanitizeErrorForClient(rawError);
	const matchedParams = options.matchedParams ?? options.route?.params ?? {};
	const layoutModules = options.route?.layouts ?? options.rootLayouts;
	const pathname = new URL(options.requestUrl).pathname;
	const headElements = [(0, import_react_react_server.createElement)("meta", {
		charSet: "utf-8",
		key: "charset"
	})];
	if (!errorBoundary.isGlobalError) try {
		const { metadata, viewport } = await resolveAppPageHead({
			fallbackOnFileMetadataError: true,
			layoutModules,
			layoutTreePositions: options.route?.layoutTreePositions,
			metadataRoutes: options.metadataRoutes,
			params: matchedParams,
			routePath: options.route?.pattern ?? pathname,
			routeSegments: options.route?.routeSegments
		});
		if (metadata) headElements.push((0, import_react_react_server.createElement)(MetadataHead, {
			key: "metadata",
			metadata
		}));
		headElements.push((0, import_react_react_server.createElement)(ViewportHead, {
			key: "viewport",
			viewport
		}));
	} catch (error) {
		console.error(`[vinext] App page error boundary head resolution failed for ${options.route?.pattern ?? pathname}:`, error);
	}
	const element = wrapRenderedBoundaryElement({
		element: (0, import_react_react_server.createElement)(import_react_react_server.Fragment, null, ...headElements, (0, import_react_react_server.createElement)(errorBoundary.component, { error: errorObject })),
		globalErrorModule: options.globalErrorModule,
		includeGlobalErrorBoundary: !errorBoundary.isGlobalError,
		isRscRequest: options.isRscRequest,
		layoutModules,
		layoutTreePositions: options.route?.layoutTreePositions,
		makeThenableParams: options.makeThenableParams,
		matchedParams,
		resolveChildSegments: options.resolveChildSegments,
		routeSegments: options.route?.routeSegments,
		skipLayoutWrapping: errorBoundary.isGlobalError
	});
	return renderAppPageBoundaryElementResponse({
		...options,
		element,
		layoutModules,
		route: options.route,
		routePattern: options.route?.pattern,
		status: 200
	});
}
var _clientHookPattern = /\b(useState|useEffect|useReducer|useRef|useContext|useLayoutEffect|useInsertionEffect|useSyncExternalStore|useTransition|useImperativeHandle|useDeferredValue|useActionState|useOptimistic|useEffectEvent)\b.*is not a function/;
function rewriteClientHookError(error) {
	const match = error.message.match(_clientHookPattern);
	if (match) error.message = buildClientHookErrorMessage(`${match[1]}()`);
}
var EMPTY_MW_CTX = {
	headers: null,
	status: null
};
function createAppFallbackRenderer(options) {
	const { clearRequestContext, createRscOnErrorHandler: buildRscOnErrorHandler, fontProviders, getNavigationContext, globalErrorModule, makeThenableParams, metadataRoutes, resolveChildSegments, rootBoundaries, rscRenderer, sanitizer, ssrLoader } = options;
	const { rootForbiddenModule, rootLayouts, rootNotFoundModule, rootUnauthorizedModule } = rootBoundaries;
	return {
		renderHttpAccessFallback(route, statusCode, isRscRequest, request, opts, scriptNonce, middlewareContext) {
			return renderAppPageHttpAccessFallback({
				boundaryComponent: opts?.boundaryComponent ?? null,
				buildFontLinkHeader: fontProviders.buildFontLinkHeader,
				clearRequestContext,
				createRscOnErrorHandler(pathname, routePath) {
					return buildRscOnErrorHandler(request, pathname, routePath);
				},
				getFontLinks: fontProviders.getFontLinks,
				getFontPreloads: fontProviders.getFontPreloads,
				getFontStyles: fontProviders.getFontStyles,
				getNavigationContext,
				globalErrorModule,
				isRscRequest,
				layoutModules: opts?.layouts ?? null,
				loadSsrHandler: ssrLoader,
				makeThenableParams,
				matchedParams: opts?.matchedParams ?? route?.params ?? {},
				middlewareContext: middlewareContext ?? EMPTY_MW_CTX,
				metadataRoutes,
				requestUrl: request.url,
				resolveChildSegments,
				rootForbiddenModule,
				rootLayouts,
				rootNotFoundModule,
				rootUnauthorizedModule,
				route,
				renderToReadableStream: rscRenderer,
				scriptNonce,
				statusCode
			});
		},
		renderNotFound(route, isRscRequest, request, matchedParams, scriptNonce, middlewareContext) {
			return this.renderHttpAccessFallback(route, 404, isRscRequest, request, { matchedParams }, scriptNonce, middlewareContext);
		},
		renderErrorBoundary(route, error, isRscRequest, request, matchedParams, scriptNonce, middlewareContext) {
			return renderAppPageErrorBoundary({
				buildFontLinkHeader: fontProviders.buildFontLinkHeader,
				clearRequestContext,
				createRscOnErrorHandler(pathname, routePath) {
					return buildRscOnErrorHandler(request, pathname, routePath);
				},
				error,
				getFontLinks: fontProviders.getFontLinks,
				getFontPreloads: fontProviders.getFontPreloads,
				getFontStyles: fontProviders.getFontStyles,
				getNavigationContext,
				globalErrorModule,
				isRscRequest,
				loadSsrHandler: ssrLoader,
				makeThenableParams,
				matchedParams: matchedParams ?? route?.params ?? {},
				middlewareContext: middlewareContext ?? EMPTY_MW_CTX,
				metadataRoutes,
				requestUrl: request.url,
				resolveChildSegments,
				rootLayouts,
				route,
				renderToReadableStream: rscRenderer,
				sanitizeErrorForClient: sanitizer,
				scriptNonce
			});
		}
	};
}
/**
* Build the App Router element tree for a matched route.
*
* This is the central element-construction path for the App Router RSC
* handler. It resolves page head metadata (including parallel route metadata),
* creates the page React element, and wires it into the nested layout +
* boundary tree via {@link buildAppPageElements}.
*
* The function is extracted from the generated RSC entry template so it can
* be unit-tested independently of the code-generation machinery.
*
* Next.js equivalent: the component tree construction in
* {@link https://github.com/vercel/next.js/blob/canary/packages/next/src/server/app-render/create-component-tree.tsx|create-component-tree.tsx}
* and the page head resolution in
* {@link https://github.com/vercel/next.js/blob/canary/packages/next/src/server/app-render/create-metadata.tsx|create-metadata.tsx}.
*/
async function buildPageElements$1(options) {
	const { route, params, routePath, pageRequest, globalErrorModule, rootNotFoundModule, rootForbiddenModule, rootUnauthorizedModule, metadataRoutes } = options;
	const { opts, searchParams, isRscRequest, mountedSlotsHeader, renderMode = APP_RSC_RENDER_MODE_NAVIGATION } = pageRequest;
	const pageModule = route.page;
	const PageComponent = pageModule?.default;
	if (!!pageModule && !PageComponent) {
		const interceptionContext = opts?.interceptionContext ?? null;
		const noExportRouteId = AppElementsWire.encodeRouteId(routePath, interceptionContext);
		let noExportRootLayout = null;
		const noExportLayoutIds = route.ids?.layouts ?? route.layouts.map((_, index) => AppElementsWire.encodeLayoutId(createAppPageTreePath(route.routeSegments, route.layoutTreePositions?.[index] ?? 0)));
		if (route.layouts?.length > 0) {
			const treePosition = route.layoutTreePositions?.[0] ?? 0;
			noExportRootLayout = createAppPageTreePath(route.routeSegments, treePosition);
		}
		return {
			...AppElementsWire.createMetadataEntries({
				interceptionContext,
				layoutIds: noExportLayoutIds,
				rootLayoutTreePath: noExportRootLayout,
				routeId: noExportRouteId
			}),
			[noExportRouteId]: (0, import_react_react_server.createElement)("div", null, "Page has no default export")
		};
	}
	const { hasSearchParams, metadata: resolvedMetadata, pageSearchParams, viewport: resolvedViewport } = await resolveAppPageHead({
		layoutModules: route.layouts,
		layoutTreePositions: route.layoutTreePositions,
		metadataRoutes,
		pageModule: route.page ?? null,
		parallelRoutes: resolveActiveParallelRouteHeadInputs({
			interceptLayouts: opts?.interceptLayouts ?? null,
			interceptPage: opts?.interceptPage ?? null,
			interceptParams: opts?.interceptParams ?? null,
			interceptSlotKey: opts?.interceptSlotKey ?? null,
			params,
			routeSegments: route.routeSegments ?? [],
			slots: route.slots ?? null
		}),
		params,
		routePath: route.pattern,
		routeSegments: route.routeSegments ?? null,
		searchParams
	});
	const pageProps = { params: makeThenableParams(params) };
	if (searchParams) {
		pageProps.searchParams = makeThenableParams(pageSearchParams);
		if (hasSearchParams) markDynamicUsage();
	}
	const mountedSlotIds = mountedSlotsHeader ? new Set(mountedSlotsHeader.split(" ")) : null;
	const slotOverrides = buildSlotOverrides(route, params, routePath, opts);
	return buildAppPageElements({
		element: PageComponent ? (0, import_react_react_server.createElement)(PageComponent, pageProps) : null,
		globalErrorModule: globalErrorModule ?? null,
		isRscRequest,
		mountedSlotIds,
		makeThenableParams,
		matchedParams: params,
		resolvedMetadata,
		resolvedViewport,
		interceptionContext: opts?.interceptionContext ?? null,
		routePath,
		rootNotFoundModule: rootNotFoundModule ?? null,
		rootForbiddenModule: rootForbiddenModule ?? null,
		rootUnauthorizedModule: rootUnauthorizedModule ?? null,
		route,
		slotOverrides,
		renderMode
	});
}
/**
* Build the per-request `slotOverrides` map. Combines:
*  - Interception overrides (existing behavior — swap in the intercepting page
*    and its layouts when the request is intercepted into this slot).
*  - Slot-specific param extraction for inherited slots whose URL pattern
*    has different param names than the route's. The runtime matches the
*    cleaned request path against `slot.slotPatternParts` to produce
*    slot-scoped params, which `app-page-route-wiring` then hands to the
*    slot page instead of the route's matched params.
*
* `routePath` is the already-normalized request pathname (basePath stripped,
* RSC suffix removed). Re-parsing `request.url` here would re-introduce the
* basePath and silently break the match for any app that configures one.
*/
function buildSlotOverrides(route, routeParams, routePath, opts) {
	const overrides = {};
	if (opts && opts.interceptSlotKey && opts.interceptPage) overrides[opts.interceptSlotKey] = {
		layoutModules: opts.interceptLayouts || null,
		pageModule: opts.interceptPage,
		params: opts.interceptParams || routeParams
	};
	const slots = route.slots;
	if (slots) {
		let urlParts = null;
		const routeParamSet = collectParamNameSet(route.params);
		for (const [slotKey, slot] of Object.entries(slots)) {
			const patternParts = slot.slotPatternParts;
			const paramNames = slot.slotParamNames;
			if (!patternParts || patternParts.length === 0) continue;
			if (paramNames && paramNames.every((name) => routeParamSet.has(name))) continue;
			if (urlParts === null) urlParts = routePath.split("/").filter(Boolean);
			const matched = matchRoutePattern(urlParts, patternParts);
			if (!matched) continue;
			const existing = overrides[slotKey];
			overrides[slotKey] = existing ? {
				...existing,
				params: matched
			} : { params: matched };
		}
	}
	return Object.keys(overrides).length > 0 ? overrides : null;
}
function collectParamNameSet(params) {
	const set = /* @__PURE__ */ new Set();
	if (params) for (const name of params) set.add(name);
	return set;
}
/**
* ISR (Incremental Static Regeneration) cache layer.
*
* Wraps the pluggable CacheHandler with stale-while-revalidate semantics:
* - Fresh hit: serve immediately
* - Stale hit: serve immediately + trigger background regeneration
* - Miss: render synchronously, cache, serve
*
* Background regeneration is deduped — only one regeneration per cache key
* runs at a time, preventing thundering herd on popular pages.
*
* This layer works with any CacheHandler backend (memory, Redis, KV, etc.)
* because it only uses the standard get/set interface.
*/
/**
* Get a cache entry with staleness information.
*
* Returns { value, isStale: false } for fresh entries,
* { value, isStale: true } for expired-but-usable entries,
* or null for cache misses.
*/
async function isrGet(key) {
	const result = await getCacheHandler().get(key);
	if (!result || !result.value) return null;
	if (result.cacheState === "expired") return null;
	return {
		value: result,
		isStale: result.cacheState === "stale"
	};
}
/**
* Store a value in the ISR cache with a revalidation period.
*/
async function isrSet(key, data, revalidateSeconds, tags, expireSeconds) {
	await getCacheHandler().set(key, data, {
		cacheControl: expireSeconds === void 0 ? { revalidate: revalidateSeconds } : {
			revalidate: revalidateSeconds,
			expire: expireSeconds
		},
		revalidate: revalidateSeconds,
		tags: tags ?? []
	});
}
var _PENDING_REGEN_KEY = Symbol.for("vinext.isrCache.pendingRegenerations");
var _g$1 = globalThis;
var pendingRegenerations = _g$1[_PENDING_REGEN_KEY] ??= /* @__PURE__ */ new Map();
/**
* Trigger a background regeneration for a cache key.
*
* If a regeneration for this key is already in progress, this is a no-op.
* The renderFn should produce the new cache value and call isrSet internally.
*
* On Cloudflare Workers the regeneration promise is registered with
* `ctx.waitUntil()` via the ALS-backed ExecutionContext, keeping the isolate
* alive until the regeneration completes even after the Response is returned.
*
* When `errorContext` is provided and the render function fails, the error
* is reported via `reportRequestError` (instrumentation hook) with
* `revalidateReason: "stale"`.
*/
function triggerBackgroundRegeneration(key, renderFn, errorContext) {
	if (pendingRegenerations.has(key)) return;
	const promise = renderFn().catch((err) => {
		console.error(`[vinext] ISR background regeneration failed for ${key}:`, err);
		if (errorContext) reportRequestError(err instanceof Error ? err : new Error(String(err)), {
			path: key,
			method: "GET",
			headers: {}
		}, {
			routerKind: errorContext.routerKind,
			routePath: errorContext.routePath,
			routeType: errorContext.routeType,
			revalidateReason: "stale"
		});
	}).finally(() => {
		pendingRegenerations.delete(key);
	});
	pendingRegenerations.set(key, promise);
	getRequestExecutionContext()?.waitUntil(promise);
}
/**
* Build a CachedAppPageValue for the App Router ISR cache.
*/
function buildAppPageCacheValue(html, rscData, status) {
	return {
		kind: "APP_PAGE",
		html,
		rscData,
		headers: void 0,
		postponed: void 0,
		status
	};
}
function normalizeCachePathname(pathname) {
	return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
}
function buildCacheKey(prefix, pathname, suffix) {
	const normalized = normalizeCachePathname(pathname);
	const suffixPart = suffix ? `:${suffix}` : "";
	const key = `${prefix}:${normalized}${suffixPart}`;
	if (key.length <= 200) return key;
	return `${prefix}:__hash:${fnv1a64(normalized)}${suffixPart}`;
}
/**
* Compute an App Router ISR key for one cache artifact.
*
* App pages store HTML, RSC payloads, and route-handler responses separately.
* The suffix mirrors Next.js's separate on-disk app artifacts while keeping the
* Cloudflare KV key under its 512-byte limit for long pathnames.
*/
function appIsrCacheKey(pathname, suffix, buildId = "d90292b9-b3d4-4272-a766-82e8411e829e") {
	return buildCacheKey(buildId ? `app:${buildId}` : "app", pathname, suffix);
}
function appIsrHtmlKey(pathname) {
	return appIsrCacheKey(pathname, "html");
}
/**
* Build the ISR cache key for an RSC payload.
*
* Note: the key format changed from `rsc:<hash>` to `rsc:slots:<hash>` (and
* optionally `rsc:slots:<hash>:preserve-ui`). Existing cached entries under
* the old format will become unreachable after deployment. This is acceptable
* because ISR entries have TTLs and will be regenerated on the next request.
*/
function appIsrRscKey(pathname, mountedSlotsHeader, renderMode = APP_RSC_RENDER_MODE_NAVIGATION) {
	const normalizedMountedSlotsHeader = normalizeMountedSlotsHeader(mountedSlotsHeader);
	const variant = [normalizedMountedSlotsHeader ? `slots:${fnv1a64(normalizedMountedSlotsHeader)}` : null, shouldUsePreserveUiCacheVariant(renderMode) ? "preserve-ui" : null].filter((part) => part !== null).join(":");
	return appIsrCacheKey(pathname, variant ? `rsc:${variant}` : "rsc");
}
function appIsrRouteKey(pathname) {
	return appIsrCacheKey(pathname, "route");
}
var _REVALIDATE_KEY = Symbol.for("vinext.isrCache.revalidateDurations");
_g$1[_REVALIDATE_KEY] ??= /* @__PURE__ */ new Map();
var NO_STORE_CACHE_CONTROL = "no-store, must-revalidate";
function buildAppPageCacheControl(cacheState, revalidateSeconds, expireSeconds) {
	return buildCachedRevalidateCacheControl(cacheState, revalidateSeconds, expireSeconds);
}
function buildAppPageCachedHeaders(options) {
	const headers = new Headers({
		"Cache-Control": options.cacheControl,
		"Content-Type": options.contentType,
		Vary: VINEXT_RSC_VARY_HEADER,
		[VINEXT_CACHE_HEADER]: options.cacheState
	});
	if (options.mountedSlotsHeader) headers.set(VINEXT_MOUNTED_SLOTS_HEADER, options.mountedSlotsHeader);
	mergeMiddlewareResponseHeaders(headers, options.middlewareHeaders ?? null);
	return headers;
}
function getCachedAppPageValue(entry) {
	return entry?.value.value && entry.value.value.kind === "APP_PAGE" ? entry.value.value : null;
}
function resolveAppPageCacheWritePolicy(options) {
	let revalidateSeconds = options.revalidateSeconds;
	let expireSeconds = options.expireSeconds;
	const requestCacheLife = options.requestCacheLife;
	if (requestCacheLife?.revalidate !== void 0) revalidateSeconds = revalidateSeconds === null ? requestCacheLife.revalidate : Math.min(revalidateSeconds, requestCacheLife.revalidate);
	if (requestCacheLife?.expire !== void 0) expireSeconds = requestCacheLife.expire;
	if (revalidateSeconds === null || revalidateSeconds <= 0 || !Number.isFinite(revalidateSeconds)) return null;
	return {
		expireSeconds,
		revalidateSeconds
	};
}
function buildAppPageCachedResponse(cachedValue, options) {
	const status = options.middlewareStatus ?? (cachedValue.status || 200);
	const revalidateSeconds = options.cacheControl?.revalidate ?? options.revalidateSeconds;
	const expireSeconds = options.cacheControl === void 0 ? void 0 : options.cacheControl.expire ?? options.expireSeconds;
	const cacheControl = buildAppPageCacheControl(options.cacheState, revalidateSeconds, expireSeconds);
	if (options.isRscRequest) {
		if (!cachedValue.rscData) return null;
		const rscHeaders = buildAppPageCachedHeaders({
			cacheControl,
			cacheState: options.cacheState,
			contentType: "text/x-component; charset=utf-8",
			middlewareHeaders: options.middlewareHeaders,
			mountedSlotsHeader: options.mountedSlotsHeader
		});
		return new Response(cachedValue.rscData, {
			status,
			headers: rscHeaders
		});
	}
	if (typeof cachedValue.html !== "string" || cachedValue.html.length === 0) return null;
	const htmlHeaders = buildAppPageCachedHeaders({
		cacheControl,
		cacheState: options.cacheState,
		contentType: "text/html; charset=utf-8",
		middlewareHeaders: options.middlewareHeaders
	});
	return new Response(cachedValue.html, {
		status,
		headers: htmlHeaders
	});
}
async function readAppPageCacheResponse(options) {
	const isrKey = options.isRscRequest ? options.isrRscKey(options.cleanPathname, options.mountedSlotsHeader, options.renderMode) : options.isrHtmlKey(options.cleanPathname);
	try {
		const cached = await options.isrGet(isrKey);
		const cachedValue = getCachedAppPageValue(cached);
		if (cachedValue && !cached?.isStale) {
			const hitResponse = buildAppPageCachedResponse(cachedValue, {
				cacheState: "HIT",
				cacheControl: cached?.value.cacheControl,
				expireSeconds: options.expireSeconds,
				isRscRequest: options.isRscRequest,
				middlewareHeaders: options.middlewareHeaders,
				middlewareStatus: options.middlewareStatus,
				mountedSlotsHeader: options.mountedSlotsHeader,
				revalidateSeconds: options.revalidateSeconds
			});
			if (hitResponse) {
				options.isrDebug?.(options.isRscRequest ? "HIT (RSC)" : "HIT (HTML)", options.cleanPathname);
				options.clearRequestContext();
				return hitResponse;
			}
			options.isrDebug?.("MISS (empty cached entry)", options.cleanPathname);
		}
		if (cached?.isStale && cachedValue) {
			const regenerationKey = options.isRscRequest ? options.isrRscKey(options.cleanPathname, options.mountedSlotsHeader, options.renderMode) : options.isrHtmlKey(options.cleanPathname);
			options.scheduleBackgroundRegeneration(regenerationKey, async () => {
				const revalidatedPage = await options.renderFreshPageForCache();
				const revalidateSeconds = revalidatedPage.cacheControl?.revalidate ?? options.revalidateSeconds;
				const expireSeconds = revalidatedPage.cacheControl?.expire ?? options.expireSeconds;
				const writes = [options.isrSet(options.isrRscKey(options.cleanPathname, options.mountedSlotsHeader, options.renderMode), buildAppPageCacheValue("", revalidatedPage.rscData, 200), revalidateSeconds, revalidatedPage.tags, expireSeconds)];
				if (!options.isRscRequest) writes.push(options.isrSet(options.isrHtmlKey(options.cleanPathname), buildAppPageCacheValue(revalidatedPage.html, void 0, 200), revalidateSeconds, revalidatedPage.tags, expireSeconds));
				await Promise.all(writes);
				options.isrDebug?.("regen complete", options.cleanPathname);
			});
			const staleResponse = buildAppPageCachedResponse(cachedValue, {
				cacheState: "STALE",
				cacheControl: cached.value.cacheControl,
				expireSeconds: options.expireSeconds,
				isRscRequest: options.isRscRequest,
				middlewareHeaders: options.middlewareHeaders,
				middlewareStatus: options.middlewareStatus,
				mountedSlotsHeader: options.mountedSlotsHeader,
				revalidateSeconds: options.revalidateSeconds
			});
			if (staleResponse) {
				options.isrDebug?.(options.isRscRequest ? "STALE (RSC)" : "STALE (HTML)", options.cleanPathname);
				options.clearRequestContext();
				return staleResponse;
			}
			options.isrDebug?.("STALE MISS (empty stale entry)", options.cleanPathname);
		}
		if (!cached) options.isrDebug?.("MISS (no cache entry)", options.cleanPathname);
	} catch (isrReadError) {
		console.error("[vinext] ISR cache read error:", isrReadError);
	}
	return null;
}
function finalizeAppPageHtmlCacheResponse(response, options) {
	if (!response.body) return response;
	const [streamForClient, streamForCache] = response.body.tee();
	const htmlKey = options.isrHtmlKey(options.cleanPathname);
	const rscKey = options.isrRscKey(options.cleanPathname, null);
	const clientHeaders = new Headers(response.headers);
	if (options.preserveClientResponseHeaders !== true) {
		clientHeaders.set("Cache-Control", NO_STORE_CACHE_CONTROL);
		clientHeaders.set(VINEXT_CACHE_HEADER, "MISS");
	}
	const cachePromise = (async () => {
		try {
			const cachedHtml = await readStreamAsText(streamForCache);
			if (options.capturedDynamicUsageBeforeContextCleanup?.() === true || options.consumeDynamicUsage()) {
				options.isrDebug?.("HTML cache write skipped (dynamic usage during render)", htmlKey);
				return;
			}
			const cachePolicy = resolveAppPageCacheWritePolicy({
				expireSeconds: options.expireSeconds,
				requestCacheLife: options.getRequestCacheLife?.(),
				revalidateSeconds: options.revalidateSeconds
			});
			if (!cachePolicy) {
				options.isrDebug?.("HTML cache write skipped (no cache policy)", htmlKey);
				return;
			}
			const pageTags = options.getPageTags();
			const writes = [options.isrSet(htmlKey, buildAppPageCacheValue(cachedHtml, void 0, 200), cachePolicy.revalidateSeconds, pageTags, cachePolicy.expireSeconds)];
			if (options.capturedRscDataPromise) writes.push(options.capturedRscDataPromise.then((rscData) => options.isrSet(rscKey, buildAppPageCacheValue("", rscData, 200), cachePolicy.revalidateSeconds, pageTags, cachePolicy.expireSeconds)));
			await Promise.all(writes);
			options.isrDebug?.("HTML cache written", htmlKey);
		} catch (cacheError) {
			console.error("[vinext] ISR cache write error:", cacheError);
		}
	})();
	options.waitUntil?.(cachePromise);
	return new Response(streamForClient, {
		status: response.status,
		statusText: response.statusText,
		headers: clientHeaders
	});
}
function finalizeAppPageRscCacheResponse(response, options) {
	if (!scheduleAppPageRscCacheWrite(options)) return response;
	if (options.preserveClientResponseHeaders === true) return response;
	const clientHeaders = new Headers(response.headers);
	clientHeaders.set("Cache-Control", NO_STORE_CACHE_CONTROL);
	clientHeaders.set(VINEXT_CACHE_HEADER, "MISS");
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: clientHeaders
	});
}
function scheduleAppPageRscCacheWrite(options) {
	const capturedRscDataPromise = options.capturedRscDataPromise;
	if (!capturedRscDataPromise || options.dynamicUsedDuringBuild) return false;
	const rscKey = options.isrRscKey(options.cleanPathname, options.mountedSlotsHeader, options.renderMode);
	const cachePromise = (async () => {
		try {
			const rscData = await capturedRscDataPromise;
			if (options.consumeDynamicUsage()) {
				options.isrDebug?.("RSC cache write skipped (dynamic usage during render)", rscKey);
				return;
			}
			const cachePolicy = resolveAppPageCacheWritePolicy({
				expireSeconds: options.expireSeconds,
				requestCacheLife: options.getRequestCacheLife?.(),
				revalidateSeconds: options.revalidateSeconds
			});
			if (!cachePolicy) {
				options.isrDebug?.("RSC cache write skipped (no cache policy)", rscKey);
				return;
			}
			await options.isrSet(rscKey, buildAppPageCacheValue("", rscData, 200), cachePolicy.revalidateSeconds, options.getPageTags(), cachePolicy.expireSeconds);
			options.isrDebug?.("RSC cache written", rscKey);
		} catch (cacheError) {
			console.error("[vinext] ISR RSC cache write error:", cacheError);
		}
	})();
	options.waitUntil?.(cachePromise);
	return true;
}
function isNonGetOrHead(method) {
	const normalizedMethod = method.toUpperCase();
	return normalizedMethod !== "GET" && normalizedMethod !== "HEAD";
}
function isStaticOrSsgAppPageCandidate(options) {
	if (options.dynamicConfig === "force-dynamic" || options.revalidateSeconds === 0) return false;
	if (options.dynamicConfig === "force-static" || options.dynamicConfig === "error") return true;
	if (options.revalidateSeconds !== null && options.revalidateSeconds > 0) return true;
	if (options.hasGenerateStaticParams) return true;
	return !options.isDynamicRoute;
}
function resolveAppPageMethodResponse(options) {
	if (!isNonGetOrHead(options.request.method)) return null;
	if (isPossibleAppRouteActionRequest(options.request)) return null;
	if (!isStaticOrSsgAppPageCandidate(options)) return null;
	const headers = new Headers();
	mergeMiddlewareResponseHeaders(headers, options.middlewareHeaders ?? null);
	return methodNotAllowedResponse("GET, HEAD", { headers });
}
async function probeAppPageBeforeRender(options) {
	let layoutFlags = {};
	if (options.layoutCount > 0) {
		const layoutProbeResult = await probeAppPageLayouts({
			layoutCount: options.layoutCount,
			async onLayoutError(layoutError, layoutIndex) {
				const specialError = options.resolveSpecialError(layoutError);
				if (!specialError) return null;
				return options.renderLayoutSpecialError(specialError, layoutIndex);
			},
			probeLayoutAt: options.probeLayoutAt,
			runWithSuppressedHookWarning(probe) {
				return options.runWithSuppressedHookWarning(probe);
			},
			classification: options.classification
		});
		layoutFlags = layoutProbeResult.layoutFlags;
		if (layoutProbeResult.response) return {
			response: layoutProbeResult.response,
			layoutFlags
		};
	}
	if (options.hasLoadingBoundary) return {
		response: null,
		layoutFlags
	};
	return {
		response: await probeAppPageComponent({
			awaitAsyncResult: true,
			async onError(pageError) {
				const specialError = options.resolveSpecialError(pageError);
				if (specialError) return options.renderPageSpecialError(specialError);
				return null;
			},
			probePage: options.probePage,
			runWithSuppressedHookWarning(probe) {
				return options.runWithSuppressedHookWarning(probe);
			}
		}),
		layoutFlags
	};
}
function buildResponseTiming(options) {
	if (options.isProduction) return;
	return {
		compileEnd: options.compileEnd,
		handlerStart: options.handlerStart,
		renderEnd: options.renderEnd,
		responseKind: options.responseKind
	};
}
function readRequestCacheLifeForPrerender(options) {
	return options.peekRequestCacheLife?.() ?? options.getRequestCacheLife();
}
function applyRequestCacheLife(options) {
	let revalidateSeconds = options.revalidateSeconds;
	let expireSeconds = options.expireSeconds;
	const requestCacheLife = options.requestCacheLife;
	if (requestCacheLife?.revalidate !== void 0) revalidateSeconds = revalidateSeconds === null ? requestCacheLife.revalidate : Math.min(revalidateSeconds, requestCacheLife.revalidate);
	if (requestCacheLife?.expire !== void 0) expireSeconds = requestCacheLife.expire;
	return {
		expireSeconds,
		revalidateSeconds
	};
}
function readRootBoundaryId(element) {
	const rootLayoutTreePath = element[AppElementsWire.keys.rootLayout];
	return typeof rootLayoutTreePath === "string" ? rootLayoutTreePath : null;
}
function createAppPageArtifactCompatibility(element, routePattern) {
	if (!isAppElementsRecord(element)) return;
	const rootBoundaryId = readRootBoundaryId(element);
	return createArtifactCompatibilityEnvelope({
		graphVersion: createArtifactCompatibilityGraphVersion({
			routePattern,
			rootBoundaryId
		}),
		deploymentVersion: "d90292b9-b3d4-4272-a766-82e8411e829e",
		rootBoundaryId
	});
}
/**
* Wraps an RSC response body to report invalid dynamic usage errors after the
* stream is fully consumed. In dev mode, errors from cookies()/headers() inside
* "use cache" may be caught by user try/catch and silently swallowed — this
* wrapper waits for the stream to drain and surfaces any recorded error to the
* terminal (and, via HMR, the browser dev overlay).
* Ported from Next.js: https://github.com/vercel/next.js/commit/f5e54c06726b571a042fce67417e40a29f6b8689
*/
function wrapRscResponseForDevErrorReporting(response, consumeInvalidDynamicUsageError) {
	const originalBody = response.body;
	if (!originalBody) return response;
	let consumed = false;
	const onConsumed = () => {
		if (consumed) return;
		consumed = true;
		const error = consumeInvalidDynamicUsageError();
		if (error) console.error("[vinext] Invalid dynamic usage:", error);
	};
	const cleanup = new TransformStream({ flush() {
		onConsumed();
	} });
	const reader = originalBody.pipeThrough(cleanup).getReader();
	const wrappedStream = new ReadableStream({
		pull(controller) {
			return reader.read().then(({ done, value }) => {
				if (done) controller.close();
				else controller.enqueue(value);
			}, (streamError) => {
				onConsumed();
				controller.error(streamError);
			});
		},
		cancel(reason) {
			onConsumed();
			return reader.cancel(reason);
		}
	});
	return new Response(wrappedStream, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});
}
async function renderAppPageLifecycle(options) {
	const preRenderResult = await probeAppPageBeforeRender({
		hasLoadingBoundary: options.hasLoadingBoundary,
		layoutCount: options.layoutCount,
		probeLayoutAt(layoutIndex) {
			return options.probeLayoutAt(layoutIndex);
		},
		probePage() {
			return options.probePage();
		},
		renderLayoutSpecialError(specialError, layoutIndex) {
			return options.renderLayoutSpecialError(specialError, layoutIndex);
		},
		renderPageSpecialError(specialError) {
			return options.renderPageSpecialError(specialError);
		},
		resolveSpecialError: resolveAppPageSpecialError,
		runWithSuppressedHookWarning(probe) {
			return options.runWithSuppressedHookWarning(probe);
		},
		classification: options.classification
	});
	if (preRenderResult.response) return preRenderResult.response;
	const layoutFlags = preRenderResult.layoutFlags;
	const artifactCompatibility = createAppPageArtifactCompatibility(options.element, options.routePattern);
	const outgoingElement = AppElementsWire.encodeOutgoingPayload({
		element: options.element,
		layoutFlags,
		...artifactCompatibility ? { artifactCompatibility } : {}
	});
	const compileEnd = options.isProduction ? void 0 : performance.now();
	const rscErrorTracker = createAppPageRscErrorTracker(options.createRscOnErrorHandler(options.cleanPathname, options.routePattern));
	const rscStream = runWithFetchDedupe(() => options.renderToReadableStream(outgoingElement, { onError: rscErrorTracker.onRenderError }));
	let revalidateSeconds = options.revalidateSeconds;
	let expireSeconds = options.expireSeconds;
	const shouldCaptureRscForCacheMetadata = options.isProgressiveActionRender !== true && (options.isProduction || options.isPrerender === true) && (revalidateSeconds === null || revalidateSeconds > 0 && revalidateSeconds !== Infinity) && !options.isDraftMode && !options.isForceDynamic;
	const rscCapture = teeAppPageRscStreamForCapture(rscStream, shouldCaptureRscForCacheMetadata);
	const rscForResponse = rscCapture.ssrStream;
	const capturedRscDataRef = { value: null };
	if (rscCapture.sideStream && options.isRscRequest) capturedRscDataRef.value = readAppPageBinaryStream(rscCapture.sideStream);
	if (options.isRscRequest) {
		if (options.isPrerender === true) {
			await settleCapturedRscRenderForCacheMetadata(capturedRscDataRef.value);
			({expireSeconds, revalidateSeconds} = applyRequestCacheLife({
				expireSeconds,
				requestCacheLife: readRequestCacheLifeForPrerender(options),
				revalidateSeconds
			}));
		}
		const dynamicUsedDuringBuild = options.consumeDynamicUsage();
		const rscResponsePolicy = resolveAppPageRscResponsePolicy({
			dynamicUsedDuringBuild,
			isDraftMode: options.isDraftMode,
			isDynamicError: options.isDynamicError,
			isForceDynamic: options.isForceDynamic,
			isForceStatic: options.isForceStatic,
			isProduction: options.isProduction,
			expireSeconds,
			revalidateSeconds
		});
		const rscResponse = buildAppPageRscResponse(rscForResponse, {
			middlewareContext: options.middlewareContext,
			mountedSlotsHeader: options.mountedSlotsHeader,
			params: options.params,
			policy: rscResponsePolicy,
			timing: buildResponseTiming({
				compileEnd,
				handlerStart: options.handlerStart,
				isProduction: options.isProduction,
				responseKind: "rsc"
			})
		});
		return finalizeAppPageRscCacheResponse(!options.isProduction && rscResponse.body && options.consumeInvalidDynamicUsageError ? wrapRscResponseForDevErrorReporting(rscResponse, options.consumeInvalidDynamicUsageError) : rscResponse, {
			capturedRscDataPromise: options.isProduction && shouldCaptureRscForCacheMetadata ? capturedRscDataRef.value : null,
			cleanPathname: options.cleanPathname,
			consumeDynamicUsage: options.consumeDynamicUsage,
			dynamicUsedDuringBuild,
			getPageTags() {
				return options.getPageTags();
			},
			getRequestCacheLife() {
				return options.getRequestCacheLife();
			},
			isrDebug: options.isrDebug,
			isrRscKey: options.isrRscKey,
			isrSet: options.isrSet,
			mountedSlotsHeader: options.mountedSlotsHeader,
			renderMode: options.renderMode,
			preserveClientResponseHeaders: rscResponsePolicy.cacheState !== "MISS",
			expireSeconds,
			revalidateSeconds,
			waitUntil(promise) {
				options.waitUntil?.(promise);
			}
		});
	}
	const fontData = createAppPageFontData({
		getLinks: options.getFontLinks,
		getPreloads: options.getFontPreloads,
		getStyles: options.getFontStyles
	});
	const fontLinkHeader = buildAppPageFontLinkHeader(fontData.preloads);
	let renderEnd;
	const htmlRender = await renderAppPageHtmlStreamWithRecovery({
		onShellRendered() {
			if (!options.isProduction) renderEnd = performance.now();
		},
		renderErrorBoundaryResponse(error) {
			return options.renderErrorBoundaryResponse(error);
		},
		async renderHtmlStream() {
			const ssrHandler = await options.loadSsrHandler();
			return renderAppPageHtmlStream({
				capturedRscDataRef,
				fontData,
				navigationContext: options.getNavigationContext(),
				formState: options.formState ?? null,
				rscStream: rscForResponse,
				scriptNonce: options.scriptNonce,
				sideStream: rscCapture.sideStream,
				ssrHandler,
				waitForAllReady: options.isPrerender
			});
		},
		renderSpecialErrorResponse(specialError) {
			return options.renderPageSpecialError(specialError);
		},
		resolveSpecialError: resolveAppPageSpecialError
	});
	if (htmlRender.response) return htmlRender.response;
	const htmlStream = htmlRender.htmlStream;
	if (!htmlStream) throw new Error("[vinext] Expected an HTML stream when no fallback response was returned");
	if (options.hasLoadingBoundary) {
		const captured = rscErrorTracker.getCapturedSpecialError();
		if (captured) {
			const specialError = resolveAppPageSpecialError(captured);
			if (specialError) {
				htmlStream.cancel().catch(() => {});
				return options.renderPageSpecialError(specialError);
			}
		}
	}
	if (shouldRerenderAppPageWithGlobalError({
		capturedError: rscErrorTracker.getCapturedError(),
		hasLocalBoundary: options.routeHasLocalBoundary
	})) {
		const cleanResponse = await options.renderErrorBoundaryResponse(rscErrorTracker.getCapturedError());
		if (cleanResponse) return cleanResponse;
	}
	if (options.isPrerender === true) {
		await settleCapturedRscRenderForCacheMetadata(capturedRscDataRef.value);
		({expireSeconds, revalidateSeconds} = applyRequestCacheLife({
			expireSeconds,
			requestCacheLife: readRequestCacheLifeForPrerender(options),
			revalidateSeconds
		}));
	}
	const draftCookie = options.getDraftModeCookieHeader();
	const dynamicUsedDuringRender = options.consumeDynamicUsage();
	let dynamicUsedBeforeContextCleanup = dynamicUsedDuringRender;
	const safeHtmlStream = deferUntilStreamConsumed(htmlStream, () => {
		dynamicUsedBeforeContextCleanup = dynamicUsedBeforeContextCleanup || options.consumeDynamicUsage();
		options.clearRequestContext();
	});
	const htmlResponsePolicy = resolveAppPageHtmlResponsePolicy({
		dynamicUsedDuringRender,
		isProgressiveActionRender: options.isProgressiveActionRender === true,
		hasScriptNonce: Boolean(options.scriptNonce),
		isDraftMode: options.isDraftMode,
		isDynamicError: options.isDynamicError,
		isForceDynamic: options.isForceDynamic,
		isForceStatic: options.isForceStatic,
		isProduction: options.isProduction,
		expireSeconds,
		revalidateSeconds
	});
	const htmlResponseTiming = buildResponseTiming({
		compileEnd,
		handlerStart: options.handlerStart,
		isProduction: options.isProduction,
		renderEnd,
		responseKind: "html"
	});
	const shouldSpeculativelyWriteCache = options.isProduction && shouldCaptureRscForCacheMetadata && revalidateSeconds === null && !options.isDynamicError && !options.isForceStatic && !options.scriptNonce && options.isProgressiveActionRender !== true && !dynamicUsedDuringRender;
	if (htmlResponsePolicy.shouldWriteToCache || shouldSpeculativelyWriteCache) {
		const isrResponse = buildAppPageHtmlResponse(safeHtmlStream, {
			draftCookie,
			fontLinkHeader,
			middlewareContext: options.middlewareContext,
			policy: htmlResponsePolicy,
			timing: htmlResponseTiming
		});
		if (options.isPrerender === true) return isrResponse;
		return finalizeAppPageHtmlCacheResponse(isrResponse, {
			capturedDynamicUsageBeforeContextCleanup() {
				return dynamicUsedBeforeContextCleanup;
			},
			capturedRscDataPromise: capturedRscDataRef.value,
			cleanPathname: options.cleanPathname,
			consumeDynamicUsage: options.consumeDynamicUsage,
			getPageTags() {
				return options.getPageTags();
			},
			getRequestCacheLife() {
				return options.getRequestCacheLife();
			},
			isrDebug: options.isrDebug,
			isrHtmlKey: options.isrHtmlKey,
			isrRscKey: options.isrRscKey,
			isrSet: options.isrSet,
			preserveClientResponseHeaders: !htmlResponsePolicy.shouldWriteToCache,
			expireSeconds,
			revalidateSeconds,
			waitUntil(cachePromise) {
				options.waitUntil?.(cachePromise);
			}
		});
	}
	return buildAppPageHtmlResponse(safeHtmlStream, {
		draftCookie,
		fontLinkHeader,
		middlewareContext: options.middlewareContext,
		policy: htmlResponsePolicy,
		timing: htmlResponseTiming
	});
}
async function settleCapturedRscRenderForCacheMetadata(capturedRscDataPromise) {
	if (!capturedRscDataPromise) return;
	try {
		await capturedRscDataPromise;
	} catch {}
}
function shouldReadAppPageCache(options) {
	return options.isProduction && !options.isProgressiveActionRender && !options.isDraftMode && !options.isForceDynamic && (options.isRscRequest || !options.scriptNonce) && (options.revalidateSeconds === null || options.revalidateSeconds > 0);
}
function buildAppPageTags(cleanPathname, extraTags, routeSegments) {
	return buildPageCacheTags(cleanPathname, extraTags, [...routeSegments], "page");
}
async function runAppPageRevalidationContext(options, renderFn) {
	return runWithRequestContext(createRequestContext({
		headersContext: createStaticGenerationHeadersContext({
			dynamicConfig: options.dynamicConfig,
			routeKind: "page",
			routePattern: options.routePattern
		}),
		currentFetchCacheMode: options.currentFetchCacheMode ?? null,
		executionContext: getRequestExecutionContext(),
		unstableCacheRevalidation: "foreground"
	}), async () => {
		ensureFetchPatch();
		setCurrentFetchSoftTags(buildAppPageTags(options.cleanPathname, [], options.routeSegments));
		options.setNavigationContext({
			pathname: options.cleanPathname,
			searchParams: new URLSearchParams(),
			params: options.params
		});
		return await runWithFetchDedupe(renderFn);
	});
}
function getCapturedRscDataPromise(capturedRscDataPromise) {
	if (!capturedRscDataPromise) throw new Error("[vinext] Expected captured RSC data while regenerating an app page cache entry");
	return capturedRscDataPromise;
}
function toInterceptOptions(interceptionContext, intercept) {
	return {
		interceptionContext,
		interceptLayouts: intercept.interceptLayouts,
		interceptPage: intercept.page,
		interceptParams: intercept.matchedParams,
		interceptSlotKey: intercept.slotKey
	};
}
async function dispatchAppPage(options) {
	return await runWithFetchDedupe(() => dispatchAppPageInner(options));
}
async function dispatchAppPageInner(options) {
	const route = options.route;
	const dynamicConfig = options.dynamicConfig;
	const currentRevalidateSeconds = options.revalidateSeconds;
	const isForceStatic = dynamicConfig === "force-static";
	const isDynamicError = dynamicConfig === "error";
	const isForceDynamic = dynamicConfig === "force-dynamic";
	const isDraftMode = isDraftModeRequest(options.request);
	setCurrentFetchSoftTags(buildAppPageTags(options.cleanPathname, [], route.routeSegments));
	setCurrentFetchCacheMode(options.fetchCache ?? null);
	if (options.hasPageModule && !options.hasPageDefaultExport) {
		options.clearRequestContext();
		return new Response("Page has no default export", { status: 500 });
	}
	const methodResponse = resolveAppPageMethodResponse({
		dynamicConfig,
		hasGenerateStaticParams: options.hasGenerateStaticParams,
		isDynamicRoute: route.isDynamic,
		middlewareHeaders: options.middlewareContext.headers,
		request: options.request,
		revalidateSeconds: currentRevalidateSeconds
	});
	if (methodResponse) {
		options.clearRequestContext();
		return methodResponse;
	}
	if ((isForceStatic || isDynamicError) && !isDraftMode) {
		setHeadersContext(createStaticGenerationHeadersContext({
			dynamicConfig,
			routeKind: "page",
			routePattern: route.pattern
		}));
		options.setNavigationContext({
			pathname: options.cleanPathname,
			searchParams: new URLSearchParams(),
			params: options.params
		});
	}
	if (shouldReadAppPageCache({
		isDraftMode,
		isForceDynamic,
		isProgressiveActionRender: options.isProgressiveActionRender === true,
		isProduction: options.isProduction,
		isRscRequest: options.isRscRequest,
		revalidateSeconds: currentRevalidateSeconds,
		scriptNonce: options.scriptNonce
	})) {
		const cachedPageResponse = await readAppPageCacheResponse({
			cleanPathname: options.cleanPathname,
			clearRequestContext: options.clearRequestContext,
			isRscRequest: options.isRscRequest,
			isrDebug: options.isrDebug,
			isrGet: options.isrGet,
			isrHtmlKey: options.isrHtmlKey,
			isrRscKey: options.isrRscKey,
			isrSet: options.isrSet,
			middlewareHeaders: options.middlewareContext.headers,
			middlewareStatus: options.middlewareContext.status,
			mountedSlotsHeader: options.mountedSlotsHeader,
			renderMode: options.renderMode,
			expireSeconds: options.expireSeconds,
			revalidateSeconds: currentRevalidateSeconds ?? 0,
			renderFreshPageForCache: async () => runAppPageRevalidationContext({
				cleanPathname: options.cleanPathname,
				currentFetchCacheMode: options.fetchCache ?? null,
				dynamicConfig,
				params: options.params,
				routePattern: route.pattern,
				routeSegments: route.routeSegments,
				setNavigationContext: options.setNavigationContext
			}, async () => {
				const revalidatedElement = await options.buildPageElement(route, options.params, void 0, new URLSearchParams());
				const revalidatedOnError = options.createRscOnErrorHandler(options.cleanPathname, route.pattern);
				const revalidatedRscCapture = teeAppPageRscStreamForCapture(options.renderToReadableStream(revalidatedElement, { onError: revalidatedOnError }), true);
				const revalidatedSsrEntry = await options.loadSsrHandler();
				const revalidatedCapturedRscRef = { value: null };
				const html = await readStreamAsText(await revalidatedSsrEntry.handleSsr(revalidatedRscCapture.ssrStream, options.getNavigationContext(), {
					links: options.getFontLinks(),
					styles: options.getFontStyles(),
					preloads: options.getFontPreloads()
				}, revalidatedRscCapture.sideStream ? {
					sideStream: revalidatedRscCapture.sideStream,
					capturedRscDataRef: revalidatedCapturedRscRef
				} : void 0));
				const rscData = await getCapturedRscDataPromise(revalidatedCapturedRscRef.value);
				const cacheLife = _consumeRequestScopedCacheLife();
				options.clearRequestContext();
				return {
					html,
					rscData,
					tags: buildAppPageTags(options.cleanPathname, getCollectedFetchTags(), route.routeSegments),
					cacheControl: typeof cacheLife?.revalidate === "number" ? {
						revalidate: cacheLife.revalidate,
						expire: cacheLife.expire
					} : void 0
				};
			}),
			scheduleBackgroundRegeneration(key, renderFn) {
				options.scheduleBackgroundRegeneration(key, renderFn, {
					routerKind: "App Router",
					routePath: route.pattern,
					routeType: "render"
				});
			}
		});
		if (cachedPageResponse) return cachedPageResponse;
	}
	const dynamicParamsResponse = await validateAppPageDynamicParams({
		clearRequestContext: options.clearRequestContext,
		enforceStaticParamsOnly: options.dynamicParamsConfig === false,
		generateStaticParams: options.generateStaticParams,
		isDynamicRoute: route.isDynamic,
		params: options.params
	});
	if (dynamicParamsResponse) return dynamicParamsResponse;
	const interceptResult = await resolveAppPageIntercept({
		buildPageElement(interceptRoute, interceptParams, interceptOpts, interceptSearchParams) {
			setCurrentFetchCacheMode(options.resolveRouteFetchCacheMode?.(interceptRoute) ?? null);
			return options.buildPageElement(interceptRoute, interceptParams, interceptOpts, interceptSearchParams);
		},
		cleanPathname: options.cleanPathname,
		currentRoute: route,
		findIntercept(pathname) {
			return options.findIntercept(pathname);
		},
		getRouteParamNames(sourceRoute) {
			return sourceRoute.params;
		},
		getSourceRoute(sourceRouteIndex) {
			return options.getSourceRoute(sourceRouteIndex);
		},
		isRscRequest: options.isRscRequest,
		renderInterceptResponse(sourceRoute, interceptElement) {
			const interceptOnError = options.createRscOnErrorHandler(options.cleanPathname, sourceRoute.pattern);
			const interceptStream = options.renderToReadableStream(interceptElement, { onError: interceptOnError });
			const interceptHeaders = new Headers({
				"Content-Type": "text/x-component; charset=utf-8",
				Vary: VINEXT_RSC_VARY_HEADER
			});
			mergeMiddlewareResponseHeaders(interceptHeaders, options.middlewareContext.headers);
			return new Response(interceptStream, {
				status: options.middlewareContext.status ?? 200,
				headers: interceptHeaders
			});
		},
		searchParams: options.searchParams,
		setNavigationContext: options.setNavigationContext,
		toInterceptOpts(intercept) {
			return toInterceptOptions(options.interceptionContext, intercept);
		}
	});
	if (interceptResult.response) return interceptResult.response;
	const pageBuildResult = await buildAppPageElement({
		buildPageElement() {
			return options.buildPageElement(route, options.params, interceptResult.interceptOpts, options.searchParams);
		},
		renderErrorBoundaryPage(buildError) {
			return options.renderErrorBoundaryPage(buildError);
		},
		renderSpecialError(specialError) {
			return renderPageSpecialError(options, specialError);
		},
		resolveSpecialError: resolveAppPageSpecialError
	});
	if (pageBuildResult.response) return pageBuildResult.response;
	return renderAppPageLifecycle({
		cleanPathname: options.cleanPathname,
		clearRequestContext: options.clearRequestContext,
		consumeDynamicUsage,
		consumeInvalidDynamicUsageError,
		createRscOnErrorHandler(pathname, routePath) {
			return options.createRscOnErrorHandler(pathname, routePath);
		},
		element: pageBuildResult.element,
		getDraftModeCookieHeader,
		getFontLinks: options.getFontLinks,
		getFontPreloads: options.getFontPreloads,
		getFontStyles: options.getFontStyles,
		getNavigationContext: options.getNavigationContext,
		getPageTags() {
			return buildAppPageTags(options.cleanPathname, getCollectedFetchTags(), route.routeSegments);
		},
		getRequestCacheLife() {
			return _consumeRequestScopedCacheLife();
		},
		peekRequestCacheLife() {
			return _peekRequestScopedCacheLife();
		},
		handlerStart: options.handlerStart,
		hasLoadingBoundary: shouldSuppressLoadingBoundaries(options.renderMode ?? "navigation") ? false : Boolean(route.loading?.default),
		formState: options.formState ?? null,
		isProgressiveActionRender: options.isProgressiveActionRender === true,
		isDynamicError,
		isDraftMode,
		isForceDynamic,
		isForceStatic,
		isPrerender: process.env.VINEXT_PRERENDER === "1",
		isProduction: options.isProduction,
		isRscRequest: options.isRscRequest,
		isrDebug: options.isrDebug,
		isrHtmlKey: options.isrHtmlKey,
		isrRscKey: options.isrRscKey,
		isrSet: options.isrSet,
		expireSeconds: options.expireSeconds,
		layoutCount: route.layouts.length,
		loadSsrHandler: options.loadSsrHandler,
		middlewareContext: options.middlewareContext,
		params: options.params,
		probeLayoutAt(layoutIndex) {
			return options.probeLayoutAt(layoutIndex);
		},
		probePage() {
			return options.probePage();
		},
		classification: {
			getLayoutId(index) {
				const treePosition = route.layoutTreePositions?.[index] ?? 0;
				return AppElementsWire.encodeLayoutId(createAppPageTreePath([...route.routeSegments], treePosition));
			},
			buildTimeClassifications: route.__buildTimeClassifications,
			buildTimeReasons: route.__buildTimeReasons,
			debugClassification: options.debugClassification,
			async runWithIsolatedDynamicScope(fn) {
				const priorDynamic = consumeDynamicUsage();
				try {
					return {
						result: await fn(),
						dynamicDetected: consumeDynamicUsage()
					};
				} finally {
					consumeDynamicUsage();
					if (priorDynamic) markDynamicUsage();
				}
			}
		},
		revalidateSeconds: currentRevalidateSeconds,
		mountedSlotsHeader: options.mountedSlotsHeader,
		renderMode: options.renderMode ?? "navigation",
		renderErrorBoundaryResponse(renderError) {
			return options.renderErrorBoundaryPage(renderError);
		},
		renderLayoutSpecialError(specialError, layoutIndex) {
			return renderLayoutSpecialError(options, specialError, layoutIndex);
		},
		renderPageSpecialError(specialError) {
			return renderPageSpecialError(options, specialError);
		},
		renderToReadableStream: options.renderToReadableStream,
		routeHasLocalBoundary: Boolean(route.error?.default || route.errors?.some((errorModule) => errorModule?.default)),
		routePattern: route.pattern,
		runWithSuppressedHookWarning(probe) {
			return options.runWithSuppressedHookWarning(probe);
		},
		scriptNonce: options.scriptNonce,
		waitUntil(cachePromise) {
			getRequestExecutionContext()?.waitUntil(cachePromise);
		}
	});
}
async function renderLayoutSpecialError(options, specialError, layoutIndex) {
	return buildAppPageSpecialErrorResponse({
		basePath: options.basePath,
		clearRequestContext: options.clearRequestContext,
		getAndClearPendingCookies,
		isRscRequest: options.isRscRequest,
		middlewareContext: options.middlewareContext,
		renderFallbackPage(statusCode) {
			const parentBoundary = resolveAppPageParentHttpAccessBoundaryModule({
				layoutIndex,
				rootForbiddenModule: options.rootForbiddenModule,
				rootNotFoundModule: options.rootNotFoundModule,
				rootUnauthorizedModule: options.rootUnauthorizedModule,
				routeForbiddenModules: options.route.forbiddens,
				routeNotFoundModules: options.route.notFounds,
				routeUnauthorizedModules: options.route.unauthorizeds,
				statusCode
			})?.default;
			return options.renderHttpAccessFallbackPage(statusCode, {
				boundaryComponent: parentBoundary,
				layouts: options.route.layouts.slice(0, layoutIndex),
				matchedParams: options.params
			}, null);
		},
		request: options.request,
		specialError
	});
}
async function renderPageSpecialError(options, specialError) {
	return buildAppPageSpecialErrorResponse({
		basePath: options.basePath,
		clearRequestContext: options.clearRequestContext,
		getAndClearPendingCookies,
		isRscRequest: options.isRscRequest,
		middlewareContext: options.middlewareContext,
		renderFallbackPage(statusCode) {
			return options.renderHttpAccessFallbackPage(statusCode, { matchedParams: options.params }, null);
		},
		request: options.request,
		specialError
	});
}
var DYNAMIC_VALUES = new Set([
	"auto",
	"error",
	"force-dynamic",
	"force-static"
]);
var FETCH_CACHE_VALUES = new Set([
	"auto",
	"default-cache",
	"default-no-store",
	"force-cache",
	"force-no-store",
	"only-cache",
	"only-no-store"
]);
function isRouteSegmentDynamic(value) {
	return DYNAMIC_VALUES.has(value);
}
function isRouteSegmentFetchCache(value) {
	return FETCH_CACHE_VALUES.has(value);
}
function resolveRevalidateSeconds(current, value) {
	if (value === false) {
		if (current === null) return Infinity;
		return current === Infinity ? Infinity : current;
	}
	if (typeof value !== "number") return current;
	if (current === null) return value;
	return value < current ? value : current;
}
function isCacheFetchCacheMode(value) {
	return value === "default-cache" || value === "force-cache" || value === "only-cache";
}
function describeFetchCacheConflict(value) {
	return `Route segment config has incompatible fetchCache values including "${value}".`;
}
/**
* Resolve the route segment config that applies to an App page route.
*
* Next.js collects config from every segment in the loader tree and reduces it
* into the effective route config. The generated vinext entry already knows
* the concrete layout/page modules for a route, so it should only describe
* those modules and delegate the behavior to this helper.
*/
function resolveAppPageSegmentConfig(options) {
	const segments = [...options.layouts ?? [], options.page];
	const config = { revalidateSeconds: null };
	let hasForceCache = false;
	let hasForceNoStore = false;
	let hasOnlyCache = false;
	let hasOnlyNoStore = false;
	let hasParentDefaultNoStore = false;
	for (const segment of segments) {
		if (!segment) continue;
		if (isRouteSegmentDynamic(segment.dynamic)) config.dynamicConfig = segment.dynamic;
		if (segment.dynamicParams === false) config.dynamicParamsConfig = false;
		else if (segment.dynamicParams === true && config.dynamicParamsConfig !== false) config.dynamicParamsConfig = true;
		if (isRouteSegmentFetchCache(segment.fetchCache)) {
			const fetchCache = segment.fetchCache;
			if (hasParentDefaultNoStore && (fetchCache === "auto" || isCacheFetchCacheMode(fetchCache))) throw new Error(describeFetchCacheConflict(fetchCache));
			if (fetchCache === "force-cache") hasForceCache = true;
			if (fetchCache === "force-no-store") hasForceNoStore = true;
			if (fetchCache === "only-cache") hasOnlyCache = true;
			if (fetchCache === "only-no-store") hasOnlyNoStore = true;
			if ((hasForceCache || hasOnlyCache) && (hasForceNoStore || hasOnlyNoStore)) throw new Error(describeFetchCacheConflict(fetchCache));
			if (fetchCache === "default-no-store") hasParentDefaultNoStore = true;
			if (hasForceCache) config.fetchCache = "force-cache";
			else if (hasForceNoStore) config.fetchCache = "force-no-store";
			else if (hasOnlyCache) config.fetchCache = "only-cache";
			else if (hasOnlyNoStore) config.fetchCache = "only-no-store";
			else config.fetchCache = fetchCache;
		}
		config.revalidateSeconds = resolveRevalidateSeconds(config.revalidateSeconds, segment.revalidate);
	}
	if (config.dynamicConfig === "force-dynamic") config.revalidateSeconds = 0;
	if (config.fetchCache === void 0) {
		if (config.dynamicConfig === "force-dynamic") config.fetchCache = "force-no-store";
		else if (config.dynamicConfig === "error") config.fetchCache = "only-cache";
	}
	if (config.dynamicParamsConfig === void 0 && (config.dynamicConfig === "error" || config.dynamicConfig === "force-static")) config.dynamicParamsConfig = false;
	return config;
}
function resolveAppPageFetchCacheMode(options) {
	return resolveAppPageSegmentConfig(options).fetchCache ?? null;
}
function createNode() {
	return {
		staticChildren: /* @__PURE__ */ new Map(),
		dynamicChild: null,
		catchAllChild: null,
		optionalCatchAllChild: null,
		route: null
	};
}
/**
* Build a trie from pre-sorted routes.
*
* Routes must have a `patternParts` property (string[] of URL segments).
* Pattern segment conventions:
*   - `:name`  — dynamic segment
*   - `:name+` — catch-all (1+ segments)
*   - `:name*` — optional catch-all (0+ segments)
*   - anything else — static segment
*
* First route to claim a terminal position wins (routes are pre-sorted
* by precedence, so insertion order preserves correct priority).
*/
function buildRouteTrie(routes) {
	const root = createNode();
	for (const route of routes) {
		const parts = route.patternParts;
		if (parts.length === 0) {
			if (root.route === null) root.route = route;
			continue;
		}
		let node = root;
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (part.endsWith("+") && part.startsWith(":")) {
				if (i !== parts.length - 1) break;
				const paramName = part.slice(1, -1);
				if (node.catchAllChild === null) node.catchAllChild = {
					paramName,
					route
				};
				break;
			}
			if (part.endsWith("*") && part.startsWith(":")) {
				if (i !== parts.length - 1) break;
				const paramName = part.slice(1, -1);
				if (node.optionalCatchAllChild === null) node.optionalCatchAllChild = {
					paramName,
					route
				};
				break;
			}
			if (part.startsWith(":")) {
				const paramName = part.slice(1);
				if (node.dynamicChild === null) node.dynamicChild = {
					paramName,
					node: createNode()
				};
				node = node.dynamicChild.node;
				if (i === parts.length - 1) {
					if (node.route === null) node.route = route;
				}
				continue;
			}
			let child = node.staticChildren.get(part);
			if (!child) {
				child = createNode();
				node.staticChildren.set(part, child);
			}
			node = child;
			if (i === parts.length - 1) {
				if (node.route === null) node.route = route;
			}
		}
	}
	return root;
}
/**
* Match a URL against the trie.
*
* Returns decoded param values — `decodeURIComponent` is applied to
* individual param entries so that `%2F` → `/`, `%23` → `#`, etc.
* Segment boundaries (the original `/` splits) are preserved by the
* upstream normalization layer; this step only decodes the captured
* param strings the caller sees.
*
* Mirrors Next.js route-matcher.ts:25-27.
*
* @param root - Trie root built by `buildRouteTrie`
* @param urlParts - Pre-split URL segments (no empty strings)
* @returns Match result with route and extracted params, or null
*/
function trieMatch(root, urlParts) {
	const result = match(root, urlParts, 0);
	if (result) decodeMatchedParams(result.params);
	return result;
}
function createParams() {
	return Object.create(null);
}
function match(node, urlParts, index) {
	if (index === urlParts.length) {
		if (node.route !== null) return {
			route: node.route,
			params: createParams()
		};
		if (node.optionalCatchAllChild !== null) return {
			route: node.optionalCatchAllChild.route,
			params: createParams()
		};
		return null;
	}
	const segment = urlParts[index];
	const staticChild = node.staticChildren.get(segment);
	if (staticChild) {
		const result = match(staticChild, urlParts, index + 1);
		if (result !== null) return result;
	}
	if (node.dynamicChild !== null) {
		const result = match(node.dynamicChild.node, urlParts, index + 1);
		if (result !== null) {
			result.params[node.dynamicChild.paramName] = segment;
			return result;
		}
	}
	if (node.catchAllChild !== null) {
		const remaining = urlParts.slice(index);
		const params = createParams();
		params[node.catchAllChild.paramName] = remaining;
		return {
			route: node.catchAllChild.route,
			params
		};
	}
	if (node.optionalCatchAllChild !== null) {
		const remaining = urlParts.slice(index);
		const params = createParams();
		params[node.optionalCatchAllChild.paramName] = remaining;
		return {
			route: node.optionalCatchAllChild.route,
			params
		};
	}
	return null;
}
function createRouteParams() {
	return Object.create(null);
}
function appRscPathnameParts(pathname) {
	const pathOnly = pathname.split("?")[0];
	return normalizePathnameForRouteMatch(pathOnly === "/" ? "/" : pathOnly.replace(/\/$/, "")).split("/").filter(Boolean);
}
function createAppRscRouteMatcher(routes) {
	const routeTrie = buildRouteTrie(routes);
	const interceptLookup = createInterceptLookup(routes);
	return {
		matchRoute(url) {
			return trieMatch(routeTrie, appRscPathnameParts(url));
		},
		findIntercept(pathname, sourcePathname = null) {
			const urlParts = appRscPathnameParts(pathname);
			for (const entry of interceptLookup) {
				const params = matchAppRscRoutePattern(urlParts, entry.targetPatternParts);
				if (params !== null) {
					let sourceParams = createRouteParams();
					if (sourcePathname !== null) {
						const sourceRoute = routes[entry.sourceRouteIndex];
						const sourceParts = appRscPathnameParts(sourcePathname);
						const matchedSourceParams = sourceRoute ? matchAppRscRoutePattern(sourceParts, sourceRoute.patternParts) : null;
						if (matchedSourceParams !== null) sourceParams = matchedSourceParams;
					}
					return {
						...entry,
						matchedParams: mergeMatchedParams(sourceParams, params)
					};
				}
			}
			return null;
		}
	};
}
function createInterceptLookup(routes) {
	const interceptLookup = [];
	for (let routeIndex = 0; routeIndex < routes.length; routeIndex++) {
		const route = routes[routeIndex];
		if (!route.slots) continue;
		for (const [slotKey, slotModule] of Object.entries(route.slots)) {
			if (!slotModule.intercepts) continue;
			for (const intercept of slotModule.intercepts) interceptLookup.push({
				sourceRouteIndex: routeIndex,
				slotKey,
				targetPattern: intercept.targetPattern,
				targetPatternParts: intercept.targetPattern.split("/").filter(Boolean),
				interceptLayouts: intercept.interceptLayouts,
				page: intercept.page,
				params: intercept.params
			});
		}
	}
	return interceptLookup;
}
function matchAppRscRoutePattern(urlParts, patternParts) {
	return matchRoutePattern(urlParts, patternParts);
}
function mergeMatchedParams(sourceParams, targetParams) {
	return Object.assign(createRouteParams(), sourceParams, targetParams);
}
/**
* Server-only navigation state backed by AsyncLocalStorage.
*
* This module provides request-scoped isolation for navigation context
* and useServerInsertedHTML callbacks. Without ALS, concurrent requests
* on Cloudflare Workers would share module-level state and leak data
* (pathnames, params, CSS-in-JS styles) between requests.
*
* This module is server-only — it imports node:async_hooks and must NOT
* be bundled for the browser. The dual-environment navigation.ts shim
* uses a registration pattern so it works in both environments.
*/
var _FALLBACK_KEY = Symbol.for("vinext.navigation.fallback");
var _g = globalThis;
var _als = getOrCreateAls("vinext.navigation.als");
var _fallbackState = _g[_FALLBACK_KEY] ??= {
	serverContext: null,
	serverInsertedHTMLCallbacks: []
};
function _getState() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als.getStore() ?? _fallbackState;
}
var _accessors = {
	getServerContext() {
		return _getState().serverContext;
	},
	setServerContext(ctx) {
		_getState().serverContext = ctx;
	},
	getInsertedHTMLCallbacks() {
		return _getState().serverInsertedHTMLCallbacks;
	},
	clearInsertedHTMLCallbacks() {
		_getState().serverInsertedHTMLCallbacks = [];
	}
};
_registerStateAccessors(_accessors);
globalThis[GLOBAL_ACCESSORS_KEY] = _accessors;
function sortFontsVariantValues(valA, valB) {
	if (valA.includes(",") && valB.includes(",")) {
		const [aPrefix, aSuffix] = valA.split(",", 2);
		const [bPrefix, bSuffix] = valB.split(",", 2);
		if (aPrefix === bPrefix) return parseInt(aSuffix) - parseInt(bSuffix);
		return parseInt(aPrefix) - parseInt(bPrefix);
	}
	return parseInt(valA) - parseInt(valB);
}
function buildGoogleFontsUrl$1(fontFamily, axes, display) {
	const variants = [];
	if (axes.wght) for (const wght of axes.wght) if (!axes.ital) variants.push([["wght", wght], ...axes.variableAxes ?? []]);
	else for (const ital of axes.ital) variants.push([
		["ital", ital],
		["wght", wght],
		...axes.variableAxes ?? []
	]);
	else if (axes.variableAxes) variants.push([...axes.variableAxes]);
	if (axes.variableAxes) for (const variant of variants) variant.sort(([a], [b]) => {
		const aIsLowercase = a.charCodeAt(0) > 96;
		const bIsLowercase = b.charCodeAt(0) > 96;
		if (aIsLowercase && !bIsLowercase) return -1;
		if (bIsLowercase && !aIsLowercase) return 1;
		return a > b ? 1 : -1;
	});
	let url = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, "+")}`;
	if (variants.length > 0) {
		const keyList = variants[0].map(([key]) => key).join(",");
		const valueLists = variants.map((variant) => variant.map(([, val]) => val).join(",")).sort(sortFontsVariantValues).join(";");
		url = `${url}:${keyList}@${valueLists}`;
	}
	return `${url}&display=${display}`;
}
/**
* next/font/google shim
*
* Provides a compatible shim for Next.js Google Fonts.
*
* Two modes:
* 1. **Dev / CDN mode** (default): Loads fonts from Google Fonts CDN via <link> tags.
* 2. **Self-hosted mode** (production build): The vinext:google-fonts Vite plugin
*    fetches font CSS + .woff2 files at build time, caches them locally, and injects
*    @font-face CSS pointing at local assets. No requests to Google at runtime.
*
* Usage:
*   import { Inter } from 'next/font/google';
*   const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
*   // inter.className -> stable CSS class for this font/options pair
*   // inter.style -> { fontFamily: "'Inter', sans-serif" }
*   // inter.variable -> CSS class that sets the font CSS variable
*/
/**
* Escape a string for safe interpolation inside a CSS single-quoted string.
*
* Prevents CSS injection by escaping characters that could break out of
* a `'...'` CSS string context: backslashes, single quotes, and newlines.
*/
function escapeCSSString(value) {
	return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\a ").replace(/\r/g, "\\d ");
}
/**
* Validate a CSS custom property name (e.g. `--font-inter`).
*
* Custom properties must start with `--` and only contain alphanumeric
* characters, hyphens, and underscores. Anything else could be used to
* break out of the CSS declaration and inject arbitrary rules.
*
* Returns the name if valid, undefined otherwise.
*/
function sanitizeCSSVarName(name) {
	if (/^--[a-zA-Z0-9_-]+$/.test(name)) return name;
}
/**
* Sanitize a CSS font-family fallback name.
*
* Generic family names (sans-serif, serif, monospace, etc.) are used as-is.
* Named families are wrapped in escaped quotes. This prevents injection via
* crafted fallback values like `); } body { color: red; } .x {`.
*/
function sanitizeFallback(name) {
	const generics = new Set([
		"serif",
		"sans-serif",
		"monospace",
		"cursive",
		"fantasy",
		"system-ui",
		"ui-serif",
		"ui-sans-serif",
		"ui-monospace",
		"ui-rounded",
		"emoji",
		"math",
		"fangsong"
	]);
	const trimmed = name.trim();
	if (generics.has(trimmed)) return trimmed;
	return `'${escapeCSSString(trimmed)}'`;
}
var injectedFonts = /* @__PURE__ */ new Set();
/**
* Convert a font family name to a CSS variable name.
* e.g., "Inter" -> "--font-inter", "Roboto Mono" -> "--font-roboto-mono"
*/
function toVarName(family) {
	return "--font-" + family.toLowerCase().replace(/\s+/g, "-");
}
function fontClassSegment(family) {
	return family.toLowerCase().replace(/[^a-z0-9_-]+/g, "_").replace(/^_+|_+$/g, "") || "font";
}
function normalizeStringSetOption(value) {
	if (!value) return "";
	return [...new Set((Array.isArray(value) ? value : [value]).map((item) => item.trim()).filter(Boolean))].sort().join(",");
}
function normalizeWeightOption(value) {
	const normalized = normalizeStringSetOption(value);
	return normalized === "variable" ? "" : normalized;
}
function normalizeStyleOption(value) {
	const values = new Set((Array.isArray(value) ? value : value ? [value] : []).map((item) => item.trim()).filter(Boolean));
	const hasItalic = values.has("italic");
	const hasNormal = values.has("normal");
	if (!hasItalic) return "";
	return hasNormal ? "italic,normal" : "italic";
}
function normalizeFallbackOption(value) {
	if (!value) return "";
	return value.map((item) => item.trim()).join(",");
}
function normalizeBooleanOption(value) {
	if (value === void 0) return "";
	return value ? "1" : "0";
}
function normalizeStringOrBooleanOption(value) {
	if (value === void 0) return "";
	return typeof value === "boolean" ? normalizeBooleanOption(value) : value;
}
function hashString(value) {
	let hash = 2166136261;
	for (let i = 0; i < value.length; i++) {
		hash ^= value.charCodeAt(i);
		hash = Math.imul(hash, 16777619) >>> 0;
	}
	return hash.toString(36).padStart(7, "0");
}
function createFontIdentity(family, options, cssVarName, fallback) {
	return hashString([
		family,
		cssVarName,
		normalizeWeightOption(options.weight),
		normalizeStyleOption(options.style),
		normalizeStringSetOption(options.subsets),
		options.display ?? "swap",
		normalizeBooleanOption(options.preload),
		normalizeFallbackOption(fallback),
		normalizeStringOrBooleanOption(options.adjustFontFallback),
		normalizeStringSetOption(options.axes),
		options._selfHostedCSS ?? ""
	].join("\0"));
}
/**
* Build a Google Fonts CSS URL.
*
* In production this code path is dead. The build plugin
* (`vinext:google-fonts` in `src/plugins/fonts.ts`) statically resolves
* each font call's axis values against the bundled metadata, fetches the
* Google Fonts CSS, and injects the resulting CSS as `_selfHostedCSS` so
* the runtime never queries Google. The shim only reaches this builder
* when the plugin's static parser bails (dynamic options, eval-only
* shapes), which is dev-only.
*
* The dev fallback intentionally has no metadata: shipping the 388 KB
* `font-data.json` to the Worker bundle would dwarf the rest of the shim,
* and the production path already has the metadata-aware variant. The
* tradeoff is that the dev fallback cannot resolve a variable font's
* actual `wght` axis range. It emits no axis segment when no `weight` is
* given, which makes Google return the default static face (200) instead
* of the broken `:wght@100..900` URL that issue #885 reports.
*/
function buildGoogleFontsUrl(family, options) {
	const weights = options.weight ? Array.isArray(options.weight) ? options.weight : [options.weight] : [];
	const styles = options.style ? Array.isArray(options.style) ? options.style : [options.style] : [];
	const hasItalic = styles.includes("italic");
	const hasNormal = styles.includes("normal");
	const ital = hasItalic ? [...hasNormal ? ["0"] : [], "1"] : void 0;
	const normalizedWeights = weights.length === 1 && weights[0] === "variable" ? [] : weights;
	return buildGoogleFontsUrl$1(family, {
		wght: normalizedWeights.length > 0 ? normalizedWeights : ital ? ["400"] : void 0,
		ital
	}, options.display ?? "swap");
}
/**
* Inject a <link> tag for the font (client-side only).
* On the server, we track font URLs for SSR head injection.
*/
function injectFontStylesheet(url) {
	if (injectedFonts.has(url)) return;
	injectedFonts.add(url);
	if (typeof document !== "undefined") {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = url;
		document.head.appendChild(link);
	}
}
/** Track which className CSS rules have been injected. */
var injectedClassRules = /* @__PURE__ */ new Set();
/**
* Inject a CSS rule that maps a className to a font-family.
*
* This is what makes `<div className={inter.className}>` apply the font.
* Next.js generates equivalent rules at build time.
*
* In Next.js, the .className class ONLY sets font-family — it does NOT
* set CSS variables. CSS variables are handled separately by the .variable class.
*/
function injectClassNameRule(className, fontFamily) {
	if (injectedClassRules.has(className)) return;
	injectedClassRules.add(className);
	const css = `.${className} { font-family: ${fontFamily}; }\n`;
	if (typeof document === "undefined") {
		ssrFontStyles$1.push(css);
		return;
	}
	const style = document.createElement("style");
	style.textContent = css;
	style.setAttribute("data-vinext-font-class", className);
	document.head.appendChild(style);
}
/** Track which variable class CSS rules have been injected. */
var injectedVariableRules = /* @__PURE__ */ new Set();
/**
* Inject a CSS rule that sets a CSS variable on an element.
* This is what makes `<html className={inter.variable}>` set the CSS variable
* that can be referenced by other styles (e.g., Tailwind's font-sans).
*
* In Next.js, the .variable class ONLY sets the CSS variable — it does NOT
* set font-family. This is critical because apps commonly apply multiple
* .variable classes to <body> (e.g., geistSans.variable + geistMono.variable).
* If we also set font-family here, the last class wins due to CSS cascade,
* causing all text to use that font (e.g., everything becomes monospace).
*/
function injectVariableClassRule(variableClassName, cssVarName, fontFamily) {
	if (injectedVariableRules.has(variableClassName)) return;
	injectedVariableRules.add(variableClassName);
	const css = `.${variableClassName} { ${cssVarName}: ${fontFamily}; }\n`;
	if (typeof document === "undefined") {
		ssrFontStyles$1.push(css);
		return;
	}
	const style = document.createElement("style");
	style.textContent = css;
	style.setAttribute("data-vinext-font-variable", variableClassName);
	document.head.appendChild(style);
}
var ssrFontStyles$1 = [];
/**
* Get collected SSR font class styles (used by the renderer).
* Note: We don't clear the arrays because fonts are loaded at module import
* time and need to persist across all requests in the Workers environment.
*/
function getSSRFontStyles$1() {
	return [...ssrFontStyles$1];
}
var ssrFontUrls = [];
/**
* Get collected SSR font URLs (used by the renderer).
* Note: We don't clear the arrays because fonts are loaded at module import
* time and need to persist across all requests in the Workers environment.
*/
function getSSRFontLinks() {
	return [...ssrFontUrls];
}
var ssrFontPreloads$1 = [];
var ssrFontPreloadHrefs = /* @__PURE__ */ new Set();
/**
* Get collected SSR font preload data (used by the renderer).
* Returns an array of { href, type } objects for emitting
* <link rel="preload" as="font" ...> tags.
*/
function getSSRFontPreloads$1() {
	return [...ssrFontPreloads$1];
}
/**
* Determine the MIME type for a font file based on its extension.
*/
function getFontMimeType(pathOrUrl) {
	if (pathOrUrl.endsWith(".woff2")) return "font/woff2";
	if (pathOrUrl.endsWith(".woff")) return "font/woff";
	if (pathOrUrl.endsWith(".ttf")) return "font/ttf";
	if (pathOrUrl.endsWith(".otf")) return "font/opentype";
	return "font/woff2";
}
/**
* Extract font file URLs from @font-face CSS rules.
* Parses url('...') references from the CSS text.
*/
function extractFontUrlsFromCSS(css) {
	const urls = [];
	const urlRegex = /url\(['"]?([^'")]+)['"]?\)/g;
	let match;
	while ((match = urlRegex.exec(css)) !== null) {
		const url = match[1];
		if (url && url.startsWith("/")) urls.push(url);
	}
	return urls;
}
/**
* Collect font file URLs from self-hosted CSS for preload link generation.
* Only collects on the server (SSR). Deduplicates by href using a Set for O(1) lookups.
*/
function collectFontPreloadsFromCSS(css) {
	if (typeof document !== "undefined") return;
	const urls = extractFontUrlsFromCSS(css);
	for (const href of urls) if (!ssrFontPreloadHrefs.has(href)) {
		ssrFontPreloadHrefs.add(href);
		ssrFontPreloads$1.push({
			href,
			type: getFontMimeType(href)
		});
	}
}
/** Track injected self-hosted @font-face blocks (deduplicate) */
var injectedSelfHosted = /* @__PURE__ */ new Set();
/**
* Inject self-hosted @font-face CSS (from the build plugin).
* This replaces the CDN <link> tag with inline CSS.
*/
function injectSelfHostedCSS(css) {
	if (injectedSelfHosted.has(css)) return;
	injectedSelfHosted.add(css);
	collectFontPreloadsFromCSS(css);
	if (typeof document === "undefined") {
		ssrFontStyles$1.push(css);
		return;
	}
	const style = document.createElement("style");
	style.textContent = css;
	style.setAttribute("data-vinext-font-selfhosted", "true");
	document.head.appendChild(style);
}
function createFontLoader(family) {
	return function fontLoader(options = {}) {
		const fallback = options.fallback ?? ["sans-serif"];
		const fontFamily = `'${escapeCSSString(family)}', ${fallback.map(sanitizeFallback).join(", ")}`;
		const defaultVarName = toVarName(family);
		const cssVarName = options.variable ? sanitizeCSSVarName(options.variable) ?? defaultVarName : defaultVarName;
		const id = createFontIdentity(family, options, cssVarName, fallback);
		const classSegment = fontClassSegment(family);
		const className = `__font_${classSegment}_${id}`;
		const variableClassName = `__variable_${classSegment}_${id}`;
		if (options._selfHostedCSS) injectSelfHostedCSS(options._selfHostedCSS);
		else {
			const url = buildGoogleFontsUrl(family, options);
			injectFontStylesheet(url);
			if (typeof document === "undefined") {
				if (!ssrFontUrls.includes(url)) ssrFontUrls.push(url);
			}
		}
		injectClassNameRule(className, fontFamily);
		injectVariableClassRule(variableClassName, cssVarName, fontFamily);
		return {
			className,
			style: { fontFamily },
			variable: variableClassName
		};
	};
}
var googleFonts = new Proxy({}, { get(_target, prop) {
	if (typeof prop !== "string") return void 0;
	if (prop === "__esModule") return true;
	if (prop === "default") return googleFonts;
	return createFontLoader(prop.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2"));
} });
var ssrFontStyles = [];
var ssrFontPreloads = [];
/**
* Get collected SSR font styles (used by the renderer).
* Note: We don't clear the arrays because fonts are loaded at module import
* time and need to persist across all requests in the Workers environment.
*/
function getSSRFontStyles() {
	return [...ssrFontStyles];
}
/**
* Get collected SSR font preload data (used by the renderer).
* Returns an array of { href, type } objects for emitting
* <link rel="preload" as="font" ...> tags.
*/
function getSSRFontPreloads() {
	return [...ssrFontPreloads];
}
var suppressHookWarningAls = new AsyncLocalStorage$1();
var _origConsoleError = console.error;
console.error = (...args) => {
	if (suppressHookWarningAls.getStore() === true && typeof args[0] === "string" && args[0].includes("Invalid hook call")) return;
	_origConsoleError.apply(console, args);
};
/**
* Set navigation context in the ALS-backed store. "use client" components
* rendered during SSR need the pathname/searchParams/params but the SSR
* environment has a separate module instance of next/navigation.
*
* Clearing nav context (ctx === null) also clears root params.
*/
function setAppNavigationContext(ctx) {
	setNavigationContext(ctx);
	if (ctx === null) setRootParams(null);
}
/**
* Clear all per-request ALS state owned by the App Router handler.
* Must be called before returning a non-page response (redirect, public
* file proxy, etc.) to prevent state leaking between requests on Workers.
*
* Clears: headers, navigation context, root params.
*/
function clearAppRequestContext() {
	setHeadersContext(null);
	setAppNavigationContext(null);
}
var site_client_default = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "26f909cfad48", "default");
var page_exports$2 = /* @__PURE__ */ __exportAll({ default: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(site_client_default, {});
}
var Resources = ((React, deps, RemoveDuplicateServerCss, precedence) => {
	return function Resources() {
		return React.createElement(React.Fragment, null, [...deps.css.map((href) => React.createElement("link", {
			key: "css:" + href,
			rel: "stylesheet",
			...precedence ? { precedence } : {},
			href,
			"data-rsc-css-href": href
		})), RemoveDuplicateServerCss && React.createElement(RemoveDuplicateServerCss, { key: "remove-duplicate-css" })]);
	};
})(import_react_react_server.default, __vite_rsc_assets_manifest_default.serverResources["app/layout.tsx"], void 0, "vite-rsc/importer-resources");
var styled_components_registry_default = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "ed7d606e58f7", "default");
var global_site_header_default = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "556f1e0fb9a2", "default");
var layout_exports = /* @__PURE__ */ __exportAll({
	default: () => $$wrap_RootLayout,
	metadata: () => metadata$2,
	viewport: () => viewport
});
var metadata$2 = {
	metadataBase: new URL("https://onecoinrbh.com"),
	title: {
		default: "One Coin | Seven $1,000 Winners",
		template: "%s | One Coin"
	},
	description: "Mint a One Coin NFT for $1. Every NFT is one entry in a verifiable onchain draw for seven $1,000 prizes on Robinhood Chain.",
	applicationName: "One Coin",
	creator: "One Coin",
	publisher: "One Coin",
	alternates: { canonical: "/" },
	icons: {
		icon: [
			{
				url: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				url: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png"
			},
			{
				url: "/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png"
			},
			{
				url: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png"
			},
			{
				url: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png"
			}
		],
		shortcut: "/favicon.ico",
		apple: [{
			url: "/apple-touch-icon.png",
			sizes: "180x180",
			type: "image/png"
		}]
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "/",
		siteName: "One Coin",
		title: "One Coin | Seven $1,000 Winners",
		description: "Mint for $1. Every NFT is one entry in a verifiable onchain draw for seven $1,000 prizes."
	},
	twitter: {
		card: "summary_large_image",
		title: "One Coin | Seven $1,000 Winners",
		description: "Mint for $1. Every NFT is one entry in a verifiable onchain draw for seven $1,000 prizes."
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1
		}
	}
};
var viewport = {
	width: "device-width",
	initialScale: 1,
	colorScheme: "light",
	themeColor: "#f3e4ad"
};
function RootLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("html", {
		lang: "en",
		children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("body", { children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(styled_components_registry_default, { children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(global_site_header_default, {}), children] }) })
	});
}
var $$wrap_RootLayout = /* @__PURE__ */ __vite_rsc_wrap_css__(RootLayout, "default");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
var WhitelistChecker = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'WhitelistChecker' is called on server");
}, "6be96b483227", "WhitelistChecker");
var WinnerRoom = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'WinnerRoom' is called on server");
}, "6be96b483227", "WinnerRoom");
var page_exports$1 = /* @__PURE__ */ __exportAll({
	default: () => WhitelistPage,
	metadata: () => metadata$1
});
var metadata$1 = {
	title: "Whitelist Checker | One Coin",
	description: "Check whitelist eligibility for the One Coin mint."
};
function WhitelistPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(WhitelistChecker, {});
}
var page_exports = /* @__PURE__ */ __exportAll({
	default: () => WinnerPage,
	metadata: () => metadata
});
var metadata = {
	title: "Winner Room | One Coin",
	description: "Watch the countdown and the seven verifiable One Coin winners appear."
};
function WinnerPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(WinnerRoom, {});
}
var renderToReadableStream = createRscRenderer(renderToReadableStream$1);
function _getSSRFontStyles() {
	return [...getSSRFontStyles$1(), ...getSSRFontStyles()];
}
function _getSSRFontPreloads() {
	return [...getSSRFontPreloads$1(), ...getSSRFontPreloads()];
}
var __isrDebug = process.env.NEXT_PRIVATE_DEBUG_CACHE ? console.debug.bind(console, "[vinext] ISR:") : void 0;
var __classDebug = process.env.VINEXT_DEBUG_CLASSIFICATION ? function(layoutId, reason) {
	console.debug("[vinext] CLS:", layoutId, reason);
} : void 0;
function __resolveRouteFetchCacheMode(route) {
	return resolveAppPageFetchCacheMode({
		layouts: route.layouts,
		page: route.page
	});
}
function __VINEXT_CLASS(routeIdx) {
	return ((routeIdx) => {
		switch (routeIdx) {
			default: return null;
		}
	})(routeIdx);
}
function __VINEXT_CLASS_REASONS(routeIdx) {
	return null;
}
var routes = [
	{
		__buildTimeClassifications: __VINEXT_CLASS(0),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(0) : null,
		ids: {
			"route": "route:/",
			"page": "page:/",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/",
		patternParts: [],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$2,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: [],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: null,
		notFounds: [null],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(1),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(1) : null,
		ids: {
			"route": "route:/whitelist",
			"page": "page:/whitelist",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/whitelist",
		patternParts: ["whitelist"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$1,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["whitelist"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: null,
		notFounds: [null],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(2),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(2) : null,
		ids: {
			"route": "route:/winner",
			"page": "page:/winner",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/winner",
		patternParts: ["winner"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["winner"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: null,
		notFounds: [null],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	}
];
var __routeMatcher = createAppRscRouteMatcher(routes);
var metadataRoutes = [{
	type: "apple-icon",
	isDynamic: false,
	routePrefix: "",
	routeSegments: [],
	servedUrl: "/apple-icon.png",
	contentType: "image/png",
	contentHash: "14798693d6d74b24",
	headData: {
		"kind": "apple",
		"href": "/apple-icon.png?14798693d6d74b24",
		"type": "image/png",
		"sizes": "180x180"
	},
	fileDataBase64: "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"
}, {
	type: "favicon",
	isDynamic: false,
	routePrefix: "",
	routeSegments: [],
	servedUrl: "/favicon.ico",
	contentType: "image/x-icon",
	contentHash: "05cc5835c6f7032b",
	headData: {
		"kind": "favicon",
		"href": "/favicon.ico?05cc5835c6f7032b",
		"type": "image/x-icon",
		"sizes": "48x48"
	},
	fileDataBase64: "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ov83e7f/M3S0/0ql0v8+i7//J12g/zJpo/9Ei7n/VqXN/4vA2v+r0eb/s9Xn/7HU5/+01uj/sNPm/7HU5v+v0+b/rtLl/6zR5f+v0+b/rtPm/67T5/+u0+f/rtTn/6rR5v+v1Of/rdPm/63S5v+x1ef/stXn/5XE3P9kqcz/P4i+/zZ1q/8rYqH/SpvJ/0iezf9KodD/QIy+/y9psf88hLr/J1yr/zVoof9faW//e1dE/3BfVv9UcIT/J1mk/zBws/83f7f/J12k/0uizv9LpNH/R6DN/0WYxf8rYp//O3ms/0aNv/9ytNT/nMfe/7XW6P+11uj/sdTn/7LW6P+t0eX/rNHl/63S5v+t0ub/r9Tm/67T5v+t0+b/rtPn/67T5/+v1Ob/s9fo/7TW6P+x1ef/hrjS/1enz/8/gK//L2eh/zFvrP8ydLD/TqfU/0qeyv9Rp9L/MXGt/yhXpv8za6n/P4O3/0yVvf9ZjKX/Z4GL/2WDjv9Zjqf/SI23/0GFuP8ybar/Jlqn/zV1sP9SrNb/S6DN/0mfy/80d7T/Lmum/zJwqf9Ahbb/X6zS/5XD2/+y1Of/sNPm/6/T5v+w0+b/r9Pm/7DU5/+v0+b/q9Hk/63T5v+r0eb/rdPn/7HV6P+x1ej/s9bo/7DU5v+Ivdj/V6nQ/059kv9VcYL/QXKd/ydep/84fbz/SJzJ/zd2rf9Af6z/SHij/2WJmf+Aa1//l0wl/6hACP+rQAX/rEEI/61ABv+rQAb/qUEJ/5ZPKP99b2T/X4eY/0p4nf8+faj/NXWt/0SUw/84fbr/KWGs/zhvnf9GbYn/TX2S/16t0v+TxNz/s9Xn/7XW6P+y1ef/r9Pm/7PV5/+u0uX/qM/j/7DV6P+s0ub/r9Pm/7HV5/+w1Of/sNPm/43B2/9Vn8T/WX2N/3FTRf+DUTb/amdj/z52oP8uZqf/M3Gn/0Z6of90cGz/mFo1/6xCCf+rPwb/qj4G/6o/BP+rQAb/rEAG/61BBv+qQAb/qT4G/6o/B/+qPwf/pkAL/5NXNf9ybmv/SXue/zVwpf8tZab/PHem/2VlZP98Tjf/b04//1l/j/9gpsf/lcXd/7XW5/+y1ef/sNPm/7DT5v+w0+b/r9Ll/7DV6P+v1Of/sdXn/7PW6P+v0+f/ksHa/1Sjyv9Ae6P/dlVI/2hhX/9SdIb/jlAy/0lv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6f+11+n/stbo/7HV6P+YyuH/YqzR/zl1pv9ebHv/k04s/058j/9la23/d1hH/06Or/9Afar/R3ij/2KNof96cmz/kE0r/6Q/C/+pPgf/qz4G/69CCP+sQAf/qEAI/5hHHv+Balv/ZIma/0h8pf88eq3/TJC1/4ZOMf9ma23/S2t7/41RMv9LbYn/M26o/1ilzv+Owtz/stbo/7bX6P+11+j/tdjp/7XX6f+w1Of/rdPn/63T6P+r0uf/rtPo/7PX6P+22On/t9nq/7nZ6f+42er/o9Hm/2601P9NiKf/bG9v/4lOMf90Wk7/ZXR7/zRrrf8+hbz/MXKz/zh5rv86d6P/SIy1/1GVuf9gjqH/aX6E/2R4gf9khpH/VI+r/06Qtv89eqX/On2q/zR4s/86frj/N3Kx/29nYP92VUP/gU81/2dpaf9Ofp//YK3U/47B2/+01+n/uNnq/7bX6f+11+j/sdXo/63T5v+w1Of/r9Tn/6rS5/+u0+j/tdfp/7fZ6v+52ur/uNrq/7jZ6v+42er/tdjp/6XO4/9/vdj/bp2w/2Vwc/9RZX7/QXun/zJztf9Dj8X/Va3X/0yiz/82e7T/LWms/zZwov9Sbn//dFlL/29cUv9hbXL/P3GY/y9rrv80drP/Sp/M/0+n0/9CjsL/M3K0/0N+pf9ZZXb/bmNe/1WdvP9vs9P/nsrh/7XX6f+42en/udrq/7jZ6v+01+n/sNXo/6fP5f+s0ub/qtHm/6jQ5v+u1Oj/s9fp/7fZ6v+22Or/tdjo/7bY6P+22On/t9nq/7fZ6v+w1ef/lsbe/2yy0P9MjLv/MGeq/y5or/9Ah7r/SZG//1u23/9GlsX/Lmmn/0SCpv9tXlb/YllV/1Z7jP97Tzr/T32W/zeAs/9Ai73/VrDZ/1aq1P89hLj/L22u/zJxsP9AgrT/WabK/4fB2/+t0+b/t9jp/7ja6v+62ur/ttfp/7TW6P+v1ej/r9Tn/6zS5v+u0+f/rNLn/6TP5f+s0+j/q9Ln/7DV6P+x1un/sdbp/6/U5/+z1+n/ttnq/7fZ6f+22On/ttjq/67T5v+HwNr/arPT/0mHt/81bK7/QIe4/1Soz/9Elsj/KGGq/zJhnf97XEz/bFZJ/11sdf+ATTP/R26S/yhhsv9JnMz/QIW1/1Sm0P8waa//OXWv/1qjyP96vdv/qM/k/7XY6f+01uj/s9bo/7XX6P+21+j/tdfo/67U5/+r0uf/r9Tn/7DV6P+w1ej/sdXo/6jS6P+u1Oj/rtTn/6/U6P+s0uf/q9Ln/7HX6f+01+n/tNjp/7LW6f+z1uj/s9bo/7fY6f+01uj/qNDk/5HH4P93uNb/XKDG/1Odw/8+g7n/NHGz/zl5rf9Re5X/dmJW/4FZRf9bdIH/RoGr/zFsrf87frf/PoO3/1Sgxf9rrM//hMDc/5rK4v+x1ef/ttjp/7bY6f+z1uj/stbo/7HU5v+y1ef/s9bo/7DV6P+r0uf/r9Xp/7TX6f+y1un/sNXo/6zU6f+v1ej/sNbo/7DU5/+w1ej/rNLm/67U5/+w1ej/r9Tn/7HX6v+y1ej/tNbp/7TX6f+w1ej/stfp/7DV6P+p0OX/pdDl/6DO4/+Mw93/d7jX/2eu0v9ep8r/YqbD/1ufvP9SnsP/Vp/G/3K63f9/vt7/lsrj/6bQ5v+u1ej/s9bp/7HV6P+01+n/tdjq/7DW6P+z1+n/s9fo/67T5v+v1Of/qtHm/67T5/+t0+f/sdbo/6/V6P+u1en/rdTo/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
}];
var rootNotFoundModule = null;
var rootForbiddenModule = null;
var rootUnauthorizedModule = null;
var rootLayouts = [layout_exports];
var createRscOnErrorHandler = (request, pathname, routePath) => createAppRscOnErrorHandler(reportRequestError, request, pathname, routePath);
var __fallbackRenderer = createAppFallbackRenderer({
	rootBoundaries: {
		rootForbiddenModule,
		rootLayouts,
		rootNotFoundModule,
		rootUnauthorizedModule
	},
	globalErrorModule: null,
	metadataRoutes,
	ssrLoader() {
		return import("./ssr.mjs");
	},
	fontProviders: {
		buildFontLinkHeader: buildAppPageFontLinkHeader,
		getFontLinks: getSSRFontLinks,
		getFontPreloads: _getSSRFontPreloads,
		getFontStyles: _getSSRFontStyles
	},
	makeThenableParams,
	sanitizer: sanitizeErrorForClient,
	rscRenderer: renderToReadableStream,
	getNavigationContext,
	resolveChildSegments: resolveAppPageChildSegments,
	clearRequestContext() {
		clearAppRequestContext();
	},
	createRscOnErrorHandler(request, pathname, routePath) {
		return createRscOnErrorHandler(request, pathname, routePath);
	}
});
function matchRoute(url) {
	return __routeMatcher.matchRoute(url);
}
/**
* Check if a pathname matches any intercepting route.
* Returns the match info or null.
*/
function findIntercept(pathname, sourcePathname = null) {
	return __routeMatcher.findIntercept(pathname, sourcePathname);
}
async function buildPageElements(route, params, routePath, pageRequest) {
	return buildPageElements$1({
		route,
		params,
		routePath,
		pageRequest,
		globalErrorModule: null,
		rootNotFoundModule: null,
		rootForbiddenModule: null,
		rootUnauthorizedModule: null,
		metadataRoutes
	});
}
var __basePath = "";
var __trailingSlash = false;
var __i18nConfig = null;
var __configRedirects = [];
var __configRewrites = {
	"beforeFiles": [],
	"afterFiles": [],
	"fallback": []
};
var __configHeaders = [];
var __publicFiles = new Set([
	"/android-chrome-192x192.png",
	"/android-chrome-512x512.png",
	"/apple-touch-icon.png",
	"/favicon-16x16.png",
	"/favicon-32x32.png",
	"/favicon.ico",
	"/gallery/01-main-campaign-poster.webp",
	"/gallery/03-how-it-works-01-mint.webp",
	"/gallery/04-how-it-works-02-entry.webp",
	"/gallery/05-how-it-works-03-closes.webp",
	"/gallery/06-how-it-works-04-winner.webp",
	"/gallery/07-prize-poster.webp",
	"/gallery/unrevealed.png",
	"/gallery/winner-1.png",
	"/gallery/winner-2.png",
	"/gallery/winner-3.png",
	"/gallery/winner-4.png",
	"/gallery/winner-5.png",
	"/gallery/winner-6.png",
	"/gallery/winner-7.png",
	"/gallery/winner-nft.png"
]);
var __allowedOrigins = [];
var __expireTime = 31536e3;
var __allowedDevOrigins = [];
var __safeDevHosts = [
	"localhost",
	"127.0.0.1",
	"[::1]"
];
function __forbidden() {
	return new Response("Forbidden", {
		status: 403,
		headers: { "Content-Type": "text/plain" }
	});
}
function __validateDevRequestOrigin(request) {
	if (request.headers.get("sec-fetch-mode") === "no-cors" && request.headers.get("sec-fetch-site") === "cross-site") {
		console.warn("[vinext] Blocked cross-site no-cors request to " + new URL(request.url).pathname);
		return __forbidden();
	}
	const origin = request.headers.get("origin");
	if (!origin) return null;
	if (origin === "null") {
		if (!__allowedDevOrigins.includes("null")) {
			console.warn("[vinext] Blocked request with Origin: null. Add \"null\" to allowedDevOrigins to allow sandboxed contexts.");
			return __forbidden();
		}
		return null;
	}
	let originHostname;
	try {
		originHostname = new URL(origin).hostname.toLowerCase();
	} catch {
		return __forbidden();
	}
	if (__safeDevHosts.includes(originHostname) || originHostname.endsWith(".localhost")) return null;
	const hostHeader = (request.headers.get("x-forwarded-host") || request.headers.get("host") || "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (hostHeader && originHostname === hostHeader) return null;
	for (const pattern of __allowedDevOrigins) if (pattern.startsWith("*.")) {
		const suffix = pattern.slice(1);
		if (originHostname === pattern.slice(2) || originHostname.endsWith(suffix)) return null;
	} else if (originHostname === pattern) return null;
	console.warn(`[vinext] Blocked cross-origin request from "${origin}" to ${new URL(request.url).pathname}. To allow this origin, add it to allowedDevOrigins in next.config.js.`);
	return __forbidden();
}
/**
* Maximum server-action request body size.
* Configurable via experimental.serverActions.bodySizeLimit in next.config.
* Defaults to 1MB, matching the Next.js default.
* @see https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions#bodysizelimit
* Prevents unbounded request body buffering.
*/
var __MAX_ACTION_BODY_SIZE = 1048576;
var generateStaticParamsMap = {};
var _virtual_vinext_rsc_entry_default = createAppRscHandler({
	basePath: __basePath,
	clearRequestContext() {
		clearAppRequestContext();
	},
	configHeaders: __configHeaders,
	configRedirects: __configRedirects,
	configRewrites: __configRewrites,
	dispatchMatchedPage({ cleanPathname, formState, handlerStart, interceptionContext, isProgressiveActionRender, isRscRequest, middlewareContext, mountedSlotsHeader, params, request, route, scriptNonce, searchParams, renderMode }) {
		const PageComponent = route.page?.default;
		const __segmentConfig = resolveAppPageSegmentConfig({
			layouts: route.layouts,
			page: route.page
		});
		const __generateStaticParams = resolveAppPageGenerateStaticParamsSources({
			layouts: route.layouts,
			layoutTreePositions: route.layoutTreePositions,
			page: route.page,
			routeSegments: route.routeSegments
		});
		const _asyncRouteParams = makeThenableParams(params);
		return dispatchAppPage({
			basePath: __basePath,
			buildPageElement(targetRoute, targetParams, targetOpts, targetSearchParams) {
				return buildPageElements(targetRoute, targetParams, cleanPathname, {
					opts: targetOpts,
					searchParams: targetSearchParams,
					isRscRequest,
					request,
					mountedSlotsHeader,
					renderMode
				});
			},
			cleanPathname,
			clearRequestContext() {
				clearAppRequestContext();
			},
			createRscOnErrorHandler(pathname, routePath) {
				return createRscOnErrorHandler(request, pathname, routePath);
			},
			debugClassification: __classDebug,
			dynamicConfig: __segmentConfig.dynamicConfig,
			dynamicParamsConfig: __segmentConfig.dynamicParamsConfig,
			fetchCache: __segmentConfig.fetchCache ?? null,
			findIntercept(pathname) {
				return findIntercept(pathname, interceptionContext);
			},
			generateStaticParams: __generateStaticParams,
			getFontLinks: getSSRFontLinks,
			getFontPreloads: _getSSRFontPreloads,
			getFontStyles: _getSSRFontStyles,
			getNavigationContext,
			getSourceRoute(sourceRouteIndex) {
				return routes[sourceRouteIndex];
			},
			hasGenerateStaticParams: __generateStaticParams.length > 0,
			hasPageDefaultExport: !!PageComponent,
			hasPageModule: !!route.page,
			handlerStart,
			interceptionContext,
			expireSeconds: __expireTime,
			formState,
			isProgressiveActionRender,
			isProduction: true,
			isRscRequest,
			isrDebug: __isrDebug,
			isrGet,
			isrHtmlKey: appIsrHtmlKey,
			isrRscKey: appIsrRscKey,
			isrSet,
			loadSsrHandler() {
				return import("./ssr.mjs");
			},
			middlewareContext,
			mountedSlotsHeader,
			params,
			probeLayoutAt(li) {
				const LayoutComp = route.layouts[li]?.default;
				if (!LayoutComp) return null;
				return LayoutComp({
					params: makeThenableParams(resolveAppPageSegmentParams(route.routeSegments, route.layoutTreePositions?.[li] ?? 0, params)),
					children: null
				});
			},
			probePage() {
				if (!PageComponent) return null;
				return PageComponent({
					params: _asyncRouteParams,
					searchParams: makeThenableParams(collectAppPageSearchParams(searchParams).searchParamsObject)
				});
			},
			renderErrorBoundaryPage(renderErr) {
				return __fallbackRenderer.renderErrorBoundary(route, renderErr, isRscRequest, request, params, scriptNonce, middlewareContext);
			},
			renderHttpAccessFallbackPage(statusCode, opts, currentMiddlewareContext) {
				return __fallbackRenderer.renderHttpAccessFallback(route, statusCode, isRscRequest, request, opts, scriptNonce, currentMiddlewareContext);
			},
			renderToReadableStream,
			request,
			revalidateSeconds: __segmentConfig.revalidateSeconds,
			resolveRouteFetchCacheMode(targetRoute) {
				return __resolveRouteFetchCacheMode(targetRoute);
			},
			rootForbiddenModule,
			rootNotFoundModule,
			rootUnauthorizedModule,
			route,
			runWithSuppressedHookWarning(probe) {
				return suppressHookWarningAls.run(true, probe);
			},
			scheduleBackgroundRegeneration(key, renderFn, errorContext) {
				triggerBackgroundRegeneration(key, renderFn, errorContext);
			},
			scriptNonce,
			searchParams,
			setNavigationContext: setAppNavigationContext,
			renderMode
		});
	},
	dispatchMatchedRouteHandler({ cleanPathname, middlewareContext, params, request, route, searchParams }) {
		return dispatchAppRouteHandler({
			basePath: __basePath,
			cleanPathname,
			clearRequestContext() {
				clearAppRequestContext();
			},
			i18n: __i18nConfig,
			isrDebug: __isrDebug,
			isrGet,
			isrRouteKey: appIsrRouteKey,
			isrSet,
			middlewareContext,
			middlewareRequestHeaders: middlewareContext.requestHeaders,
			params,
			request,
			route: {
				pattern: route.pattern,
				routeHandler: route.routeHandler,
				routeSegments: route.routeSegments
			},
			scheduleBackgroundRegeneration: triggerBackgroundRegeneration,
			searchParams
		});
	},
	handleProgressiveActionRequest({ actionId, cleanPathname, contentType, middlewareContext, request }) {
		return handleProgressiveServerActionRequest({
			actionId,
			allowedOrigins: __allowedOrigins,
			cleanPathname,
			clearRequestContext() {
				clearAppRequestContext();
			},
			contentType,
			decodeAction,
			decodeFormState,
			getAndClearPendingCookies,
			getDraftModeCookieHeader,
			maxActionBodySize: __MAX_ACTION_BODY_SIZE,
			middlewareHeaders: middlewareContext.headers,
			readFormDataWithLimit: readActionFormDataWithLimit,
			reportRequestError,
			request,
			setHeadersAccessPhase
		});
	},
	handleServerActionRequest({ actionId, cleanPathname, contentType, interceptionContext, isRscRequest, middlewareContext, mountedSlotsHeader, request, searchParams }) {
		return handleServerActionRscRequest({
			actionId,
			allowedOrigins: __allowedOrigins,
			buildPageElement({ route: actionRoute, params: actionParams, cleanPathname: actionCleanPathname, interceptOpts, searchParams: actionSearchParams, isRscRequest: actionIsRscRequest, request: actionRequest, mountedSlotsHeader: actionMountedSlotsHeader, renderMode: actionRenderMode }) {
				return buildPageElements(actionRoute, actionParams, actionCleanPathname, {
					opts: interceptOpts,
					searchParams: actionSearchParams,
					isRscRequest: actionIsRscRequest,
					request: actionRequest,
					mountedSlotsHeader: actionMountedSlotsHeader,
					renderMode: actionRenderMode
				});
			},
			cleanPathname,
			clearRequestContext() {
				clearAppRequestContext();
			},
			contentType,
			createNotFoundElement(actionRouteId) {
				return {
					...AppElementsWire.createMetadataEntries({
						interceptionContext: null,
						rootLayoutTreePath: null,
						routeId: actionRouteId
					}),
					[actionRouteId]: (0, import_react_react_server.createElement)("div", null, "Page not found")
				};
			},
			createPayloadRouteId(pathnameToRender, currentInterceptionContext) {
				return AppElementsWire.encodeRouteId(pathnameToRender, currentInterceptionContext);
			},
			createRscOnErrorHandler(actionRequest, actionPathname, routePattern) {
				return createRscOnErrorHandler(actionRequest, actionPathname, routePattern);
			},
			createTemporaryReferenceSet,
			decodeReply,
			findIntercept(pathnameToMatch) {
				return findIntercept(pathnameToMatch, interceptionContext);
			},
			getAndClearPendingCookies,
			getDraftModeCookieHeader,
			getRouteParamNames(sourceRoute) {
				return sourceRoute.params;
			},
			getSourceRoute(sourceRouteIndex) {
				return routes[sourceRouteIndex];
			},
			isRscRequest,
			loadServerAction,
			matchRoute(pathnameToMatch) {
				return matchRoute(pathnameToMatch);
			},
			maxActionBodySize: __MAX_ACTION_BODY_SIZE,
			middlewareHeaders: middlewareContext.headers,
			middlewareStatus: middlewareContext.status,
			mountedSlotsHeader,
			readBodyWithLimit: readActionBodyWithLimit,
			readFormDataWithLimit: readActionFormDataWithLimit,
			renderToReadableStream,
			reportRequestError,
			request,
			sanitizeErrorForClient(error) {
				return sanitizeErrorForClient(error);
			},
			searchParams,
			setHeadersAccessPhase,
			setNavigationContext: setAppNavigationContext,
			toInterceptOpts(intercept) {
				return {
					interceptionContext,
					interceptLayouts: intercept.interceptLayouts,
					interceptSlotKey: intercept.slotKey,
					interceptPage: intercept.page,
					interceptParams: intercept.matchedParams
				};
			}
		});
	},
	i18nConfig: __i18nConfig,
	isMiddlewareProxy: false,
	makeThenableParams,
	matchRoute,
	metadataRoutes,
	middlewareModule: null,
	publicFiles: __publicFiles,
	renderNotFound({ isRscRequest, matchedParams, middlewareContext, request, route, scriptNonce }) {
		return __fallbackRenderer.renderNotFound(route, isRscRequest, request, matchedParams, scriptNonce, middlewareContext);
	},
	rootParamNamesByPattern: {},
	setNavigationContext: setAppNavigationContext,
	staticParamsMap: generateStaticParamsMap,
	trailingSlash: __trailingSlash,
	validateDevRequestOrigin: __validateDevRequestOrigin
});
//#endregion
export { _virtual_vinext_rsc_entry_default as default, generateStaticParamsMap };
