import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users, Building2, Shirt, ExternalLink, ChevronRight, Code2, Globe, Layers } from "lucide-react";
import { LogoMark, LogoMarkSmall, PawnSVG } from "./components/Logo";

const products = [
  {
    icon: <Shirt className="h-6 w-6" />,
    name: "CestoAgenda",
    tagline: "Gestão para lavanderias residenciais",
    description:
      "Plataforma completa para lavanderias oferecerem coleta e entrega agendada. Clientes solicitam pelo app, o operador confirma e gerencia tudo pelo painel — com notificações automáticas e controle de cestos.",
    features: ["Agendamento online", "Painel do operador", "Push notifications", "Planos e assinaturas", "Controle de cestos"],
    color: "from-blue-500 to-cyan-500",
    badge: "Disponível",
    badgeColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    url: "https://cesto-agenda.vercel.app",
    accentBg: "bg-blue-500/5 border-blue-500/10",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    name: "Sua Imobiliária",
    tagline: "Plataforma white-label para imobiliárias",
    description:
      "Solução completa para imobiliárias digitalizarem sua operação. Site white-label personalizado, backoffice de gestão de imóveis, clientes e corretores — tudo integrado e pronto para usar.",
    features: ["Site white-label", "Backoffice completo", "Gestão de imóveis", "CRM de clientes", "Multi-imobiliária"],
    color: "from-emerald-500 to-teal-500",
    badge: "No ar",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    url: "https://www.suaimobiliaria.com",
    accentBg: "bg-emerald-500/5 border-emerald-500/10",
  },
];

const values = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Entrega rápida",
    description: "MVPs funcionais em semanas. Foco no que gera valor de negócio desde o primeiro dia.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Stack moderna",
    description: "Next.js, TypeScript e PostgreSQL. Código limpo, escalável e fácil de evoluir.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Produtos verticais",
    description: "Software construído para mercados específicos, não soluções genéricas.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Confiável em produção",
    description: "Hospedagem profissional, backups automáticos e monitoramento contínuo.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Foco em resultados",
    description: "Cada feature existe para gerar receita ou reduzir trabalho manual do operador.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Código proprietário",
    description: "Você tem controle total. Sem lock-in de plataforma ou dependência de terceiros.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <LogoMark size={34} />
            <span className="font-black text-[17px] tracking-tight text-white">Gambit Tech</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#produtos" className="text-[14px] text-gray-400 hover:text-white transition-colors hidden sm:block">
              Produtos
            </a>
            <a
              href="mailto:contato@gambitech.com.br"
              className="text-[13px] font-semibold bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        {/* glow de fundo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        </div>
        {/* grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-[13px] font-medium text-violet-300">Software house brasileira</span>
          </div>

          <h1 className="text-[52px] md:text-[72px] font-black leading-[1.02] tracking-tight mb-6">
            Produtos digitais{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              que resolvem
            </span>
            <br />problemas reais
          </h1>

          <p className="text-[18px] text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Construímos plataformas verticais para mercados específicos — do agendamento de lavanderias à digitalização de imobiliárias. Cada produto nasce de uma dor real.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Ver produtos <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:contato@gambitech.com.br"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 text-violet-400">
                  {v.icon}
                </div>
                <div>
                  <p className="font-bold text-[14px] text-white mb-1">{v.title}</p>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] font-semibold text-violet-400 uppercase tracking-widest mb-3">Portfólio</p>
            <h2 className="text-[38px] md:text-[48px] font-black tracking-tight text-white mb-4">
              Nossos produtos
            </h2>
            <p className="text-[17px] text-gray-400 max-w-xl mx-auto">
              Plataformas em produção, usadas por clientes reais.
            </p>
          </div>

          <div className="space-y-6">
            {products.map((p, i) => (
              <div
                key={p.name}
                className={`rounded-2xl border ${p.accentBg} p-8 md:p-10 relative overflow-hidden`}
              >
                {/* número decorativo */}
                <span className={`absolute right-8 top-6 text-[80px] font-black bg-gradient-to-br ${p.color} bg-clip-text text-transparent opacity-10 leading-none select-none`}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shrink-0`}>
                        {p.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[20px] font-black text-white">{p.name}</h3>
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${p.badgeColor}`}>
                            {p.badge}
                          </span>
                        </div>
                        <p className="text-[13px] text-gray-400 font-medium">{p.tagline}</p>
                      </div>
                    </div>

                    <p className="text-[15px] text-gray-300 leading-relaxed mb-6 max-w-2xl">{p.description}</p>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                          <CheckCircle className="h-3 w-3 text-green-400 shrink-0" />
                          <span className="text-[12px] font-medium text-gray-300">{f}</span>
                        </div>
                      ))}
                    </div>

                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-bold text-[14px] px-5 py-2.5 rounded-xl transition-colors"
                      >
                        Acessar plataforma <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 bg-white/5 text-gray-500 font-bold text-[14px] px-5 py-2.5 rounded-xl cursor-not-allowed border border-white/5">
                        Em desenvolvimento
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center border border-white/10 rounded-3xl p-14 bg-white/[0.02]">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-violet-500/30">
              <PawnSVG size={28} />
            </div>
          </div>
          <h2 className="text-[36px] md:text-[46px] font-black text-white leading-tight mb-4">
            Tem um problema<br />para resolver?
          </h2>
          <p className="text-[17px] text-gray-400 mb-10 leading-relaxed">
            Construímos software sob medida para negócios que precisam de soluções digitais eficientes e prontas para crescer.
          </p>
          <a
            href="mailto:contato@gambitech.com.br"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black text-[16px] px-8 py-4 rounded-xl transition-colors shadow-xl shadow-violet-600/30"
          >
            Entrar em contato <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <LogoMarkSmall size={26} />
            <span className="font-black text-[15px] text-white">Gambit Tech</span>
          </div>
          <p className="text-[12px] text-gray-600 text-center">
            © {new Date().getFullYear()} Gambit Tech · LUIZ E F SA TECNOLOGIA · CNPJ 40.311.947/0001-38
          </p>
          <a href="mailto:contato@gambitech.com.br" className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors">
            contato@gambitech.com.br
          </a>
        </div>
      </footer>
    </div>
  );
}
