import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export const allServices = [
  { title: "Массаж лица", path: "/massazh-lica-spb", short: "Скульптурный, миофасциальный, 3D-массаж" },
  { title: "Уход за лицом", path: "/uhod-za-licom-spb", short: "Массаж + маски для увлажнения и восстановления" },
  { title: "Инъекции и биостимуляция", path: "/inekcii-i-biostimulyaciya-spb", short: "Биоревитализация, мезотерапия, липолитики" },
  { title: "Пилинги", path: "/pilingi-spb", short: "Карбоновый, миндальный, Джесснера" },
  { title: "Аппаратные протоколы лица", path: "/aparatnye-protokoly-lica-spb", short: "RF, INDIBA, холодная плазма, БМС" },
  { title: "Аппаратная косметология лица", path: "/apparatnaya-kosmetologiya-lica-spb", short: "Микротоки, лазерная чистка, карбокситерапия" },
  { title: "Фотоомоложение BBL", path: "/fotoomolozhenie-bbl-spb", short: "Широкополосный свет для омоложения и пигментации" },
  { title: "Фракционный лазер CO₂", path: "/frakcionnyy-lazer-co2-spb", short: "Глубокое обновление кожи, рубцы, морщины" },
  { title: "Аппаратные протоколы тела", path: "/apparatnye-protokoly-tela-spb", short: "EMS, INDIBA, БМС, миостимуляция" },
  { title: "Коррекция фигуры", path: "/korrekciya-figury-spb", short: "Кавитация, LPG, прессотерапия, EMS" },
  { title: "Озонотерапия", path: "/ozonoterapiya-spb", short: "Восстановление тканей и микроциркуляции" },
  { title: "Массаж тела", path: "/massazh-tela-spb", short: "Лечебный, лимфодренажный, ШВЗ + спина" },
  { title: "Восстановительные массажи", path: "/vosstanovitelnye-massazhi-spb", short: "Мягкие техники для расслабления и снятия отёков" },
  { title: "СПА и восстановление", path: "/spa-i-vosstanovlenie-spb", short: "Инфракрасная капсула, медовая выкатка, обёртывания" },
  { title: "Дополнительные услуги", path: "/dopolnitelnye-uslugi-spb", short: "Интимное омоложение, удаление новообразований" },
  { title: "Оздоровительные процедуры", path: "/ozdorovitelnye-procedury-spb", short: "Хиджама и гирудотерапия" },
];

interface RelatedServicesProps {
  currentPath: string;
  count?: number;
}

const RelatedServices = ({ currentPath, count = 4 }: RelatedServicesProps) => {
  const related = allServices
    .filter((s) => s.path !== currentPath)
    .slice(0, count);

  return (
    <section className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-8">Другие услуги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {related.map((s, i) => (
            <motion.div key={s.path} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link
                to={s.path}
                className="flex items-center justify-between bg-card rounded-xl p-5 border border-border hover:border-primary/40 transition-colors group"
              >
                <div>
                  <h3 className="font-heading text-lg group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{s.short}</p>
                </div>
                <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-3" />
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
