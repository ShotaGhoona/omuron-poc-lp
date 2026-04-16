import type { Metadata } from "next";
import { Noto_Sans_JP, Bebas_Neue } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARCHAIVE（AI図面検索・見積プラットフォーム） ｜ STAR UP株式会社",
  description:
    "製造業DXを実現するAI図面検索・見積プラットフォーム。1枚の図面から社内の全ナレッジをAI活用。設計・調達・見積業務を独自のAIエージェントがサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
