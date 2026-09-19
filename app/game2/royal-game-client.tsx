"use client";

import {
  useCallback,
  useEffect,
  useState,
  type FormEvent,
} from "react";
import styled, { keyframes } from "styled-components";

const API =
  "https://ikslmrrplnwwipdnteza.supabase.co/functions/v1";

const ENDPOINTS = {
  site: `${API}/royal-site-state`,
  launch: `${API}/royal-launch-status`,
  wallet: `${API}/royal-pot-api/api/wallet`,
};

const TWITTER_URL = "https://x.com/onecoinrbh";

type EthereumProvider = {
  request: (request: {
    method: string;
    params?: unknown[] | Record<string, unknown>;
  }) => Promise<any>;
};

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

type SiteState = {
  launch: {
    activated: boolean;
    token: string | null;
  };
  pot: {
    round: number;
    status: string;
    totalVisible: number;
    target: number;
    progressPct: number;
    eligibleWallets: number | null;
  };
  rewards: {
    phase: string;
    accrued: number;
    paid: number;
    nextPushAt: string | null;
  };
  latestWinner: {
    round: number;
    wallet: string;
    diceRequestId: string | null;
    proofHash: string | null;
  } | null;
  latestPayout: {
    status: string;
    recipient: string;
    amountUsdg: number;
    txHash: string | null;
  } | null;
};

type LaunchStatus = {
  token?: string | null;
  lastError?: string | null;
};

type WalletStatus = {
  onecoinBalance: string | null;
  estimatedValueUsdg: string | null;
  eligible: boolean | null;
  baseEntries: number | null;
  nftCount: number;
  strongestHouse: string | null;
  estimatedRoyalWeight: string | null;
  earlyBoostBps: number | null;
  roundNetBuyBoostBps: number | null;
  nftCountBoostBps: number;
  houseBoostBps: number;
  roundNetBuyUsdg: string | null;
  royalRewardsEarnedUsdg: string;
  royalRewardsPaidUsdg: string;
  note?: string;
};

const pulse = keyframes`
  0%, 100% {
    opacity: .45;
    transform: scale(.94);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

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
    radial-gradient(
      circle at 15% 5%,
      rgba(255,255,255,.36),
      transparent 27rem
    ),
    repeating-linear-gradient(
      97deg,
      rgba(80,52,22,.025) 0 1px,
      transparent 1px 5px
    ),
    var(--paper);
  color:var(--ink);
  font-family:"Cormorant Garamond",serif;
`;

const Container = styled.div`
  width:min(1120px,calc(100% - 40px));
  margin:0 auto;

  @media(min-width:760px){
    width:min(1120px,calc(100% - 80px));
  }
`;

const Hero = styled.section`
  padding:76px 0 52px;
  border-bottom:2px solid var(--ink);
`;

const Eyebrow = styled.div`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.18em;
  text-transform:uppercase;
`;

const Title = styled.h1`
  max-width:950px;
  margin:16px 0 18px;
  font-family:"Cinzel",serif;
  font-size:clamp(2.7rem,7vw,6rem);
  line-height:.97;
  font-weight:700;
  letter-spacing:-.025em;

  span{
    display:block;
    color:var(--red);
  }
`;

const Lead = styled.p`
  max-width:780px;
  margin:0;
  font-size:clamp(1.18rem,2vw,1.48rem);
  line-height:1.5;
`;

const Actions = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:26px;
`;

const PrimaryLink = styled.a`
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-height:42px;
  padding:0 16px;
  border:2px solid var(--ink);
  background:var(--red);
  color:#fff8dc;
  text-decoration:none;
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;

  &:hover{
    background:var(--blue);
  }
`;

const SecondaryLink = styled(PrimaryLink)`
  background:transparent;
  color:var(--ink);
`;

const StatusRow = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:12px;
  margin-top:26px;
`;

