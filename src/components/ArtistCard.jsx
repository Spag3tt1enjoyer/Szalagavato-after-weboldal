import { useState } from 'react'
import { Play, Pause, Instagram, Music2 } from 'lucide-react'
import { usePlayer } from '../context/PlayerContext'

export default function ArtistCard({ artist }) {
  const { track, playing, playTrackById } = usePlayer()
  const [imgOk, setImgOk] = useState(Boolean(artist.image))
  const active = artist.previewTrackId && track.id === artist.previewTrackId && playing
  return (
    <article className="group relative overflow-hidden bg-trench border border-kelp hover:border-glow transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(46,242,224,.25)]">
      <div className="relative aspect-[3/4] bg-gradient-to-br from-kelp via-trench to-abyss">
        {imgOk && <img src={artist.image} alt={`${artist.name} – ${artist.genre} előadó`} loading="lazy" onError={() => setImgOk(false)}
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition duration-700" />}
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-transparent" />
        <div className="absolute inset-0 mix-blend-color bg-glow/30 group-hover:opacity-0 transition duration-500" />
        {artist.previewTrackId && (
          <button onClick={() => playTrackById(artist.previewTrackId)} aria-label={`${artist.name} zenéjének ${active ? 'szüneteltetése' : 'lejátszása'}`}
            className={`absolute top-3 right-3 grid place-items-center w-12 h-12 rounded-full bg-abyss/80 border-2 border-lure text-lure hover:bg-lure hover:text-abyss transition ${active ? 'shadow-[0_0_20px_#d4ff3a]' : ''}`}>
            {active ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
          </button>
        )}
        <div className="absolute bottom-0 p-5 w-full">
          <p className="text-medusa font-bold text-sm">{artist.genre}</p>
          <h3 className="font-display text-4xl sm:text-5xl text-white leading-none mt-1 break-words">{artist.name}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-slate-400 text-[15px]">{artist.description}</p>
        {(artist.instagram || artist.soundcloud) && (
          <div className="mt-4 flex gap-4">
            {artist.instagram && <a href={artist.instagram} target="_blank" rel="noreferrer" aria-label={`${artist.name} Instagram`} className="text-glow hover:text-white p-1"><Instagram size={22} /></a>}
            {artist.soundcloud && <a href={artist.soundcloud} target="_blank" rel="noreferrer" aria-label={`${artist.name} SoundCloud`} className="text-glow hover:text-white p-1"><Music2 size={22} /></a>}
          </div>
        )}
      </div>
    </article>
  )
}
