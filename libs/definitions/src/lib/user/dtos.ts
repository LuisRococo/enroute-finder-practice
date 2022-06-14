import { GenderEnum, LookingforEnum } from './types';
import { Types } from 'mongoose';
import { About } from '../about';

export class CreateUserDTO {
   name: string;
   last_name?: string;
   password: string;
   email: string;
   city?: string;
   country?: string;
   phone: string;
   age: number;
   gender: GenderEnum;
   preference: string;
   about: About;
   lookingfor: LookingforEnum;
   verified = false;
}

export class LoginDTO {
   email: string;
   password: string;
}

export interface GetUserDTO {
   _id?: Types.ObjectId;
   name?: string;
   last_name?: string;
   email?: string;
}

export interface GetUsersDTO {
   limit?: number;
   offset?: number;
}
