"use client";

import styled, { keyframes } from "styled-components";

const IDS = [
  9987, 512, 7361, 1884,
  9042, 3477, 6208, 771,
  4560, 8891, 147, 8221,
  4096, 973, 6510, 2944
];

const slide = keyframes`
  from{transform:translateX(0)}
  to{transform:translateX(-50%)}
`;

const Section = styled.section`
  padding:55px 0 70px;
  overflow:hidden;
  border-top:2px solid var(--ink);
  border-bottom:2px solid var(--ink);
  background:var(--red);
  color:var(--light);
  text-align:center;
`;

const HeadingWrap = styled.div`
  width:min(1180px,calc(100% - 40px));
  margin:0 auto;
`;

const Kicker = styled.p`
  margin:0 0 10px;
  color:var(--pale-gold);
  font-family:"Cormorant Garamond",serif;
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.18em;
  text-transform:uppercase;
`;

const Heading = styled.h2`
  margin:0;
  color:var(--light);
  font-family:"Cinzel",serif;
  font-size:clamp(2rem,8vw,4.8rem);
  font-weight:700;
  letter-spacing:.01em;
  line-height:1;
`;

const Viewport = styled.div`
  width:100%;
  margin-top:38px;
  overflow:hidden;
  padding:20px 0 30px;
  border-top:1px solid rgba(247,236,201,.4);
  border-bottom:1px solid rgba(247,236,201,.4);
`;

const Track = styled.div`
  display:flex;
  width:max-content;
  animation:${slide} 58s linear infinite;
  will-change:transform;

  @media(prefers-reduced-motion:reduce){
    animation:none;
    transform:none;
  }
`;

const CardSet = styled.div`
  display:flex;
  gap:22px;
  padding-right:22px;
`;

const Card = styled.article`
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

const CardInner = styled.div`
  position:relative;
  overflow:hidden;
  border:1px solid rgba(37,23,14,.72);
  background:var(--light);
`;

const Identity = styled.div`
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

const NftImage = styled.img`
  display:block;
  width:100%;
  aspect-ratio:1;
  object-fit:cover;
  border-top:1px solid var(--ink);
  border-bottom:1px solid var(--ink);
  background:var(--paper);
`;

const Fate = styled.span`
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

export default function CandidateCarouselSection() {
  return (
    <Section>
      <HeadingWrap>
        <Kicker>Until the book closes</Kicker>
        <Heading>Could fortune rest here?</Heading>
      </HeadingWrap>

      <Viewport aria-label="Possible winning NFT IDs">
        <Track>
          {[false, true].map((duplicate) => (
            <CardSet
              key={duplicate ? "duplicate" : "primary"}
              aria-hidden={duplicate || undefined}
            >
              {IDS.map((id, index) => (
                <Card key={`${duplicate ? "d" : "p"}-${id}`}>
                  <CardInner>
                    <Identity>
                      <span>{"\u2726"}</span>
                      <span>NFT ID</span>
                      <strong>#{id.toString().padStart(4, "0")}</strong>
                    </Identity>

                    <NftImage
                      src="/gallery/winner-nft.png"
                      alt={
                        duplicate || index > 0
                          ? ""
                          : "One Coin possible winning NFT"
                      }
                      loading={index > 3 ? "lazy" : "eager"}
                    />

                    <Fate>Fortune may call</Fate>
                  </CardInner>
                </Card>
              ))}
            </CardSet>
          ))}
        </Track>
      </Viewport>
    </Section>
  );
}