import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, Shield, Users, Zap, Award, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import ConsultationCapture from "@/components/ConsultationCapture";
import result1 from "@/assets/korrekciya-result-1.jpg";
import result2 from "@/assets/korrekciya-result-2.jpg";
import result3 from "@/assets/korrekciya-result-3.jpg";
import result4 from "@/assets/korrekciya-result-4.jpg";
import hotVacuumPhoto from "@/assets/body-hot-vacuum-card.jpg";
import vacuumRollerPhoto from "@/assets/body-vacuum-roller-card.jpg";
import rfLiftingPhoto from "@/assets/body-rf-lifting-card.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const procedures = [
  {
    title: "Горячий вакуум",
    slug: "/goryachiy-vakuum-spb",
    image: hotVacuumPhoto,
    angle: "Жиросжигание и уменьшение объёмов",
    desc: "Термовакуумное воздействие разрушает жировые отложения, запускает лимфодренаж и подтягивает кожу. Эффект заметен уже после первой процедуры.",
    tag: "Термовоздействие",
  },
  {
    title: "Вакуумно-роликовый массаж (4D)",
    slug: "/vakuumnyj-massazh-spb",
    image: vacuumRollerPhoto,
    angle: "- Антицеллюлитная коррекция\n+ Уменьшение объёмов и коррекция фигуры",
    desc: "Разбивает жировые отложения\nУменьшает целлюлит\nМоделирует контуры тела\nЗапускает лимфодренаж",
    tag: "Вакуум",
  },
  {
    title: "RF-лифтинг тела",
    slug: "/rf-lifting-tela-spb",
    image: rfLiftingPhoto,
    angle: "Подтяжка кожи и тонус мышц",
    desc: "Глубокий прогрев тканей и миостимуляция формируют контуры тела, уплотняют кожу и укрепляют мышечный каркас без хирургии.",
    tag: "RF + миостимуляция",
  },
];

const comparison = [
  { feature: "Основная задача", hot: "Жиросжигание", vacuum: "Антицеллюлит", rf: "Подтяжка кожи" },
  { feature: "Механизм", hot: "Термовакуум", vacuum: "Вакуумный массаж", rf: "RF-прогрев + EMS" },
  { feature: "Эффект после 1-й процедуры", hot: "Уменьшение объёмов", vacuum: "Улучшение текстуры", rf: "Лифтинг-эффект" },
  { feature: "Курс", hot: "5–10 процедур", vacuum: "8–12 процедур", rf: "6–10 процедур" },
  { feature: "Зоны", hot: "Живот, бока, бёдра", vacuum: "Бёдра, ягодицы, руки", rf: "Всё тело" },
];

const trust = [
  { icon: <Award size={24} />, title: "12+ лет опыта", desc: "Практический опыт в аппаратной косметологии тела" },
  { icon: <Shield size={24} />, title: "Сертифицированные аппараты", desc: "Работаем на профессиональном оборудовании с доказанной эффективностью" },
  { icon: <Users size={24} />, title: "Индивидуальный подход", desc: "Подбираем программу под задачу, а не продаём одну процедуру всем" },
  { icon: <Sparkles size={24} />, title: "Видимый результат", desc: "Фиксируем замеры до и после — вы видите прогресс в цифрах" },
];

const faq = [
  { q: "Сколько нужно процедур для результата?", a: "Зависит от методики и задачи. Горячий вакуум — от 5, вакуумный массаж — от 8, RF-лифтинг — от 6 процедур. Точный курс определяем на консультации." },
  { q: "Кому подходит коррекция фигуры?", a: "Тем, кто хочет уменьшить объёмов, убрать целлюлит, подтянуть кожу после похудения или родов. Подбираем методику под вашу задачу." },
  { q: "Есть ли противопоказания?", a: "Да: беременность, онкология, острые воспаления, металлические импланты в зоне воздействия. Полный список обсуждаем на консультации." },
  { q: "Как быстро заметен эффект?", a: "Горячий вакуум и RF-лифтинг дают видимый эффект уже после первой процедуры. Вакуумный массаж — после 2–3 сеансов." },
  { q: "Чем отличаются методики друг от друга?", a: "Горячий вакуум — жиросжигание через нагрев. Вакуумный массаж — механическая проработка целлюлита. RF-лифтинг — подтяжка кожи и тонус мышц. Часто комбинируем для максимального эффекта." },
];

