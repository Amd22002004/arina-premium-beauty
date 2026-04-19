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

import heroImg from "@/assets/hero-indiba-body.jpeg";
import consultationImg from "@/assets/consultation-indiba.jpeg";
import processImg1 from "@/assets/process-indiba-1.jpeg";
import processImg2 from "@/assets/process-indiba-2.jpeg";
import resultImg from "@/assets/hero-indiba-body.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  {
    name: "Аппаратная процедура тела",
    price: "2 800 ₽",
    priceValue: 2800,
    tiers: [
      { count: 5, total: 13500 },
      { count: 10, total: 25000 },
    ],
    desc: "EMS, BMS, прессотерапия, Impulse, MTS-липосоник, кавитация, 4D массаж, INDIBA",
  },
];

const suitableFor = [
  "Желание скорректировать фигуру без операций",
  "Сниженный тонус мышц",
  "Целлюлит и локальные жировые отложения",
  "Восстановление после родов",
  "Малоподвижный образ жизни",
];

const benefits = [
  "Коррекция фигуры и уменьшение объёмов",
  "Укрепление мышц",
  "Улучшение лимфотока",
  "Снижение проявлений целлюлита",
  "Подтяжка кожи",
];

const feelItems = [
  "Лёгкость в теле",
  "Комфорт и расслабление",
  "Уверенность в своей фигуре",
];

const steps = [
  { title: "Консультация", desc: "Оценка состояния тела и подбор программы" },
  { title: "Подготовка", desc: "Очищение зоны и нанесение контактного средства" },
  { title: "Процедура", desc: "Аппаратное воздействие по протоколу" },
  { title: "Рекомендации", desc: "Уход после процедуры и планирование курса" },
];

const contraindications = [
  "Беременность и период лактации",
  "Онкологические заболевания",
  "Металлические импланты в зоне воздействия",
  "Кардиостимулятор",
  "Острые воспалительные процессы",
  "Эпилепсия",
];

