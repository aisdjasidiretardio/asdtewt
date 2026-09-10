"use client";

import Link from "next/link";
import styled from "styled-components";

const X = "https://x.com/onecoinrbh";
const OPENSEA = "https://opensea.io/collection/onecoin";

const Page = styled.main`
  --ink:#25170e;
  --paper:#f7ecc9;
  --paper2:#efe0b6;
  --lapis:#163e75;
  --red:#9e332a;
  --gold:#c0923d;
  --pale:#f1ce72;

  min-height:100vh;
  overflow:hidden;
  color:var(--ink);
  background:
    radial-gradient(circle at 22% 0%,rgba(255,255,255,.5),transparent 34%),
    var(--paper);
`;

const Container = styled.div`
  width:min(1360px,calc(100% - 42px));
  margin:0 auto;
`;

const Kicker = styled.p`
  margin:0 0 18px;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:.82rem;
  font-weight:700;
  letter-spacing:.2em;
  text-transform:uppercase;
`;

const Hero = styled.section`
  position:relative;
  padding:clamp(70px,9vw,125px) 0 clamp(90px,11vw,150px);

  &::before{
    content:"✦";
    position:absolute;
    right:-4vw;
    top:-12vw;
    color:rgba(158,51,42,.055);
    font-size:clamp(22rem,48vw,45rem);
    line-height:1;
    pointer-events:none;
  }
`;

const HeroGrid = styled.div`
  position:relative;
  z-index:1;
  display:grid;
  align-items:center;
  gap:60px;

  @media(min-width:900px){
    grid-template-columns:1.18fr .82fr;
  }
`;

const Title = styled.h1`
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(4.7rem,14vw,11rem);
  font-weight:700;
  letter-spacing:-.04em;
  line-height:.76;

  span{
    display:block;
    margin-top:.2em;
    color:var(--red);
    font-family:"Cormorant Garamond",serif;
    font-size:.33em;
    font-style:italic;
    letter-spacing:0;
    line-height:1.05;
  }
`;

const Lead = styled.p`
  max-width:720px;
  margin:35px 0 0;
  font-family:"Cormorant Garamond",serif;
  font-size:clamp(1.25rem,2.4vw,1.65rem);
  font-weight:600;
  line-height:1.45;
`;

const StrongLead = styled.strong`
  color:var(--lapis);
`;

const Actions = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:13px;
  margin-top:32px;
`;

const Primary = styled(Link)`
  display:inline-flex;
  min-height:52px;
  align-items:center;
  justify-content:center;
  padding:0 21px;
  border:2px solid var(--ink);
  background:var(--lapis);
  box-shadow:5px 6px 0 var(--red);
  color:white;
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.09em;
  text-decoration:none;
  text-transform:uppercase;
  transition:.18s ease;

  &:hover{
    transform:translate(2px,2px);
    box-shadow:3px 4px 0 var(--red);
  }
`;

const Secondary = styled(Link)`
  display:inline-flex;
  min-height:52px;
  align-items:center;
  justify-content:center;
  padding:0 21px;
  border:2px solid var(--ink);
  background:transparent;
  color:var(--ink);
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.09em;
  text-decoration:none;
  text-transform:uppercase;

  &:hover{
    color:var(--red);
  }
`;

const External = styled.a`
  display:inline-flex;
  min-height:52px;
  align-items:center;
  justify-content:center;
  padding:0 21px;
  border:2px solid var(--ink);
  background:transparent;
  color:var(--ink);
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.09em;
  text-decoration:none;
  text-transform:uppercase;

  &:hover{
    color:var(--red);
  }
`;

const HeroArt = styled.figure`
  position:relative;
  width:min(100%,465px);
  margin:0 auto;
  padding:10px;
  border:2px solid var(--ink);
  background:var(--paper2);
  box-shadow:13px 14px 0 var(--lapis);
  transform:rotate(1.2deg);

  img{
    display:block;
    width:100%;
    height:auto;
    border:1px solid var(--ink);
  }

  &::after{
    content:"THE GREAT HALL";
    position:absolute;
    right:-24px;
    bottom:30px;
    padding:10px 14px;
    border:1px solid var(--ink);
    background:var(--red);
    box-shadow:4px 5px 0 var(--gold);
    color:white;
    font-family:"Cinzel",serif;
    font-size:.57rem;
    font-weight:700;
    letter-spacing:.14em;
  }
