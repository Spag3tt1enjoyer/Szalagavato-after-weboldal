import { useState } from 'react'
import { Mail, Instagram, Facebook, Send } from 'lucide-react'
import { contact, socials } from '../data/eventData'
import { sendMessage } from '../services/api'
import { Reveal, SectionHead, btnPrimary, inputCls } from './ui'

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    const errs = {}
    if (v.name.trim().length < 2) errs.name = 'Add meg a neved.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) errs.email = 'Adj meg érvényes e-mail címet.'
    if (v.message.trim().length < 5) errs.message = 'Írj legalább néhány szót.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus('sending')
    try { await sendMessage(v); setStatus('done'); setV({ name: '', email: '', message: '' }) } catch { setStatus('error') }
  }
  const Err = ({ id }) => errors[id] ? <p id={`c-${id}-err`} role="alert" className="text-medusa text-sm mt-1">{errors[id]}</p> : null
  const f = (id) => ({ id: `c-${id}`, 'aria-invalid': !!errors[id], 'aria-describedby': errors[id] ? `c-${id}-err` : undefined })

  return (
    <section id="kapcsolat" aria-labelledby="kapcsolat-h" className="py-24 md:py-36 bg-trench">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHead depth="" title="KAPCSOLAT" id="kapcsolat-h" />
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <ul className="grid gap-5 text-xl">
              <li><a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-glow break-all"><Mail className="text-glow shrink-0" /> {contact.email}</a></li>
              <li><a href={socials.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-glow"><Instagram className="text-glow" /> Instagram</a></li>
              <li><a href={socials.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-glow"><Facebook className="text-glow" /> Facebook</a></li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            {status === 'done' ? (
              <p role="status" className="border-2 border-lure p-6 text-lure text-xl">Üzeneted megérkezett. Hamarosan válaszolunk.</p>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-5">
                <div><label htmlFor="c-name" className="block mb-1 font-bold">Név</label><input {...f('name')} value={v.name} onChange={set('name')} autoComplete="name" className={inputCls} /><Err id="name" /></div>
                <div><label htmlFor="c-email" className="block mb-1 font-bold">E-mail</label><input {...f('email')} type="email" value={v.email} onChange={set('email')} autoComplete="email" className={inputCls} /><Err id="email" /></div>
                <div><label htmlFor="c-message" className="block mb-1 font-bold">Üzenet</label><textarea {...f('message')} rows="5" value={v.message} onChange={set('message')} className={inputCls} /><Err id="message" /></div>
                {status === 'error' && <p role="alert" className="text-medusa">Az üzenetet nem sikerült elküldeni. Próbáld újra később.</p>}
                <button type="submit" disabled={status === 'sending'} className={btnPrimary}><Send size={22} /> {status === 'sending' ? 'KÜLDÉS…' : 'ÜZENET KÜLDÉSE'}</button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
