import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToResearch = () => {
    const el = document.getElementById('featured-research')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToCTA = () => {
    const el = document.getElementById('newsletter-cta')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background graphic */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <svg className="absolute -top-24 left-1/2 -translate-x-1/2 w-[140%] opacity-40" viewBox="0 0 1200 400" fill="none">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <path key={i} d={`M0 ${50 + i * 40} C 300 ${20 + i * 30}, 900 ${120 + i * 20}, 1200 ${60 + i * 35}`} stroke="url(#grad)" strokeWidth="1" />
          ))}
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(2,6,23,0.06),transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur">
            Credible • Intelligent • Data‑centric
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Where Research Meets Real‑World Insight
          </h1>
          <p className="mt-5 max-w-2xl text-slate-600 text-lg leading-relaxed">
            Evidence‑based news, deep analysis, and intelligent perspectives—made for thinkers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={scrollToResearch} className="group inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white shadow-sm ring-1 ring-blue-700/30 transition hover:bg-blue-700">
              Read Latest Research
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button onClick={scrollToCTA} className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-slate-800 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">
              Join Our Newsletter
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
