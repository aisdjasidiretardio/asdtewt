import type { Metadata } from "next";
import GreatSevenClient from "../great-seven-client";

export const metadata:Metadata = {
  title:"The Great Seven | One Coin",
  description:"Seven winning coins. Seven $1,000 rewards. The permanent record of One Coin's first game.",
};

export default function WinnerPage(){
  return <GreatSevenClient />;
}