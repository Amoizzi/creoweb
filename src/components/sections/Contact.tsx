"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsLowEnd } from "@/hooks/useIsLowEnd";

const topics = [
  "Старт — 12 000 ₴/міс",
  "Про — 25 000 ₴/міс",
  "Бізнес — 45 000 ₴/міс",
  "Індивідуальний — від 15 000 ₴",
  "Відеозйомка",
  "Монтаж відео",
  "SMM та стратегія",
  "Візуал та креативи",
  "Тексти та сценарії",
  "Сайт або лендінг",
  "Telegram бот",
  "Email розсилки",
  "Branding",
  "Повний цикл",
  "Інше",
];

export default function Contact() {
  const isLowEnd = useIsLowEnd();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    contact: "",
    topic: "",
    message: "",
  });

  useEffect(() => {
    const plan = sessionStorage.getItem("selectedPlan");
    if (plan) {
      setForm((prev) => ({ ...prev, topic: plan }));
      sessionStorage.removeItem("selectedPlan");
    }
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.contact) {
      setError("Заповніть імʼя та контакт");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", contact: "", topic: "", message: "" });
      } else {
        setError("Помилка відправки. Спробуйте ще раз.");
      }
    } catch {
      setError("Помилка відправки. Спробуйте ще раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <motion.div
          initial={isLowEnd ? {} : { opacity: 0, y: 30 }}
          whileInView={isLowEnd ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-purple-500/5">
            Звʼязатись
          </span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Замовити контент
          </h2>
          <p className="text-gray-400 text-lg">
            Залиште заявку або пишіть одразу в Telegram{" "}
            <a href="https://t.me/WhiteRabbit_m" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
              @WhiteRabbit_m
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={isLowEnd ? {} : { opacity: 0, y: 30 }}
          whileInView={isLowEnd ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display font-bold text-white text-2xl mb-2">Заявку отримано!</h3>
              <p className="text-gray-400">Звʼяжемось з вами протягом 2 годин</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-purple-400 text-sm hover:text-purple-300 transition-colors"
              >
                Надіслати ще одну заявку
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Ваше імʼя *</label>
                <input
                  type="text"
                  placeholder="Іван Петренко"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Telegram або телефон *</label>
                <input
                  type="text"
                  placeholder="@username або +380..."
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Тема звернення</label>
                <select
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  className="w-full bg-[#0f0f1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-colors cursor-pointer"
                >
                  <option value="" className="bg-[#0f0f1a]">Оберіть послугу...</option>
                  {topics.map((t) => (
                    <option key={t} value={t} className="bg-[#0f0f1a]">{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Що потрібно?</label>
                <textarea
                  placeholder="Опишіть ваш проект..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-4 rounded-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {loading ? "Відправляємо..." : "Надіслати заявку"}
              </button>
              <a
                href="https://t.me/WhiteRabbit_m"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 border border-white/10 text-gray-400 font-medium py-4 rounded-xl hover:border-purple-500/50 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Написати в Telegram напряму
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
