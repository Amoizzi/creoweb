"use client";
import { useState } from "react";

const reviews = [
  {
    name: "Андрій Мельник",
    role: "Власник магазину електроніки",
    text: "Telegram бот який вони зробили — це просто вогонь. 70% запитів обробляється автоматично. Менеджери нарешті займаються продажами а не відповідями на одні й ті самі питання.",
    stars: 5,
  },
  {
    name: "Юлія Ткаченко",
    role: "Косметолог",
    text: "Вела Instagram сама 2 роки і нічого не росло. За перший місяць з CreoWeb +800 підписників і 15 нових клієнтів. Шкодую що не звернулась раніше.",
    stars: 5,
  },
  {
    name: "Сергій Павленко",
    role: "Директор будівельної компанії",
    text: "Замовляли корпоративний сайт та branding. Все зробили вчасно, без зайвих питань. Сайт виглядає дорого і сучасно. Клієнти відзначають.",
    stars: 5,
  },
  {
    name: "Оксана Гриценко",
    role: "Власниця кав'ярні",
    text: "Після ребрендингу від CreoWeb нас почали впізнавати. Новий логотип, стиль в Instagram — все в одному напрямку. Середній чек виріс на 20%.",
    stars: 5,
  },
  {
    name: "Віктор Лисенко",
    role: "IT-підприємець",
    text: "Швидко, якісно, без зайвих слів. Зробили лендінг за 7 днів. Вже на другому тижні пішли заявки. Буду рекомендувати всім знайомим.",
    stars: 5,
  },
  {
    name: "Наталія Шевченко",
    role: "Організатор заходів",
    text: "CreoWeb зробили нам YouTube канал під ключ — сценарії, зйомка, монтаж. Перше відео набрало 5000 переглядів органічно. Це неймовірно!",
    stars: 5,
  },
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
  {
    name: "Ігор Романенко",
    role: "Власник стоматологічної клініки",
    text: "Довго не наважувався на SMM — думав що це не для медицини. Після першого місяця з CreoWeb записи на місяць вперед. Відео про процедури набирають тисячі переглядів. Дякую команді!",
    stars: 5,
  },
  {
    name: "Аліна Захаренко",
    role: "Засновниця онлайн-школи",
    text: "Замовила повний цикл — сайт, SMM та email розсилки. Все зроблено в єдиному стилі, виглядає як великий бренд. Продажі курсів виросли на 60% за перший квартал.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section id="testimonials" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-purple-500/5">
            Відгуки
          </span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Що кажуть клієнти
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((r) => (
            <div
              key={r.name}
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
            </div>
          ))}
        </div>

        {reviews.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-purple-500/50 text-purple-400 px-8 py-3 rounded-full hover:bg-purple-500/10 transition-all duration-300 text-sm font-medium"
            >
              {showAll ? "Згорнути ↑" : "Показати всі відгуки ↓"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
