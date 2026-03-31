import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Star } from "lucide-react";

interface ServicePrice {
  name: string;
  price: string;
  duration?: string;
  desc?: string;
  discount?: boolean;
}

interface ServicePricingTiersProps {
  title: string;
  prices: ServicePrice[];
}

type TierKey = 1 | 5 | 10;

function parsePrice(priceStr: string): number | null {
  const cleaned = priceStr.replace(/от\s*/i, "").replace(/\s/g, "").replace("₽", "");
  const num = parseInt(cleaned, 10);
  return isNaN(num) ? null : num;
}

function formatPrice(n: number): string {
  return n.toLocaleString("ru-RU") + " ₽";
}

const tiers: { key: TierKey; label: string; shortLabel: string; discount: number; badge?: string; icon?: typeof Star }[] = [
  { key: 1, label: "1 процедура", shortLabel: "1", discount: 0 },
  { key: 5, label: "5 процедур", shortLabel: "5", discount: 0.1, badge: "Оптимальный", icon: Star },
  { key: 10, label: "10 процедур", shortLabel: "10", discount: 0.15, badge: "Самый выгодный", icon: Sparkles },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const PricingCard = ({ service, idx }: { service: ServicePrice; idx: number }) => {
  const base = parsePrice(service.price);
  const hasFrom = service.price.trim().startsWith("от");
  const canTier = base !== null && !hasFrom;

  const [selected, setSelected] = useState<TierKey>(canTier ? 5 : 1);

  const tier = tiers.find((t) => t.key === selected)!;
  const totalPrice = canTier ? Math.round(base * selected * (1 - tier.discount)) : null;
  const saving = canTier && selected > 1 ? base * selected - totalPrice! : null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={idx}
      variants={fadeUp}
      className="bg-card rounded-xl border border-border overflow-hidden"
    >
      {/* Header */}
      <div className="p-5 md:p-6">
        <h3 className="font-heading text-xl">{service.name}</h3>
        {service.desc && <p className="text-muted-foreground text-sm mt-1">{service.desc}</p>}
        {service.duration && <p className="text-muted-foreground text-xs mt-1">{service.duration}</p>}
      </div>

      {/* Tier selector */}
      {canTier && (
        <div className="px-4 md:px-6 pb-4">
          <div className="grid grid-cols-3 gap-2">
            {tiers.map((t) => {
              const isActive = selected === t.key;
              const is10 = t.key === 10;
              const is5 = t.key === 5;
              return (
                <button
                  key={t.key}
                  onClick={() => setSelected(t.key)}
                  className={`relative flex flex-col items-center gap-1 rounded-lg px-3 py-3 md:py-4 text-sm font-medium transition-all duration-200 border-2 cursor-pointer ${
                    isActive
                      ? is10
                        ? "border-primary bg-primary/10 text-primary scale-[1.03] shadow-md animate-border-glow"
                        : is5
                          ? "border-primary/60 bg-primary/5 text-primary animate-border-glow"
                          : "border-primary/40 bg-secondary/30 text-foreground animate-border-glow"
                      : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:bg-secondary/20"
                  }`}
                >
                  {t.badge && (
                    <span className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${
                      is10 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                    }`}>
                      {t.badge}
                    </span>
                  )}
                  <span className="font-heading text-lg md:text-xl">{t.shortLabel}</span>
                  <span className="text-xs">{t.key === 1 ? "процедура" : "процедур"}</span>
                  {t.discount > 0 && (
                    <span className="text-xs font-semibold text-primary">−{t.discount * 100}%</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Price display */}
      <div className="px-5 md:px-6 pb-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="text-center py-4"
          >
            <div className="font-heading text-3xl md:text-4xl text-primary">
              {canTier && totalPrice !== null ? formatPrice(totalPrice) : service.price}
            </div>
            {saving !== null && saving > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-2 flex items-center justify-center gap-2 flex-wrap"
              >
                <Badge variant="secondary" className="text-xs">
                  Экономия {formatPrice(saving)}
                </Badge>
                {selected === 10 && (
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    <Sparkles size={10} className="mr-1" /> Рекомендуем
                  </Badge>
                )}
                {selected === 5 && (
                  <span className="text-xs text-muted-foreground">Самый популярный вариант</span>
                )}
              </motion.div>
            )}
            {canTier && selected > 1 && (
              <p className="text-xs text-muted-foreground mt-2">
                {formatPrice(Math.round(base * (1 - tier.discount)))} за процедуру вместо {service.price}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="p-4 md:px-6 border-t border-border bg-secondary/10 text-center">
        <Link to="/booking">
          <Button
            size="lg"
            className={`w-full sm:w-auto ${
              selected >= 5
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : ""
            }`}
            variant={selected >= 5 ? "default" : "outline"}
          >
            {selected > 1 ? "Записаться на курс" : "Записаться"}
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const ServicePricingTiers = ({ title, prices }: ServicePricingTiersProps) => (
  <section className="py-10 md:py-14">
    <div className="container-wide px-4 md:px-8">
      <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">{title}</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {prices.map((service, idx) => (
          <PricingCard key={service.name} service={service} idx={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicePricingTiers;
