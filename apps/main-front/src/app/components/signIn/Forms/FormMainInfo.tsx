import { Button, FilledInput } from '@finder/components';
import React, { FC } from 'react';
import { FormCard } from '../../../pages/signIn/FormCard';
import styles from '../../../pages/signIn/styles.module.scss';
import { FormCardInterface } from '../../../pages/signIn/utils/types';

export const FormMainInfo: FC<FormCardInterface> = ({ moveNext, movePrevious, formik }) => {
   return (
      <div className={styles['form-card-wrapper']}>
         <div className={styles['form-card']}>
            <FilledInput
               {...formik.getFieldProps('name')}
               labelText="Name"
               className={styles['form-input']}
               error={formik.touched.name && formik.errors.name}
               errorText={formik.errors.name}
            />
            <FilledInput
               {...formik.getFieldProps('last_name')}
               labelText="Last Name"
               className={styles['form-input']}
               error={formik.touched.last_name && formik.errors.last_name}
               errorText={formik.errors.last_name}
            />
            <FilledInput
               {...formik.getFieldProps('email')}
               labelText="Email"
               className={styles['form-input']}
               error={formik.touched.email && formik.errors.email}
               errorText={formik.errors.email}
            />
            <FilledInput
               type={'password'}
               {...formik.getFieldProps('password')}
               labelText="Password"
               className={styles['form-input']}
               error={formik.touched.password && formik.errors.password}
               errorText={formik.errors.password}
            />
            <FilledInput
               type={'password'}
               {...formik.getFieldProps('confirmPassword')}
               labelText="Confirm Password"
               className={styles['form-input']}
               error={formik.touched.confirmPassword && formik.errors.confirmPassword}
               errorText={formik.errors.confirmPassword}
            />
         </div>

         <div className={styles['form-button-area']}>
            <Button
               onClick={movePrevious}
               className={`${styles['button-return']} ${styles['btn']}`}
               text="Return"
               type="button"
            />
            <Button
               onClick={moveNext}
               className={`${styles['button-next']} ${styles['btn']}`}
               text="Next"
               type="button"
            />
         </div>
      </div>
   );
};
