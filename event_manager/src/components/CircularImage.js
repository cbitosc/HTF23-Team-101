// components/CircularImage.js
import React from 'react';
import './styles/circle.css';

const CircularImage = ({ imageUrl }) => {
  return (
    <div className="circular-image">
      <img src={imageUrl} alt="Circular" />
    </div>
  );
};

export default CircularImage;
