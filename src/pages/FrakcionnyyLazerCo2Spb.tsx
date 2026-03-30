import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertTriangle, Sparkles, Target, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  { name: "Лицо", price: "от 9 900 ₽" },
  { name: "Шея", price: "от 7 900 ₽" },
  { name: "Декольте", price: "от 7 900 ₽" },
  { name: "Кисти рук", price: "от 5 900 ₽" },
  { name: "Щёки", price: "от 6 900 ₽" },
  { name: "Рубцы / растяжки", price: "от 4 900 ₽" },
];

const benefits = [
  "Разглаживание морщин и заломов",
  "Устранение рубцов, постакне и растяжек",
  "Улучшение текстуры и плотности кожи",
  "Сужение пор и выравнивание рельефа",
  "Стимуляция глубокой выработки коллагена",
  "Выраженный лифтинг-эффект",
];

const forWhom = [
  "Морщины и потеря упругости кожи",
  "Рубцы, шрамы и постакне",
  "Растяжки на теле",
  "Неровный рельеф и расширенные поры",
  "Пигментация и фотостарение",
];

const contraindications = [
  "Беременность и период лактации",
  "Острые воспалительные процессы на коже",
  "Онкологические заболевания",
  "Склонность к келоидным рубцам",
  "Приём ретиноидов (менее 6 месяцев)",
  "Сахарный диабет в стадии декомпенсации",
];

const steps = [
  { step: "01", title: "Консультация", desc: "Осмотр кожи, определение зон и глубины воздействия" },
  { step: "02", title: "Анестезия", desc: "Нанесение обезболивающего крема за 30–40 минут до процедуры" },
  { step: "03", title: "Процедура", desc: "Фракционная обработка лазером CO₂ по выбранным зонам" },
  { step: "04", title: "Завершение", desc: "Нанесение восстанавливающего средства и рекомендации по уходу" },
];

const recovery = [
  "Покраснение и отёчность — 3–5 дней",
  "Микрокорочки — 5–7 дней, сходят самостоятельно",
  "Полное восстановление — 10–14 дней",
  "Обязательно использование SPF 50+ на весь период",
  "Исключить сауну, бассейн и активный спорт на 2 недели",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Фракционный лазер CO2 в Санкт-Петербурге",
  description: "Фракционный лазер CO2: омоложение кожи, устранение морщин, рубцов и растяжек. Премиальная лазерная процедура с выраженным эффектом.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
  offers: prices.map((p) => ({
    "@type": "Offer",
    name: p.name,
    priceCurrency: "RUB",
  })),
};

const FrakcionnyyLazerCo2Spb = () => (
  <Layout>
    <Helmet>
      <title>Фракционный лазер CO2 в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Фракционный лазер CO2 в Санкт-Петербурге: омоложение кожи, устранение морщин, рубцов и растяжек. Премиальная лазерная процедура с выраженным эффектом." />
      <meta name="keywords" content="фракционный лазер co2 спб, лазерное омоложение лица спб, co2 лазер спб, убрать рубцы лазером спб, лечение постакне спб, лазер от морщин спб, лазерная шлифовка кожи спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/frakcionnyy-lazer-co2-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="text-center max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl mb-6">Фракционный лазер CO₂ в&nbsp;Санкт-Петербурге</h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Глубокое обновление кожи, направленное на устранение морщин, рубцов, постакне и растяжек, а&nbsp;также улучшение текстуры и плотности кожи.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Требуется предварительная консультация специалиста</p>
        </motion.div>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="py-16 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-primary" size={28} />
            <h2 className="font-heading text-3xl">Кому подходит</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {forWhom.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
                <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Что даёт */}
    <section className="py-16">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-primary" size={28} />
            <h2 className="font-heading text-3xl">Что даёт процедура</h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 bg-card rounded-lg p-5 border border-border">
                <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Как проходит */}
    <section className="py-16 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Target className="text-primary" size={28} />
            <h2 className="font-heading text-3xl">Как проходит процедура</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-card rounded-xl p-6 border border-border text-center">
                <span className="text-3xl font-heading text-primary">{s.step}</span>
                <h3 className="font-heading text-lg mt-3 mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Восстановление */}
    <section className="py-16">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-primary" size={28} />
            <h2 className="font-heading text-3xl">Восстановление после процедуры</h2>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border max-w-2xl">
            <ul className="space-y-4">
              {recovery.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Противопоказания */}
    <section className="py-16 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="text-primary" size={28} />
            <h2 className="font-heading text-3xl">Противопоказания</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {contraindications.map((c) => (
              <li key={c} className="flex items-start gap-3 text-muted-foreground">
                <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Цены */}
    <section className="py-16">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeUp}>
          <h2 className="font-heading text-3xl text-center mb-10">Цены на фракционный лазер CO₂</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {prices.map((p) => (
              <div key={p.name} className="flex items-center justify-between bg-card rounded-xl p-5 border border-border">
                <span className="font-medium">{p.name}</span>
                <span className="font-heading text-xl text-primary">{p.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <RelatedServices currentPath="/frakcionnyy-lazer-co2-spb" />
    <CTASection />
  </Layout>
);

export default FrakcionnyyLazerCo2Spb;
