import Image from "next/image";
import type { PortfolioProject } from "../../data/portfolio";
import { getAccentText } from "../../data/portfolio";

type ScreenshotGalleryProps = {
  project: PortfolioProject;
};

export function ScreenshotGallery({ project }: ScreenshotGalleryProps) {
  if (!project.screenshots?.length) return null;

  const accentText = getAccentText(project);

  return (
    <section className="py-12 md:py-16 border-t border-white/5">
      <p
        className="text-[12px] font-bold uppercase tracking-[4px] mb-3"
        style={{ color: accentText }}
      >
        Projeto
      </p>
      <h2 className="text-[28px] md:text-[36px] font-black tracking-tight leading-tight mb-8 text-white">
        Screenshots do projeto
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.screenshots.map((shot) => (
          <figure
            key={shot.src}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]"
          >
            <div
              className="flex items-center justify-between px-4 py-2.5 border-b border-white/5"
              style={{ background: `${project.accent}12` }}
            >
              <span className="text-[12px] font-semibold text-gray-300">{shot.label}</span>
            </div>
            <div className="relative aspect-[16/10] bg-[#0a0a0f]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
