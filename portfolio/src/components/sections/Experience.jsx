import { motion } from 'framer-motion'
import { timeline } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const typeColor = {
  education:    '#FF8A3D',
  experience:   '#22c55e',
  achievement:  '#eab308',
  certification:'#06b6d4',
}

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: '#0C0C0C' }}>
      <div className="container-custom">
        <SectionHeading tag="Journey" title="My" highlight="Timeline"
          subtitle="Education, experience and milestones that shaped my path." />

        <div className="max-w-2xl mx-auto relative">
          <div className="timeline-line" />
          <div className="space-y-5 pl-16">
            {timeline.map((item, i) => {
              const color = typeColor[item.type] || '#FF8A3D'
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.09, duration: 0.5 }}
                  className="relative"
                >
                  {/* Icon dot */}
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-xl text-lg"
                    style={{ left: -56, top: 8,
                      background: `${color}12`, border: `1px solid ${color}25`,
                      boxShadow: `0 0 14px ${color}15` }}>
                    {item.icon}
                  </div>

                  <motion.div whileHover={{ x: 4 }} className="card rounded-2xl p-5">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-semibold text-white" style={{ fontSize: 14 }}>{item.title}</h3>
                      <span className="flex-shrink-0 text-xs px-2.5 py-0.5 rounded-full font-mono"
                        style={{ background: `${color}10`, color, fontSize: 11 }}>
                        {item.year}
                      </span>
                    </div>
                    <p className="font-medium mb-1.5" style={{ color, fontSize: 12 }}>{item.org}</p>
                    <p style={{ color: '#555', fontSize: 12, lineHeight: 1.65 }}>{item.description}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
