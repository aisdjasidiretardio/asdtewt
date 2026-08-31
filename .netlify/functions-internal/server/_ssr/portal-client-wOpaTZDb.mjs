import { l as __toESM, o as require_react, t as require_jsx_runtime } from "./ssr.mjs";
import { a as qt, t as Tt } from "./styled-components.esm-rePmBNy9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal-client-wOpaTZDb.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var IDS = [
	9987,
	512,
	7361,
	1884,
	9042,
	3477,
	6208,
	771,
	4560,
	8891,
	147,
	8221,
	4096,
	973,
	6510,
	2944
];
var slide = qt`
  from{transform:translateX(0)}
  to{transform:translateX(-50%)}
`;
var Section = Tt.section`
  padding:55px 0 70px;
  overflow:hidden;
  border-top:2px solid var(--ink);
  border-bottom:2px solid var(--ink);
  background:var(--red);
  color:var(--light);
  text-align:center;
`;
var HeadingWrap = Tt.div`
  width:min(1180px,calc(100% - 40px));
  margin:0 auto;
`;
var Kicker$1 = Tt.p`
  margin:0 0 10px;
  color:var(--pale-gold);
  font-family:"Cormorant Garamond",serif;
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.18em;
  text-transform:uppercase;
`;
var Heading = Tt.h2`
  margin:0;
  color:var(--light);
  font-family:"Cinzel",serif;
  font-size:clamp(2rem,8vw,4.8rem);
  font-weight:700;
  letter-spacing:.01em;
  line-height:1;
`;
var Viewport = Tt.div`
  width:100%;
  margin-top:38px;
  overflow:hidden;
  padding:20px 0 30px;
  border-top:1px solid rgba(247,236,201,.4);
  border-bottom:1px solid rgba(247,236,201,.4);
`;
var Track = Tt.div`
  display:flex;
  width:max-content;
  animation:${slide} 58s linear infinite;
  will-change:transform;

  @media(prefers-reduced-motion:reduce){
    animation:none;
    transform:none;
  }
`;
var CardSet = Tt.div`
  display:flex;
  gap:22px;
  padding-right:22px;
`;
var Card = Tt.article`
  position:relative;
  width:clamp(260px,24vw,360px);
  flex:0 0 auto;
  padding:12px;
  border:2px solid var(--ink);
  background:var(--paper);
  box-shadow:9px 10px 0 var(--lapis);
  color:var(--ink);
  text-align:left;

  &::before{
    content:"";
    position:absolute;
    inset:7px;
    border:1px solid var(--gold);
    pointer-events:none;
  }
`;
var CardInner = Tt.div`
  position:relative;
  overflow:hidden;
  border:1px solid rgba(37,23,14,.72);
  background:var(--light);
`;
var Identity = Tt.div`
  display:flex;
  align-items:baseline;
  gap:8px;
  padding:13px 14px;
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;

  span:first-child{
    font-size:1rem;
  }

  strong{
    margin-left:auto;
    color:var(--lapis);
    font-size:clamp(1rem,2vw,1.3rem);
    letter-spacing:.03em;
  }
`;
var NftImage = Tt.img`
  display:block;
  width:100%;
  aspect-ratio:1;
  object-fit:cover;
  border-top:1px solid var(--ink);
  border-bottom:1px solid var(--ink);
  background:var(--paper);
`;
var Fate = Tt.span`
  display:block;
  padding:12px 10px;
  color:rgba(37,23,14,.68);
  font-family:"Cormorant Garamond",serif;
  font-size:.75rem;
  font-weight:700;
  letter-spacing:.12em;
  text-align:center;
  text-transform:uppercase;
`;
function CandidateCarouselSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HeadingWrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker$1, { children: "Until the book closes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { children: "Could fortune rest here?" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
		"aria-label": "Possible winning NFT IDs",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, { children: [false, true].map((duplicate) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardSet, {
			"aria-hidden": duplicate || void 0,
			children: IDS.map((id, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardInner, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Identity, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NFT ID" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["#", id.toString().padStart(4, "0")] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NftImage, {
					src: "/gallery/winner-nft.png",
					alt: duplicate || index > 0 ? "" : "One Coin possible winning NFT",
					loading: index > 3 ? "lazy" : "eager"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fate, { children: "Fortune may call" })
			] }) }, `${duplicate ? "d" : "p"}-${id}`))
		}, duplicate ? "duplicate" : "primary")) })
	})] });
}
var PROJECT = {
	twitter: "https://x.com/onecoinrbh",
	dice: "https://diceprotocol.world/agent/"
};
var PUBLISHED_WINNERS = [];
var drift = qt`
  0%{transform:translateX(0)}
  100%{transform:translateX(-50%)}
`;
var breathe = qt`
  0%,100%{
    transform:translateY(0) rotate(-.6deg);
    box-shadow:12px 14px 0 #163e75;
  }
  50%{
    transform:translateY(-9px) rotate(.6deg);
    box-shadow:15px 18px 0 #163e75;
  }
`;
var reveal = qt`
  0%{opacity:0;transform:translateY(14px) scale(.94)}
  100%{opacity:1;transform:translateY(0) scale(1)}
`;
var shimmer = qt`
  0%,100%{opacity:.35}
  50%{opacity:1}
`;
var Page = Tt.main`
  --lapis:#163e75;
  --deep:#0c2a53;
  --red:#9e332a;
  --gold:#d2a13c;
  --pale-gold:#f1ce72;
  --paper:#eadcad;
  --light:#f7ecc9;
  --ink:#25170e;

  position:relative;
  min-height:100svh;
  overflow:hidden;
  color:var(--ink);
  background:var(--paper);
  font-kerning:normal;
  text-rendering:optimizeLegibility;
  background-image:
    radial-gradient(
      circle at 18% 8%,
      rgba(255,255,255,.34),
      transparent 28%
    ),
    radial-gradient(
      circle at 82% 84%,
      rgba(91,54,23,.12),
      transparent 30%
    ),
    repeating-linear-gradient(
      97deg,
      rgba(80,52,22,.025) 0 1px,
      transparent 1px 5px
    );
`;
var Edge = Tt.div`
  position:fixed;
  z-index:50;
  inset:8px;
  border:1px solid rgba(34,22,11,.52);
  pointer-events:none;

  &::after{
    content:"";
    position:absolute;
    inset:5px;
    border:1px solid rgba(210,161,60,.48);
  }

  @media(min-width:800px){
    inset:13px;
  }
`;
var Container = Tt.div`
  width:min(1120px,calc(100% - 40px));
  margin:0 auto;

  @media(min-width:760px){
    width:min(1120px,calc(100% - 80px));
  }
`;
var TopBar = Tt.nav`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:24px 0 10px;
`;
var Wordmark = Tt.a`
  display:inline-flex;
  align-items:center;
  gap:9px;
  color:var(--ink);
  font-family:"Cinzel",serif;
  font-size:.76rem;
  font-weight:700;
  letter-spacing:.11em;
  text-decoration:none;
  white-space:nowrap;

  span{
    color:var(--red);
    font-size:1.15rem;
  }
`;
var Nav = Tt.div`
  display:flex;
  align-items:center;
  gap:clamp(10px,2.2vw,25px);
`;
var NavLink = Tt.a`
  color:var(--ink);
  border-bottom:1px solid currentColor;
  font-family:"Cormorant Garamond",serif;
  font-size:clamp(.67rem,2.5vw,.88rem);
  font-weight:700;
  letter-spacing:.07em;
  text-decoration:none;
  text-transform:uppercase;
  white-space:nowrap;

  &[aria-current="page"]{
    color:var(--red);
  }
`;
var PortalFinal = Tt.section`
  padding:90px 0 105px;
  border-top:2px solid var(--ink);
  background:var(--red);
  color:var(--light);
  text-align:center;
`;
var PortalFinalMark = Tt.p`
  margin:0 0 20px;
  color:var(--pale-gold);
  font-size:1.4rem;
  letter-spacing:18px;
`;
var PortalFinalTitle = Tt.h2`
  max-width:900px;
  margin:0 auto 22px;
  color:var(--light);
  font-family:"Cinzel",serif;
  font-size:clamp(2.35rem,10vw,6.4rem);
  font-weight:400;
  letter-spacing:.01em;
  word-spacing:.06em;
  line-height:1;
`;
var PortalFinalCopy = Tt.p`
  max-width:590px;
  margin:0 auto 30px;
  color:rgba(247,236,201,.82);
  font-family:"Cormorant Garamond",serif;
  font-size:1.22rem;
  font-weight:600;
  line-height:1.5;
`;
var PortalFinalButton = Tt.a`
  display:inline-flex;
  min-height:50px;
  align-items:center;
  justify-content:center;
  gap:11px;
  padding:0 22px;
  border:2px solid var(--ink);
  background:var(--light);
  box-shadow:5px 5px 0 var(--pale-gold);
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.1em;
  text-decoration:none;
  text-transform:uppercase;
  transition:transform .2s,box-shadow .2s,background .2s;

  &:hover{
    transform:translate(2px,2px);
    box-shadow:3px 3px 0 var(--pale-gold);
    background:white;
  }

  &:focus-visible{
    outline:3px solid var(--light);
    outline-offset:4px;
  }
`;
var Footer = Tt.footer`
  padding:28px 0 42px;
  background:var(--ink);
  color:rgba(247,236,201,.62);
  font-family:"Cormorant Garamond",serif;
  font-size:.79rem;
  line-height:1.5;
`;
var FooterRow = Tt.div`
  display:grid;
  gap:17px;

  @media(min-width:720px){
    grid-template-columns:1fr auto;
    align-items:end;
  }
`;
var FooterLegal = Tt.p`
  max-width:760px;
  margin:0;
`;
var FooterLink = Tt.a`
  color:var(--pale-gold);
  letter-spacing:.08em;
  text-decoration:none;
  text-transform:uppercase;
`;
var Kicker = Tt.p`
  margin:0 0 10px;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.18em;
  text-transform:uppercase;
`;
var Title = Tt.h1`
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(2.8rem,12vw,7.4rem);
  font-weight:700;
  letter-spacing:.01em;
  line-height:.94;
  text-wrap:balance;
`;
var Lead = Tt.p`
  max-width:660px;
  margin:22px auto 0;
  color:rgba(37,23,14,.78);
  font-family:"Cormorant Garamond",serif;
  font-size:clamp(1.15rem,4vw,1.45rem);
  font-weight:600;
  line-height:1.48;
`;
Tt.span`
  display:inline-flex;
  align-items:center;
  gap:9px;
  padding:8px 12px;
  border:1px solid var(--red);
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.62rem;
  font-weight:700;
  letter-spacing:.11em;
  text-transform:uppercase;

  &::before{
    content:"";
    width:7px;
    height:7px;
    border-radius:50%;
    background:var(--red);
    animation:${shimmer} 1.5s ease-in-out infinite;
  }
`;
var WhitelistMain = Tt.section`
  min-height:calc(100svh - 76px);
  display:grid;
  align-items:center;
  padding:55px 0 90px;
  text-align:center;
`;
var Checker = Tt.div`
  max-width:760px;
  margin:42px auto 0;
  padding:clamp(25px,6vw,54px);
  border:1px solid var(--ink);
  background:rgba(247,236,201,.67);
  box-shadow:9px 10px 0 var(--lapis);
  text-align:left;
`;
var CheckerLabel = Tt.label`
  display:block;
  margin-bottom:9px;
  color:var(--ink);
  font-family:"Cinzel",serif;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.1em;
  text-transform:uppercase;
`;
var InputRow = Tt.form`
  display:grid;
  gap:12px;

  @media(min-width:650px){
    grid-template-columns:1fr auto;
  }
`;
var WalletInput = Tt.input`
  min-width:0;
  min-height:56px;
  padding:0 17px;
  border:2px solid var(--ink);
  border-radius:0;
  background:var(--light);
  color:var(--ink);
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.9rem;
  outline:none;

  &:focus{
    border-color:var(--red);
    box-shadow:0 0 0 3px rgba(158,51,42,.16);
  }
`;
var CheckButton = Tt.button`
  min-height:56px;
  padding:0 24px;
  border:2px solid var(--ink);
  border-radius:0;
  background:var(--lapis);
  box-shadow:5px 5px 0 var(--gold);
  color:var(--light);
  cursor:pointer;
  font-family:"Cinzel",serif;
  font-size:.7rem;
  font-weight:700;
  letter-spacing:.09em;
  text-transform:uppercase;

  &:hover{
    background:var(--deep);
    transform:translate(1px,1px);
    box-shadow:4px 4px 0 var(--gold);
  }
`;
var CheckerStatus = Tt.p`
  min-height:24px;
  margin:18px 0 0;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:1.05rem;
  font-weight:700;
  line-height:1.4;
`;
Tt.p`
  margin:11px 0 0;
  color:rgba(37,23,14,.64);
  font-family:"Cormorant Garamond",serif;
  font-size:.9rem;
  font-weight:600;
  line-height:1.45;
`;
var WinnerHero = Tt.section`
  padding:58px 0 48px;
  text-align:center;
`;
var DrawStatus = Tt.div`
  margin:34px auto 0;
`;
var DrawMessage = Tt.div`
  max-width:760px;
  margin:0 auto;
  padding:22px;
  border-top:1px solid var(--ink);
  border-bottom:1px solid var(--ink);
`;
var DrawLabel = Tt.p`
  margin:0;
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:clamp(1rem,4vw,1.45rem);
  font-weight:700;
  letter-spacing:.04em;
  line-height:1.35;
`;
var Verify = Tt.a`
  display:inline-block;
  margin-top:10px;
  color:var(--lapis);
  font-family:"Cormorant Garamond",serif;
  font-size:.95rem;
  font-weight:700;
  letter-spacing:.06em;
  text-underline-offset:4px;
  text-transform:uppercase;
`;
var Countdown = Tt.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:7px;
  max-width:720px;
  margin:0 auto;
