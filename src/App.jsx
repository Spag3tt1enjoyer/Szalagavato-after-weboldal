import { PlayerProvider } from './context/PlayerContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventInfo from './components/EventInfo'
import Lineup from './components/Lineup'
import TicketReservation from './components/TicketReservation'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  return (
    <PlayerProvider>
      <div className="grain">
        <Navbar />
        <main>
          <Hero />
          <EventInfo />
          <Lineup />
          <TicketReservation />
          <Location />
          <Contact />
        </main>
        <Footer />
        <MusicPlayer />
      </div>
    </PlayerProvider>
  )
}
