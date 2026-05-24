"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KolamLogo from "@/components/KolamLogo";

export default function PageLoader() {
  // true on both server and client — covers the page from first paint, no flash
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "#FAF9F6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
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
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ color: "#16441c" }}
            >
              <KolamLogo size={144} strokeWidth={5} dotRadius={4.5} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              style={{ textAlign: "center" }}
            >
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
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
