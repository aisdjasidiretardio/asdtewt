import { l as __toESM, o as require_react, t as require_jsx_runtime } from "./ssr.mjs";
import { a as qt, t as Tt } from "./styled-components.esm-rePmBNy9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal-client-wMgmZg3w.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var PROJECT = {
	twitter: "https://x.com/onecoinrbh",
	dice: "https://diceprotocol.world/agent/",
	opensea: "https://opensea.io/collection/onecoin"
};
var DRAW_AT = "2026-09-08T15:30:00Z";
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
Tt.section`
  min-height:calc(100svh - 76px);
  display:grid;
  align-items:center;
  padding:55px 0 90px;
  text-align:center;
`;
Tt.section`
  display:grid;
  gap:12px;
  max-width:980px;
  margin:42px auto 0;
  text-align:left;

  @media(min-width:760px){
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
`;
Tt.article`
  position:relative;
  min-height:230px;
  padding:26px 23px 24px;
  border:1px solid var(--ink);
  background:rgba(247,236,201,.67);
  box-shadow:6px 7px 0 var(--gold);

  &::before{
    content:"";
    position:absolute;
    inset:6px;
    border:1px solid rgba(158,51,42,.45);
    pointer-events:none;
  }
`;
Tt.span`
  position:relative;
  display:block;
  margin-bottom:24px;
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.17em;
  text-transform:uppercase;
`;
Tt.h2`
  position:relative;
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(1.25rem,3vw,1.7rem);
  font-weight:700;
  letter-spacing:.02em;
  line-height:1.1;
`;
Tt.p`
  position:relative;
  margin:14px 0 0;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:1.15rem;
  font-weight:700;
  line-height:1.25;
`;
Tt.p`
  position:relative;
  margin:10px 0 0;
  color:rgba(37,23,14,.7);
  font-family:"Cormorant Garamond",serif;
  font-size:1rem;
  font-weight:600;
  line-height:1.42;
`;
Tt.div`
  max-width:760px;
  margin:42px auto 0;
  padding:clamp(25px,6vw,54px);
  border:1px solid var(--ink);
  background:rgba(247,236,201,.67);
  box-shadow:9px 10px 0 var(--lapis);
  text-align:left;
`;
Tt.label`
  display:block;
  margin-bottom:9px;
  color:var(--ink);
  font-family:"Cinzel",serif;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.1em;
  text-transform:uppercase;
`;
Tt.form`
  display:grid;
  gap:12px;

  @media(min-width:650px){
    grid-template-columns:1fr auto;
  }
`;
Tt.input`
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
Tt.button`
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
Tt.p`
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
Tt.div`
  margin:34px auto 0;
`;
Tt.div`
  max-width:760px;
  margin:0 auto;
  padding:22px;
  border-top:1px solid var(--ink);
  border-bottom:1px solid var(--ink);
`;
Tt.p`
  margin:0;
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:clamp(1rem,4vw,1.45rem);
  font-weight:700;
  letter-spacing:.04em;
  line-height:1.35;
`;
Tt.a`
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
Tt.p`
  margin:16px 0 0;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:1rem;
  font-weight:700;
  letter-spacing:.08em;
  text-align:center;
  text-transform:uppercase;
`;
var WinnerActions = Tt.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  gap:12px;
  margin:24px 0 0;
`;
var WinnerButton = Tt.a`
  display:inline-flex;
  min-height:50px;
  align-items:center;
  justify-content:center;
  padding:0 22px;
  border:2px solid var(--ink);
  background:var(--lapis);
  box-shadow:5px 5px 0 var(--gold);
  color:var(--light);
  font-family:"Cinzel",serif;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.1em;
  text-decoration:none;
  text-transform:uppercase;
  transition:
    transform .2s,
    box-shadow .2s,
    background .2s;

  &:hover{
    transform:translate(2px,2px);
    box-shadow:3px 3px 0 var(--gold);
    background:var(--deep);
  }

  &:focus-visible{
    outline:3px solid var(--red);
    outline-offset:4px;
  }
