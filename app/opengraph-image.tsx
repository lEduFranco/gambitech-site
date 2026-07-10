import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Gambit Tech — Software House e Fábrica de Software no Brasil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadLogoBase64() {
  const logoData = await readFile(join(process.cwd(), "public/knight.png"));
  return `data:image/png;base64,${logoData.toString("base64")}`;
}

export function OgImage({ logoSrc }: { logoSrc: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a1033 45%, #0f172a 100%)",
        position: "relative",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -60,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          marginBottom: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "linear-gradient(145deg, #faf5ff 0%, #ede9fe 100%)",
            boxShadow: "0 8px 32px rgba(124,58,237,0.4)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={88} height={100} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: -1.5,
              lineHeight: 1.1,
            }}
          >
            Gambit Tech
          </span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#a78bfa",
              marginTop: 6,
            }}
          >
            gambitech.com.br
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 900,
          padding: "0 48px",
        }}
      >
        <span
          style={{
            fontSize: 42,
            fontWeight: 800,
            color: "#f5f3ff",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          Software House e Fábrica de Software
        </span>
        <span
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#9ca3af",
            lineHeight: 1.4,
          }}
        >
          Desenvolvimento de software sob medida · Brasília, Brasil
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          gap: 12,
        }}
      >
        {["Next.js", "TypeScript", "IA", "SaaS"].map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#c4b5fd",
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.35)",
              borderRadius: 999,
              padding: "8px 18px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export async function generateOgImage() {
  const logoSrc = await loadLogoBase64();
  return new ImageResponse(<OgImage logoSrc={logoSrc} />, size);
}

export default generateOgImage;
