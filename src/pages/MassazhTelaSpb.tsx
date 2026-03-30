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
import ConsultationCapture from "@/components/ConsultationCapture";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  { name: "ШВЗ + спина", price: "1 990 ₽", discount: false },
  { name: "Лимфодренажный массаж тела", price: "3 390 ₽", discount: true },
  { name: "Медицинский / лечебный массаж", price: "3 490 ₽", discount: false },
];

const benefits = [
  "Снятие мышечного напряжения и зажимов",
  "Улучшение лимфооттока и уменьшение отёков",
  "Восстановление после физических нагрузок",
  "Улучшение кровообращения и питания тканей",
  "Нормализация сна и общего самочувствия",
  "Профилактика болей в спине и шее",
];

const forWhom = [
  "Чувствуете напряжение в спине, шее и плечах",
  "Беспокоят отёки и тяжесть в теле",
  "Нужно восстановиться после нагрузок или стресса",
  "Ведёте сидячий образ жизни",
  "Хотите улучшить общее самочувствие и качество сна",
];

const contraindications = [
  "Острые воспалительные процессы",
  "Онкологические заболевания",
  "Повышенная температура тела",
  "Кожные заболевания в зоне воздействия",
  "Тромбофлебит и тяжёлые формы варикоза",
  "Беременность (для некоторых видов массажа)",
];

const steps = [
  { title: "Консультация", desc: "Определяем проблемные зоны и подбираем вид массажа" },
  { title: "Подготовка", desc: "Разогрев тканей и подготовка зоны воздействия" },
  { title: "Массаж", desc: "Работа по выбранной методике (30–60 мин в зависимости от вида)" },
  { title: "Завершение", desc: "Рекомендации по режиму и дальнейшему курсу" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Массаж тела в Санкт-Петербурге",
  description: "Лечебный, лимфодренажный массаж, массаж спины и шейно-воротниковой зоны для снятия напряжения и улучшения самочувствия.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
};

const MassazhTelaSpb = () => (
  <Layout>
    <Helmet>
      <title>Массаж тела в Санкт-Петербурге — лечебный, лимфодренажный | АРТ Косметология</title>
      <meta name="description" content="Массаж тела в Санкт-Петербурге: лечебный, лимфодренажный, спина и шейно-воротниковая зона. Снятие напряжения, отёков и улучшение самочувствия." />
      <meta name="keywords" content="массаж тела спб, лечебный массаж спб, лимфодренажный массаж тела спб, массаж спины спб, массаж шейно воротниковой зоны спб, снять напряжение массажем, массаж от отёков спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/massazh-tela-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl text-center mb-6">
          Массаж тела в&nbsp;Санкт-Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl text-center max-w-2xl mx-auto mb-4">
          Процедуры для снятия напряжения, работы с отёками, восстановления после нагрузок и улучшения общего самочувствия. Подбираем методику под ваш запрос.
        </motion.p>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Кому подходит массаж тела</h2>
          <p className="text-muted-foreground mb-6">Процедура рекомендована, если вы:</p>
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

    {/* Что даёт */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Что даёт массаж тела</h2>
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

    {/* Виды массажа */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Виды массажа</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">ШВЗ + спина</h3>
              <p className="text-muted-foreground text-sm">Классический массаж шейно-воротниковой зоны и спины. Снимает напряжение, улучшает кровообращение и помогает при головных болях.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Лимфодренажный массаж тела</h3>
              <p className="text-muted-foreground text-sm">Специальная техника для улучшения лимфооттока, снятия отёков и выведения лишней жидкости из организма.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Медицинский / лечебный массаж</h3>
              <p className="text-muted-foreground text-sm">Глубокая проработка мышц и тканей. Помогает при болях в спине, мышечных зажимах и восстановлении после травм.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Как проходит */}
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

    {/* Противопоказания */}
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

    {/* CTA */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeUp}>
          <h2 className="font-heading text-2xl mb-4">Запишитесь на массаж тела</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Подберём вид массажа под ваш запрос — снятие напряжения, лимфодренаж или глубокая проработка мышц.
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

    <NextStep currentPath="/massazh-tela-spb" />
    <RelatedServices currentPath="/massazh-tela-spb" />
    <CTASection />
  </Layout>
);

export default MassazhTelaSpb;
