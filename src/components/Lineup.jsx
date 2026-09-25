import { artists } from '../data/eventData'
import ArtistCard from './ArtistCard'
import { Reveal, SectionHead } from './ui'

export default function Lineup() {
  return (
    <section id="lineup" aria-labelledby="lineup-h" className="py-24 md:py-36 bg-gradient-to-b from-trench to-abyss">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHead depth="" title="LINEUP" id="lineup-h" />
        {/* Mobilon vízszintesen görgethető, asztali gépen rács */}
        <ul className="flex md:grid md:grid-cols-2 xl:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4">
          {artists.map((a, i) => (
            <li key={a.id} className="snap-center shrink-0 w-[78vw] max-w-[340px] md:w-auto md:max-w-none">
              <Reveal delay={i * 100}><ArtistCard artist={a} /></Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
