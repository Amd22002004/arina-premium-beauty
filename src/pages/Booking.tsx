import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { services } from "@/data/services";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { CheckCircle, Phone } from "lucide-react";

const SUBMIT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-booking`;

/* ── phone mask helpers ── */
const DIGITS_ONLY = /\d/g;
const MAX_DIGITS = 10;

function formatPhone(digits: string): string {
  const d = digits.slice(0, MAX_DIGITS);
  if (d.length === 0) return "+7 ";
  let result = "+7 (";
  result += d.slice(0, 3);
  if (d.length > 3) result += ") " + d.slice(3, 6);
  else result += ")";
  if (d.length > 6) result += "-" + d.slice(6, 8);
  if (d.length > 8) result += "-" + d.slice(8, 10);
  return result;
}

function extractDigits(masked: string): string {
  // remove the leading +7 then grab digits
  const raw = masked.replace(/^\+7\s*/, "");
  return (raw.match(DIGITS_ONLY) || []).join("").slice(0, MAX_DIGITS);
}

/* ── validation ── */
const bookingSchema = z.object({
  phone: z.string().length(10, "Введите корректный номер телефона"),
  service: z.string().min(1, "Выберите услугу"),
  name: z.string().max(100).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Необходимо согласие" }) }),
});

/* ── unique service names for dropdown ── */
const uniqueServiceNames = Array.from(new Set(services.map((s) => s.name)));

const Booking = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [phoneDigits, setPhoneDigits] = useState("");
  const [service, setService] = useState(initialService);
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const phoneRef = useRef<HTMLInputElement>(null);

  // Update service when URL param changes
  useEffect(() => {
    const s = searchParams.get("service");
    if (s) setService(s);
  }, [searchParams]);

  // Focus cursor after +7 on mount
  useEffect(() => {
    if (phoneRef.current) {
      phoneRef.current.focus();
    }
  }, []);

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = extractDigits(e.target.value);
    setPhoneDigits(digits);
  }, []);

  const handlePhoneKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    // allow: backspace, delete, tab, escape, enter, arrows, home, end, select-all, copy, paste
    const allowedKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter", "ArrowLeft", "ArrowRight", "Home", "End"];
    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
      return;
    }
    // block non-digit characters
    if (e.key.length === 1 && !/\d/.test(e.key)) {
      e.preventDefault();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse({ phone: phoneDigits, service, name: name || undefined, consent });
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
          name: name || "Не указано",
          phone: "+7" + phoneDigits,
          service,
        }),
      });

      if (!resp.ok) throw new Error("Request failed");

      setSent(true);
      toast({ title: "Заявка отправлена!", description: "Свяжемся с вами в течение 10 минут" });
    } catch {
      toast({ title: "Ошибка", description: "Не удалось отправить заявку. Попробуйте позже или позвоните нам.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-md">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Онлайн-запись</h1>
            <p className="text-muted-foreground text-center mb-10">
              Заполните форму, и мы свяжемся с вами в течение 10 минут
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-primary" />
                </div>
                <h2 className="font-heading text-2xl mb-3">Заявка отправлена!</h2>
                <p className="text-muted-foreground mb-6">Свяжемся с вами в течение 10 минут для подтверждения записи</p>
                <Link to="/">
                  <Button variant="outline">Вернуться на главную</Button>
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Phone */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    <Phone size={14} className="inline mr-1.5 -mt-0.5" />
                    Телефон *
                  </label>
                  <Input
                    ref={phoneRef}
                    value={formatPhone(phoneDigits)}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    type="tel"
                    inputMode="numeric"
                    className={`bg-card text-base tracking-wide ${errors.phone ? "border-destructive" : ""}`}
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Service */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Услуга *</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`w-full rounded-md border bg-card px-3 py-2.5 text-sm ${
                      errors.service ? "border-destructive" : "border-input"
                    }`}
                  >
                    <option value="">Выберите услугу</option>
                    {uniqueServiceNames.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Name (optional) */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Имя <span className="text-muted-foreground text-xs">(необязательно)</span></label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="bg-card"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked === true)}
                  />
                  <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                    Я даю{" "}
                    <Link to="/consent" className="underline hover:text-primary">согласие на обработку персональных данных</Link>{" "}
                    и принимаю{" "}
                    <Link to="/privacy" className="underline hover:text-primary">политику конфиденциальности</Link>
                  </label>
                </div>
                {errors.consent && <p className="text-destructive text-xs">{errors.consent}</p>}

                <Button type="submit" size="lg" className="w-full gold-gradient text-primary-foreground border-0 text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Отправляем..." : "Записаться"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
