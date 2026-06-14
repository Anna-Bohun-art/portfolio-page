import Image from "next/image";

export function PortraitCard({ portraitUrl }: { portraitUrl?: string | null }) {
  if (!portraitUrl) {
    return null;
  }

  return (
    <div className="portrait-card">
      <div className="portrait-image-frame">
        <Image
          className="portrait-image"
          src={portraitUrl}
          alt="Anna Kladova Bohun"
          width={200}
          height={200}
          sizes="200px"
          priority
        />
      </div>
      <div className="portrait-details">
        <strong>Anna Kladova Bohun</strong>
        <span>Software Developer · React / TypeScript</span>
        <span>Ulm region, Germany</span>
      </div>
    </div>
  );
}
