import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServicePricingTiers from "@/components/ServicePricingTiers";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import NextStep from "@/components/NextStep";
import ConsultationCapture from "@/components/ConsultationCapture";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import rfResult1 from "@/assets/rf-result-1.webp";
import rfResult2 from "@/assets/rf-result-2.webp";
import rfResult3 from "@/assets/rf-result-3.webp";
import rfResult4 from "@/assets/rf-result-4.webp";
import rfResult5 from "@/assets/rf-result-5.webp";

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

const suitableFor = [
  "Снижение тонуса и упругости кожи",
  "Нечёткий овал лица и брыли",
  "Морщины и заломы",
  "Потеря объёмов и «уставшее» лицо",
  "Тусклый цвет и неровная текстура кожи",
  "Подготовка к курсу комплексного омоложения",
];

const benefits = [
  "Выраженный лифтинг без хирургического вмешательства",
  "Улучшение качества и плотности кожи",
  "Разглаживание морщин и выравнивание рельефа",
  "Подтяжка контура и овала лица",
  "Стимуляция выработки коллагена и эластина",
  "Накопительный эффект с каждой процедурой",
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
  { title: "Диагностика", desc: "Оценка состояния кожи и выбор оптимального протокола" },
  { title: "Подготовка", desc: "Очищение кожи и нанесение проводящих средств" },
  { title: "Аппаратное воздействие", desc: "Работа аппаратом по выбранному протоколу" },
  { title: "Завершающий уход", desc: "Нанесение восстанавливающих средств и рекомендации" },
];

const AparatnyeProtokolyLicaSpb = () => (
  <Layout>
    <Helmet>
      <title>Аппаратные протоколы лица в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Аппаратные протоколы лица в СПб: INDIBA, RF-лифтинг, БМС, холодная плазма. От 4 999 ₽. Запись онлайн." />
      <meta name="keywords" content="аппаратные протоколы лица спб, rf лифтинг спб, индиба лицо спб, бмс лица спб, омоложение лица спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/aparatnye-protokoly-lica-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Аппаратные протоколы лица в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "4999", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Аппаратные протоколы лица
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          INDIBA, RF&#8209;лифтинг, БМС, холодная плазма — современные технологии для омоложения и лифтинга без хирургии
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 4&nbsp;999&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={`/booking?service=Аппаратная процедура лица / шеи / декольте`}><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Записаться онлайн <ChevronRight size={16} className="ml-1" /></Button></Link>
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

    <div id="prices"><ServicePricingTiers title="Цены на аппаратные протоколы" prices={prices} /></div>

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
    <NextStep currentPath="/aparatnye-protokoly-lica-spb" />
    <RelatedServices currentPath="/aparatnye-protokoly-lica-spb" />
    <CTASection />
  </Layout>
);

export default AparatnyeProtokolyLicaSpb;
