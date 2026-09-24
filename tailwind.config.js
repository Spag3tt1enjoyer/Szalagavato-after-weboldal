/** Színek és betűtípusok itt módosíthatók. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#020b12',     // legmélyebb fekete-kék
        trench: '#06202b',    // sötét tengerkék
        kelp: '#0c3a44',
        glow: '#2ef2e0',      // biolumineszcens cián
        medusa: '#ff3ea5',    // medúza-rózsaszín
        lure: '#d4ff3a',      // horgászhal-lámpa (sav-zöld)
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
