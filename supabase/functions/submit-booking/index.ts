import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const WEB3FORMS_KEY = "66bbf0d1-249e-409e-9cce-69821796c537";
const EMAIL_RECIPIENTS = ["kaonis@mail.ru", "kaonis79@yandex.ru", "Amd22002004@mail.ru"];

const BookingSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(10).max(20),
  service: z.string().max(200).optional(),
  comment: z.string().max(500).optional(),
});

const CHAT_IDS = [
  Deno.env.get("TELEGRAM_CHAT_ID"),
  "1911670848",
].filter(Boolean) as string[];

async function sendTelegramNotifications(text: string): Promise<boolean> {
  const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
  if (!botToken || CHAT_IDS.length === 0) {
    console.error("Telegram not configured");
    return false;
  }

  const results = await Promise.allSettled(
    CHAT_IDS.map(async (chatId) => {
      const resp = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
        }
      );
      const data = await resp.json();
      if (!data.ok) {
        console.error(`Telegram error for ${chatId}:`, JSON.stringify(data));
        return false;
      }
      console.log(`Telegram sent to ${chatId}`);
      return true;
    })
  );

  return results.some((r) => r.status === "fulfilled" && r.value === true);
}

async function sendEmailNotifications(
  name: string,
  phone: string,
  service?: string,
  comment?: string
): Promise<boolean> {
  const results = await Promise.allSettled(
    EMAIL_RECIPIENTS.map(async (email) => {
      const body: Record<string, string> = {
        access_key: WEB3FORMS_KEY,
        subject: `Новая заявка с сайта АРТ Косметология — ${name}`,
        from_name: "АРТ Косметология",
        to: email,
        name,
        phone,
      };
      if (service) body.service = service;
      if (comment) body.comment = comment;
      body.message = [
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        service ? `Услуга: ${service}` : "",
        comment ? `Комментарий: ${comment}` : "",
        `Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`,
      ].filter(Boolean).join("\n");

      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await resp.json();
      if (!data.success) {
        console.error(`Web3Forms error for ${email}:`, JSON.stringify(data));
        return false;
      }
      console.log(`Email sent to ${email}`);
      return true;
    })
  );

  return results.some((r) => r.status === "fulfilled" && r.value === true);
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const parsed = BookingSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, phone, service, comment } = parsed.data;

    // Build Telegram message
    const lines = [
      `📋 *Новая заявка с сайта!*`,
      ``,
      `👤 *Имя:* ${name}`,
      `📱 *Телефон:* ${phone}`,
    ];
    if (service) lines.push(`💆 *Услуга:* ${service}`);
    if (comment) lines.push(`💬 *Комментарий:* ${comment}`);
    lines.push(``, `🕐 *Время:* ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`);

    // Send both in parallel
    const [telegramOk, emailOk] = await Promise.all([
      sendTelegramNotifications(lines.join("\n")),
      sendEmailNotifications(name, phone, service, comment),
    ]);

    console.log("Telegram:", telegramOk, "Email:", emailOk);

    return new Response(
      JSON.stringify({ success: true, telegram: telegramOk, email: emailOk }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("submit-booking error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
