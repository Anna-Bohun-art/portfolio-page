import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anna-bohun.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anna Kladova Bohun | Software Developer for Life Science",
    template: "%s | Anna Kladova Bohun",
  },
  description:
    "React and TypeScript Software Developer with a PhD in Biochemistry, targeting life-science and laboratory-system teams.",
  keywords: [
    "Anna Kladova Bohun",
    "Software Developer",
    "React Developer",
    "TypeScript",
    "Life Science Software",
    "Laboratory Systems",
    "Biochemistry PhD",
    "Python Flask",
    "AI IoT",
    "Ulm Germany",
  ],
  authors: [{ name: "Anna Kladova Bohun" }],
  creator: "Anna Kladova Bohun",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Anna Kladova Bohun | Software Developer for Life Science",
    description: "React and TypeScript development backed by a PhD in Biochemistry and a focus on life-science systems.",
    siteName: "Anna Kladova Bohun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna Kladova Bohun | Software Developer for Life Science",
    description: "React and TypeScript development backed by a PhD in Biochemistry and a focus on life-science systems.",
  },
};

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
