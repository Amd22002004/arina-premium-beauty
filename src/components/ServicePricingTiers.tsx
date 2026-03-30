import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServicePrice {
  name: string;
  price: string; // e.g. "2 490 ₽" or "от 9 900 ₽"
  duration?: string;
  desc?: string;
  discount?: boolean;
}

interface ServicePricingTiersProps {
  title: string;
  prices: ServicePrice[];
}

function parsePrice(priceStr: string): number | null {
  const cleaned = priceStr.replace(/от\s*/i, "").replace(/\s/g, "").replace("₽", "");
  const num = parseInt(cleaned, 10);
  return isNaN(num) ? null : num;
}

function formatPrice(n: number): string {
  return n.toLocaleString("ru-RU") + " ₽";
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const ServicePricingTiers = ({ title, prices }: ServicePricingTiersProps) => {
  const isFromPrice = (p: ServicePrice) => p.price.trim().startsWith("от");

  return (
    <section className="py-10 md:py-14">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">{title}</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {prices.map((service, idx) => {
            const base = parsePrice(service.price);
            const hasFrom = isFromPrice(service);
            const canTier = base !== null && !hasFrom;

            const price5 = canTier ? Math.round(base * 5 * 0.9) : null;
            const price10 = canTier ? Math.round(base * 10 * 0.85) : null;
            const saving5 = canTier ? base * 5 - price5! : null;
            const saving10 = canTier ? base * 10 - price10! : null;

            return (
              <motion.div
                key={service.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeUp}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <div className="p-5 md:p-6 border-b border-border">
                  <h3 className="font-heading text-xl">{service.name}</h3>
                  {service.desc && (
                    <p className="text-muted-foreground text-sm mt-1">{service.desc}</p>
                  )}
                </div>

                {/* 1 процедура */}
                <div className="flex items-center justify-between p-5 md:px-6 border-b border-border">
                  <div>
                    <span className="text-foreground/80">1 процедура</span>
                    {service.duration && (
                      <span className="text-muted-foreground text-sm ml-2">({service.duration})</span>
                    )}
                  </div>
                  <span className="font-heading text-lg text-primary whitespace-nowrap">{service.price}</span>
                </div>

                {canTier && (
                  <>
                    {/* 5 процедур */}
                    <div className="flex items-center justify-between p-5 md:px-6 border-b border-border bg-secondary/20">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-foreground/80">5 процедур</span>
                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">−10%</span>
                        <span className="text-xs text-muted-foreground">экономия {formatPrice(saving5!)}</span>
                      </div>
                      <span className="font-heading text-lg text-primary whitespace-nowrap">{formatPrice(price5!)}</span>
                    </div>

                    {/* 10 процедур */}
                    <div className="flex items-center justify-between p-5 md:px-6 bg-primary/5 relative">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-foreground">10 процедур</span>
                        <Badge className="bg-primary text-primary-foreground text-xs">Выгоднее</Badge>
                        <span className="text-xs text-muted-foreground">экономия {formatPrice(saving10!)}</span>
                      </div>
                      <span className="font-heading text-xl text-primary whitespace-nowrap">{formatPrice(price10!)}</span>
                    </div>
                  </>
                )}

                {/* CTA */}
                {canTier && (
                  <div className="p-4 md:px-6 border-t border-border bg-secondary/10 text-center">
                    <Link to="/booking">
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Записаться на курс <ChevronRight size={14} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePricingTiers;
