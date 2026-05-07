import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import JeepneyScene from './JeepneyScene'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '0 4rem',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(45,90,61,0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(transparent, #08160e)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(45,90,61,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,90,61,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Left: Text */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          style={{
            fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}
        >
          E-Jeepney{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #7bc47a, #a8e6a3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Booking
          </span>{' '}
          & Tracking{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #e8b84b, #f0d080)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            System
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'rgba(232,240,232,0.65)',
            maxWidth: '480px',
            marginBottom: '2.5rem',
            fontWeight: 300,
          }}
        >
          A user-centered mobile app for accessible and efficient electric
          jeepney commuting in the Philippines — designed with
          human-computer interaction principles.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #2d5a3d, #4a8c5c)',
              borderRadius: 999,
              color: '#a8e6a3',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: '1px solid rgba(123,196,122,0.4)',
              transition: 'all 0.25s',
              boxShadow: '0 4px 24px rgba(74,140,92,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(74,140,92,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow =
                '0 4px 24px rgba(74,140,92,0.3)'
            }}
          >
            Book a Ride
            <ArrowRight size={16} />
          </a>

          <a
            href="#track"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              background: 'transparent',
              borderRadius: 999,
              color: '#e8f0e8',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              border: '1px solid rgba(255,255,255,0.12)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                'rgba(123,196,122,0.4)'
              e.currentTarget.style.color = '#7bc47a'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                'rgba(255,255,255,0.12)'
              e.currentTarget.style.color = '#e8f0e8'
            }}
          >
            <MapPin size={16} />
            Live Tracking
          </a>
        </motion.div>
      </div>

      {/* Right: 3D Scene */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        style={{
          height: '70vh',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <Suspense
          fallback={
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4a8c5c',
                fontSize: '0.9rem',
              }}
            >
              Loading 3D scene...
            </div>
          }
        >
          <JeepneyScene />
        </Suspense>

        {/* Floating label */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            background: 'rgba(13,35,20,0.9)',
            border: '1px solid rgba(123,196,122,0.3)',
            borderRadius: 12,
            padding: '10px 16px',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div
            style={{
              fontSize: '0.72rem',
              color: '#7bc47a',
              fontWeight: 600,
              letterSpacing: '0.06em',
            }}
          >
            ELECTRIC
          </div>

          <div
            style={{
              fontSize: '0.88rem',
              fontWeight: 600,
            }}
          >
            Zero Emissions
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 