import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Sparkles, Heart, Droplets, Leaf, ArrowRight, Star, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

interface Course {
  title: string;
  subtitle: string;
  icon: typeof Sparkles;
  includes: string[];
  results: string[];
  duration: string;
  price5: string;
  price10: string;
  links: { label: string; href: string }[];
}

const courses: Course[] = [
  {
    title: "Курс омоложения лица",
    subtitle: "Комплексная программа для молодости и сияния кожи",
    icon: Sparkles,
    includes: ["Массаж лица (скульптурный / миофасциальный)", "Уход за лицом (маски, сыворотки)", "Аппаратные процедуры (по показаниям)"],
    results: ["Улучшение тонуса кожи", "Уменьшение отёков", "Более чёткий овал лица"],
    duration: "5–10 процедур",
    price5: "от 13 500 ₽",
    price10: "от 25 000 ₽",
    links: [
      { label: "Массаж лица", href: "/massazh-lica-spb" },
      { label: "Уход за лицом", href: "/uhod-za-licom-spb" },
      { label: "Аппаратные протоколы лица", href: "/apparatnye-protokoly-lica-spb" },
    ],
  },
  {
    title: "Курс коррекции фигуры",
    subtitle: "Моделирование силуэта и уменьшение объёмов",
    icon: Heart,
    includes: ["Кавитация", "Прессотерапия (42 камеры)", "Вакуумный массаж", "Аппаратные процедуры (по показаниям)"],
    results: ["Уменьшение объёмов", "Улучшение силуэта", "Снижение проявлений целлюлита"],
    duration: "5–10 процедур",
    price5: "от 11 500 ₽",
    price10: "от 22 000 ₽",
    links: [
      { label: "Коррекция фигуры", href: "/korrekciya-figury-spb" },
      { label: "Аппаратные протоколы тела", href: "/apparatnye-protokoly-tela-spb" },
      { label: "Массаж тела", href: "/massazh-tela-spb" },
    ],
  },
  {
    title: "Курс лимфодренажа",
    subtitle: "Снятие отёков и улучшение самочувствия",
    icon: Droplets,
    includes: ["Лимфодренажный массаж", "Прессотерапия", "Мягкие восстановительные процедуры"],
    results: ["Снижение отёчности", "Лёгкость в теле", "Улучшение самочувствия"],
    duration: "5–10 процедур",
    price5: "от 12 000 ₽",
    price10: "от 22 500 ₽",
    links: [
      { label: "Массаж тела", href: "/massazh-tela-spb" },
      { label: "Восстановительные массажи", href: "/vosstanovitelnye-massazhi-spb" },
      { label: "СПА и восстановление", href: "/spa-i-vosstanovlenie-spb" },
    ],
  },
  {
    title: "Курс восстановления",
    subtitle: "Расслабление, восстановление после стресса",
    icon: Leaf,
    includes: ["Массаж тела", "СПА процедуры", "Инфракрасная капсула", "Медовая выкатка"],
    results: ["Снятие напряжения", "Глубокое расслабление", "Восстановление после стресса"],
    duration: "5–10 процедур",
    price5: "от 11 000 ₽",
    price10: "от 20 000 ₽",
    links: [
      { label: "Массаж тела", href: "/massazh-tela-spb" },
      { label: "СПА и восстановление", href: "/spa-i-vosstanovlenie-spb" },
      { label: "Восстановительные массажи", href: "/vosstanovitelnye-massazhi-spb" },
    ],
  },
];

type Tier = "5" | "10";

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const [tier, setTier] = useState<Tier>("10");
  const price = tier === "5" ? course.price5 : course.price10;
  const Icon = course.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={fadeUp}
      className="bg-card rounded-xl border border-border overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className="p-6 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Icon size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-xl">{course.title}</h3>
            <p className="text-muted-foreground text-sm">{course.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 gap-5">
        {/* What's included */}
        <div>
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Что входит</h4>
          <ul className="space-y-1.5">
            {course.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div>
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Результат</h4>
          <ul className="space-y-1.5">
            {course.results.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-foreground/80">
                <Star size={14} className="text-primary mt-0.5 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Duration */}
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Длительность:</span> {course.duration}
        </p>

        {/* Tier selector + price */}
        <div className="bg-muted/40 rounded-lg p-4">
          <div className="flex gap-2 mb-3">
            {(["5", "10"] as Tier[]).map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                  tier === t
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-background text-foreground/70 hover:bg-accent"
                }`}
              >
                {t} процедур
                {t === "10" && (
                  <span className="block text-[10px] opacity-80 mt-0.5">Самый выгодный</span>
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <span className="text-2xl font-bold text-foreground">{price}</span>
              {tier === "10" && (
                <span className="ml-2 inline-flex items-center gap-1 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                  <BadgePercent size={12} /> Максимальная выгода
                </span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-auto flex flex-col sm:flex-row gap-2">
          <Link to="/booking" className="flex-1">
            <Button className="gold-gradient text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-shadow w-full">
              Записаться на курс
            </Button>
          </Link>
          <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
              Написать в Telegram
            </Button>
          </a>
        </div>

        {/* Service links */}
        <div className="pt-3 border-t border-border/50">
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Подробнее об услугах</h4>
          <div className="flex flex-wrap gap-2">
            {course.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
              >
                {link.label} <ArrowRight size={10} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesAndPackages = () => (
  <Layout>
    <Helmet>
      <title>Курсы и комплексы процедур в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Готовые курсы омоложения лица, коррекции фигуры, лимфодренажа и восстановления. Экономия до 15%. АРТ Косметология, СПб." />
      <link rel="canonical" href="https://artbody.pro/kursy-i-kompleksy" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} /> Готовые решения
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Курсы и&nbsp;комплексы процедур
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Подберите готовый курс под вашу задачу — омоложение, коррекция фигуры, лимфодренаж или восстановление. Результат заметнее, а стоимость — ниже.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Courses */}
    <section className="py-14 md:py-20">
      <div className="container-wide px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((c, i) => (
            <CourseCard key={c.title} course={c} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* First visit */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Ещё не пробовали?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Начните со знакомства — первый визит со скидкой 30% на входные процедуры. Оцените подход и результат до покупки курса.
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
