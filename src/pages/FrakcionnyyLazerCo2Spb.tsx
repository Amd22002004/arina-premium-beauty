import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import co2Face1 from "@/assets/co2-face-1.webp";
import co2Face2 from "@/assets/co2-face-2.webp";
import co2Body1 from "@/assets/co2-body-1.webp";
import co2Body2 from "@/assets/co2-body-2.webp";
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
  { name: "Лицо", price: "9 900 ₽" },
  { name: "Зоны (шея, декольте, кисти, рубцы, растяжки)", price: "от 4 900 ₽" },
];

const suitableFor = [
  "Морщины и потеря упругости кожи",
  "Рубцы, шрамы и постакне",
  "Растяжки на теле",
  "Неровный рельеф и расширенные поры",
  "Пигментация и фотостарение",
];

const benefits = [
  "Разглаживание морщин и заломов",
  "Устранение рубцов, постакне и растяжек",
  "Улучшение текстуры и плотности кожи",
  "Сужение пор и выравнивание рельефа",
  "Стимуляция глубокой выработки коллагена",
  "Выраженный лифтинг-эффект",
];

const contraindications = [
  "Беременность и период лактации",
  "Острые воспалительные процессы на коже",
  "Онкологические заболевания",
  "Склонность к келоидным рубцам",
  "Приём ретиноидов (менее 6 месяцев)",
  "Сахарный диабет в стадии декомпенсации",
];

const steps = [
  { title: "Консультация", desc: "Осмотр кожи, определение зон и глубины воздействия" },
  { title: "Анестезия", desc: "Нанесение обезболивающего крема за 30–40 минут" },
  { title: "Процедура", desc: "Фракционная обработка лазером CO₂ по выбранным зонам" },
  { title: "Завершение", desc: "Нанесение восстанавливающего средства и рекомендации" },
];

const recovery = [
  "Покраснение и отёчность — 3–5 дней",
  "Микрокорочки — 5–7 дней, сходят самостоятельно",
  "Полное восстановление — 10–14 дней",
  "Обязательно SPF 50+ на весь период",
  "Исключить сауну, бассейн и спорт на 2 недели",
];

const FrakcionnyyLazerCo2Spb = () => (
  <Layout>
    <Helmet>
      <title>Фракционный лазер CO2 в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Фракционный лазер CO₂ в СПб: омоложение кожи, устранение морщин, рубцов и растяжек. От 4 900 ₽. Запись онлайн." />
      <meta name="keywords" content="фракционный лазер co2 спб, лазерное омоложение спб, co2 лазер спб, убрать рубцы лазером спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/frakcionnyy-lazer-co2-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Фракционный лазер CO2 в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: prices.map(p => ({ "@type": "Offer", name: p.name, priceCurrency: "RUB" })),
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Фракционный лазер CO₂
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Глубокое обновление кожи для устранения морщин, рубцов, постакне и растяжек
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 4&nbsp;900&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={`/booking?service=Фракционный лазер CO₂ (лицо)`}><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Записаться онлайн <ChevronRight size={16} className="ml-1" /></Button></Link>
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
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" /><span className="text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <div id="prices"><ServicePricingTiers title="Цены на фракционный лазер CO₂" prices={prices} /></div>

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

    {/* Результаты: Лицо */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl text-center mb-3">Результаты наших клиентов</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-foreground/90 text-center mb-10 max-w-xl mx-auto">До и после процедуры фракционного CO₂-лазера</motion.p>

        <h3 className="font-heading text-xl md:text-2xl text-center mb-6">Лицо</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-3">
          {[co2Face1, co2Face2].map((src, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <img src={src} alt={`Результат CO₂-лазера — лицо, пример ${i + 1}`} className="w-full h-auto object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mb-12">Результаты индивидуальны, требуется консультация специалиста</p>

        <div className="border-t border-border max-w-xl mx-auto mb-12" />

        <h3 className="font-heading text-xl md:text-2xl text-center mb-6">Зоны тела</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-3">
          {[co2Body1, co2Body2].map((src, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <img src={src} alt={`Результат CO₂-лазера — тело, пример ${i + 1}`} className="w-full h-auto object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center">Результаты индивидуальны, требуется консультация специалиста</p>
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

    {/* Видео процесса процедуры */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl text-center mb-3">
          Как проходит процедура CO₂-лазера
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-foreground/90 text-center mb-8 max-w-xl mx-auto">
          Реальный процесс процедуры без постановки
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}
          className="max-w-md mx-auto mb-8">
          <video
            controls
            preload="metadata"
            playsInline
            className="w-full rounded-2xl shadow-lg"
            poster=""
          >
            <source src="/videos/co2-laser-process.mp4" type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-foreground/80 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          Процедура проводится с использованием фракционного CO₂-лазера. Во время сеанса специалист обрабатывает кожу по заданному протоколу. Возможны ощущения тепла или покалывания. Перед процедурой проводится консультация.
        </motion.p>

        <div className="max-w-xl mx-auto">
          <h3 className="font-heading text-lg text-center mb-4">Что важно знать</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Процедура проводится специалистом",
              "Параметры подбираются индивидуально",
              "Возможен восстановительный период",
              "Требуется предварительная консультация",
            ].map((item, i) => (
              <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Восстановление */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-8">Восстановление после процедуры</h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {recovery.map((r) => (
            <div key={r} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <ShieldCheck size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{r}</span>
            </div>
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
    <NextStep currentPath="/frakcionnyy-lazer-co2-spb" />
    <RelatedServices currentPath="/frakcionnyy-lazer-co2-spb" />
    <CTASection />
  </Layout>
);

export default FrakcionnyyLazerCo2Spb;
