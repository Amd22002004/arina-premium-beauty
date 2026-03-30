import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Sparkles, Users, Zap, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const procedures = [
  { name: "Микротоковая терапия", price: "2 490 ₽", desc: "Мягкое воздействие микротоками для улучшения тонуса, лимфодренажа и восстановления клеточного обмена." },
  { name: "Лазерная чистка лица", price: "3 490 ₽", desc: "Бережное очищение кожи лазером: удаление загрязнений, выравнивание рельефа и здоровое сияние." },
  { name: "Холодная плазма / блефаропластика", price: "5 900 ₽", desc: "Безоперационная подтяжка и коррекция зоны вокруг глаз с помощью холодной плазмы." },
  { name: "Карбокситерапия", price: "2 900 ₽", desc: "Насыщение кожи углекислым газом для улучшения кровообращения, тонуса и естественного сияния." },
];

const benefits = [
  "Улучшение тонуса и упругости кожи",
  "Выравнивание тона и текстуры",
  "Мягкий лифтинг без инъекций",
  "Восстановление после стрессов и усталости",
  "Стимуляция клеточного обновления",
  "Здоровое сияние и свежий вид",
];

const audience = [
  "Тем, кто хочет улучшить качество кожи без инвазивных процедур",
  "При первых признаках возрастных изменений",
  "Для восстановления после стрессов, недосыпа и усталости",
  "Тем, кто ищет деликатный уход с выраженным результатом",
  "Для поддержания результата после курса интенсивных процедур",
];

const contraindications = [
  "Острые воспалительные процессы на коже",
  "Онкологические заболевания",
  "Беременность и период лактации",
  "Наличие кардиостимулятора (для микротоков)",
  "Эпилепсия",
  "Индивидуальная непереносимость",
];

const steps = [
  { title: "Консультация", text: "Оценка состояния кожи и подбор оптимальной процедуры." },
  { title: "Подготовка", text: "Деликатное очищение и подготовка кожи." },
  { title: "Процедура", text: "Аппаратное воздействие по индивидуальному протоколу." },
  { title: "Завершение", text: "Нанесение восстанавливающих средств и рекомендации по уходу." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Аппаратная косметология лица",
  provider: { "@type": "Organization", name: "АРТ Косметология", url: "https://arina-premium-beauty.lovable.app" },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
  description: "Аппаратная косметология лица в Санкт-Петербурге: микротоки, лазерная чистка, холодная плазма и карбокситерапия для омоложения и восстановления кожи.",
};

const ApparatnayaKosmetologiyaLicaSpb = () => (
  <Layout>
    <Helmet>
      <title>Аппаратная косметология лица в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Аппаратная косметология лица в Санкт-Петербурге: микротоки, лазерная чистка, холодная плазма и карбокситерапия для омоложения, восстановления и улучшения качества кожи." />
      <meta name="keywords" content="аппаратная косметология лица спб, микротоки лица спб, лазерная чистка лица спб, холодная плазма лица спб, карбокситерапия спб, безоперационное омоложение лица, процедуры для лица спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/apparatnaya-kosmetologiya-lica-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl text-center mb-6">
          Аппаратная косметология лица в&nbsp;Санкт-Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed">
          Деликатные безоперационные процедуры для омоложения, восстановления и&nbsp;улучшения качества кожи. Мягкое воздействие с&nbsp;выраженным результатом.
        </motion.p>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Users size={24} className="text-primary" />
            <h2 className="font-heading text-2xl">Кому подходит</h2>
          </div>
          <ul className="space-y-3">
            {audience.map((item) => (
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
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={24} className="text-primary" />
            <h2 className="font-heading text-2xl">Что дают процедуры</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Виды процедур */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-center mb-10">Виды процедур</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {procedures.map((p, i) => (
            <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-6 border border-border hover-lift">
              <h3 className="font-heading text-xl mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <span className="text-primary font-semibold text-lg">{p.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Как проходит */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Clock size={24} className="text-primary" />
            <h2 className="font-heading text-2xl">Как проходит процедура</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm flex-shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.text}</p>
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck size={24} className="text-primary" />
            <h2 className="font-heading text-2xl">Противопоказания</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contraindications.map((c) => (
              <li key={c} className="flex items-start gap-3 text-foreground/80">
                <ChevronRight size={14} className="text-primary mt-1 flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Цены */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-center mb-10">Цены</h2>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {procedures.map((p, i) => (
            <div key={p.name} className={`flex items-center justify-between p-5 ${i < procedures.length - 1 ? "border-b border-border" : ""}`}>
              <span className="font-medium">{p.name}</span>
              <span className="text-primary font-semibold whitespace-nowrap ml-4">{p.price}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/price">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Полный прайс-лист <ChevronRight size={14} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/apparatnaya-kosmetologiya-lica-spb" />
    <CTASection />
  </Layout>
);

export default ApparatnayaKosmetologiyaLicaSpb;
