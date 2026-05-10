import { motion, type Variants } from 'framer-motion'
import './index.css'

// Import your components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingSection from './components/booking-temp'
import TrackingSection from './components/TrackingSection'
import RoutesSection from './components/RoutesSection'
import AboutSection from './components/about-temp'

// Accurate TypeScript fix for the animation variants
const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      // "as const" ensures TypeScript recognizes the cubic-bezier array correctly
      ease: [0.16, 1, 0.3, 1] as const 
    } 
  }
}

function App() {
  return (
    <div className="app-container">
      {/* BACKGROUND GLOWS - Visual atmosphere */}
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      {/* FIXED NAVIGATION */}
      <Navbar />

      {/* MAIN CONTENT LAYOUT */}
      <main className="app-layout">
        
        {/* HERO SECTION */}
        <motion.section 
          id="home"
          className="app-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Hero />
        </motion.section>

        {/* BOOKING SECTION */}
        <motion.section 
          id="book"
          className="app-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <BookingSection />
        </motion.section>

        {/* TRACKING SECTION */}
        <motion.section 
          id="track"
          className="app-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <TrackingSection />
        </motion.section>

        {/* ROUTES SECTION */}
        <motion.section 
          id="routes"
          className="app-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <RoutesSection />
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section 
          id="about"
          className="app-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <AboutSection />
        </motion.section>

      </main>
    </div>
  )
}

export default App