"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GridBackground from "@/components/ui/GridBackground";
import { useIsLowEnd } from "@/hooks/useIsLowEnd";

export default function Hero() {
  const isLowEnd = useIsLowEnd();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      <GridBackground />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">

        {/* Badge */}
        <motion.div
          initial={isLowEnd ? {} : { opacity: 0, y: 20 }}
          animate={isLowEnd ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-8 bg-purple-500/5"
        >
          Відео · SMM · Контент
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={isLowEnd ? {} : { opacity: 0, y: 30 }}
          animate={isLowEnd ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
        >
          <span className="text-white">Контент, який</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            приводить клієнтів
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={isLowEnd ? {} : { opacity: 0, y: 20 }}
          animate={isLowEnd ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          CreoWeb — повний цикл створення контенту для бізнесу.<br />
          Від ідеї до готового відео, SMM та візуалу.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={isLowEnd ? {} : { opacity: 0, y: 20 }}
          animate={isLowEnd ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button variant="primary" href="#contact">Замовити контент</Button>
          <Button variant="outline" href="#portfolio">Переглянути кейси</Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={isLowEnd ? {} : { opacity: 0 }}
          animate={isLowEnd ? {} : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 flex justify-center gap-12 md:gap-20 flex-wrap"
        >
          {[
            { num: "50+", label: "проектів" },
            { num: "3", label: "роки досвіду" },
            { num: "100%", label: "результат" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-bold text-3xl text-white mb-1">{s.num}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
