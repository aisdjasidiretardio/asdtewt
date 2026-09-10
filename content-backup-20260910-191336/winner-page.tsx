import type { Metadata } from "next";
import { WinnerRoom } from "../portal-client";

export const metadata:Metadata = {
  title:"Winner Room | One Coin",
  description:"Watch the countdown and the seven verifiable One Coin winners appear.",
};

export default function WinnerPage() {
  return <WinnerRoom />;
}