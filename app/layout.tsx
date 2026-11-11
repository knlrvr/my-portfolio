import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import PathHeader from "./components/header";
import Footer from "./components/footer";

import { Grain } from "./components/effects/grain";
import { ConsoleAsciiArt } from "./components/console-ascii";
import { ThemeProvider } from "./components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Resolves relative OG/Twitter image URLs (e.g. /opengraph-image.png) to the live domain.
  metadataBase: new URL("https://knlrvr.dev"),
  title: "Kane Lariviere",
  description: "Kane Lariviere • Software Engineer • Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Grain />
            <ConsoleAsciiArt />

            {/* The frame: a single centered column with hairline rails. */}
            <div className="mx-auto flex min-h-screen max-w-3xl flex-col bg-(--frame) sm:border-x sm:border-(--rule)">
              <PathHeader />
              <div className="flex-1 px-6">
                {children}
              </div>
              <Footer />
            </div>

            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
      </body>
    </html>
  );
}
