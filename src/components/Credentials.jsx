import { motion } from 'framer-motion'
import './Credentials.css'

const certifications = [
  'Microsoft Certified DP-203',
  'Astronomer Certified: Airflow Fundamentals',
  'Astronomer Certified: DAG Monitoring and Auditing',
  'Databricks Certified Generative AI Engineer Associate',
  'Microsoft Certified GitHub GHE-300',
  'Anthropic CCA-F Certified',
]

const awards = [
  'ACE Award, Accenture (May 2026)',
  'MC Star Award, Client Recognition',
  'SOS Award, Client Recognition',
]

const education = [
  {
    qualification: 'B.Tech',
    institution: 'ABES Engineering College',
    year: '2023',
  },
  {
    qualification: 'Class XII',
    institution: 'Dewan Public School International',
    year: '2019',
  },
  {
    qualification: 'Class X',
    institution: 'Dewan Public School International',
    year: '2017',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export default function Credentials() {
  return (
    <motion.section
      id="credentials"
      className="credentials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="credentials-glow credentials-glow-one" aria-hidden="true" />
      <div className="credentials-glow credentials-glow-two" aria-hidden="true" />

      <div className="credentials-container">
        <motion.div className="credentials-header" variants={itemVariants}>
          <p className="credentials-eyebrow">Credentials</p>
          <h2>Learning, recognition &amp; foundations</h2>
          <p>Professional certifications, awards, and academic milestones.</p>
        </motion.div>

        <motion.div className="credentials-grid" variants={containerVariants}>
          <motion.article className="credentials-card certifications-card" variants={itemVariants}>
            <div className="credentials-card-heading">
              <span className="credentials-card-index" aria-hidden="true">01</span>
              <div>
                <h3>Certifications</h3>
                <p>Validated expertise across cloud, data, and AI engineering.</p>
              </div>
            </div>

            <ol className="certification-list">
              {certifications.map((certification, index) => (
                <motion.li
                  key={certification}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                >
                  <span className="certification-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{certification}</span>
                </motion.li>
              ))}
            </ol>
          </motion.article>

          <motion.article className="credentials-card awards-card" variants={itemVariants}>
            <div className="credentials-card-heading">
              <span className="credentials-card-index" aria-hidden="true">02</span>
              <div>
                <h3>Awards</h3>
                <p>Recognition for impact and delivery.</p>
              </div>
            </div>

            <ul className="award-list">
              {awards.map((award) => (
                <motion.li key={award} whileHover={{ scale: 1.02 }}>
                  <span className="award-marker" aria-hidden="true" />
                  <span>{award}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>

          <motion.article className="credentials-card education-card" variants={itemVariants}>
            <div className="credentials-card-heading">
              <span className="credentials-card-index" aria-hidden="true">03</span>
              <div>
                <h3>Education</h3>
                <p>Academic background.</p>
              </div>
            </div>

            <div className="education-list">
              {education.map((item) => (
                <div className="education-item" key={`${item.qualification}-${item.year}`}>
                  <time dateTime={item.year}>{item.year}</time>
                  <div>
                    <h4>{item.qualification}</h4>
                    <p>{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article className="credentials-card languages-card" variants={itemVariants}>
            <div className="credentials-card-heading">
              <span className="credentials-card-index" aria-hidden="true">04</span>
              <div>
                <h3>Languages</h3>
                <p>Working languages.</p>
              </div>
            </div>

            <div className="language-list" aria-label="Languages">
              <motion.span whileHover={{ y: -3 }}>English</motion.span>
              <motion.span whileHover={{ y: -3 }}>Hindi</motion.span>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  )
}
