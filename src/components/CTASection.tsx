import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = ({ title = "Готовы начать путь к обновлению?", subtitle = "Запишитесь на консультацию — подберём программу индивидуально" }: { title?: string; subtitle?: string }) => (
  <section className="py-20 md:py-28 bg-cream">
    <div className="container-narrow px-4 md:px-8 text-center">
      <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-5">{title}</h2>
      <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/booking">
          <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10 shadow-xl hover:shadow-2xl transition-shadow text-base">Записаться онлайн</Button>
        </Link>
        <a href="tel:+79117193949">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 text-base">
            +7 (911) 719-39-49
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
