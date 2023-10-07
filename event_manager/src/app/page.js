// pages/index.js
import React from 'react';
import Card from '@/components/card'; // Update the component import with a capital 'C' for 'Card'
import Header from '@/components/header/Header';
import Carousel from '@/components/carousel';

const cardsData = [
    {
        title: 'Card 1',
        description: 'Description for Card 1',
        image: 'https://source.unsplash.com/random/800x600',
    },
    {
        title: 'Card 2',
        description: 'Description for Card 2',
        image: 'https://source.unsplash.com/random/800x600',
    },
    {
        title: 'Card 3',
        description: 'Description for Card 3',
        image: 'https://source.unsplash.com/random/800x600',
    },
    {
        title: 'Card 3',
        description: 'Description for Card 3',
        image: 'https://source.unsplash.com/random/800x600',
    },{
        title: 'Card 3',
        description: 'Description for Card 3',
        image: 'https://source.unsplash.com/random/800x600',
    },{
        title: 'Card 3',
        description: 'Description for Card 3',
        image: 'https://source.unsplash.com/random/800x600',
    },{
        title: 'Card 3',
        description: 'Description for Card 3',
        image: 'https://source.unsplash.com/random/800x600',
    },{
        title: 'Card 3',
        description: 'Description for Card 3',
        image: 'https://source.unsplash.com/random/800x600',
    },
];

const Home = () => {

    return (
        <div>
             <Header />
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
            <Carousel 
            cards={cardsData}
            />
        </div>
    );
};

export default Home;
