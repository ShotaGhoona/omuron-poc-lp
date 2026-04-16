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
  title: "LightMES（製造実行システム） ｜オムロン デジタル株式会社",
  description:
    "製造現場のデータ活用を通じ、経営目標達成に向けた効率的な製造管理システムを提供。生産と品質をより良く管理し、迅速な機能導入で継続的成長を支援します。",
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
