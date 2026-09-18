"use client";

import {
  useCallback,
  useEffect,
  useMemo,
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
  claim: `${API}/royal-claim-proof`,
  proof: `${API}/royal-proof-public?round=latest`,
};

const CHAIN_ID_DECIMAL = 4663;
const CHAIN_ID_HEX = "0x1237";
const RPC_URL = "https://rpc.mainnet.chain.robinhood.com";

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
  ok: boolean;
  launch: {
    status: string;
    activated: boolean;
    token: string | null;
    curve: string | null;
    launchBlock: number | string | null;
    launchAt: string | null;
    autoDetectionEnabled: boolean;
    error: string | null;
  };
  pot: {
    round: number;
    status: string;
    funded: number;
    accrued: number;
    totalVisible: number;
    target: number;
    progressPct: number;
    eligibleWallets: number | null;
    snapshotBlock: number | string | null;
    snapshotHash: string | null;
  };
  rewards: {
    phase: string;
    accrued: number;
    funded: number;
    allocated: number;
    paid: number;
    latestEpochId: number | null;
    latestEpochAt: string | null;
    epochMinutes: number;
    nextPushAt: string | null;
    day1EndAt: string | null;
    claimRootId: number | null;
    minClaimUsdg: number;
    autoFallbackUsdg: number;
    lastError: string | null;
  };
  split: {
    creatorTaxBps: number;
    potBps: number;
    rewardsBps: number;
    liquidityBps: number;
    teamBps: number;
  };
  latestWinner: {
    round: number;
    wallet: string;
    diceRequestId: string | null;
    diceRandomness: string | null;
    proofHash: string | null;
    payoutTxHash: string | null;
    status: string;
  } | null;
  latestPayout: {
    round: number;
    status: string;
    recipient: string;
    amountUsdg: number;
    txHash: string | null;
    verifiedAt: string | null;
    confirmedBlock: number | string | null;
  } | null;
  contracts: {
    chainId: number;
    router: string;
    claim: string;
  };
  updatedAt: string;
};

type LaunchStatus = {
  ok: boolean;
  status: string;
  activated?: boolean;
  detected?: boolean;
  token?: string | null;
  curve?: string | null;
  launchBlock?: string | number | null;
  txHash?: string | null;
  lastError?: string | null;
};

type WalletStatus = {
  wallet: string;
  phase: string;
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
  royalRewardsClaimableUsdg: string;
  note?: string;
};

type ClaimStatus = {
  ok: boolean;
  status: string;
  wallet: string;
  claimableRaw: string;
  minClaimRaw?: string;
  canClaim?: boolean;
  cumulativeEntitlementRaw?: string;
  alreadyClaimedRaw?: string;
  rootId?: number;
  transaction?: {
    to: string;
    data: string;
    value: string;
  } | null;
};

type PublicProof = {
  ready: boolean;
  roundId: number | null;
  proofHash?: string | null;
  payout?: {
    status?: string | null;
    txHash?: string | null;
    verifiedAt?: string | null;
    verifiedBlock?: number | string | null;
  };
};

const pulse = keyframes`
  0%,100%{opacity:.45;transform:scale(.94)}
  50%{opacity:1;transform:scale(1)}
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
    radial-gradient(circle at 15% 5%,rgba(255,255,255,.36),transparent 27rem),
    repeating-linear-gradient(97deg,rgba(80,52,22,.025) 0 1px,transparent 1px 5px),
    var(--paper);
  color:var(--ink);
  font-family:"Cormorant Garamond",serif;
`;

const Container = styled.div`
  width:min(1180px,calc(100% - 40px));
  margin:0 auto;
  @media(min-width:760px){width:min(1180px,calc(100% - 80px))}
`;

const Hero = styled.section`
  padding:70px 0 48px;
  border-bottom:2px solid var(--ink);
`;

const Crown = styled.div`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.8rem;
  font-weight:700;
  letter-spacing:.2em;
  text-transform:uppercase;
`;

const Title = styled.h1`
  max-width:900px;
  margin:16px 0 18px;
  font-family:"Cinzel",serif;
  font-size:clamp(2.8rem,7vw,6.5rem);
  line-height:.95;
  font-weight:700;
  letter-spacing:-.025em;
  span{display:block;color:var(--red)}
`;

