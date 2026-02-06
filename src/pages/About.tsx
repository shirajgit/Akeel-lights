import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* -----------------------------
   Framer helpers (TS safe)
------------------------------*/
const itemUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }, // ✅ TS safe
  },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const owner = {
  name: "Akeel Panibanda",
  role: "Owner • Akeel Lights",
  location: "Vijayapura (Bijapur), Karnataka",
  bio:
    "Akeel Panibanda is the founder of Akeel Lights. Based in Vijayapura, he leads the team for premium lighting & decoration setups for weddings, festivals, stage/mandap and large-scale events. The company also runs an offline shop in Vijayapura for quick booking and service support.",
  photo: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80"

};


const values = [
  {
    title: "Experience",
    desc: "Handled weddings, festivals & large venue setups with proper planning and execution.",
  },
  {
    title: "Safety First",
    desc: "Professional wiring, secure installations, and neat finishing for a clean premium look.",
  },
  {
    title: "Reliable Support",
    desc: "Backup arrangements for big events so your function stays uninterrupted.",
  },
  {
    title: "Custom Themes",
    desc: "We match your theme and budget—modern, traditional, minimal or luxury style setups.",
  },
  {
    title: "On-Time Setup",
    desc: "We plan in advance and deliver setup within timelines—no last-minute tension.",
  },
  {
    title: "Quality Materials",
    desc: "Premium lights and durable setup materials for consistent brightness and good aesthetics.",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Discuss Requirements",
    desc: "Share date, venue location, theme ideas and budget range. We suggest the best plan.",
  },
  {
    n: "02",
    title: "Design & Quote",
    desc: "We prepare the setup plan and share quotation based on venue size and event scale.",
  },
  {
    n: "03",
    title: "Installation",
    desc: "Team reaches on time and installs lighting + decor safely with clean wiring.",
  },
  {
    n: "04",
    title: "Event Support",
    desc: "Backup planning for big events and smooth dismantle after completion.",
  },
] as const;

const stats = [
  { label: "Years of Experience", value: "20+ " },
  { label: "Events Completed", value: "250+ " },
  { label: "Big-Event Backup", value: "Available" },
  { label: "Service Area", value: "Vijayapura + Nearby" },
] as const;

export default function About() {
  return (
    <main className="bg-white text-slate-900">
      {/* Top hero */}
      <section className="relative border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-10 md:grid-cols-2 items-center"
          >
            {/* Left */}
            <div>
              <motion.p
                variants={itemUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                About Akeel Lights
              </motion.p>

              <motion.h1
                variants={itemUp}
                className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight"
              >
                Trusted Lighting & Decoration Team in{" "}
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Vijayapura
                </span>
              </motion.h1>

              <motion.p variants={itemUp} className="mt-4 text-slate-600 max-w-xl">
                Akeel Lights delivers premium lighting and decoration setups for weddings, festivals,
                houses/buildings, and large-scale events. We focus on safety, clean wiring, and on-time execution
                — with backup arrangements for big events.
              </motion.p>

              <motion.div variants={itemUp} className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Contact Us
                </Link>

                <Link
                  to="/gallery"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  View Our Work
                </Link>
              </motion.div>

              <motion.div variants={itemUp} className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600">
                {["Premium look", "Safe wiring", "Custom themes", "Backup support"].map((x) => (
                  <span key={x} className="rounded-full border border-slate-200 bg-white px-3 py-1">
                    {x}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Stats card */}
            <motion.div variants={itemUp} className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold">Quick Facts</h2>
                    <p className="mt-2 text-sm text-slate-600">
                      Update these numbers with real values when client confirms.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl border border-slate-200 bg-slate-50 grid place-items-center">
                    ✨
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-base font-bold">{s.value}</p>
                      <p className="mt-1 text-xs text-slate-600">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold">Our promise</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Premium look, safe wiring, and on-time setup—every time.
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-r from-emerald-200/40 via-sky-200/40 to-fuchsia-200/40 blur-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* OWNER */}
<section className="mx-auto max-w-6xl px-4 py-14">
  <div className="grid gap-8 md:grid-cols-2 items-center">
    {/* Photo */}
    <motion.div
      variants={itemUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="aspect-[4/3] bg-slate-100">
          <img
            src={owner.photo}
            alt={owner.name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-r from-emerald-200/40 via-sky-200/40 to-fuchsia-200/40 blur-2xl" />
    </motion.div>

    {/* Info */}
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.p
        variants={itemUp}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Founder / Owner
      </motion.p>

      <motion.h2 variants={itemUp} className="mt-4 text-3xl font-extrabold">
        {owner.name}
      </motion.h2>

      <motion.p variants={itemUp} className="mt-2 text-sm font-semibold text-slate-700">
        {owner.role}
      </motion.p>

      <motion.p variants={itemUp} className="mt-3 text-sm text-slate-600">
        {owner.location}
      </motion.p>

      <motion.p variants={itemUp} className="mt-4 text-slate-600">
        {owner.bio}
      </motion.p>

      {/* Quick facts */}
      <motion.div variants={itemUp} className="mt-6 grid grid-cols-2 gap-3">
        {[
          ["Based in", "Vijayapura"],
          ["Service", "Lighting & Decoration"],
          ["Offline Shop", "Available in Vijayapura"],
          ["Support", "Backup for big events"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">{k}</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{v}</p>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div variants={itemUp} className="mt-7 flex flex-wrap gap-3">
        <a
          href="https://wa.me/919945529167"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          WhatsApp Akeel
        </a>
        <Link
          to="/contact"
          className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Book a Setup
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">What Makes Us Different</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              We don’t just decorate—we plan the vibe, lighting coverage, and safety so the event looks premium.
            </p>
          </div>
          <Link
            to="/services"
            className="hidden sm:inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50"
          >
            See Services
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={itemUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Our Process</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Simple and clear steps—so you know exactly what will happen before the event day.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={itemUp}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">
                    {s.n}
                  </div>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Want a premium setup for your event?</h3>
              <p className="mt-2 text-slate-600">
                Share your date, venue location, and requirements. We’ll respond with a plan + quotation.
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
