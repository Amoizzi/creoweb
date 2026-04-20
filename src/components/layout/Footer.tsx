"use client";
import { Mail, Send } from "lucide-react";

const socials = [
  { name: "TikTok", url: "https://www.tiktok.com/@content.creator.ua", color: "hover:text-pink-400" },
  { name: "YouTube", url: "https://www.youtube.com/@content.creator4you", color: "hover:text-red-400" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61567176612479", color: "hover:text-blue-400" },
  { name: "Instagram", url: "https://www.instagram.com/contentcreator4you.ua/", color: "hover:text-fuchsia-400" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f] pt-16 pb-8 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <span className="font-display font-bold text-3xl text-white">
              Cre<span className="text-purple-500">o</span>Web
            </span>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-xs">
              Повний цикл створення контенту для бізнесу. Від ідеї до результату.
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-medium">Соцмережі</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 text-sm font-medium transition-colors duration-200 ${s.color}`}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-medium">Контакти</p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@creoweb-smm.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={14} className="text-purple-400" />
                hello@creoweb-smm.com
              </a>
              <a
                href="https://t.me/WhiteRabbit_m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Send size={14} className="text-blue-400" />
                @WhiteRabbit_m
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row - one line */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">© 2026 CreoWeb. Всі права захищені.</p>
          <p className="text-gray-600 text-xs">Розроблено з ❤️ командою CreoWeb</p>
        </div>

      </div>
    </footer>
  );
}
