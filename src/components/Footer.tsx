import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-4 py-12"
      >     <img src="/akeel lights.jpeg" alt="" className=" p-1 w-15" />
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
       
          <div>
            <h3 className="text-lg font-bold text-slate-900">Akeel Lights</h3>
            <p className="mt-3 text-sm text-slate-600">
              Premium lighting & decoration services for weddings, festivals,
              houses/buildings and large-scale events.
            </p>

            <a
              href="https://wa.me/919945529167"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold text-slate-900">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-slate-900">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-slate-900">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-slate-900">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-slate-900">Gallery</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-slate-900">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-slate-900">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-slate-900">Our Services</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Wedding Lighting & Decoration</li>
              <li>Stage / Mandap Setup</li>
              <li>House & Building Elevation Lighting</li>
              <li>Festival & Community Events</li>
              <li>Large-Scale Events + Backup</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="text-slate-500">Phone:</span> +91 99455 29167
              </li>
              <li>
                <span className="text-slate-500">WhatsApp:</span> +91 99455 29167
              </li>
              <li>
                <span className="text-slate-500">Location:</span> Vijayapura, Karnataka
              </li>
            </ul>

            {/* Social (optional) */}
            <div className="mt-4 flex gap-3 text-sm">
              <a
                href="#"
                className="rounded-full border border-slate-200 px-3 py-1 hover:bg-slate-50"
              >
                Instagram
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-200 px-3 py-1 hover:bg-slate-50"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Akeel Lights • Vijayapura (Bijapur)
          </p>
          <p>
            Designed & Developed with ❤️ by <a href="https://aishi-technologies.vercel.app"><span  className="text-amber-500"> AISHI Technologies</span></a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
  