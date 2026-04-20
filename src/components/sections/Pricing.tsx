"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useIsLowEnd } from "@/hooks/useIsLowEnd";

const plans = [
  {
    name: "Старт",
    price: "12 000",
    period: "/ міс",
    desc: "Для малого бізнесу який тільки починає",
    features: [
      "12 постів на місяць",
      "Монтаж 4 відео (Reels/TikTok)",
      "Контент-план",
      "Базовий візуал (сторіс, пості)",
      "1 соцмережа",
      "Щомісячна аналітика",
    ],
    color: "border-white/10",
    badge: null,
    buttonVariant: "outline" as const,
  },
  {
    name: "Про",
    price: "25 000",
    period: "/ міс",
    desc: "Найпопулярніший — повний SMM під ключ",
    features: [
      "20 постів на місяць",
      "Монтаж 8 відео (Reels/TikTok/YouTube)",
      "Контент-стратегія",
      "Дизайн банерів та сторіс",
      "2 соцмережі",
      "Щотижнева аналітика",
      "Написання текстів та сценаріїв",
    ],
    color: "border-purple-500/60",
    badge: "Популярний",
    buttonVariant: "primary" as const,
  },
  {
    name: "Бізнес",
    price: "45 000",
    period: "/ міс",
    desc: "Для активного росту та великих брендів",
    features: [
      "30 постів на місяць",
      "Монтаж 12 відео",
      "Відеозйомка 1 день на місяць",
      "Повна контент-стратегія",
      "3 соцмережі",
      "Щоденна аналітика",
      "Таргетована реклама",
      "Особистий менеджер",
    ],
    color: "border-blue-500/40",
    badge: null,
    buttonVariant: "outline" as const,
  },
  {
    name: "Індивідуальний",
    price: "від 15 000",
    period: "",
    desc: "Сайти, лендінги, branding та нестандартні задачі",
    features: [
      "Розробка сайту / лендінгу",
      "Branding з нуля",
      "Telegram боти та автоматизація",
      "Повний цикл під ключ",
      "Індивідуальна стратегія",
      "Особистий менеджер",
    ],
    color: "border-amber-500/30",
    badge: "Гнучко",
    buttonVariant: "outline" as const,
  },
];

export default function Pricing() {
  const isLowEnd = useIsLowEnd();
  return (
    <section id="pricing" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={isLowEnd ? {} : { opacity: 0, y: 30 }}
          whileInView={isLowEnd ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-purple-500/5">
            Вартість
          </span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Тарифи та ціни
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Прозорі ціни без прихованих платежів
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={isLowEnd ? {} : { opacity: 0, y: 40 }}
              whileInView={isLowEnd ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-6 rounded-2xl border ${p.color} bg-white/3 hover:bg-white/5 transition-all duration-300 flex flex-col ${p.name === "Про" ? "ring-1 ring-purple-500/30" : ""}`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  {p.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-white text-xl mb-1">{p.name}</h3>
                <p className="text-gray-500 text-xs mb-4">{p.desc}</p>
                <div className="flex items-end gap-1">
                  <span className="font-display font-bold text-white text-3xl">{p.price}</span>
                  <span className="text-gray-500 text-sm mb-1">{p.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-400 text-sm">
                    <Check size={14} className="text-purple-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer px-8 py-3 text-base ${
                  p.buttonVariant === "primary"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105"
                    : "border border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400"
                }`}
              >
                Обрати план
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
