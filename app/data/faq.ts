export type FaqItem = {
  question: string;
  answer: string;
};

export const SOFTWARE_HOUSE_FAQ: FaqItem[] = [
  {
    question: "O que é uma software house?",
    answer:
      "Software house é uma empresa especializada em desenvolvimento de software sob medida — sites, sistemas web, aplicativos e plataformas digitais. A Gambit Tech atua como software house brasileira, do discovery à entrega em produção.",
  },
  {
    question: "Qual a diferença entre software house e fábrica de software?",
    answer:
      "Os termos são muito usados de forma equivalente no Brasil. Fábrica de software e software house designam empresas que projetam, desenvolvem e mantêm soluções digitais personalizadas para clientes, em oposição a produtos prontos de prateleira.",
  },
  {
    question: "A Gambit Tech desenvolve quais tipos de projeto?",
    answer:
      "Desenvolvemos plataformas SaaS, sistemas de gestão, sites institucionais, integrações com inteligência artificial, aplicativos mobile e MVPs para validação de negócio — sempre com stack moderna e código proprietário.",
  },
  {
    question: "Vocês atendem empresas fora de Brasília?",
    answer:
      "Sim. Somos baseados em Brasília e atendemos clientes em todo o Brasil de forma remota, com processos estruturados de discovery, entrega iterativa e suporte em produção.",
  },
];

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
