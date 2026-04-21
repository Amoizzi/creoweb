"use client";
import { useEffect, useRef, useState } from "react";

export default function GridBackground() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(
      window.innerWidth < 768 ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      (navigator as any).deviceMemory <= 2
    );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile || !mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX - 300 + "px";
        glowRef.current.style.top = e.clientY - 300 + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mounted]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
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
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      />
      {mounted && !isMobile && (
        <>
          <div
            ref={glowRef}
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
              transition: "left 0.3s ease, top 0.3s ease",
            }}
          />
          <div className="aurora-blob-1" />
          <div className="aurora-blob-2" />
          <div className="aurora-blob-3" />
        </>
      )}
    </div>
  );
}
