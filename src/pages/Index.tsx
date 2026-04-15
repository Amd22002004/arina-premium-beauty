import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Check, MapPin, CalendarCheck, UserCheck, Sparkles, Zap, Heart, Eye, Droplets, CircleDot, Sun, Layers, Scan, FlameKindling, Activity, Crown, Gift, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { VKIcon, TelegramIcon } from "@/components/SocialIcons";
import ConsultationCapture from "@/components/ConsultationCapture";
import { formatPrice } from "@/data/services";
import { FloatingPetals, SectionFloralAccent, FloralDivider } from "@/components/FloralDecorations";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const problems = [
  { icon: Droplets, text: "Отёки и мешки под глазами" },
  { icon: Scan, text: "Поплыл овал лица" },
  { icon: Layers, text: "Дряблая кожа, потеря тонуса" },
  { icon: Sun, text: "Пигментация и неровный тон" },
  { icon: CircleDot, text: "Акне и постакне" },
  { icon: Activity, text: "Лишние объёмы и целлюлит" },
];

const solutionCategories = [
  {
    title: "Лицо — массаж",
    items: ["Скульптурный", "Миофасциальный 3D", "Лимфодренажный", "Классический", "Флиптинг", "INDIBA"],
    link: "/massazh-lica-spb",
  },
  {
    title: "Лицо — аппаратная косметология",
    items: ["Холодная плазма", "RF-лифтинг (микроигольчатый)", "Фотоомоложение BBL", "Лазерная шлифовка CO₂", "Пилинги"],
    link: "/aparatnye-protokoly-lica-spb",
  },
  {
    title: "Тело",
    items: ["Вакуумно-роликовый массаж (4D)", "Горячий вакуум", "EMS / BMS", "Прессотерапия", "Кавитация", "INDIBA"],
    link: "/korrekciya-figury-spb",
  },
];

const keyProcedures = [
  {
    title: "Холодная плазма",
    results: ["Омоложение и лифтинг", "Выравнивание кожи", "Постакне и пигментация", "Блефаропластика без операции"],
    price: 3900,
    link: "/holodnaya-plazma-spb",
  },
  {
    title: "Массаж лица",
    results: ["Убирает отёки", "Формирует овал", "Улучшает тонус кожи"],
    price: 1900,
    note: "Курс выгоднее — от 1 700 ₽/сеанс",
    link: "/massazh-lica-spb",
  },
  {
    title: "RF-лифтинг",
    results: ["Подтяжка без операции", "Уплотнение кожи", "Стимуляция коллагена"],
    price: 3900,
    link: "/mikroigolchatyj-rf-lifting-spb",
  },
  {
    title: "Коррекция фигуры",
    results: ["Уменьшение объёмов", "Лимфодренаж", "Антицеллюлит"],
    price: 2800,
    note: "5 сеансов — 13 500 ₽",
    link: "/korrekciya-figury-spb",
  },
];

const courses = [
  { name: "Массаж лица", sessions: "5 процедур", price: "11 500 ₽", bonus: "+ гуаша в подарок", link: "/kursy-i-kompleksy" },
  { name: "Коррекция фигуры", sessions: "Индивидуальный комплекс", price: "от 13 500 ₽", link: "/kursy-i-kompleksy" },
  { name: "Лимфодренаж", sessions: "Курс процедур", price: "от 11 200 ₽", link: "/kursy-i-kompleksy" },
  { name: "Восстановление", sessions: "Массаж + SPA", price: "от 13 500 ₽", link: "/kursy-i-kompleksy" },
];

const steps = [
  { num: "01", title: "Консультация", desc: "Обсуждаем задачу, анализируем состояние кожи и тела" },
  { num: "02", title: "Подбор протокола", desc: "Составляем индивидуальный план: подготовка → процедура → восстановление" },
  { num: "03", title: "Процедура", desc: "Работаем в приватной обстановке, без спешки, с полным вниманием" },
  { num: "04", title: "Результат", desc: "Видимый эффект уже после первого сеанса, накопительный — с курсом" },
];

