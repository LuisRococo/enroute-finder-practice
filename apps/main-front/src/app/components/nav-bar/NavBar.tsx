import React, { FC, useEffect, useState } from 'react';
import logoImg from '../../../assets/imgs/logo.png';
import './styles.scss';
import routes, { navLoggedRoutes, navUnloggedRoutes, routesHideNav } from 'apps/main-front/src/util/routes';
import { Link, useLocation } from 'react-router-dom';
import { logoutUser, shouldBeHidden } from 'apps/main-front/src/util/util';
import { FaUserCircle } from 'react-icons/fa';
import { useIsAuth } from '../../hooks/authHook';

const NavBar: FC = () => {
   let location = useLocation();
   const [solidNav, setSolidNav] = useState(true);
   const [showNav, setShowNav] = useState(true);
   const { isAuth } = useIsAuth();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   function openProfileDropDown() {
      setIsDropdownOpen(!isDropdownOpen);
   }

   function logout() {
      logoutUser();
      setIsDropdownOpen(false);
   }

   function onClickOnDocument(event: any) {}

   useEffect(() => {
      if (shouldBeHidden(location.pathname, routesHideNav)) {
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

   useEffect(() => {
      document.addEventListener('click', onClickOnDocument);

      return () => {
         document.removeEventListener('click', onClickOnDocument);
      };
   }, []);

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
                     {!isAuth && (
                        <>
                           {navUnloggedRoutes.map((route: any, key: number) => {
                              return (
                                 <Link key={'nav-item-' + key} className="nav__url" to={route.url}>
                                    <li className="nav__item">{route.name}</li>
                                 </Link>
                              );
                           })}
                        </>
                     )}

                     {isAuth && (
                        <>
                           {navLoggedRoutes.map((route: any, key: number) => {
                              return (
                                 <Link key={'nav-item-logged' + key} className="nav__url" to={route.url}>
                                    <li className="nav__item">{route.name}</li>
                                 </Link>
                              );
                           })}
                           <div className="nav__dropdown-cont">
                              <li className="nav__item" onClick={openProfileDropDown}>
                                 <FaUserCircle size={'40px'} color="#fff" />
                              </li>
                              <div className={`nav__dropdown ${isDropdownOpen ? '' : 'hide'}`}>
                                 <div onClick={logout} className="nav__dropdown-item">
                                    <p>Logout</p>
                                 </div>
                              </div>
                           </div>
                        </>
                     )}
                  </ul>
               </div>
            </nav>
         )}
      </>
   );
};

export default NavBar;
