import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Sparkles, UserCheck, ShieldCheck, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  { name: "Карбоновый пилинг", price: "3 990 ₽", desc: "Лазерный пилинг с карбоновой маской — глубокое очищение, сужение пор, выравнивание тона" },
  { name: "Пилинг миндальной кислотой", price: "3 290 ₽", desc: "Мягкий пилинг для чувствительной кожи — обновление без агрессии" },
  { name: "Пилинг Джесснера", price: "3 990 ₽", desc: "Многокомпонентный пилинг для борьбы с пигментацией, акне и неровной текстурой" },
];

const benefits = [
  "Обновление и выравнивание текстуры кожи",
  "Устранение пигментации и постакне",
  "Сужение пор и уменьшение жирности",
  "Стимуляция выработки коллагена",
  "Улучшение цвета лица и сияние кожи",
  "Подготовка кожи к другим процедурам",
];

const suitableFor = [
  "Тусклый, неровный цвет лица",
  "Расширенные поры и повышенная жирность",
  "Пигментные пятна и постакне",
  "Мелкие морщины и снижение тонуса",
  "Неровный рельеф и текстура кожи",
  "Подготовка к курсу омолаживающих процедур",
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
  { step: "1", title: "Консультация", desc: "Оценка состояния кожи и подбор оптимального вида пилинга" },
  { step: "2", title: "Очищение", desc: "Демакияж и подготовка кожи к процедуре" },
  { step: "3", title: "Нанесение состава", desc: "Аппликация пилингового состава с контролем экспозиции" },
  { step: "4", title: "Нейтрализация", desc: "Снятие состава и нейтрализация кислот" },
  { step: "5", title: "Завершающий уход", desc: "Нанесение успокаивающей маски и SPF-защиты" },
];

const PilingiSpb = () => (
  <Layout>
    <Helmet>
      <title>Пилинги в Санкт-Петербурге — карбоновый, миндальный, Джесснера | АРТ Косметология</title>
      <meta name="description" content="Пилинги в Санкт-Петербурге: карбоновый, миндальный и Джесснера для обновления кожи, выравнивания тона и улучшения текстуры." />
      <meta name="keywords" content="пилинг спб, карбоновый пилинг спб, миндальный пилинг спб, пилинг джесснера спб, обновление кожи лица, выравнивание тона кожи, пилинг цена спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/pilingi-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Пилинги в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        description: "Карбоновый, миндальный и пилинг Джесснера для обновления кожи, выравнивания тона и улучшения текстуры.",
        areaServed: { "@type": "City", name: "Санкт-Петербург" },
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Пилинги", itemListElement: prices.map(p => ({ "@type": "Offer", name: p.name, price: p.price.replace(/\s/g, "").replace("₽", ""), priceCurrency: "RUB" })) },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-16 md:py-24">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl text-center mb-6">
          Пилинги в Санкт-Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-4">
          Пилинги — это процедуры для обновления кожи, выравнивания тона, улучшения текстуры и деликатной коррекции эстетических несовершенств.
        </motion.p>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="pb-16">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-5">
            <UserCheck className="text-primary" size={24} />
            <h2 className="font-heading text-2xl">Кому подходят пилинги</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {suitableFor.map(item => (
              <li key={item} className="flex items-start gap-2 text-foreground/80">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Что даёт */}
    <section className="pb-16">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="bg-card rounded-xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-5">
            <Sparkles className="text-primary" size={24} />
            <h2 className="font-heading text-2xl">Что даёт процедура</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map(item => (
              <li key={item} className="flex items-start gap-2 text-foreground/80">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Виды пилингов */}
    <section className="pb-16">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-8">Виды пилингов</h2>
        <div className="grid gap-5">
          {prices.map((p, i) => (
            <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-6 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-lg mb-1">{p.name}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
              <span className="text-xl font-heading text-primary whitespace-nowrap">{p.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Как проходит */}
    <section className="pb-16">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <ListChecks className="text-primary" size={24} />
            <h2 className="font-heading text-2xl">Как проходит процедура</h2>
          </div>
          <div className="space-y-4">
            {steps.map(s => (
              <div key={s.step} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading text-sm flex-shrink-0">{s.step}</span>
                <div>
                  <p className="font-medium">{s.title}</p>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Противопоказания */}
    <section className="pb-16">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="text-primary" size={24} />
            <h2 className="font-heading text-2xl">Противопоказания</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contraindications.map(item => (
              <li key={item} className="flex items-start gap-2 text-foreground/80">
                <ChevronRight size={14} className="text-primary mt-1 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Цены */}
    <section className="pb-16">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-8">Цены на пилинги</h2>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {prices.map((p, i) => (
            <div key={p.name} className={`flex justify-between items-center p-5 ${i < prices.length - 1 ? "border-b border-border" : ""}`}>
              <span className="font-medium">{p.name}</span>
              <span className="font-heading text-primary text-lg">{p.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-10 border border-border">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">Запишитесь на пилинг</h2>
          <p className="text-muted-foreground mb-6">Подберём оптимальный вид пилинга для вашей кожи и желаемого результата</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow w-full sm:w-auto">
                Записаться онлайн
              </Button>
            </Link>
            <a href="https://t.me/ART_and_beauty_studio" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                Написать в Telegram
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    <RelatedServices currentPath="/pilingi-spb" />
    <CTASection />
  </Layout>
);

export default PilingiSpb;
