// Peão de xadrez SVG — silhueta clássica reconhecível
export function PawnSVG({ size = 32, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* cabeça */}
      <circle cx="12" cy="5.5" r="3.5" fill={color} />
      {/* pescoço curto */}
      <rect x="10.5" y="8.5" width="3" height="1.5" rx="0.75" fill={color} />
      {/* corpo trapezoidal */}
      <path d="M8.5 10 C8 12.5 7.5 14 7 15.5 H17 C16.5 14 16 12.5 15.5 10 Z" fill={color} />
      {/* base */}
      <rect x="5.5" y="15.5" width="13" height="3" rx="1.5" fill={color} />
    </svg>
  );
}

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/25"
    >
      <PawnSVG size={Math.round(size * 0.65)} />
    </div>
  );
}

export function LogoMarkSmall({ size = 28 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0"
    >
      <PawnSVG size={Math.round(size * 0.65)} />
    </div>
  );
}

// Logo completa: ícone + texto
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="font-black tracking-tight text-gray-900" style={{ fontSize: size * 0.47 }}>
        Gambit Tech
      </span>
    </div>
  );
}

export function LogoWhite({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        style={{ width: size, height: size }}
        className="rounded-xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0"
      >
        <PawnSVG size={Math.round(size * 0.65)} />
      </div>
      <span className="font-black tracking-tight text-white" style={{ fontSize: size * 0.47 }}>
        Gambit Tech
      </span>
    </div>
  );
}
