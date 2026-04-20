"use client";
import { motion } from "framer-motion";
import { useIsLowEnd } from "@/hooks/useIsLowEnd";

const reviews = [
  {
    name: "Олена Коваль",
    role: "Власниця ресторану",
    text: "CreoWeb повністю змінили наш TikTok. За 2 місяці охоплення виросло в 4 рази, а кількість бронювань збільшилась на 30%.",
    stars: 5,
  },
  {
    name: "Дмитро Савченко",
    role: "Фітнес-тренер",
    text: "Нарешті знайшов команду, яка розуміє контент. Монтаж, сценарії, стратегія — все на вищому рівні. Рекомендую!",
    stars: 5,
  },
  {
    name: "Марія Бондаренко",
    role: "Онлайн-підприємець",
    text: "Замовляла лендінг та SMM. Результат перевершив очікування — конверсія 9%, а сайт виглядає як у великої агенції.",
    stars: 5,
  },
];

export default function Testimonials() {
  const isLowEnd = useIsLowEnd();
  return (
    <section id="testimonials" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={isLowEnd ? {} : { opacity: 0, y: 30 }}
          whileInView={isLowEnd ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-purple-500/5">
            Відгуки
          </span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Що кажуть клієнти
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={isLowEnd ? {} : { opacity: 0, y: 40 }}
              whileInView={isLowEnd ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
              <div>
                <div className="font-medium text-white text-sm">{r.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{r.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