`;
var TimeCell = Tt.div`
  padding:16px 6px;
  border:1px solid var(--ink);
  background:var(--lapis);
  color:var(--light);

  b{
    display:block;
    color:var(--pale-gold);
    font-family:"Cinzel",serif;
    font-size:clamp(1.45rem,7vw,3.4rem);
    line-height:1;
  }

  span{
    display:block;
    margin-top:7px;
    font-family:"Cormorant Garamond",serif;
    font-size:.68rem;
    font-weight:700;
    letter-spacing:.11em;
    text-transform:uppercase;
  }
`;
var Promise$1 = Tt.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  margin:35px auto 0;
  border:1px solid var(--ink);
  background:rgba(247,236,201,.55);
`;
var PromiseItem = Tt.div`
  padding:17px 8px;
  border-right:1px solid rgba(37,23,14,.45);
  font-family:"Cormorant Garamond",serif;
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.06em;
  text-transform:uppercase;

  &:last-child{
    border-right:0;
  }

  b{
    display:block;
    margin-bottom:5px;
    color:var(--red);
    font-family:"Cinzel",serif;
    font-size:clamp(1rem,4vw,1.55rem);
    letter-spacing:.02em;
  }
`;
Tt.section`
  padding:55px 0 70px;
  background:var(--red);
  color:var(--light);
  text-align:center;
  border-top:2px solid var(--ink);
  border-bottom:2px solid var(--ink);
`;
Tt.h2`
  margin:0;
  color:var(--light);
  font-family:"Cinzel",serif;
  font-size:clamp(2rem,8vw,4.8rem);
  letter-spacing:.01em;
  line-height:1;
`;
Tt.article`
  position:relative;
  width:min(78vw,330px);
  aspect-ratio:3/4;
  margin:36px auto 42px;
  padding:17px;
  border:2px solid var(--ink);
  background:var(--paper);
  box-shadow:12px 14px 0 var(--lapis);
  color:var(--ink);
  animation:${breathe} 4s ease-in-out infinite;

  &::before{
    content:"";
    position:absolute;
    inset:8px;
    border:1px solid var(--gold);
    pointer-events:none;
  }
`;
Tt.div`
  box-sizing:border-box;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  padding:27px 20px 19px;
  border:1px solid rgba(37,23,14,.72);
  background:
    radial-gradient(circle,rgba(241,206,114,.7),transparent 42%),
    linear-gradient(145deg,rgba(255,255,255,.2),rgba(158,51,42,.08));
  animation:${reveal} .45s ease-out;

  &::after{
    content:"";
    display:block;
    flex:0 0 auto;
    width:min(100%,190px);
    aspect-ratio:1;
    margin-top:16px;
    border:1px solid rgba(37,23,14,.8);
    background-color:var(--paper);
    background-image:url("/gallery/winner-nft.png");
    background-repeat:no-repeat;
    background-position:center;
    background-size:contain;
    box-shadow:4px 5px 0 rgba(22,62,117,.72);
  }
`;
Tt.span`
  color:var(--red);
  font-size:2rem;
`;
Tt.span`
  margin-top:23px;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:.8rem;
  font-weight:700;
  letter-spacing:.18em;
  text-transform:uppercase;
`;
Tt.strong`
  margin-top:5px;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(2.5rem,12vw,5rem);
  letter-spacing:.04em;
  line-height:1;
`;
Tt.div`
  width:100%;
  overflow:hidden;
  border-top:1px solid rgba(247,236,201,.4);
  border-bottom:1px solid rgba(247,236,201,.4);
  padding:13px 0;
`;
Tt.div`
  display:flex;
  width:max-content;
  animation:${drift} 28s linear infinite;
`;
Tt.div`
  width:146px;
  margin-right:12px;
  padding:14px 10px;
  border:1px solid rgba(247,236,201,.65);
  background:rgba(12,42,83,.55);
  font-family:"Cinzel",serif;
  font-size:.75rem;
  color:var(--pale-gold);
  letter-spacing:.08em;

  span{
    display:block;
    margin-top:5px;
    color:var(--light);
    font-family:"Cormorant Garamond",serif;
    font-size:.68rem;
    text-transform:uppercase;
  }
`;
var WinnersSection = Tt.section`
  padding:78px 0 95px;
`;
var SectionHead = Tt.div`
  text-align:center;
`;
var SectionTitle = Tt.h2`
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(2rem,9vw,5rem);
  letter-spacing:.01em;
  line-height:1;
`;
var SectionCopy = Tt.p`
  max-width:620px;
  margin:18px auto 0;
  color:rgba(37,23,14,.72);
  font-family:"Cormorant Garamond",serif;
  font-size:1.15rem;
  font-weight:600;
  line-height:1.45;
`;
var WinnerGrid = Tt.div`
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:12px;
  margin-top:38px;

  @media(min-width:720px){
    grid-template-columns:repeat(4,minmax(0,1fr));
  }

  @media(min-width:960px){
    grid-template-columns:repeat(7,minmax(0,1fr));
  }
`;
var WinnerSlot = Tt.article`
  min-height:168px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:17px;
  border:1px solid var(--ink);
  background:rgba(247,236,201,.62);
  text-align:center;

  span{
    color:var(--red);
    font-family:"Cormorant Garamond",serif;
    font-size:.68rem;
    font-weight:700;
    letter-spacing:.13em;
    text-transform:uppercase;
  }

  b{
    margin-top:12px;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.15rem,5vw,2rem);
    letter-spacing:.04em;
  }

  small{
    margin-top:9px;
    color:rgba(37,23,14,.58);
    font-family:"Cormorant Garamond",serif;
    font-size:.78rem;
    font-weight:700;
    text-transform:uppercase;
  }
`;
function SiteHeader({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TopBar, {
		"aria-label": "Primary navigation",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wordmark, {
			href: "/",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }), "One Coin"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Nav, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
				href: "/",
				children: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
				href: "/whitelist",
				"aria-current": current === "whitelist" ? "page" : void 0,
				children: "Whitelist"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
				href: "/winner",
				"aria-current": current === "winner" ? "page" : void 0,
				children: "Winner room"
			})
		] })]
	}) });
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalFinal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalFinalMark, {
			"aria-hidden": "true",
			children: [
				"✦",
				" ",
				"✧",
				" ",
				"✦"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalFinalTitle, { children: "May luck be in your favour." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalFinalCopy, { children: ["10,000 entries. Seven winners. One dollar is all it takes to be part of the story.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				display: "block",
				marginTop: "12px",
				fontSize: "clamp(.92rem, 1.15vw, 1.05rem)",
				fontWeight: 700,
				lineHeight: 1.5,
				letterSpacing: ".02em",
				color: "inherit",
				opacity: .88
			},
			children: "One NFT = one entry. Five NFTs in one wallet = five separate entries in the draw."
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalFinalButton, {
			href: PROJECT.twitter,
			target: "_blank",
			rel: "noreferrer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "X" }), " Follow for the mint"]
		})
	] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLegal, { children: "To the fullest extent permitted by law, the project and its contributors are not liable for trading losses, NFT price changes, wallet compromise, failed transactions, third party services, network interruptions, taxes, or unlawful participation. NFTs are not investments and may have no resale value. Eligibility, claim deadlines, prize distribution, and the official rules apply. By participating, you accept these risks and remain responsible for complying with local laws. Use only links published by the official account." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterLink, {
		href: PROJECT.twitter,
		target: "_blank",
		rel: "noreferrer",
		children: ["Official X ", "↗"]
	})] }) }) })] });
}
function pad(value) {
	return value.toString().padStart(2, "0");
}
function WhitelistChecker() {
	const [wallet, setWallet] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("The checker is not live yet. No wallets are being stored.");
	function checkWallet(event) {
		event.preventDefault();
		setMessage(wallet.trim() ? "This wallet was not submitted. The whitelist checker is not live yet." : "Enter a wallet when the checker goes live.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Edge, { "aria-hidden": "true" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "whitelist" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhitelistMain, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The royal list" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Whitelist checker" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checker, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckerLabel, {
					htmlFor: "wallet",
					children: "Wallet address"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputRow, {
					onSubmit: checkWallet,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletInput, {
						id: "wallet",
						disabled: true,
						"aria-disabled": "true",
						style: {
							cursor: "not-allowed",
							opacity: .58
						},
						value: wallet,
						onChange: (event) => setWallet(event.target.value),
						placeholder: "0x...",
						autoComplete: "off",
						spellCheck: false
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckButton, {
						type: "submit",
						disabled: true,
						"aria-disabled": "true",
						style: {
							cursor: "not-allowed",
							opacity: .58
						},
						children: "Check wallet"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckerStatus, {
					"aria-live": "polite",
					children: message
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					maxWidth: "720px",
					margin: "34px auto 0",
					color: "var(--red)",
					fontFamily: "\"Cormorant Garamond\", serif",
					fontSize: "clamp(1.05rem, 2.3vw, 1.28rem)",
					fontStyle: "italic",
					fontWeight: 600,
					letterSpacing: ".02em",
					lineHeight: 1.5,
					textAlign: "center"
				},
				children: "The royals keep no fixed hour. A sharp eye may yet find its name written within."
			})
		] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
function WinnerRoom() {
	const [candidate, setCandidate] = (0, import_react.useState)(4821);
	const [now, setNow] = (0, import_react.useState)(0);
	const drawTime = 0;
	const hasWinners = PUBLISHED_WINNERS.length === 7;
	(0, import_react.useEffect)(() => {
		let seed = 4821;
		const candidateTimer = window.setInterval(() => {
			seed = (seed * 9301 + 49297) % 1e4;
			setCandidate(seed + 1);
		}, 950);
		const updateClock = () => {
			setNow(Date.now());
		};
		updateClock();
		const clockTimer = window.setInterval(updateClock, 1e3);
		return () => {
			window.clearInterval(candidateTimer);
			window.clearInterval(clockTimer);
		};
	}, []);
	const remaining = 0;
	const days = Math.floor(remaining / 864e5);
	const hours = Math.floor(remaining % 864e5 / 36e5);
	const minutes = Math.floor(remaining % 36e5 / 6e4);
	const seconds = Math.floor(remaining % 6e4 / 1e3);
	const isCountdown = Boolean(drawTime);
	const isAwaitingDraw = Boolean(drawTime);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(hover: none), (pointer: coarse)").matches || !("IntersectionObserver" in window)) return;
		const cards = Array.from(document.querySelectorAll(".winner-art-card"));
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio >= .6) {
					entry.target.classList.add("is-revealed");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: [.6] });
		cards.forEach((card) => {
			observer.observe(card);
		});
		return () => {
			observer.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Edge, { "aria-hidden": "true" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "winner" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinnerHero, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The draw room" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
				"Seven doors.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Seven fortunes."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "Seven winning NFTs receive $1,000 each. Every NFT is one entry, and every winning ID is worth 1,000x the $1 mint price." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawStatus, { children: isCountdown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Countdown, {
				"aria-label": "Time remaining until the draw",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TimeCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: pad(days) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Days" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TimeCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: pad(hours) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hours" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TimeCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: pad(minutes) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Minutes" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TimeCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: pad(seconds) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Seconds" })] })
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawMessage, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawLabel, { children: hasWinners ? "The seven winning IDs have been revealed." : isAwaitingDraw ? "The trading window is closed. The verified draw is next." : "Winners will be selected 24 hours after mint-out." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Verify, {
				href: PROJECT.dice,
				target: "_blank",
				rel: "noreferrer",
				children: ["Verifiable with Dice Protocol ", "↗"]
			})] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Promise$1, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromiseItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "7" }), "Winning NFTs"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromiseItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "$1,000" }), "For each winner"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromiseItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "1,000x" }), "The mint price"] })
			] })
		] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandidateCarouselSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinnersSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionHead, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The final seven" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: hasWinners ? "The winners." : "The names remain sealed." }),
				hasWinners && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCopy, {
					className: "winner-section-copy",
					children: "Each winning ID and its owner can now be checked against the verified Dice result."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
            /* winnerCardSiteStyle */

            .winner-art-grid {
              display:grid;
              position:relative;
              left:50%;
              width:min(1400px, calc(100vw - 80px));
              margin:0;
              grid-template-columns:repeat(7, minmax(0, 1fr));
              justify-content:center;
              gap:12px;
              transform:translateX(-50%);
            }

            .winner-art-card {
              position:relative;
              box-sizing:border-box;
              width:100%;
              min-width:0;
              padding:2px !important;
              overflow:hidden;
              border:1px solid var(--ink);
              border-radius:0;
              background:var(--pale-gold);
              box-shadow:
                4px 0 0 var(--red),
                4px 5px 0 var(--lapis);
              cursor:pointer;
              transition:
                transform .2s ease,
                box-shadow .2s ease;
            }

            .winner-art-card::after {
              display:none;
            }

            .winner-card-art {
              display:block;
              width:100%;
              height:auto;
              border:0;
              object-fit:contain;
            }

            .winner-card-cover {
              inset:2px;
              width:calc(100% - 4px);
              height:calc(100% - 4px);
              border:0;
              object-fit:cover;
            }

            .winner-art-card:hover,
            .winner-art-card:focus-visible {
              transform:translate(1px,1px);
              box-shadow:
                3px 0 0 var(--red),
                3px 4px 0 var(--lapis);
            }

            .winner-art-card.is-revealed {
              box-shadow:
                4px 0 0 var(--red),
                4px 5px 0 var(--lapis);
            }

            @media (max-width:900px) {
              .winner-art-grid {
                width:min(720px, calc(100vw - 36px));
                grid-template-columns:repeat(2, minmax(0, 1fr));
                gap:18px;
              }
            }

            @media (max-width:520px) {
              .winner-art-grid {
                width:min(280px, calc(100vw - 28px));
                grid-template-columns:1fr;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .winner-art-card,
              .winner-card-art,
              .winner-card-cover {
                transition:none;
              }
            }
          ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
            /* winnerCardOverlayFix */

            .winner-art-card {
              position:relative !important;
              overflow:hidden !important;
            }

            .winner-card-art {
              position:relative;
              z-index:1;
              display:block;
              width:100%;
              height:auto;
              object-fit:contain;
              transition:
                transform .42s ease,
                filter .42s ease;
            }

            .winner-card-cover {
              position:absolute !important;
              inset:3px !important;
              z-index:2;
              display:block;
              width:calc(100% - 6px) !important;
              height:calc(100% - 6px) !important;
              object-fit:cover;
              opacity:1;
              pointer-events:none;
              transition:
                opacity .42s ease,
                transform .42s ease;
            }

            .winner-art-card:hover .winner-card-cover,
            .winner-art-card:focus-visible .winner-card-cover,
            .winner-art-card.is-revealed .winner-card-cover {
              opacity:0;
              transform:scale(.975);
            }

            .winner-art-card:hover .winner-card-art,
            .winner-art-card:focus-visible .winner-card-art,
            .winner-art-card.is-revealed .winner-card-art {
              transform:scale(1.012);
            }

            .winner-art-card:focus-visible {
              outline:3px solid var(--red);
              outline-offset:4px;
            }

            @media (prefers-reduced-motion: reduce) {
              .winner-card-art,
              .winner-card-cover {
                transition:none;
              }
            }
          ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
            /* winnerCardEqualSizeFix */

            .winner-art-card {
              position:relative !important;
              width:100% !important;
              height:auto !important;
              min-height:0 !important;
              aspect-ratio:2 / 3;
              overflow:hidden !important;
            }

            .winner-card-art,
            .winner-card-cover {
              position:absolute !important;
              inset:2px !important;
              display:block !important;
              width:calc(100% - 4px) !important;
              height:calc(100% - 4px) !important;
              object-fit:cover !important;
              object-position:center !important;
            }

            .winner-card-art {
              z-index:1;
            }

            .winner-card-cover {
              z-index:2;
            }
          ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
            /* winnerFourThreeLayout */

            .winner-section-copy {
              width:100%;
              max-width:920px !important;
              margin-left:auto !important;
              margin-right:auto !important;
            }

            .winner-art-grid {
              position:relative !important;
              left:50% !important;
              display:grid !important;
              width:min(1120px, calc(100vw - 64px)) !important;
              margin:0 !important;
              grid-template-columns:repeat(8, minmax(0, 1fr)) !important;
              column-gap:14px !important;
              row-gap:28px !important;
              transform:translateX(-50%) !important;
            }

            .winner-art-grid > * {
              grid-column:span 2;
              width:100%;
              min-width:0;
            }

            .winner-art-grid > :nth-child(5) {
              grid-column:2 / span 2;
            }

            .winner-art-grid > :nth-child(6) {
              grid-column:4 / span 2;
            }

            .winner-art-grid > :nth-child(7) {
              grid-column:6 / span 2;
            }

            @media (max-width:900px) {
              .winner-section-copy {
                max-width:650px !important;
              }

              .winner-art-grid {
                width:min(620px, calc(100vw - 36px)) !important;
                grid-template-columns:repeat(2, minmax(0, 1fr)) !important;
                gap:18px !important;
              }

              .winner-art-grid > * {
                grid-column:auto !important;
              }

              .winner-art-grid > :nth-child(7) {
                grid-column:1 / -1 !important;
                width:calc(50% - 9px) !important;
                justify-self:center;
              }
            }

            @media (max-width:520px) {
              .winner-art-grid {
                width:min(280px, calc(100vw - 28px)) !important;
                grid-template-columns:1fr !important;
              }

              .winner-art-grid > *,
              .winner-art-grid > :nth-child(7) {
                grid-column:1 !important;
                width:100% !important;
                justify-self:stretch;
              }
            }
          ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinnerGrid, {
				className: "winner-art-grid",
				children: hasWinners ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: Array.from({ length: 7 }, (_, index) => {
					const winner = PUBLISHED_WINNERS[index];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WinnerSlot, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Winner ", index + 1] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: winner ? `#${winner.toString().padStart(4, "0")}` : "SEALED" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: winner ? "$1,000 prize" : "Awaiting draw" })
					] }, index);
				}) }) : [
					"/gallery/winner-1.png",
					"/gallery/winner-2.png",
					"/gallery/winner-3.png",
					"/gallery/winner-4.png",
					"/gallery/winner-5.png",
					"/gallery/winner-6.png",
					"/gallery/winner-7.png"
				].map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WinnerSlot, {
					className: "winner-art-card",
					tabIndex: 0,
					style: {
						padding: 0,
						overflow: "hidden"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "winner-card-art",
						src: image,
						alt: `Fortune card for winner ${index + 1}`,
						loading: index < 2 ? "eager" : "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "winner-card-cover",
						src: "/gallery/unrevealed.png",
						alt: "Sealed fortune card",
						loading: "eager"
					})]
				}, image))
			})
		] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { WhitelistChecker, WinnerRoom };
