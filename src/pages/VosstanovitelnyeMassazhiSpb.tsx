import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertCircle, Sparkles, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  { name: "Массаж для снятия отёков", price: "2 490 ₽", discount: true },
  { name: "Биоэнергетический массаж", price: "2 490 ₽", discount: false },
  { name: "БМ-массаж / БЭМ", price: "2 990 ₽", discount: false },
];

const benefits = [
  "Глубокое расслабление и снятие напряжения",
  "Уменьшение отёчности лица и тела",
  "Улучшение лимфооттока и микроциркуляции",
  "Восстановление после стресса и переутомления",
  "Нормализация сна и общего самочувствия",
  "Мягкое воздействие без агрессивных техник",
];

const forWhom = [
  "Чувствуете хроническую усталость и напряжение",
  "Беспокоят отёки лица или тела",
  "Нужно восстановиться после стресса или болезни",
  "Хотите мягкий массаж без глубокой проработки",
  "Ищете процедуру для общего расслабления и улучшения самочувствия",
];

const contraindications = [
  "Острые воспалительные процессы",
  "Онкологические заболевания",
  "Повышенная температура тела",
  "Кожные заболевания в зоне воздействия",
  "Тромбофлебит",
  "Тяжёлые сердечно-сосудистые заболевания",
];

const steps = [
  { title: "Консультация", desc: "Определяем состояние и подбираем подходящую технику" },
  { title: "Подготовка", desc: "Расслабление и мягкий разогрев тканей" },
  { title: "Массаж", desc: "Работа по выбранной методике в мягком, восстановительном режиме (30–50 мин)" },
  { title: "Завершение", desc: "Рекомендации по дальнейшему уходу и режиму" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Восстановительные массажи в Санкт-Петербурге",
  description: "Мягкие техники для снятия отёков, расслабления и восстановления организма.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
};

const VosstanovitelnyeMassazhiSpb = () => (
  <Layout>
    <Helmet>
      <title>Восстановительные массажи в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Восстановительные массажи в Санкт-Петербурге: мягкие техники для снятия отёков, расслабления и восстановления организма." />
      <meta name="keywords" content="восстановительный массаж спб, массаж от отёков спб, расслабляющий массаж спб, мягкий массаж тела, восстановление после стресса массаж, лимфодренаж мягкий массаж" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/vosstanovitelnye-massazhi-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl text-center mb-6">
          Восстановительные массажи в&nbsp;Санкт-Петербурге
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl text-center max-w-2xl mx-auto mb-4">
          Мягкие техники для снятия отёков, глубокого расслабления и общего восстановления организма. Без агрессивного воздействия — только комфорт и результат.
        </motion.p>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Кому подходят восстановительные массажи</h2>
          <p className="text-muted-foreground mb-6">Процедуры рекомендованы, если вы:</p>
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

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Что дают восстановительные массажи</h2>
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

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Виды массажей</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Массаж для снятия отёков</h3>
              <p className="text-muted-foreground text-sm">Мягкая лимфодренажная техника для уменьшения отёчности, улучшения микроциркуляции и выведения лишней жидкости.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Биоэнергетический массаж</h3>
              <p className="text-muted-foreground text-sm">Расслабляющая техника для снятия мышечного напряжения, восстановления после переутомления и улучшения общего тонуса.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">БМ-массаж / БЭМ</h3>
              <p className="text-muted-foreground text-sm">Комплексная восстановительная техника, сочетающая мягкое воздействие на мышцы и ткани для глубокого расслабления и улучшения самочувствия.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

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

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Цены</h2>
          <div className="space-y-4">
            {prices.map((p) => (
              <div key={p.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{p.name}</span>
                  {p.discount && (
                    <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      <BadgePercent size={12} /> −30% первое посещение
                    </span>
                  )}
                </div>
                <span className="font-semibold text-primary">{p.price}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            Скидка 30% на первое посещение действует для массажа для снятия отёков.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeUp}>
          <h2 className="font-heading text-2xl mb-4">Запишитесь на восстановительный массаж</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Подберём технику под ваш запрос — снятие отёков, расслабление или комплексное восстановление.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться онлайн
              </Button>
            </Link>
            <a href="https://t.me/ART_and_beauty_studio" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10">
                Написать в Telegram
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <NextStep currentPath="/vosstanovitelnye-massazhi-spb" />
    <RelatedServices currentPath="/vosstanovitelnye-massazhi-spb" />
    <CTASection />
  </Layout>
);

export default VosstanovitelnyeMassazhiSpb;
