import { useState } from 'react'; // Import useState
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import './Gallery.css';

// Import all images from the assets folder
import img1 from '../assets/0a7e28e7-397b-4db1-9391-e232f1d02c12.jpeg';
import img2 from '../assets/00cef8eb-9181-481f-b074-edb231fe76f4.jpeg';
import img3 from '../assets/3b43fe4f-94ca-48cf-af5e-5524b9dcfa2c.jpeg';
import img4 from '../assets/3f39a812-34a8-4c95-a9ba-3ba5c9005866.jpeg';
import img5 from '../assets/60ca003d-698e-4e0c-b1ca-b06000bc2c10.jpeg';
import img6 from '../assets/850f50e3-5642-427a-9d21-948cc59f16e4.jpeg';
import img7 from '../assets/c723c595-d718-4911-88b7-71d23a2dbdce.jpeg';
import img8 from '../assets/d336f786-343a-43b5-a3b2-1ab5e351195c.jpeg';
import imgTiecon from '../assets/tiecon.png';
import imgPlaceholder from '../assets/image.png';

function Gallery() {
  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, url: img1, caption: "Meeting with Industry Leaders" },
    { id: 2, url: img2, caption: "Team Collaboration Session" },
    { id: 3, url: img3, caption: "Networking Event" },
    { id: 4, url: img4, caption: "Workshop with Entrepreneurs" },
    { id: 5, url: img5, caption: "Startup Pitch Competition" },
    { id: 6, url: img6, caption: "Guest Speaker Session" },
    { id: 7, url: img7, caption: "Ideation Workshop" },
    { id: 8, url: img8, caption: "Panel Discussion" },
    { id: 9, url: imgTiecon, caption: "Award Ceremony" },
    { id: 10, url: imgPlaceholder, caption: "" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>
        <motion.p
          className="gallery-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Moments from our journey of innovation and entrepreneurship
        </motion.p>

        <motion.div
          className="masonry-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`} // Helper for smooth transition
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(image)} // Open modal on click
            >
              <img src={image.url} alt={image.caption} />
              <div className="gallery-overlay">
                <p className="gallery-caption">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* The Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)} // Close on background click
            >
              <motion.div 
                className="lightbox-content"
                layoutId={`image-${selectedImage.id}`}
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image itself
              >
                <motion.img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption} 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                />
                <motion.p 
                  className="lightbox-caption"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedImage.caption}
                </motion.p>
                <button 
                  className="lightbox-close" 
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Gallery;