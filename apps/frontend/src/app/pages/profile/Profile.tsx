import React from 'react';
import ProfileHeader, {
  ProfileHeaderInterface,
} from '../../components/profile/ProfileHeader';
import './styles.scss';

const profileHeaderMockup: ProfileHeaderInterface = {
  age: 21,
  city: 'Navojoa',
  country: 'Mexico',
  gender: 'Female',
  image_profile:
    'https://www.okchicas.com/wp-content/uploads/2020/08/outfits-y-conjuntos-con-todo-el-estilo-de-una-e-girl-17.png',
  last_name: 'Horia',
  name: 'Susana',
  lookingfor: 'Friendship',
  preference: 'Big Carrots',
  verified: true,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  horoscope: 'Aquarius',
};

const Profile = () => {
  return (
    <div className="profile-pg">
      <div className="profile-pg__header-cont wrapper">
        <ProfileHeader {...profileHeaderMockup} />
      </div>
    </div>
  );
};

export default Profile;
