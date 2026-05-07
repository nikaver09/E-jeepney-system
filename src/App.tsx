import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingSection from './components/booking-temp'
import TrackingSection from './components/TrackingSection'
import RoutesSection from './components/RoutesSection'
import AboutSection from './components/about-temp'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#08160e' }}>
      <Navbar />
      <Hero />
      <BookingSection />
      <TrackingSection />
      <RoutesSection />
      <AboutSection />
    </div>
  )
}

export default App
