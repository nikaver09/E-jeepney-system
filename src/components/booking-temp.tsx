import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Users, CreditCard, ArrowRight, ChevronDown, Check } from 'lucide-react'

// Fixed for TypeScript: Added Record<string, number>
const routeFares: Record<string, number> = {
  'Davao City — Toril': 38,
  'Davao City — Calinan': 65,
  'Toril — Mintal': 22,
  'Buhangin — SM Lanang': 17,
  'Agdao — Matina': 25,
  'Tibungco — Downtown': 42,
}

const routes = Object.keys(routeFares)

const timeSlots = [
  '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM',
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
]

export default function BookingSection() {
  const [selectedRoute, setSelectedRoute] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTime, setSelectedTime] = useState('')
  const [passengers, setPassengers] = useState(1)
  const [booked, setBooked] = useState(false)

  // Dynamic fare calculation (TypeScript error resolved here)
  const currentBaseFare = routeFares[selectedRoute] || 17
  const fare = passengers * currentBaseFare

  const handleBook = () => {
    if (selectedRoute && selectedTime) {
      setBooked(true)
    }
  }

  return (
    <section 
      id="book" 
      style={{ 
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)', 
        position: 'relative',
        background: '#071a00',
        color: '#fff',
        overflowX: 'hidden'
      }}
    >
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(45,90,61,0.12) 0%, transparent 80%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4rem)' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(123,196,122,0.1)',
            border: '1px solid rgba(123,196,122,0.2)',
            borderRadius: 999, padding: '6px 16px',
            fontSize: '0.75rem', fontWeight: 600, color: '#7bc47a',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}>
            Book a Ride
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
            Your Journey,{' '}
            <span style={{ background: 'linear-gradient(135deg, #7bc47a, #a8e6a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Simplified
            </span>
          </h2>
          <p style={{ color: 'rgba(232,240,232,0.65)', marginTop: '1.2rem', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', fontWeight: 300, lineHeight: 1.6 }}>
            Select your route, pick a time, and hop on the cleanest ride in the city.
          </p>
        </div>

        {/* Fluid Flexbox Layout */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 'clamp(2rem, 5vw, 3rem)', 
          alignItems: 'flex-start' 
        }}>
          
          {/* Booking Form */}
          <div style={{
            flex: '1 1 min(100%, 450px)',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: 24,
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            backdropFilter: 'blur(10px)',
          }}>
            {!booked ? (
              <>
                {/* 3D Custom Route Selector */}
                <div style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 100 }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#7bc47a', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                    <MapPin size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: '-2px' }} />
                    Select Route
                  </label>
                  
                  <motion.div 
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                    whileTap={{ scale: 0.98, rotateX: -10 }}
                    style={{
                      padding: '14px 16px',
                      background: 'rgba(255,255,255,0.05)',
                      border: `1px solid ${selectedRoute ? 'rgba(123,196,122,0.5)' : 'rgba(255,255,255,0.1)'}`,
                      borderRadius: 14,
                      color: selectedRoute ? '#e8f0e8' : 'rgba(232,240,232,0.4)',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      perspective: '1000px',
                      transition: 'border-color 0.2s'
                    }}
                  >
                    <span>{selectedRoute || 'Choose your route...'}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown size={18} style={{ color: '#7bc47a' }} />
                    </motion.div>
                  </motion.div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, rotateX: -25, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, rotateX: 0, y: 8, scale: 1 }}
                        exit={{ opacity: 0, rotateX: -25, y: -20, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          right: 0,
                          background: '#0a1a10',
                          border: '1px solid rgba(123,196,122,0.2)',
                          borderRadius: 14,
                          overflow: 'hidden',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                          zIndex: 200,
                          transformOrigin: 'top',
                          padding: '4px'
                        }}
                      >
                        {routes.map((r) => (
                          <motion.div
                            key={r}
                            whileHover={{ x: 6, backgroundColor: 'rgba(123,196,122,0.1)' }}
                            onClick={() => {
                              setSelectedRoute(r);
                              setIsOpen(false);
                            }}
                            style={{
                              padding: '12px 14px',
                              cursor: 'pointer',
                              borderRadius: 10,
                              fontSize: '0.95rem',
                              color: selectedRoute === r ? '#7bc47a' : '#e8f0e8',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            {r}
                            {selectedRoute === r && <Check size={14} color="#7bc47a" />}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Time */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#7bc47a', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                    <Clock size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: '-2px' }} />
                    Departure Time
                  </label>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
                    gap: '0.6rem' 
                  }}>
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        style={{
                          padding: '10px 4px',
                          borderRadius: 10,
                          border: `1px solid ${selectedTime === t ? 'rgba(123,196,122,0.6)' : 'rgba(255,255,255,0.08)'}`,
                          background: selectedTime === t ? 'rgba(123,196,122,0.15)' : 'rgba(255,255,255,0.02)',
                          color: selectedTime === t ? '#7bc47a' : 'rgba(232,240,232,0.6)',
                          fontSize: '0.8rem',
                          fontWeight: selectedTime === t ? 600 : 400,
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Passengers & Fare */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#7bc47a', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                    <Users size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: '-2px' }} />
                    Passengers
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <button
                        onClick={() => setPassengers(p => Math.max(1, p - 1))}
                        style={{
                          width: 44, height: 44, borderRadius: 12,
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#e8f0e8', fontSize: '1.4rem', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >−</button>
                      <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 700, minWidth: 28, textAlign: 'center' }}>
                        {passengers}
                      </span>
                      <button
                        onClick={() => setPassengers(p => Math.min(16, p + 1))}
                        style={{
                          width: 44, height: 44, borderRadius: 12,
                          background: 'rgba(123,196,122,0.1)',
                          border: '1px solid rgba(123,196,122,0.25)',
                          color: '#7bc47a', fontSize: '1.4rem', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >+</button>
                    </div>
                    
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(232,240,232,0.5)', marginBottom: 2 }}>Estimated Fare</div>
                      <motion.div 
                        key={fare}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#e8b84b', lineHeight: 1 }}
                      >
                        ₱{fare}
                      </motion.div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBook}
                  disabled={!selectedRoute || !selectedTime}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: selectedRoute && selectedTime
                      ? 'linear-gradient(135deg, #2d5a3d, #4a8c5c)'
                      : 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(123,196,122,0.3)',
                    borderRadius: 14,
                    color: selectedRoute && selectedTime ? '#fff' : 'rgba(232,240,232,0.3)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: selectedRoute && selectedTime ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    transition: 'all 0.2s',
                  }}
                >
                  <CreditCard size={18} />
                  Confirm Booking
                  <ArrowRight size={18} />
                </button>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: 'center', padding: '2rem 0' }}
              >
                <div style={{
                  width: 80, height: 80,
                  background: 'rgba(123,196,122,0.15)',
                  border: '2px solid rgba(123,196,122,0.5)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2.5rem',
                  color: '#7bc47a'
                }}>✓</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Booking Confirmed!
                </h3>
                <p style={{ color: 'rgba(232,240,232,0.7)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{selectedRoute}</p>
                <p style={{ color: '#7bc47a', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{selectedTime}</p>
                <p style={{ color: '#e8b84b', fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 700, marginBottom: '2rem' }}>₱{fare}</p>
                <p style={{ color: 'rgba(232,240,232,0.5)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Your booking reference: <br />
                  <strong style={{ color: '#7bc47a', letterSpacing: '1px', fontSize: '1.1rem' }}>EJ-{Math.random().toString(36).substring(2,8).toUpperCase()}</strong>
                </p>
                <button
                  onClick={() => { setBooked(false); setSelectedRoute(''); setSelectedTime(''); setPassengers(1) }}
                  style={{
                    padding: '12px 28px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 999,
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'background 0.2s'
                  }}
                >
                  Book Another Ride
                </button>
              </motion.div>
            )}
          </div>

          {/* Info panel */}
          <div style={{ 
            flex: '1 1 min(100%, 300px)',
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'clamp(0.8rem, 2vw, 1rem)' 
          }}>
            {[
              { icon: '🌿', title: 'Zero Emissions', desc: 'All our jeepneys run on clean electric power — no fumes, no pollution.' },
              { icon: '📍', title: 'Real-time GPS', desc: 'Track your jeepney live on the map. Know exactly when it arrives.' },
              { icon: '💳', title: 'Cashless Payment', desc: 'Pay with GCash, Maya, or tap-to-pay. No change needed.' },
              { icon: '♿', title: 'Accessible Design', desc: 'Designed for everyone — including seniors and PWDs.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  display: 'flex', gap: '1.2rem', alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 16,
                  padding: 'clamp(1rem, 3vw, 1.2rem)',
                }}
              >
                <div style={{ fontSize: '1.6rem', lineHeight: 1 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, marginBottom: '0.4rem', color: '#fff', fontSize: '1.05rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(232,240,232,0.6)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}