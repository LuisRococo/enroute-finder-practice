import React, { FC } from 'react';
import FindCardBtn, { FindCardBtnInterface } from './FindCardBtn';
import './styles.scss';
import { FaThumbsDown, FaThumbsUp, FaRegHeart } from 'react-icons/fa';
import { IoIosHeart, IoIosSquare } from 'react-icons/io';
import { Gender } from '@finder/definitions';

export interface FindCardInterface {
  image: string;
  name: string;
  age: number;
  gender: Gender;
}

const iconSize = '25px';

const btnConfig: any = {
  like: {
    icon: FaThumbsUp,
    size: iconSize,
    color: '#31e862',
  },
  dislike: {
    icon: FaThumbsDown,
    size: iconSize,
    color: '#eb4034',
  },
  superLike: {
    icon: IoIosHeart,
    size: '30px',
    color: '#d64bf2',
  },
};

const FindCard: FC<FindCardInterface> = ({ name, image, age, gender }) => {
  return (
    <div className="fn-card fn-card__border-top fn-card__border-down">
      <div className="fn-card__img-area">
        <img
          className="fn-card__user-img fn-card__border-top"
          src={image}
          alt="person image"
        />
        <div className="fn-card__user-info">
          <p className="fn-card__name">
            {name}, <span className="fn-card__age">{age}</span>
          </p>
          <div className="fn-card__more-info-cont">
            <IoIosSquare size={'10px'} color="#ffffff" />
            <p className="fn-card__more-info">Gender: {gender}</p>
          </div>
        </div>
      </div>
      <div className="fn-card__options">
        <FindCardBtn
          Icon={btnConfig.like.icon}
          size={btnConfig.like.size}
          color={btnConfig.like.color}
        />
        <FindCardBtn
          Icon={btnConfig.superLike.icon}
          size={btnConfig.superLike.size}
          color={btnConfig.superLike.color}
        />
        <FindCardBtn
          Icon={btnConfig.dislike.icon}
          size={btnConfig.dislike.size}
          color={btnConfig.dislike.color}
        />
      </div>
    </div>
  );
};

export default FindCard;
