"use client";
import { useEffect, useRef } from "react";

export default function GridBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX - 300 + "px";
        glowRef.current.style.top = e.clientY - 300 + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Cursor glow that follows mouse */}
      <div
        ref={glowRef}
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-all duration-300"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Aurora blob 1 */}
      <div className="aurora-blob-1" />
      {/* Aurora blob 2 */}
      <div className="aurora-blob-2" />
      {/* Aurora blob 3 */}
      <div className="aurora-blob-3" />
    </div>
  );
}
