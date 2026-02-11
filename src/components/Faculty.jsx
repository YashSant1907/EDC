import React from 'react';
// FIXED: Imported 'facultyIncharge' (lowercase 'c') to match your data file
import { facultyIncharge } from '../data/events'; 
import './Faculty.css';

function Faculty() {
  return (
    <section id="team" className="faculty">
      <div className="faculty-container">
        <h2 className="section-title">Faculty Incharge</h2>

        {/* Changed to faculty-grid to support multiple cards */}
        <div className="faculty-grid">
          {facultyIncharge.map((faculty) => (
            <div key={faculty.id} className="faculty-card">
              <div className="faculty-image-wrapper">
                <div className="faculty-image">
                  <img src={faculty.image} alt={faculty.name} />
                </div>
              </div>

              <div className="faculty-details">
                <h3 className="faculty-name">{faculty.name}</h3>
                <p className="faculty-designation">{faculty.designation}</p>
                {/* Render role if it exists */}
                {faculty.role && <p className="faculty-role">{faculty.role}</p>}
                <p className="faculty-description">{faculty.description}</p>

                <div className="faculty-highlights">
                  {/* Map through the highlights array from data */}
                  {faculty.highlights && faculty.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <span className="highlight-icon">{highlight.icon}</span>
                      <span className="highlight-text">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculty;