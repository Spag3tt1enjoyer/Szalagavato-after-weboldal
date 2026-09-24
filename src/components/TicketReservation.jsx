import { useState } from 'react'
import { Ticket, CheckCircle2 } from 'lucide-react'
import { event } from '../data/eventData'
import { reserveTickets } from '../services/api'
import { Reveal, SectionHead, btnPrimary, inputCls } from './ui'

const empty = { name: '', email: '', phone: '', tickets: 1, consent: false }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Add meg a neved.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Adj meg érvényes e-mail címet.'
  if (!/^\+?[0-9\s\-()]{7,16}$/.test(v.phone)) e.phone = 'Adj meg érvényes telefonszámot.'
  const n = Number(v.tickets)
  if (!Number.isInteger(n) || n < 1 || n > event.maxTicketsPerOrder) e.tickets = `A jegyek száma 1 és ${event.maxTicketsPerOrder} között lehet.`
  if (!v.consent) e.consent = 'A foglaláshoz el kell fogadnod az adatkezelési tájékoztatót.'
  return e
}

export default function TicketReservation() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  async function submit(e) {
    e.preventDefault()
    const errs = validate(v); setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus('sending')
    try { await reserveTickets({ ...v, tickets: Number(v.tickets) }); setStatus('done'); setV(empty) }
    catch { setStatus('error') }
  }

  const Err = ({ id }) => errors[id] ? <p id={`${id}-err`} role="alert" className="text-medusa text-sm mt-1">{errors[id]}</p> : null
  const f = (id) => ({ id, 'aria-invalid': !!errors[id], 'aria-describedby': errors[id] ? `${id}-err` : undefined })
  const total = (Number(v.tickets) || 0) * event.ticketPrice

  return (
    <section id="jegyek" aria-labelledby="jegyek-h" className="py-24 md:py-36 bg-abyss relative overflow-hidden">
      <div className="absolute -right-32 top-10 w-96 h-96 rounded-full bg-medusa/10 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-3xl mx-auto px-4 md:px-8">
        <SectionHead depth="−70 m" title="JEGYFOGLALÁS" id="jegyek-h" />
        <Reveal>
          {status === 'done' ? (
            <div role="status" className="border-2 border-lure p-8 text-center shadow-[0_0_40px_rgba(212,255,58,.25)]">
              <CheckCircle2 className="mx-auto text-lure" size={56} />
              <h3 className="font-display text-5xl text-lure mt-4">SIKERES FOGLALÁS</h3>
              <p className="mt-3 text-lg text-slate-300">Foglalásodat rögzítettük. A további információkat e-mailben küldjük.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 underline text-glow py-2">Új foglalás</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid gap-6">
              <p className="text-lg text-slate-300">{event.ticketPriceNote}: <b className="text-glow">{event.ticketPrice.toLocaleString('hu-HU')} Ft</b> / fő</p>
              <div><label htmlFor="name" className="block mb-1 font-bold">Név</label><input {...f('name')} value={v.name} onChange={set('name')} autoComplete="name" className={inputCls} /><Err id="name" /></div>
              <div><label htmlFor="email" className="block mb-1 font-bold">E-mail</label><input {...f('email')} type="email" value={v.email} onChange={set('email')} autoComplete="email" className={inputCls} /><Err id="email" /></div>
              <div><label htmlFor="phone" className="block mb-1 font-bold">Telefonszám</label><input {...f('phone')} type="tel" value={v.phone} onChange={set('phone')} autoComplete="tel" className={inputCls} /><Err id="phone" /></div>
              <div><label htmlFor="tickets" className="block mb-1 font-bold">Jegyek száma</label><input {...f('tickets')} type="number" min="1" max={event.maxTicketsPerOrder} value={v.tickets} onChange={set('tickets')} className={inputCls} /><Err id="tickets" />
                {total > 0 && !errors.tickets && <p className="text-slate-400 mt-1">Összesen: {total.toLocaleString('hu-HU')} Ft</p>}</div>
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input id="consent" type="checkbox" checked={v.consent} onChange={set('consent')} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'consent-err' : undefined} className="mt-1 w-6 h-6 accent-[#2ef2e0] shrink-0" />
                  <span>Elfogadom az <a href="#adatkezeles" className="underline text-glow">adatkezelési tájékoztatót</a>.</span>
                </label><Err id="consent" />
              </div>
              {status === 'error' && <p role="alert" className="text-medusa">Nem sikerült rögzíteni a foglalást. Próbáld újra később.</p>}
              <button type="submit" disabled={status === 'sending'} className={btnPrimary}><Ticket size={22} /> {status === 'sending' ? 'KÜLDÉS…' : 'JEGY FOGLALÁSA'}</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
