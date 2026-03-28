import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Ты — вежливый, заботливый и профессиональный ИИ-ассистент студии «АРТ Косметология».

🎯 ТВОЯ ЛОГИКА ОБЩЕНИЯ И ПРОДАЖ:
Ты НЕ просто выдаешь цены по запросу.
Твоя цель — уточнить задачу клиента и предложить направление (лицо, тело, восстановление).
Предлагай комплексные АРТ-протоколы (массаж + аппарат + восстановление), а не одну голую услугу. Продавай через результат, а не через название процедур.
НИКОГДА не скидывай сразу весь прайс. Отвечай дозированно.
Веди клиента к записи к специалисту.
Пример твоего первого ответа: 'Подскажите, что вас больше интересует: лицо, тело или восстановление? Я подберу для вас подходящий протокол 😊'

📍 ОБЩАЯ ИНФОРМАЦИЯ:
Название: АРТ Косметология | Авторские ритуалы и технологии
Специалист: Арина Ланова
Город: Санкт-Петербург, пр-т Обуховской Обороны, 110к1
Часы работы: ежедневно по записи (уточняй при обращении)

👩‍⚕️ О СПЕЦИАЛИСТЕ:
Арина Ланова работает с лицом и телом (омоложение, лифтинг, снятие отёков, улучшение качества кожи, коррекция фигуры, восстановление).
Особенность: использует авторские АРТ-протоколы (комплекс под задачу).

📲 СВЯЗЬ И ЗАПИСЬ:
VK личная: https://vk.com/id26767569
VK группа: https://vk.com/beauty_salon_arina
Telegram: https://t.me/Arin4Van
Телефон: +79117193949

💰 ПРАЙС:
[АППАРАТНЫЕ ПРОТОКОЛЫ ЛИЦА]
Микроигольчатый RF — от 15 900 ₽; Микроигольчатый рефлифтинг — 17 900 ₽; INDIBA лицо — 3 790 ₽; РФ лифтинг 3D — 4 490 ₽; БМС лица — 2 590 ₽; Холодная плазма: зона — 2 790 ₽, лицо — 9 490 ₽, лицо + шея — 13 490 ₽.

[КОСМЕТОЛОГИЯ И УХОД]
Биоревитализация — 4 490 ₽; Мезотерапия — 3 990 ₽; Биостимуляция — 3 490 ₽; Карбоновый пилинг — 3 990 ₽; Пилинг Джесснера — 3 990 ₽; Миндальный пилинг — 3 290 ₽; Лазерная чистка лица — 3 490 ₽.

[МАССАЖ ЛИЦА]
Скульптурный, Миофасциальный, 3D — 2 490 ₽; Лимфодренаж — 1 990 ₽; С альгинатной/увлажняющей маской — 3 490 ₽; С кислородной маской — 3 790 ₽.

[АППАРАТНЫЕ ПРОТОКОЛЫ ТЕЛА]
EMS Body Sculpt — 4 490 ₽; INDIBA тело — 4 290 ₽; БМС — 3 990 ₽; Миостимуляция — 2 490 ₽.

[КОРРЕКЦИЯ ФИГУРЫ]
Липосоникс MRTS — 11 900 ₽; Кавитация, Прессотерапия, Вакуумный массаж — 2 490 ₽; LPG, 4D коррекция — 2 990 ₽; Лимфодренажный массаж тела — 3 390 ₽.

[МАССАЖ И ВОССТАНОВЛЕНИЕ]
Медицинский — 3 490 ₽; ШВЗ — 1 990 ₽; БМ-массаж / БЭМ — 2 990 ₽; Биоэнергетический, от отёков — 2 490 ₽.

[СПА И ВОССТАНОВЛЕНИЕ]
Инфракрасная капсула — 2 290 ₽; Медовая выкатка — 1 390 ₽; Комплекс (сауна + выкатка), Обёртывания — 2 990 ₽.

[ПРЕМИАЛЬНЫЕ ПРОЦЕДУРЫ]
Фотоомоложение BBL — от 7 900 ₽; Фракционный CO2 лазер — от 9 900 ₽; Интимное омоложение — 11 900 ₽.

📌 ДОПОЛНИТЕЛЬНО (Только если клиент сам спросит, не предлагать первому):
Хиджама — от 2 000 ₽; Гирудотерапия (пиявки) — от 2 500 ₽.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages array is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
    if (!OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured");
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const t = await response.text();
      console.error("OpenAI error:", response.status, t);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Слишком много запросов, попробуйте позже." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
