import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X, Droplets, Sun, Palette, Layers, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServicePricingTiers from "@/components/ServicePricingTiers";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import NextStep from "@/components/NextStep";
import ConsultationCapture from "@/components/ConsultationCapture";
import pilingPhoto from "@/assets/piling-procedure.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  {
    name: "Пилинг",
    price: "2 500 ₽",
    priceValue: 2500,
    tiers: [
      { count: 3, total: 7125 },
      { count: 5, total: 11250 },
    ],
    desc: "Миндальный, азелаиновый, фруктовый — подбираем тип под задачу",
  },
];

const problems = [
  { icon: CircleDot, title: "Акне и воспаления", result: "Кожа очищается, воспаления уходят" },
  { icon: Layers, title: "Расширенные поры", result: "Поры сужаются, кожа становится гладкой" },
  { icon: Sun, title: "Пигментация", result: "Пятна светлеют, тон выравнивается" },
  { icon: Palette, title: "Тусклый цвет лица", result: "Появляется свежесть и здоровое сияние" },
  { icon: Droplets, title: "Неровная текстура кожи", result: "Рельеф выравнивается, кожа обновляется" },
];

const peelingTypes = [
  {
    title: "Миндальный пилинг",
    desc: "Мягкое обновление кожи, подходит для чувствительной кожи и первого знакомства с пилингами. Улучшает цвет лица и выравнивает текстуру.",
  },
  {
    title: "Азелаиновый пилинг",
    desc: "Подходит для кожи с воспалениями и акне. Помогает уменьшить высыпания, регулирует жирность и выравнивает тон кожи.",
  },
  {
    title: "Фруктовый пилинг",
    desc: "Освежает кожу, придаёт сияние и улучшает цвет лица. Подходит для тусклой кожи и лёгкого обновления.",
  },
];

const steps = [
  { num: 1, title: "Очищение", desc: "Демакияж и подготовка кожи" },
  { num: 2, title: "Нанесение состава", desc: "Аппликация пилинга с контролем экспозиции" },
  { num: 3, title: "Нейтрализация", desc: "Снятие состава и нейтрализация кислот" },
  { num: 4, title: "Завершающий уход", desc: "Успокаивающая маска и SPF-защита" },
];

const results = [
  "Кожа становится чище",
  "Уменьшаются воспаления",
  "Выравнивается тон",
  "Появляется свежесть и сияние",
  "Улучшается текстура кожи",
  "Сужаются поры",
];

const contraindications = [
  "Активные воспаления и герпес в зоне обработки",
  "Беременность и период лактации",
  "Онкологические заболевания",
  "Свежий загар и солнечные ожоги",
  "Аллергия на компоненты пилинга",
  "Приём ретиноидов и фотосенсибилизирующих препаратов",
];

const PilingiSpb = () => (
  <Layout>
    <Helmet>
      <title>Пилинги в Санкт-Петербурге — миндальный, азелаиновый, фруктовый | АРТ Косметология</title>
      <meta name="description" content="Пилинги в СПб: миндальный, азелаиновый и фруктовый для чистой кожи без акне и пигментации. От 2 500 ₽. Запись онлайн." />
      <meta name="keywords" content="пилинг спб, миндальный пилинг спб, азелаиновый пилинг спб, фруктовый пилинг спб, пилинг цена спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/pilingi-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Пилинги в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "2500", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 max-w-4xl">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 text-center lg:text-left">
          Чистая кожа без&nbsp;акне, пятен и&nbsp;тусклости уже после курса пилингов
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
          className="text-foreground/90 text-lg md:text-xl max-w-2xl mb-4 text-center lg:text-left">
          Подберём тип пилинга под вашу кожу: уберём воспаления, выровняем тон и вернём коже свежий, ухоженный вид
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-2 text-center lg:text-left">от 2&nbsp;500&nbsp;₽</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
          className="text-muted-foreground text-sm mb-6 text-center lg:text-left">в зависимости от типа кожи и выбранной программы</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-5">
          <Link to="/booking?service=Пилинг"><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Подобрать пилинг <ChevronRight size={16} className="ml-1" /></Button></Link>
          <Link to="/booking?service=Пилинг"><Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">Записаться на процедуру</Button></Link>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-muted-foreground text-sm flex items-center gap-2 justify-center lg:justify-start">
          <Sparkles size={14} className="text-primary" /> Консультация косметолога перед процедурой — бесплатно
        </motion.p>
      </div>
    </section>

    {/* Фото-блок: как проходит процедура */}
    <section className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как проходит процедура пилинга</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-foreground/90 text-lg leading-relaxed mb-4">
              Косметолог очищает кожу, подбирает состав пилинга под ваш тип кожи и аккуратно наносит его на лицо.
            </p>
            <p className="text-foreground/90 text-lg leading-relaxed mb-4">
              Процедура занимает 30–40 минут и проходит комфортно, без агрессивного воздействия.
            </p>
            <p className="text-foreground/90 text-lg leading-relaxed">
              После процедуры кожа становится более гладкой, свежей и ухоженной.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <img src={pilingPhoto} alt="Процедура пилинга — нанесение состава кистью на лицо клиента" className="w-full aspect-square object-cover rounded-2xl shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Какие проблемы решает */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Какие проблемы решает пилинг</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="p-5 rounded-xl bg-background border border-border text-center">
              <p.icon size={28} className="text-primary mx-auto mb-3" />
              <h3 className="font-heading text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Подберём пилинг */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Подберём пилинг под&nbsp;вашу кожу</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {peelingTypes.map((t, i) => (
            <motion.div key={t.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="p-6 rounded-xl bg-card border border-border flex flex-col">
              <h3 className="font-heading text-xl mb-3 text-primary">{t.title}</h3>
              <p className="text-foreground/90 text-sm leading-relaxed flex-1">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Цены */}
    <div id="prices"><ServicePricingTiers title="Цены на пилинги" prices={prices} /></div>

    {/* Как проходит — шаги */}
    <section className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Этапы процедуры</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="text-center">
              <div className="w-12 h-12 rounded-full gold-gradient text-primary-foreground flex items-center justify-center text-lg font-heading mx-auto mb-4">{s.num}</div>
              <h3 className="font-heading text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Результат */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Результат после пилинга</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {results.map((r, i) => (
            <motion.div key={r} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground">{r}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Противопоказания */}
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
