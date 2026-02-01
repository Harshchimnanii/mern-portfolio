import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const phoneNumber = '918791996677'
  const message = encodeURIComponent('Hi Harsh! I came across your portfolio and would like to connect.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </motion.a>
  )
}

export default WhatsAppButton

