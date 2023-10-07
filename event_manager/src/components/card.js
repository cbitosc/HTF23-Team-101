// components/Card.js
import React from 'react';

const Card = ({ title, description, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default Card;
