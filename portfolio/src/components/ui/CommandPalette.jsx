import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, User, Code2, Briefcase, Mail, Download } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const cmds = [
  { id: 'about',    icon: User,      label: 'Go to About',        section: '#about'      },
  { id: 'skills',   icon: Code2,     label: 'Go to Skills',       section: '#skills'     },
  { id: 'projects', icon: Briefcase, label: 'Go to Projects',     section: '#projects'   },
  { id: 'contact',  icon: Mail,      label: 'Go to Contact',      section: '#contact'    },
  { id: 'github',   icon: FaGithub,  label: 'Open GitHub Profile', url: 'https://github.com/Rediet2077' },
  { id: 'cv',       icon: Download,  label: 'Download CV',        url: '/Rediet_Sharew_CV.pdf' },
]

export default function CommandPalette({ open, onClose }) {
  const [q,   setQ]   = useState('')
  const [sel, setSel] = useState(0)
  const ref = useRef(null)

  const filtered = cmds.filter(c => c.label.toLowerCase().includes(q.toLowerCase()))

  useEffect(() => {
    if (open) { setTimeout(() => ref.current?.focus(), 60); setQ(''); setSel(0) }
  }, [open])

  useEffect(() => setSel(0), [q])

  const run = (c) => {
    if (c.section) document.querySelector(c.section)?.scrollIntoView({ behavior: 'smooth' })
    if (c.url) window.open(c.url, '_blank')
    onClose()
  }

  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => Math.min(s + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSel(s => Math.max(s - 1, 0)) }
    if (e.key === 'Enter')     { if (filtered[sel]) run(filtered[sel]) }
    if (e.key === 'Escape')    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9990] flex items-start justify-center pt-28 px-4"
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-xl rounded-2xl overflow-hidden"
            style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 80px rgba(0,0,0,0.8)' }}
            initial={{ scale: 0.94, y: -16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: -16, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 26 }}
            onClick={e => e.stopPropagation()} onKeyDown={onKey}
          >
            <div className="flex items-center gap-3 px-5 py-4"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <Search size={15} style={{ color: '#444' }} />
              <input ref={ref} value={q} onChange={e => setQ(e.target.value)}
                placeholder="Search commands…"
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-700 text-sm" />
              <kbd className="hidden sm:block px-2 py-0.5 rounded-md text-xs"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#444' }}>
                ESC
              </kbd>
            </div>

            <div className="p-2 max-h-64 overflow-y-auto">
              {filtered.map((c, i) => {
                const Icon = c.icon
                return (
                  <button key={c.id} onClick={() => run(c)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors text-left"
                    style={{
                      background: i === sel ? 'rgba(255,138,61,0.1)' : 'transparent',
                      color: i === sel ? '#FF8A3D' : '#555',
                    }}>
                    <Icon size={14} />
                    <span>{c.label}</span>
                    {i === sel && <ArrowRight size={12} className="ml-auto opacity-50" />}
                  </button>
                )
              })}
              {filtered.length === 0 && (
                <p className="text-center py-8 text-sm" style={{ color: '#333' }}>No results</p>
              )}
            </div>

            <div className="px-5 py-2.5 flex gap-4 text-xs"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#2a2a2a' }}>
              <span>↑↓ navigate</span><span>↵ open</span><span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
