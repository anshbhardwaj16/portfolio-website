import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
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
        <motion.div 
          className="about-content"
          variants={itemVariants}
        >
          <h2>About Me</h2>
          <p>
            I'm a Platform and Data Engineer with strong expertise in large-scale workflow orchestration, CI/CD automation, 
            and reliability engineering. I specialize in managing production systems at scale, building reusable automation frameworks, 
            and implementing GenAI-driven solutions to enhance operational efficiency.
          </p>
          <p>
            Currently at Accenture, I orchestrate ~800 production Airflow DAGs, develop standardized pipeline templates, 
            and lead GenAI initiatives. My focus is on creating resilient, scalable systems that reduce manual operations 
            and improve overall platform reliability. Certified in Apache Airflow and Microsoft Azure Data Engineer.
          </p>
          
          <div className="about-stats">
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
            >
              <h3>~800</h3>
              <p>Airflow DAGs Orchestrated</p>
            </motion.div>
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
            >
              <h3>20%</h3>
              <p>Manual Ops Reduction</p>
            </motion.div>
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
            >
              <h3>1.5+</h3>
              <p>Years at Accenture</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="about-image"
          variants={itemVariants}
        >
          <motion.div 
            className="image-placeholder"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <span>🧑‍💼</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
