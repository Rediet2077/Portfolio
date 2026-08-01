import { motion } from 'framer-motion'
import { Mail, ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../../data'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Services',   href: '#services'   },
  { label: 'Contact',    href: '#contact'    },
]

const socials = [
  { Icon: FaGithub,   href: personalInfo.github,                     label: 'GitHub'   },
  { Icon: FaLinkedin, href: personalInfo.linkedin,                    label: 'LinkedIn' },
  { Icon: Mail,       href: `mailto:${personalInfo.email}`,          label: 'Email'    },
]

export default function Footer() {
  const goto = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }} className="relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-24 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,138,61,0.06), transparent 70%)' }} />

      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #FF8A3D, #F57625)' }}>RS</div>
              <span className="font-semibold" style={{ color: '#F5F5F5' }}>
                Rediet<span className="gradient-text"> Sharew</span>
              </span>
            </div>
            <p style={{ color: '#444', fontSize: 13, lineHeight: 1.7, maxWidth: 240 }}>
              Full-Stack Developer passionate about creating amazing digital experiences.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.9 }}
                  className="glass-sm w-9 h-9 flex items-center justify-center transition-all"
                  style={{ color: '#444' }}>
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold mb-4 text-white" style={{ fontSize: 13 }}>Quick Links</p>
            <ul className="space-y-2.5">
              {links.map(l => (
                <li key={l.href}>
                  <button onClick={() => goto(l.href)}
                    className="flex items-center gap-2 text-sm group transition-colors"
                    style={{ color: '#444' }}>
                    <div className="w-4 h-px transition-all duration-300 group-hover:w-5"
                      style={{ background: '#FF8A3D' }} />
                    <span className="group-hover:text-white transition-colors">{l.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-center pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <motion.button
            whileHover={{ scale: 1.06, y: -1 }} whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 glass-sm px-4 py-2 text-sm font-medium"
            style={{ color: '#444' }}>
            <ArrowUp size={13} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
