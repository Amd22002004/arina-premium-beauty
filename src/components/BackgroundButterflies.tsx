import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const BUTTERFLIES = [
  { left: "5%", top: "8%", size: 180, delay: 0, duration: 25 },
  { left: "78%", top: "5%", size: 160, delay: 3, duration: 30 },
  { left: "60%", top: "30%", size: 140, delay: 6, duration: 28 },
  { left: "15%", top: "45%", size: 120, delay: 2, duration: 32 },
  { left: "85%", top: "55%", size: 170, delay: 8, duration: 26 },
  { left: "40%", top: "70%", size: 130, delay: 4, duration: 35 },
  { left: "10%", top: "80%", size: 150, delay: 7, duration: 22 },
  { left: "70%", top: "85%", size: 110, delay: 1, duration: 30 },
];

const BackgroundButterflies = () => (
  <div
    className="fixed inset-0 pointer-events-none overflow-hidden"
    style={{ zIndex: 0 }}
    aria-hidden="true"
  >
    {BUTTERFLIES.map((b, i) => (
      <div
        key={i}
        className="absolute animate-butterfly-float"
        style={{
          left: b.left,
          top: b.top,
          width: b.size,
          height: b.size,
          opacity: 0.13,
          animationDuration: `${b.duration}s`,
          animationDelay: `${b.delay}s`,
        }}
      >
        <DotLottieReact
          src="https://lottie.host/29490ed4-9444-4f41-b169-9b41ca4c804f/E0tdvhOFj8.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    ))}
  </div>
);

export default BackgroundButterflies;
