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
  { title: "Инъекции и биостимуляция", path: "/inekcii-i-biostimulyaciya-spb", short: "Биоревитализация, мезотерапия, липолитики", category: "face" },
  { title: "Пилинги", path: "/pilingi-spb", short: "Карбоновый, миндальный, Джесснера", category: "face" },
  { title: "Аппаратные протоколы лица", path: "/aparatnye-protokoly-lica-spb", short: "RF, INDIBA, холодная плазма, БМС", category: "face" },
  { title: "Аппаратная косметология лица", path: "/apparatnaya-kosmetologiya-lica-spb", short: "Микротоки, лазерная чистка, карбокситерапия", category: "face" },
  { title: "Фотоомоложение BBL", path: "/fotoomolozhenie-bbl-spb", short: "Широкополосный свет для омоложения и пигментации", category: "face" },
  { title: "Фракционный лазер CO₂", path: "/frakcionnyy-lazer-co2-spb", short: "Глубокое обновление кожи, рубцы, морщины", category: "face" },
  { title: "Аппаратные протоколы тела", path: "/apparatnye-protokoly-tela-spb", short: "EMS, INDIBA, БМС, миостимуляция", category: "body" },
  { title: "Коррекция фигуры", path: "/korrekciya-figury-spb", short: "Кавитация, LPG, прессотерапия, EMS", category: "body" },
  { title: "Озонотерапия", path: "/ozonoterapiya-spb", short: "Восстановление тканей и микроциркуляции", category: "body" },
  { title: "Массаж тела", path: "/massazh-tela-spb", short: "Лечебный, лимфодренажный, ШВЗ + спина", category: "massage" },
  { title: "Восстановительные массажи", path: "/vosstanovitelnye-massazhi-spb", short: "Мягкие техники для расслабления и снятия отёков", category: "massage" },
  { title: "СПА и восстановление", path: "/spa-i-vosstanovlenie-spb", short: "Инфракрасная капсула, медовая выкатка, обёртывания", category: "extra" },
  { title: "Дополнительные услуги", path: "/dopolnitelnye-uslugi-spb", short: "Интимное омоложение, удаление новообразований", category: "extra" },
  { title: "Оздоровительные процедуры", path: "/ozdorovitelnye-procedury-spb", short: "Хиджама и гирудотерапия", category: "extra" },
];

// Custom recommendations map — prioritize related services
const recommendations: Record<string, string[]> = {
  "/massazh-lica-spb": ["/uhod-za-licom-spb", "/pilingi-spb", "/aparatnye-protokoly-lica-spb", "/apparatnaya-kosmetologiya-lica-spb"],
  "/uhod-za-licom-spb": ["/massazh-lica-spb", "/pilingi-spb", "/apparatnaya-kosmetologiya-lica-spb", "/fotoomolozhenie-bbl-spb"],
  "/inekcii-i-biostimulyaciya-spb": ["/pilingi-spb", "/apparatnaya-kosmetologiya-lica-spb", "/fotoomolozhenie-bbl-spb", "/frakcionnyy-lazer-co2-spb"],
  "/pilingi-spb": ["/uhod-za-licom-spb", "/apparatnaya-kosmetologiya-lica-spb", "/massazh-lica-spb", "/fotoomolozhenie-bbl-spb"],
  "/aparatnye-protokoly-lica-spb": ["/apparatnaya-kosmetologiya-lica-spb", "/frakcionnyy-lazer-co2-spb", "/fotoomolozhenie-bbl-spb", "/massazh-lica-spb"],
  "/apparatnaya-kosmetologiya-lica-spb": ["/aparatnye-protokoly-lica-spb", "/fotoomolozhenie-bbl-spb", "/pilingi-spb", "/frakcionnyy-lazer-co2-spb"],
  "/fotoomolozhenie-bbl-spb": ["/frakcionnyy-lazer-co2-spb", "/apparatnaya-kosmetologiya-lica-spb", "/pilingi-spb", "/aparatnye-protokoly-lica-spb"],
  "/frakcionnyy-lazer-co2-spb": ["/fotoomolozhenie-bbl-spb", "/aparatnye-protokoly-lica-spb", "/apparatnaya-kosmetologiya-lica-spb", "/pilingi-spb"],
  "/apparatnye-protokoly-tela-spb": ["/korrekciya-figury-spb", "/massazh-tela-spb", "/ozonoterapiya-spb", "/spa-i-vosstanovlenie-spb"],
  "/korrekciya-figury-spb": ["/apparatnye-protokoly-tela-spb", "/massazh-tela-spb", "/spa-i-vosstanovlenie-spb", "/ozonoterapiya-spb"],
  "/ozonoterapiya-spb": ["/apparatnye-protokoly-tela-spb", "/korrekciya-figury-spb", "/massazh-tela-spb", "/vosstanovitelnye-massazhi-spb"],
  "/massazh-tela-spb": ["/vosstanovitelnye-massazhi-spb", "/spa-i-vosstanovlenie-spb", "/korrekciya-figury-spb", "/apparatnye-protokoly-tela-spb"],
  "/vosstanovitelnye-massazhi-spb": ["/massazh-tela-spb", "/spa-i-vosstanovlenie-spb", "/massazh-lica-spb", "/ozonoterapiya-spb"],
  "/spa-i-vosstanovlenie-spb": ["/massazh-tela-spb", "/vosstanovitelnye-massazhi-spb", "/korrekciya-figury-spb", "/uhod-za-licom-spb"],
  "/dopolnitelnye-uslugi-spb": ["/spa-i-vosstanovlenie-spb", "/apparatnye-protokoly-tela-spb", "/korrekciya-figury-spb", "/ozonoterapiya-spb"],
  "/ozdorovitelnye-procedury-spb": ["/spa-i-vosstanovlenie-spb", "/vosstanovitelnye-massazhi-spb", "/massazh-tela-spb", "/dopolnitelnye-uslugi-spb"],
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
