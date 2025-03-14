import React, { useState } from 'react';
import './HeroArt.css';

const HeroArt = ({ selectedHero }) => {
  const [currentArtIndex, setCurrentArtIndex] = useState(0);

  if (!selectedHero || !selectedHero.art || selectedHero.art.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentArtIndex((prev) => (prev > 0 ? prev - 1 : selectedHero.art.length - 1));
  };

  const handleNext = () => {
    setCurrentArtIndex((prev) => (prev < selectedHero.art.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="art-container">
      <h2 className="art-title">
      <span className="skills-number">04</span>Hero Art</h2>
      <div className="art-content">
        <button className="art-nav-btn prev" onClick={handlePrev}>←</button>
        <div className="art-image-container">
          <img src={selectedHero.art[currentArtIndex].image} alt={`${selectedHero.name} Art ${currentArtIndex + 1}`} className="art-image" />
        </div>
        <button className="art-nav-btn next" onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default HeroArt;