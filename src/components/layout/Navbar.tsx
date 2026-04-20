"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/5 shadow-lg shadow-purple-500/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-display font-bold text-2xl text-white cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0"
        >
          Cre<span className="text-purple-500">o</span>Web
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1">
          {[
            { label: "Послуги", id: "services" },
            { label: "Портфоліо", id: "portfolio" },
            { label: "Кейси", id: "portfolio" },
            { label: "Контакти", id: "contact" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-gray-400 hover:text-white hover:bg-white/8 px-4 py-2 rounded-full transition-all duration-200 bg-transparent border-none cursor-pointer"
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
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 bg-transparent border-none">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden backdrop-blur-md bg-[#0a0a0f]/90 border-t border-white/5 px-6 py-4 flex flex-col gap-0">
          {[
            { label: "Послуги", id: "services" },
            { label: "Портфоліо", id: "portfolio" },
            { label: "Кейси", id: "portfolio" },
            { label: "Контакти", id: "contact" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                scrollTo(item.id);
                setOpen(false);
              }}
              className="text-gray-400 hover:text-white text-left text-base px-2 py-3 transition-colors bg-transparent border-none border-b border-white/5"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollTo("contact");
              setOpen(false);
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium px-5 py-3 rounded-full mt-4"
          >
            Отримати пропозицію
          </button>
        </div>
      )}
    </nav>
  );
}
