import { ImageResponse } from "next/og";
import { FaviconImage, loadKnightLogoBase64 } from "./lib/favicon-image";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const logoSrc = await loadKnightLogoBase64();
  return new ImageResponse(<FaviconImage logoSrc={logoSrc} size={180} />, size);
}
