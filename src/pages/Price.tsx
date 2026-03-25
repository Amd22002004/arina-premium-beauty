import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { services, categories, formatPrice } from "@/data/services";

const Price = () => {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? services.filter((s) => s.category === active) : services;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Прайс-лист</h1>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Актуальные цены на все процедуры. Окончательная стоимость определяется на консультации с учётом индивидуальных особенностей.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setActive(null)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${!active ? "gold-gradient text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"}`}
            >
              Все
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${active === c ? "gold-gradient text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="hidden md:grid grid-cols-[1fr_auto] gap-4 px-6 py-4 bg-muted text-sm font-medium text-muted-foreground uppercase tracking-wider">
              <span>Услуга</span>
              <span>Стоимость</span>
            </div>
            {filtered.map((s, i) => (
              <motion.div
                key={s.name + s.category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-4 px-6 py-4 border-t border-border/50 hover:bg-muted/30 transition-colors"
              >
                <div>
                  <span className="text-sm text-foreground">{s.name}</span>
                  <span className="md:hidden text-sm font-semibold text-primary ml-3">{formatPrice(s.price)}</span>
                </div>
                <span className="hidden md:block text-sm font-semibold text-primary whitespace-nowrap">{formatPrice(s.price)}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground text-sm mb-4">На первую процедуру-знакомство — скидка до 30% на входные услуги</p>
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground border-0 px-10">Записаться</Button>
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default Price;
