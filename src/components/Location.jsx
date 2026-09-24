import { MapPin, Navigation } from 'lucide-react'
import { event, venue } from '../data/eventData'
import { Reveal, SectionHead, btnGhost } from './ui'

export default function Location() {
  return (
    <section id="helyszin" aria-labelledby="helyszin-h" className="py-24 md:py-36 bg-gradient-to-b from-abyss to-trench">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHead depth="−100 m" title="HELYSZÍN" id="helyszin-h" />
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <Reveal>
            <h3 className="font-display text-5xl sm:text-6xl text-white break-words">{venue.name}</h3>
            <address className="not-italic mt-4 text-xl text-slate-300">{venue.address}<br />{venue.city}, {venue.country}</address>
            <p className="mt-4 text-glow text-xl">{event.dateDisplay} · kapunyitás {event.doors}</p>
            <a href={venue.mapsUrl} target="_blank" rel="noreferrer" className={`${btnGhost} mt-8`}><Navigation size={22} /> ÚTVONALTERVEZÉS</a>
          </Reveal>
          <Reveal delay={150} className="relative min-h-[300px] border border-kelp overflow-hidden bg-trench">
            {venue.mapEmbedUrl ? (
              <iframe title={`${venue.name} térkép`} src={venue.mapEmbedUrl} loading="lazy" className="absolute inset-0 w-full h-full border-0 grayscale invert contrast-90 hue-rotate-180" />
            ) : (
              <div className="absolute inset-0 grid place-items-center" style={{ backgroundImage: 'linear-gradient(rgba(46,242,224,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(46,242,224,.12) 1px,transparent 1px)', backgroundSize: '36px 36px' }}>
                <div className="text-center"><MapPin size={56} className="mx-auto text-medusa pulse-ring rounded-full" /><p className="mt-3 font-display text-3xl text-white">{venue.city}</p></div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
