import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const rotatingTitles = [
  'AI & Data Platform Engineer',
  'Building Scalable ML Systems',
  'Turning Data Into Products',
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = rotatingTitles[titleIndex]
    const typingDelay = isDeleting ? 35 : 75
    const pauseDelay = isDeleting ? 900 : 1200

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentTitle.slice(0, displayText.length + 1)
        setDisplayText(nextText)

        if (nextText === currentTitle) {
          setIsDeleting(true)
        }

        return
      }

      const nextText = currentTitle.slice(0, displayText.length - 1)
      setDisplayText(nextText)

      if (nextText === '') {
        setIsDeleting(false)
        setTitleIndex((currentIndex) => (currentIndex + 1) % rotatingTitles.length)
      }
    }, displayText === currentTitle || displayText === '' ? pauseDelay : typingDelay)

    return () => window.clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section 
      id="home"
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>

      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          <span className="hero-title-line">
            <span className="highlight hero-type-text">{displayText}</span>
            <span className="hero-cursor" aria-hidden="true"></span>
          </span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
        >
          Orchestrating large-scale workflows, automating CI/CD pipelines, and building GenAI-driven solutions for enterprise reliability
        </motion.p>

        <motion.div 
          className="hero-buttons"
          variants={itemVariants}
        >
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px hsl(var(--accent-hue) 92% 68% / 0.45)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View Accomplishments
          </motion.button>
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px hsl(var(--accent-2-hue) 88% 72% / 0.35)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
          </motion.button>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          variants={itemVariants}
        >
          <div className="mouse">
            <span className="wheel"></span>
          </div>
          <span className="text">Scroll to explore</span>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="floating-element element-1"
        animate={{ 
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [0, 360, 0]
        }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        ⚙️
      </motion.div>

      <motion.div 
        className="floating-element element-2"
        animate={{ 
          y: [20, -20, 20],
          x: [10, -10, 10],
          rotate: [360, 0, 360]
        }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        🤖
      </motion.div>

      <motion.div 
        className="floating-element element-3"
        animate={{ 
          y: [-15, 15, -15],
          rotate: [0, 180, 360]
        }}
        transition={{ repeat: Infinity, duration: 7 }}
      >
        📊
      </motion.div>
    </motion.section>
  )
}
