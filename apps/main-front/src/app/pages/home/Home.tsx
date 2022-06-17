import React, { FC } from 'react';
import InfoSection from '../../components/home/info-sec/InfoSection';
import LandPage from '../../components/home/land-page/LandPage';
import HomeOtherInfo from '../../components/home/other-info/HomeOtherInfo';
import NavBar from '../../components/nav-bar/NavBar';

const Home: FC = () => {
  return (
    <>
      <LandPage />
      <InfoSection />
      <HomeOtherInfo />
    </>
  );
};

export default Home;
