import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '../../data'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  const [cur, setCur] = useState(0)
  const prev = () => setCur(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCur(c => (c + 1) % testimonials.length)
  const t = testimonials[cur]

  return (
    <section id="testimonials" className="section" style={{ background: '#0C0C0C' }}>
      <div className="container-custom">
        <SectionHeading tag="Testimonials" title="Kind Words From" highlight="Others"
          subtitle="Feedback from clients, colleagues, and instructors I've worked with." />

        <div className="max-w-3xl mx-auto">
          {/* Main card */}
          <AnimatePresence mode="wait">
            <motion.div key={cur}
              initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35 }}
              className="card rounded-3xl p-8 md:p-10 relative overflow-hidden mb-8"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,138,61,0.05), transparent 65%)' }} />

              {/* Quote icon */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(255,138,61,0.08)', border: '1px solid rgba(255,138,61,0.2)' }}>
                <Quote size={20} style={{ color: '#FF8A3D' }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#FF8A3D" color="#FF8A3D" />
                ))}
              </div>

              <p className="leading-relaxed mb-8" style={{ color: '#777', fontSize: 17, fontStyle: 'italic' }}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name}
                  className="w-12 h-12 rounded-2xl object-cover"
                  style={{ border: '2px solid rgba(255,138,61,0.2)' }} loading="lazy" />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p style={{ color: '#FF8A3D', fontSize: 13 }}>{t.role}</p>
                  <p style={{ color: '#444', fontSize: 12 }}>{t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCur(i)}
                  className={`carousel-dot ${i === cur ? 'active' : ''}`} />
              ))}
            </div>
            <div className="flex gap-2">
              {[{ icon: ChevronLeft, fn: prev }, { icon: ChevronRight, fn: next }].map(({ icon: Icon, fn }, i) => (
                <motion.button key={i} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                  onClick={fn}
                  className="glass-sm w-10 h-10 flex items-center justify-center transition-colors"
                  style={{ color: '#555' }}>
                  <Icon size={16} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mini cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {testimonials.map((item, i) => (
              <motion.button key={i} onClick={() => setCur(i)} whileHover={{ scale: 1.02 }}
                className="card rounded-2xl p-3 text-left transition-all"
                style={i === cur ? { borderColor: 'rgba(255,138,61,0.3)', background: 'rgba(255,138,61,0.04)' } : {}}>
                <div className="flex items-center gap-2 mb-2">
                  <img src={item.avatar} alt={item.name}
                    className="w-7 h-7 rounded-lg object-cover" loading="lazy" />
                  <p className="font-medium text-white" style={{ fontSize: 12 }}>{item.name}</p>
                </div>
                <p className="line-clamp-2" style={{ color: '#444', fontSize: 11 }}>"{item.text}"</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
