import type { Metadata } from "next";
import RoyalScroll from "../royal-scroll";

export const metadata:Metadata = {
  title:"The Royal Scroll | One Coin",
  description:"Everything written so far in the One Coin kingdom.",
};

export default function RoyalScrollPage() {
  return <RoyalScroll />;
}
