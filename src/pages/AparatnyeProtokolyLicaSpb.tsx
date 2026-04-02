import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Sparkles, UserCheck, ShieldCheck, ListChecks, Cpu } from "lucide-react";
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
    name: "Аппаратная процедура лица / шеи / декольте",
    price: "4 999 ₽",
    priceValue: 4999,
    tiers: [
      { count: 5, total: 22000 },
      { count: 10, total: 42000 },
    ],
    desc: "INDIBA, RF-лифтинг, БМС, холодная плазма — подбираем аппарат под задачу",
  },
];

const benefits = [
  "Выраженный лифтинг без хирургического вмешательства",
  "Улучшение качества и плотности кожи",
  "Разглаживание морщин и выравнивание рельефа",
  "Подтяжка контура и овала лица",
  "Стимуляция выработки коллагена и эластина",
  "Накопительный эффект с каждой процедурой",
];

const suitableFor = [
  "Снижение тонуса и упругости кожи",
  "Нечёткий овал лица и брыли",
  "Морщины и заломы",
  "Потеря объёмов и «уставшее» лицо",
  "Тусклый цвет и неровная текстура кожи",
  "Подготовка к курсу комплексного омоложения",
];

const contraindications = [
  "Онкологические заболевания",
  "Беременность и период лактации",
  "Металлические импланты в зоне воздействия",
  "Острые воспалительные процессы на коже",
  "Нарушения свёртываемости крови",
  "Эпилепсия и кардиостимулятор",
];

const steps = [
  { step: "1", title: "Диагностика", desc: "Оценка состояния кожи, определение задач и выбор оптимального протокола" },
  { step: "2", title: "Подготовка", desc: "Очищение кожи и нанесение проводящих средств" },
  { step: "3", title: "Аппаратное воздействие", desc: "Работа аппаратом по выбранному протоколу с контролем параметров" },
  { step: "4", title: "Завершающий уход", desc: "Нанесение восстанавливающих средств и рекомендации по уходу" },
];

const AparatnyeProtokolyLicaSpb = () => (
  <Layout>
    <Helmet>
      <title>Аппаратные протоколы лица в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Аппаратные протоколы лица в Санкт-Петербурге: INDIBA, РФ лифтинг 3D, микроигольчатый RF, холодная плазма и БМС для омоложения, лифтинга и улучшения качества кожи." />
      <meta name="keywords" content="аппаратные протоколы лица спб, аппаратная косметология лица спб, микроигольчатый rf спб, индиба лицо спб, rf лифтинг 3d спб, холодная плазма спб, бмс лица спб, омоложение лица спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/aparatnye-protokoly-lica-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Аппаратные протоколы лица в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        description: "INDIBA, РФ лифтинг 3D, микроигольчатый RF, холодная плазма и БМС для омоложения, лифтинга и улучшения качества кожи.",
        areaServed: { "@type": "City", name: "Санкт-Петербург" },
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Аппаратные протоколы лица", itemListElement: prices.map(p => ({ "@type": "Offer", name: p.name, price: p.price.replace(/[^\d]/g, ""), priceCurrency: "RUB" })) },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-16 md:py-24">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center justify-center gap-3 mb-6">
          <Cpu className="text-primary" size={28} />
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Премиальные технологии</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl text-center mb-6">
          Аппаратные протоколы лица в&nbsp;Санкт&#8209;Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
          className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
          Современные технологии для омоложения, лифтинга, улучшения качества кожи и деликатной коррекции возрастных изменений.
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
            <h2 className="font-heading text-2xl">Кому подходят аппаратные протоколы</h2>
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
            <h2 className="font-heading text-2xl">Что дают процедуры</h2>
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

    {/* Виды процедур */}
    <section className="pb-16">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-8">Виды аппаратных процедур</h2>
        <div className="grid gap-5">
          {prices.map((p, i) => (
            <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading text-lg mb-1">{p.name}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
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

    <ConsultationCapture />
    <ServicePricingTiers title="Цены на аппаратные протоколы" prices={prices} />

    <NextStep currentPath="/aparatnye-protokoly-lica-spb" />
    <RelatedServices currentPath="/aparatnye-protokoly-lica-spb" />
    <CTASection />
  </Layout>
);

export default AparatnyeProtokolyLicaSpb;
