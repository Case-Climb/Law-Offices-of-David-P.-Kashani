import { ImageResponse } from "next/og";

export const alt = "Law Offices of David P. Kashani, APLC. California personal injury lawyers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share image, generated at build time. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #1a1a1e 0%, #0e0e10 60%, #2a0d11 100%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 22, height: 64, background: "#c8202f" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 700 }}>Kashani Law</div>
            <div style={{ fontSize: 22, color: "#bcbcc4" }}>Law Offices of David P. Kashani, APLC</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.08, fontWeight: 700, maxWidth: 900 }}>
            California Personal Injury Lawyer
          </div>
          <div style={{ width: 120, height: 8, background: "#c8202f", marginTop: 32 }} />
          <div style={{ fontSize: 30, color: "#d9d9de", marginTop: 32 }}>
            Free consultation. No fees unless we win. (888) 932-2626
          </div>
        </div>
      </div>
    ),
    size,
  );
}
