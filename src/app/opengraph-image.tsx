import { ImageResponse } from "next/og";

export const alt = "Anna Kladova Bohun - Software Developer for Life Science";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 78px",
          color: "#eefcff",
          background: "radial-gradient(circle at 78% 18%, #163c49 0, #081318 34%, #05070a 72%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, letterSpacing: "0.12em" }}>
          <span>ANNA KLADOVA BOHUN</span>
          <span style={{ color: "#76e8f3" }}>AKB.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.055em", lineHeight: 1.05 }}>
            Software for
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.055em", lineHeight: 1.05, color: "#76e8f3" }}>
            life science.
          </div>
          <div style={{ marginTop: 34, fontSize: 27, color: "#9fb1b7" }}>
            Software Developer (React / TypeScript) · PhD Biochemistry
          </div>
        </div>
        <div style={{ display: "flex", gap: 20, color: "#9fb1b7", fontSize: 21 }}>
          <span>Life Science</span><span>·</span><span>Laboratory Systems</span><span>·</span><span>React</span><span>·</span><span>TypeScript</span>
        </div>
      </div>
    ),
    size,
  );
}
