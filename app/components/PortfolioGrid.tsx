import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { portfolioProjects, getAccentText } from "../data/portfolio";
import { AgentPreviewPanel } from "./portfolio/AgentPreviewPanel";
import { ModulePreviewPanel } from "./portfolio/ModulePreviewPanel";

export function PortfolioGrid() {
  return (
    <section className="py-20 px-6 border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[12px] font-bold text-violet-400 uppercase tracking-[4px] mb-2">
            Todos os projetos
          </p>
          <h2 className="text-[28px] md:text-[36px] font-black tracking-tight">
            Explore o portfólio completo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioProjects.map((project) => {
            const thumb = project.screenshots?.[0];
            const hasPreview =
              !!thumb || (project.agents?.length ?? 0) > 0 || (project.modules?.length ?? 0) > 0;
            const accentText = getAccentText(project);

            return (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all overflow-hidden"
              >
                {thumb ? (
                  <div className="relative aspect-[16/9] border-b border-white/5 bg-[#0a0a0f]">
                    <Image
                      src={thumb.src}
                      alt={thumb.alt}
                      fill
                      className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent"
                    />
                  </div>
                ) : project.agents?.length ? (
                  <div className="relative aspect-[16/9] border-b border-white/5 bg-[#0a0a0f] overflow-hidden">
                    <AgentPreviewPanel project={project} variant="thumb" />
                  </div>
                ) : project.modules?.length ? (
                  <div className="relative aspect-[16/9] border-b border-white/5 bg-[#0a0a0f] overflow-hidden">
                    <ModulePreviewPanel project={project} variant="thumb" />
                  </div>
                ) : null}

                <div className="flex flex-col p-6 flex-1">
                  {!hasPreview && (
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border"
                        style={{
                          background: `${project.accent}15`,
                          borderColor: `${project.accent}30`,
                          color: accentText,
                        }}
                      >
                        <project.icon className="w-5 h-5" />
                      </div>
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                        style={{
                          color: accentText,
                          borderColor: `${project.accent}30`,
                          background: `${project.accent}10`,
                        }}
                      >
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {hasPreview && (
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] text-gray-500 font-medium">{project.category}</span>
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                        style={{
                          color: accentText,
                          borderColor: `${project.accent}30`,
                          background: `${project.accent}10`,
                        }}
                      >
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {!hasPreview && (
                    <p className="text-[11px] text-gray-500 font-medium mb-1">{project.category}</p>
                  )}
                  <h3 className="text-[18px] font-black text-white mb-2 group-hover:text-white/90">
                    {project.name}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed flex-1 mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {project.agents && project.agents.length > 0 && (
                    <p className="text-[11px] font-medium mb-3" style={{ color: accentText }}>
                      {project.agents.length} agentes open source
                    </p>
                  )}

                  {project.modules && project.modules.length > 0 && (
                    <p className="text-[11px] font-medium mb-3" style={{ color: accentText }}>
                      {project.modules.length} módulos · {project.badge}
                    </p>
                  )}

                  <span
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors"
                    style={{ color: accentText }}
                  >
                    Ver case completo
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
