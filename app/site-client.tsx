"use client";

import styled, { keyframes } from "styled-components";

const PROJECT = {
  twitter: "https://x.com/onecoinrbh",
  dice: "https://diceprotocol.world/",
};

const steps = [
  ["I", "Mint for one dollar", "10,000 NFTs drop on Robinhood Chain at $1 each. Every NFT is one entry in the final draw.", "03-how-it-works-01-mint", "Mint for one dollar illuminated artwork"],
  ["II", "Hold it or trade it", "Once the collection mints out, a 24-hour trading window begins. Buy, sell, or hold your entry until the window closes.", "04-how-it-works-02-entry", "Every NFT is one entry illuminated artwork"],
  ["III", "The book closes", "At the end of the 24 hours, ownership is locked for the draw. The owner of each NFT at that moment holds its chance.", "05-how-it-works-03-closes", "The final entry window closes illuminated artwork"],
  ["IV", "Seven winners are drawn", "Verifiable onchain randomness selects seven winning NFT IDs. Each winning entry receives $1,000.", "06-how-it-works-04-winner", "The winning entry illuminated artwork"],
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

const external = (href:string) => ({ href, target:"_blank", rel:"noreferrer" });

export default function OneCoinSite(){
  return <Page>
    <Edge aria-hidden="true" />
    <Container>
      <TopBar aria-label="Primary navigation"><Wordmark href="#top"><span>{"\u2726"}</span> One Coin</Wordmark><NavActions><NavLink href="/whitelist">Whitelist</NavLink><NavLink href="/winner">Winner room</NavLink><NavLink {...external(PROJECT.twitter)}>X {"\u2197"}</NavLink></NavActions></TopBar>
      <Hero id="top">
        <HeroGrid>
          <div>
            
            <Title>One dollar <span>can change</span> your life</Title>
            <HeroCopy>The first guaranteed 1000x mint.</HeroCopy>
            <ButtonRow><PrimaryButton {...external(PROJECT.twitter)}><span>X</span> Follow the drop</PrimaryButton></ButtonRow>
          </div>
          <HeroArt data-main-hero-art="true"><img src="/gallery/01-main-campaign-poster.webp" alt="One Dollar Can Change Your Life illuminated campaign poster" width="1200" height="1200" fetchPriority="high" /></HeroArt>
        </HeroGrid>
        
      </Hero>
    </Container>
    <Ticker aria-label="Project facts"><TickerInner><span><b>10,000</b><small>NFTs</small></span><span><b>$1</b><small>Each</small></span><span><b>7</b><small>Winners</small></span><span><b>$7,000</b><small>Total prize</small></span><span><b>24H</b><small>Trading window</small></span><span><b>Robinhood</b><small>Chain</small></span></TickerInner></Ticker>

    <PrizeSection><Container><PrizeGrid>
      <div><PrizeAmount>$7K</PrizeAmount><PrizeLine>Seven winners.<br/>$1,000 each.</PrizeLine><PrizeCopy>Seven winning NFT IDs are drawn after the trading window closes. The owner of each winning entry at the final snapshot receives the prize tied to it.</PrizeCopy></div>
      <PrizeArt><img src="/gallery/07-prize-poster.webp" alt="Seven thousand dollar prize illustrated as a medieval manuscript" width="1200" height="1200" loading="lazy"/></PrizeArt>
    </PrizeGrid></Container></PrizeSection>

    <Section id="how"><Container>
      <SectionHead><div><SectionTitle>Four steps. No mystery.</SectionTitle></div></SectionHead>
      <Steps>{steps.map(([number,title,body,image,alt])=><Step key={number}><StepImage src={`/gallery/${image}.webp`} alt={alt} width="1200" height="1200" loading="lazy"/><StepBody><StepNumber>Chapter {number}</StepNumber><StepTitle>{title}</StepTitle><StepCopy>{body}</StepCopy></StepBody></Step>)}</Steps>
    </Container></Section>

    <Section id="proof"><Container>
      <SectionHead><div><SectionTitle>Luck you can verify.</SectionTitle></div></SectionHead>
      <ProofGrid>
        <ProofCard><ProofIcon>R</ProofIcon><ProofTitle>Verifiable randomness by Dice Protocol</ProofTitle><ProofCopy>After the 24-hour trading window closes, the draw contract makes one randomness request to Dice Protocol. The returned value is used onchain to select seven unique winning NFT IDs. The request, result, winning IDs, and prize transfers can all be publicly verified.</ProofCopy><Contract {...external(PROJECT.dice)}>Visit Dice Protocol {"\u2197"}</Contract></ProofCard>
        <ProofCard><ProofIcon>7</ProofIcon><ProofTitle>The rules of the draw</ProofTitle><Rules>
          <Rule><b>1</b><span><strong>One NFT, one entry.</strong> Five NFTs in one wallet means five entries.</span></Rule>
          <Rule><b>2</b><span><strong>Ownership locks once.</strong> The final owner after the 24-hour window holds that NFT's chance.</span></Rule>
          <Rule><b>3</b><span><strong>Seven NFT IDs win.</strong> The contract result and prize transfers can be inspected publicly.</span></Rule>
        </Rules></ProofCard>
      </ProofGrid>
    </Container></Section>

    <Final><Container><FinalMark aria-hidden="true">{"\u2726"} {"\u2727"} {"\u2726"}</FinalMark><FinalTitle>May luck be in your favour.</FinalTitle><FinalButton {...external(PROJECT.twitter)}><span>X</span> Follow for the mint</FinalButton></Container></Final>
    <Footer><Container><FooterRow><Legal>To the fullest extent permitted by law, the project and its contributors are not liable for trading losses, NFT price changes, wallet compromise, failed transactions, third-party services, network interruptions, taxes, or unlawful participation. NFTs are not investments and may have no resale value. Eligibility, claim deadlines, prize distribution, and the official rules apply. By participating, you accept these risks and remain responsible for complying with local laws. Use only links published by the official account.</Legal><FooterLink {...external(PROJECT.twitter)}>Official X {"\u2197"}</FooterLink></FooterRow></Container></Footer>
  </Page>
}


