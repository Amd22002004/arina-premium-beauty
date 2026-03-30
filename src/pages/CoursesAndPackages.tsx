import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Sparkles, Heart, Zap, Crown, Layers, Star, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

interface PricingTier {
  label: string;
  qty: number;
  unitPrice: number;
  totalPrice: number;
  discount: number; // percent
  savings: number; // rubles
  best?: boolean;
}

interface CoursePackage {
  title: string;
  desc: string;
  icon: typeof Sparkles;
  tiers: PricingTier[];
  includes: string[];
}

const facePackages: CoursePackage[] = [
  {
    title: "Скульптурный массаж лица",
    desc: "Подтяжка овала, улучшение тонуса кожи, скульптурирование черт лица.",
    icon: Sparkles,
    includes: ["Индивидуальный подбор техники", "Оценка динамики после курса", "Гибкий график визитов"],
    tiers: [
      { label: "1 процедура", qty: 1, unitPrice: 2490, totalPrice: 2490, discount: 0, savings: 0 },
      { label: "5 процедур", qty: 5, unitPrice: 2241, totalPrice: 11205, discount: 10, savings: 1245 },
      { label: "10 процедур", qty: 10, unitPrice: 2116, totalPrice: 21165, discount: 15, savings: 3735, best: true },
    ],
  },
  {
    title: "Миофасциальный массаж лица",
    desc: "Глубокая проработка мышц и фасций для устранения зажимов и лифтинга.",
    icon: Sparkles,
    includes: ["Работа с миофасциальными цепями", "Коррекция асимметрии", "Снятие гипертонуса мышц"],
    tiers: [
      { label: "1 процедура", qty: 1, unitPrice: 2490, totalPrice: 2490, discount: 0, savings: 0 },
      { label: "5 процедур", qty: 5, unitPrice: 2241, totalPrice: 11205, discount: 10, savings: 1245 },
      { label: "10 процедур", qty: 10, unitPrice: 2116, totalPrice: 21165, discount: 15, savings: 3735, best: true },
    ],
  },
  {
    title: "Массаж лица + альгинатная маска",
    desc: "Массаж лица в сочетании с уходовой маской для глубокого увлажнения и восстановления.",
    icon: Heart,
    includes: ["Скульптурный / миофасциальный / 3D массаж", "Альгинатная или увлажняющая маска", "Рекомендации по домашнему уходу"],
    tiers: [
      { label: "1 процедура", qty: 1, unitPrice: 3490, totalPrice: 3490, discount: 0, savings: 0 },
      { label: "5 процедур", qty: 5, unitPrice: 3141, totalPrice: 15705, discount: 10, savings: 1745 },
      { label: "10 процедур", qty: 10, unitPrice: 2966, totalPrice: 29665, discount: 15, savings: 5235, best: true },
    ],
  },
  {
    title: "Массаж лица + аппарат (INDIBA / RF)",
    desc: "Сочетание ручных техник и аппаратных технологий для выраженного лифтинга.",
    icon: Zap,
    includes: ["Массаж лица для подготовки тканей", "Аппаратная процедура (INDIBA / RF / микротоки)", "Индивидуальный подбор протокола"],
    tiers: [
      { label: "1 процедура", qty: 1, unitPrice: 5990, totalPrice: 5990, discount: 0, savings: 0 },
      { label: "5 процедур", qty: 5, unitPrice: 5391, totalPrice: 26955, discount: 10, savings: 2995 },
      { label: "10 процедур", qty: 10, unitPrice: 5091, totalPrice: 50915, discount: 15, savings: 8985, best: true },
    ],
  },
];

