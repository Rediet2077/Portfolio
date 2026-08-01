import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiZap, FiShield, FiSmartphone } from 'react-icons/fi'
import { projects } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const performanceBadges = [
  { icon: FiSmartphone, label: 'Responsive', color: '#06b6d4' },
  { icon: FiZap,        label: 'Fast',       color: '#f59e0b' },
  { icon: FiShield,     label: 'Secure',     color: '#10b981' },
]

export default function LiveDemo() {
  return (
    <section id="live-demo" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-wrapper">
        <SectionHeading
          tag="Live Applications"
          title="Deployed"
          highlight="Apps"
          subtitle="Production-ready applications you can try right now."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group"
            >
              {/* Screenshot */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />

                {/* Status */}
                <div className="absolute top-3 left-3">
                  <span className={`badge text-xs ${
                    project.status === 'completed'
                      ? 'bg-green-500/15 text-green-400 border border-green-500/25'
                      : 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/25'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 inline-block ${
                      project.status === 'completed' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400 animate-pulse'
                    }`} />
                    {project.status === 'completed' ? 'Live' : 'In Progress'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3 line-clamp-2">{project.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>

                {/* Performance badges */}
                <div className="flex gap-2 mb-4">
                  {performanceBadges.map(({ icon: Icon, label, color }) => (
                    <div key={label} className="flex items-center gap-1 text-xs glass rounded-lg px-2 py-1 border border-white/5">
                      <Icon size={11} style={{ color }} />
                      <span className="text-slate-400">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-xs py-2 px-3 justify-center"
                  >
                    <FiExternalLink size={13} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-3"
                  >
                    <FiGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
