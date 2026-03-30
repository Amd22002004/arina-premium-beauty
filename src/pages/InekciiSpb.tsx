import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sparkles, Heart, ShieldCheck, Droplets, Star, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const procedures = [
  { name: "Биостимуляция", price: "3 490 ₽", desc: "Активация собственных ресурсов кожи для восстановления упругости, плотности и здорового сияния." },
  { name: "Биоревитализация", price: "4 490 ₽", desc: "Глубокое насыщение кожи гиалуроновой кислотой для увлажнения, разглаживания и улучшения текстуры." },
  { name: "Мезотерапия", price: "3 990 ₽", desc: "Введение витаминных коктейлей для питания кожи, выравнивания тона и устранения тусклости." },
  { name: "Инъекции липолитиков", price: "2 900 ₽", desc: "Коррекция локальных жировых отложений: второй подбородок, брыли, щёки." },
];

const benefits = [
  "Восстановление упругости и плотности кожи",
  "Глубокое увлажнение изнутри",
  "Улучшение цвета и текстуры лица",
  "Уменьшение мелких морщин и заломов",
  "Коррекция локальных жировых отложений",
  "Профилактика возрастных изменений",
];

const suitableFor = [
  "Тусклая, обезвоженная кожа",
  "Потеря упругости и эластичности",
  "Мелкие морщины и заломы",
  "Пигментация и неровный тон",
  "Локальные жировые отложения на лице",
  "Желание улучшить качество кожи без операций",
];

const steps = [
  { title: "Консультация", desc: "Оценка состояния кожи, подбор препарата и зон введения" },
  { title: "Подготовка", desc: "Очищение кожи и нанесение анестезирующего крема при необходимости" },
  { title: "Процедура", desc: "Точечное введение препарата по выбранной технике" },
  { title: "Завершение", desc: "Обработка кожи успокаивающим средством и рекомендации по уходу" },
];

const contraindications = [
  "Беременность и период лактации",
  "Острые воспаления и инфекции кожи",
  "Аутоиммунные заболевания",
  "Нарушения свёртываемости крови",
  "Онкологические заболевания",
  "Приём антикоагулянтов",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Инъекции и биостимуляция в Санкт-Петербурге",
  description: "Инъекции и биостимуляция в Санкт-Петербурге: биостимуляция, биоревитализация, мезотерапия и липолитики для восстановления кожи и улучшения её качества.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Инъекционные процедуры",
    itemListElement: procedures.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.name },
      price: p.price.replace(/\s/g, "").replace("₽", ""),
      priceCurrency: "RUB",
    })),
  },
};

const InekciiSpb = () => (
  <Layout>
    <Helmet>
      <title>Инъекции и биостимуляция в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Инъекции и биостимуляция в Санкт-Петербурге: биостимуляция, биоревитализация, мезотерапия и липолитики для восстановления кожи и улучшения её качества." />
      <meta name="keywords" content="биоревитализация спб, мезотерапия спб, биостимуляция спб, инъекции липолитиков спб, инъекционная косметология спб, уколы красоты спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/inekcii-i-biostimulyaciya-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-16 md:py-24">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
          Инъекции и&nbsp;биостимуляция в&nbsp;Санкт‑Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Инъекции и биостимуляция — это процедуры для восполнения ресурсов кожи, улучшения её качества, упругости и внешнего вида. Инъекции для лица в СПб, биоревитализация, мезотерапия и липолитики — всё в рамках авторского АРТ-протокола.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4 justify-center">
          <Link to="/booking">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl">Записаться онлайн</Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="py-10 md:py-14 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Кому подходит</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {suitableFor.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 bg-card rounded-lg p-5 border border-border">
              <Heart size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Что даёт */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что даёт процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div key={b} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 bg-card rounded-lg p-5 border border-border">
              <Sparkles size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Виды процедур */}
    <section className="py-10 md:py-14 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Виды процедур</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {procedures.map((p, i) => (
            <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-6 md:p-8 border border-border hover-lift text-center">
              <Syringe size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <p className="text-2xl font-bold text-primary">{p.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Как проходит */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как проходит процедура</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex gap-4 items-start bg-card rounded-lg p-5 border border-border">
              <span className="flex-shrink-0 w-8 h-8 rounded-full gold-gradient text-primary-foreground flex items-center justify-center text-sm font-bold">{i + 1}</span>
              <div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Противопоказания */}
    <section className="py-10 md:py-14 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Противопоказания</h2>
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contraindications.map((c) => (
            <div key={c} className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck size={16} className="text-primary flex-shrink-0" /> {c}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Цены */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Цены на инъекции и биостимуляцию</h2>
        <div className="max-w-xl mx-auto bg-card rounded-xl border border-border overflow-hidden">
          {procedures.map((p, i) => (
            <div key={p.name} className={`flex justify-between items-center p-5 ${i < procedures.length - 1 ? "border-b border-border" : ""}`}>
              <span className="font-medium">{p.name}</span>
              <span className="font-bold text-primary whitespace-nowrap ml-4">{p.price}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-muted-foreground text-sm">Точная стоимость определяется на консультации</p>
      </div>
    </section>

    {/* Акция */}
    <section className="py-10 md:py-14 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center bg-card rounded-xl p-8 md:p-10 border border-primary/30 shadow-lg">
          <Star size={32} className="text-primary mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl mb-3">Скидка 20% на первое посещение</h2>
          <p className="text-muted-foreground mb-6">Попробуйте инъекционные процедуры со скидкой — запишитесь и&nbsp;убедитесь в&nbsp;результате</p>
          <Link to="/booking">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl">Записаться со скидкой</Button>
          </Link>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default InekciiSpb;
