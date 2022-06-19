import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../util/routes';
import { useFormik } from 'formik';
import { AuthDAO, FRONT_EVENT_NAMES, LoginDTO } from '@finder/definitions';
import { LoginFormValidation } from './FormConfig';
import { Button, FilledInput } from '@finder/components';
import { loginService } from '../../services/authServices';
import { saveAuthToken } from 'apps/auth-front/src/util/util';
import './styles.scss';
import { LoginLogo } from '../../components/LoginLogo';
import { AiFillHeart } from 'react-icons/ai';

function LogIn() {
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: LoginFormValidation,
      onSubmit: onFormSubmit,
   });

   async function onFormSubmit(values: LoginDTO) {
      try {
         const authDao: AuthDAO = await loginService(values);
         saveAuthToken(authDao);
         window.dispatchEvent(new Event(FRONT_EVENT_NAMES.SET_AUTH_TOKEN));
      } catch (error: any) {
         formik.values.password = '';
         alert('check your email and password');
      }
   }

   return (
      <>
         <div className="auth-page">
            <div className="auth-div auth-form-area">
               <div className="auth-form-cont">
                  <LoginLogo />

                  <form onSubmit={formik.handleSubmit}>
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
                        type={'password'}
                     />

                     <Button className="login-btn" text="Submit" type="submit" />

                     <Link className="autn-card__link" to={routes.signup.url}>
                        Sign Up
                     </Link>
                  </form>
               </div>
            </div>
            <div className="auth-div auth-div--promo-area">
               <div className="promo-message-cont">
                  <AiFillHeart className="promo-message-icon" />
                  <h2>Discover new Frienships without frontiers</h2>
               </div>
            </div>
         </div>
      </>
   );
}

export default LogIn;
