import { Linkedin, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} The Polymath Society</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">About</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <div className="ml-2 flex items-center gap-3">
              <a href="#" aria-label="X" className="text-slate-500 hover:text-slate-900"><Twitter className="size-4" /></a>
              <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-slate-900"><Linkedin className="size-4" /></a>
              <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-slate-900"><Instagram className="size-4" /></a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}
