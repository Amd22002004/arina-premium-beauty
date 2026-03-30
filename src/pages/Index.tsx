import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Users, ChevronRight, Star, Zap, MapPin, CalendarCheck, UserCheck, MessageCircle, Check, Gift, Crown, Layers, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { VKIcon, TelegramIcon } from "@/components/SocialIcons";
import heroBg from "@/assets/hero-bg.jpg";
import specialistPhoto from "@/assets/specialist-arina.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

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
          address: { "@type": "PostalAddress", streetAddress: "пр-т Энергетиков, 2к1", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
          description: "АРТ Косметология — авторские ритуалы и технологии. Омоложение лица и тела в Санкт-Петербурге.",
        }),
      }}
    />

    {/* ═══════════ HERO ═══════════ */}
    <section className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Кабинет эстетической косметологии" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative container-wide px-4 md:px-8 py-24">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.p variants={fadeUp} custom={0} className="text-primary-foreground/60 text-sm tracking-[0.2em] uppercase font-medium mb-4">
            АРТ Косметология | Авторские ритуалы и технологии
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Омоложение лица и&nbsp;тела в&nbsp;Санкт&#8209;Петербурге
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-primary-foreground/80 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl">
            Авторские АРТ-протоколы: массаж, аппаратные технологии, уход и&nbsp;восстановление.
            Подбираем решение под задачу: лицо, тело, лифтинг, коррекция фигуры, деликатное омоложение.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 mb-10">
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

          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-x-6 gap-y-2 text-primary-foreground/60 text-sm">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Санкт-Петербург</span>
            <span className="flex items-center gap-1.5"><CalendarCheck size={14} /> Приём по записи</span>
            <span className="flex items-center gap-1.5"><UserCheck size={14} /> Индивидуальный подбор протокола</span>
            <span className="flex items-center gap-1.5"><MessageCircle size={14} /> VK и Telegram для связи</span>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════ SPECIALIST ═══════════ */}
    <section className="py-8 md:py-12 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <img
              src={specialistPhoto}
              alt="Ариана Ханова — специалист АРТ Косметология"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
              width={800}
              height={1000}
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6">
              <Star size={16} /> О специалисте
            </div>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Ариана Ханова</h2>
            <p className="text-lg text-muted-foreground mb-2 font-medium">
              Специалист по массажу, аппаратной косметологии и коррекции фигуры
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Работает с лицом и телом: омоложение, восстановление, дренаж, тонус, эстетика.
            </p>

            <h3 className="font-heading text-xl mb-3">Комплексный подход:</h3>
            <ul className="space-y-2 mb-6">
              {["массаж и подготовка тканей", "аппаратные технологии", "восстановление и уход"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground/80">
                  <Check size={16} className="text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-5">
              Подбирает процедуры индивидуально под задачу клиента: лифтинг, коррекция фигуры, снятие отёков, улучшение качества кожи и общего состояния.
            </p>

            <div className="bg-gold-light/50 rounded-lg p-5 border border-primary/20">
              <p className="text-foreground font-medium text-sm leading-relaxed">
                📌 Не разовые процедуры, а системный результат через авторские протоколы.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ═══════════ SERVICES BLOCKS ═══════════ */}
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} /> Направления
          </div>
          <h2 className="font-heading text-3xl md:text-5xl mb-4">Услуги и протоколы</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Комплексный подход к красоте, здоровью и восстановлению</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ServiceBlock
            icon={Sparkles}
            title="АРТ-протоколы лица"
            subtitle="Подготовка тканей, деликатный лифтинг, работа с отёками, качеством кожи и контуром лица."
            items={["массаж лица", "лимфодренаж", "INDIBA", "РФ лифтинг 3D", "микроигольчатый RF", "холодная плазма", "БМС лица", "уходовые маски"]}
            footer="Помогаем сделать лицо более собранным, свежим и ухоженным без перегруза процедур."
            index={0}
          />
          <ServiceBlock
            icon={Heart}
            title="АРТ-протоколы тела"
            subtitle="Аппаратные и ручные методики для коррекции фигуры, дренажа и восстановления."
            items={["EMS Body Sculpt", "INDIBA", "БМС тела", "миостимуляция", "лимфодренажный массаж", "прессотерапия", "LPG", "кавитация", "вакуумный массаж", "4D-коррекция"]}
            footer="Подбираем протокол под объёмы, отёчность, тонус и общее состояние тела."
            index={1}
          />
          <ServiceBlock
            icon={Shield}
            title="Лечебный и восстанавливающий массаж"
            subtitle="Работа с мышечным напряжением, спазмом, усталостью и зажимами."
            items={["медицинский массаж", "лечебный массаж", "массаж шейно-воротниковой зоны", "лимфодренаж", "БМ-массаж / БЭМ", "массаж для снятия отёков"]}
            footer="Подходит тем, кому важны не только эстетика, но и ощущение облегчения после процедуры."
            index={2}
          />
          <ServiceBlock
            icon={Leaf}
            title="СПА и восстановление"
            subtitle="Комплексы для мягкого ухода, восстановления и усиления эффекта процедур."
            items={["инфракрасная капсула", "медовая выкатка", "комплекс (сауна + выкатка)", "обёртывания", "уходовые ритуалы для лица"]}
            footer="Хороший вариант для тех, кто хочет не просто процедуру, а полноценный ритуал восстановления."
            index={3}
          />
        </div>

        <div className="text-center mt-14">
          <Link to="/services">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Все услуги и цены <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* ═══════════ SELLING SERVICES ═══════════ */}
    <section className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Как работают процедуры</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Каждая услуга — это не просто название, а конкретная ценность для вас</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "INDIBA для лица", desc: "Деликатная аппаратная технология для улучшения тонуса, качества кожи и общего состояния лица." },
            { title: "EMS Body Sculpt", desc: "Подтяжка и проработка мышц тела без тренировок." },
            { title: "Микроигольчатый RF", desc: "Глубокая работа с качеством кожи, рельефом и упругостью." },
            { title: "Холодная плазма", desc: "Мягкая аппаратная процедура для деликатных зон и эстетической коррекции." },
          ].map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card p-8 rounded-xl border border-border hover-lift">
              <h3 className="font-heading text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ OFFERS ═══════════ */}
    <section className="py-24 md:py-32">
      <div className="container-wide px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl">Выгодные условия</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Gift,
              title: "Первое посещение",
              main: "Первая процедура знакомства — со скидкой до 30%",
              sub: "Только на входные услуги: массаж, лимфодренаж, базовые уходы, мягкие коррекционные процедуры.",
            },
            {
              icon: Crown,
              title: "Премиальные процедуры",
              main: "Для аппаратных и авторских протоколов — без демпинга, с акцентом на результат и комплекс",
              sub: "Скидка не в лоб, а через грамотный подбор протокола и выгодные комплексы.",
            },
            {
              icon: Layers,
              title: "Комплекс выгоднее",
              main: "Отдельные процедуры — это точечная работа. Комплекс — это системный результат.",
              sub: "Подбираем связку: подготовка → аппарат → восстановление.",
            },
          ].map((o, i) => (
            <motion.div key={o.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card p-8 rounded-xl border border-border hover-lift text-center">
              <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-5">
                <o.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-3">{o.title}</h3>
              <p className="text-foreground font-medium leading-relaxed mb-3">{o.main}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{o.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ SHORT ADVANTAGES ═══════════ */}
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-narrow px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl">Почему выбирают нас</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Авторский подход, а не шаблонные процедуры",
            "Услуги для лица, тела и восстановления",
            "Чёткий прайс без путаницы",
            "Удобная запись через сайт, VK и Telegram",
            "Акцент на доверии, аккуратности и эстетике",
          ].map((t, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex items-start gap-3 p-5 bg-card rounded-lg border border-border">
              <Check size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="text-foreground leading-relaxed">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ CTA ═══════════ */}
    <section className="py-24 md:py-32">
      <div className="container-narrow px-4 md:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
          <h2 className="font-heading text-3xl md:text-4xl mb-5">Запишитесь на АРТ-протокол</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
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
const ServiceBlock = ({ icon: Icon, title, subtitle, items, footer, index }: {
  icon: React.ElementType; title: string; subtitle: string; items: string[]; footer: string; index: number;
}) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp}
    className="bg-card rounded-xl p-8 md:p-10 border border-border hover-lift">
    <div className="flex items-center gap-4 mb-5">
      <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center shrink-0">
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="font-heading text-2xl">{title}</h3>
    </div>
    <p className="text-muted-foreground leading-relaxed mb-5">{subtitle}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm">
          <Check size={13} className="text-primary" /> {item}
        </span>
      ))}
    </div>
    <p className="text-foreground/70 text-sm italic leading-relaxed">{footer}</p>
  </motion.div>
);

export default Index;
