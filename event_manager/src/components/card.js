// components/Card.js
import React from 'react';

const Card = ({ title, description, image, url }) => {
    return (

        <div className="bg-white bg-opacity-60 rounded-lg shadow-lg overflow-hidden min-w-[400px] ml-2">
            <a href={url}>
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-100">{title}</h3>
                <p className="mt-2 text-sm text-gray-700">{description}</p>
            </div>
            </a>
        </div>
        
    );
};

export default Card;
