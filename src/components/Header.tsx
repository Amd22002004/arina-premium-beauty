import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VKIcon, TelegramIcon } from "@/components/SocialIcons";

const allServices = [
  { to: "/massazh-lica-spb", label: "Массаж лица", group: "Лицо", keywords: ["массаж лица", "скульптурный массаж", "лифтинг лица", "омоложение лица", "подтяжка лица", "буккальный"] },
  { to: "/uhod-za-licom-spb", label: "Уход за лицом", group: "Лицо", keywords: ["уход за лицом", "чистка лица", "увлажнение", "питание кожи", "уходовые процедуры", "акне", "морщины"] },
  { to: "/pilingi-spb", label: "Пилинги", group: "Лицо", keywords: ["пилинг", "пилинги", "химический пилинг", "отшелушивание", "обновление кожи", "ретиноловый", "гликолевый"] },
  { to: "/aparatnye-protokoly-lica-spb", label: "Аппаратные процедуры лица", group: "Лицо", keywords: ["аппаратные процедуры", "аппаратная косметология", "rf лифтинг", "микроигольчатый", "холодная плазма", "микротоки"] },
  { to: "/fotoomolozhenie-bbl-spb", label: "Фотоомоложение BBL", group: "Лицо", keywords: ["фотоомоложение", "bbl", "пигментация", "сосудистые звёздочки", "розацеа", "купероз", "фототерапия"] },
  { to: "/frakcionnyy-lazer-co2-spb", label: "Фракционный лазер CO₂", group: "Лицо", keywords: ["лазер", "co2", "фракционный", "шлифовка", "рубцы", "постакне", "лазерное омоложение"] },
  { to: "/apparatnye-protokoly-tela-spb", label: "EMS / INDIBA / БМС", group: "Тело и прочее", keywords: ["ems", "indiba", "бмс", "миостимуляция", "аппаратный массаж тела", "электростимуляция"] },
  { to: "/korrekciya-figury-spb", label: "Коррекция фигуры", group: "Тело и прочее", keywords: ["коррекция фигуры", "похудение", "целлюлит", "антицеллюлитный", "моделирование тела", "объёмы", "жиросжигание"] },
  { to: "/massazh-tela-spb", label: "Медицинский массаж", group: "Тело и прочее", keywords: ["медицинский массаж", "массаж тела", "массаж спины", "лечебный массаж", "классический массаж", "боль в спине"] },
  { to: "/vosstanovitelnye-massazhi-spb", label: "Лимфодренажный и висцеральный", group: "Тело и прочее", keywords: ["лимфодренаж", "лимфодренажный", "висцеральный", "отёки", "детокс", "лимфа", "внутренние органы"] },
  { to: "/spa-i-vosstanovlenie-spb", label: "СПА и восстановление", group: "Тело и прочее", keywords: ["спа", "spa", "восстановление", "релакс", "расслабление", "стоунтерапия", "обёртывание", "отдых"] },
  { to: "/dopolnitelnye-uslugi-spb", label: "Деликатные услуги", group: "Тело и прочее", keywords: ["деликатные", "мужское здоровье", "мужское оздоровление", "интимное", "простата", "потенция", "мужские процедуры", "аппаратное восстановление"] },
  { to: "/ozdorovitelnye-procedury-spb", label: "Оздоровительные процедуры", group: "Тело и прочее", keywords: ["оздоровление", "оздоровительные", "здоровье", "профилактика", "иммунитет", "общее оздоровление"] },
  { to: "/kursy-i-kompleksy", label: "Курсы и комплексы", group: "Тело и прочее", keywords: ["курс", "комплекс", "программа", "пакет", "абонемент", "скидка", "спецпредложение"] },
];

const quickSuggestions = ["массаж лица", "коррекция фигуры", "мужское оздоровление", "СПА и восстановление"];

