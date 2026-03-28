import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { VKIcon, TelegramIcon } from "@/components/SocialIcons";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-wide px-4 md:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-2xl mb-1">АРТ Косметология</h3>
          <p className="text-xs opacity-50 mb-3 tracking-widest uppercase">Авторские ритуалы и технологии</p>
          <p className="text-sm opacity-70 font-body leading-relaxed">
            Эстетическая косметология и&nbsp;омоложение в&nbsp;Санкт&#8209;Петербурге. Авторские протоколы, аппаратные процедуры, массаж.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-3">Навигация</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/services" className="hover:opacity-100 transition-opacity">Услуги</Link>
            <Link to="/price" className="hover:opacity-100 transition-opacity">Прайс</Link>
            <Link to="/reviews" className="hover:opacity-100 transition-opacity">Отзывы</Link>
            <Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link>
            <Link to="/memos" className="hover:opacity-100 transition-opacity">Памятки</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-3">Контакты</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <a href="tel:+79117193949" className="flex items-center gap-2 hover:opacity-100">
              <Phone size={14} /> +7 (911) 719-39-49
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> пр-т Обуховской Обороны, 110к1
            </span>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="https://vk.com/beauty_salon_arina" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity"><VKIcon size={20} /></a>
            <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity"><TelegramIcon size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-3">Запись</h4>
          <Link to="/booking" className="inline-block gold-gradient text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-lg">
            Записаться онлайн
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs opacity-50">
        <span>© {new Date().getFullYear()} АРТ Косметология. Все права защищены.</span>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:opacity-100">Политика конфиденциальности</Link>
          <Link to="/consent" className="hover:opacity-100">Согласие на обработку данных</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
