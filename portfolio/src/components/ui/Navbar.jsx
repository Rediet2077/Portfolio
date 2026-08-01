import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command } from 'lucide-react'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Services',   href: '#services'   },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar({ onCmdOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1))
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) }),
      { threshold: 0.4 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const goto = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 24 }}
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s',
        }}
      >
        <div className="container-custom flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => goto('#hero')} className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #FF8A3D, #F57625)' }}
            >
              RS
            </div>
            <span className="font-semibold text-[15px]" style={{ color: '#F5F5F5' }}>
              Rediet<span className="gradient-text"> Sharew</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button
                key={l.href}
                onClick={() => goto(l.href)}
                className={`nav-link ${active === l.href ? 'active' : ''}`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCmdOpen}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium glass-sm"
              style={{ color: '#555' }}
            >
              <Command size={12} /><span>K</span>
            </button>
            <button
              onClick={() => goto('#contact')}
              className="btn-primary hidden md:inline-flex py-2.5 px-5 text-sm"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden glass-sm p-2 transition-colors"
              style={{ color: '#888' }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.nav
              className="absolute top-16 inset-x-4 card rounded-2xl p-4 flex flex-col gap-1"
              initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -16, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            >
              {links.map(l => (
                <button key={l.href} onClick={() => goto(l.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-white/5"
                  style={{ color: '#888' }}
                >
                  {l.label}
                </button>
              ))}
              <div className="pt-2 mt-1" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <button onClick={() => goto('#contact')} className="btn-primary w-full justify-center py-2.5 text-sm">
                  Let's Talk
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
