import React from 'react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const CardCarousel = ({ cards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const previousCard = () => {
        const newIndex = currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
        setCurrentCardIndex(newIndex);
    };

    const nextCard = () => {
        const newIndex = currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1;
        setCurrentCardIndex(newIndex);
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-between">
                <button onClick={previousCard} className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
                </button>
                <button onClick={nextCard} className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                </button>
            </div>
            <div className="flex overflow-x-auto">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`w-80 mx-4 transition-all duration-300 transform ${
                            index === currentCardIndex ? 'scale-100' : 'scale-90'
                        }`}
                    >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900">{card.title}</h3>
                                <p className="mt-2 text-sm text-gray-500">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardCarousel;
