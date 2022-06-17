import { LoginDTO } from '@finder/definitions';
import * as yup from 'Yup';

export const LoginFormValidation: yup.SchemaOf<LoginDTO> = yup.object({
  email: yup
    .string()
    .max(15, 'Email should be 15 characters or less')
    .required('Email is required'),
  password: yup
    .string()
    .max(15, 'Password should be 15 characters or less')
    .required('Password is required'),
});

// function valiateForm(values: any) {
//   const errors: any = {};
//   if (!values.username) {
//     errors.username = 'Username should not be empty';
//   } else if (values.username.length > 7) {
//     errors.username = 'Username too long';
//   }

//   if (!values.password) {
//     errors.password = 'Password should not be empty';
//   }

//   return errors;
// }
