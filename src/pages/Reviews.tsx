import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const reviews = [
  { name: "Елена М.", text: "Арина — настоящий профессионал! После курса скульптурного массажа овал лица заметно подтянулся, ушла отёчность. Каждая процедура — это удовольствие и результат одновременно.", rating: 5, procedure: "Скульптурный массаж лица" },
  { name: "Ольга К.", text: "Прошла курс фотоомоложения BBL. Пигментация ушла, кожа стала сияющей и ровной. Очень деликатный подход, Арина всё подробно объясняет.", rating: 5, procedure: "Фотоомоложение BBL" },
  { name: "Марина С.", text: "Делала LPG и прессотерапию — объёмы ушли, целлюлит стал намного менее заметным. Арина подобрала идеальную программу под мои задачи.", rating: 5, procedure: "LPG + прессотерапия" },
  { name: "Анна Д.", text: "Пришла на биоревитализацию и осталась на целый курс. Кожа как будто помолодела на 5 лет — мелкие морщинки разгладились, появился здоровый блеск.", rating: 5, procedure: "Биоревитализация" },
  { name: "Ирина В.", text: "Проходила курс карбокситерапии. Кожа стала более упругой, улучшился цвет лица. Арина очень внимательна к деталям и всегда на связи.", rating: 5, procedure: "Карбокситерапия" },
  { name: "Наталья П.", text: "Фракционный лазер CO₂ — серьёзная процедура, но результат того стоит. Рубцы от акне стали практически незаметными. Благодарна Арине за профессионализм!", rating: 5, procedure: "Фракционный лазер CO₂" },
  { name: "Светлана Г.", text: "Ходила на лимфодренажный массаж тела — лёгкость невероятная! Арина работает очень аккуратно, каждое движение продумано.", rating: 5, procedure: "Лимфодренажный массаж" },
  { name: "Юлия Т.", text: "Арина помогла мне с проблемой второго подбородка. Массаж + аппаратные процедуры = видимый результат уже после 5 процедур. Очень рекомендую!", rating: 5, procedure: "Подтяжка овала лица" },
  { name: "Дарья Л.", text: "Прессотерапия на 42 камерах — это что-то! Ощущение лёгкости после каждой процедуры. Арина создаёт невероятно комфортную атмосферу.", rating: 5, procedure: "Прессотерапия" },
];

const Reviews = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide">
        <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Отзывы</h1>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Мнения клиентов — лучшее подтверждение качества работы
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={r.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card p-8 rounded-lg border border-border hover-lift">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">«{r.text}»</p>
              <div className="flex justify-between items-end">
                <span className="text-sm font-medium text-foreground">{r.name}</span>
                <span className="text-xs text-muted-foreground">{r.procedure}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
  </Layout>
);

export default Reviews;
