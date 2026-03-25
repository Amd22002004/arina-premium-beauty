import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const cases = [
  { title: "Скульптурный массаж лица", desc: "Курс 10 процедур. Подтяжка овала, уменьшение отёчности, улучшение цвета лица." },
  { title: "Фотоомоложение BBL", desc: "3 процедуры. Устранение пигментных пятен, выравнивание тона, общее омоложение кожи." },
  { title: "LPG + прессотерапия", desc: "Курс 8 процедур. Уменьшение объёмов на 4 см, видимое улучшение текстуры кожи." },
  { title: "Фракционный лазер CO₂", desc: "2 процедуры. Значительное уменьшение рубцов постакне, обновление текстуры кожи." },
  { title: "Биоревитализация", desc: "Курс 4 процедуры. Глубокое увлажнение, уменьшение мимических морщин, сияние кожи." },
  { title: "Коррекция фигуры 4D", desc: "Курс 10 процедур. Снижение объёмов, улучшение тургора кожи, устранение целлюлита." },
];

const BeforeAfter = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide">
        <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">До / После</h1>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Реальные результаты наших клиентов. Каждый случай — индивидуальный подход и авторский протокол.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-lg border border-border overflow-hidden hover-lift">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="bg-muted aspect-[4/5] flex items-center justify-center text-muted-foreground text-sm">До</div>
                <div className="bg-gold-light aspect-[4/5] flex items-center justify-center text-primary text-sm">После</div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12">
          Фотографии «до/после» предоставляются с согласия клиентов. Результаты могут варьироваться в зависимости от индивидуальных особенностей.
        </p>
      </div>
    </section>
    <CTASection />
  </Layout>
);

export default BeforeAfter;
