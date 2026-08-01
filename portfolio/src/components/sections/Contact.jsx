import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Copy, Check, Download, MessageSquare } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { personalInfo } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const contactItems = [
  { icon: Mail,       label: 'Email',    value: 'redietsharew231@gmail.com',     href: 'mailto:redietsharew231@gmail.com',     color: '#FF8A3D' },
  { icon: FaGithub,   label: 'GitHub',   value: 'github.com/Rediet2077',         href: 'https://github.com/Rediet2077',         color: '#aaa'    },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/rediet-sharew', href: 'https://linkedin.com/in/rediet-sharew', color: '#0A66C2' },
  { icon: MapPin,     label: 'Location', value: 'Debre Berhan, Ethiopia',        href: '#',                                    color: '#22c55e' },
]

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [copied,  setCopied]  = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(personalInfo.email)
    setCopied(true); toast.success('Email copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) { toast.error('Please fill required fields.'); return }
    setSending(true)
    try {
      const res = await fetch('https://formsubmit.co/ajax/redietsharew231@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject || `New message from ${form.name} via Portfolio`,
          message: form.message,
          _replyto: form.email
        })
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok || data.success === 'true' || data.success === true) {
        toast.success("Message sent! Delivered directly to Rediet's inbox.")
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        window.location.href = `mailto:redietsharew231@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`)}`
        toast.success("Opening your email application to deliver message!")
      }
    } catch (err) {
      window.location.href = `mailto:redietsharew231@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`)}`
      toast.success("Opening your email application to deliver message!")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section" style={{ background: '#0A0A0A' }}>
      <div className="shape w-[400px] h-[400px]"
        style={{ background: '#FF8A3D', bottom: '-10%', right: '-10%', opacity: 0.05 }} />

      <div className="container-custom relative">
        <SectionHeading tag="Contact" title="Let's" highlight="Work Together"
          subtitle="Have a project idea? Let's turn it into something real." />

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="space-y-5">
            <div>
              <h3 className="font-bold text-white mb-3" style={{ fontSize: 20 }}>
                Ready to start a <span className="gradient-text">conversation?</span>
              </h3>
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75 }}>
                Currently available for freelance projects, internships, and full-time positions.
                Whether you have a specific project or just want to connect — reach out!
              </p>
            </div>

            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 card rounded-2xl p-4 group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}10`, border: `1px solid ${color}18` }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <p style={{ color: '#444', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{label}</p>
                    <p className="text-white group-hover:text-orange-400 transition-colors" style={{ fontSize: 13, fontWeight: 500 }}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={copy} className="btn-secondary text-sm py-2.5 px-5">
                {copied ? <Check size={14} style={{ color: '#22c55e' }} /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
              <a href={personalInfo.cvUrl} download className="btn-primary text-sm py-2.5 px-5">
                <Download size={14} /> Download CV
              </a>
            </div>

            <div className="p-4 rounded-2xl flex items-start gap-3"
              style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)' }}>
              <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5 animate-pulse" style={{ background: '#22c55e' }} />
              <div>
                <p className="font-semibold text-white mb-1" style={{ fontSize: 13 }}>Available for Work</p>
                <p style={{ color: '#555', fontSize: 12, lineHeight: 1.65 }}>
                  Open to internships, freelance & full-time. Response time: within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <form onSubmit={submit} className="card rounded-3xl p-7 md:p-8 space-y-5"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,138,61,0.1)', border: '1px solid rgba(255,138,61,0.2)' }}>
                  <MessageSquare size={16} style={{ color: '#FF8A3D' }} />
                </div>
                <div>
                  <p className="font-semibold text-white" style={{ fontSize: 15 }}>Send a Message</p>
                  <p style={{ color: '#444', fontSize: 12 }}>I'll reply within 24 hours</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'name',  label: 'Name *',  type: 'text',  placeholder: 'Your name'      },
                  { name: 'email', label: 'Email *', type: 'email', placeholder: 'your@email.com' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block mb-1.5"
                      style={{ color: '#444', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {f.label}
                    </label>
                    <input type={f.type} name={f.name} value={form[f.name]}
                      onChange={change} placeholder={f.placeholder} required={f.label.includes('*')}
                      className="form-input" />
                  </div>
                ))}
              </div>

              <div>
                <label className="block mb-1.5"
                  style={{ color: '#444', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Subject
                </label>
                <input type="text" name="subject" value={form.subject}
                  onChange={change} placeholder="Project inquiry, collaboration…" className="form-input" />
              </div>

              <div>
                <label className="block mb-1.5"
                  style={{ color: '#444', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Message *
                </label>
                <textarea name="message" value={form.message} onChange={change}
                  rows={5} placeholder="Describe your project or just say hello…"
                  required className="form-input resize-none" />
              </div>

              <button type="submit" disabled={sending}
                className="btn-primary w-full justify-center py-3.5 ripple-btn disabled:opacity-50 disabled:cursor-not-allowed">
                {sending ? (
                  <><span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Sending…</>
                ) : (
                  <><Send size={15} />Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
