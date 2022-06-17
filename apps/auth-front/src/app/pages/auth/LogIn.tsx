import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthCont from '../../components/auth/AuthCont';
import routes from '../../../util/routes';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { LoginDTO } from '@finder/definitions';
import { LoginFormValidation } from './FormConfig';
import { Button, FilledInput } from '@finder/components';

function LogIn() {
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: LoginFormValidation,
      onSubmit: onFormSubmit,
   });

   function onFormSubmit(values: LoginDTO) {
      const { email, password } = values;
      alert('submit');
   }

   return (
      <>
         <form onSubmit={formik.handleSubmit}>
            <AuthCont title="Log In To start meeting people!">
               <FilledInput
                  {...formik.getFieldProps('email')}
                  errorMsjProps={{}}
                  labelProps={{}}
                  containerProps={{ className: 'auth-card__input-cont' }}
                  error={formik.touched.email && formik.errors.email !== undefined}
                  errorText={formik.errors.email}
                  labelText="Email"
                  className="auth-card__input"
               />

               <FilledInput
                  {...formik.getFieldProps('password')}
                  errorMsjProps={{}}
                  labelProps={{}}
                  containerProps={{ className: 'auth-card__input-cont' }}
                  error={formik.touched.password && formik.errors.password !== undefined}
                  errorText={formik.errors.password}
                  labelText="Password"
                  className="auth-card__input"
               />

               <Button className="btn" text="Submit" type="submit" />

               <Link className="autn-card__link" to={routes.signup.url}>
                  Sign Up
               </Link>
            </AuthCont>
         </form>
      </>
   );
}

export default LogIn;
