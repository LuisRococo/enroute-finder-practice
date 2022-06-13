import { CreateQuestionDTO } from '../personalQuestions';
import { Horoscope } from './types';

export interface CreateAboutDTO {
   horoscope?: Horoscope;
   personal_questions?: CreateQuestionDTO[];
   description: string;
}
