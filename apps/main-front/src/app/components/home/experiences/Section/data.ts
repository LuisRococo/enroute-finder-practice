import girlImg1 from '../../../../../assets/imgs/userExperience/girl-1.jpg';
import girlImg2 from '../../../../../assets/imgs/userExperience/girl-2.jpg';
import girlImg3 from '../../../../../assets/imgs/userExperience/girl-3.jpg';
import girlImg4 from '../../../../../assets/imgs/userExperience/girl-4.jpg';

export interface UserExperienceInterface {
   name: string;
   age: number;
   desc: string;
   img: string;
}

export const userExperiences: UserExperienceInterface[] = [
   {
      name: 'Susana',
      age: 23,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: girlImg1,
   },
   {
      name: 'Maria',
      age: 25,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: girlImg2,
   },
   {
      name: 'Fernanda',
      age: 27,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: girlImg3,
   },
   {
      name: 'Lucia',
      age: 20,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: girlImg4,
   },
];
