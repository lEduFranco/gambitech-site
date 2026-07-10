import type { FC } from "react";
import { Brain, Shirt, Sparkles, Leaf } from "lucide-react";

export function AIVisual() {
  const agents = [
    { label: "Code Review", status: "PR #42 revisado" },
    { label: "CI Investigator", status: "Root cause encontrada" },
    { label: "SQL Analyst", status: "SELECT ... → resposta" },
    { label: "Docs RAG", status: "3 fontes citadas" },
    { label: "Multi-Agent", status: "Relatório aprovado" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-6">
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
        <circle cx="200" cy="200" r="100" stroke="#7c3aed" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
      </svg>

      <div className="relative z-10 w-full max-w-[340px] rounded-2xl border border-violet-500/25 bg-gray-950/90 shadow-2xl shadow-violet-900/30 overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-violet-500/20 bg-gradient-to-r from-violet-900/80 to-indigo-900/80">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
            <div className="w-2 h-2 rounded-full bg-green-400/80" />
          </div>
          <span className="flex-1 text-center text-[10px] font-mono text-violet-200/80">
            agent-loop — ReAct
          </span>
        </div>

        <div className="p-3 space-y-2 font-mono text-[10px]">
          <div className="text-violet-400/90">$ reason → act → observe</div>
          {agents.map((agent) => (
            <div
              key={agent.label}
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 border border-violet-500/15 bg-violet-500/5"
            >
              <Brain className="w-3 h-3 text-violet-400 shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="text-violet-200 font-semibold truncate">{agent.label}</div>
                <div className="text-gray-500 truncate">{agent.status}</div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            </div>
          ))}
        </div>

        <div className="px-3 py-2 border-t border-violet-500/15 bg-violet-500/5">
          <div className="text-[9px] text-gray-500 text-center">6 agentes · Python · Anthropic API</div>
        </div>
      </div>
    </div>
  );
}

export function CestoVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
        {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="#3b82f6" strokeWidth="0.5" />
        ))}
        {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#3b82f6" strokeWidth="0.5" />
        ))}
      </svg>
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

export function ImobVisual() {
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

export function TomaisvipVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
        {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="#f59e0b" strokeWidth="0.5" />
        ))}
        {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#f59e0b" strokeWidth="0.5" />
        ))}
      </svg>
      <div className="relative z-10 flex gap-3 items-end">
        <div className="w-44 h-72 rounded-2xl bg-gray-900 border border-amber-500/30 shadow-2xl shadow-amber-900/40 overflow-hidden">
          <div className="bg-amber-600 px-3 py-2">
            <div className="text-white text-[10px] font-bold">Dashboard</div>
          </div>
          <div className="p-2 space-y-1.5">
            {["Agendamentos hoje: 12", "Diaristas ativas: 28", "Clientes: 340+"].map((t, i) => (
              <div key={i} className="bg-amber-500/10 border border-amber-500/20 rounded p-1.5">
                <div className="text-amber-300 text-[9px] font-medium">{t}</div>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-1 mt-2">
              {["09h Maria", "14h Ana", "10h Carla", "16h Julia"].map((t, i) => (
                <div key={i} className="bg-gray-800 rounded p-1 text-[8px] text-gray-400">{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-20 h-36 rounded-2xl bg-gray-900 border border-amber-500/30 shadow-xl overflow-hidden flex flex-col">
          <div className="bg-amber-600 px-2 py-1.5 flex justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <div className="flex-1 p-1.5 space-y-1">
            <div className="bg-amber-500/10 rounded p-1 text-[7px] text-amber-300">Agendar</div>
            <div className="bg-gray-800 rounded p-1 text-[7px] text-gray-500">Integral</div>
            <div className="bg-amber-600 rounded p-1 text-center text-[7px] text-white font-bold">Confirmar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NovaEraVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="100" stroke="#0d9488" strokeWidth="0.5" fill="none" strokeDasharray="3 5" />
        <circle cx="200" cy="200" r="150" stroke="#059669" strokeWidth="0.5" fill="none" strokeDasharray="2 8" />
      </svg>
      <div className="relative z-10 w-64 h-72 rounded-2xl bg-gray-900 border border-teal-500/30 shadow-2xl shadow-teal-900/40 overflow-hidden">
        <div className="bg-teal-800 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-teal-900/50 rounded px-2 py-0.5 text-[9px] text-teal-300">fraternidadenovaera.com.br</div>
        </div>
        <div className="p-3 space-y-2">
          <div className="flex gap-1 flex-wrap">
            {["Medicinas", "Terapias", "Eventos", "Blog"].map((t) => (
              <span key={t} className="text-[7px] px-1.5 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">{t}</span>
            ))}
          </div>
          <div className="bg-teal-500/10 rounded-lg p-2">
            <div className="text-teal-300 text-[10px] font-bold mb-1">Experiências xamânicas</div>
            <div className="text-[8px] text-gray-500 leading-relaxed">Ayahuasca · Cerimônias · Terapias holísticas em Brasília</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-teal-700/50 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-teal-300" />
            </div>
            <div className="text-[8px] text-gray-400">Dirigentes e facilitadores</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const projectVisuals: Record<string, FC> = {
  ai: AIVisual,
  cesto: CestoVisual,
  imob: ImobVisual,
  tomaisvip: TomaisvipVisual,
  novaera: NovaEraVisual,
};
