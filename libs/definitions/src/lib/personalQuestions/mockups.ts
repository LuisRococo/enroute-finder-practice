import { Types } from 'mongoose';
import { PersonalQuestion } from './types';

export const mockPersonalQuestion: PersonalQuestion = {
   _id: new Types.ObjectId(),
   question: 'What is your favorite color?',
   answer: 'Purple',
};

export const mockPersonalQuestionsList: PersonalQuestion[] = [
   {
      _id: new Types.ObjectId(),
      question: 'What is your favorite color?',
      answer: 'Purple',
   },
   {
      _id: new Types.ObjectId(),
      question: 'What is your favorite color?',
      answer: 'Purple',
   },
   {
      _id: new Types.ObjectId(),
      question: 'What is your favorite color?',
      answer: 'Purple',
   },
   {
      _id: new Types.ObjectId(),
      question: 'What is your favorite color?',
      answer: 'Purple',
   },
   {
      _id: new Types.ObjectId(),
      question: 'What is your favorite color?',
      answer: 'Purple',
   },
];
