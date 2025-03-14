import React from 'react';
import './HeroStory.css';

const HeroStory = ({ selectedHero }) => {
  if (!selectedHero || !selectedHero.story || (!selectedHero.story.storyImage && !selectedHero.story.storyText)) {
    return null;
  }

  return (
    <div className="story-container">
      <h2 className="story-title">
      <span className="skills-number">03</span>Hero Story</h2>
      <div className="story-content">
        {selectedHero.story.storyImage && (
          <div className="story-image-container">
            <img src={selectedHero.story.storyImage} alt={`${selectedHero.name} Story`} className="story-image" />
          </div>
        )}
        <div className="story-text">
          <p>{selectedHero.story.storyText}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroStory;