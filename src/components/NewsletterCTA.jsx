import { motion } from 'framer-motion'

export default function NewsletterCTA() {
  return (
    <section id="newsletter-cta" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(1200px_600px_at_-10%_-10%,black,transparent)]">
            <svg className="absolute right-[-10%] top-[-10%] h-[160%] w-[60%]" viewBox="0 0 400 800" fill="none">
              {[...Array(18)].map((_, i) => (
                <path key={i} d={`M${i*20} 0 V800`} stroke="#e5e7eb" />
              ))}
            </svg>
          </div>
          <div className="grid items-center gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Join 10,000+ Readers Who Think Deeper</h3>
              <p className="mt-3 text-slate-600">Get weekly research briefs, exclusive insights, and intelligent commentary.</p>
            </div>
            <form className="flex w-full flex-col gap-3 sm:flex-row">
              <input type="email" required placeholder="Enter your email" className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100" />
              <button type="submit" className="rounded-md bg-blue-600 px-5 py-3 font-medium text-white shadow-sm ring-1 ring-blue-700/30 transition hover:bg-blue-700">Subscribe</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
