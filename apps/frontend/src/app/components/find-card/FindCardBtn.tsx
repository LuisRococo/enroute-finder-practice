import React, { FC } from 'react';
import { IconType } from 'react-icons';
import './styles.scss';

export interface FindCardBtnInterface {
  Icon: IconType;
  size: string;
  color?: string;
}

const FindCardBtn: FC<FindCardBtnInterface> = ({ Icon, size, color }) => {
  return (
    <div className="fn-card__btn">
      <Icon size={size} color={color} />
    </div>
  );
};

export default FindCardBtn;