const priceGroups = [
  {
    title: "Лицо",
    items: [
      { name: "Массаж лица", price: "от 1 900 ₽" },
      { name: "Уход за лицом", price: "от 2 300 ₽" },
      { name: "Пилинги", price: "от 3 000 ₽" },
    ],
    link: "/massazh-lica-spb",
  },
  {
    title: "Аппаратные процедуры",
    items: [
      { name: "Холодная плазма", price: "от 3 900 ₽" },
      { name: "BBL фотоомоложение", price: "от 7 500 ₽" },
      { name: "Лазерная шлифовка CO₂", price: "от 6 000 ₽" },
      { name: "Микроигольчатый RF", price: "от 3 900 ₽" },
    ],
    link: "/aparatnye-protokoly-lica-spb",
  },
  {
    title: "Тело",
    items: [
      { name: "Коррекция фигуры", price: "от 2 800 ₽" },
      { name: "Массаж тела", price: "от 2 000 ₽" },
      { name: "Лимфодренаж", price: "от 2 400 ₽" },
    ],
    link: "/korrekciya-figury-spb",
  },
  {
    title: "Курсы",
    items: [
      { name: "Массаж лица (5 сеансов)", price: "11 500 ₽" },
      { name: "Коррекция фигуры (5 сеансов)", price: "13 500 ₽" },
      { name: "Лимфодренаж (5 сеансов)", price: "11 200 ₽" },
    ],
    link: "/kursy-i-kompleksy",
  },
];

