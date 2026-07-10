import Link from "next/link";
import { ArrowRight, CheckCircle, Code2 } from "lucide-react";
import { getAccentText, getProjectBySlug } from "../../data/portfolio";
import { ProjectMedia } from "./ProjectMedia";

type PortfolioHighlightSectionProps = {
  slug: string;
  sectionId: string;
  categoryLabel: string;
  title: string;
  subtitle: string;
  reversed?: boolean;
};

export function PortfolioHighlightSection({
  slug,
  sectionId,
  categoryLabel,
  title,
  subtitle,
  reversed = false,
}: PortfolioHighlightSectionProps) {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  const accentText = getAccentText(project);
  const hasPreview = (project.agents?.length ?? 0) > 0 || (project.modules?.length ?? 0) > 0;

  const copy = (
    <div className="flex flex-col gap-5">
      <span
        className="self-start text-[11px] font-bold px-3 py-1 rounded-full border"
        style={{
          color: accentText,
          borderColor: `${project.accent}40`,
          background: `${project.accent}15`,
        }}
      >
        {project.badge}
      </span>

      <p className="text-[16px] text-gray-400 leading-relaxed">{project.summary}</p>

      <ul className="space-y-2">
        {project.ourRole.slice(0, 4).map((role) => (
          <li key={role} className="flex items-start gap-2 text-[13px] text-gray-400">
            <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: accentText }} />
            {role}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium border border-white/10 bg-white/[0.03] text-gray-400"
          >
            <Code2 className="w-3 h-3 shrink-0" style={{ color: accentText }} />
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <a
          href={project.url}
          {...(project.ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center gap-2 font-bold text-[14px] px-6 py-3 rounded-xl transition-all hover:opacity-90 text-white"
          style={{
            background: `linear-gradient(135deg, ${project.accent}, ${project.accentSecondary})`,
            boxShadow: `0 8px 24px ${project.accent}40`,
          }}
        >
          {project.cta} <ArrowRight className="w-4 h-4" />
        </a>
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold text-[14px] px-6 py-3 rounded-xl transition-colors"
        >
          Ver case completo <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  const visual = hasPreview ? (
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
  ) : null;

  return (
    <section
      id={sectionId}
      className="py-24 px-6 border-t border-white/5 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${reversed ? "30%" : "70%"} 50%, ${project.glowColor} 0%, transparent 60%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[12px] font-bold uppercase tracking-[4px] mb-2"
            style={{ color: accentText }}
          >
            {categoryLabel}
          </p>
          <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-tight mb-4">
            {title}
          </h2>
          <p className="text-[16px] text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {hasPreview && visual && (
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {reversed ? (
              <>
                {visual}
                {copy}
              </>
            ) : (
              <>
                {copy}
                {visual}
              </>
            )}
          </div>
        )}

        {!hasPreview && copy}
      </div>
    </section>
  );
}
