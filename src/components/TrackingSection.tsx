import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bus, Navigation, Clock, Battery, Wifi } from 'lucide-react'

interface Jeepney {
  id: string
  route: string
  x: number
  y: number
  eta: number
  battery: number
  passengers: number
  capacity: number
}

const initialJeepneys: Jeepney[] = [
  { id: 'EJ-001', route: 'Davao — Toril', x: 20, y: 35, eta: 3, battery: 87, passengers: 8, capacity: 16 },
  { id: 'EJ-002', route: 'Buhangin — SM', x: 55, y: 60, eta: 7, battery: 65, passengers: 14, capacity: 16 },
  { id: 'EJ-003', route: 'Agdao — Matina', x: 75, y: 25, eta: 12, battery: 92, passengers: 5, capacity: 16 },
  { id: 'EJ-004', route: 'Calinan — City', x: 40, y: 75, eta: 18, battery: 45, passengers: 11, capacity: 16 },
]

const stops = [
  { name: 'Davao Central', x: 50, y: 50 },
  { name: 'Toril Terminal', x: 15, y: 80 },
  { name: 'SM Lanang', x: 80, y: 20 },
  { name: 'Calinan', x: 20, y: 20 },
  { name: 'Mintal', x: 70, y: 75 },
]

export default function TrackingSection() {
  const [jeepneys, setJeepneys] = useState(initialJeepneys)
  const [selected, setSelected] = useState<Jeepney | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setJeepneys(prev => prev.map(j => ({
        ...j,
        x: Math.max(5, Math.min(90, j.x + (Math.random() - 0.5) * 3)),
        y: Math.max(5, Math.min(90, j.y + (Math.random() - 0.5) * 3)),
        eta: Math.max(1, j.eta + (Math.random() > 0.6 ? -1 : 0)),
      })))
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="track" style={{ padding: '8rem 4rem', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(45,90,61,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 1100, margin: '0 auto' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(232,184,75,0.1)', border: '1px solid rgba(232,184,75,0.25)',
            borderRadius: 999, padding: '5px 14px',
            fontSize: '0.75rem', fontWeight: 600, color: '#e8b84b',
            letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#e8b84b', display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
            Live Tracking
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Know Where Your{' '}
            <span style={{ background: 'linear-gradient(135deg, #e8b84b, #f0d080)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Jeepney Is
            </span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem', alignItems: 'start' }}>
          {/* Map */}
          <div style={{
            position: 'relative',
            height: 480,
            background: '#0a1f0f',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            overflow: 'hidden',
          }}>
            {/* Grid lines */}
            <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map(v => (
                <g key={v}>
                  <line x1={`${v}%`} y1="0" x2={`${v}%`} y2="100%" stroke="#2d5a3d" strokeWidth="1" />
                  <line x1="0" y1={`${v}%`} x2="100%" y2={`${v}%`} stroke="#2d5a3d" strokeWidth="1" />
                </g>
              ))}
            </svg>

            {/* Road paths */}
            <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
              <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="#1a3d26" strokeWidth="8" strokeLinecap="round" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#1a3d26" strokeWidth="8" strokeLinecap="round" />
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#1a3d26" strokeWidth="6" strokeLinecap="round" />
              <line x1="50%" y1="50%" x2="70%" y2="75%" stroke="#1a3d26" strokeWidth="6" strokeLinecap="round" />
              <line x1="15%" y1="80%" x2="70%" y2="75%" stroke="#1a3d26" strokeWidth="5" strokeLinecap="round" />
              <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="#1a3d26" strokeWidth="5" strokeLinecap="round" />
            </svg>

            {/* Stops */}
            {stops.map((stop, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${stop.x}%`, top: `${stop.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: '#4a8c5c',
                  border: '2px solid rgba(123,196,122,0.5)',
                  boxShadow: '0 0 8px rgba(74,140,92,0.5)',
                }} />
                <div style={{
                  position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
                  fontSize: '0.62rem', color: 'rgba(232,240,232,0.5)',
                  whiteSpace: 'nowrap', background: 'rgba(8,22,14,0.8)',
                  padding: '2px 6px', borderRadius: 4,
                }}>
                  {stop.name}
                </div>
              </div>
            ))}

            {/* Jeepneys */}
            {jeepneys.map((j) => (
              <motion.div
                key={j.id}
                animate={{ left: `${j.x}%`, top: `${j.y}%` }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                style={{ position: 'absolute', transform: 'translate(-50%, -50%)', cursor: 'pointer', zIndex: 10 }}
                onClick={() => setSelected(selected?.id === j.id ? null : j)}
              >
                {/* Pulse ring */}
                <motion.div
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{
                    position: 'absolute', inset: -4,
                    borderRadius: '50%',
                    border: `2px solid ${selected?.id === j.id ? '#e8b84b' : '#7bc47a'}`,
                  }}
                />
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: selected?.id === j.id ? '#e8b84b' : 'linear-gradient(135deg, #2d5a3d, #4a8c5c)',
                  border: `2px solid ${selected?.id === j.id ? '#f0d080' : 'rgba(123,196,122,0.6)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 12px ${selected?.id === j.id ? 'rgba(232,184,75,0.5)' : 'rgba(74,140,92,0.4)'}`,
                  transition: 'all 0.3s',
                }}>
                  <Bus size={14} color={selected?.id === j.id ? '#0f2b1a' : '#a8e6a3'} />
                </div>
                <div style={{
                  position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)',
                  fontSize: '0.6rem', color: '#7bc47a', whiteSpace: 'nowrap',
                  background: 'rgba(8,22,14,0.85)', padding: '2px 5px', borderRadius: 4, fontWeight: 600,
                }}>
                  {j.id}
                </div>
              </motion.div>
            ))}

            {/* Corner label */}
            <div style={{
              position: 'absolute', top: 16, left: 16,
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(8,22,14,0.85)', padding: '6px 12px', borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <Wifi size={12} color="#7bc47a" />
              <span style={{ fontSize: '0.75rem', color: '#7bc47a', fontWeight: 600 }}>LIVE</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(232,240,232,0.5)' }}>Davao City</span>
            </div>
          </div>

          {/* Fleet list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'rgba(232,240,232,0.4)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Active Fleet — {jeepneys.length} jeepneys
            </div>
            {jeepneys.map((j) => (
              <motion.div
                key={j.id}
                onClick={() => setSelected(selected?.id === j.id ? null : j)}
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: '1rem 1.2rem',
                  background: selected?.id === j.id ? 'rgba(232,184,75,0.08)' : 'rgba(255,255,255,0.025)',
                  border: `1px solid ${selected?.id === j.id ? 'rgba(232,184,75,0.3)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: 14,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 7,
                      background: 'rgba(45,90,61,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Bus size={13} color="#7bc47a" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.85rem' }}>{j.id}</div>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(232,240,232,0.45)' }}>{j.route}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#e8b84b', fontSize: '0.8rem', fontWeight: 600 }}>
                      <Clock size={11} />
                      {j.eta} min
                    </div>
                  </div>
                </div>

                {/* Battery & capacity */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'rgba(232,240,232,0.4)', marginBottom: 3 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Battery size={10} />Battery</span>
                      <span>{j.battery}%</span>
                    </div>
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 999 }}>
                      <div style={{ width: `${j.battery}%`, height: '100%', background: j.battery > 60 ? '#7bc47a' : j.battery > 30 ? '#e8b84b' : '#e85c4a', borderRadius: 999, transition: 'width 1s' }} />
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'rgba(232,240,232,0.4)', marginBottom: 3 }}>
                      <span>Capacity</span>
                      <span>{j.passengers}/{j.capacity}</span>
                    </div>
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 999 }}>
                      <div style={{ width: `${(j.passengers / j.capacity) * 100}%`, height: '100%', background: '#4a8c5c', borderRadius: 999 }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '1rem', marginTop: '0.25rem',
                  background: 'rgba(232,184,75,0.06)',
                  border: '1px solid rgba(232,184,75,0.2)',
                  borderRadius: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: '0.5rem' }}>
                  <Navigation size={13} color="#e8b84b" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#e8b84b' }}>Tracking {selected.id}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(232,240,232,0.6)' }}>
                  Estimated arrival in <strong style={{ color: '#e8b84b' }}>{selected.eta} minutes</strong>. {selected.capacity - selected.passengers} seats available.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
