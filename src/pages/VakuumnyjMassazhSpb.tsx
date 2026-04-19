import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServicePricingTiers from "@/components/ServicePricingTiers";
import CTASection from "@/components/CTASection";
import ConsultationCapture from "@/components/ConsultationCapture";
import vacuumHeroBg from "@/assets/vacuum-massage-hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  {
    name: "Вакуумно-роликовый массаж (4D)",
    price: "2 800 ₽",
    priceValue: 2800,
    tiers: [
      { count: 5, total: 13500 },
      { count: 10, total: 25000 },
    ],
    desc: "Аппаратный антицеллюлитный массаж для моделирования контуров тела",
  },
];

const suitableFor = [
  "Хотите избавиться от целлюлита на бёдрах и ягодицах",
  "Нужна коррекция контуров без операции",
  "Хотите улучшить текстуру и эластичность кожи",
  "Есть отёки и застой лимфы",
  "Ищете аппаратную альтернативу ручному антицеллюлитному массажу",
];

const benefits = [
  "Разрушение фиброзных перегородок — причины целлюлита",
  "Моделирование контуров тела и уменьшение объёмов",
  "Активизация лимфодренажа и выведение токсинов",
  "Повышение эластичности и тонуса кожи",
  "Улучшение кровообращения в проблемных зонах",
  "Комфортная процедура без реабилитации",
];

const zones = [
  "Бёдра и ягодицы",
  "Живот и бока",
  "Руки (внутренняя поверхность)",
  "Зона «галифе»",
  "Спина (складки под лопатками)",
  "Колени",
];

const contraindications = [
  "Беременность и лактация",
  "Онкологические заболевания",
  "Острые воспалительные процессы",
  "Тяжёлые формы варикозной болезни",
  "Нарушения свёртываемости крови",
  "Повреждения кожи в зоне воздействия",
];

const difference = [
  { label: "Горячий вакуум", desc: "Горячий вакуум нацелен на жиросжигание через термоэффект. Вакуумный массаж — на механическую проработку тканей и борьбу с целлюлитом." },
  { label: "RF-лифтинг тела", desc: "RF работает на подтяжку и уплотнение кожи. Вакуумный массаж — на разрушение целлюлитных структур и моделирование контуров." },
  { label: "Ручной антицеллюлитный массаж", desc: "Аппаратный вакуум обеспечивает более глубокое и равномерное воздействие, чем ручная техника. Результат стабильнее и быстрее." },
];

const VakuumnyjMassazhSpb = () => (
  <Layout>
    <Helmet>
      <title>Вакуумный массаж в СПб — антицеллюлитная коррекция фигуры | АРТ Косметология</title>
      <meta name="description" content="Аппаратный вакуумный массаж в Санкт-Петербурге: антицеллюлитная коррекция, моделирование контуров тела, лимфодренаж. От 2 800 ₽. Результат после 2–3 процедур." />
      <meta name="keywords" content="вакуумный массаж спб, антицеллюлитный массаж спб, аппаратный массаж спб, коррекция фигуры спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/vakuumnyj-massazh-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Вакуумный массаж в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "2800", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* Hero — фоновое фото */}
    <section
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${vacuumHeroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30 md:from-background/85 md:via-background/55 md:to-transparent" />
      <div className="container-wide px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-5">
            Вакуумно-роликовый массаж (4D) — аппаратная борьба с целлюлитом
          </h1>
          <p className="text-foreground/90 text-lg mb-4">
            Глубокая проработка подкожно-жировой клетчатки: разрушение фиброзных перегородок, моделирование контуров и улучшение текстуры кожи
          </p>
          <p className="text-primary font-heading text-2xl mb-6">от 2&nbsp;800&nbsp;₽</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/booking?service=Вакуумный массаж">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl">
                Записаться <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
            <a href="#prices">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 bg-background/60 backdrop-blur-sm">
                Смотреть цены
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Кому подходит вакуумный массаж</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {suitableFor.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" /><span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Prices */}
    <div id="prices"><ServicePricingTiers title="Стоимость массажа по коррекции фигуры" prices={prices} /></div>

    {/* Видео — как происходит процедура */}
    <section className="py-12 md:py-16 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Как проходит процедура</h2>
          <p className="text-foreground/80 mb-8">
            Аппаратная проработка тканей с роликово-вакуумной насадкой — комфортно и без боли
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[420px]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full rounded-2xl shadow-lg aspect-[9/16] object-cover bg-muted"
              aria-label="Видео аппаратного вакуумного массажа"
            >
              <source src="/videos/vacuum-massage.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="mt-6">
            <Link to="/booking?service=Вакуумный массаж">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl">
                Записаться на массаж <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-10 md:py-14 bg-cream">
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

    {/* Zones */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Зоны воздействия</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {zones.map((z, i) => (
            <motion.div key={z} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center p-4 rounded-xl bg-card border border-border">
              <span className="text-foreground/80 font-medium">{z}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Чем отличается */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Чем отличается от других процедур</h2>
        <div className="space-y-4">
          {difference.map((d, i) => (
            <motion.div key={d.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-background rounded-xl border border-border p-5">
              <h3 className="font-heading text-lg mb-2">{d.label}</h3>
              <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Link to="/goryachiy-vakuum-spb">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
              Горячий вакуум <ArrowRight size={14} />
            </Button>
          </Link>
          <Link to="/rf-lifting-tela-spb">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
              RF-лифтинг тела <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Contraindications */}
    <section className="py-8 md:py-10">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-6">Противопоказания</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {contraindications.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">
              <X size={14} className="text-destructive flex-shrink-0" />{c}
            </span>
          ))}
        </div>
      </div>
    </section>

    <ConsultationCapture />
    <CTASection title="Готовы избавиться от целлюлита?" subtitle="Запишитесь на вакуумный массаж — видимый результат после 2–3 процедур" />
  </Layout>
);

export default VakuumnyjMassazhSpb;
