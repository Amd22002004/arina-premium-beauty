import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, RefreshCw, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

interface NextStepItem {
  icon: React.ReactNode;
  label: string;
  desc: string;
  path: string;
}

const stepsByPath: Record<string, NextStepItem[]> = {
  "/massazh-lica-spb": [
    { icon: <Zap size={20} />, label: "Усилить эффект", desc: "Аппаратные процедуры лица — RF, INDIBA, холодная плазма", path: "/aparatnye-protokoly-lica-spb" },
    { icon: <RefreshCw size={20} />, label: "Закрепить результат", desc: "Курс пилингов для обновления и сияния кожи", path: "/pilingi-spb" },
    { icon: <Sparkles size={20} />, label: "Комплексный уход", desc: "Массаж + маска для глубокого увлажнения", path: "/uhod-za-licom-spb" },
  ],
  "/uhod-za-licom-spb": [
    { icon: <Zap size={20} />, label: "Усилить эффект", desc: "Аппаратные процедуры лица — RF, INDIBA, плазма", path: "/aparatnye-protokoly-lica-spb" },
    { icon: <RefreshCw size={20} />, label: "Поддержать результат", desc: "Регулярный массаж лица для тонуса и лифтинга", path: "/massazh-lica-spb" },
    { icon: <Sparkles size={20} />, label: "Глубокое обновление", desc: "Пилинги для выравнивания текстуры и цвета", path: "/pilingi-spb" },
  ],
  "/pilingi-spb": [
    { icon: <Zap size={20} />, label: "Усилить эффект", desc: "Фотоомоложение BBL для борьбы с пигментацией", path: "/fotoomolozhenie-bbl-spb" },
    { icon: <RefreshCw size={20} />, label: "Восстановить кожу", desc: "Уход за лицом с увлажняющими масками", path: "/uhod-za-licom-spb" },
  ],
  "/aparatnye-protokoly-lica-spb": [
    { icon: <Zap size={20} />, label: "Микроигольчатый RF", desc: "Уплотнение кожи и коррекция текстуры", path: "/mikroigolchatyj-rf-lifting-spb" },
    { icon: <Sparkles size={20} />, label: "Холодная плазма", desc: "Деликатное восстановление и улучшение кожи", path: "/holodnaya-plazma-spb" },
    { icon: <RefreshCw size={20} />, label: "Фракционный лазер CO₂", desc: "Глубокое обновление кожи", path: "/frakcionnyy-lazer-co2-spb" },
  ],
  "/mikroigolchatyj-rf-lifting-spb": [
    { icon: <Zap size={20} />, label: "Все аппаратные протоколы", desc: "Обзор аппаратных методик для лица", path: "/aparatnye-protokoly-lica-spb" },
    { icon: <Sparkles size={20} />, label: "Холодная плазма", desc: "Деликатное восстановление кожи", path: "/holodnaya-plazma-spb" },
    { icon: <RefreshCw size={20} />, label: "Уход за лицом", desc: "Увлажнение и питание после процедуры", path: "/uhod-za-licom-spb" },
  ],
  "/holodnaya-plazma-spb": [
    { icon: <Zap size={20} />, label: "Микроигольчатый RF", desc: "Уплотнение и лифтинг кожи", path: "/mikroigolchatyj-rf-lifting-spb" },
    { icon: <Sparkles size={20} />, label: "Все аппаратные протоколы", desc: "Обзор методик для лица", path: "/aparatnye-protokoly-lica-spb" },
    { icon: <RefreshCw size={20} />, label: "Пилинги", desc: "Обновление текстуры и тона кожи", path: "/pilingi-spb" },
  ],
  "/fotoomolozhenie-bbl-spb": [
    { icon: <Zap size={20} />, label: "Глубокое обновление", desc: "Фракционный лазер CO₂ для рубцов и морщин", path: "/frakcionnyy-lazer-co2-spb" },
    { icon: <Sparkles size={20} />, label: "Подготовить кожу", desc: "Пилинги перед курсом фотоомоложения", path: "/pilingi-spb" },
  ],
  "/frakcionnyy-lazer-co2-spb": [
    { icon: <RefreshCw size={20} />, label: "Восстановление после лазера", desc: "Уход за лицом с успокаивающими масками", path: "/uhod-za-licom-spb" },
    { icon: <Sparkles size={20} />, label: "Поддержать эффект", desc: "Фотоомоложение BBL для коррекции пигментации", path: "/fotoomolozhenie-bbl-spb" },
  ],
  "/apparatnye-protokoly-tela-spb": [
    { icon: <Zap size={20} />, label: "Усилить эффект", desc: "Коррекция фигуры — кавитация и LPG-массаж", path: "/korrekciya-figury-spb" },
    { icon: <RefreshCw size={20} />, label: "Расслабление после процедуры", desc: "Восстановительный массаж для снятия напряжения", path: "/massazh-tela-spb" },
    { icon: <Sparkles size={20} />, label: "Комплексное восстановление", desc: "СПА-процедуры и обёртывания", path: "/spa-i-vosstanovlenie-spb" },
  ],
  "/korrekciya-figury-spb": [
    { icon: <Zap size={20} />, label: "Жиросжигание", desc: "Горячий вакуум — термовакуумное уменьшение объёмов", path: "/goryachiy-vakuum-spb" },
    { icon: <RefreshCw size={20} />, label: "Антицеллюлит", desc: "Вакуумный массаж для проработки целлюлита", path: "/vakuumnyj-massazh-spb" },
    { icon: <Sparkles size={20} />, label: "Подтяжка кожи", desc: "RF-лифтинг тела для тонуса и лифтинга", path: "/rf-lifting-tela-spb" },
  ],
  "/goryachiy-vakuum-spb": [
    { icon: <Zap size={20} />, label: "Усилить эффект", desc: "RF-лифтинг тела для подтяжки кожи после жиросжигания", path: "/rf-lifting-tela-spb" },
    { icon: <RefreshCw size={20} />, label: "Добавить антицеллюлит", desc: "Вакуумный массаж для проработки текстуры кожи", path: "/vakuumnyj-massazh-spb" },
    { icon: <Sparkles size={20} />, label: "Детокс и восстановление", desc: "Лимфодренажный массаж после курса", path: "/vosstanovitelnye-massazhi-spb" },
  ],
  "/vakuumnyj-massazh-spb": [
    { icon: <Zap size={20} />, label: "Усилить жиросжигание", desc: "Горячий вакуум для термовоздействия на жировые отложения", path: "/goryachiy-vakuum-spb" },
    { icon: <RefreshCw size={20} />, label: "Подтянуть кожу", desc: "RF-лифтинг тела для уплотнения и тонуса", path: "/rf-lifting-tela-spb" },
    { icon: <Sparkles size={20} />, label: "СПА-восстановление", desc: "Инфракрасная капсула и обёртывания", path: "/spa-i-vosstanovlenie-spb" },
  ],
  "/rf-lifting-tela-spb": [
    { icon: <Zap size={20} />, label: "Добавить жиросжигание", desc: "Горячий вакуум для уменьшения объёмов", path: "/goryachiy-vakuum-spb" },
    { icon: <RefreshCw size={20} />, label: "Антицеллюлитная коррекция", desc: "Вакуумный массаж для проработки текстуры", path: "/vakuumnyj-massazh-spb" },
    { icon: <Sparkles size={20} />, label: "Мышечный тонус", desc: "EMS / INDIBA / БМС для укрепления мышц", path: "/apparatnye-protokoly-tela-spb" },
  ],
  "/massazh-tela-spb": [
    { icon: <Zap size={20} />, label: "Усилить эффект", desc: "Коррекция фигуры — прессотерапия и LPG", path: "/korrekciya-figury-spb" },
    { icon: <RefreshCw size={20} />, label: "Лимфодренаж", desc: "Лимфодренажный и висцеральный массаж", path: "/vosstanovitelnye-massazhi-spb" },
    { icon: <Sparkles size={20} />, label: "Полный релакс", desc: "СПА-процедуры с инфракрасной капсулой", path: "/spa-i-vosstanovlenie-spb" },
  ],
  "/vosstanovitelnye-massazhi-spb": [
    { icon: <Zap size={20} />, label: "Добавить тонус", desc: "Восстановительный массаж — ШВЗ и спина", path: "/massazh-tela-spb" },
    { icon: <RefreshCw size={20} />, label: "Глубокий релакс", desc: "СПА-процедуры и обёртывания", path: "/spa-i-vosstanovlenie-spb" },
    { icon: <Sparkles size={20} />, label: "Уход за лицом", desc: "Массаж лица для комплексного эффекта", path: "/massazh-lica-spb" },
  ],
  "/spa-i-vosstanovlenie-spb": [
    { icon: <Zap size={20} />, label: "Усилить детокс", desc: "Лимфодренажный массаж для дренажа", path: "/vosstanovitelnye-massazhi-spb" },
    { icon: <RefreshCw size={20} />, label: "Мягкое восстановление", desc: "Восстановительный массаж после СПА", path: "/massazh-tela-spb" },
    { icon: <Sparkles size={20} />, label: "Уход за лицом", desc: "Комплексный уход с масками и массажем", path: "/uhod-za-licom-spb" },
  ],
  "/dopolnitelnye-uslugi-spb": [
    { icon: <Zap size={20} />, label: "Аппаратное воздействие", desc: "EMS / INDIBA / БМС для тонуса", path: "/apparatnye-protokoly-tela-spb" },
    { icon: <RefreshCw size={20} />, label: "Расслабление", desc: "СПА-процедуры и восстановление", path: "/spa-i-vosstanovlenie-spb" },
  ],
  "/ozdorovitelnye-procedury-spb": [
    { icon: <RefreshCw size={20} />, label: "Восстановление", desc: "СПА-процедуры и обёртывания", path: "/spa-i-vosstanovlenie-spb" },
    { icon: <Sparkles size={20} />, label: "Мягкий массаж", desc: "Лимфодренажный массаж после процедур", path: "/vosstanovitelnye-massazhi-spb" },
  ],
};

interface NextStepProps {
  currentPath: string;
}

const NextStep = ({ currentPath }: NextStepProps) => {
  const steps = stepsByPath[currentPath];
  if (!steps) return null;

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl mb-3">Следующий шаг</h2>
          <p className="text-muted-foreground">Для более выраженного результата рекомендуем сочетать процедуры</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <motion.div key={s.path} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link to={s.path} className="flex flex-col h-full bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {s.icon}
                </div>
                <h3 className="font-heading text-lg group-hover:text-primary transition-colors mb-1">{s.label}</h3>
                <p className="text-muted-foreground text-sm flex-1">{s.desc}</p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4">
                  Подробнее <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextStep;
