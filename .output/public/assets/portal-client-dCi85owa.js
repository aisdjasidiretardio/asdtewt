import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n}from"./framework-B8WyT5R3.js";import{i as r,t as i}from"./styled-components.browser.esm-By_7gqKe.js";var a=e(t(),1),o=n(),s={twitter:`https://x.com/onecoinrbh`,dice:`https://diceprotocol.world/agent/`,opensea:`https://opensea.io/collection/onecoin`},c=`2026-09-08T15:30:00Z`,l=[],u=i`
  0%{transform:translateX(0)}
  100%{transform:translateX(-50%)}
`,d=i`
  0%,100%{
    transform:translateY(0) rotate(-.6deg);
    box-shadow:12px 14px 0 #163e75;
  }
  50%{
    transform:translateY(-9px) rotate(.6deg);
    box-shadow:15px 18px 0 #163e75;
  }
`,f=i`
  0%{opacity:0;transform:translateY(14px) scale(.94)}
  100%{opacity:1;transform:translateY(0) scale(1)}
`,p=i`
  0%,100%{opacity:.35}
  50%{opacity:1}
`,m=r.main`
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
`,h=r.div`
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
`,g=r.div`
  width:min(1120px,calc(100% - 40px));
  margin:0 auto;

  @media(min-width:760px){
    width:min(1120px,calc(100% - 80px));
  }
`,_=r.nav`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:24px 0 10px;
`,v=r.a`
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
`,y=r.div`
  display:flex;
  align-items:center;
  gap:clamp(10px,2.2vw,25px);
`,b=r.a`
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
`,x=r.section`
  padding:90px 0 105px;
  border-top:2px solid var(--ink);
  background:var(--red);
  color:var(--light);
  text-align:center;
`,S=r.p`
  margin:0 0 20px;
  color:var(--pale-gold);
  font-size:1.4rem;
  letter-spacing:18px;
`,ee=r.h2`
  max-width:900px;
  margin:0 auto 22px;
  color:var(--light);
  font-family:"Cinzel",serif;
  font-size:clamp(2.35rem,10vw,6.4rem);
  font-weight:400;
  letter-spacing:.01em;
  word-spacing:.06em;
  line-height:1;
`,C=r.p`
  max-width:590px;
  margin:0 auto 30px;
  color:rgba(247,236,201,.82);
  font-family:"Cormorant Garamond",serif;
  font-size:1.22rem;
  font-weight:600;
  line-height:1.5;
`,w=r.a`
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
`,T=r.footer`
  padding:28px 0 42px;
  background:var(--ink);
  color:rgba(247,236,201,.62);
  font-family:"Cormorant Garamond",serif;
  font-size:.79rem;
  line-height:1.5;
`,E=r.div`
  display:grid;
  gap:17px;

  @media(min-width:720px){
    grid-template-columns:1fr auto;
    align-items:end;
  }
`,D=r.p`
  max-width:760px;
  margin:0;
`,O=r.a`
  color:var(--pale-gold);
  letter-spacing:.08em;
  text-decoration:none;
  text-transform:uppercase;
`,k=r.p`
  margin:0 0 10px;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.18em;
  text-transform:uppercase;
`,A=r.h1`
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(2.8rem,12vw,7.4rem);
  font-weight:700;
  letter-spacing:.01em;
  line-height:.94;
  text-wrap:balance;
`,j=r.p`
  max-width:660px;
  margin:22px auto 0;
  color:rgba(37,23,14,.78);
  font-family:"Cormorant Garamond",serif;
  font-size:clamp(1.15rem,4vw,1.45rem);
  font-weight:600;
  line-height:1.48;
`;r.span`
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
    animation:${p} 1.5s ease-in-out infinite;
  }
`;var M=r.section`
  min-height:calc(100svh - 76px);
  display:grid;
  align-items:center;
  padding:55px 0 90px;
  text-align:center;
`;r.section`
  display:grid;
  gap:12px;
  max-width:980px;
  margin:42px auto 0;
  text-align:left;

  @media(min-width:760px){
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
`,r.article`
  position:relative;
  min-height:230px;
  padding:26px 23px 24px;
  border:1px solid var(--ink);
  background:rgba(247,236,201,.67);
  box-shadow:6px 7px 0 var(--gold);

  &::before{
    content:"";
    position:absolute;
    inset:6px;
    border:1px solid rgba(158,51,42,.45);
    pointer-events:none;
  }
`,r.span`
  position:relative;
  display:block;
  margin-bottom:24px;
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.17em;
  text-transform:uppercase;
`,r.h2`
  position:relative;
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(1.25rem,3vw,1.7rem);
  font-weight:700;
  letter-spacing:.02em;
  line-height:1.1;
`,r.p`
  position:relative;
  margin:14px 0 0;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:1.15rem;
  font-weight:700;
  line-height:1.25;
`,r.p`
  position:relative;
  margin:10px 0 0;
  color:rgba(37,23,14,.7);
  font-family:"Cormorant Garamond",serif;
  font-size:1rem;
  font-weight:600;
  line-height:1.42;
`;var N=r.div`
  max-width:760px;
  margin:42px auto 0;
  padding:clamp(25px,6vw,54px);
  border:1px solid var(--ink);
  background:rgba(247,236,201,.67);
  box-shadow:9px 10px 0 var(--lapis);
  text-align:left;
`,P=r.label`
  display:block;
  margin-bottom:9px;
  color:var(--ink);
  font-family:"Cinzel",serif;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.1em;
  text-transform:uppercase;
`,F=r.form`
  display:grid;
  gap:12px;

  @media(min-width:650px){
    grid-template-columns:1fr auto;
  }
`,I=r.input`
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
`,L=r.button`
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
`,te=r.p`
  min-height:24px;
  margin:18px 0 0;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:1.05rem;
  font-weight:700;
  line-height:1.4;
`;r.p`
  margin:11px 0 0;
  color:rgba(37,23,14,.64);
  font-family:"Cormorant Garamond",serif;
  font-size:.9rem;
  font-weight:600;
  line-height:1.45;
`;var R=r.section`
  padding:58px 0 48px;
  text-align:center;
`;r.div`
  margin:34px auto 0;
`,r.div`
  max-width:760px;
  margin:0 auto;
  padding:22px;
  border-top:1px solid var(--ink);
  border-bottom:1px solid var(--ink);
`,r.p`
  margin:0;
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:clamp(1rem,4vw,1.45rem);
  font-weight:700;
  letter-spacing:.04em;
  line-height:1.35;
`,r.a`
  display:inline-block;
  margin-top:10px;
  color:var(--lapis);
  font-family:"Cormorant Garamond",serif;
  font-size:.95rem;
  font-weight:700;
  letter-spacing:.06em;
  text-underline-offset:4px;
  text-transform:uppercase;
`,r.p`
  margin:16px 0 0;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:1rem;
  font-weight:700;
  letter-spacing:.08em;
  text-align:center;
  text-transform:uppercase;
`;var z=r.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  gap:12px;
  margin:24px 0 0;
