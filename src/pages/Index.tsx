import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Users, ChevronRight, Star, Zap, MapPin, CalendarCheck, UserCheck, MessageCircle, Check, Gift, Crown, Layers, Leaf, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { VKIcon, TelegramIcon } from "@/components/SocialIcons";
import heroBg from "@/assets/hero-bg.jpg";
import ConsultationCapture from "@/components/ConsultationCapture";
import { services, formatPrice } from "@/data/services";
import { FloatingPetals, FloralCorner, SectionFloralAccent, FloralDivider, AnimatedButterfly, ScatteredButterflies } from "@/components/FloralDecorations";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

// Popular services to show in the pricing preview block
const popularServices = [
  { name: "Массаж лица", price: 1900, course: "5 сеансов — 8 500 ₽", link: "/massazh-lica-spb" },
  { name: "Уход за лицом", price: 2300, course: "5 сеансов — 10 500 ₽", link: "/uhod-za-licom-spb" },
  { name: "Аппаратный протокол лица", price: 3900, course: "5 сеансов — 17 500 ₽", link: "/aparatnye-protokoly-lica-spb" },
  { name: "Коррекция фигуры", price: 2800, course: "5 сеансов — 12 500 ₽", link: "/korrekciya-figury-spb" },
  { name: "Лимфодренажный массаж", price: 2400, course: "5 сеансов — 10 500 ₽", link: "/massazh-tela-spb" },
  { name: "Фотоомоложение BBL (лицо)", price: 7500, course: "3 сеанса — 21 000 ₽", link: "/fotoomolozhenie-bbl-spb" },
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
          name: "АРТ Косметология — Приватная студия аппаратной эстетики",
          url: "https://artbody.pro",
          telephone: "+79117193949",
          address: { "@type": "PostalAddress", streetAddress: "пр-т Обуховской Обороны, 110к1 (ЖК Молодежный)", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
          description: "АРТ Косметология — приватная студия аппаратной эстетики. Один мастер, один клиент. Омоложение лица и тела в Санкт-Петербурге.",
        }),
      }}
    />

    {/* ═══════════ 1. HERO ═══════════ */}
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-violet/5" />
      </div>
      <FloatingPetals />
      <div className="relative container-wide px-4 md:px-8 py-24">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-5 py-2 rounded-full text-sm font-medium mb-6 border border-primary-foreground/10">
            <Sparkles size={14} /> Приватная студия | Санкт-Петербург
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
            Аппаратная эстетика и&nbsp;искусство омоложения
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-primary-foreground/80 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl">
            Один мастер, один клиент. Камерная атмосфера, персональный подход и&nbsp;полная конфиденциальность.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 text-base shadow-xl hover:shadow-2xl transition-shadow text-lg">
                ✿ Записаться на консультацию
              </Button>
            </Link>
            <a href="#prices">
              <Button size="lg" className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/30 px-8 text-base font-medium">
                Смотреть цены <ChevronRight size={16} className="ml-1" />
              </Button>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-x-6 gap-y-2 text-primary-foreground/60 text-sm">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Санкт-Петербург</span>
            <span className="flex items-center gap-1.5"><CalendarCheck size={14} /> Приватная запись</span>
            <span className="flex items-center gap-1.5"><UserCheck size={14} /> Один мастер — один клиент</span>
          </motion.div>
        </motion.div>
      </div>
      {/* Decorative animated butterflies */}
      <AnimatedButterfly className="absolute bottom-24 right-[8%] hidden lg:block" size={64} delay={0.5} />
      <AnimatedButterfly className="absolute top-28 right-[15%] hidden lg:block" size={48} delay={2} />
      <AnimatedButterfly className="absolute bottom-40 right-[30%] hidden xl:block" size={36} delay={3.5} />
    </section>

    {/* ═══════════ 2. BENEFITS ═══════════ */}
    <section className="relative py-10 md:py-14 bg-floral-cream overflow-hidden">
      <SectionFloralAccent position="both" />
      <ScatteredButterflies count={2} />
      <div className="container-wide px-4 md:px-8 relative">
        <FloralDivider className="mb-6" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Что вы получаете</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Камерный формат, персональный подход и премиальный результат</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            { icon: Sparkles, title: "Авторские протоколы", desc: "Подготовка → аппарат → восстановление" },
            { icon: Zap, title: "Аппаратные технологии", desc: "INDIBA, RF, EMS, BBL, CO₂" },
            { icon: Heart, title: "Приватная атмосфера", desc: "Один мастер, один клиент" },
            { icon: UserCheck, title: "Персональный подход", desc: "Протокол под вашу задачу" },
            { icon: Shield, title: "Конфиденциальность", desc: "Полная приватность визита" },
          ].map((b, i) => (
            <motion.div key={b.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card/80 backdrop-blur-sm p-5 rounded-xl border border-primary/10 text-center hover-lift shadow-floral">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-rose-light flex items-center justify-center mx-auto mb-3">
                <b.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading text-base mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ 3. POPULAR PRICES ═══════════ */}
    <section id="prices" className="relative py-10 md:py-14 bg-glamour scroll-mt-20 overflow-hidden">
      <ScatteredButterflies count={2} />
      <div className="container-wide px-4 md:px-8 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Популярные процедуры</h2>
          <FloralDivider className="mb-2" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Цены на разовую процедуру и курсы</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {popularServices.map((s, i) => (
            <motion.div key={s.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card/90 backdrop-blur-sm rounded-xl border border-primary/10 p-6 flex flex-col justify-between hover-lift shadow-floral">
              <div>
                <h3 className="font-heading text-lg mb-2">{s.name}</h3>
                <p className="font-heading text-2xl text-glamour mb-1">{formatPrice(s.price)}</p>
                <p className="text-sm text-muted-foreground mb-4">{s.course}</p>
              </div>
              <Link to={s.link}>
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Подробнее <ChevronRight size={14} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/price">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10">
              Полный прайс-лист <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
          <Link to="/booking">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              ✿ Записаться
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <ConsultationCapture />

    {/* ═══════════ 4. SERVICES BLOCKS ═══════════ */}
    <section className="relative py-8 md:py-10 bg-floral-cream overflow-hidden">
      <SectionFloralAccent position="right" />
      <ScatteredButterflies count={3} />
      <div className="container-wide px-4 md:px-8 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} /> Направления
          </div>
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Услуги и протоколы</h2>
          <FloralDivider className="mb-2" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Кому подходит, какой эффект, сколько нужно сеансов</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceBlock
            icon={Sparkles}
            title="АРТ-протоколы лица"
            subtitle="Лифтинг, работа с отёками, качеством кожи и контуром лица."
            items={["массаж лица", "INDIBA", "РФ лифтинг 3D", "микроигольчатый RF", "холодная плазма", "уходовые маски"]}
            link="/massazh-lica-spb"
            index={0}
          />
          <ServiceBlock
            icon={Heart}
            title="АРТ-протоколы тела"
            subtitle="Коррекция фигуры, дренаж и восстановление."
            items={["EMS Body Sculpt", "INDIBA", "БМС тела", "LPG", "кавитация", "вакуумный массаж"]}
            link="/korrekciya-figury-spb"
            index={1}
          />
          <ServiceBlock
            icon={Shield}
            title="Массаж"
            subtitle="Восстановительный, лимфодренажный, висцеральный."
            items={["восстановительный массаж", "лимфодренаж", "висцеральный массаж", "массаж ШВЗ"]}
            link="/massazh-tela-spb"
            index={2}
          />
          <ServiceBlock
            icon={Leaf}
            title="СПА и восстановление"
            subtitle="Инфракрасная капсула, медовая выкатка, обёртывания."
            items={["инфракрасная капсула", "медовая выкатка", "обёртывания", "комплексные ритуалы"]}
            link="/spa-i-vosstanovlenie-spb"
            index={3}
          />
        </div>

        <div className="text-center mt-8">
          <Link to="/services">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Все услуги <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* ═══════════ 5. OFFERS ═══════════ */}
    <section className="relative py-10 md:py-12 bg-glamour overflow-hidden">
      <ScatteredButterflies count={2} />
      <div className="container-wide px-4 md:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Gift,
              title: "Первое посещение",
              main: "Скидка 30% на входные процедуры",
              sub: "Массаж, лимфодренаж, мягкие уходы.",
              link: "/art-protokol-znakomstvo",
              cta: "Подробнее",
            },
            {
              icon: Crown,
              title: "Премиальные процедуры",
              main: "BBL, CO₂, INDIBA",
              sub: "Аппаратные технологии с акцентом на результат.",
              link: "/aparatnye-protokoly-lica-spb",
              cta: "Узнать больше",
            },
            {
              icon: Layers,
              title: "Курсы и комплексы",
              main: "Экономия до 20% при покупке курса",
              sub: "Подготовка → аппарат → восстановление.",
              link: "/kursy-i-kompleksy",
              cta: "Смотреть курсы",
            },
          ].map((o, i) => (
            <motion.div key={o.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link to={o.link} className="block bg-card/90 backdrop-blur-sm p-7 rounded-xl border border-primary/10 hover-lift text-center h-full shadow-floral">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-rose-light flex items-center justify-center mx-auto mb-4">
                  <o.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg mb-2">{o.title}</h3>
                <p className="text-foreground font-medium leading-relaxed mb-2">{o.main}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{o.sub}</p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  {o.cta} <ChevronRight size={14} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ 6. SOCIAL PROOF / WHY US ═══════════ */}
    <section className="relative py-10 md:py-12 bg-floral-cream overflow-hidden">
      <SectionFloralAccent position="left" />
      <ScatteredButterflies count={2} />
      <div className="container-narrow px-4 md:px-8 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl mb-3">Почему выбирают нас</h2>
          <FloralDivider />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Приватная студия — один мастер, один клиент",
            "Полная конфиденциальность каждого визита",
            "Авторские протоколы, а не шаблонные процедуры",
            "Камерная атмосфера без потока и очередей",
            "Персональный подбор под вашу задачу",
          ].map((t, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/10 shadow-floral">
              <Check size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="text-foreground leading-relaxed">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ 7. CTA ═══════════ */}
    <section className="py-10 md:py-14">
      <div className="container-narrow px-4 md:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
          <h2 className="font-heading text-3xl md:text-4xl mb-5">Запишитесь на АРТ-протокол</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Подберём процедуру под вашу задачу: лицо, тело, восстановление или комплексный уход.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow text-base">Записаться онлайн</Button>
            </Link>
            <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-base gap-2">
                <TelegramIcon size={18} /> Написать в Telegram
              </Button>
            </a>
            <a href="https://vk.com/beauty_salon_arina" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-base gap-2">
                <VKIcon size={18} /> Открыть VK
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

/* ═══════════ Service Block Component ═══════════ */
const ServiceBlock = ({ icon: Icon, title, subtitle, items, link, index }: {
  icon: React.ElementType; title: string; subtitle: string; items: string[]; link: string; index: number;
}) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp}
    className="bg-card/90 backdrop-blur-sm rounded-xl p-7 border border-primary/10 hover-lift shadow-floral">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light to-rose-light flex items-center justify-center shrink-0">
        <Icon size={20} className="text-primary" />
      </div>
      <h3 className="font-heading text-xl">{title}</h3>
    </div>
    <p className="text-muted-foreground leading-relaxed mb-4">{subtitle}</p>
    <div className="flex flex-wrap gap-2 mb-5">
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-1.5 bg-rose-light/50 text-foreground px-3 py-1.5 rounded-full text-sm border border-primary/5">
          <Check size={13} className="text-primary" /> {item}
        </span>
      ))}
    </div>
    <Link to={link}>
      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        Подробнее <ChevronRight size={14} className="ml-1" />
      </Button>
    </Link>
  </motion.div>
);

export default Index;
