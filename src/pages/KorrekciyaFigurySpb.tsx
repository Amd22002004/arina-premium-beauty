import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, Shield, Users, Zap, Award, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import ConsultationCapture from "@/components/ConsultationCapture";
import result1 from "@/assets/korrekciya-result-1.jpg";
import result2 from "@/assets/korrekciya-result-2.jpg";
import result3 from "@/assets/korrekciya-result-3.jpg";
import result4 from "@/assets/korrekciya-result-4.jpg";
import rfLiftingPhoto from "@/assets/rf-lifting-body.webp";
import hotVacuumPhoto from "@/assets/hot-vacuum-result.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const procedures = [
  {
    title: "Горячий вакуум",
    slug: "/goryachiy-vakuum-spb",
    image: hotVacuumPhoto,
    angle: "Жиросжигание и уменьшение объёмов",
    desc: "Термовакуумное воздействие разрушает жировые отложения, запускает лимфодренаж и подтягивает кожу. Эффект заметен уже после первой процедуры.",
    tag: "Термовоздействие",
  },
  {
    title: "Вакуумно-роликовый массаж (4D)",
    slug: "/vakuumnyj-massazh-spb",
    video: "/videos/vacuum-massage.mp4",
    angle: "- Антицеллюлитная коррекция\n+ Уменьшение объёмов и коррекция фигуры",
    desc: "Разбивает жировые отложения\nУменьшает целлюлит\nМоделирует контуры тела\nЗапускает лимфодренаж",
    tag: "Вакуум",
  },
...
                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 self-start px-3 py-1 rounded-full mb-3">{p.tag}</span>
                  <h3 className="font-heading text-2xl mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm font-medium text-primary/80 mb-3 whitespace-pre-line">{p.angle}</p>
                  <p className="text-muted-foreground text-sm flex-1 leading-relaxed whitespace-pre-line">{p.desc}</p>
                  <div className="flex items-center gap-2 text-primary font-medium mt-4">
                    Подробнее <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Comparison table */}
    <section className="py-12 md:py-16 bg-card">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Чем отличаются процедуры</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">
          Сравните методики и выберите подходящую — или комбинируйте для максимального эффекта
        </p>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-3 font-heading text-base text-muted-foreground"></th>
                <th className="text-center py-4 px-3 font-heading text-base">Горячий вакуум</th>
                <th className="text-center py-4 px-3 font-heading text-base">Вакуумный массаж</th>
                <th className="text-center py-4 px-3 font-heading text-base">RF-лифтинг тела</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <motion.tr key={row.feature} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                  className="border-b border-border/50 last:border-0">
                  <td className="py-3 px-3 font-medium text-foreground/70">{row.feature}</td>
                  <td className="py-3 px-3 text-center">{row.hot}</td>
                  <td className="py-3 px-3 text-center">{row.vacuum}</td>
                  <td className="py-3 px-3 text-center">{row.rf}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Results */}
    <section className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-3">Результаты наших клиентов</h2>
        <p className="text-muted-foreground text-center text-sm mb-8 max-w-xl mx-auto">
          Результат индивидуален и зависит от особенностей организма, количества процедур и соблюдения рекомендаций
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { src: result1, caption: "Коррекция фигуры — курс 10 процедур" },
            { src: result2, caption: "Антицеллюлитная программа — курс 8 процедур" },
            { src: result3, caption: "Моделирование силуэта — курс 10 процедур" },
            { src: result4, caption: "Уменьшение объёмов — курс 5 процедур" },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="rounded-xl border border-border overflow-hidden bg-card">
              <img src={item.src} alt={item.caption} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <p className="text-sm text-muted-foreground text-center py-3 px-4">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="py-12 md:py-16 bg-cream">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trust.map((t, i) => (
            <motion.div key={t.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                {t.icon}
              </div>
              <h3 className="font-heading text-lg mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-12 md:py-16">
      <div className="container-wide px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как проходит процедура</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center">
              <div className="w-12 h-12 rounded-full gold-gradient text-primary-foreground flex items-center justify-center text-lg font-heading mx-auto mb-4">{s.num}</div>
              <h3 className="font-heading text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-12 md:py-16 bg-card">
      <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Частые вопросы</h2>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <motion.details key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="group bg-background rounded-xl border border-border p-5 cursor-pointer">
              <summary className="font-heading text-lg list-none flex items-center justify-between gap-4">
                {item.q}
                <ChevronRight size={18} className="text-primary flex-shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <p className="text-muted-foreground mt-3 leading-relaxed">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>

    <ConsultationCapture />
    <CTASection title="Готовы начать коррекцию фигуры?" subtitle="Запишитесь на консультацию — подберём программу под вашу задачу" />
  </Layout>
);

export default KorrekciyaFigurySpb;
