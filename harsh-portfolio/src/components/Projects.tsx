import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Restaurant Landing Page',
      description: 'A beautiful and responsive restaurant landing page built with HTML, CSS, and JavaScript. Features modern design and smooth animations.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Harshchimnanii',
    },
    {
      title: 'Personal Profile Page',
      description: 'A responsive personal profile page showcasing clean design principles and mobile-first approach.',
      tech: ['HTML', 'CSS', 'Responsive Design'],
      github: 'https://github.com/Harshchimnanii',
    },
    {
      title: 'eCommerce Landing Page',
      description: 'A modern eCommerce landing page with product showcases and interactive elements.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Harshchimnanii',
    },
    {
      title: 'Laptop Product Showcase',
      description: 'Product showcase page featuring HP Victus, HP Pavilion, and ASUS Vivobook with detailed specifications.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Harshchimnanii',
    },
    {
      title: 'Voice-based AI Assistant (Pasta)',
      description: 'An intelligent AI assistant that can talk, control applications, and respond like ChatGPT. Built with advanced voice recognition and natural language processing.',
      tech: ['Python', 'AI/ML', 'Voice Recognition'],
      github: 'https://github.com/Harshchimnanii',
    },
    {
      title: 'CI/CD Pipeline with AWS',
      description: 'Automated deployment pipeline from GitHub to AWS S3, demonstrating DevOps practices and cloud integration.',
      tech: ['AWS', 'GitHub Actions', 'DevOps'],
      github: 'https://github.com/Harshchimnanii',
    },
  ]

  return (
    <section id="projects" className="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="section-number">04.</span> Featured Projects
        </h2>
        <p className="section-subtitle">
          Here are some of my recent projects. More coming soon!
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-header">
              <div className="project-folder">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M8 6C6.89543 6 6 6.89543 6 8V32C6 33.1046 6.89543 34 8 34H32C33.1046 34 34 33.1046 34 32V12C34 10.8954 33.1046 10 32 10H20L18 8H8Z"
                    fill="var(--accent)"
                    fillOpacity="0.2"
                  />
                </svg>
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="External Link"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

