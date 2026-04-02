export interface Service {
  name: string;
  price: number;
  pricePrefix?: string;
  category: string;
  comingSoon?: boolean;
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
  { name: "Массаж лица", price: 2490, category: "Массаж лица" },

  { name: "Уход за лицом (массаж + маски)", price: 2990, category: "Уход за лицом" },

  { name: "Пилинг", price: 3700, category: "Пилинги" },

  { name: "Аппаратная процедура лица / шеи / декольте", price: 4999, category: "Аппаратные процедуры лица" },

  { name: "Фотоомоложение BBL (лицо)", price: 9990, category: "Фотоомоложение BBL" },
  { name: "Фотоомоложение BBL (шея / декольте)", price: 7900, category: "Фотоомоложение BBL" },
  { name: "Фотоомоложение BBL (кисти рук)", price: 5900, category: "Фотоомоложение BBL" },
  { name: "Фотоомоложение BBL (лицо + шея + декольте)", price: 17890, category: "Фотоомоложение BBL" },

  { name: "Фракционный лазер CO₂ (лицо)", price: 9900, category: "Фракционный лазер CO₂" },
  { name: "Фракционный лазер CO₂ (зоны)", price: 4900, pricePrefix: "от", category: "Фракционный лазер CO₂" },

  { name: "Коррекция фигуры", price: 3500, category: "Коррекция фигуры" },

  { name: "EMS / INDIBA / БМС", price: 3500, category: "EMS / INDIBA / БМС" },

  { name: "Массаж ШВЗ (30 мин)", price: 2500, category: "Медицинский массаж" },
  { name: "Массаж спины (30 мин)", price: 2500, category: "Медицинский массаж" },
  { name: "Глубокий массаж (ШВЗ + спина)", price: 3500, category: "Медицинский массаж" },

  { name: "Лимфодренажный массаж", price: 3000, category: "Лимфодренажный массаж" },

  { name: "Висцеральный массаж", price: 3500, category: "Висцеральный массаж" },

  { name: "Инфракрасная капсула (50 мин)", price: 2000, category: "СПА и восстановление" },
  { name: "Медовая выкатка (45 мин)", price: 2500, category: "СПА и восстановление" },
  { name: "Медовая выкатка (60 мин)", price: 3500, category: "СПА и восстановление" },
  { name: "Комплекс (капсула + выкатка)", price: 3700, category: "СПА и восстановление" },
  { name: "Обёртывание", price: 1500, category: "СПА и восстановление" },

  { name: "Удаление папиллом", price: 500, pricePrefix: "от", category: "Деликатные услуги" },
  { name: "Интимное омоложение", price: 5000, category: "Деликатные услуги" },

  { name: "Хиджама", price: 2000, pricePrefix: "от", category: "Оздоровительные процедуры" },
  { name: "Гирудотерапия", price: 2500, pricePrefix: "от", category: "Оздоровительные процедуры" },
];

export const formatPrice = (price: number, prefix?: string) => {
  if (price === 0) return "Скоро";
  const formatted = price.toLocaleString("ru-RU") + " ₽";
  return prefix ? `${prefix} ${formatted}` : formatted;
};
