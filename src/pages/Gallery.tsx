import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

/* -----------------------------
   Framer helpers
------------------------------*/
const itemUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* -----------------------------
   Images
------------------------------*/
type Img = {
  src: string;
  title: string;
};

const images: Img[] = [
  { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1600&q=80", title: "Outdoor Wedding Lights" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80", title: "Entrance Decoration" },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80", title: "Event Stage Lighting" },
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1600&q=80", title: "Festival Night Lighting" },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80", title: "Community Event Lights" },
  { src: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=1600&q=80", title: "Building Facade Lighting" },
  { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80", title: "Architectural Lighting" },
  { src: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1600&q=80", title: "Concert & Event Setup" },
  { src: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1600&q=80", title: "Mandap Night Lighting" },
  { src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80", title: "Decorative String Lights" },
];

/* -----------------------------
   Lightbox
------------------------------*/
function Lightbox({
  open,
  onClose,
  img,
}: {
  open: boolean;
  onClose: () => void;
  img: Img | null;
}) {
  return (
    <AnimatePresence>
      {open && img && (
        <>
          <motion.button
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close preview"
          />

          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl"
            >
              <img
                src={img.src}
                alt={img.title}
                className="max-h-[80vh] w-full object-contain bg-black"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{img.title}</p>
                  <button
                    onClick={onClose}
                    className="rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* -----------------------------
   Page
------------------------------*/
export default function Gallery() {
  const [active, setActive] = useState<Img | null>(null);

  return (
    <main className="bg-white text-slate-900">
      {/* Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Gallery • Our Work
          </p>

          <h1 className="mt-5 text-4xl font-extrabold">
            Lighting &{" "}
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Decoration Gallery
            </span>
          </h1>

          <p className="mt-3 text-slate-600 max-w-3xl">
            A glimpse of our wedding lighting, stage setups, elevation lighting and festival decorations.
          </p>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="columns-1 gap-4 md:columns-3"
        >
          {images.map((img, i) => (
            <motion.button
              key={`${img.src}-${i}`}
              variants={itemUp}
              onClick={() => setActive(img)}
              className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
             <div className="relative bg-slate-100">
               <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                   onError={(e) => {
                   e.currentTarget.src =
                  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80";
                          }}
                      className="w-full h-auto object-cover transition duration-500 hover:scale-[1.03]"
                 />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
    <p className="text-sm font-semibold text-white">{img.title}</p>
  </div>
</div>

            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Lightbox */}
      <Lightbox open={!!active} onClose={() => setActive(null)} img={active} />
    </main>
  );
}
