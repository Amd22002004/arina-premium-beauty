import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export const allServices = [
  { title: "Массаж лица", path: "/massazh-lica-spb", short: "Скульптурный, миофасциальный, 3D-массаж", category: "face" },
  { title: "Уход за лицом", path: "/uhod-za-licom-spb", short: "Массаж + маски для увлажнения и восстановления", category: "face" },
  { title: "Пилинги", path: "/pilingi-spb", short: "Карбоновый, миндальный, Джесснера", category: "face" },
  { title: "Аппаратные процедуры лица", path: "/aparatnye-protokoly-lica-spb", short: "RF, INDIBA, микроигольчатый RF, холодная плазма", category: "face" },
  { title: "Микроигольчатый RF-лифтинг", path: "/mikroigolchatyj-rf-lifting-spb", short: "Уплотнение кожи, коррекция текстуры и постакне", category: "face" },
  { title: "Холодная плазма", path: "/holodnaya-plazma-spb", short: "Деликатное восстановление и улучшение кожи", category: "face" },
  { title: "Фотоомоложение BBL", path: "/fotoomolozhenie-bbl-spb", short: "Широкополосный свет для омоложения и пигментации", category: "face" },
  { title: "Фракционный лазер CO₂", path: "/frakcionnyy-lazer-co2-spb", short: "Глубокое обновление кожи, рубцы, морщины", category: "face" },
  { title: "EMS / INDIBA / БМС", path: "/apparatnye-protokoly-tela-spb", short: "Аппаратное моделирование тела", category: "body" },
  { title: "Коррекция фигуры", path: "/korrekciya-figury-spb", short: "Горячий вакуум, вакуумный массаж, RF-лифтинг тела", category: "body" },
  { title: "Горячий вакуум", path: "/goryachiy-vakuum-spb", short: "Термовакуумное жиросжигание и уменьшение объёмов", category: "body" },
  { title: "Вакуумный массаж", path: "/vakuumnyj-massazh-spb", short: "Аппаратная антицеллюлитная коррекция", category: "body" },
  { title: "RF-лифтинг тела", path: "/rf-lifting-tela-spb", short: "Подтяжка кожи и миостимуляция мышц", category: "body" },
  { title: "Медицинский массаж", path: "/massazh-tela-spb", short: "ШВЗ, спина, глубокий массаж", category: "massage" },
  { title: "Лимфодренажный и висцеральный", path: "/vosstanovitelnye-massazhi-spb", short: "Дренаж, снятие отёков, висцеральная терапия", category: "massage" },
  { title: "СПА и восстановление", path: "/spa-i-vosstanovlenie-spb", short: "Инфракрасная капсула, медовая выкатка, обёртывания", category: "extra" },
  { title: "Деликатные услуги", path: "/dopolnitelnye-uslugi-spb", short: "Интимное омоложение, удаление папиллом", category: "extra" },
  { title: "Оздоровительные процедуры", path: "/ozdorovitelnye-procedury-spb", short: "Хиджама и гирудотерапия", category: "extra" },
];

const recommendations: Record<string, string[]> = {
  "/massazh-lica-spb": ["/uhod-za-licom-spb", "/pilingi-spb", "/aparatnye-protokoly-lica-spb"],
  "/uhod-za-licom-spb": ["/massazh-lica-spb", "/pilingi-spb", "/fotoomolozhenie-bbl-spb"],
  "/pilingi-spb": ["/uhod-za-licom-spb", "/aparatnye-protokoly-lica-spb", "/fotoomolozhenie-bbl-spb"],
  "/aparatnye-protokoly-lica-spb": ["/mikroigolchatyj-rf-lifting-spb", "/holodnaya-plazma-spb", "/frakcionnyy-lazer-co2-spb"],
  "/mikroigolchatyj-rf-lifting-spb": ["/aparatnye-protokoly-lica-spb", "/holodnaya-plazma-spb", "/fotoomolozhenie-bbl-spb"],
  "/holodnaya-plazma-spb": ["/aparatnye-protokoly-lica-spb", "/mikroigolchatyj-rf-lifting-spb", "/uhod-za-licom-spb"],
  "/fotoomolozhenie-bbl-spb": ["/frakcionnyy-lazer-co2-spb", "/pilingi-spb", "/aparatnye-protokoly-lica-spb"],
  "/frakcionnyy-lazer-co2-spb": ["/fotoomolozhenie-bbl-spb", "/aparatnye-protokoly-lica-spb", "/uhod-za-licom-spb"],
  "/apparatnye-protokoly-tela-spb": ["/korrekciya-figury-spb", "/massazh-tela-spb", "/spa-i-vosstanovlenie-spb"],
  "/korrekciya-figury-spb": ["/apparatnye-protokoly-tela-spb", "/massazh-tela-spb", "/spa-i-vosstanovlenie-spb"],
  "/massazh-tela-spb": ["/vosstanovitelnye-massazhi-spb", "/spa-i-vosstanovlenie-spb", "/korrekciya-figury-spb"],
  "/vosstanovitelnye-massazhi-spb": ["/massazh-tela-spb", "/spa-i-vosstanovlenie-spb", "/massazh-lica-spb"],
  "/spa-i-vosstanovlenie-spb": ["/massazh-tela-spb", "/vosstanovitelnye-massazhi-spb", "/uhod-za-licom-spb"],
  "/dopolnitelnye-uslugi-spb": ["/spa-i-vosstanovlenie-spb", "/apparatnye-protokoly-tela-spb", "/korrekciya-figury-spb"],
  "/ozdorovitelnye-procedury-spb": ["/spa-i-vosstanovlenie-spb", "/vosstanovitelnye-massazhi-spb", "/massazh-tela-spb"],
};

interface RelatedServicesProps {
  currentPath: string;
  count?: number;
}

const RelatedServices = ({ currentPath, count = 4 }: RelatedServicesProps) => {
  const recPaths = recommendations[currentPath];
  let related: typeof allServices;

  if (recPaths) {
    related = recPaths
      .map((p) => allServices.find((s) => s.path === p)!)
      .filter(Boolean)
      .slice(0, count);
  } else {
    related = allServices
      .filter((s) => s.path !== currentPath)
      .slice(0, count);
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-8">Рекомендуем также</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {related.map((s, i) => (
            <motion.div key={s.path} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link
                to={s.path}
                className="flex flex-col bg-card rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all group h-full"
              >
                <h3 className="font-heading text-lg group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 flex-1">{s.short}</p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4">
                  Подробнее <ChevronRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/services" className="text-primary hover:underline text-sm font-medium">
            Все услуги →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
