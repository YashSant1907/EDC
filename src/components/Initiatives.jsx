import { motion } from 'framer-motion';
import { upcomingEvents, pastEvents } from '../data/events';
import './Initiatives.css';

function Initiatives() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="initiatives" className="initiatives">
      <div className="initiatives-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Initiatives
        </motion.h2>

        {/* Upcoming Events Section */}
        <div className="initiatives-section">
          <motion.h3
            className="subsection-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Events
          </motion.h3>
          <motion.div
            className="events-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                className={`event-card ${event.isHighlighted ? 'highlighted' : ''}`}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {event.isHighlighted && (
                  <span className="event-badge">Featured</span>
                )}
                <div className="event-image">
                  <img src={event.poster} alt={event.title} />
                </div>
                <div className="event-content">
                  <h4 className="event-title">{event.title}</h4>
                  <p className="event-date">{event.date}</p>
                  <p className="event-description">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Past Events Section */}
        <div className="initiatives-section">
          <motion.h3
            className="subsection-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Past Events
          </motion.h3>
          <motion.div
            className="events-grid past-events-grid" // Added specific class for styling
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {pastEvents.map((event) => (
              <motion.div
                key={event.id}
                className="event-card past-event"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* CHANGED: Only showing the first image (index 0) */}
                <div className="event-image">
                   <img src={event.images[0]} alt={event.title} />
                </div>
                <div className="event-content">
                  <h4 className="event-title">{event.title}</h4>
                  <p className="event-description">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Initiatives;