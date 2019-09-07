import React from 'react';
import { Nav } from '../Nav';

export const About = () => (
  <div>
    <header className="bg-black-90 vh-100">
      <Nav />
      <div className="flex h-100 items-center justify-center">
        <p className="ma0 yellow">About</p>
      </div>
    </header>
  </div>
);