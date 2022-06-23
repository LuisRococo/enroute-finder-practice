import { FilledInput } from '@finder/components';
import TextArea from 'libs/components/src/lib/textArea/TextArea';
import React, { FC } from 'react';
import styles from '../../../pages/signIn/styles.module.scss';

interface QuestionComponentInterface {
   formik: any;
   questionNumber: number;
}

const QuestionComponent: FC<QuestionComponentInterface> = ({ formik, questionNumber }) => {
   return (
      <div className={`${styles['question-group']}`}>
         <p className={`${styles['question-title']}`}>Question {questionNumber}</p>
         <FilledInput
            {...formik.getFieldProps(`about.personal_questions[${questionNumber - 1}].question`)}
            labelText="Question"
            className={styles['form-input']}
            error={
               formik.errors?.about?.personal_questions &&
               formik.touched?.about?.personal_questions &&
               formik.touched?.about?.personal_questions[questionNumber - 1]?.question &&
               formik.errors?.about?.personal_questions[questionNumber - 1]?.question
            }
            errorText={
               formik.errors?.about?.personal_questions
                  ? formik.errors?.about?.personal_questions[questionNumber - 1]?.question
                  : '-'
            }
         />
         <TextArea
            {...formik.getFieldProps(`about.personal_questions[${questionNumber - 1}].answer`)}
            labelText="Answer"
            className={styles['form-input']}
            error={
               formik.errors?.about?.personal_questions &&
               formik.touched?.about?.personal_questions &&
               formik.touched?.about?.personal_questions[questionNumber - 1]?.answer &&
               formik.errors?.about?.personal_questions[questionNumber - 1]?.answer
            }
            errorText={
               formik.errors?.about?.personal_questions
                  ? formik.errors?.about?.personal_questions[questionNumber - 1]?.answer
                  : '-'
            }
         />
      </div>
   );
};

export default QuestionComponent;
