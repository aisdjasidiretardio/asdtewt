"use client";

import { useEffect, useState, type FormEvent } from "react";
import styled, { keyframes } from "styled-components";

import CandidateCarouselSection from "./candidate-carousel";
const PROJECT = {
  twitter: "https://x.com/onecoinrbh",
  dice: "https://diceprotocol.world/agent/",
};

// Leave this empty before mint-out. After mint-out, replace it with the
// exact mint-out time in UTC. The page adds 24 hours automatically.
// Example: "2026-09-01T18:00:00Z".
const MINT_OUT_AT = "";

// After the verified draw, add the seven NFT IDs here.
// Example: [147, 1220, 3066, 4781, 5902, 7440, 9811]
const PUBLISHED_WINNERS: number[] = [];

const CANDIDATE_IDS = [
  147,
  8221,
  4096,
  973,
  6510,
  2944,
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
];

const drift = keyframes`
  0%{transform:translateX(0)}
  100%{transform:translateX(-50%)}
`;

const breathe = keyframes`
  0%,100%{
    transform:translateY(0) rotate(-.6deg);
    box-shadow:12px 14px 0 #163e75;
  }
  50%{
    transform:translateY(-9px) rotate(.6deg);
    box-shadow:15px 18px 0 #163e75;
  }
`;

const reveal = keyframes`
  0%{opacity:0;transform:translateY(14px) scale(.94)}
  100%{opacity:1;transform:translateY(0) scale(1)}
`;

const shimmer = keyframes`
  0%,100%{opacity:.35}
  50%{opacity:1}
`;

const Page = styled.main`
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

const Edge = styled.div`
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

const Container = styled.div`
  width:min(1120px,calc(100% - 40px));
  margin:0 auto;

  @media(min-width:760px){
    width:min(1120px,calc(100% - 80px));
  }
`;

const TopBar = styled.nav`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:24px 0 10px;
`;

const Wordmark = styled.a`
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

const Nav = styled.div`
  display:flex;
  align-items:center;
  gap:clamp(10px,2.2vw,25px);
`;

const NavLink = styled.a`
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

const PortalFinal = styled.section`
  padding:90px 0 105px;
  border-top:2px solid var(--ink);
  background:var(--red);
  color:var(--light);
  text-align:center;
`;

const PortalFinalMark = styled.p`
  margin:0 0 20px;
  color:var(--pale-gold);
  font-size:1.4rem;
  letter-spacing:18px;
`;

const PortalFinalTitle = styled.h2`
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

const PortalFinalCopy = styled.p`
  max-width:590px;
  margin:0 auto 30px;
  color:rgba(247,236,201,.82);
  font-family:"Cormorant Garamond",serif;
  font-size:1.22rem;
  font-weight:600;
  line-height:1.5;
`;

const PortalFinalButton = styled.a`
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

const Footer = styled.footer`
  padding:28px 0 42px;
  background:var(--ink);
  color:rgba(247,236,201,.62);
  font-family:"Cormorant Garamond",serif;
  font-size:.79rem;
  line-height:1.5;
`;

const FooterRow = styled.div`
  display:grid;
  gap:17px;

  @media(min-width:720px){
    grid-template-columns:1fr auto;
    align-items:end;
  }
`;

const FooterLegal = styled.p`
  max-width:760px;
  margin:0;
`;

const FooterLink = styled.a`
  color:var(--pale-gold);
  letter-spacing:.08em;
  text-decoration:none;
  text-transform:uppercase;
`;

const Kicker = styled.p`
  margin:0 0 10px;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.18em;
  text-transform:uppercase;
`;

const Title = styled.h1`
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(2.8rem,12vw,7.4rem);
  font-weight:700;
  letter-spacing:.01em;
  line-height:.94;
  text-wrap:balance;
`;

const Lead = styled.p`
  max-width:660px;
  margin:22px auto 0;
  color:rgba(37,23,14,.78);
  font-family:"Cormorant Garamond",serif;
  font-size:clamp(1.15rem,4vw,1.45rem);
  font-weight:600;
  line-height:1.48;
`;

const StatusPill = styled.span`
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

const WhitelistMain = styled.section`
  min-height:calc(100svh - 76px);
  display:grid;
  align-items:center;
  padding:55px 0 90px;
  text-align:center;
`;

const Checker = styled.div`
  max-width:760px;
  margin:42px auto 0;
  padding:clamp(25px,6vw,54px);
  border:1px solid var(--ink);
  background:rgba(247,236,201,.67);
  box-shadow:9px 10px 0 var(--lapis);
  text-align:left;
`;

const CheckerLabel = styled.label`
  display:block;
  margin-bottom:9px;
  color:var(--ink);
  font-family:"Cinzel",serif;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.1em;
  text-transform:uppercase;
