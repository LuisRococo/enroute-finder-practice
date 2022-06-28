import { Types } from 'mongoose';
import { CreateUserDAO } from '../user';

export interface VerificationCodeInterface {
   _id: Types.ObjectId;
   user_id: Types.ObjectId;
   code: string;
   date: Date;
}

export interface GetVerificationCodeDAO {
   code: string;
}

export interface validateVerificationCodeDTO extends CreateUserDAO {
   code: string;
}