const ApparatnyeProtokolyTelaSpb = () => (
  <Layout>
    <Helmet>
      <title>Аппаратные протоколы тела в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Аппаратные протоколы тела в СПб: EMS, INDIBA, БМС для коррекции фигуры и тонуса. От 2 800 ₽. Запись онлайн." />
      <meta name="keywords" content="аппаратные процедуры для тела спб, ems body sculpt спб, индиба тело спб, бмс мышцы спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/apparatnye-protokoly-tela-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Аппаратные протоколы тела в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "2800", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* SECTION 1 — HERO */}
    <section className="relative w-full aspect-[16/9] min-h-[420px] max-h-[680px] overflow-hidden">
      <img src={heroImg} alt="Аппаратные протоколы тела INDIBA" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 h-full flex items-center">
        <div className="container-wide px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              Аппаратные протоколы тела
            </h1>
            <p className="text-white/85 text-base sm:text-lg md:text-xl mb-2">
              EMS · BMS · Прессотерапия · Impulse · MTS-липосоник · Кавитация · 4D массаж · INDIBA
            </p>
            <p className="text-white font-heading text-2xl md:text-3xl mb-6">от 2&nbsp;800&nbsp;₽</p>
            <Link to="/booking?service=EMS / INDIBA / БМС">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться онлайн <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* SECTION 2 — MICRO TRUST */}
    <section className="py-6 md:py-8 bg-card border-b border-border">
      <div className="container-wide px-4 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          {["Без боли", "Без реабилитации", "Видимый эффект уже после 1–2 процедур"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-foreground/80">
              <Check size={18} className="text-primary flex-shrink-0" />
              <span className="text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 3 — КОМУ ПОДХОДИТ */}
    <section className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Кому подходит</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <div className="flex flex-col gap-4">
            {suitableFor.map((item, i) => (
              <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <img src={consultationImg} alt="Персональная консультация перед процедурой INDIBA" className="w-full aspect-[4/3] object-cover object-top rounded-2xl shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* SECTION 4 — ЧТО ЭТО И КАК РАБОТАЕТ */}
    <section className="py-12 md:py-16 bg-cream">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-8">Наши аппаратные методики</h2>
        <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed">
          <p><span className="font-semibold text-foreground">EMS</span> — электромиостимуляция для укрепления мышц и формирования рельефа тела.</p>
          <p><span className="font-semibold text-foreground">BMS</span> — биомеханическая стимуляция мышц для глубокого тонуса и восстановления.</p>
          <p><span className="font-semibold text-foreground">Прессотерапия</span> — аппаратный лимфодренаж для снятия отёков и детоксикации.</p>
          <p><span className="font-semibold text-foreground">Impulse</span> — импульсное воздействие для коррекции фигуры.</p>
          <p><span className="font-semibold text-foreground">MTS-липосоник</span> — ультразвуковое расщепление жировых отложений.</p>
          <p><span className="font-semibold text-foreground">Кавитация</span> — ультразвуковая липосакция без хирургии.</p>
          <p><span className="font-semibold text-foreground">4D массаж</span> — объёмное аппаратное воздействие для моделирования контуров.</p>
          <p><span className="font-semibold text-foreground">INDIBA</span> — радиочастотная терапия для восстановления тонуса тканей.</p>
        </div>
      </div>
    </section>

    {/* SECTION 5 — КАК ПРОХОДИТ ПРОЦЕДУРА */}
    <section className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как проходит процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="text-center">
              <div className="w-12 h-12 rounded-full gold-gradient text-primary-foreground flex items-center justify-center text-lg font-heading mx-auto mb-4">{i + 1}</div>
              <h3 className="font-heading text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto">
          <img src={processImg1} alt="Процесс аппаратной процедуры INDIBA на теле" className="w-full aspect-[16/10] object-cover rounded-2xl shadow-lg" />
        </motion.div>
      </div>
    </section>

    {/* SECTION 6 — ЭФФЕКТ ОТ ПРОЦЕДУР */}
    <section className="py-12 md:py-16 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Эффект от процедур</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div key={b} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 rounded-xl bg-background border border-border">
              <Sparkles size={18} className="text-primary mt-0.5 flex-shrink-0" /><span>{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 7 — КАК ВЫ БУДЕТЕ СЕБЯ ЧУВСТВОВАТЬ */}
    <section className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как вы будете себя чувствовать</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <img src={processImg2} alt="Ощущения после аппаратных процедур" className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg" />
          </motion.div>
          <div className="flex flex-col gap-4">
            {feelItems.map((item, i) => (
              <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
                <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 8 — РЕЗУЛЬТАТЫ */}
    <section className="py-12 md:py-16 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-10">Результаты после курса процедур</h2>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-6">
          <img src={resultImg} alt="Результат коррекции фигуры до и после курса процедур" className="w-full aspect-[2/1] object-cover rounded-2xl shadow-lg" />
        </motion.div>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">
          Результат после курса 4–6 процедур. Эффект индивидуален.
        </p>
      </div>
    </section>

    {/* SECTION 9 — ПРАЙС */}
    <div id="prices"><ServicePricingTiers title="Цены на аппаратные протоколы тела" prices={prices} /></div>

    {/* SECTION 9.5 — ВИДЕО ПРОЦЕДУРЫ */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Как проходит процедура</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Современные аппаратные технологии для бережной коррекции фигуры
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[500px] mx-auto"
          >
            <video
              src="/videos/apparatnye-protokoly-tela-process.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
          <div className="flex flex-col gap-4">
            {[
              "Безопасное аппаратное воздействие",
              "Комфортно и без боли",
              "Видимый результат уже после первых процедур",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
            <p className="text-primary font-medium text-base md:text-lg mt-2">
              Подходит даже для чувствительной кожи
            </p>
            <Link to="/booking?service=EMS / INDIBA / БМС" className="mt-2">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-8 shadow-xl hover:shadow-2xl transition-shadow w-full sm:w-auto">
                Записаться на процедуру <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 10 — ПРОТИВОПОКАЗАНИЯ */}
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

    {/* SECTION 11 — FINAL CTA */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl mb-4">Готовы начать путь к обновлению?</motion.h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">Подберём процедуру под вашу задачу</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking?service=EMS / INDIBA / БМС">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              Записаться онлайн <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
          <a href="https://t.me/art_cosmetology_spb" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Написать в Telegram
            </Button>
          </a>
        </div>
      </div>
    </section>

    <ConsultationCapture />
    <NextStep currentPath="/apparatnye-protokoly-tela-spb" />
    <RelatedServices currentPath="/apparatnye-protokoly-tela-spb" />
  </Layout>
);

export default ApparatnyeProtokolyTelaSpb;
