/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Slider from 'react-slick';
import './TopSlider.scss';

function Arrow(props: { className: any; onClick: any }) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

export const TopSlider: React.FC = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <Arrow className="slick-next slick-arrow" onClick={onclick} />,
    prevArrow: <Arrow className="slick-prev slick-arrow" onClick={onclick} />,
  };

  return (
    <div className="slider-wrapp">
      <Slider {...settings}>
        <div className="slick-slide">
          <span className="slick-slide--baner" />
        </div>
        <div className="slick-slide">
          <span className="slick-slide--baner slick-slide--baner-2" />
        </div>
        <div className="slick-slide">
          <span className="slick-slide--baner slick-slide--baner-3" />
        </div>
      </Slider>
    </div>
  );
};
