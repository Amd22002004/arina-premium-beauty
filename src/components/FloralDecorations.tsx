import { motion } from "framer-motion";

/* ═══ Reusable floral/nature SVG decorations ═══ */

export const Petal = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 60 80" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 0C30 0 60 30 60 55C60 68.8 46.6 80 30 80C13.4 80 0 68.8 0 55C0 30 30 0 30 0Z" fill="currentColor" opacity="0.12" />
  </svg>
);

export const FloralCorner = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg viewBox="0 0 200 200" className={className} style={flip ? { transform: "scaleX(-1)" } : {}} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="8" fill="hsl(var(--rose))" opacity="0.15" />
    <circle cx="60" cy="15" r="5" fill="hsl(var(--primary))" opacity="0.12" />
    <circle cx="15" cy="60" r="6" fill="hsl(var(--peach))" opacity="0.18" />
    <path d="M80 5C80 5 95 20 95 35C95 43 88 50 80 50C72 50 65 43 65 35C65 20 80 5 80 5Z" fill="hsl(var(--primary))" opacity="0.08" />
    <path d="M5 80C5 80 20 95 35 95C43 95 50 88 50 80C50 72 43 65 35 65C20 65 5 80 5 80Z" fill="hsl(var(--rose))" opacity="0.08" />
    <circle cx="45" cy="45" r="3" fill="hsl(var(--berry))" opacity="0.2" />
    <circle cx="100" cy="8" r="4" fill="hsl(var(--rose-light))" opacity="0.25" />
    <circle cx="8" cy="100" r="4" fill="hsl(var(--peach))" opacity="0.2" />
  </svg>
);

/* ═══ Animated Butterfly with wing-flap ═══ */
export const AnimatedButterfly = ({
  className = "",
  size = 48,
  delay = 0,
  color1 = "hsl(var(--primary))",
  color2 = "hsl(var(--rose))",
}: {
  className?: string;
  size?: number;
  delay?: number;
  color1?: string;
  color2?: string;
}) => (
  <motion.div
    className={`pointer-events-none ${className}`}
    style={{ width: size, height: size * 0.75 }}
    animate={{
      y: [0, -6, 2, -4, 0],
      x: [0, 3, -2, 4, 0],
      rotate: [0, 2, -1, 1, 0],
    }}
    transition={{ duration: 10, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left wing */}
      <motion.path
        d="M40 30C25 10 5 5 5 20C5 32 20 38 40 30Z"
        fill={color1}
        opacity="0.2"
        animate={{ d: [
          "M40 30C25 10 5 5 5 20C5 32 20 38 40 30Z",
          "M40 30C28 14 10 8 8 22C8 33 22 37 40 30Z",
          "M40 30C25 10 5 5 5 20C5 32 20 38 40 30Z",
        ]}}
        transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Right wing */}
      <motion.path
        d="M40 30C55 10 75 5 75 20C75 32 60 38 40 30Z"
        fill={color2}
        opacity="0.2"
        animate={{ d: [
          "M40 30C55 10 75 5 75 20C75 32 60 38 40 30Z",
          "M40 30C52 14 70 8 72 22C72 33 58 37 40 30Z",
          "M40 30C55 10 75 5 75 20C75 32 60 38 40 30Z",
        ]}}
        transition={{ duration: 3, delay: delay + 0.15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Lower left wing */}
      <motion.path
        d="M40 30C30 40 15 50 20 55C28 55 35 45 40 30Z"
        fill={color1}
        opacity="0.12"
        animate={{ d: [
          "M40 30C30 40 15 50 20 55C28 55 35 45 40 30Z",
          "M40 30C32 42 18 48 22 54C29 54 36 44 40 30Z",
          "M40 30C30 40 15 50 20 55C28 55 35 45 40 30Z",
        ]}}
        transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Lower right wing */}
      <motion.path
        d="M40 30C50 40 65 50 60 55C52 55 45 45 40 30Z"
        fill={color2}
        opacity="0.12"
        animate={{ d: [
          "M40 30C50 40 65 50 60 55C52 55 45 45 40 30Z",
          "M40 30C48 42 62 48 58 54C51 54 44 44 40 30Z",
          "M40 30C50 40 65 50 60 55C52 55 45 45 40 30Z",
        ]}}
        transition={{ duration: 3, delay: delay + 0.15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Body */}
      <line x1="40" y1="15" x2="40" y2="55" stroke="hsl(var(--berry))" strokeWidth="1.2" opacity="0.25" />
      {/* Antennae */}
      <path d="M40 18C38 12 35 8 33 6" stroke="hsl(var(--berry))" strokeWidth="0.7" opacity="0.2" fill="none" />
      <path d="M40 18C42 12 45 8 47 6" stroke="hsl(var(--berry))" strokeWidth="0.7" opacity="0.2" fill="none" />
      <circle cx="33" cy="6" r="1.2" fill="hsl(var(--berry))" opacity="0.25" />
      <circle cx="47" cy="6" r="1.2" fill="hsl(var(--berry))" opacity="0.25" />
    </svg>
  </motion.div>
);

/* ═══ Static Butterfly (legacy) ═══ */
export const Butterfly = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 30C25 10 5 5 5 20C5 32 20 38 40 30Z" fill="hsl(var(--primary))" opacity="0.15" />
    <path d="M40 30C55 10 75 5 75 20C75 32 60 38 40 30Z" fill="hsl(var(--rose))" opacity="0.15" />
    <path d="M40 30C30 40 15 50 20 55C28 55 35 45 40 30Z" fill="hsl(var(--primary))" opacity="0.1" />
    <path d="M40 30C50 40 65 50 60 55C52 55 45 45 40 30Z" fill="hsl(var(--rose))" opacity="0.1" />
    <line x1="40" y1="15" x2="40" y2="55" stroke="hsl(var(--berry))" strokeWidth="1" opacity="0.2" />
  </svg>
);

