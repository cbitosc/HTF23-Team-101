// components/CircularImage.js
import React from 'react';

const CircularImage = ({ imageUrl }) => {
    return (
        <div className={styles.circularImage}>
            <img
                src={imageUrl}
                alt="Profile"
                className={styles.image}
            />
        </div>
    );
};

export default CircularImage;
