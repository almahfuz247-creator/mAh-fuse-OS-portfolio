import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e0a",
          color: "#a6f24a",
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        <span style={{ display: "flex" }}>m</span>
        <span style={{ display: "flex", marginLeft: -3, marginRight: -3 }}>⚡</span>
        <span style={{ display: "flex" }}>f</span>
      </div>
    ),
    { ...size }
  );
}