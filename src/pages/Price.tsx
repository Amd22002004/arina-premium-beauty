import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { services, categories, formatPrice } from "@/data/services";

const Price = () => {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? services.filter((s) => s.category === active) : services;

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container-wide px-4 md:px-8">
          <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Прайс-лист</h1>
          <p className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto">
            Актуальные цены на все процедуры. Окончательная стоимость определяется на консультации с учётом индивидуальных особенностей.
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

          {/* Table */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="hidden md:grid grid-cols-[1fr_auto] gap-4 px-8 py-4 bg-muted text-sm font-medium text-muted-foreground uppercase tracking-wider">
              <span>Услуга</span>
              <span>Стоимость</span>
            </div>
            {filtered.map((s, i) => (
              <motion.div
                key={s.name + s.category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                className={`grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-4 px-8 py-5 border-t border-border/50 hover:bg-muted/30 transition-colors ${s.comingSoon ? 'opacity-60' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-foreground">{s.name}</span>
                  {s.comingSoon && (
                    <span className="inline-flex items-center gap-1 text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                      <Clock size={10} /> скоро
                    </span>
                  )}
                  <span className="md:hidden font-semibold text-primary ml-auto">
                    {s.comingSoon ? "Скоро" : formatPrice(s.price, s.pricePrefix)}
                  </span>
                </div>
                <span className="hidden md:block font-semibold text-primary whitespace-nowrap">
                  {s.comingSoon ? "Скоро" : formatPrice(s.price, s.pricePrefix)}
                </span>
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
