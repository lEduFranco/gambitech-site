import Image from "next/image";

const LOGO_SRC = "/knight.png";

/** Proporção original do PNG (310×355) */
function logoDimensions(height: number) {
  return { width: Math.round(height * (310 / 355)), height };
}

type LogoFrameProps = {
  size: number;
  children: React.ReactNode;
  glow?: boolean;
};

function LogoFrame({ size, children, glow = false }: LogoFrameProps) {
  const pad = Math.max(3, Math.round(size * 0.1));

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden ${
        glow ? "shadow-[0_0_24px_rgba(139,92,246,0.3)]" : ""
      }`}
      style={{
        width: size + pad * 2,
        height: size + pad * 2,
        padding: pad,
        background: "linear-gradient(145deg, #faf5ff 0%, #f5f3ff 45%, #ede9fe 100%)",
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.25), 0 0 0 1px rgba(139,92,246,0.18), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      {children}
    </div>
  );
}

export function LogoMark({ size = 36 }: { size?: number }) {
  const { width, height } = logoDimensions(size);

  return (
    <LogoFrame size={size}>
      <Image
        src={LOGO_SRC}
        alt="Gambit Tech"
        width={width}
        height={height}
        unoptimized
        className="object-contain"
        priority
      />
    </LogoFrame>
  );
}

export function LogoMarkSmall({ size = 28 }: { size?: number }) {
  const { width, height } = logoDimensions(size);

  return (
    <LogoFrame size={size}>
      <Image
        src={LOGO_SRC}
        alt="Gambit Tech"
        width={width}
        height={height}
        unoptimized
        className="object-contain"
      />
    </LogoFrame>
  );
}

export function PawnSVG({ size = 40 }: { size?: number }) {
  const { width, height } = logoDimensions(size);

  return (
    <LogoFrame size={size} glow>
      <Image
        src={LOGO_SRC}
        alt="Gambit Tech"
        width={width}
        height={height}
        unoptimized
        className="object-contain"
      />
    </LogoFrame>
  );
}
