import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import specialistPhoto from "@/assets/specialist-arina.png";
import certificate01 from "@/assets/certificate-01.jfif";
import certificate02 from "@/assets/certificate-02.jfif";
import certificate03 from "@/assets/certificate-03.jfif";
import certificate04 from "@/assets/certificate-04.jfif";
import certificate05 from "@/assets/certificate-05.jfif";
import certificate06 from "@/assets/certificate-06.jfif";
import certificate07 from "@/assets/certificate-07.jfif";
import certificate08 from "@/assets/certificate-08.jfif";
import certificate09 from "@/assets/certificate-09.jfif";
import certificate10 from "@/assets/certificate-10.jfif";
import aboutVertical01 from "@/assets/about-vertical-01.jfif";
import aboutVertical02 from "@/assets/about-vertical-02.jfif";
import aboutVertical03 from "@/assets/about-vertical-03.jfif";
import aboutVertical04 from "@/assets/about-vertical-04.jfif";
import aboutVertical05 from "@/assets/about-vertical-05.jfif";
import aboutVertical06 from "@/assets/about-vertical-06.jfif";
import aboutVertical07 from "@/assets/about-vertical-07.jfif";
import aboutVertical08 from "@/assets/about-vertical-08.jfif";
import { ScatteredButterflies, SectionFloralAccent, FloralDivider } from "@/components/FloralDecorations";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const approach = [
  "массаж и подготовка тканей",
  "аппаратные технологии",
  "восстановление и уход",
];

const certificates = [
  certificate01,
  certificate02,
  certificate03,
  certificate04,
  certificate05,
  certificate06,
  certificate07,
  certificate08,
  certificate09,
  certificate10,
];

const verticalPhotos = [
  aboutVertical01,
  aboutVertical02,
  aboutVertical03,
  aboutVertical04,
  aboutVertical05,
  aboutVertical06,
  aboutVertical07,
  aboutVertical08,
];

type CertificateScrollerProps = {
  images: string[];
  variant: "horizontal" | "vertical";
  altPrefix: string;
};

const CertificateScroller = ({ images, variant, altPrefix }: CertificateScrollerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const scrollByDirection = (direction: -1 | 1) => {
    scrollRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    event.preventDefault();
    scrollRef.current.scrollLeft += event.deltaY || event.deltaX;
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setDragStartX(event.clientX);
    setScrollStart(scrollRef.current.scrollLeft);
    scrollRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    scrollRef.current.scrollLeft = scrollStart - (event.clientX - dragStartX);
  };

  const stopDragging = () => setIsDragging(false);

  const imageClass =
    variant === "horizontal"
      ? "h-[170px] w-[260px] md:h-[220px] md:w-[340px] object-contain bg-background"
      : "h-[300px] w-[210px] md:h-[380px] md:w-[270px] object-cover";

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Прокрутить влево"
        onClick={() => scrollByDirection(-1)}
        className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/90 text-foreground shadow-md backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronLeft size={22} />
      </button>
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={stopDragging}
        className="flex cursor-grab touch-pan-x select-none gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden active:cursor-grabbing"
      >
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${altPrefix} ${index + 1}`}
            className={`${imageClass} shrink-0 rounded-xl shadow-md snap-start pointer-events-none`}
            loading="lazy"
            draggable={false}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label="Прокрутить вправо"
        onClick={() => scrollByDirection(1)}
        className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/90 text-foreground shadow-md backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
};

const About = () => (
  <Layout>
    <section className="relative section-padding bg-floral-cream overflow-hidden">
      <ScatteredButterflies count={3} />
      <SectionFloralAccent position="both" />
      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <img src={specialistPhoto} alt="Арина Ханова — специалист АРТ Косметология" className="rounded-lg shadow-lg w-full max-w-lg mx-auto" width={800} height={1000} />
          </motion.div>
          <motion.div initial="hidden" animate="visible" custom={1} variants={fadeUp}>
            <h1 className="font-heading text-4xl md:text-5xl mb-6">Арина Ханова</h1>
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
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
            {certificates.map((certificate, index) => (
              <img
                key={certificate}
                src={certificate}
                alt={`Сертификат или диплом Арины Хановой ${index + 1}`}
                className="h-[170px] w-[260px] md:h-[220px] md:w-[340px] shrink-0 rounded-xl shadow-md object-contain bg-background snap-start"
                loading="lazy"
                width={680}
                height={440}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    <CTASection />
  </Layout>
);

export default About;
