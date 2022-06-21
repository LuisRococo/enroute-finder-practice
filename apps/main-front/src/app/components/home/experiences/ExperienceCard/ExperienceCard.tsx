import React, { FC } from 'react';
import { UserExperienceInterface } from '../Section/data';
import styles from './styles.module.scss';

export const ExperienceCard: FC<UserExperienceInterface> = ({ img, age, desc, name }) => {
   return (
      <div className={styles['big-card']}>
         <img className={styles['image']} src={img} alt="profile-img" />
         <p className={styles['name']}>
            {name} <span className={styles['age']}>, {age}</span>
         </p>

         <p className={styles['desc']}>{desc}</p>
      </div>
   );
};
