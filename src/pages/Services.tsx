import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const serviceGroups = [
  {
    title: "Массаж лица",
    desc: "Скульптурный, миофасциальный, 3D-массаж — ручные техники для подтяжки овала, улучшения тонуса и рельефа кожи",
    items: ["Скульптурный массаж лица", "Миофасциальный массаж лица", "Массаж лица 3D", "Удаление второго подбородка + подтяжка овала"],
  },
  {
    title: "Инъекции и биостимуляция",
    desc: "Биоревитализация, мезотерапия, биостимуляция — восполнение ресурсов кожи на клеточном уровне",
    items: ["Биостимуляция", "Биоревитализация", "Мезотерапия", "Инъекции липолитиков"],
  },
  {
    title: "Пилинги",
    desc: "Карбоновый, миндальный, Джесснера — обновление текстуры кожи, выравнивание тона, устранение пигментации",
    items: ["Карбоновый пилинг", "Пилинг миндальной кислотой", "Пилинг Джесснера"],
  },
  {
    title: "Аппаратная косметология лица",
    desc: "Микротоки, лазерная чистка, холодная плазма, карбокситерапия — безоперационное омоложение и восстановление",
    items: ["Микротоковая терапия", "Лазерная чистка лица", "Холодная плазма / блефаропластика", "Карбокситерапия"],
  },
  {
    title: "Фотоомоложение BBL",
    desc: "Передовая технология широкополосного света для устранения пигментации, сосудистых звёздочек и общего омоложения",
    items: ["BBL лицо", "BBL шея/декольте", "BBL кисти рук"],
  },
  {
    title: "Фракционный лазер CO₂",
    desc: "Глубокое обновление кожи, устранение рубцов, морщин и растяжек. Премиальная процедура с выраженным результатом",
    items: ["Лицо", "Шея", "Декольте", "Кисти рук / шрамы / растяжки", "Щёки"],
  },
  {
    title: "Коррекция фигуры",
    desc: "LPG, кавитация, прессотерапия, EMS — эффективное моделирование силуэта и борьба с целлюлитом",
    items: ["Кавитация", "Прессотерапия", "EMS Body Sculpt", "LPG-массаж", "Липосоникс MRTS", "Вакуумный массаж", "4D-коррекция фигуры"],
  },
  {
    title: "Озонотерапия",
    desc: "Терапия активным кислородом для лечения, восстановления и оздоровления тканей",
    items: ["Руки", "Живот + бока", "Бёдра + ягодицы", "«Вдовий горбик»", "Лицо + подбородок", "С лимфодренажным массажем"],
  },
  {
    title: "Массаж тела",
    desc: "Лечебный, лимфодренажный массаж, массаж спины и шейно-воротниковой зоны",
    items: ["ШВЗ + спина", "Лимфодренажный массаж тела", "Медицинский / лечебный массаж"],
  },
  {
    title: "Дополнительные услуги",
    desc: "Интимное омоложение, инфракрасная сауна, удаление новообразований и другие процедуры",
    items: ["Интимное омоложение", "Инфракрасная сауна + обёртывание", "Избавление от пяточной шпоры", "Удаление новообразований"],
  },
];

const Services = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide">
        <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Услуги</h1>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Полный спектр процедур для красоты и здоровья лица и тела. Каждая услуга — часть комплексного авторского подхода.
        </p>

        <div className="space-y-8">
          {serviceGroups.map((g, i) => (
            <motion.div key={g.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-lg p-8 border border-border hover-lift">
              <h2 className="font-heading text-2xl mb-2">{g.title}</h2>
              <p className="text-muted-foreground text-sm mb-4">{g.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <ChevronRight size={14} className="text-primary flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/price">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10">
              Смотреть прайс <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
    <CTASection />
  </Layout>
);

export default Services;
