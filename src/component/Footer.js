import React from 'react';

export const Footer = () => (
  <div 
    className="flex flex-wrap justify-center pa3 pa5-l"
    style={{
      backgroundColor: '#34362F'
    }}
  >
    <h2 className="f3-l f5 fw4 livvic ma0 pb2 pb4-l tc w-100 white">Thanks for your attention</h2>
    <span 
      style={{ color: '#b43a38', letterSpacing: '2px' }}
      className="f5-l f7 tc"
    >
      <a
        href="mailto:ijtani127@gmail.com"
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        className="dim link yellow">
        Contact Me
      </a>
      &nbsp; //FOLLOW ME ON &nbsp;
      <a
        className="dim link ph2 yellow"
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        href="https://www.youtube.com/channel/UCaZ26nwdkNSqSBZm_6okv-g"
      >
        Youtube
      </a>
    </span>
  </div>
);