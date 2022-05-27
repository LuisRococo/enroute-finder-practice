import React, { FC } from 'react';
import logoImg from '../../../assets/imgs/logo.png';
import './styles.scss';
import routes from 'apps/frontend/src/util/routes';
import { Link } from 'react-router-dom';

const NavBar: FC = () => {
  const routesArr: any = Object.values(routes);
  console.info(routesArr);

  return (
    <nav className="nav wrapper">
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
              <Link key={'nav-item-' + key} className="nav__url" to={route.url}>
                <li className="nav__item">{route.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
