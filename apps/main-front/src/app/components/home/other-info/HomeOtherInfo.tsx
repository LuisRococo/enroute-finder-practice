import React, { FC } from 'react';
import phoneImg from '../../../../assets/imgs/red-phone.png';
import { SmallCard } from './SmallCard';
import './styles.scss';
import { RiHeartsFill } from 'react-icons/ri';
import { items } from './data';

const HomeOtherInfo: FC = () => {
   return (
      <div className="hm-other-info wrapper">
         <h3 className="hm-other__title">About us</h3>
         <p className="hm-other__sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>

         <hr className="divisor" />

         <div className="hm-other__items-cont">
            {items.map((item, key) => {
               return <SmallCard {...item} key={`small-card-${key}`} />;
            })}
         </div>
      </div>
   );
};

export default HomeOtherInfo;
