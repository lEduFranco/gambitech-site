import type { PortfolioProject } from "../../data/portfolio";
import { getAccentText } from "../../data/portfolio";
import { getModuleIcon } from "./module-icons";

type ModuleShowcaseProps = {
  project: PortfolioProject;
};

export function ModuleShowcase({ project }: ModuleShowcaseProps) {
  if (!project.modules?.length) return null;

  const accentText = getAccentText(project);

  return (
    <section className="py-12 md:py-16 border-t border-white/5">
      <p
        className="text-[12px] font-bold uppercase tracking-[4px] mb-3"
        style={{ color: accentText }}
      >
        Produto
      </p>
      <h2 className="text-[28px] md:text-[36px] font-black tracking-tight leading-tight mb-3 text-white">
        Módulos do sistema
      </h2>
      <p className="text-[15px] text-gray-400 leading-relaxed mb-8 max-w-2xl">
        Funcionalidades planejadas para a primeira versão — em desenvolvimento ativo pela Gambit Tech.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.modules.map((mod) => {
          const Icon = getModuleIcon(project.id, mod.id);

          return (
            <div
              key={mod.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="flex items-start gap-3 mb-3">
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
                  <h3 className="text-[15px] font-bold text-white">{mod.name}</h3>
                  <p className="text-[12px] font-medium" style={{ color: accentText }}>
                    {mod.tagline}
                  </p>
                </div>
              </div>

              {mod.description && (
                <p className="text-[13px] text-gray-500 leading-relaxed flex-1 mb-4">
                  {mod.description}
                </p>
              )}

              <span
                className="self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                style={{
                  color: accentText,
                  borderColor: `${project.accent}30`,
                  background: `${project.accent}10`,
                }}
              >
                {mod.category}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
