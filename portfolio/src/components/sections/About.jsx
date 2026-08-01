import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Mail, Zap, Target, BookOpen } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const facts = [
  { icon: GraduationCap, label: 'University', value: 'Debre Berhan University'     },
  { icon: BookOpen,      label: 'Degree',     value: 'Software Engineering, 4th Yr'},
  { icon: MapPin,        label: 'Location',   value: 'Debre Berhan, Ethiopia'     },
  { icon: Mail,          label: 'Email',      value: 'redietsharew231@gmail.com'   },
  { icon: Target,        label: 'Focus',      value: 'Full-Stack Development'      },
  { icon: Zap,           label: 'Status',     value: 'Open to opportunities'       },
]

export default function About() {
  return (
    <section id="about" className="section" style={{ background: '#0A0A0A' }}>
      <div className="container-custom">
        <SectionHeading tag="About Me" title="A Developer Who" highlight="Loves Building"
          subtitle="I turn complex problems into elegant, scalable digital solutions." />

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="card rounded-3xl p-8 relative overflow-hidden"
              style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.6)' }}>
              {/* Glow top-right */}
              <div className="absolute top-0 right-0 w-56 h-56 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,138,61,0.07), transparent 65%)' }} />

              {/* Avatar row */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0"
                  style={{ border: '2px solid rgba(255,138,61,0.25)' }}>
                  <img src="/profile.jpg" alt="Rediet Sharew"
                    className="w-full h-full object-cover object-top"
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
                  <div style={{ display:'none' }} className="w-full h-full items-center justify-center font-bold text-orange-500 bg-neutral-900 text-lg">RS</div>
                </div>
                <div>
                  <p className="font-bold text-white" style={{ fontSize: 17 }}>Rediet Sharew</p>
                  <p style={{ color: '#FF8A3D', fontSize: 14 }}>Full-Stack Developer</p>
                </div>
              </div>

              <p className="leading-relaxed mb-4" style={{ color: '#666', fontSize: 15 }}>
                I'm a passionate 4th-year Software Engineering student who loves crafting modern web
                applications. From pixel-perfect UIs to robust backend APIs — I enjoy every layer.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#666', fontSize: 15 }}>
                I continuously learn new technologies, contribute to open source, and build products
                that solve real-world problems for real people.
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-2.5">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-2.5 p-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <Icon size={13} style={{ color: '#FF8A3D', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: 10, color: '#444', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{label}</p>
                      <p style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — experience + education */}
          <motion.div
            initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            {[
              {
                title: 'Experience',
                items: [
                  { role: 'Freelance Full-Stack Developer', org: 'Self-Employed', period: '2024 – Present',
                    desc: 'Building web applications for local businesses across Ethiopia.' },
                  { role: 'Open Source Contributor', org: 'GitHub', period: '2023 – Present',
                    desc: 'Active contributor — 300+ contributions, Hacktoberfest 2023 completed.' },
                ],
              },
              {
                title: 'Education',
                items: [
                  { role: 'BSc Software Engineering', org: 'Debre Berhan University', period: '2021 – Present',
                    desc: '4th year — focused on software architecture and system design.' },
                  { role: 'Self-Learning & Certifications', org: 'freeCodeCamp · Coursera', period: '2021 – Present',
                    desc: 'Front End Libraries, Responsive Web Design, Python for Everybody.' },
                ],
              },
            ].map(({ title, items }) => (
              <div key={title}>
                <p className="font-semibold mb-3" style={{ color: '#F5F5F5', fontSize: 15 }}>{title}</p>
                <div className="space-y-3">
                  {items.map(item => (
                    <motion.div key={item.role} whileHover={{ x: 4 }}
                      className="card rounded-2xl p-4">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <p className="font-semibold text-white" style={{ fontSize: 13 }}>{item.role}</p>
                        <span className="flex-shrink-0 px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(255,138,61,0.1)', color: '#FF8A3D', fontSize: 11 }}>
                          {item.period}
                        </span>
                      </div>
                      <p style={{ color: '#FF8A3D', fontSize: 12, marginBottom: 4 }}>{item.org}</p>
                      <p style={{ color: '#555', fontSize: 12 }}>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* Goal */}
            <div className="p-4 rounded-2xl"
              style={{ background: 'rgba(255,138,61,0.05)', border: '1px solid rgba(255,138,61,0.15)' }}>
              <p style={{ color: '#FF8A3D', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                Career Goal
              </p>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7 }}>
                Join a product-focused tech company as a full-stack engineer, build impactful software,
                and grow into a technical lead who bridges design and engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
