import { Brain, Shirt, Building2, Sparkles, Leaf, Scissors, CreditCard, type LucideIcon } from "lucide-react";

export type PortfolioProjectType = "product" | "client-case" | "service";

export type PortfolioProject = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  type: PortfolioProjectType;
  badge: string;
  badgeColor: string;
  summary: string;
  challenge: string;
  solution: string;
  ourRole: string[];
  deliverables: string[];
  features: string[];
  techStack: string[];
  results?: { value: string; label: string }[];
  cta: string;
  url: string;
  ctaExternal: boolean;
  icon: LucideIcon;
  accent: string;
  accentSecondary: string;
  /** Cor legível para textos e ícones sobre fundo escuro */
  accentText: string;
  glowColor: string;
  gridColor: string;
  visual: string;
  featured?: boolean;
  logo?: string;
  screenshots?: { src: string; alt: string; label: string }[];
  agents?: PortfolioAgent[];
  modules?: PortfolioModule[];
  /** URL exibida no chrome do browser mock (ex.: quando `url` é mailto) */
  mediaUrl?: string;
};

export type PortfolioAgent = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  githubUrl: string;
  category: string;
  tags: string[];
};

export type PortfolioModule = {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  category: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "tomaisvip",
    slug: "to-mais-vip",
    name: "Tô Mais Vip",
    tagline: "Plataforma completa para empresa de diaristas",
    category: "Serviços Domésticos",
    type: "client-case",
    badge: "Projeto entregue",
    badgeColor: "text-rose-300 border-rose-500/30 bg-rose-500/10",
    summary:
      "Site, sistema de gestão e aplicativo para a Tô Mais Vip — empresa de diaristas em Brasília. Agendamentos, cadastro de profissionais, clientes, relatórios, mensagens e dashboard em uma única plataforma.",
    challenge:
      "A Tô Mais Vip operava com processos manuais para conectar clientes a diaristas em Brasília. Agendamentos via WhatsApp, controle de profissionais em planilhas e falta de visibilidade operacional limitavam a escala e a qualidade do atendimento — mesmo com anos de reputação no mercado.",
    solution:
      "Desenvolvemos o ecossistema digital completo: site institucional para captação e confiança, sistema de gestão com agendamentos, cadastro de diaristas e clientes, dashboard operacional, relatórios, mensagens internas, gestão de equipes e programa de indicações. Inclui aplicativo publicado nas lojas para ampliar o alcance do serviço.",
    ourRole: [
      "Discovery e mapeamento dos fluxos operacionais",
      "Design e desenvolvimento do site institucional",
      "Sistema de gestão e painel administrativo",
      "Módulo de agendamentos e cadastro de profissionais",
      "App mobile publicado nas lojas (iOS e Android)",
      "Dashboard, relatórios e sistema de mensagens",
    ],
    deliverables: [
      "Site institucional responsivo",
      "Sistema de agendamento de serviços",
      "Cadastro e gestão de diaristas",
      "Cadastro e histórico de clientes",
      "Dashboard operacional com relatórios",
      "App nas lojas de aplicativos",
    ],
    features: [
      "Agendamento de serviços",
      "Cadastro de diaristas",
      "Gestão de clientes",
      "Relatórios mensais",
      "Sistema de mensagens",
      "Dashboard operacional",
      "Gestão de equipes",
      "Programa de indicações",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "React Native", "App Store & Google Play"],
    cta: "Visitar site",
    url: "https://www.tomaisvip.com/",
    ctaExternal: true,
    icon: Sparkles,
    accent: "#750c41",
    accentSecondary: "#a5659b",
    accentText: "#f0a8c8",
    glowColor: "rgba(117,12,65,0.18)",
    gridColor: "rgba(165,101,155,0.08)",
    visual: "tomaisvip",
    featured: true,
    logo: "/portfolio/to-mais-vip/logo.svg",
    screenshots: [
      {
        src: "/portfolio/to-mais-vip/screenshot-home.png",
        alt: "Site institucional Tô Mais Vip — desktop",
        label: "Site institucional",
      },
      {
        src: "/portfolio/to-mais-vip/screenshot-mobile.png",
        alt: "Site institucional Tô Mais Vip — mobile",
        label: "Versão mobile",
      },
    ],
  },
  {
    id: "novaera",
    slug: "fraternidade-nova-era",
    name: "Fraternidade Nova Era",
    tagline: "Site institucional para centro xamânico em Brasília",
    category: "Institucional & Wellness",
    type: "client-case",
    badge: "Projeto entregue",
    badgeColor: "text-blue-300 border-blue-500/30 bg-blue-500/10",
    summary:
      "Site completo para a Fraternidade Nova Era — instituição religiosa e terapêutica de experiências xamânicas e Ayahuasca em Brasília, com páginas de medicinas, terapias, eventos e equipe.",
    challenge:
      "A Fraternidade Nova Era precisava de presença digital profissional para comunicar sua missão, apresentar medicinas e terapias, divulgar eventos e cerimônias, e facilitar o contato com pessoas interessadas em experiências xamânicas em Brasília — tudo com respeito à identidade espiritual da instituição.",
    solution:
      "Criamos um site institucional completo com arquitetura de conteúdo pensada para o público da casa: apresentação institucional, catálogo de medicinas, descrição de terapias e cerimônias, agenda de eventos, blog, galeria de fotos e perfis dos dirigentes e facilitadores — com design acolhedor e navegação clara.",
    ourRole: [
      "Arquitetura de informação e estrutura de conteúdo",
      "Design visual alinhado à identidade da instituição",
      "Desenvolvimento front-end responsivo",
      "Páginas de medicinas, terapias e eventos",
      "Seções de equipe, avaliações e contato",
      "Deploy e publicação em produção",
    ],
    deliverables: [
      "Site institucional responsivo",
      "Páginas de medicinas e terapias",
      "Seção de eventos e agenda",
      "Blog e galeria de fotos",
      "Perfis de dirigentes e facilitadores",
      "Formulários de contato integrados",
    ],
    features: [
      "Apresentação institucional",
      "Catálogo de medicinas",
      "Terapias e cerimônias",
      "Agenda de eventos",
      "Blog e conteúdo",
      "Galeria de fotos",
      "Equipe e facilitadores",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Responsive Design"],
    cta: "Visitar site",
    url: "https://www.fraternidadenovaera.com.br/",
    ctaExternal: true,
    icon: Leaf,
    accent: "#0c2742",
    accentSecondary: "#41597c",
    accentText: "#7eb8dc",
    glowColor: "rgba(65,89,124,0.22)",
    gridColor: "rgba(65,89,124,0.08)",
    visual: "novaera",
    featured: true,
    logo: "/portfolio/fraternidade-nova-era/logo.png",
    screenshots: [
      {
        src: "/portfolio/fraternidade-nova-era/screenshot-home.png",
        alt: "Site Fraternidade Nova Era — desktop",
        label: "Página inicial",
      },
      {
        src: "/portfolio/fraternidade-nova-era/screenshot-mobile.png",
        alt: "Site Fraternidade Nova Era — mobile",
        label: "Versão mobile",
      },
    ],
  },
  {
    id: "ai",
    slug: "ai-para-empresas",
    name: "AI para Empresas",
    tagline: "Agentes de IA sob medida, do protótipo à produção",
    category: "Inteligência Artificial",
    type: "service",
    badge: "Serviço disponível",
    badgeColor: "text-violet-300 border-violet-500/30 bg-violet-500/10",
    summary:
      "Desenvolvemos agentes de IA que automatizam trabalho real — revisão de código, investigação de CI, análise de dados, consulta a documentação e pipelines multi-agente — com loops ReAct explícitos, tool use e integração ao fluxo operacional da empresa.",
    challenge:
      "Empresas enxergam o potencial da IA, mas frameworks prontos escondem o que acontece por baixo dos panos, dificultam customização e tornam difícil levar experimentos para produção com confiança. Falta clareza sobre quais casos de uso valem a pena, como conectar LLMs a ferramentas reais e como auditar o que o agente fez.",
    solution:
      "Construímos agentes sob medida com arquitetura transparente: cada um implementa o loop ReAct manualmente (Reason → Act → Observe), expõe ferramentas específicas ao modelo e se integra ao contexto do cliente — GitHub Actions, bancos de dados, planilhas, bases documentais ou orquestração multi-agente. A série open source abaixo mostra o padrão que aplicamos em projetos reais.",
    ourRole: [
      "Discovery de casos de uso e desenho de ferramentas (tool use)",
      "Implementação de loops ReAct e orquestração multi-agente",
      "Integração com GitHub, APIs internas, bancos e documentação",
      "Pipelines RAG: chunking, embeddings e busca semântica",
      "Deploy em CI/CD, CLI ou serviços internos com observabilidade",
    ],
    deliverables: [
      "Agente funcional integrado ao fluxo do cliente",
      "Definição de ferramentas e system prompts auditáveis",
      "Integração com GitHub Actions ou APIs existentes",
      "Documentação técnica e handoff para a equipe",
    ],
    features: [
      "Revisão automática de PRs",
      "Investigação de falhas de CI",
      "Análise de dados em linguagem natural",
      "RAG sobre documentação interna",
      "Orquestração multi-agente",
      "Agentes self-improving",
    ],
    techStack: [
      "Python",
      "Anthropic API (Claude)",
      "Voyage AI",
      "GitHub Actions",
      "SQLite / PostgreSQL",
      "Claude Code CLI",
    ],
    results: [
      { value: "6", label: "Agentes open source" },
      { value: "ReAct", label: "Sem frameworks de orquestração" },
      { value: "Tool use", label: "Ferramentas explícitas" },
      { value: "Prod.", label: "Pronto para CI e CLI" },
    ],
    cta: "Falar sobre seu projeto",
    url: "mailto:eduardo33.luiz@gmail.com",
    ctaExternal: false,
    icon: Brain,
    accent: "#7c3aed",
    accentSecondary: "#4338ca",
    accentText: "#c4b5fd",
    glowColor: "rgba(124,58,237,0.15)",
    gridColor: "rgba(124,58,237,0.06)",
    visual: "ai",
    featured: false,
    agents: [
      {
        id: "code-review",
        name: "AI Code Review Agent",
        tagline: "Revisão automática de Pull Requests",
        description:
          "Disparado em PRs via GitHub Actions. O agente lista arquivos alterados, lê diffs e contexto adicional, e publica um review estruturado em markdown — loop ReAct com até 6 turnos, sem LangChain.",
        githubUrl: "https://github.com/lEduFranco/ai-code-review-agent",
        category: "DevOps",
        tags: ["GitHub Actions", "ReAct", "Tool use"],
      },
      {
        id: "ci-investigator",
        name: "CI Failure Investigator",
        tagline: "Diagnóstico de falhas de CI",
        description:
          "Quando um workflow falha, o agente lê os logs do job, busca o código relacionado ao erro e publica a causa raiz com sugestão de correção como comentário no commit.",
        githubUrl: "https://github.com/lEduFranco/ci-failure-investigator",
        category: "DevOps",
        tags: ["GitHub Actions", "Logs", "Root cause"],
      },
      {
        id: "sql-analyst",
        name: "SQL Data Analyst Agent",
        tagline: "Perguntas em linguagem natural sobre dados",
        description:
          "CLI que explora o schema SQLite autonomamente, executa queries somente leitura e responde em linguagem natural — mostrando a SQL usada como evidência.",
        githubUrl: "https://github.com/lEduFranco/sql-data-analyst-agent",
        category: "Dados",
        tags: ["SQLite", "Read-only", "CLI"],
      },
      {
        id: "spreadsheet-analyst",
        name: "Spreadsheet Analyst Agent",
        tagline: "Análise de planilhas com kernel evolutivo",
        description:
          "Kernel self-improving com fila de tarefas em disco, memória comportamental e subagente de coding que cria ferramentas sob demanda — powered by Claude Code headless.",
        githubUrl: "https://github.com/lEduFranco/spreadsheet-analyst-agent",
        category: "Dados",
        tags: ["CSV / Excel", "Self-improving", "Claude Code"],
      },
      {
        id: "docs-rag",
        name: "Docs RAG Agent",
        tagline: "Consulta inteligente à documentação",
        description:
          "RAG implementado do zero: chunking, embeddings Voyage AI, cosine similarity com NumPy e agente ReAct que busca trechos relevantes antes de responder com fontes citadas.",
        githubUrl: "https://github.com/lEduFranco/docs-rag-agent",
        category: "Conhecimento",
        tags: ["RAG", "Voyage AI", "Embeddings"],
      },
      {
        id: "multi-agent-report",
        name: "Multi-Agent Report Writer",
        tagline: "Relatórios com Pesquisador, Redator e Revisor",
        description:
          "Orquestrador que delega para três sub-agentes especializados — cada um com seu próprio loop ReAct — produzindo relatórios auditados contra achados reais da base documental.",
        githubUrl: "https://github.com/lEduFranco/multi-agent-report-writer",
        category: "Multi-agente",
        tags: ["Orquestração", "3 sub-agentes", "Markdown"],
      },
    ],
  },
  {
    id: "cesto",
    slug: "cestoagenda",
    name: "CestoAgenda",
    tagline: "Gestão para lavanderias residenciais",
    category: "SaaS Vertical",
    type: "product",
    badge: "Disponível",
    badgeColor: "text-indigo-300 border-indigo-500/30 bg-indigo-500/10",
    summary:
      "Plataforma completa para lavanderias oferecerem coleta e entrega agendada. Clientes solicitam pelo app, o operador confirma e gerencia tudo pelo painel.",
    challenge:
      "Lavanderias residenciais com serviço de coleta e entrega dependiam de WhatsApp, planilhas e anotações manuais para gerenciar agendamentos, cestos e comunicação com clientes — gerando retrabalho, falhas de comunicação e dificuldade para escalar a operação.",
    solution:
      "Construímos uma plataforma SaaS com app para o cliente final e painel web para o operador. O fluxo cobre solicitação de coleta, confirmação, acompanhamento de status, notificações automáticas, controle de cestos e gestão de planos — tudo integrado em uma única experiência.",
    ourRole: [
      "Product design e definição de fluxos",
      "Desenvolvimento full-stack da plataforma",
      "App do cliente e painel do operador",
      "Sistema de notificações push",
      "Infraestrutura e deploy em produção",
    ],
    deliverables: [
      "App web responsivo para clientes",
      "Painel administrativo do operador",
      "Sistema de agendamento e status",
      "Push notifications integradas",
      "Gestão de planos e assinaturas",
    ],
    features: [
      "Agendamento online",
      "Painel do operador",
      "Push notifications",
      "Planos e assinaturas",
      "Controle de cestos",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Push Notifications", "Tailwind CSS"],
    cta: "Acessar plataforma",
    url: "https://cestoagenda.com",
    ctaExternal: true,
    icon: Shirt,
    accent: "#4f46e5",
    accentSecondary: "#6366f1",
    accentText: "#a5b4fc",
    glowColor: "rgba(79,70,229,0.15)",
    gridColor: "rgba(99,102,241,0.06)",
    visual: "cesto",
    featured: true,
    screenshots: [
      {
        src: "/portfolio/cestoagenda/screenshot-home.png",
        alt: "CestoAgenda — desktop",
        label: "Página inicial",
      },
      {
        src: "/portfolio/cestoagenda/screenshot-mobile.png",
        alt: "CestoAgenda — mobile",
        label: "Versão mobile",
      },
    ],
  },
  {
    id: "imob",
    slug: "sua-imobiliaria",
    name: "Sua Imobiliária",
    tagline: "Plataforma white-label para imobiliárias",
    category: "PropTech",
    type: "product",
    badge: "No ar",
    badgeColor: "text-blue-300 border-blue-500/30 bg-blue-500/10",
    summary:
      "Solução completa para imobiliárias digitalizarem sua operação. Site white-label personalizado, backoffice de gestão de imóveis, clientes e corretores.",
    challenge:
      "Imobiliárias precisam de presença digital profissional e ferramentas internas para gestão de imóveis, clientes e corretores — mas montar essa infraestrutura do zero exige tempo, investimento alto e equipe técnica que a maioria não possui.",
    solution:
      "Desenvolvemos uma plataforma white-label multi-imobiliária: cada imobiliária recebe um site público personalizado com catálogo de imóveis e um backoffice completo para gestão interna. Corretores, clientes e imóveis ficam centralizados em um único sistema pronto para uso.",
    ourRole: [
      "Arquitetura multi-tenant white-label",
      "Desenvolvimento do site público e backoffice",
      "CRM de clientes e gestão de corretores",
      "Sistema de catálogo e busca de imóveis",
      "Deploy, monitoramento e evolução contínua",
    ],
    deliverables: [
      "Site white-label personalizado por imobiliária",
      "Backoffice de gestão completo",
      "CRM de clientes e leads",
      "Painel de corretores",
      "Catálogo de imóveis com filtros",
    ],
    features: [
      "Site white-label",
      "Backoffice completo",
      "Gestão de imóveis",
      "CRM de clientes",
      "Multi-imobiliária",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Multi-tenant", "Tailwind CSS"],
    cta: "Acessar plataforma",
    url: "https://www.suaimobiliaria.com",
    ctaExternal: true,
    icon: Building2,
    accent: "#1F4380",
    accentSecondary: "#2563eb",
    accentText: "#93c5fd",
    glowColor: "rgba(31,67,128,0.18)",
    gridColor: "rgba(37,99,235,0.06)",
    visual: "imob",
    featured: true,
    logo: "/portfolio/sua-imobiliaria/logo.svg",
    screenshots: [
      {
        src: "/portfolio/sua-imobiliaria/screenshot-home.png",
        alt: "Sua Imobiliária — desktop",
        label: "Página inicial",
      },
      {
        src: "/portfolio/sua-imobiliaria/screenshot-mobile.png",
        alt: "Sua Imobiliária — mobile",
        label: "Versão mobile",
      },
    ],
  },
  {
    id: "clipper",
    slug: "clipper",
    name: "Clipper",
    tagline: "Sistema de gestão para barbearias",
    category: "Barbearia & Beleza",
    type: "product",
    badge: "Em breve",
    badgeColor: "text-orange-300 border-orange-500/30 bg-orange-500/10",
    summary:
      "Plataforma completa para barbearias gerenciarem agendamentos, equipe, repasse de cortes, assinaturas e operação financeira — tudo centralizado em um único painel.",
    challenge:
      "Barbearias crescem com múltiplos barbeiros, planos mensais e filas no WhatsApp, mas continuam dependendo de anotações, planilhas e repasses manuais — gerando conflitos na divisão de valores, buracos na agenda e zero visibilidade do faturamento.",
    solution:
      "Estamos construindo o Clipper: sistema de gestão pensado para a rotina da barbearia moderna. Agendamento online, controle de funcionários, cálculo automático de repasse por corte, planos de assinatura recorrente e dashboard com indicadores do dia a dia.",
    ourRole: [
      "Product design e fluxos da operação",
      "Desenvolvimento full-stack da plataforma",
      "Módulo de agendamentos e fila de atendimento",
      "Gestão de funcionários e repasse de cortes",
      "Assinaturas recorrentes e controle financeiro",
    ],
    deliverables: [
      "Painel administrativo da barbearia",
      "Agenda de horários e serviços",
      "Cadastro de barbeiros e comissões",
      "Planos de assinatura para clientes",
      "Relatórios de faturamento e repasses",
    ],
    features: [
      "Agendamentos",
      "Gestão de funcionários",
      "Repasse de cortes",
      "Assinaturas",
      "Dashboard financeiro",
      "Multi-serviços",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    cta: "Quero saber mais",
    url: "mailto:eduardo33.luiz@gmail.com",
    ctaExternal: false,
    icon: Scissors,
    accent: "#ea580c",
    accentSecondary: "#f97316",
    accentText: "#fdba74",
    glowColor: "rgba(234,88,12,0.16)",
    gridColor: "rgba(249,115,22,0.07)",
    visual: "clipper",
    featured: false,
    mediaUrl: "https://clipper.app",
    modules: [
      {
        id: "agendamentos",
        name: "Agendamentos",
        tagline: "Agenda online e fila de atendimento",
        description:
          "Clientes marcam horário pelo app ou link; a barbearia vê a agenda do dia, serviços e confirmações em tempo real.",
        category: "Operação",
      },
      {
        id: "funcionarios",
        name: "Funcionários",
        tagline: "Cadastro e escala da equipe",
        description:
          "Perfis de barbeiros, serviços que cada um executa, horários de trabalho e histórico de atendimentos.",
        category: "Equipe",
      },
      {
        id: "repasse",
        name: "Repasse de cortes",
        tagline: "Comissão automática por serviço",
        description:
          "Define percentual ou valor fixo por corte e calcula o repasse de cada barbeiro sem planilha manual.",
        category: "Financeiro",
      },
      {
        id: "assinaturas",
        name: "Assinaturas",
        tagline: "Planos mensais para clientes",
        description:
          "Clube de cortes, pacotes recorrentes e controle de benefícios ativos por assinante.",
        category: "Recorrência",
      },
      {
        id: "dashboard",
        name: "Dashboard",
        tagline: "Visão do faturamento e metas",
        description:
          "Indicadores de receita, ticket médio, serviços mais vendidos e performance por barbeiro.",
        category: "Gestão",
      },
      {
        id: "gestao",
        name: "Gestão da barbearia",
        tagline: "Serviços, preços e unidade",
        description:
          "Catálogo de serviços, tabela de preços, configurações da unidade e regras operacionais.",
        category: "Admin",
      },
    ],
  },
  {
    id: "loopay",
    slug: "loopay",
    name: "Loopay",
    tagline: "Plataforma para vender assinaturas de produtos digitais e físicos",
    category: "SaaS & Recorrência",
    type: "product",
    badge: "Em breve",
    badgeColor: "text-sky-300 border-sky-500/30 bg-sky-500/10",
    summary:
      "Sistema onde qualquer pessoa cadastra produtos, cria planos de assinatura, recebe uma landing page exclusiva, gerencia assinantes e oferece portal para o cliente cancelar quando quiser.",
    challenge:
      "Criadores e pequenos negócios querem vender assinaturas recorrentes — caixas, clubes, conteúdos, serviços — mas montar checkout, landing page, gestão de planos e área do assinante exige integrações complexas e desenvolvimento caro.",
    solution:
      "O Loopay será uma plataforma self-service: o vendedor cria a conta, cadastra produtos, define planos e ganha automaticamente uma landing page pública. Painel completo para gerenciar assinantes, receita e churn — com portal do cliente para upgrade, downgrade e cancelamento.",
    ourRole: [
      "Arquitetura multi-tenant da plataforma",
      "Checkout e cobrança recorrente",
      "Gerador de landing pages por vendedor",
      "Painel administrativo e portal do assinante",
      "Fluxos de cancelamento self-service",
    ],
    deliverables: [
      "Landing page personalizada por produto",
      "Checkout e gestão de planos",
      "Painel do vendedor",
      "Portal do assinante",
      "Cancelamento e gestão de ciclo de vida",
    ],
    features: [
      "Landing por produto",
      "Planos e checkout",
      "Painel do vendedor",
      "Portal do assinante",
      "Cancelamento online",
      "Multi-produto",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Multi-tenant"],
    cta: "Quero saber mais",
    url: "mailto:eduardo33.luiz@gmail.com",
    ctaExternal: false,
    icon: CreditCard,
    accent: "#0284c7",
    accentSecondary: "#0ea5e9",
    accentText: "#7dd3fc",
    glowColor: "rgba(2,132,199,0.15)",
    gridColor: "rgba(14,165,233,0.06)",
    visual: "loopay",
    featured: false,
    mediaUrl: "https://loopay.app",
    modules: [
      {
        id: "landing",
        name: "Landing page",
        tagline: "Página pública por produto",
        description:
          "Cada produto recebe uma landing exclusiva com proposta de valor, planos e call-to-action para assinar.",
        category: "Vendas",
      },
      {
        id: "planos",
        name: "Planos e checkout",
        tagline: "Criação de planos e cobrança",
        description:
          "Defina preços, periodicidade, trial e benefícios — com checkout integrado para conversão.",
        category: "Monetização",
      },
      {
        id: "vendedor",
        name: "Painel do vendedor",
        tagline: "Gestão de assinantes e receita",
        description:
          "Acompanhe MRR, assinantes ativos, churn, produtos cadastrados e histórico de pagamentos.",
        category: "Gestão",
      },
      {
        id: "assinante",
        name: "Portal do assinante",
        tagline: "Área logada do cliente",
        description:
          "O assinante acessa plano atual, faturas, dados de pagamento e opções de alteração de plano.",
        category: "Cliente",
      },
      {
        id: "cancelamento",
        name: "Cancelamento",
        tagline: "Self-service para o cliente",
        description:
          "Fluxo transparente para cancelar, pausar ou trocar de plano sem depender de suporte manual.",
        category: "Retenção",
      },
      {
        id: "produtos",
        name: "Cadastro de produtos",
        tagline: "Catálogo do vendedor",
        description:
          "Cadastre múltiplos produtos, cada um com seus planos, landing e regras de assinatura independentes.",
        category: "Catálogo",
      },
    ],
  },
];

export function getAccentText(project: PortfolioProject): string {
  return project.accentText;
}

export function getSiteHostname(url: string): string | null {
  if (url.startsWith("mailto:")) return null;
  try {
    const host = new URL(url).hostname;
    return host.startsWith("www.") ? host.slice(4) : host;
  } catch {
    return null;
  }
}

export function getBrowserHostname(project: PortfolioProject): string | null {
  if (project.mediaUrl) return getSiteHostname(project.mediaUrl);
  return getSiteHostname(project.url);
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.featured !== false);
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return portfolioProjects.map((p) => p.slug);
}
