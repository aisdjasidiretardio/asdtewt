import type { Metadata } from "next";
import RoyalGameClient from "./royal-game-client";

export const metadata: Metadata = {
  title: "Game II | One Coin",
  description:
    "ONECOIN Game II: Royal Pot, Royal Rewards, live wallet weight, claims and verifiable onchain proof.",
};

export default function GameTwoPage() {
  return <RoyalGameClient />;
}
