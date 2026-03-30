import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertCircle, Sparkles, Info } from "lucide-react";
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
  { name: "Хиджама", price: "от 2 000 ₽" },
  { name: "Гирудотерапия", price: "от 2 500 ₽" },
];

const benefits = [
  "Улучшение общего самочувствия и тонуса",
  "Снятие напряжения и усталости",
  "Поддержка восстановительных процессов организма",
  "Улучшение микроциркуляции и лимфооттока",
  "Мягкое дополнение к основному курсу процедур",
];

const forWhom = [
  "Ищете мягкие восстановительные методики",
  "Хотите дополнить основной курс косметологических процедур",
  "Интересуетесь традиционными оздоровительными техниками",
  "Хотите улучшить общее самочувствие и тонус организма",
];

const contraindications = [
  "Беременность и лактация",
  "Онкологические заболевания",
  "Острые воспалительные процессы",
  "Нарушения свёртываемости крови",
  "Анемия тяжёлой степени",
  "Индивидуальные противопоказания (определяются на консультации)",
];

const steps = [
  { title: "Запись на консультацию", desc: "Вы записываетесь на приём, где специалист определит возможность проведения процедуры" },
  { title: "Осмотр и беседа", desc: "Специалист изучит состояние здоровья, уточнит противопоказания и подберёт методику" },
  { title: "Рекомендации", desc: "По итогам консультации вы получите план процедур с учётом ваших индивидуальных особенностей" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Оздоровительные процедуры в Санкт-Петербурге",
  description: "Хиджама и гирудотерапия как дополнительные методы восстановления по индивидуальной консультации.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
};

const OzdorovitelnyeProcedury = () => (
  <Layout>
    <Helmet>
      <title>Оздоровительные процедуры в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Оздоровительные процедуры в Санкт-Петербурге: хиджама и гирудотерапия как дополнительные методы восстановления по индивидуальной консультации." />
      <meta name="keywords" content="хиджама спб, гирудотерапия спб, пиявки лечение спб, оздоровительные процедуры спб, альтернативные методы восстановления" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/ozdorovitelnye-procedury-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl text-center mb-6">
          Оздоровительные процедуры
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl text-center max-w-2xl mx-auto mb-4">
          Дополнительные методы восстановления организма, которые подбираются индивидуально по запросу клиента. Эти процедуры не являются основным направлением и проводятся только после консультации специалиста.
        </motion.p>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Кому могут подойти процедуры</h2>
          <p className="text-muted-foreground mb-6">Процедуры могут быть рекомендованы, если вы:</p>
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

    {/* Что дают */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Что дают оздоровительные процедуры</h2>
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

    {/* Виды процедур */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Виды процедур</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Хиджама</h3>
              <p className="text-muted-foreground text-sm">Традиционная восстановительная методика, направленная на улучшение общего самочувствия и поддержку естественных процессов организма. Проводится по индивидуальным показаниям.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Гирудотерапия</h3>
              <p className="text-muted-foreground text-sm">Мягкая оздоровительная процедура с использованием медицинских пиявок для улучшения микроциркуляции, снятия напряжения и общего восстановления организма.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Как проходит консультация */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Как проходит консультация</h2>
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
    <ConsultationCapture />
    <ServicePricingTiers title="Цены" prices={prices} />

    {/* Консультация */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5.5} variants={fadeUp}
          className="bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20 flex items-start gap-4">
          <Info size={22} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold mb-1">Необходима консультация специалиста</p>
            <p className="text-muted-foreground text-sm">
              Оздоровительные процедуры проводятся только после индивидуальной консультации. Специалист оценит состояние здоровья, исключит противопоказания и подберёт подходящую методику.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeUp}>
          <h2 className="font-heading text-2xl mb-4">Запишитесь на консультацию</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Расскажем подробнее о процедурах и поможем определить, подходят ли они именно вам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться на консультацию
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

    <NextStep currentPath="/ozdorovitelnye-procedury-spb" />
    <RelatedServices currentPath="/ozdorovitelnye-procedury-spb" />
    <CTASection />
  </Layout>
);

export default OzdorovitelnyeProcedury;
