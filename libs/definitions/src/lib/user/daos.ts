import { CreateAboutDTO } from '../about';
import { GenderEnum, LookingforEnum } from './types';

export interface CreateUserDAO {
   name: string;
   last_name?: string;
   image_profile: string;
   email: string;
   phone: string;
   age: number;
   gender: GenderEnum;
   preference: string;
   lookingfor: LookingforEnum;
}

export interface DeleteUserDAO {
   deleted: boolean;
}
