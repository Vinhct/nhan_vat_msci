import React from 'react';

const BackgroundImage = ({ imageUrl }) => {
  return (
    <div
      className="background-hero"
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.7,
        transition: 'background-image 0.5s ease',
        zIndex: 1,
      }}
    />
  );
};

export default BackgroundImage;