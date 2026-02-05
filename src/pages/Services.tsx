import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const itemUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }, // ✅
  },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
 

const services = [
  {
    title: "Wedding Lighting & Decoration",
    desc: "Mandap, stage, entrance, venue ambience, baraat route lighting.",
    includes: ["Mandap + Stage lighting", "Entrance & pathway setup", "Warm ambience lighting", "Safe wiring & neat finish"],
    tag: "Most Popular",
  },
  {
    title: "House / Building Elevation Lighting",
    desc: "Outdoor elevation lighting, terrace and compound lighting.",
    includes: ["Elevation outline lights", "Terrace / balcony lighting", "Outdoor string lights", "Festival-ready setup"],
    tag: "Premium Look",
  },
  {
    title: "Stage / Mandap Decoration",
    desc: "Backdrop themes, floral + lighting combinations, custom designs.",
    includes: ["Backdrop & theme setup", "Floral + lighting combo", "Custom color themes", "Photo-friendly design"],
    tag: "Custom Theme",
  },
  {
    title: "Festival & Community Events",
    desc: "Diwali/Eid/festival decor, society functions and public events.",
    includes: ["Community event coverage", "Decor + lighting combo", "Quick installation", "Safe cable management"],
    tag: "Festival",
  },
  {
    title: "Large-Scale Events + Backup",
    desc: "High-power lighting setups with backup arrangements.",
    includes: ["High-power lights", "Backup arrangements", "Large venue coverage", "On-site support"],
    tag: "Backup Included",
    highlight: true,
  },
] as const;

const packages = [
  {
    name: "Basic",
    price: "₹ —",
    for: "Small functions / home setups",
    points: ["Simple lighting setup", "Quick installation", "Budget friendly"],
  },
  {
    name: "Standard",
    price: "₹ —",
    for: "Weddings & medium venues",
    points: ["Stage + entrance lighting", "Better coverage", "Premium look"],
  },
  {
    name: "Premium",
    price: "₹ —",
    for: "Large events / big venues",
    points: ["Full venue lighting", "Backup included", "High-end finish"],
  },
] as const;

export default function Services() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={itemUp}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Services • Lighting & Decoration
            </motion.p>

            <motion.h1 variants={itemUp} className="mt-5 text-4xl font-extrabold leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.p variants={itemUp} className="mt-4 text-slate-600 max-w-3xl">
              Choose the service you need — we’ll plan the setup based on venue size, crowd,
              theme, and your budget. Our focus is premium look, safe wiring, and on-time execution.
            </motion.p>

            <motion.div variants={itemUp} className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
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
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">What We Offer</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Clear deliverables for each service — so customer ko exactly pata rahega kya milega.
            </p>
          </div>
          <Link
            to="/contact"
            className="hidden sm:inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50"
          >
            Book Now
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={itemUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className= "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" 
                
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

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {s.includes.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-[7px] h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    {x}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
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
      </section>

      {/* Packages */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Packages (Optional)</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Add real prices later. Packages help customers decide quickly and generate more inquiries.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {packages.map((p) => (
              <motion.div
                key={p.name}
                variants={itemUp}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{p.name}</p>
                  <p className="text-sm font-bold">{p.price}</p>
                </div>
                <p className="mt-1 text-sm text-slate-600">{p.for}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.points.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-slate-400">•</span> {x}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-full justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Enquire
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mini process strip */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-bold">How Booking Works</h3>
          <p className="mt-2 text-slate-600">
            Share details → get quote → confirm date → we handle full setup and support.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              ["1", "Details", "Date + venue + service"],
              ["2", "Quote", "Best plan in budget"],
              ["3", "Setup", "On-time installation"],
              ["4", "Support", "Backup for big events"],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">
                  {n}
                </div>
                <p className="mt-3 font-semibold">{t}</p>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Need a premium setup for your event?</h3>
              <p className="mt-2 text-slate-600">
                Tell us your date and venue location — we’ll reply with a plan and quotation.
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
          </div>
        </div>
      </section>
    </main>
  );
}
