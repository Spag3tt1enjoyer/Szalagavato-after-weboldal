import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react'
import { tracks } from '../data/tracks'

const Ctx = createContext(null)
export const usePlayer = () => useContext(Ctx)

// Az <audio> elem itt él, az App tetején, ezért görgetéskor / navigáláskor nem indul újra.
export function PlayerProvider({ children }) {
  const audioRef = useRef(null)
  const pendingPlay = useRef(false)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [muted, setMuted] = useState(false)
  const [error, setError] = useState(false)
  const track = tracks[index]

  useEffect(() => { const a = audioRef.current; a.volume = volume; a.muted = muted }, [volume, muted])
  useEffect(() => { document.body.classList.toggle('playing', playing) }, [playing])
  useEffect(() => {
    if (pendingPlay.current) { pendingPlay.current = false; audioRef.current.play().catch(() => setError(true)) }
  }, [index])

  const toggle = useCallback(() => {
    const a = audioRef.current
    if (a.paused) { setError(false); a.play().catch(() => setError(true)) } else a.pause()
  }, [])

  const playTrackById = useCallback((id) => {
    const i = tracks.findIndex((t) => t.id === id)
    if (i < 0) return
    if (i === index) return toggle()
    setError(false); setTime(0); setDuration(0); pendingPlay.current = true; setIndex(i)
  }, [index, toggle])

  const step = useCallback((dir) => {
    if (tracks.length < 2) return
    setError(false); setTime(0); setDuration(0)
    pendingPlay.current = playing
    setIndex((i) => (i + dir + tracks.length) % tracks.length)
  }, [playing])

  const seek = (t) => { audioRef.current.currentTime = t; setTime(t) }

  const value = { tracks, track, index, playing, time, duration, volume, muted, error,
    toggle, playTrackById, next: () => step(1), prev: () => step(-1), seek, setVolume, setMuted }

  return (
    <Ctx.Provider value={value}>
      <audio ref={audioRef} src={track.src} preload="metadata"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.target.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onError={() => { setError(true); setPlaying(false) }}
        onEnded={() => { if (tracks.length > 1) { pendingPlay.current = true; setIndex((i) => (i + 1) % tracks.length) } else setPlaying(false) }} />
      {children}
    </Ctx.Provider>
  )
}
