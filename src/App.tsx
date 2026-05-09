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

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="mobile-layout">

        {/* HERO */}
        <section className="section-spacing">
          <Hero />
        </section>

        {/* BOOKING */}
        <section className="section-spacing">
          <BookingSection />
        </section>

        {/* LIVE TRACKING */}
        <section className="section-spacing">
          <TrackingSection />
        </section>

        {/* ROUTES */}
        <section className="section-spacing">
          <RoutesSection />
        </section>

        {/* ABOUT */}
        <section className="section-spacing">
          <AboutSection />
        </section>

      </main>
    </div>
  )
}

export default App