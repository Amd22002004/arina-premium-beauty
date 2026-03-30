import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Clock, ShieldCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TelegramIcon } from "@/components/SocialIcons";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Введите имя").max(100),
  contact: z.string().trim().min(3, "Введите телефон или Telegram").max(100),
});

const SUBMIT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-booking`;

const ConsultationCapture = () => {
  const [form, setForm] = useState({ name: "", contact: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fe[err.path[0] as string] = err.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const resp = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.contact,
          comment: "Заявка из блока «Подбор процедуры»",
        }),
      });
      if (!resp.ok) throw new Error();
      setSent(true);
      toast({ title: "Заявка отправлена!", description: "Ответим в течение 10 минут" });
    } catch {
      toast({ title: "Ошибка", description: "Попробуйте позже или напишите в Telegram", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container-narrow px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: text */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">
                Не знаете, что выбрать?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Подберём процедуру или курс под вашу задачу — бесплатно
              </p>

              {/* Trust triggers */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} className="text-primary flex-shrink-0" />
                  <span>Ответим в течение 10 минут</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck size={16} className="text-primary flex-shrink-0" />
                  <span>Без обязательств</span>
                </div>
              </div>

              {/* Telegram button */}
              <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
                >
                  <TelegramIcon size={18} />
                  Написать в Telegram
                </Button>
              </a>
            </div>

            {/* Right: form */}
            <div>
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl mb-2">Спасибо за заявку!</h3>
                  <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="font-medium text-foreground mb-1">Получить консультацию</p>
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон или @Telegram"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className={errors.contact ? "border-destructive" : ""}
                    />
                    {errors.contact && <p className="text-destructive text-xs mt-1">{errors.contact}</p>}
                  </div>
                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full gold-gradient text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-shadow gap-2"
                  >
                    <Send size={16} />
                    {sending ? "Отправка…" : "Задать вопрос"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="/privacy" className="underline hover:text-primary">политикой конфиденциальности</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationCapture;
