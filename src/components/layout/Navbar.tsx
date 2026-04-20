"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <span className="font-display font-bold text-2xl text-white cursor-pointer" onClick={() => scrollTo("hero")}>
          Cre<span className="text-purple-500">o</span>Web
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Послуги", id: "services" },
            { label: "Портфоліо", id: "portfolio" },
            { label: "Кейси", id: "portfolio" },
            { label: "Контакти", id: "contact" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
        >
          Отримати пропозицію
        </button>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f1a] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Послуги", id: "services" },
            { label: "Портфоліо", id: "portfolio" },
            { label: "Кейси", id: "portfolio" },
            { label: "Контакти", id: "contact" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => { scrollTo(item.id); setOpen(false); }}
              className="text-gray-400 hover:text-white text-left text-base transition-colors bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo("contact"); setOpen(false); }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium px-5 py-3 rounded-full mt-2"
          >
            Отримати пропозицію
          </button>
        </div>
      )}
    </nav>
  );
}
