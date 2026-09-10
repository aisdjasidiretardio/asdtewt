import{r as e}from"./framework-B8WyT5R3.js";import{i as t}from"./styled-components.browser.esm-B0_qInRY.js";var n=e(),r=`https://x.com/onecoinrbh`,i=t.main`
  --ink:#25170e;
  --light:#f7ecc9;
  --paper:#eadcad;
  --lapis:#163e75;
  --red:#9e332a;
  --gold:#c0923d;
  --pale-gold:#f1ce72;

  min-height:100vh;
  overflow:hidden;
  color:var(--ink);
  background:
    radial-gradient(circle at 50% 0%,rgba(255,255,255,.35),transparent 38%),
    var(--paper);
`,a=t.div`
  width:min(1180px,calc(100% - 40px));
  margin:0 auto;
`,o=t.section`
  padding:clamp(70px,10vw,130px) 0 85px;
  text-align:center;
`,s=t.p`
  margin:0 0 18px;
  color:var(--red);
  font-family:"Cormorant Garamond",serif;
  font-size:.82rem;
  font-weight:700;
  letter-spacing:.2em;
  text-transform:uppercase;
`,c=t.h1`
  margin:0;
  color:var(--lapis);
  font-family:"Cinzel",serif;
  font-size:clamp(3.5rem,10vw,8rem);
  font-weight:700;
  line-height:.84;

  span{
    display:block;
    color:var(--red);
  }
`,l=t.p`
  max-width:600px;
  margin:28px auto 0;
  color:rgba(37,23,14,.78);
  font-family:"Cormorant Garamond",serif;
  font-size:1.25rem;
  font-weight:600;
  line-height:1.5;
`,u=t.section`
  padding:15px 0 120px;
`,d=t.div`
  position:relative;

  &::before{
    content:"";
    position:absolute;
    left:54px;
    top:30px;
    bottom:30px;
    width:1px;
    background:var(--red);
  }

  @media(max-width:620px){
    &::before{
      left:25px;
    }
  }
`,f=t.article`
  position:relative;
  display:grid;
  grid-template-columns:110px 1fr;
  gap:28px;
  padding:24px 0 42px;

  @media(max-width:620px){
    grid-template-columns:50px 1fr;
    gap:15px;
  }
`,p=t.div`
  position:relative;
  z-index:2;
  width:68px;
  height:68px;
  margin:10px auto 0;
  display:grid;
  place-items:center;
  border:2px solid var(--ink);
  border-radius:50%;
  background:var(--light);
  box-shadow:4px 5px 0 var(--gold);
  color:var(--red);
  font-family:"Cinzel",serif;
  font-size:1rem;
  font-weight:700;

  @media(max-width:620px){
    width:48px;
    height:48px;
    font-size:.75rem;
  }
`,m=t.div`
  display:grid;
  overflow:hidden;
  border:2px solid var(--ink);
  background:var(--light);
  box-shadow:7px 8px 0 var(--lapis);

  @media(min-width:760px){
    grid-template-columns:180px 1fr;
  }
`,h=t.img`
  width:100%;
  height:100%;
  min-height:175px;
  object-fit:cover;
  border-bottom:2px solid var(--ink);

  @media(min-width:760px){
    border-right:2px solid var(--ink);
    border-bottom:0;
  }
`,g=t.div`
  padding:26px;

  small{
    color:var(--red);
    font-family:"Cinzel",serif;
    font-size:.62rem;
    font-weight:700;
    letter-spacing:.13em;
    text-transform:uppercase;
  }

  h2{
    margin:10px 0 0;
    color:var(--lapis);
    font-family:"Cinzel",serif;
    font-size:clamp(1.6rem,4vw,3rem);
    line-height:.98;
  }

  p{
    max-width:620px;
    margin:15px 0 0;
    font-family:"Cormorant Garamond",serif;
    font-size:1.08rem;
    font-weight:600;
    line-height:1.45;
  }
`,_=t.section`
  position:relative;
  overflow:hidden;
  padding:clamp(95px,13vw,160px) 0;
  border-top:2px solid var(--ink);
  background:var(--red);
  color:white;
  text-align:center;

  &::before{
    content:"VI";
    position:absolute;
    left:50%;
    top:50%;
    color:rgba(247,236,201,.06);
    font-family:"Cinzel",serif;
    font-size:clamp(17rem,52vw,45rem);
    font-weight:700;
    line-height:.7;
    transform:translate(-50%,-50%);
  }
`,v=t.div`
  position:relative;
  z-index:1;
  max-width:880px;
  margin:0 auto;

  h2{
    margin:0;
    color:var(--pale-gold);
    font-family:"Cinzel",serif;
    font-size:clamp(2.7rem,7vw,6rem);
    line-height:.92;
  }

  p{
    max-width:560px;
    margin:25px auto 0;
    font-family:"Cormorant Garamond",serif;
    font-size:1.25rem;
    font-weight:600;
    line-height:1.5;
  }
`,y=t.div`
  width:96px;
  height:96px;
  margin:38px auto;
  display:grid;
  place-items:center;
  border:2px solid var(--pale-gold);
  border-radius:50%;
  color:var(--pale-gold);
  font-size:2rem;
  transform:rotate(-8deg);
`,b=t.a`
  display:inline-flex;
  min-height:50px;
  align-items:center;
  justify-content:center;
  padding:0 20px;
  border:2px solid var(--pale-gold);
  color:var(--pale-gold);
  font-family:"Cinzel",serif;
  font-size:.67rem;
  font-weight:700;
  letter-spacing:.09em;
  text-decoration:none;
  text-transform:uppercase;
`,x=[{n:`I`,date:`07 SEP 2026`,title:`The gates opened.`,body:`The first One Coin collection entered Robinhood Chain.`,image:`/gallery/03-how-it-works-01-mint.webp`},{n:`II`,date:`07 SEP 2026`,title:`Every coin found a holder.`,body:`The first collection reached 10,000 out of 10,000.`,image:`/gallery/04-how-it-works-02-entry.webp`},{n:`III`,date:`08 SEP 2026`,title:`Fortune chose seven.`,body:`The book closed and seven winning coins were chosen publicly.`,image:`/gallery/05-how-it-works-03-closes.webp`},{n:`IV`,date:`08 SEP 2026`,title:`The royal purse opened.`,body:`The seven rewards were delivered.`,image:`/gallery/06-how-it-works-04-winner.webp`},{n:`V`,date:`10 SEP 2026`,title:`The kingdom gathered as one.`,body:`Holders entered the Inner Court on X. The first game ended, but the kingdom stayed together.`,image:`/gallery/notthelastggame.webp`}];function S(){return(0,n.jsxs)(i,{children:[(0,n.jsx)(o,{children:(0,n.jsxs)(a,{children:[(0,n.jsx)(s,{children:`The Royal Scroll`}),(0,n.jsxs)(c,{children:[`Everything written`,(0,n.jsx)(`span`,{children:`so far.`})]}),(0,n.jsx)(l,{children:`The history of One Coin, recorded in order.`})]})}),(0,n.jsx)(u,{children:(0,n.jsx)(a,{children:(0,n.jsx)(d,{children:x.map(e=>(0,n.jsxs)(f,{children:[(0,n.jsx)(p,{children:e.n}),(0,n.jsxs)(m,{children:[(0,n.jsx)(h,{src:e.image,alt:``}),(0,n.jsxs)(g,{children:[(0,n.jsx)(`small`,{children:e.date}),(0,n.jsx)(`h2`,{children:e.title}),(0,n.jsx)(`p`,{children:e.body})]})]})]},e.n))})})}),(0,n.jsx)(_,{children:(0,n.jsx)(a,{children:(0,n.jsxs)(v,{children:[(0,n.jsx)(s,{style:{color:`var(--pale-gold)`},children:`The next entry`}),(0,n.jsx)(`h2`,{children:`The ink has not dried yet.`}),(0,n.jsx)(`p`,{children:`The bottom of the Royal Scroll remains blank.`}),(0,n.jsx)(y,{children:`✦`}),(0,n.jsxs)(b,{href:r,target:`_blank`,rel:`noreferrer`,children:[`Follow the scroll on X `,`↗`]})]})})})]})}export{S as default};