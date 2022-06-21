import React, { useState } from 'react';
import { BigExperienceCard } from '../ExperienceCard/BigExperienceCard';
import { OnClickFunctionType, SmallImageHover } from '../ImageHover/SmallImageHover';
import { userExperiences } from './data';
import stylesSection from './section.module.scss';

export const UserExperiencesSection = () => {
   const [selectedExperience, setSelectedExperience] = useState(userExperiences[0]);
   const onSmallImageClick: OnClickFunctionType = (newUserExperience) => {
      setSelectedExperience(newUserExperience);
   };

   return (
      <div className={`${stylesSection['section']} wrapper`}>
         <h3 className={stylesSection['title']}>Testimonies</h3>
         <hr className="divisor" />

         <div className={stylesSection['testimonies-area']}>
            <div className={stylesSection['testimonies-testimony']}>
               <BigExperienceCard {...selectedExperience} />
            </div>
            <div>
               <div className={stylesSection['testimonies-people']}>
                  {userExperiences.map((experience, key) => {
                     return (
                        <SmallImageHover
                           onClick={onSmallImageClick}
                           age={experience.age}
                           desc={experience.desc}
                           img={experience.img}
                           name={experience.name}
                           key={`img-experience-${key}`}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};
