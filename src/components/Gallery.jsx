import './Gallery.css';

function Gallery() {
  const galleryImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Meeting with Industry Leaders"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Team Collaboration Session"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Networking Event"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Workshop with Entrepreneurs"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Startup Pitch Competition"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Guest Speaker Session"
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Ideation Workshop"
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Panel Discussion"
    },
    {
      id: 9,
      url: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Award Ceremony"
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Gallery</h2>
        <p className="gallery-subtitle">Moments from our journey of innovation and entrepreneurship</p>

        <div className="masonry-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.url} alt={image.caption} />
              <div className="gallery-overlay">
                <p className="gallery-caption">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
