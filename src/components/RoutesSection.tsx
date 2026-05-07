import { motion } from 'framer-motion'
import { Clock, MapPin, ArrowRight, Zap } from 'lucide-react'

const routes = [
  {
    id: 'R01',
    from: 'Davao City Hall',
    to: 'Toril Public Market',
    duration: '45 min',
    distance: '18 km',
    stops: 12,
    fare: '₱13',
    frequency: 'Every 8 min',
    color: '#4a8c5c',
  },
  {
    id: 'R02',
    from: 'SM Lanang Premier',
    to: 'Buhangin Terminal',
    duration: '22 min',
    distance: '8 km',
    stops: 7,
    fare: '₱13',
    frequency: 'Every 5 min',
    color: '#7bc47a',
  },
  {
    id: 'R03',
    from: 'Agdao Market',
    to: 'Matina Crossing',
    duration: '35 min',
    distance: '13 km',
    stops: 9,
    fare: '₱13',
    frequency: 'Every 10 min',
    color: '#e8b84b',
  },
  {
    id: 'R04',
    from: 'Calinan',
    to: 'Davao City Center',
    duration: '55 min',
    distance: '24 km',
    stops: 15,
    fare: '₱13',
    frequency: 'Every 15 min',
    color: '#a8e6a3',
  },
  {
    id: 'R05',
    from: 'Tibungco',
    to: 'Bankerohan Market',
    duration: '40 min',
    distance: '16 km',
    stops: 11,
    fare: '₱13',
    frequency: 'Every 12 min',
    color: '#6bb5d6',
  },
  {
    id: 'R06',
    from: 'Mintal',
    to: 'Ulas Junction',
    duration: '30 min',
    distance: '11 km',
    stops: 8,
    fare: '₱13',
    frequency: 'Every 7 min',
    color: '#d4a8e6',
  },
]

export default function RoutesSection() {
  return (
    <section id="routes" style={{ padding: '8rem 4rem', position: 'relative' }}>
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
            background: 'rgba(107,181,214,0.1)', border: '1px solid rgba(107,181,214,0.25)',
            borderRadius: 999, padding: '5px 14px',
            fontSize: '0.75rem', fontWeight: 600, color: '#6bb5d6',
            letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem',
          }}>
            <MapPin size={12} />
            Service Routes
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Routes Across{' '}
            <span style={{ background: 'linear-gradient(135deg, #6bb5d6, #a8d8ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Davao City
            </span>
          </h2>
          <p style={{ color: 'rgba(232,240,232,0.5)', marginTop: '1rem', fontSize: '1rem', fontWeight: 300 }}>
            24+ routes connecting communities across the metro — clean, affordable, and on time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
          {routes.map((route, i) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 18,
                padding: '1.5rem',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${route.color}, transparent)`,
                borderRadius: '18px 18px 0 0',
              }} />

              {/* Route ID */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: `${route.color}15`,
                border: `1px solid ${route.color}30`,
                borderRadius: 6, padding: '3px 10px',
                fontSize: '0.7rem', fontWeight: 700, color: route.color,
                marginBottom: '1rem', letterSpacing: '0.04em',
              }}>
                <Zap size={10} />
                {route.id}
              </div>

              {/* From → To */}
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>{route.from}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(232,240,232,0.35)', marginBottom: '0.4rem' }}>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                  <ArrowRight size={12} />
                  <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{route.to}</div>
              </div>

              {/* Stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                {[
                  { label: 'Duration', value: route.duration, icon: <Clock size={11} /> },
                  { label: 'Distance', value: route.distance, icon: <MapPin size={11} /> },
                  { label: 'Stops', value: `${route.stops} stops`, icon: null },
                  { label: 'Frequency', value: route.frequency, icon: null },
                ].map((stat, j) => (
                  <div key={j} style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 8, padding: '0.6rem 0.8rem',
                  }}>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(232,240,232,0.35)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 3, display: 'flex', alignItems: 'center', gap: 4 }}>
                      {stat.icon}
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Fare */}
              <div style={{
                marginTop: '1rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                <span style={{ fontSize: '0.78rem', color: 'rgba(232,240,232,0.4)' }}>Base Fare</span>
                <span style={{ fontFamily: 'Syne', fontSize: '1.2rem', fontWeight: 700, color: '#e8b84b' }}>{route.fare}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
