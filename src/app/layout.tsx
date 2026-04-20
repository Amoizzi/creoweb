import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreoWeb — Контент, SMM та сайти для бізнесу в Україні",
  description: "CreoWeb — повний цикл створення контенту для бізнесу.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
