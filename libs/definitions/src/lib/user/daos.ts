import { Types } from 'mongoose';

export interface CreateUserDAO {
   email: string;
   id_user: Types.ObjectId;
}

export interface DeleteUserDAO {
   deleted: boolean;
}
