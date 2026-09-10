import type { Metadata } from "next";
import { WinnerRoom } from "../portal-client";

export const metadata:Metadata = {
  title:"Winner Chamber | One Coin",
  description:"Seven winners. $7,000 sent. The permanent record of One Coin Chapter I.",
};

export default function WinnerPage() {
  return <WinnerRoom />;
}