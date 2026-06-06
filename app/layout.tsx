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
  title: "Gambit Tech — Software que resolve problemas reais",
  description:
    "Software house brasileira que constrói plataformas digitais para mercados específicos. CestoAgenda para lavanderias, Sua Imobiliária para imobiliárias.",
  keywords: ["software house", "plataforma digital", "lavanderia", "imobiliária", "SaaS", "Brasil"],
  authors: [{ name: "Gambit Tech" }],
  creator: "Gambit Tech",
  metadataBase: new URL("https://gambitech.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gambitech.com.br",
    siteName: "Gambit Tech",
    title: "Gambit Tech — Software que resolve problemas reais",
    description:
      "Software house brasileira que constrói plataformas digitais para mercados específicos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gambit Tech — Software que resolve problemas reais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gambit Tech — Software que resolve problemas reais",
    description:
      "Software house brasileira que constrói plataformas digitais para mercados específicos.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
