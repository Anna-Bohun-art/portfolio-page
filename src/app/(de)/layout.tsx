import { buildMetadata, RootDocument, viewport as sharedViewport } from "@/components/root-document";

export const metadata = buildMetadata("de");
export const viewport = sharedViewport;

export default function GermanLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="de">{children}</RootDocument>;
}
