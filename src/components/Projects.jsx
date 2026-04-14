import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Airflow DAG Orchestration at Scale',
    description: 'Orchestrated ~800 production Airflow DAGs ensuring high availability, fault tolerance, and optimized execution across large-scale data platforms.',
    tags: ['Apache Airflow', 'Data Orchestration', 'Production Systems'],
    icon: '⚙️'
  },
  {
    id: 2,
    title: 'AutoDAG Template Framework',
    description: 'Developed reusable AutoDAG templates to standardize pipeline creation and accelerate onboarding of new workflows.',
    tags: ['Airflow', 'Python', 'Template Framework'],
    icon: '📋'
  },
  {
    id: 3,
    title: 'GenAI Auto-Healing Platform',
    description: 'Built an in-house GenAI-driven auto-healing framework using Copilot Studio and Power Automate to analyze failures and execute remediation scripts.',
    tags: ['GenAI', 'Copilot Studio', 'Power Automate', 'Python'],
    icon: '🤖'
  },
  {
    id: 4,
    title: 'Selenium Test Automation & CI/CD',
    description: 'Automated Selenium test execution by containerizing with Docker and orchestrating runs via GitHub Actions, eliminating manual IDE execution.',
    tags: ['Docker', 'GitHub Actions', 'Selenium', 'CI/CD'],
    icon: '🧪'
  },
  {
    id: 5,
    title: 'DAG Failure Analysis & Remediation',
    description: 'Intelligent DAG failure detection with automated remediation and re-trigger mechanisms, reducing manual intervention by ~20%.',
    tags: ['Airflow', 'Automation', 'Reliability Engineering'],
    icon: '🔧'
  },
  {
    id: 6,
    title: 'Cloud-Native Pipeline Infrastructure',
    description: 'Designed and implemented cloud-native infrastructure for reliable, scalable data pipeline execution at enterprise scale.',
    tags: ['Docker', 'Kubernetes', 'Cloud Architecture'],
    icon: '☁️'
  }
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section 
      id="projects"
      className="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="projects-container">
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Key Accomplishments</h2>
          <p>Significant projects and initiatives showcasing platform engineering expertise</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(255, 107, 107, 0.2)'
              }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <motion.span 
                    key={tag}
                    className="tag"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <motion.button 
                className="view-btn"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 107, 107, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Project →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Animation */}
      <motion.div 
        className="projects-bg"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ repeat: Infinity, duration: 15 }}
      ></motion.div>
    </motion.section>
  )
}
