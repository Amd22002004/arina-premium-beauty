import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Clock } from "lucide-react";
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
    title: "Уход за лицом",
    desc: "Комплексные уходовые процедуры: массаж лица в сочетании с масками для глубокого увлажнения и восстановления",
    items: ["Массаж лица + альгинатная маска", "Массаж лица + кислородная маска", "Массаж лица + увлажняющая маска"],
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
    title: "Аппаратные протоколы лица",
    desc: "INDIBA, RF-лифтинг, БМС, микроигольчатый RF — передовые аппаратные методики для подтяжки и омоложения",
    items: ["INDIBA лицо", "РФ лифтинг 3D", "БМС лица", "Микроигольчатый RF", "Холодная плазма"],
    isNew: true,
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
    title: "Аппаратные протоколы тела",
    desc: "EMS, INDIBA, БМС — аппаратное моделирование тела и восстановление мышечного тонуса",
    items: ["EMS Body Sculpt", "INDIBA тело", "БМС тела"],
    isNew: true,
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
    items: ["ШВЗ + спина", "Лимфодренажный массаж тела", "Медицинский / лечебный массаж", "Лимфодренажный массаж", "Медицинский массаж (лечебный)"],
    comingSoon: ["Биоэнергетический массаж"],
  },
  {
    title: "СПА и восстановление",
    desc: "Инфракрасная сауна, медовая выкатка — процедуры для глубокого расслабления и детоксикации",
    items: ["Инфракрасная сауна", "Медовая выкатка", "Комплекс"],
    isNew: true,
  },
  {
    title: "Дополнительные услуги",
    desc: "Интимное омоложение, удаление новообразований и другие процедуры",
    items: ["Интимное омоложение", "Инфракрасная сауна + медовая выкатка / обёртывание", "Избавление от пяточной шпоры", "Удаление новообразований"],
  },
];

interface ServiceGroup {
  title: string;
  desc: string;
  items: string[];
  isNew?: boolean;
  comingSoon?: string[];
}

const Services = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container-wide px-4 md:px-8">
        <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Услуги</h1>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          Полный спектр процедур для красоты и здоровья лица и тела. Каждая услуга — часть комплексного авторского АРТ-протокола.
        </p>

        <div className="space-y-8">
          {serviceGroups.map((g: ServiceGroup, i) => (
            <motion.div key={g.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-8 md:p-10 border border-border hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="font-heading text-2xl">{g.title}</h2>
                {g.isNew && (
                  <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">Новое</span>
                )}
              </div>
              <p className="text-muted-foreground mb-5">{g.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground/80">
                    <ChevronRight size={14} className="text-primary flex-shrink-0" /> {item}
                  </li>
                ))}
                {g.comingSoon?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground/60">
                    <Clock size={14} className="flex-shrink-0" /> {item} <span className="text-xs bg-muted px-2 py-0.5 rounded-full ml-1">скоро</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/price">
            <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-12 shadow-xl hover:shadow-2xl transition-shadow">
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
