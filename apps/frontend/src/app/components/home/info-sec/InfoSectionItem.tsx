import React, { FC } from 'react';
import { InfoSecData } from './infoSecData';

const InfoSectionItem: FC<InfoSecData> = ({ image, title, content }) => {
  return (
    <div className="hm-info-item">
      <img className="hm-info-item__img" src={image} alt="image-person" />
      <p className="hm-info-item__title">{title}</p>
      <p className="hm-info-item__content">{content}</p>
    </div>
  );
};

export default InfoSectionItem;
