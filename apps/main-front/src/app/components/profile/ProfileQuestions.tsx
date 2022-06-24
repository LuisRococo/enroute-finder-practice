import { PersonalQuestion } from '@finder/definitions';
import React, { FC, useEffect, useState } from 'react';
import { Question } from './Question';
import './styles.scss';

export interface ProfileQuestionsInterface {
   questions: PersonalQuestion[];
}

const ProfileQuestions: FC<ProfileQuestionsInterface> = ({ questions }) => {
   const [questionsLeft, setQuestionsLeft] = useState<PersonalQuestion[]>([]);
   const [questionsRight, setQuestionsRight] = useState<PersonalQuestion[]>([]);

   useEffect(() => {
      setQuestionsLeft([]);
      setQuestionsRight([]);
      questions.forEach((question, key) => {
         if (key % 2 === 0) setQuestionsLeft((oldQuestions) => [...oldQuestions, question]);
         else setQuestionsRight((oldQuestions) => [...oldQuestions, question]);
      });
   }, []);

   return (
      <div className="questions-sec">
         <h3 className="profile-section-title">Questions & Answers</h3>
         <hr className="divisor" />

         <div className="questions-row question-row__left">
            <Question question="¿Hola como estas?" answer="Pos la verdad no lo se, mal mal nope" />
            <Question question="¿Hola como estas?" answer="Pos la verdad no lo se, mal mal nope" />
         </div>

         <div className="questions-row question-row__right">
            <Question question="¿Hola como estas?" answer="Pos la verdad no lo se, mal mal nope" />
            <Question question="¿Hola como estas?" answer="Pos la verdad no lo se, mal mal nope" />
         </div>

         <div className="questions-row question-row__left">
            <Question question="¿Hola como estas?" answer="Pos la verdad no lo se, mal mal nope" />
            <Question question="¿Hola como estas?" answer="Pos la verdad no lo se, mal mal nope" />
         </div>
      </div>
   );
};

export default ProfileQuestions;
