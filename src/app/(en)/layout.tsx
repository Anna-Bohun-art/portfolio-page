import { buildMetadata, RootDocument, viewport as sharedViewport } from "@/components/root-document";

export const metadata = buildMetadata("en");
export const viewport = sharedViewport;

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
