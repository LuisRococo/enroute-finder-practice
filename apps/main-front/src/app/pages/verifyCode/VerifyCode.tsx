import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { RiHeartsFill } from 'react-icons/ri';
import { pageName } from '@finder/util';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import routes from 'apps/main-front/src/util/routes';
import { Button } from '@finder/components';
import {
   CreateUserDAO,
   LOCAL_STORAGE_KEYS,
   validateVerificationCodeDTO,
} from '@finder/definitions';
import { apiPostVerificationCode } from '../../services/userAPI';

export const VerifyCode = () => {
   const codeLenght: number = 5;
   const [codeInputValue, setCodeInputValue] = useState<string[]>([]);
   const [showError, setShowError] = useState<boolean>(false);
   const navigate = useNavigate();
   const [signInDAO] = useState(getSignInDAO);

   function getSignInDAO() {
      const signInDAO: string | null = localStorage.getItem(LOCAL_STORAGE_KEYS.SIGN_IN_DAO);
      if (signInDAO) {
         const signInObj: CreateUserDAO = JSON.parse(signInDAO);
         return signInObj;
      }
      return null;
   }

   function handleInputChange(element: HTMLInputElement, arrayKey: number) {
      const arrayValues = [...codeInputValue];
      const newValue = element.value.toUpperCase();
      arrayValues[arrayKey] = newValue;

      if (element.nextSibling && newValue !== '') {
         (element.nextSibling as HTMLElement).focus();
      }

      setShowError(false);
      setCodeInputValue(arrayValues);
   }

   async function handleSubmit() {
      try {
         const code: string = codeInputValue.reduce((newCode, character) => {
            return newCode + character;
         });

         if (code.length !== codeLenght) {
            setShowError(true);
            return;
         }

         if (!signInDAO) return;

         const sendVerificationCodeDTO: validateVerificationCodeDTO = {
            email: signInDAO.email,
            id_user: signInDAO.id_user,
            code: code,
         };

         const { status } = await apiPostVerificationCode(sendVerificationCodeDTO);
         if (status === 201) {
            localStorage.removeItem(LOCAL_STORAGE_KEYS.SIGN_IN_DAO);
            navigate(routes.login.url);
         }
      } catch (error) {
         alert('There was a problem with your verification code, please try again');
      }
   }

   useEffect(() => {
      const defaultInputState: string[] = [];
      for (let index = 0; index < codeLenght; index++) {
         defaultInputState.push('');
      }
      setCodeInputValue(defaultInputState);
   }, []);

   if (!signInDAO) {
      return <Navigate to={routes.home.url} />;
   }

   return (
      <div className={styles['container']}>
         <div className={styles['verification-card']}>
            <Link to={routes.home.url}>
               <div className={styles['logo-cont']}>
                  <RiHeartsFill className={styles['logo']} />
                  <p className={styles['logo-text']}>{pageName}</p>
               </div>
            </Link>

            <h3 className={styles['card-title']}>Verify Your account</h3>

            <p className={styles['verify-message']}>
               The final step before you start meeting awesome people around the globe!
            </p>

            <div className={styles['verification-box']}>
               <p className={`${styles['code-error']} ${!showError ? styles['hidden'] : ''}`}>
                  You need to write the whole code
               </p>
               <div className={styles['code-input-wrapper']}>
                  {codeInputValue.map((value, key) => {
                     return (
                        <input
                           key={`input-code-${key}`}
                           maxLength={1}
                           type="text"
                           autoFocus={key === 0}
                           className={styles['verification-input']}
                           value={value}
                           onChange={(e) => {
                              handleInputChange(e.target, key);
                           }}
                        />
                     );
                  })}
               </div>
            </div>

            <div className={styles['card-footer']}>
               <p className={styles['card-footer-text']}>Lorem ipsum dolor sit amet.</p>
               <Button className={styles['card-btn']} text="Continue" onClick={handleSubmit} />
            </div>
         </div>
      </div>
   );
};
