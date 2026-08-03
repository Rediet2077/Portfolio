import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, X, ZoomIn, Calendar, Building2, User } from 'lucide-react'
import { certifications } from '../../data'
import SectionHeading from '../ui/SectionHeading'

/* ── Full-screen modal ── */
function CertModal({ cert, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(16px)' }}
        />

        {/* Modal content */}
        <motion.div
          className="relative w-full max-w-3xl"
          initial={{ scale: 0.9, y: 24, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            <X size={16} /> Close
          </button>

          {/* Certificate image — full, no crop */}
          <div
            className="w-full rounded-2xl overflow-hidden"
            style={{
              background: '#111',
              border: '1px solid rgba(255,138,61,0.2)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.9), 0 0 60px rgba(255,138,61,0.08)',
            }}
          >
            <img
              src={cert.logo}
              alt={cert.title}
              className="w-full h-auto block"
              style={{ maxHeight: '75vh', objectFit: 'contain' }}
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="font-bold text-white" style={{ fontSize: 16 }}>{cert.title}</p>
            <p style={{ color: '#888', fontSize: 13, marginTop: 4 }}>{cert.issuer} · {cert.date}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ── Main section ── */
export default function Certifications() {
  const [modalCert, setModalCert] = useState(null)
  const awards = certifications.filter(c => c.isAward)

  return (
    <section id="certifications" className="section" style={{ background: '#0C0C0C' }}>
      <div className="container-custom">
        <SectionHeading
          tag="Awards & Certifications"
          title="Recognition &"
          highlight="Credentials"
          subtitle="Hackathon achievements and verified technical certifications."
        />

        <div className="flex flex-col items-center gap-8">
          {awards.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full max-w-3xl"
            >
              <div
                className="rounded-3xl overflow-hidden relative"
                style={{
                  background: '#111',
                  border: '1px solid rgba(255,138,61,0.2)',
                  boxShadow: '0 8px 48px rgba(0,0,0,0.6), 0 0 40px rgba(255,138,61,0.05)',
                }}
              >
                {/* Top accent line */}
                <div
                  className="h-[3px] w-full"
                  style={{ background: 'linear-gradient(90deg, transparent, #FF8A3D, #F57625, #FF8A3D, transparent)' }}
                />

                {/* ── Certificate photo — contained, max height limited ── */}
                <div
                  className="relative group cursor-pointer w-full flex items-center justify-center"
                  onClick={() => setModalCert(cert)}
                  style={{ background: '#0a0a0a', padding: '28px 32px', lineHeight: 0 }}
                >
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      maxWidth: 520,
                      maxHeight: 340,
                      objectFit: 'contain',
                      display: 'block',
                      borderRadius: 12,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                    }}
                  />

                  {/* Hover zoom overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.45)' }}
                  >
                    <div
                      className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-white text-sm"
                      style={{ background: 'rgba(255,138,61,0.9)', backdropFilter: 'blur(8px)' }}
                    >
                      <ZoomIn size={16} /> View Full Certificate
                    </div>
                  </div>
                </div>

                {/* ── Details row below image ── */}
                <div className="p-6 md:p-8">
                  {/* Badge + title row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
                        style={{
                          background: 'rgba(255,138,61,0.1)',
                          border: '1px solid rgba(255,138,61,0.25)',
                        }}
                      >
                        <Award size={13} style={{ color: '#FF8A3D' }} />
                        <span style={{ color: '#FF8A3D', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                          Hackathon Award
                        </span>
                      </div>
                      <h3 className="font-black text-white" style={{ fontSize: 22, lineHeight: 1.2 }}>
                        HACK-X 2026
                      </h3>
                      <p style={{ color: '#FF8A3D', fontSize: 14, marginTop: 2 }}>
                        Hackathon Certificate
                      </p>
                    </div>

                    <button
                      onClick={() => setModalCert(cert)}
                      className="btn-primary text-sm py-2.5 px-5 flex-shrink-0"
                    >
                      <ZoomIn size={14} /> View Certificate
                    </button>
                  </div>

                  {/* Meta details */}
                  <div
                    className="grid sm:grid-cols-2 gap-3 pt-5"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    {[
                      { icon: User,      label: 'Issued By',  value: 'Dr. Seblewongel Esseynew'  },
                      { icon: Building2, label: 'Department', value: 'College of Computing, DBU' },
                      { icon: Award,     label: 'Organizer',  value: 'Tech Tonic Club'            },
                      { icon: Calendar,  label: 'Date',       value: '15 May 2026'               },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(255,138,61,0.08)', border: '1px solid rgba(255,138,61,0.15)' }}
                        >
                          <Icon size={14} style={{ color: '#FF8A3D' }} />
                        </div>
                        <div>
                          <p style={{ color: '#444', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
                          <p style={{ color: '#ccc', fontSize: 13, fontWeight: 500 }}>{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="h-[2px] w-full"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,138,61,0.3), transparent)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalCert && <CertModal cert={modalCert} onClose={() => setModalCert(null)} />}
    </section>
  )
}
