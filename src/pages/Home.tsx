import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSlider from "../components/HeroSlider";
import type { Variants } from "framer-motion";

const itemUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }, // ✅
  },
};


const stats = [
  { label: "Events Covered", value: "250+" },
  { label: "On-Time Setup", value: "100%" },
  { label: "Cities Served", value: "10+" },
  { label: "Big-Event Backup", value: "Yes" },
] as const;

const featuredServices = [
  {
    title: "Wedding Lighting & Decoration",
    desc: "Mandap, stage, entrance, baraat route, venue ambience — premium lighting with clean wiring.",
    tag: "Most Popular",
  },
  {
    title: "House / Building Elevation Lighting",
    desc: "Elevation lights for homes & buildings. Perfect for festivals, functions and special occasions.",
    tag: "Premium Look",
  },
  {
    title: "Stage / Mandap Decoration",
    desc: "Backdrops, floral + lighting combos, custom themes as per venue and budget.",
    tag: "Custom Themes",
  },
  {
    title: "Festival & Large-Scale Events + Backup",
    desc: "High-power lighting setup with backup arrangements for uninterrupted big events.",
    tag: "Backup Included",
    highlight: true,
  },
] as const;

const testimonials = [
  {
    name: "Customer – Vijayapura",
    text: "Lighting was amazing and the team finished setup on time. Very professional work.",
  },
  {
    name: "Wedding Client",
    text: "Mandap + entrance decoration looked premium. Guests loved the vibe!",
  },
  {
    name: "Festival Organizer",
    text: "Big event was smooth because of backup arrangements. Highly recommended.",
  },
] as const;

const faqs = [
  {
    q: "Do you provide backup for big events?",
    a: "Yes. We plan backup arrangements based on event size to ensure uninterrupted lighting.",
  },
  {
    q: "Do you take custom theme requests?",
    a: "Yes. Share your reference photos and venue details — we’ll match your theme and budget.",
  },
  {
    q: "How early should we book?",
    a: "For wedding seasons, book early. For normal events, 7–15 days is usually enough.",
  },
] as const;


const heroSlides = [
  {
    src: "/akeel-lights04.jpeg",
    subtitle: "Wedding Lighting • Stage • Mandap",
    title: "Premium Wedding Lighting & Decoration",
  },
  {
    src: "/akeel-hero.jpeg",
    subtitle: "Big Events • Backup Included",
    title: "Large Scale Event Setup (Backup Ready)",
  },
  {
    src: "/akeel-lights05.jpg",
    subtitle: "House / Building Elevation",
    title: "Elevation Lighting for Homes & Buildings",
  },
] as const;


// ✅ Replace with online URLs if you want
const gallery = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1524777313293-86d2ab467344?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1599751449455-a09c9e77bbf2?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
] as const;

/* -----------------------------
   Framer helpers
------------------------------*/
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

 

 
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
    
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
   
  <HeroSlider
    slides={heroSlides as never}
    interval={4500}
    className="border border-slate-200 bg-white p-2 shadow-sm"
  />
     <div className="mx-auto max-w-6xl px-4  pb-12">
          <div className="relative">

  <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-r from-emerald-200/40 via-sky-200/40 to-fuchsia-200/40 blur-2xl" />
</div>

          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Left */}
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.p
                variants={itemUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Premium Setup • Safe Wiring • Backup for Big Events
              </motion.p>

              <motion.h1
                variants={itemUp}
                className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight"
              >
                Premium{" "}
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Lighting & Decoration
                </span>{" "}
                for Weddings, Festivals & Big Events
              </motion.h1>

              <motion.p variants={itemUp} className="mt-4 text-slate-600 max-w-xl">
                Akeel Lights delivers wedding lighting, stage/mandap decoration,
                house/building elevation lights and large-scale event setups —
                with reliable execution and backup support.
              </motion.p>

              <motion.div variants={itemUp} className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919945529167"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Book on WhatsApp
                </a>

                <Link
                  to="/contact"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Get a Quote
                </Link>

                <Link
                  to="/gallery"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  View Gallery
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={container}
                className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    variants={itemUp}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <p className="text-xl font-bold">{s.value}</p>
                    <p className="mt-1 text-xs text-slate-600">{s.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemUp} className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600">
                {["On-time setup", "Custom themes", "Premium lights", "Professional team"].map((x) => (
                  <span key={x} className="rounded-full border border-slate-200 bg-white px-3 py-1">
                    {x}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right images */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-12">
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                      <img
                        src={gallery[0]}
                        alt="Akeel Lights"
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {[gallery[1], gallery[2], gallery[3]].map((src) => (
                    <div key={src} className="col-span-4">
                      <div className="aspect-square overflow-hidden rounded-2xl bg-slate-100">
                        <img
                          src={src}
                          alt="Work"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-r from-emerald-200/40 via-sky-200/40 to-fuchsia-200/40 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <Section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-bold">How We Work</h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              Simple, fast and professional process — so your event looks premium and stays stress-free.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4"
          >
            {[
              ["1", "Share Details", "Send event date, venue location, and reference photos."],
              ["2", "Get Quote", "We suggest setup based on venue size and your budget."],
              ["3", "Setup & Execution", "On-time installation with safe wiring and premium lights."],
              ["4", "Support", "Backup planning for big events to avoid interruptions."],
            ].map(([n, t, d]) => (
              <motion.div
                key={n}
                variants={itemUp}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">
                    {n}
                  </div>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="mt-1 text-sm text-slate-600">{d}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* FEATURED SERVICES */}
      <Section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Featured Services</h2>
              <p className="mt-2 text-slate-600">
                Wedding lighting, elevation lighting, stage/mandap setups and festival decorations.
              </p>
            </div>
            <Link
              to="/services"
              className="hidden sm:inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              View All Services
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {featuredServices.map((s) => (
              <motion.div
                key={s.title}
                variants={itemUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className= 
                  "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" 
                  
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-500">{s.tag}</p>
                    <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl border border-slate-200 bg-slate-50 grid place-items-center">
                    ✨
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <Link
                    to="/contact"
                    className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Get Quote
                  </Link>
                  <Link
                    to="/gallery"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                  >
                    See Photos
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* GALLERY PREVIEW */}
      <Section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Recent Work</h2>
            <p className="mt-2 text-slate-600">A glimpse of our latest lighting & decoration setups.</p>
          </div>
          <Link
            to="/gallery"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50"
          >
            Open Full Gallery
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 columns-2 gap-4 md:columns-4"
        >
          {gallery.map((src) => (
            <motion.div
              key={src}
              variants={itemUp}
              className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] bg-slate-100">
                <img
                  src={src}
                  alt="Akeel Lights Work"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">What Customers Say</h2>
          <p className="mt-2 text-slate-600">Real feedback from clients.</p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={itemUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-slate-700">“{t.text}”</p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <p className="mt-2 text-slate-600">Quick answers to common questions.</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {faqs.map((f) => (
            <motion.div
              key={f.q}
              variants={itemUp}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="font-semibold">{f.q}</p>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FINAL CTA */}
      <Section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <h3 className="text-xl font-bold">Ready to book your event setup?</h3>
              <p className="mt-2 text-slate-600">
                Share your date & venue location — we’ll reply with a quote and setup plan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/919945529167"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                WhatsApp Now
              </a>
              <Link
                to="/contact"
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Contact Page
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
