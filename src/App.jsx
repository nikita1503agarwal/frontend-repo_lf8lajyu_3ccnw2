import Hero from './components/Hero'
import ValuePillars from './components/ValuePillars'
import Trust from './components/Trust'
import FeaturedResearch from './components/FeaturedResearch'
import NewsletterCTA from './components/NewsletterCTA'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Top bar / simple brand */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-blue-700" />
            <span className="text-sm font-semibold tracking-wide">The Polymath Society</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#featured-research" className="hover:text-slate-900">Research</a>
            <a href="#newsletter-cta" className="hover:text-slate-900">Newsletter</a>
            <a href="/test" className="hover:text-slate-900">System</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ValuePillars />
        <Trust />
        <FeaturedResearch />
        <NewsletterCTA />
        <SocialProof />
      </main>

      <Footer />
    </div>
  )
}

export default App
