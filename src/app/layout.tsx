import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreoWeb — SMM агенція, відео, сайти та контент для бізнесу в Україні",
  description: "CreoWeb — повний цикл створення контенту для бізнесу в Україні. Відеозйомка, монтаж TikTok/Reels/YouTube, SMM стратегія, лендінги, Telegram боти та branding під ключ. Збільшимо охоплення вашого бізнесу.",
  keywords: [
    "SMM агенція Україна", "SMM менеджер Україна", "контент для бізнесу",
    "контент маркетинг Україна", "ведення соцмереж", "просування в соцмережах",
    "монтаж відео TikTok", "монтаж Reels", "YouTube монтаж",
    "відеозйомка для бізнесу", "створення сайтів Україна", "лендінг під ключ",
    "розробка лендінгу", "Telegram бот для бізнесу", "розробка Telegram бота",
    "бот асистент для бізнесу", "AI асистент бот", "парсер даних",
    "автоматизація бізнесу", "email розсилки Україна", "банери для реклами",
    "дизайн банерів", "branding Україна", "фірмовий стиль", "логотип для бізнесу",
    "копірайтинг Україна", "сценарій для відео", "діджитал агенція Україна",
    "CreoWeb", "SMM агентство Украина", "контент для бизнеса",
    "монтаж видео TikTok", "создание сайтов Украина", "лендинг под ключ",
    "Telegram бот для бизнеса", "автоматизация бизнеса", "баннеры для рекламы",
    "брендинг Украина", "SMM agency Ukraine", "content creation Ukraine",
    "TikTok video editing", "landing page Ukraine", "Telegram bot development",
    "branding Ukraine", "digital agency Ukraine", "social media management Ukraine",
  ],
  authors: [{ name: "CreoWeb", url: "https://creoweb-smm.com" }],
  creator: "CreoWeb",
  publisher: "CreoWeb",
  category: "Marketing Agency",
  classification: "Business",
  metadataBase: new URL("https://creoweb-smm.com"),
  verification: {
    google: "google38437c1590599752",
  },
  alternates: {
    canonical: "https://creoweb-smm.com",
    languages: {
      "uk-UA": "https://creoweb-smm.com",
      "ru-RU": "https://creoweb-smm.com",
      "en-US": "https://creoweb-smm.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    alternateLocale: ["ru_RU", "en_US"],
    url: "https://creoweb-smm.com",
    siteName: "CreoWeb",
    title: "CreoWeb — SMM агенція, відео та сайти для бізнесу в Україні",
    description: "Повний цикл створення контенту для бізнесу. Відео, SMM, лендінги та branding під ключ. Збільшимо охоплення вашого бізнесу.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CreoWeb — SMM агенція та контент для бізнесу",
        type: "image/png",
      },
    ],
    countryName: "Ukraine",
    emails: ["hello@creoweb-smm.com"],
    phoneNumbers: [],
  },
  twitter: {
    card: "summary_large_image",
    site: "@creoweb",
    creator: "@creoweb",
    title: "CreoWeb — SMM агенція, відео та сайти для бізнесу",
    description: "Повний цикл створення контенту для бізнесу. Відео, SMM, лендінги та branding під ключ.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "UA",
    "geo.placename": "Ukraine",
    "og:locale:alternate": "ru_RU",
    "rating": "general",
    "revisit-after": "7 days",
    "language": "Ukrainian",
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
