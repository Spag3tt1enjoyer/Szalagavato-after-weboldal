import { useEffect, useRef } from 'react'

// Elem, ami a képernyőre görgetéskor beúszik.
export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</Tag>
}

// Szekciócím: a "mélység" jelzi, hogy a lap lefelé haladva egyre mélyebbre visz.
export function SectionHead({ depth, title, id }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="font-body text-sm text-glow/80 mb-2">{depth}</p>
      <h2 id={id} className="font-display text-5xl sm:text-7xl md:text-8xl leading-none text-white glow-text break-words">{title}</h2>
    </Reveal>
  )
}

export const btnPrimary = 'inline-flex items-center justify-center gap-2 px-7 py-4 min-h-[52px] bg-glow text-abyss font-display text-xl tracking-wide shadow-[0_0_28px_rgba(46,242,224,.55)] hover:shadow-[0_0_48px_rgba(46,242,224,.9)] hover:bg-white transition disabled:opacity-60'
export const btnGhost = 'inline-flex items-center justify-center gap-2 px-7 py-4 min-h-[52px] border-2 border-medusa text-medusa font-display text-xl tracking-wide hover:bg-medusa hover:text-abyss hover:shadow-[0_0_30px_rgba(255,62,165,.7)] transition'
export const inputCls = 'w-full bg-trench/70 border-b-2 border-kelp focus:border-glow px-3 py-3 min-h-[48px] text-white placeholder-slate-500 outline-none transition'
