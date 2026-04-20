"use client";
import { Mail, Send } from "lucide-react";

const socials = [
  { name: "TikTok", url: "https://www.tiktok.com/@content.creator.ua", icon: "T", gradient: "from-pink-500 to-pink-400" },
  { name: "YouTube", url: "https://www.youtube.com/@content.creator4you", icon: "Y", gradient: "from-red-500 to-red-400" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61567176612479", icon: "F", gradient: "from-blue-500 to-blue-400" },
  { name: "Instagram", url: "https://www.instagram.com/contentcreator4you.ua/", icon: "I", gradient: "from-fuchsia-500 to-fuchsia-400" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f] py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <span className="font-display font-bold text-2xl text-white">
              Cre<span className="text-purple-500">o</span>Web
            </span>
            <p className="text-gray-500 text-sm mt-2">Контент, який приводить клієнтів</p>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-semibold mb-2">Слідкуйте за нами</h3>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white text-sm font-bold hover:scale-110 transition-transform duration-200`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-sm font-semibold mb-1">Зв'яжіться з нами</h3>
            <a
              href="mailto:hello@creoweb-smm.com"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              <Mail size={18} className="text-purple-400" />
              hello@creoweb-smm.com
            </a>
            <a
              href="https://t.me/creoweb_support"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              <Send size={18} className="text-blue-400" />
              Telegram
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs">
          <p>© 2026 CreoWeb. Всі права захищені.</p>
          <p className="mt-1">developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
