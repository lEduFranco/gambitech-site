// LogoMark: SVG puro com fundo gradiente + peão branco integrado
// O peão ocupa ~80% do espaço — bem maior e mais legível em qualquer tamanho
export function LogoMark({ size = 36, radius = 10 }: { size?: number; radius?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-lg"
    >
      <defs>
        <linearGradient id="bg-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
      </defs>

      {/* fundo */}
      <rect width="100" height="100" rx={radius} fill="url(#bg-grad)" />

      {/* ── PEÃO ── */}
      {/* cabeça pequena */}
      <circle cx="50" cy="18" r="11" fill="white" />
      {/* haste fina — colo bem estreito tipo pilar */}
      <rect x="47" y="28" width="6" height="10" fill="white" />
      {/* corpo: começa já bem largo no topo — semicírculo achatado */}
      <path
        d="M18 38 Q18 38 50 36 Q82 38 82 38 Q84 50 83 60 Q82 68 80 72 L20 72 Q18 68 17 60 Q16 50 18 38 Z"
        fill="white"
      />
      {/* base fina */}
      <rect x="20" y="72" width="60" height="9" rx="4" fill="white" />
      {/* pedestal largo */}
      <rect x="12" y="81" width="76" height="9" rx="4" fill="white" />
    </svg>
  );
}

export function LogoMarkSmall({ size = 28 }: { size?: number }) {
  return <LogoMark size={size} radius={8} />;
}

export function PawnSVG({ size = 32, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="20" r="12" fill={color} />
      <rect x="45" y="31" width="10" height="9" rx="3" fill={color} />
      <path d="M28 40 Q22 52 21 62 Q20 68 22 72 L78 72 Q80 68 79 62 Q78 52 72 40 Z" fill={color} />
      <rect x="24" y="72" width="52" height="10" rx="5" fill={color} />
      <rect x="16" y="82" width="68" height="10" rx="5" fill={color} />
    </svg>
  );
}
