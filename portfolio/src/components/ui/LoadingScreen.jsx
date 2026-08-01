import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [pct,     setPct]     = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setPct(p => {
        const next = Math.min(p + Math.random() * 18, 100)
        if (next >= 100) {
          clearInterval(id)
          setTimeout(() => { onComplete?.(); setVisible(false) }, 200)
          return 100
        }
        return next
      })
    }, 60)
    return () => clearInterval(id)
  }, []) // eslint-disable-line

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1,   opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative mb-2"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #FF8A3D, #F57625)' }}
            >
              RS
            </div>
            <div className="absolute inset-0 rounded-2xl"
              style={{ background: 'linear-gradient(135deg,#FF8A3D,#F57625)', filter: 'blur(16px)', opacity: 0.4, zIndex: -1 }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ color: '#555', fontSize: 14, fontWeight: 500, marginBottom: 24 }}
          >
            Rediet Sharew
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ width: 160 }}
          >
            <div className="skill-bar-track">
              <div className="skill-bar-fill"
                style={{ transform: `scaleX(${pct / 100})`, transition: 'transform 0.08s linear' }} />
            </div>
            <p style={{ color: '#333', fontSize: 12, textAlign: 'center', marginTop: 8 }}>
              {Math.round(pct)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
