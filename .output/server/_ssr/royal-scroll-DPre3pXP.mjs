import { t as require_jsx_runtime } from "./ssr.mjs";
import { t as Tt } from "./styled-components.esm-CfFvPSBA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/royal-scroll-DPre3pXP.js
var import_jsx_runtime = require_jsx_runtime();
var X = "https://x.com/onecoinrbh";
var Page = Tt.main`
  --ink:#25170e;
  --light:#f7ecc9;
  --paper:#eadcad;
  --lapis:#163e75;
  --red:#9e332a;
  --gold:#c0923d;
  --pale-gold:#f1ce72;

  min-height:100vh;
  overflow:hidden;
  color:var(--ink);
  background:
    radial-gradient(circle at 50% 0%,rgba(255,255,255,.35),transparent 38%),
    var(--paper);
`;
var Container = Tt.div`
  width:min(1180px,calc(100% - 40px));
  margin:0 auto;
`;
var Hero = Tt.section`
  padding:clamp(70px,10vw,130px) 0 85px;
  text-align:center;
`;
var Kicker = Tt.p`
  margin:0 0 18px;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:.82rem;
  font-weight:700;
  letter-spacing:.2em;
  text-transform:uppercase;
`;
var Title = Tt.h1`
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(3.5rem,10vw,8rem);
  font-weight:700;
  line-height:.84;

  span{
    display:block;
    color:var(--red);
  }
`;
var Lead = Tt.p`
  max-width:600px;
  margin:28px auto 0;
  color:rgba(37,23,14,.78);
  font-family:"Cormorant Garamond",serif;
  font-size:1.25rem;
  font-weight:600;
  line-height:1.5;
`;
var Timeline = Tt.section`
  padding:15px 0 120px;
`;
var Rail = Tt.div`
  position:relative;

  &::before{
    content:"";
    position:absolute;
    left:54px;
    top:30px;
    bottom:30px;
    width:1px;
    background:var(--red);
  }

  @media(max-width:620px){
    &::before{
      left:25px;
    }
  }
`;
var Entry = Tt.article`
  position:relative;
  display:grid;
  grid-template-columns:110px 1fr;
  gap:28px;
  padding:24px 0 42px;

  @media(max-width:620px){
    grid-template-columns:50px 1fr;
    gap:15px;
  }
`;
var Number = Tt.div`
  position:relative;
  z-index:2;
  width:68px;
  height:68px;
  margin:10px auto 0;
  display:grid;
  place-items:center;
  border:2px solid var(--ink);
  border-radius:50%;
  background:var(--light);
  box-shadow:4px 5px 0 var(--gold);
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:1rem;
  font-weight:700;

  @media(max-width:620px){
    width:48px;
    height:48px;
    font-size:.75rem;
  }
`;
var Card = Tt.div`
  display:grid;
  overflow:hidden;
  border:2px solid var(--ink);
  background:var(--light);
  box-shadow:7px 8px 0 var(--lapis);

  @media(min-width:760px){
    grid-template-columns:180px 1fr;
  }
`;
var Art = Tt.img`
  width:100%;
  height:100%;
  min-height:175px;
  object-fit:cover;
  border-bottom:2px solid var(--ink);

  @media(min-width:760px){
    border-right:2px solid var(--ink);
    border-bottom:0;
  }
`;
var Copy = Tt.div`
  padding:26px;

  small{
    color:var(--red);
    font-family:"Cinzel",serif;
    font-size:.62rem;
    font-weight:700;
    letter-spacing:.13em;
    text-transform:uppercase;
  }

  h2{
    margin:10px 0 0;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.6rem,4vw,3rem);
    line-height:.98;
  }

  p{
    max-width:620px;
    margin:15px 0 0;
    font-family:"Cormorant Garamond",serif;
    font-size:1.08rem;
    font-weight:600;
    line-height:1.45;
  }
`;
var Future = Tt.section`
  position:relative;
  overflow:hidden;
  padding:clamp(95px,13vw,160px) 0;
  border-top:2px solid var(--ink);
  background:var(--red);
  color:white;
  text-align:center;

  &::before{
    content:"VI";
    position:absolute;
    left:50%;
    top:50%;
    color:rgba(247,236,201,.06);
    font-family:"Cinzel",serif;
    font-size:clamp(17rem,52vw,45rem);
    font-weight:700;
    line-height:.7;
    transform:translate(-50%,-50%);
  }
`;
var FutureInner = Tt.div`
  position:relative;
  z-index:1;
  max-width:880px;
  margin:0 auto;

  h2{
    margin:0;
    color:var(--pale-gold);
    font-family:"Cinzel",serif;
    font-size:clamp(2.7rem,7vw,6rem);
    line-height:.92;
  }

  p{
    max-width:560px;
    margin:25px auto 0;
    font-family:"Cormorant Garamond",serif;
    font-size:1.25rem;
    font-weight:600;
    line-height:1.5;
  }
`;
var Seal = Tt.div`
  width:96px;
  height:96px;
  margin:38px auto;
  display:grid;
  place-items:center;
  border:2px solid var(--pale-gold);
  border-radius:50%;
  color:var(--pale-gold);
  font-size:2rem;
  transform:rotate(-8deg);
`;
var Button = Tt.a`
  display:inline-flex;
  min-height:50px;
  align-items:center;
  justify-content:center;
  padding:0 20px;
  border:2px solid var(--pale-gold);
  color:var(--pale-gold);
  font-family:"Cinzel",serif;
  font-size:.67rem;
  font-weight:700;
  letter-spacing:.09em;
  text-decoration:none;
  text-transform:uppercase;
`;
var entries = [
	{
		n: "I",
		date: "07 SEP 2026",
		title: "The gates opened.",
		body: "The first One Coin collection entered Robinhood Chain.",
		image: "/gallery/03-how-it-works-01-mint.webp"
	},
	{
		n: "II",
		date: "07 SEP 2026",
		title: "Every coin found a holder.",
		body: "The first collection reached 10,000 out of 10,000.",
		image: "/gallery/04-how-it-works-02-entry.webp"
	},
	{
		n: "III",
		date: "08 SEP 2026",
		title: "Fortune chose seven.",
		body: "The book closed and seven winning coins were chosen publicly.",
		image: "/gallery/05-how-it-works-03-closes.webp"
	},
	{
		n: "IV",
		date: "08 SEP 2026",
		title: "The royal purse opened.",
		body: "The seven rewards were delivered.",
		image: "/gallery/06-how-it-works-04-winner.webp"
	},
	{
		n: "V",
		date: "10 SEP 2026",
		title: "The kingdom gathered as one.",
		body: "Holders entered the Inner Court on X. The first game ended, but the kingdom stayed together.",
		image: "/gallery/notthelastggame.webp"
	}
];
function RoyalScroll() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The Royal Scroll" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: ["Everything written", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "so far." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "The history of One Coin, recorded in order." })
		] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, { children: entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Entry, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Number, { children: entry.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
			src: entry.image,
			alt: ""
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Copy, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: entry.date }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: entry.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: entry.body })
		] })] })] }, entry.n)) }) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Future, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FutureInner, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
				style: { color: "var(--pale-gold)" },
				children: "The next entry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The ink has not dried yet." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The bottom of the Royal Scroll remains blank." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, { children: "✦" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				href: X,
				target: "_blank",
				rel: "noreferrer",
				children: ["Follow the scroll on X ", "↗"]
			})
		] }) }) })
	] });
}
//#endregion
export { RoyalScroll as default };
