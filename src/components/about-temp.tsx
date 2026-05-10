import { motion } from 'framer-motion'
import { Bus, Mail, BookOpen } from 'lucide-react'

const principles = [
  {
    num: '01',
    title: 'User-Centered Design',
    desc: 'Every feature was informed by real commuter interviews and usability testing.',
  },
  {
    num: '02',
    title: 'Accessibility First',
    desc: 'Designed for seniors, PWDs, and first-time smartphone users alike.',
  },
  {
    num: '03',
    title: 'Cognitive Load Reduction',
    desc: 'Simple flows, minimal steps, and clear visual hierarchy throughout.',
  },
  {
    num: '04',
    title: 'Iterative Prototyping',
    desc: 'From paper sketches to high-fidelity wireframes — tested at every stage.',
  },
]

export default function AboutSection() {
  return (
    <div style={{ background: '#071a00ff', color: '#fff', overflowX: 'hidden' }}>
      <section
        id="about"
        style={{
          // Dynamically scales padding: smaller on mobile, larger on desktop
          padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
          position: 'relative',
        }}
      >
        {/* Background Glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(45,90,61,0.08) 0%, transparent 80%)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ maxWidth: 1100, margin: '0 auto' }}
        >
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4rem)' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(212,168,230,0.1)',
                border: '1px solid rgba(212,168,230,0.2)',
                borderRadius: 999,
                padding: '6px 16px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#d4a8e6',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}
            >
              <BookOpen size={14} />
              HCI 102 Project
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              About This{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #d4a8e6, #f0d4ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Project
              </span>
            </h2>

            <p
              style={{
                color: 'rgba(232,240,232,0.65)',
                marginTop: '1.2rem',
                maxWidth: 600,
                margin: '1.2rem auto 0',
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              This project was developed for HCI 102 (Human-Computer Interaction)
              as a prefinal paper for Academic Year 2025–2026. It demonstrates
              user-centered design principles applied to a real-world commuting
              problem in the Philippines.
            </p>
          </div>

          {/* HCI Principles Grid */}
          <div
            style={{
              display: 'grid',
              // Magic CSS that forces 1 column on mobile and 2 on desktop automatically
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(1rem, 3vw, 1.5rem)',
            }}
          >
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  display: 'flex',
                  gap: '1.2rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 20, // Slightly softer corners for modern mobile feel
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: 'clamp(1.75rem, 4vw, 2rem)',
                    fontWeight: 800,
                    color: 'rgba(123,196,122,0.25)',
                    lineHeight: 1,
                    flexShrink: 0,
                    paddingTop: 4,
                  }}
                >
                  {p.num}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      marginBottom: '0.5rem',
                      color: '#e8f0e8',
                    }}
                  >
                    {p.title}
                  </div>

                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(232,240,232,0.55)',
                      lineHeight: 1.6,
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: 'clamp(2rem, 6vw, 3rem) clamp(1.5rem, 5vw, 4rem)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: 'linear-gradient(135deg, #2d5a3d, #7bc47a)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Bus size={18} color="#fff" />
          </div>

          <div>
            <div
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#fff',
              }}
            >
              E-Jeepney Davao city
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                color: 'rgba(232,240,232,0.4)',
                marginTop: 2,
              }}
            >
              HCI 102 Project · AY 2025–2026
            </div>
          </div>
        </div>

        {/* This text centers and wraps elegantly on smaller screens */}
        <div
          style={{
            fontSize: '0.85rem',
            color: 'rgba(232,240,232,0.4)',
            maxWidth: '300px',
            textAlign: 'center',
            flexGrow: 1,
            margin: '0 auto',
          }}
        >
          A user-centered design project for accessible electric jeepney
          commuting in the Philippines.
        </div>

        <div style={{ display: 'flex', margin: '0 auto' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 10,
              padding: '10px 18px', // Larger touch target for mobile
              color: 'rgba(232,240,232,0.8)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 500,
              transition: 'all 0.2s',
              width: '100%', // Allows button to stretch if needed
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#7bc47a'
              e.currentTarget.style.borderColor = 'rgba(123,196,122,0.4)'
              e.currentTarget.style.background = 'rgba(123,196,122,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(232,240,232,0.8)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            }}
          >
            <Mail size={16} />
            Contact
          </button>
        </div>
      </footer>
    </div>
  )
}