import React, { FC } from 'react';
import { FormCardInterface } from '../utils/types';
import styles from '../styles.module.scss';
import { Button, FilledInput } from '@finder/components';
import InputSelect from 'libs/components/src/lib/inputSelect/InputSelect';
import { GenderEnum, HoroscopeEnum, LookingforEnum } from '@finder/definitions';
import TextArea from 'libs/components/src/lib/textArea/TextArea';
import QuestionComponent from './QuestionComponent';

const FormAboutInfo: FC<FormCardInterface> = ({ formik, moveNext, movePrevious }) => {
   const questionQuantity = 2;
   return (
      <div className={styles['form-card-wrapper']}>
         <div className={styles['form-card']}>
            <TextArea
               {...formik.getFieldProps('about.description')}
               labelText="Description"
               className={styles['form-input']}
               error={formik.touched.about?.description && formik.errors.about?.description}
               errorText={formik.errors.about?.description}
            />
            <InputSelect
               {...formik.getFieldProps('horoscope')}
               labelText="Horoscope"
               className={styles['form-input']}
            >
               {Object.values(HoroscopeEnum).map((item, key) => {
                  return (
                     <option key={`horoscope-option-${key}`} value={item}>
                        {item}
                     </option>
                  );
               })}
            </InputSelect>

            {[...Array(questionQuantity)].map((item, key) => {
               return (
                  <QuestionComponent
                     key={`question-group-${key}`}
                     questionNumber={key + 1}
                     formik={formik}
                  />
               );
            })}
         </div>

         <div className={styles['form-button-area']}>
            <Button
               type="button"
               onClick={movePrevious}
               className={`${styles['button-return']} ${styles['btn']}`}
               text="Return"
            />
            <Button
               type="submit"
               onClick={moveNext}
               className={`${styles['button-next']} ${styles['btn']}`}
               text="Submit"
            />
         </div>
      </div>
   );
};

export default FormAboutInfo;
