"use client";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md";
}

export default function Button({ children, variant = "primary", href, onClick, className = "", size = "md" }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer";
  const sizes = size === "sm" ? "px-5 py-2 text-sm" : "px-8 py-3 text-base";
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105",
    outline: "border border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400",
  };
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
