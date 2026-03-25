import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VKIcon, TelegramIcon } from "@/components/SocialIcons";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { to: "/services", label: "Услуги" },
  { to: "/price", label: "Прайс" },
  { to: "/before-after", label: "До / После" },
  { to: "/reviews", label: "Отзывы" },
  { to: "/contacts", label: "Контакты" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <Link to="/" className="font-heading text-xl md:text-2xl font-semibold tracking-wide text-foreground">
          Арина
          <span className="block text-[10px] md:text-xs font-body font-normal tracking-[0.2em] uppercase text-muted-foreground">
            эстетика & омоложение
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
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
            <Button size="sm" className="gold-gradient text-primary-foreground border-0 ml-2 font-body text-sm">
              Записаться
            </Button>
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2" aria-label="Меню">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((l) => (
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
              <Button className="w-full gold-gradient text-primary-foreground border-0 mt-2">Записаться онлайн</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
