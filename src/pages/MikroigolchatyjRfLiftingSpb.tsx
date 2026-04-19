import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import NextStep from "@/components/NextStep";
import ConsultationCapture from "@/components/ConsultationCapture";
import rfResult from "@/assets/rf-lifting-result.webp";
import heroBg from "@/assets/microneedling-rf-hero.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const bookingLink = (service: string) => `/booking?service=${encodeURIComponent(service)}`;

const benefits = [
  "Уплотняет кожу",
  "Улучшает её качество",
  "Помогает уменьшить дряблость",
  "Поддерживает лифтинг-эффект",
  "Выравнивает текстуру кожи",
];

const indications = [
  "Дряблость кожи",
  "Снижение тонуса",
  "Неровный рельеф",
  "Расширенные поры",
  "Следы постакне",
  "Возрастные изменения кожи",
];

const steps = [
  { title: "Консультация", desc: "Оценка состояния кожи, определение задач и подбор параметров воздействия" },
  { title: "Подготовка кожи", desc: "Очищение, нанесение анестетика для комфортного проведения процедуры" },
  { title: "Проведение процедуры", desc: "Обработка зоны аппаратом с микроиглами и радиочастотной энергией" },
  { title: "Рекомендации после сеанса", desc: "Назначение домашнего ухода и определение периода восстановления" },
];

const contraindications = [
  "Беременность",
  "Острые воспалительные процессы",
  "Онкологические заболевания",
  "Нарушение целостности кожи",
  "Индивидуальные противопоказания по консультации специалиста",
];

const faq = [
  { q: "Больно ли это?", a: "Процедура проводится с использованием анестезии. Ощущения индивидуальны, но большинство пациентов переносят её комфортно." },
  { q: "Сколько длится процедура?", a: "В среднем от 40 до 60 минут, в зависимости от обрабатываемой зоны и протокола." },
  { q: "Нужна ли реабилитация?", a: "После процедуры возможно покраснение и лёгкая отёчность в течение 1–3 дней. Специалист даст рекомендации по уходу." },
  { q: "Когда можно вернуться к обычному ритму?", a: "Обычно через 2–3 дня. В первые дни рекомендуется избегать активного солнца и сауны." },
  { q: "Сколько процедур обычно требуется?", a: "Для выраженного результата рекомендуется курс из 3–5 процедур с интервалом 3–4 недели. Точное количество определяется на консультации." },
];

const MikroigolchatyjRfLiftingSpb = () => (
  <Layout>
    <Helmet>
      <title>Микроигольчатый RF-лифтинг в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Микроигольчатый RF-лифтинг в СПб: подтяжка кожи, уплотнение, коррекция постакне и текстуры. Запись онлайн." />
      <meta name="keywords" content="микроигольчатый rf лифтинг спб, rf лифтинг микроиглы спб, фракционный rf спб, подтяжка кожи спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/mikroigolchatyj-rf-lifting-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Микроигольчатый RF-лифтинг в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "5500", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* Hero with background image */}
    <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      {/* Overlay: stronger on mobile for readability, soft gradient on desktop */}
      <div className="absolute inset-0 bg-background/55 md:bg-gradient-to-r md:from-background/85 md:via-background/60 md:to-background/20" aria-hidden />

      <div className="container-wide relative px-4 md:px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 drop-shadow-sm">
            Микроигольчатый RF‑лифтинг в&nbsp;Санкт‑Петербурге
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-foreground text-lg md:text-xl max-w-2xl mb-4">
            Подтяжка кожи · Уплотнение кожи · Улучшение качества кожи без операции
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
            className="text-primary font-heading text-2xl md:text-3xl mb-8">от 5&nbsp;400&nbsp;₽</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to={bookingLink("Микроигольчатый RF-лифтинг")}>
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться на консультацию <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-primary text-primary bg-background/70 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground px-8">
                Получить консультацию
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Description */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-foreground/80 text-base md:text-lg text-center leading-relaxed">
          Микроигольчатый RF — это аппаратная методика, которая сочетает микроигольчатое воздействие и радиочастотную энергию 
          для стимуляции коллагена, улучшения плотности кожи и повышения её упругости.
        </motion.p>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что делает процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 rounded-xl bg-background border border-border">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Indications */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Показания</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {indications.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Steps */}
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

    {/* Vertical process video */}
    <section className="py-12 md:py-16 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-3">
          Как проходит процедура RF‑лифтинга
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-8">
          Процедура проходит под контролем специалиста, с минимальным дискомфортом
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-[420px] rounded-2xl overflow-hidden border border-border shadow-xl bg-background"
          style={{ aspectRatio: "9 / 16" }}
        >
          <video
            src="/videos/microneedling-rf-process.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="flex justify-center mt-8">
          <Link to={bookingLink("Микроигольчатый RF-лифтинг")}>
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              Записаться на RF‑лифтинг <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Result */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-6">Результат</h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Первый эффект может быть заметен после первой процедуры, но выраженный результат обычно формируется курсом. 
          Кожа становится плотнее, текстура выравнивается, лицо выглядит более подтянутым. 
          Точный прогноз и количество процедур определяются на консультации.
        </p>
      </div>
    </section>

    {/* Contraindications */}
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

    {/* FAQ */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-8">Частые вопросы</h2>
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">
                <span className="flex items-center gap-2">
                  <HelpCircle size={16} className="text-primary flex-shrink-0" />
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* До/После */}
    <section className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8 max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-8">До / После</h2>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-border shadow-md">
          <img src={rfResult} alt="Результат микроигольчатого RF-лифтинга — до и после" className="w-full h-auto object-contain" />
        </motion.div>
        <p className="text-foreground/80 mt-4 text-sm md:text-base">Результат после процедуры микроигольчатого RF‑лифтинга</p>
        <p className="text-muted-foreground text-xs mt-1">Результаты индивидуальны, требуется консультация специалиста</p>
      </div>
    </section>

    <ConsultationCapture />
    <NextStep currentPath="/mikroigolchatyj-rf-lifting-spb" />
    <RelatedServices currentPath="/mikroigolchatyj-rf-lifting-spb" />
    <CTASection />
  </Layout>
);

export default MikroigolchatyjRfLiftingSpb;
