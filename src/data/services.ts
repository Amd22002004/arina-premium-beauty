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
  "Медицинский массаж",
  "Лимфодренажный массаж",
  "Висцеральный массаж",
  "СПА и восстановление",
  "Деликатные услуги",
  "Оздоровительные процедуры",
];

export const services: Service[] = [
  { name: "Массаж лица", price: 2490, category: "Массаж лица", link: "/massazh-lica-spb", result: "Подтяжка овала, тонус кожи, уменьшение отёчности" },

  { name: "Уход за лицом (массаж + маски)", price: 2990, category: "Уход за лицом", link: "/uhod-za-licom-spb", result: "Глубокое увлажнение, питание и сияние кожи" },

  { name: "Пилинг", price: 3700, category: "Пилинги", link: "/pilingi-spb", result: "Обновление текстуры, выравнивание тона, сужение пор" },

  { name: "Аппаратная процедура лица / шеи / декольте", price: 4999, category: "Аппаратные процедуры лица", link: "/aparatnye-protokoly-lica-spb", result: "RF-лифтинг, INDIBA, БМС — омоложение и подтяжка" },

  { name: "Фотоомоложение BBL (лицо)", price: 9990, category: "Фотоомоложение BBL", link: "/fotoomolozhenie-bbl-spb", result: "Устранение пигментации и сосудистых звёздочек" },
  { name: "Фотоомоложение BBL (шея / декольте)", price: 7900, category: "Фотоомоложение BBL", link: "/fotoomolozhenie-bbl-spb", result: "Омоложение зоны шеи и декольте" },
  { name: "Фотоомоложение BBL (кисти рук)", price: 5900, category: "Фотоомоложение BBL", link: "/fotoomolozhenie-bbl-spb", result: "Устранение пигментных пятен на кистях" },
  { name: "Фотоомоложение BBL (лицо + шея + декольте)", price: 17890, category: "Фотоомоложение BBL", link: "/fotoomolozhenie-bbl-spb", result: "Комплексное фотоомоложение трёх зон" },

  { name: "Фракционный лазер CO₂ (лицо)", price: 9900, category: "Фракционный лазер CO₂", link: "/frakcionnyy-lazer-co2-spb", result: "Глубокое обновление, устранение морщин и рубцов" },
  { name: "Фракционный лазер CO₂ (зоны)", price: 4900, pricePrefix: "от", category: "Фракционный лазер CO₂", link: "/frakcionnyy-lazer-co2-spb", result: "Шея, декольте, кисти, рубцы — по зонам" },

  { name: "Коррекция фигуры", price: 3500, category: "Коррекция фигуры", link: "/korrekciya-figury-spb", result: "Уменьшение объёмов, антицеллюлитный эффект" },

  { name: "EMS / INDIBA / БМС", price: 3500, category: "EMS / INDIBA / БМС", link: "/apparatnye-protokoly-tela-spb", result: "Моделирование тела, укрепление мышц" },

  { name: "Массаж ШВЗ (30 мин)", price: 2500, category: "Медицинский массаж", link: "/massazh-tela-spb", result: "Снятие зажимов шейно-воротниковой зоны" },
  { name: "Массаж спины (30 мин)", price: 2500, category: "Медицинский массаж", link: "/massazh-tela-spb", result: "Расслабление и снятие напряжения спины" },
  { name: "Глубокий массаж (ШВЗ + спина)", price: 3500, category: "Медицинский массаж", link: "/massazh-tela-spb", result: "Комплексная проработка шеи и спины" },

  { name: "Лимфодренажный массаж", price: 3000, category: "Лимфодренажный массаж", link: "/vosstanovitelnye-massazhi-spb", result: "Снятие отёков, улучшение лимфооттока" },

  { name: "Висцеральный массаж", price: 3500, category: "Висцеральный массаж", link: "/vosstanovitelnye-massazhi-spb", result: "Работа с внутренними органами, улучшение пищеварения" },

  { name: "Инфракрасная капсула (50 мин)", price: 2000, category: "СПА и восстановление", link: "/spa-i-vosstanovlenie-spb", result: "Детоксикация, расслабление, прогревание" },
  { name: "Медовая выкатка (45 мин)", price: 2500, category: "СПА и восстановление", link: "/spa-i-vosstanovlenie-spb", result: "Очищение кожи, расслабление, детокс" },
  { name: "Медовая выкатка (60 мин)", price: 3500, category: "СПА и восстановление", link: "/spa-i-vosstanovlenie-spb", result: "Глубокий детокс и расслабление" },
  { name: "Комплекс (капсула + выкатка)", price: 3700, category: "СПА и восстановление", link: "/spa-i-vosstanovlenie-spb", result: "Полное расслабление и восстановление" },
  { name: "Обёртывание", price: 1500, category: "СПА и восстановление", link: "/spa-i-vosstanovlenie-spb", result: "Питание кожи и уменьшение объёмов" },

  { name: "Удаление папиллом", price: 500, pricePrefix: "от", category: "Деликатные услуги", link: "/dopolnitelnye-uslugi-spb", result: "Безопасное удаление новообразований" },
  { name: "Интимное омоложение", price: 5000, category: "Деликатные услуги", link: "/dopolnitelnye-uslugi-spb", result: "Восстановление и омоложение деликатных зон" },

  { name: "Хиджама", price: 2000, pricePrefix: "от", category: "Оздоровительные процедуры", link: "/ozdorovitelnye-procedury-spb", result: "Оздоровление, детоксикация организма" },
  { name: "Гирудотерапия", price: 2500, pricePrefix: "от", category: "Оздоровительные процедуры", link: "/ozdorovitelnye-procedury-spb", result: "Улучшение кровообращения, оздоровление" },
];

export const formatPrice = (price: number, prefix?: string) => {
  if (price === 0) return "Скоро";
  const formatted = price.toLocaleString("ru-RU") + " ₽";
  return prefix ? `${prefix} ${formatted}` : formatted;
};
