import { GetVerificationCodeDAO } from '@finder/definitions';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserDocument, UserSchema } from '../../models/user';
import { VerificationDocument } from '../../models/verification';
import { generateVerificationCode } from '../../utils/auth';

@Injectable()
export default class VerificationCodeService {
   constructor(
      @InjectModel('Verification') private verificationModel: Model<VerificationDocument>,
      private readonly mailerService: MailerService
   ) {}

   async getVerificationCode(user_id: Types.ObjectId): Promise<GetVerificationCodeDAO> {
      let verificationDoc: VerificationDocument = undefined;
      let code: string = undefined;

      verificationDoc = await this.verificationModel.findOne({ user_id: user_id });
      if (verificationDoc) code = verificationDoc.code;

      const verificationDAO: GetVerificationCodeDAO = { code: code };
      return verificationDAO;
   }

   async sendVerificationCode(user_id: Types.ObjectId, email: string): Promise<void> {
      let verificationDoc: VerificationDocument = undefined;

      verificationDoc = await this.verificationModel.findOne({ user_id: user_id });

      const code: string = generateVerificationCode();
      if (verificationDoc) {
         verificationDoc.code = code;
      } else {
         verificationDoc = new this.verificationModel({
            code: code,
            user_id: user_id,
            _id: new Types.ObjectId(),
         });
      }
      await verificationDoc.save();

      await this.mailerService.sendMail({
         from: 'pacoelauxiliar@gmail.com',
         to: email,
         subject: 'Tu codigo de verificación',
         template: './verificationMail',
         context: {
            code: code,
         },
      });
   }
}
