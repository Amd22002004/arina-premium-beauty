import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertCircle, Sparkles, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import NextStep from "@/components/NextStep";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  { name: "Кавитация", price: "2 490 ₽", discount: true },
  { name: "Прессотерапия", price: "2 490 ₽", discount: true },
  { name: "Вакуумный массаж", price: "2 490 ₽", discount: true },
  { name: "4D-коррекция фигуры", price: "2 990 ₽", discount: false },
  { name: "LPG-массаж", price: "2 990 ₽", discount: false },
  { name: "EMS Body Sculpt", price: "4 490 ₽", discount: false },
  { name: "Липосоникс MRTS", price: "11 900 ₽", discount: false },
];

const benefits = [
  "Уменьшение объёмов без хирургии",
  "Выраженный антицеллюлитный эффект",
  "Улучшение контуров и силуэта",
  "Повышение тонуса и упругости кожи",
  "Стимуляция лимфооттока и детоксикация",
  "Видимый результат уже после первых процедур",
];

const forWhom = [
  "Хотите уменьшить объёмы в проблемных зонах",
  "Боретесь с целлюлитом и дряблостью кожи",
  "Хотите подтянуть силуэт после похудения",
  "Нужен лимфодренаж и детоксикация",
  "Ищете безоперационную альтернативу липосакции",
];

const contraindications = [
  "Беременность и лактация",
  "Онкологические заболевания",
  "Острые воспалительные процессы",
  "Металлические импланты в зоне воздействия",
  "Тяжёлые формы варикозной болезни",
  "Нарушения свёртываемости крови",
];

const steps = [
  { title: "Консультация", desc: "Определяем проблемные зоны и подбираем оптимальную программу" },
  { title: "Подготовка", desc: "Очищение и разогрев зоны обработки" },
  { title: "Процедура", desc: "Воздействие аппаратом по выбранному протоколу (30–60 мин)" },
  { title: "Завершение", desc: "Рекомендации по уходу и питьевому режиму для закрепления результата" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Коррекция фигуры в Санкт-Петербурге",
  description: "LPG, кавитация, прессотерапия, EMS и вакуумный массаж для уменьшения объёмов и борьбы с целлюлитом.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
};

const KorrekciyaFigurySpb = () => (
  <Layout>
    <Helmet>
      <title>Коррекция фигуры в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Коррекция фигуры в Санкт-Петербурге: LPG, кавитация, прессотерапия, EMS и вакуумный массаж для уменьшения объёмов и борьбы с целлюлитом." />
      <meta name="keywords" content="коррекция фигуры спб, уменьшение объёмов спб, антицеллюлитные процедуры спб, кавитация спб, lpg массаж спб, прессотерапия спб, убрать живот спб, подтяжка тела спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/korrekciya-figury-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl text-center mb-6">
          Коррекция фигуры в&nbsp;Санкт-Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl text-center max-w-2xl mx-auto mb-4">
          Комплекс процедур для уменьшения объёмов, улучшения контуров тела, борьбы с целлюлитом и повышения тонуса кожи. Результат без хирургии — за счёт аппаратных технологий и грамотного подбора программы.
        </motion.p>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Кому подходит коррекция фигуры</h2>
          <p className="text-muted-foreground mb-6">Процедуры рекомендованы, если вы:</p>
          <ul className="space-y-3">
            {forWhom.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Что даёт */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Что даёт коррекция фигуры</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <Sparkles size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Виды процедур */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Виды процедур</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Кавитация</h3>
              <p className="text-muted-foreground text-sm">Ультразвуковое разрушение жировых клеток. Эффективна для локальных жировых отложений на животе, бёдрах и боках.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Прессотерапия</h3>
              <p className="text-muted-foreground text-sm">Аппаратный лимфодренаж: снимает отёки, улучшает микроциркуляцию и выводит лишнюю жидкость.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">LPG-массаж</h3>
              <p className="text-muted-foreground text-sm">Вакуумно-роликовое воздействие для уменьшения целлюлита, повышения упругости кожи и моделирования силуэта.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">EMS Body Sculpt</h3>
              <p className="text-muted-foreground text-sm">Электромиостимуляция для укрепления мышц и сжигания жировой прослойки без физических нагрузок.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Вакуумный массаж</h3>
              <p className="text-muted-foreground text-sm">Улучшает кровообращение и лимфоток, помогает в борьбе с целлюлитом и отёчностью.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Липосоникс MRTS</h3>
              <p className="text-muted-foreground text-sm">Высокоинтенсивный ультразвук для локального уменьшения жировой ткани. Выраженный результат уже после первого сеанса.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">4D-коррекция фигуры</h3>
              <p className="text-muted-foreground text-sm">Комплексный протокол: сочетание нескольких аппаратных методик за один сеанс для максимального эффекта.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Как проходит */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Как проходит процедура</h2>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">{i + 1}</div>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Противопоказания */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Противопоказания</h2>
          <ul className="space-y-3">
            {contraindications.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <AlertCircle size={18} className="text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Цены */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Цены</h2>
          <div className="space-y-4">
            {prices.map((p) => (
              <div key={p.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{p.name}</span>
                  {p.discount && (
                    <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      <BadgePercent size={12} /> −30% первое посещение
                    </span>
                  )}
                </div>
                <span className="font-semibold text-primary">{p.price}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            Скидка 30% на первое посещение действует для кавитации, прессотерапии и вакуумного массажа.
          </p>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeUp}>
          <h2 className="font-heading text-2xl mb-4">Запишитесь на коррекцию фигуры</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Подберём программу под ваши задачи — уменьшение объёмов, антицеллюлит или комплексное моделирование силуэта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться онлайн
              </Button>
            </Link>
            <a href="https://t.me/ART_and_beauty_studio" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10">
                Написать в Telegram
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <NextStep currentPath="/korrekciya-figury-spb" />
    <RelatedServices currentPath="/korrekciya-figury-spb" />
    <CTASection />
  </Layout>
);

export default KorrekciyaFigurySpb;
