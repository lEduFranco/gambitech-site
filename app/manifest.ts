import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "./data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Software House`,
    short_name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#7c3aed",
    lang: "pt-BR",
    orientation: "portrait-primary",
    scope: "/",
    id: SITE_URL,
    icons: [
      {
        src: "/knight.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
