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

🚫 СТРОГОЕ ПРАВИЛО О ЗАПИСИ:
Ты НЕ имеешь доступа к календарю и расписанию. НИКОГДА не пытайся самостоятельно записать клиента на конкретное время, день или дату. Не предлагай конкретные слоты.
Когда клиент готов записаться, скажи: "Для записи, пожалуйста, оставьте ваш номер телефона, и Арина свяжется с вами! Также вы можете нажать на кнопку звонка ниже 📞"

📱 ПЕРЕДАЧА КОНТАКТОВ:
Как только клиент напишет свой номер телефона или другие контактные данные — ОБЯЗАТЕЛЬНО вызови функцию notify_admin, передав суть запроса клиента и его контакты. После успешного вызова ответь: "Спасибо! Я передал вашу заявку Арине. Она свяжется с вами в ближайшее время 💛"

📍 ОБЩАЯ ИНФОРМАЦИЯ:
Название: АРТ Косметология | Авторские ритуалы и технологии
Специалист: Арина Ланова
Город: Санкт-Петербург, пр-т Обуховской Обороны, 110к1
Часы работы: ежедневно с 8:00 до 19:00

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

const TOOLS = [
  {
    function_declarations: [
      {
        name: "notify_admin",
        description:
          "Отправляет уведомление администратору с контактами клиента и сутью его запроса. Вызывай эту функцию ОБЯЗАТЕЛЬНО, как только клиент предоставит свой номер телефона или другие контактные данные.",
        parameters: {
          type: "object",
          properties: {
            client_request_summary: {
              type: "string",
              description:
                "Краткое описание запроса клиента: какие процедуры интересуют, какой результат хочет получить.",
            },
            contact_info: {
              type: "string",
              description:
                "Контактные данные клиента (номер телефона, имя и т.д.).",
            },
          },
          required: ["client_request_summary", "contact_info"],
        },
      },
    ],
  },
];

async function sendTelegramNotification(
  summary: string,
  contact: string
): Promise<boolean> {
  const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
  const chatId = Deno.env.get("TELEGRAM_CHAT_ID");

  if (!botToken || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured");
    return false;
  }

  const text = `🔔 *Новая заявка из чата!*\n\n📋 *Запрос:* ${summary}\n📱 *Контакт:* ${contact}`;

  try {
    const resp = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
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
    const data = await resp.json();
    if (!data.ok) {
      console.error("Telegram error:", JSON.stringify(data));
      return false;
    }
    return true;
  } catch (e) {
    console.error("Telegram send error:", e);
    return false;
  }
}

function buildGeminiMessages(messages: Array<{ role: string; content: string }>) {
  return messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    console.log("Received messages count:", messages?.length);

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is NOT set in environment!");
      throw new Error("GEMINI_API_KEY is not configured");
    }
    console.log("GEMINI_API_KEY is set, length:", GEMINI_API_KEY.length);

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    console.log("Using model: gemini-1.5-flash");

    const contents = buildGeminiMessages(messages);

    const geminiBody = {
      contents,
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      tools: TOOLS,
      generation_config: {
        temperature: 0.7,
        max_output_tokens: 1024,
      },
    };

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiBody),
    });

    if (!response.ok) {
      const t = await response.text();
      console.error("Gemini error:", response.status, t);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Слишком много запросов, попробуйте позже." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const candidate = data.candidates?.[0];
    const parts = candidate?.content?.parts ?? [];

    // Check for function calls
    const functionCall = parts.find((p: any) => p.functionCall);

    if (functionCall) {
      const { name, args } = functionCall.functionCall;

      if (name === "notify_admin") {
        const success = await sendTelegramNotification(
          args.client_request_summary || "Не указано",
          args.contact_info || "Не указано"
        );

        // Send function result back to Gemini for final response
        const contentsWithFunctionResult = [
          ...contents,
          {
            role: "model",
            parts: [{ functionCall: { name, args } }],
          },
          {
            role: "function",
            parts: [
              {
                functionResponse: {
                  name,
                  response: { success },
                },
              },
            ],
          },
        ];

        const followUpResp = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: contentsWithFunctionResult,
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            tools: TOOLS,
            generation_config: { temperature: 0.7, max_output_tokens: 1024 },
          }),
        });

        if (followUpResp.ok) {
          const followUpData = await followUpResp.json();
          const followUpText =
            followUpData.candidates?.[0]?.content?.parts
              ?.filter((p: any) => p.text)
              .map((p: any) => p.text)
              .join("") ||
            "Спасибо! Я передал вашу заявку Арине. Она свяжется с вами в ближайшее время 💛";

          return new Response(JSON.stringify({ reply: followUpText }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        // Fallback if follow-up fails
        return new Response(
          JSON.stringify({
            reply: "Спасибо! Я передал вашу заявку Арине. Она свяжется с вами в ближайшее время 💛",
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Regular text response
    const textParts = parts.filter((p: any) => p.text);
    const replyText =
      textParts.map((p: any) => p.text).join("") ||
      "Извините, не удалось сформировать ответ. Попробуйте переформулировать вопрос.";

    return new Response(JSON.stringify({ reply: replyText }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
