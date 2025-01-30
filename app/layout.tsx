import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

import Header from "./components/header";
import Footer from "./components/footer";

import { Grain } from "./components/effects/grain";
import { ConsoleAsciiArt } from "./components/console-ascii";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kane Lariviere",
  description: "Kane Lariviere • Software Developer • Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-8`}
      >
          <Grain />
          <ConsoleAsciiArt />

          <Header />
          {children}
          <Footer />

          <Analytics />
      </body>
    </html>
  );
}
