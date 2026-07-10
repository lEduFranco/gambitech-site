import { ImageResponse } from "next/og";
import { FaviconImage, loadKnightLogoBase64 } from "./lib/favicon-image";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const logoSrc = await loadKnightLogoBase64();
  return new ImageResponse(<FaviconImage logoSrc={logoSrc} size={32} />, size);
}