`;

const InputRow = styled.form`
  display:grid;
  gap:12px;

  @media(min-width:650px){
    grid-template-columns:1fr auto;
  }
`;

const WalletInput = styled.input`
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

const CheckButton = styled.button`
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

const CheckerStatus = styled.p`
  min-height:24px;
  margin:18px 0 0;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:1.05rem;
  font-weight:700;
  line-height:1.4;
`;

const Note = styled.p`
  margin:11px 0 0;
  color:rgba(37,23,14,.64);
  font-family:"Cormorant Garamond",serif;
  font-size:.9rem;
  font-weight:600;
  line-height:1.45;
`;

const WinnerHero = styled.section`
  padding:58px 0 48px;
  text-align:center;
`;

const DrawStatus = styled.div`
  margin:34px auto 0;
`;

const DrawMessage = styled.div`
  max-width:760px;
  margin:0 auto;
  padding:22px;
  border-top:1px solid var(--ink);
  border-bottom:1px solid var(--ink);
`;

const DrawLabel = styled.p`
  margin:0;
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:clamp(1rem,4vw,1.45rem);
  font-weight:700;
  letter-spacing:.04em;
  line-height:1.35;
`;

const Verify = styled.a`
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

const Countdown = styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:7px;
  max-width:720px;
  margin:0 auto;
`;

const TimeCell = styled.div`
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

const Promise = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  margin:35px auto 0;
  border:1px solid var(--ink);
  background:rgba(247,236,201,.55);
`;

const PromiseItem = styled.div`
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

const CandidateStage = styled.section`
  padding:55px 0 70px;
  background:var(--red);
  color:var(--light);
  text-align:center;
  border-top:2px solid var(--ink);
  border-bottom:2px solid var(--ink);
`;

const CandidateHeading = styled.h2`
  margin:0;
  color:var(--light);
  font-family:"Cinzel",serif;
  font-size:clamp(2rem,8vw,4.8rem);
  letter-spacing:.01em;
  line-height:1;
`;

const CandidateCard = styled.article`
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

const CardInner = styled.div`
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

const CardStar = styled.span`
  color:var(--red);
  font-size:2rem;
`;

const CardLabel = styled.span`
  margin-top:23px;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:.8rem;
  font-weight:700;
  letter-spacing:.18em;
  text-transform:uppercase;
`;

const CardNumber = styled.strong`
  margin-top:5px;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(2.5rem,12vw,5rem);
  letter-spacing:.04em;
  line-height:1;
`;

const CarouselWindow = styled.div`
  width:100%;
  overflow:hidden;
  border-top:1px solid rgba(247,236,201,.4);
  border-bottom:1px solid rgba(247,236,201,.4);
  padding:13px 0;
`;

const CarouselTrack = styled.div`
  display:flex;
  width:max-content;
  animation:${drift} 28s linear infinite;
`;

const MiniCard = styled.div`
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

const WinnersSection = styled.section`
  padding:78px 0 95px;
`;

const SectionHead = styled.div`
  text-align:center;
`;

const SectionTitle = styled.h2`
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(2rem,9vw,5rem);
  letter-spacing:.01em;
  line-height:1;
`;

const SectionCopy = styled.p`
  max-width:620px;
  margin:18px auto 0;
  color:rgba(37,23,14,.72);
  font-family:"Cormorant Garamond",serif;
  font-size:1.15rem;
  font-weight:600;
  line-height:1.45;
`;

const WinnerGrid = styled.div`
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

