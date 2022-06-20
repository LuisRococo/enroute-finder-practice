import React, { FC } from 'react';
import { IconType } from 'react-icons/lib';

export interface SmallCardInterface {
   Icon: IconType;
   title: string;
   info: string;
   iconColor?: string;
}

export const SmallCard: FC<SmallCardInterface> = ({ Icon, title, info, iconColor = '#990099' }) => {
   return (
      <div className="sm-card">
         <Icon className="sm-card__icon" style={{ color: iconColor }} />
         <p className="sm-card__title">{title}</p>
         <p className="sm-card__info">{info}</p>
      </div>
   );
};
