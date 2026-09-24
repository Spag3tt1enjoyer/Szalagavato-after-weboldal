import { useMemo } from 'react'
import { Play, Pause, Ticket, ListMusic } from 'lucide-react'
import { event, venue } from '../data/eventData'
import { usePlayer } from '../context/PlayerContext'
import { btnPrimary, btnGhost } from './ui'

function Bubbles({ n = 22 }) {
  const items = useMemo(() => Array.from({ length: n }, () => ({
    left: Math.random() * 100, size: 4 + Math.random() * 16, dur: 10 + Math.random() * 16,
    delay: -Math.random() * 20, dx: (Math.random() - 0.5) * 120,
  })), [n])
  return items.map((b, i) => (
    <span key={i} className="bubble" aria-hidden="true"
      style={{ left: `${b.left}%`, width: b.size, height: b.size, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s`, '--dx': `${b.dx}px` }} />
  ))
}

export default function Hero() {
  const { playing, toggle } = usePlayer()
  return (
    <section id="fooldal" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-trench via-abyss to-abyss pt-24 pb-28">
      <div className="absolute inset-0 caustics" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[70%] overflow-hidden pointer-events-none" aria-hidden="true">
        {[8, 30, 52, 74].map((l, i) => <div key={l} className="ray absolute top-0 w-24 sm:w-40 h-full opacity-60" style={{ left: `${l}%`, animationDelay: `${-i * 3}s` }} />)}
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none"><Bubbles /></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <p className="font-body text-glow text-lg sm:text-xl mb-3">{event.start} – {event.dateDisplay}</p>
        <h1 className="font-display text-[22vw] sm:text-[18vw] lg:text-[13rem] leading-[.85] text-white glow-text glitch break-words">{event.name}</h1>
        <p className="font-display text-3xl sm:text-5xl text-medusa mt-4">{event.tagline}</p>
        <p className="mt-6 text-lg sm:text-2xl text-slate-300">{venue.city}, {venue.country}</p>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
          <a href="#jegyek" className={btnPrimary}><Ticket size={22} /> JEGYFOGLALÁS</a>
          <a href="#lineup" className={btnGhost}><ListMusic size={22} /> LINEUP</a>
        </div>
        <button onClick={toggle} className="mt-6 inline-flex items-center gap-3 text-lg font-bold text-lure hover:text-white transition py-3">
          <span className={`grid place-items-center w-14 h-14 rounded-full border-2 border-lure ${playing ? '' : 'pulse-ring'}`}>{playing ? <Pause size={24} /> : <Play size={24} className="ml-0.5" />}</span>
          {playing ? 'ZENE SZÜNETELTETÉSE' : 'ZENE INDÍTÁSA'}
        </button>
      </div>
    </section>
  )
}