`;
var WinnerSecondaryButton = Tt(WinnerButton)`
  background:var(--light);
  color:var(--lapis);
  box-shadow:5px 5px 0 var(--red);

  &:hover{
    background:white;
    box-shadow:3px 3px 0 var(--red);
  }
`;
Tt.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:7px;
  max-width:720px;
  margin:0 auto;
`;
Tt.div`
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
Tt.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  margin:35px auto 0;
  border:1px solid var(--ink);
  background:rgba(247,236,201,.55);
`;
Tt.div`
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
Tt.section`
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
Tt.div`
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
Tt.article`
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
var GreatSevenDetailsSection = Tt.section`
  padding:78px 0 92px;
  border-top:2px solid var(--ink);
  border-bottom:2px solid var(--ink);
  background:var(--paper);
`;
var GreatSevenFacts = Tt.div`
  display:grid;
  grid-template-columns:repeat(5,minmax(0,1fr));
  margin-top:42px;
  border:2px solid var(--ink);
  background:var(--light);
  box-shadow:7px 8px 0 var(--lapis);

  @media(max-width:900px){
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  @media(max-width:520px){
    grid-template-columns:1fr;
  }
`;
var GreatSevenFact = Tt.div`
  min-height:125px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:22px;
  border-right:1px solid rgba(37,23,14,.5);

  &:last-child{
    border-right:0;
  }

  b{
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.8rem,3vw,2.8rem);
    line-height:1;
  }

  span{
    margin-top:20px;
    color:var(--red);
    font-family:"Cormorant Garamond",serif;
    font-size:.72rem;
    font-weight:700;
    letter-spacing:.12em;
    text-transform:uppercase;
  }

  @media(max-width:900px){
    border-bottom:1px solid rgba(37,23,14,.35);
  }
`;
var GreatSevenFlow = Tt.div`
  display:grid;
  gap:14px;
  margin-top:50px;

  @media(min-width:820px){
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
`;
var GreatSevenStep = Tt.article`
  display:grid;
  grid-template-columns:70px 1fr;
  gap:20px;
  min-height:190px;
  padding:27px;
  border:2px solid var(--ink);
  background:var(--light);
  box-shadow:6px 7px 0 var(--gold);

  &:nth-child(2){
    box-shadow:6px 7px 0 var(--red);
  }

  &:nth-child(3){
    box-shadow:6px 7px 0 var(--lapis);
  }

  &:nth-child(4){
    background:var(--lapis);
    color:var(--light);
    box-shadow:6px 7px 0 var(--red);
  }
`;
var GreatSevenStepNo = Tt.div`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:2.4rem;
  font-weight:700;
  line-height:1;

  ${GreatSevenStep}:nth-child(4) &{
    color:var(--pale-gold);
  }
`;
var GreatSevenStepBody = Tt.div`
  strong{
    display:block;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.15rem,2.3vw,1.7rem);
    line-height:1.05;
  }

  p{
    margin:14px 0 0;
    color:rgba(37,23,14,.76);
    font-family:"Cormorant Garamond",serif;
    font-size:1.05rem;
    font-weight:600;
    line-height:1.48;
  }

  ${GreatSevenStep}:nth-child(4) & strong{
    color:var(--pale-gold);
  }

  ${GreatSevenStep}:nth-child(4) & p{
    color:rgba(255,255,255,.82);
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
				children: "The Great Seven"
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalFinalTitle, { children: "The proof remains." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalFinalCopy, { children: "The draw ended. The record did not." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalFinalButton, {
			href: PROJECT.twitter,
			target: "_blank",
			rel: "noreferrer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "X" }), " View the public record"]
		})
	] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLegal, { children: "To the fullest extent permitted by law, the project and its contributors are not liable for trading losses, NFT price changes, wallet compromise, failed transactions, third party services, network interruptions, taxes, or unlawful participation. NFTs are not investments and may have no resale value. Eligibility, claim deadlines, prize distribution, and the official rules apply. By participating, you accept these risks and remain responsible for complying with local laws. Use only links published by the official account." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterLink, {
		href: PROJECT.twitter,
		target: "_blank",
		rel: "noreferrer",
		children: ["Official X ", "↗"]
	})] }) }) })] });
}
Tt.div`
  margin-top:58px;
  border:2px solid var(--ink);
  background:var(--light);
  box-shadow:8px 9px 0 var(--lapis);
