import { About, Gender, Horoscope, Lookingfor } from '@finder/definitions';
import React, { FC } from 'react';
import './styles.scss';

export interface ProfileHeaderInterface {
  name: string;
  last_name?: string;
  city?: string;
  country?: string;
  image_profile: string;
  age: number;
  gender: Gender;
  preference: string;
  lookingfor: Lookingfor;
  verified: boolean;
  horoscope?: Horoscope;
  description: string;
}

const ProfileHeader: FC<ProfileHeaderInterface> = ({
  name,
  last_name,
  age,
  city,
  country,
  gender,
  image_profile,
  lookingfor,
  preference,
  verified,
  description,
  horoscope,
}) => {
  return (
    <div className="profile-hd">
      <div className="profile-hd__content">
        <div className="profile-hd__img-area">
          <img src={image_profile} alt="" />
        </div>
        <div className="profile-hd__cont-area">
          <p>Luis Ro</p>
        </div>
      </div>
      <div className="profile-hd__line-decor"></div>
    </div>
  );
};

export default ProfileHeader;
