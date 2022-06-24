import React, { FC } from 'react';
import './styles.scss';
import { Button as ButtonFinder } from '@finder/components';
import { Link } from 'react-router-dom';
import routes from 'apps/main-front/src/util/routes';

const LandPage: FC = () => {
   return (
      <div className="land-pg wrapper over-ride">
         <h3 className="land-pg__title">Find your new friends on Finder !</h3>
         <p className="land-pg__sub-title">Great people awaits you on this website</p>
         <Link to={routes.find.url}>
            <ButtonFinder className="override btn" text="Explore" />
         </Link>
      </div>
   );
};

export default LandPage;
