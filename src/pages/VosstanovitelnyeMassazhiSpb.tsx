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
  { name: "Лимфодренажный массаж", price: "2 400 ₽", priceValue: 2400, tiers: [{ count: 5, total: 11200 }, { count: 10, total: 21000 }], desc: "Дренаж, снятие отёков, улучшение лимфотока" },
  { name: "Висцеральный массаж", price: "2 800 ₽", priceValue: 2800, tiers: [{ count: 5, total: 13500 }, { count: 10, total: 25000 }], desc: "Работа с внутренними органами и восстановление" },
];

const suitableFor = [
  "Чувствуете хроническую усталость и напряжение",
  "Беспокоят отёки лица или тела",
  "Нужно восстановиться после стресса или болезни",
  "Хотите мягкий массаж без глубокой проработки",
  "Ищете процедуру для общего расслабления",
];

const benefits = [
  "Глубокое расслабление и снятие напряжения",
  "Уменьшение отёчности лица и тела",
  "Улучшение лимфооттока и микроциркуляции",
  "Восстановление после стресса и переутомления",
  "Нормализация сна и общего самочувствия",
  "Мягкое воздействие без агрессивных техник",
];

const contraindications = [
  "Острые воспалительные процессы",
  "Онкологические заболевания",
  "Повышенная температура тела",
  "Кожные заболевания в зоне воздействия",
  "Тромбофлебит",
  "Тяжёлые сердечно-сосудистые заболевания",
];

const lymphMethods = [
  { title: "Вакуумно-роликовый массаж", desc: "Аппаратный лимфодренаж с помощью вакуумных роликов — ускоряет отток лимфы и уменьшает объёмы." },
  { title: "BMS (биомеханическая стимуляция)", desc: "Вибрационное воздействие на глубокие ткани для улучшения микроциркуляции и снятия застоев." },
  { title: "INDIBA", desc: "Радиочастотная технология глубинного прогрева для стимуляции лимфотока и восстановления тканей." },
  { title: "Вакуумно-вибрационный массаж", desc: "Сочетание вакуума и вибрации для деликатного дренажа и снятия отёчности." },
  { title: "Горячий вакуум", desc: "Термическое воздействие с вакуумом — усиленный лимфодренаж и жиросжигание." },
  { title: "Гуаша", desc: "Традиционная мануальная техника скребком для активизации лимфотока и снятия мышечных зажимов." },
];

const types = [
  { title: "Лимфодренажный массаж", desc: "Комплексная техника для уменьшения отёчности, улучшения микроциркуляции и выведения лишней жидкости." },
  { title: "Висцеральный массаж", desc: "Работа с внутренними органами для восстановления функций, снятия спазмов и улучшения пищеварения." },
];

const steps = [
  { title: "Консультация", desc: "Определяем состояние и подбираем подходящую технику" },
  { title: "Подготовка", desc: "Расслабление и мягкий разогрев тканей" },
  { title: "Массаж", desc: "Работа по выбранной методике (30–50 мин)" },
  { title: "Завершение", desc: "Рекомендации по дальнейшему уходу и режиму" },
];

const VosstanovitelnyeMassazhiSpb = () => (
  <Layout>
    <Helmet>
      <title>Восстановительные массажи в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Восстановительные массажи в СПб: лимфодренажный и висцеральный массаж. От 2 400 ₽. Снятие отёков и расслабление. Запись онлайн." />
      <meta name="keywords" content="восстановительный массаж спб, лимфодренажный массаж спб, висцеральный массаж спб, массаж от отёков спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/vosstanovitelnye-massazhi-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Восстановительные массажи в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "2400", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
              Восстановительные массажи
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="text-muted-foreground text-lg md:text-xl mb-4">
              Мягкие техники для снятия отёков, расслабления и восстановления организма
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="text-primary font-heading text-2xl md:text-3xl mb-8">от 2&nbsp;400&nbsp;₽</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to={`/booking?service=Лимфодренажный массаж`}><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Записаться онлайн <ChevronRight size={16} className="ml-1" /></Button></Link>
              <a href="#prices"><Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">Смотреть цены</Button></a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2 mx-auto w-full max-w-[480px]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full rounded-2xl shadow-lg aspect-square object-cover bg-muted"
              aria-label="Видео восстановительного массажа"
            >
              <source src="/videos/vosstanovitelnye-massazhi.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
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

    <div id="prices"><ServicePricingTiers title="Цены на восстановительные массажи" prices={prices} /></div>

    {/* Методы лимфодренажа */}
    <section className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-3">Методы лимфодренажа</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Подбираем оптимальную технику индивидуально — в зависимости от состояния и целей</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {lymphMethods.map((m, i) => (
            <motion.div key={m.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading text-lg mb-2">{m.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что дают массажи</h2>
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
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Виды массажей</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
    <NextStep currentPath="/vosstanovitelnye-massazhi-spb" />
    <RelatedServices currentPath="/vosstanovitelnye-massazhi-spb" />
    <CTASection />
  </Layout>
);

export default VosstanovitelnyeMassazhiSpb;
