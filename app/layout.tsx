import type { Metadata, Viewport } from "next";
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/700.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "./globals.css";
import StyledComponentsRegistry from "./styled-components-registry";
import GlobalSiteHeader from "./global-site-header";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:3000"
      : "https://onecoinrbh.com"
  ),

  title: {
    default: "One Coin | Seven $1,000 Winners",
    template: "%s | One Coin",
  },

  description:
    "Mint a One Coin NFT for $1. Every NFT is one entry in a verifiable onchain draw for seven $1,000 prizes on Robinhood Chain.",

  applicationName: "One Coin",
  creator: "One Coin",
  publisher: "One Coin",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "One Coin",
    title: "One Coin | Seven $1,000 Winners",
    description:
      "Mint for $1. Every NFT is one entry in a verifiable onchain draw for seven $1,000 prizes.",
  },

  twitter: {
    card: "summary_large_image",
    title: "One Coin | Seven $1,000 Winners",
    description:
      "Mint for $1. Every NFT is one entry in a verifiable onchain draw for seven $1,000 prizes.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f3e4ad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalSiteHeader />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
