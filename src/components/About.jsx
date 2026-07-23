import { motion } from 'framer-motion'
import './About.css'

const stats = [
  { value: '2.5+', label: 'Years of Experience' },
  { value: '800+', label: 'Production Airflow DAGs' },
  { value: '20%', label: 'Manual Ops Reduction' },
  { value: '50+', label: 'Engineering Hours Saved / Month' },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  return (
    <motion.section
      id="about"
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="about-container">
        <motion.div className="about-content" variants={itemVariants}>
          <h2>About Me</h2>
          <p>
            I&apos;m a Platform &amp; Data Engineer with 2.5+ years of experience designing and operating large-scale data
            platforms, workflow orchestration systems, and enterprise automation solutions.
          </p>
          <p>
            At Accenture, I manage 800+ production Apache Airflow DAGs, develop SQL-driven workflows and reusable
            automation frameworks, and build GenAI-powered operational intelligence. My work spans LLMs, Copilot Studio,
            Power Automate, CI/CD automation, and resilient data platforms.
          </p>

          <div className="about-stats">
            {stats.map((stat) => (
              <motion.div key={stat.label} className="stat" whileHover={{ scale: 1.05 }}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="about-image" variants={itemVariants}>
          <motion.div
            className="image-placeholder"
            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            aria-label="Data and AI platform engineering"
          >
            <span>AI</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
