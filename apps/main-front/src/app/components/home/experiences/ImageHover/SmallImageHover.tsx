import React, { FC } from 'react';
import styles from './sm-img.module.scss';
import { AiFillEye } from 'react-icons/ai';
import { UserExperienceInterface } from '../UserExperiencesSec/data';

export type OnClickFunctionType = (values: UserExperienceInterface) => void;

interface SmallImageHoverInterface extends UserExperienceInterface {
   onClick: OnClickFunctionType;
}

export const SmallImageHover: FC<SmallImageHoverInterface> = ({ age, desc, img, name, onClick }) => {
   function onComponentClick() {
      const userExperience: UserExperienceInterface = {
         age: age,
         desc: desc,
         img: img,
         name: name,
      };
      onClick(userExperience);
   }

   return (
      <div style={{ backgroundImage: `url("${img}")` }} className={styles['container']} onClick={onComponentClick}>
         <div className={styles['hover-content']}>
            <AiFillEye className={styles['icon']} />
         </div>
      </div>
   );
};
