import React, { FC } from 'react';
import './styles.scss';
import logoImg from '../../../assets/imgs/logo.png';
import { useLocation } from 'react-router-dom';
import { shouldBeHidden } from 'apps/frontend/src/util/util';
import { routesNoFooter } from 'apps/frontend/src/util/routes';

const Footer: FC = () => {
  let location = useLocation();

  if (shouldBeHidden(location.pathname, routesNoFooter)) {
    return null;
  }

  return (
    <footer className="footer wrapper">
      <div className="footer__logo-area">
        <img className="footer__logo" src={logoImg} alt="" />
        <p className="footer__logo-area-text">Finder</p>
      </div>

      <hr className="divisor divisor--footer" />

      <p className="footer__more-info">
        The place where you can find more like you
      </p>

      <p className="footer__legal">© 2022</p>
    </footer>
  );
};

export default Footer;
