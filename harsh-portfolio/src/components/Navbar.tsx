import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaCloudSun } from 'react-icons/fa'
import './Navbar.css'
import type { WeatherType } from './WeatherEffects'

interface NavbarProps {
  onWeatherSelect: (type: WeatherType) => void;
  currentWeather: WeatherType | null;
}

const Navbar = ({ onWeatherSelect, currentWeather }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showWeatherMenu, setShowWeatherMenu] = useState(false)

  const weatherTypes: { type: WeatherType, label: string, icon: string }[] = [
    { type: 'Clear', label: 'Sunny', icon: '☀️' },
    { type: 'Cloudy', label: 'Cloudy', icon: '☁️' },
    { type: 'Rain', label: 'Rain', icon: '🌧️' },
    { type: 'Storm', label: 'Storm', icon: '⛈️' },
    { type: 'Snow', label: 'Snow', icon: '🌨️' },
    { type: 'Blizzard', label: 'Blizzard', icon: '❄️' },
    { type: 'Thunderstorm', label: 'Thunder', icon: '⚡' },
    { type: 'Fog', label: 'Fog', icon: '🌫️' },
    { type: 'Drizzle', label: 'Drizzle', icon: '🌦️' },
    { type: 'Overcast', label: 'Overcast', icon: '🌥️' },
    { type: 'Night', label: 'Night', icon: '🌙' },
    { type: 'Aurora', label: 'Aurora', icon: '🌌' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">HC</span>
        </motion.div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-social" style={{ position: 'relative' }}>
          <button
            onClick={() => setShowWeatherMenu(!showWeatherMenu)}
            className="weather-toggle-btn"
            aria-label="Weather Theme"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.2rem',
              cursor: 'pointer',
              marginRight: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <FaCloudSun />
            <span style={{ fontSize: '0.8rem' }}>Theme</span>
          </button>

          <AnimatePresence>
            {showWeatherMenu && (
              <motion.div
                className="weather-dropdown"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: '0',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.5rem',
                  width: '300px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  zIndex: 1001
                }}
              >
                {weatherTypes.map((bg) => (
                  <label key={bg.type} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.25rem', borderRadius: '4px', background: currentWeather === bg.type ? 'rgba(88, 166, 255, 0.1)' : 'transparent' }}>
                    <input
                      type="radio"
                      name="weather-theme"
                      value={bg.type}
                      checked={currentWeather === bg.type}
                      onChange={() => {
                        onWeatherSelect(bg.type);
                        setShowWeatherMenu(false);
                      }}
                      style={{ accentColor: 'var(--accent)' }}
                    />
                    <span>{bg.icon} {bg.label}</span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="https://github.com/Harshchimnanii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harshchimnanii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:chimnaniharsh4@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="nav-controls">
          {/* Keeping existing mobile menu logic here if needed, but integration with nav-social block effectively moves social icons. Re-adjusting structure below. */}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar

