import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, CheckCircle2, ChevronRight, X, Zap } from "lucide-react";
import manDorfHero from "@/assets/man-dorf-hero.jpeg";
import manDorfProcess from "@/assets/man-dorf-process.jpeg";
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
  { name: "Удаление папиллом", price: "от 400 ₽" },
  { name: "Интимное омоложение", price: "4 000 ₽" },
  { name: "Гуаша (лицо / тело)", price: "2 000 ₽" },
  { name: "Body Sculpt", price: "2 800 ₽" },
  { name: "Кресло Кегеля", price: "1 500 ₽" },
];

const suitableFor = [
  "Нужна процедура, которая не входит в стандартные разделы",
  "Хотите дополнить основной курс ухода или коррекции",
  "Требуется индивидуальный подбор процедуры под конкретную задачу",
  "Ищете решение для точечной проблемы",
];

const contraindications = [
  "Острые воспалительные процессы",
  "Онкологические заболевания",
  "Индивидуальные противопоказания определяются на консультации",
];

const DopolnitelnyeUslugiSpb = () => (
  <Layout>
    <Helmet>
      <title>Деликатные услуги в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Деликатные услуги в СПб: удаление папиллом и интимное омоложение. От 400 ₽. Запись онлайн." />
      <meta name="keywords" content="удаление папиллом спб, интимное омоложение спб, деликатные услуги косметология спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/dopolnitelnye-uslugi-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Деликатные услуги в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
      })}</script>
    </Helmet>

    <section className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg, hsl(40 50% 96%), hsl(35 60% 92%), hsl(45 40% 95%))' }}>
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Деликатные услуги
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Процедуры, которые подбираются индивидуально. Конфиденциальность и профессиональный подход
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="font-heading text-2xl md:text-3xl mb-8" style={{ color: 'hsl(35 60% 45%)' }}>от 400&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={`/booking?service=Удаление папиллом`}><Button size="lg" className="border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow text-white" style={{ background: 'linear-gradient(135deg, hsl(35 60% 45%), hsl(40 55% 55%), hsl(30 50% 40%))' }}>Записаться онлайн <ChevronRight size={16} className="ml-1" /></Button></Link>
          <a href="#prices"><Button size="lg" variant="outline" className="px-8" style={{ borderColor: 'hsl(35 50% 50%)', color: 'hsl(35 50% 40%)' }}>Смотреть цены</Button></a>
        </motion.div>
      </div>
    </section>

    <section className="py-10 md:py-14" style={{ background: 'hsl(40 30% 98%)' }}>
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Кому подходит</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {suitableFor.map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-lg bg-background border" style={{ borderColor: 'hsl(35 40% 85%)' }}>
              <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'hsl(35 60% 45%)' }} /><span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <div id="prices" className="delikate-gold">
      <style>{`
        .delikate-gold .font-heading.text-3xl { color: hsl(35 50% 35%) !important; }
        .delikate-gold .text-primary, .delikate-gold .text-glamour { color: hsl(35 60% 45%) !important; -webkit-text-fill-color: hsl(35 60% 45%) !important; background: none !important; }
        .delikate-gold .border-primary { border-color: hsl(35 40% 70%) !important; }
        .delikate-gold .bg-primary\\/10 { background-color: hsl(40 50% 94%) !important; }
        .delikate-gold .bg-primary { background-color: hsl(35 55% 48%) !important; }
        .delikate-gold .animate-border-glow { animation: none !important; box-shadow: 0 0 8px 2px hsl(35 50% 60% / 0.25) !important; }
        .delikate-gold button[class*="border-primary"] { border-color: hsl(35 40% 65%) !important; color: hsl(35 50% 40%) !important; }
        .delikate-gold .bg-primary.text-primary-foreground { background-color: hsl(35 55% 48%) !important; color: white !important; }
      `}</style>
      <ServicePricingTiers title="Цены" prices={prices} />
    </div>

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

    {/* Мужской блок DORF */}
    <section className="py-12 md:py-16 theme-masculine bg-[hsl(0_0%_8%)] text-[hsl(0_0%_95%)]">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-2xl md:text-3xl text-center text-white mb-10">
          Аппаратное восстановление мужского здоровья
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Контент — слева на десктопе */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Заголовок — всегда первый на мобильном */}
            <div className="order-1">
              <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">
                Сидячая работа убивает тонус. Верните контроль.
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                Аппаратная RF-стимуляция (технология DORF) — современная методика восстановления глубокого кровообращения и физического тонуса без боли и реабилитации.
              </p>
            </div>

            {/* Hero-фото — видно только на мобильном, после заголовка */}
            <div className="order-2 lg:hidden">
              <img
                src={manDorfHero}
                alt="Мужчина в студии перед процедурой DORF"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Текст услуги */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed order-3">
              Если вы проводите большую часть дня сидя — в машине или за компьютером — ткани тазового дна неизбежно теряют тонус из-за нарушения микроциркуляции. Это приводит к застойным процессам, снижению энергии и ухудшению общего состояния. Мы запускаем обратный процесс.
            </p>

            {/* Как работает */}
            <div className="order-4">
              <h3 className="font-heading text-lg md:text-xl text-white mb-3 flex items-center gap-2">
                <Zap size={20} className="text-gray-400" /> Как работает аппарат
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Во время сеанса фокусированная RF-энергия воздействует на ткани (исключительно наружное применение):
              </p>
              <ul className="space-y-2">
                {["Восстанавливает повреждённую сосудистую сетку", "Улучшает глубокое кровообращение и снимает «застои»", "Запускает выработку нового коллагена", "Возвращает природный тонус и контроль над телом"].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-300">
                    <Zap size={14} className="text-gray-500 mt-0.5 flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Как проходит */}
            <div className="order-5">
              <h3 className="font-heading text-lg md:text-xl text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-gray-400" /> Как проходит
              </h3>
              <ul className="space-y-2">
                {["Комфортная и абсолютно безболезненная процедура", "Длительность одного сеанса: 60–75 минут", "Эффект чувствуется уже после первого визита"].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-gray-500 mt-0.5 flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Прайс-карточка */}
            <div className="rounded-xl border-2 border-gray-600 bg-[hsl(0_0%_12%)] p-6 shadow-md order-6">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1 font-medium">Стартовый протокол восстановления</p>
              <p className="text-gray-500 text-sm mb-3">2 процедуры</p>
              <p className="font-heading text-3xl md:text-4xl text-white mb-1">6 999&nbsp;₽</p>
              <p className="text-gray-400 text-sm mb-5">Первый шаг, чтобы запустить восстановление и вернуть энергию.</p>
              <Link to="/booking?service=DORF RF-стимуляция (2 процедуры)">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200 border-0 w-full shadow-xl hover:shadow-2xl transition-shadow">
                  Записаться на первую процедуру <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>

            {/* Второе фото — мобильное (процесс / аппарат) */}
            <div className="order-7 lg:hidden flex justify-center py-4">
              <img
                src={manDorfProcess}
                alt="Процедура аппаратной RF-стимуляции DORF"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-gray-500 text-xs leading-relaxed order-8">
              Большинство клиентов отмечают изменения уже после первого сеанса. Имеются противопоказания. Необходима консультация специалиста.
            </p>
          </motion.div>

          {/* Фото — справа на десктопе */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="hidden lg:flex flex-col gap-5 order-1 lg:order-2 sticky top-24">
            <img
              src={manDorfHero}
              alt="Мужчина в студии перед процедурой DORF"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
            />
            <img
              src={manDorfProcess}
              alt="Процедура аппаратной RF-стимуляции DORF"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <div style={{ '--primary': '35 55% 48%', '--primary-foreground': '40 30% 98%', '--gold': '35 55% 48%', '--gold-glow': '40 50% 55%', '--rose': '35 45% 58%', '--rose-light': '40 40% 93%', '--berry': '30 50% 38%', '--lavender': '35 40% 60%', '--lavender-light': '40 30% 94%', '--violet': '35 50% 50%', '--ring': '35 55% 48%' } as React.CSSProperties}>
      <ConsultationCapture />
      <NextStep currentPath="/dopolnitelnye-uslugi-spb" />
      <RelatedServices currentPath="/dopolnitelnye-uslugi-spb" />
      <CTASection />
    </div>
  </Layout>
);

export default DopolnitelnyeUslugiSpb;
