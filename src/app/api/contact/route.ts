import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, topic, message } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatIds = process.env.TELEGRAM_CHAT_IDS;

    if (!token || !chatIds) {
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

    const ids = chatIds.split(",");

    const results = await Promise.allSettled(
      ids.map((id) =>
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: id.trim(),
            text,
            parse_mode: "Markdown",
          }),
        })
      )
    );

    const allFailed = results.every((r) => r.status === "rejected");
    if (allFailed) {
      return NextResponse.json({ error: "Telegram error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
