import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, ChevronRight, Layers, Zap, AlertCircle, BookOpen } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const statusStyle = {
  completed:    { bg: 'rgba(34,197,94,0.08)',   border: 'rgba(34,197,94,0.2)',   text: '#22c55e' },
  'in-progress':{ bg: 'rgba(255,138,61,0.08)',  border: 'rgba(255,138,61,0.2)',  text: '#FF8A3D' },
}

function Modal({ p, onClose }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }} />
      <motion.div
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
        style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', maxHeight: '90vh', overflowY: 'auto' }}
        initial={{ scale: 0.92, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 24 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Cover image */}
        <div className="relative h-52 overflow-hidden">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, #111 0%, rgba(17,17,17,0.2) 60%)' }} />
          <button onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center glass-sm text-white hover:bg-white/10 transition-colors">
            <X size={15} />
          </button>
          <div className="absolute bottom-4 left-6">
            {(() => { const st = statusStyle[p.status] || statusStyle.completed; return (
              <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                style={{ background: st.bg, border: `1px solid ${st.border}`, color: st.text }}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {p.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
            )})()}
          </div>
        </div>

        <div className="p-7 space-y-5">
          <div>
            <h2 className="font-bold text-white mb-2" style={{ fontSize: 22 }}>{p.title}</h2>
            <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7 }}>{p.longDescription}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: AlertCircle, label: 'Problem',      text: p.problem      },
              { icon: Zap,         label: 'Solution',     text: p.solution     },
              { icon: Layers,      label: 'Architecture', text: p.architecture },
              { icon: BookOpen,    label: 'Lessons',      text: p.lessons      },
            ].map(({ icon: Icon, label, text }) => (
              <div key={label} className="p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-center gap-2 mb-2" style={{ color: '#FF8A3D' }}>
                  <Icon size={12} />
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
                </div>
                <p style={{ color: '#666', fontSize: 12, lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="font-semibold text-white mb-3" style={{ fontSize: 13 }}>Key Features</p>
            <ul className="grid sm:grid-cols-2 gap-1.5">
              {p.features.map(f => (
                <li key={f} className="flex items-start gap-2" style={{ color: '#555', fontSize: 12 }}>
                  <ChevronRight size={12} style={{ color: '#FF8A3D', flexShrink: 0, marginTop: 2 }} />{f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
          </div>

          <div className="p-4 rounded-2xl"
            style={{ background: 'rgba(255,138,61,0.05)', border: '1px solid rgba(255,138,61,0.15)' }}>
            <p style={{ color: '#FF8A3D', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Challenges</p>
            <p style={{ color: '#666', fontSize: 13 }}>{p.challenges}</p>
          </div>

          <div className="flex gap-3 pt-1">
            {p.github && p.github !== '#' && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2.5 px-5">
                <FaGithub size={14} /> Source Code
              </a>
            )}
            {p.live && p.live !== '#' ? (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-5">
                <ExternalLink size={14} /> Live Demo
              </a>
            ) : (
              <span className="btn-secondary text-sm py-2.5 px-5 opacity-40 cursor-not-allowed">
                <ExternalLink size={14} /> Coming Soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Card({ p, i, onClick }) {
  const st = statusStyle[p.status] || statusStyle.completed
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: i * 0.1 }}
      className="project-card card rounded-3xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={p.image} alt={p.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={e => { e.target.src = `https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80` }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.1) 55%)' }} />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: st.bg, border: `1px solid ${st.border}`, color: st.text }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {p.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
          {p.live && p.live !== '#' && (
            <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(255,138,61,0.15)', border: '1px solid rgba(255,138,61,0.4)', color: '#FF8A3D' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" /> Live
            </span>
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(255,138,61,0.1)', backdropFilter: 'blur(2px)' }}>
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white"
            style={{ background: 'rgba(255,138,61,0.9)' }}>
            View Case Study <ChevronRight size={14} />
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-white mb-2 group-hover:text-orange-400 transition-colors"
          style={{ fontSize: 16 }}>{p.title}</h3>
        <p className="mb-4 line-clamp-2" style={{ color: '#555', fontSize: 13, lineHeight: 1.65 }}>
          {p.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tech.slice(0, 4).map(t => <span key={t} className="tech-tag">{t}</span>)}
          {p.tech.length > 4 && <span className="tech-tag">+{p.tech.length - 4}</span>}
        </div>
        <div className="flex gap-2" onClick={e => e.stopPropagation()}>
          {p.github && p.github !== '#' && (
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs glass-sm px-3 py-1.5 transition-colors"
              style={{ color: '#555' }}>
              <FaGithub size={12} /> Code
            </a>
          )}
          {p.live && p.live !== '#' ? (
            <a href={p.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-semibold transition-all"
              style={{ background: 'rgba(255,138,61,0.12)', border: '1px solid rgba(255,138,61,0.3)', color: '#FF8A3D' }}>
              <ExternalLink size={12} /> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs glass-sm px-3 py-1.5 opacity-40 cursor-not-allowed"
              style={{ color: '#555' }}>
              <ExternalLink size={12} /> Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [sel, setSel] = useState(null)
  return (
    <section id="projects" className="section" style={{ background: '#0A0A0A' }}>
      <div className="container-custom">
        <SectionHeading tag="Projects" title="Featured" highlight="Work"
          subtitle="Real-world applications built from idea to deployment." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => <Card key={p.id} p={p} i={i} onClick={() => setSel(p)} />)}
        </div>
      </div>
      <AnimatePresence>
        {sel && <Modal p={sel} onClose={() => setSel(null)} />}
      </AnimatePresence>
    </section>
  )
}
