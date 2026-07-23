import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'GenAI-Powered Airflow Auto-Healing Framework',
    description:
      'Designed an enterprise-grade Airflow auto-healing solution that uses LLMs to analyze failures, trigger intelligent recovery workflows, and retrigger DAGs. It reduced MTTR by 20% and saved 50+ engineering hours each month.',
    tags: ['Apache Airflow', 'Python', 'Copilot Studio', 'Power Automate', 'REST APIs', 'ServiceNow', 'LLMs'],
    icon: '01',
  },
  {
    id: 2,
    title: 'OmniSpark — Enterprise Agentic AI Platform',
    description:
      'Co-created a multi-LLM platform that automates the SDLC—from Jira story creation and backlog selection to branches, code, testing, reviews, pull requests, Jira updates, and LLM policy validation. Co-developed RAGENTS, a reusable AI-agent marketplace for VS Code.',
    tags: ['Python', 'Multi-LLM', 'Jira REST APIs', 'Git', 'GitHub', 'VS Code Extension', 'Power Automate'],
    icon: '02',
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          <h2>Selected Projects</h2>
          <p>Enterprise automation and agentic AI initiatives</p>
        </motion.div>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 24px 48px hsl(var(--accent-hue) 92% 68% / 0.18)' }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <motion.span key={tag} className="tag" whileHover={{ scale: 1.1 }}>
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="projects-bg"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
      ></motion.div>
    </motion.section>
  )
}
