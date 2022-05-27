import React, { FC } from 'react';
import './styles.scss';
import infoSecData, { InfoSecData } from './infoSecData';
import InfoSectionItem from './InfoSectionItem';

const InfoSection: FC = () => {
  return (
    <div className="hm-info-sec wrapper">
      <div className="hm-info-sec__titles">
        <h4 className="hm-info-sec__title">Put your trust into us !</h4>
        <p className="hm-info-sec__sub-title">
          All our clients have found their special partners
        </p>
      </div>

      <hr className="divisor" />

      <div className="hm-info-sec__items">
        {infoSecData.map((info: InfoSecData, key: number) => {
          return <InfoSectionItem {...info} key={`info-item-${key}`} />;
        })}
      </div>
    </div>
  );
};

export default InfoSection;
