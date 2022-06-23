import { CreateAboutDTO, CreateUserDTO, GenderEnum, LookingforEnum } from '@finder/definitions';
import * as Yup from 'yup';

export type FunctionMoveNext = () => void;

export type FunctionPreviousNext = () => void;

export interface FormCardInterface {
   moveNext?: FunctionMoveNext;
   movePrevious?: FunctionPreviousNext;
}

// Form interfaces

export interface SignInInterface extends CreateUserDTO {
   confirmPassword: string;
}

// const AboutYupSchema: Yup.SchemaOf<CreateAboutDTO> = Yup.object().shape({});

// export const signInYupSchema: Yup.SchemaOf<SignInInterface> = Yup.object().shape({
//    name: Yup.string()
//       .max(20, 'Name should be shorter than 20 characters')
//       .required('Field required'),
//    last_name: Yup.string()
//       .max(20, 'Last name should be shorter than 20 characters')
//       .required('Field required'),
//    email: Yup.string()
//       .max(40, 'Email should be shorter than 40 charcaters')
//       .required('Field required'),
//    password: Yup.string()
//       .max(20, 'Password should be shorter than 20 characters')
//       .required('Field required'),
//    confirmPassword: Yup.string()
//       .required('Field Required')
//       .oneOf([Yup.ref('password')]),
//    age: Yup.number().required('Field is required'),
//    city: Yup.string().required('This field is required'),
//    country: Yup.string().required('This field is required'),
//    gender: Yup.mixed<GenderEnum>().required().oneOf(Object.values(GenderEnum)),
//    lookingfor: Yup.mixed<LookingforEnum>()
//       .required('This field is required')
//       .oneOf(Object.values(LookingforEnum)),
//    image_profile: Yup.string().required('This field is required'),
//    phone: Yup.string().required('This field is required'),
//    preference: Yup.string().required('This field is required'),
//    about: AboutYupSchema,
// });
