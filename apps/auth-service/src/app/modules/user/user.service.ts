import {
   CreateUserDAO,
   CreateUserDTO,
   DeleteUserDAO,
   GetUserDTO,
   GetUsersDTO,
   LoginDTO,
   validateVerificationCodeDTO,
} from '@finder/definitions';
import { Get, HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hashPassword } from 'apps/auth-service/src/app/utils/auth';
import { Exception } from 'handlebars';
import { Model, Types } from 'mongoose';
import { UserDocument } from '../../models/user';
import { VerificationDocument } from '../../models/verification';
import AboutService from '../about/about.service';
import VerificationCodeService from '../verificationCode/verificationCode.service';

@Injectable()
export default class UserService {
   constructor(
      @InjectModel('User') private userModel: Model<UserDocument>,
      private readonly aboutService: AboutService,
      private readonly verificationService: VerificationCodeService
   ) {}

   async getUser(userFilter: GetUserDTO): Promise<UserDocument> {
      const user = await this.userModel.findOne(userFilter).populate({
         path: 'about',
         populate: { path: 'personal_questions', model: 'PersonalQuestion' },
      });
      return user;
   }

   async getAllusers(queryOptions: GetUsersDTO): Promise<UserDocument[]> {
      return await this.userModel
         .find()
         .limit(
            queryOptions.limit && queryOptions.limit > 0 && queryOptions.limit <= 10
               ? Math.round(queryOptions.limit)
               : 10
         )
         .skip(
            queryOptions.offset && queryOptions.offset > 0 && queryOptions.offset <= 10
               ? Math.round(queryOptions.offset)
               : 0
         );
   }

   async createUser(user: CreateUserDTO): Promise<CreateUserDAO> {
      const createdAbout = await this.aboutService.createAbout(user.about);

      const hashedPassword: string = hashPassword(user.password);
      user.password = hashedPassword;

      let userValidated = process.env.VERIFICATION_MAIL === 'true' ? false : true;

      const createdUser = await this.userModel.create({
         _id: new Types.ObjectId(),
         ...user,
         about: createdAbout._id,
         verified: userValidated,
      });

      try {
         this.verificationService.sendVerificationCode(createdUser._id, createdUser.email);
      } catch (error) {
         throw new HttpException('Amazon SES error', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      const response: CreateUserDAO = {
         email: createdUser.email,
         id_user: createdUser._id,
      };

      return response;
   }

   async findUserByLogin(info: LoginDTO): Promise<UserDocument | undefined> {
      const user = await this.userModel.findOne({
         password: info.password,
         email: info.email,
      });

      return user;
   }

   async deleteUser(user_id: Types.ObjectId): Promise<DeleteUserDAO> {
      const userDocument: UserDocument = await this.userModel.findById(user_id);
      await this.aboutService.deleteAbout(userDocument.about._id);

      await this.userModel.findByIdAndDelete(user_id);

      const response: DeleteUserDAO = {
         deleted: true,
      };
      return response;
   }

   async validateAccount(verifyDTO: validateVerificationCodeDTO): Promise<void> {
      const codeDocument: VerificationDocument =
         await this.verificationService.getVerificationCodeWithUser(
            verifyDTO.id_user,
            verifyDTO.code
         );
      if (!codeDocument) {
         throw new HttpException('Code does not exists on user', HttpStatus.UNAUTHORIZED);
      }

      const userDocument: UserDocument = await this.userModel.findById(verifyDTO.id_user);
      userDocument.verified = true;
      await userDocument.save();
   }
}
