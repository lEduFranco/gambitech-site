import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  ExternalLink,
  Package,
} from "lucide-react";
import { getAllSlugs, getProjectBySlug, getAccentText } from "../../data/portfolio";
import { SEO_KEYWORDS, SITE_NAME, absoluteUrl } from "../../data/site";
import { portfolioPageJsonLd } from "../../lib/json-ld";
import { JsonLd } from "../../components/JsonLd";
import { ContactMenu } from "../../components/ContactMenu";
import { SiteNav } from "../../components/SiteNav";
import { SiteFooter } from "../../components/SiteFooter";
import { CaseStudyHero } from "../../components/portfolio/CaseStudyHero";
import { CaseStudySection } from "../../components/portfolio/CaseStudySection";
import { ScreenshotGallery } from "../../components/portfolio/ScreenshotGallery";
import { AgentShowcase } from "../../components/portfolio/AgentShowcase";
import { ModuleShowcase } from "../../components/portfolio/ModuleShowcase";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projeto não encontrado" };

  const title = `${project.name} — Case de Software | ${SITE_NAME}`;
  const description = `${project.summary} Projeto desenvolvido pela software house ${SITE_NAME}.`;
  const pageUrl = absoluteUrl(`/portfolio/${slug}`);
  const ogImage =
    project.screenshots?.[0]?.src ?? project.logo ?? "/knight.png";

  return {
    title,
    description,
    keywords: [
      project.name,
      project.category,
      "software house",
      "desenvolvimento de software",
      "fábrica de software",
      ...SEO_KEYWORDS.slice(0, 6),
    ],
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: pageUrl,
      images: [
        {
          url: ogImage,
          alt: `${project.name} — case de desenvolvimento de software pela ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PortfolioCasePage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const accentText = getAccentText(project);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <JsonLd data={portfolioPageJsonLd(project)} />
      <SiteNav />
      <CaseStudyHero project={project} />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 border-t border-white/5 pt-12">
          <CaseStudySection label="Contexto" title="O desafio" accent={accentText}>
            <p>{project.challenge}</p>
          </CaseStudySection>
          <CaseStudySection label="Resultado" title="A solução" accent={accentText}>
            <p>{project.solution}</p>
          </CaseStudySection>
        </div>

        <AgentShowcase project={project} />

        <ModuleShowcase project={project} />

        <ScreenshotGallery project={project} />

        <div className="border-t border-white/5 mt-4">
          <CaseStudySection label="Gambit Tech" title="Nossa atuação" accent={accentText}>
            <ul className="space-y-3">
              {project.ourRole.map((role) => (
                <li key={role} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-4 h-4 shrink-0 mt-1"
                    style={{ color: accentText }}
                  />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>
        </div>

        <div className="grid md:grid-cols-3 gap-8 border-t border-white/5 pt-4">
          <div className="md:col-span-1">
            <CaseStudySection label="Projeto" title="Entregas" accent={accentText}>
              <ul className="space-y-2">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[15px]">
                    <Package
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: accentText }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </CaseStudySection>
          </div>

          <div className="md:col-span-1">
            <CaseStudySection label="Produto" title="Funcionalidades" accent={accentText}>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium border"
                    style={{
                      borderColor: `${project.accent}25`,
                      background: `${project.accent}08`,
                      color: "#d1d5db",
                    }}
                  >
                    <CheckCircle className="w-3 h-3" style={{ color: accentText }} />
                    {feature}
                  </span>
                ))}
              </div>
            </CaseStudySection>
          </div>

          <div className="md:col-span-1">
            <CaseStudySection label="Tecnologia" title="Stack" accent={accentText}>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium border border-white/10 bg-white/[0.03] text-gray-400"
                  >
                    <Code2 className="w-3 h-3" style={{ color: accentText }} />
                    {tech}
                  </span>
                ))}
              </div>
            </CaseStudySection>
          </div>
        </div>

        {project.results && project.results.length > 0 && (
          <div className="border-t border-white/5 mt-4">
            <CaseStudySection label="Impacto" title="Resultados" accent={accentText}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.results.map((result) => (
                  <div
                    key={result.label}
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02] text-center"
                  >
                    <p
                      className="text-[28px] md:text-[32px] font-black mb-1"
                      style={{ color: accentText }}
                    >
                      {result.value}
                    </p>
                    <p className="text-[13px] text-gray-500">{result.label}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>
          </div>
        )}

        <div className="mt-16 text-center border border-white/10 rounded-3xl p-10 md:p-14 bg-white/[0.02]">
          <h2 className="text-[28px] md:text-[36px] font-black mb-4">
            Quer saber mais sobre este projeto?
          </h2>
          <p className="text-[16px] text-gray-400 mb-8 max-w-xl mx-auto">
            Entre em contato para conversar sobre como podemos construir algo similar para o seu negócio.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {project.ctaExternal ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-[14px] px-6 py-3 rounded-xl transition-all hover:opacity-90 text-white"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}, ${project.accentSecondary})`,
                  boxShadow: `0 8px 24px ${project.accent}40`,
                }}
              >
                {project.cta} <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <a
                href={project.url}
                className="inline-flex items-center gap-2 font-bold text-[14px] px-6 py-3 rounded-xl transition-all hover:opacity-90 text-white"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}, ${project.accentSecondary})`,
                  boxShadow: `0 8px 24px ${project.accent}40`,
                }}
              >
                {project.cta} <ArrowRight className="w-4 h-4" />
              </a>
            )}
            <ContactMenu label="Falar com a equipe" variant="secondary" align="center" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#produtos"
            className="text-[14px] text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Ver todos os projetos
          </Link>
        </div>
      </div>

      <SiteFooter />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}
