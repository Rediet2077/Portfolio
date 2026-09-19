import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, Mail, MousePointer2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socials = [
  { Icon: FaGithub,   href: 'https://github.com/Rediet2077',         label: 'GitHub'   },
  { Icon: FaLinkedin, href: 'https://linkedin.com/in/rediet-sharew', label: 'LinkedIn' },
  { Icon: Mail,       href: 'mailto:redietsharew231@gmail.com',             label: 'Email', isLucide: true },
]

export default function Hero() {
  const glowRef = useRef(null)
  const [particles] = useState(() =>
    Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      dur:  Math.random() * 14 + 8,
      del:  Math.random() * 8,
      opacity: Math.random() * 0.35 + 0.05,
    }))
  )

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return
      glowRef.current.style.left = `${e.clientX}px`
      glowRef.current.style.top  = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(255,138,61,0.06) 0%, transparent 65%)',
          transform: 'translate(-50%,-50%)',
          zIndex: 1,
        }}
      />

      {/* Background blobs */}
      <div className="shape w-[500px] h-[500px] animate-blob"
        style={{ background: '#FF8A3D', top: '-10%', left: '-10%', opacity: 0.06 }} />
      <div className="shape w-[400px] h-[400px] animate-blob-delay"
        style={{ background: '#F57625', bottom: '-5%', right: '-10%', opacity: 0.05 }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`, bottom: '-10px',
              width: p.size, height: p.size,
              background: '#FF8A3D',
              opacity: p.opacity,
            }}
            animate={{ y: -1200, opacity: [0, p.opacity, 0] }}
            transition={{ duration: p.dur, delay: p.del, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,138,61,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,138,61,0.025) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="container-custom relative py-32 pt-36" style={{ zIndex: 5 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left (Text & CTAs) ── */}
          <div className="order-last lg:order-first text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-black leading-tight mb-3 text-center lg:text-left"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.8rem)', color: '#F5F5F5', letterSpacing: '-0.02em' }}
            >
              Hi, I'm
              <br />
              <span className="gradient-text">Rediet Sharew</span>
            </motion.h1>

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
              style={{ fontSize: 18, color: '#888', fontWeight: 500 }}
            >
              <span style={{ color: '#FF8A3D', fontWeight: 600 }}>
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer', 2500,
                    'React Engineer',       2000,
                    'Node.js Developer',    2000,
                    'Python Developer',     2000,
                    'Problem Solver',       2000,
                  ]}
                  repeat={Infinity}
                  speed={55}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
              style={{ color: '#555', fontSize: 15 }}
            >
              4th-year Software Engineering student at Debre Berhan University.
              Building fast, beautiful, and scalable web applications with modern technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <a href="/Rediet_Sharew_CV.pdf" download className="btn-primary ripple-btn">
                <Download size={16} /> Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass-sm transition-all"
                  style={{ color: '#555' }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
              <div className="hidden sm:block h-px w-8 ml-1" style={{ background: 'rgba(255,255,255,0.07)' }} />
              <span style={{ color: '#333', fontSize: 13 }}>redietsharew231@gmail.com</span>
            </motion.div>
          </div>

          {/* ── Right — Profile photo (On top on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 120 }}
            className="flex justify-center items-center order-first lg:order-last py-4 lg:py-0"
          >
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] max-w-[80vw] max-h-[80vw] aspect-square transition-all duration-300">
              {/* Outer glow */}
              <div className="profile-glow" />

              {/* Spinning ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: -3, zIndex: 0,
                  background: 'conic-gradient(#FF8A3D, #F57625 30%, rgba(255,138,61,0.05) 60%, #FF8A3D)',
                  borderRadius: '50%',
                  animation: 'spin 8s linear infinite',
                }}
              />

              {/* Second static ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: 6,
                  border: '1px solid rgba(255,138,61,0.15)',
                  borderRadius: '50%',
                  zIndex: 1,
                }}
              />

              {/* Photo circle */}
              <div
                className="absolute overflow-hidden rounded-full"
                style={{
                  inset: 4,
                  zIndex: 2,
                  border: '2px solid rgba(255,138,61,0.2)',
                }}
              >
                <img
                  src="/profile.png"
                  alt="Rediet Sharew"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'brightness(0.92) contrast(1.05)' }}
                  onError={(e) => {
                    // Fallback if image missing
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback */}
                <div
                  className="w-full h-full items-center justify-center flex-col"
                  style={{
                    display: 'none',
                    background: 'linear-gradient(135deg, #1a1a1a, #111)',
                  }}
                >
                  <div className="font-bold text-orange-500 text-3xl mb-1">RS</div>
                  <p style={{ color: '#FF8A3D', fontSize: 13, fontWeight: 600 }}>Rediet Sharew</p>
                </div>
              </div>

              {/* Floating stat — top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute glass-sm px-3.5 py-2.5 sm:px-4 sm:py-3"
                style={{ top: 10, right: -15, whiteSpace: 'nowrap', zIndex: 5 }}
              >
                <p style={{ color: '#FF8A3D', fontSize: 18, fontWeight: 800, lineHeight: 1 }}>12+</p>
                <p style={{ color: '#555', fontSize: 10 }}>Projects Done</p>
              </motion.div>

              {/* Floating stat — bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
                className="absolute glass-sm px-3.5 py-2.5 sm:px-4 sm:py-3"
                style={{ bottom: 20, left: -15, whiteSpace: 'nowrap', zIndex: 5 }}
              >
                <p style={{ color: '#FF8A3D', fontSize: 18, fontWeight: 800, lineHeight: 1 }}>25+</p>
                <p style={{ color: '#555', fontSize: 10 }}>Technologies</p>
              </motion.div>

              {/* Floating stat — bottom right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, delay: 0.8, repeat: Infinity }}
                className="absolute glass-sm px-3.5 py-2.5 sm:px-4 sm:py-3"
                style={{ bottom: -12, right: -10, whiteSpace: 'nowrap', zIndex: 5 }}
              >
                <p style={{ color: '#22c55e', fontSize: 18, fontWeight: 800, lineHeight: 1 }}>3+</p>
                <p style={{ color: '#555', fontSize: 10 }}>Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-16"
          style={{ color: '#333' }}
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <MousePointer2 size={14} />
          </motion.div>
          <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
