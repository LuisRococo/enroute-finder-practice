import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { IoMdPhotos } from 'react-icons/io';

export interface ProfileGalleryInterface {
   pictures: string[];
}

const imgsHeight = 500;

const images: ReadonlyArray<ReactImageGalleryItem> = [
   {
      original: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd923724.jpg',
      thumbnail: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd923724.jpg',
      originalHeight: imgsHeight,
   },
   {
      original:
         'http://www.oneikathetraveller.com/wp-content/uploads/2017/03/girls-getaway-tips-group-travel.jpg',
      thumbnail:
         'http://www.oneikathetraveller.com/wp-content/uploads/2017/03/girls-getaway-tips-group-travel.jpg',
      originalHeight: imgsHeight,
   },
   {
      original:
         'https://www.katespring.com/wp-content/uploads/2019/02/datingonvacation-704x454.jpg',
      thumbnail:
         'https://www.katespring.com/wp-content/uploads/2019/02/datingonvacation-704x454.jpg',
      originalHeight: imgsHeight,
   },
];

const ProfileGallery: FC<ProfileGalleryInterface> = ({ pictures }) => {
   return (
      <div className="gallery">
         <div className="gallery-title-cont">
            <IoMdPhotos className="gallery-icon" />
            <h3 className="profile-section-title gallery-title">Gallery</h3>
         </div>
         <hr className="divisor gallery-divisor" />
         <ImageGallery items={images} />
      </div>
   );
};

export default ProfileGallery;
