import { useState } from 'react'
import { motion } from 'framer-motion'
import './Navigation.css'

const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Credentials', 'Contact']

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav className="nav" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
      <div className="nav-container">
        <motion.a className="logo" href="#home" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <span>Ansh Bhardwaj</span>
        </motion.a>

        <div className={`nav-items ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ color: 'var(--accent)', textShadow: '0 0 12px hsl(var(--accent-hue) 92% 68% / 0.45)' }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>
      </div>
    </motion.nav>
  )
}
