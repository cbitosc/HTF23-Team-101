// components/CircularImage.js
import React from 'react';
import styles from './CircularImage.module.css';

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
