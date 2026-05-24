"use client";

import { useState, useEffect } from "react";
import KolamLogo from "@/components/KolamLogo";

export default function PageLoader() {
  const [show, setShow] = useState(true);
  const [render, setRender] = useState(true);

  useEffect(() => {
    // Wait 2.2s before fading out
    const fadeTimer = setTimeout(() => {
      setShow(false);
    }, 2200);

    // Remove from DOM after fade out finishes (0.7s)
    const removeTimer = setTimeout(() => {
      setRender(false);
    }, 2900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!render) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "#FAF9F6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transition: "opacity 0.7s ease-in-out",
      }}
    >
      {/* Subtle dot-grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(121,87,65,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
          position: "relative",
          transform: show ? "scale(1)" : "scale(0.95)",
          opacity: show ? 1 : 0,
          transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease",
        }}
      >
        <div style={{ color: "#16441c" }}>
          <KolamLogo size={144} strokeWidth={5} dotRadius={4.5} />
        </div>

        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "var(--font-kurale), serif",
              fontSize: "clamp(22px, 4vw, 30px)",
              fontWeight: 600,
              color: "#16441c",
              letterSpacing: "0.04em",
              margin: "0 0 6px",
            }}
          >
            Cafe Bengaluru
          </h1>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#795741",
              margin: 0,
            }}
          >
            Sensory Heritage
          </p>
        </div>
      </div>
    </div>
  );
}
