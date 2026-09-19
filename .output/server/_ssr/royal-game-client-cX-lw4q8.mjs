import { l as __toESM, o as require_react, t as require_jsx_runtime } from "./ssr.mjs";
import { a as qt, t as Tt } from "./styled-components.esm-CfFvPSBA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/royal-game-client-cX-lw4q8.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var API = "https://ikslmrrplnwwipdnteza.supabase.co/functions/v1";
var ENDPOINTS = {
	site: `${API}/royal-site-state`,
	launch: `${API}/royal-launch-status`,
	wallet: `${API}/royal-pot-api/api/wallet`,
	claim: `${API}/royal-claim-proof`,
	proof: `${API}/royal-proof-public?round=latest`
};
var CHAIN_ID_HEX = "0x1237";
var RPC_URL = "https://rpc.mainnet.chain.robinhood.com";
var pulse = qt`
  0%,100%{opacity:.45;transform:scale(.94)}
  50%{opacity:1;transform:scale(1)}
`;
var Page = Tt.main`
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
var Container = Tt.div`
  width:min(1180px,calc(100% - 40px));
  margin:0 auto;
  @media(min-width:760px){width:min(1180px,calc(100% - 80px))}
`;
var Hero = Tt.section`
  padding:70px 0 48px;
  border-bottom:2px solid var(--ink);
`;
var Crown = Tt.div`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.8rem;
  font-weight:700;
  letter-spacing:.2em;
  text-transform:uppercase;
`;
var Title = Tt.h1`
  max-width:900px;
  margin:16px 0 18px;
  font-family:"Cinzel",serif;
  font-size:clamp(2.8rem,7vw,6.5rem);
  line-height:.95;
  font-weight:700;
  letter-spacing:-.025em;
  span{display:block;color:var(--red)}
`;
var Lead = Tt.p`
  max-width:760px;
  margin:0;
  font-size:clamp(1.15rem,2vw,1.45rem);
  line-height:1.55;
`;
var StatusRow = Tt.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:12px;
  margin-top:28px;
`;
var StatusPill = Tt.div`
  display:inline-flex;
  align-items:center;
  gap:9px;
  padding:10px 13px;
  border:1px solid var(--ink);
  background:${(p) => p.$live ? "#e5efdf" : "var(--paper-light)"};
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.09em;
  text-transform:uppercase;

  &::before{
    content:"";
    width:8px;height:8px;border-radius:50%;
    background:${(p) => p.$live ? "var(--green)" : "var(--gold)"};
    animation:${pulse} 1.8s ease-in-out infinite;
  }
`;
var CaBox = Tt.div`
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
var TinyButton = Tt.button`
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
var Section = Tt.section`
  padding:48px 0;
  border-bottom:1px solid rgba(37,23,14,.45);
`;
var SectionTitle = Tt.h2`
  margin:0 0 22px;
  font-family:"Cinzel",serif;
  font-size:clamp(1.7rem,4vw,3rem);
  line-height:1;
`;
var Grid = Tt.div`
  display:grid;
  grid-template-columns:repeat(12,1fr);
  gap:18px;
  @media(max-width:800px){display:block}
`;
var Card = Tt.article`
  grid-column:span ${(p) => p.$span ?? 4};
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
var Label = Tt.div`
  position:relative;
  z-index:1;
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.67rem;
  font-weight:700;
  letter-spacing:.11em;
  text-transform:uppercase;
`;
var Big = Tt.div`
  position:relative;
  z-index:1;
  margin-top:9px;
  font-family:"Cinzel",serif;
  font-size:clamp(1.7rem,4vw,3rem);
  font-weight:700;
  line-height:1;
`;
var Small = Tt.p`
  position:relative;
  z-index:1;
  margin:12px 0 0;
  color:rgba(37,23,14,.72);
  line-height:1.45;
`;
var Progress = Tt.div`
  position:relative;
  z-index:1;
  height:16px;
  margin-top:18px;
  border:1px solid var(--ink);
  background:#d7ca9e;
  overflow:hidden;
`;
var Fill = Tt.div`
  height:100%;
  background:var(--red);
  transition:width .4s ease;
