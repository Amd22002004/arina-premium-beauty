import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Snowflake, Radio, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import NextStep from "@/components/NextStep";
import ConsultationCapture from "@/components/ConsultationCapture";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const serviceCards = [
  {
    icon: <Radio size={28} />,
    title: "RF-лифтинг",
    desc: "Радиочастотное воздействие для подтяжки кожи, улучшения овала лица и стимуляции коллагена",
    price: "от 3 900 ₽",
    path: "/rf-lifting-spb",
    internal: false,
  },
  {
    icon: <Waves size={28} />,
    title: "INDIBA",
    desc: "Глубокое прогревание тканей для восстановления тонуса, уплотнения кожи и лифтинга",
    price: "от 3 900 ₽",
    path: "/indiba-spb",
    internal: false,
  },
  {
    icon: <Zap size={28} />,
    title: "Микроигольчатый RF-лифтинг",
    desc: "Сочетание микроигл и радиочастотной энергии для уплотнения кожи, коррекции текстуры и постакне",
    price: "от 5 400 ₽",
    path: "/mikroigolchatyj-rf-lifting-spb",
    internal: false,
  },
  {
    icon: <Snowflake size={28} />,
    title: "Холодная плазма",
    desc: "Деликатная аппаратная методика для восстановления кожи и работы с эстетическими задачами",
    price: "от 4 000 ₽",
    path: "/holodnaya-plazma-spb",
    internal: false,
  },
];

const AparatnyeProtokolyLicaSpb = () => (
  <Layout>
    <Helmet>
      <title>Аппаратные протоколы лица в Санкт-Петербурге | АРТ Косметология</title>
      <meta name="description" content="Аппаратные протоколы лица в СПб: RF-лифтинг, INDIBA, микроигольчатый RF, холодная плазма. Подберём протокол под вашу задачу. Запись онлайн." />
      <meta name="keywords" content="аппаратные протоколы лица спб, rf лифтинг спб, индиба лицо спб, микроигольчатый rf спб, холодная плазма спб" />
      <link rel="canonical" href="https://arina-premium-beauty.lovable.app/aparatnye-protokoly-lica-spb" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Аппаратные протоколы лица в Санкт-Петербурге",
        provider: { "@type": "LocalBusiness", name: "АРТ Косметология", address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" } },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-wide px-4 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Аппаратные процедуры лица
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Подбираем аппаратный протокол индивидуально — в зависимости от состояния кожи, задачи и ожидаемого результата
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-primary font-heading text-2xl md:text-3xl mb-8">от 3&nbsp;900&nbsp;₽</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking?service=Аппаратная процедура лица">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow">
              Записаться на консультацию <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Service Cards */}
    <section className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Наши аппаратные методики</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Каждая методика решает свои задачи. Выберите интересующее направление, чтобы узнать подробнее
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {serviceCards.map((card, i) => (
            <motion.div key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link
                to={card.path}
                className="flex flex-col h-full bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {card.icon}
                </div>
                <h3 className="font-heading text-xl md:text-2xl group-hover:text-primary transition-colors mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm flex-1 mb-4">{card.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-heading text-lg">{card.price}</span>
                  <span className="flex items-center gap-1 text-primary text-sm font-medium">
                    Подробнее <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Brief about approach */}
    <section className="py-10 md:py-14 bg-cream">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-6">Как мы подбираем протокол</h2>
        <p className="text-muted-foreground text-base md:text-lg mb-4">
          На консультации оцениваем состояние кожи, определяем задачу и подбираем оптимальную методику или комбинацию аппаратов. 
          Каждый протокол адаптируется индивидуально — нет универсальных решений.
        </p>
        <p className="text-muted-foreground text-base md:text-lg">
          RF-лифтинг и INDIBA работают с глубокими слоями кожи через прогревание. Микроигольчатый RF сочетает микроиглы с радиочастотной энергией для уплотнения и текстуры. 
          Холодная плазма — деликатная методика для восстановления и улучшения состояния кожи.
        </p>
      </div>
    </section>

    <ConsultationCapture />
    <NextStep currentPath="/aparatnye-protokoly-lica-spb" />
    <RelatedServices currentPath="/aparatnye-protokoly-lica-spb" />
    <CTASection />
  </Layout>
);

export default AparatnyeProtokolyLicaSpb;
