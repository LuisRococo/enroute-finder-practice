import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../util/routes';
import { useFormik } from 'formik';
import { AuthDAO, FRONT_EVENT_NAMES, LoginDTO } from '@finder/definitions';
import { LoginFormValidation } from './FormConfig';
import { Button, FilledInput } from '@finder/components';
import { loginService } from '../../services/authServices';
import styles from './styles.module.scss';
import { LoginLogo } from '../../components/LoginLogo';
import { AiFillHeart } from 'react-icons/ai';
import { saveAuthToken } from 'apps/auth-front/src/util/localStorage';

function LogIn() {
   const formik = useFormik<LoginDTO>({
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
      }
   }

   return (
      <>
         <div className={styles['auth-page']}>
            <div className={`${styles['auth-div']} ${styles['auth-form-area']}`}>
               <div className={styles['auth-form-cont']}>
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
                        className={styles['auth-card__input']}
                     />

                     <FilledInput
                        {...formik.getFieldProps('password')}
                        errorMsjProps={{}}
                        labelProps={{}}
                        containerProps={{ className: 'auth-card__input-cont' }}
                        error={formik.touched.password && formik.errors.password !== undefined}
                        errorText={formik.errors.password}
                        labelText="Password"
                        className={styles['auth-card__input']}
                        type={'password'}
                     />

                     <Button className={styles['login-btn']} text="Submit" type="submit" />

                     <Link className={styles['autn-card__link']} to={routes.signup.url}>
                        Sign Up
                     </Link>
                  </form>
               </div>
            </div>
            <div className={`${styles['auth-div']} ${styles['auth-div--promo-area']}`}>
               <div className={styles['promo-message-cont']}>
                  <AiFillHeart className={styles['promo-message-icon']} />
                  <h2>Discover new Frienships without frontiers</h2>
               </div>
            </div>
         </div>
      </>
   );
}

export default LogIn;
