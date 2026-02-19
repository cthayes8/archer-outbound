import { ImageResponse } from "next/og";

export const alt = "Archer Outbound — AI-Powered Pipeline on Autopilot";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            background: "#c8ff3c",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Archer Outbound
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#888888",
            }}
          >
            AI-Powered Pipeline on Autopilot
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
