import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const services = [
  "Wedding Lighting & Decoration",
  "Stage / Mandap Setup",
  "House & Building Elevation Lighting",
  "Festival & Community Events",
  "Large-Scale Events + Backup",
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 bg-white">
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-r from-emerald-200/30 via-sky-200/30 to-fuchsia-200/30 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-4 py-12"
      >
        {/* Top card */}
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm md:p-8">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                
                  <img
                    src="/akeel lights.jpeg"
                    alt="Akeel Lights"
                    className="  w-15  object-cover"
                  />
 
                <div className="leading-tight">
                  <p className="text-xs tracking-wide text-slate-500">AKEEL LIGHTS</p>
                  <p className="text-base font-semibold text-slate-900">
                    Lighting & Decoration
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600">
                Premium lighting & decoration services for weddings, festivals,
                houses/buildings and large-scale events.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="https://wa.me/919945529167"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 shadow-sm"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10">
                    ✆
                  </span>
                  WhatsApp Us
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-50 border border-slate-200">
                    ✉
                  </span>
                  Get Quote
                </Link>
              </div>

              {/* chips */}
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
                {["On-time setup", "Safe wiring", "Custom themes", "Backup support"].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-sm font-semibold text-slate-900">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {quickLinks.map((x) => (
                  <li key={x.to}>
                    <Link
                      to={x.to}
                      className="group inline-flex items-center gap-2 hover:text-slate-900"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-slate-900" />
                      {x.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-sm font-semibold text-slate-900">Our Services</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-semibold text-slate-900">Contact</p>

              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="mt-1 font-semibold">+91 99455 29167</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 font-semibold">Akeel Lights , <br />Shop.no:09 star Hall Complex , opp. Secab Unani Collage, Naubag Road Vijaypura, Karnataka

</p>
                </div>
              </div>

              {/* Social */}
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://www.instagram.com/sadik_phaniband"
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {year} Akeel Lights • Vijayapura (Bijapur)</p>

            <p>
              Designed & Developed with{" "}
              <span className="text-red-500">❤️</span> by{" "}
              <a
                href="https://aishi-technologies.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-slate-900 hover:underline"
              >
                <span className="bg-gradient-to-r from-emerald-600 via-sky-600 to-fuchsia-600 bg-clip-text text-transparent">
                  AISHI Technologies
                </span>
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
