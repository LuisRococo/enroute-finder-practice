import { CreatePersonalQuestionDTO, PersonalQuestion } from '../personalQuestions';

export enum HoroscopeEnum {
   ARIES = 'Aries',
   TAURUS = 'Taurus',
   GEMINI = 'Gemini',
   CANCER = 'Cancer',
   LEO = 'Leo',
   VIRGO = 'Virgo',
   LIBRA = 'Libra',
   SCORPIO = 'Scorpio',
   SAGITTARIUS = 'Sagittarius',
   CAPRICORN = 'Capricorn',
   AQUARIUS = 'Aquarius',
   PISCES = 'Pisces',
}

export interface About {
   horoscope?: HoroscopeEnum;
   personal_questions?: PersonalQuestion[];
   description: string;
}
