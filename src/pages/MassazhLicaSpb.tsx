import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Check, X, Sparkles, Clock, Heart, Users, Star } from "lucide-react";
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
  { name: "Скульптурный массаж лица", price: "2 490 ₽", duration: "60 мин" },
  { name: "Миофасциальный массаж лица", price: "2 490 ₽", duration: "60 мин" },
  { name: "Массаж лица 3D", price: "2 490 ₽", duration: "60 мин" },
  { name: "Удаление второго подбородка + подтяжка овала", price: "3 490 ₽", duration: "60–90 мин" },
];

const benefits = [
  "Подтяжка овала лица без инъекций",
  "Уменьшение отёчности и улучшение лимфотока",
  "Повышение тонуса и эластичности кожи",
  "Разглаживание мимических морщин",
  "Улучшение цвета лица и микроциркуляции",
  "Снятие мышечных зажимов и напряжения",
];

const suitableFor = [
  "Потеря чёткости овала лица",
  "Отёчность и пастозность",
  "Тусклый цвет кожи",
  "Мимические морщины и заломы",
  "Мышечные зажимы в области лица и шеи",
  "Желание поддерживать молодость без инъекций",
];

const contraindications = [
  "Острые воспалительные процессы на коже",
  "Герпес в стадии обострения",
  "Онкологические заболевания",
  "Нарушение целостности кожного покрова",
  "Повышенная температура тела",
  "Гнойничковые высыпания",
];

const massageTypes = [
  {
    title: "Скульптурный массаж",
    desc: "Глубокая проработка мышц лица для моделирования чётких контуров и подтяжки овала. Эффект заметен уже после первого сеанса.",
  },
  {
    title: "Миофасциальный массаж",
    desc: "Работа с фасциями — соединительной тканью, которая «стягивает» лицо. Снимает мышечные зажимы, возвращает естественную симметрию.",
  },
  {
    title: "Массаж лица 3D",
    desc: "Объёмная техника, сочетающая скульптурный и лимфодренажный массаж. Убирает отёчность, подтягивает и выравнивает рельеф кожи.",
  },
  {
    title: "Удаление второго подбородка + подтяжка овала",
    desc: "Целенаправленная работа с зоной подбородка и нижней третью лица. Уменьшение объёма, подтяжка контура, чёткая линия челюсти.",
  },
];

const steps = [
  { step: "1", title: "Консультация", desc: "Определяем тип кожи, зоны проработки и подбираем оптимальную технику" },
  { step: "2", title: "Очищение", desc: "Деликатное очищение кожи профессиональными средствами" },
  { step: "3", title: "Массаж", desc: "Глубокая проработка мышц и тканей выбранной техникой — 40–60 минут" },
  { step: "4", title: "Завершение", desc: "Нанесение увлажняющего крема или маски для закрепления результата" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Массаж лица в Санкт-Петербурге",
  description: "Скульптурный, миофасциальный и 3D-массаж лица для подтяжки овала, тонуса кожи и уменьшения отёчности",
  provider: {
    "@type": "BeautySalon",
    name: "АРТ Косметология",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Санкт-Петербург",
      addressCountry: "RU",
    },
    telephone: "+79117193949",
  },
  offers: prices.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.replace(/\s/g, "").replace("₽", ""),
    priceCurrency: "RUB",
  })),
};

const MassazhLicaSpb = () => (
  <Layout>
    <Helmet>
      <title>Массаж лица в Санкт-Петербурге — скульптурный, миофасциальный, 3D | АРТ Косметология</title>
      <meta name="description" content="Массаж лица в Санкт-Петербурге: скульптурный, миофасциальный и 3D-массаж для подтяжки овала, тонуса кожи и уменьшения отёчности. Запись онлайн." />
      <meta name="keywords" content="массаж лица спб, скульптурный массаж лица спб, миофасциальный массаж спб, 3d массаж лица спб, подтяжка овала лица спб, массаж лица цена спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/massazh-lica-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Массаж лица в&nbsp;Санкт&#8209;Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Скульптурный, миофасциальный и&nbsp;3D&#8209;массаж для подтяжки овала, улучшения тонуса кожи и&nbsp;уменьшения отёчности
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Link to="/booking">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              Записаться онлайн <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Что это */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-6">Что такое массаж лица?</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center leading-relaxed">
          Массаж лица — это ручная техника глубокой проработки мышц и тканей, которая позволяет подтянуть овал, 
          разгладить морщины и улучшить цвет кожи без инъекций и хирургического вмешательства. В&nbsp;нашей клинике 
          мы используем авторские АРТ&#8209;протоколы, сочетающие лучшие мировые методики для максимального результата.
        </p>
      </div>
    </section>

    {/* Кому подходит */}
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

    {/* Что даёт */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что даёт массаж лица</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div key={b} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
              <Sparkles size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Виды массажа */}
    <section className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Виды массажа лица</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {massageTypes.map((m, i) => (
            <motion.div key={m.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-heading text-xl mb-3">{m.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Как проходит */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как проходит процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div key={s.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center">
              <div className="w-12 h-12 rounded-full gold-gradient text-primary-foreground flex items-center justify-center text-lg font-heading mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="font-heading text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Противопоказания */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Противопоказания</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {contraindications.map((c, i) => (
            <motion.div key={c} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
              <X size={16} className="text-destructive flex-shrink-0" />
              <span className="text-foreground/80">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <ConsultationCapture />
    <ServicePricingTiers title="Цены на массаж лица" prices={prices} />

    {/* Акция */}
    <section className="py-10 md:py-14">
      <div className="container-narrow px-4 md:px-8">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl gold-gradient p-8 md:p-12 text-center text-primary-foreground before:absolute before:inset-0 before:bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%)] before:animate-[shimmer_3s_ease-in-out_infinite] before:-translate-x-full before:pointer-events-none">
          <Star size={40} className="mx-auto mb-4 opacity-80 relative z-10" />
          <h2 className="font-heading text-3xl md:text-4xl mb-3 relative z-10">Первое посещение</h2>
          <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto relative z-10">
            Скидка <strong>30%</strong> на скульптурный массаж лица для новых клиентов. 
            Попробуйте и&nbsp;оцените результат!
          </p>
          <Link to="/booking" className="relative z-10">
            <Button size="lg" className="bg-white text-primary font-semibold px-10 border-0 shadow-lg hover:shadow-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Записаться со скидкой 30%
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    <NextStep currentPath="/massazh-lica-spb" />
    <RelatedServices currentPath="/massazh-lica-spb" />
    <CTASection />
  </Layout>
);

export default MassazhLicaSpb;
