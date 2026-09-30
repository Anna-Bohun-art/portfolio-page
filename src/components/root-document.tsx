import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { content, localePaths, type Locale } from "@/data/content";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anna-bohun.vercel.app";

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = content[locale];
  const path = localePaths[locale];

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: meta.title,
      template: "%s | Anna Kladova Bohun",
    },
    description: meta.description,
    keywords: [
      "Anna Kladova Bohun",
      meta.jobTitle,
      "React Developer",
      "TypeScript",
      "Life Science Software",
      "Laboratory Systems",
      "Biochemistry PhD",
      "Python",
      "Applied AI",
      "Ulm Germany",
    ],
    authors: [{ name: "Anna Kladova Bohun" }],
    creator: "Anna Kladova Bohun",
    alternates: {
      canonical: path,
      languages: { en: localePaths.en, de: localePaths.de, "x-default": localePaths.en },
    },
    openGraph: {
      type: "website",
      url: path,
      locale: locale === "de" ? "de_DE" : "en_US",
      title: meta.title,
      description: meta.shareDescription,
      siteName: "Anna Kladova Bohun",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.shareDescription,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#06080c" },
  ],
};

const themeScript = `
  try {
    const stored = localStorage.getItem('anna-theme');
    const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch (_) {}
`;

/** Shared <html> shell for the per-language root layouts in app/(en) and app/(de). */
export function RootDocument({ lang, children }: Readonly<{ lang: Locale; children: React.ReactNode }>) {
  return (
    <html lang={lang} suppressHydrationWarning>
      {/* App Router root layout: a plain <head> is correct here; the rule only fires because this file lives outside app/. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
