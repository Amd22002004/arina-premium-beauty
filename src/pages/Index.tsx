import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Users, ChevronRight, Star } from "lucide-react";
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
  { icon: Shield, title: "Аппаратные процедуры", desc: "BBL-фотоомоложение, фракционный CO₂, холодная плазма" },
  { icon: Users, title: "Интимное омоложение", desc: "Деликатные процедуры с применением передовых технологий" },
];

const advantages = [
  { title: "Авторские протоколы", desc: "Каждая программа разрабатывается индивидуально с учётом особенностей вашей кожи и организма" },
  { title: "Комплексный подход", desc: "Подготовка тканей массажем → аппаратная процедура → восстановление и рекомендации" },
  { title: "Безопасность", desc: "Только сертифицированное оборудование и препараты с доказанной эффективностью" },
  { title: "Результат", desc: "Видимые изменения уже после первой процедуры, стойкий эффект при курсовом лечении" },
  { title: "Опыт и квалификация", desc: "Регулярное повышение квалификации, обучение у ведущих специалистов" },
  { title: "Индивидуальный подбор", desc: "Нет шаблонных решений — только то, что подходит именно вам" },
];

const reviews = [
  { name: "Елена М.", text: "Арина — настоящий профессионал! После курса скульптурного массажа овал лица заметно подтянулся. Рекомендую всем!", rating: 5 },
  { name: "Ольга К.", text: "Прошла курс фотоомоложения BBL. Пигментация ушла, кожа стала сияющей. Очень деликатный подход и комфортная атмосфера.", rating: 5 },
  { name: "Марина С.", text: "Делала LPG и прессотерапию — объёмы ушли, целлюлит стал намного менее заметным. Арина подобрала идеальную программу.", rating: 5 },
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
          name: "Арина — эстетика и омоложение",
          url: "https://arina-beauty.ru",
          telephone: "+79117193949",
          address: {
            "@type": "PostalAddress",
            streetAddress: "пр-т Обуховской Обороны, 110к1",
            addressLocality: "Санкт-Петербург",
            addressCountry: "RU",
          },
          description: "Омоложение лица и тела в Санкт-Петербурге. Массаж, аппаратные процедуры, коррекция фигуры и деликатное омоложение по авторским протоколам.",
        }),
      }}
    />

    {/* HERO */}
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Кабинет эстетической косметологии" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>
      <div className="relative container-wide px-4 md:px-8 py-20">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.h1 variants={fadeUp} custom={0} className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Омоложение лица и&nbsp;тела в&nbsp;Санкт&#8209;Петербурге
          </motion.h1>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/80 text-lg md:text-xl font-body leading-relaxed mb-8 max-w-xl">
            Массаж, аппаратные процедуры, коррекция фигуры и&nbsp;деликатное омоложение по&nbsp;авторским протоколам
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-3">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-8 text-base">Записаться онлайн</Button>
            </Link>
            <a href="tel:+79117193949">
              <Button size="lg" className="bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/30 px-8 text-base">
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

    {/* 4 DIRECTIONS */}
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Направления</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Комплексный подход к красоте и здоровью — от лица до тела</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((d, i) => (
            <motion.div
              key={d.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-card rounded-lg p-8 hover-lift border border-border text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-5">
                <d.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-sm">{d.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Все услуги <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* AUTHOR PROTOCOL */}
    <section className="section-padding bg-cream">
      <div className="container-narrow">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Авторский протокол</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Каждая процедура — это не одиночное воздействие, а продуманная программа из трёх этапов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Подготовка", desc: "Массаж и лимфодренаж для активации тканей, улучшения кровообращения и подготовки кожи к основной процедуре" },
            { step: "02", title: "Процедура", desc: "Аппаратное или инъекционное воздействие с использованием сертифицированного оборудования и препаратов" },
            { step: "03", title: "Восстановление", desc: "Индивидуальные рекомендации по уходу, домашний протокол и контроль результата" },
          ].map((s, i) => (
            <motion.div key={s.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center p-6">
              <span className="gold-text text-5xl font-heading font-bold">{s.step}</span>
              <h3 className="font-heading text-xl mt-4 mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ADVANTAGES */}
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">Почему выбирают Арину</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <motion.div key={a.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="p-6 rounded-lg border border-border hover-lift">
              <h3 className="font-heading text-lg mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ABOUT PREVIEW */}
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <img src={specialistImg} alt="Специалист Арина" className="rounded-lg shadow-lg w-full max-w-md mx-auto" loading="lazy" width={800} height={1000} />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">О специалисте</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Арина — дипломированный специалист в области эстетической косметологии с многолетним опытом работы. Регулярно проходит обучение и повышение квалификации у ведущих экспертов отрасли.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Специализируется на комплексном омоложении лица и тела, используя авторские протоколы, сочетающие ручные техники и современные аппаратные методики.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Подробнее <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CERTIFICATES */}
    <section className="section-padding">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-4">Сертификаты и доверие</h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Все процедуры выполняются на сертифицированном оборудовании с использованием препаратов, прошедших клинические исследования
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <img key={n} src={certificateImg} alt={`Сертификат ${n}`} className="rounded-lg shadow-md hover-lift" loading="lazy" width={800} height={600} />
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS */}
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">Отзывы клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={r.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card p-8 rounded-lg border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">«{r.text}»</p>
              <span className="text-sm font-medium text-foreground">{r.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/reviews">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Все отзывы <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* FIRST VISIT */}
    <section className="section-padding">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-4">Первый визит</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
          Первая процедура-знакомство — возможность оценить качество работы и уровень сервиса. На отдельные входные услуги действует скидка до 30%. Запишитесь, и мы подберём оптимальную программу именно для вас.
        </p>
        <Link to="/booking">
          <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10">Записаться на первый визит</Button>
        </Link>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Index;