const Index = () => (
  <Layout>
    {/* JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "АРТ Косметология — Приватная студия аппаратной эстетики",
          url: "https://artbody.pro",
          telephone: "+79117193949",
          address: { "@type": "PostalAddress", streetAddress: "пр-т Обуховской Обороны, 110к1 (ЖК Молодежный)", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
          description: "Массаж лица и коррекция фигуры в Санкт-Петербурге. Убираем отёки, подтягиваем овал, улучшаем качество кожи и тела без операций.",
        }),
      }}
    />

    {/* ═══════════ 1. HERO — сразу в боль ═══════════ */}
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-violet/5" />
      </div>
      <FloatingPetals />
      <div className="relative container-wide px-4 md:px-8 py-24">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-5 py-2 rounded-full text-sm font-medium mb-6 border border-primary-foreground/10">
            <Sparkles size={14} /> Приватная студия | Санкт-Петербург
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
            Массаж лица и&nbsp;коррекция фигуры в&nbsp;Санкт-Петербурге
          </motion.h1>
          <motion.div variants={fadeUp} custom={2} className="text-primary-foreground/90 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl space-y-1">
            <p>Убираем отёки</p>
            <p>Подтягиваем овал лица</p>
            <p>Улучшаем качество кожи и тела без операций</p>
          </motion.div>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 text-lg shadow-xl hover:shadow-2xl transition-shadow">
                ✿ Записаться
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-x-6 gap-y-2 text-primary-foreground/60 text-sm">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Санкт-Петербург</span>
            <span className="flex items-center gap-1.5"><CalendarCheck size={14} /> Приватная запись</span>
            <span className="flex items-center gap-1.5"><UserCheck size={14} /> Один мастер — один клиент</span>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════ 2. С КАКИМИ ПРОБЛЕМАМИ РАБОТАЕМ ═══════════ */}
    <section className="relative py-16 md:py-20 bg-floral-cream overflow-hidden">
      <SectionFloralAccent position="both" />
      <div className="container-wide px-4 md:px-8 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">С какими проблемами работаем</h2>
          <FloralDivider className="mb-2" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Узнайте себя — мы знаем, как помочь</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <motion.div key={p.text} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-center gap-4 p-5 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/10 shadow-floral hover-lift">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-light to-rose-light flex items-center justify-center shrink-0">
                <p.icon size={20} className="text-primary" />
              </div>
              <span className="text-foreground font-medium leading-snug">{p.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ 3. КАК МЫ ЭТО РЕШАЕМ ═══════════ */}
    <section className="relative py-16 md:py-20 bg-glamour overflow-hidden">
      <div className="container-wide px-4 md:px-8 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Как мы это решаем</h2>
          <FloralDivider className="mb-2" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Системный подход — не хаос процедур, а чёткий план</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {solutionCategories.map((cat, i) => (
            <motion.div key={cat.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card/90 backdrop-blur-sm rounded-xl p-7 border border-primary/10 shadow-floral hover-lift">
              <h3 className="font-heading text-xl mb-4">{cat.title}</h3>
              <ul className="space-y-2.5 mb-5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-foreground">
                    <Check size={15} className="text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to={cat.link}>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Подробнее <ChevronRight size={14} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ 4. КЛЮЧЕВЫЕ ПРОЦЕДУРЫ (продающий) ═══════════ */}
    <section className="relative py-16 md:py-20 bg-floral-cream overflow-hidden">
      <SectionFloralAccent position="right" />
      <div className="container-wide px-4 md:px-8 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Ключевые процедуры</h2>
          <FloralDivider className="mb-2" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Самые эффективные решения для лица и тела</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {keyProcedures.map((proc, i) => (
            <motion.div key={proc.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card/90 backdrop-blur-sm rounded-xl p-7 border border-primary/10 shadow-floral hover-lift flex flex-col">
              <h3 className="font-heading text-2xl mb-4">{proc.title}</h3>
              <ul className="space-y-2 mb-5 flex-1">
                {proc.results.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-foreground">
                    <Check size={15} className="text-primary shrink-0" /> {r}
                  </li>
                ))}
              </ul>
              <div className="mb-4">
                <span className="font-heading text-2xl text-glamour">{formatPrice(proc.price)}</span>
                {proc.note && <p className="text-sm text-muted-foreground mt-1">{proc.note}</p>}
              </div>
              <Link to={proc.link}>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                  Подробнее <ChevronRight size={14} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ 5. КУРСЫ (ГДЕ ДЕНЬГИ) ═══════════ */}
    <section className="relative py-16 md:py-20 bg-glamour overflow-hidden">
      <div className="container-wide px-4 md:px-8 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-4">
            <Crown size={16} /> Результат только курсом
          </div>
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Курсы и комплексы</h2>
          <FloralDivider className="mb-2" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Экономия до 20% и стабильный результат</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {courses.map((c, i) => (
            <motion.div key={c.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-floral hover-lift text-center flex flex-col">
              <h3 className="font-heading text-lg mb-2">{c.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{c.sessions}</p>
              <p className="font-heading text-2xl text-glamour mb-1">{c.price}</p>
              {c.bonus && <p className="text-sm text-primary font-medium mb-3">{c.bonus}</p>}
              <div className="mt-auto pt-3">
                <Link to={c.link}>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                    Смотреть курс <ChevronRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <ConsultationCapture />

    {/* ═══════════ 6. КАК ПРОХОДИТ ПРОЦЕДУРА ═══════════ */}
    <section className="relative py-16 md:py-20 bg-floral-cream overflow-hidden">
      <SectionFloralAccent position="left" />
      <div className="container-wide px-4 md:px-8 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Как проходит процедура</h2>
          <FloralDivider className="mb-2" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Всё просто и прозрачно — снимаем любые страхи</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-light to-rose-light flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                <span className="font-heading text-2xl text-primary">{s.num}</span>
              </div>
              <h3 className="font-heading text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ 7. О МАСТЕРЕ ═══════════ */}
    <section className="relative py-16 md:py-20 bg-glamour overflow-hidden">
      <div className="container-narrow px-4 md:px-8 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">О мастере</h2>
          <FloralDivider />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="bg-card/90 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-primary/10 shadow-floral max-w-2xl mx-auto text-center">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Подбираю процедуры под задачу, а не делаю по шаблону. Каждый протокол — индивидуальный, каждый визит — приватный.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Опыт в аппаратной эстетике и массажных техниках. Работаю с лицом и телом, совмещаю ручные и аппаратные методики для максимального результата.
          </p>
          <Link to="/about">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Узнать больше <ChevronRight size={14} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ═══════════ 8. ЦЕНЫ (структурно) ═══════════ */}
    <section id="prices" className="relative py-16 md:py-20 bg-floral-cream scroll-mt-20 overflow-hidden">
      <SectionFloralAccent position="both" />
      <div className="container-wide px-4 md:px-8 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Цены</h2>
          <FloralDivider className="mb-2" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Лицо, аппаратные процедуры, тело и курсы — отдельно</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {priceGroups.map((g, i) => (
            <motion.div key={g.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-floral hover-lift flex flex-col">
              <h3 className="font-heading text-lg mb-4 text-center">{g.title}</h3>
              <ul className="space-y-3 flex-1 mb-5">
                {g.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-baseline gap-2">
                    <span className="text-foreground text-sm">{item.name}</span>
                    <span className="text-primary font-medium text-sm whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
              <Link to={g.link}>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                  Подробнее <ChevronRight size={14} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/price">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              Полный прайс-лист <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* ═══════════ 9. ОТЗЫВЫ (ссылка) ═══════════ */}
    <section className="relative py-10 md:py-14 bg-glamour overflow-hidden">
      <div className="container-narrow px-4 md:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Отзывы клиентов</h2>
          <p className="text-muted-foreground text-lg mb-6">Реальные результаты и обратная связь</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reviews">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                Смотреть отзывы <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
            <Link to="/before-after">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                Результаты до/после <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════ 10. ФИНАЛЬНЫЙ CTA ═══════════ */}
    <section className="py-16 md:py-20 bg-floral-cream">
      <div className="container-narrow px-4 md:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
          <FloralDivider className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl mb-5">Подберём процедуру под вашу задачу</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Расскажите, что беспокоит — подготовим индивидуальный протокол и запишем на удобное время
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow text-base">✿ Записаться</Button>
            </Link>
            <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-base gap-2">
                <TelegramIcon size={18} /> Telegram
              </Button>
            </a>
            <a href="https://vk.com/beauty_salon_arina" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-base gap-2">
                <VKIcon size={18} /> VK
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
