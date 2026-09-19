import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n}from"./framework-B8WyT5R3.js";import{i as r,t as i}from"./styled-components.browser.esm-By_7gqKe.js";var a=e(t(),1),o=n(),s=`https://ikslmrrplnwwipdnteza.supabase.co/functions/v1`,c={site:`${s}/royal-site-state`,launch:`${s}/royal-launch-status`,wallet:`${s}/royal-pot-api/api/wallet`,claim:`${s}/royal-claim-proof`,proof:`${s}/royal-proof-public?round=latest`},l=`0x1237`,ee=`https://rpc.mainnet.chain.robinhood.com`,u=i`
  0%,100%{opacity:.45;transform:scale(.94)}
  50%{opacity:1;transform:scale(1)}
`,d=r.main`
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
`,f=r.div`
  width:min(1180px,calc(100% - 40px));
  margin:0 auto;
  @media(min-width:760px){width:min(1180px,calc(100% - 80px))}
`,te=r.section`
  padding:70px 0 48px;
  border-bottom:2px solid var(--ink);
`,ne=r.div`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.8rem;
  font-weight:700;
  letter-spacing:.2em;
  text-transform:uppercase;
`,re=r.h1`
  max-width:900px;
  margin:16px 0 18px;
  font-family:"Cinzel",serif;
  font-size:clamp(2.8rem,7vw,6.5rem);
  line-height:.95;
  font-weight:700;
  letter-spacing:-.025em;
  span{display:block;color:var(--red)}
`,ie=r.p`
  max-width:760px;
  margin:0;
  font-size:clamp(1.15rem,2vw,1.45rem);
  line-height:1.55;
`,ae=r.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:12px;
  margin-top:28px;
`,oe=r.div`
  display:inline-flex;
  align-items:center;
  gap:9px;
  padding:10px 13px;
  border:1px solid var(--ink);
  background:${e=>e.$live?`#e5efdf`:`var(--paper-light)`};
  font-family:"Cinzel",serif;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.09em;
  text-transform:uppercase;

  &::before{
    content:"";
    width:8px;height:8px;border-radius:50%;
    background:${e=>e.$live?`var(--green)`:`var(--gold)`};
    animation:${u} 1.8s ease-in-out infinite;
  }
`,p=r.div`
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
`,m=r.button`
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
`,h=r.section`
  padding:48px 0;
  border-bottom:1px solid rgba(37,23,14,.45);
`,g=r.h2`
  margin:0 0 22px;
  font-family:"Cinzel",serif;
  font-size:clamp(1.7rem,4vw,3rem);
  line-height:1;
`,_=r.div`
  display:grid;
  grid-template-columns:repeat(12,1fr);
  gap:18px;
  @media(max-width:800px){display:block}
`,v=r.article`
  grid-column:span ${e=>e.$span??4};
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
`,y=r.div`
  position:relative;
  z-index:1;
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.67rem;
  font-weight:700;
  letter-spacing:.11em;
  text-transform:uppercase;
`,b=r.div`
  position:relative;
  z-index:1;
  margin-top:9px;
  font-family:"Cinzel",serif;
  font-size:clamp(1.7rem,4vw,3rem);
  font-weight:700;
  line-height:1;
`,x=r.p`
  position:relative;
  z-index:1;
  margin:12px 0 0;
  color:rgba(37,23,14,.72);
  line-height:1.45;
`,se=r.div`
  position:relative;
  z-index:1;
  height:16px;
  margin-top:18px;
  border:1px solid var(--ink);
  background:#d7ca9e;
  overflow:hidden;
`,S=r.div`
  height:100%;
  background:var(--red);
  transition:width .4s ease;
`,C=r.div`
  position:relative;
  z-index:1;
  margin-top:16px;
  border-top:1px solid rgba(37,23,14,.35);
`,w=r.div`
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
`,ce=r.form`
  position:relative;
  z-index:1;
  display:flex;
  gap:8px;
  margin-top:16px;
  @media(max-width:600px){flex-direction:column}
