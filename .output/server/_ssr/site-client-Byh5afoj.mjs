import { t as require_jsx_runtime } from "./ssr.mjs";
import { a as qt, t as Tt } from "./styled-components.esm-CfFvPSBA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-client-Byh5afoj.js
var import_jsx_runtime = require_jsx_runtime();
var PROJECT = {
	twitter: "https://x.com/onecoinrbh",
	dice: "https://diceprotocol.world/"
};
var float = qt`0%,100%{transform:translateY(0) rotate(1deg)}50%{transform:translateY(-10px) rotate(-1deg)}}`;
var glow = qt`0%,100%{opacity:.45;transform:translateY(0)}50%{opacity:1;transform:translateY(-7px)}}`;
var Page = Tt.main`
  --lapis:#163e75;--deep:#0c2a53;--red:#9e332a;--gold:#d2a13c;--pale-gold:#f1ce72;
  --paper:#eadcad;--light:#f7ecc9;--ink:#25170e;
  position:relative;overflow:hidden;color:var(--ink);background:var(--paper);font-kerning:normal;text-rendering:optimizeLegibility;
  background-image:radial-gradient(circle at 20% 10%,rgba(255,255,255,.32),transparent 28%),radial-gradient(circle at 80% 85%,rgba(91,54,23,.12),transparent 30%),repeating-linear-gradient(97deg,rgba(80,52,22,.025) 0 1px,transparent 1px 5px);
`;
var Edge = Tt.div`
  position:fixed;z-index:50;inset:8px;border:1px solid rgba(34,22,11,.52);pointer-events:none;
  &::after{content:"";position:absolute;inset:5px;border:1px solid rgba(210,161,60,.48)}
  @media(min-width:800px){inset:13px}
`;
var Container = Tt.div`width:min(1180px,calc(100% - 40px));margin:0 auto;@media(min-width:760px){width:min(1180px,calc(100% - 80px))}`;
Tt.nav`display:flex;align-items:center;justify-content:space-between;padding:24px 0 8px`;
Tt.div`display:flex;align-items:center;gap:clamp(10px,2.2vw,25px);@media(max-width:520px){gap:8px;& a{font-size:.63rem;letter-spacing:.04em}}`;
Tt.a`
  display:inline-flex;align-items:center;gap:9px;color:var(--ink);font-family:"Cinzel",serif;font-size:.76rem;font-weight:700;letter-spacing:.11em;text-decoration:none;
  span{color:var(--red);font-size:1.15rem}
`;
Tt.a`color:var(--ink);border-bottom:1px solid var(--ink);font-family:"Cormorant Garamond",serif;font-size:.9rem;font-weight:700;letter-spacing:.08em;text-decoration:none;text-transform:uppercase`;
var Hero = Tt.section`min-height:calc(100svh - 55px);display:flex;flex-direction:column;justify-content:center;padding:40px 0 34px;position:relative`;
var HeroGrid = Tt.div`display:grid;align-items:center;gap:34px;@media(min-width:880px){grid-template-columns:minmax(0,1.15fr) minmax(300px,.65fr);gap:64px}`;
Tt.p`
  display:flex;align-items:center;gap:10px;margin:0 0 15px;color:var(--red);font-family:"Cormorant Garamond",serif;font-size:.82rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;
  &::before{content:"\\2726";color:var(--gold)}
`;
var Title = Tt.h1`
  max-width:850px;margin:0;color:var(--lapis);font-family:"Cinzel",serif;font-size:clamp(3.35rem,15vw,8.6rem);font-weight:700;letter-spacing:.012em;word-spacing:.05em;line-height:.96;text-wrap:balance;
  span{display:block;margin:.13em 0 .08em;color:var(--red);font-size:.65em;letter-spacing:.03em}
`;
var HeroCopy = Tt.p`max-width:560px;margin:25px 0 24px;color:rgba(37,23,14,.82);font-family:"Cormorant Garamond",serif;font-size:clamp(1.15rem,4.8vw,1.45rem);font-weight:600;line-height:1.42`;
var ButtonRow = Tt.div`display:flex;flex-wrap:wrap;gap:12px`;
var PrimaryButton = Tt.a`
  display:inline-flex;min-height:50px;align-items:center;justify-content:center;gap:11px;padding:0 22px;border:2px solid var(--ink);background:var(--lapis);box-shadow:5px 5px 0 var(--gold);color:var(--light);font-family:"Cinzel",serif;font-size:.72rem;font-weight:700;letter-spacing:.1em;line-height:1.35;text-align:center;text-decoration:none;text-transform:uppercase;transition:transform .2s,box-shadow .2s,background .2s;
  &:hover{transform:translate(2px,2px);box-shadow:3px 3px 0 var(--gold);background:var(--deep)}&:focus-visible{outline:3px solid var(--red);outline-offset:4px}
`;
Tt.a`display:inline-flex;min-height:50px;align-items:center;padding:0 13px;color:var(--ink);font-family:"Cormorant Garamond",serif;font-size:1rem;font-weight:700;text-decoration:underline;text-underline-offset:5px`;
var HeroArt = Tt.figure`
  position:relative;width:min(78vw,430px);aspect-ratio:1;margin:8px auto 0;padding:9px;border:2px solid var(--ink);border-radius:50%;background:var(--pale-gold);box-shadow:11px 12px 0 var(--lapis);animation:${float} 7s ease-in-out infinite;
  img{display:block;width:100%;height:100%;object-fit:contain;border:1px solid rgba(37,23,14,.8);border-radius:50%}
  &::before,&::after{position:absolute;color:var(--pale-gold);font-size:1.15rem;animation:${glow} 3s ease-in-out infinite}
  &::before{content:"\\2726";left:-28px;top:11%}&::after{content:"\\2727";right:-29px;bottom:18%;animation-delay:1.2s}
  @media(max-width:879px){width:min(74vw,340px)}
`;
Tt.a`position:absolute;bottom:17px;left:0;color:rgba(37,23,14,.65);font-family:"Cormorant Garamond",serif;font-size:.72rem;font-weight:700;letter-spacing:.14em;text-decoration:none;text-transform:uppercase;@media(max-width:879px){display:none}`;
var Ticker = Tt.div`overflow:hidden;border-top:2px solid var(--ink);border-bottom:1px solid rgba(241,206,114,.42);background:var(--lapis);color:var(--light)`;
var TickerInner = Tt.div`
  display:grid;grid-template-columns:repeat(2,minmax(0,1fr));width:min(1180px,100%);margin:0 auto;font-family:"Cinzel",serif;text-align:center;
  span{display:flex;min-height:68px;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:12px 8px}
  span:nth-child(odd){border-right:1px solid rgba(241,206,114,.42)}
  span:nth-child(-n+4){border-bottom:1px solid rgba(241,206,114,.42)}
  b{color:var(--pale-gold);font-size:.95rem;letter-spacing:.075em;line-height:1}
  small{color:var(--light);font-family:"Cormorant Garamond",serif;font-size:.75rem;font-weight:700;letter-spacing:.15em;line-height:1;text-transform:uppercase}
  @media(min-width:760px){grid-template-columns:repeat(6,minmax(0,1fr));span{min-height:76px;border-right:1px solid rgba(241,206,114,.42);border-bottom:0}span:nth-child(-n+4){border-bottom:0}span:last-child{border-right:0}}
`;
var Section = Tt.section`padding:92px 0;@media(min-width:800px){padding:130px 0}`;
Tt.div`display:grid;gap:18px;margin-bottom:42px;@media(min-width:780px){grid-template-columns:1fr .7fr;align-items:end}`;
Tt.p`margin:0 0 8px;color:var(--red);font-family:"Cormorant Garamond",serif;font-size:.78rem;font-weight:700;letter-spacing:.18em;line-height:1.45;text-transform:uppercase`;
Tt.h2`max-width:780px;margin:0;color:var(--lapis);font-family:"Cinzel",serif;font-size:clamp(2.2rem,10vw,5.7rem);letter-spacing:.01em;word-spacing:.06em;line-height:1.04`;
Tt.p`max-width:480px;margin:0;color:rgba(37,23,14,.76);font-family:"Cormorant Garamond",serif;font-size:1.2rem;font-weight:600;line-height:1.52`;
Tt.div`display:grid;gap:18px;@media(min-width:760px){grid-template-columns:repeat(2,minmax(0,1fr))}`;
Tt.article`
  display:grid;grid-template-columns:92px 1fr;gap:17px;padding:11px;border:1px solid rgba(37,23,14,.82);background:rgba(247,236,201,.6);box-shadow:5px 5px 0 rgba(158,51,42,.82);
  @media(min-width:500px){grid-template-columns:155px 1fr}
`;
Tt.img`width:92px;aspect-ratio:1;object-fit:cover;border:1px solid rgba(37,23,14,.72);@media(min-width:500px){width:155px}`;
Tt.div`padding:4px 5px 7px 0`;
Tt.span`color:var(--red);font-family:"Cinzel",serif;font-size:.75rem;font-weight:700;letter-spacing:.04em`;
Tt.h3`margin:8px 0;color:var(--lapis);font-family:"Cinzel",serif;font-size:clamp(1rem,4vw,1.28rem);letter-spacing:.02em;word-spacing:.08em;line-height:1.2`;
Tt.p`margin:0;color:rgba(37,23,14,.76);font-family:"Cormorant Garamond",serif;font-size:.98rem;font-weight:600;line-height:1.36`;
var PrizeSection = Tt(Section)`
  position:relative;border-top:0;border-bottom:2px solid var(--ink);background:var(--lapis);color:var(--light);
  &::before,&::after{content:"\\2726  \\2727  \\2726";position:absolute;left:50%;transform:translateX(-50%);color:var(--pale-gold);letter-spacing:12px}&::before{top:20px}&::after{bottom:20px}
`;
var PrizeGrid = Tt.div`display:grid;align-items:center;gap:45px;@media(min-width:820px){grid-template-columns:1.1fr .9fr}`;
var PrizeAmount = Tt.p`margin:0;color:var(--pale-gold);font-family:"Cinzel",serif;font-size:clamp(4.2rem,20vw,10rem);font-weight:700;letter-spacing:-.01em;line-height:.88`;
var PrizeLine = Tt.h2`margin:20px 0 18px;color:var(--light);font-family:"Cinzel",serif;font-size:clamp(1.55rem,6vw,3.3rem);letter-spacing:.02em;line-height:1.12`;
var PrizeCopy = Tt.p`max-width:550px;margin:0;color:rgba(247,236,201,.78);font-family:"Cormorant Garamond",serif;font-size:1.2rem;font-weight:600;line-height:1.5`;
var PrizeArt = Tt.figure`
  width:min(100%,430px);margin:0 auto;padding:9px;border:1px solid var(--pale-gold);background:var(--paper);box-shadow:10px 10px 0 var(--red);transform:rotate(1.5deg);
  img{display:block;width:100%;height:auto;border:1px solid var(--ink)}
`;
Tt.div`display:grid;gap:22px;@media(min-width:820px){grid-template-columns:1fr 1fr;align-items:stretch}`;
Tt.article`padding:clamp(24px,6vw,48px);border:1px solid var(--ink);background:rgba(247,236,201,.64)`;
Tt.div`display:grid;width:58px;height:58px;place-items:center;margin-bottom:26px;border:1px solid var(--ink);background:var(--red);box-shadow:4px 4px 0 var(--gold);color:var(--light);font-family:"Cinzel",serif;font-size:1.25rem`;
Tt.h3`margin:0 0 13px;color:var(--lapis);font-family:"Cinzel",serif;font-size:clamp(1.4rem,5vw,2.1rem);letter-spacing:.01em;word-spacing:.05em;line-height:1.18`;
Tt.p`margin:0 0 25px;color:rgba(37,23,14,.78);font-family:"Cormorant Garamond",serif;font-size:1.12rem;font-weight:600;line-height:1.5`;
Tt.a`display:inline-flex;align-items:center;gap:10px;color:var(--red);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.75rem;font-weight:700;overflow-wrap:anywhere;text-decoration-thickness:1px;text-underline-offset:5px;text-transform:uppercase`;
Tt.ul`display:grid;gap:16px;margin:0;padding:0;list-style:none`;
Tt.li`
  display:grid;grid-template-columns:42px 1fr;align-items:start;gap:13px;font-family:"Cormorant Garamond",serif;font-size:1.05rem;font-weight:600;line-height:1.4;
  b{display:grid;width:38px;height:38px;place-items:center;border-radius:50%;background:var(--lapis);color:var(--pale-gold);font-family:"Cinzel",serif;font-size:.65rem}
`;
Tt(Section)`padding-bottom:110px`;
Tt.div`
  display:grid;grid-auto-flow:column;grid-auto-columns:min(78vw,360px);gap:17px;width:100%;overflow-x:auto;padding:3px max(20px,calc((100vw - 1180px)/2)) 25px;scroll-padding-inline:20px;scroll-snap-type:x mandatory;scrollbar-color:var(--red) rgba(37,23,14,.12);scrollbar-width:thin;
  @media(min-width:760px){grid-auto-columns:min(38vw,420px)}
`;
Tt.figure`
  scroll-snap-align:start;margin:0;padding:8px 8px 15px;border:1px solid var(--ink);background:var(--light);box-shadow:6px 7px 0 var(--lapis);
  img{display:block;width:100%;aspect-ratio:1;object-fit:cover;border:1px solid rgba(37,23,14,.7)}figcaption{padding:14px 6px 0;color:var(--red);font-family:"Cinzel",serif;font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase}
`;
Tt.p`margin:15px 0 0;color:rgba(37,23,14,.62);font-family:"Cormorant Garamond",serif;font-size:.8rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase`;
var Final = Tt.section`padding:90px 0 105px;border-top:2px solid var(--ink);background:var(--red);color:var(--light);text-align:center`;
var FinalMark = Tt.p`margin:0 0 20px;color:var(--pale-gold);font-size:1.4rem;letter-spacing:18px`;
var FinalTitle = Tt.h2`max-width:900px;margin:0 auto 22px;font-family:"Cinzel",serif;font-size:clamp(2.35rem,10vw,6.4rem);letter-spacing:.01em;word-spacing:.06em;line-height:1`;
Tt.p`max-width:590px;margin:0 auto 30px;color:rgba(247,236,201,.82);font-family:"Cormorant Garamond",serif;font-size:1.22rem;font-weight:600;line-height:1.5`;
var FinalButton = Tt(PrimaryButton)`background:var(--light);color:var(--lapis);box-shadow:5px 5px 0 var(--pale-gold);&:hover{background:white}`;
var Footer = Tt.footer`padding:28px 0 42px;background:var(--ink);color:rgba(247,236,201,.62);font-family:"Cormorant Garamond",serif;font-size:.79rem;line-height:1.5`;
var FooterRow = Tt.div`display:grid;gap:17px;@media(min-width:720px){grid-template-columns:1fr auto;align-items:end}`;
var Legal = Tt.p`max-width:760px;margin:0`;
var FooterLink = Tt.a`color:var(--pale-gold);text-decoration:none;text-transform:uppercase;letter-spacing:.08em`;
var external = (href) => ({
	href,
	target: "_blank",
	rel: "noreferrer"
});
function OneCoinSite() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Edge, { "aria-hidden": "true" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HeroGrid, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
				"One dollar ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "can change" }),
				" your life"
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCopy, { children: "One Coin is an onchain kingdom where simple games become public stories on Robinhood Chain." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCopy, {
				style: { marginTop: "14px" },
				children: "The first tale has been written. What comes next has not."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryButton, {
				href: "https://x.com/onecoinrbh",
				target: "_blank",
				rel: "noreferrer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "X" }), " Follow One Coin"]
			}) })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroArt, {
			"data-main-hero-art": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/gallery/01-main-campaign-poster.webp",
				alt: "One Dollar Can Change Your Life illuminated campaign poster",
				width: "1200",
				height: "1200",
				fetchPriority: "high"
			})
		})] }) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {
			"aria-label": "One Coin",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TickerInner, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "10,000" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "First collection" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "$1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "First mint" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "The Great Seven" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "$7K" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Paid" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "RBH" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Our kingdom" })] })
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrizeSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrizeGrid, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrizeAmount, { children: "ONE" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrizeLine, { children: [
				"A kingdom built",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"one game at a time."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrizeCopy, { children: "One Coin began with a single idea: make the game easy to understand, make the outcome public, and make the story worth remembering." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrizeCopy, { children: "The first game is now part of the kingdom. It does not define where One Coin ends." })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrizeArt, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/gallery/onecoin-kingdom.webp",
			alt: "The One Coin kingdom",
			width: "1200",
			height: "1200",
			loading: "lazy"
		}) })] }) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Final, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FinalMark, {
				"aria-hidden": "true",
				children: [
					"✦",
					" ",
					"✧",
					" ",
					"✦"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalTitle, { children: "The next page is unwritten." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FinalButton, {
				...external(PROJECT.twitter),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "X" }), " Follow the story"]
			})
		] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legal, { children: "NFTs are not investments and may have no resale value. The project and its contributors are not liable for trading losses, wallet compromise, failed transactions, third-party services, network interruptions, taxes, or unlawful participation. Use only links published by the official One Coin account." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterLink, {
			...external(PROJECT.twitter),
			children: ["Official X ", "↗"]
		})] }) }) })
	] });
}
//#endregion
export { OneCoinSite as default };
