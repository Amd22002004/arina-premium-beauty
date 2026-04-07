import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Flame, X, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServicePricingTiers from "@/components/ServicePricingTiers";
import CTASection from "@/components/CTASection";
import ConsultationCapture from "@/components/ConsultationCapture";
import hotVacuumPhoto from "@/assets/hot-vacuum-result.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  {
    name: "Горячий вакуум",
    price: "2 800 ₽",
    priceValue: 3500,
    tiers: [
      { count: 5, total: 16000 },
      { count: 10, total: 30000 },
    ],
    desc: "Термовакуумная процедура для жиросжигания и уменьшения объёмов",
  },
];

const suitableFor = [
  "Хотите убрать жировые отложения на животе, боках или бёдрах",
  "Нужно уменьшить объёмы без хирургии и липосакции",
  "Боретесь с выраженным целлюлитом",
  "Хотите подтянуть кожу после похудения",
  "Ищете интенсивную процедуру с быстрым результатом",
];

const benefits = [
  "Разрушение жировых отложений за счёт термоэффекта",
  "Уменьшение объёмов уже после первого сеанса",
  "Выраженный антицеллюлитный результат",
  "Подтяжка и повышение тонуса кожи",
  "Усиление лимфодренажа и метаболизма",
  "Безболезненность и комфорт во время процедуры",
];

const contraindications = [
  "Беременность и лактация",
  "Онкологические заболевания",
  "Острые воспалительные процессы",
  "Металлические импланты в зоне воздействия",
  "Тяжёлые формы варикозной болезни",
  "Нарушения свёртываемости крови",
];

const steps = [
  { title: "Консультация", desc: "Оценка проблемных зон, определение целей и количества процедур" },
  { title: "Подготовка", desc: "Очищение кожи и нанесение проводящего средства" },
  { title: "Процедура", desc: "Термовакуумное воздействие на проблемные зоны (30–45 мин)" },
  { title: "Результат", desc: "Замеры и рекомендации по питьевому режиму и активности" },
];

const difference = [
  { label: "Вакуумный массаж", desc: "Механическая проработка тканей без нагрева. Горячий вакуум дополнительно прогревает ткани, усиливая расщепление жира." },
  { label: "RF-лифтинг тела", desc: "RF работает на подтяжку и тонус кожи. Горячий вакуум нацелен на жиросжигание и уменьшение объёмов." },
  { label: "LPG-массаж", desc: "LPG — роликово-вакуумное воздействие. Горячий вакуум добавляет тепловой компонент для более интенсивного результата." },
];

const GoryachiyVakuumSpb = () => (
  <Layout>
    <Helmet>
      <title>Горячий вакуум в СПб — жиросжигание и коррекция фигуры | АРТ Косметология</title>
      <meta name="description" content="Горячий вакуум в Санкт-Петербурге: термовакуумная процедура для жиросжигания, уменьшения объёмов и борьбы с целлюлитом. Результат после первой процедуры. От 2 800 ₽." />
      <meta name="keywords" content="горячий вакуум спб, термовакуум спб, жиросжигание спб, уменьшение объёмов спб, антицеллюлитные процедуры" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/goryachiy-vakuum-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Горячий вакуум в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "3500", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-5">
              Горячий вакуум — интенсивное жиросжигание без хирургии
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Термовакуумная аппаратная процедура для расщепления жировых отложений, уменьшения объёмов и борьбы с целлюлитом
            </p>
            <p className="text-primary font-heading text-2xl mb-6">от 2&nbsp;800&nbsp;₽</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking?service=Горячий вакуум">
                <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl">
                  Записаться <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
              <a href="#prices">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                  Смотреть цены
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <img src={hotVacuumPhoto} alt="Горячий вакуум — аппаратная процедура жиросжигания" className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Кому подходит горячий вакуум</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {suitableFor.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" /><span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Prices */}
    <div id="prices"><ServicePricingTiers title="Стоимость горячего вакуума" prices={prices} /></div>

    {/* What it does */}
    <section className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что даёт процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div key={b} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
              <Flame size={18} className="text-primary mt-0.5 flex-shrink-0" /><span>{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Video */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-8">Как проходит процедура</h2>
        <video controls playsInline preload="metadata" className="w-full rounded-2xl shadow-lg mb-8"
          aria-label="Видео процедуры горячего вакуума">
          <source src="/videos/hot-vacuum.mp4" type="video/mp4" />
        </video>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center">
              <div className="w-10 h-10 rounded-full gold-gradient text-primary-foreground flex items-center justify-center font-heading mx-auto mb-3">{i + 1}</div>
              <h3 className="font-heading text-base mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Чем отличается */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Чем отличается от других процедур</h2>
        <div className="space-y-4">
          {difference.map((d, i) => (
            <motion.div key={d.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-background rounded-xl border border-border p-5">
              <h3 className="font-heading text-lg mb-2">{d.label}</h3>
              <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Link to="/vakuumnyj-massazh-spb">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
              Вакуумный массаж <ArrowRight size={14} />
            </Button>
          </Link>
          <Link to="/rf-lifting-tela-spb">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
              RF-лифтинг тела <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Contraindications */}
    <section className="py-8 md:py-10">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-6">Противопоказания</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {contraindications.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">
              <X size={14} className="text-destructive flex-shrink-0" />{c}
            </span>
          ))}
        </div>
      </div>
    </section>

    <ConsultationCapture />
    <CTASection title="Готовы уменьшить объёмы?" subtitle="Запишитесь на горячий вакуум — результат заметен уже после первой процедуры" />
  </Layout>
);

export default GoryachiyVakuumSpb;
