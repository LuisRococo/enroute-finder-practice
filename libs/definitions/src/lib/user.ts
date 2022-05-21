import { PossibleInteraction } from './loveHistory';
import { Match } from './matchList';

export type Horoscope =
  | 'Aries'
  | 'Taurus'
  | 'Gemini'
  | 'Cancer'
  | 'Leo'
  | 'Virgo'
  | 'Libra'
  | 'Scorpio'
  | 'Sagittarius'
  | 'Capricorn'
  | 'Aquarius'
  | 'Pisces';

export type Genre = 'Female' | 'Male' | 'Other';

export type LookingFor =
  | 'Friendship'
  | 'Nothing'
  | 'Long relationship'
  | 'Casual';

//en db se usa mas snake-case
//tener cuidado con confundirse entre js y bd
export interface User {
  _id: string;
  name: string;
  last_name: string;
  password: string;
  email: string;
  city?: string;
  country?: string;
  phone: string;
  image_profile: string;
  gallery: string[];
  age: number;
  gender: string;
  preferences: string;
  about: About;
  looking_for: LookingFor;
  verified: boolean;
  love_history: Interactions[];
  match_list: Match[];
}
//verified para evitar que se llene de bots

export interface Interactions {
  date: Date;
  target_user: string;
  result: PossibleInteraction;
}

export interface About {
  horoscope?: Horoscope;
  personal_questions?: PersonalQuestions[];
  description: string;
}

export interface PersonalQuestions {
  question: string;
  answer: string;
}

export const mockGeneralUser: User = {
  _id: '2132434234234235',
  name: 'Lelus',
  last_name: 'Lilus',
  password: 'Password123$',
  email: 'lel@lel.com',
  city: 'Navo',
  country: 'Mexico',
  phone: '43424342342',
  image_profile:
    'http://images2.fanpop.com/images/photos/2700000/erfef-giant-monsters-2772081-225-195.jpg',
  gallery: [
    'http://images2.fanpop.com/images/photos/2700000/erfef-giant-monsters-2772081-225-195.jpg',
    'http://images2.fanpop.com/images/photos/2700000/erfef-giant-monsters-2772081-225-195.jpg',
    'http://images2.fanpop.com/images/photos/2700000/erfef-giant-monsters-2772081-225-195.jpg',
  ],
  age: 40,
  gender: 'Male',
  preferences: 'Chicks',
  about: {
    description: 'Soy un sujeto de pruebas jijijiji',
    horoscope: 'Aries',
    personal_questions: [
      {
        question: 'Favorite food ?',
        answer: 'Sushi',
      },
      {
        question: 'Movie ?',
        answer: 'The room',
      },
    ],
  },
  looking_for: 'Friendship',
  verified: true,
  match_list: [],
  love_history: [
    {
      date: new Date(),
      target_user: '_id2',
      result: 'Yes',
    },
  ],
};