const filterServices = (query: string) => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    return allServices.filter((s) =>
      s.label.toLowerCase().includes(q) ||
      s.keywords.some((kw) => kw.toLowerCase().includes(q))
    );
  };

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/services", label: "Услуги", hasDropdown: true },
  { to: "/price", label: "Прайс" },
  { to: "/about", label: "О специалисте" },
  { to: "/reviews", label: "Отзывы" },
  { to: "/contacts", label: "Контакты" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
    setSearchQuery("");
    setMobileSearchQuery("");
  }, [location.pathname]);

  useEffect(() => {
    if (dropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [dropdownOpen]);

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const filteredDesktop = useMemo(() => filterServices(searchQuery), [searchQuery]);
  const filteredMobile = useMemo(() => filterServices(mobileSearchQuery), [mobileSearchQuery]);

  const isSearching = searchQuery.trim().length > 0;
  const isMobileSearching = mobileSearchQuery.trim().length > 0;

  const groupedServices = useMemo(() => {
    const groups: Record<string, typeof allServices> = {};
    for (const s of allServices) {
      if (!groups[s.group]) groups[s.group] = [];
      groups[s.group].push(s);
    }
    return groups;
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <Link to="/" className="font-heading text-xl md:text-2xl font-semibold tracking-wide text-foreground">
          АРТ Косметология
          <span className="block text-[10px] md:text-xs font-body font-normal tracking-[0.15em] uppercase text-muted-foreground">
            Авторские ритуалы и технологии
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) =>
            l.hasDropdown ? (
              <div
                key={l.to}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={l.to}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-primary inline-flex items-center gap-1 ${
                    location.pathname.startsWith("/services") || location.pathname.match(/-(spb|co2-spb)$/)
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {l.label}
                  <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </Link>

                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="bg-card border border-border rounded-xl shadow-xl p-5 min-w-[460px] animate-fade-in">
                      {/* Search input */}
                      <div className="relative mb-4">
                        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Поиск процедуры..."
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                        />
                      </div>

                      {/* Quick suggestions */}
                      {!isSearching && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {quickSuggestions.map((s) => (
                            <button
                              key={s}
                              onClick={() => setSearchQuery(s)}
                              className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Search results or grouped list */}
                      {isSearching ? (
                        <div className="space-y-1">
                          {filteredDesktop && filteredDesktop.length > 0 ? (
                            filteredDesktop.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                className={`text-sm py-1.5 px-2 block rounded-md transition-colors hover:bg-accent hover:text-primary ${
                                  location.pathname === item.to ? "text-primary font-medium" : "text-foreground/80"
                                }`}
                              >
                                {item.label}
                                <span className="text-xs text-muted-foreground ml-2">· {item.group}</span>
                              </Link>
                            ))
                          ) : (
                            <p className="text-sm text-muted-foreground py-2 text-center">Ничего не найдено</p>
                          )}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-5">
                          {Object.entries(groupedServices).map(([group, items]) => (
                            <div key={group}>
                              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{group}</p>
                              <ul className="space-y-1">
                                {items.map((item) => (
                                  <li key={item.to}>
                                    <Link
                                      to={item.to}
                                      className={`text-sm py-1 block transition-colors hover:text-primary ${
                                        location.pathname === item.to ? "text-primary font-medium" : "text-foreground/80"
                                      }`}
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="border-t border-border pt-3 mt-3">
                        <Link to="/services" className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1">
                          Все услуги <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                  location.pathname === l.to ? "text-primary" : "text-foreground/70"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://vk.com/beauty_salon_arina" target="_blank" rel="noopener noreferrer" aria-label="VK" className="text-muted-foreground hover:text-primary transition-colors">
            <VKIcon />
          </a>
          <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-muted-foreground hover:text-primary transition-colors">
            <TelegramIcon />
          </a>
          <a href="tel:+79117193949" className="text-muted-foreground hover:text-primary transition-colors">
            <Phone size={18} />
          </a>
          <Link to="/booking">
            <Button size="sm" className="gold-gradient text-primary-foreground border-0 ml-2 font-body text-sm shadow-lg hover:shadow-xl transition-shadow">
              Записаться
            </Button>
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2" aria-label="Меню">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-6 py-4 gap-1">
            <Link to="/" onClick={() => setOpen(false)} className="text-base font-medium py-2 border-b border-border/50 text-foreground/80 hover:text-primary transition-colors">
              Главная
            </Link>

            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between text-base font-medium py-2 border-b border-border/50 text-foreground/80 hover:text-primary transition-colors w-full text-left"
            >
              Услуги
              <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-2 pb-2 space-y-3">
                {/* Mobile search */}
                <div className="relative mt-2">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    placeholder="Поиск процедуры..."
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                </div>

                {/* Quick suggestions mobile */}
                {!isMobileSearching && (
                  <div className="flex flex-wrap gap-1.5">
                    {quickSuggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => setMobileSearchQuery(s)}
                        className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {isMobileSearching ? (
                  <div className="space-y-1">
                    {filteredMobile && filteredMobile.length > 0 ? (
                      filteredMobile.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="block text-sm py-1.5 text-foreground/70 hover:text-primary transition-colors"
                        >
                          {item.label}
                          <span className="text-xs text-muted-foreground ml-2">· {item.group}</span>
                        </Link>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground py-2 text-center">Ничего не найдено</p>
                    )}
                  </div>
                ) : (
                  Object.entries(groupedServices).map(([group, items]) => (
                    <div key={group}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-2 mb-1">{group}</p>
                      {items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="block text-sm py-1.5 text-foreground/70 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))
                )}

                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-primary font-medium pt-1"
                >
                  Все услуги →
                </Link>
              </div>
            )}

            {[
              { to: "/price", label: "Прайс" },
              { to: "/about", label: "О специалисте" },
              { to: "/reviews", label: "Отзывы" },
              { to: "/contacts", label: "Контакты" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium py-2 border-b border-border/50 text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <div className="flex items-center gap-4 pt-3">
              <a href="https://vk.com/beauty_salon_arina" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><VKIcon /></a>
              <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><TelegramIcon /></a>
              <a href="tel:+79117193949" className="text-muted-foreground hover:text-primary"><Phone size={18} /></a>
            </div>
            <Link to="/booking" onClick={() => setOpen(false)}>
              <Button className="w-full gold-gradient text-primary-foreground border-0 mt-2 shadow-lg">Записаться онлайн</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;