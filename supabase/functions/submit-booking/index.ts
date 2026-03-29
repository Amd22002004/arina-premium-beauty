import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

    const telegramOk = await sendTelegramNotifications(lines.join("\n"));
    console.log("Telegram sent:", telegramOk);

    return new Response(
      JSON.stringify({ success: true, telegram: telegramOk }),
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
