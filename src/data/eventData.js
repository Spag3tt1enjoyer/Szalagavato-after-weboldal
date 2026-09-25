// ============================================================
//  ITT ÁLLÍTHATSZ MINDEN ESEMÉNYADATOT – máshol nem kell átírni.
// ============================================================
export const event = {
  name: 'Szalagavató After',
  tagline: 'Idk majd lesz valami',
  dateDisplay: '06.12.2026',
  doors: '22:00',
  start: '23:59',
  end: '06:00',
  ageLimit: '18+',
  ticketPrice: 4000,          // Ft
  ticketPriceNote: 'Elővételes jegy',
  maxTicketsPerOrder: 6,
  intro:
    'valami fasza szöveg kell ide is',
  about:
    'ide is valami fasza szöveg kell',
}

export const venue = {
  name: 'Példa Klub',                 // TODO: helyszín neve
  address: 'Példa utca 1.',           // TODO: cím
  city: 'Budapes',
  country: 'Magyarország',
  mapsUrl: 'https://www.google.com/maps/place/Károli+Gáspár+Református+Egyetem+BTK+Pszichológiai+Intézet/@47.5605712,19.0221605,15.08z/data=!4m15!1m8!3m7!1s0x4741c334d1d4cfc9:0x400c4290c1e1160!2sBudapest!3b1!8m2!3d47.497912!4d19.040235!16zL20vMDk1d18!3m5!1s0x4741d8548e687825:0x7d64d597a489c48a!8m2!3d47.5732775!4d19.0132835!16s%2Fg%2F11cn7wr3__?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D',   // Útvonaltervezés gomb
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.0197547865364!2d19.06441977743563!3d47.509006494710306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc763ac74ff5%3A0x1693ba56984d35a5!2sFABRIKA!5e0!3m2!1shu!2shu!4v1790326648849!5m2!1shu!2shu',   // opcionális: Google Maps "Beágyazás" URL (iframe src). Ha üres, a stilizált térkép látszik.
}

export const socials = {
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
}

export const contact = {
  email: 'trifonov.ignac@gmail.com',
}

export const nav = [
  { label: 'FŐOLDAL', href: '#fooldal' },
  { label: 'LINEUP', href: '#lineup' },
  { label: 'JEGYEK', href: '#jegyek' },
  { label: 'HELYSZÍN', href: '#helyszin' },
  { label: 'KAPCSOLAT', href: '#kapcsolat' },
]

// Előadók. A previewTrackId a data/tracks.js egyik id-jére mutat (elhagyható).
// Kép: tedd a public/images/ mappába, vagy adj meg teljes URL-t. Ha nincs kép, színátmenet látszik.
export const artists = [


  { id: 'siryx', name: 'DJ 1', genre: 'HARDSTYLE', image: './images/cover.jpg',
    description: 'valami leírás',

    instagram: 'https://instagram.com/', soundcloud: 'https://soundcloud.com/', previewTrackId: 'acid-cry' },

  { id: 'dj-example', name: 'DJ EXAMPLE', genre: 'DRUM & BASS', image: './images/dj-example.jpg',
    description: 'Gyors törések és mély szub, ami a mellkasodban rezeg.',
    instagram: 'https://instagram.com/', soundcloud: '', previewTrackId: 'example' },

  { id: 'artist-3', name: 'ARTIST NAME', genre: 'HARD TECHNO', image: './images/artist-3.jpg',
    description: 'Könyörtelen tempó, sötét hangzás. Cseréld le a leírást.', instagram: '', soundcloud: '' , previewTrackId: 'break-it-down' },

  { id: 'artist-4', name: 'ARTIST NAME', genre: 'INDUSTRIAL TECHNO', image: './images/artist-4.jpg',
    description: 'Fém, gőz és nyomás a legmélyebb szinten. Cseréld le a leírást.', instagram: '', soundcloud: '' , previewTrackId: 'break-it-down' },

  { id: 'artist-5', name: 'ARTIST NAME', genre: 'INDUSTRIAL TECHNO', image: './images/artist-4.jpg',
    description: 'Fém, gőz és nyomás a legmélyebb szinten. Cseréld le a leírást.', instagram: '', soundcloud: '' , previewTrackId: 'break-it-down' },
]
