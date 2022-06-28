// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';
import routes from '../util/routes';
import Find from './pages/find/Find';
import Profile from './pages/profile/Profile';
import React from 'react';
import { GenericProtectedRoute } from '@finder/components';
import { useIsAuth } from './hooks/authHook';
import { SignIn } from './pages/signIn/SignIn';
import { VerifyCode } from './pages/verifyCode/VerifyCode';

const AuthFront = React.lazy(() => import('auth-front/Module'));
const redirectTo = routes.login.url;

export function App() {
   const { isAuth } = useIsAuth();
   return (
      <React.Suspense fallback={null}>
         <NavBar />

         <Routes>
            <Route
               path={routes.find.url}
               element={
                  <GenericProtectedRoute isAuth={isAuth} redirectTo={redirectTo}>
                     <Find />
                  </GenericProtectedRoute>
               }
            />

            <Route
               path={routes.profile.url}
               element={
                  <GenericProtectedRoute isAuth={isAuth} redirectTo={redirectTo}>
                     <Profile />
                  </GenericProtectedRoute>
               }
            />

            <Route
               path={routes.login.url}
               element={
                  <GenericProtectedRoute isAuth={!isAuth}>
                     <AuthFront />
                  </GenericProtectedRoute>
               }
            />

            <Route
               path={routes.signup.url}
               element={
                  <GenericProtectedRoute isAuth={!isAuth}>
                     <SignIn />
                  </GenericProtectedRoute>
               }
            />

            <Route path={routes.verification.url} element={<VerifyCode />} />

            <Route path={routes.home.url} element={<Home />} />
         </Routes>

         <Footer />
      </React.Suspense>
   );
}

export default App;
