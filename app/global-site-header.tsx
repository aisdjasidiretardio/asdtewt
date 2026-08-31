"use client";

import { usePathname } from "next/navigation";
import styled, { createGlobalStyle } from "styled-components";

const TWITTER_URL = "https://x.com/onecoinrbh";

const HideOldHeaders = createGlobalStyle`
  nav[aria-label="Primary navigation"]:not([data-shared-header="true"]) {
    display: none !important;
  }
`;

const Header = styled.header`
  position: relative;
  z-index: 60;
  isolation: isolate;
  color: #25170e;
  background: #eadcad;
  background-image:
    radial-gradient(
      circle at 20% 10%,
      rgba(255, 255, 255, 0.32),
      transparent 28%
    ),
    repeating-linear-gradient(
      97deg,
      rgba(80, 52, 22, 0.025) 0 1px,
      transparent 1px 5px
    );
  border-bottom: 1px solid rgba(37, 23, 14, 0.3);
`;

const HeaderInner = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 22px 0 17px;

  @media (min-width: 760px) {
    width: min(1180px, calc(100% - 80px));
  }

  @media (max-width: 680px) {
    width: calc(100% - 32px);
    padding: 16px 0;
  }
`;

const Wordmark = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #25170e;
  font-family: "Cinzel", serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-decoration: none;
  white-space: nowrap;

  span {
    color: #9e332a;
    font-size: 1.15rem;
  }
`;

const HeaderLink = styled.a`
  color: #25170e;
  border-bottom: 1px solid currentColor;
  font-family: "Cormorant Garamond", serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &[aria-current="page"] {
    color: #9e332a;
  }
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(10px, 2.2vw, 25px);

  @media (max-width: 680px) {
    display: none;
  }
`;

const MobileMenu = styled.details`
  display: none;
  position: relative;

  @media (max-width: 680px) {
    display: block;
  }

  summary {
    color: #25170e;
    border-bottom: 1px solid currentColor;
    cursor: pointer;
    font-family: "Cinzel", serif;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    list-style: none;
    text-transform: uppercase;
    user-select: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  .menu-close {
    display: none;
  }

  &[open] .menu-open {
    display: none;
  }

  &[open] .menu-close {
    display: inline;
  }
`;

const MobilePanel = styled.div`
  position: absolute;
  top: calc(100% + 17px);
  right: 0;
  z-index: 80;
  display: flex;
  flex-direction: column;
  width: min(270px, calc(100vw - 32px));
  padding: 8px 16px;
  background: #eadcad;
  background-image:
    radial-gradient(
      circle at 20% 10%,
      rgba(255, 255, 255, 0.32),
      transparent 40%
    ),
    repeating-linear-gradient(
      97deg,
      rgba(80, 52, 22, 0.025) 0 1px,
      transparent 1px 5px
    );
  border: 1px solid rgba(37, 23, 14, 0.35);
  box-shadow: 8px 10px 0 rgba(37, 23, 14, 0.13);

  ${HeaderLink} {
    display: block;
    padding: 14px 2px;
    border-bottom: 1px solid rgba(37, 23, 14, 0.25);
    font-size: 0.82rem;
  }

  ${HeaderLink}:last-child {
    border-bottom: 0;
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
            <span>{"\u2726"}</span>
            One Coin
          </Wordmark>

          <DesktopLinks>
            <HeaderLink
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
            >
              The Great Hall
            </HeaderLink>

            <HeaderLink
              href="/whitelist"
              aria-current={pathname === "/whitelist" ? "page" : undefined}
            >
              The Royal List
            </HeaderLink>

            <HeaderLink
              href="/winner"
              aria-current={pathname === "/winner" ? "page" : undefined}
            >
              Winner Chamber
            </HeaderLink>

            <HeaderLink
              href={TWITTER_URL}
              target="_blank"
              rel="noreferrer"
            >
              X {"\u2197\uFE0E"}
            </HeaderLink>
          </DesktopLinks>

          <MobileMenu>
            <summary>
              <span className="menu-open">Menu</span>
              <span className="menu-close">Close</span>
            </summary>

            <MobilePanel>
              <HeaderLink
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
              >
                The Great Hall
              </HeaderLink>

              <HeaderLink
                href="/whitelist"
                aria-current={
                  pathname === "/whitelist" ? "page" : undefined
                }
              >
                The Royal List
              </HeaderLink>

              <HeaderLink
                href="/winner"
                aria-current={pathname === "/winner" ? "page" : undefined}
              >
                Winner Chamber
              </HeaderLink>

              <HeaderLink
                href={TWITTER_URL}
                target="_blank"
                rel="noreferrer"
              >
                X {"\u2197\uFE0E"}
              </HeaderLink>
            </MobilePanel>
          </MobileMenu>
        </HeaderInner>
      </Header>
    </>
  );
}
