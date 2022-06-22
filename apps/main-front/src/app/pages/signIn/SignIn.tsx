import { Button, FilledInput } from '@finder/components';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { RiHeartsFill } from 'react-icons/ri';
import { pageName } from '@finder/util';
import { Link } from 'react-router-dom';
import routes from 'apps/main-front/src/util/routes';

export const SignIn = () => {
   const [formIndex, setFormIndex] = useState(0);
   const formContent = useRef<HTMLDivElement>(null);
   const formSize = 400;

   function moveToPreviousForm() {
      setFormIndex(Math.max(0, formIndex - 1));
   }

   function moveToNextForm() {
      setFormIndex(Math.min(2, formIndex + 1));
   }

   useEffect(() => {
      const scrollPosition = formSize * formIndex;
      formContent.current?.scroll({ left: scrollPosition, behavior: 'smooth' });
   }, [formIndex]);

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
               <div ref={formContent} className={styles['card-forms-cont']}>
                  <div className={styles['form-card']}>
                     <FilledInput className={styles['form-input']} />
                     <FilledInput className={styles['form-input']} />
                     <FilledInput className={styles['form-input']} />

                     <Button text="Previous one" onClick={moveToPreviousForm} />
                     <Button text="Next" onClick={moveToNextForm} />
                  </div>
                  <div className={styles['form-card']}>
                     {' '}
                     <FilledInput className={styles['form-input']} />
                     <FilledInput className={styles['form-input']} />
                     <FilledInput className={styles['form-input']} />
                     <Button text="Previous one" onClick={moveToPreviousForm} />
                     <Button text="Next" onClick={moveToNextForm} />
                  </div>
                  <div className={styles['form-card']}>
                     {' '}
                     <FilledInput className={styles['form-input']} />
                     <FilledInput className={styles['form-input']} />
                     <FilledInput className={styles['form-input']} />
                     <Button text="Previous one" onClick={moveToPreviousForm} />
                     <Button text="Next" onClick={moveToNextForm} />
                  </div>
               </div>
            </div>
            <div className={styles['card-decor']}></div>
         </div>
      </div>
   );
};
