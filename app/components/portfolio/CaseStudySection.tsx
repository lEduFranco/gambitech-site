type CaseStudySectionProps = {
  label: string;
  title: string;
  children: React.ReactNode;
  accent?: string;
};

export function CaseStudySection({ label, title, children, accent = "#7c3aed" }: CaseStudySectionProps) {
  return (
    <section className="py-12 md:py-16">
      <p
        className="text-[12px] font-bold uppercase tracking-[4px] mb-3"
        style={{ color: accent }}
      >
        {label}
      </p>
      <h2 className="text-[28px] md:text-[36px] font-black tracking-tight leading-tight mb-6 text-white">
        {title}
      </h2>
      <div className="text-[16px] text-gray-400 leading-relaxed">{children}</div>
    </section>
  );
}
