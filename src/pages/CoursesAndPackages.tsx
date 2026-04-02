import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Check, Sparkles, Heart, Droplets, Leaf, ArrowRight, Star,
  BadgePercent, Shield, UserCheck, TrendingUp, Zap, Award, ThumbsUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import ConsultationCapture from "@/components/ConsultationCapture";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

type Filter = "all" | "face" | "body" | "recovery";
type Tier = "5" | "10";

interface Course {
  id: Filter;
  title: string;
  subtitle: string;
  icon: typeof Sparkles;
  badge: string;
  badgeIcon: typeof Award;
  includes: string[];
  results: string[];
  suitsIf: string[];
  duration: string;
  price5: string;
  price10: string;
  links: { label: string; href: string }[];
}

const courses: Course[] = [
  {
    id: "face",
    title: "Курс омоложения лица",
    subtitle: "Комплексная программа для молодости и сияния кожи",
    icon: Sparkles,
    badge: "Самый популярный",
    badgeIcon: Award,
    includes: [
      "Массаж лица (скульптурный / миофасциальный)",
      "Уход за лицом (маски, сыворотки)",
      "Аппаратные процедуры (по показаниям)",
    ],
    results: [
      "Улучшение тонуса и упругости кожи",
      "Уменьшение отёков и тёмных кругов",
      "Более чёткий овал лица",
      "Здоровое сияние кожи",
    ],
    suitsIf: [
      "Кожа потеряла тонус и свежесть",
      "Хотите выглядеть моложе без инъекций",
      "Есть отёчность лица по утрам",
    ],
    duration: "5–10 процедур",
    price5: "от 13 500 ₽",
    price10: "от 25 000 ₽",
    links: [
      { label: "Массаж лица", href: "/massazh-lica-spb" },
      { label: "Уход за лицом", href: "/uhod-za-licom-spb" },
      { label: "Аппаратные протоколы лица", href: "/aparatnye-protokoly-lica-spb" },
    ],
  },
  {
    id: "body",
    title: "Курс коррекции фигуры",
    subtitle: "Моделирование силуэта и уменьшение объёмов",
    icon: Heart,
    badge: "Быстрый результат",
    badgeIcon: Zap,
    includes: [
      "Кавитация",
      "Прессотерапия (42 камеры)",
      "Вакуумный массаж",
      "Аппаратные процедуры (по показаниям)",
    ],
    results: [
      "Уменьшение объёмов на 2–4 см",
      "Улучшение силуэта и рельефа",
      "Снижение проявлений целлюлита",
      "Подтяжка и тонус кожи тела",
    ],
    suitsIf: [
      "Хотите убрать объёмы в проблемных зонах",
      "Целлюлит не уходит от спорта",
      "Нужен видимый результат к событию",
    ],
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
    id: "recovery",
    title: "Курс лимфодренажа",
    subtitle: "Снятие отёков и улучшение самочувствия",
    icon: Droplets,
    badge: "Рекомендуем",
    badgeIcon: ThumbsUp,
    includes: [
      "Лимфодренажный массаж",
      "Прессотерапия",
      "Мягкие восстановительные процедуры",
    ],
    results: [
      "Снижение отёчности лица и тела",
      "Лёгкость и энергия в теле",
      "Улучшение общего самочувствия",
      "Укрепление иммунитета",
    ],
    suitsIf: [
      "Часто отекают ноги или лицо",
      "Чувствуете тяжесть и усталость",
      "Ведёте сидячий образ жизни",
    ],
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
    id: "recovery",
    title: "Курс восстановления",
    subtitle: "Расслабление и восстановление после стресса",
    icon: Leaf,
    badge: "Для души и тела",
    badgeIcon: Heart,
    includes: [
      "Массаж тела",
      "СПА процедуры",
      "Инфракрасная капсула",
      "Медовая выкатка",
    ],
    results: [
      "Глубокое снятие напряжения",
      "Качественный сон и отдых",
      "Восстановление после стресса",
      "Улучшение настроения и энергии",
    ],
    suitsIf: [
      "Постоянный стресс и напряжение",
      "Плохой сон и усталость",
      "Хотите перезагрузку для тела и разума",
    ],
    duration: "5–10 процедур",
    price5: "от 11 000 ₽",
    price10: "от 20 000 ₽",
    links: [
      { label: "Массаж тела", href: "/massazh-tela-spb" },
      { label: "СПА и восстановление", href: "/spa-i-vosstanovlenie-spb" },
      { label: "Восстановительные массажи", href: "/vosstanovitelnye-massazhi-spb" },
    ],
  },
  {
    id: "body",
    title: "Озоно-кислородная терапия + прессотерапия",
    subtitle: "Детокс, дренаж и восстановление в одном комплексе",
    icon: Droplets,
    badge: "Новый курс",
    badgeIcon: Zap,
    includes: [
      "Озоно-кислородная терапия",
      "Прессотерапия",
    ],
    results: [
      "Улучшение лимфотока и дренажа",
      "Снижение отёчности",
      "Детоксикация организма",
      "Повышение тонуса и энергии",
    ],
    suitsIf: [
      "Отёчность и тяжесть в теле",
      "Нужен комплексный детокс",
      "Хотите улучшить общее самочувствие",
    ],
    duration: "1–10 процедур",
    price5: "13 500 ₽",
    price10: "24 000 ₽",
    links: [
      { label: "Коррекция фигуры", href: "/korrekciya-figury-spb" },
      { label: "Лимфодренажный массаж", href: "/vosstanovitelnye-massazhi-spb" },
    ],
  },
  {
    id: "body",
    title: "МРТС срочное похудение",
    subtitle: "Экспресс-коррекция объёмов за 1–2 процедуры",
    icon: Zap,
    badge: "Экспресс",
    badgeIcon: Award,
    includes: [
      "МРТС аппаратная процедура",
    ],
    results: [
      "Уменьшение объёмов уже после 1 процедуры",
      "Локальное жиросжигание",
    ],
    suitsIf: [
      "Нужен быстрый результат к событию",
      "Локальные жировые отложения",
    ],
    duration: "1–2 процедуры",
    price5: "14 500 ₽ за 2",
    price10: "14 500 ₽ за 2",
    links: [
      { label: "Коррекция фигуры", href: "/korrekciya-figury-spb" },
    ],
  },
];

