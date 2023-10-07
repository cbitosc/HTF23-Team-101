// pages/index.js
import React from 'react';
import Card from '@/components/card';

const cardsData = [
    {
        title: 'Card 1',
        description: 'Description for Card 1',
        // image: 'https://source.unsplash.com/random/800x600',
        image: 'https://source.unsplash.com/random/800x600',
    },
    {
        title: 'Card 2',
        description: 'Description for Card 2',
        image: '/path/to/card2-image.jpg',
    },
    {
        title: 'Card 3',
        description: 'Description for Card 3',
        image: '/path/to/card3-image.jpg',
    },
];

const Home = () => {
    return (
        <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                />
            ))}
        </div>
    );
};

export default Home;
