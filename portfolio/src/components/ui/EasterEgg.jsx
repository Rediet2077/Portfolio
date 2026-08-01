import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X } from 'lucide-react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

const RESPONSES = {
  help: `Commands: help · about · skills · projects · contact · clear · exit`,
  about: `Rediet Sharew — Full-Stack Developer\nDebre Berhan University, 4th Year SE\nLocation: Debre Berhan, Ethiopia`,
  skills: `React · Next.js · TypeScript · Node.js\nPython · Django · FastAPI · PostgreSQL\nFlutter · Docker · Git`,
  projects: `1. Campus Safety System\n2. E-Commerce Recommendation\n3. Bakery Management System\n4. Library Management System\n5. Collaborative Editor`,
  contact: `Email: redietsharew231@gmail.com\nGitHub: github.com/Rediet2077\nLinkedIn: linkedin.com/in/rediet-sharew`,
}

export default function EasterEgg() {
  const [open,     setOpen]     = useState(false)
  const [lines,    setLines]    = useState([{ t: 'out', v: 'Konami code! Type "help" to explore.' }])
  const [input,    setInput]    = useState('')
  const [kIdx,     setKIdx]     = useState(0)
  const bottomRef  = useRef(null)
  const inputRef   = useRef(null)

  useEffect(() => {
    const h = (e) => {
      if (e.key === KONAMI[kIdx]) {
        const next = kIdx + 1
        if (next === KONAMI.length) { setOpen(true); setKIdx(0) }
        else setKIdx(next)
      } else setKIdx(0)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [kIdx])

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [lines])
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 80) }, [open])

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase()
    setLines(l => [...l, { t: 'in', v: raw }])
    if (cmd === 'clear')  { setLines([{ t: 'out', v: 'Terminal cleared.' }]); setInput(''); return }
    if (cmd === 'exit')   { setOpen(false); setInput(''); return }
    if (RESPONSES[cmd])   setLines(l => [...l, { t: 'out', v: RESPONSES[cmd] }])
    else if (cmd)         setLines(l => [...l, { t: 'err', v: `Command not found: "${cmd}". Try "help".` }])
    setInput('')
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9995] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(10px)' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="w-full max-w-xl glass rounded-2xl overflow-hidden"
            style={{ fontFamily: 'JetBrains Mono, monospace', boxShadow: '0 32px 80px rgba(0,0,0,0.7)' }}
            initial={{ scale: 0.88, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.88, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  {['#ef4444','#f59e0b','#10b981'].map(c => (
                    <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <Terminal size={13} style={{ color: '#475569' }} />
                <span style={{ color: '#475569', fontSize: 12 }}>rediet@portfolio</span>
              </div>
              <button onClick={() => setOpen(false)} style={{ color: '#475569' }} className="hover:text-white transition-colors">
                <X size={14} />
              </button>
            </div>

            {/* Output */}
            <div className="h-60 overflow-y-auto p-5 space-y-1 text-xs" style={{ background: 'rgba(0,0,0,0.2)' }}>
              {lines.map((l, i) => (
                <div key={i} style={{ color: l.t === 'in' ? '#4F8CFF' : l.t === 'err' ? '#ef4444' : '#94A3B8', whiteSpace: 'pre-wrap' }}>
                  {l.t === 'in' && <span style={{ color: '#7C4DFF' }}>~ $ </span>}
                  {l.v}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ color: '#7C4DFF', fontSize: 12 }}>~ $</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') run(input) }}
                className="flex-1 bg-transparent outline-none text-xs"
                style={{ color: '#4F8CFF', caretColor: '#4F8CFF' }}
                placeholder="type a command…"
                spellCheck={false}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
