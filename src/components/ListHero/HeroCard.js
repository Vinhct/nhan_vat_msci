import React from 'react';

const HeroCard = ({ hero, index, onClick, cardsVisible }) => {
  return (
    <div
      className="hero-card"
      onClick={onClick} // Đảm bảo gắn sự kiện click
      style={{
        transform: cardsVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
        opacity: cardsVisible ? 1 : 0,
        transition: `transform 0.5s ease ${index * 0.1}s, opacity 0.5s ease ${index * 0.1}s`,
        backgroundColor: index % 3 === 0 ? 'rgba(0, 255, 0, 0.3)' : index % 3 === 1 ? 'rgba(255, 0, 0, 0.3)' : 'rgba(0, 0, 255, 0.3)',
      }}
    >
      <img src={hero.image} alt={hero.name} className="hero-image" />
      <h2 className="sci-fi-text">{hero.name}</h2>
      <div className="card-glow" />
    </div>
  );
};

export default HeroCard;