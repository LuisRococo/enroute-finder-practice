// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';
import routes from '../util/routes';
import LogIn from './pages/auth/LogIn';
import SignUp from './pages/auth/SignUp';
import Find from './pages/find/Find';
import Profile from './pages/profile/Profile';

export function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path={routes.home.url} element={<Home />} />

        <Route path={routes.login.url} element={<LogIn />} />

        <Route path={routes.signup.url} element={<SignUp />} />

        <Route path={routes.find.url} element={<Find />} />

        <Route path={routes.profile.url} element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
