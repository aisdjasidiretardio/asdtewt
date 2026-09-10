import type { Metadata } from "next";
import OneCoinSite from "./site-client";

export const metadata:Metadata = {
  title:"The Great Hall | One Coin",
  description:"The home of One Coin, an onchain kingdom built on Robinhood Chain.",
};

export default function Home() {
  return <OneCoinSite />;
}
