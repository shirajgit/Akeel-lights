import { NavLink } from "react-router-dom";

const linkBase =
  "text-sm font-medium text-slate-700 hover:text-slate-900 transition";
const active = "text-slate-900";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl border border-slate-200 bg-slate-50 grid place-items-center font-bold">
             <img src="/akeel lights.jpeg" alt="" />
          </div>
          <div className="leading-tight">
            <p className="text-xs text-slate-500">AKEEL LIGHTS</p>
            <p className="text-base font-semibold">Lighting & Decoration</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>Blogs</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>Gallery</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>Contact</NavLink>
        </nav>

        <a
          href="https://wa.me/919945529167"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
