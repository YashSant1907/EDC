import { motion } from 'framer-motion';
import { facultyIncharge, coreTeam, departmentLeads } from '../data/team';
import './Team.css';

function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const departments = [
    { name: "Logistics", leads: departmentLeads.filter(lead => lead.department === "Logistics") },
    { name: "PR and Marketing", leads: departmentLeads.filter(lead => lead.department === "PR and Marketing") },
    { name: "Finance and Database", leads: departmentLeads.filter(lead => lead.department === "Finance and Database") },
    { name: "Social Media and Design", leads: departmentLeads.filter(lead => lead.department === "Social Media and Design") },
    { name: "Tech Innovation", leads: departmentLeads.filter(lead => lead.department === "Tech Innovation") }
  ];

  return (
    <section id="team" className="team">
      <div className="team-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>

        <motion.div
          className="team-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="team-section-title">Faculty Incharge</h3>
          <div className="team-grid faculty-grid">
            {facultyIncharge.map((member) => (
              <motion.div
                key={member.id}
                className="team-card faculty-card"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-overlay"></div>
                </div>
                <div className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="team-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="team-section-title">Core Team</h3>
          <div className="team-grid core-grid">
            {coreTeam.map((member) => (
              <motion.div
                key={member.id}
                className="team-card"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-overlay"></div>
                </div>
                <div className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="team-section departments-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="team-section-title">Department Leads</h3>
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              className="department-group"
              variants={containerVariants}
            >
              <h4 className="department-name">{dept.name}</h4>
              <div className="team-grid department-grid">
                {dept.leads.map((member) => (
                  <motion.div
                    key={member.id}
                    className="team-card"
                    variants={itemVariants}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="team-image-wrapper">
                      <img src={member.image} alt={member.name} className="team-image" />
                      <div className="team-overlay"></div>
                    </div>
                    <div className="team-info">
                      <h4 className="team-name">{member.name}</h4>
                      <p className="team-role">{member.role}</p>
                      <p className="team-bio">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Team;
