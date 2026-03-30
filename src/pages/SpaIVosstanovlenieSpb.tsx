import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertCircle, Sparkles, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServicePricingTiers from "@/components/ServicePricingTiers";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import NextStep from "@/components/NextStep";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  { name: "Медовая выкатка", price: "1 390 ₽", discount: true },
  { name: "Инфракрасная капсула", price: "2 290 ₽", discount: false },
  { name: "Комплекс (сауна + выкатка)", price: "2 990 ₽", discount: false },
  { name: "Обёртывания", price: "2 990 ₽", discount: false },
];

const benefits = [
  "Глубокое расслабление и снятие напряжения",
  "Выведение токсинов и очищение организма",
  "Улучшение состояния и тонуса кожи",
  "Уменьшение отёчности и застойных явлений",
  "Восстановление после стресса и нагрузок",
  "Ощущение лёгкости и комфорта после процедуры",
];

const forWhom = [
  "Чувствуете усталость и хотите расслабиться",
  "Нужна перезагрузка после стресса или переутомления",
  "Хотите улучшить состояние кожи тела",
  "Ищете мягкую детокс-процедуру",
  "Хотите дополнить курс массажа или коррекции фигуры",
];

const contraindications = [
  "Острые воспалительные процессы",
  "Онкологические заболевания",
  "Повышенная температура тела",
  "Тяжёлые сердечно-сосудистые заболевания",
  "Аллергия на компоненты (мёд, составы для обёртываний)",
  "Беременность",
];

const steps = [
  { title: "Подготовка", desc: "Очищение кожи и подготовка зоны воздействия" },
  { title: "Процедура", desc: "Воздействие по выбранной методике (30–60 мин)" },
  { title: "Отдых", desc: "Время для расслабления и восстановления" },
  { title: "Завершение", desc: "Увлажнение кожи и рекомендации по дальнейшему уходу" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "СПА и восстановление в Санкт-Петербурге",
  description: "Инфракрасная капсула, медовая выкатка и обёртывания для расслабления, детокса и восстановления.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
};

const SpaIVosstanovlenieSpb = () => (
  <Layout>
    <Helmet>
      <title>СПА и восстановление в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="СПА и восстановление в Санкт-Петербурге: инфракрасная капсула, медовая выкатка и обёртывания для расслабления, детокса и восстановления." />
      <meta name="keywords" content="спа процедуры спб, инфракрасная сауна спб, медовая выкатка спб, обёртывания спб, расслабление спб процедуры, восстановление после стресса спб, спа уход за телом" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/spa-i-vosstanovlenie-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl text-center mb-6">
          СПА и восстановление в&nbsp;Санкт-Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl text-center max-w-2xl mx-auto mb-4">
          Процедуры для расслабления, снятия напряжения и восстановления после нагрузок. Мягкий детокс, тепло и забота о коже — всё, что нужно, чтобы почувствовать себя лучше.
        </motion.p>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Кому подходят СПА-процедуры</h2>
          <p className="text-muted-foreground mb-6">Процедуры рекомендованы, если вы:</p>
          <ul className="space-y-3">
            {forWhom.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Что дают СПА-процедуры</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <Sparkles size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Виды процедур</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Инфракрасная капсула</h3>
              <p className="text-muted-foreground text-sm">Мягкий прогрев тела инфракрасным теплом. Помогает расслабиться, вывести лишнюю жидкость и улучшить состояние кожи.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Медовая выкатка</h3>
              <p className="text-muted-foreground text-sm">Традиционная техника с натуральным мёдом. Очищает кожу, выводит токсины и оставляет ощущение лёгкости.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Комплекс (сауна + выкатка)</h3>
              <p className="text-muted-foreground text-sm">Сочетание инфракрасного прогрева и медовой выкатки для максимального расслабления и детокс-эффекта.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Обёртывания</h3>
              <p className="text-muted-foreground text-sm">Питательные и подтягивающие составы для тела. Улучшают тонус кожи, увлажняют и дарят ощущение комфорта.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Как проходит процедура</h2>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">{i + 1}</div>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Противопоказания</h2>
          <ul className="space-y-3">
            {contraindications.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <AlertCircle size={18} className="text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    <ServicePricingTiers title="Цены" prices={prices} />

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeUp}>
          <h2 className="font-heading text-2xl mb-4">Запишитесь на СПА-процедуру</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Подберём процедуру под ваш запрос — расслабление, детокс или комплексное восстановление.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться онлайн
              </Button>
            </Link>
            <a href="https://t.me/ART_and_beauty_studio" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10">
                Написать в Telegram
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <NextStep currentPath="/spa-i-vosstanovlenie-spb" />
    <RelatedServices currentPath="/spa-i-vosstanovlenie-spb" />
    <CTASection />
  </Layout>
);

export default SpaIVosstanovlenieSpb;
