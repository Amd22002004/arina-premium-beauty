import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X, Star } from "lucide-react";
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
  { name: "ШВЗ (30 мин)", price: "1 600 ₽", priceValue: 1600, tiers: [{ count: 5, total: 11250 }, { count: 10, total: 21250 }] },
  { name: "Спина (30 мин)", price: "1 600 ₽", priceValue: 1600, tiers: [{ count: 5, total: 11250 }, { count: 10, total: 21250 }] },
  { name: "Глубокий массаж (ШВЗ + спина)", price: "2 800 ₽", priceValue: 2800, tiers: [{ count: 5, total: 15750 }, { count: 10, total: 29750 }] },
];

const suitableFor = [
  "Чувствуете напряжение в спине, шее и плечах",
  "Беспокоят отёки и тяжесть в теле",
  "Нужно восстановиться после нагрузок или стресса",
  "Ведёте сидячий образ жизни",
  "Хотите улучшить общее самочувствие и качество сна",
];

const benefits = [
  "Снятие мышечного напряжения и зажимов",
  "Улучшение лимфооттока и уменьшение отёков",
  "Восстановление после физических нагрузок",
  "Улучшение кровообращения и питания тканей",
  "Нормализация сна и общего самочувствия",
  "Профилактика болей в спине и шее",
];

const contraindications = [
  "Острые воспалительные процессы",
  "Онкологические заболевания",
  "Повышенная температура тела",
  "Кожные заболевания в зоне воздействия",
  "Тромбофлебит и тяжёлые формы варикоза",
  "Беременность (для некоторых видов массажа)",
];

const types = [
  { title: "ШВЗ + спина", desc: "Классический массаж шейно-воротниковой зоны и спины. Снимает напряжение, улучшает кровообращение." },
  { title: "Лимфодренажный массаж тела", desc: "Специальная техника для улучшения лимфооттока, снятия отёков и выведения лишней жидкости." },
  { title: "Медицинский / восстановительный массаж", desc: "Глубокая проработка мышц и тканей. Помогает при болях в спине и восстановлении после травм." },
];

const steps = [
  { title: "Консультация", desc: "Определяем проблемные зоны и подбираем вид массажа" },
  { title: "Подготовка", desc: "Разогрев тканей и подготовка зоны воздействия" },
  { title: "Массаж", desc: "Работа по выбранной методике (30–60 мин)" },
  { title: "Завершение", desc: "Рекомендации по режиму и дальнейшему курсу" },
];

const MassazhTelaSpb = () => (
  <Layout>
    <Helmet>
      <title>Массаж тела в Санкт-Петербурге — восстановительный, лимфодренажный | АРТ Косметология</title>
      <meta name="description" content="Массаж тела в СПб: восстановительный, лимфодренажный, спина и ШВЗ. От 1 600 ₽. Снятие напряжения и улучшение самочувствия. Запись онлайн." />
      <meta name="keywords" content="массаж тела спб, восстановительный массаж спб, массаж спины спб, массаж швз спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/massazh-tela-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Массаж тела в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "1600", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Массаж тела в&nbsp;Санкт&#8209;Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Снятие напряжения, работа с отёками, восстановление после нагрузок и улучшение самочувствия
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 1&nbsp;600&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={`/booking?service=Массаж спины (30 мин)`}><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Записаться онлайн <ChevronRight size={16} className="ml-1" /></Button></Link>
          <a href="#prices"><Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">Смотреть цены</Button></a>
        </motion.div>
      </div>
    </section>

    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Кому подходит</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {suitableFor.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" /><span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <div id="prices"><ServicePricingTiers title="Цены на массаж тела" prices={prices} /></div>

    {/* Акция */}
    <section className="py-8 md:py-10">
      <div className="container-narrow px-4 md:px-8">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl gold-gradient p-8 md:p-12 text-center text-primary-foreground before:absolute before:inset-0 before:bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%)] before:animate-[shimmer_3s_ease-in-out_infinite] before:-translate-x-full before:pointer-events-none">
          <Star size={36} className="mx-auto mb-3 opacity-80 relative z-10" />
          <h2 className="font-heading text-2xl md:text-3xl mb-2 relative z-10">Первое посещение — скидка 30%</h2>
          <p className="text-base opacity-90 mb-5 max-w-xl mx-auto relative z-10">На массаж тела для новых клиентов</p>
          <Link to={`/booking?service=Массаж спины (30 мин)`} className="relative z-10">
            <Button size="lg" className="bg-white text-primary font-semibold px-10 border-0 shadow-lg hover:shadow-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300">Записаться со скидкой</Button>
          </Link>
        </motion.div>
      </div>
    </section>

    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что даёт массаж тела</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div key={b} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
              <Sparkles size={18} className="text-primary mt-0.5 flex-shrink-0" /><span>{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Виды массажа</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {types.map((t, i) => (
            <motion.div key={t.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-heading text-xl mb-3">{t.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как проходит процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="text-center">
              <div className="w-12 h-12 rounded-full gold-gradient text-primary-foreground flex items-center justify-center text-lg font-heading mx-auto mb-4">{i + 1}</div>
              <h3 className="font-heading text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-8 md:py-10 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-6">Противопоказания</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {contraindications.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm text-muted-foreground">
              <X size={14} className="text-destructive flex-shrink-0" />{c}
            </span>
          ))}
        </div>
      </div>
    </section>

    <ConsultationCapture />
    <NextStep currentPath="/massazh-tela-spb" />
    <RelatedServices currentPath="/massazh-tela-spb" />
    <CTASection />
  </Layout>
);

export default MassazhTelaSpb;
