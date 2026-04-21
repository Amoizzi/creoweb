"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { posts } from "@/lib/posts";

export default function BlogPreview() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const visible = showAll ? sorted : sorted.slice(0, 9);
  const post = posts.find((p) => p.slug === selected);
  const paragraphs = post?.content.split("\n").filter(Boolean) || [];

  return (
    <section id="blog" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-purple-500/5">
            Блог
          </span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Корисні статті
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            SMM, відео, сайти та контент — ділимось знаннями безкоштовно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((p) => (
            <button
              key={p.slug}
              onClick={() => setSelected(p.slug)}
              className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/40 hover:bg-white/5 transition-all duration-300 group text-left"
            >
              <span className="inline-flex items-center border border-purple-500/30 text-purple-400 text-xs px-3 py-1 rounded-full mb-4 bg-purple-500/5">
                {p.category}
              </span>
              <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {p.description}
              </p>
              <div className="flex items-center gap-4 text-gray-600 text-xs">
                <span>{p.date}</span>
                <span>{p.readTime} читання</span>
              </div>
            </button>
          ))}
        </div>

        {sorted.length > 9 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-purple-500/50 text-purple-400 px-8 py-3 rounded-full hover:bg-purple-500/10 transition-all duration-300 text-sm font-medium"
            >
              {showAll ? "Згорнути ↑" : "Показати всі статті ↓"}
            </button>
          </div>
        )}
      </div>

      {selected && post && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-[#0f0f1a] border border-white/10 rounded-3xl max-w-3xl w-full p-8 mb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors bg-white/5 rounded-full p-2"
            >
              <X size={20} />
            </button>

            <span className="inline-flex items-center border border-purple-500/30 text-purple-400 text-xs px-3 py-1 rounded-full mb-4 bg-purple-500/5">
              {post.category}
            </span>
            <h2 className="font-display font-bold text-white mb-4 leading-tight pr-12" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
              {post.title}
            </h2>
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-8 pb-6 border-b border-white/10">
              <span>{post.date}</span>
              <span>{post.readTime} читання</span>
            </div>

            <div className="space-y-2">
              {paragraphs.map((p, i) => {
                if (p.startsWith("## ")) return <h2 key={i} className="font-display font-bold text-white text-2xl mt-8 mb-3">{p.replace("## ", "")}</h2>;
                if (p.startsWith("### ")) return <h3 key={i} className="font-display font-bold text-white text-xl mt-6 mb-2">{p.replace("### ", "")}</h3>;
                if (p.startsWith("- ")) return <li key={i} className="text-gray-300 ml-4 mb-1">{p.replace("- ", "")}</li>;
                if (p.startsWith("**") && p.endsWith("**")) return <p key={i} className="text-white font-medium mt-4">{p.replace(/\*\*/g, "")}</p>;
                return <p key={i} className="text-gray-400 leading-relaxed">{p}</p>;
              })}
            </div>

            <div className="mt-12 p-6 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-center">
              <h3 className="font-display font-bold text-white text-xl mb-2">
                Потрібна допомога з контентом?
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Залиште заявку — зробимо безкоштовний розбір вашого бізнесу
              </p>
              <a
                href="https://t.me/WhiteRabbit_m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
              >
                Написати в Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
