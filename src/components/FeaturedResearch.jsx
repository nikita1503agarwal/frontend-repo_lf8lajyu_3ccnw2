import { ArrowRight } from 'lucide-react'

const items = [
  {
    title: 'The Economics of AI Adoption',
    summary: 'A data‑first look at productivity gains, displacement risks, and policy responses across sectors.',
  },
  {
    title: 'Water Stress and Global Supply Chains',
    summary: 'Modeling regional scarcity, commodity volatility, and long‑term resilience strategies for firms.',
  },
  {
    title: 'Election Integrity: Signal vs Noise',
    summary: 'A methods‑based review separating robust evidence from viral speculation in public discourse.',
  },
  {
    title: 'Inflation Aftershocks 2025',
    summary: 'Tracking the stickiness of services inflation and the policy trade‑offs shaping the next cycle.',
  }
]

export default function FeaturedResearch() {
  return (
    <section id="featured-research" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Featured Research</h2>
            <p className="mt-2 text-slate-600">Recent work from our analysts and research contributors.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group flex flex-col rounded-xl border border-slate-200 bg-white/60 p-6 backdrop-blur transition hover:shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 line-clamp-3">{item.summary}</p>
              <div className="mt-6">
                <a href="#" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
                  Read Full Article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
