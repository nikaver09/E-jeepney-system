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
      <Navbar />

      <main className="mobile-layout">
        <section className="section-spacing">
          <Hero />
        </section>

        <section className="section-spacing">
          <BookingSection />
        </section>

        <section className="section-spacing">
          <TrackingSection />
        </section>

        <section className="section-spacing">
          <RoutesSection />
        </section>

        <section className="section-spacing">
          <AboutSection />
        </section>
      </main>
    </div>
  )
}

export default App