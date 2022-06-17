import React, { FC } from 'react';
import './styles.scss';
import { Button as ButtonFinder } from '@finder/components';

const LandPage: FC = () => {
   return (
      <div className="land-pg wrapper over-ride">
         <h3 className="land-pg__title">Find your companions on Finder !</h3>
         <p className="land-pg__sub-title">Great people awaits you on this website</p>
         <ButtonFinder className="override btn" text="Explore" />
      </div>
   );
};

export default LandPage;