export const FloatingPetals = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {[
      { x: "8%", y: "12%", size: "40px", delay: 0, rotate: 25, color: "text-primary" },
      { x: "85%", y: "8%", size: "35px", delay: 1.5, rotate: -15, color: "text-rose" },
      { x: "92%", y: "45%", size: "30px", delay: 0.8, rotate: 45, color: "text-peach" },
      { x: "5%", y: "70%", size: "28px", delay: 2, rotate: -30, color: "text-primary" },
      { x: "75%", y: "75%", size: "32px", delay: 1.2, rotate: 60, color: "text-rose" },
      { x: "50%", y: "5%", size: "25px", delay: 0.5, rotate: 10, color: "text-primary/60" },
      { x: "20%", y: "90%", size: "22px", delay: 2.5, rotate: -50, color: "text-peach" },
    ].map((p, i) => (
      <motion.div
        key={i}
        className={`absolute hidden md:block`}
        style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
        initial={{ opacity: 0, rotate: p.rotate, scale: 0.5 }}
        animate={{
          opacity: [0, 0.7, 0.5, 0.7, 0],
          rotate: [p.rotate, p.rotate + 15, p.rotate - 10, p.rotate + 5, p.rotate],
          y: [0, -8, 4, -6, 0],
          scale: [0.5, 1, 0.9, 1, 0.5],
        }}
        transition={{ duration: 8, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <Petal className={`w-full h-full ${p.color}`} />
      </motion.div>
    ))}
  </div>
);

/* ═══ Scattered butterflies for open sections — hidden on mobile ═══ */
export const ScatteredButterflies = ({ count = 3 }: { count?: number }) => {
  const positions = [
    { x: "88%", y: "15%", size: 40, delay: 0, rot: -10 },
    { x: "6%", y: "60%", size: 34, delay: 2.5, rot: 15 },
    { x: "78%", y: "72%", size: 30, delay: 1.2, rot: -20 },
    { x: "15%", y: "20%", size: 28, delay: 3.5, rot: 8 },
    { x: "92%", y: "50%", size: 36, delay: 0.8, rot: -5 },
  ].slice(0, count);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true">
      {positions.map((p, i) => (
        <div key={i} className="absolute" style={{ left: p.x, top: p.y }}>
          <AnimatedButterfly size={p.size} delay={p.delay} />
        </div>
      ))}
    </div>
  );
};

export const FloralDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 py-2 ${className}`} aria-hidden="true">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/20" />
    <svg viewBox="0 0 30 30" className="w-5 h-5 text-primary/30" fill="currentColor">
      <circle cx="15" cy="15" r="3" />
      <path d="M15 5C15 5 20 10 20 15C20 17.8 17.8 20 15 20C12.2 20 10 17.8 10 15C10 10 15 5 15 5Z" opacity="0.4" />
      <path d="M15 5C15 5 10 10 10 15C10 17.8 12.2 20 15 20C17.8 20 20 17.8 20 15C20 10 15 5 15 5Z" opacity="0.3" transform="rotate(90 15 15)" />
    </svg>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/20" />
  </div>
);

export const SectionFloralAccent = ({ position = "left" }: { position?: "left" | "right" | "both" }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {(position === "left" || position === "both") && (
      <FloralCorner className="absolute -top-4 -left-4 w-32 md:w-44 opacity-60" />
    )}
    {(position === "right" || position === "both") && (
      <FloralCorner className="absolute -bottom-4 -right-4 w-32 md:w-44 opacity-60" flip />
    )}
  </div>
);
