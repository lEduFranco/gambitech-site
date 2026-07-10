import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Shield, BarChart3, Code2, Globe, Layers, BookOpen } from "lucide-react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SEO_KEYWORDS,
  SITE_URL,
} from "./data/site";
import { homeJsonLd } from "./lib/json-ld";
import { SOFTWARE_HOUSE_FAQ, faqPageJsonLd } from "./data/faq";
import { PawnSVG } from "./components/Logo";
import { JsonLd } from "./components/JsonLd";
import { ContactMenu } from "./components/ContactMenu";
import { ProductsScroll } from "./components/ProductsScroll";
import { PortfolioHighlightSection } from "./components/portfolio/PortfolioHighlightSection";
import { PortfolioGrid } from "./components/PortfolioGrid";
import { SiteNav } from "./components/SiteNav";
import { SiteFooter } from "./components/SiteFooter";
import { getBlogPostsSorted } from "./data/blog";

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
  },
};


const values = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Entrega rápida",
    description: "MVPs funcionais em semanas. Foco no que gera valor de negócio desde o primeiro dia.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Stack moderna",
    description: "Next.js, TypeScript e PostgreSQL. Código limpo, escalável e fácil de evoluir.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Projetos sob medida",
    description: "Plataformas, sistemas e sites construídos para mercados específicos e clientes reais.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Confiável em produção",
    description: "Hospedagem profissional, backups automáticos e monitoramento contínuo.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Foco em resultados",
    description: "Cada feature existe para gerar receita ou reduzir trabalho manual do operador.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Código proprietário",
    description: "Você tem controle total. Sem lock-in de plataforma ou dependência de terceiros.",
  },
];

export default function Home() {
  const latestPosts = getBlogPostsSorted().slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <JsonLd data={[...homeJsonLd(), faqPageJsonLd(SOFTWARE_HOUSE_FAQ)]} />

      <SiteNav />

      <main id="conteudo-principal">
      {/* Hero */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden" aria-labelledby="hero-heading">
        {/* glow de fundo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        </div>
        {/* grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-[13px] font-medium text-violet-300">Software house brasileira</span>
          </div>

          <h1 id="hero-heading" className="text-[52px] md:text-[72px] font-black leading-[1.02] tracking-tight mb-6">
            Software house que{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              resolve
            </span>
            <br />problemas reais
          </h1>

          <p className="text-[18px] text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Fábrica de software brasileira: desenvolvemos plataformas, sistemas de gestão e sites sob medida para negócios de todos os portes — de empresas de diaristas a imobiliárias, de centros terapêuticos a soluções com inteligência artificial.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Ver portfólio <ArrowRight className="h-4 w-4" />
            </a>
            <ContactMenu label="Falar com a equipe" variant="secondary" align="center" />
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]" aria-labelledby="valores-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="valores-heading" className="sr-only">
            Por que escolher nossa software house
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 text-violet-400">
                  {v.icon}
                </div>
                <div>
                  <p className="font-bold text-[14px] text-white mb-1">{v.title}</p>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-6 border-b border-white/5"
        aria-labelledby="software-house-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="software-house-heading"
            className="text-[28px] md:text-[36px] font-black text-white leading-tight mb-5"
          >
            Desenvolvimento de software sob medida no Brasil
          </h2>
          <p className="text-[16px] text-gray-400 leading-relaxed mb-4">
            A Gambit Tech é uma <strong className="text-gray-300 font-semibold">software house</strong> e{" "}
            <strong className="text-gray-300 font-semibold">fábrica de software</strong> baseada em Brasília,
            especializada em transformar problemas de negócio em produtos digitais — sistemas web,
            plataformas SaaS, aplicativos e integrações com inteligência artificial.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed">
            Do MVP à operação em produção: entregamos código proprietário, stack moderna (Next.js,
            TypeScript, PostgreSQL) e foco em resultados mensuráveis para empresas que precisam de
            tecnologia confiável, escalável e feita sob medida.
          </p>
        </div>
      </section>

      <ProductsScroll />

      <PortfolioHighlightSection
        slug="ai-para-empresas"
        sectionId="ai"
        categoryLabel="Inteligência Artificial"
        title="Agentes de IA para empresas"
        subtitle="Automatizamos revisão de código, investigação de CI, análise de dados e consulta a documentação — com arquitetura transparente e integração ao fluxo real do negócio."
      />

      <PortfolioHighlightSection
        slug="clipper"
        sectionId="clipper"
        categoryLabel="Em desenvolvimento"
        title="Clipper — gestão para barbearias"
        subtitle="Agendamentos, equipe, repasse de cortes e assinaturas em um sistema feito para a rotina da barbearia moderna."
        reversed
      />

      <PortfolioHighlightSection
        slug="loopay"
        sectionId="loopay"
        categoryLabel="Em desenvolvimento"
        title="Loopay — plataforma de assinaturas"
        subtitle="Cadastre produtos, crie planos, tenha uma landing page exclusiva e deixe o cliente gerenciar ou cancelar a assinatura quando quiser."
      />

      <PortfolioGrid />

      <section className="py-20 px-6 border-t border-white/5" aria-labelledby="blog-heading">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
                <BookOpen className="h-3.5 w-3.5 text-violet-400" />
                <span className="text-[13px] font-medium text-violet-300">Blog</span>
              </div>
              <h2
                id="blog-heading"
                className="text-[28px] md:text-[36px] font-black text-white leading-tight"
              >
                Guias sobre software house e desenvolvimento
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-violet-400 hover:text-violet-300 transition-colors shrink-0"
            >
              Ver todos os artigos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors"
              >
                <h3 className="font-bold text-[15px] text-white leading-snug mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-violet-200 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/5" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="faq-heading"
            className="text-[28px] md:text-[36px] font-black text-white text-center leading-tight mb-10"
          >
            Perguntas frequentes sobre software house
          </h2>
          <dl className="space-y-6">
            {SOFTWARE_HOUSE_FAQ.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-6"
              >
                <dt className="font-bold text-[15px] text-white mb-2">{item.question}</dt>
                <dd className="text-[14px] text-gray-500 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center border border-white/10 rounded-3xl p-14 bg-white/[0.02]">
          <div className="flex justify-center mb-6">
            <PawnSVG size={48} />
          </div>
          <h2 id="cta-heading" className="text-[36px] md:text-[46px] font-black text-white leading-tight mb-4">
            Tem um problema<br />para resolver?
          </h2>
          <p className="text-[17px] text-gray-400 mb-10 leading-relaxed">
            Fale com nossa equipe de desenvolvimento de software. Construímos soluções digitais
            sob medida para negócios que precisam crescer com tecnologia de verdade.
          </p>
          <div className="flex flex-wrap items-center justify-center">
            <ContactMenu label="Entrar em contato" variant="primary" align="center" />
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
    </div>
  );
}
