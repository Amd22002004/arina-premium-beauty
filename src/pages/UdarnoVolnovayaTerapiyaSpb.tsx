import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import NextStep from "@/components/NextStep";
import ConsultationCapture from "@/components/ConsultationCapture";
import uvtHero from "@/assets/uvt-hero.jpg";
import uvtProcedure from "@/assets/uvt-procedure.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const bookingLink = (service: string) =>
  `/booking?service=${encodeURIComponent(service)}`;

const priceRows = [
  { label: "1 зона / 1 сеанс", price: "2 800 ₽" },
  { label: "2 зоны / 1 сеанс", price: "4 400 ₽" },
  { label: "3 зоны / 1 сеанс", price: "6 400 ₽" },
  { label: "Курс 5 процедур (1 зона)", price: "от 16 400 ₽", note: "экономия" },
  { label: "Курс 7 процедур (1 зона)", price: "от 22 400 ₽", note: "максимальная выгода" },
];

const howItWorks = [
  "Разрушает кальцификаты и солевые отложения",
  "Снимает воспаление без медикаментов",
  "Уменьшает болевой синдром уже после 1–2 сеансов",
  "Стимулирует восстановление хрящевой ткани",
  "Улучшает кровообращение в зоне воздействия",
];

const indications = [
  "Плантарный фасциит (пяточная шпора)",
  "Эпикондилит (теннисный локоть)",
  "Тендинит ахиллова сухожилия",
  "Боль в плечевом суставе",
  "Миофасциальный болевой синдром",
  "Кальцификаты мягких тканей",
  "Боли в коленном суставе",
  "Остеохондроз и мышечные спазмы",
];

const steps = [
  { title: "Диагностика", desc: "Определяем локализацию боли и подбираем параметры" },
  { title: "Подготовка", desc: "Наносим контактный гель на зону воздействия" },
  { title: "Процедура", desc: "Воздействие аппаратом УВТ (15–25 мин на зону)" },
  { title: "Рекомендации", desc: "План курса и советы по восстановлению" },
];

const contraindications = [
  "Онкологические заболевания",
  "Беременность",
  "Нарушения свёртываемости крови",
  "Наличие кардиостимулятора",
  "Острые инфекционные процессы",
  "Зона воздействия вблизи лёгких",
  "Тромбоз в зоне лечения",
];

const faq = [
  { q: "Больно ли делать УВТ?", a: "Ощущения зависят от зоны и интенсивности. В начале может быть умеренный дискомфорт, который снижается по мере процедуры. Параметры всегда подбираются индивидуально." },
  { q: "Сколько процедур нужно?", a: "Стандартный курс — 5–7 процедур с интервалом 5–7 дней. Эффект накопительный: многие отмечают улучшение уже после 1–2 сеансов." },
  { q: "Можно ли совмещать УВТ с другими процедурами?", a: "Да. УВТ хорошо сочетается с массажем, лимфодренажем и физиотерапией." },
  { q: "Есть ли реабилитация после УВТ?", a: "Специальной реабилитации не требуется. Рекомендуется избегать интенсивных нагрузок на обработанную зону в течение 24–48 часов." },
  { q: "Подходит ли УВТ при хронической боли?", a: "Да, УВТ особенно эффективна при хронических состояниях: пяточная шпора, эпикондилит, кальцификаты. Она запускает процесс восстановления там, где другие методы не дали результата." },
];

