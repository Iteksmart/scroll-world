import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "iTechSmart — Your infrastructure fixes itself. You get the proof.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #05070d 0%, #0a101b 60%, #0e1a24 100%)",
          color: "#f6f9fc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="44" height="44" viewBox="0 0 64 64">
            <path
              d="M32.00,4.00 L25.69,16.76 L12.20,12.20 L16.76,25.69 L4.00,32.00 L16.76,38.31 L12.20,51.80 L25.69,47.24 L32.00,60.00 L38.31,47.24 L51.80,51.80 L47.24,38.31 L60.00,32.00 L47.24,25.69 L51.80,12.20 L38.31,16.76 Z"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="7"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 700 }}>iTechSmart</div>
          <div style={{ fontSize: 22, color: "#8494ad", marginLeft: 8 }}>UAIO</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Your infrastructure fixes itself.
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              background: "linear-gradient(90deg, #4cc3f7, #3ce8a4)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            You get the proof.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, color: "#8494ad" }}>
            Detect · Decide · Do · Prove — sealed to Bitcoin
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#3ce8a4",
              border: "2px solid rgba(60,232,164,0.4)",
              borderRadius: 999,
              padding: "10px 24px",
            }}
          >
            itechsmart.dev
          </div>
        </div>
      </div>
    ),
    size,
  );
}
