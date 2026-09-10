"use client";

import styled, { keyframes } from "styled-components";

const PROJECT = {
  twitter: "https://x.com/onecoinrbh",
  dice: "https://diceprotocol.world/",
};

const steps = [
  ["I", "The summoning", "10,000 One Coin NFTs entered the kingdom on Robinhood Chain. One dollar opened the gates.", "03-how-it-works-01-mint", "Mint for one dollar illuminated artwork"],
  ["II", "The gates closed", "The entire collection minted out. Ten thousand coins had found their holders.", "04-how-it-works-02-entry", "Every NFT is one entry illuminated artwork"],
  ["III", "Fortune chose seven", "Seven winning NFT IDs were drawn publicly after the book closed.", "05-how-it-works-03-closes", "The final entry window closes illuminated artwork"],
  ["IV", "The promise was kept", "Seven winners received $1,000 each. $7,000 left the royal purse. Chapter I was complete.", "06-how-it-works-04-winner", "The winning entry illuminated artwork"],
] as const;

const gallery = [
  ["01-main-campaign-poster", "One Dollar Can Change Your Life campaign poster", "The campaign"],
  ["02-mint-information-card", "Mint information card", "The terms"],
  ["07-prize-poster", "Seven thousand dollar prize poster", "The prize"],
  ["13-transparency-graphic", "Onchain transparency artwork", "The proof"],
  ["16-meme-throne-celebration", "Medieval winner celebrating on a throne", "The feeling"],
] as const;

const float = keyframes`0%,100%{transform:translateY(0) rotate(1deg)}50%{transform:translateY(-10px) rotate(-1deg)}}`;
const glow = keyframes`0%,100%{opacity:.45;transform:translateY(0)}50%{opacity:1;transform:translateY(-7px)}}`;

