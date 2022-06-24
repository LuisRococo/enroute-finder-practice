import {
   GenderEnum,
   HoroscopeEnum,
   LookingforEnum,
   mockPersonalQuestionsList,
   PersonalQuestion,
} from '@finder/definitions';
import React from 'react';
import ProfileGallery from '../../components/profile/ProfileGallery';
import ProfileHeader, { ProfileHeaderInterface } from '../../components/profile/ProfileHeader';
import ProfileQuestions from '../../components/profile/ProfileQuestions';
import './styles.scss';

const profileHeaderMockup: ProfileHeaderInterface = {
   age: 21,
   city: 'CDMX',
   country: 'Mexico',
   gender: GenderEnum.Female,
   image_profile:
      'https://www.okchicas.com/wp-content/uploads/2020/08/outfits-y-conjuntos-con-todo-el-estilo-de-una-e-girl-17.png',
   last_name: 'Horia',
   name: 'Susana',
   lookingfor: LookingforEnum.Friendship,
   preference: 'Big Carrots',
   verified: true,
   description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
   horoscope: HoroscopeEnum.AQUARIUS,
};

const galleryMockup: string[] = [
   'https://www.okchicas.com/wp-content/uploads/2020/08/outfits-y-conjuntos-con-todo-el-estilo-de-una-e-girl-17.png',
   'https://www.okchicas.com/wp-content/uploads/2020/08/outfits-y-conjuntos-con-todo-el-estilo-de-una-e-girl-17.png',
   'https://www.okchicas.com/wp-content/uploads/2020/08/outfits-y-conjuntos-con-todo-el-estilo-de-una-e-girl-17.png',
   'https://www.okchicas.com/wp-content/uploads/2020/08/outfits-y-conjuntos-con-todo-el-estilo-de-una-e-girl-17.png',
   'https://www.okchicas.com/wp-content/uploads/2020/08/outfits-y-conjuntos-con-todo-el-estilo-de-una-e-girl-17.png',
   'https://www.okchicas.com/wp-content/uploads/2020/08/outfits-y-conjuntos-con-todo-el-estilo-de-una-e-girl-17.png',
];

const Profile = () => {
   return (
      <div className="profile-pg">
         <div className="profile-pg__header-cont wrapper">
            <ProfileHeader {...profileHeaderMockup} />
         </div>

         <ProfileGallery pictures={galleryMockup} />

         <div className="profile-pg__questions-wrapper wrapper">
            <ProfileQuestions questions={mockPersonalQuestionsList} />
         </div>
      </div>
   );
};

export default Profile;
