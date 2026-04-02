import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X } from "lucide-react";
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
  {
    name: "Пилинг",
    price: "3 700 ₽",
    priceValue: 3700,
    tiers: [
      { count: 3, total: 10545 },
      { count: 5, total: 16650 },
    ],
    desc: "Карбоновый, миндальный, Джесснера — подбираем тип под задачу",
  },
];

const suitableFor = [
  "Тусклый, неровный цвет лица",
  "Расширенные поры и повышенная жирность",
  "Пигментные пятна и постакне",
  "Мелкие морщины и снижение тонуса",
  "Неровный рельеф и текстура кожи",
  "Подготовка к курсу омолаживающих процедур",
];

const benefits = [
  "Обновление и выравнивание текстуры кожи",
  "Устранение пигментации и постакне",
  "Сужение пор и уменьшение жирности",
  "Стимуляция выработки коллагена",
  "Улучшение цвета лица и сияние кожи",
  "Подготовка кожи к другим процедурам",
];

const contraindications = [
  "Активные воспаления и герпес в зоне обработки",
  "Беременность и период лактации",
  "Онкологические заболевания",
  "Свежий загар и солнечные ожоги",
  "Аллергия на компоненты пилинга",
  "Приём ретиноидов и фотосенсибилизирующих препаратов",
];

const steps = [
  { title: "Консультация", desc: "Оценка состояния кожи и подбор оптимального вида пилинга" },
  { title: "Очищение", desc: "Демакияж и подготовка кожи к процедуре" },
  { title: "Нанесение состава", desc: "Аппликация пилингового состава с контролем экспозиции" },
  { title: "Нейтрализация", desc: "Снятие состава и нейтрализация кислот" },
  { title: "Завершающий уход", desc: "Нанесение успокаивающей маски и SPF-защиты" },
];

const PilingiSpb = () => (
  <Layout>
    <Helmet>
      <title>Пилинги в Санкт-Петербурге — карбоновый, миндальный, Джесснера | АРТ Косметология</title>
      <meta name="description" content="Пилинги в СПб: карбоновый, миндальный и Джесснера для обновления кожи и выравнивания тона. От 3 700 ₽. Запись онлайн." />
      <meta name="keywords" content="пилинг спб, карбоновый пилинг спб, миндальный пилинг спб, пилинг джесснера спб, пилинг цена спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/pilingi-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Пилинги в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "3700", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Пилинги в&nbsp;Санкт&#8209;Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Обновление кожи, выравнивание тона и улучшение текстуры. Карбоновый, миндальный, Джесснера — подбираем под вашу задачу
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 3&nbsp;700&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking"><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Записаться онлайн <ChevronRight size={16} className="ml-1" /></Button></Link>
          <a href="#prices"><Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">Смотреть цены</Button></a>
        </motion.div>
      </div>
    </section>

    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-6">Что такое пилинг?</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center leading-relaxed">
          Процедура контролируемого обновления кожи с помощью специальных составов. Удаляет ороговевший слой, стимулирует регенерацию и выравнивает тон лица.
        </p>
      </div>
    </section>

    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Кому подходит</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {suitableFor.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <div id="prices"><ServicePricingTiers title="Цены на пилинги" prices={prices} /></div>

    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что даёт пилинг</h2>
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
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как проходит процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
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
    <NextStep currentPath="/pilingi-spb" />
    <RelatedServices currentPath="/pilingi-spb" />
    <CTASection />
  </Layout>
);

export default PilingiSpb;
