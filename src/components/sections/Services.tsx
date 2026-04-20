"use client";
import { motion } from "framer-motion";
import { Video, Scissors, BarChart2, Image, FileText, Lightbulb, Globe, Bot, Mail, Palette } from "lucide-react";
import { useIsLowEnd } from "@/hooks/useIsLowEnd";

const services = [
  {
    icon: Video,
    title: "Відеозйомка",
    desc: "Професійна зйомка для бізнесу — рекламні ролики, іміджеві відео, репортажі та контент для соцмереж.",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20 hover:border-purple-500/60",
    iconColor: "text-purple-400",
  },
  {
    icon: Scissors,
    title: "Монтаж",
    desc: "Монтаж для TikTok, Reels та YouTube Shorts — динамічно, трендово, з субтитрами та музикою.",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20 hover:border-blue-500/60",
    iconColor: "text-blue-400",
  },
  {
    icon: BarChart2,
    title: "SMM та стратегія",
    desc: "Розробка контент-стратегії, ведення сторінок, аналітика та зростання аудиторії.",
    color: "from-fuchsia-500/20 to-fuchsia-600/5",
    border: "border-fuchsia-500/20 hover:border-fuchsia-500/60",
    iconColor: "text-fuchsia-400",
  },
  {
    icon: Image,
    title: "Візуал та креативи",
    desc: "Банери, прев'ю, сторіс та креативи — все в єдиному фірмовому стилі вашого бренду.",
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/20 hover:border-violet-500/60",
    iconColor: "text-violet-400",
  },
  {
    icon: FileText,
    title: "Тексти та сценарії",
    desc: "Продаючі тексти для постів, сценарії для відео та скрипти для реклами.",
    color: "from-indigo-500/20 to-indigo-600/5",
    border: "border-indigo-500/20 hover:border-indigo-500/60",
    iconColor: "text-indigo-400",
  },
  {
    icon: Globe,
    title: "Сайти та лендінги",
    desc: "Розробка сучасних сайтів та лендінгів, які конвертують відвідувачів у клієнтів.",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20 hover:border-cyan-500/60",
    iconColor: "text-cyan-400",
  },
  {
    icon: Bot,
    title: "Telegram боти",
    desc: "Автоматизація продажів та підтримки клієнтів через розумні Telegram боти.",
    color: "from-sky-500/20 to-sky-600/5",
    border: "border-sky-500/20 hover:border-sky-500/60",
    iconColor: "text-sky-400",
  },
  {
    icon: Mail,
    title: "Email розсилки",
    desc: "Стратегія та дизайн email-кампаній, які підвищують лояльність та повторні продажі.",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20 hover:border-emerald-500/60",
    iconColor: "text-emerald-400",
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Фірмовий стиль, логотип, кольорова палітра та гайдлайн бренду з нуля.",
    color: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/20 hover:border-rose-500/60",
    iconColor: "text-rose-400",
  },
  {
    icon: Lightbulb,
    title: "Повний цикл",
    desc: "Від ідеї до готового контенту — беремо на себе весь процес, ви отримуєте результат.",
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/20 hover:border-amber-500/60",
    iconColor: "text-amber-400",
  },
];

export default function Services() {
  const isLowEnd = useIsLowEnd();
  return (
    <section id="services" className="relative py-32 bg-[#0a0a0f]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.div
          initial={isLowEnd ? {} : { opacity: 0, y: 30 }}
          whileInView={isLowEnd ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-purple-500/5">
            Що ми робимо
          </span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Послуги CreoWeb
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Повний цикл контент-виробництва — від стратегії до публікації
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={isLowEnd ? {} : { opacity: 0, y: 40 }}
              whileInView={isLowEnd ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative p-6 rounded-2xl border bg-gradient-to-br ${s.color} ${s.border} transition-all duration-300 group cursor-default`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-white/5 mb-4 ${s.iconColor}`}>
                <s.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
