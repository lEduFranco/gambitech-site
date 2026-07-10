import { Search } from "lucide-react";
import type { PortfolioProject } from "../../data/portfolio";
import { getAccentText } from "../../data/portfolio";
import { agentIcons } from "./agent-icons";

type AgentPreviewPanelProps = {
  project: PortfolioProject;
  variant?: "preview" | "hero" | "thumb";
};

export function AgentPreviewPanel({ project, variant = "preview" }: AgentPreviewPanelProps) {
  const agents = project.agents;
  if (!agents?.length) return null;

  const accentText = getAccentText(project);
  const visibleAgents =
    variant === "thumb" ? agents.slice(0, 4) : variant === "preview" ? agents.slice(0, 5) : agents;

  const chromeTitle =
    variant === "thumb" ? `${agents.length} agentes` : `agentes · ReAct · ${agents.length} refs`;

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${
        variant === "thumb" ? "p-2" : "p-4 md:p-6"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden border shadow-2xl ${
          variant === "thumb" ? "h-full rounded-xl max-w-none" : "max-w-[520px] rounded-2xl"
        }`}
        style={{
          borderColor: `${project.accent}30`,
          boxShadow: variant === "thumb" ? "none" : `0 24px 64px ${project.glowColor}`,
        }}
      >
        <div
          className="flex items-center gap-2 px-3 py-2 border-b"
          style={{
            background: `linear-gradient(135deg, ${project.accentSecondary}, ${project.accent})`,
            borderColor: `${project.accent}20`,
          }}
        >
          <div className="flex gap-1 shrink-0">
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
          </div>
          <div className="flex-1 flex justify-center min-w-0 px-2">
            <span
              className={`font-medium text-white/80 truncate ${
                variant === "thumb" ? "text-[9px]" : "text-[10px] md:text-[11px]"
              }`}
            >
              {chromeTitle}
            </span>
          </div>
          <div className="w-8 shrink-0" aria-hidden />
        </div>

        <div
          className={`bg-[#0a0a0f] ${
            variant === "thumb" ? "p-2 space-y-1.5" : "p-3 md:p-4 space-y-2"
          } ${variant === "hero" ? "max-h-[340px] overflow-y-auto" : ""}`}
        >
          {visibleAgents.map((agent) => {
            const Icon = agentIcons[agent.id] ?? Search;

            return (
              <div
                key={agent.id}
                className={`flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] ${
                  variant === "thumb" ? "p-2" : "p-2.5 md:p-3"
                }`}
              >
                <div
                  className={`rounded-lg flex items-center justify-center border shrink-0 ${
                    variant === "thumb" ? "w-7 h-7" : "w-9 h-9"
                  }`}
                  style={{
                    background: `${project.accent}15`,
                    borderColor: `${project.accent}30`,
                    color: accentText,
                  }}
                >
                  <Icon className={variant === "thumb" ? "w-3.5 h-3.5" : "w-4 h-4"} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      className={`font-bold text-white leading-tight ${
                        variant === "thumb" ? "text-[10px] line-clamp-1" : "text-[12px] md:text-[13px]"
                      }`}
                    >
                      {agent.name}
                    </p>
                    <span
                      className={`shrink-0 font-bold uppercase tracking-wide rounded-full border px-1.5 py-0.5 ${
                        variant === "thumb" ? "text-[7px]" : "text-[8px]"
                      }`}
                      style={{
                        color: accentText,
                        borderColor: `${project.accent}25`,
                        background: `${project.accent}10`,
                      }}
                    >
                      {agent.category}
                    </span>
                  </div>
                  {variant !== "thumb" && (
                    <p className="text-[11px] font-medium mt-0.5 line-clamp-1" style={{ color: accentText }}>
                      {agent.tagline}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          {variant !== "hero" && agents.length > visibleAgents.length && (
            <p
              className={`text-center text-gray-500 ${
                variant === "thumb" ? "text-[9px] pt-0.5" : "text-[11px] pt-1"
              }`}
            >
              +{agents.length - visibleAgents.length} agentes
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
