import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { categories } from "@/data/services";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const SUBMIT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-booking`;

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Введите имя").max(100),
  phone: z.string().trim().min(10, "Введите корректный телефон").max(20),
  service: z.string().optional(),
  comment: z.string().max(500).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Необходимо согласие" }) }),
});

const Booking = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "", consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const resp = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: form.service || undefined,
          comment: form.comment || undefined,
        }),
      });

      if (!resp.ok) throw new Error("Request failed");

      toast({ title: "Заявка отправлена!", description: "Мы свяжемся с вами в ближайшее время для подтверждения записи." });
      setForm({ name: "", phone: "", service: "", comment: "", consent: false });
    } catch {
      toast({ title: "Ошибка", description: "Не удалось отправить заявку. Попробуйте позже или позвоните нам.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Онлайн-запись</h1>
            <p className="text-muted-foreground text-center mb-10">
              Заполните форму, и мы свяжемся с вами для подтверждения записи
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Имя *</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="bg-card"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Телефон *</label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  type="tel"
                  className="bg-card"
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Интересующая услуга</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm"
                >
                  <option value="">Выберите направление</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Комментарий</label>
                <Textarea
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Расскажите о ваших пожеланиях или задайте вопрос"
                  className="bg-card"
                  rows={4}
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent"
                  checked={form.consent}
                  onCheckedChange={(checked) => setForm({ ...form, consent: checked === true })}
                />
                <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                  Я даю{" "}
                  <Link to="/consent" className="underline hover:text-primary">согласие на обработку персональных данных</Link>{" "}
                  и принимаю{" "}
                  <Link to="/privacy" className="underline hover:text-primary">политику конфиденциальности</Link>
                </label>
              </div>
              {errors.consent && <p className="text-destructive text-xs">{errors.consent}</p>}

              <Button type="submit" size="lg" className="w-full gold-gradient text-primary-foreground border-0">
                Отправить заявку
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
