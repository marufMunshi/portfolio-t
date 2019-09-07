import React from 'react';
import Slider from "react-slick";

const settings = {
  adaptiveHeight: false,
  // autoplay: true,
  arrows: true,
  dots: true,
  easing: 'ease-in',
  pauseOnHover: false,
  pauseOnDotsHover: true,
  speed: 1300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '100px'
};

export const ImageSlider = (props) => (
  <Slider {...settings}>
    {props.images.map((image, index) =>
      <div key={index} className="br3 w-100 tc br3">
        <img src={image} alt="" style={{ width: '60%', display: 'inline-block', borderRadius: '0.5rem' }} />
      </div>
    )}
  </Slider>
);