import { motion } from 'framer-motion';
import './About.css';
import teamPhoto from "../assets/grpImage.jpeg"


function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About EDC UIET
          </motion.h2>
          <motion.p className="about-text" variants={itemVariants}>
            The Entrepreneurship Development Cell at UIET Panjab University is a student-run organization dedicated to fostering the spirit of entrepreneurship and innovation among students.
          </motion.p>
          <motion.p className="about-text" variants={itemVariants}>
            We provide a platform for aspiring entrepreneurs to transform their ideas into viable business ventures through mentorship, networking opportunities, and hands-on experience.
          </motion.p>
          <motion.p className="about-text" variants={itemVariants}>
            Our mission is to create a thriving ecosystem where creativity meets opportunity, enabling students to develop entrepreneurial skills, connect with industry leaders, and launch their own startups.
          </motion.p>
          <motion.div className="about-stats" variants={containerVariants}>
            <motion.div className="stat-item" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <span className="stat-number">50+</span>
              <span className="stat-label">Events Organized</span>
            </motion.div>
            <motion.div className="stat-item" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <span className="stat-number">1000+</span>
              <span className="stat-label">Students Impacted</span>
            </motion.div>
            <motion.div className="stat-item" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <span className="stat-number">20+</span>
              <span className="stat-label">Startup Mentors</span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={teamPhoto}
            alt="EDC UIET Events"
          />
          <div className="image-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
