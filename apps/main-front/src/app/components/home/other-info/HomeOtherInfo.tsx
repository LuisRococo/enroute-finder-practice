import React, { FC } from 'react';
import phoneImg from '../../../../assets/imgs/red-phone.png';
import './styles.scss';

const HomeOtherInfo: FC = () => {
  return (
    <div className="hm-other-info wrapper">
      <div className="hm-other-info__data-cont">
        <h3>Find your new friends on Finder !</h3>

        <hr className="divisor" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="hm-other-info__img-cont">
        <img src={phoneImg} alt="" />
      </div>
    </div>
  );
};

export default HomeOtherInfo;
