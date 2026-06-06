export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pawn-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="pawn-grad-sm" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>

      {/* fundo arredondado */}
      <rect width="32" height="32" rx="8" fill="url(#pawn-grad)" />

      {/* peão — desenhado em branco dentro do fundo violeta */}
      {/* cabeça */}
      <circle cx="16" cy="9" r="4" fill="white" />

      {/* pescoço */}
      <rect x="14" y="13" width="4" height="2" rx="1" fill="white" />

      {/* corpo */}
      <path
        d="M11.5 15 Q11 19 10 21 H22 Q21 19 20.5 15 Z"
        fill="white"
      />

      {/* base */}
      <rect x="9" y="21" width="14" height="3" rx="1.5" fill="white" />

      {/* detalhe tech — linha horizontal no corpo */}
      <line x1="13" y1="18" x2="19" y2="18" stroke="url(#pawn-grad)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function LogoIconSmall({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pawn-grad-s" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect width="28" height="28" rx="7" fill="url(#pawn-grad-s)" />
      <circle cx="14" cy="8" r="3.5" fill="white" />
      <rect x="12.5" y="11.5" width="3" height="1.5" rx="0.75" fill="white" />
      <path d="M10 13 Q9.5 16.5 8.5 18.5 H19.5 Q18.5 16.5 18 13 Z" fill="white" />
      <rect x="7.5" y="18.5" width="13" height="2.5" rx="1.25" fill="white" />
      <line x1="11.5" y1="15.8" x2="16.5" y2="15.8" stroke="url(#pawn-grad-s)" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}
