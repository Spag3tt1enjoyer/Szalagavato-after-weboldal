import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { event, nav } from '../data/eventData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-abyss/80 backdrop-blur border-b border-kelp/60">
      <nav aria-label="Főmenü" className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
        <a href="#fooldal" className="font-display text-2xl text-glow glitch tracking-wider" aria-label={`${event.name} – főoldal`}>{event.name}</a>
        <ul className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <li key={n.href}><a href={n.href} className="font-display tracking-wider text-lg text-slate-300 hover:text-glow transition">{n.label}</a></li>
          ))}
        </ul>
        <a href="#jegyek" className="hidden md:block px-5 py-2 bg-medusa text-abyss font-display tracking-wide hover:shadow-[0_0_24px_#ff3ea5] transition">JEGYFOGLALÁS</a>
        <button className="md:hidden p-3 -mr-3 text-glow" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobil-menu" aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      <div id="mobil-menu" className={`md:hidden grid transition-all duration-500 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <ul className="overflow-hidden bg-abyss/95">
          {nav.map((n) => (
            <li key={n.href}><a tabIndex={open ? 0 : -1} href={n.href} onClick={() => setOpen(false)} className="block px-6 py-4 font-display text-3xl text-slate-200 border-t border-kelp/50 active:text-glow">{n.label}</a></li>
          ))}
        </ul>
      </div>
    </header>
  )
}