`;
Tt.div`
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:30px;
  padding:30px 32px;
  border-bottom:2px solid var(--ink);
  background:var(--paper);

  h3{
    margin:4px 0 0;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.8rem,4vw,3.4rem);
    line-height:1;
  }

  > span{
    color:var(--red);
    font-family:"Cinzel",serif;
    font-size:.68rem;
    font-weight:700;
    letter-spacing:.12em;
    text-transform:uppercase;
    white-space:nowrap;
  }

  @media(max-width:680px){
    align-items:flex-start;
    flex-direction:column;
    gap:12px;
  }
`;
Tt.div`
  display:grid;
  grid-template-columns:110px 120px 150px minmax(0,1fr);
  align-items:center;
  gap:18px;
  padding:20px 28px;
  border-bottom:1px solid rgba(37,23,14,.35);

  &:last-child{
    border-bottom:0;
  }

  @media(max-width:800px){
    grid-template-columns:90px 1fr;
    gap:10px 18px;
  }

  @media(max-width:500px){
    grid-template-columns:1fr;
    gap:7px;
  }
`;
Tt.span`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.63rem;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
`;
Tt.strong`
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:1.3rem;
`;
Tt.span`
  color:var(--ink);
  font-family:"Cormorant Garamond",serif;
  font-size:.76rem;
  font-weight:700;
  letter-spacing:.09em;
  text-transform:uppercase;
`;
Tt.a`
  overflow:hidden;
  color:var(--lapis);
  font-family:monospace;
  font-size:.73rem;
  font-weight:700;
  text-decoration:none;
  text-overflow:ellipsis;
  white-space:nowrap;

  &:hover{
    color:var(--red);
    text-decoration:underline;
  }

  @media(min-width:801px){
    text-align:right;
  }
`;
Tt.div`
  display:grid;
  gap:2px;
  margin-top:30px;
  border:2px solid var(--ink);
  background:var(--ink);

  @media(min-width:720px){
    grid-template-columns:1fr 1fr;
  }
`;
Tt.a`
  min-height:135px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:27px 30px;
  background:var(--light);
  color:var(--ink);
  text-decoration:none;
  transition:.18s ease;

  small{
    color:var(--red);
    font-family:"Cinzel",serif;
    font-size:.61rem;
    font-weight:700;
    letter-spacing:.14em;
    text-transform:uppercase;
  }

  strong{
    display:block;
    margin-top:9px;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.2rem,2.7vw,1.8rem);
    line-height:1.05;
  }

  span{
    display:block;
    margin-top:10px;
    font-family:"Cormorant Garamond",serif;
    font-size:1rem;
    font-weight:600;
  }

  &:hover{
    background:var(--paper);
  }