`,B=r.a`
  display:inline-flex;
  min-height:50px;
  align-items:center;
  justify-content:center;
  padding:0 22px;
  border:2px solid var(--ink);
  background:var(--lapis);
  box-shadow:5px 5px 0 var(--gold);
  color:var(--light);
  font-family:"Cinzel",serif;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.1em;
  text-decoration:none;
  text-transform:uppercase;
  transition:
    transform .2s,
    box-shadow .2s,
    background .2s;

  &:hover{
    transform:translate(2px,2px);
    box-shadow:3px 3px 0 var(--gold);
    background:var(--deep);
  }

  &:focus-visible{
    outline:3px solid var(--red);
    outline-offset:4px;
  }
`,V=r(B)`
  background:var(--light);
  color:var(--lapis);
  box-shadow:5px 5px 0 var(--red);

  &:hover{
    background:white;
    box-shadow:3px 3px 0 var(--red);
  }
`;r.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:7px;
  max-width:720px;
  margin:0 auto;
`,r.div`
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
`,r.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  margin:35px auto 0;
  border:1px solid var(--ink);
  background:rgba(247,236,201,.55);
`,r.div`
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
`,r.section`
  padding:55px 0 70px;
  background:var(--red);
  color:var(--light);
  text-align:center;
  border-top:2px solid var(--ink);
  border-bottom:2px solid var(--ink);
`,r.h2`
  margin:0;
  color:var(--light);
  font-family:"Cinzel",serif;
  font-size:clamp(2rem,8vw,4.8rem);
  letter-spacing:.01em;
  line-height:1;
`,r.article`
  position:relative;
  width:min(78vw,330px);
  aspect-ratio:3/4;
  margin:36px auto 42px;
  padding:17px;
  border:2px solid var(--ink);
  background:var(--paper);
  box-shadow:12px 14px 0 var(--lapis);
  color:var(--ink);
  animation:${d} 4s ease-in-out infinite;

  &::before{
    content:"";
    position:absolute;
    inset:8px;
    border:1px solid var(--gold);
    pointer-events:none;
  }
`,r.div`
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
  animation:${f} .45s ease-out;

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
`,r.span`
  color:var(--red);
  font-size:2rem;
`,r.span`
  margin-top:23px;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:.8rem;
  font-weight:700;
  letter-spacing:.18em;
  text-transform:uppercase;
`,r.strong`
  margin-top:5px;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(2.5rem,12vw,5rem);
  letter-spacing:.04em;
  line-height:1;
`,r.div`
  width:100%;
  overflow:hidden;
  border-top:1px solid rgba(247,236,201,.4);
  border-bottom:1px solid rgba(247,236,201,.4);
  padding:13px 0;