const Page = styled.main`
  --lapis:#163e75;--deep:#0c2a53;--red:#9e332a;--gold:#d2a13c;--pale-gold:#f1ce72;
  --paper:#eadcad;--light:#f7ecc9;--ink:#25170e;
  position:relative;overflow:hidden;color:var(--ink);background:var(--paper);font-kerning:normal;text-rendering:optimizeLegibility;
  background-image:radial-gradient(circle at 20% 10%,rgba(255,255,255,.32),transparent 28%),radial-gradient(circle at 80% 85%,rgba(91,54,23,.12),transparent 30%),repeating-linear-gradient(97deg,rgba(80,52,22,.025) 0 1px,transparent 1px 5px);
`;
const Edge = styled.div`
  position:fixed;z-index:50;inset:8px;border:1px solid rgba(34,22,11,.52);pointer-events:none;
  &::after{content:"";position:absolute;inset:5px;border:1px solid rgba(210,161,60,.48)}
  @media(min-width:800px){inset:13px}
`;
const Container = styled.div`width:min(1180px,calc(100% - 40px));margin:0 auto;@media(min-width:760px){width:min(1180px,calc(100% - 80px))}`;
const TopBar = styled.nav`display:flex;align-items:center;justify-content:space-between;padding:24px 0 8px`;
const NavActions = styled.div`display:flex;align-items:center;gap:clamp(10px,2.2vw,25px);@media(max-width:520px){gap:8px;& a{font-size:.63rem;letter-spacing:.04em}}`;
const Wordmark = styled.a`
  display:inline-flex;align-items:center;gap:9px;color:var(--ink);font-family:"Cinzel",serif;font-size:.76rem;font-weight:700;letter-spacing:.11em;text-decoration:none;
  span{color:var(--red);font-size:1.15rem}
`;
const NavLink = styled.a`color:var(--ink);border-bottom:1px solid var(--ink);font-family:"Cormorant Garamond",serif;font-size:.9rem;font-weight:700;letter-spacing:.08em;text-decoration:none;text-transform:uppercase`;
const Hero = styled.section`min-height:calc(100svh - 55px);display:flex;flex-direction:column;justify-content:center;padding:40px 0 34px;position:relative`;
const HeroGrid = styled.div`display:grid;align-items:center;gap:34px;@media(min-width:880px){grid-template-columns:minmax(0,1.15fr) minmax(300px,.65fr);gap:64px}`;
const Eyebrow = styled.p`
  display:flex;align-items:center;gap:10px;margin:0 0 15px;color:var(--red);font-family:"Cormorant Garamond",serif;font-size:.82rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;
  &::before{content:"\\2726";color:var(--gold)}
`;
const Title = styled.h1`
  max-width:850px;margin:0;color:var(--lapis);font-family:"Cinzel",serif;font-size:clamp(3.35rem,15vw,8.6rem);font-weight:700;letter-spacing:.012em;word-spacing:.05em;line-height:.96;text-wrap:balance;
  span{display:block;margin:.13em 0 .08em;color:var(--red);font-size:.65em;letter-spacing:.03em}
`;
const HeroCopy = styled.p`max-width:560px;margin:25px 0 24px;color:rgba(37,23,14,.82);font-family:"Cormorant Garamond",serif;font-size:clamp(1.15rem,4.8vw,1.45rem);font-weight:600;line-height:1.42`;
const ButtonRow = styled.div`display:flex;flex-wrap:wrap;gap:12px`;
const PrimaryButton = styled.a`
  display:inline-flex;min-height:50px;align-items:center;justify-content:center;gap:11px;padding:0 22px;border:2px solid var(--ink);background:var(--lapis);box-shadow:5px 5px 0 var(--gold);color:var(--light);font-family:"Cinzel",serif;font-size:.72rem;font-weight:700;letter-spacing:.1em;line-height:1.35;text-align:center;text-decoration:none;text-transform:uppercase;transition:transform .2s,box-shadow .2s,background .2s;
  &:hover{transform:translate(2px,2px);box-shadow:3px 3px 0 var(--gold);background:var(--deep)}&:focus-visible{outline:3px solid var(--red);outline-offset:4px}
`;
const TextButton = styled.a`display:inline-flex;min-height:50px;align-items:center;padding:0 13px;color:var(--ink);font-family:"Cormorant Garamond",serif;font-size:1rem;font-weight:700;text-decoration:underline;text-underline-offset:5px`;
const HeroArt = styled.figure`
  position:relative;width:min(78vw,430px);aspect-ratio:1;margin:8px auto 0;padding:9px;border:2px solid var(--ink);border-radius:50%;background:var(--pale-gold);box-shadow:11px 12px 0 var(--lapis);animation:${float} 7s ease-in-out infinite;
  img{display:block;width:100%;height:100%;object-fit:contain;border:1px solid rgba(37,23,14,.8);border-radius:50%}
  &::before,&::after{position:absolute;color:var(--pale-gold);font-size:1.15rem;animation:${glow} 3s ease-in-out infinite}
  &::before{content:"\\2726";left:-28px;top:11%}&::after{content:"\\2727";right:-29px;bottom:18%;animation-delay:1.2s}
  @media(max-width:879px){width:min(74vw,340px)}
`;
const ScrollHint = styled.a`position:absolute;bottom:17px;left:0;color:rgba(37,23,14,.65);font-family:"Cormorant Garamond",serif;font-size:.72rem;font-weight:700;letter-spacing:.14em;text-decoration:none;text-transform:uppercase;@media(max-width:879px){display:none}`;
const Ticker = styled.div`overflow:hidden;border-top:2px solid var(--ink);border-bottom:1px solid rgba(241,206,114,.42);background:var(--lapis);color:var(--light)`;
const TickerInner = styled.div`
  display:grid;grid-template-columns:repeat(2,minmax(0,1fr));width:min(1180px,100%);margin:0 auto;font-family:"Cinzel",serif;text-align:center;
  span{display:flex;min-height:68px;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:12px 8px}
  span:nth-child(odd){border-right:1px solid rgba(241,206,114,.42)}
  span:nth-child(-n+4){border-bottom:1px solid rgba(241,206,114,.42)}
  b{color:var(--pale-gold);font-size:.95rem;letter-spacing:.075em;line-height:1}
  small{color:var(--light);font-family:"Cormorant Garamond",serif;font-size:.75rem;font-weight:700;letter-spacing:.15em;line-height:1;text-transform:uppercase}
  @media(min-width:760px){grid-template-columns:repeat(6,minmax(0,1fr));span{min-height:76px;border-right:1px solid rgba(241,206,114,.42);border-bottom:0}span:nth-child(-n+4){border-bottom:0}span:last-child{border-right:0}}
`;
const Section = styled.section`padding:92px 0;@media(min-width:800px){padding:130px 0}`;
const SectionHead = styled.div`display:grid;gap:18px;margin-bottom:42px;@media(min-width:780px){grid-template-columns:1fr .7fr;align-items:end}`;
const Kicker = styled.p`margin:0 0 8px;color:var(--red);font-family:"Cormorant Garamond",serif;font-size:.78rem;font-weight:700;letter-spacing:.18em;line-height:1.45;text-transform:uppercase`;
const SectionTitle = styled.h2`max-width:780px;margin:0;color:var(--lapis);font-family:"Cinzel",serif;font-size:clamp(2.2rem,10vw,5.7rem);letter-spacing:.01em;word-spacing:.06em;line-height:1.04`;
const SectionIntro = styled.p`max-width:480px;margin:0;color:rgba(37,23,14,.76);font-family:"Cormorant Garamond",serif;font-size:1.2rem;font-weight:600;line-height:1.52`;
const Steps = styled.div`display:grid;gap:18px;@media(min-width:760px){grid-template-columns:repeat(2,minmax(0,1fr))}`;
const Step = styled.article`
  display:grid;grid-template-columns:92px 1fr;gap:17px;padding:11px;border:1px solid rgba(37,23,14,.82);background:rgba(247,236,201,.6);box-shadow:5px 5px 0 rgba(158,51,42,.82);
  @media(min-width:500px){grid-template-columns:155px 1fr}
`;
const StepImage = styled.img`width:92px;aspect-ratio:1;object-fit:cover;border:1px solid rgba(37,23,14,.72);@media(min-width:500px){width:155px}`;
const StepBody = styled.div`padding:4px 5px 7px 0`;
const StepNumber = styled.span`color:var(--red);font-family:"Cinzel",serif;font-size:.75rem;font-weight:700;letter-spacing:.04em`;
const StepTitle = styled.h3`margin:8px 0;color:var(--lapis);font-family:"Cinzel",serif;font-size:clamp(1rem,4vw,1.28rem);letter-spacing:.02em;word-spacing:.08em;line-height:1.2`;
const StepCopy = styled.p`margin:0;color:rgba(37,23,14,.76);font-family:"Cormorant Garamond",serif;font-size:.98rem;font-weight:600;line-height:1.36`;
const PrizeSection = styled(Section)`
  position:relative;border-top:0;border-bottom:2px solid var(--ink);background:var(--lapis);color:var(--light);
  &::before,&::after{content:"\\2726  \\2727  \\2726";position:absolute;left:50%;transform:translateX(-50%);color:var(--pale-gold);letter-spacing:12px}&::before{top:20px}&::after{bottom:20px}
`;
const PrizeGrid = styled.div`display:grid;align-items:center;gap:45px;@media(min-width:820px){grid-template-columns:1.1fr .9fr}`;
const PrizeAmount = styled.p`margin:0;color:var(--pale-gold);font-family:"Cinzel",serif;font-size:clamp(4.2rem,20vw,10rem);font-weight:700;letter-spacing:-.01em;line-height:.88`;
const PrizeLine = styled.h2`margin:20px 0 18px;color:var(--light);font-family:"Cinzel",serif;font-size:clamp(1.55rem,6vw,3.3rem);letter-spacing:.02em;line-height:1.12`;
const PrizeCopy = styled.p`max-width:550px;margin:0;color:rgba(247,236,201,.78);font-family:"Cormorant Garamond",serif;font-size:1.2rem;font-weight:600;line-height:1.5`;
const PrizeArt = styled.figure`
  width:min(100%,430px);margin:0 auto;padding:9px;border:1px solid var(--pale-gold);background:var(--paper);box-shadow:10px 10px 0 var(--red);transform:rotate(1.5deg);
  img{display:block;width:100%;height:auto;border:1px solid var(--ink)}
`;
const ProofGrid = styled.div`display:grid;gap:22px;@media(min-width:820px){grid-template-columns:1fr 1fr;align-items:stretch}`;
const ProofCard = styled.article`padding:clamp(24px,6vw,48px);border:1px solid var(--ink);background:rgba(247,236,201,.64)`;
const ProofIcon = styled.div`display:grid;width:58px;height:58px;place-items:center;margin-bottom:26px;border:1px solid var(--ink);background:var(--red);box-shadow:4px 4px 0 var(--gold);color:var(--light);font-family:"Cinzel",serif;font-size:1.25rem`;
const ProofTitle = styled.h3`margin:0 0 13px;color:var(--lapis);font-family:"Cinzel",serif;font-size:clamp(1.4rem,5vw,2.1rem);letter-spacing:.01em;word-spacing:.05em;line-height:1.18`;
const ProofCopy = styled.p`margin:0 0 25px;color:rgba(37,23,14,.78);font-family:"Cormorant Garamond",serif;font-size:1.12rem;font-weight:600;line-height:1.5`;
const Contract = styled.a`display:inline-flex;align-items:center;gap:10px;color:var(--red);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.75rem;font-weight:700;overflow-wrap:anywhere;text-decoration-thickness:1px;text-underline-offset:5px;text-transform:uppercase`;
const Rules = styled.ul`display:grid;gap:16px;margin:0;padding:0;list-style:none`;
const Rule = styled.li`
  display:grid;grid-template-columns:42px 1fr;align-items:start;gap:13px;font-family:"Cormorant Garamond",serif;font-size:1.05rem;font-weight:600;line-height:1.4;
  b{display:grid;width:38px;height:38px;place-items:center;border-radius:50%;background:var(--lapis);color:var(--pale-gold);font-family:"Cinzel",serif;font-size:.65rem}
`;
const GallerySection = styled(Section)`padding-bottom:110px`;
const GalleryScroller = styled.div`
  display:grid;grid-auto-flow:column;grid-auto-columns:min(78vw,360px);gap:17px;width:100%;overflow-x:auto;padding:3px max(20px,calc((100vw - 1180px)/2)) 25px;scroll-padding-inline:20px;scroll-snap-type:x mandatory;scrollbar-color:var(--red) rgba(37,23,14,.12);scrollbar-width:thin;
  @media(min-width:760px){grid-auto-columns:min(38vw,420px)}
`;
const GalleryCard = styled.figure`
  scroll-snap-align:start;margin:0;padding:8px 8px 15px;border:1px solid var(--ink);background:var(--light);box-shadow:6px 7px 0 var(--lapis);
  img{display:block;width:100%;aspect-ratio:1;object-fit:cover;border:1px solid rgba(37,23,14,.7)}figcaption{padding:14px 6px 0;color:var(--red);font-family:"Cinzel",serif;font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase}
`;
const Swipe = styled.p`margin:15px 0 0;color:rgba(37,23,14,.62);font-family:"Cormorant Garamond",serif;font-size:.8rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase`;
const Final = styled.section`padding:90px 0 105px;border-top:2px solid var(--ink);background:var(--red);color:var(--light);text-align:center`;
const FinalMark = styled.p`margin:0 0 20px;color:var(--pale-gold);font-size:1.4rem;letter-spacing:18px`;
const FinalTitle = styled.h2`max-width:900px;margin:0 auto 22px;font-family:"Cinzel",serif;font-size:clamp(2.35rem,10vw,6.4rem);letter-spacing:.01em;word-spacing:.06em;line-height:1`;
const FinalCopy = styled.p`max-width:590px;margin:0 auto 30px;color:rgba(247,236,201,.82);font-family:"Cormorant Garamond",serif;font-size:1.22rem;font-weight:600;line-height:1.5`;
const FinalButton = styled(PrimaryButton)`background:var(--light);color:var(--lapis);box-shadow:5px 5px 0 var(--pale-gold);&:hover{background:white}`;
const Footer = styled.footer`padding:28px 0 42px;background:var(--ink);color:rgba(247,236,201,.62);font-family:"Cormorant Garamond",serif;font-size:.79rem;line-height:1.5`;
const FooterRow = styled.div`display:grid;gap:17px;@media(min-width:720px){grid-template-columns:1fr auto;align-items:end}`;
const Legal = styled.p`max-width:760px;margin:0`;
const FooterLink = styled.a`color:var(--pale-gold);text-decoration:none;text-transform:uppercase;letter-spacing:.08em`;


