import type { Metadata } from "next";
import RoyalGameClient from "./royal-game-client";

export const metadata: Metadata = {
  title: "Game II | One Coin",
  description:
    "ONECOIN Game II — Royal Rewards, Royal Pot, holder weight and onchain proof.",
};

export default function GameTwoPage() {
  return <RoyalGameClient />;
}