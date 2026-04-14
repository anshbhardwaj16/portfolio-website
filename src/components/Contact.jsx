import { motion } from 'framer-motion'
import './Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contactMethods = [
    { icon: '📧', label: 'Email', value: 'anshbhardwaj16@gmail.com', href: 'mailto:anshbhardwaj16@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 8445256683', href: 'tel:+918445256683' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/anshbhardwaj16', href: 'https://www.linkedin.com/in/anshbhardwaj16/' },
    { icon: '📍', label: 'Location', value: 'Meerut, India', href: '#' }
  ]

  return (
    <motion.section 
      id="contact"
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="contact-container">
        <motion.div className="contact-header" variants={itemVariants}>
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={containerVariants}
          >
            {contactMethods.map((method, index) => (
              <motion.a 
                key={method.label}
                href={method.href}
                className="contact-method"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="method-icon">{method.icon}</span>
                <div>
                  <p className="method-label">{method.label}</p>
                  <p className="method-value">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <motion.div className="form-group" variants={itemVariants}>
              <label>Name</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label>Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label>Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="5"
              ></textarea>
            </motion.div>

            <motion.button 
              type="submit"
              className="submit-btn"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 107, 107, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      <motion.div 
        className="contact-bg"
        animate={{ 
          x: [-50, 50, -50],
          y: [0, -50, 0]
        }}
        transition={{ repeat: Infinity, duration: 15 }}
      ></motion.div>
    </motion.section>
  )
}
