import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bus, Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Book Ride', href: '#book' },
  { label: 'Track', href: '#track' },
  { label: 'Routes', href: '#routes' },
  { label: 'About', href: '#about' },
]

export default function Navbar() { 
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 1.5rem',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled || open ? 'rgba(8,22,14,0.95)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 34, height: 34,
            background: 'linear-gradient(135deg, #2d5a3d, #7bc47a)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Bus size={18} color="#fff" />
          </div>
          <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
            E-Jeepney <span style={{ color: '#7bc47a' }}>Davao city</span>
          </span>
        </div>

        {/* Desktop links (Hidden on mobile) */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} style={navLinkStyle}>{link.label}</a>
            ))}
            <a href="#book" style={ctaStyle}><Zap size={14} /> Book Now</a>
          </div>
        )}

        {/* Mobile toggle (Visible only on mobile) */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: 'none',
              border: 'none',
              color: '#e8f0e8',
              cursor: 'pointer',
              zIndex: 110,
            }}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: '#08160e',
              zIndex: 90,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} style={{...ctaStyle, padding: '15px 40px', fontSize: '1.1rem'}}>
              <Zap size={20} /> Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Styles for cleaner code
const navLinkStyle: React.CSSProperties = {
  color: 'rgba(232,240,232,0.7)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  letterSpacing: '0.01em',
}

const ctaStyle: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 6,
  padding: '8px 20px',
  background: 'linear-gradient(135deg, #2d5a3d, #4a8c5c)',
  borderRadius: 999,
  color: '#a8e6a3',
  textDecoration: 'none',
  fontSize: '0.88rem',
  fontWeight: 600,
  border: '1px solid rgba(123,196,122,0.3)',
}