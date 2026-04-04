import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X, Flame, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServicePricingTiers from "@/components/ServicePricingTiers";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import NextStep from "@/components/NextStep";
import ConsultationCapture from "@/components/ConsultationCapture";
import result1 from "@/assets/korrekciya-result-1.jpg";
import result2 from "@/assets/korrekciya-result-2.jpg";
import result3 from "@/assets/korrekciya-result-3.jpg";
import result4 from "@/assets/korrekciya-result-4.jpg";
import rfLiftingPhoto from "@/assets/rf-lifting-body.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  {
    name: "Коррекция фигуры",
    price: "3 500 ₽",
    priceValue: 3500,
    tiers: [
      { count: 5, total: 16000 },
      { count: 10, total: 30000 },
    ],
    desc: "Кавитация, прессотерапия, LPG, вакуумный массаж — подбираем методику",
  },
];

const suitableFor = [
  "Хотите уменьшить объёмы в проблемных зонах",
  "Боретесь с целлюлитом и дряблостью кожи",
  "Хотите подтянуть силуэт после похудения",
  "Нужен лимфодренаж и детоксикация",
  "Ищете безоперационную альтернативу липосакции",
];

const benefits = [
  "Уменьшение объёмов без хирургии",
  "Выраженный антицеллюлитный эффект",
  "Улучшение контуров и силуэта",
  "Повышение тонуса и упругости кожи",
  "Стимуляция лимфооттока и детоксикация",
  "Видимый результат уже после первых процедур",
];

const contraindications = [
  "Беременность и лактация",
  "Онкологические заболевания",
  "Острые воспалительные процессы",
  "Металлические импланты в зоне воздействия",
  "Тяжёлые формы варикозной болезни",
  "Нарушения свёртываемости крови",
];

const types = [
  { title: "Кавитация", desc: "Ультразвуковое разрушение жировых клеток. Эффективна для локальных отложений на животе, бёдрах и боках." },
  { title: "Прессотерапия", desc: "Аппаратный лимфодренаж: снимает отёки, улучшает микроциркуляцию и выводит лишнюю жидкость." },
  { title: "LPG-массаж", desc: "Вакуумно-роликовое воздействие для уменьшения целлюлита и моделирования силуэта." },
  { title: "EMS Body Sculpt", desc: "Электромиостимуляция для укрепления мышц и сжигания жировой прослойки." },
  { title: "Вакуумный массаж", desc: "Улучшает кровообращение и лимфоток, помогает в борьбе с целлюлитом." },
];

const steps = [
  { title: "Консультация", desc: "Определяем проблемные зоны и подбираем оптимальную программу" },
  { title: "Подготовка", desc: "Очищение и разогрев зоны обработки" },
  { title: "Процедура", desc: "Воздействие аппаратом по выбранному протоколу (30–60 мин)" },
  { title: "Завершение", desc: "Рекомендации по уходу и питьевому режиму" },
];

