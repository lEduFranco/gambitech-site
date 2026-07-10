"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, CheckCircle, Code2 } from "lucide-react";
import { getFeaturedProjects, getAccentText } from "../data/portfolio";
import { ProjectMedia } from "./portfolio/ProjectMedia";

export function ProductsScroll() {
  const featuredProjects = getFeaturedProjects();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      const idx = Math.min(featuredProjects.length - 1, Math.floor(p * featuredProjects.length));
      setActiveIndex(idx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = featuredProjects[activeIndex];
  const activeAccentText = getAccentText(active);

  return (
    <section
      id="produtos"
      className="relative"
      ref={containerRef}
      style={{ height: `${featuredProjects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="shrink-0 pt-20 pb-4 md:pt-24 md:pb-6 px-6 md:px-16 text-center">
          <p className="text-[12px] font-bold text-violet-400 uppercase tracking-[4px] mb-2">Portfólio</p>
          <h2 className="text-[28px] md:text-[44px] font-black tracking-tight leading-tight">
            O que construímos
          </h2>
        </div>

        <div className="shrink-0 flex justify-center gap-2 md:gap-3 pb-4 md:pb-5 px-6 overflow-x-auto">
          {featuredProjects.map((item, i) => {
            const accentText = getAccentText(item);
            return (
            <button
              key={item.id}
              onClick={() => {
                if (!containerRef.current) return;
                const total = containerRef.current.offsetHeight - window.innerHeight;
                const targetP = (i + 0.1) / featuredProjects.length;
                window.scrollTo({
                  top: containerRef.current.offsetTop + targetP * total,
                  behavior: "smooth",
                });
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-[13px] font-semibold shrink-0"
              style={{
                borderColor: i === activeIndex ? item.accent : "rgba(255,255,255,0.1)",
                background: i === activeIndex ? `${item.accent}20` : "transparent",
                color: i === activeIndex ? accentText : "#6b7280",
              }}
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.name}
            </button>
          );
          })}
        </div>

        <div className="flex-1 min-h-0 px-6 md:px-16 grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center max-w-6xl mx-auto w-full pb-4 overflow-hidden">
          <div
            key={activeIndex}
            className="flex flex-col gap-3 md:gap-4 min-h-0 overflow-hidden"
            style={{ animation: "fadeSlideIn 0.4s ease forwards" }}
          >
            <span
              className="self-start shrink-0 text-[11px] font-bold px-3 py-1 rounded-full border"
              style={{
                color: activeAccentText,
                borderColor: `${active.accent}40`,
                background: `${active.accent}15`,
              }}
            >
              {active.badge}
            </span>

            <div className="shrink-0">
              <h3 className="text-[28px] md:text-[36px] lg:text-[44px] font-black leading-[1.05] tracking-tight mb-1.5">
                {active.name}
              </h3>
              <p className="text-[14px] font-medium mb-2" style={{ color: activeAccentText }}>
                {active.tagline}
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-400 leading-relaxed line-clamp-3">
                {active.summary}
              </p>
            </div>

            <div className="shrink-0 hidden sm:block">
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-gray-500 mb-1.5">
                Nossa atuação
              </p>
              <ul className="space-y-1">
                {active.ourRole.slice(0, 3).map((role) => (
                  <li key={role} className="flex items-start gap-2 text-[12px] md:text-[13px] text-gray-400">
                    <CheckCircle
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: activeAccentText }}
                    />
                    <span className="line-clamp-1">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 flex flex-wrap gap-1.5">
              {active.features.slice(0, 4).map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium border"
                  style={{
                    borderColor: `${active.accent}25`,
                    background: `${active.accent}08`,
                    color: "#d1d5db",
                  }}
                >
                  <CheckCircle className="w-3 h-3 shrink-0" style={{ color: activeAccentText }} />
                  {f}
                </div>
              ))}
              {active.features.length > 4 && (
                <span className="text-[11px] text-gray-500 self-center px-1">
                  +{active.features.length - 4}
                </span>
              )}
            </div>

            <div className="shrink-0 hidden md:block">
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-gray-500 mb-1.5">
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {active.techStack.slice(0, 4).map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium border border-white/10 bg-white/[0.03] text-gray-400"
                  >
                    <Code2 className="w-3 h-3 shrink-0" style={{ color: activeAccentText }} />
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-2 pt-1">
              {active.ctaExternal ? (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-[13px] px-5 py-2.5 rounded-xl transition-all hover:opacity-90 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, ${active.accentSecondary})`,
                    boxShadow: `0 8px 24px ${active.accent}40`,
                  }}
                >
                  {active.cta} <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <a
                  href={active.url}
                  className="inline-flex items-center gap-2 font-bold text-[13px] px-5 py-2.5 rounded-xl transition-all hover:opacity-90 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, ${active.accentSecondary})`,
                    boxShadow: `0 8px 24px ${active.accent}40`,
                  }}
                >
                  {active.cta} <ArrowRight className="w-4 h-4" />
                </a>
              )}
              <Link
                href={`/portfolio/${active.slug}`}
                className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold text-[13px] px-5 py-2.5 rounded-xl transition-colors"
              >
                Ver case completo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div
            key={`visual-${activeIndex}`}
            className="relative h-[200px] sm:h-[240px] md:h-full md:min-h-0 md:max-h-[360px] rounded-2xl md:rounded-3xl overflow-hidden border shrink-0"
            style={{
              borderColor: `${active.accent}20`,
              background: `radial-gradient(ellipse at 60% 40%, ${active.glowColor} 0%, #0a0a0f 70%)`,
              animation: "fadeScaleIn 0.5s ease forwards",
            }}
          >
            <div
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage: `linear-gradient(${active.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${active.gridColor} 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            <ProjectMedia project={active} variant="preview" />
          </div>
        </div>

        <div className="shrink-0 mx-6 md:mx-16 h-px bg-white/5 mb-4 md:mb-5">
          <div
            className="h-full transition-all duration-100"
            style={{
              width: `${progress * 100}%`,
              background: `linear-gradient(90deg, ${active.accent}, ${active.accentSecondary})`,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}
