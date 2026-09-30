import Image from "next/image";

export function PortraitCard({ portraitUrl, caption }: { portraitUrl?: string | null; caption: string }) {
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
          fill
          sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 980px) 340px, 470px"
          priority
        />
      </div>
      <div className="portrait-details">
        <strong>Anna Kladova Bohun</strong>
        <span>{caption}</span>
      </div>
    </div>
  );
}
