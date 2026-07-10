import type { Metadata } from "next";
import { CONTACT } from "./contact";

export const SITE_URL = "https://gambitech.com.br";
export const SITE_NAME = "Gambit Tech";
export const SITE_LEGAL_NAME = "LUIZ E F SA TECNOLOGIA";
export const SITE_CNPJ = "40.311.947/0001-38";
export const SITE_LOCALE = "pt_BR";

export const SEO_KEYWORDS = [
  "software house",
  "fábrica de software",
  "empresa de software",
  "desenvolvimento de software",
  "desenvolvimento de sistemas",
  "software sob medida",
  "desenvolvimento web",
  "desenvolvimento de plataformas",
  "sistemas sob medida",
  "software house Brasil",
  "fábrica de software Brasil",
  "desenvolvimento de aplicativos",
  "Next.js",
  "TypeScript",
  "inteligência artificial empresas",
  "Brasília",
  "Brasil",
] as const;

export const DEFAULT_TITLE =
  "Gambit Tech — Software House e Fábrica de Software no Brasil";

export const DEFAULT_DESCRIPTION =
  "Software house brasileira especializada em desenvolvimento de software sob medida, plataformas web, sistemas de gestão e soluções com inteligência artificial para empresas de todos os portes.";

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Gambit Tech — Software House e Fábrica de Software",
} as const;

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createBaseMetadata(overrides: Metadata = {}): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [...SEO_KEYWORDS],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
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
      canonical: "/",
      languages: {
        "pt-BR": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url: SITE_URL,
      siteName: SITE_NAME,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [OG_IMAGE.url],
    },
    other: {
      "geo.region": "BR-DF",
      "geo.placename": "Brasília",
    },
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? {
          verification: {
            google: process.env.GOOGLE_SITE_VERIFICATION,
            ...(process.env.BING_SITE_VERIFICATION
              ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
              : {}),
          },
        }
      : process.env.BING_SITE_VERIFICATION
        ? {
            verification: {
              other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION },
            },
          }
        : {}),
    ...overrides,
  };
}

export const ORGANIZATION = {
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  cnpj: SITE_CNPJ,
  url: SITE_URL,
  logo: absoluteUrl("/knight.png"),
  email: CONTACT.email,
  phone: CONTACT.phone,
  address: {
    addressCountry: "BR",
    addressRegion: "DF",
    addressLocality: "Brasília",
  },
  areaServed: "BR",
  knowsAbout: [
    "Desenvolvimento de software",
    "Software house",
    "Fábrica de software",
    "Plataformas web",
    "Sistemas de gestão",
    "Inteligência artificial",
    "Aplicativos mobile",
  ],
} as const;
