import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import specialistPhoto from "@/assets/specialist-arina.png";
import certificateImg from "@/assets/certificate.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const approach = [
  "массаж и подготовка тканей",
  "аппаратные технологии",
  "восстановление и уход",
];

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <img src={specialistPhoto} alt="Ариана Ханова — специалист АРТ Косметология" className="rounded-lg shadow-lg w-full max-w-lg mx-auto" width={800} height={1000} />
          </motion.div>
          <motion.div initial="hidden" animate="visible" custom={1} variants={fadeUp}>
            <h1 className="font-heading text-4xl md:text-5xl mb-6">Ариана Ханова</h1>
            <p className="text-lg text-muted-foreground mb-2 font-medium">
              Мастер приватной студии аппаратной эстетики и коррекции фигуры
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Работает с лицом и телом в камерном формате: омоложение, восстановление, дренаж, тонус, эстетика. Один мастер — один клиент.
            </p>

            <h3 className="font-heading text-xl mb-3">Комплексный подход</h3>
            <ul className="space-y-2 mb-6">
              {approach.map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground/80">
                  <Check size={16} className="text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Подбирает процедуры индивидуально под задачу клиента: лифтинг, коррекция фигуры, снятие отёков, улучшение качества кожи и общего состояния.
            </p>

            <div className="bg-gold-light/50 rounded-lg p-5 border border-primary/20">
              <p className="text-foreground font-medium text-sm leading-relaxed">
                📌 Приватная студия: не потоковый приём, а персональная работа с каждым клиентом. Полная конфиденциальность.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <h2 className="font-heading text-3xl text-center mb-10">Сертификаты и дипломы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <img key={n} src={certificateImg} alt={`Сертификат ${n}`} className="rounded-lg shadow-md hover-lift" loading="lazy" width={800} height={600} />
            ))}
          </div>
        </div>
      </div>
    </section>
    <CTASection />
  </Layout>
);

export default About;
