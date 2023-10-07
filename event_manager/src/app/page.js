// pages/index.js
import React from 'react';
import Card from '@/components/card'; // Update the component import with a capital 'C' for 'Card'
import Header from '@/components/header/Header';
import Carousel from '@/components/carousel';
import events from "./DB/events.json"
import clubs from "./DB/clubs.json"
import CircularImage from '@/components/CircularImage';

let fname = "Ram";


const Home = () => {

    return (
        <div>
            <Header />
            <div className='text-[40px]'>
                    Welcome {fname},
            </div>
            <div className='text-[30px] mt-[3.5rem] ml-2'>
                    Upcoming Events
            </div>
            
            <Carousel
            cards={events}
            />
            <div className='text-[30px] mt-[3.5rem] ml-2'>
                    Clubs :
            </div>
            
            <Carousel
            cards={clubs}
            />
            
<CircularImage imageUrl="https://source.unsplash.com/random/800x600/?art" />;



        </div>
    );
};

export default Home;