`,r.div`
  display:flex;
  width:max-content;
  animation:${u} 28s linear infinite;
`,r.div`
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
`,r.section`
  padding:78px 0 95px;
`;var H=r.div`
  text-align:center;
`,U=r.h2`
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(2rem,9vw,5rem);
  letter-spacing:.01em;
  line-height:1;
`,W=r.p`
  max-width:620px;
  margin:18px auto 0;
  color:rgba(37,23,14,.72);
  font-family:"Cormorant Garamond",serif;
  font-size:1.15rem;
  font-weight:600;
  line-height:1.45;
`;r.div`
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
`,r.article`
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
`;var G=r.section`
  padding:78px 0 92px;
  border-top:2px solid var(--ink);
  border-bottom:2px solid var(--ink);
  background:var(--paper);
`,K=r.div`
  display:grid;
  grid-template-columns:repeat(5,minmax(0,1fr));
  margin-top:42px;
  border:2px solid var(--ink);
  background:var(--light);
  box-shadow:7px 8px 0 var(--lapis);

  @media(max-width:900px){
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  @media(max-width:520px){
    grid-template-columns:1fr;
  }
`,q=r.div`
  min-height:125px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:22px;
  border-right:1px solid rgba(37,23,14,.5);

  &:last-child{
    border-right:0;
  }

  b{
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.8rem,3vw,2.8rem);
    line-height:1;
  }

  span{
    margin-top:20px;
    color:var(--red);
    font-family:"Cormorant Garamond",serif;
    font-size:.72rem;
    font-weight:700;
    letter-spacing:.12em;
    text-transform:uppercase;
  }

  @media(max-width:900px){
    border-bottom:1px solid rgba(37,23,14,.35);
  }
`,J=r.div`
  display:grid;
  gap:14px;
  margin-top:50px;

  @media(min-width:820px){
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
`,Y=r.article`
  display:grid;
  grid-template-columns:70px 1fr;
  gap:20px;
  min-height:190px;
  padding:27px;
  border:2px solid var(--ink);
  background:var(--light);
  box-shadow:6px 7px 0 var(--gold);

  &:nth-child(2){
    box-shadow:6px 7px 0 var(--red);
  }

  &:nth-child(3){
    box-shadow:6px 7px 0 var(--lapis);
  }

  &:nth-child(4){
    background:var(--lapis);
    color:var(--light);
    box-shadow:6px 7px 0 var(--red);
  }
`,X=r.div`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:2.4rem;
  font-weight:700;
  line-height:1;

  ${Y}:nth-child(4) &{
    color:var(--pale-gold);
  }
`,Z=r.div`
  strong{
    display:block;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.15rem,2.3vw,1.7rem);
    line-height:1.05;
  }

  p{
    margin:14px 0 0;
    color:rgba(37,23,14,.76);
    font-family:"Cormorant Garamond",serif;
    font-size:1.05rem;
    font-weight:600;
    line-height:1.48;
  }

  ${Y}:nth-child(4) & strong{
    color:var(--pale-gold);
  }

  ${Y}:nth-child(4) & p{
    color:rgba(255,255,255,.82);
  }
