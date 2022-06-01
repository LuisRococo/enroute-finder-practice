import React, { FC, useEffect, useState } from 'react';
import logoImg from '../../../assets/imgs/logo.png';
import './styles.scss';
import routes, { routesNoNav } from 'apps/frontend/src/util/routes';
import { Link, useLocation } from 'react-router-dom';
import { shouldBeHidden } from 'apps/frontend/src/util/util';

const NavBar: FC = () => {
  const routesArr: any = Object.values(routes);
  let location = useLocation();
  const [solidNav, setSolidNav] = useState(true);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    if (shouldBeHidden(location.pathname, routesNoNav)) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    if (location.pathname === routes.home.url) {
      setSolidNav(false);
    } else {
      setSolidNav(true);
    }
  }, [location]);

  return (
    <>
      {showNav && (
        <nav className={`nav wrapper ` + (solidNav ? 'nav--solid' : '')}>
          <Link to={routes.home.url}>
            <div className="nav__logo-cont">
              <img className="nav__logo-img" src={logoImg} alt="" />
              <p className="nav__logo-title">Finder</p>
            </div>
          </Link>

          <div className="nav__content">
            <ul className="nav__items">
              {routesArr.map((route: any, key: number) => {
                return (
                  <Link
                    key={'nav-item-' + key}
                    className="nav__url"
                    to={route.url}
                  >
                    <li className="nav__item">{route.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
