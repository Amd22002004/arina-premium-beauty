import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
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
  { name: "УВТ — 1 зона", price: "3 500 ₽", priceValue: 3500, tiers: [{ count: 5, total: 15750 }, { count: 7, total: 21000 }] },
  { name: "УВТ — 2 зоны", price: "5 700 ₽", priceValue: 5700, tiers: [{ count: 5, total: 25650 }, { count: 7, total: 34200 }] },
  { name: "УВТ — 3 зоны", price: "8 600 ₽", priceValue: 8600, tiers: [{ count: 5, total: 38700 }, { count: 7, total: 51600 }] },
];

const suitableFor = [
  "Боли в суставах и мышцах",
  "Пяточная шпора (плантарный фасциит)",
  "Хронические воспаления сухожилий",
  "Кальцификаты и отложения солей",
  "Мышечные триггерные точки",
  "Восстановление после травм и операций",
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

const benefits = [
  "Уменьшение и устранение боли уже после 1–2 сеансов",
  "Разрушение кальцификатов и солевых отложений",
  "Активация регенерации повреждённых тканей",
  "Восстановление подвижности суставов",
  "Снижение воспаления без медикаментов",
  "Улучшение кровообращения в зоне воздействия",
];

const contraindications = [
  "Онкологические заболевания",
  "Беременность",
  "Нарушения свёртываемости крови",
  "Наличие кардиостимулятора",
  "Острые инфекционные процессы",
  "Зона воздействия вблизи лёгких (риск пневмоторакса)",
  "Тромбоз в зоне лечения",
];

const steps = [
  { title: "Диагностика", desc: "Определяем локализацию боли, оцениваем состояние тканей и подбираем параметры воздействия" },
  { title: "Подготовка", desc: "Наносим контактный гель на зону воздействия для передачи ударной волны" },
  { title: "Процедура", desc: "Воздействие аппаратом УВТ по заданным параметрам (15–25 мин на зону)" },
  { title: "Рекомендации", desc: "Советы по восстановлению, интервалы между сеансами и план курса" },
];

const faq = [
  { q: "Больно ли делать УВТ?", a: "Ощущения зависят от зоны и интенсивности. В начале может быть умеренный дискомфорт, который снижается по мере процедуры. Параметры всегда подбираются индивидуально." },
  { q: "Сколько процедур нужно?", a: "Стандартный курс — 5–7 процедур с интервалом 5–7 дней. Эффект накопительный: многие отмечают улучшение уже после 1–2 сеансов." },
  { q: "Можно ли совмещать УВТ с другими процедурами?", a: "Да. УВТ хорошо сочетается с массажем, лимфодренажем и физиотерапией. Мы подберём оптимальную комбинацию." },
  { q: "Есть ли реабилитация после УВТ?", a: "Специальной реабилитации не требуется. Рекомендуется избегать интенсивных нагрузок на обработанную зону в течение 24–48 часов." },
  { q: "Подходит ли УВТ при хронической боли?", a: "Да, УВТ особенно эффективна при хронических состояниях: пяточная шпора, эпикондилит, кальцификаты. Она запускает процесс восстановления там, где другие методы не дали результата." },
];

const UdarnoVolnovayaTerapiyaSpb = () => (
  <Layout>
    <Helmet>
      <title>Ударно-волновая терапия (УВТ) в Санкт-Петербурге — лечение боли | АРТ Косметология</title>
      <meta name="description" content="Ударно-волновая терапия (УВТ) в СПб: лечение боли в суставах, пяточной шпоры, кальцификатов. От 3 500 ₽ за зону. Курсы со скидкой. Запись онлайн." />
      <meta name="keywords" content="увт спб, ударно-волновая терапия спб, увт при болях, увт пяточная шпора спб, лечение боли суставов спб, увт для суставов, увт кальцификаты" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/uvt-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Ударно-волновая терапия (УВТ) в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "3500", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <Zap size={16} /> Новое направление
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Ударно&#8209;волновая терапия (УВТ) в&nbsp;Санкт&#8209;Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Эффективное лечение боли, воспалений и дегенеративных изменений без медикаментов и операций
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 3&nbsp;500&nbsp;₽ за зону</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={`/booking?service=${encodeURIComponent("Ударно-волновая терапия (УВТ) — 1 зона")}`}>
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              Записаться на приём <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
          <a href="#prices">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Смотреть цены
            </Button>
          </a>
        </motion.div>
      </div>
    </section>

    {/* Что такое УВТ */}
    <section className="py-10 md:py-14">
      <div className="container-narrow px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-6">Что такое УВТ</h2>
        <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
          <p>
            Ударно-волновая терапия — это современный физиотерапевтический метод, при котором акустические волны
            высокой энергии воздействуют на повреждённые ткани. УВТ разрушает кальцификаты, стимулирует регенерацию,
            улучшает кровообращение и запускает естественные процессы восстановления.
          </p>
          <p>
            Метод доказал свою эффективность при лечении пяточной шпоры, эпикондилита, тендинитов, мышечных болей
            и дегенеративных изменений суставов. Процедура безопасна, неинвазивна и не требует медикаментозной поддержки.
          </p>
        </div>
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
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" /><span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Показания */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Показания к УВТ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {indications.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <Zap size={16} className="text-primary mt-0.5 flex-shrink-0" /><span className="text-sm text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Цены */}
    <div id="prices"><ServicePricingTiers title="Цены на ударно-волновую терапию" prices={prices} /></div>

    {/* Что даёт */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что даёт УВТ</h2>
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

    {/* Как проходит */}
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

    {/* FAQ */}
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
