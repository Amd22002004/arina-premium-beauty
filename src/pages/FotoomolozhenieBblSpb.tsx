import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertTriangle, Sparkles, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServicePricingTiers from "@/components/ServicePricingTiers";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import NextStep from "@/components/NextStep";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  { name: "BBL лицо", price: "9 900 ₽" },
  { name: "BBL шея / декольте", price: "7 900 ₽" },
  { name: "BBL кисти рук", price: "5 900 ₽" },
];

const benefits = [
  "Выравнивание тона и устранение пигментации",
  "Уменьшение сосудистых звёздочек и купероза",
  "Стимуляция выработки коллагена",
  "Улучшение текстуры и упругости кожи",
  "Сужение пор и общее омоложение",
  "Минимальный период восстановления",
];

const forWhom = [
  "Пигментные пятна и неровный тон кожи",
  "Сосудистые звёздочки и купероз",
  "Возрастные изменения и фотостарение",
  "Тусклая кожа, потерявшая сияние",
  "Расширенные поры и неровная текстура",
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
  { step: "01", title: "Консультация", desc: "Осмотр кожи, определение зон обработки и подбор параметров" },
  { step: "02", title: "Подготовка", desc: "Очищение кожи, нанесение специального геля для проводимости света" },
  { step: "03", title: "Процедура", desc: "Воздействие широкополосным светом BBL по выбранным зонам" },
  { step: "04", title: "Завершение", desc: "Нанесение успокаивающего средства и рекомендации по уходу" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Фотоомоложение BBL в Санкт-Петербурге",
  description: "Фотоомоложение BBL: лицо, шея/декольте и кисти рук. Процедура для омоложения, выравнивания тона кожи и устранения пигментации.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
  offers: prices.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.replace(/\s/g, "").replace("₽", ""),
    priceCurrency: "RUB",
  })),
};

const FotoomolozhenieBblSpb = () => (
  <Layout>
    <Helmet>
      <title>Фотоомоложение BBL в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Фотоомоложение BBL в Санкт-Петербурге: лицо, шея/декольте и кисти рук. Процедура для омоложения, выравнивания тона кожи и устранения пигментации." />
      <meta name="keywords" content="фотоомоложение bbl спб, bbl лицо спб, bbl шея декольте спб, bbl кисти рук спб, фотоомоложение лица спб, омоложение кожи спб, убрать пигментацию спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/fotoomolozhenie-bbl-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="text-center max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl mb-6">Фотоомоложение BBL в&nbsp;Санкт-Петербурге</h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Передовая технология широкополосного света для омоложения кожи, выравнивания тона, уменьшения пигментации и работы с сосудистыми проявлениями.
          </p>
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

    {/* Противопоказания */}
    <section className="py-16">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}>
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
    <section className="py-16 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}>
          <h2 className="font-heading text-3xl text-center mb-10">Цены на фотоомоложение BBL</h2>
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

    <NextStep currentPath="/fotoomolozhenie-bbl-spb" />
    <RelatedServices currentPath="/fotoomolozhenie-bbl-spb" />
    <CTASection />
  </Layout>
);

export default FotoomolozhenieBblSpb;
