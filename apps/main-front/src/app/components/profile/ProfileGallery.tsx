import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface ProfileGalleryInterface {
  pictures: string[];
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 5,
  arrows: true,
};

const ProfileGallery: FC<ProfileGalleryInterface> = ({ pictures }) => {
  return (
    <div className="p-gallery">
      <Slider {...sliderSettings}>
        {pictures.map((picture, key) => {
          return (
            <div key={`images-gallery-${key}`} className="gallery-img-wrapper">
              {' '}
              <img className="gallery-img" src={picture} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProfileGallery;
