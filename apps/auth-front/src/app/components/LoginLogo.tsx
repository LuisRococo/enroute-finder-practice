import { pageName } from '@finder/util';
import React, { FC } from 'react';
import { RiHeartsFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import routes from '../../util/routes';
import './styles.scss';

export const LoginLogo: FC = () => {
   return (
      <Link to={routes.home.url}>
         <div className="login-logo-cont">
            <RiHeartsFill className="login-logo-icon" />
            <h3>{pageName}</h3>
         </div>
      </Link>
   );
};
