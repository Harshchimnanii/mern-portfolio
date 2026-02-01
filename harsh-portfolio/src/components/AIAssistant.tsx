import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa'
import './AIAssistant.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface AIAssistantProps {
  isOpen: boolean
  onClose: () => void
}

const AIAssistant = ({ isOpen, onClose }: AIAssistantProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Harsh's AI assistant. I can help you learn about his skills, projects, experience, or help you contact him. What would you like to know?",
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const knowledgeBase: { [key: string]: string } = {
    skills: "Harsh specializes in Front-End development with HTML, CSS, JavaScript, and React. He also knows Java, MySQL, Git, GitHub, and is learning DevOps and Cloud Computing. He's skilled in DSA and has strong soft skills like communication, teamwork, and problem-solving.",
    experience: "Harsh completed a 1-month internship at Orinson Technologies Private Limited where he built several projects including a restaurant landing page, personal profile page, eCommerce landing page, and laptop product showcase pages. He's also worked on a voice-based AI assistant called 'Pasta' and CI/CD pipelines with AWS.",
    projects: "Some of Harsh's notable projects include: Restaurant Landing Page, Personal Profile Page, eCommerce Landing Page, Laptop Product Showcase (HP Victus, Pavilion, ASUS Vivobook), Voice-based AI Assistant (Pasta), and CI/CD learning with AWS. He's also learning MERN stack development.",
    contact: "You can contact Harsh via:\n- Email: chimnaniharsh4@gmail.com\n- Phone: +91 8791996677\n- LinkedIn: linkedin.com/in/harshchimnanii\n- GitHub: github.com/Harshchimnanii\n- Location: Agra, India\nYou can also use the WhatsApp button or contact form on this page!",
    education: "Harsh is currently pursuing B.Tech in Computer Science (Core) at GLA University, Mathura. He's set to graduate in 2027.",
    hobbies: "Harsh enjoys music, watching movies, coding, and playing the Kadence ukulele. He's a tech geek who loves learning new technologies.",
    portfolio: "This portfolio showcases Harsh's skills, experience, projects, and contact information. It's built with React and features a modern, responsive design with GitHub-style colors.",
    default: "I can help you with information about Harsh's skills, experience, projects, education, contact details, hobbies, or this portfolio. What would you like to know?",
  }

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      return knowledgeBase.skills
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('internship') || lowerMessage.includes('work')) {
      return knowledgeBase.experience
    } else if (lowerMessage.includes('project') || lowerMessage.includes('build') || lowerMessage.includes('create')) {
      return knowledgeBase.projects
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
      return knowledgeBase.contact
    } else if (lowerMessage.includes('education') || lowerMessage.includes('university') || lowerMessage.includes('college') || lowerMessage.includes('degree')) {
      return knowledgeBase.education
    } else if (lowerMessage.includes('hobby') || lowerMessage.includes('interest') || lowerMessage.includes('like')) {
      return knowledgeBase.hobbies
    } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('website') || lowerMessage.includes('site')) {
      return knowledgeBase.portfolio
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help you learn about Harsh. What would you like to know?"
    } else if (lowerMessage.includes('help')) {
      return "I can help you with:\n- Skills & Technologies\n- Experience & Internships\n- Projects\n- Contact Information\n- Education\n- Hobbies\n\nJust ask me anything about Harsh!"
    } else {
      return knowledgeBase.default
    }
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking
    setTimeout(() => {
      const response: Message = {
        role: 'assistant',
        content: getResponse(input),
      }
      setMessages((prev) => [...prev, response])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="ai-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="ai-assistant"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="ai-header">
              <div className="ai-header-content">
                <FaRobot className="ai-header-icon" />
                <div>
                  <h3>AI Assistant</h3>
                  <p>Ask me anything about Harsh</p>
                </div>
              </div>
              <button className="ai-close-btn" onClick={onClose} aria-label="Close">
                <FaTimes />
              </button>
            </div>

            <div className="ai-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`ai-message ${message.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="message-content">{message.content}</div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="ai-message assistant typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="ai-input-container">
              <input
                type="text"
                className="ai-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects, experience..."
              />
              <button className="ai-send-btn" onClick={handleSend} aria-label="Send">
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default AIAssistant

