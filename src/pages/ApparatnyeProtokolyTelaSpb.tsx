import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertTriangle, Sparkles, Target, Users } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  { name: "EMS Body Sculpt", price: "4 490 ₽" },
  { name: "INDIBA тело", price: "4 290 ₽" },
  { name: "БМС (биомеханическая стимуляция мышц)", price: "3 990 ₽" },
  { name: "Миостимуляция", price: "2 490 ₽" },
];

const benefits = [
  "Коррекция фигуры и уменьшение объёмов",
  "Повышение тонуса и укрепление мышц",
  "Улучшение лимфотока и микроциркуляции",
  "Уменьшение проявлений целлюлита",
  "Подтяжка кожи без операций",
  "Восстановление после нагрузок и травм",
];

const forWhom = [
  "Желание скорректировать фигуру без операций",
  "Сниженный тонус мышц и дряблость кожи",
  "Целлюлит и локальные жировые отложения",
  "Восстановление после родов",
  "Малоподвижный образ жизни",
];

const contraindications = [
  "Беременность и период лактации",
  "Онкологические заболевания",
  "Металлические импланты в зоне воздействия",
  "Кардиостимулятор",
  "Острые воспалительные процессы",
  "Эпилепсия",
];

const steps = [
  { step: "01", title: "Консультация", desc: "Оценка состояния тела, определение зон и подбор программы" },
  { step: "02", title: "Подготовка", desc: "Очищение зоны воздействия, нанесение контактного средства" },
  { step: "03", title: "Процедура", desc: "Аппаратное воздействие на выбранные зоны по протоколу" },
  { step: "04", title: "Завершение", desc: "Рекомендации по уходу и планирование курса" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Аппаратные протоколы тела в Санкт-Петербурге",
  description: "EMS Body Sculpt, INDIBA, БМС и миостимуляция для коррекции фигуры, тонуса и восстановления мышц.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
  offers: prices.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.replace(/\s/g, "").replace("₽", ""),
    priceCurrency: "RUB",
  })),
};

const ApparatnyeProtokolyTelaSpb = () => (
  <Layout>
    <Helmet>
      <title>Аппаратные протоколы тела в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Аппаратные протоколы тела в Санкт-Петербурге: EMS Body Sculpt, INDIBA, БМС и миостимуляция для коррекции фигуры, тонуса и восстановления мышц." />
      <meta name="keywords" content="аппаратные процедуры для тела спб, коррекция фигуры аппаратами спб, ems body sculpt спб, индиба тело спб, бмс мышцы спб, миостимуляция спб, подтяжка тела без операций" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/apparatnye-protokoly-tela-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="text-center max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl mb-6">Аппаратные протоколы тела в&nbsp;Санкт-Петербурге</h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Современные технологии для коррекции фигуры, повышения тонуса мышц, уменьшения объёмов и&nbsp;общего улучшения состояния тела.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-primary" size={28} />
            <h2 className="font-heading text-3xl">Кому подходят процедуры</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {forWhom.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
                <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-primary" size={28} />
            <h2 className="font-heading text-3xl">Что дают процедуры</h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 bg-card rounded-lg p-5 border border-border">
                <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Target className="text-primary" size={28} />
            <h2 className="font-heading text-3xl">Как проходит процедура</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-card rounded-xl p-6 border border-border text-center">
                <span className="text-3xl font-heading text-primary">{s.step}</span>
                <h3 className="font-heading text-lg mt-3 mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="text-primary" size={28} />
            <h2 className="font-heading text-3xl">Противопоказания</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {contraindications.map((c) => (
              <li key={c} className="flex items-start gap-3 text-muted-foreground">
                <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-secondary/30">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}>
          <h2 className="font-heading text-3xl text-center mb-10">Цены на аппаратные протоколы тела</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {prices.map((p) => (
              <div key={p.name} className="flex items-center justify-between bg-card rounded-xl p-5 border border-border">
                <span className="font-medium">{p.name}</span>
                <span className="font-heading text-xl text-primary">{p.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default ApparatnyeProtokolyTelaSpb;
