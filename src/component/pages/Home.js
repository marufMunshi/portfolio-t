import React from 'react';
import { Nav } from '../Nav';
import profile_image from '../../resources/profile-image.jpg'
import { ParticlesAnimation } from '../Particles';

export const Home = () => (
  <div>
    <header
      style={{
        backgroundColor: '#34362F',
        backgroundSize: 'cover',
        height: '100vh',
        backgroundPosition: '50% 50%'
      }}
    >
      <Nav className="bg-black-70"/>
      <ParticlesAnimation />
      <div
        className="absolute flex flex-column items-center justify-center white"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img className="br-100 w-30-l w-70" src={profile_image} alt=""/>
        <h2 
          className="f2-l f4 livvic"
          style={{
            color: '#C99946'
          }}
        >
          Hi, I'm Israt Jahan
        </h2>
        <p
          className="b f4-l f5 lh-copy tc w-100 w-60-l"
          style={{
            color: '#A59E69'
          }}
        > 
            Motion Graphics Designer. Like to Sketch and watch Animated,
            Comedy, Sci-fi, Drama,
            superhero movies, TV Series
        </p>
      </div>
    </header>
  </div>
);
