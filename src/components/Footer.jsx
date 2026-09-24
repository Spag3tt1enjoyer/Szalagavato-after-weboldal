import { Instagram, Facebook } from 'lucide-react'
import { event, contact, socials } from '../data/eventData'

export default function Footer() {
  return (
    <footer className="bg-abyss border-t border-kelp pt-12 pb-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-display text-5xl text-glow">{event.name}</p>
          <p className="mt-2 text-slate-400">© 2026 {event.name}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-slate-300">
          <li><a className="hover:text-glow py-2 inline-flex items-center gap-2" href={socials.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a></li>
          <li><a className="hover:text-glow py-2 inline-flex items-center gap-2" href={socials.facebook} target="_blank" rel="noreferrer"><Facebook size={18} /> Facebook</a></li>
          <li><a className="hover:text-glow py-2 inline-block" href={`mailto:${contact.email}`}>{contact.email}</a></li>
          <li><a id="adatkezeles" className="hover:text-glow py-2 inline-block" href="#adatkezeles">Adatkezelési tájékoztató</a></li>
          <li><a className="hover:text-glow py-2 inline-block" href="#impresszum">Impresszum</a></li>
        </ul>
      </div>
    </footer>
  )
}
