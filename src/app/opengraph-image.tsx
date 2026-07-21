import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "mAh⚡fuse OS — Abdullah Al Mahfuz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background:
            "radial-gradient(circle at 20% 0%, rgba(166,242,74,0.18), transparent 60%), #0a0e0a",
          color: "#e8f1e5",
          fontFamily: "monospace",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 7,
              background: "#a6f24a",
              boxShadow: "0 0 16px rgba(166,242,74,0.8)",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#8a948a",
            }}
          >
            mahfuse@os · ~/boot
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a6f24a",
            }}
          >
            ▌ [OK] core.online — booting mAh⚡fuse OS
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#e8f1e5",
            }}
          >
            <span style={{ display: "flex" }}>
              UX that holds charge
              <br />
              under pressure.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#8a948a",
              marginTop: 12,
            }}
          >
            Abdullah Al Mahfuz · UX Designer @ UIU · Dhaka
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#8a948a",
            borderTop: "1px solid #1f2a1f",
            paddingTop: 18,
          }}
        >
          <span style={{ display: "flex" }}>boot_progress: 100%</span>
          <span style={{ display: "flex" }}>charge: 87% · 3.7V · fuse intact</span>
        </div>
      </div>
    ),
    { ...size }
  );
}