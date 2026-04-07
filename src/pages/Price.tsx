import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronRight, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { services, categories, formatPrice } from "@/data/services";

const Price = () => {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? services.filter((s) => s.category === active) : services;

  return (
    <Layout>
      <Helmet>
        <title>Прайс-лист — АРТ Косметология | Цены на процедуры в СПб</title>
        <meta name="description" content="Актуальный прайс-лист АРТ Косметологии: массаж лица, пилинги, BBL, коррекция фигуры, СПА. Цены от 400 ₽. Запись онлайн." />
        <link rel="canonical" href="https://arina-premium-beauty.lovable.app/price" />
      </Helmet>

      <section className="py-20 md:py-28">
        <div className="container-wide px-4 md:px-8">
          <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Прайс-лист</h1>
          <p className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto">
            Актуальные цены на все процедуры. Нажмите на название для подробностей.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button
              onClick={() => setActive(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${!active ? "gold-gradient text-primary-foreground shadow-lg" : "bg-secondary text-foreground hover:bg-accent"}`}
            >
              Все
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === c ? "gold-gradient text-primary-foreground shadow-lg" : "bg-secondary text-foreground hover:bg-accent"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="space-y-3 max-w-4xl mx-auto">
            {filtered.map((s, i) => (
              <motion.div
                key={s.name + s.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
                className={`bg-card rounded-xl border border-border p-5 md:p-6 hover:border-primary/30 transition-colors ${s.comingSoon ? "opacity-60" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  {/* Name & result */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {s.link ? (
                        <Link to={s.link} className="font-heading text-lg text-foreground hover:text-primary transition-colors">
                          {s.name}
                        </Link>
                      ) : (
                        <span className="font-heading text-lg text-foreground">{s.name}</span>
                      )}
                      {s.comingSoon && (
                        <span className="inline-flex items-center gap-1 text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                          <Clock size={10} /> скоро
                        </span>
                      )}
                    </div>
                    {s.result && (
                      <p className="text-sm text-muted-foreground mt-1">{s.result}</p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                    <span className="font-heading text-xl text-primary whitespace-nowrap">
                      {s.comingSoon ? "Скоро" : formatPrice(s.price, s.pricePrefix)}
                    </span>

                    <div className="flex items-center gap-2">
                      {s.link && (
                        <Link to={s.link}>
                          <Button size="sm" variant="outline" className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground text-xs px-3">
                            Подробнее
                          </Button>
                        </Link>
                      )}
                      {!s.comingSoon && (
                        <Link to={`/booking?service=${encodeURIComponent(s.name)}`}>
                          <Button size="sm" className="gold-gradient text-primary-foreground border-0 text-xs px-3">
                            Записаться
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-5">На первую процедуру-знакомство — скидка до 30% на входные услуги</p>
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-12 shadow-xl hover:shadow-2xl transition-shadow">Записаться</Button>
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default Price;
