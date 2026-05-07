import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
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
        padding: '0 2rem',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,22,14,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: 38, height: 38,
          background: 'linear-gradient(135deg, #2d5a3d, #7bc47a)',
          borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Bus size={20} color="#fff" />
        </div>
        <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
          E-Jeepney
          <span style={{ color: '#7bc47a', marginLeft: 4 }}>PH</span>
        </span>
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: 'rgba(232,240,232,0.7)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              transition: 'color 0.2s',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#7bc47a')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,240,232,0.7)')}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#book"
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 20px',
            background: 'linear-gradient(135deg, #2d5a3d, #4a8c5c)',
            borderRadius: 999,
            color: '#a8e6a3',
            textDecoration: 'none',
            fontSize: '0.88rem',
            fontWeight: 600,
            border: '1px solid rgba(123,196,122,0.3)',
            letterSpacing: '0.02em',
            transition: 'all 0.2s',
          }}
        >
          <Zap size={14} />
          Book Now
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#e8f0e8',
          cursor: 'pointer',
        }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </motion.nav>
  )
}
