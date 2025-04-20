import type { Metadata } from "next";
import { DM_Serif_Display, Public_Sans } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "PayApi",
  description: "PayApi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${publicSans.variable} ${dmSerifDisplay.variable} mx-auto h-screen max-w-7xl bg-[#EDF3F8] antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
