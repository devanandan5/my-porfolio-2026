import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "#about", "#experience", "#projects", "#skills", "#contact"];

  return routes.map((path) => ({
    url: `${siteUrl}/${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
