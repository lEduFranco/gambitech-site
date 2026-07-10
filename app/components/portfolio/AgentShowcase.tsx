import { ExternalLink, Search } from "lucide-react";
import type { PortfolioProject } from "../../data/portfolio";
import { getAccentText } from "../../data/portfolio";
import { agentIcons } from "./agent-icons";

type AgentShowcaseProps = {
  project: PortfolioProject;
};

export function AgentShowcase({ project }: AgentShowcaseProps) {
  if (!project.agents?.length) return null;

  const accentText = getAccentText(project);

  return (
    <section className="py-12 md:py-16 border-t border-white/5">
      <p
        className="text-[12px] font-bold uppercase tracking-[4px] mb-3"
        style={{ color: accentText }}
      >
        Referências open source
      </p>
      <h2 className="text-[28px] md:text-[36px] font-black tracking-tight leading-tight mb-3 text-white">
        Agentes que construímos
      </h2>
      <p className="text-[15px] text-gray-400 leading-relaxed mb-8 max-w-2xl">
        Série de agentes publicados no GitHub — cada um resolve um problema concreto com
        arquitetura transparente. Adaptamos o mesmo padrão para o contexto e as ferramentas
        de cada cliente.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.agents.map((agent) => {
          const Icon = agentIcons[agent.id] ?? Search;

          return (
            <a
              key={agent.id}
              href={agent.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all p-5"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                    style={{
                      background: `${project.accent}15`,
                      borderColor: `${project.accent}30`,
                      color: accentText,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold text-white group-hover:text-white/90 truncate">
                      {agent.name}
                    </h3>
                    <p className="text-[12px] font-medium" style={{ color: accentText }}>
                      {agent.tagline}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-gray-400 shrink-0 mt-1 transition-colors" />
              </div>

              <p className="text-[13px] text-gray-500 leading-relaxed flex-1 mb-4">
                {agent.description}
              </p>

              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                  style={{
                    color: accentText,
                    borderColor: `${project.accent}30`,
                    background: `${project.accent}10`,
                  }}
                >
                  {agent.category}
                </span>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/lEduFranco?tab=repositories&q=agent"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors hover:opacity-80"
          style={{ color: accentText }}
        >
          Ver todos no GitHub
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
