import Image from "next/image";
import type { PortfolioProject } from "../../data/portfolio";
import { getBrowserHostname } from "../../data/portfolio";
import { AgentPreviewPanel } from "./AgentPreviewPanel";
import { ModulePreviewPanel } from "./ModulePreviewPanel";
import { projectVisuals } from "./ProjectVisuals";

type ProjectMediaProps = {
  project: PortfolioProject;
  variant?: "preview" | "hero";
};

export function ProjectMedia({ project, variant = "preview" }: ProjectMediaProps) {
  const Visual = projectVisuals[project.visual];
  const primaryShot = project.screenshots?.[0];
  const siteHostname = getBrowserHostname(project);

  if (project.agents?.length) {
    return <AgentPreviewPanel project={project} variant={variant} />;
  }

  if (project.modules?.length) {
    return <ModulePreviewPanel project={project} variant={variant} />;
  }

  if (primaryShot) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-6">
        <div
          className="relative w-full max-w-[520px] rounded-2xl overflow-hidden border shadow-2xl"
          style={{
            borderColor: `${project.accent}30`,
            boxShadow: `0 24px 64px ${project.glowColor}`,
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
              <span className="text-[10px] md:text-[11px] font-medium text-white/75 truncate">
                {siteHostname ?? project.name}
              </span>
            </div>
            <div className="w-8 shrink-0" aria-hidden />
          </div>
          <div className="relative aspect-[16/10] bg-[#0a0a0f]">
            <Image
              src={primaryShot.src}
              alt={primaryShot.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 520px"
              priority={variant === "hero"}
            />
          </div>
        </div>

        {project.screenshots?.[1] && variant === "hero" && (
          <div
            className="absolute -right-2 md:right-4 bottom-0 w-[28%] max-w-[140px] rounded-xl overflow-hidden border shadow-xl hidden sm:block"
            style={{ borderColor: `${project.accent}25` }}
          >
            <div
              className="h-1.5"
              style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accentSecondary})` }}
            />
            <div className="relative aspect-[9/19] bg-[#0a0a0f]">
              <Image
                src={project.screenshots[1].src}
                alt={project.screenshots[1].alt}
                fill
                className="object-cover object-top"
                sizes="140px"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return Visual ? <Visual /> : null;
}
