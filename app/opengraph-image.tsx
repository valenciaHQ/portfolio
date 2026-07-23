import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #0b0f17 0%, #141b29 100%)",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: -0.3,
            color: "#2fe28a",
            marginBottom: 28,
          }}
        >
          software a medida · seo técnico · buenos aires
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
          }}
        >
          valencia
          <span style={{ color: "#2fe28a" }}>://</span>
          hq
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 27,
            color: "#8a93a6",
            marginTop: 32,
            maxWidth: 840,
          }}
        >
          Ingeniería, no artesanía improvisada. Landing pages, sitios
          institucionales y SEO técnico para negocios chicos.
        </div>
      </div>
    ),
    { ...size },
  );
}
