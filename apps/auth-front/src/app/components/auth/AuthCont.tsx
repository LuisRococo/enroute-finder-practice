import React, { FC, ReactNode } from 'react';
import './styles.scss';

export type Props = { children?: ReactNode; title: string };

const AuthCont: FC<Props> = ({ children, title }) => {
   return (
      <div className="auth-cont wrapper">
         <div className="auth-card__cont">
            <div className="auth-card">
               <h2 className="auth-card__title">{title}</h2>
               <hr className="divisor" />
               <div className="auth-card__input-area">{children}</div>
            </div>
         </div>
      </div>
   );
};

export default AuthCont;
