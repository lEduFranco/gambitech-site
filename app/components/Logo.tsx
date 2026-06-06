import Image from "next/image";

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/25 overflow-hidden"
    >
      <Image
        src="/knight.png"
        alt="Gambit Tech"
        width={size}
        height={size}
        className="object-contain p-[10%]"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  );
}

export function LogoMarkSmall({ size = 28 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0 overflow-hidden"
    >
      <Image
        src="/knight.png"
        alt="Gambit Tech"
        width={size}
        height={size}
        className="object-contain p-[10%]"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  );
}

export function PawnSVG({ size = 32, color = "white" }: { size?: number; color?: string }) {
  return (
    <Image
      src="/knight.png"
      alt="Gambit Tech"
      width={size}
      height={size}
      className="object-contain"
      style={{ filter: color === "white" ? "brightness(0) invert(1)" : "none" }}
    />
  );
}
