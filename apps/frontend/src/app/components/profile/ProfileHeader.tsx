import { About, Gender, Horoscope, Lookingfor } from '@finder/definitions';
import React, { FC } from 'react';
import ProfileHeadItem from './ProfileHeadItem';
import ProfileVerified from './ProfileVerified';
import './styles.scss';
import { BsFillBookmarkHeartFill, BsFillFilePersonFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { GiUbisoftSun } from 'react-icons/gi';

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
    <div className="profile-pg__sec">
      <div className="profile-hd__content">
        <div className="profile-hd__img-area">
          <img src={image_profile} alt="" />
        </div>
        <div className="profile-hd__cont-area">
          {verified && <ProfileVerified />}
          <p className="profile-hd__name">
            {name} {last_name}, <span className="profile-hd__age">{age}</span>
          </p>
          <p className="profile-hd__sub-title">{gender}</p>

          <div className="profile-hd__desc-cont">
            <div className="profile-hd__item-title">Description</div>
            <p className="profile-hd__desc">{description}</p>
          </div>

          <div className="profile-hd__items">
            {city && country && (
              <ProfileHeadItem
                title="City"
                content={country + ', ' + city}
                Icon={ImLocation}
              />
            )}

            <ProfileHeadItem
              title="Looking For: "
              content={lookingfor}
              Icon={BsFillBookmarkHeartFill}
            />

            <ProfileHeadItem
              title="Preference: "
              content={preference}
              Icon={BsFillFilePersonFill}
            />

            <ProfileHeadItem
              title="Horoscope: "
              content={horoscope}
              Icon={GiUbisoftSun}
            />
          </div>
        </div>
      </div>
      <div className="profile-hd__line-decor"></div>
    </div>
  );
};

export default ProfileHeader;
