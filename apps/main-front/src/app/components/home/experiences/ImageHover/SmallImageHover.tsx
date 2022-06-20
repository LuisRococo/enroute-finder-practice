import React from 'react';
import styles from './sm-img.module.scss';
import { AiFillEye } from 'react-icons/ai';

export const SmallImageHover = () => {
   return (
      <div
         style={{ backgroundImage: 'url("https://cdn.create.vista.com/api/media/medium/302876834/stock-photo-beautiful-smiling-girl-isolated-pink?token=")' }}
         className={styles['container']}
      >
         <div className={styles['hover-content']}>
            <AiFillEye className={styles['icon']} />
         </div>
      </div>
   );
};
