import { event, venue } from '../data/eventData'
import { Reveal, SectionHead } from './ui'

export default function EventInfo() {
  const facts = [
    { big: event.dateDisplay, small: 'Dátum' },
    { big: event.doors, small: 'Kapunyitás' },
    { big: event.ageLimit, small: 'Korhatár' },
    { big: `${event.ticketPrice.toLocaleString('hu-HU')} Ft`, small: event.ticketPriceNote },
    { big: venue.city, small: venue.name },
  ]
  return (
    <section id="ejszaka" aria-labelledby="ejszaka-h" className="relative py-24 md:py-36 bg-gradient-to-b from-abyss to-trench">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHead depth="" title="AZ ÉJSZAKA" id="ejszaka-h" />
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <p className="text-2xl sm:text-3xl text-white leading-snug max-w-[34ch]">{event.intro}</p>
            <p className="mt-6 text-lg text-slate-400 max-w-[55ch]">{event.about}</p>
          </Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
            {facts.map((f, i) => (
              <Reveal key={f.small + i} delay={i * 80} className={i === 0 ? 'col-span-2' : ''}>
                <dd className={`font-display leading-none text-glow ${i === 0 ? 'text-6xl sm:text-8xl' : 'text-4xl sm:text-5xl text-white'} break-words`}>{f.big}</dd>
                <dt className="mt-1 text-slate-400">{f.small}</dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
