import React, { FC } from 'react';
import { FormCardInterface } from '../utils/types';
import styles from '../styles.module.scss';
import { Button, FilledInput } from '@finder/components';

const FormOtherInfo: FC<FormCardInterface> = ({ formik, moveNext, movePrevious }) => {
   return (
      <div className={styles['form-card-wrapper']}>
         <div className={styles['form-card']}>
            <FilledInput
               {...formik.getFieldProps('phone')}
               labelText="Phone"
               className={styles['form-input']}
               error={formik.touched.phone && formik.errors.phone}
               errorText={formik.errors.phone}
            />
            <FilledInput
               {...formik.getFieldProps('age')}
               labelText="Age"
               className={styles['form-input']}
               error={formik.touched.age && formik.errors.age}
               errorText={formik.errors.age}
            />
            <FilledInput
               {...formik.getFieldProps('gender')}
               labelText="Gender"
               className={styles['form-input']}
               error={formik.touched.gender && formik.errors.gender}
               errorText={formik.errors.gender}
            />
            <FilledInput
               {...formik.getFieldProps('preference')}
               labelText="Preference"
               className={styles['form-input']}
               error={formik.touched.preference && formik.errors.preference}
               errorText={formik.errors.preference}
            />
            <FilledInput
               {...formik.getFieldProps('lookingfor')}
               labelText="Looking For"
               className={styles['form-input']}
               error={formik.touched.lookingfor && formik.errors.lookingfor}
               errorText={formik.errors.lookingfor}
            />
            <FilledInput
               {...formik.getFieldProps('image_profile')}
               labelText="Profile image_profile"
               className={styles['form-input']}
               error={formik.touched.lookingfor && formik.errors.image_profile}
               errorText={formik.errors.image_profile}
            />
         </div>

         <div className={styles['form-button-area']}>
            <Button
               onClick={movePrevious}
               className={`${styles['button-return']} ${styles['btn']}`}
               text="Return"
            />
            <Button
               onClick={moveNext}
               className={`${styles['button-next']} ${styles['btn']}`}
               text="Next"
            />
         </div>
      </div>
   );
};

export default FormOtherInfo;