const bodyPackages: CoursePackage[] = [
  {
    title: "Кавитация",
    desc: "Ультразвуковое расщепление жировых отложений для уменьшения объёмов.",
    icon: Crown,
    includes: ["Индивидуальный подбор зоны", "Замеры до и после курса", "Рекомендации по питьевому режиму"],
    tiers: [
      { label: "1 процедура", qty: 1, unitPrice: 2490, totalPrice: 2490, discount: 0, savings: 0 },
      { label: "5 процедур", qty: 5, unitPrice: 2241, totalPrice: 11205, discount: 10, savings: 1245 },
      { label: "10 процедур", qty: 10, unitPrice: 2116, totalPrice: 21165, discount: 15, savings: 3735, best: true },
    ],
  },
  {
    title: "Прессотерапия (42 камеры)",
    desc: "Аппаратный лимфодренаж для снятия отёков и улучшения лимфотока.",
    icon: Heart,
    includes: ["42-камерный аппарат", "Контроль давления по зонам", "Рекомендации по режиму"],
    tiers: [
      { label: "1 процедура", qty: 1, unitPrice: 2490, totalPrice: 2490, discount: 0, savings: 0 },
      { label: "5 процедур", qty: 5, unitPrice: 2241, totalPrice: 11205, discount: 10, savings: 1245 },
      { label: "10 процедур", qty: 10, unitPrice: 2116, totalPrice: 21165, discount: 15, savings: 3735, best: true },
    ],
  },
  {
    title: "Лимфодренажный массаж тела",
    desc: "Курс для снятия отёчности, улучшения лимфотока и общего самочувствия.",
    icon: Heart,
    includes: ["Ручной лимфодренажный массаж", "Прессотерапия по показаниям", "Контроль динамики отёков"],
    tiers: [
      { label: "1 процедура", qty: 1, unitPrice: 2490, totalPrice: 2490, discount: 0, savings: 0 },
      { label: "5 процедур", qty: 5, unitPrice: 2241, totalPrice: 11205, discount: 10, savings: 1245 },
      { label: "10 процедур", qty: 10, unitPrice: 2116, totalPrice: 21165, discount: 15, savings: 3735, best: true },
    ],
  },
  {
    title: "LPG-массаж",
    desc: "Аппаратный вакуумно-роликовый массаж для моделирования контуров тела.",
    icon: Layers,
    includes: ["Аппаратная проработка проблемных зон", "Комбинация с ручными техниками", "Контрольные замеры"],
    tiers: [
      { label: "1 процедура", qty: 1, unitPrice: 2990, totalPrice: 2990, discount: 0, savings: 0 },
      { label: "5 процедур", qty: 5, unitPrice: 2691, totalPrice: 13455, discount: 10, savings: 1495 },
      { label: "10 процедур", qty: 10, unitPrice: 2541, totalPrice: 25415, discount: 15, savings: 4485, best: true },
    ],
  },
];

const advantages = [
  "Экономия 10–15% по сравнению с разовыми визитами",
  "Устойчивый результат вместо разового эффекта",
  "Индивидуальный подбор процедур под вашу задачу",
  "Гибкий график — вы выбираете удобные даты",
  "Контроль динамики и корректировка плана",
  "Возможность комбинировать процедуры в одном курсе",
];

const formatRub = (n: number) => n.toLocaleString("ru-RU") + " ₽";

