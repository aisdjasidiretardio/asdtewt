"use client";

import styled from "styled-components";

const Page = styled.main`
  --paper:#eadcad;
  --paper-light:#f7ecc9;
  --ink:#25170e;
  --red:#9e332a;
  --blue:#163e75;
  --gold:#d2a13c;
  --green:#315842;

  min-height:100vh;
  background:
    radial-gradient(circle at 15% 5%,rgba(255,255,255,.36),transparent 27rem),
    repeating-linear-gradient(97deg,rgba(80,52,22,.025) 0 1px,transparent 1px 5px),
    var(--paper);
  color:var(--ink);
  font-family:"Cormorant Garamond",serif;
`;

const Container = styled.div`
  width:min(1050px,calc(100% - 40px));
  margin:0 auto;

  @media(min-width:760px){
    width:min(1050px,calc(100% - 80px));
  }
`;

const Hero = styled.section`
  padding:72px 0 48px;
  border-bottom:2px solid var(--ink);
`;

const Eyebrow = styled.div`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.76rem;
  font-weight:700;
  letter-spacing:.16em;
  text-transform:uppercase;
`;

const Title = styled.h1`
  margin:14px 0 16px;
  max-width:850px;
  font-family:"Cinzel",serif;
  font-size:clamp(2.5rem,6vw,5rem);
  line-height:.98;

  span{
    color:var(--red);
  }
`;

const Lead = styled.p`
  max-width:760px;
  margin:0;
  color:rgba(37,23,14,.82);
  font-size:1.2rem;
  line-height:1.55;
`;

const Back = styled.a`
  display:inline-block;
  margin-top:24px;
  color:var(--ink);
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.07em;
  text-transform:uppercase;
`;

const Section = styled.section`
  padding:48px 0;
  border-bottom:1px solid rgba(37,23,14,.4);
`;

const H2 = styled.h2`
  margin:0 0 12px;
  font-family:"Cinzel",serif;
  font-size:clamp(1.7rem,4vw,2.8rem);
  line-height:1;
`;

const Intro = styled.p`
  max-width:820px;
  margin:0 0 20px;
  color:rgba(37,23,14,.74);
  font-size:1.06rem;
  line-height:1.55;
`;

const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(12,1fr);
  gap:16px;
  margin-top:20px;

  @media(max-width:800px){
    display:block;
  }
`;

const Card = styled.article<{ $span?: number }>`
  grid-column:span ${p=>p.$span??4};
  padding:20px;
  border:1px solid rgba(37,23,14,.62);
  background:var(--paper-light);

  @media(max-width:800px){
    margin-bottom:16px;
  }
`;

const StrongCard = styled(Card)`
  border:2px solid var(--ink);
  box-shadow:5px 6px 0 var(--blue);
`;

const Label = styled.div`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.64rem;
  font-weight:700;
  letter-spacing:.09em;
  text-transform:uppercase;
`;

const Big = styled.div`
  margin-top:8px;
  font-family:"Cinzel",serif;
  font-size:2rem;
  font-weight:700;
`;

const Small = styled.p`
  margin:9px 0 0;
  color:rgba(37,23,14,.7);
  line-height:1.5;
`;

const Table = styled.div`
  margin-top:18px;
  border-top:1px solid rgba(37,23,14,.4);
`;

const Row = styled.div`
  display:flex;
  justify-content:space-between;
  gap:20px;
  padding:10px 0;
  border-bottom:1px solid rgba(37,23,14,.22);

  span:first-child{
    color:rgba(37,23,14,.65);
  }

  strong{
    text-align:right;
  }
`;

const Formula = styled.div`
  margin-top:18px;
  padding:14px;
  background:var(--ink);
  color:var(--paper-light);
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.78rem;
  line-height:1.5;
`;

const AddressGrid = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
  margin-top:20px;

  @media(max-width:800px){
    grid-template-columns:1fr;
  }
`;

const AddressCard = styled.div`
  padding:16px;
  border:1px solid rgba(37,23,14,.55);
  background:rgba(247,236,201,.72);
`;

const AddressTop = styled.div`
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:16px;
`;

const AddressName = styled.div`
  font-family:"Cinzel",serif;
  font-size:.82rem;
  font-weight:700;
`;

const AddressRole = styled.div`
  margin-top:4px;
  color:rgba(37,23,14,.62);
  font-size:.9rem;
`;

