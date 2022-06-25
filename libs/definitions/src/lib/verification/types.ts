import { Types } from 'mongoose';

export interface VerificationCodeInterface {
   _id: Types.ObjectId;
   user_id: Types.ObjectId;
   code: string;
   date: Date;
}

export interface GetVerificationCodeDAO {
   code: string;
}
