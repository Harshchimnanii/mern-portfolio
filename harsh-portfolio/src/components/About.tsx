import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaBirthdayCake, FaMusic, FaFilm, FaCode, FaGuitar } from 'react-icons/fa'
import './About.css'

const About = () => {
  const hobbies = [
    { icon: <FaMusic />, label: 'Music' },
    { icon: <FaFilm />, label: 'Movies' },
    { icon: <FaCode />, label: 'Coding' },
    { icon: <FaGuitar />, label: 'Ukulele' },
  ]

  return (
    <section id="about" className="about">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a passionate Front-End Developer and tech enthusiast currently pursuing B.Tech in Computer Science 
            at <strong>GLA University, Mathura</strong>. I'm set to graduate in 2027 and I'm on a mission to become 
            a skilled app developer.
          </p>
          <p>
            My journey in tech started with a curiosity for creating beautiful and functional user interfaces. 
            I love building clean, modern web applications and exploring new technologies. Currently, I'm diving 
            deep into React, learning DevOps basics, and studying Cloud Computing.
          </p>
          <p>
            When I'm not coding, you'll find me playing my Kadence ukulele, watching movies, or staying consistent 
            with my daily routines. I believe in discipline, hard work, and continuous learning.
          </p>
        </motion.div>

        <motion.div
          className="about-details"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="detail-item">
            <FaGraduationCap className="detail-icon" />
            <div>
              <h3>Education</h3>
              <p>B.Tech CSE - GLA University (2027)</p>
            </div>
          </div>
          <div className="detail-item">
            <FaMapMarkerAlt className="detail-icon" />
            <div>
              <h3>Location</h3>
              <p>Agra, India</p>
            </div>
          </div>
          <div className="detail-item">
            <FaBirthdayCake className="detail-icon" />
            <div>
              <h3>Date of Birth</h3>
              <p>22nd November, 2005</p>
            </div>
          </div>
          <div className="hobbies">
            <h3>Hobbies & Interests</h3>
            <div className="hobbies-list">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  className="hobby-item"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {hobby.icon}
                  <span>{hobby.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

