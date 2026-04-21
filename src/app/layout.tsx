import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreoWeb — SMM агенція, відео, сайти та Telegram боти для бізнесу",
  description: "CreoWeb — створення контенту для бізнесу в Україні. SMM просування, монтаж відео TikTok та Reels, розробка сайтів та лендінгів, Telegram боти, branding під ключ.",
  keywords: [
    "SMM агенція", "створення контенту", "монтаж відео TikTok",
    "розробка сайтів", "лендінг", "Telegram бот", "branding",
    "SMM Україна", "контент для бізнесу", "CreoWeb"
  ],
  metadataBase: new URL("https://creoweb-smm.com"),
  verification: { google: "google38437c1590599752" },
  openGraph: {
    title: "CreoWeb — SMM агенція, відео та сайти для бізнесу",
    description: "Створення контенту для бізнесу в Україні. SMM, відео, сайти, Telegram боти під ключ.",
    url: "https://creoweb-smm.com",
    siteName: "CreoWeb",
    locale: "uk_UA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://creoweb-smm.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
