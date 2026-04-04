import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import facialCareHero from "@/assets/facial-care-hero.jpeg";
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
  {
    name: "Уход за лицом (массаж + маски)",
    price: "2 990 ₽",
    priceValue: 2990,
    tiers: [
      { count: 5, total: 13500 },
      { count: 10, total: 25000 },
    ],
    desc: "Альгинатная, кислородная или увлажняющая маска — подбираем под состояние кожи",
  },
];

const suitableFor = [
  "Сухая и обезвоженная кожа",
  "Тусклый, уставший цвет лица",
  "Первые признаки возрастных изменений",
  "Отёчность и пастозность",
  "Потеря тонуса и эластичности",
  "После стрессов, перелётов, смены климата",
];

const benefits = [
  "Глубокое увлажнение и питание кожи",
  "Улучшение тонуса и цвета лица",
  "Уменьшение отёчности и следов усталости",
  "Разглаживание мелких морщин",
  "Лифтинг-эффект и подтяжка овала",
  "Расслабление мимических мышц",
];

const steps = [
  { title: "Консультация", desc: "Оценка состояния кожи и подбор типа маски" },
  { title: "Очищение", desc: "Деликатное очищение и подготовка кожи" },
  { title: "Массаж лица", desc: "Авторская техника массажа для проработки мышц и улучшения микроциркуляции" },
  { title: "Нанесение маски", desc: "Маска подбирается индивидуально для максимального эффекта" },
  { title: "Завершающий уход", desc: "Нанесение сыворотки и крема для закрепления результата" },
];

const contraindications = [
  "Острые воспалительные процессы на коже",
  "Герпес в стадии обострения",
  "Открытые раны и повреждения кожи",
  "Онкологические заболевания",
  "Повышенная температура тела",
  "Аллергия на компоненты маски",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Уход за лицом в Санкт-Петербурге",
  description: "Комплексные уходовые процедуры: массаж лица в сочетании с масками для глубокого восстановления и увлажнения кожи.",
  provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
  offers: { "@type": "Offer", price: "2990", priceCurrency: "RUB" },
};

const UhodZaLicomSpb = () => (
  <Layout>
    <Helmet>
      <title>Уход за лицом в Санкт-Петербурге — массаж лица с масками | АРТ Косметология</title>
      <meta name="description" content="Уход за лицом в СПб: массаж + маски для увлажнения и восстановления кожи. От 2 990 ₽. Запись онлайн." />
      <meta name="keywords" content="уход за лицом спб, массаж лица с маской спб, альгинатная маска спб, увлажнение лица спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/uhod-za-licom-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-10 md:py-16 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-10 items-center">
          {/* Photo — first on mobile */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
            className="order-1 lg:order-2">
            <img src={facialCareHero} alt="Профессиональный уход за лицом у косметолога — АРТ Косметология СПб"
              className="w-full max-h-[420px] rounded-2xl shadow-xl object-cover object-[center_30%] aspect-[4/3]" loading="eager" />
          </motion.div>

          {/* Text */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl text-foreground mb-5 leading-tight">
              Уход за лицом у&nbsp;косметолога в&nbsp;СПБ
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
              className="text-foreground text-lg md:text-xl max-w-xl mb-4 font-medium">
              Профессиональные процедуры для очищения, увлажнения, питания и&nbsp;восстановления кожи
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="text-primary font-heading text-2xl md:text-3xl mb-8">от 2&nbsp;990&nbsp;₽</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4">
              <Link to={`/booking?service=Уход за лицом (массаж + маски)`}>
                <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
                  Записаться на процедуру <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
              <a href="#prices">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">Смотреть цены</Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* Что это */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-6">Что такое уход за лицом?</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center leading-relaxed">
          Комплексная процедура, сочетающая авторский массаж лица и профессиональные маски. Глубокое увлажнение, питание и лифтинг-эффект за один сеанс.
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

    {/* Цены */}
    <div id="prices">
      <ServicePricingTiers title="Цены на уход за лицом" prices={prices} />
    </div>

    {/* Акция */}
    <section className="py-8 md:py-10">
      <div className="container-narrow px-4 md:px-8">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl gold-gradient p-8 md:p-12 text-center text-primary-foreground before:absolute before:inset-0 before:bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%)] before:animate-[shimmer_3s_ease-in-out_infinite] before:-translate-x-full before:pointer-events-none">
          <Star size={36} className="mx-auto mb-3 opacity-80 relative z-10" />
          <h2 className="font-heading text-2xl md:text-3xl mb-2 relative z-10">Первое посещение — скидка 30%</h2>
          <p className="text-base opacity-90 mb-5 max-w-xl mx-auto relative z-10">На уход за лицом для новых клиентов</p>
          <Link to={`/booking?service=Уход за лицом (массаж + маски)`} className="relative z-10">
            <Button size="lg" className="bg-white text-primary font-semibold px-10 border-0 shadow-lg hover:shadow-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300">Записаться со скидкой</Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Что даёт */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что даёт уход за лицом</h2>
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

    {/* Как проходит */}
    <section className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как проходит процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center">
              <div className="w-12 h-12 rounded-full gold-gradient text-primary-foreground flex items-center justify-center text-lg font-heading mx-auto mb-4">{i + 1}</div>
              <h3 className="font-heading text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
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
    <NextStep currentPath="/uhod-za-licom-spb" />
    <RelatedServices currentPath="/uhod-za-licom-spb" />
    <CTASection />
  </Layout>
);

export default UhodZaLicomSpb;
