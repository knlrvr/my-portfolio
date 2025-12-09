'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Header from "./components/header";
import Footer from "./components/footer";

import { Grain } from "./components/effects/grain";
import { ConsoleAsciiArt } from "./components/console-ascii";
import { ThemeProvider } from "./components/theme/theme-provider";
import PageList from "./components/page-list";

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from 'convex/react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Kane Lariviere",
//   description: "Kane Lariviere • Software Engineer • Portfolio",
// };

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

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
      <ClerkProvider publishableKey='pk_test_dml0YWwtZG9yeS01OC5jbGVyay5hY2NvdW50cy5kZXYk'>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Grain />
            <ConsoleAsciiArt />

            <Header />
              {children}
            <PageList />
            <Footer />

            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </ConvexProviderWithClerk>
      </ClerkProvider>
      </body>
    </html>
  );
}
