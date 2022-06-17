import { PersonalQuestion } from '@finder/definitions';
import React, { FC, useEffect, useState } from 'react';
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
      if (key % 2 === 0)
        setQuestionsLeft((oldQuestions) => [...oldQuestions, question]);
      else setQuestionsRight((oldQuestions) => [...oldQuestions, question]);
    });
  }, []);

  return (
    <div className="profile-pg__sec profile-hd__sec--questions ">
      <h3 className="profile-pg__sec-quest-title">Common Questions</h3>
      <hr className="divisor" />

      <div className="profile-pg__sec__question-side-cont">
        <div className="profile-pg__question-side profile-pg__sec__question-side-cont--left">
          {questionsLeft.map((question, key) => {
            return (
              <div
                key={`profile-question-${key}`}
                className="profile-pg__question-cont"
              >
                <p className="profile-pg__question">{question.question}</p>
                <p className="profile-pg__answer">{question.answer}</p>
              </div>
            );
          })}
        </div>
        <div className="profile-pg__question-side">
          {questionsRight.map((question, key) => {
            return (
              <div
                key={`profile-question-${key}`}
                className="profile-pg__question-cont"
              >
                <p className="profile-pg__question">{question.question}</p>
                <p className="profile-pg__answer">{question.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileQuestions;
