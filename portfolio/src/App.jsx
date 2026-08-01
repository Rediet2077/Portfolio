import React, { useState, useEffect, Component } from 'react'
import { Helmet } from 'react-helmet-async'
import { AlertTriangle } from 'lucide-react'
import { ThemeProvider } from './context/ThemeContext'

import Navbar         from './components/ui/Navbar'
import CustomCursor   from './components/ui/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'
import LoadingScreen  from './components/ui/LoadingScreen'
import CommandPalette from './components/ui/CommandPalette'
import BackToTop      from './components/ui/BackToTop'
import EasterEgg      from './components/ui/EasterEgg'

import Hero           from './components/sections/Hero'
import About          from './components/sections/About'
import Skills         from './components/sections/Skills'
import Projects       from './components/sections/Projects'
import Statistics     from './components/sections/Statistics'
import Experience     from './components/sections/Experience'
import Services       from './components/sections/Services'
import Certifications from './components/sections/Certifications'
import Contact        from './components/sections/Contact'
import Footer         from './components/sections/Footer'

/* ── Error Boundary ── */
class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: '#0B1120', color: '#F8FAFC', padding: 32, textAlign: 'center',
        }}>
          <div style={{ color: '#FF8A3D', marginBottom: 16 }}>
            <AlertTriangle size={48} />
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Something went wrong</h2>
          <p style={{ color: '#94A3B8', marginBottom: 24, maxWidth: 480 }}>
            {this.state.error.message}
          </p>
          <pre style={{
            background: 'rgba(255,255,255,0.05)', padding: 16, borderRadius: 12,
            fontSize: 12, color: '#64748B', maxWidth: 600, overflowX: 'auto', textAlign: 'left',
          }}>
            {this.state.error.stack?.split('\n').slice(0, 6).join('\n')}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 24, padding: '12px 28px', borderRadius: 12,
              background: 'linear-gradient(135deg,#FF8A3D,#F57625)',
              color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer',
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

/* ── Main Portfolio ── */
function Portfolio() {
  const [loaded,  setLoaded]  = useState(false)
  const [cmdOpen, setCmdOpen] = useState(false)

  useEffect(() => {
    const h = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); setCmdOpen(o => !o) }
      if (e.key === 'Escape') setCmdOpen(false)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      <div style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        <Helmet>
          <title>Rediet Sharew | Full-Stack Developer</title>
          <meta name="description" content="Premium portfolio of Rediet Sharew — Full-Stack Developer & Software Engineering Student." />
        </Helmet>

        <CustomCursor />
        <ScrollProgress />
        <Navbar onCmdOpen={() => setCmdOpen(true)} />
        <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
        <BackToTop />
        <EasterEgg />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Statistics />
          <Experience />
          <Services />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    </ErrorBoundary>
  )
}
