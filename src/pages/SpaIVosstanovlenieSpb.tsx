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
  { name: "Обёртывание", price: "1 500 ₽" },
  { name: "Инфракрасная капсула (50 мин)", price: "2 000 ₽" },
  { name: "Медовая выкатка (45 мин)", price: "2 500 ₽" },
  { name: "Медовая выкатка (60 мин)", price: "3 500 ₽" },
  { name: "Комплекс (капсула + выкатка)", price: "3 700 ₽" },
];

const suitableFor = [
  "Чувствуете усталость и хотите расслабиться",
  "Нужна перезагрузка после стресса",
  "Хотите улучшить состояние кожи тела",
  "Ищете мягкую детокс-процедуру",
  "Хотите дополнить курс массажа или коррекции",
];

const benefits = [
  "Глубокое расслабление и снятие напряжения",
  "Выведение токсинов и очищение организма",
  "Улучшение состояния и тонуса кожи",
  "Уменьшение отёчности и застойных явлений",
  "Восстановление после стресса и нагрузок",
  "Ощущение лёгкости и комфорта",
];

const contraindications = [
  "Острые воспалительные процессы",
  "Онкологические заболевания",
  "Повышенная температура тела",
  "Тяжёлые сердечно-сосудистые заболевания",
  "Аллергия на компоненты (мёд, составы)",
  "Беременность",
];

const types = [
  { title: "Инфракрасная капсула", desc: "Мягкий прогрев тела инфракрасным теплом. Расслабление, вывод жидкости и улучшение кожи." },
  { title: "Медовая выкатка", desc: "Традиционная техника с натуральным мёдом. Очищение кожи, детокс и ощущение лёгкости." },
  { title: "Комплекс (сауна + выкатка)", desc: "Сочетание инфракрасного прогрева и медовой выкатки для максимального эффекта." },
  { title: "Обёртывания", desc: "Питательные и подтягивающие составы для тела. Увлажнение, тонус и комфорт." },
];

const steps = [
  { title: "Подготовка", desc: "Очищение кожи и подготовка зоны воздействия" },
  { title: "Процедура", desc: "Воздействие по выбранной методике (30–60 мин)" },
  { title: "Отдых", desc: "Время для расслабления и восстановления" },
  { title: "Завершение", desc: "Увлажнение кожи и рекомендации" },
];

const SpaIVosstanovlenieSpb = () => (
  <Layout>
    <Helmet>
      <title>СПА и восстановление в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="СПА в СПб: инфракрасная капсула, медовая выкатка и обёртывания. От 1 500 ₽. Расслабление и детокс. Запись онлайн." />
      <meta name="keywords" content="спа процедуры спб, инфракрасная сауна спб, медовая выкатка спб, обёртывания спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/spa-i-vosstanovlenie-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "СПА и восстановление в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "1500", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          СПА и восстановление
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Расслабление, детокс и восстановление после нагрузок. Мягкий уход за телом и душевный комфорт
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 1&nbsp;500&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={`/booking?service=Инфракрасная капсула (50 мин)`}><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Записаться онлайн <ChevronRight size={16} className="ml-1" /></Button></Link>
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

    <div id="prices"><ServicePricingTiers title="Цены на СПА-процедуры" prices={prices} /></div>

    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что дают СПА-процедуры</h2>
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
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Виды процедур</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {types.map((t, i) => (
            <motion.div key={t.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-heading text-xl mb-3">{t.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-10 md:py-14">
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
    <NextStep currentPath="/spa-i-vosstanovlenie-spb" />
    <RelatedServices currentPath="/spa-i-vosstanovlenie-spb" />
    <CTASection />
  </Layout>
);

export default SpaIVosstanovlenieSpb;
