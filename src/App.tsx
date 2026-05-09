import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingSection from './components/booking-temp'
import TrackingSection from './components/TrackingSection'
import RoutesSection from './components/RoutesSection'
import AboutSection from './components/about-temp'

function App() {
  return (
    <div className="app-container">

      {/* BACKGROUND GLOW */}
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="app-layout">

        {/* HERO */}
        <section className="app-section hero-section">
          <Hero />
        </section>

        {/* BOOKING */}
        <section className="app-section">
          <BookingSection />
        </section>

        {/* TRACKING */}
        <section className="app-section">
          <TrackingSection />
        </section>

        {/* ROUTES */}
        <section className="app-section">
          <RoutesSection />
        </section>

        {/* ABOUT */}
        <section className="app-section">
          <AboutSection />
        </section>

      </main>
    </div>
  )
}

export default App