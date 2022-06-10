import { Types } from 'mongoose';
import { LoveHistory, PossibleInteractionEnum } from './types';

export const mockLoveHistory: LoveHistory[] = [
  {
    date: new Date(),
    target_user: new Types.ObjectId(),
    result: PossibleInteractionEnum.YES,
  },
  {
    date: new Date(),
    target_user: new Types.ObjectId(),
    result: PossibleInteractionEnum.YES,
  },
];
