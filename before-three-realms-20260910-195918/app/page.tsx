import type { Metadata } from "next";
import OneCoinSite from "./site-client";

export const metadata:Metadata = {
  title:"One Coin | The Great Hall",
  description:"One Coin is an onchain kingdom built around simple games, public outcomes and real rewards on Robinhood Chain.",
};

export default function Home(){
  return <OneCoinSite />;
}