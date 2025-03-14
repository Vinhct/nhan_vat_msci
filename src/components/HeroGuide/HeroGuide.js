import React from 'react';
import './HeroGuide.css'

const HeroGuide = ({ selectedHero }) => {
  if (!selectedHero || !selectedHero.guide || (!selectedHero.guide.videoUrl && !selectedHero.guide.guideImage)) {
    return null;
  }

  return (
    <div className="guide-container">
      <h2 className="guide-title">
      <span className="skills-number">02</span>Hero Guide
      </h2>
      <div className="guide-content">
        {selectedHero.guide.videoUrl && (
          <iframe
            width="560"
            height="315"
            src={selectedHero.guide.videoUrl}
            title="Guide Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        {selectedHero.guide.guideImage && (
          <div className="guide-image-container">
            <img src={selectedHero.guide.guideImage} alt={`${selectedHero.name} Guide`} className="guide-image" />
          </div>
        )}
        <div className="character-image-container">
          <img src={selectedHero.characterImage} alt={selectedHero.name} className="character-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroGuide;