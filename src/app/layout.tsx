import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { settings } from "@/data";

// Matches the approved design prototype: Archivo (display) + Inter (body).
const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});



function getSiteUrl(): string {
  let raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "https://centralmotors.com.pk";
  if (!raw.startsWith("http://") && !raw.startsWith("https://")) {
    raw = `https://${raw}`;
  }
  return raw.replace(/\/$/, "");
}

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${settings.siteName} | Cars, Prices, Rawalpindi & Islamabad`,
    template: `%s | ${settings.siteName}`,
  },
  description:
    "Central Motors, a premier 7S automotive dealership serving Rawalpindi and Islamabad. Explore Fronx, Swift, Cultus, Alto and Every at official prices, book test drives, workshop service, genuine parts and warranty.",
  keywords: [
    "Central Motors", "dealership Rawalpindi", "cars Rawalpindi", "showroom Islamabad",
    "cars Pakistan", "Pakistan car prices", "Fronx", "Fronx price in Pakistan",
    "Swift price", "Alto price", "Cultus price", "Every van",
    "car dealer Rawalpindi", "dealer Islamabad", "car service Rawalpindi",
    "car service center Islamabad", "genuine auto parts", "new car models Pakistan",
  ],
  applicationName: settings.siteName,
  category: "automotive",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: settings.siteName,
    locale: "en_PK",
    url: siteUrl,
    title: `${settings.siteName} | Cars, Rawalpindi & Islamabad`,
    description: "Official vehicle prices in Pakistan: Fronx, Swift, Cultus, Alto and Every. Test drives, service booking and genuine parts, serving Rawalpindi and Islamabad.",
    images: [{ url: "/brand/central-motors-wordmark.png", width: 1912, height: 556, alt: settings.siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Central Motors Rawalpindi & Islamabad | ${settings.siteName}`,
    description: "Official vehicle prices in Pakistan: Fronx, Swift, Cultus, Alto and Every. Test drives, service booking and genuine parts, serving Rawalpindi and Islamabad.",
    images: [{ url: "/brand/central-motors-wordmark.png", width: 1912, height: 556, alt: settings.siteName }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
};

/* Root layout: only <html>/<body> + fonts. Public chrome lives in (site)/layout;
 * the admin panel has its own layout under /admin. */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}  scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