`;

const Facts = styled.section`
  border-top:2px solid var(--ink);
  border-bottom:2px solid var(--ink);
  background:var(--lapis);
`;

const FactGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(5,1fr);

  @media(max-width:800px){
    grid-template-columns:repeat(2,1fr);
  }
`;

const Fact = styled.div`
  min-height:145px;
  padding:28px 24px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  border-right:1px solid rgba(247,236,201,.28);

  &:last-child{
    border-right:0;
  }

  b{
    color:var(--pale);
    font-family:"Cinzel",serif;
    font-size:clamp(1.9rem,4.2vw,3.6rem);
    line-height:1;
  }

  span{
    color:rgba(255,255,255,.82);
    font-family:"Cormorant Garamond",serif;
    font-size:.72rem;
    font-weight:700;
    letter-spacing:.13em;
    text-transform:uppercase;
  }

  @media(max-width:800px){
    border-bottom:1px solid rgba(247,236,201,.28);

    &:last-child{
      grid-column:1 / -1;
    }
  }
`;

const Section = styled.section`
  padding:clamp(90px,11vw,145px) 0;
`;

const SectionHead = styled.div`
  display:grid;
  gap:24px;
  margin-bottom:55px;

  @media(min-width:850px){
    grid-template-columns:1.15fr .65fr;
    align-items:end;
  }
`;

const H2 = styled.h2`
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(2.9rem,7vw,6.7rem);
  font-weight:700;
  letter-spacing:-.035em;
  line-height:.92;

  span{
    color:var(--red);
  }
`;

const Intro = styled.p`
  max-width:540px;
  margin:0;
  font-family:"Cormorant Garamond",serif;
  font-size:1.22rem;
  font-weight:600;
  line-height:1.5;
`;

const Pillars = styled.div`
  display:grid;
  gap:18px;

  @media(min-width:780px){
    grid-template-columns:repeat(3,1fr);
  }
`;

const Pillar = styled.article`
  min-height:310px;
  padding:32px;
  position:relative;
  border:2px solid var(--ink);
  background:#fff8e4;
  box-shadow:7px 8px 0 var(--lapis);

  &:nth-child(2){
    box-shadow:7px 8px 0 var(--red);
  }

  &:nth-child(3){
    box-shadow:7px 8px 0 var(--gold);
  }

  small{
    display:block;
    color:var(--red);
    font-family:"Cinzel",serif;
    font-size:.64rem;
    font-weight:700;
    letter-spacing:.15em;
    text-transform:uppercase;
  }

  strong{
    display:block;
    margin-top:65px;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.7rem,3vw,2.5rem);
    line-height:1;
  }

  p{
    margin:18px 0 0;
    font-family:"Cormorant Garamond",serif;
    font-size:1.1rem;
    font-weight:600;
    line-height:1.45;
  }
`;

const GameSection = styled.section`
  padding:clamp(90px,12vw,155px) 0;
  border-top:2px solid var(--ink);
  border-bottom:2px solid var(--ink);
  background:var(--red);
  color:white;
`;

const GameGrid = styled.div`
  display:grid;
  align-items:center;
  gap:58px;

  @media(min-width:880px){
    grid-template-columns:.85fr 1.15fr;
  }
`;

const GameArt = styled.figure`
  margin:0;
  padding:9px;
  border:2px solid var(--ink);
  background:var(--paper);
  box-shadow:12px 13px 0 var(--gold);
  transform:rotate(-1deg);

  img{
    width:100%;
    display:block;
    border:1px solid var(--ink);
  }
`;

const GameCopy = styled.div`
  h2{
    margin:0;
    color:var(--pale);
    font-family:"Cinzel",serif;
    font-size:clamp(3.1rem,8vw,7rem);
    font-weight:700;
    letter-spacing:-.04em;
    line-height:.86;
  }

  h3{
    margin:25px 0 0;
    color:white;
    font-family:"Cormorant Garamond",serif;
    font-size:clamp(1.8rem,4vw,3.1rem);
    font-style:italic;
    line-height:1;
  }

  p{
    max-width:630px;
    margin:24px 0 0;
    color:rgba(255,255,255,.84);
    font-family:"Cormorant Garamond",serif;
    font-size:1.22rem;
    font-weight:600;
    line-height:1.5;
  }
`;

const Court = styled.section`
  padding:clamp(90px,11vw,145px) 0;
`;

