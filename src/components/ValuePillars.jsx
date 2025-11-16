import { BarChart3, FileText, LineChart } from 'lucide-react'

const pillars = [
  {
    icon: FileText,
    title: 'Research‑Backed News',
    desc: 'Factual reporting distilled with clarity.'
  },
  {
    icon: BarChart3,
    title: 'Deep Analytical Explainers',
    desc: 'Long‑form breakdowns of complex issues.'
  },
  {
    icon: LineChart,
    title: 'Data‑Driven Insights',
    desc: 'Charts, visualizations, and evidence‑led commentary.'
  }
]

export default function ValuePillars() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white/60 p-6 backdrop-blur transition hover:shadow-sm">
              <Icon className="size-6 text-blue-700" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
