import { facultyInCharge } from '../data/events';
import './Faculty.css';

function Faculty() {
  return (
    <section id="team" className="faculty">
      <div className="faculty-container">
        <h2 className="section-title">Our Faculty Coordinator</h2>

        <div className="faculty-content">
          <div className="faculty-image-wrapper">
            <div className="faculty-image">
              <img src={facultyInCharge.image} alt={facultyInCharge.name} />
            </div>
          </div>

          <div className="faculty-details">
            <h3 className="faculty-name">{facultyInCharge.name}</h3>
            <p className="faculty-designation">{facultyInCharge.designation}</p>
            <p className="faculty-description">{facultyInCharge.description}</p>

            <div className="faculty-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span className="highlight-text">15+ Years of Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span className="highlight-text">Startup Ecosystem Builder</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <span className="highlight-text">Innovation Advocate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faculty;