const filters: { key: Filter; label: string; icon: typeof Sparkles }[] = [
  { key: "all", label: "Все курсы", icon: Star },
  { key: "face", label: "Омоложение лица", icon: Sparkles },
  { key: "body", label: "Коррекция фигуры", icon: Heart },
  { key: "recovery", label: "Отёки / восстановление", icon: Droplets },
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const [tier, setTier] = useState<Tier>("10");
  const price = tier === "5" ? course.price5 : course.price10;
  const Icon = course.icon;
  const BadgeIcon = course.badgeIcon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={fadeUp}
      className="bg-card rounded-2xl border-2 border-border overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 relative"
    >
      {/* Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold flex items-center gap-1.5 shadow-md">
          <BadgeIcon size={12} />
          {course.badge}
        </Badge>
      </div>

      {/* Header */}
      <div className="p-6 md:p-8 pb-4 border-b border-border/50 bg-cream/50">
        <div className="flex items-start gap-4 pr-24">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Icon size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-2xl md:text-3xl">{course.title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{course.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1 gap-6">
        {/* What's included */}
        <div>
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3 flex items-center gap-2">
            <Check size={14} className="text-primary" /> Что входит в курс
          </h4>
          <ul className="space-y-2">
            {course.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                <Check size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div className="bg-primary/5 rounded-xl p-4">
          <h4 className="text-xs uppercase tracking-wider text-primary font-bold mb-3 flex items-center gap-2">
            <TrendingUp size={14} /> Вы получите
          </h4>
          <ul className="space-y-2">
            {course.results.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                <Star size={14} className="text-primary mt-0.5 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Suits if */}
        <div className="bg-accent/30 rounded-xl p-4">
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3 flex items-center gap-2">
            <UserCheck size={14} className="text-primary" /> Подойдёт, если
          </h4>
          <ul className="space-y-2">
            {course.suitsIf.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm text-foreground/80">
                <ArrowRight size={12} className="text-primary mt-1 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Duration */}
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Длительность:</span> {course.duration}
        </p>

        {/* Tier selector + price */}
        <div className="bg-muted/40 rounded-xl p-5">
          <div className="flex gap-2 mb-4">
            {(["5", "10"] as Tier[]).map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                  tier === t
                    ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                    : "bg-background text-foreground/70 hover:bg-accent"
                }`}
              >
                {t} процедур
                {t === "10" && (
                  <span className="block text-[10px] opacity-80 mt-0.5">Самый выгодный</span>
                )}
                {t === "5" && (
                  <span className="block text-[10px] opacity-80 mt-0.5">Оптимальный</span>
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
              <span className="text-3xl font-bold text-foreground">{price}</span>
              {tier === "10" && (
                <span className="ml-2 inline-flex items-center gap-1 bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-medium">
                  <BadgePercent size={12} /> Максимальная выгода
                </span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <Link to="/booking" className="flex-1">
            <Button className="gold-gradient text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-shadow w-full h-12 text-base">
              Записаться на курс
            </Button>
          </Link>
          <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full h-12 text-base">
              Получить консультацию
            </Button>
          </a>
        </div>

        {/* Service links */}
        <div className="pt-4 border-t border-border/50">
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Входит в курс — подробнее</h4>
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

/* ─── Comparison block ─── */
const ComparisonBlock = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="py-12 md:py-16"
  >
    <div className="container-wide px-4 md:px-8">
      <motion.div variants={fadeUp} custom={0} className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-8">
          Почему курс выгоднее разовой процедуры?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {[
            { icon: BadgePercent, title: "Экономия до 15%", desc: "Стоимость процедуры в курсе ниже, чем при разовом посещении" },
            { icon: TrendingUp, title: "Системный результат", desc: "Курс процедур даёт накопительный эффект — результат заметнее и стабильнее" },
            { icon: Shield, title: "Закрепление эффекта", desc: "Регулярность позволяет закрепить результат и поддерживать его дольше" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i + 1}
              className="bg-card rounded-xl border border-border p-5 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

/* ─── Trust block ─── */
const TrustBlock = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="py-12 md:py-16 bg-cream"
  >
    <div className="container-wide px-4 md:px-8 text-center">
      <motion.div variants={fadeUp} custom={0}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <UserCheck size={24} className="text-primary" />
          <h2 className="font-heading text-2xl md:text-3xl">Индивидуальный подход</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-6">
          {[
            "Подбираем курс индивидуально под ваши задачи",
            "Учитываем состояние кожи и тела",
            "Корректируем программу по ходу курса",
            "Контролируем результат на каждом этапе",
          ].map((text, i) => (
            <motion.div
              key={text}
              variants={fadeUp}
              custom={i + 1}
              className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border text-left"
            >
              <Shield size={16} className="text-primary shrink-0" />
              <span className="text-sm text-foreground">{text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

/* ─── Page ─── */
const CoursesAndPackages = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? courses : courses.filter((c) => c.id === filter);

  return (
    <Layout>
      <Helmet>
        <title>Курсы и комплексы процедур в Санкт-Петербурге | АРТ Косметология</title>
        <meta name="description" content="Готовые курсы омоложения лица, коррекции фигуры, лимфодренажа и восстановления. Экономия до 15%. АРТ Косметология, СПб." />
        <link rel="canonical" href="https://artbody.pro/kursy-i-kompleksy" />
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-wide px-4 md:px-8 text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} /> Готовые решения
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              Курсы и&nbsp;комплексы процедур
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Подберите готовый курс под вашу задачу — результат заметнее, а стоимость ниже.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-10 md:py-14">
        <div className="container-wide px-4 md:px-8">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
            className="font-heading text-2xl md:text-3xl text-center mb-8"
          >
            Подберите курс под свою задачу
          </motion.h2>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
          >
            {filters.map((f) => {
              const FIcon = f.icon;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    filter === f.key
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-card border border-border text-foreground/70 hover:bg-accent"
                  }`}
                >
                  <FIcon size={14} />
                  {f.label}
                </button>
              );
            })}
          </motion.div>

          {/* Course cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filtered.map((c, i) => (
                <CourseCard key={c.title} course={c} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Comparison */}
      <ComparisonBlock />

      {/* First visit */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container-wide px-4 md:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Ещё не пробовали?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Начните со знакомства — первый визит со скидкой 30% на входные процедуры.
            </p>
            <Link to="/art-protokol-znakomstvo">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                Знакомство с АРТ-протоколом
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <ConsultationCapture />
      <TrustBlock />

      <CTASection />
    </Layout>
  );
};

export default CoursesAndPackages;