/* ============================================================
   POST-MINT ONE COIN LAYOUT
   Same visual identity. New composition.
   ============================================================ */

const ChapterHero = styled.section`
  position:relative;
  padding:clamp(62px,9vw,118px) 0 clamp(76px,10vw,130px);
  overflow:hidden;

  &::after{
    content:"I";
    position:absolute;
    right:-.04em;
    bottom:-.28em;
    z-index:0;
    color:rgba(158,51,42,.055);
    font-family:"Cinzel",serif;
    font-size:clamp(16rem,43vw,39rem);
    font-weight:700;
    line-height:1;
    pointer-events:none;
  }
`;

const ChapterHeroGrid = styled.div`
  position:relative;
  z-index:1;
  display:grid;
  align-items:center;
  gap:46px;

  @media(min-width:880px){
    grid-template-columns:minmax(0,1.25fr) minmax(300px,.75fr);
    gap:64px;
  }
`;

const ChapterLabel = styled.p`
  margin:0 0 20px;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:.82rem;
  font-weight:700;
  letter-spacing:.2em;
  text-transform:uppercase;
`;

const ChapterHeroTitle = styled.h1`
  max-width:900px;
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(3.25rem,10.5vw,8rem);
  font-weight:700;
  letter-spacing:.005em;
  line-height:.91;
  text-wrap:balance;

  span{
    display:block;
    margin-top:.08em;
    color:var(--red);
    font-size:.72em;
  }
`;

