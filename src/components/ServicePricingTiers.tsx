import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Star } from "lucide-react";

export interface PriceTier {
  count: number;
  total: number;
}

export interface ServicePrice {
  name: string;
  price: string;
  priceValue?: number;
  tiers?: PriceTier[];
  desc?: string;
  duration?: string;
}

interface ServicePricingTiersProps {
  title: string;
  prices: ServicePrice[];
}

function formatPrice(n: number): string {
  return n.toLocaleString("ru-RU") + " ₽";
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const PricingCard = ({ service, idx }: { service: ServicePrice; idx: number }) => {
  const hasTiers = service.tiers && service.tiers.length > 0 && service.priceValue;
  const allOptions = hasTiers ? [1, ...service.tiers!.map((t) => t.count)] : [1];
  const [selected, setSelected] = useState(hasTiers ? service.tiers![0].count : 1);

  const selectedTier = hasTiers ? service.tiers!.find((t) => t.count === selected) : null;
  const totalPrice = selectedTier ? selectedTier.total : null;
  const saving = selectedTier && service.priceValue ? service.priceValue * selected - selectedTier.total : null;
  const perUnit = selectedTier && service.priceValue ? Math.round(selectedTier.total / selected) : null;
  const bestTier = hasTiers ? service.tiers![service.tiers!.length - 1].count : 1;

  const countLabel = (n: number) => {
    if (n === 1) return "процедура";
    if (n >= 2 && n <= 4) return "процедуры";
    return "процедур";
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={idx}
      variants={fadeUp}
      className="bg-card rounded-xl border border-border overflow-hidden"
    >
      <div className="p-5 md:p-6">
        <h3 className="font-heading text-xl">{service.name}</h3>
        {service.desc && <p className="text-muted-foreground text-sm mt-1">{service.desc}</p>}
        {service.duration && <p className="text-muted-foreground text-xs mt-1">{service.duration}</p>}
      </div>

      {hasTiers && (
        <div className="px-4 md:px-6 pb-4">
          <div className={`grid gap-2`} style={{ gridTemplateColumns: `repeat(${allOptions.length}, 1fr)` }}>
            {allOptions.map((count) => {
              const isActive = selected === count;
              const isBest = count === bestTier;
              const tier = service.tiers!.find((t) => t.count === count);
              const discount = tier && service.priceValue
                ? Math.round((1 - tier.total / (service.priceValue * count)) * 100)
                : 0;

              return (
                <button
                  key={count}
                  onClick={() => setSelected(count)}
                  className={`relative flex flex-col items-center gap-1 rounded-lg px-3 py-3 md:py-4 text-sm font-medium transition-all duration-200 border-2 cursor-pointer ${
                    isActive
                      ? isBest
                        ? "border-primary bg-primary/10 text-primary scale-[1.03] shadow-md animate-border-glow"
                        : count > 1
                          ? "border-primary/60 bg-primary/5 text-primary animate-border-glow"
                          : "border-primary/40 bg-secondary/30 text-foreground animate-border-glow"
                      : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:bg-secondary/20"
                  }`}
                >
                  {isBest && count > 1 && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap bg-primary text-primary-foreground">
                      Самый выгодный
                    </span>
                  )}
                  <span className="font-heading text-lg md:text-xl">{count}</span>
                  <span className="text-xs">{countLabel(count)}</span>
                  {discount > 0 && <span className="text-xs font-semibold text-primary">−{discount}%</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

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
              {totalPrice !== null ? formatPrice(totalPrice) : service.price}
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
                {selected === bestTier && (
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    <Sparkles size={10} className="mr-1" /> Рекомендуем
                  </Badge>
                )}
              </motion.div>
            )}
            {perUnit !== null && selected > 1 && (
              <p className="text-xs text-muted-foreground mt-2">
                {formatPrice(perUnit)} за процедуру вместо {service.price}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-4 md:px-6 border-t border-border bg-secondary/10 text-center">
        <Link to="/booking">
          <Button
            size="lg"
            className={`w-full sm:w-auto ${
              selected > 1
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : ""
            }`}
            variant={selected > 1 ? "default" : "outline"}
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
