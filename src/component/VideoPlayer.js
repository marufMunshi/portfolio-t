import React from 'react';
import ReactPlayer from 'react-player'

export const VideoPlayer = (props) => (
  <ReactPlayer 
    url={props.url}
    muted={true}
    controls={true}
    light={true}
    playing
  />
);