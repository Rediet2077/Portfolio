import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { GitBranch, Code2, Cpu, Award } from 'lucide-react'
import { stats } from '../../data'

const icons = [GitBranch, Code2, Cpu, Award]

export default function Statistics() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-sm" style={{ background: '#0C0C0C' }}>
      <div className="divider" />
      <div className="container-custom py-16">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card rounded-2xl p-6 text-center relative overflow-hidden group flex flex-col items-center"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,138,61,0.06), transparent 70%)' }} />
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3 text-orange-500">
                  <Icon size={22} />
                </div>
                <div className="stat-number mb-2">
                  {inView ? <CountUp end={s.value} duration={2.2} delay={i * 0.15} /> : '0'}{s.suffix}
                </div>
                <p style={{ color: '#555', fontSize: 13, fontWeight: 500 }}>{s.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="divider" />
    </section>
  )
}
