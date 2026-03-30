import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertCircle, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  { name: "Руки", price: "1 990 ₽" },
  { name: "Лицо + подбородок", price: "2 490 ₽" },
  { name: "«Вдовий горбик»", price: "2 490 ₽" },
  { name: "Живот + бока", price: "2 990 ₽" },
  { name: "Бёдра + ягодицы", price: "2 990 ₽" },
  { name: "С лимфодренажным массажем", price: "3 490 ₽" },
];

const benefits = [
  "Улучшение микроциркуляции и питания тканей",
  "Восстановление и обновление кожи",
  "Уменьшение локальных жировых отложений",
  "Снятие отёчности и улучшение лимфооттока",
  "Повышение тонуса и упругости кожи",
  "Общее оздоровление и детоксикация организма",
];

const forWhom = [
  "Есть локальные жировые отложения в проблемных зонах",
  "Беспокоит «вдовий горбик» или второй подбородок",
  "Хотите улучшить состояние кожи лица и тела",
  "Нужно снять отёчность и улучшить лимфоток",
  "Ищете мягкую восстановительную процедуру",
];

const contraindications = [
  "Беременность и лактация",
  "Онкологические заболевания",
  "Острые воспалительные процессы",
  "Нарушения свёртываемости крови",
  "Гипертиреоз",
  "Индивидуальная непереносимость озона",
];

const steps = [
  { title: "Консультация", desc: "Специалист определяет зоны воздействия и подбирает концентрацию" },
  { title: "Подготовка", desc: "Обработка зоны антисептиком" },
  { title: "Процедура", desc: "Введение озоно-кислородной смеси в выбранную зону (15–30 мин)" },
  { title: "Завершение", desc: "Рекомендации по уходу и дальнейшему курсу" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Озонотерапия в Санкт-Петербурге",
  description: "Процедура для восстановления тканей, улучшения микроциркуляции и общего состояния кожи и организма.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
};

const OzonoterapiyaSpb = () => (
  <Layout>
    <Helmet>
      <title>Озонотерапия в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Озонотерапия в Санкт-Петербурге: процедура для восстановления тканей, улучшения микроциркуляции и общего состояния кожи и организма." />
      <meta name="keywords" content="озонотерапия спб, озон для лица спб, озонотерапия тела спб, лечение озоном спб, восстановление кожи спб, улучшение микроциркуляции" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/ozonoterapiya-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl text-center mb-6">
          Озонотерапия в&nbsp;Санкт-Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl text-center max-w-2xl mx-auto mb-4">
          Процедура с использованием активного кислорода для восстановления тканей, улучшения микроциркуляции и общего оздоровления организма. Мягкое и эффективное воздействие без агрессивных методик.
        </motion.p>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Кому подходит озонотерапия</h2>
          <p className="text-muted-foreground mb-6">Процедура рекомендована, если у вас:</p>
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
          <h2 className="font-heading text-2xl mb-6">Что даёт озонотерапия</h2>
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

    {/* Зоны применения */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Зоны применения</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Лицо + подбородок</h3>
              <p className="text-muted-foreground text-sm">Улучшение тонуса кожи, уменьшение второго подбородка, выравнивание текстуры.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Живот + бока</h3>
              <p className="text-muted-foreground text-sm">Уменьшение локальных жировых отложений и подтяжка кожи в области талии.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Бёдра + ягодицы</h3>
              <p className="text-muted-foreground text-sm">Борьба с целлюлитом, улучшение рельефа и повышение упругости кожи.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">«Вдовий горбик»</h3>
              <p className="text-muted-foreground text-sm">Уменьшение жировой складки в области шейно-воротниковой зоны.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Руки</h3>
              <p className="text-muted-foreground text-sm">Подтяжка и улучшение состояния кожи рук.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">С лимфодренажным массажем</h3>
              <p className="text-muted-foreground text-sm">Усиленный эффект: озонотерапия в сочетании с ручным лимфодренажем для максимальной детоксикации.</p>
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
                <span className="font-medium">{p.name}</span>
                <span className="font-semibold text-primary">{p.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Консультация */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5.5} variants={fadeUp}
          className="bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20 flex items-start gap-4">
          <Info size={22} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold mb-1">Необходима консультация специалиста</p>
            <p className="text-muted-foreground text-sm">
              Перед началом курса озонотерапии специалист проведёт осмотр, определит зоны воздействия и подберёт оптимальную программу с учётом ваших индивидуальных особенностей.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeUp}>
          <h2 className="font-heading text-2xl mb-4">Запишитесь на озонотерапию</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Подберём зону и курс для вашего запроса — восстановление, коррекция или оздоровление.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться онлайн
              </Button>
            </Link>
            <a href="https://t.me/art_kosmetologiya" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10">
                Написать в Telegram
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <RelatedServices currentPath="/ozonoterapiya-spb" />
    <CTASection />
  </Layout>
);

export default OzonoterapiyaSpb;
