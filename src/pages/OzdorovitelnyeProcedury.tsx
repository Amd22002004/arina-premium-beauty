import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, X, Info } from "lucide-react";
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
  { name: "Хиджама", price: "от 1 600 ₽" },
  { name: "Гирудотерапия", price: "от 1 600 ₽" },
];

const suitableFor = [
  "Ищете мягкие восстановительные методики",
  "Хотите дополнить основной курс процедур",
  "Интересуетесь традиционными оздоровительными техниками",
  "Хотите улучшить общее самочувствие и тонус",
];

const benefits = [
  "Улучшение общего самочувствия и тонуса",
  "Снятие напряжения и усталости",
  "Поддержка восстановительных процессов",
  "Улучшение микроциркуляции и лимфооттока",
  "Мягкое дополнение к основному курсу",
];

const contraindications = [
  "Беременность и лактация",
  "Онкологические заболевания",
  "Острые воспалительные процессы",
  "Нарушения свёртываемости крови",
  "Анемия тяжёлой степени",
  "Индивидуальные противопоказания (на консультации)",
];

const OzdorovitelnyeProcedury = () => (
  <Layout>
    <Helmet>
      <title>Оздоровительные процедуры в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Оздоровительные процедуры в СПб: хиджама и гирудотерапия. От 1 600 ₽. Только по консультации. Запись онлайн." />
      <meta name="keywords" content="хиджама спб, гирудотерапия спб, оздоровительные процедуры спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/ozdorovitelnye-procedury-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Оздоровительные процедуры в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Оздоровительные процедуры
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Дополнительные методы восстановления организма. Проводятся только после консультации специалиста
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 1&nbsp;600&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={`/booking?service=Хиджама`}><Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">Записаться на консультацию <ChevronRight size={16} className="ml-1" /></Button></Link>
          <a href="#prices"><Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">Смотреть цены</Button></a>
        </motion.div>
      </div>
    </section>

    <section className="py-10 md:py-14 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Кому могут подойти процедуры</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {suitableFor.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" /><span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <div id="prices"><ServicePricingTiers title="Цены" prices={prices} /></div>

    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Что дают процедуры</h2>
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

    {/* Важно */}
    <section className="py-8 md:py-10">
      <div className="container-narrow px-4 md:px-8">
        <div className="bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20 flex items-start gap-4">
          <Info size={22} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold mb-1">Необходима консультация специалиста</p>
            <p className="text-muted-foreground text-sm">
              Оздоровительные процедуры проводятся только после индивидуальной консультации. Специалист оценит состояние здоровья и подберёт подходящую методику.
            </p>
          </div>
        </div>
      </div>
    </section>

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

    <ConsultationCapture />
    <NextStep currentPath="/ozdorovitelnye-procedury-spb" />
    <RelatedServices currentPath="/ozdorovitelnye-procedury-spb" />
    <CTASection />
  </Layout>
);

export default OzdorovitelnyeProcedury;
