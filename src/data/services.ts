export interface Service {
  name: string;
  price: number;
  pricePrefix?: string;
  category: string;
  comingSoon?: boolean;
  link?: string;
  result?: string;
}

export const categories = [
  "Массаж лица",
  "Уход за лицом",
  "Пилинги",
  "Аппаратные процедуры лица",
  "Фотоомоложение BBL",
  "Фракционный лазер CO₂",
  "Коррекция фигуры",
  "EMS / INDIBA / БМС",
  "Восстановительный массаж",
  "Лимфодренажный массаж",
  "Висцеральный массаж",
  "Работа с болью и суставами",
  "СПА и восстановление",
  "Деликатные услуги",
  "Оздоровительные процедуры",
];

export const services: Service[] = [
  { name: "Массаж лица", price: 1900, category: "Массаж лица", link: "/massazh-lica-spb", result: "Подтяжка овала, тонус кожи, уменьшение отёчности" },

  { name: "Уход за лицом (массаж + маски)", price: 2300, category: "Уход за лицом", link: "/uhod-za-licom-spb", result: "Глубокое увлажнение, питание и сияние кожи" },

  { name: "Пилинг", price: 3000, pricePrefix: "от", category: "Пилинги", link: "/pilingi-spb", result: "Обновление текстуры, выравнивание тона, сужение пор" },

  { name: "Аппаратная процедура лица / шеи / декольте", price: 3900, category: "Аппаратные процедуры лица", link: "/aparatnye-protokoly-lica-spb", result: "RF-лифтинг, INDIBA — омоложение и подтяжка" },
  { name: "Микроигольчатый RF-лифтинг", price: 5500, category: "Аппаратные процедуры лица", link: "/mikroigolchatyj-rf-lifting-spb", result: "Уплотнение кожи, коррекция текстуры и постакне" },
  { name: "Холодная плазма", price: 4000, category: "Аппаратные процедуры лица", link: "/holodnaya-plazma-spb", result: "Деликатное восстановление и улучшение кожи" },

  { name: "Фотоомоложение BBL (лицо)", price: 7400, category: "Фотоомоложение BBL", link: "/fotoomolozhenie-bbl-spb", result: "Выравнивание тона, устранение пигментации и сосудистых проявлений" },
  { name: "Фотоомоложение BBL комбо (лицо + шея)", price: 11000, pricePrefix: "от", category: "Фотоомоложение BBL", link: "/fotoomolozhenie-bbl-spb", result: "Комплексное фотоомоложение" },
  { name: "Фотоомоложение BBL (кисти рук)", price: 4700, category: "Фотоомоложение BBL", link: "/fotoomolozhenie-bbl-spb", result: "Устранение пигментных пятен на кистях" },

  { name: "Лазерная шлифовка лица CO₂", price: 7500, category: "Фракционный лазер CO₂", link: "/frakcionnyy-lazer-co2-spb", result: "Глубокое обновление, устранение морщин и рубцов" },
  { name: "Фракционный лазер CO₂ (зоны)", price: 3900, pricePrefix: "от", category: "Фракционный лазер CO₂", link: "/frakcionnyy-lazer-co2-spb", result: "Шея, декольте, кисти, рубцы — по зонам" },

  { name: "Коррекция фигуры", price: 2800, category: "Коррекция фигуры", link: "/korrekciya-figury-spb", result: "Уменьшение объёмов, антицеллюлитный эффект" },
  { name: "Горячий вакуум", price: 2800, category: "Коррекция фигуры", link: "/goryachiy-vakuum-spb", result: "Жиросжигание и уменьшение объёмов" },
  { name: "Вакуумный массаж", price: 2800, category: "Коррекция фигуры", link: "/vakuumnyj-massazh-spb", result: "Антицеллюлитная коррекция и моделирование контуров" },
  { name: "RF-лифтинг тела", price: 2800, category: "Коррекция фигуры", link: "/rf-lifting-tela-spb", result: "Подтяжка кожи и тонус мышц" },

  { name: "EMS / INDIBA / БМС", price: 2800, category: "EMS / INDIBA / БМС", link: "/apparatnye-protokoly-tela-spb", result: "Моделирование тела, укрепление мышц" },

  { name: "Массаж ШВЗ (30 мин)", price: 1600, category: "Восстановительный массаж", link: "/massazh-tela-spb", result: "Снятие зажимов шейно-воротниковой зоны" },
  { name: "Массаж спины (30 мин)", price: 1600, category: "Восстановительный массаж", link: "/massazh-tela-spb", result: "Расслабление и снятие напряжения спины" },
  { name: "Глубокий массаж (ШВЗ + спина)", price: 2800, category: "Восстановительный массаж", link: "/massazh-tela-spb", result: "Комплексная проработка шеи и спины" },

  { name: "Лимфодренажный массаж", price: 2400, category: "Лимфодренажный массаж", link: "/vosstanovitelnye-massazhi-spb", result: "Снятие отёков, улучшение лимфооттока" },

  { name: "Висцеральный массаж", price: 2800, category: "Висцеральный массаж", link: "/vosstanovitelnye-massazhi-spb", result: "Работа с внутренними органами, улучшение пищеварения" },

  { name: "Ударно-волновая терапия (УВТ) — 1 зона", price: 2800, category: "Работа с болью и суставами", link: "/uvt-spb", result: "Уменьшение боли, снижение воспаления, улучшение подвижности" },
  { name: "Ударно-волновая терапия (УВТ) — 2 зоны", price: 4500, category: "Работа с болью и суставами", link: "/uvt-spb", result: "Комплексное воздействие на две проблемные зоны" },
  { name: "Ударно-волновая терапия (УВТ) — 3 зоны", price: 6500, category: "Работа с болью и суставами", link: "/uvt-spb", result: "Максимальный охват: три зоны за одну процедуру" },

  { name: "Инфракрасная капсула (50 мин)", price: 1600, category: "СПА и восстановление", link: "/spa-i-vosstanovlenie-spb", result: "Детоксикация, расслабление, прогревание" },
  { name: "Медовая выкатка (45 мин)", price: 1600, category: "СПА и восстановление", link: "/spa-i-vosstanovlenie-spb", result: "Очищение кожи, расслабление, детокс" },
  { name: "Медовая выкатка (60 мин)", price: 2800, category: "СПА и восстановление", link: "/spa-i-vosstanovlenie-spb", result: "Глубокий детокс и расслабление" },
  { name: "Комплекс (капсула + выкатка)", price: 2900, category: "СПА и восстановление", link: "/spa-i-vosstanovlenie-spb", result: "Полное расслабление и восстановление" },
  { name: "Обёртывание", price: 1200, category: "СПА и восстановление", link: "/spa-i-vosstanovlenie-spb", result: "Питание кожи и уменьшение объёмов" },

  { name: "Удаление папиллом", price: 400, pricePrefix: "от", category: "Деликатные услуги", link: "/dopolnitelnye-uslugi-spb", result: "Безопасное удаление новообразований" },
  { name: "Интимное омоложение", price: 4000, category: "Деликатные услуги", link: "/dopolnitelnye-uslugi-spb", result: "Восстановление и омоложение деликатных зон" },

  { name: "Хиджама", price: 1600, pricePrefix: "от", category: "Оздоровительные процедуры", link: "/ozdorovitelnye-procedury-spb", result: "Оздоровление, детоксикация организма" },
  { name: "Гирудотерапия", price: 1600, pricePrefix: "от", category: "Оздоровительные процедуры", link: "/ozdorovitelnye-procedury-spb", result: "Улучшение кровообращения, оздоровление" },
];

export const formatPrice = (price: number, prefix?: string) => {
  if (price === 0) return "Скоро";
  const formatted = price.toLocaleString("ru-RU") + " ₽";
  return prefix ? `${prefix} ${formatted}` : formatted;
};
