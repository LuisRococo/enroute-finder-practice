import React, { FC } from 'react';
import { FormCardInterface } from '../../../pages/signIn/utils/types';
import styles from '../../../pages/signIn/styles.module.scss';
import { Button, FilledInput } from '@finder/components';
import InputSelect from 'libs/components/src/lib/inputSelect/InputSelect';
import { GenderEnum, LookingforEnum } from '@finder/definitions';

const FormOtherInfo: FC<FormCardInterface> = ({ formik, moveNext, movePrevious }) => {
   return (
      <div className={styles['form-card-wrapper']}>
         <div className={styles['form-card']}>
            <FilledInput
               {...formik.getFieldProps('country')}
               labelText="Country"
               className={styles['form-input']}
               error={formik.touched.country && formik.errors.country}
               errorText={formik.errors.country}
            />
            <FilledInput
               {...formik.getFieldProps('city')}
               labelText="City"
               className={styles['form-input']}
               error={formik.touched.city && formik.errors.city}
               errorText={formik.errors.city}
            />
            <FilledInput
               {...formik.getFieldProps('phone')}
               labelText="Phone"
               className={styles['form-input']}
               error={formik.touched.phone && formik.errors.phone}
               errorText={formik.errors.phone}
            />
            <FilledInput
               type={'number'}
               step={1}
               {...formik.getFieldProps('age')}
               labelText="Age"
               className={styles['form-input']}
               error={formik.touched.age && formik.errors.age}
               errorText={formik.errors.age}
            />
            <InputSelect
               {...formik.getFieldProps('gender')}
               labelText="Gender"
               className={styles['form-input']}
            >
               {Object.values(GenderEnum).map((item, key) => {
                  return (
                     <option value={item} key={`gender-select-${key}`}>
                        {item}
                     </option>
                  );
               })}
            </InputSelect>
            <FilledInput
               {...formik.getFieldProps('preference')}
               labelText="Preference"
               className={styles['form-input']}
               error={formik.touched.preference && formik.errors.preference}
               errorText={formik.errors.preference}
            />
            <InputSelect
               {...formik.getFieldProps('lookingfor')}
               labelText="Looking For"
               className={styles['form-input']}
            >
               {Object.values(LookingforEnum).map((item, key) => {
                  return (
                     <option value={item} key={`looking-for-select-${key}`}>
                        {item}
                     </option>
                  );
               })}
            </InputSelect>
            <FilledInput
               {...formik.getFieldProps('image_profile')}
               labelText="Profile Image"
               className={styles['form-input']}
               error={formik.touched.image_profile && formik.errors.image_profile}
               errorText={formik.errors.image_profile}
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

export default FormOtherInfo;
