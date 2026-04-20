"use client";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useIsLowEnd } from "@/hooks/useIsLowEnd";

const cases = [
  {
    title: "TikTok для ресторану",
    category: "Відео · Монтаж",
    result: "+340% охоплення за 2 місяці",
    tag: "TikTok",
    color: "from-purple-600/30 to-purple-900/10",
    border: "border-purple-500/30",
  },
  {
    title: "SMM для фітнес-клубу",
    category: "SMM · Контент",
    result: "+1200 підписників за місяць",
    tag: "Instagram",
    color: "from-blue-600/30 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Лендінг для юриста",
    category: "Сайт · Лендінг",
    result: "Конверсія 8.4%",
    tag: "Web",
    color: "from-cyan-600/30 to-cyan-900/10",
    border: "border-cyan-500/30",
  },
  {
    title: "Branding для кав'ярні",
    category: "Branding · Візуал",
    result: "Повний ребрендинг за 2 тижні",
    tag: "Brand",
    color: "from-amber-600/30 to-amber-900/10",
    border: "border-amber-500/30",
  },
  {
    title: "YouTube для коуча",
    category: "Відео · Монтаж · SMM",
    result: "+5000 переглядів на перший ролик",
    tag: "YouTube",
    color: "from-rose-600/30 to-rose-900/10",
    border: "border-rose-500/30",
  },
  {
    title: "Telegram бот для магазину",
    category: "Telegram · Автоматизація",
    result: "Автоматизовано 70% запитів",
    tag: "Telegram",
    color: "from-sky-600/30 to-sky-900/10",
    border: "border-sky-500/30",
  },
];

export default function Portfolio() {
  const isLowEnd = useIsLowEnd();
  return (
    <section id="portfolio" className="relative py-32 bg-[#0a0a0f]">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={isLowEnd ? {} : { opacity: 0, y: 30 }}
          whileInView={isLowEnd ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center border border-blue-500/50 text-blue-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-blue-500/5">
            Наші роботи
          </span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Кейси та портфоліо
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Реальні результати для реальних бізнесів
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={isLowEnd ? {} : { opacity: 0, y: 40 }}
              whileInView={isLowEnd ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative p-6 rounded-2xl border bg-gradient-to-br ${c.color} ${c.border} transition-all duration-300 hover:scale-[1.02] group cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
                  {c.tag}
                </span>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{c.category}</p>
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <Play size={14} fill="currentColor" />
                {c.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
