import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Clock, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { services, categories, formatPrice } from "@/data/services";

// Categories that commonly offer course discounts
const courseCategories = new Set([
  "Массаж лица",
  "Уход за лицом",
  "Коррекция фигуры",
  "Аппаратные процедуры лица",
  "Восстановительный массаж",
  "EMS / INDIBA / БМС",
]);

// Services suitable for first visit
const firstVisitServices = new Set([
  "Массаж лица",
  "Уход за лицом (массаж + маски)",
  "Пилинг",
  "Массаж ШВЗ (30 мин)",
  "Массаж спины (30 мин)",
  "Инфракрасная капсула (50 мин)",
  "Лимфодренажный массаж",
  "Холодная плазма",
]);

const ConsultationBreak = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="my-10 text-center py-10 px-6 rounded-2xl bg-secondary/50 border border-border"
  >
    <HelpCircle className="mx-auto mb-3 text-primary" size={28} />
    <h3 className="font-heading text-xl mb-2">Не уверены, что выбрать?</h3>
    <p className="text-muted-foreground mb-5 max-w-md mx-auto">
      Подберём процедуру под вашу задачу — бесплатно
    </p>
    <Link to="/booking">
      <Button className="gold-gradient text-primary-foreground border-0 px-8">
        Подобрать процедуру
      </Button>
    </Link>
  </motion.div>
);

const Price = () => {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? services.filter((s) => s.category === active) : services;

  // Insert consultation breaks every ~12 items
  const breakInterval = 12;

  return (
    <Layout>
      <Helmet>
        <title>Прайс-лист — АРТ Косметология | Цены на процедуры в СПб</title>
        <meta name="description" content="Актуальный прайс-лист АРТ Косметологии: массаж лица, пилинги, BBL, коррекция фигуры, СПА. Цены от 400 ₽. Запись онлайн." />
        <link rel="canonical" href="https://arina-premium-beauty.lovable.app/price" />
      </Helmet>

      <section className="py-20 md:py-28">
        <div className="container-wide px-4 md:px-8">
          {/* Intro block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Цены на процедуры</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Точную процедуру и протокол подбираем индивидуально под вашу задачу — оставьте заявку, и мы подберём лучшее решение
            </p>
          </motion.div>

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
              <div key={s.name + s.category}>
                {/* Consultation break between groups */}
                {!active && i > 0 && i % breakInterval === 0 && (
                  <ConsultationBreak />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  className={`bg-card rounded-xl border border-border p-5 md:p-6 hover:border-primary/30 transition-colors ${s.comingSoon ? "opacity-60" : ""}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
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

                      {/* Hints */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {firstVisitServices.has(s.name) && (
                          <span className="inline-flex items-center gap-1 text-xs text-primary/80 bg-primary/5 px-2.5 py-1 rounded-full">
                            <Sparkles size={10} /> Подходит для первого визита
                          </span>
                        )}
                        {courseCategories.has(s.category) && !s.comingSoon && (
                          <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                            Выгоднее курсом — до −20%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price & actions */}
                    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 sm:pt-0.5">
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
                            <Button size="sm" className="gold-gradient text-primary-foreground border-0 text-xs px-4 shadow-md">
                              Записаться
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center py-14 px-6 rounded-2xl bg-card border border-primary/20"
          >
            <h2 className="font-heading text-2xl md:text-3xl mb-3">Не знаете, с чего начать?</h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-6">
              Запишитесь на консультацию — подберём процедуру под вашу задачу
            </p>
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-12 shadow-xl hover:shadow-2xl transition-shadow">
                Записаться на консультацию
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Price;
