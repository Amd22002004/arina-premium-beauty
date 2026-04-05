import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import dorfVideo from "@/assets/dorf-process-video.mp4";
import manDorfProcess from "@/assets/man-dorf-process.jpeg";

const DorfVideoBlock = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const fullVideoRef = useRef<HTMLVideoElement>(null);

  const openModal = useCallback(() => {
    setModalOpen(true);
    setTimeout(() => fullVideoRef.current?.play(), 100);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    fullVideoRef.current?.pause();
  }, []);

  return (
    <>
      <section className="py-10 md:py-14 bg-card">
        <div className="container-wide px-4 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-3xl text-foreground mb-2"
          >
            Смотрите, как проходит аппаратный протокол
          </motion.h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8">
            Короткий ролик: подготовка → процедура → результат
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={openModal}
          >
            <video
              className="w-full aspect-video object-cover"
              src={dorfVideo}
              poster={manDorfProcess}
              muted
              playsInline
              preload="metadata"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play size={32} className="text-primary-foreground ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
            aria-label="Закрыть"
          >
            <X size={22} />
          </button>
          <div
            className="w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={fullVideoRef}
              className="w-full aspect-video bg-foreground"
              src={dorfVideo}
              controls
              playsInline
              preload="auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DorfVideoBlock;
