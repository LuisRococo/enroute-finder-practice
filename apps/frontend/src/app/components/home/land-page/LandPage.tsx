import React, { FC } from 'react';
import './styles.scss';

const LandPage: FC = () => {
  return (
    <div className="land-pg wrapper">
      <h3 className="land-pg__title">Find your companions on Finder !</h3>
      <p className="land-pg__sub-title">
        Great people awaits you on this website
      </p>
      <button className="btn">Explore</button>
    </div>
  );
};

export default LandPage;
