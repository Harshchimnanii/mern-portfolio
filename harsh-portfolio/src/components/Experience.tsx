import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaCode, FaLaptop, FaShoppingCart, FaRobot } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      type: 'Internship',
      company: 'Orinson Technologies Private Limited',
      duration: '1 Month',
      icon: <FaBriefcase />,
      projects: [
        {
          title: 'Restaurant Landing Page',
          tech: 'HTML/CSS/JS',
          icon: <FaCode />,
        },
        {
          title: 'Personal Profile Page',
          tech: 'CSS + Responsive Design',
          icon: <FaCode />,
        },
        {
          title: 'Basic eCommerce Landing Page',
          tech: 'HTML/CSS/JS',
          icon: <FaShoppingCart />,
        },
        {
          title: 'Laptop Product Showcase',
          tech: 'HP Victus, HP Pavilion, ASUS Vivobook',
          icon: <FaLaptop />,
        },
      ],
    },
  ]

  const otherProjects = [
    {
      title: 'Voice-based AI Assistant (Pasta)',
      description: 'AI assistant that can talk, control apps, and respond like ChatGPT',
      icon: <FaRobot />,
    },
    {
      title: 'CI/CD Learning with AWS',
      description: 'GitHub → S3 deployment pipeline',
      icon: <FaCode />,
    },
    {
      title: 'MERN Stack Learning',
      description: 'Currently learning full-stack development',
      icon: <FaCode />,
    },
  ]

  return (
    <section id="experience" className="experience">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="section-number">03.</span> Experience & Projects
        </h2>
      </motion.div>

      <div className="experience-content">
        {experiences.map((exp, expIndex) => (
          <motion.div
            key={expIndex}
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: expIndex * 0.2 }}
          >
            <div className="experience-header">
              <div className="experience-icon">{exp.icon}</div>
              <div className="experience-info">
                <h3 className="experience-company">{exp.company}</h3>
                <div className="experience-meta">
                  <span className="experience-type">{exp.type}</span>
                  <span className="experience-duration">
                    <FaCalendarAlt /> {exp.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="projects-list">
              <h4 className="projects-title">Projects Completed:</h4>
              {exp.projects.map((project, projIndex) => (
                <motion.div
                  key={projIndex}
                  className="project-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: projIndex * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="project-icon">{project.icon}</div>
                  <div className="project-details">
                    <h5>{project.title}</h5>
                    <p>{project.tech}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="other-projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="other-projects-title">Other Notable Projects</h3>
          <div className="other-projects-grid">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                className="other-project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="other-project-icon">{project.icon}</div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

