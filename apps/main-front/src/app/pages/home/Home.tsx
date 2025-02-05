import React, { FC } from 'react';
import { UserExperienceSection } from '../../components/home/experiences/Section/UserExperienceSection';
import InfoSection from '../../components/home/info-sec/InfoSection';
import LandPage from '../../components/home/land-page/LandPage';
import HomeOtherInfo from '../../components/home/other-info/HomeOtherInfo';
import PhraseSection from '../../components/home/phrase-sec/PhraseSection';
import NavBar from '../../components/nav-bar/NavBar';

const Home: FC = () => {
   return (
      <>
         <LandPage />
         <PhraseSection />
         <HomeOtherInfo />
         <UserExperienceSection />
      </>
   );
};

export default Home;