const ChapterHeroCopy = styled.p`
  max-width:610px;
  margin:27px 0 0;
  color:rgba(37,23,14,.79);
  font-family:"Cormorant Garamond",serif;
  font-size:clamp(1.15rem,2.3vw,1.48rem);
  font-weight:600;
  line-height:1.48;
`;

const ChapterActions = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:13px;
  margin-top:30px;
`;

const SecondaryAction = styled.a`
  display:inline-flex;
  min-height:50px;
  align-items:center;
  justify-content:center;
  padding:0 19px;
  border:1px solid var(--ink);
  color:var(--ink);
  font-family:"Cinzel",serif;
  font-size:.7rem;
  font-weight:700;
  letter-spacing:.09em;
  text-decoration:none;
  text-transform:uppercase;
  transition:.2s ease;

  &:hover{
    color:var(--red);
    transform:translateY(-2px);
  }
`;

const ChapterHeroArt = styled.figure`
  position:relative;
  width:min(100%,430px);
  margin:0 auto;
  padding:10px;
  border:2px solid var(--ink);
  background:var(--pale-gold);
  box-shadow:12px 13px 0 var(--lapis);
  transform:rotate(1.25deg);

  img{
    display:block;
    width:100%;
    height:auto;
    border:1px solid var(--ink);
  }

  &::before{
    content:"CHAPTER I — COMPLETE";
    position:absolute;
    right:-28px;
    bottom:30px;
    padding:10px 13px;
    border:1px solid var(--ink);
    background:var(--red);
    box-shadow:4px 5px 0 var(--gold);
    color:var(--light);
    font-family:"Cinzel",serif;
    font-size:.58rem;
    font-weight:700;
    letter-spacing:.12em;
    transform:rotate(-3deg);
  }

  @media(max-width:879px){
    width:min(82vw,390px);
  }
