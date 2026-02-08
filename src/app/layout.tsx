import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ナースキャリア | 看護師の転職・求人サポート",
  description:
    "夜勤なし・残業なし・人間関係の良い職場など、あなたらしい働き方を見つける看護師専門の転職エージェント。元看護師のアドバイザーが、キャリアと生活のバランスを大切にした転職をサポートします。",
  keywords: [
    "看護師",
    "転職",
    "求人",
    "夜勤なし",
    "日勤のみ",
    "ワークライフバランス",
    "看護師転職エージェント",
  ],
  openGraph: {
    title: "ナースキャリア | 看護師の転職・求人サポート",
    description:
      "あなたらしい働き方を見つける看護師専門の転職エージェント",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