const steps = [
  { num: 1, title: "Консультация", desc: "Определяем проблемные зоны и подбираем программу" },
  { num: 2, title: "Подбор методики", desc: "Выбираем процедуру или комбинацию под вашу задачу" },
  { num: 3, title: "Процедура", desc: "Проводим сеанс на профессиональном оборудовании (30–60 мин)" },
  { num: 4, title: "Рекомендации", desc: "Даём советы по питанию и активности для закрепления результата" },
];

const KorrekciyaFigurySpb = () => (
  <Layout>
    <Helmet>
      <title>Коррекция фигуры в Санкт-Петербурге — аппаратные процедуры | АРТ Косметология</title>
      <meta name="description" content="Аппаратная коррекция фигуры в СПб: горячий вакуум, вакуумный массаж, RF-лифтинг тела. Уменьшение объёмов, антицеллюлит, подтяжка кожи. От 2 800 ₽." />
      <meta name="keywords" content="коррекция фигуры спб, горячий вакуум спб, вакуумный массаж спб, rf лифтинг тела спб, антицеллюлитные процедуры спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/korrekciya-figury-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Коррекция фигуры в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
        offers: { "@type": "Offer", price: "2800", priceCurrency: "RUB" },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Коррекция фигуры в&nbsp;Санкт&#8209;Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Три аппаратные методики для разных задач: жиросжигание, антицеллюлит, подтяжка кожи
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 2&nbsp;800&nbsp;₽ за процедуру</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking?service=Коррекция фигуры">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              Записаться на консультацию <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
          <a href="#procedures">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Выбрать процедуру
            </Button>
          </a>
        </motion.div>
      </div>
    </section>

    {/* Procedure cards */}
    <section id="procedures" className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Какую задачу решаем?</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Каждая методика работает по-своему. Выберите процедуру под свою цель — или запишитесь на консультацию, и мы подберём программу
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {procedures.map((p, i) => (
            <motion.div key={p.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link to={p.slug} className="group flex flex-col h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all">
                {/* Media */}
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 self-start px-3 py-1 rounded-full mb-3">{p.tag}</span>
                  <h3 className="font-heading text-2xl mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm font-medium text-primary/80 mb-3 whitespace-pre-line">{p.angle}</p>
                  <p className="text-muted-foreground text-sm flex-1 leading-relaxed whitespace-pre-line">{p.desc}</p>
                  <div className="flex items-center gap-2 text-primary font-medium mt-4">
                    Подробнее <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Comparison table */}
    <section className="py-12 md:py-16 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Чем отличаются процедуры</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">
          Сравните методики и выберите подходящую — или комбинируйте для максимального эффекта
        </p>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-3 font-heading text-base text-muted-foreground"></th>
                <th className="text-center py-4 px-3 font-heading text-base">Горячий вакуум</th>
                <th className="text-center py-4 px-3 font-heading text-base">Вакуумно-роликовый массаж (4D)</th>
                <th className="text-center py-4 px-3 font-heading text-base">RF-лифтинг тела</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <motion.tr key={row.feature} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                  className="border-b border-border/50 last:border-0">
                  <td className="py-3 px-3 font-medium text-foreground/70">{row.feature}</td>
                  <td className="py-3 px-3 text-center">{row.hot}</td>
                  <td className="py-3 px-3 text-center">{row.vacuum}</td>
                  <td className="py-3 px-3 text-center">{row.rf}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Results */}
    <section className="py-12 md:py-16">
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
              className="rounded-xl border border-border overflow-hidden bg-card">
              <img src={item.src} alt={item.caption} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <p className="text-sm text-muted-foreground text-center py-3 px-4">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="py-12 md:py-16 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trust.map((t, i) => (
            <motion.div key={t.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                {t.icon}
              </div>
              <h3 className="font-heading text-lg mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как проходит процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center">
              <div className="w-12 h-12 rounded-full gold-gradient text-primary-foreground flex items-center justify-center text-lg font-heading mx-auto mb-4">{s.num}</div>
              <h3 className="font-heading text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-12 md:py-16 bg-card">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Частые вопросы</h2>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <motion.details key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="group bg-background rounded-xl border border-border p-5 cursor-pointer">
              <summary className="font-heading text-lg list-none flex items-center justify-between gap-4">
                {item.q}
                <ChevronRight size={18} className="text-primary flex-shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <p className="text-muted-foreground mt-3 leading-relaxed">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>

    <ConsultationCapture />
    <CTASection title="Готовы начать коррекцию фигуры?" subtitle="Запишитесь на консультацию — подберём программу под вашу задачу" />
  </Layout>
);

export default KorrekciyaFigurySpb;
