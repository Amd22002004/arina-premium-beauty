import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, X, HelpCircle, Play, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import NextStep from "@/components/NextStep";
import ConsultationCapture from "@/components/ConsultationCapture";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const bookingLink = (service: string) => `/booking?service=${encodeURIComponent(service)}`;

const whatItDoes = [
  "Улучшает внешний вид кожи",
  "Поддерживает восстановительные процессы",
  "Помогает работать с эстетическими несовершенствами",
  "Подходит для деликатных протоколов",
  "Может использоваться как самостоятельная процедура или в курсе",
];

const suitableFor = [
  "Тем, кто хочет улучшить качество кожи",
  "Тем, кто ищет деликатную аппаратную методику",
  "Тем, кому важен аккуратный косметологический результат",
  "Тем, кто рассматривает курс процедур",
];

const steps = [
  { title: "Консультация", desc: "Оценка состояния кожи и определение целей процедуры" },
  { title: "Подбор протокола", desc: "Выбор параметров и зон воздействия под задачу" },
  { title: "Проведение процедуры", desc: "Аппаратное воздействие холодной плазмой на обрабатываемые зоны" },
  { title: "Рекомендации после процедуры", desc: "Назначение домашнего ухода и определение дальнейшего плана" },
];

const advantages = [
  "Деликатный подход",
  "Современная аппаратная технология",
  "Аккуратная подача результата",
  "Возможность работы курсом",
  "Подходит для чувствительной кожи",
];

const faq = [
  { q: "Что такое холодная плазма?", a: "Это современная аппаратная методика, которая использует ионизированный газ для воздействия на кожу без термического повреждения. Применяется для улучшения состояния и восстановления кожи." },
  { q: "Есть ли восстановление?", a: "Процедура деликатная, восстановительный период минимален. Специалист даст индивидуальные рекомендации по уходу." },
  { q: "Сколько длится процедура?", a: "В среднем 30–50 минут, в зависимости от зоны и протокола." },
  { q: "Когда виден эффект?", a: "Улучшение состояния кожи может быть заметно уже после первой процедуры. Для выраженного результата рекомендуется курс." },
  { q: "Можно ли сочетать с другими процедурами?", a: "Да, холодная плазма хорошо сочетается с другими аппаратными и уходовыми процедурами. Точную комбинацию подберёт специалист." },
];


const HolodnayaPlazmaSpb = () => (
  <Layout>
    <Helmet>
      <title>Холодная плазма в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Холодная плазма в СПб: деликатное аппаратное воздействие для восстановления кожи и улучшения её состояния. Запись онлайн." />
      <meta name="keywords" content="холодная плазма спб, холодная плазма лицо спб, плазменная косметология спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/holodnaya-plazma-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Холодная плазма в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "5000", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Холодная плазма в&nbsp;Санкт‑Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Деликатное воздействие для восстановления кожи и улучшения её состояния
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 5&nbsp;000&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={bookingLink("Холодная плазма")}>
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              Записаться <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
          <Link to="/contacts">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Получить консультацию
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Description */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-foreground/80 text-base md:text-lg text-center leading-relaxed">
          Холодная плазма — это современная аппаратная методика, которая используется в косметологии для улучшения состояния кожи, 
          восстановления и работы с эстетическими задачами.
        </motion.p>
      </div>
    </section>

    {/* What it does */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что делает процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {whatItDoes.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 rounded-xl bg-background border border-border">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Suitable for */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Кому подходит</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {suitableFor.map((item, i) => (
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

    {/* Advantages */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Преимущества</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {advantages.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-10 md:py-14 bg-card">
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

    {/* Video Reviews Placeholder */}
    <section className="py-12 md:py-16 bg-cream">
      <div className="container-wide px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-3">Видео‑отзывы пациентов</h2>
        <p className="text-muted-foreground text-center mb-10">
          Здесь позже будут размещены видеоотзывы о процедуре холодной плазмы
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main video */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="md:col-span-2 md:row-span-2">
            <div className="aspect-video rounded-xl bg-muted border border-border flex flex-col items-center justify-center gap-3 h-full min-h-[280px]">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Play size={28} className="text-primary ml-1" />
              </div>
              <span className="text-muted-foreground text-sm">Главный видеоотзыв — скоро</span>
            </div>
          </motion.div>

          {/* Side video cards */}
          {videoPlaceholders.slice(0, 2).map((v, i) => (
            <motion.div key={v.id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
              className="flex flex-col bg-card rounded-xl border border-border overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play size={20} className="text-primary ml-0.5" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground text-sm mb-2">{v.text}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User size={14} className="flex-shrink-0" />
                  <span>{v.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Third small card below */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
          className="mt-6 max-w-sm mx-auto">
          <div className="flex flex-col bg-card rounded-xl border border-border overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Play size={20} className="text-primary ml-0.5" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-muted-foreground text-sm mb-2">{videoPlaceholders[2].text}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <User size={14} className="flex-shrink-0" />
                <span>{videoPlaceholders[2].name}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <Link to="/reviews">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Смотреть все отзывы
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <ConsultationCapture />
    <NextStep currentPath="/holodnaya-plazma-spb" />
    <RelatedServices currentPath="/holodnaya-plazma-spb" />
    <CTASection />
  </Layout>
);

export default HolodnayaPlazmaSpb;
