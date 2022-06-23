import { CreateUserDTO } from '@finder/definitions';
import { FormikValues } from 'formik';
import * as Yup from 'yup';

export type FunctionMoveNext = () => void;

export type FunctionPreviousNext = () => void;

export interface FormCardInterface {
   moveNext?: FunctionMoveNext;
   movePrevious?: FunctionPreviousNext;
   formik?: any;
}

export interface SignInInterface extends CreateUserDTO {
   confirmPassword: string;
}
