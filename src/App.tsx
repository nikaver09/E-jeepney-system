import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingSection from './components/Bookingsection'
import TrackingSection from './components/TrackingSection'
import RoutesSection from './components/RoutesSection'
import AboutSection from './components/Aboutsection'

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
