import { useState } from 'react'
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, ChevronUp, ChevronDown } from 'lucide-react'
import { usePlayer } from '../context/PlayerContext'

const fmt = (s) => (isFinite(s) && s > 0 ? `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '00:00')

function Equalizer({ on }) {
  return <span className={`eq flex items-end gap-[2px] h-5 ${on ? 'on' : ''}`} aria-hidden="true">{[0, 1, 2, 3, 4].map((i) => <span key={i} />)}</span>
}

export default function MusicPlayer() {
  const p = usePlayer()
  const [open, setOpen] = useState(false) // csak mobilon számít
  const many = p.tracks.length > 1
  const pct = p.duration ? (p.time / p.duration) * 100 : 0
  const iconBtn = 'p-2 min-w-[44px] min-h-[44px] grid place-items-center text-glow hover:text-white'

  return (
    <aside aria-label="Zenelejátszó" className="fixed z-[55] bottom-0 inset-x-0 md:inset-x-auto md:right-4 md:bottom-4 md:w-[380px] bg-abyss/95 backdrop-blur border-t-2 md:border-2 border-glow/70 shadow-[0_0_30px_rgba(46,242,224,.25)]">
      <div className="flex items-center gap-3 px-3 py-2">
        <button onClick={p.toggle} aria-label={p.playing ? 'Szünet' : 'Lejátszás'}
          className={`shrink-0 grid place-items-center w-12 h-12 rounded-full bg-glow text-abyss shadow-[0_0_20px_#2ef2e0] ${p.playing ? '' : 'pulse-ring'}`}>
          {p.playing ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
        </button>
        <div className="min-w-0 flex-1" aria-live="polite">
          <p className="text-[10px] font-bold text-medusa flex items-center gap-2">{p.playing ? 'NOW PLAYING' : 'ZENE INDÍTÁSA'} <Equalizer on={p.playing} /></p>
          <p className="truncate font-bold text-white text-sm">{p.track.artist} — {p.track.title}</p>
          {p.error && <p className="text-medusa text-xs">A zenefájl nem található (public/music).</p>}
        </div>
        <button onClick={() => p.setMuted(!p.muted)} aria-label={p.muted ? 'Hang bekapcsolása' : 'Némítás'} className={`${iconBtn} md:hidden`}>{p.muted ? <VolumeX size={20} /> : <Volume2 size={20} />}</button>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Lejátszó összecsukása' : 'Lejátszó kibontása'} className={`${iconBtn} md:hidden`}>{open ? <ChevronDown size={20} /> : <ChevronUp size={20} />}</button>
      </div>

      <div className={`${open ? 'grid' : 'hidden'} md:grid gap-1 px-3 pb-3`}>
        <div className="flex items-center gap-2 text-xs tabular-nums text-slate-300">
          <span>{fmt(p.time)}</span>
          <input type="range" aria-label="Előrehaladás" className="flex-1 min-w-0" min="0" max={p.duration || 0} step="0.1" value={p.time}
            style={{ '--p': `${pct}%` }} onChange={(e) => p.seek(Number(e.target.value))} disabled={!p.duration} />
          <span>{fmt(p.duration)}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <button onClick={p.prev} disabled={!many} aria-label="Előző szám" className={`${iconBtn} disabled:opacity-30`}><SkipBack size={18} /></button>
            <button onClick={p.next} disabled={!many} aria-label="Következő szám" className={`${iconBtn} disabled:opacity-30`}><SkipForward size={18} /></button>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => p.setMuted(!p.muted)} aria-label={p.muted ? 'Hang bekapcsolása' : 'Némítás'} className={`${iconBtn} hidden md:grid`}>{p.muted ? <VolumeX size={20} /> : <Volume2 size={20} />}</button>
            <input type="range" aria-label="Hangerő" className="w-28" min="0" max="1" step="0.01" value={p.muted ? 0 : p.volume}
              style={{ '--p': `${(p.muted ? 0 : p.volume) * 100}%` }} onChange={(e) => { p.setVolume(Number(e.target.value)); p.setMuted(false) }} />
          </div>
        </div>
      </div>
    </aside>
  )
}
