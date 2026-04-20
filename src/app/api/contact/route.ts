import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, topic, message } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({ error: "Bot not configured" }, { status: 500 });
    }

    const text = `
🔔 *Нова заявка з CreoWeb!*

👤 *Імʼя:* ${name || "не вказано"}
📱 *Контакт:* ${contact || "не вказано"}
📋 *Послуга:* ${topic || "не вказано"}
💬 *Повідомлення:* ${message || "не вказано"}

⏰ ${new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })}
    `.trim();

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      return NextResponse.json({ error: "Telegram error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
