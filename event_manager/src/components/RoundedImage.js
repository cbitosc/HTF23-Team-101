import React from 'react';
import './styles/round.css';

const RoundedImage = ({ imageUrl }) => {
  return (
    <div className="rounded-image">
      <img src={imageUrl} alt="Circular" />
    </div>
  );
};

export default RoundedImage;
