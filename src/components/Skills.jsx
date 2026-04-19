import { motion } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    category: 'Data Orchestration',
    skills: ['Apache Airflow', 'DAG Design', 'Scheduler Optimization', 'Task Dependencies', 'Error Handling', 'Monitoring'],
    icon: '⚙️'
  },
  {
    category: 'Automation & CI/CD',
    skills: ['GitHub Actions', 'Docker', 'Docker Compose', 'Containerization', 'Pipeline Automation'],
    icon: '🚀'
  },
  {
    category: 'GenAI & Intelligent Automation',
    skills: ['Copilot Studio', 'Power Automate', 'LLM Integration', 'Prompt Engineering', 'Auto-Healing Systems'],
    icon: '🤖'
  },
  {
    category: 'Programming & Tools',
    skills: ['Python', 'GitHub', 'Jira', 'Confluence', 'SQL', 'REST APIs'],
    icon: '💻'
  }
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.section 
      id="skills"
      className="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="skills-container">
        <motion.div className="section-header" variants={categoryVariants}>
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I work with</p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.category}
              className="skill-category"
              variants={categoryVariants}
              whileHover={{ y: -5 }}
            >
              <div className="category-header">
                <span className="icon">{category.icon}</span>
                <h3>{category.category}</h3>
              </div>

              <motion.div 
                className="skills-list"
                variants={containerVariants}
              >
                {category.skills.map((skill) => (
                  <motion.div 
                    key={skill}
                    className="skill-badge"
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 10px 24px hsl(var(--accent-hue) 92% 68% / 0.24)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill level bars */}
        <motion.div 
          className="skill-levels"
          variants={containerVariants}
        >
          <motion.div className="skill-level" variants={categoryVariants}>
            <div className="level-label">
              <span>Apache Airflow</span>
              <span>95%</span>
            </div>
            <motion.div 
              className="progress-bar"
              initial={{ width: 0 }}
              whileInView={{ width: '95%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
            ></motion.div>
          </motion.div>

          <motion.div className="skill-level" variants={categoryVariants}>
            <div className="level-label">
              <span>Python</span>
              <span>90%</span>
            </div>
            <motion.div 
              className="progress-bar"
              initial={{ width: 0 }}
              whileInView={{ width: '90%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            ></motion.div>
          </motion.div>
           <motion.div className="skill-level" variants={categoryVariants}>
            <div className="level-label">
              <span>Gen AI Copilot Studio and MS PowerAutomate </span>
              <span>85%</span>
            </div>
            <motion.div 
              className="progress-bar"
              initial={{ width: 0 }}
              whileInView={{ width: '85%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            ></motion.div>
          </motion.div>

          <motion.div className="skill-level" variants={categoryVariants}>
            <div className="level-label">
              <span>Docker & GitHub Actions</span>
              <span>83%</span>
            </div>
            <motion.div 
              className="progress-bar"
              initial={{ width: 0 }}
              whileInView={{ width: '83%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="skills-bg"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ repeat: Infinity, duration: 8 }}
      ></motion.div>
    </motion.section>
  )
}
