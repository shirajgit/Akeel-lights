import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
 


export default function Contact() {
  const sendWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const phone = fd.get("phone");
    const date = fd.get("date");
    const msg = fd.get("message");

    const text = encodeURIComponent(
      `Hello Akeel Lights 👋
Name: ${name}
Phone: ${phone}
Event Date: ${date}
Requirements: ${msg}`
    );
    
    window.open(`https://wa.me/919945529167?text=${text}`, "_blank");
  };

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
              Contact • Get a Quote
            </motion.p>

            <motion.h1 variants={itemUp} className="mt-5 text-4xl font-extrabold leading-tight">
              Let’s Plan Your{" "}
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Event Lighting
              </span>
            </motion.h1>

            <motion.p variants={itemUp} className="mt-4 text-slate-600 max-w-3xl">
              Share your event date, venue location and requirements — we’ll reply with a setup plan
              and quotation. For quick response, WhatsApp works best.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={sendWhatsApp}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">Send Us Details</h3>
            <p className="mt-1 text-sm text-slate-600">
              This will open WhatsApp with your message auto-filled.
            </p>

            <div className="mt-6 grid gap-4">
              <motion.input
                variants={itemUp}
                name="name"
                required
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/10"
                placeholder="Your Name"
              />
              <motion.input
                variants={itemUp}
                name="phone"
                required
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/10"
                placeholder="Phone / WhatsApp Number"
              />
              <motion.input
                variants={itemUp}
                name="date"
                type="date"
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/10"
              />
              <motion.textarea
                variants={itemUp}
                name="message"
                rows={5}
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/10"
                placeholder="Venue location, service needed, budget (optional)"
              />
              <motion.button
                variants={itemUp}
                type="submit"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Send on WhatsApp
              </motion.button>
            </div>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <motion.h3 variants={itemUp} className="text-lg font-semibold">
              Direct Contact
            </motion.h3>

            <motion.div variants={itemUp} className="mt-4 space-y-2 text-sm text-slate-700">
              <p>
                <span className="text-slate-500">Phone:</span> +91 99455 29167
              </p>
              <p>
                <span className="text-slate-500">WhatsApp:</span> +91 99455 29167
              </p>
              <p>
                <span className="text-slate-500">Address:</span> Vijayapura, Karnataka
              </p>
            </motion.div>

            <motion.div
              variants={itemUp}
              className="mt-6 overflow-hidden rounded-2xl border border-slate-200"
            >
              {/* Replace iframe src with real Google Maps embed */}
              <div className="h-64 grid place-items-center bg-slate-50 text-sm text-slate-500">
                Add Google Map Embed Here
              </div>
            </motion.div>

            <motion.div variants={itemUp} className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold">Quick Tip</p>
              <p className="mt-1 text-sm text-slate-600">
                For wedding season bookings, contact us early to block your date.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
