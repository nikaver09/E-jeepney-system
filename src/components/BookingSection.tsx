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
    <section id="book" style={{ padding: '8rem 4rem', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(45,90,61,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 1100, margin: '0 auto' }}
      >
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(123,196,122,0.1)',
            border: '1px solid rgba(123,196,122,0.2)',
            borderRadius: 999, padding: '5px 14px',
            fontSize: '0.75rem', fontWeight: 600, color: '#7bc47a',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}>
            Book a Ride
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Your Journey,{' '}
            <span style={{ background: 'linear-gradient(135deg, #7bc47a, #a8e6a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Simplified
            </span>
          </h2>
          <p style={{ color: 'rgba(232,240,232,0.55)', marginTop: '1rem', fontSize: '1rem', fontWeight: 300 }}>
            Select your route, pick a time, and hop on the cleanest ride in the city.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2rem', alignItems: 'start' }}>
          {/* Booking Form */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: '2.5rem',
          }}>
            {!booked ? (
              <>
                {/* Route */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#7bc47a', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                    <MapPin size={12} style={{ display: 'inline', marginRight: 6 }} />
                    Select Route
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={selectedRoute}
                      onChange={e => setSelectedRoute(e.target.value)}
                      style={{
                        width: '100%', padding: '12px 16px',
                        background: 'rgba(255,255,255,0.05)',
                        border: `1px solid ${selectedRoute ? 'rgba(123,196,122,0.4)' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: 12,
                        color: selectedRoute ? '#e8f0e8' : 'rgba(232,240,232,0.4)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        appearance: 'none',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <option value="" disabled style={{ background: '#0f2b1a' }}>Choose your route...</option>
                      {routes.map(r => (
                        <option key={r} value={r} style={{ background: '#0f2b1a' }}>{r}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: '#7bc47a', pointerEvents: 'none' }} />
                  </div>
                </div>

                {/* Time */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#7bc47a', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                    <Clock size={12} style={{ display: 'inline', marginRight: 6 }} />
                    Departure Time
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        style={{
                          padding: '8px 4px',
                          borderRadius: 8,
                          border: `1px solid ${selectedTime === t ? 'rgba(123,196,122,0.6)' : 'rgba(255,255,255,0.08)'}`,
                          background: selectedTime === t ? 'rgba(123,196,122,0.15)' : 'rgba(255,255,255,0.02)',
                          color: selectedTime === t ? '#7bc47a' : 'rgba(232,240,232,0.5)',
                          fontSize: '0.78rem',
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
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#7bc47a', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                    <Users size={12} style={{ display: 'inline', marginRight: 6 }} />
                    Passengers
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                      onClick={() => setPassengers(p => Math.max(1, p - 1))}
                      style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#e8f0e8', fontSize: '1.2rem', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >−</button>
                    <span style={{ fontFamily: 'Syne', fontSize: '1.4rem', fontWeight: 700, minWidth: 24, textAlign: 'center' }}>
                      {passengers}
                    </span>
                    <button
                      onClick={() => setPassengers(p => Math.min(16, p + 1))}
                      style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: 'rgba(123,196,122,0.1)',
                        border: '1px solid rgba(123,196,122,0.25)',
                        color: '#7bc47a', fontSize: '1.2rem', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >+</button>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(232,240,232,0.4)', marginBottom: 2 }}>Estimated Fare</div>
                      <div style={{ fontFamily: 'Syne', fontSize: '1.6rem', fontWeight: 700, color: '#e8b84b' }}>₱{fare}</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBook}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: selectedRoute && selectedTime
                      ? 'linear-gradient(135deg, #2d5a3d, #4a8c5c)'
                      : 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(123,196,122,0.3)',
                    borderRadius: 12,
                    color: selectedRoute && selectedTime ? '#a8e6a3' : 'rgba(232,240,232,0.3)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: selectedRoute && selectedTime ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    transition: 'all 0.2s',
                  }}
                >
                  <CreditCard size={16} />
                  Confirm Booking
                  <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: 'center', padding: '2rem 0' }}
              >
                <div style={{
                  width: 72, height: 72,
                  background: 'rgba(123,196,122,0.15)',
                  border: '2px solid rgba(123,196,122,0.5)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2rem',
                }}>✓</div>
                <h3 style={{ fontFamily: 'Syne', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Booking Confirmed!
                </h3>
                <p style={{ color: 'rgba(232,240,232,0.6)', marginBottom: '0.5rem' }}>{selectedRoute}</p>
                <p style={{ color: '#7bc47a', fontWeight: 600, marginBottom: '0.5rem' }}>{selectedTime}</p>
                <p style={{ color: '#e8b84b', fontFamily: 'Syne', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>₱{fare}</p>
                <p style={{ color: 'rgba(232,240,232,0.5)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  Your booking reference: <strong style={{ color: '#7bc47a' }}>EJ-{Math.random().toString(36).substr(2,6).toUpperCase()}</strong>
                </p>
                <button
                  onClick={() => { setBooked(false); setSelectedRoute(''); setSelectedTime(''); setPassengers(1) }}
                  style={{
                    padding: '10px 24px',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 999,
                    color: 'rgba(232,240,232,0.7)',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                  }}
                >
                  Book Another
                </button>
              </motion.div>
            )}
          </div>

          {/* Info panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 14,
                  padding: '1.2rem',
                }}
              >
                <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Syne', fontWeight: 600, marginBottom: '0.3rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(232,240,232,0.5)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