const StatusPill = styled.div<{ $live?: boolean }>`
  display:inline-flex;
  align-items:center;
  gap:9px;
  padding:10px 13px;
  border:1px solid var(--ink);
  background:${p => p.$live ? "#e5efdf" : "var(--paper-light)"};
  font-family:"Cinzel",serif;
  font-size:.66rem;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;

  &::before{
    content:"";
    width:8px;
    height:8px;
    border-radius:50%;
    background:${p => p.$live ? "var(--green)" : "var(--gold)"};
    animation:${pulse} 1.8s ease-in-out infinite;
  }
`;

const CaBox = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  max-width:100%;
  padding:10px 12px;
  border:1px solid rgba(37,23,14,.55);
  background:rgba(255,255,255,.2);

  code{
    overflow:hidden;
    text-overflow:ellipsis;
    font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
    font-size:.78rem;
  }
`;

const TinyButton = styled.button`
  flex:0 0 auto;
  border:1px solid var(--ink);
  background:var(--ink);
  color:var(--paper-light);
  padding:8px 10px;
  cursor:pointer;
  font-family:"Cinzel",serif;
  font-size:.61rem;
  font-weight:700;
  letter-spacing:.06em;
  text-transform:uppercase;

  &:hover{
    background:var(--red);
  }
`;

const Section = styled.section`
  padding:52px 0;
  border-bottom:1px solid rgba(37,23,14,.42);
`;

const SectionIntro = styled.div`
  max-width:740px;
  margin-bottom:24px;
`;

const SectionTitle = styled.h2`
  margin:0 0 10px;
  font-family:"Cinzel",serif;
  font-size:clamp(1.8rem,4vw,3rem);
  line-height:1;
`;

const SectionText = styled.p`
  margin:0;
  color:rgba(37,23,14,.72);
  font-size:1.08rem;
  line-height:1.5;
`;

const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(12,1fr);
  gap:18px;

  @media(max-width:800px){
    display:block;
  }
`;

const Card = styled.article<{ $span?: number }>`
  grid-column:span ${p => p.$span ?? 4};
  padding:22px;
  border:2px solid var(--ink);
  background:var(--paper-light);
  box-shadow:6px 7px 0 var(--blue);

  @media(max-width:800px){
    margin-bottom:18px;
  }
`;

const PlainCard = styled.article<{ $span?: number }>`
  grid-column:span ${p => p.$span ?? 4};
  padding:22px;
  border:1px solid rgba(37,23,14,.58);
  background:rgba(247,236,201,.62);

  @media(max-width:800px){
    margin-bottom:18px;
  }
`;

const Label = styled.div`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.66rem;
  font-weight:700;
  letter-spacing:.1em;
  text-transform:uppercase;
`;

const Big = styled.div`
  margin-top:9px;
  font-family:"Cinzel",serif;
  font-size:clamp(1.65rem,4vw,2.8rem);
  font-weight:700;
  line-height:1.05;
`;

const CardTitle = styled.h3`
  margin:8px 0 6px;
  font-family:"Cinzel",serif;
  font-size:1.25rem;
`;

const Small = styled.p`
  margin:10px 0 0;
  color:rgba(37,23,14,.72);
  line-height:1.48;
`;

const Progress = styled.div`
  height:15px;
  margin-top:18px;
  border:1px solid var(--ink);
  background:#d7ca9e;
  overflow:hidden;
`;

const Fill = styled.div`
  height:100%;
  background:var(--red);
  transition:width .4s ease;
`;

const DataTable = styled.div`
  margin-top:16px;
  border-top:1px solid rgba(37,23,14,.35);
`;

const DataRow = styled.div`
  display:flex;
  justify-content:space-between;
  gap:20px;
  padding:9px 0;
  border-bottom:1px solid rgba(37,23,14,.22);
  font-size:.95rem;

  span:first-child{
    color:rgba(37,23,14,.65);
  }

  strong{
    text-align:right;
  }

  code{
    max-width:64%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size:.76rem;
  }
`;

const WalletForm = styled.form`
  display:flex;
  gap:8px;
  margin-top:16px;

  @media(max-width:620px){
    flex-direction:column;
  }
`;

const Input = styled.input`
  flex:1;
  min-width:0;
  border:1px solid var(--ink);
  background:#fff8dc;
  color:var(--ink);
  padding:12px 13px;
  font:600 .9rem ui-monospace,SFMono-Regular,Menlo,monospace;
  outline:none;

  &:focus{
    box-shadow:0 0 0 2px var(--gold);
  }
`;

