import { motion } from 'framer-motion'
import './Experience.css'

const responsibilities = [
  '~800 production Airflow DAGs',
  'Reusable AutoDAG templates',
  'Selenium test automation with Docker/GitHub Actions',
  'GenAI Airflow Auto-Healing Framework using Copilot Studio/Power Automate',
]

const impact = [
  '20% manual ops reduction',
  '50+ engineering hours/month saved',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <motion.div
        className="experience-bg"
        aria-hidden="true"
        animate={{ x: [0, 36, 0], y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="experience-container">
        <motion.div className="experience-header" variants={itemVariants}>
          <span className="experience-eyebrow">Career journey</span>
          <h2>Experience</h2>
        </motion.div>

        <motion.article
          className="experience-card"
          variants={itemVariants}
          whileHover={{ y: -6, boxShadow: '0 24px 54px hsl(var(--accent-hue) 92% 68% / 0.18)' }}
        >
          <div className="experience-timeline" aria-hidden="true">
            <span className="experience-timeline-dot" />
            <span className="experience-timeline-line" />
          </div>

          <div className="experience-content">
            <div className="experience-topline">
              <div>
                <p className="experience-company">Accenture Solutions Pvt. Ltd.</p>
                <h3>Data Engineer <span>(Management &amp; Governance Analyst)</span></h3>
              </div>
              <div className="experience-meta" aria-label="Role details">
                <span>{'Sep 2023\u2013Present'}</span>
                <span>Noida</span>
              </div>
            </div>

            <ul className="experience-responsibilities">
              {responsibilities.map((responsibility) => (
                <motion.li key={responsibility} variants={itemVariants}>
                  <span className="experience-check" aria-hidden="true">{'\u2726'}</span>
                  <span>{responsibility}</span>
                </motion.li>
              ))}
            </ul>

            <div className="experience-impact" aria-label="Key impact">
              {impact.map((result) => (
                <motion.span key={result} variants={itemVariants} whileHover={{ scale: 1.04 }}>
                  {result}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </motion.section>
  )
}
