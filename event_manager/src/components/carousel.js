"use client";
import React, { useRef } from 'react';
import './carousel.css';
import Card from './card';

const Carousel = ({ cards }) => {
  const cardsContainerRef = useRef(null);

  const scrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: -200, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: 200, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="card-list">
      <button className="scroll-button left-button" onClick={scrollLeft}>←</button>
      <div className="cards-container" ref={cardsContainerRef}>
        {cards.map((card, index) => (
          <Card 
          image={card.image}
          title={card.title}
          description={card.description}
          />
        ))}
      </div>
      <button className="scroll-button right-button" onClick={scrollRight}>→</button>
    </div>
  );
};

export default Carousel;
