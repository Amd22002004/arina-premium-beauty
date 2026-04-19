import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, X, HelpCircle, User } from "lucide-react";
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
  "Омоложение лица",
  "Выравнивание рельефа кожи",
  "Осветление и выравнивание тона",
  "Лифтинг и повышение упругости",
];

const indications = [
  "Воспаления и высыпания",
  "Постакне",
  "Пигментация",
  "Купероз",
  "Расширенные поры",
  "Дряблая кожа",
];

const suitableFor = [
  "Безоперационная блефаропластика (верхние и нижние веки)",
  "Тем, кто хочет улучшить качество кожи",
  "Тем, кто ищет деликатную аппаратную методику",
  "Тем, кому важен аккуратный косметологический результат",
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
        offers: { "@type": "Offer", price: "4000", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="relative min-h-[520px] md:min-h-[600px] lg:min-h-[680px] overflow-hidden bg-cream">
      {/* Background image — all viewports */}
      <div className="absolute inset-0">
        <img
          src="/images/holodnaya-plazma-hero.jpeg"
          alt=""
          className="w-full h-full object-cover object-[70%_center]"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 md:via-cream/70 to-transparent md:w-1/2" />
        <div className="md:hidden absolute inset-0 bg-cream/40" />
      </div>

      <div className="container-wide px-4 md:px-8 relative z-10 flex flex-col justify-center min-h-[520px] md:min-h-[600px] lg:min-h-[680px]">
        <div className="max-w-xl py-16 md:py-24">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 text-left">
            Холодная плазма в&nbsp;Санкт‑Петербурге
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="mb-4 text-left">
            <ul className="text-foreground text-lg md:text-xl space-y-1">
              <li>Омоложение лица</li>
              <li>Выравнивание рельефа кожи</li>
              <li>Осветление и выравнивание тона</li>
              <li>Лифтинг и повышение упругости</li>
            </ul>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
            className="text-primary font-heading text-2xl md:text-3xl mb-8 text-left">от 4&nbsp;000&nbsp;₽</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </section>

    {/* Description */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-foreground/80 text-base md:text-lg text-center leading-relaxed mb-4">
          Холодная плазма — современная аппаратная методика для омоложения, выравнивания тона и рельефа кожи, 
          лифтинга и повышения упругости. Также применяется для безоперационной блефаропластики.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-primary font-heading text-xl text-center">
          Блефаропластика — 4 000 ₽
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

    {/* Показания */}
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

    {/* Video процесса процедуры */}
    <section className="py-14 md:py-20 bg-background">
      <div className="container-wide px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Холодная плазма</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Современная технология для обновления кожи без травм и восстановления
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="w-full max-w-[500px] mx-auto md:ml-auto md:mr-0">
            <video
              src="/videos/holodnaya-plazma-process.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          <div className="text-center md:text-left">
            <ul className="space-y-3 mb-6">
              {[
                "Стимулирует обновление клеток",
                "Улучшает тон и текстуру кожи",
                "Без боли и длительного восстановления",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 justify-center md:justify-start">
                  <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>

            <p className="text-primary font-heading text-lg md:text-xl mb-6">
              Эффект заметен уже после первых процедур
            </p>

            <Link to="/booking?service=Холодная плазма">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-8 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться на процедуру <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
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

    {/* Photo Result */}
    <section className="py-12 md:py-16 bg-background">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-3">Как меняется кожа после курса</h2>
        <p className="text-muted-foreground mb-8">Динамика результата: до процедуры, после 1‑го и 2‑го сеанса</p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-border shadow-sm">
          <img
            src="/images/holodnaya-plazma-result.webp"
            alt="Результат процедуры холодной плазмы: до, после 1 сеанса и после 2 сеансов"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>

        <p className="text-xs text-muted-foreground/60 mt-4">
          Результат индивидуален и зависит от исходного состояния кожи. Необходима консультация специалиста.
        </p>
      </div>
    </section>

    {/* Video Review */}
    <section className="py-12 md:py-16 bg-background">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-3">Видео‑отзыв клиентки</h2>
        <p className="text-muted-foreground mb-8">
          Реальный отзыв о результате процедуры и впечатлениях после курса
        </p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-border shadow-sm mb-6 max-w-lg mx-auto">
          <video
            controls
            preload="metadata"
            className="w-full aspect-square object-cover"
            src="/videos/holodnaya-plazma-review.mov"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="max-w-xl mx-auto">
          <p className="text-foreground/80 text-sm md:text-base leading-relaxed italic mb-3">
            «Хочу поблагодарить за результат — цвет лица стал заметно ровнее, кожа бархатистая и увлажнённая. В первые дни было небольшое шелушение, но потом всё стабилизировалось. Декоративная косметика теперь ложится совсем иначе, особенно после очищения. Очень довольна!»
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <User size={14} className="flex-shrink-0" />
            <span className="font-medium">Антонина</span>
          </div>
          <p className="text-xs text-muted-foreground/60">
            Видеоотзыв размещён с согласия клиента
          </p>
        </motion.div>
      </div>
    </section>

    <ConsultationCapture />
    <NextStep currentPath="/holodnaya-plazma-spb" />
    <RelatedServices currentPath="/holodnaya-plazma-spb" />
    <CTASection />
  </Layout>
);

export default HolodnayaPlazmaSpb;
