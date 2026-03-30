import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Check, Sparkles, Gift, Heart, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const entryServices = [
  { name: "Скульптурный массаж лица", price: "2 490 ₽", discounted: "1 743 ₽", duration: "60 мин", link: "/massazh-lica-spb" },
  { name: "Миофасциальный массаж лица", price: "2 490 ₽", discounted: "1 743 ₽", duration: "60 мин", link: "/massazh-lica-spb" },
  { name: "Массаж лица 3D", price: "2 490 ₽", discounted: "1 743 ₽", duration: "60 мин", link: "/massazh-lica-spb" },
  { name: "Лимфодренажный массаж лица", price: "2 490 ₽", discounted: "1 743 ₽", duration: "60 мин", link: "/massazh-lica-spb" },
  { name: "Лимфодренажный массаж тела", price: "3 990 ₽", discounted: "2 793 ₽", duration: "60–90 мин", link: "/massazh-tela-spb" },
  { name: "Прессотерапия", price: "1 990 ₽", discounted: "1 393 ₽", duration: "40 мин", link: "/korrekciya-figury-spb" },
  { name: "Кавитация", price: "2 490 ₽", discounted: "1 743 ₽", duration: "30–40 мин", link: "/korrekciya-figury-spb" },
  { name: "Вакуумный массаж", price: "1 990 ₽", discounted: "1 393 ₽", duration: "40 мин", link: "/korrekciya-figury-spb" },
  { name: "Массаж лица + альгинатная маска", price: "3 490 ₽", discounted: "2 443 ₽", duration: "75 мин", link: "/uhod-za-licom-spb" },
  { name: "Массаж лица + увлажняющая маска", price: "3 490 ₽", discounted: "2 443 ₽", duration: "75 мин", link: "/uhod-za-licom-spb" },
];

const steps = [
  { icon: Heart, title: "Подберём процедуру", desc: "На консультации определим вашу задачу и подберём оптимальный протокол" },
  { icon: Sparkles, title: "Проведём процедуру", desc: "Первый сеанс со скидкой 30% — вы оцените подход и результат" },
  { icon: Star, title: "Составим план", desc: "По итогу подберём курс или комплекс для достижения устойчивого эффекта" },
];

const ArtProtocolIntro = () => (
  <Layout>
    <Helmet>
      <title>Знакомство с АРТ-протоколом — скидка 30% на первый визит | СПб</title>
      <meta name="description" content="Попробуйте авторский АРТ-протокол со скидкой 30% на первый визит. Массаж лица, лимфодренаж, прессотерапия, кавитация в Санкт-Петербурге." />
      <link rel="canonical" href="https://artbody.pro/art-protokol-znakomstvo" />
    </Helmet>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Offer",
          name: "Знакомство с АРТ-протоколом — скидка 30%",
          description: "Первый визит со скидкой 30% на входные процедуры: массаж лица, лимфодренаж, прессотерапия, кавитация",
          url: "https://artbody.pro/art-protokol-znakomstvo",
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
        }),
      }}
    />

    {/* Hero */}
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6">
            <Gift size={16} /> Специальное предложение
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Знакомство с&nbsp;АРТ&#8209;протоколом
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-4">
            Попробуйте авторский подход к&nbsp;красоте и&nbsp;здоровью со&nbsp;скидкой <strong className="text-primary">30%</strong> на&nbsp;первый визит.
            Только на&nbsp;входные процедуры — без&nbsp;обязательств и&nbsp;навязывания.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-muted-foreground mb-8">
            Оцените качество работы, подход и&nbsp;результат до&nbsp;покупки курса.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться со скидкой 30%
              </Button>
            </Link>
            <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                Написать в Telegram
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Как это работает */}
    <section className="py-14 md:py-20">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="font-heading text-3xl md:text-4xl text-center mb-12">
          Как проходит знакомство
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card p-8 rounded-xl border border-border text-center hover-lift">
              <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-5">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Кому подходит */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="font-heading text-3xl md:text-4xl text-center mb-10">
          Кому подходит первый визит
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            "Вы ещё не пробовали профессиональный массаж лица или тела",
            "Хотите оценить качество до покупки курса",
            "Ищете специалиста с индивидуальным подходом",
            "Хотите разобраться, какие процедуры вам нужны",
            "Устали от шаблонных процедур без результата",
            "Хотите попробовать лимфодренаж или коррекцию фигуры",
          ].map((t, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
              <Check size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="text-foreground leading-relaxed">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Процедуры со скидкой */}
    <section className="py-14 md:py-20">
      <div className="container-wide px-4 md:px-8">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="font-heading text-3xl md:text-4xl text-center mb-4">
          Процедуры со скидкой 30%
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Скидка действует только на первый визит и только на входные процедуры
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {entryServices.map((s, i) => (
            <motion.div key={s.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link to={s.link} className="block bg-card p-5 rounded-xl border border-border hover-lift transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-lg pr-4">{s.name}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{s.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground line-through text-sm">{s.price}</span>
                  <span className="text-primary font-semibold text-lg">{s.discounted}</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">−30%</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="mt-8 bg-gold-light/50 rounded-xl p-6 max-w-3xl mx-auto border border-primary/20">
          <p className="text-foreground text-sm leading-relaxed text-center">
            <strong>Важно:</strong> скидка 30% не распространяется на премиальные аппаратные процедуры (INDIBA, RF-лифтинг, BBL, CO₂, EMS Body Sculpt, холодная плазма, БМС), инъекции, пилинги, озонотерапию и оздоровительные процедуры.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Что дальше */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
          <Zap size={32} className="text-primary mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Что дальше?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            После первой процедуры подберём индивидуальный курс для достижения устойчивого результата.
            Курсы и комплексы дают лучший эффект и выгоднее по цене.
          </p>
          <Link to="/kursy-i-kompleksy">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Посмотреть курсы и комплексы <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default ArtProtocolIntro;
