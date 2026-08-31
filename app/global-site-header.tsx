"use client";

import { usePathname } from "next/navigation";
import styled, { createGlobalStyle } from "styled-components";

const TWITTER_URL = "https://x.com/onecoinrbh";

const HideOldHeaders = createGlobalStyle`
  nav[aria-label="Primary navigation"]:not([data-shared-header="true"]){
    display:none !important;
  }
`;

const Header = styled.header`
  position:relative;
  z-index:60;
  isolation:isolate;
  color:#25170e;
  background:#eadcad;
  background-image:
    radial-gradient(
      circle at 20% 10%,
      rgba(255,255,255,.32),
      transparent 28%
    ),
    repeating-linear-gradient(
      97deg,
      rgba(80,52,22,.025) 0 1px,
      transparent 1px 5px
    );
  border-bottom:1px solid rgba(37,23,14,.3);
`;
const HeaderInner = styled.nav`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:min(1180px,calc(100% - 40px));
  margin:0 auto;
  padding:22px 0 17px;

  @media(min-width:760px){
    width:min(1180px,calc(100% - 80px));
  }

  @media(max-width:680px){
    align-items:flex-start;
    flex-direction:column;
    gap:14px;
    padding:18px 0 16px;
  }
`;
const Wordmark = styled.a`
  display:inline-flex;
  align-items:center;
  gap:9px;
  color:#25170e;
  font-family:"Cinzel",serif;
  font-size:.76rem;
  font-weight:700;
  letter-spacing:.11em;
  text-decoration:none;
  white-space:nowrap;

  span{
    color:#9e332a;
    font-size:1.15rem;
  }
`;

const Links = styled.div`
  display:flex;
  align-items:center;
  gap:clamp(10px,2.2vw,25px);

  @media(max-width:680px){
    justify-content:space-between;
    width:100%;
    gap:8px;
  }
`;

const HeaderLink = styled.a`
  color:#25170e;
  border-bottom:1px solid currentColor;
  font-family:"Cormorant Garamond",serif;
  font-size:.9rem;
  font-weight:700;
  letter-spacing:.08em;
  text-decoration:none;
  text-transform:uppercase;
  white-space:nowrap;

  &[aria-current="page"]{
    color:#9e332a;
  }

  @media(max-width:520px){
    font-size:.63rem;
    letter-spacing:.04em;
  }
`;

export default function GlobalSiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <HideOldHeaders />

      <Header>
        <HeaderInner
          aria-label="Primary navigation"
          data-shared-header="true"
        >
          <Wordmark href="/">
            <span>{"\u2726"}</span> One Coin
          </Wordmark>

          <Links>
  <HeaderLink href="/" aria-current={pathname === "/" ? "page" : undefined}>The Great Hall</HeaderLink>
  <HeaderLink href="/whitelist" aria-current={pathname === "/whitelist" ? "page" : undefined}>The Royal List</HeaderLink>
  <HeaderLink href="/winner" aria-current={pathname === "/winner" ? "page" : undefined}>Winner Chamber</HeaderLink>
  <HeaderLink href={TWITTER_URL} target="_blank" rel="noreferrer">X {"\u2197"}</HeaderLink>
</Links>
        </HeaderInner>
      </Header>
    </>
  );
}