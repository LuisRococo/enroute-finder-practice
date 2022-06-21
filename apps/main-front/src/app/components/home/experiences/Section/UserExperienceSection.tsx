import React, { useState } from 'react';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { OnClickFunctionType, SmallExpCard } from '../SmallExpCard/SmallExpCard';
import { userExperiences } from './data';
import styles from './styles.module.scss';

export const UserExperienceSection = () => {
   const [selectedExperience, setSelectedExperience] = useState(userExperiences[0]);
   const onSmallImageClick: OnClickFunctionType = (newUserExperience) => {
      setSelectedExperience(newUserExperience);
   };

   return (
      <div className={`${styles['section']} wrapper`}>
         <h3 className={styles['title']}>Testimonies</h3>
         <hr className="divisor" />

         <div className={styles['testimonies-area']}>
            <div className={styles['testimonies-testimony']}>
               <ExperienceCard {...selectedExperience} />
            </div>
            <div>
               <div className={styles['testimonies-people']}>
                  {userExperiences.map((experience, key) => {
                     return (
                        <SmallExpCard
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