const CourtGrid = styled.div`
  display:grid;
  overflow:hidden;
  border:2px solid var(--ink);
  background:#fff8e4;
  box-shadow:11px 12px 0 var(--lapis);

  @media(min-width:850px){
    grid-template-columns:1fr 1fr;
  }
`;

const CourtArt = styled.div`
  min-height:420px;
  background:url("/gallery/16-meme-throne-celebration.webp") center/cover no-repeat;
  border-bottom:2px solid var(--ink);

  @media(min-width:850px){
    min-height:560px;
    border-right:2px solid var(--ink);
    border-bottom:0;
  }
`;

const CourtCopy = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:clamp(38px,7vw,78px);

  h2{
    margin:0;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(2.7rem,6vw,5.6rem);
    line-height:.92;
  }

  h2 span{
    display:block;
    margin-top:.12em;
    color:var(--red);
  }

  p{
    max-width:580px;
    margin:25px 0 0;
    font-family:"Cormorant Garamond",serif;
    font-size:1.2rem;
    font-weight:600;
    line-height:1.5;
  }
`;

const Final = styled.section`
  position:relative;
  overflow:hidden;
  padding:clamp(110px,15vw,195px) 0;
  border-top:2px solid var(--ink);
  background:var(--lapis);
  color:white;
  text-align:center;

  &::before{
    content:"✦";
    position:absolute;
    left:50%;
    top:50%;
    color:rgba(241,206,114,.07);
    font-size:clamp(24rem,65vw,60rem);
    line-height:.7;
    transform:translate(-50%,-50%);
  }
`;

const FinalInner = styled.div`
  position:relative;
  z-index:1;
  max-width:1000px;
  margin:0 auto;

  h2{
    margin:0;
    color:var(--pale);
    font-family:"Cinzel",serif;
    font-size:clamp(3rem,8vw,7.2rem);
    line-height:.9;
  }

  p{
    max-width:630px;
    margin:28px auto 0;
    color:rgba(255,255,255,.8);
    font-family:"Cormorant Garamond",serif;
    font-size:1.25rem;
    font-weight:600;
    line-height:1.5;
  }
`;

const Seal = styled.div`
  width:100px;
  height:100px;
  margin:42px auto;
  display:grid;
  place-items:center;
  border:2px solid var(--pale);
  border-radius:50%;
  color:var(--pale);
  font-family:"Cinzel",serif;
  font-size:2rem;
  transform:rotate(-8deg);
`;

const LightButton = styled(Link)`
  display:inline-flex;
  min-height:52px;
  align-items:center;
  justify-content:center;
  padding:0 22px;
  border:2px solid var(--pale);
  color:var(--pale);
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.09em;
  text-decoration:none;
  text-transform:uppercase;
`;

const Footer = styled.footer`
  padding:42px 0;
  background:#181009;
  color:rgba(255,255,255,.62);
`;

const FooterRow = styled.div`
  display:flex;
  justify-content:space-between;
  gap:35px;

  @media(max-width:720px){
    flex-direction:column;
  }

  p{
    max-width:850px;
    margin:0;
    font-family:"Cormorant Garamond",serif;
    font-size:.95rem;
    line-height:1.5;
  }

  a{
    color:var(--pale);
    font-family:"Cinzel",serif;
    font-size:.65rem;
    font-weight:700;
    letter-spacing:.1em;
    text-decoration:none;
    text-transform:uppercase;
    white-space:nowrap;
  }