const Lead = styled.p`
  max-width:760px;
  margin:0;
  font-size:clamp(1.15rem,2vw,1.45rem);
  line-height:1.55;
`;

const StatusRow = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:12px;
  margin-top:28px;
`;

const StatusPill = styled.div<{ $live?: boolean }>`
  display:inline-flex;
  align-items:center;
  gap:9px;
  padding:10px 13px;
  border:1px solid var(--ink);
  background:${p=>p.$live?"#e5efdf":"var(--paper-light)"};
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.09em;
  text-transform:uppercase;

  &::before{
    content:"";
    width:8px;height:8px;border-radius:50%;
    background:${p=>p.$live?"var(--green)":"var(--gold)"};
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
  font-size:.62rem;
  font-weight:700;
  letter-spacing:.07em;
  text-transform:uppercase;
  &:hover{background:var(--red)}
`;

const Section = styled.section`
  padding:48px 0;
  border-bottom:1px solid rgba(37,23,14,.45);
`;

const SectionTitle = styled.h2`
  margin:0 0 22px;
  font-family:"Cinzel",serif;
  font-size:clamp(1.7rem,4vw,3rem);
  line-height:1;
`;

const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(12,1fr);
  gap:18px;
  @media(max-width:800px){display:block}
`;

const Card = styled.article<{ $span?: number }>`
  grid-column:span ${p=>p.$span??4};
  position:relative;
  padding:22px;
  border:2px solid var(--ink);
  background:var(--paper-light);
  box-shadow:7px 8px 0 var(--blue);
  @media(max-width:800px){margin-bottom:18px}
  &::after{
    content:"";
    position:absolute;
    inset:7px;
    border:1px solid rgba(210,161,60,.7);
    pointer-events:none;
  }
`;

const Label = styled.div`
  position:relative;
  z-index:1;
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.67rem;
  font-weight:700;
  letter-spacing:.11em;
  text-transform:uppercase;
`;

const Big = styled.div`
  position:relative;
  z-index:1;
  margin-top:9px;
  font-family:"Cinzel",serif;
  font-size:clamp(1.7rem,4vw,3rem);
  font-weight:700;
  line-height:1;
`;

const Small = styled.p`
  position:relative;
  z-index:1;
  margin:12px 0 0;
  color:rgba(37,23,14,.72);
  line-height:1.45;
`;

const Progress = styled.div`
  position:relative;
  z-index:1;
  height:16px;
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
  position:relative;
  z-index:1;
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
  span:first-child{color:rgba(37,23,14,.65)}
  strong{text-align:right}
  code{
    max-width:64%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size:.76rem;
  }
`;

const WalletForm = styled.form`
  position:relative;
  z-index:1;
  display:flex;
  gap:8px;
  margin-top:16px;
  @media(max-width:600px){flex-direction:column}
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
  &:focus{box-shadow:0 0 0 2px var(--gold)}
`;

const Button = styled.button`
  border:2px solid var(--ink);
  background:var(--red);
  color:#fff8dc;
  padding:11px 16px;
  cursor:pointer;
  font-family:"Cinzel",serif;
  font-size:.7rem;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;
  &:disabled{opacity:.48;cursor:not-allowed}
  &:hover:not(:disabled){background:var(--blue)}
`;

const Secondary = styled(Button)`
  background:var(--paper-light);
  color:var(--ink);
`;

const Notice = styled.div<{ $danger?: boolean }>`
  position:relative;
  z-index:1;
  margin-top:14px;
  padding:11px 12px;
  border:1px solid ${p=>p.$danger?"var(--red)":"rgba(37,23,14,.4)"};
  background:${p=>p.$danger?"#f1d8cc":"rgba(255,255,255,.24)"};
  line-height:1.4;
`;

const Two = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
  @media(max-width:800px){display:block}
`;

const Formula = styled.div`
  position:relative;
  z-index:1;
  margin-top:16px;
  padding:13px;
  background:var(--ink);
  color:var(--paper-light);
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.76rem;
  line-height:1.5;
`;

const Footer = styled.footer`
  padding:35px 0 50px;
  color:rgba(37,23,14,.66);
  font-size:.88rem;
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
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
}

