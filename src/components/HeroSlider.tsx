import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  src: string;
  title?: string;
  subtitle?: string;
};

export default function HeroSlider({
  slides,
  interval = 5000,
  className = "",
}: {
  slides: Slide[];
  interval?: number;
  className?: string;
}) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const [i, setI] = useState(0);

  const next = () => setI((p) => (p + 1) % safeSlides.length);
  const prev = () => setI((p) => (p - 1 + safeSlides.length) % safeSlides.length);

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeSlides.length, interval]);

  if (safeSlides.length === 0) return null;

  const active = safeSlides[i];

  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={active.src}
          src={active.src}
          alt={active.title || "Slide"}
          className="h-[520px] w-full object-cover md:h-[560px]"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          loading="lazy"
        />
      </AnimatePresence>

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10" />

      {/* Center text (optional) */}
      {(active.title || active.subtitle) && (
        <div className="absolute inset-x-0 bottom-10 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl"
          >
            {active.subtitle && (
              <p className="text-xs md:text-sm text-white/80">
                {active.subtitle}
              </p>
            )}
            {active.title && (
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                {active.title}
              </h2>
            )}
          </motion.div>
        </div>
      )}

      {/* Arrows */}
      {safeSlides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {safeSlides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {safeSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2.5 w-2.5 rounded-full border border-white/30 ${
                idx === i ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