const WinnerSlot = styled.article`
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

function SiteHeader({
  current,
}: {
  current:"whitelist" | "winner";
}) {
  return (
    <Container>
      <TopBar aria-label="Primary navigation">
        <Wordmark href="/">
          <span>{"\u2726"}</span>
          One Coin
        </Wordmark>

        <Nav>
          <NavLink href="/">Home</NavLink>

          <NavLink
            href="/whitelist"
            aria-current={
              current === "whitelist"
                ? "page"
                : undefined
            }
          >
            Whitelist
          </NavLink>

          <NavLink
            href="/winner"
            aria-current={
              current === "winner"
                ? "page"
                : undefined
            }
          >
            Winner room
          </NavLink>
        </Nav>
      </TopBar>
    </Container>
  );
}

function SiteFooter() {
  return <>
    <PortalFinal>
      <Container>
        <PortalFinalMark aria-hidden="true">{"\u2726"} {"\u2727"} {"\u2726"}</PortalFinalMark>
        <PortalFinalTitle>May luck be in your favour.</PortalFinalTitle>
        <PortalFinalCopy>10,000 entries. Seven winners. One dollar is all it takes to be part of the story.
              {/* footerEntryExplainer */}
              <span
                style={{
                  display:"block",
                  marginTop:"12px",
                  fontSize:"clamp(.92rem, 1.15vw, 1.05rem)",
                  fontWeight:700,
                  lineHeight:1.5,
                  letterSpacing:".02em",
                  color:"inherit",
                  opacity:.88
                }}
              >
                One NFT = one entry. Five NFTs in one wallet =
                five separate entries in the draw.
              </span></PortalFinalCopy>
        <PortalFinalButton href={PROJECT.twitter} target="_blank" rel="noreferrer">
          <span>X</span> Follow for the mint
        </PortalFinalButton>
      </Container>
    </PortalFinal>

    <Footer>
      <Container>
        <FooterRow>
          <FooterLegal>To the fullest extent permitted by law, the project and its contributors are not liable for trading losses, NFT price changes, wallet compromise, failed transactions, third party services, network interruptions, taxes, or unlawful participation. NFTs are not investments and may have no resale value. Eligibility, claim deadlines, prize distribution, and the official rules apply. By participating, you accept these risks and remain responsible for complying with local laws. Use only links published by the official account.</FooterLegal>
          <FooterLink href={PROJECT.twitter} target="_blank" rel="noreferrer">
            Official X {"\u2197"}
          </FooterLink>
        </FooterRow>
      </Container>
    </Footer>
  </>;
}

function pad(value:number) {
  return value.toString().padStart(2,"0");
}

export function WhitelistChecker() {
  const [wallet,setWallet] = useState("");
  const [message,setMessage] = useState(
    "The checker is not live yet. No wallets are being stored."
  );

  function checkWallet(
    event:FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMessage(
      wallet.trim()
        ? "This wallet was not submitted. The whitelist checker is not live yet."
        : "Enter a wallet when the checker goes live."
    );
  }

  return (
    <Page>
      <Edge aria-hidden="true" />
      <SiteHeader current="whitelist" />

      <WhitelistMain>
        <Container>
          

          <Kicker>
            The royal list
          </Kicker>

          <Title>Whitelist checker</Title>

          

          <Checker>
            <CheckerLabel htmlFor="wallet">
              Wallet address
            </CheckerLabel>

            <InputRow onSubmit={checkWallet}>
              <WalletInput
                id="wallet"
                disabled
                aria-disabled="true"
                style={{
                  cursor:"not-allowed",
                  opacity:.58
                }}
                value={wallet}
                onChange={(event) =>
                  setWallet(event.target.value)
                }
                placeholder="0x..."
                autoComplete="off"
                spellCheck={false}
              />

              <CheckButton
                type="submit"
                disabled
                aria-disabled="true"
                style={{
                  cursor:"not-allowed",
                  opacity:.58
                }}
              >
                Check wallet
              </CheckButton>
            </InputRow>

            <CheckerStatus aria-live="polite">
              {message}
            </CheckerStatus>

            
          </Checker>

          <p
            style={{
              maxWidth:"720px",
              margin:"34px auto 0",
              color:"var(--red)",
              fontFamily:'"Cormorant Garamond", serif',
              fontSize:"clamp(1.05rem, 2.3vw, 1.28rem)",
              fontStyle:"italic",
              fontWeight:600,
              letterSpacing:".02em",
              lineHeight:1.5,
              textAlign:"center"
            }}
          >
            The royals keep no fixed hour. A sharp eye may yet find its name written within.
          </p>
        </Container>
      </WhitelistMain>

      <SiteFooter />
    </Page>
  );
}

export function WinnerRoom() {
  const [candidate,setCandidate] = useState(4821);
  const [now,setNow] = useState(0);

  const drawTime = MINT_OUT_AT
    ? Date.parse(MINT_OUT_AT) +
      24 * 60 * 60 * 1000
    : 0;

  const hasWinners =
    PUBLISHED_WINNERS.length === 7;

  useEffect(() => {
    let seed = 4821;

    const candidateTimer = window.setInterval(() => {
      seed = (seed * 9301 + 49297) % 10000;
      setCandidate(seed + 1);
    },950);

    const updateClock = () => {
      setNow(Date.now());
    };

    updateClock();

    const clockTimer = window.setInterval(
      updateClock,
      1000
    );

    return () => {
      window.clearInterval(candidateTimer);
      window.clearInterval(clockTimer);
    };
  },[]);

  const remaining =
    drawTime && now
      ? Math.max(0,drawTime - now)
      : 0;

  const days = Math.floor(
    remaining / 86400000
  );

  const hours = Math.floor(
    (remaining % 86400000) / 3600000
  );

  const minutes = Math.floor(
    (remaining % 3600000) / 60000
  );

  const seconds = Math.floor(
    (remaining % 60000) / 1000
  );

  const isCountdown = Boolean(
    drawTime &&
    now &&
    remaining > 0 &&
    !hasWinners
  );

  const isAwaitingDraw = Boolean(
    drawTime &&
    now &&
    remaining === 0 &&
    !hasWinners
  );


  /* winnerRevealObserver */
  useEffect(() => {
    const isTouchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;

    if (
      !isTouchDevice ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".winner-art-card"
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.6
          ) {
            entry.target.classList.add(
              "is-revealed"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold:[0.6]
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  },[]);

  return (
    <Page>
      <Edge aria-hidden="true" />
      <SiteHeader current="winner" />

      <WinnerHero>
        <Container>
          <Kicker>The draw room</Kicker>

          <Title>
            Seven doors.
            <br />
            Seven fortunes.
          </Title>

          <Lead>
            Seven winning NFTs receive $1,000 each.
            Every NFT is one entry, and every winning
            ID is worth 1,000x the $1 mint price.
          </Lead>

          <DrawStatus>
            {isCountdown ? (
              <Countdown
                aria-label="Time remaining until the draw"
              >
                <TimeCell>
                  <b>{pad(days)}</b>
                  <span>Days</span>
                </TimeCell>

                <TimeCell>
                  <b>{pad(hours)}</b>
                  <span>Hours</span>
                </TimeCell>

                <TimeCell>
                  <b>{pad(minutes)}</b>
                  <span>Minutes</span>
                </TimeCell>

                <TimeCell>
                  <b>{pad(seconds)}</b>
                  <span>Seconds</span>
                </TimeCell>
              </Countdown>
            ) : (
              <DrawMessage>
                <DrawLabel>
                  {hasWinners
                    ? "The seven winning IDs have been revealed."
                    : isAwaitingDraw
                      ? "The trading window is closed. The verified draw is next."
                      : "Winners will be selected 24 hours after mint-out."}
                </DrawLabel>

                <Verify
                  href={PROJECT.dice}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verifiable with Dice Protocol {"\u2197"}
                </Verify>
              </DrawMessage>
            )}
          </DrawStatus>

          <Promise>
            <PromiseItem>
              <b>7</b>
              Winning NFTs
            </PromiseItem>

            <PromiseItem>
              <b>$1,000</b>
              For each winner
            </PromiseItem>

            <PromiseItem>
              <b>1,000x</b>
              The mint price
            </PromiseItem>
          </Promise>
        </Container>
      </WinnerHero>

      <CandidateCarouselSection />

      <WinnersSection>
        <Container>
          <SectionHead>
            <Kicker>The final seven</Kicker>

            <SectionTitle>
              {hasWinners
                ? "The winners."
                : "The names remain sealed."}
            </SectionTitle>

            {hasWinners && (
            <SectionCopy className="winner-section-copy">
              Each winning ID and its owner can now be checked
              against the verified Dice result.
            </SectionCopy>
          )}
          </SectionHead>

          <style>{`
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
          `}</style>

          <style>{`
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
          `}</style>

          <style>{`
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
          `}</style>

          <style>{`
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
          `}</style>

          <WinnerGrid className="winner-art-grid">
            {hasWinners ? (
              <>
                {Array.from(
              {length:7},
              (_,index) => {
                const winner =
                  PUBLISHED_WINNERS[index];

                return (
                  <WinnerSlot key={index}>
                    <span>
                      Winner {index + 1}
                    </span>

                    <b>
                      {winner
                        ? `#${winner
                            .toString()
                            .padStart(4,"0")}`
                        : "SEALED"}
                    </b>

                    <small>
                      {winner
                        ? "$1,000 prize"
                        : "Awaiting draw"}
                    </small>
                  </WinnerSlot>
                );
              }
            )}
              </>
            ) : (
              [
          "/gallery/winner-1.png",
          "/gallery/winner-2.png",
          "/gallery/winner-3.png",
          "/gallery/winner-4.png",
          "/gallery/winner-5.png",
          "/gallery/winner-6.png",
          "/gallery/winner-7.png"
].map(
                (image, index) => (
                  <WinnerSlot
                    key={image}
                    className="winner-art-card"
                    tabIndex={0}
                    style={{
                      padding:0,
                      overflow:"hidden"
                    }}
                  >
                    <img
                      className="winner-card-art"
                      src={image}
                      alt={`Fortune card for winner ${index + 1}`}
                      loading={index < 2 ? "eager" : "lazy"}
                    />

                    <img
                      className="winner-card-cover"
                      src="/gallery/unrevealed.png"
                      alt="Sealed fortune card"
                      loading="eager"
                    />
                  </WinnerSlot>
                )
              )
            )}
          </WinnerGrid>
        </Container>
      </WinnersSection>

      <SiteFooter />
    </Page>
  );
}