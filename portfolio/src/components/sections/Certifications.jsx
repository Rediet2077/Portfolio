import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award, X, ZoomIn } from 'lucide-react'
import { certifications } from '../../data'
import SectionHeading from '../ui/SectionHeading'

function CertModal({ cert, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(12px)' }} />
      <motion.div
        className="relative w-full max-w-xl"
        initial={{ scale: 0.88, y: 20 }} animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
        >
          <X size={16} /> Close
        </button>
        <img
          src={cert.logo}
          alt={cert.title}
          className="w-full rounded-2xl object-contain"
          style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.8)', maxHeight: '80vh' }}
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-white">{cert.title}</p>
          <p style={{ color: '#888', fontSize: 13 }}>{cert.issuer} · {cert.date}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Certifications() {
  const [modalCert, setModalCert] = useState(null)

  const awards = certifications.filter(c => c.isAward)
  const certs  = certifications.filter(c => !c.isAward)

  return (
    <section id="certifications" className="section" style={{ background: '#0C0C0C' }}>
      <div className="container-custom">
        <SectionHeading
          tag="Awards & Certifications"
          title="Recognition &"
          highlight="Credentials"
          subtitle="Hackathon achievements and verified technical certifications."
        />

        {/* ── Featured Award — HACK-X ── */}
        {awards.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="mb-10"
          >
            <div
              className="card rounded-3xl overflow-hidden relative"
              style={{ border: '1px solid rgba(255,138,61,0.25)', boxShadow: '0 0 40px rgba(255,138,61,0.08)' }}
            >
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, #FF8A3D, #F57625, #FF8A3D)' }} />

              <div className="grid md:grid-cols-2 gap-0">
                {/* Certificate image */}
                <div
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ minHeight: 280 }}
                  onClick={() => setModalCert(cert)}
                >
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ minHeight: 280 }}
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback */}
                  <div style={{ display: 'none' }}
                    className="w-full h-full items-center justify-center flex-col gap-4 bg-gradient-to-br from-orange-950 to-orange-900"
                    style2={{ minHeight: 280 }}>
                    <Award size={48} className="text-orange-500" />
                    <p className="text-orange-400 font-semibold">HACK-X 2026</p>
                  </div>
                  {/* Zoom overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-xl">
                      <ZoomIn size={16} /> View Certificate
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col justify-center">
                  {/* Award badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 w-fit"
                    style={{ background: 'rgba(255,138,61,0.12)', border: '1px solid rgba(255,138,61,0.3)' }}>
                    <Award size={14} style={{ color: '#FF8A3D' }} />
                    <span style={{ color: '#FF8A3D', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Hackathon Award
                    </span>
                  </div>

                  <h3 className="font-black text-white mb-2" style={{ fontSize: 28, lineHeight: 1.1 }}>
                    HACK-X 2026
                  </h3>
                  <p className="font-semibold mb-1" style={{ color: '#FF8A3D', fontSize: 15 }}>
                    Hackathon Certificate
                  </p>
                  <p style={{ color: '#555', fontSize: 13, marginBottom: 20 }}>
                    {cert.issuer}
                  </p>

                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                    {cert.description}
                  </p>

                  <div className="space-y-2.5">
                    {[
                      { label: 'Issued By',  value: 'Dr. Seblewongel Esseynew' },
                      { label: 'Role',       value: 'Dean, College of Computing' },
                      { label: 'Club',       value: 'Tech Tonic — Yeabsira Behailu' },
                      { label: 'Date',       value: '15 May 2026' },
                      { label: 'University', value: 'Debre Berhan University' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center gap-3">
                        <span style={{ color: '#444', fontSize: 12, width: 80, flexShrink: 0 }}>{label}</span>
                        <span style={{ color: '#aaa', fontSize: 13 }}>{value}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setModalCert(cert)}
                    className="btn-primary mt-6 text-sm py-2.5 px-5 w-fit"
                  >
                    <ZoomIn size={14} /> View Certificate
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* ── Regular certifications ── */}
        <div className="grid sm:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card rounded-2xl p-5"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl text-orange-500"
                style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}20` }}
              >
                <Award size={22} style={{ color: '#FF8A3D' }} />
              </div>

              <h3 className="font-semibold text-white mb-1 leading-snug" style={{ fontSize: 14 }}>
                {cert.title}
              </h3>
              <p style={{ color: '#FF8A3D', fontSize: 12, marginBottom: 4 }}>{cert.issuer}</p>
              <p style={{ color: '#444', fontSize: 11, fontFamily: 'monospace', marginBottom: 12 }}>
                {cert.date}
              </p>
              <p style={{ color: '#555', fontSize: 12, lineHeight: 1.6, marginBottom: 14 }}>
                {cert.description}
              </p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                style={{ color: '#FF8A3D' }}
              >
                <ExternalLink size={11} /> Verify Credential
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalCert && <CertModal cert={modalCert} onClose={() => setModalCert(null)} />}
      </AnimatePresence>
    </section>
  )
}
