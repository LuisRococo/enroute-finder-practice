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
      original:
         'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
      thumbnail:
         'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
      originalHeight: imgsHeight,
   },
   {
      original:
         'https://media.glamour.com/photos/57e94748c2b4c18e4f81bb6f/16:9/w_1280,c_limit/airbnb-girls-getaway.jpg',
      thumbnail:
         'https://media.glamour.com/photos/57e94748c2b4c18e4f81bb6f/16:9/w_1280,c_limit/airbnb-girls-getaway.jpg',
      originalHeight: imgsHeight,
   },
   {
      original:
         'https://www.wellandgood.com/wp-content/uploads/2021/08/getty-best-camping-essentials.jpg',
      thumbnail:
         'https://www.wellandgood.com/wp-content/uploads/2021/08/getty-best-camping-essentials.jpg',
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