function multi(bps: number | null | undefined) {
  if (bps == null) return "—";
  return `${(bps / 10000).toFixed(
    bps % 1000 === 0 ? 1 : bps % 100 === 0 ? 2 : 3
  )}×`;
}

function rawUsdg(raw: string | null | undefined) {
  if (!raw) return 0;
  try {
    const v = BigInt(raw);
    const whole = v / 1_000_000n;
    const frac = (v % 1_000_000n)
      .toString()
      .padStart(6, "0")
      .replace(/0+$/, "");
    return Number(`${whole}${frac ? `.${frac}` : ""}`);
  } catch {
    return 0;
  }
}

function validWallet(v: string) {
  return /^0x[0-9a-fA-F]{40}$/.test(v.trim());
}

function countdown(iso: string | null, now: number) {
  if (!iso) return "—";
  const ms = Date.parse(iso) - now;
  if (!Number.isFinite(ms)) return "—";
  if (ms <= 0) return "Processing";
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(
    2,
    "0"
  )}:${String(s).padStart(2, "0")}`;
}

async function getJson(url: string) {
  const r = await fetch(url, { cache: "no-store" });
  const j = await r.json();
  if (!r.ok || j?.ok === false) {
    throw new Error(j?.error || `Request failed (${r.status})`);
  }
  return j;
}

export default function RoyalGameClient() {
  const [site, setSite] = useState<SiteState | null>(null);
  const [launch, setLaunch] = useState<LaunchStatus | null>(null);
  const [proof, setProof] = useState<PublicProof | null>(null);
  const [apiError, setApiError] = useState("");
  const [now, setNow] = useState(Date.now());

  const [walletInput, setWalletInput] = useState("");
  const [wallet, setWallet] = useState("");
  const [walletData, setWalletData] = useState<WalletStatus | null>(
    null
  );
  const [claimData, setClaimData] = useState<ClaimStatus | null>(
    null
  );
  const [walletBusy, setWalletBusy] = useState(false);
  const [walletMessage, setWalletMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const refreshSite = useCallback(async () => {
    try {
      const [s, l] = await Promise.all([
        getJson(ENDPOINTS.site),
        getJson(ENDPOINTS.launch),
      ]);
      setSite(s);
      setLaunch(l);
      setApiError("");
    } catch (e) {
      setApiError(e instanceof Error ? e.message : String(e));
    }
  }, []);

  useEffect(() => {
    refreshSite();
    const id = window.setInterval(refreshSite, 2000);
    return () => window.clearInterval(id);
  }, [refreshSite]);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!site?.latestWinner?.round) {
      setProof(null);
      return;
    }
    let live = true;
    const load = async () => {
      try {
        const p = await getJson(
          `${API}/royal-proof-public?round=${site.latestWinner!.round}`
        );
        if (live) setProof(p);
      } catch {
        // The winner can exist briefly before the proof bundle finalises.
      }
    };
    load();
    const id = window.setInterval(load, 8000);
    return () => {
      live = false;
      window.clearInterval(id);
    };
  }, [site?.latestWinner?.round]);

  const displayedToken =
    launch?.token || site?.launch?.token || null;
  const isDetected =
    Boolean(displayedToken) ||
    Boolean(launch?.detected) ||
    Boolean(site?.launch?.activated);
  const isActivated = Boolean(site?.launch?.activated);

  const checkWallet = useCallback(
    async (candidate?: string) => {
      const selected = (candidate || walletInput).trim().toLowerCase();
      if (!validWallet(selected)) {
        setWalletMessage("Enter a valid EVM wallet address.");
        return;
      }

      setWalletBusy(true);
      setWalletMessage("");
      try {
        const [w, c] = await Promise.all([
          getJson(`${ENDPOINTS.wallet}/${selected}`),
          fetch(ENDPOINTS.claim, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ wallet: selected }),
          }).then(async r => {
            const j = await r.json();
            if (!r.ok) throw new Error(j?.error || "Claim lookup failed");
            return j;
          }),
        ]);
        setWallet(selected);
        setWalletInput(selected);
        setWalletData(w);
        setClaimData(c);
      } catch (e) {
        setWalletMessage(
          e instanceof Error ? e.message : "Wallet lookup failed."
        );
      } finally {
        setWalletBusy(false);
      }
    },
    [walletInput]
  );

  useEffect(() => {
    if (!wallet) return;
    const id = window.setInterval(() => checkWallet(wallet), 10000);
    return () => window.clearInterval(id);
  }, [wallet, checkWallet]);

  async function connectWallet() {
    if (!window.ethereum) {
      setWalletMessage(
        "No browser wallet was detected. You can still paste an address."
      );
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = String(accounts?.[0] || "");
      if (!validWallet(account)) throw new Error("No wallet returned.");
      setWalletInput(account);
      await checkWallet(account);
    } catch (e) {
      setWalletMessage(
        e instanceof Error ? e.message : "Wallet connection failed."
      );
    }
  }

  async function ensureChain() {
    if (!window.ethereum) throw new Error("Browser wallet not found.");
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CHAIN_ID_HEX }],
      });
    } catch (e: any) {
      if (e?.code !== 4902) throw e;
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: CHAIN_ID_HEX,
            chainName: "Robinhood Chain",
            nativeCurrency: {
              name: "Ether",
              symbol: "ETH",
              decimals: 18,
            },
            rpcUrls: [RPC_URL],
          },
        ],
      });
    }
  }

  async function submitClaim() {
    if (
      !window.ethereum ||
      !wallet ||
      !claimData?.canClaim ||
      !claimData.transaction
    )
      return;

    setWalletBusy(true);
    setWalletMessage("");
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = String(accounts?.[0] || "").toLowerCase();
      if (account !== wallet.toLowerCase()) {
        throw new Error(
          `Connected wallet is ${compact(
            account
          )}. Connect ${compact(wallet)} to claim.`
        );
      }
      await ensureChain();
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: claimData.transaction.to,
            data: claimData.transaction.data,
            value: "0x0",
          },
        ],
      });
      setWalletMessage(`Claim submitted: ${String(txHash)}`);
      window.setTimeout(() => checkWallet(wallet), 5000);
    } catch (e) {
      setWalletMessage(
        e instanceof Error ? e.message : "Claim transaction failed."
      );
    } finally {
      setWalletBusy(false);
    }
  }

  async function copyToken() {
    if (!displayedToken) return;
    try {
      await navigator.clipboard.writeText(displayedToken);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  function onWalletSubmit(e: FormEvent) {
    e.preventDefault();
    checkWallet();
  }

  const progress = Math.max(
    0,
    Math.min(100, Number(site?.pot?.progressPct || 0))
  );
  const claimable = rawUsdg(claimData?.claimableRaw);
  const autoThreshold = site?.rewards?.autoFallbackUsdg ?? 5;

  const phaseText = useMemo(() => {
    if (!isDetected) return "Awaiting the next game";
    if (!isActivated) return "The contract has appeared";
    return "ONECOIN is live";
  }, [isDetected, isActivated]);

  return (
    <Page>
      <Hero>
        <Container>
          <Crown>✦ One Coin · Game II</Crown>
          <Title>
            The kingdom <span>moves again.</span>
          </Title>
          <Lead>
            Royal Pot and Royal Rewards run from creator revenue.
            Hold ONECOIN, strengthen your weight with your NFTs, and
            follow every draw and payout onchain.
          </Lead>

          <StatusRow>
            <StatusPill $live={isActivated}>{phaseText}</StatusPill>
            {displayedToken ? (
              <CaBox>
                <code>{displayedToken}</code>
                <TinyButton type="button" onClick={copyToken}>
                  {copied ? "Copied" : "Copy CA"}
                </TinyButton>
              </CaBox>
            ) : (
              <CaBox>
                <code>
                  CA will appear here automatically after the verified
                  Pons launch.
                </code>
              </CaBox>
            )}
          </StatusRow>

          {apiError && <Notice $danger>{apiError}</Notice>}
          {launch?.lastError && (
            <Notice $danger>{launch.lastError}</Notice>
          )}
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionTitle>The Royal Engine</SectionTitle>
          <Grid>
            <Card $span={5}>
              <Label>Royal Pot · Round #{site?.pot?.round ?? 1}</Label>
              <Big>
                {money(site?.pot?.totalVisible ?? 0)} /{" "}
                {money(site?.pot?.target ?? 1000)} USDG
              </Big>
              <Progress aria-label="Royal Pot progress">
                <Fill style={{ width: `${progress}%` }} />
              </Progress>
              <DataTable>
                <DataRow>
                  <span>Funded</span>
                  <strong>{money(site?.pot?.funded)} USDG</strong>
                </DataRow>
                <DataRow>
                  <span>Accruing</span>
                  <strong>{money(site?.pot?.accrued)} USDG</strong>
                </DataRow>
                <DataRow>
                  <span>Round state</span>
                  <strong>{site?.pot?.status || "prelaunch"}</strong>
                </DataRow>
                <DataRow>
                  <span>Eligible wallets</span>
                  <strong>{site?.pot?.eligibleWallets ?? "—"}</strong>
                </DataRow>
              </DataTable>
              <Small>
                Every funded 1,000 USDG closes a weighted snapshot and
                starts one verifiable Dice draw for one 1,000 USDG
                winner.
              </Small>
            </Card>

            <Card $span={4}>
              <Label>Royal Rewards</Label>
              <Big>{money(site?.rewards?.accrued)} USDG</Big>
              <DataTable>
                <DataRow>
                  <span>Funded</span>
                  <strong>{money(site?.rewards?.funded)}</strong>
                </DataRow>
                <DataRow>
                  <span>Allocated</span>
                  <strong>{money(site?.rewards?.allocated)}</strong>
                </DataRow>
                <DataRow>
                  <span>Paid</span>
                  <strong>{money(site?.rewards?.paid)}</strong>
                </DataRow>
                <DataRow>
                  <span>Phase</span>
                  <strong>{site?.rewards?.phase || "prelaunch"}</strong>
                </DataRow>
              </DataTable>
              <Small>
                Weight is calculated every 30 minutes. Day 1 settles
                automatically; Day 2 moves to cumulative claims.
              </Small>
            </Card>

            <Card $span={3}>
              <Label>Next Day-1 Send</Label>
              <Big>{countdown(site?.rewards?.nextPushAt || null, now)}</Big>
              <Small>
                Day 1 sends eligible balances hourly with a 1 USDG
                minimum. After Day 1, the claim chamber opens.
              </Small>
              <DataTable>
                <DataRow>
                  <span>Manual claim min</span>
                  <strong>
                    {money(site?.rewards?.minClaimUsdg ?? 1)} USDG
                  </strong>
                </DataRow>
                <DataRow>
                  <span>Auto fallback</span>
                  <strong>
                    {money(site?.rewards?.autoFallbackUsdg ?? 5)} USDG
                  </strong>
                </DataRow>
              </DataTable>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Your Royal Weight</SectionTitle>
          <Card $span={12}>
            <Label>No connection required to inspect a wallet</Label>
            <WalletForm onSubmit={onWalletSubmit}>
              <Input
                value={walletInput}
                onChange={e => setWalletInput(e.target.value)}
                placeholder="0x… wallet address"
                spellCheck={false}
                autoCapitalize="off"
              />
              <Button type="submit" disabled={walletBusy}>
                {walletBusy ? "Reading…" : "Check weight"}
              </Button>
              <Secondary
                type="button"
                onClick={connectWallet}
                disabled={walletBusy}
              >
                Connect
              </Secondary>
            </WalletForm>

            {walletMessage && <Notice>{walletMessage}</Notice>}

            {walletData && (
              <>
                <Two>
                  <DataTable>
                    <DataRow>
                      <span>ONECOIN balance</span>
                      <strong>{walletData.onecoinBalance ?? "Prelaunch"}</strong>
                    </DataRow>
                    <DataRow>
                      <span>Estimated value</span>
                      <strong>
                        {walletData.estimatedValueUsdg
                          ? `$${walletData.estimatedValueUsdg}`
                          : "—"}
                      </strong>
                    </DataRow>
                    <DataRow>
                      <span>Eligible</span>
                      <strong>
                        {walletData.eligible == null
                          ? "After launch"
                          : walletData.eligible
                            ? "Yes"
                            : "No"}
                      </strong>
                    </DataRow>
                    <DataRow>
                      <span>Base entries</span>
                      <strong>{walletData.baseEntries ?? "—"}</strong>
                    </DataRow>
                    <DataRow>
                      <span>Estimated Royal Weight</span>
                      <strong>
                        {walletData.estimatedRoyalWeight ?? "—"}
                      </strong>
                    </DataRow>
                  </DataTable>

                  <DataTable>
                    <DataRow>
                      <span>Early-buyer boost</span>
                      <strong>{multi(walletData.earlyBoostBps)}</strong>
                    </DataRow>
                    <DataRow>
                      <span>Round net-buy boost</span>
                      <strong>
                        {multi(walletData.roundNetBuyBoostBps)}
                      </strong>
                    </DataRow>
                    <DataRow>
                      <span>NFT count</span>
                      <strong>{walletData.nftCount}</strong>
                    </DataRow>
                    <DataRow>
                      <span>NFT-count multiplier</span>
                      <strong>
                        {multi(walletData.nftCountBoostBps)}
                      </strong>
                    </DataRow>
                    <DataRow>
                      <span>Strongest House</span>
                      <strong>{houseName(walletData.strongestHouse)}</strong>
                    </DataRow>
                    <DataRow>
                      <span>House multiplier</span>
                      <strong>{multi(walletData.houseBoostBps)}</strong>
                    </DataRow>
                  </DataTable>
                </Two>

                <Formula>
                  Royal Weight = Base Entries × Early Boost × Current
                  Round Net-Buy Boost × NFT-Count Multiplier × Strongest
                  House Multiplier
                </Formula>

                <Two>
                  <DataTable>
                    <DataRow>
                      <span>Round net buy</span>
                      <strong>
                        {walletData.roundNetBuyUsdg
                          ? `${walletData.roundNetBuyUsdg} USDG`
                          : "—"}
                      </strong>
                    </DataRow>
                    <DataRow>
                      <span>Rewards earned</span>
                      <strong>
                        {walletData.royalRewardsEarnedUsdg} USDG
                      </strong>
                    </DataRow>
                  </DataTable>
                  <DataTable>
                    <DataRow>
                      <span>Rewards paid</span>
                      <strong>
                        {walletData.royalRewardsPaidUsdg} USDG
                      </strong>
                    </DataRow>
                    <DataRow>
                      <span>Rewards outstanding</span>
                      <strong>
                        {walletData.royalRewardsClaimableUsdg} USDG
                      </strong>
                    </DataRow>
                  </DataTable>
                </Two>
                {walletData.note && <Notice>{walletData.note}</Notice>}
              </>
            )}
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>The Claim Chamber</SectionTitle>
          <Grid>
            <Card $span={7}>
              <Label>Day 2+ cumulative claim</Label>
              <Big>
                {claimData ? `${money(claimable)} USDG` : "Check a wallet"}
              </Big>

              {claimData?.status === "prelaunch" && (
                <Notice>
                  Claims activate automatically after launch and the
                  Day-1 push phase.
                </Notice>
              )}

              {claimData?.status === "no_active_root" && (
                <Notice>
                  Claim phase is active, but the next cumulative root
                  has not been published yet.
                </Notice>
              )}

              {claimData?.status === "active" && (
                <>
                  <DataTable>
                    <DataRow>
                      <span>Claimable</span>
                      <strong>{money(claimable)} USDG</strong>
                    </DataRow>
                    <DataRow>
                      <span>Claim root</span>
                      <strong>#{claimData.rootId ?? "—"}</strong>
                    </DataRow>
                    <DataRow>
                      <span>Manual claim available</span>
                      <strong>{claimData.canClaim ? "Yes" : "No"}</strong>
                    </DataRow>
                  </DataTable>

                  {claimable >= autoThreshold && (
                    <Notice>
                      Automatic fallback eligible. If this remains
                      unclaimed, the production worker checks it every
                      five minutes and can settle it automatically.
                    </Notice>
                  )}

                  <Button
                    type="button"
                    onClick={submitClaim}
                    disabled={
                      walletBusy ||
                      !claimData.canClaim ||
                      !claimData.transaction
                    }
                    style={{ marginTop: 14 }}
                  >
                    Claim USDG
                  </Button>
                </>
              )}
            </Card>

            <Card $span={5}>
              <Label>Settlement rules</Label>
              <DataTable>
                <DataRow>
                  <span>Day 1</span>
                  <strong>Hourly automatic push</strong>
                </DataRow>
                <DataRow>
                  <span>Day-1 minimum</span>
                  <strong>1 USDG</strong>
                </DataRow>
                <DataRow>
                  <span>Day 2+</span>
                  <strong>Direct cumulative claim</strong>
                </DataRow>
                <DataRow>
                  <span>Automatic fallback</span>
                  <strong>5 USDG+</strong>
                </DataRow>
              </DataTable>
              <Small>
                The website never holds your key. A manual claim is a
                transaction from your own connected wallet using the
                public Merkle proof generated by the production
                backend.
              </Small>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Winner & Proof</SectionTitle>
          <Grid>
            <Card $span={6}>
              <Label>Latest Royal Pot round</Label>
              {site?.latestWinner ? (
                <>
                  <Big>Round #{site.latestWinner.round}</Big>
                  <DataTable>
                    <DataRow>
                      <span>Winner</span>
                      <code title={site.latestWinner.wallet}>
                        {site.latestWinner.wallet}
                      </code>
                    </DataRow>
                    <DataRow>
                      <span>Dice request</span>
                      <strong>
                        {site.latestWinner.diceRequestId ?? "—"}
                      </strong>
                    </DataRow>
                    <DataRow>
                      <span>Randomness</span>
                      <code title={site.latestWinner.diceRandomness || ""}>
                        {compact(site.latestWinner.diceRandomness)}
                      </code>
                    </DataRow>
                    <DataRow>
                      <span>Proof hash</span>
                      <code title={proof?.proofHash || site.latestWinner.proofHash || ""}>
                        {compact(
                          proof?.proofHash ||
                            site.latestWinner.proofHash
                        )}
                      </code>
                    </DataRow>
                  </DataTable>
                </>
              ) : (
                <>
                  <Big>Awaiting the first round</Big>
                  <Small>
                    Once the Royal Pot reaches 1,000 USDG, the snapshot,
                    Dice request, winner and payout proof will appear
                    here automatically.
                  </Small>
                </>
              )}
            </Card>

            <Card $span={6}>
              <Label>Latest payout</Label>
              {site?.latestPayout ? (
                <>
                  <Big>{money(site.latestPayout.amountUsdg)} USDG</Big>
                  <DataTable>
                    <DataRow>
                      <span>Status</span>
                      <strong>{site.latestPayout.status}</strong>
                    </DataRow>
                    <DataRow>
                      <span>Recipient</span>
                      <code title={site.latestPayout.recipient}>
                        {compact(site.latestPayout.recipient)}
                      </code>
                    </DataRow>
                    <DataRow>
                      <span>Transaction</span>
                      <code title={site.latestPayout.txHash || ""}>
                        {compact(site.latestPayout.txHash)}
                      </code>
                    </DataRow>
                    <DataRow>
                      <span>Confirmed block</span>
                      <strong>
                        {site.latestPayout.confirmedBlock ?? "—"}
                      </strong>
                    </DataRow>
                  </DataTable>
                </>
              ) : (
                <>
                  <Big>No payout yet</Big>
                  <Small>
                    Confirmed Royal Pot payouts and their transaction
                    hashes will be published here.
                  </Small>
                </>
              )}
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>The Decree</SectionTitle>
          <Grid>
            <Card $span={3}>
              <Label>Royal Pot</Label>
              <Big>40%</Big>
              <Small>of creator revenue</Small>
            </Card>
            <Card $span={3}>
              <Label>Royal Rewards</Label>
              <Big>40%</Big>
              <Small>weighted holder rewards</Small>
            </Card>
            <Card $span={3}>
              <Label>Liquidity</Label>
              <Big>15%</Big>
              <Small>allocated to liquidity</Small>
            </Card>
            <Card $span={3}>
              <Label>Team</Label>
              <Big>5%</Big>
              <Small>team allocation</Small>
            </Card>
          </Grid>
          <Notice>
            Launch guard: USDG pair · 3% creator tax · buyback OFF ·
            production RevenueRouter recipient. The site and backend
            switch live automatically only after those onchain
            conditions match.
          </Notice>
        </Container>
      </Section>

      <Footer>
        <Container>
          ONECOIN · Robinhood Chain · Game II. Use only links published
          by the official ONECOIN account. Wallet weights shown before a
          snapshot are estimates; the locked round snapshot is final for
          each draw.
        </Container>
      </Footer>
    </Page>
  );
}