`,le=r.input`
  flex:1;
  min-width:0;
  border:1px solid var(--ink);
  background:#fff8dc;
  color:var(--ink);
  padding:12px 13px;
  font:600 .9rem ui-monospace,SFMono-Regular,Menlo,monospace;
  outline:none;
  &:focus{box-shadow:0 0 0 2px var(--gold)}
`,T=r.button`
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
`,ue=r(T)`
  background:var(--paper-light);
  color:var(--ink);
`,E=r.div`
  position:relative;
  z-index:1;
  margin-top:14px;
  padding:11px 12px;
  border:1px solid ${e=>e.$danger?`var(--red)`:`rgba(37,23,14,.4)`};
  background:${e=>e.$danger?`#f1d8cc`:`rgba(255,255,255,.24)`};
  line-height:1.4;
`,D=r.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
  @media(max-width:800px){display:block}
`,de=r.div`
  position:relative;
  z-index:1;
  margin-top:16px;
  padding:13px;
  background:var(--ink);
  color:var(--paper-light);
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.76rem;
  line-height:1.5;
`,fe=r.footer`
  padding:35px 0 50px;
  color:rgba(37,23,14,.66);
  font-size:.88rem;
`;function O(e){let t=Number(e??0);return new Intl.NumberFormat(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(t)?t:0)}function k(e){return e?e.length>16?`${e.slice(0,8)}…${e.slice(-6)}`:e:`—`}function pe(e){return e?e===`seven_chosen`?`The Seven Chosen`:e.split(`_`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `):`None`}function A(e){return e==null?`—`:`${(e/1e4).toFixed(e%1e3==0?1:e%100==0?2:3)}×`}function me(e){if(!e)return 0;try{let t=BigInt(e),n=t/1000000n,r=(t%1000000n).toString().padStart(6,`0`).replace(/0+$/,``);return Number(`${n}${r?`.${r}`:``}`)}catch{return 0}}function j(e){return/^0x[0-9a-fA-F]{40}$/.test(e.trim())}function he(e,t){if(!e)return`—`;let n=Date.parse(e)-t;if(!Number.isFinite(n))return`—`;if(n<=0)return`Processing`;let r=Math.floor(n/1e3),i=Math.floor(r/3600),a=Math.floor(r%3600/60),o=r%60;return`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}:${String(o).padStart(2,`0`)}`}async function M(e){let t=await fetch(e,{cache:`no-store`}),n=await t.json();if(!t.ok||n?.ok===!1)throw Error(n?.error||`Request failed (${t.status})`);return n}function N(){let[e,t]=(0,a.useState)(null),[n,r]=(0,a.useState)(null),[i,u]=(0,a.useState)(null),[N,P]=(0,a.useState)(``),[F,I]=(0,a.useState)(Date.now()),[L,R]=(0,a.useState)(``),[z,ge]=(0,a.useState)(``),[B,_e]=(0,a.useState)(null),[V,ve]=(0,a.useState)(null),[H,U]=(0,a.useState)(!1),[W,G]=(0,a.useState)(``),[ye,K]=(0,a.useState)(!1),q=(0,a.useCallback)(async()=>{try{let[e,n]=await Promise.all([M(c.site),M(c.launch)]);t(e),r(n),P(``)}catch(e){P(e instanceof Error?e.message:String(e))}},[]);(0,a.useEffect)(()=>{q();let e=window.setInterval(q,2e3);return()=>window.clearInterval(e)},[q]),(0,a.useEffect)(()=>{let e=window.setInterval(()=>I(Date.now()),1e3);return()=>window.clearInterval(e)},[]),(0,a.useEffect)(()=>{if(!e?.latestWinner?.round){u(null);return}let t=!0,n=async()=>{try{let n=await M(`${s}/royal-proof-public?round=${e.latestWinner.round}`);t&&u(n)}catch{}};n();let r=window.setInterval(n,8e3);return()=>{t=!1,window.clearInterval(r)}},[e?.latestWinner?.round]);let J=n?.token||e?.launch?.token||null,Y=!!J||!!n?.detected||!!e?.launch?.activated,X=!!e?.launch?.activated,Z=(0,a.useCallback)(async e=>{let t=(e||L).trim().toLowerCase();if(!j(t)){G(`Enter a valid EVM wallet address.`);return}U(!0),G(``);try{let[e,n]=await Promise.all([M(`${c.wallet}/${t}`),fetch(c.claim,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({wallet:t})}).then(async e=>{let t=await e.json();if(!e.ok)throw Error(t?.error||`Claim lookup failed`);return t})]);ge(t),R(t),_e(e),ve(n)}catch(e){G(e instanceof Error?e.message:`Wallet lookup failed.`)}finally{U(!1)}},[L]);(0,a.useEffect)(()=>{if(!z)return;let e=window.setInterval(()=>Z(z),1e4);return()=>window.clearInterval(e)},[z,Z]);async function be(){if(!window.ethereum){G(`No browser wallet was detected. You can still paste an address.`);return}try{let e=await window.ethereum.request({method:`eth_requestAccounts`}),t=String(e?.[0]||``);if(!j(t))throw Error(`No wallet returned.`);R(t),await Z(t)}catch(e){G(e instanceof Error?e.message:`Wallet connection failed.`)}}async function xe(){if(!window.ethereum)throw Error(`Browser wallet not found.`);try{await window.ethereum.request({method:`wallet_switchEthereumChain`,params:[{chainId:l}]})}catch(e){if(e?.code!==4902)throw e;await window.ethereum.request({method:`wallet_addEthereumChain`,params:[{chainId:l,chainName:`Robinhood Chain`,nativeCurrency:{name:`Ether`,symbol:`ETH`,decimals:18},rpcUrls:[ee]}]})}}async function Se(){if(!(!window.ethereum||!z||!V?.canClaim||!V.transaction)){U(!0),G(``);try{let e=await window.ethereum.request({method:`eth_requestAccounts`}),t=String(e?.[0]||``).toLowerCase();if(t!==z.toLowerCase())throw Error(`Connected wallet is ${k(t)}. Connect ${k(z)} to claim.`);await xe();let n=await window.ethereum.request({method:`eth_sendTransaction`,params:[{from:t,to:V.transaction.to,data:V.transaction.data,value:`0x0`}]});G(`Claim submitted: ${String(n)}`),window.setTimeout(()=>Z(z),5e3)}catch(e){G(e instanceof Error?e.message:`Claim transaction failed.`)}finally{U(!1)}}}async function Ce(){if(J)try{await navigator.clipboard.writeText(J),K(!0),window.setTimeout(()=>K(!1),1600)}catch{K(!1)}}function we(e){e.preventDefault(),Z()}let Q=Math.max(0,Math.min(100,Number(e?.pot?.progressPct||0))),$=me(V?.claimableRaw),Te=e?.rewards?.autoFallbackUsdg??5,Ee=(0,a.useMemo)(()=>Y?X?`ONECOIN is live`:`The contract has appeared`:`Awaiting the next game`,[Y,X]);return(0,o.jsxs)(d,{children:[(0,o.jsx)(te,{children:(0,o.jsxs)(f,{children:[(0,o.jsx)(ne,{children:`✦ One Coin · Game II`}),(0,o.jsxs)(re,{children:[`The kingdom `,(0,o.jsx)(`span`,{children:`moves again.`})]}),(0,o.jsx)(ie,{children:`Royal Pot and Royal Rewards run from creator revenue. Hold ONECOIN, strengthen your weight with your NFTs, and follow every draw and payout onchain.`}),(0,o.jsxs)(ae,{children:[(0,o.jsx)(oe,{$live:X,children:Ee}),J?(0,o.jsxs)(p,{children:[(0,o.jsx)(`code`,{children:J}),(0,o.jsx)(m,{type:`button`,onClick:Ce,children:ye?`Copied`:`Copy CA`})]}):(0,o.jsx)(p,{children:(0,o.jsx)(`code`,{children:`CA will appear here automatically after the verified Pons launch.`})})]}),N&&(0,o.jsx)(E,{$danger:!0,children:N}),n?.lastError&&(0,o.jsx)(E,{$danger:!0,children:n.lastError})]})}),(0,o.jsx)(h,{children:(0,o.jsxs)(f,{children:[(0,o.jsx)(g,{children:`The Royal Engine`}),(0,o.jsxs)(_,{children:[(0,o.jsxs)(v,{$span:5,children:[(0,o.jsxs)(y,{children:[`Royal Pot · Round #`,e?.pot?.round??1]}),(0,o.jsxs)(b,{children:[O(e?.pot?.totalVisible??0),` /`,` `,O(e?.pot?.target??1e3),` USDG`]}),(0,o.jsx)(se,{"aria-label":`Royal Pot progress`,children:(0,o.jsx)(S,{style:{width:`${Q}%`}})}),(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Funded`}),(0,o.jsxs)(`strong`,{children:[O(e?.pot?.funded),` USDG`]})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Accruing`}),(0,o.jsxs)(`strong`,{children:[O(e?.pot?.accrued),` USDG`]})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Round state`}),(0,o.jsx)(`strong`,{children:e?.pot?.status||`prelaunch`})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Eligible wallets`}),(0,o.jsx)(`strong`,{children:e?.pot?.eligibleWallets??`—`})]})]}),(0,o.jsx)(x,{children:`Every funded 1,000 USDG closes a weighted snapshot and starts one verifiable Dice draw for one 1,000 USDG winner.`})]}),(0,o.jsxs)(v,{$span:4,children:[(0,o.jsx)(y,{children:`Royal Rewards`}),(0,o.jsxs)(b,{children:[O(e?.rewards?.accrued),` USDG`]}),(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Funded`}),(0,o.jsx)(`strong`,{children:O(e?.rewards?.funded)})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Allocated`}),(0,o.jsx)(`strong`,{children:O(e?.rewards?.allocated)})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Paid`}),(0,o.jsx)(`strong`,{children:O(e?.rewards?.paid)})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Phase`}),(0,o.jsx)(`strong`,{children:e?.rewards?.phase||`prelaunch`})]})]}),(0,o.jsx)(x,{children:`Weight is calculated every 30 minutes. Day 1 settles automatically; Day 2 moves to cumulative claims.`})]}),(0,o.jsxs)(v,{$span:3,children:[(0,o.jsx)(y,{children:`Next Day-1 Send`}),(0,o.jsx)(b,{children:he(e?.rewards?.nextPushAt||null,F)}),(0,o.jsx)(x,{children:`Day 1 sends eligible balances hourly with a 1 USDG minimum. After Day 1, the claim chamber opens.`}),(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Manual claim min`}),(0,o.jsxs)(`strong`,{children:[O(e?.rewards?.minClaimUsdg??1),` USDG`]})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Auto fallback`}),(0,o.jsxs)(`strong`,{children:[O(e?.rewards?.autoFallbackUsdg??5),` USDG`]})]})]})]})]})]})}),(0,o.jsx)(h,{children:(0,o.jsxs)(f,{children:[(0,o.jsx)(g,{children:`Your Royal Weight`}),(0,o.jsxs)(v,{$span:12,children:[(0,o.jsx)(y,{children:`No connection required to inspect a wallet`}),(0,o.jsxs)(ce,{onSubmit:we,children:[(0,o.jsx)(le,{value:L,onChange:e=>R(e.target.value),placeholder:`0x… wallet address`,spellCheck:!1,autoCapitalize:`off`}),(0,o.jsx)(T,{type:`submit`,disabled:H,children:H?`Reading…`:`Check weight`}),(0,o.jsx)(ue,{type:`button`,onClick:be,disabled:H,children:`Connect`})]}),W&&(0,o.jsx)(E,{children:W}),B&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(D,{children:[(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`ONECOIN balance`}),(0,o.jsx)(`strong`,{children:B.onecoinBalance??`Prelaunch`})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Estimated value`}),(0,o.jsx)(`strong`,{children:B.estimatedValueUsdg?`$${B.estimatedValueUsdg}`:`—`})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Eligible`}),(0,o.jsx)(`strong`,{children:B.eligible==null?`After launch`:B.eligible?`Yes`:`No`})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Base entries`}),(0,o.jsx)(`strong`,{children:B.baseEntries??`—`})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Estimated Royal Weight`}),(0,o.jsx)(`strong`,{children:B.estimatedRoyalWeight??`—`})]})]}),(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Early-buyer boost`}),(0,o.jsx)(`strong`,{children:A(B.earlyBoostBps)})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Round net-buy boost`}),(0,o.jsx)(`strong`,{children:A(B.roundNetBuyBoostBps)})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`NFT count`}),(0,o.jsx)(`strong`,{children:B.nftCount})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`NFT-count multiplier`}),(0,o.jsx)(`strong`,{children:A(B.nftCountBoostBps)})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Strongest House`}),(0,o.jsx)(`strong`,{children:pe(B.strongestHouse)})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`House multiplier`}),(0,o.jsx)(`strong`,{children:A(B.houseBoostBps)})]})]})]}),(0,o.jsx)(de,{children:`Royal Weight = Base Entries × Early Boost × Current Round Net-Buy Boost × NFT-Count Multiplier × Strongest House Multiplier`}),(0,o.jsxs)(D,{children:[(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Round net buy`}),(0,o.jsx)(`strong`,{children:B.roundNetBuyUsdg?`${B.roundNetBuyUsdg} USDG`:`—`})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Rewards earned`}),(0,o.jsxs)(`strong`,{children:[B.royalRewardsEarnedUsdg,` USDG`]})]})]}),(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Rewards paid`}),(0,o.jsxs)(`strong`,{children:[B.royalRewardsPaidUsdg,` USDG`]})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Rewards outstanding`}),(0,o.jsxs)(`strong`,{children:[B.royalRewardsClaimableUsdg,` USDG`]})]})]})]}),B.note&&(0,o.jsx)(E,{children:B.note})]})]})]})}),(0,o.jsx)(h,{children:(0,o.jsxs)(f,{children:[(0,o.jsx)(g,{children:`The Claim Chamber`}),(0,o.jsxs)(_,{children:[(0,o.jsxs)(v,{$span:7,children:[(0,o.jsx)(y,{children:`Day 2+ cumulative claim`}),(0,o.jsx)(b,{children:V?`${O($)} USDG`:`Check a wallet`}),V?.status===`prelaunch`&&(0,o.jsx)(E,{children:`Claims activate automatically after launch and the Day-1 push phase.`}),V?.status===`no_active_root`&&(0,o.jsx)(E,{children:`Claim phase is active, but the next cumulative root has not been published yet.`}),V?.status===`active`&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Claimable`}),(0,o.jsxs)(`strong`,{children:[O($),` USDG`]})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Claim root`}),(0,o.jsxs)(`strong`,{children:[`#`,V.rootId??`—`]})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Manual claim available`}),(0,o.jsx)(`strong`,{children:V.canClaim?`Yes`:`No`})]})]}),$>=Te&&(0,o.jsx)(E,{children:`Automatic fallback eligible. If this remains unclaimed, the production worker checks it every five minutes and can settle it automatically.`}),(0,o.jsx)(T,{type:`button`,onClick:Se,disabled:H||!V.canClaim||!V.transaction,style:{marginTop:14},children:`Claim USDG`})]})]}),(0,o.jsxs)(v,{$span:5,children:[(0,o.jsx)(y,{children:`Settlement rules`}),(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Day 1`}),(0,o.jsx)(`strong`,{children:`Hourly automatic push`})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Day-1 minimum`}),(0,o.jsx)(`strong`,{children:`1 USDG`})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Day 2+`}),(0,o.jsx)(`strong`,{children:`Direct cumulative claim`})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Automatic fallback`}),(0,o.jsx)(`strong`,{children:`5 USDG+`})]})]}),(0,o.jsx)(x,{children:`The website never holds your key. A manual claim is a transaction from your own connected wallet using the public Merkle proof generated by the production backend.`})]})]})]})}),(0,o.jsx)(h,{children:(0,o.jsxs)(f,{children:[(0,o.jsx)(g,{children:`Winner & Proof`}),(0,o.jsxs)(_,{children:[(0,o.jsxs)(v,{$span:6,children:[(0,o.jsx)(y,{children:`Latest Royal Pot round`}),e?.latestWinner?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(b,{children:[`Round #`,e.latestWinner.round]}),(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Winner`}),(0,o.jsx)(`code`,{title:e.latestWinner.wallet,children:e.latestWinner.wallet})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Dice request`}),(0,o.jsx)(`strong`,{children:e.latestWinner.diceRequestId??`—`})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Randomness`}),(0,o.jsx)(`code`,{title:e.latestWinner.diceRandomness||``,children:k(e.latestWinner.diceRandomness)})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Proof hash`}),(0,o.jsx)(`code`,{title:i?.proofHash||e.latestWinner.proofHash||``,children:k(i?.proofHash||e.latestWinner.proofHash)})]})]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{children:`Awaiting the first round`}),(0,o.jsx)(x,{children:`Once the Royal Pot reaches 1,000 USDG, the snapshot, Dice request, winner and payout proof will appear here automatically.`})]})]}),(0,o.jsxs)(v,{$span:6,children:[(0,o.jsx)(y,{children:`Latest payout`}),e?.latestPayout?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(b,{children:[O(e.latestPayout.amountUsdg),` USDG`]}),(0,o.jsxs)(C,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Status`}),(0,o.jsx)(`strong`,{children:e.latestPayout.status})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Recipient`}),(0,o.jsx)(`code`,{title:e.latestPayout.recipient,children:k(e.latestPayout.recipient)})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Transaction`}),(0,o.jsx)(`code`,{title:e.latestPayout.txHash||``,children:k(e.latestPayout.txHash)})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(`span`,{children:`Confirmed block`}),(0,o.jsx)(`strong`,{children:e.latestPayout.confirmedBlock??`—`})]})]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{children:`No payout yet`}),(0,o.jsx)(x,{children:`Confirmed Royal Pot payouts and their transaction hashes will be published here.`})]})]})]})]})}),(0,o.jsx)(h,{children:(0,o.jsxs)(f,{children:[(0,o.jsx)(g,{children:`The Decree`}),(0,o.jsxs)(_,{children:[(0,o.jsxs)(v,{$span:3,children:[(0,o.jsx)(y,{children:`Royal Pot`}),(0,o.jsx)(b,{children:`40%`}),(0,o.jsx)(x,{children:`of creator revenue`})]}),(0,o.jsxs)(v,{$span:3,children:[(0,o.jsx)(y,{children:`Royal Rewards`}),(0,o.jsx)(b,{children:`40%`}),(0,o.jsx)(x,{children:`weighted holder rewards`})]}),(0,o.jsxs)(v,{$span:3,children:[(0,o.jsx)(y,{children:`Liquidity`}),(0,o.jsx)(b,{children:`15%`}),(0,o.jsx)(x,{children:`allocated to liquidity`})]}),(0,o.jsxs)(v,{$span:3,children:[(0,o.jsx)(y,{children:`Team`}),(0,o.jsx)(b,{children:`5%`}),(0,o.jsx)(x,{children:`team allocation`})]})]}),(0,o.jsx)(E,{children:`Launch guard: USDG pair · 3% creator tax · buyback OFF · production RevenueRouter recipient. The site and backend switch live automatically only after those onchain conditions match.`})]})}),(0,o.jsx)(fe,{children:(0,o.jsx)(f,{children:`ONECOIN · Robinhood Chain · Game II. Use only links published by the official ONECOIN account. Wallet weights shown before a snapshot are estimates; the locked round snapshot is final for each draw.`})})]})}export{N as default};