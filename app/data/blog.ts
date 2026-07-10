export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  keywords: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-software-house",
    title: "Como escolher uma software house: guia completo para empresas",
    description:
      "Critérios práticos para avaliar software houses e fábricas de software no Brasil: portfólio, processo, stack, contrato e entrega em produção.",
    publishedAt: "2026-03-09",
    readingTime: "8 min",
    keywords: [
      "software house",
      "como escolher software house",
      "fábrica de software",
      "desenvolvimento de software",
      "terceirização de software",
    ],
    sections: [
      {
        paragraphs: [
          "Contratar uma software house é uma decisão estratégica. O parceiro certo acelera o negócio; o errado gera retrabalho, custo oculto e sistemas difíceis de evoluir. Este guia resume o que avaliar antes de fechar qualquer projeto de desenvolvimento de software sob medida.",
        ],
      },
      {
        heading: "1. Portfólio e cases reais",
        paragraphs: [
          "Peça cases com contexto de negócio, não apenas screenshots. Uma boa fábrica de software consegue explicar o problema do cliente, o que foi entregue e o resultado — mesmo que seja operacional (menos planilha, mais agendamento automático, etc.).",
          "Desconfie de portfólios genéricos com templates repetidos e zero detalhe sobre stack ou papel da equipe no projeto.",
        ],
        bullets: [
          "Existe case similar ao seu segmento ou desafio?",
          "O sistema está em produção hoje?",
          "Você consegue falar com um cliente anterior?",
        ],
      },
      {
        heading: "2. Processo de discovery e escopo",
        paragraphs: [
          "Software sob medida exige entendimento profundo do fluxo de trabalho. Software houses maduras começam mapeando processos, priorizando MVP e definindo entregas incrementais — não prometem 'tudo pronto' sem discovery.",
          "Um escopo bem definido reduz surpresas de prazo e custo. Procure parceiros que documentem requisitos, protótipos ou backlog priorizado antes de codar.",
        ],
      },
      {
        heading: "3. Stack, qualidade e propriedade do código",
        paragraphs: [
          "Prefira stacks modernas e amplamente adotadas (Next.js, TypeScript, PostgreSQL, por exemplo) para facilitar manutenção e contratação futura. Pergunte quem é dono do código, onde ficam os repositórios e como funciona a documentação técnica.",
          "Código proprietário seu, deploy previsível e ambiente de staging são sinais de maturidade — especialmente se você pretende escalar o produto.",
        ],
      },
      {
        heading: "4. Comunicação, prazo e suporte pós-entrega",
        paragraphs: [
          "Defina cadência de reuniões, canal de comunicação e critérios de aceite por entrega. MVPs funcionais em semanas são possíveis quando o escopo é focado; desconfie de prazos irreais para sistemas complexos.",
          "Após o go-live, combine SLA de correções, evolução e monitoramento. Software em produção precisa de manutenção — isso não é opcional.",
        ],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "Escolher uma software house no Brasil vai além do preço inicial. Avalie portfólio, processo, transparência técnica e capacidade de operar em produção. Na Gambit Tech, trabalhamos com discovery, entregas iterativas e foco em resultados de negócio — do site institucional à plataforma completa com IA.",
        ],
      },
    ],
  },
  {
    slug: "o-que-e-fabrica-de-software",
    title: "O que é fábrica de software? Diferenças, vantagens e quando contratar",
    description:
      "Entenda o que é uma fábrica de software, como ela se compara a software house e equipe interna, e em quais cenários faz sentido terceirizar o desenvolvimento.",
    publishedAt: "2026-03-08",
    readingTime: "6 min",
    keywords: [
      "fábrica de software",
      "software house",
      "desenvolvimento sob medida",
      "terceirização de TI",
      "empresa de software",
    ],
    sections: [
      {
        paragraphs: [
          "No mercado brasileiro, 'fábrica de software' e 'software house' costumam designar a mesma coisa: uma empresa especializada em projetar, desenvolver e manter soluções digitais personalizadas para clientes. Diferente de um produto SaaS genérico, a fábrica constrói software alinhado ao processo do seu negócio.",
        ],
      },
      {
        heading: "O que uma fábrica de software faz na prática",
        paragraphs: [
          "Do briefing ao deploy, a equipe cuida de discovery, UX, desenvolvimento, testes, infraestrutura e evolução contínua. Projetos típicos incluem sistemas de gestão, plataformas de agendamento, portais de assinatura, integrações com pagamento, apps mobile e automações com inteligência artificial.",
        ],
        bullets: [
          "Sites e landing pages de alta conversão",
          "Sistemas web e painéis administrativos",
          "Plataformas SaaS e marketplaces",
          "Integrações e agentes de IA para empresas",
        ],
      },
      {
        heading: "Fábrica de software vs. equipe interna",
        paragraphs: [
          "Montar time interno faz sentido em escala grande e demanda contínua. Para MVPs, projetos pontuais ou aceleração de roadmap, uma fábrica de software reduz tempo de contratação e traz experiência acumulada de dezenas de entregas.",
          "Muitas empresas começam com parceiro externo e internalizam partes do produto depois — com código e documentação já estruturados.",
        ],
      },
      {
        heading: "Quando contratar",
        paragraphs: [
          "Considere uma software house quando planilhas e ferramentas desconectadas limitam crescimento, quando você precisa de um produto digital como diferencial competitivo, ou quando quer validar um MVP rápido antes de investir pesado.",
          "O ideal é contratar quem entrega código limpo, proprietário e preparado para evoluir — não soluções engessadas difíceis de manter.",
        ],
      },
    ],
  },
  {
    slug: "quanto-custa-desenvolver-software-sob-medida",
    title: "Quanto custa desenvolver software sob medida no Brasil?",
    description:
      "Fatores que influenciam o custo de um projeto com software house: escopo, integrações, prazo, manutenção e como estimar investimento com segurança.",
    publishedAt: "2026-03-07",
    readingTime: "7 min",
    keywords: [
      "custo desenvolvimento software",
      "software sob medida preço",
      "quanto custa sistema web",
      "software house preço",
      "MVP custo",
    ],
    sections: [
      {
        paragraphs: [
          "Não existe tabela única: o custo de desenvolver software sob medida depende de escopo, complexidade, integrações e nível de acabamento. Ainda assim, dá para entender os fatores que mais pesam na proposta de uma fábrica de software — e evitar comparar projetos incomparáveis.",
        ],
      },
      {
        heading: "Fatores que mais impactam o orçamento",
        paragraphs: [
          "Número de perfis de usuário, fluxos críticos, regras de negócio, integrações (pagamento, WhatsApp, ERP, IA) e requisitos de segurança aumentam esforço. Design customizado, apps mobile nativos e multi-tenant também elevam complexidade.",
        ],
        bullets: [
          "Escopo funcional (MVP vs. produto completo)",
          "Integrações externas e APIs",
          "Painel admin, relatórios e permissões",
          "Infraestrutura, monitoramento e backups",
          "Suporte e evolução pós-lançamento",
        ],
      },
      {
        heading: "MVP vs. produto completo",
        paragraphs: [
          "Um MVP bem definido valida hipótese de negócio com investimento menor — foco em uma jornada principal, sem tentar resolver tudo no dia one. Já um sistema completo multi-módulo exige mais discovery, testes e operação.",
          "Software houses experientes ajudam a fatiar o roadmap para liberar valor cedo e financiar evoluções com receita ou validação de mercado.",
        ],
      },
      {
        heading: "Como comparar propostas",
        paragraphs: [
          "Compare escopo entregue, não só preço final. Proposta muito abaixo do mercado costuma esconder escopo incompleto, código descartável ou custos de manutenção altos depois.",
          "Peça detalhamento por fases, critérios de aceite, propriedade intelectual e o que está incluso em hospedagem e suporte.",
        ],
      },
      {
        heading: "Investimento como ativo de negócio",
        paragraphs: [
          "Software bem construído reduz trabalho manual, aumenta receita e cria barreira competitiva. Trate o projeto como investimento — com métricas de retorno — e escolha um parceiro que pense em produção e crescimento, não só em entregar telas.",
        ],
      },
    ],
  },
];

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsSorted(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
