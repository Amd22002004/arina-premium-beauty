import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Ты — лаконичный администратор-консультант сайта artbody.pro (студия «АРТ Косметология»).

🎯 СТИЛЬ ОБЩЕНИЯ:
Отвечай коротко и по делу: максимум 1–3 предложения.
Без воды, длинных вступлений и маркетинговых простыней.
Будь вежливым, но деловым. Как живой администратор, а не бот.

🛒 ПРАВИЛА ПРОДАЖ И КОНСУЛЬТАЦИИ:
Если человек не знает, что выбрать — предложи 2 варианта на выбор.
Уточни задачу клиента (лицо, тело, восстановление) и предложи направление.
Предлагай комплексные АРТ-протоколы, а не одну голую услугу.
Допродажа: ответив на вопрос, коротко посоветуй пакет. Пример: «Выгоднее взять пакет из 5 сеансов за Y руб. Оформляем?»
НИКОГДА не скидывай сразу весь прайс. Отвечай дозированно.

💰 ПРАВИЛА ПО ЦЕНАМ:
Используй ТОЛЬКО актуальный прайс из базы знаний ниже. НЕ ПРИДУМЫВАЙ цены.
Если спрашивают про курс — всегда называй цену за 1 процедуру и сразу цену за пакет (5/10).
Пакет 5 процедур = скидка 10%. Пакет 10 процедур = скидка 15%.
Скидка 30% на первое посещение — ТОЛЬКО на входные услуги (массажи лица, лимфодренаж, прессотерапия, кавитация, вакуумный массаж, массаж + маска). НЕ на инъекции, пилинги, аппараты, премиум.

📱 АЛГОРИТМ СБОРА КОНТАКТОВ (СТРОГО):
1. Если клиент готов записаться, спроси: «Передать вашу заявку Ариане?»
2. Если согласен — проверь, знаешь ли ты его Имя и Телефон (или Telegram).
3. Если чего-то не хватает — задай ОДИН короткий вопрос.
4. Без имени и телефона заявку НЕ фиксируй.
5. Когда данные собраны — подтверди запись и вызови функцию notify_admin.

🚫 СТРОГОЕ ПРАВИЛО О ЗАПИСИ:
Ты НЕ имеешь доступа к календарю. НИКОГДА не записывай на конкретное время/дату. Не предлагай слоты.
Когда клиент готов — собери контакт и передай через notify_admin.

📍 ОБЩАЯ ИНФОРМАЦИЯ:
Название: АРТ Косметология | Авторские ритуалы и технологии
Специалист: Ариана Ханова
Город: Санкт-Петербург, пр-т Энергетиков, 2к1
Часы работы: ежедневно с 8:00 до 19:00
Телефон: +79117193949
Telegram: https://t.me/Arin4Van

💰 АКТУАЛЬНЫЙ ПРАЙС:
[АППАРАТНЫЕ ПРОТОКОЛЫ ЛИЦА]
Микроигольчатый RF — от 15 900 ₽; Микроигольчатый рефлифтинг — 17 900 ₽; INDIBA лицо — 3 790 ₽; РФ лифтинг 3D — 4 490 ₽; БМС лица — 2 590 ₽; Холодная плазма: зона — 2 790 ₽, лицо — 9 490 ₽, лицо + шея — 13 490 ₽.

[КОСМЕТОЛОГИЯ И УХОД]
Биоревитализация — 4 490 ₽; Мезотерапия — 3 990 ₽; Биостимуляция — 3 490 ₽; Карбоновый пилинг — 3 990 ₽; Пилинг Джесснера — 3 990 ₽; Миндальный пилинг — 3 290 ₽; Лазерная чистка лица — 3 490 ₽.

[МАССАЖ ЛИЦА]
Скульптурный / Миофасциальный / 3D — 2 490 ₽; Лимфодренажный — 1 990 ₽; С альгинатной/увлажняющей маской — 3 490 ₽; С кислородной маской — 3 790 ₽; Удаление второго подбородка + подтяжка овала — 3 490 ₽.

[АППАРАТНЫЕ ПРОТОКОЛЫ ТЕЛА]
EMS Body Sculpt — 4 490 ₽; INDIBA тело — 4 290 ₽; БМС — 3 990 ₽; Миостимуляция — 2 490 ₽.

[КОРРЕКЦИЯ ФИГУРЫ]
Липосоникс MRTS — 11 900 ₽; Кавитация / Прессотерапия / Вакуумный массаж — 2 490 ₽; LPG / 4D коррекция — 2 990 ₽; Лимфодренажный массаж тела — 3 390 ₽.

