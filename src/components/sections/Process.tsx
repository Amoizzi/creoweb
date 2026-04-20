"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Брифінг", desc: "Знайомимось, обговорюємо цілі, аудиторію та побажання. Визначаємо стратегію." },
  { num: "02", title: "Стратегія", desc: "Розробляємо контент-план, сценарії та концепцію. Погоджуємо з вами." },
  { num: "03", title: "Виробництво", desc: "Знімаємо, монтуємо, створюємо візуал. Повний цикл під ключ." },
  { num: "04", title: "Результат", desc: "Публікуємо, аналізуємо, оптимізуємо. Ви отримуєте клієнтів." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-purple-500/5">
            Як ми працюємо
          </span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Процес роботи
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Чотири кроки від першого контакту до готового результату
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/40 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="font-display font-bold text-5xl text-purple-500/20 group-hover:text-purple-500/40 transition-colors mb-4">
                {s.num}
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-purple-500/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