`;function Q({current:e}){return(0,o.jsx)(g,{children:(0,o.jsxs)(_,{"aria-label":`Primary navigation`,children:[(0,o.jsxs)(v,{href:`/`,children:[(0,o.jsx)(`span`,{children:`✦`}),`One Coin`]}),(0,o.jsxs)(y,{children:[(0,o.jsx)(b,{href:`/`,children:`Home`}),(0,o.jsx)(b,{href:`/whitelist`,"aria-current":e===`whitelist`?`page`:void 0,children:`Whitelist`}),(0,o.jsx)(b,{href:`/winner`,"aria-current":e===`winner`?`page`:void 0,children:`The Great Seven`})]})]})})}function $(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{children:(0,o.jsxs)(g,{children:[(0,o.jsxs)(S,{"aria-hidden":`true`,children:[`✦`,` `,`✧`,` `,`✦`]}),(0,o.jsx)(ee,{children:`The proof remains.`}),(0,o.jsx)(C,{children:`The draw ended. The record did not.`}),(0,o.jsxs)(w,{href:s.twitter,target:`_blank`,rel:`noreferrer`,children:[(0,o.jsx)(`span`,{children:`X`}),` View the public record`]})]})}),(0,o.jsx)(T,{children:(0,o.jsx)(g,{children:(0,o.jsxs)(E,{children:[(0,o.jsx)(D,{children:`To the fullest extent permitted by law, the project and its contributors are not liable for trading losses, NFT price changes, wallet compromise, failed transactions, third party services, network interruptions, taxes, or unlawful participation. NFTs are not investments and may have no resale value. Eligibility, claim deadlines, prize distribution, and the official rules apply. By participating, you accept these risks and remain responsible for complying with local laws. Use only links published by the official account.`}),(0,o.jsxs)(O,{href:s.twitter,target:`_blank`,rel:`noreferrer`,children:[`Official X `,`↗`]})]})})})]})}function ne(){let[e,t]=(0,a.useState)(``),[n,r]=(0,a.useState)(`Enter your wallet to search OPENSEA ↗.`);async function i(t){t.preventDefault();let n=e.trim();if(!/^0x[a-fA-F0-9]{40}$/.test(n)){r(`Enter a valid wallet address.`);return}r(`Checking OPENSEA ↗...`);try{let e=await fetch(`https://ikslmrrplnwwipdnteza.supabase.co/functions/v1/whitelist-check`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({wallet:n})});if(e.status===429){r(`Too many checks. Try again later.`);return}if(!e.ok)throw Error(`Whitelist lookup failed`);let t=await e.json();if(t?.accessType===`royallist_gtd`){r(`MINTED OUT. Guaranteed access. 3 mint spots per wallet.`);return}if(t?.accessType===`early_access_fcfs`){r(`Early Access FCFS. 1 mint spot per wallet.`);return}if(t?.accessType===`ecosystem_fcfs`){r(`Ecosystem FCFS. 1 mint spot per wallet.`);return}r(`This wallet is not on OPENSEA ↗.`)}catch(e){console.error(e),r(`OPENSEA ↗ could not be checked. Try again.`)}}return(0,o.jsxs)(m,{children:[(0,o.jsx)(h,{"aria-hidden":`true`}),(0,o.jsx)(Q,{current:`whitelist`}),(0,o.jsx)(M,{children:(0,o.jsxs)(g,{children:[(0,o.jsx)(k,{children:`OPENSEA ↗`}),(0,o.jsx)(A,{children:`Whitelist checker`}),(0,o.jsxs)(N,{children:[(0,o.jsx)(P,{htmlFor:`wallet`,children:`Wallet address`}),(0,o.jsxs)(F,{onSubmit:i,children:[(0,o.jsx)(I,{id:`wallet`,value:e,onChange:e=>t(e.target.value),placeholder:`0x...`,autoComplete:`off`,spellCheck:!1}),(0,o.jsx)(L,{type:`submit`,children:`Check wallet`})]}),(0,o.jsx)(te,{"aria-live":`polite`,children:n})]}),(0,o.jsx)(`p`,{style:{maxWidth:`720px`,margin:`34px auto 0`,color:`var(--red)`,fontFamily:`"Cormorant Garamond", serif`,fontSize:`clamp(1.05rem, 2.3vw, 1.28rem)`,fontStyle:`italic`,fontWeight:600,letterSpacing:`.02em`,lineHeight:1.5,textAlign:`center`},children:`The royals keep no fixed hour. A sharp eye may yet find its name written within.`}),(0,o.jsxs)(`section`,{className:`royalListChapters`,children:[(0,o.jsxs)(`article`,{className:`royalChapterCard royalChapterFeatured`,children:[(0,o.jsx)(`div`,{className:`royalChapterImage royalChapterImageLarge`,children:(0,o.jsx)(`img`,{src:`/gallery/gtd.png`,alt:``})}),(0,o.jsxs)(`div`,{className:`royalChapterContent`,children:[(0,o.jsx)(`div`,{className:`royalChapterHeading`,children:(0,o.jsx)(`span`,{children:`STAGE I`})}),(0,o.jsx)(`h2`,{children:`MINTED OUT`}),(0,o.jsx)(`p`,{className:`royalChapterBigLine`,children:`3 MINT SPOTS PER WALLET`}),(0,o.jsx)(`p`,{className:`royalChapterText`,children:`For those who stand with onecoin and represent our kingdom.`}),(0,o.jsx)(`p`,{className:`royalChapterText royalChapterOpenSea`,children:`Minting takes place on OpenSea, so all 777 GTD places receive guaranteed mint access.`})]})]}),(0,o.jsxs)(`div`,{className:`royalChapterGrid`,children:[(0,o.jsxs)(`article`,{className:`royalChapterCard`,children:[(0,o.jsx)(`div`,{className:`royalChapterImage`,children:(0,o.jsx)(`img`,{src:`/gallery/fcfs.png`,alt:``})}),(0,o.jsxs)(`div`,{className:`royalChapterContent`,children:[(0,o.jsx)(`div`,{className:`royalChapterHeading`,children:(0,o.jsx)(`span`,{children:`STAGE II`})}),(0,o.jsx)(`h2`,{children:`EARLY ACCESS FCFS`}),(0,o.jsx)(`p`,{className:`royalChapterBigLine`,children:`1 MINT SPOT PER WALLET`}),(0,o.jsx)(`p`,{className:`royalChapterText`,children:`Access is granted in order until the available allocation has been claimed.`})]})]}),(0,o.jsxs)(`article`,{className:`royalChapterCard`,children:[(0,o.jsx)(`div`,{className:`royalChapterImage`,children:(0,o.jsx)(`img`,{src:`/gallery/fcfscommunity.png`,alt:``})}),(0,o.jsxs)(`div`,{className:`royalChapterContent`,children:[(0,o.jsx)(`div`,{className:`royalChapterHeading`,children:(0,o.jsx)(`span`,{children:`STAGE III`})}),(0,o.jsx)(`h2`,{children:`ECOSYSTEM FCFS`}),(0,o.jsx)(`p`,{className:`royalChapterBigLine`,children:`1 MINT SPOT PER WALLET`}),(0,o.jsx)(`p`,{className:`royalChapterText`,children:`A separate first-come allocation reserved for selected projects on Robinhood.`})]})]})]}),(0,o.jsx)(`style`,{children:`

    .royalListChapters {
      width: min(1320px, calc(100% - 48px));
      margin: 58px auto 76px;
    }

    .royalChapterCard {
      position: relative;
      display: grid;
      grid-template-columns: 178px minmax(0, 1fr);
      min-height: 215px;
      padding: 12px;
      background:
        radial-gradient(circle at 50% 0%, rgba(255,255,255,.28), transparent 48%),
        rgba(255,245,208,.72);
      border: 1px solid #5e472b;
      box-shadow: 6px 6px 0 rgba(164,67,54,.88);
      overflow: hidden;
    }

    .royalChapterCard::before {
      content: "";
      position: absolute;
      inset: 10px;
      border: 1px solid rgba(107,73,35,.16);
      pointer-events: none;
      z-index: 3;
    }

    .royalChapterFeatured {
      grid-template-columns: 270px minmax(0, 1fr);
      min-height: 305px;
      margin-bottom: 22px;
    }

    .royalChapterImage {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      min-height: 190px;
      overflow: hidden;
      border: 1px solid #604526;
      background: #e7d29b;
    }

    .royalChapterImageLarge {
      min-height: 280px;
    }

    .royalChapterImage img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .royalChapterContent {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 24px 30px 25px;
      text-align: left;
    }

    .royalChapterFeatured .royalChapterContent {
      padding: 30px 38px;
    }

    .royalChapterHeading {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 12px;
    }

    .royalChapterHeading > span:first-child {
      color: #a93329;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .royalChapterCard h2 {
      margin: 0;
      color: #16477e;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(29px, 2.4vw, 40px);
      font-weight: 400;
      line-height: 1.02;
      letter-spacing: .01em;
      text-transform: uppercase;
    }

    .royalChapterFeatured h2 {
      font-size: clamp(40px, 4vw, 60px);
    }

    .royalChapterBigLine {
      width: fit-content;
      margin: 17px 0 0;
      padding-bottom: 7px;
      color: #a93329;
      border-bottom: 1px solid rgba(169,51,41,.4);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: .07em;
      line-height: 1.35;
      text-transform: uppercase;
    }

    .royalChapterFeatured .royalChapterBigLine {
      color: #16477e;
      font-size: 17px;
    }

    .royalChapterText {
      max-width: 42ch;
      margin: 15px 0 0;
      color: #69471f;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 15px;
      line-height: 1.55;
    }

    .royalChapterFeatured .royalChapterText {
      max-width: 58ch;
      font-size: 16px;
    }

    .royalChapterOpenSea {
      margin-top: 9px;
      color: #a93329;
      font-style: italic;
    }

    .royalChapterGrid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 22px;
    }

    @media (max-width: 1000px) {
      .royalListChapters {
        width: min(760px, calc(100% - 36px));
      }

      .royalChapterGrid {
        grid-template-columns: 1fr;
      }

      .royalChapterFeatured {
        grid-template-columns: 220px minmax(0,1fr);
      }

      .royalChapterCard {
        grid-template-columns: 190px minmax(0,1fr);
      }
    }

    @media (max-width: 620px) {
      .royalListChapters {
        width: calc(100% - 28px);
        margin: 40px auto 62px;
      }

      .royalChapterFeatured,
      .royalChapterCard {
        display: block;
        padding: 10px;
      }

      .royalChapterImage,
      .royalChapterImageLarge {
        width: 100%;
        height: 190px;
        min-height: 190px;
      }

      .royalChapterFeatured .royalChapterImage {
        height: 230px;
      }

      .royalChapterContent,
      .royalChapterFeatured .royalChapterContent {
        padding: 25px 20px;
      }

      .royalChapterFeatured h2,
      .royalChapterCard h2 {
        font-size: 32px;
      }

      .royalChapterText,
      .royalChapterFeatured .royalChapterText {
        max-width: none;
        font-size: 15px;
      }

      .royalChapterGrid {
        gap: 18px;
      }
    }

  `})]})]})}),(0,o.jsx)($,{})]})}r.div`
  margin-top:58px;
  border:2px solid var(--ink);
  background:var(--light);
  box-shadow:8px 9px 0 var(--lapis);
