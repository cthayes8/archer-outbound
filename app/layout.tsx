import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://archer-outbound.com"),
  title: "Archer Outbound — AI Sales Agents Built Exclusively for MSPs",
  description:
    "We build dedicated AI sales agents for managed service providers. Your agent finds prospects in your territory, sends personalized outreach, and books qualified meetings on your calendar.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Archer Outbound — AI Sales Agents Built Exclusively for MSPs",
    description:
      "We build dedicated AI sales agents for managed service providers. Your agent finds prospects in your territory, sends personalized outreach, and books qualified meetings on your calendar.",
    url: "https://archer-outbound.com",
    siteName: "Archer Outbound",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archer Outbound — AI Sales Agents Built Exclusively for MSPs",
    description:
      "We build dedicated AI sales agents for managed service providers. Your agent finds prospects in your territory, sends personalized outreach, and books qualified meetings on your calendar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
