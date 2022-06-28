import { Button, FilledInput } from '@finder/components';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { RiHeartsFill } from 'react-icons/ri';
import { pageName } from '@finder/util';
import { Link, useNavigate } from 'react-router-dom';
import routes from 'apps/main-front/src/util/routes';
import { FormMainInfo } from '../../components/signIn/Forms/FormMainInfo';
import { FormikValues, useFormik } from 'formik';
import { signInInitialValues, signInYupSchema } from './utils/formikConfig';
import FormOtherInfo from '../../components/signIn/Forms/FormOtherInfo';
import FormAboutInfo from '../../components/signIn/Forms/FormAboutInfo';
import { CreateUserDAO, CreateUserDTO } from '@finder/definitions';
import { SignInInterface } from './utils/types';
import { apiSignIn } from '../../services/userAPI';
import { create } from 'domain';
import { setLocalStorageSignInDAO } from 'apps/main-front/src/util/util';

export const SignIn = () => {
   const [formIndex, setFormIndex] = useState(0);
   const formContent = useRef<HTMLDivElement>(null);
   const navigate = useNavigate();
   const formSize = 400;

   function moveToPreviousForm() {
      setFormIndex(Math.max(0, formIndex - 1));
   }

   function moveToNextForm() {
      setFormIndex(Math.min(2, formIndex + 1));
   }

   async function submitSignIn(values: SignInInterface) {
      try {
         const signInDAO = values as CreateUserDTO;
         const createUserDAO: CreateUserDAO = await apiSignIn(signInDAO);

         setLocalStorageSignInDAO(createUserDAO);

         navigate(routes.verification.url);
      } catch (error) {
         alert('There was an error, try it later');
      }
   }

   useEffect(() => {
      const scrollPosition = formSize * formIndex;
      formContent.current?.scroll({ left: scrollPosition, behavior: 'smooth' });
   }, [formIndex]);

   const formik = useFormik({
      initialValues: signInInitialValues,
      onSubmit: submitSignIn,
      validationSchema: signInYupSchema,
   });

   useEffect(() => {
      console.info(formik.errors);
   }, [formik.errors]);

   return (
      <div className={`wrapper ${styles['page']}`}>
         <div className={styles['card']}>
            <div className={styles['card-content']}>
               <Link to={routes.home.url}>
                  <div className={styles['logo-cont']}>
                     <RiHeartsFill className={styles['logo']} />
                     <h3>{pageName}</h3>
                  </div>
               </Link>
               <form onSubmit={formik.handleSubmit}>
                  <div ref={formContent} className={styles['card-forms-cont']}>
                     <FormMainInfo
                        moveNext={moveToNextForm}
                        movePrevious={moveToPreviousForm}
                        formik={formik}
                     />
                     <FormOtherInfo
                        moveNext={moveToNextForm}
                        movePrevious={moveToPreviousForm}
                        formik={formik}
                     />
                     <FormAboutInfo
                        moveNext={moveToNextForm}
                        movePrevious={moveToPreviousForm}
                        formik={formik}
                     />
                  </div>
               </form>
               <Link className={styles['log-in-link']} to={routes.login.url}>
                  Log in
               </Link>
            </div>
            <div className={styles['card-decor']}></div>
         </div>
      </div>
   );
};
