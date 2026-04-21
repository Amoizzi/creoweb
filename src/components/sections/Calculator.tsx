"use client";
import { useState } from "react";
import { Send } from "lucide-react";

const networks = [
  { name: "Instagram", price: 2000 },
  { name: "TikTok", price: 2000 },
  { name: "YouTube", price: 3000 },
  { name: "Facebook", price: 1500 },
  { name: "Telegram", price: 1500 },
  { name: "LinkedIn", price: 2500 },
  { name: "Pinterest", price: 1500 },
  { name: "Twitter/X", price: 1500 },
];

const sites = [
  { name: "Лендінг", desc: "Одна сторінка під ключ, висока конверсія", price: 15000 },
  { name: "Сайт-візитка", desc: "1–3 сторінки, запуск за 5–7 днів", price: 10000 },
  { name: "Корпоративний сайт", desc: "5–10 сторінок, CMS, адаптивний дизайн", price: 35000 },
  { name: "Інтернет-магазин", desc: "Каталог, кошик, оплата, адмінпанель", price: 80000 },
];

const extras = [
  { name: "Email розсилка", desc: "Стратегія, дизайн, надсилання", price: 0, individual: true },
  { name: "Telegram бот", desc: "Автоматизація продажів і підтримки", price: 8000, individual: false },
  { name: "Branding", desc: "Логотип, фірмовий стиль, гайдлайн", price: 0, individual: true },
  { name: "Відеозйомка (3 год)", desc: "Оператор + базовий монтаж, 1 локація", price: 6000, individual: false },
  { name: "Відеозйомка (повний день)", desc: "Оператор + монтаж + кольорокорекція", price: 0, individual: true },
];

function fmt(n: number) {
  return n.toLocaleString("uk-UA") + " ₴";
}

export default function Calculator() {
  const [activeNets, setActiveNets] = useState<Record<string, number>>({});
  const [activeSites, setActiveSites] = useState<boolean[]>(new Array(sites.length).fill(false));
  const [activeExtras, setActiveExtras] = useState<boolean[]>(new Array(extras.length).fill(false));
  const [showMore, setShowMore] = useState(false);

  const toggleNet = (name: string, price: number) => {
    setActiveNets((prev) => {
      const next = { ...prev };
      if (next[name]) delete next[name];
      else next[name] = price;
      return next;
    });
  };

  const toggleSite = (idx: number) => {
    setActiveSites((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const toggleExtra = (idx: number) => {
    setActiveExtras((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  let total = 0;
  let hasIndiv = false;
  const lines: { name: string; price: string }[] = [];
  const summary: string[] = [];

  Object.entries(activeNets).forEach(([name, price]) => {
    total += price;
    lines.push({ name, price: fmt(price) });
    summary.push(name);
  });

  activeSites.forEach((on, i) => {
    if (on) {
      total += sites[i].price;
      lines.push({ name: sites[i].name, price: "від " + fmt(sites[i].price) });
      summary.push(sites[i].name);
    }
  });

  activeExtras.forEach((on, i) => {
    if (on) {
      if (extras[i].individual) {
        hasIndiv = true;
        lines.push({ name: extras[i].name, price: "індивідуально" });
      } else {
        total += extras[i].price;
        lines.push({ name: extras[i].name, price: fmt(extras[i].price) });
      }
      summary.push(extras[i].name);
    }
  });

  const totalText = total > 0
    ? fmt(total) + (hasIndiv ? " +" : "")
    : hasIndiv ? "індивідуально" : "0 ₴";

  const msg = summary.length > 0
    ? `Привіт! Мене цікавлять послуги CreoWeb: ${summary.join(", ")}. Орієнтовна сума: ${fmt(total)}`
    : "Привіт! Хочу дізнатися про послуги CreoWeb.";

  const ctaHref = `https://t.me/WhiteRabbit_m?text=${encodeURIComponent(msg)}`;

  const visibleExtras = showMore ? extras : extras.slice(0, 4);

  return (
    <section id="calculator" className="relative py-32">
      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-purple-500/5">
            Калькулятор
          </span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Розрахуйте вартість
          </h2>
          <p className="text-gray-400 text-lg">
            Оберіть потрібні послуги — і ми підготуємо індивідуальну пропозицію
          </p>
        </div>

        <div className="bg-white/3 border border-white/8 rounded-3xl p-8 space-y-8">

          {/* Networks */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-medium">Додаткові соцмережі</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {networks.map((n) => (
                <button
                  key={n.name}
                  onClick={() => toggleNet(n.name, n.price)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                    activeNets[n.name]
                      ? "border-purple-500 bg-purple-500/20 text-purple-300"
                      : "border-white/10 bg-white/3 text-gray-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {n.name}
                </button>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-2">Кожна додаткова мережа — від 1 500 ₴/міс</p>
          </div>

          <div className="border-t border-white/5" />

          {/* Sites */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-medium">Сайти</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sites.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => toggleSite(i)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                    activeSites[i]
                      ? "border-purple-500/60 bg-purple-500/10"
                      : "border-white/10 bg-white/3 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      activeSites[i] ? "bg-purple-600 border-purple-600" : "border-white/20"
                    }`}>
                      {activeSites[i] && <span className="text-white text-xs">✓</span>}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm mb-1">{s.name}</p>
                      <p className="text-gray-500 text-xs">{s.desc}</p>
                      <p className="text-purple-400 text-sm font-medium mt-2">від {fmt(s.price)}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5" />

          {/* Extras */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-medium">Інші послуги</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {visibleExtras.map((e, i) => (
                <button
                  key={e.name}
                  onClick={() => toggleExtra(i)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-start gap-3 ${
                    activeExtras[i]
                      ? "border-purple-500/60 bg-purple-500/10"
                      : "border-white/10 bg-white/3 hover:border-white/20"
                  }`}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    activeExtras[i] ? "bg-purple-600 border-purple-600" : "border-white/20"
                  }`}>
                    {activeExtras[i] && <span className="text-white text-[10px]">✓</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm mb-0.5">{e.name}</p>
                    <p className="text-gray-500 text-xs">{e.desc}</p>
                  </div>
                  <span className="text-gray-500 text-xs shrink-0 pt-0.5">
                    {e.individual ? "індивід." : "+" + fmt(e.price)}
                  </span>
                </button>
              ))}
            </div>
            {!showMore && (
              <button
                onClick={() => setShowMore(true)}
                className="mt-3 text-gray-500 text-sm hover:text-white transition-colors"
              >
                ▶ Ще послуги
              </button>
            )}
          </div>

          <div className="border-t border-white/5" />

          {/* Result */}
          <div className="bg-white/3 rounded-2xl p-6">
            {lines.length > 0 && (
              <div className="space-y-2 mb-4">
                {lines.map((l) => (
                  <div key={l.name} className="flex justify-between text-sm">
                    <span className="text-gray-400">{l.name}</span>
                    <span className="text-gray-300">{l.price}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-between items-baseline pt-4 border-t border-white/10">
              <span className="text-white font-medium">Разом</span>
              <span className="font-display font-bold text-3xl text-purple-400">{totalText}</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-4 rounded-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02] transition-all duration-300"
          >
            <Send size={18} />
            Отримати пропозицію
          </a>

        </div>
      </div>
    </section>
  );
}
