import { ArrowRight, CheckCircle, Code2, Layers, Zap, Building2, Shirt, ChevronRight } from "lucide-react";

const products = [
  {
    icon: <Shirt className="h-7 w-7" />,
    name: "CestoAgenda",
    tagline: "Gestão inteligente para lavanderias residenciais",
    description:
      "Plataforma completa para lavanderias oferecerem coleta e entrega agendada. Clientes solicitam pelo app, o operador confirma e gerencia tudo pelo painel — com notificações automáticas, controle de cestos e cálculo de frete.",
    features: ["Agendamento online", "Painel do operador", "Push notifications", "Cálculo de frete por km", "Planos e assinaturas"],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    badge: "Disponível",
    badgeColor: "bg-blue-100 text-blue-700",
    url: "https://cesto-agenda.vercel.app",
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    name: "Sua Imobiliária",
    tagline: "Plataforma white-label para imobiliárias",
    description:
      "Solução completa para imobiliárias digitalizarem sua operação. Site white-label personalizado, backoffice de gestão de imóveis, clientes e corretores — tudo integrado e pronto para usar.",
    features: ["Site white-label", "Backoffice completo", "Gestão de imóveis", "CRM de clientes", "Multi-imobiliária"],
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    badge: "Em breve",
    badgeColor: "bg-emerald-100 text-emerald-700",
    url: null,
  },
];

const values = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Entrega rápida",
    description: "MVPs funcionais em semanas, não meses. Foco no que realmente importa para o negócio.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Tecnologia moderna",
    description: "Next.js, TypeScript, PostgreSQL. Stack sólida, escalável e fácil de manter.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Software sob medida",
    description: "Cada produto é construído para o problema específico de cada mercado.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-black text-[13px]">G</span>
            </div>
            <span className="font-black text-[17px] tracking-tight text-gray-900">GambiTech</span>
          </div>
          <a
            href="mailto:contato@gambitech.com.br"
            className="text-[14px] font-semibold text-violet-600 hover:text-violet-700 transition-colors"
          >
            Contato
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-[13px] font-semibold text-violet-700">Soluções de software para negócios reais</span>
          </div>

          <h1 className="text-[52px] md:text-[68px] font-black leading-[1.05] tracking-tight text-gray-900 mb-6">
            Software que{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              resolve problemas
            </span>
          </h1>

          <p className="text-[19px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Construímos plataformas digitais focadas em mercados específicos. Cada produto nasce de um problema real e é desenvolvido para ser simples, rápido e eficiente.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Ver produtos <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:contato@gambitech.com.br"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0 text-violet-600">
                {v.icon}
              </div>
              <div>
                <p className="font-bold text-[15px] text-gray-900 mb-1">{v.title}</p>
                <p className="text-[14px] text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[38px] md:text-[46px] font-black tracking-tight text-gray-900 mb-4">
              Nossos produtos
            </h2>
            <p className="text-[17px] text-gray-500 max-w-xl mx-auto">
              Plataformas verticais construídas para mercados específicos, com foco em usabilidade e resultados.
            </p>
          </div>

          <div className="space-y-8">
            {products.map((p, i) => (
              <div key={p.name} className={`rounded-2xl border ${p.border} ${p.bg} p-8 md:p-10`}>
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shrink-0`}>
                        {p.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[22px] font-black text-gray-900">{p.name}</h3>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${p.badgeColor}`}>
                            {p.badge}
                          </span>
                        </div>
                        <p className="text-[13px] text-gray-500 font-medium">{p.tagline}</p>
                      </div>
                    </div>

                    <p className="text-[15px] text-gray-600 leading-relaxed mb-6">{p.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1">
                          <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />
                          <span className="text-[12px] font-medium text-gray-700">{f}</span>
                        </div>
                      ))}
                    </div>

                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-[14px] px-5 py-2.5 rounded-xl transition-colors"
                      >
                        Acessar plataforma <ChevronRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-500 font-bold text-[14px] px-5 py-2.5 rounded-xl cursor-not-allowed">
                        Em desenvolvimento
                      </span>
                    )}
                  </div>

                  <div className="hidden md:flex items-center justify-center w-20 shrink-0">
                    <span className={`text-[80px] font-black bg-gradient-to-br ${p.color} bg-clip-text text-transparent opacity-20 leading-none`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[38px] md:text-[46px] font-black text-white leading-tight mb-4">
            Tem um problema para resolver?
          </h2>
          <p className="text-[17px] text-violet-200 mb-10 leading-relaxed">
            Construímos software sob medida para negócios que precisam de soluções digitais eficientes. Fale com a nossa equipe.
          </p>
          <a
            href="mailto:contato@gambitech.com.br"
            className="inline-flex items-center gap-2 bg-white text-violet-700 font-black text-[16px] px-8 py-4 rounded-xl hover:bg-violet-50 transition-colors shadow-xl shadow-violet-900/20"
          >
            Entrar em contato <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-black text-[12px]">G</span>
            </div>
            <span className="font-black text-[15px] text-gray-900">GambiTech</span>
          </div>
          <p className="text-[13px] text-gray-400">
            © {new Date().getFullYear()} GambiTech · LUIZ E F SA TECNOLOGIA · CNPJ 40.311.947/0001-38
          </p>
          <a href="mailto:contato@gambitech.com.br" className="text-[13px] text-gray-500 hover:text-gray-700 transition-colors">
            contato@gambitech.com.br
          </a>
        </div>
      </footer>
    </div>
  );
}
