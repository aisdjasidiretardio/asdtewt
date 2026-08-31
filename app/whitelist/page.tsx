import type { Metadata } from "next";
import { WhitelistChecker } from "../portal-client";

export const metadata:Metadata = {
  title:"Whitelist Checker | One Coin",
  description:"Check whitelist eligibility for the One Coin mint.",
};

export default function WhitelistPage() {
  return <WhitelistChecker />;
}