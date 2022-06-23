import { Button, FilledInput } from '@finder/components';
import React, { FC } from 'react';
import { FormCard } from '../FormCard';
import styles from '../styles.module.scss';
import { FormCardInterface } from '../utils/types';

export const FormMainInfo: FC<FormCardInterface> = ({ moveNext, movePrevious }) => {
   return (
      <div className={styles['form-card-wrapper']}>
         <div className={styles['form-card']}>
            <FilledInput labelText="Name" className={styles['form-input']} />
            <FilledInput labelText="Last Name" className={styles['form-input']} />
            <FilledInput labelText="Email" className={styles['form-input']} />
            <FilledInput labelText="Password" className={styles['form-input']} />
         </div>

         <div className={styles['form-button-area']}>
            <Button onClick={movePrevious} className={`${styles['button-return']} ${styles['btn']}`} text="Return" />
            <Button onClick={moveNext} className={`${styles['button-next']} ${styles['btn']}`} text="Next" />
         </div>
      </div>
   );
};