[МАССАЖ И ВОССТАНОВЛЕНИЕ]
ШВЗ + спина — 1 990 ₽; Медицинский — 3 490 ₽; Массаж от отёков / Биоэнергетический — 2 490 ₽; БМ-массаж / БЭМ — 2 990 ₽.

[СПА]
Инфракрасная капсула — 2 290 ₽; Медовая выкатка — 1 390 ₽; Комплекс (сауна + выкатка) / Обёртывания — 2 990 ₽.

[ПРЕМИАЛЬНЫЕ]
Фотоомоложение BBL: лицо — 9 900 ₽, шея/декольте — 7 900 ₽, кисти рук — 5 900 ₽.
Фракционный CO2: лицо — от 9 900 ₽, шея/декольте — от 7 900 ₽, кисти — от 5 900 ₽, щёки — от 6 900 ₽, рубцы/растяжки — от 4 900 ₽.
Интимное омоложение — 11 900 ₽.

[ДОПОЛНИТЕЛЬНО] (только если клиент сам спросит):
Хиджама — от 2 000 ₽; Гирудотерапия — от 2 500 ₽.`;

const CHAT_IDS = [
  Deno.env.get("TELEGRAM_CHAT_ID"),
  "1911670848",
].filter(Boolean) as string[];

async function sendTelegramNotifications(
  summary: string,
  contact: string
): Promise<boolean> {
  const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");

  if (!botToken || CHAT_IDS.length === 0) {
    console.error("TELEGRAM_BOT_TOKEN or CHAT_IDS not configured");
    return false;
  }

  const text = `🔔 *Новая заявка из чата!*\n\n📋 *Запрос:* ${summary}\n📱 *Контакт:* ${contact}`;
  console.log("Sending Telegram notifications to chats:", CHAT_IDS);

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
        console.error(`Telegram error for chat ${chatId}:`, JSON.stringify(data));
        return false;
      }
      console.log(`Telegram sent to ${chatId} OK`);
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
    const { messages } = await req.json();
    console.log("Received messages count:", messages?.length);

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is NOT set!");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const apiUrl = "https://ai.gateway.lovable.dev/v1/chat/completions";

    const openaiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
    ];

    const tools = [
      {
        type: "function",
        function: {
          name: "notify_admin",
          description:
            "Отправляет уведомление администратору с контактами клиента и сутью его запроса. Вызывай ОБЯЗАТЕЛЬНО, как только клиент предоставит имя И номер телефона/Telegram.",
          parameters: {
            type: "object",
            properties: {
              client_request_summary: {
                type: "string",
                description: "Краткое описание запроса клиента.",
              },
              contact_info: {
                type: "string",
                description: "Контактные данные клиента (имя, номер телефона, Telegram).",
              },
            },
            required: ["client_request_summary", "contact_info"],
          },
        },
      },
    ];

    console.log("Sending request to Lovable AI...");
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: openaiMessages,
        tools,
        temperature: 0.7,
        max_tokens: 512,
      }),
    });

    console.log("AI response status:", response.status);

    if (!response.ok) {
      const t = await response.text();
      console.error("AI API error:", response.status, t);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Слишком много запросов, попробуйте позже." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Сервис временно недоступен." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const choice = data.choices?.[0];
    const message = choice?.message;

    console.log("AI finish_reason:", choice?.finish_reason);

    if (message?.tool_calls && message.tool_calls.length > 0) {
      const toolCall = message.tool_calls[0];
      console.log("Tool call detected:", toolCall.function.name);

      if (toolCall.function.name === "notify_admin") {
        let args;
        try {
          args = JSON.parse(toolCall.function.arguments);
        } catch {
          args = { client_request_summary: "Не указано", contact_info: "Не указано" };
        }
        console.log("notify_admin args:", JSON.stringify(args));

        const success = await sendTelegramNotifications(
          args.client_request_summary || "Не указано",
          args.contact_info || "Не указано"
        );

        const followUpMessages = [
          ...openaiMessages,
          message,
          {
            role: "tool",
            tool_call_id: toolCall.id,
            content: JSON.stringify({ success }),
          },
        ];

        console.log("Sending follow-up to AI with tool result...");
        const followUpResp = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${LOVABLE_API_KEY}`,
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: followUpMessages,
            tools,
            temperature: 0.7,
            max_tokens: 512,
          }),
        });

        if (followUpResp.ok) {
          const followUpData = await followUpResp.json();
          const followUpText =
            followUpData.choices?.[0]?.message?.content ||
            "Спасибо! Я передал вашу заявку Ариане. Она свяжется с вами в ближайшее время 💛";

          return new Response(JSON.stringify({ reply: followUpText }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        return new Response(
          JSON.stringify({
            reply: "Спасибо! Я передал вашу заявку Ариане. Она свяжется с вами в ближайшее время 💛",
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    const replyText =
      message?.content ||
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
