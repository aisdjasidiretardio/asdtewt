"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Header = styled.header`
  position:sticky;
  top:0;
  z-index:100;
  background:rgba(247,236,201,.96);
  border-bottom:2px solid #25170e;
  backdrop-filter:blur(10px);
`;

const Inner = styled.div`
  width:min(1400px,calc(100% - 42px));
  min-height:76px;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:30px;

  @media(max-width:760px){
    min-height:auto;
    padding:18px 0;
    align-items:flex-start;
    flex-direction:column;
    gap:16px;
  }
`;

const Brand = styled(Link)`
  display:inline-flex;
  align-items:center;
  gap:9px;
  color:#163e75;
  font-family:"Cinzel",serif;
  font-size:1.02rem;
  font-weight:700;
  letter-spacing:.035em;
  text-decoration:none;
  text-transform:uppercase;

  span{
    color:#9e332a;
  }
`;

const Nav = styled.nav`
  display:flex;
  align-items:center;
  gap:28px;

  @media(max-width:760px){
    width:100%;
    gap:0;
    justify-content:space-between;
  }
`;

const NavLink = styled(Link)<{$active?:boolean}>`
  position:relative;
  color:${p => p.$active ? "#9e332a" : "#25170e"};
  font-family:"Cinzel",serif;
  font-size:.66rem;
  font-weight:700;
  letter-spacing:.09em;
  text-decoration:none;
  text-transform:uppercase;

  &::after{
    content:"";
    position:absolute;
    left:0;
    right:0;
    bottom:-8px;
    height:2px;
    background:${p => p.$active ? "#9e332a" : "transparent"};
  }

  &:hover{
    color:#9e332a;
  }

  @media(max-width:760px){
    font-size:.58rem;
  }
`;

const XLink = styled.a`
  color:#163e75;
  font-family:"Cinzel",serif;
  font-size:.66rem;
  font-weight:700;
  letter-spacing:.09em;
  text-decoration:none;
  text-transform:uppercase;

  &:hover{
    color:#9e332a;
  }
`;

export default function GlobalSiteHeader(){
  const pathname = usePathname();

  return (
    <Header>
      <Inner>
        <Brand href="/">
          <span>✦</span> One Coin
        </Brand>

        <Nav>
          <NavLink href="/" $active={pathname === "/"}>
            The Great Hall
          </NavLink>

          <NavLink href="/winner" $active={pathname === "/winner"}>
            The Great Seven
          </NavLink>

          <NavLink href="/scroll" $active={pathname === "/scroll"}>
            The Royal Scroll
          </NavLink>

          <XLink
            href="https://x.com/onecoinrbh"
            target="_blank"
            rel="noreferrer"
          >
            X ↗
          </XLink>
        </Nav>
      </Inner>
    </Header>
  );
}