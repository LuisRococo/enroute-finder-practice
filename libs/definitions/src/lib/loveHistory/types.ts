import { Types } from 'mongoose';

export enum PossibleInteractionEnum {
  NO = 'No',
  YES = 'Yes',
  SUPER_YES = 'Super yes',
}

export interface LoveHistory {
  date: Date;
  target_user: Types.ObjectId;
  result: PossibleInteractionEnum;
}
