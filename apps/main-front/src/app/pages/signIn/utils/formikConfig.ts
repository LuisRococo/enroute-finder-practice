import {
   CreateAboutDTO,
   CreateQuestionDTO,
   GenderEnum,
   HoroscopeEnum,
   LookingforEnum,
} from '@finder/definitions';
import { SignInInterface } from './types';
import * as Yup from 'yup';

const QuestionsYupSchema: Yup.SchemaOf<CreateQuestionDTO> = Yup.object().shape({
   question: Yup.string().required('La respuetsa es requerida'),
   answer: Yup.string().required('Answer is required'),
});

const AboutYupSchema: Yup.SchemaOf<CreateAboutDTO> = Yup.object().shape({
   description: Yup.string()
      .required('This field is required')
      .min(20, 'This field should be at least 20 characters'),
   horoscope: Yup.mixed<HoroscopeEnum>()
      .oneOf(Object.values(HoroscopeEnum))
      .required('This field is required'),
   personal_questions: Yup.array()
      .of(QuestionsYupSchema as Yup.AnySchema)
      .min(3, 'You need at least two questions'),
});

export const signInYupSchema: Yup.SchemaOf<SignInInterface> = Yup.object().shape({
   name: Yup.string()
      .max(20, 'Name should be shorter than 20 characters')
      .required('Field required'),
   last_name: Yup.string()
      .max(20, 'Last name should be shorter than 20 characters')
      .required('Field required'),
   email: Yup.string()
      .max(40, 'Email should be shorter than 40 charcaters')
      .required('Field required'),
   password: Yup.string()
      .max(20, 'Password should be shorter than 20 characters')
      .required('Field required'),
   confirmPassword: Yup.string()
      .required('Field Required')
      .oneOf([Yup.ref('password')]),
   age: Yup.number().required('Field is required'),
   city: Yup.string().required('This field is required'),
   country: Yup.string().required('This field is required'),
   gender: Yup.mixed<GenderEnum>().required().oneOf(Object.values(GenderEnum)),
   lookingfor: Yup.mixed<LookingforEnum>()
      .required('This field is required')
      .oneOf(Object.values(LookingforEnum)),
   image_profile: Yup.string().required('This field is required'),
   phone: Yup.string().required('This field is required'),
   preference: Yup.string().required('This field is required'),
   about: AboutYupSchema,
});

//initial values

const questionsInitialValues: CreateQuestionDTO[] = [
   {
      question: '',
      answer: '',
   },
   {
      question: '',
      answer: '',
   },
];

const aboutInitialValues: CreateAboutDTO = {
   description: '',
   horoscope: HoroscopeEnum.AQUARIUS,
   personal_questions: questionsInitialValues,
};

export const signInInitialValues: SignInInterface = {
   name: '',
   last_name: '',
   age: 18,
   confirmPassword: '',
   email: '',
   gender: GenderEnum.Male,
   image_profile: '',
   lookingfor: LookingforEnum.LongRelationship,
   password: '',
   phone: '',
   preference: '',
   country: '',
   city: '',
   about: aboutInitialValues,
};
