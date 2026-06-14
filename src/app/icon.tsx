import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        color: "#071014",
        background: "#76e8f3",
        fontSize: 25,
        fontWeight: 800,
        letterSpacing: "-0.08em",
      }}
    >
      AKB
    </div>,
    size,
  );
}
