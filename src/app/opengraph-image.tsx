import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PureRend — Plastering & Rendering Specialist, Bude Cornwall";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #18181b 0%, #27272a 60%, #1e3a5f 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background texture dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Blue accent bar top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #2563eb, #3b82f6)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "60px 72px",
            gap: "16px",
          }}
        >
          {/* Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                background: "#2563eb",
                color: "white",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: "4px",
              }}
            >
              Bude, Cornwall
            </div>
            <div
              style={{
                color: "#71717a",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              • Fully Insured • NVQ Level 2
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: "68px",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Plastering &amp;{" "}
            <span style={{ color: "#3b82f6" }}>Rendering</span>
            <br />
            done properly.
          </div>

          {/* Sub */}
          <div
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              fontWeight: 400,
              marginTop: "8px",
              lineHeight: 1.4,
            }}
          >
            Silicone render · Monocouche · EWI · Internal plastering
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.01em",
              }}
            >
              PureRend
            </div>
            <div
              style={{
                fontSize: "18px",
                color: "#3b82f6",
                fontWeight: 600,
              }}
            >
              purerend.co.uk
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
