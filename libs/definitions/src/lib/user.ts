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

export interface User {
  _id: string;
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

export interface PersonalQuestion {
  question: string;
  answer: string;
}

export const mockupGeneralUserList: User[] = [
  {
    _id: '_id1',
    name: 'Probemio',
    last_name: 'testino',
    password:
      '99adc231b045331e514a516b4b7680f588e3823213abe901738bc3ad67b2f6fcb3c64efb93d18002588d3ccc1a49efbae1ce20cb43df36b38651f11fa75678e8',
    email: 'probemioT89@test.com',
    country: 'México',
    city: 'CDMX',
    phone: '+525512907846',
    image_profile:
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    gallery: [
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    ],
    age: 40,
    gender: GenderEnum.Other,
    preference: 'Lo que no sea humano',
    about: {
      horoscope: HoroscopeEnum.Capricorn,
      personal_questions: [
        {
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
    lookingfor: LookingforEnum.LongRelationship,
    verified: true,
  },
  {
    _id: '_id2',
    name: 'Probemio',
    last_name: 'testino',
    password:
      '99adc231b045331e514a516b4b7680f588e3823213abe901738bc3ad67b2f6fcb3c64efb93d18002588d3ccc1a49efbae1ce20cb43df36b38651f11fa75678e8',
    email: 'probemioT89@test.com',
    country: 'México',
    city: 'CDMX',
    phone: '+525512907846',
    image_profile:
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    gallery: [
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    ],
    age: 40,
    gender: GenderEnum.Other,
    preference: 'Lo que no sea humano',
    about: {
      horoscope: HoroscopeEnum.Aries,
      personal_questions: [
        {
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
    lookingfor: LookingforEnum.LongRelationship,
    verified: true,
  },
];

export class CreateUserDTO {
  name: string;
  last_name?: string;
  password: string;
  email: string;
  city?: string;
  country?: string;
  phone: string;
  age: number;
  gender: GenderEnum;
  preference: string;
  about: About;
  lookingfor: LookingforEnum;
  verified = false;
}

export class LoginDTO {
  email: string;
  password: string;
}

export class AuthDAO {
  jwt: string;
}

export const mockGeneralUser: User = {
  _id: '_id1',
  name: 'Probemio',
  last_name: 'testino',
  password:
    '99adc231b045331e514a516b4b7680f588e3823213abe901738bc3ad67b2f6fcb3c64efb93d18002588d3ccc1a49efbae1ce20cb43df36b38651f11fa75678e8',
  email: 'probemioT89@test.com',
  country: 'México',
  city: 'CDMX',
  phone: '+525512907846',
  image_profile:
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
  gallery: [
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
  ],
  age: 40,
  gender: GenderEnum.Other,
  preference: 'Lo que no sea humano',
  about: {
    horoscope: HoroscopeEnum.Capricorn,
    personal_questions: [
      {
        question: 'What is your favorite food?',
        answer: 'Hot-Dog',
      },
      {
        question: 'What is your favorite movie?',
        answer: 'Joker',
      },
    ],
    description: "I'm looking a new experience",
  },
  lookingfor: LookingforEnum.LongRelationship,
  verified: true,
};

export const mockopPersonsPreview: PersonPreview[] = [
  {
    _id: '_id1',
    name: 'Probemio',
    last_name: 'testino',
    country: 'México',
    city: 'CDMX',
    phone: '+525512907846',
    image_profile:
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    gallery: [
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    ],
    age: 40,
    gender: GenderEnum.Other,
    preference: 'Lo que no sea humano',
    about: {
      horoscope: HoroscopeEnum.Aquarius,
      personal_questions: [
        {
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
  },
  {
    _id: '_id1',
    name: 'Probemio',
    last_name: 'testino',
    country: 'México',
    city: 'CDMX',
    phone: '+525512907846',
    image_profile:
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    gallery: [
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    ],
    age: 40,
    gender: GenderEnum.Other,
    preference: 'Lo que no sea humano',
    about: {
      horoscope: HoroscopeEnum.Capricorn,
      personal_questions: [
        {
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
  },
  {
    _id: '_id1',
    name: 'Probemio',
    last_name: 'testino',
    country: 'México',
    city: 'CDMX',
    phone: '+525512907846',
    image_profile:
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    gallery: [
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    ],
    age: 40,
    gender: GenderEnum.Other,
    preference: 'Lo que no sea humano',
    about: {
      horoscope: HoroscopeEnum.Aquarius,
      personal_questions: [
        {
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
  },
];