const Button = styled.button`
  border:2px solid var(--ink);
  background:var(--red);
  color:#fff8dc;
  padding:11px 16px;
  cursor:pointer;
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;

  &:disabled{
    opacity:.48;
    cursor:not-allowed;
  }

  &:hover:not(:disabled){
    background:var(--blue);
  }
`;

const SecondaryButton = styled(Button)`
  background:var(--paper-light);
  color:var(--ink);
`;

const Notice = styled.div<{ $danger?: boolean }>`
  margin-top:14px;
  padding:11px 12px;
  border:1px solid ${p => p.$danger ? "var(--red)" : "rgba(37,23,14,.4)"};
  background:${p => p.$danger ? "#f1d8cc" : "rgba(255,255,255,.24)"};
  line-height:1.42;
`;

const Formula = styled.div`
  margin-top:16px;
  padding:13px;
  background:var(--ink);
  color:var(--paper-light);
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.76rem;
  line-height:1.5;
`;

const SplitBar = styled.div`
  display:grid;
  grid-template-columns:40fr 40fr 15fr 5fr;
  height:18px;
  margin-top:18px;
  border:1px solid var(--ink);
  overflow:hidden;

  span:nth-child(1){background:var(--red)}
  span:nth-child(2){background:var(--blue)}
  span:nth-child(3){background:var(--gold)}
  span:nth-child(4){background:var(--green)}
`;

const Footer = styled.footer`
  padding:34px 0;
  background:var(--ink);
  color:var(--paper-light);
`;

const FooterRow = styled.div`
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:28px;

  @media(max-width:760px){
    flex-direction:column;
  }
`;

const FooterLegal = styled.p`
  max-width:820px;
  margin:0;
  color:rgba(247,236,201,.72);
  font-size:.86rem;
  line-height:1.5;
`;

const FooterLink = styled.a`
  flex:0 0 auto;
  color:var(--paper-light);
  text-decoration:none;
  font-family:"Cinzel",serif;
  font-size:.7rem;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;

  &:hover{
    color:var(--gold);
  }
`;

function money(value: unknown) {
  const n = Number(value ?? 0);

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(n) ? n : 0);
}

function compact(value: string | null | undefined) {
  if (!value) return "—";

  return value.length > 16
    ? `${value.slice(0, 8)}…${value.slice(-6)}`
    : value;
}

function houseName(value: string | null | undefined) {
  if (!value) return "None";
  if (value === "seven_chosen") return "The Seven Chosen";

  return value
    .split("_")
    .map(
      x => x.charAt(0).toUpperCase() + x.slice(1)
    )
    .join(" ");
}

function multi(bps: number | null | undefined) {
  if (bps == null) return "—";

  const n = bps / 10000;

  return `${n.toFixed(
    Number.isInteger(n)
      ? 1
      : n * 100 === Math.round(n * 100)
        ? 2
        : 3
  )}×`;
}

function validWallet(value: string) {
  return /^0x[0-9a-fA-F]{40}$/.test(value.trim());
}

