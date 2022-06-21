import React, { FC } from 'react';
import { UserExperiencesSection } from '../../components/home/experiences/UserExperiencesSec/UserExperienceSection';
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
         <UserExperiencesSection />
      </>
   );
};

export default Home;
