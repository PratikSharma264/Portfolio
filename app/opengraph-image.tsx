import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0d12",
          color: "#eceef2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            color: "#e8a33d",
            letterSpacing: 1,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#7fb286",
            }}
          />
          {profile.availability}
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 28, display: "flex" }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 32, color: "#5fb8d9", marginTop: 10, display: "flex" }}>
          {profile.roles.join("  ·  ")}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#8b92a3",
            marginTop: 36,
            maxWidth: 880,
            display: "flex",
          }}
        >
          {profile.summary.slice(0, 140)}…
        </div>
      </div>
    ),
    { ...size },
  );
}
