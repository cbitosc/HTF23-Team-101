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

            
            
            <Carousel 
            cards={cardsData}
            />
        </div>
    );
};

export default Home;
