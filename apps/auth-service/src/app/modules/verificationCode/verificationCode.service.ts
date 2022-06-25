import { GetVerificationCodeDAO } from '@finder/definitions';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserDocument, UserSchema } from '../../models/user';
import { VerificationDocument } from '../../models/verification';
import { generateVerificationCode } from '../../utils/auth';
import UserService from '../user/user.service';

@Injectable()
export default class VerificationCodeService {
   constructor(
      @InjectModel('Verification') private verificationModel: Model<VerificationDocument>,
      private readonly userService: UserService
   ) {}

   async getVerificationCode(user_id: string): Promise<GetVerificationCodeDAO> {
      const userObjectId = new Types.ObjectId(user_id);
      const user: UserDocument = await this.userService.getUser({ _id: userObjectId });
      let verificationDoc: VerificationDocument = undefined;

      if (user) {
         verificationDoc = await this.verificationModel.findOne({ user_id: userObjectId });
      }

      const code: string = generateVerificationCode();
      if (verificationDoc) {
         verificationDoc.code = code;
      } else {
         verificationDoc = new this.verificationModel({
            code: code,
            user_id: user._id,
            _id: new Types.ObjectId(),
         });
      }
      await verificationDoc.save();

      const verificationDAO: GetVerificationCodeDAO = { code: code };
      return verificationDAO;
   }

   async sendVerificationCode(user_id: Types.ObjectId, email: string): Promise<void> {}
}
