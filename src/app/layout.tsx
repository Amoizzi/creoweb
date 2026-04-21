import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreoWeb — SMM агенція, відео та сайти для бізнесу в Україні",
  description: "CreoWeb — повний цикл створення контенту для бізнесу. Відеозйомка, монтаж TikTok/Reels/YouTube, SMM стратегія, лендінги та branding. Замовити контент в Україні.",
  keywords: ["SMM агенція Україна", "контент для бізнесу", "монтаж відео TikTok", "створення сайтів Україна", "CreoWeb"],
  verification: {
    google: "google38437c1590599752",
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://creoweb-smm.com",
    siteName: "CreoWeb",
    title: "CreoWeb — SMM агенція, відео та сайти для бізнесу",
    description: "Повний цикл створення контенту для бізнесу. Відео, SMM, лендінги та branding під ключ.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CreoWeb" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreoWeb — SMM агенція, відео та сайти для бізнесу",
    description: "Повний цикл створення контенту для бізнесу.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
