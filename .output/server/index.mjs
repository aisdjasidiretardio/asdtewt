globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon-16x16.png": {
		"type": "image/png",
		"etag": "\"398-jQhZe9Zd3eVPsZfGqhB3Md94QZs\"",
		"mtime": "2026-08-31T10:25:50.425Z",
		"size": 920,
		"path": "../public/favicon-16x16.png"
	},
	"/android-chrome-192x192.png": {
		"type": "image/png",
		"etag": "\"17d80-o7gsJA10HowTnU3qUbrLh9wegfw\"",
		"mtime": "2026-08-31T10:25:50.421Z",
		"size": 97664,
		"path": "../public/android-chrome-192x192.png"
	},
	"/favicon-32x32.png": {
		"type": "image/png",
		"etag": "\"bcc-KxRdOFo+MfO+zThhGKnbfrHWCW0\"",
		"mtime": "2026-08-31T10:25:50.425Z",
		"size": 3020,
		"path": "../public/favicon-32x32.png"
	},
	"/assets/cinzel-latin-700-normal-C-gK7hA8.woff": {
		"type": "font/woff",
		"etag": "\"4474-PWlS69JXEJYX84OAkxKQt91Pefw\"",
		"mtime": "2026-08-31T14:01:42.537Z",
		"size": 17524,
		"path": "../public/assets/cinzel-latin-700-normal-C-gK7hA8.woff"
	},
	"/assets/cinzel-latin-400-normal-C8jUSQqm.woff": {
		"type": "font/woff",
		"etag": "\"40e8-irPuokIlNJYRlhB43Lorkl9GMug\"",
		"mtime": "2026-08-31T14:01:42.536Z",
		"size": 16616,
		"path": "../public/assets/cinzel-latin-400-normal-C8jUSQqm.woff"
	},
	"/assets/cinzel-latin-400-normal-DnUIPmzd.woff2": {
		"type": "font/woff2",
		"etag": "\"3730-C+JA+2NJVgIqXsf5y+DF7SWZHP8\"",
		"mtime": "2026-08-31T14:01:42.536Z",
		"size": 14128,
		"path": "../public/assets/cinzel-latin-400-normal-DnUIPmzd.woff2"
	},
	"/assets/cinzel-latin-700-normal-Dkw14w9r.woff2": {
		"type": "font/woff2",
		"etag": "\"3b50-4wquBffC/hZxwsZWiEJMfGiCfss\"",
		"mtime": "2026-08-31T14:01:42.537Z",
		"size": 15184,
		"path": "../public/assets/cinzel-latin-700-normal-Dkw14w9r.woff2"
	},
	"/assets/cinzel-latin-ext-400-normal-XQK_CSAr.woff2": {
		"type": "font/woff2",
		"etag": "\"1eb0-ULD0NAkx4PweR1a87fsukAbo8kw\"",
		"mtime": "2026-08-31T14:01:42.538Z",
		"size": 7856,
		"path": "../public/assets/cinzel-latin-ext-400-normal-XQK_CSAr.woff2"
	},
	"/assets/cinzel-latin-ext-700-normal-CORa-yIv.woff": {
		"type": "font/woff",
		"etag": "\"2654-GGNwShaok98M79fDaqrsBAA51/U\"",
		"mtime": "2026-08-31T14:01:42.539Z",
		"size": 9812,
		"path": "../public/assets/cinzel-latin-ext-700-normal-CORa-yIv.woff"
	},
	"/assets/cinzel-latin-ext-700-normal-C24KFjuG.woff2": {
		"type": "font/woff2",
		"etag": "\"2040-Nr2jwKI0a8KKXb29kS6qMyhoUQE\"",
		"mtime": "2026-08-31T14:01:42.538Z",
		"size": 8256,
		"path": "../public/assets/cinzel-latin-ext-700-normal-C24KFjuG.woff2"
	},
	"/assets/cinzel-latin-ext-400-normal-DJ0Lq8y-.woff": {
		"type": "font/woff",
		"etag": "\"244c-dRUdxn9AXuAc1MEfmr18DiIVevQ\"",
		"mtime": "2026-08-31T14:01:42.538Z",
		"size": 9292,
		"path": "../public/assets/cinzel-latin-ext-400-normal-DJ0Lq8y-.woff"
	},
	"/assets/cormorant-garamond-cyrillic-400-normal-CVFrM67f.woff": {
		"type": "font/woff",
		"etag": "\"3d50-XCV+tzKH13DKsRqSfSlBVs9ZqH4\"",
		"mtime": "2026-08-31T14:01:42.540Z",
		"size": 15696,
		"path": "../public/assets/cormorant-garamond-cyrillic-400-normal-CVFrM67f.woff"
	},
	"/assets/cormorant-garamond-cyrillic-400-normal-DD2KOZkl.woff2": {
		"type": "font/woff2",
		"etag": "\"31e8-vwlRkfqNiOhu8jAtpp4hMZwAx8I\"",
		"mtime": "2026-08-31T14:01:42.540Z",
		"size": 12776,
		"path": "../public/assets/cormorant-garamond-cyrillic-400-normal-DD2KOZkl.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-600-normal-C2atO-64.woff2": {
		"type": "font/woff2",
		"etag": "\"32d8-8d3rWjcyv9fSPPU/MPW9gnHwPJI\"",
		"mtime": "2026-08-31T14:01:42.541Z",
		"size": 13016,
		"path": "../public/assets/cormorant-garamond-cyrillic-600-normal-C2atO-64.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-600-normal-FNmA3REe.woff": {
		"type": "font/woff",
		"etag": "\"3dd0-Oqsh7LStfdS7mPECA6cvJuAjAfk\"",
		"mtime": "2026-08-31T14:01:42.541Z",
		"size": 15824,
		"path": "../public/assets/cormorant-garamond-cyrillic-600-normal-FNmA3REe.woff"
	},
	"/assets/cormorant-garamond-cyrillic-700-normal-D3uyJ5DH.woff": {
		"type": "font/woff",
		"etag": "\"3bb8-i8TdbJdddJfd3xK5/HiFTJ0y37k\"",
		"mtime": "2026-08-31T14:01:42.542Z",
		"size": 15288,
		"path": "../public/assets/cormorant-garamond-cyrillic-700-normal-D3uyJ5DH.woff"
	},
	"/assets/cormorant-garamond-cyrillic-700-normal-SLG_-a_c.woff2": {
		"type": "font/woff2",
		"etag": "\"30f8-4lYl2XJFGnNMKqofkh/2+y7Wbws\"",
		"mtime": "2026-08-31T14:01:42.543Z",
		"size": 12536,
		"path": "../public/assets/cormorant-garamond-cyrillic-700-normal-SLG_-a_c.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-ext-400-normal-DLdKLAvx.woff": {
		"type": "font/woff",
		"etag": "\"4414-nZ05aqplOpNbo+Cb0cI2Xh249d8\"",
		"mtime": "2026-08-31T14:01:42.544Z",
		"size": 17428,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-400-normal-DLdKLAvx.woff"
	},
	"/assets/cormorant-garamond-cyrillic-ext-400-normal-W3Dto7M0.woff2": {
		"type": "font/woff2",
		"etag": "\"3660-4ffgpEH9mWDcu2do7M9ndzNYKA0\"",
		"mtime": "2026-08-31T14:01:42.547Z",
		"size": 13920,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-400-normal-W3Dto7M0.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-ext-600-normal-BMhMHfrj.woff2": {
		"type": "font/woff2",
		"etag": "\"3768-HjaT9aUeWet5hT1tO1bngG2GXgc\"",
		"mtime": "2026-08-31T14:01:42.548Z",
		"size": 14184,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-600-normal-BMhMHfrj.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-ext-700-normal-BaW-xaxb.woff": {
		"type": "font/woff",
		"etag": "\"42bc-O4p9sdDrYWhcXk3UWWmfAK6fvyo\"",
		"mtime": "2026-08-31T14:01:42.549Z",
		"size": 17084,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-700-normal-BaW-xaxb.woff"
	},
	"/assets/cormorant-garamond-cyrillic-ext-600-normal-CsIYWmWK.woff": {
		"type": "font/woff",
		"etag": "\"44d4-L2Opq/Q5RXIiOxipfHZK04A9S6U\"",
		"mtime": "2026-08-31T14:01:42.548Z",
		"size": 17620,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-600-normal-CsIYWmWK.woff"
	},
	"/android-chrome-512x512.png": {
		"type": "image/png",
		"etag": "\"b55ef-8jmj6HyM56BJu5sBUO03W/+BF3w\"",
		"mtime": "2026-08-31T10:25:50.424Z",
		"size": 742895,
		"path": "../public/android-chrome-512x512.png"
	},
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"1539b-FHmGk9bXSyRVArTHdLJssuV6Gkg\"",
		"mtime": "2026-08-31T10:25:50.425Z",
		"size": 86939,
		"path": "../public/apple-touch-icon.png"
	},
	"/assets/cormorant-garamond-cyrillic-ext-700-normal-Do0rx6yy.woff2": {
		"type": "font/woff2",
		"etag": "\"3608-HKtBx6Iq8QD93U0V0xDbnifllBk\"",
		"mtime": "2026-08-31T14:01:42.550Z",
		"size": 13832,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-700-normal-Do0rx6yy.woff2"
	},
	"/assets/cormorant-garamond-latin-400-normal-B-1hWBU7.woff2": {
		"type": "font/woff2",
		"etag": "\"595c-plElvBMbfA4vsaFAqui//GFeZ5o\"",
		"mtime": "2026-08-31T14:01:42.554Z",
		"size": 22876,
		"path": "../public/assets/cormorant-garamond-latin-400-normal-B-1hWBU7.woff2"
	},
	"/assets/cormorant-garamond-latin-400-normal-B7YtguxJ.woff": {
		"type": "font/woff",
		"etag": "\"7904-9V90i7R9qGBbagyxxIPch9DOJgo\"",
		"mtime": "2026-08-31T14:01:42.555Z",
		"size": 30980,
		"path": "../public/assets/cormorant-garamond-latin-400-normal-B7YtguxJ.woff"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"3c2e-BcxYNcb3AytX0Zgx5xColdiF1LQ\"",
		"mtime": "2026-08-31T10:25:50.426Z",
		"size": 15406,
		"path": "../public/favicon.ico"
	},
	"/assets/cormorant-garamond-latin-600-normal-2CBVLo0M.woff": {
		"type": "font/woff",
		"etag": "\"7a48-hEZL0FtkpIi9bUu0Z020uBfp4v8\"",
		"mtime": "2026-08-31T14:01:42.556Z",
		"size": 31304,
		"path": "../public/assets/cormorant-garamond-latin-600-normal-2CBVLo0M.woff"
	},
	"/assets/cormorant-garamond-latin-700-normal-DajfzrDU.woff2": {
		"type": "font/woff2",
		"etag": "\"5744-IuDo7IfBJROI1WHu6T0+82onkoY\"",
		"mtime": "2026-08-31T14:01:42.556Z",
		"size": 22340,
		"path": "../public/assets/cormorant-garamond-latin-700-normal-DajfzrDU.woff2"
	},
	"/assets/cormorant-garamond-latin-700-normal-O25Qpphb.woff": {
		"type": "font/woff",
		"etag": "\"7628-hCrgfrp8Up73YXhB5zHECq1siv0\"",
		"mtime": "2026-08-31T14:01:42.558Z",
		"size": 30248,
		"path": "../public/assets/cormorant-garamond-latin-700-normal-O25Qpphb.woff"
	},
	"/assets/cormorant-garamond-latin-600-normal-Co1r35X9.woff2": {
		"type": "font/woff2",
		"etag": "\"5b64-DiRTjnmBF4QEF99jcstrz5kUhWM\"",
		"mtime": "2026-08-31T14:01:42.556Z",
		"size": 23396,
		"path": "../public/assets/cormorant-garamond-latin-600-normal-Co1r35X9.woff2"
	},
	"/assets/cormorant-garamond-latin-ext-400-normal-Drx2k2n9.woff2": {
		"type": "font/woff2",
		"etag": "\"4db0-nad/GoSq2cQK8+zE21r7i24bdjY\"",
		"mtime": "2026-08-31T14:01:42.558Z",
		"size": 19888,
		"path": "../public/assets/cormorant-garamond-latin-ext-400-normal-Drx2k2n9.woff2"
	},
	"/assets/cormorant-garamond-latin-ext-400-normal-uvC0WHQr.woff": {
		"type": "font/woff",
		"etag": "\"6d18-McfiZ8PaVOWL5YgYKU94JxQwMFU\"",
		"mtime": "2026-08-31T14:01:42.559Z",
		"size": 27928,
		"path": "../public/assets/cormorant-garamond-latin-ext-400-normal-uvC0WHQr.woff"
	},
	"/assets/cormorant-garamond-latin-ext-600-normal-Dk3-quAP.woff": {
		"type": "font/woff",
		"etag": "\"6e64-wTi1k91lSogr+3bHM8+TLMTHCjk\"",
		"mtime": "2026-08-31T14:01:42.560Z",
		"size": 28260,
		"path": "../public/assets/cormorant-garamond-latin-ext-600-normal-Dk3-quAP.woff"
	},
	"/assets/cormorant-garamond-latin-ext-700-normal-CNjt5vTB.woff2": {
		"type": "font/woff2",
		"etag": "\"4b80-sJVP+nv0oCdyMv30NCqwmMyLQwA\"",
		"mtime": "2026-08-31T14:01:42.561Z",
		"size": 19328,
		"path": "../public/assets/cormorant-garamond-latin-ext-700-normal-CNjt5vTB.woff2"
	},
	"/assets/cormorant-garamond-latin-ext-600-normal-DaBc-lu7.woff2": {
		"type": "font/woff2",
		"etag": "\"4f50-grOJp0+bsniVs5QLyigBa2D/pts\"",
		"mtime": "2026-08-31T14:01:42.559Z",
		"size": 20304,
		"path": "../public/assets/cormorant-garamond-latin-ext-600-normal-DaBc-lu7.woff2"
	},
	"/assets/cormorant-garamond-latin-ext-700-normal-qRbaVVD7.woff": {
		"type": "font/woff",
		"etag": "\"69a0-tcwkE+rmOvTx55lvnv9CtHLnFqs\"",
		"mtime": "2026-08-31T14:01:42.561Z",
		"size": 27040,
		"path": "../public/assets/cormorant-garamond-latin-ext-700-normal-qRbaVVD7.woff"
	},
	"/assets/cormorant-garamond-vietnamese-400-normal-4uxlocMh.woff": {
		"type": "font/woff",
		"etag": "\"2464-sNlDqyrGwuOXb49cv43hafatBpY\"",
		"mtime": "2026-08-31T14:01:42.562Z",
		"size": 9316,
		"path": "../public/assets/cormorant-garamond-vietnamese-400-normal-4uxlocMh.woff"
	},
	"/assets/cormorant-garamond-vietnamese-400-normal-6K-YXo6g.woff2": {
		"type": "font/woff2",
		"etag": "\"1a58-7J/nLaYlJJIBHtYRfJHATtWdRMA\"",
		"mtime": "2026-08-31T14:01:42.562Z",
		"size": 6744,
		"path": "../public/assets/cormorant-garamond-vietnamese-400-normal-6K-YXo6g.woff2"
	},
	"/assets/cormorant-garamond-vietnamese-600-normal-BoXdMtcr.woff2": {
		"type": "font/woff2",
		"etag": "\"1a8c-tnk9eY2+LIaNtEt7mUlaeRXn61M\"",
		"mtime": "2026-08-31T14:01:42.565Z",
		"size": 6796,
		"path": "../public/assets/cormorant-garamond-vietnamese-600-normal-BoXdMtcr.woff2"
	},
	"/assets/cormorant-garamond-vietnamese-600-normal-C4HEjEaf.woff": {
		"type": "font/woff",
		"etag": "\"24cc-uT5hXTTJVeYO1TyOwsqxWCgD3pY\"",
		"mtime": "2026-08-31T14:01:42.567Z",
		"size": 9420,
		"path": "../public/assets/cormorant-garamond-vietnamese-600-normal-C4HEjEaf.woff"
	},
	"/assets/cormorant-garamond-vietnamese-700-normal--OtHbi1I.woff2": {
		"type": "font/woff2",
		"etag": "\"1854-wwNs8IYcXQS+vseF0QHsFQQVBuc\"",
		"mtime": "2026-08-31T14:01:42.568Z",
		"size": 6228,
		"path": "../public/assets/cormorant-garamond-vietnamese-700-normal--OtHbi1I.woff2"
	},
	"/assets/cormorant-garamond-vietnamese-700-normal-GOTdnRS1.woff": {
		"type": "font/woff",
		"etag": "\"22a8-blwA0+2QPG9z4o2oLUoaEQ4rf18\"",
		"mtime": "2026-08-31T14:01:42.568Z",
		"size": 8872,
		"path": "../public/assets/cormorant-garamond-vietnamese-700-normal-GOTdnRS1.woff"
	},
	"/assets/global-site-header-DkTuGHby.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1117-FIkgWLfjHFUA0G6Chxlf2zKkV38\"",
		"mtime": "2026-08-31T14:01:42.532Z",
		"size": 4375,
		"path": "../public/assets/global-site-header-DkTuGHby.js"
	},
	"/assets/index-CEUt7oUf.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1effe-YZ2y0Fo2XN54fhpYBbhxSV9hX+4\"",
		"mtime": "2026-08-31T14:01:42.569Z",
		"size": 126974,
		"path": "../public/assets/index-CEUt7oUf.css"
	},
	"/assets/framework-B8WyT5R3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e56d-yqm8KBIaXv+Y0pOthtGoU3MxBZg\"",
		"mtime": "2026-08-31T14:01:42.532Z",
		"size": 189805,
		"path": "../public/assets/framework-B8WyT5R3.js"
	},
	"/assets/index-ClZ-aRg1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ca6-O76UK8HLu0syYD2Y6tZNmUOFTDA\"",
		"mtime": "2026-08-31T14:01:42.531Z",
		"size": 72870,
		"path": "../public/assets/index-ClZ-aRg1.js"
	},
	"/assets/layout-segment-context-DRfE6dLG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"120-fWG5wplIJrnA572rU1mm4PlxVlM\"",
		"mtime": "2026-08-31T14:01:42.533Z",
		"size": 288,
		"path": "../public/assets/layout-segment-context-DRfE6dLG.js"
	},
	"/assets/navigation-CmmnqiuG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e92-Wv2kcDSSwlAumX1YM3QmvPJDRmc\"",
		"mtime": "2026-08-31T14:01:42.533Z",
		"size": 3730,
		"path": "../public/assets/navigation-CmmnqiuG.js"
	},
	"/assets/readonly-url-search-params-pgk0LUNy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23d3-g44kc/P8B4Cnngu/+T0ni7ezeps\"",
		"mtime": "2026-08-31T14:01:42.534Z",
		"size": 9171,
		"path": "../public/assets/readonly-url-search-params-pgk0LUNy.js"
	},
	"/assets/portal-client-tubv484t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"757a-iERS3ubPZAx0SvECrkT4bIZU1XY\"",
		"mtime": "2026-08-31T14:01:42.533Z",
		"size": 30074,
		"path": "../public/assets/portal-client-tubv484t.js"
	},
	"/assets/rolldown-runtime-S-ySWqyJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b6-wnqLLSlp3SaE+lbe74bKNe5Rpds\"",
		"mtime": "2026-08-31T14:01:42.534Z",
		"size": 694,
		"path": "../public/assets/rolldown-runtime-S-ySWqyJ.js"
	},
	"/assets/site-client-Tu8yehkN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45fc-sESrdf96teTrj8ftt6jyStAex2c\"",
		"mtime": "2026-08-31T14:01:42.535Z",
		"size": 17916,
		"path": "../public/assets/site-client-Tu8yehkN.js"
	},
	"/assets/styled-components-registry-CVdP4HiT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"208-AB1Z7/t7dM/DJXiIhAsPhmBFIbs\"",
		"mtime": "2026-08-31T14:01:42.535Z",
		"size": 520,
		"path": "../public/assets/styled-components-registry-CVdP4HiT.js"
	},
	"/assets/styled-components.browser.esm-B0_qInRY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"755d-c7yme4GqMN5EuzEF6DjbRdIOIcw\"",
		"mtime": "2026-08-31T14:01:42.535Z",
		"size": 30045,
		"path": "../public/assets/styled-components.browser.esm-B0_qInRY.js"
	},
	"/gallery/04-how-it-works-02-entry.webp": {
		"type": "image/webp",
		"etag": "\"2df271-1x4rNzWcKy7xS5P9eiTlOM3qrzk\"",
		"mtime": "2026-08-31T10:25:50.460Z",
		"size": 3011185,
		"path": "../public/gallery/04-how-it-works-02-entry.webp"
	},
	"/gallery/03-how-it-works-01-mint.webp": {
		"type": "image/webp",
		"etag": "\"28e235-5kgZSZRUZnyp7NBa4hNK0ypFOCM\"",
		"mtime": "2026-08-31T10:25:50.449Z",
		"size": 2679349,
		"path": "../public/gallery/03-how-it-works-01-mint.webp"
	},
	"/gallery/05-how-it-works-03-closes.webp": {
		"type": "image/webp",
		"etag": "\"2f8a68-9lcO/iJ6c/l67vvy8kfu5ep5mVc\"",
		"mtime": "2026-08-31T10:25:50.470Z",
		"size": 3115624,
		"path": "../public/gallery/05-how-it-works-03-closes.webp"
	},
	"/gallery/01-main-campaign-poster.webp": {
		"type": "image/webp",
		"etag": "\"371d46-Gi6wQP7oVIUgSR6MKvhpW+weDfI\"",
		"mtime": "2026-08-31T10:25:50.439Z",
		"size": 3611974,
		"path": "../public/gallery/01-main-campaign-poster.webp"
	},
	"/gallery/07-prize-poster.webp": {
		"type": "image/webp",
		"etag": "\"348899-oqBT50q1itEqjkNh5Ke00p67vp4\"",
		"mtime": "2026-08-31T10:25:50.497Z",
		"size": 3442841,
		"path": "../public/gallery/07-prize-poster.webp"
	},
	"/gallery/winner-2.png": {
		"type": "image/png",
		"etag": "\"359337-fPsm8YGzSF/fX0InpesC0a4YJuE\"",
		"mtime": "2026-08-31T10:25:50.533Z",
		"size": 3511095,
		"path": "../public/gallery/winner-2.png"
	},
	"/gallery/06-how-it-works-04-winner.webp": {
		"type": "image/webp",
		"etag": "\"35b3d8-C52xoBUbCQYwvcH0w5iFMooitm4\"",
		"mtime": "2026-08-31T10:25:50.482Z",
		"size": 3519448,
		"path": "../public/gallery/06-how-it-works-04-winner.webp"
	},
	"/gallery/winner-4.png": {
		"type": "image/png",
		"etag": "\"3564c0-BdZGbBVbc+xWIsvRqgVO8DZygSs\"",
		"mtime": "2026-08-31T10:25:50.555Z",
		"size": 3499200,
		"path": "../public/gallery/winner-4.png"
	},
	"/gallery/winner-3.png": {
		"type": "image/png",
		"etag": "\"36a142-wbZWZ4gUSm0fWukW2n5M70xV/GA\"",
		"mtime": "2026-08-31T10:25:50.545Z",
		"size": 3580226,
		"path": "../public/gallery/winner-3.png"
	},
	"/gallery/winner-7.png": {
		"type": "image/png",
		"etag": "\"351058-yx//xR0lA6BwVBXRj6PO4AF3gDU\"",
		"mtime": "2026-08-31T10:25:50.589Z",
		"size": 3477592,
		"path": "../public/gallery/winner-7.png"
	},
	"/gallery/winner-nft.png": {
		"type": "image/png",
		"etag": "\"329830-N1vAU37spvmoGykHU1IyD4XEZv0\"",
		"mtime": "2026-08-31T10:25:50.602Z",
		"size": 3315760,
		"path": "../public/gallery/winner-nft.png"
	},
	"/gallery/winner-6.png": {
		"type": "image/png",
		"etag": "\"344db6-mIJho1IHxmIeBH6m0FwO+d/3S60\"",
		"mtime": "2026-08-31T10:25:50.579Z",
		"size": 3427766,
		"path": "../public/gallery/winner-6.png"
	},
	"/gallery/winner-5.png": {
		"type": "image/png",
		"etag": "\"3721f2-cgOXD7vQmC5Bywn4o/9DWDinF2k\"",
		"mtime": "2026-08-31T10:25:50.567Z",
		"size": 3613170,
		"path": "../public/gallery/winner-5.png"
	},
	"/gallery/winner-1.png": {
		"type": "image/png",
		"etag": "\"395aed-iU+mAzZMb9RG65sF+pPNNRuewj0\"",
		"mtime": "2026-08-31T10:25:50.521Z",
		"size": 3758829,
		"path": "../public/gallery/winner-1.png"
	},
	"/gallery/unrevealed.png": {
		"type": "image/png",
		"etag": "\"3a8584-+hjjCra4E4WVGXddx1A7SZwWQ0k\"",
		"mtime": "2026-08-31T10:25:50.509Z",
		"size": 3835268,
		"path": "../public/gallery/unrevealed.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_b8cUG3 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_b8cUG3
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
