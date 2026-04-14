import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
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
          <span className="highlight">Platform & Data</span> Engineer
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
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 107, 107, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View Accomplishments
          </motion.button>
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(158, 107, 255, 0.5)' }}
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
