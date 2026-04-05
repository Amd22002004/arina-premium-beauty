import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VKIcon, TelegramIcon } from "@/components/SocialIcons";

const menuColumn1 = {
  label: "Лицо",
  items: [
    { to: "/massazh-lica-spb", label: "Массаж лица" },
    { to: "/uhod-za-licom-spb", label: "Уход за лицом" },
    { to: "/pilingi-spb", label: "Пилинги" },
    { to: "/aparatnye-protokoly-lica-spb", label: "Аппаратные процедуры лица" },
    { to: "/fotoomolozhenie-bbl-spb", label: "Фотоомоложение BBL" },
    { to: "/frakcionnyy-lazer-co2-spb", label: "Фракционный лазер CO₂" },
  ],
};

const menuColumn2 = {
  label: "Тело и прочее",
  items: [
    { to: "/apparatnye-protokoly-tela-spb", label: "EMS / INDIBA / БМС" },
    { to: "/korrekciya-figury-spb", label: "Коррекция фигуры" },
    { to: "/massazh-tela-spb", label: "Медицинский массаж" },
    { to: "/vosstanovitelnye-massazhi-spb", label: "Лимфодренажный и висцеральный" },
    { to: "/spa-i-vosstanovlenie-spb", label: "СПА и восстановление" },
    { to: "/dopolnitelnye-uslugi-spb", label: "Деликатные услуги" },
    { to: "/ozdorovitelnye-procedury-spb", label: "Оздоровительные процедуры" },
    { to: "/kursy-i-kompleksy", label: "Курсы и комплексы" },
  ],
};

const mobileMenuCategories = [menuColumn1, menuColumn2];
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
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

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
                    <div className="bg-card border border-border rounded-xl shadow-xl p-6 min-w-[600px] grid grid-cols-2 gap-6 animate-fade-in">
                      {serviceCategories.map((cat) => (
                        <div key={cat.label}>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{cat.label}</p>
                          <ul className="space-y-1">
                            {cat.items.map((item) => (
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
                      <div className="col-span-2 border-t border-border pt-3 mt-1">
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
              <div className="pl-4 pb-2 space-y-3">
                {serviceCategories.map((cat) => (
                  <div key={cat.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-2 mb-1">{cat.label}</p>
                    {cat.items.map((item) => (
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
                ))}
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
