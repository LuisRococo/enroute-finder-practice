import React, { FC } from 'react';
import styles from './big-card.module.scss';

export interface BigExperienceCardInterface {
   image: string;
   title: string;
   age: number;
   desc: string;
}

export const BigExperienceCard: FC<BigExperienceCardInterface> = ({ image, age, desc, title }) => {
   return (
      <div className={styles['big-card']}>
         <img className={styles['image']} src={image} alt="profile-img" />
         <p className={styles['name']}>
            {title} <span className={styles['age']}>, {age}</span>
         </p>

         <p className={styles['desc']}>{desc}</p>
      </div>
   );
};