`,r.div`
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:30px;
  padding:30px 32px;
  border-bottom:2px solid var(--ink);
  background:var(--paper);

  h3{
    margin:4px 0 0;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.8rem,4vw,3.4rem);
    line-height:1;
  }

  > span{
    color:var(--red);
    font-family:"Cinzel",serif;
    font-size:.68rem;
    font-weight:700;
    letter-spacing:.12em;
    text-transform:uppercase;
    white-space:nowrap;
  }

  @media(max-width:680px){
    align-items:flex-start;
    flex-direction:column;
    gap:12px;
  }
`,r.div`
  display:grid;
  grid-template-columns:110px 120px 150px minmax(0,1fr);
  align-items:center;
  gap:18px;
  padding:20px 28px;
  border-bottom:1px solid rgba(37,23,14,.35);

  &:last-child{
    border-bottom:0;
  }

  @media(max-width:800px){
    grid-template-columns:90px 1fr;
    gap:10px 18px;
  }

  @media(max-width:500px){
    grid-template-columns:1fr;
    gap:7px;
  }
`,r.span`
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:.63rem;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
`,r.strong`
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:1.3rem;
`,r.span`
  color:var(--ink);
  font-family:"Cormorant Garamond",serif;
  font-size:.76rem;
  font-weight:700;
  letter-spacing:.09em;
  text-transform:uppercase;
