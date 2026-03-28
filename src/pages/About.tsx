import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import specialistImg from "@/assets/specialist.jpg";
import certificateImg from "@/assets/certificate.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <img src={specialistImg} alt="Специалист Арина" className="rounded-lg shadow-lg w-full max-w-lg mx-auto" width={800} height={1000} />
          </motion.div>
          <motion.div initial="hidden" animate="visible" custom={1} variants={fadeUp}>
            <h1 className="font-heading text-4xl md:text-5xl mb-6">О специалисте</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Дипломированный специалист в области эстетической косметологии с многолетним практическим опытом. Работает в Санкт-Петербурге, принимает по адресу: пр-т Обуховской Обороны, 110к1.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Специализация — комплексное омоложение лица и тела. Арина сочетает ручные массажные техники (скульптурный, миофасциальный, лимфодренажный массаж) с аппаратными методиками: BBL-фотоомоложение, фракционный лазер CO₂, микротоки, LPG, кавитация, прессотерапия.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Авторский протокол работы: подготовка тканей массажем и лимфодренажем, затем аппаратная процедура, затем восстановление и персональные рекомендации. Такой подход обеспечивает максимальную эффективность и безопасность каждой процедуры.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Регулярно повышает квалификацию, проходит обучение у ведущих экспертов индустрии. Использует только сертифицированное оборудование и препараты с доказанной эффективностью.
            </p>
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