function countdown(
  iso: string | null,
  now: number | null
) {
  if (!iso || now === null) return "Not started";

  const ms = Date.parse(iso) - now;

  if (!Number.isFinite(ms)) return "—";
  if (ms <= 0) return "Processing";

  const total = Math.floor(ms / 1000);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function potStatus(value?: string | null) {
  const labels: Record<string, string> = {
    prelaunch: "Waiting for launch",
    filling: "Filling the pot",
    snapshotting: "Locking the snapshot",
    snapshot_locked: "Snapshot locked",
    dice_requesting: "Requesting randomness",
    dice_requested: "Drawing winner",
    winner_selected: "Winner selected",
    payout_ready: "Preparing payout",
    paid: "Paid",
    drawing: "Drawing winner",
  };

  return labels[value || ""] || "Live";
}

function rewardStatus(
  phase?: string | null,
  live?: boolean
) {
  if (!live) return "Waiting for launch";
  if (phase === "claim") return "Claim phase";

  return "Automatic payouts";
}

async function getJson(url: string) {
  const response = await fetch(url, {
    cache: "no-store",
  });

  const json = await response.json();

  if (!response.ok || json?.ok === false) {
    throw new Error(
      json?.error || `Request failed (${response.status})`
    );
  }

  return json;
}

export default function RoyalGameClient() {
  const [site, setSite] = useState<SiteState | null>(
    null
  );

  const [launch, setLaunch] =
    useState<LaunchStatus | null>(null);

  const [apiError, setApiError] = useState("");

  /*
   * HYDRATION-SAFE:
   * Do not initialize with Date.now().
   * Server and first browser render now match exactly.
   */
  const [now, setNow] =
    useState<number | null>(null);

  const [walletInput, setWalletInput] =
    useState("");

  const [wallet, setWallet] =
    useState("");

  const [walletData, setWalletData] =
    useState<WalletStatus | null>(null);

  const [walletBusy, setWalletBusy] =
    useState(false);

  const [walletMessage, setWalletMessage] =
    useState("");

  const [copied, setCopied] =
    useState(false);

  const refreshSite = useCallback(async () => {
    try {
      const [siteState, launchState] =
        await Promise.all([
          getJson(ENDPOINTS.site),
          getJson(ENDPOINTS.launch),
        ]);

      setSite(siteState);
      setLaunch(launchState);
      setApiError("");
    } catch (error) {
      setApiError(
        error instanceof Error
          ? error.message
          : String(error)
      );
    }
  }, []);

  useEffect(() => {
    refreshSite();

    const interval = window.setInterval(
      refreshSite,
      2000
    );

    return () => {
      window.clearInterval(interval);
    };
  }, [refreshSite]);

  useEffect(() => {
    setNow(Date.now());

    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const displayedToken =
    launch?.token ||
    site?.launch?.token ||
    null;

  const isActivated =
    Boolean(site?.launch?.activated);

  const checkWallet = useCallback(
    async (candidate?: string) => {
      const selected = (
        candidate || walletInput
      )
        .trim()
        .toLowerCase();

      if (!validWallet(selected)) {
        setWalletMessage(
          "Enter a valid EVM wallet address."
        );
        return;
      }

      setWalletBusy(true);
      setWalletMessage("");

      try {
        const data = await getJson(
          `${ENDPOINTS.wallet}/${selected}`
        );

        setWallet(selected);
        setWalletInput(selected);
        setWalletData(data);
      } catch (error) {
        setWalletMessage(
          error instanceof Error
            ? error.message
            : "Wallet lookup failed."
        );
      } finally {
        setWalletBusy(false);
      }
    },
    [walletInput]
  );

  useEffect(() => {
    if (!wallet) return;

    const interval = window.setInterval(() => {
      checkWallet(wallet);
    }, 10000);

    return () => {
      window.clearInterval(interval);
    };
  }, [wallet, checkWallet]);

  async function connectWallet() {
    if (!window.ethereum) {
      setWalletMessage(
        "No browser wallet detected. You can still paste an address."
      );
      return;
    }

    try {
      const accounts =
        await window.ethereum.request({
          method: "eth_requestAccounts",
        });

      const account = String(
        accounts?.[0] || ""
      );

      if (!validWallet(account)) {
        throw new Error(
          "No valid wallet returned."
        );
      }

      setWalletInput(account);
      await checkWallet(account);
    } catch (error) {
      setWalletMessage(
        error instanceof Error
          ? error.message
          : "Wallet connection failed."
      );
    }
  }

  async function copyToken() {
    if (!displayedToken) return;

    try {
      await navigator.clipboard.writeText(
        displayedToken
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      setCopied(false);
    }
  }

  function onWalletSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    checkWallet();
  }

  const progress = Math.max(
    0,
    Math.min(
      100,
      Number(site?.pot?.progressPct || 0)
    )
  );

  return (
    <Page>
      <Hero>
        <Container>
          <Eyebrow>
            ✦ One Coin · Game II
          </Eyebrow>

          <Title>
            Hold. Earn. <span>Win.</span>
          </Title>

          <Lead>
            Game II turns ONECOIN creator revenue
            into ongoing Royal Rewards for holders
            and repeated 1,000 USDG Royal Pot draws.
          </Lead>

          <Actions>
            <PrimaryLink href="/game2/tokenomics">
              Tokenomics
            </PrimaryLink>
          </Actions>

          <StatusRow>
            <StatusPill $live={isActivated}>
              {isActivated
                ? "ONECOIN is live"
                : "Launching soon"}
            </StatusPill>

            {displayedToken ? (
              <CaBox>
                <code>{displayedToken}</code>

                <TinyButton
                  type="button"
                  onClick={copyToken}
                >
                  {copied
                    ? "Copied"
                    : "Copy CA"}
                </TinyButton>
              </CaBox>
            ) : (
              <CaBox>
                <code>
                  Official contract address will
                  appear here automatically after
                  launch.
                </code>
              </CaBox>
            )}
          </StatusRow>

          {apiError && (
            <Notice $danger>
              {apiError}
            </Notice>
          )}

          {launch?.lastError && (
            <Notice $danger>
              {launch.lastError}
            </Notice>
          )}
        </Container>
      </Hero>

      <Section id="how-it-works">
        <Container>
          <SectionIntro>
            <SectionTitle>
              Game II in three steps
            </SectionTitle>

            <SectionText>
              Participation is automatic. Hold at
              least $10 of ONECOIN and your Royal
              Weight is calculated for Royal Rewards
              and every Royal Pot draw.
            </SectionText>
          </SectionIntro>

          <Grid>
            <PlainCard $span={4}>
              <Label>01 · Hold</Label>
              <CardTitle>
                Hold at least $10 of ONECOIN
              </CardTitle>
              <Small>
                Wallets below the $10 minimum are
                not eligible. More ONECOIN increases
                your base entries.
              </Small>
            </PlainCard>

            <PlainCard $span={4}>
              <Label>02 · Earn</Label>
              <CardTitle>
                Receive Royal Rewards
              </CardTitle>
              <Small>
                40% of ONECOIN creator revenue goes
                to holder rewards. Your share is
                calculated every 30 minutes using
                your Royal Weight.
              </Small>
            </PlainCard>

            <PlainCard $span={4}>
              <Label>03 · Win</Label>
              <CardTitle>
                Enter every Royal Pot draw
              </CardTitle>
              <Small>
                Another 40% fills the Royal Pot.
                Every time it reaches 1,000 USDG,
                one eligible holder wins 1,000 USDG.
              </Small>
            </PlainCard>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro>
            <SectionTitle>
              Live Treasury
            </SectionTitle>
            <SectionText>
              Live Royal Pot and Royal Rewards data
              updates automatically.
            </SectionText>
          </SectionIntro>

          <Grid>
            <Card $span={6}>
              <Label>
                Royal Pot · Round #
                {site?.pot?.round ?? 1}
              </Label>

              <Big>
                {money(
                  site?.pot?.totalVisible ?? 0
                )}{" "}
                /{" "}
                {money(
                  site?.pot?.target ?? 1000
                )}{" "}
                USDG
              </Big>

              <Progress
                aria-label="Royal Pot progress"
              >
                <Fill
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </Progress>

              <Small>
                When the Pot reaches 1,000 USDG,
                the system locks a holder snapshot,
                calculates final Royal Weights,
                requests Dice randomness and pays
                one 1,000 USDG winner.
              </Small>

              <DataTable>
                <DataRow>
                  <span>Status</span>
                  <strong>
                    {potStatus(
                      site?.pot?.status
                    )}
                  </strong>
                </DataRow>

                <DataRow>
                  <span>Current round</span>
                  <strong>
                    #{site?.pot?.round ?? 1}
                  </strong>
                </DataRow>

                <DataRow>
                  <span>
                    Eligible wallets at snapshot
                  </span>
                  <strong>
                    {site?.pot
                      ?.eligibleWallets ?? "—"}
                  </strong>
                </DataRow>
              </DataTable>
            </Card>

            <Card $span={6}>
              <Label>
                Royal Rewards
              </Label>

              <Big>
                {money(
                  site?.rewards?.accrued
                )}{" "}
                USDG
              </Big>

              <Small>
                Holder rewards are calculated every
                30 minutes using the same Royal
                Weight system as the Royal Pot.
              </Small>

              <DataTable>
                <DataRow>
                  <span>Status</span>
                  <strong>
                    {rewardStatus(
                      site?.rewards?.phase,
                      isActivated
                    )}
                  </strong>
                </DataRow>

                <DataRow>
                  <span>
                    Paid to holders
                  </span>
                  <strong>
                    {money(
                      site?.rewards?.paid
                    )}{" "}
                    USDG
                  </strong>
                </DataRow>

                <DataRow>
                  <span>
                    Next automatic send
                  </span>
                  <strong>
                    {countdown(
                      site?.rewards
                        ?.nextPushAt || null,
                      now
                    )}
                  </strong>
                </DataRow>
              </DataTable>

              <Notice>
                Rewards are sent automatically
                about once per hour when a wallet
                has at least 1 USDG due.
              </Notice>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro>
            <SectionTitle>
              Who is eligible?
            </SectionTitle>

            <SectionText>
              Hold at least $10 of ONECOIN at the
              relevant snapshot. Your Royal Weight
              decides your reward share and your
              weight in Royal Pot draws.
            </SectionText>
          </SectionIntro>

          <Grid>
            <PlainCard $span={3}>
              <Label>Minimum</Label>
              <Big>$10</Big>
              <Small>
                Minimum ONECOIN value required to
                participate.
              </Small>
            </PlainCard>

            <PlainCard $span={3}>
              <Label>ONECOIN</Label>
              <CardTitle>
                More holdings
              </CardTitle>
              <Small>
                Higher holding-value tiers give
                more base entries.
              </Small>
            </PlainCard>

            <PlainCard $span={3}>
              <Label>Activity</Label>
              <CardTitle>
                Early + net-buy boosts
              </CardTitle>
              <Small>
                Early qualifying buyers and
                current-round net buyers can
                receive extra weight.
              </Small>
            </PlainCard>

            <PlainCard $span={3}>
              <Label>NFTs</Label>
              <CardTitle>
                Count + House boosts
              </CardTitle>
              <Small>
                Your NFT count and strongest
                ONECOIN House can multiply your
                weight.
              </Small>
            </PlainCard>
          </Grid>

          <Formula>
            Royal Weight = Base Entries ×
            Early-Buyer Boost × Current-Round
            Net-Buy Boost × NFT-Count Multiplier ×
            Strongest-House Multiplier
          </Formula>

          <Actions>
            <SecondaryLink
              href="/game2/tokenomics"
            >
              See every tier and multiplier
            </SecondaryLink>
          </Actions>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro>
            <SectionTitle>
              Check your wallet
            </SectionTitle>

            <SectionText>
              See your live eligibility, ONECOIN
              holdings, NFT profile, multipliers
              and estimated Royal Weight.
              Connecting a wallet is optional.
            </SectionText>
          </SectionIntro>

          <Card $span={12}>
            <WalletForm
              onSubmit={onWalletSubmit}
            >
              <Input
                value={walletInput}
                onChange={event =>
                  setWalletInput(
                    event.target.value
                  )
                }
                placeholder="0x… wallet address"
                spellCheck={false}
                autoCapitalize="off"
              />

              <Button
                type="submit"
                disabled={walletBusy}
              >
                {walletBusy
                  ? "Checking…"
                  : "Check wallet"}
              </Button>

              <SecondaryButton
                type="button"
                onClick={connectWallet}
                disabled={walletBusy}
              >
                Connect
              </SecondaryButton>
            </WalletForm>

            {walletMessage && (
              <Notice>
                {walletMessage}
              </Notice>
            )}

            {walletData && (
              <>
                <Grid
                  style={{
                    marginTop: 12,
                  }}
                >
                  <PlainCard $span={6}>
                    <Label>ONECOIN</Label>

                    <DataTable>
                      <DataRow>
                        <span>Balance</span>
                        <strong>
                          {walletData
                            .onecoinBalance ??
                            "Prelaunch"}
                        </strong>
                      </DataRow>

                      <DataRow>
                        <span>
                          Estimated value
                        </span>
                        <strong>
                          {walletData
                            .estimatedValueUsdg
                            ? `$${walletData.estimatedValueUsdg}`
                            : "—"}
                        </strong>
                      </DataRow>

                      <DataRow>
                        <span>Eligible</span>
                        <strong>
                          {walletData
                            .eligible == null
                            ? "After launch"
                            : walletData
                                  .eligible
                              ? "Yes"
                              : "No"}
                        </strong>
                      </DataRow>

                      <DataRow>
                        <span>
                          Base entries
                        </span>
                        <strong>
                          {walletData
                            .baseEntries ??
                            "—"}
                        </strong>
                      </DataRow>

                      <DataRow>
                        <span>
                          Estimated Royal
                          Weight
                        </span>
                        <strong>
                          {walletData
                            .estimatedRoyalWeight ??
                            "—"}
                        </strong>
                      </DataRow>
                    </DataTable>
                  </PlainCard>

                  <PlainCard $span={6}>
                    <Label>Boosts</Label>

                    <DataTable>
                      <DataRow>
                        <span>
                          Early-buyer boost
                        </span>
                        <strong>
                          {multi(
                            walletData
                              .earlyBoostBps
                          )}
                        </strong>
                      </DataRow>

                      <DataRow>
                        <span>
                          Current-round
                          net-buy boost
                        </span>
                        <strong>
                          {multi(
                            walletData
                              .roundNetBuyBoostBps
                          )}
                        </strong>
                      </DataRow>

                      <DataRow>
                        <span>
                          NFTs held
                        </span>
                        <strong>
                          {walletData.nftCount}
                        </strong>
                      </DataRow>

                      <DataRow>
                        <span>
                          NFT-count
                          multiplier
                        </span>
                        <strong>
                          {multi(
                            walletData
                              .nftCountBoostBps
                          )}
                        </strong>
                      </DataRow>

                      <DataRow>
                        <span>
                          Strongest House
                        </span>
                        <strong>
                          {houseName(
                            walletData
                              .strongestHouse
                          )}
                        </strong>
                      </DataRow>

                      <DataRow>
                        <span>
                          House multiplier
                        </span>
                        <strong>
                          {multi(
                            walletData
                              .houseBoostBps
                          )}
                        </strong>
                      </DataRow>
                    </DataTable>
                  </PlainCard>
                </Grid>

                <Grid
                  style={{
                    marginTop: 18,
                  }}
                >
                  <PlainCard $span={4}>
                    <Label>
                      Round net buy
                    </Label>
                    <Big>
                      {walletData
                        .roundNetBuyUsdg
                        ? `${walletData.roundNetBuyUsdg} USDG`
                        : "—"}
                    </Big>
                  </PlainCard>

                  <PlainCard $span={4}>
                    <Label>
                      Rewards earned
                    </Label>
                    <Big>
                      {
                        walletData
                          .royalRewardsEarnedUsdg
                      }{" "}
                      USDG
                    </Big>
                  </PlainCard>

                  <PlainCard $span={4}>
                    <Label>
                      Rewards paid
                    </Label>
                    <Big>
                      {
                        walletData
                          .royalRewardsPaidUsdg
                      }{" "}
                      USDG
                    </Big>
                  </PlainCard>
                </Grid>

                {walletData.note && (
                  <Notice>
                    {walletData.note}
                  </Notice>
                )}
              </>
            )}
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro>
            <SectionTitle>
              Latest Royal Pot draw
            </SectionTitle>

            <SectionText>
              Every completed round publishes the
              winner, Dice request and payout
              transaction.
            </SectionText>
          </SectionIntro>

          <Grid>
            <Card $span={6}>
              <Label>Winner</Label>

              {site?.latestWinner ? (
                <>
                  <Big>
                    Round #
                    {site.latestWinner.round}
                  </Big>

                  <DataTable>
                    <DataRow>
                      <span>Winner</span>
                      <code
                        title={
                          site.latestWinner
                            .wallet
                        }
                      >
                        {compact(
                          site.latestWinner
                            .wallet
                        )}
                      </code>
                    </DataRow>

                    <DataRow>
                      <span>
                        Dice request
                      </span>
                      <strong>
                        {site.latestWinner
                          .diceRequestId ??
                          "—"}
                      </strong>
                    </DataRow>

                    <DataRow>
                      <span>
                        Proof hash
                      </span>
                      <code
                        title={
                          site.latestWinner
                            .proofHash || ""
                        }
                      >
                        {compact(
                          site.latestWinner
                            .proofHash
                        )}
                      </code>
                    </DataRow>
                  </DataTable>
                </>
              ) : (
                <>
                  <Big>No draw yet</Big>
                  <Small>
                    The first draw begins when
                    the Royal Pot reaches
                    1,000 USDG.
                  </Small>
                </>
              )}
            </Card>

            <Card $span={6}>
              <Label>Payout</Label>

              {site?.latestPayout ? (
                <>
                  <Big>
                    {money(
                      site.latestPayout
                        .amountUsdg
                    )}{" "}
                    USDG
                  </Big>

                  <DataTable>
                    <DataRow>
                      <span>Status</span>
                      <strong>
                        {
                          site.latestPayout
                            .status
                        }
                      </strong>
                    </DataRow>

                    <DataRow>
                      <span>Recipient</span>
                      <code
                        title={
                          site.latestPayout
                            .recipient
                        }
                      >
                        {compact(
                          site.latestPayout
                            .recipient
                        )}
                      </code>
                    </DataRow>

                    <DataRow>
                      <span>
                        Transaction
                      </span>
                      <code
                        title={
                          site.latestPayout
                            .txHash || ""
                        }
                      >
                        {compact(
                          site.latestPayout
                            .txHash
                        )}
                      </code>
                    </DataRow>
                  </DataTable>
                </>
              ) : (
                <>
                  <Big>
                    Waiting for round one
                  </Big>
                  <Small>
                    Confirmed payouts will appear
                    here automatically.
                  </Small>
                </>
              )}
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro>
            <SectionTitle>
              Where creator revenue goes
            </SectionTitle>

            <SectionText>
              ONECOIN uses a 3% creator tax. The
              creator revenue generated by that
              system is split automatically.
            </SectionText>
          </SectionIntro>

          <Grid>
            <PlainCard $span={3}>
              <Label>Royal Pot</Label>
              <Big>40%</Big>
            </PlainCard>

            <PlainCard $span={3}>
              <Label>
                Royal Rewards
              </Label>
              <Big>40%</Big>
            </PlainCard>

            <PlainCard $span={3}>
              <Label>Liquidity</Label>
              <Big>15%</Big>
            </PlainCard>

            <PlainCard $span={3}>
              <Label>Team</Label>
              <Big>5%</Big>
            </PlainCard>
          </Grid>

          <SplitBar
            aria-label="40 percent Royal Pot, 40 percent Royal Rewards, 15 percent Liquidity, 5 percent Team"
          >
            <span />
            <span />
            <span />
            <span />
          </SplitBar>

          <Actions>
            <PrimaryLink
              href="/game2/tokenomics"
            >
              Read full tokenomics
            </PrimaryLink>
          </Actions>
        </Container>
      </Section>

      <Footer>
        <Container>
          <FooterRow>
            <FooterLegal>
              To the fullest extent permitted by
              law, the project and its contributors
              are not liable for trading losses,
              NFT price changes, wallet compromise,
              failed transactions, third party
              services, network interruptions,
              taxes, or unlawful participation.
              NFTs are not investments and may have
              no resale value. Eligibility, claim
              deadlines, prize distribution, and
              the official rules apply. By
              participating, you accept these risks
              and remain responsible for complying
              with local laws. Use only links
              published by the official account.
            </FooterLegal>

            <FooterLink
              href={TWITTER_URL}
              target="_blank"
              rel="noreferrer"
            >
              Official X {"\u2197"}
            </FooterLink>
          </FooterRow>
        </Container>
      </Footer>
    </Page>
  );
}