const KorrekciyaFigurySpb = () => (
  <Layout>
    <Helmet>
      <title>Коррекция фигуры в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Коррекция фигуры в СПб: кавитация, LPG, прессотерапия, EMS. От 3 500 ₽. Уменьшение объёмов без хирургии. Запись онлайн." />
      <meta name="keywords" content="коррекция фигуры спб, кавитация спб, lpg массаж спб, прессотерапия спб, антицеллюлитные процедуры спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/korrekciya-figury-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Коррекция фигуры в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "3500", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Коррекция фигуры в&nbsp;Санкт&#8209;Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Уменьшение объёмов, борьба с целлюлитом и подтяжка кожи без хирургии
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 3&nbsp;500&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={`/booking?service=Коррекция фигуры`}><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Записаться онлайн <ChevronRight size={16} className="ml-1" /></Button></Link>
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

    <div id="prices"><ServicePricingTiers title="Цены на коррекцию фигуры" prices={prices} /></div>

    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что даёт коррекция фигуры</h2>
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

    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-3">Результаты наших клиентов</h2>
        <p className="text-muted-foreground text-center text-sm mb-8 max-w-xl mx-auto">
          Результат индивидуален и зависит от особенностей организма, количества процедур и соблюдения рекомендаций
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { src: result1, caption: "Коррекция фигуры — курс 10 процедур" },
            { src: result2, caption: "Антицеллюлитная программа — курс 8 процедур" },
            { src: result3, caption: "Моделирование силуэта — курс 10 процедур" },
            { src: result4, caption: "Уменьшение объёмов — курс 5 процедур" },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="rounded-xl border border-border overflow-hidden bg-background">
              <img src={item.src} alt={item.caption} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <p className="text-sm text-muted-foreground text-center py-3 px-4">{item.caption}</p>
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

    {/* Горячий вакуум */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl text-center mb-10">Горячий вакуум</motion.h2>

        {/* Видео — главный визуальный элемент */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10">
          <video controls playsInline preload="metadata" className="w-full rounded-2xl shadow-lg"
            aria-label="Видео процедуры горячего вакуума">
            <source src="/videos/hot-vacuum.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Текст + преимущества */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto">
          <p className="text-foreground/90 leading-relaxed mb-6">
            Аппаратная процедура с термовакуумным воздействием для интенсивного расщепления жировых отложений,
            уменьшения объёмов и борьбы с целлюлитом. Прогрев тканей усиливает лимфодренаж и ускоряет метаболизм в проблемных зонах.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Разрушение жировых отложений за счёт термоэффекта",
              "Выраженный антицеллюлитный результат",
              "Подтяжка и повышение тонуса кожи",
              "Улучшение кровообращения и лимфооттока",
              "Уменьшение объёмов уже после первого сеанса",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Flame size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/booking?service=Горячий вакуум">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-8 shadow-xl hover:shadow-2xl transition-shadow">
              Записаться <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Аппаратный вакуумный массаж */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl text-center mb-10">Аппаратный вакуумный массаж</motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Видео — главный элемент */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-8">
            <video controls playsInline preload="metadata" className="w-full rounded-2xl shadow-lg"
              aria-label="Видео аппаратного вакуумного массажа">
              <source src="/videos/vacuum-massage.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Описание */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Аппаратный вакуумный массаж — эффективная методика коррекции фигуры, направленная на глубокую проработку
              подкожно-жировой клетчатки. Вакуумное воздействие разбивает фиброзные перегородки, усиливает кровообращение
              и запускает естественный процесс расщепления жировых отложений.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Уменьшение объёмов и моделирование контуров тела",
                "Глубокая проработка целлюлита и застойных зон",
                "Активизация лимфодренажа и выведение токсинов",
                "Повышение эластичности и тонуса кожи",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Sparkles size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/booking?service=Аппаратный вакуумный массаж">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-8 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* RF-лифтинг / Миостимуляция тела */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl text-center mb-10">RF-лифтинг / Миостимуляция тела</motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Фото — главный элемент */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-10">
            <img src={rfLiftingPhoto} alt="RF-лифтинг и миостимуляция тела — аппаратная процедура коррекции фигуры"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]" loading="lazy" />
          </motion.div>

          {/* Текст + преимущества */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Аппаратная процедура с прогревом тканей и глубокой стимуляцией мышц, направленная на уменьшение жировых отложений,
              подтяжку кожи и формирование контуров тела. Усиливает кровообращение, ускоряет обмен веществ и улучшает тонус.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Подтяжка и уплотнение кожи за счёт прогрева тканей",
                "Укрепление мышечного каркаса и формирование рельефа",
                "Уменьшение жировой прослойки в проблемных зонах",
                "Улучшение микроциркуляции и лимфооттока",
                "Видимый лифтинг-эффект уже после первых сеансов",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Zap size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/booking?service=RF-лифтинг / Миостимуляция тела">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-8 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
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
    <NextStep currentPath="/korrekciya-figury-spb" />
    <RelatedServices currentPath="/korrekciya-figury-spb" />
    <CTASection />
  </Layout>
);

export default KorrekciyaFigurySpb;