`,r.a`
  overflow:hidden;
  color:var(--lapis);
  font-family:monospace;
  font-size:.73rem;
  font-weight:700;
  text-decoration:none;
  text-overflow:ellipsis;
  white-space:nowrap;

  &:hover{
    color:var(--red);
    text-decoration:underline;
  }

  @media(min-width:801px){
    text-align:right;
  }
`,r.div`
  display:grid;
  gap:2px;
  margin-top:30px;
  border:2px solid var(--ink);
  background:var(--ink);

  @media(min-width:720px){
    grid-template-columns:1fr 1fr;
  }
`,r.a`
  min-height:135px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:27px 30px;
  background:var(--light);
  color:var(--ink);
  text-decoration:none;
  transition:.18s ease;

  small{
    color:var(--red);
    font-family:"Cinzel",serif;
    font-size:.61rem;
    font-weight:700;
    letter-spacing:.14em;
    text-transform:uppercase;
  }

  strong{
    display:block;
    margin-top:9px;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.2rem,2.7vw,1.8rem);
    line-height:1.05;
  }

  span{
    display:block;
    margin-top:10px;
    font-family:"Cormorant Garamond",serif;
    font-size:1rem;
    font-weight:600;
  }

  &:hover{
    background:var(--paper);
  }
`;function re(){let[e,t]=(0,a.useState)(4821),[n,r]=(0,a.useState)(0),i=Date.parse(c);l.length,(0,a.useEffect)(()=>{let e=4821,n=window.setInterval(()=>{e=(e*9301+49297)%1e4,t(e+1)},950),i=()=>{r(Date.now())};i();let a=window.setInterval(i,1e3);return()=>{window.clearInterval(n),window.clearInterval(a)}},[]);let u=i&&n?Math.max(0,i-n):0;return Math.floor(u/864e5),Math.floor(u/36e5),Math.floor(u%36e5/6e4),Math.floor(u%6e4/1e3),(0,a.useEffect)(()=>{if(!window.matchMedia(`(hover: none), (pointer: coarse)`).matches||!(`IntersectionObserver`in window))return;let e=Array.from(document.querySelectorAll(`.winner-art-card`)),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.intersectionRatio>=.6&&(e.target.classList.add(`is-revealed`),t.unobserve(e.target))})},{threshold:[.6]});return e.forEach(e=>{t.observe(e)}),()=>{t.disconnect()}},[]),(0,o.jsxs)(m,{children:[(0,o.jsx)(h,{"aria-hidden":`true`}),(0,o.jsx)(Q,{current:`winner`}),(0,o.jsx)(R,{children:(0,o.jsxs)(g,{children:[(0,o.jsx)(k,{children:`The first tale`}),(0,o.jsx)(A,{children:`The Great Seven`}),(0,o.jsx)(j,{children:`Seven coins changed seven lives.`}),(0,o.jsxs)(z,{children:[(0,o.jsxs)(B,{href:`https://x.com/onecoinrbh/status/2097349817420652725?s=20`,target:`_blank`,rel:`noreferrer`,children:[`VIEW THE PUBLIC RECORD `,`↗`]}),(0,o.jsxs)(V,{href:s.opensea,target:`_blank`,rel:`noreferrer`,children:[`VIEW THE COLLECTION `,`↗`]})]})]})}),(0,o.jsx)(G,{children:(0,o.jsxs)(g,{children:[(0,o.jsxs)(H,{children:[(0,o.jsx)(k,{children:`The first collection`}),(0,o.jsx)(U,{children:`How the first game worked.`}),(0,o.jsx)(W,{children:`The first One Coin chapter was a collection of 10,000 NFTs on Robinhood Chain, minted through OpenSea for $1 each. Every NFT represented one separate chance in the final draw.`})]}),(0,o.jsxs)(K,{children:[(0,o.jsxs)(q,{children:[(0,o.jsx)(`b`,{children:`10,000`}),(0,o.jsx)(`span`,{children:`Total supply`})]}),(0,o.jsxs)(q,{children:[(0,o.jsx)(`b`,{children:`$1`}),(0,o.jsx)(`span`,{children:`Mint price`})]}),(0,o.jsxs)(q,{children:[(0,o.jsx)(`b`,{children:`24H`}),(0,o.jsx)(`span`,{children:`Trading window`})]}),(0,o.jsxs)(q,{children:[(0,o.jsx)(`b`,{children:`7`}),(0,o.jsx)(`span`,{children:`Winning NFTs`})]}),(0,o.jsxs)(q,{children:[(0,o.jsx)(`b`,{children:`$7K`}),(0,o.jsx)(`span`,{children:`Paid to winners`})]})]}),(0,o.jsxs)(J,{children:[(0,o.jsxs)(Y,{children:[(0,o.jsx)(X,{children:`I`}),(0,o.jsxs)(Z,{children:[(0,o.jsx)(`strong`,{children:`One dollar. One entry.`}),(0,o.jsx)(`p`,{children:`10,000 One Coin NFTs were released on Robinhood Chain through OpenSea for $1 each. Every NFT counted as one individual entry in the final draw.`})]})]}),(0,o.jsxs)(Y,{children:[(0,o.jsx)(X,{children:`II`}),(0,o.jsxs)(Z,{children:[(0,o.jsx)(`strong`,{children:`The coins could move.`}),(0,o.jsx)(`p`,{children:`Once the collection minted out, a 24-hour trading window began. Holders could keep their coins or trade them before the book closed.`})]})]}),(0,o.jsxs)(Y,{children:[(0,o.jsx)(X,{children:`III`}),(0,o.jsxs)(Z,{children:[(0,o.jsx)(`strong`,{children:`The final owner held the chance.`}),(0,o.jsx)(`p`,{children:`At the end of the trading window, ownership was locked for the draw. The wallet holding each NFT at that final snapshot carried that coin's chance of winning.`})]})]}),(0,o.jsxs)(Y,{children:[(0,o.jsx)(X,{children:`IV`}),(0,o.jsxs)(Z,{children:[(0,o.jsx)(`strong`,{children:`Fortune chose seven.`}),(0,o.jsx)(`p`,{children:`Dice was used publicly to select seven unique winning NFT IDs. Each winning coin received $1,000. All seven rewards were sent — $7,000 in total.`})]})]})]})]})}),(0,o.jsx)(`section`,{style:{padding:`80px 0 95px`,borderTop:`2px solid var(--ink)`,background:`var(--paper)`},children:(0,o.jsxs)(g,{children:[(0,o.jsxs)(`div`,{style:{maxWidth:`850px`,marginBottom:`42px`},children:[(0,o.jsx)(k,{children:`THE GREAT SEVEN`}),(0,o.jsx)(`h2`,{style:{margin:0,color:`var(--lapis)`,fontFamily:`"Cinzel", serif`,fontSize:`clamp(3rem,7vw,5.8rem)`,fontWeight:700,lineHeight:.92},children:`Fortune chose seven.`}),(0,o.jsx)(`p`,{style:{maxWidth:`650px`,margin:`20px 0 0`,fontFamily:`"Cormorant Garamond", serif`,fontSize:`1.15rem`,fontWeight:600,lineHeight:1.5},children:`These are the seven winning NFT IDs from the first One Coin draw. Each winning coin received $1,000.`})]}),(0,o.jsx)(`div`,{style:{display:`grid`,gap:`14px`},children:[{roman:`I`,id:`7230`,tx:`0x214ec4264a4c2bebe7573a96c05e50c7de8c3fc0320210451feed9eeb82e9acf`},{roman:`II`,id:`7381`,tx:`0xeeef74b6979bfe09462f58380478c59d06f6ab31c58393c87a3fad04fca3530e`},{roman:`III`,id:`4078`,tx:`0x311ecc4002785723d810a641f2dc6190b4b66a7f2e49cc2a7dc0225b992ffdee`},{roman:`IV`,id:`5729`,tx:`0x837d5bd61b90d3645a5d4c3ac34e0dfee120b1bedd1002d591348cc026144894`},{roman:`V`,id:`6040`,tx:`0x2456430cf51cd76fe3224abc68add8446619ed153ed6af47e0495d09e161eb4c`},{roman:`VI`,id:`7924`,tx:`0xae905328b9c2dd0b0e1fa50129f3e72e49a23614b337b7b5126a603ff0ad7e2e`},{roman:`VII`,id:`5414`,tx:`0xd8cd5cf6a116f35b659a106686ac261ba731bbbdf6271c2c663cc5a64c2a476c`}].map(e=>(0,o.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`100px 130px 150px minmax(0,1fr)`,alignItems:`center`,gap:`18px`,padding:`22px 25px`,border:`2px solid var(--ink)`,background:`var(--light)`,boxShadow:e.roman===`II`||e.roman===`IV`||e.roman===`VI`?`6px 7px 0 var(--red)`:`6px 7px 0 var(--lapis)`},children:[(0,o.jsxs)(`span`,{style:{color:`var(--red)`,fontFamily:`"Cinzel", serif`,fontSize:`.62rem`,fontWeight:700,letterSpacing:`.12em`},children:[`FORTUNE `,e.roman]}),(0,o.jsxs)(`strong`,{style:{color:`var(--lapis)`,fontFamily:`"Cinzel", serif`,fontSize:`1.5rem`},children:[`#`,e.id]}),(0,o.jsx)(`span`,{style:{fontFamily:`"Cinzel", serif`,fontSize:`.64rem`,fontWeight:700,color:`var(--red)`,letterSpacing:`.07em`},children:`$1,000 SENT ✓`}),(0,o.jsxs)(`a`,{href:`https://robinhoodchain.blockscout.com/tx/${e.tx}`,target:`_blank`,rel:`noreferrer`,title:e.tx,style:{minWidth:0,overflow:`hidden`,color:`var(--lapis)`,fontFamily:`monospace`,fontSize:`.72rem`,fontWeight:700,textDecoration:`underline`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:[e.tx,` ↗`]})]},e.id))}),(0,o.jsxs)(`div`,{style:{marginTop:`38px`,padding:`32px`,border:`2px solid var(--ink)`,background:`var(--lapis)`,boxShadow:`7px 8px 0 var(--red)`,textAlign:`center`},children:[(0,o.jsx)(`div`,{style:{color:`var(--pale-gold)`,fontFamily:`"Cinzel", serif`,fontSize:`clamp(3rem,7vw,5rem)`,fontWeight:700,lineHeight:.9},children:`$7,000`}),(0,o.jsx)(`div`,{style:{marginTop:`14px`,color:`white`,fontFamily:`"Cinzel", serif`,fontSize:`.65rem`,fontWeight:700,letterSpacing:`.13em`},children:`7 WINNERS · 7 PAYOUTS · PAID IN FULL`})]}),(0,o.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit,minmax(280px,1fr))`,gap:`16px`,marginTop:`34px`},children:[(0,o.jsxs)(`a`,{href:`https://x.com/DiceAgentRH/status/2097346750931443937`,target:`_blank`,rel:`noreferrer`,style:{minHeight:`165px`,padding:`28px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,border:`2px solid var(--ink)`,background:`var(--light)`,boxShadow:`6px 7px 0 var(--gold)`,color:`var(--ink)`,textDecoration:`none`},children:[(0,o.jsx)(`span`,{style:{color:`var(--red)`,fontFamily:`"Cinzel", serif`,fontSize:`.6rem`,fontWeight:700,letterSpacing:`.14em`},children:`PROOF OF DRAW`}),(0,o.jsx)(`strong`,{style:{marginTop:`20px`,color:`var(--lapis)`,fontFamily:`"Cinzel", serif`,fontSize:`1.45rem`},children:`Dice chose The Great Seven ↗`}),(0,o.jsx)(`span`,{style:{marginTop:`10px`,fontFamily:`"Cormorant Garamond", serif`,fontSize:`1rem`,fontWeight:600},children:`View the public Dice Agent draw.`})]}),(0,o.jsxs)(`a`,{href:`https://opensea.io/collection/onecoin`,target:`_blank`,rel:`noreferrer`,style:{minHeight:`165px`,padding:`28px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,border:`2px solid var(--ink)`,background:`var(--light)`,boxShadow:`6px 7px 0 var(--red)`,color:`var(--ink)`,textDecoration:`none`},children:[(0,o.jsx)(`span`,{style:{color:`var(--red)`,fontFamily:`"Cinzel", serif`,fontSize:`.6rem`,fontWeight:700,letterSpacing:`.14em`},children:`ORIGINAL COLLECTION`}),(0,o.jsx)(`strong`,{style:{marginTop:`20px`,color:`var(--lapis)`,fontFamily:`"Cinzel", serif`,fontSize:`1.45rem`},children:`One Coin on OpenSea ↗`}),(0,o.jsx)(`span`,{style:{marginTop:`10px`,fontFamily:`"Cormorant Garamond", serif`,fontSize:`1rem`,fontWeight:600},children:`View the original 10,000 One Coin NFTs.`})]})]})]})}),(0,o.jsx)($,{})]})}export{ne as WhitelistChecker,re as WinnerRoom};