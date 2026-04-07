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
  { name: "BBL лицо", price: "7 400 ₽" },
  { name: "BBL шея / декольте", price: "6 000 ₽" },
  { name: "BBL кисти рук", price: "4 700 ₽" },
  { name: "BBL лицо + шея + декольте", price: "14 000 ₽" },
];

const suitableFor = [
  "Пигментные пятна и неровный тон кожи",
  "Сосудистые звёздочки и купероз",
  "Возрастные изменения и фотостарение",
  "Тусклая кожа, потерявшая сияние",
  "Расширенные поры и неровная текстура",
];

const benefits = [
  "Выравнивание тона и устранение пигментации",
  "Уменьшение сосудистых звёздочек и купероза",
  "Стимуляция выработки коллагена",
  "Улучшение текстуры и упругости кожи",
  "Сужение пор и общее омоложение",
  "Минимальный период восстановления",
];

const contraindications = [
  "Беременность и период лактации",
  "Свежий загар и автозагар",
  "Онкологические заболевания",
  "Приём фотосенсибилизирующих препаратов",
  "Острые воспалительные процессы в зоне обработки",
  "Эпилепсия",
];

const steps = [
  { title: "Консультация", desc: "Осмотр кожи, определение зон обработки и подбор параметров" },
  { title: "Подготовка", desc: "Очищение кожи, нанесение специального геля" },
  { title: "Процедура", desc: "Воздействие широкополосным светом BBL по выбранным зонам" },
  { title: "Завершение", desc: "Нанесение успокаивающего средства и рекомендации по уходу" },
];

const FotoomolozhenieBblSpb = () => (
  <Layout>
    <Helmet>
      <title>Фотоомоложение BBL в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Фотоомоложение BBL в СПб: лицо, шея, декольте и кисти рук. Выравнивание тона, устранение пигментации. От 4 700 ₽. Запись онлайн." />
      <meta name="keywords" content="фотоомоложение bbl спб, bbl лицо спб, bbl шея декольте спб, убрать пигментацию спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/fotoomolozhenie-bbl-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Фотоомоложение BBL в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: prices.map(p => ({ "@type": "Offer", name: p.name, price: p.price.replace(/\s/g, "").replace("₽", ""), priceCurrency: "RUB" })),
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Фотоомоложение BBL
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Технология широкополосного света для омоложения кожи, выравнивания тона и устранения пигментации
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 4&nbsp;700&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={`/booking?service=Фотоомоложение BBL (лицо)`}><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Записаться онлайн <ChevronRight size={16} className="ml-1" /></Button></Link>
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

    <div id="prices"><ServicePricingTiers title="Цены на фотоомоложение BBL" prices={prices} /></div>

    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что даёт процедура</h2>
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
    <NextStep currentPath="/fotoomolozhenie-bbl-spb" />
    <RelatedServices currentPath="/fotoomolozhenie-bbl-spb" />
    <CTASection />
  </Layout>
);

export default FotoomolozhenieBblSpb;
