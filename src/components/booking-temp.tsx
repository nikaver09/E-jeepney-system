import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users, CreditCard, ArrowRight, ChevronDown } from 'lucide-react'

const routes = [
  'Davao City — Toril',
  'Davao City — Calinan',
  'Toril — Mintal',
  'Buhangin — SM Lanang',
  'Agdao — Matina',
  'Tibungco — Downtown',
]

const timeSlots = [
  '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM',
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
]

export default function BookingSection() {
  const [selectedRoute, setSelectedRoute] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [passengers, setPassengers] = useState(1)
  const [booked, setBooked] = useState(false)

  const fare = passengers * 13

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
        background: '#071a00ff',
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
        style={{ maxWidth: 1100, margin: '0 auto' }}
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

        {/* Fluid Flexbox Layout: Side-by-side on desktop, stacked on mobile */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 'clamp(2rem, 5vw, 3rem)', 
          alignItems: 'flex-start' 
        }}>
          
          {/* Booking Form */}
          <div style={{
            flex: '1 1 min(100%, 450px)', // Takes up more space on desktop, 100% on mobile
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: 24,
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            backdropFilter: 'blur(10px)',
          }}>
            {!booked ? (
              <>
                {/* Route */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#7bc47a', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                    <MapPin size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: '-2px' }} />
                    Select Route
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={selectedRoute}
                      onChange={e => setSelectedRoute(e.target.value)}
                      style={{
                        width: '100%', 
                        padding: '14px 16px', // Larger touch target
                        background: 'rgba(255,255,255,0.05)',
                        border: `1px solid ${selectedRoute ? 'rgba(123,196,122,0.4)' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: 14,
                        color: selectedRoute ? '#e8f0e8' : 'rgba(232,240,232,0.4)',
                        fontSize: '1rem',
                        outline: 'none',
                        appearance: 'none',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <option value="" disabled style={{ background: '#0a1a10', color: '#fff' }}>Choose your route...</option>
                      {routes.map(r => (
                        <option key={r} value={r} style={{ background: '#0a1a10', color: '#fff' }}>{r}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: '#7bc47a', pointerEvents: 'none' }} />
                  </div>
                </div>

                {/* Time */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#7bc47a', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                    <Clock size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: '-2px' }} />
                    Departure Time
                  </label>
                  <div style={{ 
                    display: 'grid', 
                    // Auto-fill creates as many columns as fit the minimum width (80px), perfect for mobile wrapping
                    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
                    gap: '0.6rem' 
                  }}>
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        style={{
                          padding: '10px 4px', // Taller for easier tapping
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

                {/* Passengers */}
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
                          width: 44, height: 44, borderRadius: 12, // Increased size for mobile
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
                          width: 44, height: 44, borderRadius: 12, // Increased size for mobile
                          background: 'rgba(123,196,122,0.1)',
                          border: '1px solid rgba(123,196,122,0.25)',
                          color: '#7bc47a', fontSize: '1.4rem', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >+</button>
                    </div>
                    
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(232,240,232,0.5)', marginBottom: 2 }}>Estimated Fare</div>
                      <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#e8b84b', lineHeight: 1 }}>₱{fare}</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBook}
                  style={{
                    width: '100%',
                    padding: '16px', // Taller button for mobile thumb comfort
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
                  Your booking reference: <br className="mobile-break" />
                  <strong style={{ color: '#7bc47a', letterSpacing: '1px', fontSize: '1.1rem' }}>EJ-{Math.random().toString(36).substr(2,6).toUpperCase()}</strong>
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
            flex: '1 1 min(100%, 300px)', // Shrinks naturally beside the form on desktop, stacks full width on mobile
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

