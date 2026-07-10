import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { PortfolioProject } from "../../data/portfolio";
import { getAccentText } from "../../data/portfolio";
import { ProjectMedia } from "./ProjectMedia";

type CaseStudyHeroProps = {
  project: PortfolioProject;
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const accentText = getAccentText(project);

  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.4 }}
      >
        <div
          className="w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: project.glowColor }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Link
          href="/#produtos"
          className="inline-flex items-center gap-2 text-[13px] text-gray-500 hover:text-gray-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao portfólio
        </Link>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="text-[11px] font-bold px-3 py-1 rounded-full border"
                style={{
                  color: accentText,
                  borderColor: `${project.accent}40`,
                  background: `${project.accent}15`,
                }}
              >
                {project.badge}
              </span>
              <span className="text-[12px] text-gray-500 font-medium">{project.category}</span>
            </div>

            <div>
              <h1 className="text-[40px] md:text-[56px] font-black leading-[1.05] tracking-tight mb-3 text-white">
                {project.name}
              </h1>
              <p className="text-[18px] font-medium mb-4" style={{ color: accentText }}>
                {project.tagline}
              </p>
              <p className="text-[16px] text-gray-400 leading-relaxed">{project.summary}</p>
            </div>
          </div>

          <div
            className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden border"
            style={{
              borderColor: `${project.accent}20`,
              background: `radial-gradient(ellipse at 60% 40%, ${project.glowColor} 0%, #0a0a0f 70%)`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(${project.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${project.gridColor} 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            <ProjectMedia project={project} variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