const AddressValue = styled.code`
  display:block;
  margin-top:12px;
  padding:9px 10px;
  border:1px solid rgba(37,23,14,.28);
  background:rgba(255,255,255,.28);
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.74rem;
`;

const ExplorerLink = styled.a`
  flex:0 0 auto;
  border:1px solid var(--ink);
  background:transparent;
  color:var(--ink);
  padding:6px 9px;
  text-decoration:none;
  font-family:"Cinzel",serif;
  font-size:.58rem;
  font-weight:700;
  letter-spacing:.06em;
  text-transform:uppercase;

  &:hover{
    background:var(--ink);
    color:var(--paper-light);
  }
`;

const Callout = styled.div`
  margin-top:18px;
  padding:14px 16px;
  border-left:4px solid var(--red);
  background:rgba(255,255,255,.2);
  color:rgba(37,23,14,.76);
  line-height:1.5;
`;

const Footer = styled.footer`
  padding:34px 0 50px;
  background:var(--ink);
  color:rgba(247,236,201,.72);
  font-size:.88rem;
  line-height:1.5;
`;

const FooterRow = styled.div`
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:24px;

  @media(max-width:760px){
    flex-direction:column;
  }
`;

const FooterLink = styled.a`
  color:var(--paper-light);
  text-decoration:none;
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.07em;
  text-transform:uppercase;

  &:hover{
    color:var(--gold);
  }
`;

type AddressItem = {
  name: string;
  role: string;
  address: string;
};

const contracts: AddressItem[] = [
  {
    name: "Creator Fee Splitter",
    role: "Receives ONECOIN creator revenue and routes the 40 / 40 / 15 / 5 split.",
    address: "0x7e890c4A268bd6ff2BA67433E409E9736440aF0A",
  },
  {
    name: "Royal Pot Vault",
    role: "Holds funded Royal Pot USDG and pays verified 1,000 USDG winners.",
    address: "0x652003051F5f8548421A6A87A6F931D439aeB2B6",
  },
  {
    name: "Dice",
    role: "Verifiable randomness provider used for Royal Pot winner selection.",
    address: "0xd8a0680e7699526b57140ed4eafdcc7219dc0a0c",
  },
  {
    name: "ONECOIN NFT Collection",
    role: "NFT ownership used for count and House multipliers.",
    address: "0xe2deed61405397e9ae4e36a052e254945ca576be",
  },
];

const wallets: AddressItem[] = [
  {
    name: "Liquidity",
    role: "Receives the 15% liquidity allocation.",
    address: "0x9144Dc91B12A7D05Cf58482AeD3b1d0ae43bb4DD",
  },
  {
    name: "Team",
    role: "Receives the 5% team allocation.",
    address: "0x4f299D3e9B115bD4B08eb8B15c79a8794D21E67E",
  },
];

