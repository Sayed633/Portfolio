// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Hero.css';
import image_profile from '../../assets/image_profile.jpg';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={image_profile } alt="Profile" />
      <h1>
        <span>I am Sayed Ahmad</span> - Frontend Developer
      </h1>
      <p>I am a frontend developer</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a className="anchor-link" href="#contact">
            Contact / Connect with Me
          </a>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
