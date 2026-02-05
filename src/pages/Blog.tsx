import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const posts = [
  {
    title: "How to Choose Wedding Lighting",
    date: "Coming soon",
    desc: "A simple guide to selecting stage, mandap, entrance and venue lighting for weddings.",
    tag: "Wedding",
  },
  {
    title: "Building Elevation Lighting Ideas",
    date: "Coming soon",
    desc: "Modern elevation lighting ideas to enhance homes and commercial buildings.",
    tag: "Elevation",
  },
  {
    title: "Festival Decoration Checklist",
    date: "Coming soon",
    desc: "Important things to plan before festival and community event decoration.",
    tag: "Festival",
  },
  {
    title: "Stage & Mandap Decoration Tips",
    date: "Coming soon",
    desc: "How to choose themes, colors and lighting combinations for stages & mandaps.",
    tag: "Stage",
  },
  {
    title: "Lighting Setup for Large Events",
    date: "Coming soon",
    desc: "Planning lighting coverage, safety and backup for large-scale events.",
    tag: "Big Events",
  },
  {
    title: "Common Lighting Mistakes to Avoid",
    date: "Coming soon",
    desc: "Mistakes people make while planning lighting for weddings and functions.",
    tag: "Tips",
  },
] as const;

export default function Blog() {
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
              Blog • Lighting & Decoration
            </motion.p>

            <motion.h1
              variants={itemUp}
              className="mt-5 text-4xl font-extrabold leading-tight"
            >
              Lighting Ideas &{" "}
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Event Guides
              </span>
            </motion.h1>

            <motion.p
              variants={itemUp}
              className="mt-4 text-slate-600 max-w-3xl"
            >
              Helpful articles, ideas and checklists related to wedding lighting,
              stage decoration, elevation lighting and large-scale event planning.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Latest Posts</h2>
            <p className="mt-2 text-slate-600">
              Articles will be published soon. Stay tuned!
            </p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {posts.map((p) => (
            <motion.article
              key={p.title}
              variants={itemUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                  {p.tag}
                </span>
                <span className="text-xs text-slate-500">{p.date}</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 flex-1">{p.desc}</p>

              <div className="mt-5">
                <button
                  disabled
                  className="text-sm font-semibold text-slate-400 cursor-not-allowed"
                >
                  Read more (coming soon)
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Need lighting or decoration for an event?</h3>
              <p className="mt-2 text-slate-600">
                Blogs are coming soon — till then, check our services or contact us directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
