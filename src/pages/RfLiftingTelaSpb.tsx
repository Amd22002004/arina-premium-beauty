import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Zap, X, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServicePricingTiers from "@/components/ServicePricingTiers";
import CTASection from "@/components/CTASection";
import ConsultationCapture from "@/components/ConsultationCapture";
import rfLiftingPhoto from "@/assets/rf-lifting-body.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  {
    name: "RF-лифтинг тела",
    price: "2 800 ₽",
    priceValue: 2800,
    tiers: [
      { count: 5, total: 13500 },
      { count: 10, total: 25000 },
    ],
    desc: "Прогрев тканей + миостимуляция для подтяжки и тонуса тела",
  },
];

const suitableFor = [
  "Кожа потеряла упругость после похудения или родов",
  "Хотите подтянуть контуры без операции",
  "Нужен тонус мышц без тренажёрного зала",
  "Хотите уменьшить дряблость и «провисание» кожи",
  "Ищете процедуру для профилактики возрастных изменений тела",
];

const benefits = [
  "Подтяжка и уплотнение кожи за счёт прогрева тканей",
  "Укрепление мышечного каркаса и формирование рельефа",
  "Уменьшение жировой прослойки в проблемных зонах",
  "Стимуляция выработки коллагена и эластина",
  "Улучшение микроциркуляции и лимфооттока",
  "Лифтинг-эффект уже после первых сеансов",
];

const contraindications = [
  "Беременность и лактация",
  "Кардиостимуляторы и электронные импланты",
  "Онкологические заболевания",
  "Металлические импланты в зоне воздействия",
  "Эпилепсия",
  "Острые воспалительные процессы",
];

const steps = [
  { title: "Консультация", desc: "Оценка состояния кожи, определение зон и целей" },
  { title: "Подготовка", desc: "Очищение и нанесение контактного геля" },
  { title: "Процедура", desc: "RF-прогрев + миостимуляция по проблемным зонам (40–60 мин)" },
  { title: "Результат", desc: "Ощущение подтянутости сразу после сеанса. Рекомендации по курсу" },
];

const difference = [
  { label: "Горячий вакуум", desc: "Горячий вакуум нацелен на жиросжигание и уменьшение объёмов. RF-лифтинг — на подтяжку кожи и укрепление мышц. Разные задачи." },
  { label: "Вакуумный массаж", desc: "Вакуумный массаж борется с целлюлитом механически. RF-лифтинг работает на клеточном уровне — стимулирует коллаген и уплотняет кожу." },
  { label: "EMS-тренировка", desc: "EMS — изолированная миостимуляция. RF-лифтинг добавляет тепловой компонент для одновременной подтяжки кожи и работы с мышцами." },
];

const RfLiftingTelaSpb = () => (
  <Layout>
    <Helmet>
      <title>RF-лифтинг тела в СПб — подтяжка кожи и миостимуляция | АРТ Косметология</title>
      <meta name="description" content="RF-лифтинг тела в Санкт-Петербурге: аппаратная подтяжка кожи, миостимуляция мышц, формирование контуров тела. Лифтинг-эффект после первого сеанса. От 2 800 ₽." />
      <meta name="keywords" content="rf лифтинг тела спб, миостимуляция тела спб, подтяжка кожи тела спб, аппаратный лифтинг тела" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/rf-lifting-tela-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "RF-лифтинг тела в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "2800", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-5">
              RF-лифтинг тела — подтяжка кожи и тонус мышц
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Аппаратный прогрев тканей и миостимуляция для формирования контуров тела, уплотнения кожи и укрепления мышечного каркаса
            </p>
            <p className="text-primary font-heading text-2xl mb-6">от 2&nbsp;800&nbsp;₽</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking?service=RF-лифтинг тела">
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
            <img src={rfLiftingPhoto} alt="RF-лифтинг тела — аппаратная подтяжка и миостимуляция" className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Кому подходит RF-лифтинг тела</h2>
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
    <div id="prices"><ServicePricingTiers title="Стоимость RF-лифтинга тела" prices={prices} /></div>

    {/* Benefits */}
    <section className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что даёт процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div key={b} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
              <Zap size={18} className="text-primary mt-0.5 flex-shrink-0" /><span>{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как проходит процедура</h2>
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
          <Link to="/goryachiy-vakuum-spb">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
              Горячий вакуум <ArrowRight size={14} />
            </Button>
          </Link>
          <Link to="/vakuumnyj-massazh-spb">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
              Вакуумный массаж <ArrowRight size={14} />
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
    <CTASection title="Готовы подтянуть тело?" subtitle="Запишитесь на RF-лифтинг — лифтинг-эффект заметен уже после первого сеанса" />
  </Layout>
);

export default RfLiftingTelaSpb;
