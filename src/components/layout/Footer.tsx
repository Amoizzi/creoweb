"use client";
import { ExternalLink } from "lucide-react";

const socials = [
  { name: "TikTok", url: "https://www.tiktok.com/@content.creator.ua", color: "hover:text-pink-400" },
  { name: "YouTube", url: "https://www.youtube.com/@content.creator4you", color: "hover:text-red-400" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61567176612479", color: "hover:text-blue-400" },
  { name: "Instagram", url: "https://www.instagram.com/contentcreator4you.ua/", color: "hover:text-fuchsia-400" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display font-bold text-2xl text-white">
              Cre<span className="text-purple-500">o</span>Web
            </span>
            <p className="text-gray-500 text-sm mt-1">Контент, який приводить клієнтів</p>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-gray-500 text-sm transition-colors duration-200 ${s.color}`}
              >
                {s.name}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>

          <div className="text-gray-600 text-sm">
            <a href="mailto:hello@creoweb.ua" className="hover:text-purple-400 transition-colors">
              hello@creoweb.ua
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
          © 2026 CreoWeb. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}
