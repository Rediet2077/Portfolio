import { motion } from 'framer-motion'
import { Globe, Smartphone, Palette, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const services = [
  {
    icon: Globe, title: 'Web Development', color: '#FF8A3D',
    description: 'Full-stack web applications built with React, Node.js, and modern databases — from landing pages to complex SaaS platforms.',
    features: ['React / Next.js SPAs', 'REST & GraphQL APIs', 'Database design', 'Performance optimization', 'Deployment & DevOps'],
  },
  {
    icon: Smartphone, title: 'Mobile Apps', color: '#22c55e',
    description: 'Cross-platform mobile applications using Flutter. Beautiful native UIs that work seamlessly on both iOS and Android.',
    features: ['Flutter development', 'Cross-platform iOS & Android', 'State management', 'API integration', 'App store deployment'],
  },
  {
    icon: Palette, title: 'UI/UX Design', color: '#06b6d4',
    description: 'Clean, modern, and intuitive interfaces designed with a focus on usability, accessibility, and delightful micro-interactions.',
    features: ['Wireframing & prototyping', 'Design systems', 'Responsive layouts', 'Tailwind CSS styling', 'Accessibility (WCAG)'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: '#0A0A0A' }}>
      <div className="container-custom">
        <SectionHeading tag="Services" title="What I" highlight="Offer"
          subtitle="End-to-end digital solutions tailored to your needs and goals." />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="service-card card rounded-3xl p-7 relative overflow-hidden group"
              >
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${s.color}10, transparent 70%)` }} />

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${s.color}12`, border: `1px solid ${s.color}20` }}>
                  <Icon size={26} style={{ color: s.color }} />
                </div>

                <h3 className="font-bold text-white mb-3" style={{ fontSize: 18 }}>{s.title}</h3>
                <p className="mb-6 leading-relaxed" style={{ color: '#555', fontSize: 14 }}>{s.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5" style={{ color: '#666', fontSize: 13 }}>
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                  style={{ color: s.color }}
                >
                  Get Started <ArrowRight size={14} />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
