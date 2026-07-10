export async function loadKnightLogoBase64() {
  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const logoData = await readFile(join(process.cwd(), "public/knight.png"));
  return `data:image/png;base64,${logoData.toString("base64")}`;
}

export function FaviconImage({
  logoSrc,
  size,
}: {
  logoSrc: string;
  size: number;
}) {
  const pad = Math.max(3, Math.round(size * 0.12));
  const inner = size - pad * 2;
  const logoHeight = Math.round(inner * 0.92);
  const logoWidth = Math.round(logoHeight * (310 / 355));

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #faf5ff 0%, #f5f3ff 45%, #ede9fe 100%)",
        borderRadius: Math.round(size * 0.24),
        boxShadow: "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} width={logoWidth} height={logoHeight} alt="" />
    </div>
  );
}
