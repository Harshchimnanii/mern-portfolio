import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithub, FaCode, FaCloud, FaLinux } from 'react-icons/fa'

import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: [
        { name: 'HTML', icon: <FaHtml5 />, color: '#e34c26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#264de4' },
        { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
      ],
    },
    {
      title: 'Backend / DB',
      skills: [
        { name: 'Java', icon: <FaJava />, color: '#ed8b00' },
        { name: 'MySQL', icon: <FaCode />, color: '#4479a1' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
        { name: 'VS Code', icon: <FaCode />, color: '#007acc' },
        { name: 'Linux', icon: <FaLinux />, color: '#fcc624' },
      ],
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'DSA', icon: <FaCode />, color: '#58a6ff' },
        { name: 'DevOps Basics', icon: <FaCloud />, color: '#58a6ff' },
        { name: 'Cloud Computing', icon: <FaCloud />, color: '#58a6ff' },
      ],
    },
  ]

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Quick Learner',
    'Consistency',
  ]

  return (
    <section id="skills" className="skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="section-number">02.</span> Skills
        </h2>
      </motion.div>

      <div className="skills-content">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="soft-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="category-title">Soft Skills</h3>
          <div className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="soft-skill-tag"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

