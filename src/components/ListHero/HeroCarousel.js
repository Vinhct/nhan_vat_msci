import React from 'react';
import HeroCard from './HeroCard';

const HeroCarousel = ({ heroes, startIndex, cardsVisible, handleCardClick, isTransitioning }) => {
  const extendedHeroes = [...heroes, ...heroes, ...heroes];
  const cardWidth = 170;
  const translateX = -(startIndex * cardWidth);

  return (
    <div className="hero-container" style={{ zIndex: 5 }}>
      <div
        className="card-wrapper"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isTransitioning ? 'transform 0.6s ease-out' : 'none',
        }}
      >
        {extendedHeroes.map((hero, index) => (
          <HeroCard
            key={`${hero.id}-${index}`}
            hero={hero}
            index={index % heroes.length}
            onClick={() => handleCardClick(index % heroes.length)} // Đảm bảo gọi đúng
            cardsVisible={cardsVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;