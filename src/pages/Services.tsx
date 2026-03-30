import { useState } from "react";
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

interface ServiceGroup {
  title: string;
  desc: string;
  items: string[];
  link: string;
  comingSoon?: string[];
}

const categories: { label: string; key: string; groups: ServiceGroup[] }[] = [
  {
    label: "Лицо",
    key: "face",
    groups: [
      { title: "Массаж лица", desc: "Скульптурный, миофасциальный, 3D-массаж — ручные техники для подтяжки овала и улучшения тонуса кожи", items: ["Скульптурный массаж лица", "Миофасциальный массаж лица", "Массаж лица 3D", "Удаление второго подбородка + подтяжка овала"], link: "/massazh-lica-spb" },
      { title: "Уход за лицом", desc: "Комплексные уходовые процедуры: массаж лица в сочетании с масками для глубокого увлажнения", items: ["Массаж лица + альгинатная маска", "Массаж лица + кислородная маска", "Массаж лица + увлажняющая маска"], link: "/uhod-za-licom-spb" },
      { title: "Инъекции и биостимуляция", desc: "Биоревитализация, мезотерапия, биостимуляция — восполнение ресурсов кожи на клеточном уровне", items: ["Биостимуляция", "Биоревитализация", "Мезотерапия", "Инъекции липолитиков"], link: "/inekcii-i-biostimulyaciya-spb" },
      { title: "Пилинги", desc: "Карбоновый, миндальный, Джесснера — обновление текстуры кожи и выравнивание тона", items: ["Карбоновый пилинг", "Пилинг миндальной кислотой", "Пилинг Джесснера"], link: "/pilingi-spb" },
      { title: "Аппаратные протоколы лица", desc: "INDIBA, RF-лифтинг, БМС, холодная плазма — передовые аппаратные методики для омоложения", items: ["Микроигольчатый RF", "INDIBA лицо", "РФ лифтинг 3D", "БМС лица", "Холодная плазма"], link: "/aparatnye-protokoly-lica-spb" },
      { title: "Аппаратная косметология лица", desc: "Микротоки, лазерная чистка, карбокситерапия — безоперационное омоложение и восстановление", items: ["Микротоковая терапия", "Лазерная чистка лица", "Холодная плазма / блефаропластика", "Карбокситерапия"], link: "/apparatnaya-kosmetologiya-lica-spb" },
      { title: "Фотоомоложение BBL", desc: "Широкополосный свет для устранения пигментации, сосудистых звёздочек и общего омоложения", items: ["BBL лицо", "BBL шея/декольте", "BBL кисти рук"], link: "/fotoomolozhenie-bbl-spb" },
      { title: "Фракционный лазер CO₂", desc: "Глубокое обновление кожи, устранение рубцов, морщин и растяжек", items: ["Лицо", "Шея", "Декольте", "Кисти рук / шрамы / растяжки"], link: "/frakcionnyy-lazer-co2-spb" },
    ],
  },
  {
    label: "Тело",
    key: "body",
    groups: [
      { title: "Аппаратные протоколы тела", desc: "EMS, INDIBA, БМС, миостимуляция — аппаратное моделирование тела", items: ["EMS Body Sculpt", "INDIBA тело", "БМС", "Миостимуляция"], link: "/apparatnye-protokoly-tela-spb" },
      { title: "Коррекция фигуры", desc: "LPG, кавитация, прессотерапия — эффективное моделирование силуэта", items: ["Кавитация", "Прессотерапия", "EMS Body Sculpt", "LPG-массаж", "Вакуумный массаж"], link: "/korrekciya-figury-spb" },
      { title: "Озонотерапия", desc: "Терапия активным кислородом для восстановления и оздоровления тканей", items: ["Руки", "Живот + бока", "Бёдра + ягодицы", "Лицо + подбородок"], link: "/ozonoterapiya-spb" },
    ],
  },
  {
    label: "Массажи",
    key: "massage",
    groups: [
      { title: "Массаж тела", desc: "Лечебный, лимфодренажный массаж, массаж спины и шейно-воротниковой зоны", items: ["ШВЗ + спина", "Лимфодренажный массаж тела", "Медицинский / лечебный массаж"], link: "/massazh-tela-spb" },
      { title: "Восстановительные массажи", desc: "Специальные техники для снятия отёков, работы с мышечными зажимами и восстановления", items: ["БМ-массаж / БЭМ", "Биоэнергетический массаж", "Массаж для снятия отёков"], link: "/vosstanovitelnye-massazhi-spb" },
    ],
  },
  {
    label: "Дополнительно",
    key: "extra",
    groups: [
      { title: "СПА и восстановление", desc: "Инфракрасная капсула, медовая выкатка, обёртывания — для глубокого расслабления", items: ["Инфракрасная капсула", "Медовая выкатка", "Обёртывания"], link: "/spa-i-vosstanovlenie-spb" },
      { title: "Дополнительные услуги", desc: "Интимное омоложение, удаление новообразований и другие процедуры", items: ["Интимное омоложение", "Удаление новообразований", "Избавление от пяточной шпоры"], link: "/dopolnitelnye-uslugi-spb" },
      { title: "Оздоровительные процедуры", desc: "Дополнительные методы восстановления по индивидуальной консультации", items: ["Хиджама", "Гирудотерапия"], link: "/ozdorovitelnye-procedury-spb" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("face");
  const activeCat = categories.find((c) => c.key === activeTab)!;

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container-wide px-4 md:px-8">
          <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Услуги</h1>
          <p className="text-muted-foreground text-center text-lg mb-10 max-w-2xl mx-auto">
            Полный спектр процедур для красоты и здоровья лица и тела. Каждая услуга — часть комплексного авторского АРТ-протокола.
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === cat.key
                    ? "gold-gradient text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {activeCat.groups.map((g, i) => (
              <motion.div
                key={g.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-card rounded-xl p-8 md:p-10 border border-border hover-lift"
              >
                <h2 className="font-heading text-2xl mb-3">{g.title}</h2>
                <p className="text-muted-foreground mb-5">{g.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
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
                <Link to={g.link}>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Подробнее <ChevronRight size={14} className="ml-1" />
                  </Button>
                </Link>
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
};

export default Services;