const UdarnoVolnovayaTerapiyaSpb = () => (
  <Layout>
    <Helmet>
      <title>Ударно-волновая терапия (УВТ) в Санкт-Петербурге — работа с болью | АРТ Косметология</title>
      <meta name="description" content="Ударно-волновая терапия (УВТ) в СПб: работа с болью в суставах, пяточной шпоры, кальцификатов. От 2 800 ₽ за зону. Курсы со скидкой. Запись онлайн." />
      <meta name="keywords" content="увт спб, ударно-волновая терапия спб, увт при болях, увт пяточная шпора спб, работа с болью суставов спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/uvt-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Ударно-волновая терапия (УВТ) в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "2800", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* ===== HERO с фото ===== */}
    <section className="relative min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={uvtHero}
        alt="Процедура ударно-волновой терапии — аппарат УВТ на теле пациента"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      <div className="relative z-10 container-wide px-4 md:px-8 text-center text-white py-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <Zap size={16} /> Новое направление
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl mb-5 drop-shadow-lg">
          Ударно&#8209;волновая терапия (УВТ)<br className="hidden md:block" /> в&nbsp;Санкт&#8209;Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-4 text-white/90">
          Лечение боли, воспалений и дегенеративных изменений без медикаментов и операций
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="font-heading text-2xl md:text-3xl mb-8 text-white">от 2&nbsp;800&nbsp;₽ за зону</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={bookingLink("Ударно-волновая терапия (УВТ) — 1 зона")}>
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              Записаться на приём <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
          <a href="#prices">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground px-8">
              Смотреть цены
            </Button>
          </a>
        </motion.div>
      </div>
    </section>

    {/* ===== Что такое УВТ ===== */}
    <section className="py-10 md:py-14">
      <div className="container-narrow px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-6">Что такое УВТ</h2>
        <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
          <p>
            Ударно-волновая терапия — современный физиотерапевтический метод, при котором акустические волны
            высокой энергии воздействуют на повреждённые ткани: разрушают кальцификаты, стимулируют регенерацию
            и улучшают кровообращение.
          </p>
          <p>
            Метод доказал эффективность при лечении пяточной шпоры, эпикондилита, тендинитов, мышечных болей
            и дегенеративных изменений суставов. Процедура безопасна и неинвазивна.
          </p>
        </div>
      </div>
    </section>

    {/* ===== Как работает УВТ (2 колонки: текст + фото) ===== */}
    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как работает УВТ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Левая колонка — текст */}
          <div className="space-y-4">
            {howItWorks.map((item, i) => (
              <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="flex items-start gap-3">
                <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
          {/* Правая колонка — фото */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={uvtProcedure}
              alt="УВТ — воздействие на колено, разрушение кальцификатов"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ===== Показания ===== */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Показания к УВТ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {indications.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <Zap size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== 💰 ЦЕНЫ (сразу после показаний) ===== */}
    <section id="prices" className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Цены на ударно-волновую терапию</h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {priceRows.map((row, i) => (
            <motion.div key={row.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-center justify-between gap-4 p-5 rounded-xl bg-background border border-border shadow-sm">
              <div>
                <span className="font-medium text-foreground">{row.label}</span>
                {row.note && (
                  <span className="ml-2 inline-block text-xs bg-primary/10 text-primary rounded-full px-2.5 py-0.5">{row.note}</span>
                )}
              </div>
              <span className="font-heading text-xl md:text-2xl text-primary whitespace-nowrap">{row.price}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to={bookingLink("Ударно-волновая терапия (УВТ)")}>
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              Записаться на УВТ <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* ===== Как проходит процедура ===== */}
    <section className="py-10 md:py-14">
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

    {/* ===== Противопоказания ===== */}
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

    {/* ===== FAQ ===== */}
    <section className="py-10 md:py-14">
      <div className="container-narrow px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Частые вопросы об УВТ</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faq.map((item, i) => (
            <motion.details key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="group bg-card border border-border rounded-xl p-5">
              <summary className="font-heading text-lg cursor-pointer list-none flex items-center justify-between">
                {item.q}
                <ChevronRight size={18} className="text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>

    <ConsultationCapture />
    <NextStep currentPath="/uvt-spb" />
    <RelatedServices currentPath="/uvt-spb" />
    <CTASection />
  </Layout>
);

export default UdarnoVolnovayaTerapiyaSpb;
