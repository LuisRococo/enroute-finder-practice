import { GetVerificationCodeDAO, validateVerificationCodeDTO } from '@finder/definitions';
import { MailerService } from '@nestjs-modules/mailer';
import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

   async getVerificationCodeWithUser(id_user: Types.ObjectId, code: string) {
      const codeDocument: VerificationDocument = await this.verificationModel.findOne({
         code: code,
         id_user: id_user,
      });
      return codeDocument;
   }

   async sendVerificationCode(user_id: Types.ObjectId, email: string): Promise<void> {
      let verificationDoc: VerificationDocument = undefined;
      const codeLenght = 5;

      verificationDoc = await this.verificationModel.findOne({ user_id: user_id });

      const code: string = generateVerificationCode(codeLenght);
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
