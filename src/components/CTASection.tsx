import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = ({ title = "Готовы начать путь к обновлению?", subtitle = "Запишитесь на консультацию — подберём программу индивидуально" }: { title?: string; subtitle?: string }) => (
  <section className="section-padding bg-cream">
    <div className="container-narrow text-center">
      <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">{title}</h2>
      <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/booking">
          <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-8">Записаться онлайн</Button>
        </Link>
        <a href="tel:+79117193949">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
            +7 (911) 719-39-49
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
