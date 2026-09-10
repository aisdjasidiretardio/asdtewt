import type { Metadata } from "next";
import { WinnerRoom } from "../portal-client";

export const metadata:Metadata = {
  title:"Winner Chamber | One Coin",
  description:"Seven winners. $7,000 distributed. Chapter I is complete.",
};

export default function WinnerPage() {
  return <WinnerRoom />;
}