`;
function WinnerRoom() {
	const [candidate, setCandidate] = (0, import_react.useState)(4821);
	const [now, setNow] = (0, import_react.useState)(0);
	const drawTime = Date.parse(DRAW_AT);
	PUBLISHED_WINNERS.length;
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
	const remaining = drawTime && now ? Math.max(0, drawTime - now) : 0;
	Math.floor(remaining / 864e5);
	Math.floor(remaining / 36e5);
	Math.floor(remaining % 36e5 / 6e4);
	Math.floor(remaining % 6e4 / 1e3);
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The first tale" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "The Great Seven" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "Seven coins changed seven lives." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WinnerActions, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WinnerButton, {
				href: "https://x.com/onecoinrbh/status/2097349817420652725?s=20",
				target: "_blank",
				rel: "noreferrer",
				children: ["VIEW THE PUBLIC RECORD ", "↗"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WinnerSecondaryButton, {
				href: PROJECT.opensea,
				target: "_blank",
				rel: "noreferrer",
				children: ["VIEW THE COLLECTION ", "↗"]
			})] })
		] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreatSevenDetailsSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionHead, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The first collection" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "How the first game worked." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCopy, { children: "The first One Coin chapter was a collection of 10,000 NFTs on Robinhood Chain, minted through OpenSea for $1 each. Every NFT represented one separate chance in the final draw." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenFacts, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenFact, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "10,000" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total supply" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenFact, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "$1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mint price" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenFact, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "24H" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Trading window" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenFact, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Winning NFTs" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenFact, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "$7K" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paid to winners" })] })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenFlow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenStep, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreatSevenStepNo, { children: "I" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenStepBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "One dollar. One entry." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "10,000 One Coin NFTs were released on Robinhood Chain through OpenSea for $1 each. Every NFT counted as one individual entry in the final draw." })] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenStep, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreatSevenStepNo, { children: "II" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenStepBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "The coins could move." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Once the collection minted out, a 24-hour trading window began. Holders could keep their coins or trade them before the book closed." })] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenStep, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreatSevenStepNo, { children: "III" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenStepBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "The final owner held the chance." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At the end of the trading window, ownership was locked for the draw. The wallet holding each NFT at that final snapshot carried that coin's chance of winning." })] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenStep, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreatSevenStepNo, { children: "IV" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GreatSevenStepBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Fortune chose seven." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dice was used publicly to select seven unique winning NFT IDs. Each winning coin received $1,000. All seven rewards were sent — $7,000 in total." })] })] })
			] })
		] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			style: {
				padding: "80px 0 95px",
				borderTop: "2px solid var(--ink)",
				background: "var(--paper)"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						maxWidth: "850px",
						marginBottom: "42px"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "THE GREAT SEVEN" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: {
								margin: 0,
								color: "var(--lapis)",
								fontFamily: "\"Cinzel\", serif",
								fontSize: "clamp(3rem,7vw,5.8rem)",
								fontWeight: 700,
								lineHeight: .92
							},
							children: "Fortune chose seven."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								maxWidth: "650px",
								margin: "20px 0 0",
								fontFamily: "\"Cormorant Garamond\", serif",
								fontSize: "1.15rem",
								fontWeight: 600,
								lineHeight: 1.5
							},
							children: "These are the seven winning NFT IDs from the first One Coin draw. Each winning coin received $1,000."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "grid",
						gap: "14px"
					},
					children: [
						{
							roman: "I",
							id: "7230",
							tx: "0x214ec4264a4c2bebe7573a96c05e50c7de8c3fc0320210451feed9eeb82e9acf"
						},
						{
							roman: "II",
							id: "7381",
							tx: "0xeeef74b6979bfe09462f58380478c59d06f6ab31c58393c87a3fad04fca3530e"
						},
						{
							roman: "III",
							id: "4078",
							tx: "0x311ecc4002785723d810a641f2dc6190b4b66a7f2e49cc2a7dc0225b992ffdee"
						},
						{
							roman: "IV",
							id: "5729",
							tx: "0x837d5bd61b90d3645a5d4c3ac34e0dfee120b1bedd1002d591348cc026144894"
						},
						{
							roman: "V",
							id: "6040",
							tx: "0x2456430cf51cd76fe3224abc68add8446619ed153ed6af47e0495d09e161eb4c"
						},
						{
							roman: "VI",
							id: "7924",
							tx: "0xae905328b9c2dd0b0e1fa50129f3e72e49a23614b337b7b5126a603ff0ad7e2e"
						},
						{
							roman: "VII",
							id: "5414",
							tx: "0xd8cd5cf6a116f35b659a106686ac261ba731bbbdf6271c2c663cc5a64c2a476c"
						}
					].map((winner) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "100px 130px 150px minmax(0,1fr)",
							alignItems: "center",
							gap: "18px",
							padding: "22px 25px",
							border: "2px solid var(--ink)",
							background: "var(--light)",
							boxShadow: winner.roman === "II" || winner.roman === "IV" || winner.roman === "VI" ? "6px 7px 0 var(--red)" : "6px 7px 0 var(--lapis)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								style: {
									color: "var(--red)",
									fontFamily: "\"Cinzel\", serif",
									fontSize: ".62rem",
									fontWeight: 700,
									letterSpacing: ".12em"
								},
								children: ["FORTUNE ", winner.roman]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								style: {
									color: "var(--lapis)",
									fontFamily: "\"Cinzel\", serif",
									fontSize: "1.5rem"
								},
								children: ["#", winner.id]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									fontFamily: "\"Cinzel\", serif",
									fontSize: ".64rem",
									fontWeight: 700,
									color: "var(--red)",
									letterSpacing: ".07em"
								},
								children: "$1,000 SENT ✓"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://robinhoodchain.blockscout.com/tx/${winner.tx}`,
								target: "_blank",
								rel: "noreferrer",
								title: winner.tx,
								style: {
									minWidth: 0,
									overflow: "hidden",
									color: "var(--lapis)",
									fontFamily: "monospace",
									fontSize: ".72rem",
									fontWeight: 700,
									textDecoration: "underline",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap"
								},
								children: [winner.tx, " ↗"]
							})
						]
					}, winner.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						marginTop: "38px",
						padding: "32px",
						border: "2px solid var(--ink)",
						background: "var(--lapis)",
						boxShadow: "7px 8px 0 var(--red)",
						textAlign: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							color: "var(--pale-gold)",
							fontFamily: "\"Cinzel\", serif",
							fontSize: "clamp(3rem,7vw,5rem)",
							fontWeight: 700,
							lineHeight: .9
						},
						children: "$7,000"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							marginTop: "14px",
							color: "white",
							fontFamily: "\"Cinzel\", serif",
							fontSize: ".65rem",
							fontWeight: 700,
							letterSpacing: ".13em"
						},
						children: "7 WINNERS · 7 PAYOUTS · PAID IN FULL"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
						gap: "16px",
						marginTop: "34px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://x.com/DiceAgentRH/status/2097346750931443937",
						target: "_blank",
						rel: "noreferrer",
						style: {
							minHeight: "165px",
							padding: "28px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							border: "2px solid var(--ink)",
							background: "var(--light)",
							boxShadow: "6px 7px 0 var(--gold)",
							color: "var(--ink)",
							textDecoration: "none"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "var(--red)",
									fontFamily: "\"Cinzel\", serif",
									fontSize: ".6rem",
									fontWeight: 700,
									letterSpacing: ".14em"
								},
								children: "PROOF OF DRAW"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: {
									marginTop: "20px",
									color: "var(--lapis)",
									fontFamily: "\"Cinzel\", serif",
									fontSize: "1.45rem"
								},
								children: "Dice chose The Great Seven ↗"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									marginTop: "10px",
									fontFamily: "\"Cormorant Garamond\", serif",
									fontSize: "1rem",
									fontWeight: 600
								},
								children: "View the public Dice Agent draw."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://opensea.io/collection/onecoin",
						target: "_blank",
						rel: "noreferrer",
						style: {
							minHeight: "165px",
							padding: "28px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							border: "2px solid var(--ink)",
							background: "var(--light)",
							boxShadow: "6px 7px 0 var(--red)",
							color: "var(--ink)",
							textDecoration: "none"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "var(--red)",
									fontFamily: "\"Cinzel\", serif",
									fontSize: ".6rem",
									fontWeight: 700,
									letterSpacing: ".14em"
								},
								children: "ORIGINAL COLLECTION"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: {
									marginTop: "20px",
									color: "var(--lapis)",
									fontFamily: "\"Cinzel\", serif",
									fontSize: "1.45rem"
								},
								children: "One Coin on OpenSea ↗"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									marginTop: "10px",
									fontFamily: "\"Cormorant Garamond\", serif",
									fontSize: "1rem",
									fontWeight: 600
								},
								children: "View the original 10,000 One Coin NFTs."
							})
						]
					})]
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { WinnerRoom };
