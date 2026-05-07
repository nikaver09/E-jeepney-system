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
    <>
      <section
        id="about"
        style={{
          padding: '8rem 4rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(45,90,61,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: 1100, margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(212,168,230,0.1)',
                border: '1px solid rgba(212,168,230,0.2)',
                borderRadius: 999,
                padding: '5px 14px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#d4a8e6',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}
            >
              <BookOpen size={12} />
              HCI 102 Project
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
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
                color: 'rgba(232,240,232,0.55)',
                marginTop: '1rem',
                maxWidth: 600,
                margin: '1rem auto 0',
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              This project was developed for HCI 102 (Human-Computer Interaction)
              as a prefinal paper for Academic Year 2025–2026. It demonstrates
              user-centered design principles applied to a real-world commuting
              problem in the Philippines.
            </p>
          </div>

          {/* HCI Principles */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}
          >
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16,
                  padding: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Syne',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'rgba(123,196,122,0.2)',
                    lineHeight: 1,
                    flexShrink: 0,
                    paddingTop: 2,
                  }}
                >
                  {p.num}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'Syne',
                      fontWeight: 700,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {p.title}
                  </div>

                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(232,240,232,0.55)',
                      lineHeight: 1.65,
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
          padding: '3rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: 'linear-gradient(135deg, #2d5a3d, #7bc47a)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Bus size={16} color="#fff" />
          </div>

          <div>
            <div
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              E-Jeepney PH
            </div>

            <div
              style={{
                fontSize: '0.7rem',
                color: 'rgba(232,240,232,0.35)',
              }}
            >
              HCI 102 Project · AY 2025–2026
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: '0.8rem',
            color: 'rgba(232,240,232,0.35)',
          }}
        >
          A user-centered design project for accessible electric jeepney
          commuting in the Philippines.
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 8,
              padding: '7px 14px',
              color: 'rgba(232,240,232,0.5)',
              cursor: 'pointer',
              fontSize: '0.8rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#7bc47a'
              e.currentTarget.style.borderColor =
                'rgba(123,196,122,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                'rgba(232,240,232,0.5)'
              e.currentTarget.style.borderColor =
                'rgba(255,255,255,0.08)'
            }}
          >
            <Mail size={16} />
            Contact
          </button>
        </div>
      </footer>
    </>
  )
}