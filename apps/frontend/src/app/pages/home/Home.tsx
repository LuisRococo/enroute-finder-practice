import React, { FC } from 'react';
import InfoSection from '../../components/home/info-sec/InfoSection';
import LandPage from '../../components/home/land-page/LandPage';
import NavBar from '../../components/nav-bar/NavBar';

const Home: FC = () => {
  return (
    <>
      <LandPage />
      <InfoSection />
    </>
  );
};

export default Home;
