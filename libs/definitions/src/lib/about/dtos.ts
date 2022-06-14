import { CreateQuestionDTO } from '../personalQuestions';
import { HoroscopeEnum } from './types';

export interface CreateAboutDTO {
   horoscope?: HoroscopeEnum;
   personal_questions?: CreateQuestionDTO[];
   description: string;
}
