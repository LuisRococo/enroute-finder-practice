import React from 'react';
import { BigExperienceCard } from '../ExperienceCard/BigExperienceCard';
import { SmallImageHover } from '../ImageHover/SmallImageHover';
import stylesSection from './section.module.scss';

export const UserExperiencesSection = () => {
   return (
      <div className={`${stylesSection['section']} wrapper`}>
         <h3 className={stylesSection['title']}>Testimonies</h3>
         <hr className="divisor" />

         <div className={stylesSection['testimonies-area']}>
            <div className={stylesSection['testimonies-testimony']}>
               <BigExperienceCard
                  age={22}
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                  image="https://cdn.create.vista.com/api/media/medium/302876834/stock-photo-beautiful-smiling-girl-isolated-pink?token="
                  title="Maria Susana"
               />
            </div>
            <div>
               <div className={stylesSection['testimonies-people']}>
                  <SmallImageHover />
                  <SmallImageHover />
                  <SmallImageHover />
                  <SmallImageHover />
               </div>
            </div>
         </div>
      </div>
   );
};