`;

const RecordSection = styled.section`
  position:relative;
  padding:clamp(80px,11vw,145px) 0;
  overflow:hidden;
  border-top:2px solid var(--ink);
  border-bottom:2px solid var(--ink);
  background:var(--lapis);
  color:var(--light);

  &::before{
    content:"✦";
    position:absolute;
    right:4%;
    top:-.18em;
    color:rgba(241,206,114,.09);
    font-size:clamp(12rem,32vw,32rem);
    line-height:1;
  }
`;

const RecordGrid = styled.div`
  position:relative;
  z-index:1;
  display:grid;
  align-items:center;
  gap:55px;

  @media(min-width:850px){
    grid-template-columns:1fr .82fr;
  }
`;

const RecordAmount = styled.div`
  color:var(--pale-gold);
  font-family:"Cinzel",serif;
  font-size:clamp(5.4rem,18vw,12rem);
  font-weight:700;
  letter-spacing:-.04em;
  line-height:.77;

  small{
    display:block;
    margin-top:24px;
    color:var(--light);
    font-family:"Cormorant Garamond",serif;
    font-size:clamp(1.3rem,3vw,2rem);
    font-weight:700;
    letter-spacing:.12em;
    line-height:1;
    text-transform:uppercase;
  }
`;

const RecordCopy = styled.div`
  padding:clamp(25px,4vw,44px);
  border:1px solid var(--pale-gold);
  background:rgba(12,42,83,.5);
  box-shadow:9px 10px 0 var(--red);

  h2{
    margin:0;
    color:var(--light);
    font-family:"Cinzel",serif;
    font-size:clamp(2rem,5vw,4.2rem);
    font-weight:700;
    line-height:1.03;
  }

  p{
    margin:20px 0 0;
    color:rgba(247,236,201,.82);
    font-family:"Cormorant Garamond",serif;
    font-size:1.2rem;
    font-weight:600;
    line-height:1.5;
  }
`;

const ChronicleSection = styled.section`
  padding:clamp(90px,11vw,145px) 0;
`;

const ChronicleHead = styled.div`
  display:grid;
  gap:20px;
  margin-bottom:55px;

  @media(min-width:800px){
    grid-template-columns:1.15fr .65fr;
    align-items:end;
  }
`;

const ChronicleIntro = styled.p`
  max-width:470px;
  margin:0;
  color:rgba(37,23,14,.72);
  font-family:"Cormorant Garamond",serif;
  font-size:1.2rem;
  font-weight:600;
  line-height:1.5;
`;

const ChronicleList = styled.div`
  border-top:2px solid var(--ink);
`;

const ChronicleRow = styled.article`
  display:grid;
  gap:22px;
  padding:26px 0;
  border-bottom:1px solid rgba(37,23,14,.6);

  @media(min-width:760px){
    grid-template-columns:150px minmax(0,1fr) 190px;
    align-items:center;
  }
`;

const ChronicleArt = styled.img`
  display:block;
  width:150px;
  aspect-ratio:1;
  object-fit:cover;
  border:1px solid var(--ink);
  background:var(--light);
  box-shadow:5px 6px 0 var(--red);

  @media(max-width:759px){
    width:110px;
  }
