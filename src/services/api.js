// Itt kell később a valódi backendet bekötni.
// Jelenleg SZIMULÁLT: nem ment el semmit adatbázisba.
const API_BASE = '' // pl. 'https://api.sajatoldal.hu'

const simulate = (payload) => new Promise((resolve) => setTimeout(() => resolve({ ok: true, payload }), 900))

export async function reserveTickets(data) {
  // Éles használatnál:
  // const res = await fetch(`${API_BASE}/api/reservations`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  // if (!res.ok) throw new Error('Foglalási hiba'); return res.json()
  return simulate(data)
}

export async function sendMessage(data) {
  // fetch(`${API_BASE}/api/contact`, { method: 'POST', ... })
  return simulate(data)
}
