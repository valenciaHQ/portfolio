import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alejandro Valencia — Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0f1a 0%, #1a1040 50%, #0a1628 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blob 1 */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: 100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
          }}
        />
        {/* Blob 2 */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: 80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56,189,248,0.35) 0%, transparent 70%)",
          }}
        />
        {/* Blob 3 */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 200,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(52,211,153,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            valenciahq.com
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: "linear-gradient(90deg, #a78bfa, #60a5fa, #34d399)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Alejandro Valencia
          </div>

          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.7)",
              fontWeight: 400,
            }}
          >
            Product Engineer
          </div>

          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 16,
            }}
          >
            {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 18,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
