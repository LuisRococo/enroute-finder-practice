import React, { FC } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

interface QuestionInterface {
   question: string;
   answer: string;
}

export const Question: FC<QuestionInterface> = ({ answer, question }) => {
   return (
      <div className="question-box">
         <div className="question-box__title-cont">
            <BsFillQuestionCircleFill className="question-box__icon" />
            <p className="question-box__question">{question}</p>
         </div>
         <hr className="divisor" />
         <p className="question-box__answer">{answer}</p>
      </div>
   );
};
