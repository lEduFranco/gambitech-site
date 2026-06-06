"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, ArrowRight, Brain, Shirt, Building2, CheckCircle } from "lucide-react";

const items = [
  {
    id: "ai",
    badge: "Serviço disponível",
    badgeColor: "text-violet-300 border-violet-500/30 bg-violet-500/10",
    name: "AI para Empresas",
    tagline: "Inteligência artificial sob medida",
    description:
      "Desenvolvemos soluções de IA para automatizar processos, extrair insights de dados e integrar modelos de linguagem ao seu negócio. Desde chatbots inteligentes até pipelines de análise preditiva.",
    features: ["Automação de processos", "Chatbots com LLMs", "Análise preditiva", "Integração com APIs de AI", "Dashboards inteligentes"],
    cta: "Falar sobre seu projeto",
    url: "mailto:eduardo33.luiz@gmail.com",
    ctaExternal: false,
    icon: Brain,
    accent: "#7c3aed",
    accentSecondary: "#4338ca",
    glowColor: "rgba(124,58,237,0.15)",
    gridColor: "rgba(124,58,237,0.06)",
    visual: "ai",
  },
  {
    id: "cesto",
    badge: "Disponível",
    badgeColor: "text-blue-300 border-blue-500/30 bg-blue-500/10",
    name: "CestoAgenda",
    tagline: "Gestão para lavanderias residenciais",
    description:
      "Plataforma completa para lavanderias oferecerem coleta e entrega agendada. Clientes solicitam pelo app, o operador confirma e gerencia tudo pelo painel — com notificações automáticas e controle de cestos.",
    features: ["Agendamento online", "Painel do operador", "Push notifications", "Planos e assinaturas", "Controle de cestos"],
    cta: "Acessar plataforma",
    url: "https://cesto-agenda.vercel.app",
    ctaExternal: true,
    icon: Shirt,
    accent: "#3b82f6",
    accentSecondary: "#0ea5e9",
    glowColor: "rgba(59,130,246,0.12)",
    gridColor: "rgba(59,130,246,0.05)",
    visual: "cesto",
  },
  {
    id: "imob",
    badge: "No ar",
    badgeColor: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10",
    name: "Sua Imobiliária",
    tagline: "Plataforma white-label para imobiliárias",
    description:
      "Solução completa para imobiliárias digitalizarem sua operação. Site white-label personalizado, backoffice de gestão de imóveis, clientes e corretores — tudo integrado e pronto para usar.",
    features: ["Site white-label", "Backoffice completo", "Gestão de imóveis", "CRM de clientes", "Multi-imobiliária"],
    cta: "Acessar plataforma",
    url: "https://www.suaimobiliaria.com",
    ctaExternal: true,
    icon: Building2,
    accent: "#10b981",
    accentSecondary: "#14b8a6",
    glowColor: "rgba(16,185,129,0.12)",
    gridColor: "rgba(16,185,129,0.05)",
    visual: "imob",
  },
];

function AIVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* circuito de linhas */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="linegrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="1" />
            <stop offset="100%" stopColor="#4338ca" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="200" y1="0" x2="200" y2="400" stroke="url(#linegrad)" strokeWidth="1" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="url(#linegrad)" strokeWidth="1" />
        <line x1="0" y1="0" x2="400" y2="400" stroke="url(#linegrad)" strokeWidth="0.5" />
        <line x1="400" y1="0" x2="0" y2="400" stroke="url(#linegrad)" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="80" stroke="#7c3aed" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="130" stroke="#4338ca" strokeWidth="0.5" fill="none" strokeDasharray="2 6" />
      </svg>
      {/* nós */}
      {[
        { x: "20%", y: "25%", size: 8, delay: "0s" },
        { x: "75%", y: "20%", size: 6, delay: "0.4s" },
        { x: "80%", y: "70%", size: 10, delay: "0.8s" },
        { x: "15%", y: "72%", size: 7, delay: "1.2s" },
        { x: "50%", y: "15%", size: 5, delay: "0.2s" },
        { x: "50%", y: "82%", size: 6, delay: "0.6s" },
      ].map((n, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-violet-400"
          style={{
            left: n.x, top: n.y,
            width: n.size, height: n.size,
            animation: `pulse 2s ease-in-out ${n.delay} infinite`,
            boxShadow: `0 0 ${n.size * 3}px rgba(124,58,237,0.8)`,
          }}
        />
      ))}
      {/* ícone central */}
      <div className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-2xl shadow-violet-900/50">
        <Brain className="w-12 h-12 text-white" />
      </div>
    </div>
  );
}

function CestoVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="linegrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="#3b82f6" strokeWidth="0.5" />
        ))}
        {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#3b82f6" strokeWidth="0.5" />
        ))}
      </svg>
      {/* mock de app */}
      <div className="relative z-10 w-48 h-80 rounded-3xl bg-gray-900 border border-blue-500/30 shadow-2xl shadow-blue-900/40 overflow-hidden flex flex-col">
        <div className="bg-blue-600 px-4 py-3 flex items-center gap-2">
          <Shirt className="w-4 h-4 text-white" />
          <span className="text-white text-xs font-bold">CestoAgenda</span>
        </div>
        <div className="flex-1 p-3 space-y-2">
          {["Coleta • Terça 09h", "Entrega • Quinta 14h", "Coleta • Sexta 10h"].map((t, i) => (
            <div key={i} className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2">
              <div className="text-blue-300 text-[10px] font-medium">{t}</div>
              <div className="text-gray-500 text-[9px] mt-0.5">1 cesto · Lavar e secar</div>
            </div>
          ))}
          <div className="mt-3 bg-blue-600 rounded-lg p-2 text-center">
            <span className="text-white text-[10px] font-bold">Nova solicitação</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImobVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
        {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="#10b981" strokeWidth="0.5" />
        ))}
        {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#10b981" strokeWidth="0.5" />
        ))}
      </svg>
      {/* mock de site imobiliária */}
      <div className="relative z-10 w-64 h-72 rounded-2xl bg-gray-900 border border-emerald-500/30 shadow-2xl shadow-emerald-900/40 overflow-hidden">
        <div className="bg-emerald-700 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-emerald-900/50 rounded px-2 py-0.5 text-[9px] text-emerald-300">suaimobiliaria.com</div>
        </div>
        <div className="p-3">
          <div className="bg-emerald-500/10 rounded-lg p-2 mb-2">
            <div className="text-emerald-300 text-[10px] font-bold mb-1">Imóveis em destaque</div>
            <div className="grid grid-cols-2 gap-1">
              {["Apto 2q • R$320k", "Casa 3q • R$540k", "Studio • R$180k", "Apto 3q • R$420k"].map((p, i) => (
                <div key={i} className="bg-gray-800 rounded p-1">
                  <div className="w-full h-8 bg-emerald-900/50 rounded mb-1" />
                  <div className="text-[8px] text-gray-400">{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const visuals: Record<string, React.FC> = {
  ai: AIVisual,
  cesto: CestoVisual,
  imob: ImobVisual,
};

export function ProductsScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      const idx = Math.min(items.length - 1, Math.floor(p * items.length));
      setActiveIndex(idx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = items[activeIndex];
  const Visual = visuals[active.visual];

  return (
    <section id="produtos" className="relative" ref={containerRef} style={{ height: `${items.length * 100}vh` }}>
      {/* painel sticky */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* header da seção */}
        <div className="pt-24 pb-8 px-6 md:px-16 text-center">
          <p className="text-[12px] font-bold text-violet-400 uppercase tracking-[4px] mb-2">Portfólio</p>
          <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-tight">
            O que construímos
          </h2>
        </div>

        {/* indicadores de produto */}
        <div className="flex justify-center gap-3 pb-6 px-6">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => {
                if (!containerRef.current) return;
                const rect = containerRef.current.getBoundingClientRect();
                const total = containerRef.current.offsetHeight - window.innerHeight;
                const targetP = (i + 0.1) / items.length;
                window.scrollTo({ top: containerRef.current.offsetTop + targetP * total, behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-[13px] font-semibold"
              style={{
                borderColor: i === activeIndex ? item.accent : "rgba(255,255,255,0.1)",
                background: i === activeIndex ? `${item.accent}20` : "transparent",
                color: i === activeIndex ? item.accent : "#6b7280",
              }}
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.name}
            </button>
          ))}
        </div>

        {/* conteúdo principal */}
        <div className="flex-1 px-6 md:px-16 grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto w-full pb-8">

          {/* texto — anima com key para trocar suavemente */}
          <div
            key={activeIndex}
            className="flex flex-col gap-5"
            style={{ animation: "fadeSlideIn 0.4s ease forwards" }}
          >
            <span
              className="self-start text-[11px] font-bold px-3 py-1 rounded-full border"
              style={{ color: active.accent, borderColor: `${active.accent}40`, background: `${active.accent}15` }}
            >
              {active.badge}
            </span>

            <div>
              <h3 className="text-[40px] md:text-[52px] font-black leading-[1.05] tracking-tight mb-3">
                {active.name}
              </h3>
              <p className="text-[16px] text-gray-400 leading-relaxed">
                {active.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {active.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium border"
                  style={{ borderColor: `${active.accent}25`, background: `${active.accent}08`, color: "#d1d5db" }}
                >
                  <CheckCircle className="w-3 h-3 shrink-0" style={{ color: active.accent }} />
                  {f}
                </div>
              ))}
            </div>

            <div>
              {active.ctaExternal ? (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-[14px] px-6 py-3 rounded-xl transition-all hover:opacity-90 text-white"
                  style={{ background: `linear-gradient(135deg, ${active.accent}, ${active.accentSecondary})`, boxShadow: `0 8px 24px ${active.accent}40` }}
                >
                  {active.cta} <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <a
                  href={active.url}
                  className="inline-flex items-center gap-2 font-bold text-[14px] px-6 py-3 rounded-xl transition-all hover:opacity-90 text-white"
                  style={{ background: `linear-gradient(135deg, ${active.accent}, ${active.accentSecondary})`, boxShadow: `0 8px 24px ${active.accent}40` }}
                >
                  {active.cta} <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* visual — troca com animação */}
          <div
            key={`visual-${activeIndex}`}
            className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden border"
            style={{
              borderColor: `${active.accent}20`,
              background: `radial-gradient(ellipse at 60% 40%, ${active.glowColor} 0%, #0a0a0f 70%)`,
              animation: "fadeScaleIn 0.5s ease forwards",
            }}
          >
            {/* grid de fundo */}
            <div
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage: `linear-gradient(${active.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${active.gridColor} 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            <Visual />
          </div>
        </div>

        {/* barra de progresso */}
        <div className="mx-6 md:mx-16 h-px bg-white/5 mb-6">
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