const TierRow = ({ tier }: { tier: PricingTier }) => (
  <div className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors ${tier.best ? "bg-primary/10 border border-primary/25" : "bg-muted/40"}`}>
    <div className="flex items-center gap-2">
      {tier.best && <Star size={14} className="text-primary shrink-0" />}
      <span className={`text-sm ${tier.best ? "font-semibold text-foreground" : "text-foreground/80"}`}>{tier.label}</span>
      {tier.best && <span className="text-[10px] uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-bold">Выгоднее</span>}
    </div>
    <div className="flex items-center gap-3 shrink-0">
      <span className={`font-semibold ${tier.best ? "text-primary text-base" : "text-foreground text-sm"}`}>{formatRub(tier.totalPrice)}</span>
      {tier.discount > 0 && (
        <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap">−{tier.discount}%</span>
      )}
    </div>
  </div>
);

const PackageCard = ({ pkg, index }: { pkg: CoursePackage; index: number }) => {
  const bestTier = pkg.tiers.find(t => t.best);
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp}
      className="bg-card p-8 rounded-xl border border-border hover-lift flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center shrink-0">
          <pkg.icon size={20} className="text-primary" />
        </div>
        <h3 className="font-heading text-xl">{pkg.title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{pkg.desc}</p>

      {/* Pricing tiers */}
      <div className="space-y-2 mb-5">
        {pkg.tiers.map((tier) => <TierRow key={tier.label} tier={tier} />)}
      </div>

      {/* Savings callout */}
      {bestTier && bestTier.savings > 0 && (
        <div className="bg-gold-light/50 rounded-lg px-4 py-3 mb-5 border border-primary/15">
          <p className="text-sm text-foreground font-medium flex items-center gap-2">
            <BadgePercent size={14} className="text-primary shrink-0" />
            Экономия до {formatRub(bestTier.savings)} при покупке курса из {bestTier.qty} процедур
          </p>
        </div>
      )}

      {/* Includes */}
      <ul className="space-y-2 mb-6">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-foreground/70 text-xs">
            <Check size={12} className="text-primary mt-0.5 shrink-0" /> {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto flex flex-col sm:flex-row gap-3">
        <Link to="/booking">
          <Button className="gold-gradient text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
            Записаться на курс
          </Button>
        </Link>
        <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
            Написать в Telegram
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

const CoursesAndPackages = () => (
  <Layout>
    <Helmet>
      <title>Курсы и комплексы процедур в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Курсы массажа лица, коррекции фигуры, лимфодренажа и комплексные протоколы. Экономия до 15% при покупке курса. АРТ Косметология, СПб." />
      <link rel="canonical" href="https://artbody.pro/kursy-i-kompleksy" />
    </Helmet>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Курсы и комплексы процедур — АРТ Косметология",
          description: "Курсы массажа, коррекции фигуры, лимфодренажа и комплексные протоколы в Санкт-Петербурге",
          url: "https://artbody.pro/kursy-i-kompleksy",
        }),
      }}
    />

    {/* Hero */}
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6">
            <Layers size={16} /> Курсы и комплексы
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Курсы и&nbsp;комплексы процедур
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Курс процедур даёт более устойчивый и&nbsp;выраженный результат, чем разовый визит.
            Экономия до&nbsp;15% при покупке курса.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться на консультацию
              </Button>
            </Link>
            <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                Написать в Telegram
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Почему курс */}
    <section className="py-14 md:py-20">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="font-heading text-3xl md:text-4xl text-center mb-10">
          Почему курс эффективнее
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {advantages.map((t, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 bg-card rounded-lg border border-border">
              <Check size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="text-foreground leading-relaxed text-sm">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Курсы для лица */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="font-heading text-3xl md:text-4xl text-center mb-4">
          Комплексы для лица
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Курсы массажа, уходов и аппаратных процедур для омоложения, лифтинга и улучшения качества кожи
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {facePackages.map((pkg, i) => <PackageCard key={pkg.title} pkg={pkg} index={i} />)}
        </div>
      </div>
    </section>

    {/* Курсы для тела */}
    <section className="py-14 md:py-20">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="font-heading text-3xl md:text-4xl text-center mb-4">
          Комплексы для тела
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Курсы коррекции фигуры, лимфодренажа и восстановления для устойчивого результата
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {bodyPackages.map((pkg, i) => <PackageCard key={pkg.title} pkg={pkg} index={i} />)}
        </div>
      </div>
    </section>

    {/* Первый визит */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Ещё не пробовали?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Начните со знакомства — первый визит со скидкой 30% на входные процедуры.
            Оцените подход и результат до покупки курса.
          </p>
          <Link to="/art-protokol-znakomstvo">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Знакомство с АРТ-протоколом
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default CoursesAndPackages;
