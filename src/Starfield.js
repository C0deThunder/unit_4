import React, { useEffect } from 'react';
import './App.css';

const colors = ['#31759e', '#31759e', '#df3233', '#711d2a', 'white', 'white'];

const StarField = () => {
  useEffect(() => {
    const starField = document.querySelector('.star-field');

    const animations = ['moveStar', 'moveStarAlt'];
    let animationIndex;

    const generateRandomStars = () => {
      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${10 + Math.random() * 4}s`;
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const starSize = 5 + Math.random() * 3;
        star.style.width = `${starSize}px`;
        star.style.height = `${starSize}px`;

        animationIndex = Math.floor(Math.random() * animations.length);
        star.style.animationName = animations[animationIndex];

        starField.appendChild(star);
      }
    };

    generateRandomStars();
  }, []);

  return <div className="star-field"></div>;
};

export default StarField;
