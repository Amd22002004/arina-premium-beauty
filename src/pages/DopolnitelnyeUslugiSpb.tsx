import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const prices = [
  { name: "Удаление новообразований", price: "от 1 900 ₽" },
  { name: "Избавление от пяточной шпоры", price: "от 2 900 ₽" },
  { name: "Инфракрасная сауна + медовая выкатка / обёртывание", price: "3 490 ₽" },
  { name: "Интимное омоложение", price: "11 900 ₽" },
];

const forWhom = [
  "Нужна процедура, которая не входит в стандартные разделы",
  "Хотите дополнить основной курс ухода или коррекции",
  "Требуется индивидуальный подбор процедуры под конкретную задачу",
  "Ищете решение для точечной проблемы",
];

const contraindications = [
  "Острые воспалительные процессы",
  "Онкологические заболевания",
  "Беременность и лактация (для ряда процедур)",
  "Индивидуальные противопоказания определяются на консультации",
];

const steps = [
  { title: "Обращение", desc: "Свяжитесь с нами и опишите вашу задачу" },
  { title: "Консультация", desc: "Специалист оценит состояние и подберёт процедуру" },
  { title: "Процедура", desc: "Проведение по индивидуальному протоколу" },
  { title: "Рекомендации", desc: "Советы по уходу и дальнейшим действиям" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Дополнительные услуги в Санкт-Петербурге",
  description: "Интимное омоложение, удаление новообразований и другие процедуры по индивидуальному подбору.",
  provider: {
    "@type": "LocalBusiness",
    name: "АРТ Косметология",
    address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
};

const DopolnitelnyeUslugiSpb = () => (
  <Layout>
    <Helmet>
      <title>Дополнительные услуги в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Дополнительные услуги в Санкт-Петербурге: интимное омоложение, удаление новообразований и другие процедуры по индивидуальному подбору." />
      <meta name="keywords" content="дополнительные услуги косметология спб, интимное омоложение спб, удаление новообразований спб, процедуры для тела спб, косметологические услуги спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/dopolnitelnye-uslugi-spb" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl text-center mb-6">
          Дополнительные услуги
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl text-center max-w-2xl mx-auto mb-4">
          Процедуры, которые подбираются индивидуально в зависимости от вашей задачи. Могут дополнять основной курс ухода или решать точечные вопросы.
        </motion.p>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="bg-card rounded-xl p-8 md:p-10 border border-border">
          <h2 className="font-heading text-2xl mb-6">Кому подходят процедуры</h2>
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
          <h2 className="font-heading text-2xl mb-6">Перечень услуг</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Интимное омоложение</h3>
              <p className="text-muted-foreground text-sm">Аппаратная процедура для восстановления тонуса и улучшения состояния тканей. Проводится деликатно и конфиденциально.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Удаление новообразований</h3>
              <p className="text-muted-foreground text-sm">Безопасное удаление папиллом, бородавок и других доброкачественных образований. Требуется предварительная консультация.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Избавление от пяточной шпоры</h3>
              <p className="text-muted-foreground text-sm">Процедура для снятия болевого синдрома и улучшения состояния стопы.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Инфракрасная сауна + медовая выкатка / обёртывание</h3>
              <p className="text-muted-foreground text-sm">Комплексная СПА-процедура для расслабления, детокса и улучшения состояния кожи тела.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
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

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}
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

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4.5} variants={fadeUp}
          className="bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20 flex items-start gap-4">
          <Info size={22} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold mb-1">Индивидуальный подбор</p>
            <p className="text-muted-foreground text-sm">
              Каждая процедура из этого раздела подбирается после консультации со специалистом с учётом ваших задач и особенностей.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="pb-16 md:pb-20">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}>
          <h2 className="font-heading text-2xl mb-4">Запишитесь на консультацию</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Расскажите о вашей задаче — подберём подходящую процедуру и составим план.
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

    <CTASection />
  </Layout>
);

export default DopolnitelnyeUslugiSpb;
