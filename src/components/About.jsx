import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About EDC UIET</h2>
          <p className="about-text">
            The Entrepreneurship Development Cell at UIET Panjab University is a student-run organization dedicated to fostering the spirit of entrepreneurship and innovation among students.
          </p>
          <p className="about-text">
            We provide a platform for aspiring entrepreneurs to transform their ideas into viable business ventures through mentorship, networking opportunities, and hands-on experience.
          </p>
          <p className="about-text">
            Our mission is to create a thriving ecosystem where creativity meets opportunity, enabling students to develop entrepreneurial skills, connect with industry leaders, and launch their own startups.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Events Organized</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Students Impacted</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Startup Mentors</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="EDC UIET Events"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
