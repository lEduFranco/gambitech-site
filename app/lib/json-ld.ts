import type { BlogPost } from "../data/blog";
import { ORGANIZATION, SITE_NAME, SITE_URL, absoluteUrl } from "../data/site";
import type { PortfolioProject } from "../data/portfolio";

type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    image: ORGANIZATION.logo,
    description:
      "Software house e fábrica de software brasileira especializada em desenvolvimento de sistemas, plataformas web e soluções com inteligência artificial.",
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.phone,
    taxID: ORGANIZATION.cnpj,
    address: {
      "@type": "PostalAddress",
      ...ORGANIZATION.address,
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    knowsAbout: ORGANIZATION.knowsAbout,
    sameAs: [],
  };
}

export function webSiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Software house brasileira — desenvolvimento de software sob medida, plataformas digitais e sistemas de gestão.",
    inLanguage: "pt-BR",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function homePageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Software House e Fábrica de Software | Gambit Tech",
    description:
      "Desenvolvemos software sob medida, plataformas web e sistemas de gestão para empresas brasileiras.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "pt-BR",
  };
}

export function portfolioPageJsonLd(project: PortfolioProject): JsonLd[] {
  const pageUrl = absoluteUrl(`/portfolio/${project.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Portfólio",
          item: `${SITE_URL}/#produtos`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.name,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${pageUrl}#project`,
      name: project.name,
      headline: project.tagline,
      description: project.summary,
      url: pageUrl,
      creator: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "pt-BR",
      keywords: [project.category, "software house", "desenvolvimento de software", SITE_NAME].join(
        ", ",
      ),
      ...(project.screenshots?.[0]
        ? { image: absoluteUrl(project.screenshots[0].src) }
        : project.logo
          ? { image: absoluteUrl(project.logo) }
          : {}),
    },
  ];
}

export function homeJsonLd(): JsonLd[] {
  return [organizationJsonLd(), webSiteJsonLd(), homePageJsonLd()];
}

export function blogListingJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `Blog ${SITE_NAME} — Software House e Desenvolvimento`,
    description:
      "Artigos sobre software house, fábrica de software, desenvolvimento sob medida e tecnologia para empresas.",
    url: absoluteUrl("/blog"),
    inLanguage: "pt-BR",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function blogPostJsonLd(post: BlogPost): JsonLd[] {
  const pageUrl = absoluteUrl(`/blog/${post.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: absoluteUrl("/blog"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      url: pageUrl,
      inLanguage: "pt-BR",
      keywords: post.keywords.join(", "),
      author: {
        "@id": `${SITE_URL}/#organization`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: ORGANIZATION.logo,
    },
  ];
}
