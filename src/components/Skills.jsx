import { motion } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  { category: 'Programming', skills: ['Python', 'SQL'], icon: '01' },
  {
    category: 'Data Engineering',
    skills: ['Apache Airflow', 'Workflow Orchestration', 'Data Pipeline Management', 'DAG Monitoring & Governance', 'Databricks'],
    icon: '02',
  },
  {
    category: 'DevOps & Automation',
    skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD Pipelines', 'REST APIs', 'Power Automate'],
    icon: '03',
  },
  {
    category: 'GenAI',
    skills: [
      'Agentic AI',
      'Multi-LLM',
      'Copilot Studio',
      'Prompt Engineering',
      'Semantic Search',
      'Vector Embeddings',
      'Retrieval-Augmented Generation (RAG)',
      'LLM-Powered Workflows',
    ],
    icon: '04',
  },
  { category: 'Tools', skills: ['Jira & Confluence', 'GitHub', 'ServiceNow'], icon: '05' },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
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
          <h2>Skills &amp; Expertise</h2>
          <p>Core technologies, platforms, and AI automation capabilities</p>
        </motion.div>

        <motion.div className="skills-grid" variants={containerVariants}>
          {skillCategories.map((category) => (
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

              <motion.div className="skills-list" variants={containerVariants}>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="skill-badge"
                    variants={skillVariants}
                    whileHover={{ scale: 1.1, boxShadow: '0 10px 24px hsl(var(--accent-hue) 92% 68% / 0.24)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="skills-bg"
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      ></motion.div>
    </motion.section>
  )
}
