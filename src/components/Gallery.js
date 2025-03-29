import React, { useState } from 'react';
import './Gallery.css';
import slide1 from "../Assets/slide1.jpg";
import gallery2 from "../Assets/gallery2.jpg";
import gallery3 from "../Assets/gallery3.jpg";
import gallery4 from "../Assets/gallery4.jpg";
import gallery5 from "../Assets/gallery5.jpg";
import gallery6 from "../Assets/gallery6.jpg";
import gallery7 from "../Assets/gallery7.jpg";
import gallery8 from "../Assets/gallery8.jpg";


const Gallery = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: slide1, // Use consistent property name
      title: 'Contemporary Dance Performance',
      category: 'performance'
    },
    {
      id: 2,
      src: gallery2, // Use consistent property name
      title: 'Dance Workshop',
      category: 'workshop'
    },
    {
      id: 3,
      src: gallery3,
      title: 'Unnimukundan with DK Dance World',
      category: 'classical'
    },
    {
      id: 4,
      src: gallery4,
      title: 'Hip Hop Competition',
      category: 'competition'
    },
    {
      id: 5,
      src: gallery5,
      title: 'Ballet Performance',
      category: 'performance'
    },
    {
      id: 6,
      src: gallery6,
      title: 'Rajisha Vijayan with DK Dance World',
      category: 'performance'
    },
    {
      id: 7,
      src: gallery7,
      title: 'Lulu Inauguration Ceremony',
      category: 'performance'
    },
    {
      id: 8,
      src: gallery8,
      title: 'Classical Dance Showcase',
      category: 'classical'
    },
    {
      id: 9,
      src: gallery7,
      title: 'Annual Dance Show',
      category: 'performance'
    },
    {
      id: 10,
      src: gallery8,
      title: 'Dance Competition',
      category: 'competition'
    },
    {
      id: 11,
      src: gallery7,
      title: 'Annual Dance Show',
      category: 'performance'
    },
    {
      id: 12,
      src: gallery8,
      title: 'Dance Competition',
      category: 'competition'
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'performance', 'workshop', 'classical', 'competition', 'practice'];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-container">
      <h1>Our Gallery</h1>
      
      {/* Filter Buttons */}
      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.title} />
            <div className="image-overlay">
              <h3>{image.title}</h3>
              <p>{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage.src} alt={selectedImage.title} />
          <div className="lightbox-caption">
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;