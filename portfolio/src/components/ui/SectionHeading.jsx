import { motion } from 'framer-motion'

export default function SectionHeading({ tag, title, highlight, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {tag && (
        <div className={`section-tag ${center ? 'mx-auto' : ''} w-fit`}>{tag}</div>
      )}
      <h2
        className="font-bold leading-tight mb-4"
        style={{ fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', color: '#F5F5F5' }}
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`leading-relaxed ${center ? 'max-w-xl mx-auto' : 'max-w-lg'}`}
          style={{ color: '#555', fontSize: 15 }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
