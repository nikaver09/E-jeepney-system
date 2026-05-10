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
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(6rem, 15vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(2rem, 5vw, 4rem)',
        gap: 'clamp(2rem, 5vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
        background: '#071a00ff',
        color: '#fff'
      }}
    >
      {/* Background gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(45,90,61,0.25) 0%, transparent 70%)',
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
          background: 'linear-gradient(transparent, #0a0a0a)',
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
          backgroundSize: 'clamp(40px, 8vw, 60px) clamp(40px, 8vw, 60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Left: Text */}
      <div style={{ 
        position: 'relative', 
        zIndex: 3, 
        flex: '1 1 min(100%, 500px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
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
          <br className="mobile-break" style={{ display: 'none' }} />
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
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            lineHeight: 1.6,
            color: 'rgba(232,240,232,0.65)',
            maxWidth: '480px',
            marginBottom: 'clamp(2rem, 5vw, 2.5rem)',
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
              justifyContent: 'center',
              gap: 10,
              padding: '16px 32px', // Larger touch target for mobile
              background: 'linear-gradient(135deg, #2d5a3d, #4a8c5c)',
              borderRadius: 999,
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              border: '1px solid rgba(123,196,122,0.4)',
              transition: 'all 0.25s',
              boxShadow: '0 4px 24px rgba(74,140,92,0.3)',
              flex: '1 1 auto', // Allows buttons to stretch on very small screens
              textAlign: 'center'
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
            <ArrowRight size={18} />
          </a>

          <a
            href="#track"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              padding: '16px 32px', // Larger touch target
              background: 'rgba(255,255,255,0.03)', // Slight background for contrast on mobile
              borderRadius: 999,
              color: '#e8f0e8',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              border: '1px solid rgba(255,255,255,0.12)',
              transition: 'all 0.25s',
              flex: '1 1 auto',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(123,196,122,0.4)'
              e.currentTarget.style.color = '#7bc47a'
              e.currentTarget.style.background = 'transparent'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.color = '#e8f0e8'
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            }}
          >
            <MapPin size={18} />
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
          flex: '1 1 min(100%, 450px)', // Takes full width on mobile, shares space on desktop
          height: 'clamp(350px, 60vh, 70vh)', // Shorter on mobile so it doesn't push content way off screen
          position: 'relative',
          zIndex: 3,
          width: '100%',
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
                fontSize: '0.95rem',
                fontFamily: 'Syne, sans-serif'
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
            bottom: 'clamp(5%, 8vh, 10%)',
            right: 'clamp(5%, 5vw, 10%)',
            background: 'rgba(13,35,20,0.85)',
            border: '1px solid rgba(123,196,122,0.3)',
            borderRadius: 14,
            padding: '12px 18px',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              color: '#7bc47a',
              fontWeight: 700,
              letterSpacing: '0.08em',
              marginBottom: '2px'
            }}
          >
            ELECTRIC
          </div>

          <div
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#fff'
            }}
          >
            Zero Emissions
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}