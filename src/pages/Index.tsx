import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Users, ChevronRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import specialistImg from "@/assets/specialist.jpg";
import certificateImg from "@/assets/certificate.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const directions = [
  { icon: Sparkles, title: "Лицо", desc: "Массаж, пилинги, биоревитализация, микротоки, лазерная чистка" },
  { icon: Heart, title: "Тело", desc: "LPG, кавитация, прессотерапия, лимфодренаж, обёртывания" },
  { icon: Shield, title: "Аппаратные процедуры", desc: "BBL-фотоомоложение, фракционный CO₂, INDIBA, RF-лифтинг" },
  { icon: Users, title: "Интимное омоложение", desc: "Деликатные процедуры с применением передовых технологий" },
];

const advantages = [
  { title: "Авторские АРТ-протоколы", desc: "Каждая программа разрабатывается индивидуально с учётом особенностей вашей кожи и организма" },
  { title: "Комплексный подход", desc: "Подготовка тканей массажем → аппаратная процедура → восстановление и рекомендации" },
  { title: "Безопасность", desc: "Только сертифицированное оборудование и препараты с доказанной эффективностью" },
  { title: "Результат", desc: "Видимые изменения уже после первой процедуры, стойкий эффект при курсовом лечении" },
  { title: "Опыт и квалификация", desc: "Регулярное повышение квалификации, обучение у ведущих специалистов" },
  { title: "Индивидуальный подбор", desc: "Нет шаблонных решений — только то, что подходит именно вам" },
];

const reviews = [
  { name: "Елена М.", text: "Настоящий профессионал! После курса скульптурного массажа овал лица заметно подтянулся. Рекомендую всем!", rating: 5 },
  { name: "Ольга К.", text: "Прошла курс фотоомоложения BBL. Пигментация ушла, кожа стала сияющей. Очень деликатный подход и комфортная атмосфера.", rating: 5 },
  { name: "Марина С.", text: "Делала LPG и прессотерапию — объёмы ушли, целлюлит стал намного менее заметным. Идеально подобранная программа.", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "АРТ Косметология — Авторские ритуалы и технологии",
          url: "https://arina-beauty.ru",
          telephone: "+79117193949",
          address: {
            "@type": "PostalAddress",
            streetAddress: "пр-т Обуховской Обороны, 110к1",
            addressLocality: "Санкт-Петербург",
            addressCountry: "RU",
          },
          description: "АРТ Косметология — авторские ритуалы и технологии. Омоложение лица и тела в Санкт-Петербурге.",
        }),
      }}
    />

    {/* HERO */}
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Кабинет эстетической косметологии" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/45 to-transparent" />
      </div>
      <div className="relative container-wide px-4 md:px-8 py-20">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.h1 variants={fadeUp} custom={0} className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Омоложение лица и&nbsp;тела в&nbsp;Санкт&#8209;Петербурге
          </motion.h1>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/85 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl">
            Массаж, аппаратные процедуры, коррекция фигуры и&nbsp;деликатное омоложение по&nbsp;авторским протоколам
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 text-base shadow-xl hover:shadow-2xl transition-shadow">Записаться онлайн</Button>
            </Link>
            <a href="tel:+79117193949">
              <Button size="lg" className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/30 px-8 text-base font-medium">
                Получить консультацию
              </Button>
            </a>
            <Link to="/price">
              <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base">
                Смотреть прайс <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ART PROTOCOLS */}
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-cream">
      <div className="container-narrow px-4 md:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-8">
            <Zap size={16} /> Авторская методика
          </div>
          <h2 className="font-heading text-3xl md:text-5xl mb-6">Авторские АРТ&#8209;протоколы</h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
            Мы не выполняем отдельные процедуры.
          </p>
          <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Мы подбираем комплекс: подготовка тканей → аппаратная процедура → восстановление.
          </p>
        </motion.div>
      </div>
    </section>

    {/* 4 DIRECTIONS */}
    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Направления</h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-xl mx-auto">Комплексный подход к красоте и здоровью — от лица до тела</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {directions.map((d, i) => (
            <motion.div
              key={d.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-card rounded-xl p-8 hover-lift border border-border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-6">
                <d.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-3">{d.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Все услуги <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* AUTHOR PROTOCOL STEPS */}
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-narrow px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Как работает АРТ-протокол</h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">
          Каждая процедура — это не одиночное воздействие, а продуманная программа из трёх этапов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { step: "01", title: "Подготовка", desc: "Массаж и лимфодренаж для активации тканей, улучшения кровообращения и подготовки кожи к основной процедуре" },
            { step: "02", title: "Процедура", desc: "Аппаратное или инъекционное воздействие с использованием сертифицированного оборудования и препаратов" },
            { step: "03", title: "Восстановление", desc: "Индивидуальные рекомендации по уходу, домашний протокол и контроль результата" },
          ].map((s, i) => (
            <motion.div key={s.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center p-8">
              <span className="gold-text text-6xl font-heading font-bold">{s.step}</span>
              <h3 className="font-heading text-xl mt-5 mb-4">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ADVANTAGES */}
    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-14">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((a, i) => (
            <motion.div key={a.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="p-8 rounded-xl border border-border hover-lift">
              <h3 className="font-heading text-lg mb-3">{a.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ABOUT PREVIEW */}
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <img src={specialistImg} alt="Специалист" className="rounded-xl shadow-lg w-full max-w-md mx-auto" loading="lazy" width={800} height={1000} />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">О специалисте</h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-5">
              Дипломированный специалист в области эстетической косметологии с многолетним опытом работы. Регулярно проходит обучение и повышение квалификации у ведущих экспертов отрасли.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-8">
              Специализируется на комплексном омоложении лица и тела, используя авторские протоколы, сочетающие ручные техники и современные аппаратные методики.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                Подробнее <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CERTIFICATES */}
    <section className="py-20 md:py-28">
      <div className="container-narrow px-4 md:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-4">Сертификаты и доверие</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          Все процедуры выполняются на сертифицированном оборудовании с использованием препаратов, прошедших клинические исследования
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <img key={n} src={certificateImg} alt={`Сертификат ${n}`} className="rounded-xl shadow-md hover-lift" loading="lazy" width={800} height={600} />
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS */}
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-14">Отзывы клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div key={r.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card p-8 rounded-xl border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-5 italic">«{r.text}»</p>
              <span className="font-medium text-foreground">{r.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/reviews">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Все отзывы <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* FIRST VISIT */}
    <section className="py-20 md:py-28">
      <div className="container-narrow px-4 md:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-6">Первый визит</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Первая процедура-знакомство — возможность оценить качество работы и уровень сервиса. На отдельные входные услуги действует скидка до 30%. Запишитесь, и мы подберём оптимальную программу именно для вас.
        </p>
        <Link to="/booking">
          <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-12 text-base shadow-xl hover:shadow-2xl transition-shadow">Записаться на первый визит</Button>
        </Link>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Index;
