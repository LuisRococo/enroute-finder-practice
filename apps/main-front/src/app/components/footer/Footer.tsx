import React, { FC } from 'react';
import './styles.scss';
import logoImg from '../../../assets/imgs/logo.png';
import { useLocation } from 'react-router-dom';
import { routesHideFooter } from 'apps/main-front/src/util/routes';
import { shouldBeHidden } from 'apps/main-front/src/util/util';

const Footer: FC = () => {
   let location = useLocation();

   if (shouldBeHidden(location.pathname, routesHideFooter)) {
      return null;
   }

   return (
      <footer className="footer wrapper">
         <div className="footer__logo-area">
            <img className="footer__logo" src={logoImg} alt="" />
            <p className="footer__logo-area-text">Finder</p>
         </div>

         <hr className="divisor divisor--footer" />

         <p className="footer__more-info">The place where you can find more like you</p>

         <p className="footer__legal">© 2022</p>
      </footer>
   );
};

export default Footer;
