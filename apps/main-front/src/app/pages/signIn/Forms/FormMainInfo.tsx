import { Button, FilledInput } from '@finder/components';
import React, { FC } from 'react';
import { FormCard } from '../FormCard';
import styles from '../styles.module.scss';
import { FormCardInterface } from '../types';

export const FormMainInfo: FC = () => {
   return (
      <div>
         <FormCard>
            <>
               <FilledInput className={styles['form-input']} />
               <FilledInput className={styles['form-input']} />
               <FilledInput className={styles['form-input']} />
               <FilledInput className={styles['form-input']} />
               <FilledInput className={styles['form-input']} />
               <FilledInput className={styles['form-input']} />
            </>
         </FormCard>
         <Button text="Previous one" />
         <Button text="Next" />
      </div>
   );
};
