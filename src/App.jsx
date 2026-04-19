import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
      setScrollProgress(Math.min(1, Math.max(0, nextProgress)))
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  const themeStyle = {
    '--scroll-progress': scrollProgress.toFixed(3),
    '--accent-hue': `${(12 + scrollProgress * 78).toFixed(1)}deg`,
    '--accent-2-hue': `${(188 + scrollProgress * 52).toFixed(1)}deg`,
    '--accent-3-hue': `${(320 - scrollProgress * 48).toFixed(1)}deg`,
    '--bg-tilt': `${(-12 + scrollProgress * 24).toFixed(1)}deg`,
    '--glow-shift': `${(scrollProgress * 140).toFixed(0)}px`,
    '--glow-shift-secondary': `${(18 + scrollProgress * 20).toFixed(1)}%`,
    '--grid-opacity': (0.12 + scrollProgress * 0.1).toFixed(3),
    '--grid-offset': `${Math.round(scrollProgress * -50)}px`,
  }

  return (
    <motion.div 
      className="app"
      style={themeStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="app-background" aria-hidden="true">
        <div className="gradient-mesh"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="grid-overlay"></div>
      </div>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  )
}
