import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@rainbow-me/rainbowkit/styles.css';
import "./globals.css";

import { Providers } from './provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BTP Presentation",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}