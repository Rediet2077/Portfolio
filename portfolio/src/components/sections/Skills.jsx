import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5,
  SiTailwindcss, SiBootstrap, SiVite,
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiFastapi, SiPhp,
  SiFlutter, SiKotlin,
  SiMysql, SiPostgresql, SiSqlite,
  SiGit, SiGithub, SiDocker, SiPostman,
} from 'react-icons/si'
import { FaCss3Alt, FaCode } from 'react-icons/fa'
import { skills, skillCategories } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  react: SiReact, nextjs: SiNextdotjs, typescript: SiTypescript,
  javascript: SiJavascript, html5: SiHtml5, css3: FaCss3Alt,
  tailwind: SiTailwindcss, bootstrap: SiBootstrap, vite: SiVite,
  nodejs: SiNodedotjs, express: SiExpress, python: SiPython,
  django: SiDjango, fastapi: SiFastapi, php: SiPhp,
  flutter: SiFlutter, kotlin: SiKotlin,
  mysql: SiMysql, postgresql: SiPostgresql, sqlite: SiSqlite,
  git: SiGit, github: SiGithub, docker: SiDocker,
  postman: SiPostman, vscode: FaCode,
}

const iconColor = {
  react: '#61DAFB', nextjs: '#fff', typescript: '#3178C6',
  javascript: '#F7DF1E', html5: '#E34F26', css3: '#1572B6',
  tailwind: '#38BDF8', bootstrap: '#7952B3', vite: '#646CFF',
  nodejs: '#339933', express: '#fff', python: '#3776AB',
  django: '#44b78b', fastapi: '#009688', php: '#777BB4',
  flutter: '#02569B', kotlin: '#7F52FF',
  mysql: '#4479A1', postgresql: '#336791', sqlite: '#003B57',
  git: '#F05032', github: '#fff', docker: '#2496ED',
  postman: '#FF6C37', vscode: '#007ACC',
}

function SkillCard({ skill, idx }) {
  const barRef = useRef(null)
  const Icon   = iconMap[skill.icon] || FaCode
  const color  = iconColor[skill.icon] || '#FF8A3D'

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && barRef.current) barRef.current.classList.add('animated')
    }, { threshold: 0.5 })
    if (barRef.current) obs.observe(barRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: idx * 0.04 }}
      className="skill-card card rounded-2xl p-5 cursor-default"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}12`, border: `1px solid ${color}20` }}>
          <Icon size={20} style={{ color }} />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-white truncate" style={{ fontSize: 13 }}>{skill.name}</p>
          <p style={{ color: '#444', fontSize: 11 }}>{skill.years}yr{skill.years > 1 ? 's' : ''}</p>
        </div>
        <span className="ml-auto text-xs font-bold" style={{ color: '#FF8A3D' }}>{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <div ref={barRef} className="skill-bar-fill"
          style={{ '--target': `${skill.level / 100}` }} />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [cat, setCat] = useState('Frontend')
  const filtered = cat === 'All' ? skills : skills.filter(s => s.category === cat)

  return (
    <section id="skills" className="section" style={{ background: '#0C0C0C' }}>
      <div className="container-custom">
        <SectionHeading tag="Skills" title="My Tech" highlight="Stack"
          subtitle="Technologies I use to build modern, scalable, and performant applications." />

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map(c => (
            <motion.button key={c} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              onClick={() => setCat(c)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={cat === c
                ? { background: 'linear-gradient(135deg,#FF8A3D,#F57625)', color: '#fff', boxShadow: '0 4px 16px rgba(255,138,61,0.4)' }
                : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#555' }
              }
            >{c}</motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={cat}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filtered.map((s, i) => <SkillCard key={s.name} skill={s} idx={i} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
