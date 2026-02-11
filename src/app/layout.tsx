import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

// Roc Grotesk alternative - DM Sans (bold, rounded, geometric sans-serif)
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Charter alternative - Source Serif 4 (serif, readable, traditional)
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "blume* — gardens for everyone",
  description: "no yard doesn't have to mean no garden! making gardening accessible for everyone, one seed at a time.",
  keywords: ["gardening", "seeds", "plants", "indoor garden", "seed packets", "blume"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${sourceSerif.variable} antialiased bg-cream`}
      >
        {children}
      </body>
    </html>
  );
}
