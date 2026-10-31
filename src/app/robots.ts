function getSiteUrl(): string {
  let raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "https://centralmotors.com.pk";
  if (!raw.startsWith("http://") && !raw.startsWith("https://")) {
    raw = `https://${raw}`;
  }
  return raw.replace(/\/$/, "");
}
import type { MetadataRoute } from "next";

const base = getSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/manage-booking"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