`;

export default function OneCoinSite(){
  return (
    <Page>

      <Hero>
        <Container>
          <HeroGrid>

            <div>
              <Kicker>The Great Hall</Kicker>

              <Title>
                ONE COIN
                <span>One coin can change your life.</span>
              </Title>

              <Lead>
                One Coin is an onchain kingdom built around simple games,
                public outcomes and real rewards on Robinhood Chain.
              </Lead>

              <Lead>
                The first game began with <StrongLead>10,000 one-dollar NFTs</StrongLead>.
                Seven holders walked away with <StrongLead>$1,000 each.</StrongLead>
              </Lead>

              <Lead>
                <StrongLead>And that was only the first chapter.</StrongLead>
              </Lead>

              <Actions>
                <Primary href="/winner">Enter The Great Seven</Primary>
                <Secondary href="/scroll">Read The Royal Scroll</Secondary>
              </Actions>
            </div>

            <HeroArt>
              <img
                src="/gallery/01-main-campaign-poster.webp"
                alt="One Coin illuminated manuscript"
              />
            </HeroArt>

          </HeroGrid>
        </Container>
      </Hero>

      <Facts>
        <Container>
          <FactGrid>
            <Fact><b>10,000</b><span>First collection</span></Fact>
            <Fact><b>$1</b><span>Original mint</span></Fact>
            <Fact><b>7</b><span>First winners</span></Fact>
            <Fact><b>$7,000</b><span>Paid</span></Fact>
            <Fact><b>RBH</b><span>Home of the kingdom</span></Fact>
          </FactGrid>
        </Container>
      </Facts>

      <Section>
        <Container>

          <SectionHead>
            <div>
              <Kicker>What is One Coin?</Kicker>
              <H2>
                A kingdom built
                <br/>
                <span>one game at a time.</span>
              </H2>
            </div>

            <Intro>
              One Coin started with one simple experiment:
              10,000 coins, one dollar each, seven fortunes.
              The collection minted out, the draw was completed publicly,
              and every winner was paid. Now the kingdom continues.
            </Intro>
          </SectionHead>

          <Pillars>

            <Pillar>
              <small>I · One Coin</small>
              <strong>Simple ideas.</strong>
              <p>
                Every chapter begins with a concept people can understand
                without reading twenty pages of rules.
              </p>
            </Pillar>

            <Pillar>
              <small>II · Public Fate</small>
              <strong>Outcomes visible.</strong>
              <p>
                The first draw happened publicly and the rewards were
                distributed in full.
              </p>
            </Pillar>

            <Pillar>
              <small>III · More Chapters</small>
              <strong>The kingdom continues.</strong>
              <p>
                The first game is history. It is not the end of One Coin.
              </p>
            </Pillar>

          </Pillars>

        </Container>
      </Section>

      <GameSection>
        <Container>
          <GameGrid>

            <GameArt>
              <img
                src="/gallery/07-prize-poster.webp"
                alt="The first One Coin game"
              />
            </GameArt>

            <GameCopy>
              <Kicker style={{color:"var(--pale)"}}>
                The First Game
              </Kicker>

              <h2>$7,000</h2>
              <h3>left the royal purse.</h3>

              <p>
                Ten thousand NFTs entered at one dollar each.
                Seven fortunes were chosen. Seven holders received
                one thousand dollars each.
              </p>

              <p>
                The first game is complete. Its record remains public.
              </p>

              <Actions>
                <Primary
                  href="/winner"
                  style={{
                    background:"var(--paper)",
                    color:"var(--lapis)"
                  }}
                >
                  Meet The Great Seven
                </Primary>
              </Actions>
            </GameCopy>

          </GameGrid>
        </Container>
      </GameSection>

      <Court>
        <Container>
          <CourtGrid>

            <CourtArt />

            <CourtCopy>
              <Kicker>The Inner Court</Kicker>

              <h2>
                The draw ended.
                <span>The holders stayed.</span>
              </h2>

              <p>
                One Coin did not disappear when the first seven names
                were chosen. Holders are gathering inside the kingdom
                while the next chapter is being prepared.
              </p>

              <p>
                If you still carry a One Coin, keep it close.
              </p>

              <Actions>
                <External href={X} target="_blank" rel="noreferrer">
                  Enter through X ↗
                </External>

                <External
                  href={OPENSEA}
                  target="_blank"
                  rel="noreferrer"
                >
                  View collection ↗
                </External>
              </Actions>
            </CourtCopy>

          </CourtGrid>
        </Container>
      </Court>

      <Final>
        <Container>
          <FinalInner>

            <Kicker style={{color:"var(--pale)"}}>
              The Next Chapter
            </Kicker>

            <h2>
              Something is being written.
            </h2>

            <p>
              The Royal Scroll is not finished.
              What comes next will be revealed when it is ready.
            </p>

            <Seal>✦</Seal>

            <LightButton href="/scroll">
              Open The Royal Scroll
            </LightButton>

          </FinalInner>
        </Container>
      </Final>

      <Footer>
        <Container>
          <FooterRow>
            <p>
              NFTs are not investments and may have no resale value.
              The project and its contributors are not liable for trading
              losses, wallet compromise, failed transactions, third-party
              services, network interruptions, taxes, or unlawful participation.
              Use only links published by the official One Coin account.
            </p>

            <a href={X} target="_blank" rel="noreferrer">
              Official X ↗
            </a>
          </FooterRow>
        </Container>
      </Footer>

    </Page>
  );
}