import { Types } from 'mongoose';

export interface PersonalQuestion {
   _id: Types.ObjectId;
   question: string;
   answer: string;
}

export interface CreatePersonalQuestionDTO {
   question: string;
   answer: string;
}