function AddressList({
  items,
}: {
  items: AddressItem[];
}) {
  return (
    <AddressGrid>
      {items.map(item => (
        <AddressCard key={item.address}>
          <AddressTop>
            <div>
              <AddressName>{item.name}</AddressName>
              <AddressRole>{item.role}</AddressRole>
            </div>

            <ExplorerLink
              href={`https://robinhoodchain.blockscout.com/address/${item.address}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorer ↗
            </ExplorerLink>
          </AddressTop>

          <AddressValue title={item.address}>
            {item.address}
          </AddressValue>
        </AddressCard>
      ))}
    </AddressGrid>
  );
}

export default function TokenomicsPage() {
  return (
    <Page>
      <Hero>
        <Container>
          <Eyebrow>✦ One Coin · Game II</Eyebrow>

          <Title>
            Tokenomics & <span>Royal Weight</span>
          </Title>

          <Lead>
            Everything behind Game II: eligibility, Royal Weight,
            holder rewards, Royal Pot draws, creator-revenue routing
            and the key onchain addresses behind the system.
          </Lead>

          <Back href="/game2">
            ← Back to Game II
          </Back>
        </Container>
      </Hero>

      <Section>
        <Container>
          <H2>What is Game II?</H2>

          <Intro>
            Game II is ONECOIN's ongoing holder system. Creator revenue
            continuously funds Royal Rewards, repeated Royal Pot draws,
            liquidity and the team allocation.
          </Intro>

          <Grid>
            <StrongCard $span={3}>
              <Label>Royal Pot</Label>
              <Big>40%</Big>
              <Small>Funds repeated 1,000 USDG draws.</Small>
            </StrongCard>

            <StrongCard $span={3}>
              <Label>Royal Rewards</Label>
              <Big>40%</Big>
              <Small>Distributed to eligible holders by Royal Weight.</Small>
            </StrongCard>

            <Card $span={3}>
              <Label>Liquidity</Label>
              <Big>15%</Big>
              <Small>Dedicated liquidity allocation.</Small>
            </Card>

            <Card $span={3}>
              <Label>Team</Label>
              <Big>5%</Big>
              <Small>Team allocation.</Small>
            </Card>
          </Grid>

          <Callout>
            ONECOIN uses a <strong>3% creator tax</strong>. The percentages
            above describe how ONECOIN creator revenue is split after it
            reaches the production Revenue Router.
          </Callout>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Eligibility</H2>

          <Intro>
            A wallet must hold at least <strong>$10 worth of ONECOIN</strong>
            at the relevant snapshot to receive Royal Weight.
          </Intro>

          <Table>
            <Row><span>Under $10</span><strong>Not eligible</strong></Row>
            <Row><span>$10–99</span><strong>1 base entry</strong></Row>
            <Row><span>$100–499</span><strong>3 base entries</strong></Row>
            <Row><span>$500–999</span><strong>6 base entries</strong></Row>
            <Row><span>$1,000–2,499</span><strong>10 base entries</strong></Row>
            <Row><span>$2,500–4,999</span><strong>15 base entries</strong></Row>
            <Row><span>$5,000–9,999</span><strong>22 base entries</strong></Row>
            <Row><span>$10,000–24,999</span><strong>32 base entries</strong></Row>
            <Row><span>$25,000–49,999</span><strong>45 base entries</strong></Row>
            <Row><span>$50,000–99,999</span><strong>60 base entries</strong></Row>
            <Row><span>$100,000+</span><strong>80 base entries</strong></Row>
          </Table>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Royal Weight</H2>

          <Intro>
            Royal Weight is used for both Royal Rewards and Royal Pot
            snapshots. Holding more ONECOIN gives more base entries;
            activity and ONECOIN NFTs can multiply them.
          </Intro>

          <Formula>
            Royal Weight = Base Entries × Early-Buyer Boost ×
            Current-Round Net-Buy Boost × NFT-Count Multiplier ×
            Strongest-House Multiplier
          </Formula>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Early-buyer boost</H2>

          <Intro>
            This boost is determined by a wallet's first qualifying
            ONECOIN buy after launch.
          </Intro>

          <Table>
            <Row><span>First 6 hours</span><strong>1.25×</strong></Row>
            <Row><span>6–24 hours</span><strong>1.15×</strong></Row>
            <Row><span>24–48 hours</span><strong>1.075×</strong></Row>
            <Row><span>After 48 hours</span><strong>1.00×</strong></Row>
          </Table>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Current-round net-buy boost</H2>

          <Intro>
            This boost resets for each Royal Pot round and reflects the
            wallet's net buying during that round.
          </Intro>

          <Table>
            <Row><span>Under $100 net buy</span><strong>1.00×</strong></Row>
            <Row><span>$100+</span><strong>1.05×</strong></Row>
            <Row><span>$500+</span><strong>1.10×</strong></Row>
            <Row><span>$1,000+</span><strong>1.15×</strong></Row>
            <Row><span>$5,000+</span><strong>1.25×</strong></Row>
          </Table>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>NFT-count multiplier</H2>

          <Intro>
            ONECOIN NFTs increase Royal Weight based on how many are held
            by the wallet at the relevant snapshot.
          </Intro>

          <Table>
            <Row><span>0 NFTs</span><strong>1.00×</strong></Row>
            <Row><span>1 NFT</span><strong>1.10×</strong></Row>
            <Row><span>2–4 NFTs</span><strong>1.25×</strong></Row>
            <Row><span>5–9 NFTs</span><strong>1.50×</strong></Row>
            <Row><span>10–19 NFTs</span><strong>1.75×</strong></Row>
            <Row><span>20+ NFTs</span><strong>2.00×</strong></Row>
          </Table>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Strongest-House multiplier</H2>

          <Intro>
            A wallet receives only its strongest House multiplier.
            House multipliers do not stack with one another, but the
            strongest House multiplier does stack with the NFT-count
            multiplier.
          </Intro>

          <Table>
            <Row><span>Verdant</span><strong>1.10×</strong></Row>
            <Row><span>Ironveil</span><strong>1.15×</strong></Row>
            <Row><span>Emberfall</span><strong>1.20×</strong></Row>
            <Row><span>Stormvale</span><strong>1.25×</strong></Row>
            <Row><span>Nocturne</span><strong>1.30×</strong></Row>
            <Row><span>The Seven Chosen</span><strong>2.00×</strong></Row>
          </Table>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Royal Pot</H2>

          <Intro>
            40% of ONECOIN creator revenue funds the Royal Pot.
            Every time the funded Pot reaches 1,000 USDG, one new draw
            begins.
          </Intro>

          <Grid>
            <Card $span={4}>
              <Label>01 · Snapshot</Label>
              <Big>Lock</Big>
              <Small>
                Eligible wallets and their final Royal Weights are frozen
                for that round.
              </Small>
            </Card>

            <Card $span={4}>
              <Label>02 · Randomness</Label>
              <Big>Dice</Big>
              <Small>
                Verifiable randomness is requested from the configured
                Dice provider.
              </Small>
            </Card>

            <Card $span={4}>
              <Label>03 · Payout</Label>
              <Big>1,000 USDG</Big>
              <Small>
                One weighted winner receives 1,000 USDG. Excess Pot
                funding carries into the next round.
              </Small>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Royal Rewards</H2>

          <Intro>
            40% of ONECOIN creator revenue funds Royal Rewards.
            Allocations are calculated every 30 minutes using Royal Weight.
          </Intro>

          <Grid>
            <Card $span={6}>
              <Label>Day 1</Label>
              <Big>Automatic</Big>
              <Small>
                Qualifying rewards are sent automatically about once per
                hour. A wallet must have at least 1 USDG due for an
                automatic Day-1 send; smaller amounts continue accumulating.
              </Small>
            </Card>

            <Card $span={6}>
              <Label>After Day 1</Label>
              <Big>Claim phase</Big>
              <Small>
                Settlement moves to cumulative claim mode. The Game II
                interface will update for that phase before Day 1 ends.
              </Small>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Launch configuration</H2>

          <Intro>
            The production system only activates for the verified ONECOIN
            launch configuration.
          </Intro>

          <Table>
            <Row><span>Network</span><strong>Robinhood Chain · 4663</strong></Row>
            <Row><span>Pair asset</span><strong>USDG</strong></Row>
            <Row><span>Creator tax</span><strong>3%</strong></Row>
            <Row><span>Buyback</span><strong>OFF</strong></Row>
            <Row>
              <span>USDG contract</span>
              <strong>0x5fc5360d0400a0fd4f2af552add042d716f1d168</strong>
            </Row>
          </Table>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Public addresses</H2>

          <Intro>
            Key Game II contracts and allocation wallets are published
            below so holders can verify creator-revenue routing, Royal Pot
            payouts and NFT-based weighting directly on Robinhood Chain.
          </Intro>

          <Label>Core contracts</Label>

          <AddressList
            items={contracts}
          />

          <div style={{ marginTop: 34 }}>
            <Label>Allocation wallets</Label>
          </div>

          <AddressList
            items={wallets}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Transparency of every round</H2>

          <Intro>
            Every completed Royal Pot round can publish its snapshot
            information, Dice request, randomness, winner, payout
            transaction and verification proof on the Game II page.
          </Intro>

          <Intro>
            The official ONECOIN contract address also appears
            automatically after the verified Pons launch. The backend only
            activates when the onchain launch record matches the approved
            launcher, USDG pair, production Revenue Router, 3% creator tax
            and buyback-off configuration.
          </Intro>
        </Container>
      </Section>

      <Footer>
        <Container>
          <FooterRow>
            <div>
              ONECOIN · Robinhood Chain · Game II. Royal Weight is
              determined by production snapshot data and indexed onchain
              ownership state.
            </div>

            <FooterLink
              href="https://x.com/onecoinrbh"
              target="_blank"
              rel="noreferrer"
            >
              Official X ↗
            </FooterLink>
          </FooterRow>
        </Container>
      </Footer>
    </Page>
  );
}