`;
var DataTable = Tt.div`
  position:relative;
  z-index:1;
  margin-top:16px;
  border-top:1px solid rgba(37,23,14,.35);
`;
var DataRow = Tt.div`
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
var WalletForm = Tt.form`
  position:relative;
  z-index:1;
  display:flex;
  gap:8px;
  margin-top:16px;
  @media(max-width:600px){flex-direction:column}
`;
var Input = Tt.input`
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
var Button = Tt.button`
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
var Secondary = Tt(Button)`
  background:var(--paper-light);
  color:var(--ink);
`;
var Notice = Tt.div`
  position:relative;
  z-index:1;
  margin-top:14px;
  padding:11px 12px;
  border:1px solid ${(p) => p.$danger ? "var(--red)" : "rgba(37,23,14,.4)"};
  background:${(p) => p.$danger ? "#f1d8cc" : "rgba(255,255,255,.24)"};
  line-height:1.4;
`;
var Two = Tt.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
  @media(max-width:800px){display:block}
`;
var Formula = Tt.div`
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
var Footer = Tt.footer`
  padding:35px 0 50px;
  color:rgba(37,23,14,.66);
  font-size:.88rem;
`;
function money(value) {
	const n = Number(value ?? 0);
	return new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(Number.isFinite(n) ? n : 0);
}
function compact(value) {
	if (!value) return "—";
	return value.length > 16 ? `${value.slice(0, 8)}…${value.slice(-6)}` : value;
}
function houseName(value) {
	if (!value) return "None";
	if (value === "seven_chosen") return "The Seven Chosen";
	return value.split("_").map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
}
function multi(bps) {
	if (bps == null) return "—";
	return `${(bps / 1e4).toFixed(bps % 1e3 === 0 ? 1 : bps % 100 === 0 ? 2 : 3)}×`;
}
function rawUsdg(raw) {
	if (!raw) return 0;
	try {
		const v = BigInt(raw);
		const whole = v / 1000000n;
		const frac = (v % 1000000n).toString().padStart(6, "0").replace(/0+$/, "");
		return Number(`${whole}${frac ? `.${frac}` : ""}`);
	} catch {
		return 0;
	}
}
function validWallet(v) {
	return /^0x[0-9a-fA-F]{40}$/.test(v.trim());
}
function countdown(iso, now) {
	if (!iso) return "—";
	const ms = Date.parse(iso) - now;
	if (!Number.isFinite(ms)) return "—";
	if (ms <= 0) return "Processing";
	const total = Math.floor(ms / 1e3);
	const h = Math.floor(total / 3600);
	const m = Math.floor(total % 3600 / 60);
	const s = total % 60;
	return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
async function getJson(url) {
	const r = await fetch(url, { cache: "no-store" });
	const j = await r.json();
	if (!r.ok || j?.ok === false) throw new Error(j?.error || `Request failed (${r.status})`);
	return j;
}
function RoyalGameClient() {
	const [site, setSite] = (0, import_react.useState)(null);
	const [launch, setLaunch] = (0, import_react.useState)(null);
	const [proof, setProof] = (0, import_react.useState)(null);
	const [apiError, setApiError] = (0, import_react.useState)("");
	const [now, setNow] = (0, import_react.useState)(Date.now());
	const [walletInput, setWalletInput] = (0, import_react.useState)("");
	const [wallet, setWallet] = (0, import_react.useState)("");
	const [walletData, setWalletData] = (0, import_react.useState)(null);
	const [claimData, setClaimData] = (0, import_react.useState)(null);
	const [walletBusy, setWalletBusy] = (0, import_react.useState)(false);
	const [walletMessage, setWalletMessage] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const refreshSite = (0, import_react.useCallback)(async () => {
		try {
			const [s, l] = await Promise.all([getJson(ENDPOINTS.site), getJson(ENDPOINTS.launch)]);
			setSite(s);
			setLaunch(l);
			setApiError("");
		} catch (e) {
			setApiError(e instanceof Error ? e.message : String(e));
		}
	}, []);
	(0, import_react.useEffect)(() => {
		refreshSite();
		const id = window.setInterval(refreshSite, 2e3);
		return () => window.clearInterval(id);
	}, [refreshSite]);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!site?.latestWinner?.round) {
			setProof(null);
			return;
		}
		let live = true;
		const load = async () => {
			try {
				const p = await getJson(`${API}/royal-proof-public?round=${site.latestWinner.round}`);
				if (live) setProof(p);
			} catch {}
		};
		load();
		const id = window.setInterval(load, 8e3);
		return () => {
			live = false;
			window.clearInterval(id);
		};
	}, [site?.latestWinner?.round]);
	const displayedToken = launch?.token || site?.launch?.token || null;
	const isDetected = Boolean(displayedToken) || Boolean(launch?.detected) || Boolean(site?.launch?.activated);
	const isActivated = Boolean(site?.launch?.activated);
	const checkWallet = (0, import_react.useCallback)(async (candidate) => {
		const selected = (candidate || walletInput).trim().toLowerCase();
		if (!validWallet(selected)) {
			setWalletMessage("Enter a valid EVM wallet address.");
			return;
		}
		setWalletBusy(true);
		setWalletMessage("");
		try {
			const [w, c] = await Promise.all([getJson(`${ENDPOINTS.wallet}/${selected}`), fetch(ENDPOINTS.claim, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ wallet: selected })
			}).then(async (r) => {
				const j = await r.json();
				if (!r.ok) throw new Error(j?.error || "Claim lookup failed");
				return j;
			})]);
			setWallet(selected);
			setWalletInput(selected);
			setWalletData(w);
			setClaimData(c);
		} catch (e) {
			setWalletMessage(e instanceof Error ? e.message : "Wallet lookup failed.");
		} finally {
			setWalletBusy(false);
		}
	}, [walletInput]);
	(0, import_react.useEffect)(() => {
		if (!wallet) return;
		const id = window.setInterval(() => checkWallet(wallet), 1e4);
		return () => window.clearInterval(id);
	}, [wallet, checkWallet]);
	async function connectWallet() {
		if (!window.ethereum) {
			setWalletMessage("No browser wallet was detected. You can still paste an address.");
			return;
		}
		try {
			const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
			const account = String(accounts?.[0] || "");
			if (!validWallet(account)) throw new Error("No wallet returned.");
			setWalletInput(account);
			await checkWallet(account);
		} catch (e) {
			setWalletMessage(e instanceof Error ? e.message : "Wallet connection failed.");
		}
	}
	async function ensureChain() {
		if (!window.ethereum) throw new Error("Browser wallet not found.");
		try {
			await window.ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: CHAIN_ID_HEX }]
			});
		} catch (e) {
			if (e?.code !== 4902) throw e;
			await window.ethereum.request({
				method: "wallet_addEthereumChain",
				params: [{
					chainId: CHAIN_ID_HEX,
					chainName: "Robinhood Chain",
					nativeCurrency: {
						name: "Ether",
						symbol: "ETH",
						decimals: 18
					},
					rpcUrls: [RPC_URL]
				}]
			});
		}
	}
	async function submitClaim() {
		if (!window.ethereum || !wallet || !claimData?.canClaim || !claimData.transaction) return;
		setWalletBusy(true);
		setWalletMessage("");
		try {
			const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
			const account = String(accounts?.[0] || "").toLowerCase();
			if (account !== wallet.toLowerCase()) throw new Error(`Connected wallet is ${compact(account)}. Connect ${compact(wallet)} to claim.`);
			await ensureChain();
			const txHash = await window.ethereum.request({
				method: "eth_sendTransaction",
				params: [{
					from: account,
					to: claimData.transaction.to,
					data: claimData.transaction.data,
					value: "0x0"
				}]
			});
			setWalletMessage(`Claim submitted: ${String(txHash)}`);
			window.setTimeout(() => checkWallet(wallet), 5e3);
		} catch (e) {
			setWalletMessage(e instanceof Error ? e.message : "Claim transaction failed.");
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
	function onWalletSubmit(e) {
		e.preventDefault();
		checkWallet();
	}
	const progress = Math.max(0, Math.min(100, Number(site?.pot?.progressPct || 0)));
	const claimable = rawUsdg(claimData?.claimableRaw);
	const autoThreshold = site?.rewards?.autoFallbackUsdg ?? 5;
	const phaseText = (0, import_react.useMemo)(() => {
		if (!isDetected) return "Awaiting the next game";
		if (!isActivated) return "The contract has appeared";
		return "ONECOIN is live";
	}, [isDetected, isActivated]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { children: "✦ One Coin · Game II" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: ["The kingdom ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "moves again." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "Royal Pot and Royal Rewards run from creator revenue. Hold ONECOIN, strengthen your weight with your NFTs, and follow every draw and payout onchain." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
				$live: isActivated,
				children: phaseText
			}), displayedToken ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CaBox, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: displayedToken }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TinyButton, {
				type: "button",
				onClick: copyToken,
				children: copied ? "Copied" : "Copy CA"
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "CA will appear here automatically after the verified Pons launch." }) })] }),
			apiError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				$danger: true,
				children: apiError
			}),
			launch?.lastError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				$danger: true,
				children: launch.lastError
			})
		] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "The Royal Engine" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				$span: 5,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Royal Pot · Round #", site?.pot?.round ?? 1] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Big, { children: [
						money(site?.pot?.totalVisible ?? 0),
						" /",
						" ",
						money(site?.pot?.target ?? 1e3),
						" USDG"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						"aria-label": "Royal Pot progress",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fill, { style: { width: `${progress}%` } })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Funded" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [money(site?.pot?.funded), " USDG"] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Accruing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [money(site?.pot?.accrued), " USDG"] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Round state" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: site?.pot?.status || "prelaunch" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Eligible wallets" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: site?.pot?.eligibleWallets ?? "—" })] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Small, { children: "Every funded 1,000 USDG closes a weighted snapshot and starts one verifiable Dice draw for one 1,000 USDG winner." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				$span: 4,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Royal Rewards" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Big, { children: [money(site?.rewards?.accrued), " USDG"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Funded" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(site?.rewards?.funded) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Allocated" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(site?.rewards?.allocated) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paid" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(site?.rewards?.paid) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phase" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: site?.rewards?.phase || "prelaunch" })] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Small, { children: "Weight is calculated every 30 minutes. Day 1 settles automatically; Day 2 moves to cumulative claims." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				$span: 3,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Next Day-1 Send" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { children: countdown(site?.rewards?.nextPushAt || null, now) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Small, { children: "Day 1 sends eligible balances hourly with a 1 USDG minimum. After Day 1, the claim chamber opens." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Manual claim min" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [money(site?.rewards?.minClaimUsdg ?? 1), " USDG"] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Auto fallback" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [money(site?.rewards?.autoFallbackUsdg ?? 5), " USDG"] })] })] })
				]
			})
		] })] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Your Royal Weight" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			$span: 12,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "No connection required to inspect a wallet" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WalletForm, {
					onSubmit: onWalletSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: walletInput,
							onChange: (e) => setWalletInput(e.target.value),
							placeholder: "0x… wallet address",
							spellCheck: false,
							autoCapitalize: "off"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: walletBusy,
							children: walletBusy ? "Reading…" : "Check weight"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Secondary, {
							type: "button",
							onClick: connectWallet,
							disabled: walletBusy,
							children: "Connect"
						})
					]
				}),
				walletMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: walletMessage }),
				walletData && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Two, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ONECOIN balance" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: walletData.onecoinBalance ?? "Prelaunch" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Estimated value" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: walletData.estimatedValueUsdg ? `$${walletData.estimatedValueUsdg}` : "—" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Eligible" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: walletData.eligible == null ? "After launch" : walletData.eligible ? "Yes" : "No" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Base entries" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: walletData.baseEntries ?? "—" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Estimated Royal Weight" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: walletData.estimatedRoyalWeight ?? "—" })] })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Early-buyer boost" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: multi(walletData.earlyBoostBps) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Round net-buy boost" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: multi(walletData.roundNetBuyBoostBps) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NFT count" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: walletData.nftCount })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NFT-count multiplier" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: multi(walletData.nftCountBoostBps) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Strongest House" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: houseName(walletData.strongestHouse) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "House multiplier" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: multi(walletData.houseBoostBps) })] })
					] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, { children: "Royal Weight = Base Entries × Early Boost × Current Round Net-Buy Boost × NFT-Count Multiplier × Strongest House Multiplier" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Two, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Round net buy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: walletData.roundNetBuyUsdg ? `${walletData.roundNetBuyUsdg} USDG` : "—" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rewards earned" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [walletData.royalRewardsEarnedUsdg, " USDG"] })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rewards paid" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [walletData.royalRewardsPaidUsdg, " USDG"] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rewards outstanding" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [walletData.royalRewardsClaimableUsdg, " USDG"] })] })] })] }),
					walletData.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: walletData.note })
				] })
			]
		})] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "The Claim Chamber" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			$span: 7,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Day 2+ cumulative claim" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { children: claimData ? `${money(claimable)} USDG` : "Check a wallet" }),
				claimData?.status === "prelaunch" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: "Claims activate automatically after launch and the Day-1 push phase." }),
				claimData?.status === "no_active_root" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: "Claim phase is active, but the next cumulative root has not been published yet." }),
				claimData?.status === "active" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Claimable" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [money(claimable), " USDG"] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Claim root" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["#", claimData.rootId ?? "—"] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Manual claim available" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: claimData.canClaim ? "Yes" : "No" })] })
					] }),
					claimable >= autoThreshold && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: "Automatic fallback eligible. If this remains unclaimed, the production worker checks it every five minutes and can settle it automatically." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: submitClaim,
						disabled: walletBusy || !claimData.canClaim || !claimData.transaction,
						style: { marginTop: 14 },
						children: "Claim USDG"
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			$span: 5,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Settlement rules" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Day 1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hourly automatic push" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Day-1 minimum" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1 USDG" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Day 2+" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Direct cumulative claim" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Automatic fallback" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5 USDG+" })] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Small, { children: "The website never holds your key. A manual claim is a transaction from your own connected wallet using the public Merkle proof generated by the production backend." })
			]
		})] })] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Winner & Proof" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			$span: 6,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Latest Royal Pot round" }), site?.latestWinner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Big, { children: ["Round #", site.latestWinner.round] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Winner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					title: site.latestWinner.wallet,
					children: site.latestWinner.wallet
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dice request" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: site.latestWinner.diceRequestId ?? "—" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Randomness" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					title: site.latestWinner.diceRandomness || "",
					children: compact(site.latestWinner.diceRandomness)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Proof hash" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					title: proof?.proofHash || site.latestWinner.proofHash || "",
					children: compact(proof?.proofHash || site.latestWinner.proofHash)
				})] })
			] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { children: "Awaiting the first round" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Small, { children: "Once the Royal Pot reaches 1,000 USDG, the snapshot, Dice request, winner and payout proof will appear here automatically." })] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			$span: 6,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Latest payout" }), site?.latestPayout ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Big, { children: [money(site.latestPayout.amountUsdg), " USDG"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: site.latestPayout.status })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Recipient" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					title: site.latestPayout.recipient,
					children: compact(site.latestPayout.recipient)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Transaction" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					title: site.latestPayout.txHash || "",
					children: compact(site.latestPayout.txHash)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confirmed block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: site.latestPayout.confirmedBlock ?? "—" })] })
			] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { children: "No payout yet" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Small, { children: "Confirmed Royal Pot payouts and their transaction hashes will be published here." })] })]
		})] })] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "The Decree" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					$span: 3,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Royal Pot" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { children: "40%" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Small, { children: "of creator revenue" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					$span: 3,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Royal Rewards" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { children: "40%" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Small, { children: "weighted holder rewards" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					$span: 3,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Liquidity" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { children: "15%" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Small, { children: "allocated to liquidity" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					$span: 3,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Team" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { children: "5%" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Small, { children: "team allocation" })
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: "Launch guard: USDG pair · 3% creator tax · buyback OFF · production RevenueRouter recipient. The site and backend switch live automatically only after those onchain conditions match." })
		] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: "ONECOIN · Robinhood Chain · Game II. Use only links published by the official ONECOIN account. Wallet weights shown before a snapshot are estimates; the locked round snapshot is final for each draw." }) })
	] });
}
//#endregion
export { RoyalGameClient as default };
