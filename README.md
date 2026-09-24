# Mélyvíz – underground rave weboldal

React + Vite + Tailwind CSS + Lucide. A teljes oldal magyar nyelvű.

## Indítás
```bash
npm install
npm run dev      # fejlesztés
npm run build    # éles build a dist/ mappába
```

## Mit hol állíts
- `src/data/eventData.js` – esemény neve, dátum, idő, ár, helyszín, előadók, social linkek, e-mail
- `src/data/tracks.js` – zenék listája (mp3 fájlok a `public/music/` mappában)
- `public/images/` – előadói képek
- `tailwind.config.js` – színek, betűtípusok
- `src/services/api.js` – ide kösd be a valódi foglalási / kapcsolati API-t (jelenleg szimulált, nem ment adatot)

## Zenelejátszó
Egyetlen globális `<audio>` elem él az `App` tetején (`src/context/PlayerContext.jsx`), ezért nem indul újra görgetéskor. Automatikus lejátszás nincs, csak gombnyomásra indul. Az előadói kártyák lejátszó gombja ugyanebbe a lejátszóba tölti be a számot (`previewTrackId`).

## Még teendő
- Adatkezelési tájékoztató és impresszum oldalak / tartalom (a láblécben jelenleg csak horgonylinkek)
- Térkép: `venue.mapEmbedUrl` kitöltése Google Maps beágyazási URL-lel
