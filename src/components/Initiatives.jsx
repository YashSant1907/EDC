import { upcomingEvents, pastEvents } from '../data/events';
import './Initiatives.css';

function Initiatives() {
  return (
    <section id="initiatives" className="initiatives">
      <div className="initiatives-container">
        <h2 className="section-title">Our Initiatives</h2>

        <div className="initiatives-section">
          <h3 className="subsection-title">Upcoming Events</h3>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className={`event-card ${event.isHighlighted ? 'highlighted' : ''}`}
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
              </div>
            ))}
          </div>
        </div>

        <div className="initiatives-section">
          <h3 className="subsection-title">Past Events</h3>
          <div className="events-grid past-events">
            {pastEvents.map((event) => (
              <div key={event.id} className="event-card past-event">
                <div className="past-event-images">
                  {event.images.map((image, index) => (
                    <div key={index} className="past-event-image">
                      <img src={image} alt={`${event.title} ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <div className="event-content">
                  <h4 className="event-title">{event.title}</h4>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Initiatives;
