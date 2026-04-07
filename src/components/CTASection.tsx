import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TelegramIcon, VKIcon } from "@/components/SocialIcons";

const CTASection = ({ title = "Готовы к персональной встрече?", subtitle = "Запишитесь на приватную консультацию — подберём программу индивидуально" }: { title?: string; subtitle?: string }) => (
  <section className="py-20 md:py-28 bg-cream">
    <div className="container-narrow px-4 md:px-8 text-center">
      <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-5">{title}</h2>
      <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
        <Link to="/booking">
          <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow text-base">Записаться онлайн</Button>
        </Link>
        <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-base gap-2">
            <TelegramIcon size={18} /> Написать в Telegram
          </Button>
        </a>
        <a href="https://vk.com/beauty_salon_arina" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-base gap-2">
            <VKIcon size={18} /> Открыть VK
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