`;

const ChronicleBody = styled.div`
  h3{
    margin:0;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.55rem,3.5vw,2.8rem);
    font-weight:700;
    line-height:1.08;
  }

  p{
    max-width:650px;
    margin:11px 0 0;
    color:rgba(37,23,14,.72);
    font-family:"Cormorant Garamond",serif;
    font-size:1.08rem;
    font-weight:600;
    line-height:1.46;
  }
`;

const ChronicleNumber = styled.div`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.7rem;
  font-weight:700;
  letter-spacing:.14em;
  text-transform:uppercase;

  @media(min-width:760px){
    text-align:right;
  }
`;

const ProofSectionNew = styled.section`
  padding:clamp(85px,10vw,130px) 0;
  border-top:2px solid var(--ink);
  background:rgba(247,236,201,.38);
`;

const ProofRecordGrid = styled.div`
  display:grid;
  gap:18px;

  @media(min-width:780px){
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
`;

const ProofRecordCard = styled.article`
  position:relative;
  min-height:245px;
  padding:30px 27px;
  border:1px solid var(--ink);
  background:var(--light);
  box-shadow:6px 7px 0 var(--gold);

  &:nth-child(2){
    box-shadow:6px 7px 0 var(--red);
  }

  &:nth-child(3){
    background:var(--lapis);
    color:var(--light);
    box-shadow:6px 7px 0 var(--red);
  }

  span{
    display:block;
    margin-bottom:34px;
    color:var(--red);
    font-family:"Cinzel",serif;
    font-size:.67rem;
    font-weight:700;
    letter-spacing:.16em;
    text-transform:uppercase;
  }

  &:nth-child(3) span{
    color:var(--pale-gold);
  }

  strong{
    display:block;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(2.1rem,5vw,4rem);
    line-height:.95;
  }

  &:nth-child(3) strong{
    color:var(--pale-gold);
  }

  p{
    margin:18px 0 0;
    color:rgba(37,23,14,.72);
    font-family:"Cormorant Garamond",serif;
    font-size:1.05rem;
    font-weight:600;
    line-height:1.45;
  }

  &:nth-child(3) p{
    color:rgba(247,236,201,.8);
  }

  a{
    display:inline-block;
    margin-top:21px;
    color:inherit;
    font-family:"Cinzel",serif;
    font-size:.64rem;
    font-weight:700;
    letter-spacing:.09em;
    text-transform:uppercase;
  }
`;

const CourtSection = styled.section`
  padding:clamp(90px,11vw,145px) 0;
  overflow:hidden;
`;

const CourtGrid = styled.div`
  display:grid;
  border:2px solid var(--ink);
  background:var(--light);
  box-shadow:11px 12px 0 var(--red);

  @media(min-width:820px){
    grid-template-columns:.83fr 1.17fr;
  }
`;

const CourtArt = styled.div`
  min-height:360px;
  background:
    url("/gallery/16-meme-throne-celebration.webp")
    center / cover no-repeat;
  border-bottom:2px solid var(--ink);

  @media(min-width:820px){
    min-height:520px;
    border-right:2px solid var(--ink);
    border-bottom:0;
  }
`;

const CourtContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:clamp(35px,7vw,74px);

  h2{
    margin:0;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(2.4rem,6vw,5.5rem);
    font-weight:700;
    line-height:.98;
  }

  h2 span{
    display:block;
    margin-top:.08em;
    color:var(--red);
  }

  p{
    max-width:590px;
    margin:24px 0 0;
    color:rgba(37,23,14,.75);
    font-family:"Cormorant Garamond",serif;
    font-size:1.18rem;
    font-weight:600;
    line-height:1.52;
  }
`;

const SealedSection = styled.section`
  position:relative;
  padding:clamp(100px,14vw,185px) 0;
  overflow:hidden;
  border-top:2px solid var(--ink);
  background:var(--red);
  color:var(--light);
  text-align:center;

  &::before{
    content:"II";
    position:absolute;
    left:50%;
    top:50%;
    color:rgba(247,236,201,.055);
    font-family:"Cinzel",serif;
    font-size:clamp(18rem,55vw,48rem);
    font-weight:700;
    line-height:.7;
    transform:translate(-50%,-50%);
  }
`;

const SealedInner = styled.div`
  position:relative;
  z-index:1;
  max-width:1040px;
  margin:0 auto;
`;

const SealedLabel = styled.p`
  margin:0 0 22px;
  color:var(--pale-gold);
  font-family:"Cormorant Garamond",serif;
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.22em;
  text-transform:uppercase;
`;

const SealedTitle = styled.h2`
  margin:0;
  color:var(--light);
  font-family:"Cinzel",serif;
  font-size:clamp(3rem,9vw,7.4rem);
  font-weight:700;
  letter-spacing:.005em;
  line-height:.91;
`;

const SealedCopy = styled.p`
  max-width:620px;
  margin:28px auto 0;
  color:rgba(247,236,201,.82);
  font-family:"Cormorant Garamond",serif;
  font-size:clamp(1.15rem,2.5vw,1.45rem);
  font-weight:600;
  line-height:1.52;
`;

const Seal = styled.div`
  width:100px;
  height:100px;
  display:grid;
  place-items:center;
  margin:38px auto;
  border:2px solid var(--pale-gold);
  border-radius:50%;
  color:var(--pale-gold);
  font-family:"Cinzel",serif;
  font-size:2.2rem;
  transform:rotate(-7deg);

  &::after{
    content:"SEALED";
    position:absolute;
    margin-top:135px;
    color:var(--pale-gold);
    font-size:.57rem;
    font-weight:700;
    letter-spacing:.2em;
  }
`;

const external = (href:string) => ({ href, target:"_blank", rel:"noreferrer" });

export default function OneCoinSite(){
  return (
    <Page>
      <Edge aria-hidden="true" />

      <ChapterHero id="top">
        <Container>
          <ChapterHeroGrid>

            <div>
              <ChapterLabel>Chapter I · Complete</ChapterLabel>

              <ChapterHeroTitle>
                The first game is over.
                <span>The kingdom isn't.</span>
              </ChapterHeroTitle>

              <ChapterHeroCopy>
                10,000 coins found their holders. Seven fortunes were chosen.
                $7,000 was sent. The first chapter is written — and the gates
                remain open.
              </ChapterHeroCopy>

              <ChapterActions>
                <PrimaryButton href="/winner">
                  View the final seven
                </PrimaryButton>

                <SecondaryAction
                  {...external(PROJECT.twitter)}
                >
                  Follow Chapter II {"\u2197"}
                </SecondaryAction>
              </ChapterActions>
            </div>

            <ChapterHeroArt>
              <img
                src="/gallery/01-main-campaign-poster.webp"
                alt="One Coin illuminated campaign artwork"
                width="1200"
                height="1200"
              />
            </ChapterHeroArt>

          </ChapterHeroGrid>
        </Container>
      </ChapterHero>

      <Ticker aria-label="Chapter I record">
        <TickerInner>
          <span><b>10,000</b><small>Minted</small></span>
          <span><b>$1</b><small>Original mint</small></span>
          <span><b>7</b><small>Winners</small></span>
          <span><b>$7,000</b><small>Sent</small></span>
          <span><b>7 / 7</b><small>Paid</small></span>
          <span><b>Robinhood</b><small>Chain</small></span>
        </TickerInner>
      </Ticker>

      <RecordSection>
        <Container>
          <RecordGrid>

            <RecordAmount>
              $7K
              <small>left the royal purse.</small>
            </RecordAmount>

            <RecordCopy>
              <ChapterLabel style={{color:"var(--pale-gold)"}}>
                The promise was kept
              </ChapterLabel>

              <h2>Seven winners. Every reward sent.</h2>

              <p>
                One Coin began with a one-dollar mint and ended its first
                game exactly as promised: seven holders received $1,000 each.
                The first chapter is complete.
              </p>

              <ChapterActions>
                <PrimaryButton
                  href="/winner"
                  style={{
                    background:"var(--light)",
                    color:"var(--lapis)"
                  }}
                >
                  Enter Winner Chamber
                </PrimaryButton>
              </ChapterActions>
            </RecordCopy>

          </RecordGrid>
        </Container>
      </RecordSection>

      <ChronicleSection id="chronicle">
        <Container>

          <ChronicleHead>
            <div>
              <Kicker>The first chronicle</Kicker>

              <SectionTitle>
                Four moments built the kingdom.
              </SectionTitle>
            </div>

            <ChronicleIntro>
              No instructions remain here. These are the events that already
              happened — the permanent first chapter of One Coin.
            </ChronicleIntro>
          </ChronicleHead>

          <ChronicleList>

            <ChronicleRow>
              <ChronicleArt
                src="/gallery/03-how-it-works-01-mint.webp"
                alt=""
              />

              <ChronicleBody>
                <h3>The gates opened.</h3>
                <p>
                  One Coin entered Robinhood Chain at one dollar each.
                  Ten thousand coins were placed before the kingdom.
                </p>
              </ChronicleBody>

              <ChronicleNumber>Chapter I</ChronicleNumber>
            </ChronicleRow>

            <ChronicleRow>
              <ChronicleArt
                src="/gallery/04-how-it-works-02-entry.webp"
                alt=""
              />

              <ChronicleBody>
                <h3>10,000 found their holders.</h3>
                <p>
                  The collection minted out. The first game was no longer
                  a promise — the kingdom had filled.
                </p>
              </ChronicleBody>

              <ChronicleNumber>Chapter II</ChronicleNumber>
            </ChronicleRow>

            <ChronicleRow>
              <ChronicleArt
                src="/gallery/05-how-it-works-03-closes.webp"
                alt=""
              />

              <ChronicleBody>
                <h3>Fortune chose seven.</h3>
                <p>
                  After the trading window closed, seven winning NFT IDs
                  were chosen publicly with Dice.
                </p>
              </ChronicleBody>

              <ChronicleNumber>Chapter III</ChronicleNumber>
            </ChronicleRow>

            <ChronicleRow>
              <ChronicleArt
                src="/gallery/06-how-it-works-04-winner.webp"
                alt=""
              />

              <ChronicleBody>
                <h3>The royal purse opened.</h3>
                <p>
                  Seven $1,000 rewards were sent. $7,000 was distributed.
                  Every winner was paid.
                </p>
              </ChronicleBody>

              <ChronicleNumber>Chapter IV</ChronicleNumber>
            </ChronicleRow>

          </ChronicleList>

        </Container>
      </ChronicleSection>

      <ProofSectionNew>
        <Container>

          <ChronicleHead>
            <div>
              <Kicker>Nothing disappears</Kicker>
              <SectionTitle>The proof remains.</SectionTitle>
            </div>

            <ChronicleIntro>
              Chapter I is finished, but the public record stays behind.
            </ChronicleIntro>
          </ChronicleHead>

          <ProofRecordGrid>

            <ProofRecordCard>
              <span>The draw</span>
              <strong>Dice</strong>
              <p>
                The seven fortunes were selected publicly using Dice.
              </p>
              <a
                href={PROJECT.dice}
                target="_blank"
                rel="noreferrer"
              >
                View Dice {"\u2197"}
              </a>
            </ProofRecordCard>

            <ProofRecordCard>
              <span>The royal purse</span>
              <strong>7 / 7</strong>
              <p>
                Every one of the seven $1,000 rewards was sent.
              </p>
              <a href="/winner">
                See the final seven {"\u2192"}
              </a>
            </ProofRecordCard>

            <ProofRecordCard>
              <span>The first chapter</span>
              <strong>$7,000</strong>
              <p>
                Distributed from a collection that began at one dollar.
              </p>
              <a
                href="https://x.com/onecoinrbh"
                target="_blank"
                rel="noreferrer"
              >
                Public record on X {"\u2197"}
              </a>
            </ProofRecordCard>

          </ProofRecordGrid>
        </Container>
      </ProofSectionNew>

      <CourtSection>
        <Container>

          <CourtGrid>

            <CourtArt />

            <CourtContent>
              <Kicker>The Inner Court</Kicker>

              <h2>
                The draw ended.
                <span>The holders stayed.</span>
              </h2>

              <p>
                One Coin was never meant to disappear after seven names were
                chosen. Holders are gathering inside the kingdom while the
                next chapter is prepared.
              </p>

              <p>
                If you still hold a coin, keep it close.
              </p>

              <ChapterActions>
                <PrimaryButton
                  {...external(PROJECT.twitter)}
                >
                  Enter through X {"\u2197"}
                </PrimaryButton>

                <SecondaryAction
                  href="https://opensea.io/collection/onecoin"
                  target="_blank"
                  rel="noreferrer"
                >
                  View collection {"\u2197"}
                </SecondaryAction>
              </ChapterActions>
            </CourtContent>

          </CourtGrid>

        </Container>
      </CourtSection>

      <SealedSection>
        <Container>
          <SealedInner>

            <SealedLabel>Chapter II · Sealed</SealedLabel>

            <SealedTitle>
              The kingdom was never built for seven.
            </SealedTitle>

            <SealedCopy>
              The first game rewarded seven. The next chapter reaches
              further. Something new is being forged on Robinhood Chain.
              Nothing will be promised before it is ready.
            </SealedCopy>

            <Seal>{"\u2726"}</Seal>

            <FinalButton
              {...external(PROJECT.twitter)}
            >
              <span>X</span> Follow the next chapter
            </FinalButton>

          </SealedInner>
        </Container>
      </SealedSection>

      <Footer>
        <Container>
          <FooterRow>

            <Legal>
              Chapter I is complete. NFTs are not investments and may have no
              resale value. The project and its contributors are not liable
              for NFT price changes, trading losses, wallet compromise,
              failed transactions, third-party services, network
              interruptions, taxes, or unlawful participation. Use only links
              published by the official One Coin account.
            </Legal>

            <FooterLink
              {...external(PROJECT.twitter)}
            >
              Official X {"\u2197"}
            </FooterLink>

          </FooterRow>
        </Container>
      </Footer>

    </Page>
  );
}