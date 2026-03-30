import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Check, Sparkles, Heart, Zap, Crown, Layers, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

interface CoursePackage {
  title: string;
  desc: string;
  includes: string[];
  benefit: string;
  icon: typeof Sparkles;
  link?: string;
}

const facePackages: CoursePackage[] = [
  {
    title: "Курс массажа лица — 5 процедур",
    desc: "Базовый курс для подтяжки овала, улучшения тонуса и снятия отёчности.",
    includes: ["5 сеансов скульптурного или миофасциального массажа", "Индивидуальный подбор техники", "Оценка динамики после курса"],
    benefit: "Экономия до 15% по сравнению с разовыми визитами",
    icon: Sparkles,
    link: "/massazh-lica-spb",
  },
  {
    title: "Курс массажа лица — 10 процедур",
    desc: "Полный курс для устойчивого эффекта: лифтинг, дренаж, качество кожи.",
    includes: ["10 сеансов массажа лица на выбор", "Промежуточная оценка результата", "Индивидуальная схема визитов"],
    benefit: "Экономия до 20% по сравнению с разовыми визитами",
    icon: Sparkles,
    link: "/massazh-lica-spb",
  },
  {
    title: "Комплекс для лица: массаж + уход",
    desc: "Массаж лица в сочетании с уходовой маской для глубокого увлажнения и восстановления.",
    includes: ["Массаж лица (скульптурный / миофасциальный / 3D)", "Альгинатная или увлажняющая маска", "Рекомендации по домашнему уходу"],
    benefit: "Комплексный эффект: тонус + увлажнение + свежий цвет лица",
    icon: Heart,
    link: "/uhod-za-licom-spb",
  },
  {
    title: "Комплекс для лица: массаж + аппарат",
    desc: "Сочетание ручных техник и аппаратных технологий для выраженного лифтинга.",
    includes: ["Массаж лица для подготовки тканей", "Аппаратная процедура (INDIBA / RF / микротоки)", "Индивидуальный подбор протокола"],
    benefit: "Усиленный эффект: подготовка тканей повышает результат аппарата",
    icon: Zap,
    link: "/aparatnye-protokoly-lica-spb",
  },
];

const bodyPackages: CoursePackage[] = [
  {
    title: "Курс коррекции фигуры — 5 процедур",
    desc: "Стартовый курс для уменьшения объёмов, улучшения лимфотока и тонуса.",
    includes: ["5 сеансов: LPG / кавитация / прессотерапия / вакуумный массаж", "Индивидуальный подбор методики", "Замеры до и после курса"],
    benefit: "Экономия до 15% и видимый результат уже после 3-го сеанса",
    icon: Crown,
    link: "/korrekciya-figury-spb",
  },
  {
    title: "Курс коррекции фигуры — 10 процедур",
    desc: "Полный курс для устойчивого уменьшения объёмов и улучшения качества тела.",
    includes: ["10 сеансов коррекции фигуры", "Комбинация аппаратных и ручных техник", "Контрольные замеры и корректировка плана"],
    benefit: "Экономия до 20% и максимальный результат",
    icon: Crown,
    link: "/korrekciya-figury-spb",
  },
  {
    title: "Курс лимфодренажа — 5 процедур",
    desc: "Курс для снятия отёчности, улучшения лимфотока и общего самочувствия.",
    includes: ["5 сеансов лимфодренажного массажа тела", "Прессотерапия по показаниям", "Рекомендации по питьевому режиму"],
    benefit: "Экономия до 15% и заметное уменьшение отёков",
    icon: Heart,
    link: "/massazh-tela-spb",
  },
  {
    title: "Комплекс для тела: аппарат + массаж + СПА",
    desc: "Полноценный протокол: аппаратная коррекция, ручная проработка и восстановление.",
    includes: ["Аппаратная процедура (EMS / INDIBA / БМС)", "Массаж тела или лимфодренаж", "Инфракрасная капсула или обёртывание"],
    benefit: "Тройной эффект: коррекция + дренаж + восстановление",
    icon: Layers,
    link: "/apparatnye-protokoly-tela-spb",
  },
];

const advantages = [
  "Экономия 15–20% по сравнению с разовыми визитами",
  "Устойчивый результат вместо разового эффекта",
  "Индивидуальный подбор процедур под вашу задачу",
  "Гибкий график — вы выбираете удобные даты",
  "Контроль динамики и корректировка плана",
  "Возможность комбинировать разные процедуры в одном курсе",
];

const PackageCard = ({ pkg, index }: { pkg: CoursePackage; index: number }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp}
    className="bg-card p-8 rounded-xl border border-border hover-lift">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center shrink-0">
        <pkg.icon size={20} className="text-primary" />
      </div>
      <h3 className="font-heading text-xl">{pkg.title}</h3>
    </div>
    <p className="text-muted-foreground leading-relaxed mb-5">{pkg.desc}</p>
    <ul className="space-y-2 mb-5">
      {pkg.includes.map((item) => (
        <li key={item} className="flex items-start gap-2 text-foreground/80 text-sm">
          <Check size={14} className="text-primary mt-0.5 shrink-0" /> {item}
        </li>
      ))}
    </ul>
    <div className="bg-gold-light/50 rounded-lg px-4 py-3 mb-5 border border-primary/15">
      <p className="text-sm text-foreground font-medium flex items-center gap-2">
        <Star size={14} className="text-primary shrink-0" /> {pkg.benefit}
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-3">
      <Link to="/booking">
        <Button className="gold-gradient text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-shadow">
          Записаться на курс
        </Button>
      </Link>
      {pkg.link && (
        <Link to={pkg.link}>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Подробнее <ChevronRight size={14} className="ml-1" />
          </Button>
        </Link>
      )}
    </div>
  </motion.div>
);

const CoursesAndPackages = () => (
  <Layout>
    <Helmet>
      <title>Курсы и комплексы процедур в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Курсы массажа лица, коррекции фигуры, лимфодренажа и комплексные протоколы. Экономия до 20% при покупке курса. АРТ Косметология, СПб." />
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
            Экономия до&nbsp;20% при покупке курса.
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
              Знакомство с АРТ-протоколом <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default CoursesAndPackages;
