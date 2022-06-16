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

   useEffect(() => {
      console.log(formik.errors.email);
   }, [formik.values.email]);

   return (
      <>
         <form onSubmit={formik.handleSubmit}>
            <AuthCont title="Log In To start meeting people!">
               {formik.touched.email && formik.errors.email ? <p className="auth-card__input-error ">{formik.errors.email}</p> : null}
               <input className="auth-card__input" type="text" placeholder="Email" {...formik.getFieldProps('email')} />

               {formik.touched.password && formik.errors.password ? <p className="auth-card__input-error ">{formik.errors.password}</p> : null}
               <input className="auth-card__input" type="password" placeholder="Password" {...formik.getFieldProps('password')} />

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
