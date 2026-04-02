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
    name: "EMS / INDIBA / БМС",
    price: "3 500 ₽",
    priceValue: 3500,
    tiers: [
      { count: 5, total: 16000 },
      { count: 10, total: 30000 },
    ],
    desc: "EMS Body Sculpt, INDIBA, БМС — аппаратное моделирование тела",
  },
];

const suitableFor = [
  "Желание скорректировать фигуру без операций",
  "Сниженный тонус мышц и дряблость кожи",
  "Целлюлит и локальные жировые отложения",
  "Восстановление после родов",
  "Малоподвижный образ жизни",
];

const benefits = [
  "Коррекция фигуры и уменьшение объёмов",
  "Повышение тонуса и укрепление мышц",
  "Улучшение лимфотока и микроциркуляции",
  "Уменьшение проявлений целлюлита",
  "Подтяжка кожи без операций",
  "Восстановление после нагрузок и травм",
];

const contraindications = [
  "Беременность и период лактации",
  "Онкологические заболевания",
  "Металлические импланты в зоне воздействия",
  "Кардиостимулятор",
  "Острые воспалительные процессы",
  "Эпилепсия",
];

const steps = [
  { title: "Консультация", desc: "Оценка состояния тела, определение зон и подбор программы" },
  { title: "Подготовка", desc: "Очищение зоны воздействия, нанесение контактного средства" },
  { title: "Процедура", desc: "Аппаратное воздействие на выбранные зоны по протоколу" },
  { title: "Завершение", desc: "Рекомендации по уходу и планирование курса" },
];

const ApparatnyeProtokolyTelaSpb = () => (
  <Layout>
    <Helmet>
      <title>Аппаратные протоколы тела в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Аппаратные протоколы тела в СПб: EMS, INDIBA, БМС для коррекции фигуры и тонуса. От 3 500 ₽. Запись онлайн." />
      <meta name="keywords" content="аппаратные процедуры для тела спб, ems body sculpt спб, индиба тело спб, бмс мышцы спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/apparatnye-protokoly-tela-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Аппаратные протоколы тела в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "3500", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Аппаратные протоколы тела
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          EMS, INDIBA, БМС — современные технологии для коррекции фигуры, повышения тонуса мышц и моделирования тела
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 3&nbsp;500&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking"><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Записаться онлайн <ChevronRight size={16} className="ml-1" /></Button></Link>
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

    <div id="prices"><ServicePricingTiers title="Цены на аппаратные протоколы тела" prices={prices} /></div>

    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что дают процедуры</h2>
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
    <NextStep currentPath="/apparatnye-protokoly-tela-spb" />
    <RelatedServices currentPath="/apparatnye-protokoly-tela-spb" />
    <CTASection />
  </Layout>
);

export default ApparatnyeProtokolyTelaSpb;
