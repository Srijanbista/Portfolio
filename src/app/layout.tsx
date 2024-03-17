import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Srijan Bista",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scrollbar-track-violet-200 scrollbar-thin scrollbar-thumb-violet-700 scrollbar-thumb-rounded-lg ">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
