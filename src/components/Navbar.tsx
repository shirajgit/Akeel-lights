import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blogs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
           
            <img
              src="/logo.png"
              alt="Akeel Lights"
              className="  w-15 object-cover"
            />
         
          <div className="leading-tight">
            <p className="text-xs tracking-wide text-slate-600">AKEEL LIGHTS</p>
            <p className="text-base font-semibold text-slate-900">
              Lighting & Decoration
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((x) => (
            <NavLink key={x.to} to={x.to} className="relative group">
              {({ isActive }) => (
                <>
                  <span
                    className={`text-sm font-medium transition ${
                      isActive
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {x.label}
                  </span>

                  {/* underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-400 transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919945529167"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 shadow-sm"
          >
            WhatsApp
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50"
            aria-label="Open menu"
          >
            <motion.div
              initial={false}
              animate={open ? "open" : "closed"}
              className="flex flex-col gap-1.5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="h-0.5 w-5 bg-slate-900"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="h-0.5 w-5 bg-slate-900"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="h-0.5 w-5 bg-slate-900"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setOpen(false)}
            />

            {/* sheet */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-0 z-50 bg-white border-b border-slate-200 shadow-xl"
            >
              <div className="mx-auto max-w-6xl px-4 py-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">Menu</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="h-10 w-10 rounded-xl border border-slate-200 grid place-items-center"
                  >
                    ✕
                  </button>
                </div>

                <nav className="mt-6 grid gap-3">
                  {navItems.map((x) => (
                    <NavLink
                      key={x.to}
                      to={x.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        [
                          "rounded-2xl px-4 py-3 text-sm font-semibold transition border",
                          isActive
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50",
                        ].join(" ")
                      }
                    >
                      {x.label}
                    </NavLink>
                  ))}
                </nav>

                <a
                  href="https://wa.me/919945529167"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block rounded-2xl bg-gradient-to-r from-emerald-500 via-sky-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white text-center shadow-lg"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
