export enum HoroscopeEnum {
  Aries = 'Aries',
  Taurus = 'Taurus',
  Gemini = 'Gemini',
  Cancer = 'Cancer',
  Leo = 'Leo',
  Virgo = 'Virgo',
  Libra = 'Libra',
  Scorpio = 'Scorpio',
  Sagittarius = 'Sagittarius',
  Capricorn = 'Capricorn',
  Aquarius = 'Aquarius',
  Pisces = "Pisces'",
}

export enum GenderEnum {
  Female = 'Female',
  Male = 'Male',
  Other = 'Other',
}

export enum LookingforEnum {
  Friendship = 'Friendship',
  Nothing = 'Nothing',
  LongRelationship = 'Long relationship',
  Casual = 'Casual',
}

import { Types } from 'mongoose';
import { PersonalQuestion } from '../personalQuestions/types';

export interface User {
  _id: Types.ObjectId;
  name: string;
  last_name?: string;
  password: string;
  email: string;
  city?: string;
  country?: string;
  phone: string;
  image_profile: string;
  gallery: string[];
  age: number;
  gender: GenderEnum;
  preference: string;
  about: About;
  lookingfor: LookingforEnum;
  verified: boolean;
}

export interface PersonPreview {
  _id: string;
  name: string;
  last_name?: string;
  city?: string;
  country?: string;
  phone: string;
  image_profile: string;
  gallery: string[];
  age: number;
  gender: GenderEnum;
  preference: string;
  about: About;
}

export interface About {
  horoscope?: HoroscopeEnum;
  personal_questions?: PersonalQuestion[];
  description: string;
}
