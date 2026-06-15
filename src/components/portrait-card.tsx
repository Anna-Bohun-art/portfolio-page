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
          fill
          sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 980px) 340px, 470px"
          priority
        />
      </div>
      <div className="portrait-details">
        <strong>Anna Kladova Bohun</strong>
        <span>Software Developer · React / TypeScript · Life Science</span>
      </div>
    </div>
  );
}
